  class Category {
    constructor (name) {
      this.name = name
      this.bills = []
      Store.categories.push(this)
    }
  }
