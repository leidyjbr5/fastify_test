import Sequelize from 'sequelize'

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: './database.sqlite',
})

await sequelize.sync({})

const Organization = sequelize.define('Organization', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
})

export default Organization
