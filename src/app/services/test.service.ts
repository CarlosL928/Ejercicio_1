import { Injectable } from '@angular/core';
import { Empleado } from '../components/card/card.component';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private listaEmpleados = [
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
  constructor() { }

  agregarEmpleado(empleado: Empleado){
    this.listaEmpleados.push(empleado);
  }

  obtenerEmpleados(){
    return this.listaEmpleados;
  }

}
