'use strict';
//Random Number Function from MDN
//All stores are open 6 AM to 8 PM
var hoursOpen = ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'];
var storeLocations = [];
var cookieTable = document.getElementById('cookie-table');


//Constructor Function
var Store = function(name, min, max, averageCookiesSoldPerCustomer) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageCookiesSoldPerCustomer = averageCookiesSoldPerCustomer;
  this.cookiesSoldEachHour = [];
  this.randomCustomersPerHour = [];
  this.totalCookies = 0;
  storeLocations.push(this);
};

//New stores using the constructor function
var firstAndPike = new Store('First & Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

console.log(storeLocations);

//Prototypes
Store.prototype.calculateAvgCustomersPerHour = function(){
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.randomCustomersPerHour.push(randomCustomers);
  }
};

Store.prototype.calculateCookiesPurchasedPerHour = function() {
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var cookiesPurchasedPerHour = Math.round(this.randomCustomersPerHour[i] * this.averageCookiesSoldPerCustomer);
    this.cookiesSoldEachHour.push(cookiesPurchasedPerHour);
  }
};

Store.prototype.sumCookiesSoldPerDay = function() {
  for(var i = 0; i < this.cookiesSoldEachHour.length ; i++)
    this.totalCookies += this.cookiesSoldEachHour[i];
};

Store.prototype.renderTimeCustomersCookiesSum = function(){
  var storesContainer = document.getElementById('stores');
  var storeNameEl = document.createElement('h2');
  storeNameEl.textContent = this.name;
  storesContainer.appendChild(storeNameEl);

  var unorderedListElements = document.createElement('ul');
  this.calculateAvgCustomersPerHour();
  this.calculateCookiesPurchasedPerHour();
  this.sumCookiesSoldPerDay();

  for(var i =0 ; i < hoursOpen.length ; i++){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = ((hoursOpen[i]) + ' : ' + (this.randomCustomersPerHour[i]) + ' : ' + (this.cookiesSoldEachHour[i]));
    unorderedListElements.appendChild(listItemEl);
  }

  var listItemEl2 = document.createElement('li');
  listItemEl2.textContent = 'Total Cookies Sold Today ' + this.totalCookies;
  unorderedListElements.appendChild(listItemEl2);
  storesContainer.appendChild(unorderedListElements);
};

Store.prototype.renderTable = function(){
  var makeATableRow = document.createElement('tr');
  cookieTable.appendChild(makeATableRow);
  makeATableRow.textContent = 'Store Name';

  for (var i = 0 ; i <= hoursOpen.length ; i++){
    var addHeaderDataToTableRow = document.createElement('th');
    addHeaderDataToTableRow.textContent = hoursOpen[i];
    makeATableRow.appendChild(addHeaderDataToTableRow);
  }

  addHeaderDataToTableRow.textContent = 'Total Cookies Sold';
  makeATableRow.appendChild(addHeaderDataToTableRow);
};

Store.prototype.renderTableData = function(){
  this.calculateAvgCustomersPerHour();
  this.calculateCookiesPurchasedPerHour();
  this.sumCookiesSoldPerDay();
  var storeTableRowEl = document.createElement('tr');
  storeTableRowEl.textContent = this.name;
  cookieTable.appendChild(storeTableRowEl);

  for (var i = 0 ; i < this.cookiesSoldEachHour.length ; i++){
    var addCookieDataToTableRow = document.createElement('td');
    addCookieDataToTableRow.textContent = this.cookiesSoldEachHour[i];
    storeTableRowEl.appendChild(addCookieDataToTableRow);
  }

  addCookieDataToTableRow = document.createElement('td');
  addCookieDataToTableRow.textContent = this.totalCookies;
  storeTableRowEl.appendChild(addCookieDataToTableRow);
  cookieTable.appendChild(storeTableRowEl);
};

Store.prototype.renderTableFooter = function() {
  var storeTableRowEl = document.createElement('tr');
  storeTableRowEl.textContent = 'Total Cookies Per Hour';
  cookieTable.appendChild(storeTableRowEl);
  var grandTotal = 0;
  var sumCookiesSoldPerHour = document.createElement('td');
  for(var i = 0 ; i < hoursOpen.length ; i++){
    var cookieStart = 0;
    for(var j = 0 ; j < storeLocations.length ; j++){
      cookieStart += (storeLocations[j].cookiesSoldEachHour[i]);
    }
    sumCookiesSoldPerHour=document.createElement('td');
    sumCookiesSoldPerHour.textContent=cookieStart;
    storeTableRowEl.appendChild(sumCookiesSoldPerHour);
    grandTotal += cookieStart;
  }
  sumCookiesSoldPerHour=document.createElement('td');
  sumCookiesSoldPerHour.textContent=grandTotal;
  storeTableRowEl.appendChild(sumCookiesSoldPerHour);
  cookieTable.appendChild(storeTableRowEl);
};

firstAndPike.renderTable();
firstAndPike.renderTableData();
seaTacAirport.renderTableData();
capitolHill.renderTableData();
alki.renderTableData();
seattleCenter.renderTableData();
firstAndPike.renderTableFooter();
