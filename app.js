'use strict';
//Random Number Function from MDN
//All stores are open 6 AM to 8 PM
var hoursOpen = ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'];

var totalCookies = 0;

//Constructor Function
var Store = function(name, min, max, averageCookiesSoldPerCustomer) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageCookiesSoldPerCustomer = averageCookiesSoldPerCustomer;
  this.cookiesSoldEachHour = cookiesSoldEachHour;
  this.randomCustomersPerHour = randomCustomersPerHour;
  this.totalCookiesPerDay = totalCookiesPerDay;
};

//New stores using the constructor function
var firstAndPike = new Store('Salmon Cookies, First & Pike', 23, 65, 6.3);
var seaTacAirport = new Store('Salmon Cookies, SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Salmon Cookies, Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Salmon Cookies, Capitol Hill', 20, 38, 2.3);
var alki = new Store('Salmon Cookies, Alki', 2, 16, 4.6);

//Object Literal - Store #1
// var firstAndPike = {
//   name: 'Salmon Cookies, First & Pike',
//   header: 'Hour of the Day : Customers Each Hour : Cookies Sold Each Hour',
//   min: 23,
//   max: 65,
//   averageCookiesSoldPerCustomer: 6.3,
//   cookiesSoldEachHour: [],
//   randomCustomersPerHour: [],
//   totalCookiesPerDay:[]
// };

firstAndPike.calculateAvgCustomersPerHour = function() {
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.randomCustomersPerHour.push(randomCustomers);
  }
};

firstAndPike.calculateCookiesPurchasedPerHour = function() {
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var cookiesPurchasedPerHour = Math.round(this.randomCustomersPerHour[i] * this.averageCookiesSoldPerCustomer);
    this.cookiesSoldEachHour.push(cookiesPurchasedPerHour);
  }
};

firstAndPike.sumCookiesSoldPerDay = function() {
  for(var i = 0; i < this.cookiesSoldEachHour.length ; i++)
    totalCookies += this.cookiesSoldEachHour[i];
  this.totalCookiesPerDay.push(totalCookies);
};

//Render to the DOM
firstAndPike.renderTimeCustomersCookiesSum = function(){
  var storesContainer = document.getElementById('stores');
  var storeNameEl = document.createElement('h2');
  storeNameEl.textContent = this.name;
  storesContainer.appendChild(storeNameEl);
  // var timeListNameEl = document.createElement('h3');
  // timeListNameEl.textContent = this.header;
  // storesContainer.appendChild(timeListNameEl);

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
  listItemEl2.textContent = 'Total Cookies Sold Today ' + this.totalCookiesPerDay[0];
  unorderedListElements.appendChild(listItemEl2);
  storesContainer.appendChild(unorderedListElements);
};

firstAndPike.renderTimeCustomersCookiesSum();
firstAndPike.sumCookiesSoldPerDay();
console.log(firstAndPike);


//Object Literal - Store #2
// var seaTacAirport = {
//   name: 'Salmon Cookies, SeaTac Airport',
//   header: 'Hour of the Day : Customers Each Hour : Cookies Sold Each Hour',
//   min: 3,
//   max: 24,
//   averageCookiesSoldPerCustomer: 1.2,
//   cookiesSoldEachHour: [],
//   randomCustomersPerHour: [],
//   totalCookiesPerDay:[]
// };

seaTacAirport.calculateAvgCustomersPerHour = function() {
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.randomCustomersPerHour.push(randomCustomers);
  }
};

seaTacAirport.calculateCookiesPurchasedPerHour = function() {
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var cookiesPurchasedPerHour = Math.round(this.randomCustomersPerHour[i] * this.averageCookiesSoldPerCustomer);
    this.cookiesSoldEachHour.push(cookiesPurchasedPerHour);
  }
};

seaTacAirport.sumCookiesSoldPerDay = function() {
  for(var i = 0; i < this.cookiesSoldEachHour.length ; i++)
    totalCookies += this.cookiesSoldEachHour[i];
  this.totalCookiesPerDay.push(totalCookies);
};

seaTacAirport.renderTimeCustomersCookiesSum = function(){
  var storesContainer = document.getElementById('stores');
  var storeNameEl = document.createElement('h2');
  storeNameEl.textContent = this.name;
  storesContainer.appendChild(storeNameEl);
  // var timeListNameEl = document.createElement('h3');
  // timeListNameEl.textContent = this.header;
  // storesContainer.appendChild(timeListNameEl);

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
  listItemEl2.textContent = 'Total Cookies Sold Today ' + this.totalCookiesPerDay[0];
  unorderedListElements.appendChild(listItemEl2);
  storesContainer.appendChild(unorderedListElements);
};

seaTacAirport.renderTimeCustomersCookiesSum();
seaTacAirport.sumCookiesSoldPerDay();
console.log(seaTacAirport);

// //Object Literal - Store #3
// var seattleCenter = {
//   name: 'Salmon Cookies, Seattle Center',
//   header: 'Hour of the Day : Customers Each Hour : Cookies Sold Each Hour',
//   min: 11,
//   max: 38,
//   averageCookiesSoldPerCustomer: 3.7,
//   cookiesSoldEachHour:[],
//   randomCustomersPerHour: [],
//   totalCookiesPerDay:[]
// };

