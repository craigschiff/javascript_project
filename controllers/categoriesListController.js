class CategoriesListController {
  constructor ($target, $targetHead, categories, showController) {
    this.$target = $target
    this.$targetHead = $targetHead
    this.categories = categories
    this.showController = showController
    this.attachListeners()
    this.render()
  }

  attachListeners() {
    this.$target.on('click', 'li.category', (e) => {
      e.preventDefault()
      // this.$target.html('')
      this.$targetHead.html('')
      let name = e.currentTarget.dataset.id
      let showCategory = this.categories.find((category) => {
        return category.name === name
      })
      this.showController.setCategory(showCategory)
    })
  }
  render() {
    CategoriesView.renderHead(this.$targetHead)
    CategoriesView.renderList(this.$target, this.categories)
  }


}
