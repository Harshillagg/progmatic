import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import axios from "axios";
import mongoose from "mongoose";
import questionRouter from "./routes/question.routes.js";
import contestRouter from "./routes/contest.routes.js";
import UserModel from "./models/user.model.js";
import RoleModel from "./models/role.model.js";
import path, {dirname} from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, '../.env'), 
});


const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/question", questionRouter);
app.use("/api/contests", contestRouter);

app.get("/", (req, res) => {
  res.send("CORS Server Running!");
});

app.get("/getAccessToken", async function (req, res) {
  const requestBody = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code: req.query.code,
    redirect_uri: process.env.GITHUB_REDIRECT_URI,
  };

  try {
    const { data } = await axios.post(
      "https://github.com/login/oauth/access_token/",
      requestBody,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const { access_token } = data;

    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const { login, avatar_url } = userResponse.data;

    let user = await UserModel.findOne({ gitHubUsername: login });

    if (!user) {
      const participantRole = await RoleModel.findOne({ role: "participant" });

      user = new UserModel({
        _id: new mongoose.Types.ObjectId(),
        gitHubUsername: login,
        accessToken: access_token,
        profilePhoto: avatar_url,
        role: participantRole ? participantRole._id : null, // Assign default role
        contests: 0,
      });
    } else {
      user.accessToken = access_token;
    }

    await user.save();

    res.json({ message: "User authenticated and saved successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Failed to get access token" });
  }
});

app.get("/getUserData", async (req, res) => {
  try {
    const token = req.get("Authorization");

    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: token,
      },
    });

    const { login, avatar_url } = userResponse.data;

    let user = await UserModel.findOne({ gitHubUsername: login });

    if (user) {
      user.profilePhoto = avatar_url;
      await user.save();
    } else {
      res.status(404).json({ message: "User not found in database" });
      return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to get user data" });
  }
});
console.log(process.env.MONGO_URL);
// DATABASE CONNECTION
mongoose
  .connect(`${process.env.MONGO_URL}`)
  //const PORT = process.env.PORT || 8000;
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `App listening on port http://localhost:${process.env.PORT}/`
      );
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed!!!", err);
  });
