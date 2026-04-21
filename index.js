import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {

   res.status(200).json({
      message: "Hello from the server"
   })
})

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`)
})