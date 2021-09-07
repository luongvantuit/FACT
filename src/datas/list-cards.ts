import Colors from '../assets/colors';
import {Card} from '../types/card';
const listCards: Array<Card> = [
  {
    expiryEnd: '02/25',
    id: '1',
    name: 'VAN TU/LUONG',
    nameBank: 'TECHCOMBANK',
    type: 'Debit',
    numberCard: '**** **** **** 5379',
    service: 'visa',
    color: [Colors.blue, Colors.blueDark, Colors.blueDark],
  },
  {
    expiryEnd: '01/23',
    id: '2',
    name: 'THANH DAT/LE',
    nameBank: 'TECHCOMBANK',
    type: 'Credit',
    numberCard: '**** **** **** 4657',
    service: 'master-card',
    color: [Colors.green, Colors.greenDark, Colors.greenDark],
  },
  {
    expiryEnd: '05/24',
    id: '3',
    name: 'DUC HUY/NGUYEN',
    nameBank: 'TECHCOMBANK',
    type: 'Debit',
    numberCard: '**** **** **** 7689',
    service: 'visa',
    color: [Colors.text, Colors.neutralDarkest, Colors.neutralDarkest],
  },
];

export default listCards;
