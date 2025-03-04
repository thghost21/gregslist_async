import { AppState } from "../AppState.js"

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }

  get deleteButton() {
    const user = AppState.identity

    if (user == null) {
      return ''
    }
    if (this.creatorId != user.id) {
      return ''
    }
    return `<div">
              <button onclick="app.housesController.deleteHouse('${this.id}')" class="btn btn-outline-danger">Delete listing</button>
            </div>`
  }



  get HouseCard() {
    return `
        <div class="d-flex py-2 shadow ">
          <div class="col-md-4 ">
            <img class="img-fluid car-img"
              src="${this.imgUrl}"
              alt="A really nice house">
          </div>
          <div class="col-md-8 px-2">
            <p class="fs-3">${this.bedrooms} bed/${this.bathrooms} bath ${this.levels} story</p>
            <p>Built in ${this.year}</p>
            <p>$${this.price.toLocaleString()}</p>
            <p>${this.description}
            </p>
            <div class="d-flex flex-column justify-content-end me-auto p-2">
            <div class="d-flex">
                  <img src="${this.creator.picture}" alt="${this.creator.name}" class="creator-img px-3">
                  <span>${this.creator.name}</span>
                </div>
            <div>
            ${this.deleteButton}
            </div>
          </div>
          
          </div>
        </div>
          
        `
  }
}
