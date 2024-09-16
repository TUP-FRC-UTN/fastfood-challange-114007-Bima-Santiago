import { Injectable } from '@angular/core';
import { Pedido } from './pedido';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private lstPedidos = new BehaviorSubject<Pedido[]>([]);
  private lstPedidosListos = new BehaviorSubject<Pedido[]>([]);

  getPedidos() {
    return this.lstPedidos.asObservable();
  }

  getListos() {
    return this.lstPedidosListos.asObservable();
  }

  addPedido(pedido: Pedido) {
    const listaActual = this.lstPedidos.getValue();
    this.lstPedidos.next([...listaActual, pedido]);
  }

  terminarPedido(pedido:Pedido){
    const listaActual = this.lstPedidosListos.getValue();
    this.lstPedidosListos.next([...listaActual, pedido]);
  }

}
