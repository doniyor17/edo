const { join, parse } = require('path')
const fs = require('fs')
const ApolloError = require('apollo-server-express')
const shortid = require('shortid')

module.exports =  {
    Query: {
        hello: () => "Hello World"
    },
    Mutation: {
        uploadFile: async (_, { file }) => {
            try {
            	const { createReadStream, filename, mimetype, encoding } = await file
            	console.log(createReadStream)
				const id = shortid.generate()
				const stream = createReadStream()
				const savedFileName = `${id}-${filename.replace(/ /g,'')}`
				const path = `./uploadedFiles/${savedFileName}`
				return new Promise( async (resolve, reject) => {
    				return stream
      				.pipe(fs.createWriteStream(path))
      				.on("finish", () => resolve({ path, filename, mimetype, encoding, savedFileName }))
      				.on("error", reject)
				})
            } catch (err) {
                throw new Error(err.message);
            }
        },
    }
}