import {Produto} from './produto.model';
import {Usuario} from './usuario.model';
import {Restaurante} from './restaurante.model';

//https://github.com/vicenthy/Senac-Eats

export class Pedido {
  id: number;
  restaurante: Restaurante;
  produtos: Produto[];
  usuario: Usuario[];
  data: Date;
  total: number;
}
