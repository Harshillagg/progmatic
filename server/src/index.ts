import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/', (req, res) => {
  res.send('Server Running!')
})

app.get('/getAccessToken', async function(req, res) {
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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}/`);
})
