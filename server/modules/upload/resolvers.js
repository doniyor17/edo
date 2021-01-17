const path = require('path')
const fs = require('fs')
const getIpAdress = require('../../lib/getIpAddress')
const id = require('shortid')

module.exports = {
	Query: {
		uploads: () => "String"
	},
	Mutation: {
		uploadFile: async(_, { file }) => {
			try {
				const { createReadStream, filename, mimetype, encoding } = await file
				const id = shortid.generate()
				const stream = createReadStream()
				const savedFileName = `${id}-${filename.replace(/ /g,'')}`
				const path = `./uploadedFiles/${savedFileName}`
				return new Promise( async (resolve, reject) => {
					// let writePathToDataBase = await productModel.insertProductFile(savedFileName, productId)
    				return stream
      				.pipe(fs.createWriteStream(path))
      				.on("finish", () => resolve({ path, filename, mimetype, encoding, savedFileName }))
      				.on("error", reject)
				})
			}
			catch(error) {
				return new Error(error).message || error
			}
			
		}
	}
}