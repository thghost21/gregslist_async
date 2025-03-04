import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";

export class HouseController {
  constructor() {
    AppState.on('houses', this.drawHouses)
    this.getHouses()
  }

  async getHouses() {
    try {
      await housesService.getHouses()
      console.log('getting houses')

    } catch (error) {
      console.error('Could not get Houses', error)
      Pop.error(error, 'Could not get houses')
    }

  }
  drawHouses() {
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.HouseCard)
    const housesElem = document.getElementById('housesListings')
    housesElem.innerHTML = content
  }
}