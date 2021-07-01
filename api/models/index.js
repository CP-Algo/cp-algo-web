const fs = require('fs')
const { Sequelize } = require('sequelize')
const { db, env } = require('../../config')
const sequelize = new Sequelize(db)

fs.readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach((file) => require(`./${file}`)(sequelize))

// Model Associations
const {
  Algorithm,
  Category,
  Codebook,
  Handle,
  Language,
  ResetPassword,
  SubCategory,
  Submission,
  Test,
  TestResult,
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
  primaryKey = false
) {
  OwnerTable.hasMany(OwnedTable)
  OwnedTable.belongsTo(OwnerTable, {
    foreignKey: {
      name: foreignKey,
      allowNull: false,
      primaryKey,
    },
  })
}

function initBelongsToManyRelationship(OwnerTable, OwnedTable, through) {
  OwnerTable.belongsToMany(OwnedTable, { through })
  OwnedTable.belongsToMany(OwnerTable, { through })
}

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

// Submission <= TestResult
initHasManyRelationship(Submission, TestResult, 'SubmissionId')

// Test <= TestResult
initHasManyRelationship(Test, TestResult, 'TestId')

// User <- Codebook
initHasOneRelationship(User, Codebook, 'UserId')

// User <= Handle
initHasManyRelationship(User, Handle, 'UserId', true)

// TODO: Check if a reset password request already exists before inserting
// User <- ResetPassword
initHasOneRelationship(User, ResetPassword, 'UserId')

// User == Submission
initBelongsToManyRelationship(User, Submission, 'UserSubmissions')

// User <- Verification
initHasOneRelationship(User, Verification, 'UserId')

if (env !== 'production') {
  ;(async () => {
    await sequelize.sync({ sync: true })
    // eslint-disable-next-line no-console
    console.log('Database synced by sequelize models')
  })()
}

module.exports = sequelize
