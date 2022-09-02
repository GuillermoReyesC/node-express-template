const formatCLP = (amount) => {
  return new Intl.NumberFormat('es-CL', {
    currency: 'CLP',
    style: 'currency',
  }).format(amount)
}

module.exports = formatCLP
