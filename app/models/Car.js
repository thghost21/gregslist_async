export class Car {
  constructor(data) {
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.color = data.color
    this.engineType = data.engineType
    this.creator = data.creator
  }
}

// const exampleDataFromAPI = {
//   "_id": "63348622236e4fd2522bdc64",
//   "make": "Oscar",
//   "model": "Meyer X",
//   "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Wienermobile-NAIAS-2005.jpg",
//   "year": 2035,
//   "price": 100001,
//   "description": "Yummy Yummy, Made with 10% real meat. Just kidding, 0% real meat, you fool",
//   "createdAt": "2022-09-28T17:36:34.100Z",
//   "updatedAt": "2023-03-30T23:38:38.358Z",
//   "__v": 0,
//   "color": "#e8927d",
//   "engineType": "unknown",
//   "creator": null,
//   "id": "63348622236e4fd2522bdc64"
// }