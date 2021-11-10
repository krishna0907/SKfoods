import React from "react";
import Landingpage from "./LandingPage";
import SecondPage from "./SecondPage";
import "./App.css";
// import Backend from './backend.js'
import "antd/dist/antd.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import HotelPage from "./HotelPage";

function App() {
  var [collectionOfData, setCollectionOfData] = useState([]);
  useEffect(() => {
    async function getData() {
      var foodData = await axios.get(
        "https://rcz-backend-arvinth.herokuapp.com/api/allResorts"
      );
      setCollectionOfData(foodData.data);
    }
    getData();
  }, []);

  return (
    <Router>
      <div className="Coverimage">
        <Switch>
          <Route path="/" exact>
          <Landingpage all_data={collectionOfData} />
          </Route>
        </Switch>

        <Switch>
          <Route path="/category-nv" >
          <SecondPage all_data={collectionOfData}/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/Hotel" >
          <HotelPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
