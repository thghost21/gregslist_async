export class Identity {
  constructor(data) {
    this.id = data['https://codeworksclassroom.com/id']
    this.name = data.name
    this.email = data.email
    this.picture = data.picture
  }
}