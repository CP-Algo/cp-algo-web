const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: {
          args: 254,
          msg: 'Your full name can only be 254 caracters.',
        },
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        message: 'Username must be unique.',
        fields: [sequelize.fn('lower', sequelize.col('username'))],
      },
      validate: {
        min: {
          args: 3,
          msg: 'Username must start with a letter, have no spaces, and be at least 3 characters.',
        },
        max: {
          args: 40,
          msg: 'Username must start with a letter, have no spaces, and be at most 40 characters.',
        },
        is: {
          args: /^[A-Za-z][A-Za-z0-9_]+$/i, // must start with letter and only have letters, numbers, underscores
          msg: 'Username must start with a letter, have no spaces, and be 3 - 40 characters.',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Oops. Looks like you already have an account with this email address. Please try to login.',
        fields: [sequelize.fn('lower', sequelize.col('email'))],
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'The email you entered is invalid or is already in our system.',
        },
        max: {
          args: 254,
          msg: 'The email you entered is invalid or longer than 254 characters.',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val) {
        const hashedPassword = bcrypt.hashSync(val, 10)
        return this.setDataValue('password', hashedPassword)
      },
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    role: {
      type: DataTypes.ENUM('ADMIN', 'USER'),
      defaultValue: 'USER',
    },
    institution: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    submissions: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  })

  User.prototype.isValidPassword = async function (password) {
    return await new Promise((resolve, reject) => {
      bcrypt.compare(password, this.password, function (error, isMatch) {
        if (error) {
          reject(error)
        }
        resolve(isMatch)
      })
    })
  }
}
