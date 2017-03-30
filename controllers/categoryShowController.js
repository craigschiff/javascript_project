class CategoryShowController {
  constructor ($target, $targetHead) {
    this.$target = $target
    this.$targetHead = $targetHead
    // this.$oldTarget = $oldTarget
    // this.$oldHead = $oldHead
    this.attachListeners()

  }
  setCategory(category) {
    this.category = category
    CategoryView.renderList(this.$target, category)
    CategoryView.renderHead(this.$targetHead, category)
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
