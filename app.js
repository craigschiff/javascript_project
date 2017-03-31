
$(function(){
  Api.getAll()
    .then((response) => {
      Store.billUrls = []
      let bills = response.masterlist
      for (let index in bills) {
        let billId = bills[index].bill_id
        let billUrl = baseUrl + apiKey + billPage + billId
        Store.billUrls.push(billUrl)
    }
  }).then(makeBills)

})

function makeBills () {
  let bills = Store.billUrls.slice(0, 6)
  const billCalls = bills.map((url) => {
    return Api.callBill(url)
    .then((billJson) => {
      new Bill(billJson.bill)
      })
    })
    Promise.all(billCalls)
    .then(callCategories)
  }


function callCategories() {
  let $targetHead = $('h4.categories')
  let $target = $('ul.list-category')
  let $showTarget = $('ul.category-bill')
  let $showTargetHead = $('h4.category')
  let categories = Store.categories
  let showController = new CategoryShowController($showTarget, $showTargetHead, $target, $targetHead)
  let listController = new CategoriesListController($target, $targetHead, categories, showController)
}
