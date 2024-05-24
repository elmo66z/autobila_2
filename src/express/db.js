const {MongoClient} = require("mongodb")

const connection = async (app) => {
    const user = new MongoClient('mongodb://127.0.0.1:27017')
    const db = user.db('autobila')
    try {
        await user.connect()
        app.locals.user = user
        app.locals.db = db
        console.log("connected ....")
    } catch (error) {
        console.log(error)
    }
}


module.exports = connection