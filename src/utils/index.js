import "intl";
import "intl/locale-data/jsonp/en"; // or any other locale you need

export const formatCurrency = (value, currency) => {
  const options2 = { style: "currency", currency };
  const numberFormat2 = new Intl.NumberFormat("en", options2);

  return numberFormat2.format(value);
};
