import HeadPart from "./HeadPart";
import NavyBar from "./NavyBar";
import Content from "./Content";
import "./HotelPage.css";
import {useHistory} from "react-router-dom"


function HotelPage(props) {
const history = useHistory();
var dataobj = history.location.state.
  return (
    <div className="homePageWork">
      <div>
        <NavyBar all_Data={props.all_data} />
      </div>
      <HeadPart />
      <div class="info">
      <h1>{props.all_data.hotel_name}</h1>
       <h3>{props.all_data.average_price_to_order}</h3>
          <h4>{props.all_data.kind_of_food_available}</h4>

      </div>
      <div>
        <Content all_Data={props.all_data.menu_available.non_veg}/> 
      </div>
    </div>
  );
}

export default HotelPage;