seattleCenter.calculateAvgCustomersPerHour = function() {
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.randomCustomersPerHour.push(randomCustomers);
  }
};

seattleCenter.calculateCookiesPurchasedPerHour = function() {
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var cookiesPurchasedPerHour = Math.round(this.randomCustomersPerHour[i] * this.averageCookiesSoldPerCustomer);
    this.cookiesSoldEachHour.push(cookiesPurchasedPerHour);
  }
};

seattleCenter.sumCookiesSoldPerDay = function() {
  for(var i = 0; i < this.cookiesSoldEachHour.length ; i++)
    totalCookies += this.cookiesSoldEachHour[i];
  this.totalCookiesPerDay.push(totalCookies);
};

seattleCenter.renderTimeCustomersCookiesSum = function(){
  var storesContainer = document.getElementById('stores');
  var storeNameEl = document.createElement('h2');
  storeNameEl.textContent = this.name;
  storesContainer.appendChild(storeNameEl);
  // var timeListNameEl = document.createElement('h3');
  // timeListNameEl.textContent = this.header;
  // storesContainer.appendChild(timeListNameEl);

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
  listItemEl2.textContent = 'Total Cookies Sold Today ' + this.totalCookiesPerDay[0];
  unorderedListElements.appendChild(listItemEl2);
  storesContainer.appendChild(unorderedListElements);
};

seattleCenter.renderTimeCustomersCookiesSum();
seattleCenter.sumCookiesSoldPerDay();
console.log(seattleCenter);

//Object Literal - Store #4
// var capitolHill = {
//   name: 'Salmon Cookies, Capitol Hill',
//   header: 'Hour of the Day : Customers Each Hour : Cookies Sold Each Hour',
//   min: 20,
//   max: 38,
//   averageCookiesSoldPerCustomer: 2.3,
//   cookiesSoldEachHour:[],
//   randomCustomersPerHour: [],
//   totalCookiesPerDay:[]
// };

capitolHill.calculateAvgCustomersPerHour = function() {
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.randomCustomersPerHour.push(randomCustomers);
  }
};

capitolHill.calculateCookiesPurchasedPerHour = function() {
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var cookiesPurchasedPerHour = Math.round(this.randomCustomersPerHour[i] * this.averageCookiesSoldPerCustomer);
    this.cookiesSoldEachHour.push(cookiesPurchasedPerHour);
  }
};

capitolHill.sumCookiesSoldPerDay = function() {
  for(var i = 0; i < this.cookiesSoldEachHour.length ; i++)
    totalCookies += this.cookiesSoldEachHour[i];
  this.totalCookiesPerDay.push(totalCookies);
};

capitolHill.renderTimeCustomersCookiesSum = function(){
  var storesContainer = document.getElementById('stores');
  var storeNameEl = document.createElement('h2');
  storeNameEl.textContent = this.name;
  storesContainer.appendChild(storeNameEl);
  // var timeListNameEl = document.createElement('h3');
  // timeListNameEl.textContent = this.header;
  // storesContainer.appendChild(timeListNameEl);

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
  listItemEl2.textContent = 'Total Cookies Sold Today ' + this.totalCookiesPerDay[0];
  unorderedListElements.appendChild(listItemEl2);
  storesContainer.appendChild(unorderedListElements);
};

capitolHill.renderTimeCustomersCookiesSum();
capitolHill.sumCookiesSoldPerDay();
console.log(capitolHill);

//Object Literal - Store #5
// var alki = {
//   name: 'Salmon Cookies, Alki',
//   header: 'Hour of the Day : Customers Each Hour : Cookies Sold Each Hour',
//   min: 2,
//   max: 16,
//   averageCookiesSoldPerCustomer: 4.6,
//   cookiesSoldEachHour:[],
//   randomCustomersPerHour: [],
//   totalCookiesPerDay:[]
// };

alki.calculateAvgCustomersPerHour = function() {
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.randomCustomersPerHour.push(randomCustomers);
  }
};

alki.calculateCookiesPurchasedPerHour = function() {
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var cookiesPurchasedPerHour = Math.round(this.randomCustomersPerHour[i] * this.averageCookiesSoldPerCustomer);
    this.cookiesSoldEachHour.push(cookiesPurchasedPerHour);
  }
};

alki.sumCookiesSoldPerDay = function() {
  for(var i = 0; i < this.cookiesSoldEachHour.length ; i++)
    totalCookies += this.cookiesSoldEachHour[i];
  this.totalCookiesPerDay.push(totalCookies);
};

alki.renderTimeCustomersCookiesSum = function(){
  var storesContainer = document.getElementById('stores');
  var storeNameEl = document.createElement('h2');
  storeNameEl.textContent = this.name;
  storesContainer.appendChild(storeNameEl);
  // var timeListNameEl = document.createElement('h3');
  // timeListNameEl.textContent = this.header;
  // storesContainer.appendChild(timeListNameEl);

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
  listItemEl2.textContent = 'Total Cookies Sold Today ' + this.totalCookiesPerDay[0];
  unorderedListElements.appendChild(listItemEl2);
  storesContainer.appendChild(unorderedListElements);
};

alki.renderTimeCustomersCookiesSum();
alki.sumCookiesSoldPerDay();
console.log(alki);
