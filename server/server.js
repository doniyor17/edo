const http = require('http')
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const modules = require('./modules')
const PORT = process.env.PORT || 4000
const path = require('path')

const app = express()

const server = new ApolloServer({ modules, })
server.applyMiddleware({ app, path: '/graphql'})

app.post('/upload', ( req, res) =>{
    if(req.files === null)
    {
        return res.status(400).json({msg:"No file was uploaded"});
    }
    const file = req.files.file;

    file.mv(`${__dirname}/server/uploadedFiles/${file.name}`,err =>{
        if(err){
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({fileName:file.name,filePath:`/uploads/${file.name}`});
    })
})

const httpServer = http.createServer(app)

app.use(express.static('./server/uploadedFiles'))

httpServer.listen({ port: PORT }, () => {
	console.log('http://localhost:' + PORT + server.graphqlPath)
})