import { Component, inject, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-delivary',
  standalone: true,
  imports: [],
  templateUrl: './delivary.component.html',
  styleUrl: './delivary.component.css'
})
export class DelivaryComponent implements OnInit{

  lstTerminados: Pedido[] = [];
  private pedidoService = inject(PedidosService);

  ngOnInit(): void {
    this.pedidoService.getListos().subscribe((nuevaLista: Pedido[]) => {
      this.lstTerminados = nuevaLista;
    })
  }

  entregar(index: number){
    this.lstTerminados.splice(index, 1);
  }
}
