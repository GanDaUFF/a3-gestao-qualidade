
import express from 'express'
const app = express()


app.get('/', (req, res) => {
  res.send('oeeeddla mundo!')
})

 export default app