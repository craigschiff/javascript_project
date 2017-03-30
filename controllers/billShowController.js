class BillShowController {
  constructor(bill, $targetHead, $target) {
    this.bill = bill
    this.$target = $target
    this.$targetHead = $targetHead
    this.attachListeners()
    BillView.renderHead(this.$targetHead, this.bill)
    BillView.renderBill(this.$target, this.bill)
  }

  attachListeners() {
    this.$target.on('click', 'li.sponsor', (e) => {
      e.preventDefault()
      let name = e.currentTarget.dataset.id
      let showSponsor = Store.sponsors.find((sponsor) => {
        return sponsor.name === name
      })
      new SponsorShowController(showSponsor, this.$targetHead, this.$target)
    })
  }

}
