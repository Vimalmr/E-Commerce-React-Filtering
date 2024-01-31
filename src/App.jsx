import { useState } from "react";
import Nav from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Card from "./Components/Card.jsx";
import './index.css';


//Db
import products from "./Db/data.jsx";

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const[query, setQuery] = useState("");

  
  //input Filter
  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1);
  
  //Radio Filter
  const handleChange = event => {
    setSelectedCategory(event.target.value);
  }
  
  //Button Filter
  const handleClick = event => {
    setSelectedCategory(event.target.value);
  }
  
  function filteredData(products, selected, query){
    let filteredProducts = products;

    //Filter Input Items
    if(query){
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if(selected){
      filteredProducts = filteredProducts.filter(
        ({category, color, company, newPrice, title}) =>
        category === selected || color === selected || company === selected || newPrice === selected || title === selected);
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
      <Card 
      key={Math.random()}
      img = {img}
      title = {title}
      star = {star}
      reviews = {reviews}
      prevPrice = {prevPrice}
      newPrice = {newPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </>
  );
}

export default App
