const annualSpendings = [27, 26, 1, 29, 4, 21, 16, 10, 20, 12, 30, 17, 5, 6,
  19, 13, 7, 3, 25, 9, 28, 24, 14, 22]

function parseSpending(){
  spendingInfo = spendingInfo.replace(new RegExp(', ', 'g'), ' ')
    .replace(new RegExp('"', 'g'), '')
  let lines = spendingInfo.split('\n').map((line)=> line.split(","))
  lines.forEach((line) =>{
    if(Store.spendings[line[8]] === undefined){
      let spending = new Spending(line[8]);
    }
    let year = 1994
    annualSpendings.forEach((annual) =>{
      Store.spendings[line[8]].spendings[year] += parseInt(line[annual])
      year++;
    })
  })
  debugger
}

class Spending {
  constructor (category){
    this.category = category
    this.spendings = {
      1994: 0,
      1995: 0,
      1996: 0,
      1997: 0,
      1998: 0,
      1999: 0,
      2000: 0,
      2001: 0,
      2002: 0,
      2003: 0,
      2004: 0,
      2005: 0,
      2006: 0,
      2007: 0,
      2008: 0,
      2009: 0,
      2010: 0,
      2011: 0,
      2012: 0,
      2013: 0,
      2014: 0,
      2015: 0,
      2016: 0,
      2017: 0
    }
    Store.spendings[category] = this
  }
}
