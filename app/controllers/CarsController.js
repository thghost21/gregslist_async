import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
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

  async createCarListing() {
    try {
      event.preventDefault()
      const formElem = event.target
      const rawCarData = getFormData(formElem)
      console.log('car data from form', rawCarData);
      await carsService.createCar(rawCarData)
    } catch (error) {
      console.error('COULD NOT CREATE CAR', error);
      Pop.error(error, 'Could not create car!')
    }
  }

  async deleteCar(carId) {
    try {
      const confirmed = await Pop.confirm('Are you sure you want to delete this car?', 'It will be gone forever', 'Yes I am sure', 'No I have changed my mind')

      if (!confirmed) {
        return
      }

      await carsService.deleteCar(carId)

    } catch (error) {
      console.error('COULD NOT DELETE CAR', error);
      Pop.error(error, 'Could not delete car!')
    }
  }
}