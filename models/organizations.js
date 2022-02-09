import Sequelize from 'sequelize'

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: './database.sqlite',
})

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
  logoName: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  logoPath: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
})

await sequelize.sync()

export default Organization
