// import "./SecondPage.css";
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { Popover, Button } from "antd";
import { Tag } from "antd";
import { Card } from "antd";
import { useState } from "react";
import React from "react";


const { Meta } = Card;
const { Search } = Input;

function SecondPage(props) {
  var [textAreaInput, setTextAreaInput] = useState(false);
  var [filteration, setFilteration] = useState([]);
  
  function filterNvData(searchKeyword) {
    var filterNonVegData = props.all_data.reduce((accumulator, loopObject) => {
      var fairloop = loopObject.menu_available.non_veg.filter((f) => {
        return f.food_name.includes(searchKeyword);
      });
      accumulator.push(...fairloop);
      return accumulator;
    }, []);

    setFilteration(filterNonVegData);
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
              <div>
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
                  <Meta title={e.food_name} description={e.price} />
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
      <Space align="center" className="npm start">
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

export default SecondPage;