const http = require('http')
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const modules = require('./modules')
const PORT = process.env.PORT || 4000
const path = require('path')

const app = express()

const server = new ApolloServer({ modules, })
server.applyMiddleware({ app, path: '/graphql'})

const httpServer = http.createServer(app)

app.use(express.static(path.join(__dirname, '/uploadedFiles')))

httpServer.listen({ port: PORT }, () => {
	console.log('http://localhost:' + PORT + server.graphqlPath)
})