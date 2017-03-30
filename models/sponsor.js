class Sponsor {
  constructor (name, party) {
    this.name = name
    if (party === "D") {
      this.party = "Democrat"
    } else if (party === "R") {
      this.party = "Republican"
    } else {
      this.party = "Unaffiliated"
    }
    this.bills = []
    Store.sponsors.push(this)
  }
}
