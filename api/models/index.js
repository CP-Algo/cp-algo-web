const fs = require('fs')
const { Sequelize } = require('sequelize')
const { db, env } = require('../../config')
const sequelize = new Sequelize(db.url, { ...db, logging: false })

fs.readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach((file) => require(`./${file}`)(sequelize))

// Model Associations
const {
  Algorithm,
  AlgorithmExample,
  Category,
  Codebook,
  Handle,
  Language,
  ResetPassword,
  SubCategory,
  Submission,
  Test,
  User,
  Verification,
} = sequelize.models

function initHasOneRelationship(OwnerTable, OwnedTable, foreignKey) {
  OwnerTable.hasOne(OwnedTable, { foreignKey: { name: foreignKey, allowNull: false } })
  OwnedTable.belongsTo(OwnerTable, { foreignKey: { name: foreignKey, allowNull: false } })
}

function initHasManyRelationship(
  OwnerTable,
  OwnedTable,
  foreignKey,
  ownerAs,
  ownedAs,
  primaryKey = false,
  allowNull = false
) {
  OwnedTable.belongsTo(OwnerTable, {
    foreignKey: {
      name: foreignKey,
      allowNull,
      primaryKey,
    },
    ...(ownerAs ? { as: ownerAs } : {}),
  })
  OwnerTable.hasMany(OwnedTable, {
    foreignKey: {
      name: foreignKey,
      allowNull,
      primaryKey,
    },
    ...(ownedAs ? { as: ownedAs } : {})
  })
}

function initManyToManyRelationship(OwnerTable, OwnedTable, through, as) {
  OwnerTable.belongsToMany(OwnedTable, { through })
  OwnedTable.belongsToMany(OwnerTable, { through, ...(as ? { as } : {}) })
}

// Category <= SubCategory
initHasManyRelationship(Category, SubCategory, 'CategoryId')

// SubCategory <= Algorithm
initHasManyRelationship(SubCategory, Algorithm, 'SubCategoryId')

// Algorithm <= AlgorithmExample
initHasManyRelationship(Algorithm, AlgorithmExample, 'AlgorithmId')

// Algorithm <= Submission
initHasManyRelationship(Algorithm, Submission, 'AlgorithmId')

// Algorithm <= Test
initHasManyRelationship(Algorithm, Test, 'AlgorithmId')

// Codebook <= Submission
initHasManyRelationship(Codebook, Submission, 'CodebookId')

// Language <= Submission
initHasManyRelationship(Language, Submission, 'LanguageId')

// Submission <- Submission
initHasManyRelationship(Submission, Submission, 'ParentId', 'Parent', 'Children', false, true)

// User == Submission
initManyToManyRelationship(User, Submission, 'SubmissionAuthor', 'Authors')
initManyToManyRelationship(User, Submission, 'SubmissionUpvoter', 'Upvoters')
initManyToManyRelationship(User, Submission, 'SubmissionForker', 'Forkers')

// Test == Submission
initManyToManyRelationship(Test, Submission, 'TestResult', 'Tests')

// User <- Verification
initHasOneRelationship(User, Verification, 'UserId')

// TODO: Check if a reset password request already exists before inserting
// User <- ResetPassword
initHasOneRelationship(User, ResetPassword, 'UserId')

// User <- Codebook
initHasOneRelationship(User, Codebook, 'UserId')

// User <= Handle
initHasManyRelationship(User, Handle, 'UserId', null, null, true)

if (env !== 'production') {
  ;(async () => {
    await sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;'
    )
    await sequelize.sync({ force: true })
    // eslint-disable-next-line no-console
    console.log('Database synced by sequelize models')

    // Generate seed data for models
    require('../seeds')
  })()
}

module.exports = sequelize
