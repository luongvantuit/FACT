import {highlandsCoffeeImage, kFCImage, leakNDHImage} from '../assets';
import {ServicePayment} from '../types/service-payment';
const listServicesPayment: Array<ServicePayment> = [
  {
    id: '1',
    increase: false,
    name: 'Highlands Coffee',
    service: true,
    value: 10,
    img: highlandsCoffeeImage,
    date: '23:26 - 05/09/2021',
  },
  {
    id: '2',
    increase: true,
    name: 'Nguyen Duc Huy',
    service: false,
    value: 1000,
    img: leakNDHImage,
    date: '18:43 - 02/09/2021',
  },
  {
    id: '3',
    increase: false,
    name: 'KFC',
    service: true,
    value: 29,
    img: kFCImage,
    date: '12:06 - 31/08/2021',
  },
  {
    id: '4',
    increase: false,
    name: 'KFC',
    service: true,
    value: 100,
    img: kFCImage,
    date: '15:35 - 30/08/2021',
  },
];

export default listServicesPayment;
