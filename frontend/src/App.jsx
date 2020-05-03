import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import UserForm from "./components/Register/UserForm";
import About from "./components/About/About";
import Categories from "./components/Categories/Categories";
import Category from "./components/Categories/Category/Category";
import Login from "./components/Login/Login";
// import Favicon from 'react-favicon';
import zelda from './logoZelda.png'
function App() {
  return (
      <Router><main>
    <div className="App">
    {/* <Favicon url={zelda} /> */}
      <header className="App-header">
        <Header/>
      </header>{" "}
      <Route exact path="/" component={Home}/>
      <Route path="/register" component={UserForm}/>
      <Route path="/Login" component={Login}/>
      <Route path="/about" component={About}/>
      <Route path="/categories" component={Categories}/>
      <Route path="/category/:categoryName" component={Category}/>
    <Footer/>
    </div>
    </main>
    </Router>
  );
}

export default App;
