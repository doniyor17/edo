const http = require('http')
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

const modules = require('./modules')

const server = new ApolloServer({ modules })
server.applyMiddleware({ app, path: '/graphql' })

const httpServer = http.createServer(app)

httpServer.listen({ port: PORT }, () => {
	console.log('http://localhost:' + PORT + server.graphqlPath)
})