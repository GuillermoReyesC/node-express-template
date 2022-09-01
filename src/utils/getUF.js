const axios = require('axios')

const getUF = async () => {
    const request = await axios.get(process.env.API_DIVISAS)
    return request.divisas.uf
}

module.exports = getUF