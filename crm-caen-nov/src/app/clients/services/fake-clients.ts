import { Client } from 'src/app/shared/models/client';


export const fakeClients: Client[] = [
  new Client({
    id: '1',
    name: 'Aurelia',
    email: 'aurelia@gmail.com',
  }),
  new Client({
    id: '2',
    name: 'Romain',
    email: 'labisonnade@gmail.com',
  }),
];
