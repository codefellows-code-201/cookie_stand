'use strict';
//Random Number Function from MDN
//All stores are open 6 AM to 8 PM
var hoursOpen = ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'];

var totalCookies = 0;

//Object Literal - Store #1
var firstAndPike = {
  name: 'Salmon Cookies, First & Pike',
  min: 23,
  max: 65,
  averageCookiesSoldPerCustomer: 6.3,
  cookiesSoldEachHour: [],
  randomCustomersPerHour: [],
  totalCookiesPerDay:[]
};

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

firstAndPike.calculateAvgCustomersPerHour();
firstAndPike.calculateCookiesPurchasedPerHour();
firstAndPike.sumCookiesSoldPerDay();
console.log(firstAndPike);


// //Object Literal - Store #2
var seaTacAirport = {
  name: 'Salmon Cookies, SeaTac Airport',
  min: 3,
  max: 24,
  averageCookiesSoldPerCustomer: 1.2,
  cookiesSoldEachHour: [],
  randomCustomersPerHour: [],
  totalCookiesPerDay:[]
};

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

seaTacAirport.calculateAvgCustomersPerHour();
seaTacAirport.calculateCookiesPurchasedPerHour();
seaTacAirport.sumCookiesSoldPerDay();
console.log(seaTacAirport);

//Object Literal - Store #3
var seattleCenter = {
  name: 'Salmon Cookies, Seattle Center',
  min: 11,
  max: 38,
  averageCookiesSoldPerCustomer: 3.7,
  cookiesSoldEachHour:[],
  randomCustomersPerHour: [],
  totalCookiesPerDay:[]
};

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

seattleCenter.calculateAvgCustomersPerHour();
seattleCenter.calculateCookiesPurchasedPerHour();
seattleCenter.sumCookiesSoldPerDay();
console.log(seattleCenter);

//Object Literal - Store #4
var capitolHill = {
  name: 'Salmon Cookies, Capitol Hill',
  min: 20,
  max: 38,
  averageCookiesSoldPerCustomer: 2.3,
  cookiesSoldEachHour:[],
  randomCustomersPerHour: [],
  totalCookiesPerDay:[]
};

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

capitolHill.calculateAvgCustomersPerHour();
capitolHill.calculateCookiesPurchasedPerHour();
capitolHill.sumCookiesSoldPerDay();
console.log(capitolHill);

//Object Literal - Store #5
var alki = {
  name: 'Salmon Cookies, Alki',
  min: 2,
  max: 16,
  averageCookiesSoldPerCustomer: 4.6,
  cookiesSoldEachHour:[],
  randomCustomersPerHour: [],
  totalCookiesPerDay:[]
};

alki.calculateAvgCustomersPerHour = function() {
  for(var i = 0 ; i < hoursOpen.length ; i++) {
    var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1 )) + this.min;
    this.randomCustomersPerHour.push(randomCustomers);
  }
};

alki.calculateCookiesPurchasedPerHour = function() {
  for(var i = 0 ; i <hoursOpen.length ; i++) {
    var cookiesPurchasedPerHour = Math.round(this.randomCustomersPerHour[i] * this.averageCookiesSoldPerCustomer);
    this.cookiesSoldEachHour.push(cookiesPurchasedPerHour);
  }
};

alki.sumCookiesSoldPerDay = function() {
  for(var i = 0; i < this.cookiesSoldEachHour.length ; i++)
    totalCookies += this.cookiesSoldEachHour[i];
  this.totalCookiesPerDay.push(totalCookies);
};

alki.calculateAvgCustomersPerHour();
alki.calculateCookiesPurchasedPerHour();
alki.sumCookiesSoldPerDay();
console.log(alki);
