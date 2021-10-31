import React from 'react'
import { Input, Space } from 'antd';
import "./App.css"
import { Tag } from 'antd';
import { Popover, Button } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

// var [state,setstate] = usestate(false);
// function function1(){
// setstate(true)
// }


function tags(){
// var text = <span>Resent search</span>;
return (
    <div className="tags">
        <Tag className="tag1">
            <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
        </Tag>
        <Tag className="tag2">
            <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
        </Tag>
    </div>
);}
export default function App() {
    return (
        <div className="coverimage">
            <img className="image1" src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"></img>
            <img className="image2" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"></img>
            <h1 className="subheading">Discover the best food & drinks in Chennai</h1>

            <Space align="center" className="searchbar">
                <div>
                    <Popover

                        content={tags}

                        title="Recent Search"
                        trigger="click"
                        // visible={flase}
                    // onVisibleChange={true}
                    placement="bottom"

                    ><Search placeholder="input search text" allowClear //onSearch={onSearch}
                        style={{ width: 500 }} />
                    </Popover>
                </div>
            </Space>

        </div>


    )
}
