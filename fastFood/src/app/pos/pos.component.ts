import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Pedido } from '../pedido';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {

  pedido: Pedido = new Pedido();

  private pedidoService = inject(PedidosService);

  sendForm(form: NgForm){
    if (form.valid){
      this.pedido.numero = this.generarNumeroRandom();
      this.pedidoService.addPedido(this.pedido);
      this.pedido = new Pedido();
    }
  }

  generarNumeroRandom(): number {
    return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  }

}
