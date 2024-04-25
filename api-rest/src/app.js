
import express from 'express'
const app = express()


app.get('/', (req, res) => {
  res.send('oeeela mundo!')
})

 export default app