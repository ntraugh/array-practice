// if we have a lot of components we can use the index to export all of them to the App.js
// that way we do it in less lines of code in the App
// import { Navbar, CryptoList, Footer, CryptoMenu } from "./components" for example


export { default as Navbar } from "./Navbar"
export { default as Homepage } from "./Homepage"
export { default as News } from "./News"
export { default as CryptoDetails } from "./CryptoDetails"
export { default as Cryptocurrencies } from "./Cryptocurrencies"