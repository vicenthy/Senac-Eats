import {Produto} from './produto.model';
import {Usuario} from './usuario.model';
import {Restaurante} from './restaurante.model';

export class Pedido {
  id: number;
  restaurante: Restaurante;
  produtos: Produto[];
  usuario: Usuario[];
  data: Date;
  total: number;
}
