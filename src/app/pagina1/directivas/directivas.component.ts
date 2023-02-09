import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
    resultado:any;
    valor1:number=0;
    valor2:number=0;
    operacion = "ninguna";

    operaciones(op: string) {
      switch (op) {
        case '+':
          this.resultado = this.valor1 + this.valor2;
          break;
        case '-':
          this.resultado = this.valor1 - this.valor2;
          break;
        case '*':
          this.resultado = this.valor1 * this.valor2;
          break;
        case '/':
          this.resultado = this.valor1 / this.valor2;
          break;
        default:
          this.resultado = "(No eligió operación)";
          break;
      }
    }




  constructor() { }

  ngOnInit(): void {
  }

}
