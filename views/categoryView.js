class CategoryView {
  static renderHead ($newTarget, category) {
    $newTarget.text(category.name)
    // $oldTarget.text('')
    // $oldHead.text('')

  }
  static renderList ($target, category) {
    let listItems = category.bills.map(this.listTemplate)
    $target.text('')
    $target.append(listItems)
    // $target.append("<a class="Home" href="#">Return Home<a/>")

  }
  static listTemplate (item) {
    return `<li class="bill" data-id="${item.url}">
    <a href="#">${item.title}<a/><br>
    </li>
    `
  }
  // static setHead (item) {
  //   return `<li class="category" data-id="${item.name}">
  //   <a href="#">${item.name}<a/><br>
  //   Bill Count: ${item.bills.length}
  //   </li>
  //   `
  // }


}
