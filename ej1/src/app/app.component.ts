import { Component } from '@angular/core';
import { ClienteComponent} from './cliente/cliente.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cliente = {
    nombre: '',
    CIF: '',
    direccion: '',
    grupo: ''
  };
  clientes:any = [];

  guardar(){
    this.clientes.push(this.cliente);
    console.log(this.cliente)
  }
}
