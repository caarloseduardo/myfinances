import React from 'react';

import formatNumberToCurrency from './formatNumberToCurrency';

export function handleAmountMask(amountInputRef: React.RefObject<HTMLInputElement>) {
  if (!amountInputRef.current) {
    return;
  }

  let numbers = '';

  const [splittedText, lastCharacters] = amountInputRef.current.value.split(',');

  if (lastCharacters) {
    const lastNumber = lastCharacters.length === 3 ? lastCharacters.slice(-1) : '';

    numbers = `${splittedText} + ${lastNumber}`.replace(/\D/g, '');
  } else {
    numbers = splittedText.replace(/\D/g, '');
  }

  amountInputRef.current.value = formatNumberToCurrency(Number(numbers));
}
