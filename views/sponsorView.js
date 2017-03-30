class SponsorView {
  static renderSponsor ($target, sponsor) {
    $target.text('')
    $target.append(`<p class="sponsor" id="${sponsor.name}">
        Party: ${sponsor.party}<br><br>
        </p>
        <h4>Sponsored Bills: </h4>
        `)
    let listItems = sponsor.bills.map(this.listTemplate)
    $target.append(listItems)
  }
  static listTemplate (item) {
    return `<li class="bill" data-id="${item.url}">
    <a href="#">${item.title}<a/>
    </li>
    `
  }
  static renderHead ($target, sponsor) {
    $target.text(sponsor.name)
  }



}
