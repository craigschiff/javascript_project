class Sponsor {
  constructor (name, party, district) {
    this.name = name
    if (party === "D") {
      this.party = "Democrat"
    } else if (party === "R") {
      this.party = "Republican"
    } else {
      this.party = "Unaffiliated"
    }
    this.district = district
    this.bills = []
    Store.sponsors.push(this)
  }
}
