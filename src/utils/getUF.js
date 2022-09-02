const axios = require('axios')

const getUF = async () => {
  const UF = await axios
    .get(process.env.API_DIVISAS_UF, { timeout: 3000 })
    .then((data) => {
      return data.uf.valor
    })
    .catch((err) => {
      return process.env.UF
    })
  return UF
}

module.exports = getUF
