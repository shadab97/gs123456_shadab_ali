export interface IStore {
  id: number;
  storeCode: string;
  storeName: string;
  city: string;
  state: string;
}
export interface ISku {
  id: string;
  label: string;
  class: string;
  department: string;
  price: number;
  cost: number;
}
