export type Card = {
  id: string;
  numberCard: string;
  name: string;
  expiryEnd: string;
  type: 'Debit' | 'Credit';
  nameBank: string;
  service: 'visa' | 'master-card';
  color?: string;
};
