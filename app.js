'use strict';
//Random Number Function from MDN
//Object Literal - Store #1
var firstAndPike = {
  name: 'Salmon Cookies, First & Pike',
  min: 23,
  max: 65,
  averageCookies: 6.3, //be more specific about variable name
  cookiesPurchasedPerHour: [],
  customersPerHour: [],
  
// move below function outside the object and add store name as dot notation at the beginning. firstAndPike.calculateAvgCustomersPerHour

  calculateAvgCustomersPerHour: function (){
    for(var i = 0 ; i < 15 ; i++) {
      var min = Math.ceil(this.min);
      var max = Math.floor(this.max);
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
    }
    return customers;
  },

  calculateAvgCookiesPerHour: function (){
    for(var i = 0 ; i < 15 ; i++) {
      var cookiesPerHour = Math.floor(this.customersPerHour[i] * this.averageCookies);
      this.cookiesPurchasedPerHour.push(cookiesPerHour);
    }
    return cookiesPerHour;
  }

  // cookiesPurchased: this.averageCookies * this.avgCustomers(),
};


console.log(firstAndPike);
console.log(firstAndPike.calculateAvgCustomersPerHour());
console.log(firstAndPike);

// //Object Literal - Store #2
// var seaTacAirport = {
//   name: 'Salmon Cookies, SeaTac Airport',
//   min: 3,
//   max: 24,
//   averageCookies: 1.2,
//   cookiesPerHour:[],
//   avgCustomers: function (min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     var customers = Math.floor(Math.random() * (max - min + 1)) + min;
//     return customers;
// };

// //Object Literal - Store #3
// var SeattleCenter = {
//   name: 'Salmon Cookies, Seattle Center',
//   min: 11,
//   max: 38,
//   averageCookies: 3.7,
//   cookiesPerHour:[],
//   avgCustomers: function (min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     var customers = Math.floor(Math.random() * (max - min + 1)) + min;
//     return customers;
// };

// //Object Literal - Store #4
// var capitolHill = {
//   name: 'Salmon Cookies, Capitol Hill',
//   min: 20,
//   max: 38,
//   averageCookies: 2.3,
//   cookiesPerHour:[],
//   avgCustomers: function (min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     var customers = Math.floor(Math.random() * (max - min + 1)) + min;
//     return customers;
// };

// //Object Literal - Store #5
// var alki = {
//   name: 'Salmon Cookies, Alki',
//   min: 2,
//   max: 16,
//   averageCookies: 4.6,
//   cookiesPerHour:[],
//   avgCustomers: function (min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     var customers = Math.floor(Math.random() * (max - min + 1)) + min;
//     return customers;
// };
