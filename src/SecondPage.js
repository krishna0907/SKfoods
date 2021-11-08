import NavyBar from "./NavyBar";
import MidBody from "./MidBody";
import MainBody from "./MainBody";
// import "./SecondPage.css";
// import "antd/dist/antd.css";
// import { Input, Space } from "antd";
// import { Popover, Button } from "antd";
// import { Tag } from "antd";
// import { Card } from "antd";
// import { useState } from "react";
// import React from "react";
// import { Avatar, Image } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { Breadcrumb } from 'antd'





// const { Meta } = Card;
// const { Search } = Input;

 function SecondPage(props) {
//   var [textAreaInput, setTextAreaInput] = useState(false);
//   var [filteration, setFilteration] = useState([]);
  
//   function filterNvData(searchKeyword) {
//     var filterNonVegData = props.all_data.reduce((accumulator, loopObject) => {
//       var fairloop = loopObject.menu_available.non_veg.filter((f) => {
//         return f.food_name.includes(searchKeyword);
//       });
//       accumulator.push(...fairloop);
//       return accumulator;
//     }, []);

//     setFilteration(filterNonVegData);
//   }
  
//   function inputContents() {
//     return (
//       <div>
//         {textAreaInput == false ? (
//           <div className="tags">
//             <Tag>
//               <a href="https://github.com/ant-design/ant-design/issues/1862">
//                 Link
//               </a>
//             </Tag>

//             <Tag>
//               <a href="https://github.com/ant-design/ant-design/issues/1862">
//                 Link
//               </a>
//             </Tag>

//             <Tag>
//               <a href="https://github.com/ant-design/ant-design/issues/1862">
//                 Link
//               </a>
//             </Tag>

//             <Tag>
//               <a href="https://github.com/ant-design/ant-design/issues/1862">
//                 Link
//               </a>
//             </Tag>
//           </div>
//         ) : (
//           <div>
//             {filteration.map((e) => (
//               <div>
//                 <Card
//                   hoverable
//                   style={{ width: 240 }}
//                   cover={
//                     <img
//                       alt="example"
//                       src="https://b.zmtcdn.com/data/homepage_dish_data/2/e1fde054d08a7287e01ef15d47174b8c.png"
//                     />
//                   }
//                 >
//                   <Meta title={e.food_name} description={e.price} />
//                 </Card>
//                 ,
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }


  
  return ( 
    <div className="Container">

<NavyBar  all_Data={props.all_data}/>
<MidBody/>
<MainBody all_Data={props.all_data}/>



      {/* <Space align="center">
        <div className="heading">
          <h1>
            ZOMATO
          </h1>
        </div>
        <div>
          <Popover
            content={inputContents}
            title="Recent Search"
            trigger="click"
            // visible={}
            // onVisibleChange={}
            placement="bottom"
          >
            <div className="Search">
            <Search
              
              placeholder="input search text"
              onChange={(e) => {
                filterNvData(e.currentTarget.value);
                setTextAreaInput(true);
              }}
              allowClear
              // onSearch={onSearch}
              style={{ width: 600 }}
            />
             </div>
          </Popover>
        </div>
        <div className="profile">
        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
        </div>
        

<div className="Bread">
<Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
  </Breadcrumb>,
</div>

<div className="Avatar2">
<Avatar size={64} icon={<UserOutlined />} />
</div>

<div className="Delivery">
  <h2>Delivery</h2>
</div>


<div className="Avatar3">
<Avatar size={64} icon={<UserOutlined />} />
</div>

<div className="Diningout">
  <h2>Dining Out</h2>
</div>

<div className="Avatar4">
<Avatar size={64} icon={<UserOutlined />} />
</div>

<div className="Nightlife">
  <h2>Nightlife</h2>
</div>

<div>


</div>



      </Space> */}




      </div>
   
  );
}

export default SecondPage;