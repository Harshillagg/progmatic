import bodyParser, { json } from 'body-parser'
import express, { application, response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Server Running!')
})

app.get('/getAccessToken', async function(req, res) {
  const params = `?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${req.query.code}`;
  await axios.post('https://github.com/login/oauth/access_token/', params, {
    headers: {
      "Accept": "application/json"
    }
  }).then((data) => {
    res.json(data);
  })
})

// app.get('/getUserData', async (req, res) => {
//   req.get("Authorization");
//   await axios.get('https://api.github.com/user', {
//     headers: {
//       "Accept": "application/json",
//       "Authorization": req.get("Authorization")
//     }
//   }).then((response) => {
//     res.json(response.data);
//   })
// })

app.listen(process.env.PORT || 8000, () => {
  console.log(`App listening on port http://localhost:${process.env.PORT}/`)
})
