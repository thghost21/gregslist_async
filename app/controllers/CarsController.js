import { carsService } from "../services/CarsService.js";
import { Pop } from "../utils/Pop.js";

export class CarsController {
  constructor() {
    console.log('Cars Controller is loaded!');
    this.getCars()
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