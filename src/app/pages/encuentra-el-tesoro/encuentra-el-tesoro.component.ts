import { Component } from '@angular/core';

@Component({
  selector: 'app-encuentra-el-tesoro',
  templateUrl: './encuentra-el-tesoro.component.html',
  styleUrls: ['./encuentra-el-tesoro.component.scss'],
})
export class EncuentraElTesoroComponent {
  filas: any;
  columns: any;
  tabla: boolean;
  imagenSrc: string[][];
  filasArray: any[];
  columnasArray: any[];
  Treasure: any[];
  contador: number

  constructor(){
    this.filas ="";
    this.columns ="";
    this.tabla = false;
    this.imagenSrc = [];
    this.filasArray = [];
    this.columnasArray = [];
    this.Treasure = [];
    this.contador = 0
  }

  pintarTabla(event: any){
    this.filasArray = Array.from({length: this.filas});
    this.columnasArray = Array.from({length: this.columns});
    this.imagenSrc = [];
    this.Treasure [0] = this.getRandom(this.filas);
    this.Treasure [1]  = this.getRandom(this.columns);

    for(let i=0; i<this.filas; i++) {
      this.imagenSrc[i] = [];
      for(let j=0; j<this.columns; j++) {
        this.imagenSrc[i][j] = "./assets/encuentra-el-tesoro/x.png";
      }
    }
  }

  getRandom( num:number ) {
    return Math.floor(Math.random() * (num))
  }
  resetTabla() {
    this.filas ="";
    this.columns ="";
    this.imagenSrc = [];
    this.filasArray = [];
    this.columnasArray = [];
    this.Treasure = [];
    this.contador = 0;
    this.tabla = false;
  }
  cambiarImagen(fila: number, columna: number) {
    this.contador++
    if (this.imagenSrc[fila][columna] === "./assets/encuentra-el-tesoro/skull.png") {
      this.imagenSrc[fila][columna] = "./assets/encuentra-el-tesoro/x.png";
    } else {
      this.imagenSrc[fila][columna] = "./assets/encuentra-el-tesoro/skull.png";
    } 

    if (this.Treasure[0] == fila && this.Treasure[1] == columna){
      this.imagenSrc[fila][columna] = "./assets/encuentra-el-tesoro/chest.png";
      alert ("ENHORABUENA YA ERES RICO");
    }
     
  }

}
  