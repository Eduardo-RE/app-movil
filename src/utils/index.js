export const formatCurrency = (value, currency) => {
  const options2 = { style: "currency", currency };
  const numberFormat2 = new Intl.NumberFormat("en-US", options2);

  return numberFormat2.format(value);
};
