import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class HouseController {
  constructor() {
    AppState.on('identity', this.drawHouses)
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
  async createHouseListing() {
    try {
      event.preventDefault()
      const formElem = event.target
      const rawHouseData = getFormData(formElem)
      console.log(rawHouseData);

      await housesService.createHouseListing(rawHouseData)

    } catch (error) {
      console.error('could not create house listing');
    }
  }
  async deleteHouse(houseId) {
    try {
      const confirmed = await Pop.confirm('Deleting Listing', 'Are you sure you want to delete', 'Yes, Delete', 'Return to Listings')
      if (!confirmed) {
        return

      }
      await housesService.deleteHouse(houseId)
    } catch (error) {
      console.error('no worky house delete')
    }
  }

}