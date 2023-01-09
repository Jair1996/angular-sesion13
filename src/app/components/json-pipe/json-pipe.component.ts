import { Component } from '@angular/core';

interface Person {
  Apellido: string;
  Casado: boolean;
  Direccion: string;
  Nombre: string;
  Telefono: number;
}

@Component({
  selector: 'app-json-pipe',
  templateUrl: './json-pipe.component.html',
  styles: [
  ]
})
export class JsonPipeComponent {
  persons: Array<Person> = [
    {
      Apellido: 'Tello',
      Casado: false,
      Direccion: 'Lima -Perú',
      Nombre: 'Jair',
      Telefono: 987654322,
    },
    {
      Apellido: 'Romeo',
      Casado: true,
      Direccion: 'Lima -Perú',
      Nombre: 'Jorge',
      Telefono: 765432546,
    },
  ]
}
