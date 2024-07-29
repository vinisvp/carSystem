import { Component } from '@angular/core';
import { Car } from '../../Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  car : Car = {} as Car;

  cars : Car[] = [
    {
      id: 1,
      name: "Palio",
      assembler: "Fiat",
      price: 30000,
      year: 2000
    }
  ];

  idCount = this.cars[this.cars.length - 1].id + 1;

  saveCar(){
    this.car.id = this.idCount;
    this.idCount++;

    this.cars.push(this.car);
    this.car = {} as Car;
  }
}
