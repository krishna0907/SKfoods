import React from "react";
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { Popover, Button } from "antd";
import { Tag } from "antd";
import { Card } from "antd";
import { useState } from "react";
import {useHistory} from "react-router-dom"

const { Meta } = Card;
const { Search } = Input;

function Landingpage(props) {
  const history = useHistory();
  var [textAreaInput, setTextAreaInput] = useState(false);
  var [filteration, setFilteration] = useState([]);

  function filterNvData(searchKeyword) {
    var filterNonVegData = props.all_data.reduce((accumulator, loopObject) => {
      var fairloop = loopObject.menu_available.non_veg.filter((f) => {
        return f.food_name.toUpperCase().includes(searchKeyword.toUpperCase());
      });
      accumulator.push(...fairloop);
      return accumulator;
    }, []);

    var unshiftFunction = filterNonVegData[0].food_name.split(" ").map((e) => {
        if (e.indexOf(searchKeyword) != -1) {
          return e;
        }
      })
      .filter((g) => {
        return g != undefined;
      })[0];
    let unshiftObject = {
      food_name: unshiftFunction,
      votes: "100",
      price: "200",
      category:"Category"
    };

    filterNonVegData.unshift(unshiftObject);
    setFilteration(filterNonVegData);
  }

  function cardClick(uniqueCardClick){

    history.push({
      pathname: "/category-nv",
      state: uniqueCardClick.food_name,
    });


  }

  function inputContents() {
    return (
      <div>
        {textAreaInput == false ? (
          <div className="tags">
            <Tag>
              <a href="https://github.com/ant-design/ant-design/issues/1862">
                Link
              </a>
            </Tag>

            <Tag>
              <a href="https://github.com/ant-design/ant-design/issues/1862">
                Link
              </a>
            </Tag>

            <Tag>
              <a href="https://github.com/ant-design/ant-design/issues/1862">
                Link
              </a>
            </Tag>

            <Tag>
              <a href="https://github.com/ant-design/ant-design/issues/1862">
                Link
              </a>
            </Tag>
          </div>
        ) : (
          <div>
            {filteration.map((e) => (
              <div
                onClick={() => {
                  cardClick(e);
                }}
              >
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://b.zmtcdn.com/data/homepage_dish_data/2/e1fde054d08a7287e01ef15d47174b8c.png"
                    />
                  }
                >
                  <Meta title={e.food_name} description={e.category ? e.category:e.price} />
                </Card>
                ,
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <img
        className="image1"
        src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
      ></img>
      <img
        className="image2"
        src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
      ></img>
      <h1 className="subheading">Discover the best food & drinks in Chennai</h1>

      <Space align="center" className="searchbar">
        <div>
          <Popover
            content={inputContents}
            title="Recent Search"
            trigger="click"
            // visible={}
            // onVisibleChange={}
            placement="bottom"
          >
            <Search
              placeholder="input search text"
              onChange={(e) => {
                filterNvData(e.currentTarget.value);
                setTextAreaInput(true);
              }}
              allowClear
              // onSearch={onSearch}
              style={{ width: 500 }}
            />
          </Popover>
        </div>
      </Space>
    </div>
  );
}

export default Landingpage;
