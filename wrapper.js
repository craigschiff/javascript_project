


class Api {
  static getAll() {
    return $.getJSON(masterList)
  }

  static callBill(url) {
    return $.getJSON(url)
  }

}
