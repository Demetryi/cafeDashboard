export interface INet {
  managers: string[];
  products: [];
  owner: string;
}

export interface INetDoc {
  id: string;
  data: ()=> INet;
}
