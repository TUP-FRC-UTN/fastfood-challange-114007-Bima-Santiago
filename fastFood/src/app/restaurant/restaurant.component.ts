import { Component, inject, OnInit } from '@angular/core';
import { DelivaryComponent } from "../delivary/delivary.component";
import { PosComponent } from "../pos/pos.component";
import { KitchenComponent } from "../kitchen/kitchen.component";
import { PedidosService } from '../pedidos.service';
import { Pedido } from '../pedido';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [DelivaryComponent, PosComponent, KitchenComponent, JsonPipe],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit {
  private pedidoService = inject(PedidosService);

  lstPedido: Pedido[] = [];

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe((nuevaLista: Pedido[]) => {
      this.lstPedido = nuevaLista;
    })
  }
}
