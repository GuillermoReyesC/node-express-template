const axios = require('axios');

const getCredit = async () => {
    const request = await axios.get(process.env.API_CREDIT_URL);
    return request.data;
}

module.exports = getCredit;