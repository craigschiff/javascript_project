class SponsorShowController {
  constructor(sponsor, $targetHead, $target) {
    this.sponsor = sponsor
    this.$target = $target
    this.$targetHead = $targetHead
    this.attachListeners()
    SponsorView.renderHead(this.$targetHead, this.sponsor)
    SponsorView.renderSponsor(this.$target, this.sponsor)
  }

  attachListeners() {
    this.$target.on('click', 'li.bill', (e) => {
      e.preventDefault()
      let url = e.currentTarget.dataset.id
      let showBill = Store.bills.find((bill) => {
        return bill.url === url
      })
      new BillShowController(showBill, this.$targetHead, this.$target)
    })
  }

}
