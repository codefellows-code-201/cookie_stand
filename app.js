'use strict';
//Random Number Function from MDN
//All stores are open 6 AM to 8 PM
var hoursOpen = ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'];

var totalCookies = 0;

//Object Literal - Store #1
var firstAndPike = {
  name: 'Salmon Cookies, First & Pike',
  customerHeader: 'Customers Each Hour',
  cookieHeader: 'Cookies Sold Each Hour',
  timeHeader: 'Hour of the Day',
  cookieTotalDescription: 'Total:',
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

firstAndPike.renderTime = function(){
  var storesContainer0 = document.getElementById('stores');
  var storeNameEl = document.createElement('h2');
  storeNameEl.textContent = this.name;
  storesContainer0.appendChild(storeNameEl);
  var listNameEl0 = document.createElement('h3');
  listNameEl0.textContent = this.timeHeader;
  storesContainer0.appendChild(listNameEl0);

  var unorderedListElement0 = document.createElement('ul');
  for(var i =0 ; i < hoursOpen.length ; i++){
    var listItemEl0 = document.createElement('li');
    listItemEl0.textContent = hoursOpen[i];
    unorderedListElement0.appendChild(listItemEl0);
  }
  storesContainer0.appendChild(unorderedListElement0);
};

firstAndPike.renderCustomers = function(){
  this.calculateAvgCustomersPerHour();
  var storesContainer = document.getElementById('stores');
  var listNameEl = document.createElement('h3');
  listNameEl.textContent = this.customerHeader;
  storesContainer.appendChild(listNameEl);

  var unorderedListElement = document.createElement('ul');
  for(var i =0 ; i < this.randomCustomersPerHour.length ; i++){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.randomCustomersPerHour[i];
    unorderedListElement.appendChild(listItemEl);
  }
  storesContainer.appendChild(unorderedListElement);
};

firstAndPike.renderCookies = function(){
  this.calculateCookiesPurchasedPerHour();
  var storesContainer2 = document.getElementById('stores');
  var listNameEl2 = document.createElement('h3');
  listNameEl2.textContent = this.cookieHeader;
  storesContainer2.appendChild(listNameEl2);

  var unorderedListElement2 = document.createElement('ul');
  for(var i =0 ; i < this.cookiesSoldEachHour.length ; i++){
    var listItemEl2 = document.createElement('li');
    listItemEl2.textContent = this.cookiesSoldEachHour[i];
    unorderedListElement2.appendChild(listItemEl2);
  }
  storesContainer2.appendChild(unorderedListElement2);
};


firstAndPike.sumCookiesSoldPerDay();
firstAndPike.renderTime();
firstAndPike.renderCustomers();
firstAndPike.renderCookies();

console.log(firstAndPike);


// //Object Literal - Store #2
var seaTacAirport = {
  name: 'Salmon Cookies, SeaTac Airport',
  customerHeader: 'Customers Each Hour',
  cookieHeader: 'Cookies Sold Each Hour',
  timeHeader: 'Hour of the Day',
  cookieTotalDescription: 'Total:',
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

seaTacAirport.renderTime = function(){
  var storesContainer0 = document.getElementById('stores');
  var storeNameEl = document.createElement('h2');
  storeNameEl.textContent = this.name;
  storesContainer0.appendChild(storeNameEl);
  var listNameEl0 = document.createElement('h3');
  listNameEl0.textContent = this.timeHeader;
  storesContainer0.appendChild(listNameEl0);

  var unorderedListElement0 = document.createElement('ul');
  for(var i =0 ; i < hoursOpen.length ; i++){
    var listItemEl0 = document.createElement('li');
    listItemEl0.textContent = hoursOpen[i];
    unorderedListElement0.appendChild(listItemEl0);
  }
  storesContainer0.appendChild(unorderedListElement0);
};

seaTacAirport.renderCustomers = function(){
  this.calculateAvgCustomersPerHour();
  var storesContainer = document.getElementById('stores');
  var listNameEl = document.createElement('h3');
  listNameEl.textContent = this.customerHeader;
  storesContainer.appendChild(listNameEl);

  var unorderedListElement = document.createElement('ul');
  for(var i =0 ; i < this.randomCustomersPerHour.length ; i++){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.randomCustomersPerHour[i];
    unorderedListElement.appendChild(listItemEl);
  }
  storesContainer.appendChild(unorderedListElement);
};

seaTacAirport.renderCookies = function(){
  this.calculateCookiesPurchasedPerHour();
  var storesContainer2 = document.getElementById('stores');
  var listNameEl2 = document.createElement('h3');
  listNameEl2.textContent = this.cookieHeader;
  storesContainer2.appendChild(listNameEl2);

  var unorderedListElement2 = document.createElement('ul');
  for(var i =0 ; i < this.cookiesSoldEachHour.length ; i++){
    var listItemEl2 = document.createElement('li');
    listItemEl2.textContent = this.cookiesSoldEachHour[i];
    unorderedListElement2.appendChild(listItemEl2);
  }
  storesContainer2.appendChild(unorderedListElement2);
};

seaTacAirport.sumCookiesSoldPerDay();
seaTacAirport.renderTime();
seaTacAirport.renderCustomers();
seaTacAirport.renderCookies();
console.log(seaTacAirport);

//Object Literal - Store #3
var seattleCenter = {
  name: 'Salmon Cookies, Seattle Center',
  customerHeader: 'Customers Each Hour',
  cookieHeader: 'Cookies Sold Each Hour',
  timeHeader: 'Hour of the Day',
  cookieTotalDescription: 'Total:',
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

seattleCenter.renderTime = function(){
  var storesContainer0 = document.getElementById('stores');
  var storeNameEl = document.createElement('h2');
  storeNameEl.textContent = this.name;
  storesContainer0.appendChild(storeNameEl);
  var listNameEl0 = document.createElement('h3');
  listNameEl0.textContent = this.timeHeader;
  storesContainer0.appendChild(listNameEl0);

  var unorderedListElement0 = document.createElement('ul');
  for(var i =0 ; i < hoursOpen.length ; i++){
    var listItemEl0 = document.createElement('li');
    listItemEl0.textContent = hoursOpen[i];
    unorderedListElement0.appendChild(listItemEl0);
  }
  storesContainer0.appendChild(unorderedListElement0);
};

seattleCenter.renderCustomers = function(){
  this.calculateAvgCustomersPerHour();
  var storesContainer = document.getElementById('stores');
  var listNameEl = document.createElement('h3');
  listNameEl.textContent = this.customerHeader;
  storesContainer.appendChild(listNameEl);

  var unorderedListElement = document.createElement('ul');
  for(var i =0 ; i < this.randomCustomersPerHour.length ; i++){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.randomCustomersPerHour[i];
    unorderedListElement.appendChild(listItemEl);
  }
  storesContainer.appendChild(unorderedListElement);
};

seattleCenter.renderCookies = function(){
  this.calculateCookiesPurchasedPerHour();
  var storesContainer2 = document.getElementById('stores');
  var listNameEl2 = document.createElement('h3');
  listNameEl2.textContent = this.cookieHeader;
  storesContainer2.appendChild(listNameEl2);

  var unorderedListElement2 = document.createElement('ul');
  for(var i =0 ; i < this.cookiesSoldEachHour.length ; i++){
    var listItemEl2 = document.createElement('li');
    listItemEl2.textContent = this.cookiesSoldEachHour[i];
    unorderedListElement2.appendChild(listItemEl2);
  }
  storesContainer2.appendChild(unorderedListElement2);
};


seattleCenter.sumCookiesSoldPerDay();
seattleCenter.renderTime();
seattleCenter.renderCustomers();
seattleCenter.renderCookies();
console.log(seattleCenter);

//Object Literal - Store #4
var capitolHill = {
  name: 'Salmon Cookies, Capitol Hill',
  customerHeader: 'Customers Each Hour',
  cookieHeader: 'Cookies Sold Each Hour',
  timeHeader: 'Hour of the Day',
  cookieTotalDescription: 'Total:',
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

capitolHill.renderTime = function(){
  var storesContainer0 = document.getElementById('stores');
  var storeNameEl = document.createElement('h2');
  storeNameEl.textContent = this.name;
  storesContainer0.appendChild(storeNameEl);
  var listNameEl0 = document.createElement('h3');
  listNameEl0.textContent = this.timeHeader;
  storesContainer0.appendChild(listNameEl0);

  var unorderedListElement0 = document.createElement('ul');
  for(var i =0 ; i < hoursOpen.length ; i++){
    var listItemEl0 = document.createElement('li');
    listItemEl0.textContent = hoursOpen[i];
    unorderedListElement0.appendChild(listItemEl0);
  }
  storesContainer0.appendChild(unorderedListElement0);
};

capitolHill.renderCustomers = function(){
  this.calculateAvgCustomersPerHour();
  var storesContainer = document.getElementById('stores');
  var listNameEl = document.createElement('h3');
  listNameEl.textContent = this.customerHeader;
  storesContainer.appendChild(listNameEl);

  var unorderedListElement = document.createElement('ul');
  for(var i =0 ; i < this.randomCustomersPerHour.length ; i++){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.randomCustomersPerHour[i];
    unorderedListElement.appendChild(listItemEl);
  }
  storesContainer.appendChild(unorderedListElement);
};

capitolHill.renderCookies = function(){
  this.calculateCookiesPurchasedPerHour();
  var storesContainer2 = document.getElementById('stores');
  var listNameEl2 = document.createElement('h3');
  listNameEl2.textContent = this.cookieHeader;
  storesContainer2.appendChild(listNameEl2);

  var unorderedListElement2 = document.createElement('ul');
  for(var i =0 ; i < this.cookiesSoldEachHour.length ; i++){
    var listItemEl2 = document.createElement('li');
    listItemEl2.textContent = this.cookiesSoldEachHour[i];
    unorderedListElement2.appendChild(listItemEl2);
  }
  storesContainer2.appendChild(unorderedListElement2);
};

capitolHill.sumCookiesSoldPerDay();
capitolHill.renderTime();
capitolHill.renderCustomers();
capitolHill.renderCookies();
console.log(capitolHill);

//Object Literal - Store #5
var alki = {
  name: 'Salmon Cookies, Alki',
  customerHeader: 'Customers Each Hour',
  cookieHeader: 'Cookies Sold Each Hour',
  timeHeader: 'Hour of the Day',
  cookieTotalDescription: 'Total:',
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

alki.renderTime = function(){
  var storesContainer0 = document.getElementById('stores');
  var storeNameEl = document.createElement('h2');
  storeNameEl.textContent = this.name;
  storesContainer0.appendChild(storeNameEl);
  var listNameEl0 = document.createElement('h3');
  listNameEl0.textContent = this.timeHeader;
  storesContainer0.appendChild(listNameEl0);

  var unorderedListElement0 = document.createElement('ul');
  for(var i =0 ; i < hoursOpen.length ; i++){
    var listItemEl0 = document.createElement('li');
    listItemEl0.textContent = hoursOpen[i];
    unorderedListElement0.appendChild(listItemEl0);
  }
  storesContainer0.appendChild(unorderedListElement0);
};

alki.renderCustomers = function(){
  this.calculateAvgCustomersPerHour();
  var storesContainer = document.getElementById('stores');
  var listNameEl = document.createElement('h3');
  listNameEl.textContent = this.customerHeader;
  storesContainer.appendChild(listNameEl);

  var unorderedListElement = document.createElement('ul');
  for(var i =0 ; i < this.randomCustomersPerHour.length ; i++){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.randomCustomersPerHour[i];
    unorderedListElement.appendChild(listItemEl);
  }
  storesContainer.appendChild(unorderedListElement);
};

alki.renderCookies = function(){
  this.calculateCookiesPurchasedPerHour();
  var storesContainer2 = document.getElementById('stores');
  var listNameEl2 = document.createElement('h3');
  listNameEl2.textContent = this.cookieHeader;
  storesContainer2.appendChild(listNameEl2);

  var unorderedListElement2 = document.createElement('ul');
  for(var i =0 ; i < this.cookiesSoldEachHour.length ; i++){
    var listItemEl2 = document.createElement('li');
    listItemEl2.textContent = this.cookiesSoldEachHour[i];
    unorderedListElement2.appendChild(listItemEl2);
  }
  storesContainer2.appendChild(unorderedListElement2);
};

alki.sumCookiesSoldPerDay();
alki.renderTime();
alki.renderCustomers();
alki.renderCookies();
console.log(alki);
