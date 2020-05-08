import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
import SliderRecientes from "./components/Home/SliderRecientes/SliderRecientes";
import UserForm from "./components/Register/UserForm";
import About from "./components/About/About";
import Search from "./components/Search/Search";
import Categories from "./components/Categories/Categories";
import Category from "./components/Categories/Category/Category";
import Login from "./components/Login/Login";
import Favicon from 'react-favicon';
import zelda from './logoZelda.png'
import  Profile  from "./components/Profile/Profile";
import  NotFound  from "./components/NotFound/NotFound";
import ProductDetailFuncional from "./components/ProductDetail/ProductDetailFuncional";
function App() {
  return (
      <Router><main>
    <div className="App">
    <Favicon url={zelda} />
      <header className="App-header">
        <Header/>
      </header>{" "}
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/register" component={UserForm}/>
      <Route path="/Login" component={Login}/>
      <Route path="/about" component={About}/>
      <Route path="/search/:productName" component={Search}/>
      <Route path="/categories" component={Categories}/>
      <Route path="/category/:categoryName" component={Category}/>
      <Route path="/slider" component={SliderRecientes}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/product/:_id" component={ProductDetailFuncional} exact/>
      <Route exact path='/**'  component={NotFound}/>
      </Switch>
    <Footer/>
    </div>
    </main>
    </Router>
  );
}

export default App;
