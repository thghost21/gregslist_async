import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js"

class HousesService {
  async getHouses() {
    const response = await api.get('api/houses')
    console.log(response.data);
    const house = response.data.map(pojo => new House(pojo))
    AppState.houses = house
  }

  async createHouseListing(houseData) {
    const response = await api.post('api/houses', houseData)
    console.log('created house');
    const house = new House(response.data)
    AppState.houses.push(house)

  }
  async deleteHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    console.log('house deleted with the id of ', response.data);

    const houses = AppState.houses
    const houseIndex = houses.findIndex(house => house.id == houseId)
    houses.splice(houseIndex, 1)
  }
}

export const housesService = new HousesService()