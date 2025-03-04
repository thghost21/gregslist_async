import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "../utils/Axios.js"

class CarsService {
  async createCar(carData) {
    // TODO make this not broken
    const response = await api.post('api/cars')
    console.log('CREATED CAR 📡📡📡📡', response);
  }
  async getCars() {
    const response = await api.get('api/cars')
    console.log('GOT CARS 📡📡📡📡', response.data);
    const cars = response.data.map(pojo => new Car(pojo))
    AppState.cars = cars // trigger observer
  }
}

export const carsService = new CarsService()