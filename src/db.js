import Sequelize from 'sequelize'
import fs from 'fs'
import path from 'path'

let db = null

module.exports = app => {
    const config = app.libs.config
    
    if (!db) {
        const sequelize = new Sequelize(config.databse, config.username, config.password, config.params)

        db = {
            Sequelize,
            sequelize,
            models: {}
        }

        const dir = path.join(__dirname, 'models') 
        fs.readdirSync(dir).forEach(fileName => {
            const modelDir = path.join(dir, fileName)
            const model = sequelize.import(modelDir)
            db.models[model.name] = model
        })
    }

    return db
}