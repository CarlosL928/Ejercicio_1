import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { InputComponent } from '../input/input.component';
import { MaterialModule } from '../../material/material.module';

export interface Empleado{
  nombre: string
  ocupacion: string

}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
  InputComponent,
MaterialModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  mensajeDeHijo = '';

  listaEmpleados = [
    { nombre: 'Carlos',
      ocupacion: 'Programador'
    },
    { nombre: 'Maria',
      ocupacion: 'Backend Developer'
    },
    { nombre: 'Juan',
      ocupacion: 'Frontend Developer'
    },
    { nombre: 'Pedro',
      ocupacion: 'Fullstack Developer'
    }
  ]

  onEmit(mensaje: string){
    this.mensajeDeHijo = mensaje;
  }

}
