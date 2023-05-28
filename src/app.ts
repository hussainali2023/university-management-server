import express, { Application, Request,  } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: any) => {
  res.send('Server is running properly ❤️❤️❤️❤️')
})

export default app
