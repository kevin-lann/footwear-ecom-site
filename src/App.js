import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import Card from "./components/Card"

import {useState} from "react"

import products from "./data/data"

import "./index.css"


function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  // input filter ------------------------------------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  // all products that have query as a substring somewhere in its name
  const filteredItems = products.filter(product => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // radio filter ---------------------------------------
  const handleChange = event => {
    setSelectedCategory(event.target.value); // sets to value of radio select
  }

  // buttons filter -------------------------------------
  const handleClick = event => {
    setSelectedCategory(event.target.value);
  }


  // MAIN FILTERING FN =====================================
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // first filter based on query in search bar
    if(query) {
      filteredProducts = filteredItems;
    }

    // filter once more based on category selection
    // Note: only one categorical filter at a time eg. women's flats will render -all- flats bc flats was the last category selected
    if(selected) {
      filteredProducts = filteredProducts.filter(
        (product) => 
          product.category === selected || 
          product.color === selected || 
          product.company === selected ||
          product.newPrice == selected || 
          product.title === selected ||
          product.gender === selected
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card key={Math.random}
        img = {img}
        title ={title}
        star = {star}
        reviews = {reviews}
        prevPrice = {prevPrice} 
        newPrice = {newPrice}
      />
    ));

  }
  // ===================================================

  const result = filteredData(products, selectedCategory, query);

  return <>
    <Sidebar handleChange={handleChange}/>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
  </>
    
}

export default App;
