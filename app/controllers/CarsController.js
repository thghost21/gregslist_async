import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { Pop } from "../utils/Pop.js";

export class CarsController {
  constructor() {
    AppState.on('cars', this.drawCars)
    console.log('Cars Controller is loaded!');
    this.getCars()
  }

  drawCars() {
    const cars = AppState.cars
    let content = ''
    cars.forEach(car => content += car.card)
    const carsElem = document.getElementById('carListings')
    carsElem.innerHTML = content
  }

  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      console.error('COULD NOT GET CARS', error) // alerts the developer
      Pop.error(error, 'Could not get cars') // alerts the user
    }
  }
}