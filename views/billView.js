class BillView {
  static renderBill ($target, bill) {
    $target.text('')
    $target.append(`<p class="bill" id="${bill.title}">
        Description: ${bill.description}<br>
        Category: ${bill.category.name}<br>
        Date: ${bill.date}<br>
        <a href="${bill.url}">Bill Website<a/>
        </p>
        `)
    let listItems = bill.sponsors.map(this.listTemplate)
    $target.append(listItems)
  }
  static listTemplate (item) {
    return `<li class="sponsor" data-id="${item.name}">
    <a href="#">${item.name}<a/> : ${item.party}
    </li>
    `
  }
  static renderHead ($target, bill) {
    $target.text(bill.title)
  }



}
