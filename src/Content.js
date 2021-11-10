import "./Content.css";
import { Card } from "antd";

const { Meta } = Card;

function Content(props) {
  return (
    <div className="contentwork">
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
          <Meta title={props.all_Data.food_name} description={props.all_Data.price} />
        </Card>
        ,
      </div>
    </div>
  );
}

export default Content;
