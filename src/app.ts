import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {
    serve as swaggerServe,
    setup as swaggerSetup,
} from 'swagger-ui-express'
import docs from 'docs'
import routes from 'routes'
import { generateAdmin } from 'helpers/dataGeneratorHelpers'

const app = express()

const corsOptions = {
    origin: [
        'http://localhost:4200', // your local webapp url
        // add more urls here to allow cross-origin
    ],
}

// middlewares
app.use(cors(corsOptions))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

const options = {
    swaggerOptions: { persistAuthorization: true },
}

// doc accessible in /docs route
app.use('/docs', swaggerServe, swaggerSetup(docs, options))

// create an admin when the server starts
app.listen(generateAdmin)

// use routes architecture
app.use('/', routes)

export default app
