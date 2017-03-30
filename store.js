let Store = {
  categories: [],
  bills: [],
  sponsors: [],
  billUrls: []
}

class Store {
  constructor() {
    this.state = {}
  }
  add(resource, object) {
    this.state[resource] ||= {}
    this.state[object.id] = object
  }
  find(resource, id) {
    return this.state[resource][id]
  }
}
