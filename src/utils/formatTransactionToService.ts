export default function formatTransactionToService(
  description: string,
  amount: string,
  date: string,
  option: string,
) {
  const newDate = new Date(date);

  let amountWithSignal = '';
  const [splittedAmount] = amount.split(',');
  const amountNumbers = splittedAmount.replace(/\D/g, '');

  if (option === 'credit') {
    amountWithSignal = `-${amountNumbers}`;
  }

  if (option === 'debit') {
    amountWithSignal = amountNumbers;
  }

  return {
    description,
    amount: Number(amountWithSignal),
    date: newDate,
  };
}
