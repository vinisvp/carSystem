import { Component } from '@angular/core';
import { Car } from '../../Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars : Car[] = [
    {
      id: 1,
      name: "Palio",
      assembler: "Fiat",
      price: 30000,
      year: 2000
    }
  ];
}
