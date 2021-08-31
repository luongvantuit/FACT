import {Image} from 'react-native';

export type ServicePayment = {
  service: boolean;
  name: string;
  img: any;
  increase: boolean;
  value: number;
  date?: number;
  id: string;
};
