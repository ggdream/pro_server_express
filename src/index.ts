import express, { Request, Response, Application } from 'express'


const app: Application = express()

app.listen(3000, () => {
    console.log('==>');
})
