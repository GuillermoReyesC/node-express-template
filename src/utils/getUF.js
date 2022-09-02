const axios = require('axios')

const getUF = async () => {
    const request = await axios.get(process.env.API_DIVISAS_UF)
    return request.divisas.uf
}

module.exports = getUF