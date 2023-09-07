import { Sequelize, DataTypes } from 'sequelize'


const config = {
  database: 'agilusshortlink',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'agilusshortlink.sqlite',
    define: {
      underscore: true
    }
  }
}

const sequelize = new Sequelize(config.databse, config.username, config.password, config.params)

const Links = sequelize.define('Links', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  LinkOriginal: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ShortLink: {
    type: DataTypes.STRING,
    allowNull: false
  },
  DataCriacao: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Clicks: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
})

const db = {
  Sequelize,
  sequelize,
  models: {Links}
}

export default db