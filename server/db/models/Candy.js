const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('Candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://tfkru2exl1c11xfih48h8lmg6y-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/image-coming-soon.jpg'
  },
  description: {
    type: Sequelize.TEXT
  },
  ingredients: {
    type: Sequelize.TEXT
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  price: {
    type: Sequelize.DECIMAL
  }
})
