import {Spending} from '../types/spending';

const listSpending: Array<Spending> = [
  {
    id: '1',
    increase: false,
    name: 'Highlands Coffee',
    service: true,
    value: 10,
    date: '23:26PM - 05/09/2021',
    message: 'Payment service Highlands Coffee',
  },
  {
    id: '2',
    increase: true,
    name: 'Nguyen Duc Huy',
    service: false,
    value: 1000,
    date: '18:43PM - 02/09/2021',
    message: 'Transfer 1000$',
  },
  {
    id: '3',
    increase: false,
    name: 'KFC',
    service: true,
    value: 29,
    date: '08:06AM - 31/08/2021',
    message: 'Payment service KFC',
  },
  {
    id: '4',
    increase: false,
    name: 'KFC',
    service: true,
    value: 100,
    date: '15:35PM - 30/08/2021',
    message: 'Payment service KFC',
  },
];

export default listSpending;
