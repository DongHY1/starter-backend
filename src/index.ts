import cors from 'cors'
import express from 'express'

import { userRouter } from '@/routes/user'
const app = express()

app.use(cors())

app.use('/user', userRouter)

app.use('/', (req, res) => {
  res.end('Hello')
})

app.listen(3000, () => {
  console.log('App is listen??')
})
