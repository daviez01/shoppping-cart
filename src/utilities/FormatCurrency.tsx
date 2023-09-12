const CURRENCY_FORMATTER = new Intl.NumberFormat( undefined, {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

function FormatCurrency(number: number) {
  return (
    CURRENCY_FORMATTER.format(number)
  )
}

export default FormatCurrency
