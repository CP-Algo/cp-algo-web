const status = require('../../config/judge0_mappings/status')

module.exports = function getVerdictDescription(verdict) {
  return status.find(({id}) => id == verdict).description
}