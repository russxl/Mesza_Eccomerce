interface FormatCurrencyProps { 
  number: number;
  locale?: string;
  currency?: string;
}

export const formatCurrency = ({ number, locale = 'en-US', currency = 'PHP' }: FormatCurrencyProps) => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(number);
  };

export const formatCurrencySigns = (number: number, currencyCode = 'PHP', locale = 'en-US') => {
    if (typeof number !== 'number') {
      return '';
    }
    return number.toLocaleString(locale, {
      style: 'currency',
      currency: currencyCode,
    });
  };