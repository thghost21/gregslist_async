import { api } from "../utils/Axios.js"

class CarsService {
  async getCars() {
    const response = await api.get('api/cars')
    console.log('GOT CARS 📡📡📡📡', response.data);
  }
}

export const carsService = new CarsService()