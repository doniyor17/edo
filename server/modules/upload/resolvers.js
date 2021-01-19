// const { join, parse } = require('path')
const { createWriteStream } = require('fs')
const fs = require('fs')
const ApolloError = require('apollo-server-express')
const shortid = require('shortid')

module.exports =  {
    Query: {
        hello: () => "Hello World"
    },
    Mutation: {
        uploadFile: async (_, { file }) => {
            console.log(file)
            try {
            	// const { createReadStream, filename, mimetype, encoding } = await file
             //    let { ext, name } = parse(filename)
             //    let stream = createReadStream()
             //    name = name.replace(/([^a-z0-9]+)/gi, '-').replace(' ', '_')
             //    let serverFile = join(__dirname, `../../uploadedFiles/${name}${ext}`)
             //    let writeStream = await createWriteStream(serverFile)
             //    await stream.pipe(writeStream)
             //    return 'salom'
                const { createReadStream, filename, mimetype, encoding } = await file
                const id = shortid.generate()7
                const stream = createReadStream()
                const savedFileName = `${id}-${filename.replace(/ /g,'')}`
                const path = `./src/uploadedFiles/${savedFileName}`
                return new Promise( async (resolve, reject) => {
                    let writePathToDataBase = await productModel.insertProductFile(savedFileName, productId)
                    return stream
                      .pipe(fs.createWriteStream(path))
                      .on("finish", () => resolve({ path, filename, mimetype, encoding, savedFileName }))
                      .on("error", reject)
                })
                console.log( file)
            } catch (err) {
                throw new Error(err.message);
            }
        },
    }
}