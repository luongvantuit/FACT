export type Save = {
  name?: string;
  balance?: string;
  type?:
    | 'savings-pay-periodic-interest'
    | 'prepaid-interest-savings'
    | 'savings-in-installments'
    | 'send-ladder-savings'
    | 'term-deposit'
    | 'send-savings-without-term';
};
