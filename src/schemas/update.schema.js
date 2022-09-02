const yup = require("yup");

module.exports = yup.object().shape({
  uf: yup.number(),
  dues: yup.number().max(24),
  date: yup.string()
});
