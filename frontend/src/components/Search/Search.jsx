import React from "react";
import { products } from '../../redux/actions/products';
import {connect} from 'react-redux';


function Search(props) {
  
const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 React.useEffect(() => {
products()
    const results = props.products.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
      
    <div className="App">
    
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({products:state.product.productsName});
export default connect(mapStateToProps)(Search)