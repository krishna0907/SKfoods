import React from 'react'
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import { Popover, Button } from 'antd';



const { Search } = Input;

function tags(){ 

return(

<div>
<img className="image1" src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"></img>
            <img className="image2" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"></img>
            <h1 className="subheading">Discover the best food & drinks in Chennai</h1>


            <Space align="center" className="searchbar">
                <div>
                <Search placeholder="input search text" 
                allowClear 
                // onSearch={onSearch} 
                style={{ width: 500 }} />

     <Popover
        content={tags}
        title="Title"
        trigger="click"
        // visible={}
        // onVisibleChange={}
      >

      </Popover>



                </div>

            </Space>
</div>    

);


}

export default LandingPage;