import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import axios from 'axios'
import mongoose from 'mongoose'

dotenv.config();

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('CORS Server Running!')
})

app.get('/getAccessToken', async function (req, res) {
  const requestBody = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code: req.query.code,
    redirect_uri: process.env.GITHUB_REDIRECT_URI
  };

  try {
    const { data } = await axios.post('https://github.com/login/oauth/access_token/', requestBody, {
      headers: {
        "Accept": "application/json"
      }
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get access token' });
  }
})

app.get('/getUserData', async (req, res) => {
  await axios.get('https://api.github.com/user', {
    headers: {
      "Accept": "application/json",
      "Authorization": req.get("Authorization")
    }
  }).then((response) => {
    res.json(response.data);
  })
})


// DATABASE CONNECTION
mongoose.connect(`${process.env.MONGO_URL}`)
//const PORT = process.env.PORT || 8000;
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
    console.log(`App listening on port http://localhost:${process.env.PORT}/`);
  })
})
.catch((err)=>{
  console.log("MONGO DB connection failed!!!", err)

})
