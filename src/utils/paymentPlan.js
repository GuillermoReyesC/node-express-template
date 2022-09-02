const dayjs = require('dayjs');

const paymentPlan = (date, dues) => {
    const dates = []
    const now = dayjs(date);
    for(i=1; i < dues; i++) {
        dates.push(now.month(now.month() + i).date(5).hour(0).minute(0).second(0))
    }
    return dates
}

module.exports = paymentPlan