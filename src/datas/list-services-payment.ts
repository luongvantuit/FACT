import { highlandsCoffeeImage, kFCImage, leakNDHImage } from "../assets";
import { ServicePayment } from "../types/service-payment";
const listServicesPayment: Array<ServicePayment> = [
  {
    id: '1',
    increase: false,
    name: 'Highlands Coffee',
    service: true,
    value: 10,
    img: highlandsCoffeeImage,
  },
  {
    id: '2',
    increase: true,
    name: 'Nguyen Duc Huy',
    service: false,
    value: 1000,
    img: leakNDHImage,
  },
  {
    id: '3',
    increase: false,
    name: 'KFC',
    service: true,
    value: 29,
    img: kFCImage,
  },
];

export default listServicesPayment;