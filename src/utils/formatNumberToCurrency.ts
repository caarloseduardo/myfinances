export default function formatNumberToCurrency(number: number) {
  const formatToCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatToCurrency.format(number);
}
