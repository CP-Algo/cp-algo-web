const axios = require('axios')
const { judge0 } = require('../../config')

async function runCode(code, language, input, expected_output) {
  input = Buffer.from(String(input)).toString('base64')
  code = Buffer.from(String(code)).toString('base64')

  const { data: { token } } = await axios.post(`${judge0}/submissions/?base64_encoded=true&wait=false`, {
    source_code: code,
    language_id: language,
    stdin: input,
    ...(expected_output ? { expected_output: toString(expected_output) } : {})
  })

  const pollForStatus = async (token) => {
    const { data } = await axios.get(`${judge0}/submissions/${token}/?base64_encoded=true`)
    if (data.status.id === 1 || data.status.id === 2) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return pollForStatus(token)
    }
    else return data 
  }

  let { status, stdout, stderr, time, memory } = await pollForStatus(token);
  time = parseFloat(time)
  stdout = Buffer.from(stdout || '', 'base64').toString('ascii')
  stderr = Buffer.from(stderr || '', 'base64').toString('ascii')

  return {
    status,
    stdout,
    stderr,
    time,
    memory,
  }
}

module.exports = runCode
