import { Component, inject, OnInit } from '@angular/core';
import { PedidosService } from '../pedidos.service';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent implements OnInit{
  private pedidoService = inject(PedidosService);

  lstPedido: Pedido[] = [];
  cocinando:boolean = false;
  coccion: Pedido = new Pedido;

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe((nuevaLista: Pedido[]) => {
      this.lstPedido = nuevaLista;
    })
  }

  cocinar(index: number){
    this.cocinando = true;
    this.coccion = this.lstPedido[index];
    this.lstPedido.splice(index, 1);
  }

  entregar(){
    this.cocinando = false;
    this.pedidoService.terminarPedido(this.coccion);
    this.coccion = new Pedido();
  }
}
