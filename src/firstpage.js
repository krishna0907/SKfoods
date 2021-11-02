// import React from 'react'
// import { Input, Space } from 'antd';
// // import "./firstpage.css"
// import { Tag } from 'antd';
// import { Popover, Button } from 'antd';
// import 'antd/dist/antd.css';
// import { Card } from 'antd';
// import {useState} from 'react';



const { Search } = Input;
const { Meta } = Card;
debugger



function firstPage() {
    var [textInSearchInput,setTextInSearchInput] = useState(false);

    var[changeState,setChangeState] = useState(false);
    function change(){
    setChangeState(true);
} 
    function tags(){ 
        // var text = <span>Resent search</span>;
        // debugger
        // return ( 
        //       <div> <Card
        //             hoverable
        //             style={{ width: 240 }}
        //             cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        //           >
        //             <Meta title="Europe Street beat" description="www.instagram.com" />
        //           </Card>,</div>
        // )
        // };
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
                        // visible={changeState}
                        // onVisibleChange={change}
                    placement="bottom"

                    ><Search placeholder="input search text" 
                    // onChange={()=>{setTextInSearchInput(true)}}
                    allowClear //onSearch={onSearch}
                        style={{ width: 500 }} />
                    </Popover>
                </div>
            </Space>

        </div>


    )
}
// export default Firstpage;