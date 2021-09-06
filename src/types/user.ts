export type User = {
  name: string;
  balance: number;
  rank: 'Gold' | 'Sliver' | 'Platium';
  currency: 'USD' | 'VND';
  type: 'Personal' | 'Factory';
};
