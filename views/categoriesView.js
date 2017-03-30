class CategoriesView {
  static renderHead ($target) {
    $target.html("Select a Category")
  }
  static renderList ($target, categories) {
    let listItems = categories.map(this.listTemplate)
    $target.append(listItems)
  }
  static listTemplate (item) {
    return `<li class="category" data-id="${item.name}">
    <a href="#">${item.name}<a/>: ${item.bills.length}
    </li>
    `
  }
}
