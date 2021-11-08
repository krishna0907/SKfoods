import "./MainBody.css";
import { Card } from "antd";
import { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

function MainBody(props) {

let historyOfData= useHistory();

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

  return (
    <div>
      {nextFilteration.map((h) => (
        <div>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title={h.food_name} description={h.price} />
          </Card>
          
        </div>
      ))}
    </div>
  );
}

export default MainBody;
