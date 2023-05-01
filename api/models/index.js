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
  OwnerTable.hasOne(OwnedTable)
  OwnedTable.belongsTo(OwnerTable, {
    foreignKey: {
      name: foreignKey,
      allowNull: false,
    },
  })
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
  OwnerTable.hasMany(OwnedTable, { ...(ownedAs ? { as: ownedAs } : {}) })
  OwnedTable.belongsTo(OwnerTable, {
    foreignKey: {
      name: foreignKey,
      allowNull,
      primaryKey,
    },
    ...(ownerAs ? { as: ownerAs } : {}),
  })
}

function initBelongsToManyRelationship(OwnerTable, OwnedTable, through, as) {
  OwnerTable.belongsToMany(OwnedTable, { through })
  OwnedTable.belongsToMany(OwnerTable, { through, ...(as ? { as } : {}) })
}

// Algorithm <= AlgorithmExample
initHasManyRelationship(Algorithm, AlgorithmExample, 'AlgorithmId')

// Algorithm <= Submission
initHasManyRelationship(Algorithm, Submission, 'AlgorithmId')

// Algorithm <= Test
initHasManyRelationship(Algorithm, Test, 'AlgorithmId')

// Category <= SubCategory
initHasManyRelationship(Category, SubCategory, 'CategoryId')

// Codebook <= Submission
initHasManyRelationship(Codebook, Submission, 'CodebookId')

// Language <= Submission
initHasManyRelationship(Language, Submission, 'LanguageId')

// SubCategory <= Algorithm
initHasManyRelationship(SubCategory, Algorithm, 'SubCategoryId')

// Submission == Test
initBelongsToManyRelationship(Test, Submission, 'TestResult', 'tests')

// Submission <- Submission
initHasManyRelationship(
  Submission,
  Submission,
  'ParentId',
  'parent',
  'child',
  false,
  true
)

// User <- Codebook
initHasOneRelationship(User, Codebook, 'UserId')

// User <= Handle
initHasManyRelationship(User, Handle, 'UserId', null, null, true)

// TODO: Check if a reset password request already exists before inserting
// User <- ResetPassword
initHasOneRelationship(User, ResetPassword, 'UserId')

// User == Submission
initBelongsToManyRelationship(User, Submission, 'SubmissionAuthor', 'authors')
initBelongsToManyRelationship(User, Submission, 'SubmissionUpvoter', 'upvoters')
initBelongsToManyRelationship(User, Submission, 'SubmissionForker', 'forkers')

// User <- Verification
initHasOneRelationship(User, Verification, 'UserId')

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
