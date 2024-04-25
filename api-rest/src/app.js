
import express from 'express'
const app = express()


app.get('/', (req, res) => {
  res.send('oeeedla mundo!')
})

 export default app