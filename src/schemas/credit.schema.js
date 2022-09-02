const yup = require("yup");

module.exports = yup.object().shape({
  uf: yup.number().required(),
  user: yup.object({
    rut: yup.string().required(),
    name: yup.string().required(),
    last_name: yup.string().required()
  }),
  dues: yup.number().max(24).required(),
  date: yup.string().required()
});
