
import express from 'express'
const app = express()


app.get('/', (req, res) => {
  res.send('oeeddla mundo!')
})

 export default app
