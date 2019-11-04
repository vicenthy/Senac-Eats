import {Produto} from './produto.model';

export class Categoria {
  id: number;
  nome: string;
  img: string;
  produtos: Produto[];
}
