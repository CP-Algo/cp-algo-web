// Don't forget the field `forkedFrom` and `codebook`
// Also, authors should be an array field, because having a separate join table
// for this would blow up with a long enough fork chain

// Relations with Algorithm, Authors, Language, Codebook

const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Submission', {
    timeComplexity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    memoryComplexity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    length: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    executionTime: {
      type: DataTypes.INTEGER,
    },
    executionMemory: {
      type: DataTypes.INTEGER,
    },
    upvotes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    forks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  })
}
