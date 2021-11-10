import "./MainBody.css";
import {Badge, Card } from "antd";
import { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";
import { Carousel } from 'antd';



const { Meta } = Card;
const contentStyle = {
  height: '100px',
  color: '#fff',
  textAlign: 'center',
  background: 'black',
};


function MainBody(props) {
  

let historyOfData= useHistory();
const history = useHistory();


// console.log(historyOfData)
console.log(props.all_Data);
var [nextFilteration ,setNextFilteration] = useState([]);

useEffect(() => {

  let backendDataTo = props.all_Data;
  let filterHotels = backendDataTo.map(h => {

      let justifySearch = h.menu_available.non_veg.filter(e => { return e.food_name.includes(historyOfData.location.state) });

      if (justifySearch.length > 0) {
          return { ...h }
      }

  }).filter(e => { return e != undefined })
  setNextFilteration(filterHotels);

}, [])

function dataToThirdPage(uniqueCard){

  history.push({
    pathname: "/Hotel",
    state: uniqueCard,
  });


}
  return (
    <div className="styleThisPage">
      {nextFilteration.map((h) => (
        <div className="cardSecondPage"
        onClick={() => {
          dataToThirdPage(h);
        }}
      >
             <Badge.Ribbon text={(h.offer_available).split("-")[0]+ "off"} placement="start">

          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://b.zmtcdn.com/data/dish_photos/d82/78d675d051a59290141f258a857ded82.jpg"
              />
            }
          > <div className="time">
            <Badge count={Math.floor(Math.random()*30)+ " " + "mins"}></Badge>
            </div>
            <Meta title={h.hotel_name} description={h.average_price_to_order} />

            
            <div className="carousel">
          <Carousel autoplay>
          <div classname="carousal content">
            <h3 style={contentStyle}>1</h3>
          </div>
          <div classname="carousal content">
            <h3 style={contentStyle}>2</h3>
          </div>
          </Carousel></div> 


          </Card>
          </Badge.Ribbon>
          
        </div>
       
      ))}
    </div>
  );
}

export default MainBody;
