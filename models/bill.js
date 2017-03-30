
const baseUrl = "https://api.legiscan.com"
const masterList = `${baseUrl}${apiKey}op=getMasterList&state=NY`
let billPage = "&op=getBill&id="



  class Bill {
    constructor (bill) {
      this.id = bill.id
      this.title = bill.title
      this.description = bill.description
      debugger
      this.url = bill.url
      let category = Store.categories.find ((category) => {
        return category.name === bill.committee.name
      })
      if (category) {
        category.bills.push(this)
        this.category = category
      } else {
        category = new Category(bill.committee.name)
        category.bills.push(this)
        this.category = category
      }
      this.date = bill.status_date
      this.sponsors = []
      bill.sponsors.forEach((person) => {
        let sponsor = Store.sponsors.find((sponsor) => {
          return sponsor.name === person.name
        })
        if (sponsor) {
          sponsor.bills.push(this)
          this.sponsors.push(sponsor)
        } else {
          sponsor = new Sponsor(person.name, person.party)
          sponsor.bills.push(this)
          this.sponsors.push(sponsor)
        }
      })
      Store.bills.push(this)
    }
  }
