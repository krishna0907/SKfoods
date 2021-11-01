import React from 'react'
import { Input, Space } from 'antd';
import "./firstpage.css"
import { Tag } from 'antd';
import { Popover, Button } from 'antd';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {useState} from 'react';



const { Search } = Input;
const { Meta } = Card;
debugger



function firstpage() {
    var [textInSearchInput,setTextInSearchInput] = useState(false);

    var[changeState,setChangeState] = useState(false);
    function change(){
    setChangeState(true);
} 
    function tags(){ 
        // var text = <span>Resent search</span>;
        debugger
        return ( 
              <div> <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>,</div>
        )
        };
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
                        visible={changeState}
                        onVisibleChange={change}
                    placement="bottom"

                    ><Search placeholder="input search text" 
                    onChange={()=>{setTextInSearchInput(true)}}
                    allowClear //onSearch={onSearch}
                        style={{ width: 500 }} />
                    </Popover>
                </div>
            </Space>

        </div>


    )
}

export default firstpage;


// const foodData =[
//     {
//         hotel_name : "Ente Keralam",
//         offer_available:"30%",
//         kind_of_food_available:"north and south",
//         average_price_to_order:"300 for one",
//         follows_all_covid_protocals: true,
//         promoted : true,
//         menu_available : {
//             non_veg : [
//                 {
//                     food_name: "Alleppey Chicken Curry",
//                     votes: 154,
//                     price:150,
//                 },
//                 {
//                     food_name: "Mutton Curry",
//                     votes: 54,
//                     price:200
//                 }
//             ],
//             veg:[
//                 {
//                     food_name: "Appam",
//                     votes: 154,
//                     price:150,
//                 }
//                 {
//                     food_name: "Pal Ada Payasam",
//                     votes: 154,
//                     price:150,
//                 }
//                 {
//                     food_name: "1 Wheet Parotta",
//                     votes: 154,
//                     price:150,
//                 }
//             ]
//         }
//     }
// ]





// const foodData =[
// {
//     hotel_name : "Domino's Pizza",
//     offer_available:"30%",
//     kind_of_food_available:" Pizza and Burger",
//     average_price_to_order:"300 for one",
//     follows_all_covid_protocals: true,
//     promoted : true,
//     menu_available : {
//         non_veg : [
//             {
//                 food_name: "Chicken Pizza",
//                 votes: 154,
//                 price:155,
//             },
//             {
//                 food_name: "Chicken burger",
//                 votes: 54,
//                 price:250
//             }
//         ],
//         veg:[
//             {
//                 food_name: "veg Pizza",
//                 votes: 154,
//                 price:300,
//             }
//             {
//                 food_name: "Mushroom Pizza",
//                 votes: 154,
//                 price:350,
//             }
//             {
//                 food_name: "Cheese Pizza",
//                 votes: 154,
//                 price:450,
//             }
//         ]
//     }
// }

// ]






// const foodData =[
//     {
//         hotel_name : "Pizza Hut",
//         offer_available:"30%",
//         kind_of_food_available:" Pizza and Burger",
//         average_price_to_order:"350 for one",
//         follows_all_covid_protocals: true,
//         promoted : true,
//         menu_available : {
//             non_veg : [
//                 {
//                     food_name: "Chicken Pizza",
//                     votes: 154,
//                     price:155,
//                 },
//                 {
//                     food_name: "Chicken burger",
//                     votes: 54,
//                     price:250
//                 }
//             ],
//             veg:[
//                 {
//                     food_name: "veg Pizza",
//                     votes: 154,
//                     price:300,
//                 }
//                 {
//                     food_name: "Mushroom Pizza",
//                     votes: 154,
//                     price:350,
//                 }
//                 {
//                     food_name: "Cheese Pizza",
//                     votes: 154,
//                     price:450,
//                 }
//             ]
//         }
//     }
    
//     ]



//     const foodData =[
//         {
//             hotel_name : "Sangeetha Desi Mane",
//             offer_available:"30%",
//             kind_of_food_available:"Traditional food and Europe dishes",
//             average_price_to_order:"300 for one",
//             follows_all_covid_protocals: true,
//             promoted : true,
//             menu_available : {
//                 non_veg : [
//                     {
//                         food_name: "Chicken Fried Rice",
//                         votes: 154,
//                         price:155,
//                     },
//                     {
//                         food_name: "Chicken biriyani",
//                         votes: 54,
//                         price:250
//                     }
//                 ],
//                 veg:[
//                     {
//                         food_name: "Veg Fried Rice",
//                         votes: 154,
//                         price:300,
//                     }
//                     {
//                         food_name: "Mushroom fried Rice",
//                         votes: 154,
//                         price:350,
//                     }
//                     {
//                         food_name: "Paneer Fired Rice",
//                         votes: 154,
//                         price:450,
//                     }
//                 ]
//             }
//         }
        
//         ]





//         const foodData =[
//             {
//                 hotel_name : "Saptagiri Tiffen Center",
//                 offer_available:"30%",
//                 kind_of_food_available:"Traditional food and tiffen",
//                 average_price_to_order:"100 for one",
//                 follows_all_covid_protocals: true,
//                 promoted : true,
//                 menu_available : {
//                     non_veg : [
//                         {
//                             food_name: "Chicken dosa",
//                             votes: 154,
//                             price:155,
//                         },
//                         {
//                             food_name: "Nandu dosa",
//                             votes: 54,
//                             price:250
//                         }
//                     ],
//                     veg:[
//                         {
//                             food_name: "Onion dosa",
//                             votes: 154,
//                             price:130,
//                         }
//                         {
//                             food_name: "Idly",
//                             votes: 154,
//                             price:100,
//                         }
//                         {
//                             food_name: "Poori",
//                             votes: 154,
//                             price:110,
//                         }
//                     ]
//                 }
//             }
            
//             ]


//             const foodData =[
//                 {
//                     hotel_name : "Hot Chips",
//                     offer_available:"35%",
//                     kind_of_food_available:"Veg Foods",
//                     average_price_to_order:"200 for one",
//                     follows_all_covid_protocals: true,
//                     promoted : true,
//                     menu_available : {
//                         non_veg : [
//                             {
//                                 food_name: "Chicken Fried Rice",
//                                 votes: 154,
//                                 price:155,
//                             },
//                             {
//                                 food_name: "Chicken biriyani",
//                                 votes: 54,
//                                 price:250
//                             }
//                         ],
//                         veg:[
//                             {
//                                 food_name: "Veg Fried Rice",
//                                 votes: 154,
//                                 price:300,
//                             }
//                             {
//                                 food_name: "Mushroom fried Rice",
//                                 votes: 154,
//                                 price:350,
//                             }
//                             {
//                                 food_name: "Paneer Fired Rice",
//                                 votes: 154,
//                                 price:450,
//                             }
//                         ]
//                     }
//                 }
                
//                 ]









//                 const foodData =[
//                     {
//                         hotel_name : "SS Hydrabad Biriyani",
//                         offer_available:"30%",
//                         kind_of_food_available:"Rice,Shawarma",
//                         average_price_to_order:"300 for one",
//                         follows_all_covid_protocals: true,
//                         promoted : true,
//                         menu_available : {
//                             non_veg : [
//                                 {
//                                     food_name: "Chicken Fried Rice",
//                                     votes: 154,
//                                     price:155,
//                                 },
//                                 {
//                                     food_name: "Chicken biriyani",
//                                     votes: 54,
//                                     price:250
//                                 }
//                             ],
//                             veg:[
//                                 {
//                                     food_name: "Veg Fried Rice",
//                                     votes: 154,
//                                     price:150,
//                                 }
//                                 {
//                                     food_name: "Mushroom fried Rice",
//                                     votes: 154,
//                                     price:200,
//                                 }
//                                 {
//                                     food_name: "Kuska",
//                                     votes: 154,
//                                     price:200,
//                                 }
//                             ]
//                         }
//                     }
                    
//                     ]




//                     const foodData =[
//                         {
//                             hotel_name : "Madurai Kumarn Mess",
//                             offer_available:"60%",
//                             kind_of_food_available:"Traditional food and North dishes",
//                             average_price_to_order:"300 for one",
//                             follows_all_covid_protocals: true,
//                             promoted : true,
//                             menu_available : {
//                                 non_veg : [
//                                     {
//                                         food_name: "Chicken Fried Rice",
//                                         votes: 154,
//                                         price:155,
//                                     },
//                                     {
//                                         food_name: "Chicken biriyani",
//                                         votes: 54,
//                                         price:250
//                                     }
//                                 ],
//                                 veg:[
//                                     {
//                                         food_name: "Veg Fried Rice",
//                                         votes: 154,
//                                         price:150,
//                                     }
//                                     {
//                                         food_name: "Mushroom fried Rice",
//                                         votes: 154,
//                                         price:130,
//                                     }
//                                     {
//                                         food_name: "Paneer Fired Rice",
//                                         votes: 154,
//                                         price:120,
//                                     }
//                                 ]
//                             }
//                         }
                        
//                         ]





//                         const foodData =[
//                             {
//                                 hotel_name : "Dindukall Thalapakatti",
//                                 offer_available:"30%",
//                                 kind_of_food_available:"Rice and gravys",
//                                 average_price_to_order:"250 for one",
//                                 follows_all_covid_protocals: true,
//                                 promoted : true,
//                                 menu_available : {
//                                     non_veg : [
//                                         {
//                                             food_name: "Fish Biriyani",
//                                             votes: 154,
//                                             price:155,
//                                         },
//                                         {
//                                             food_name: "Chicken biriyani",
//                                             votes: 54,
//                                             price:250
//                                         }
//                                     ],
//                                     veg:[
//                                         {
//                                             food_name: "Veg Fried Rice",
//                                             votes: 154,
//                                             price:300,
//                                         }
//                                         {
//                                             food_name: "Mushroom fried Rice",
//                                             votes: 154,
//                                             price:350,
//                                         }
//                                         {
//                                             food_name: "Paneer Fired Rice",
//                                             votes: 154,
//                                             price:450,
//                                         }
//                                     ]
//                                 }
//                             }
                            
//                             ]






//                             const foodData =[
//                                 {
//                                     hotel_name : "Nellai Vairamaligai",
//                                     offer_available:"30%",
//                                     kind_of_food_available:"Rice and Grills",
//                                     average_price_to_order:"300 for one",
//                                     follows_all_covid_protocals: true,
//                                     promoted : true,
//                                     menu_available : {
//                                         non_veg : [
//                                             {
//                                                 food_name: "Nandu Fried Rice",
//                                                 votes: 154,
//                                                 price:155,
//                                             },
//                                             {
//                                                 food_name: "Chicken biriyani",
//                                                 votes: 54,
//                                                 price:200
//                                             }
//                                         ],
//                                         veg:[
//                                             {
//                                                 food_name: "Veg Fried Rice",
//                                                 votes: 154,
//                                                 price:250,
//                                             }
//                                             {
//                                                 food_name: "Mushroom fried Rice",
//                                                 votes: 154,
//                                                 price:200,
//                                             }
//                                             {
//                                                 food_name: "Paneer Fired Rice",
//                                                 votes: 154,
//                                                 price:250,
//                                             }
//                                         ]
//                                     }
//                                 }
                                
//                                 ]

// const foodData =[
//     {
//         hotel_name : "Yaa-Mohaideen-Biryan",
//         offer_available:"30%",
//         kind_of_food_available:"north and south",
//         average_price_to_order:"300 for one",
//         follows_all_covid_protocals: true,
//         promoted : true,
//         menu_available : {
//             non_veg : [
//                 {
//                     food_name: "Alleppey Chicken Curry",
//                     votes: 154,
//                     price:150,
//                 },
//                 {
//                     food_name: "Mutton Curry",
//                     votes: 54,
//                     price:200
//                 }
//             ],
//             veg:[
//                 {
//                     food_name: "Appam",
//                     votes: 154,
//                     price:150,
//                 }
//                 {
//                     food_name: "Pal Ada Payasam",
//                     votes: 154,
//                     price:150,
//                 }
//                 {
//                     food_name: "2 Wheet Parotta",
//                     votes: 154,
//                     price:150,
//                 }
//             ]
//         }
//     }
// ]





// const foodData =[
// {
//     hotel_name : "Perambur Sri Srinivasa",
//     offer_available:"30%",
//     kind_of_food_available:"Traditional foods",
//     average_price_to_order:"300 for one",
//     follows_all_covid_protocals: true,
//     promoted : true,
//     menu_available : {
//         non_veg : [
//             {
//                 food_name: "Chicken Biriyani",
//                 votes: 154,
//                 price:155,
//             },
//             {
//                 food_name: "Mutton Biriyani",
//                 votes: 54,
//                 price:250
//             }
//         ],
//         veg:[
//             {
//                 food_name: "Veg Fired Rice ",
//                 votes: 154,
//                 price:300,
//             }
//             {
//                 food_name: "Mushroom Fried Rice",
//                 votes: 154,
//                 price:350,
//             }
//             {
//                 food_name: "Punjab Biriyani",
//                 votes: 154,
//                 price:450,
//             }
//         ]
//     }
// }

// ]






// const foodData =[
//     {
//         hotel_name : "Panjabi Nation",
//         offer_available:"20%",
//         kind_of_food_available:" Rice and Punjab foods",
//         average_price_to_order:"350 for one",
//         follows_all_covid_protocals: true,
//         promoted : true,
//         menu_available : {
//             non_veg : [
//                 {
//                     food_name: "Punjab Chicken Rice",
//                     votes: 154,
//                     price:255,
//                 },
//                 {
//                     food_name: "Dam Chicken Biriyani",
//                     votes: 54,
//                     price:200
//                 }
//             ],
//             veg:[
//                 {
//                     food_name: "Veg Rice",
//                     votes: 154,
//                     price:300,
//                 }
//                 {
//                     food_name: "Mushroom Rice",
//                     votes: 154,
//                     price:350,
//                 }
//                 {
//                     food_name: "Kadaw Fried Rice",
//                     votes: 154,
//                     price:450,
//                 }
//             ]
//         }
//     }
    
//     ]



//     const foodData =[
//         {
//             hotel_name : "Jack and Jill Fast Foods",
//             offer_available:"30%",
//             kind_of_food_available:"Fast Foods",
//             average_price_to_order:"100 for one",
//             follows_all_covid_protocals: true,
//             promoted : true,
//             menu_available : {
//                 non_veg : [
//                     {
//                         food_name: "Shawarma",
//                         votes: 154,
//                         price:155,
//                     },
//                     {
//                         food_name: "Grilled Chicken",
//                         votes: 54,
//                         price:250
//                     }
//                 ],
//                 veg:[
//                     {
//                         food_name: "Panner Roll",
//                         votes: 154,
//                         price:300,
//                     }
//                     {
//                         food_name: "Mushroom fry",
//                         votes: 154,
//                         price:350,
//                     }
//                     {
//                         food_name: "Paneer butter masala",
//                         votes: 154,
//                         price:400,
//                     }
//                 ]
//             }
//         }
        
//         ]





//         const foodData =[
//             {
//                 hotel_name : "AL Ajwani",
//                 offer_available:"35%",
//                 kind_of_food_available:"NV foods",
//                 average_price_to_order:"200 for one",
//                 follows_all_covid_protocals: true,
//                 promoted : true,
//                 menu_available : {
//                     non_veg : [
//                         {
//                             food_name: "North Chicken Biriyani ",
//                             votes: 154,
//                             price:150,
//                         },
//                         {
//                             food_name: "Nandu Biriyani",
//                             votes: 54,
//                             price:200
//                         }
//                     ],
//                     veg:[
//                         {
//                             food_name: "Onion dosa",
//                             votes: 154,
//                             price:130,
//                         }
//                         {
//                             food_name: "Idly",
//                             votes: 154,
//                             price:100,
//                         }
//                         {
//                             food_name: "Poori",
//                             votes: 154,
//                             price:110,
//                         }
//                     ]
//                 }
//             }
            
//             ]


//             const foodData =[
//                 {
//                     hotel_name : "Salt",
//                     offer_available:"35%",
//                     kind_of_food_available:"Chat Foods",
//                     average_price_to_order:"200 for one",
//                     follows_all_covid_protocals: true,
//                     promoted : true,
//                     menu_available : {
//                         non_veg : [
//                             {
//                                 food_name: "Chicken Bucket",
//                                 votes: 154,
//                                 price:255,
//                             },
//                             {
//                                 food_name: "Chicken biriyani",
//                                 votes: 54,
//                                 price:250
//                             }
//                         ],
//                         veg:[
//                             {
//                                 food_name: "Veg Rice Bowl",
//                                 votes: 154,
//                                 price:300,
//                             }
//                             {
//                                 food_name: "Mushroom Rice Bowl",
//                                 votes: 154,
//                                 price:350,
//                             }
//                             {
//                                 food_name: "Paneer Rice Bowl",
//                                 votes: 154,
//                                 price:450,
//                             }
//                         ]
//                     }
//                 }
                
//                 ]









//                 const foodData =[
//                     {
//                         hotel_name : "PalmShore",
//                         offer_available:"30%",
//                         kind_of_food_available:"Rice,Shawarma",
//                         average_price_to_order:"300 for one",
//                         follows_all_covid_protocals: true,
//                         promoted : true,
//                         menu_available : {
//                             non_veg : [
//                                 {
//                                     food_name: "Chicken Fried Rice",
//                                     votes: 154,
//                                     price:155,
//                                 },
//                                 {
//                                     food_name: "Chicken biriyani",
//                                     votes: 54,
//                                     price:250
//                                 }
//                             ],
//                             veg:[
//                                 {
//                                     food_name: "Veg Fried Rice",
//                                     votes: 154,
//                                     price:150,
//                                 }
//                                 {
//                                     food_name: "Mushroom fried Rice",
//                                     votes: 154,
//                                     price:200,
//                                 }
//                                 {
//                                     food_name: "Kuska",
//                                     votes: 154,
//                                     price:200,
//                                 }
//                             ]
//                         }
//                     }
                    
//                     ]




//                     const foodData =[
//                         {
//                             hotel_name : "Arul Chettinadu",
//                             offer_available:"60%",
//                             kind_of_food_available:"Traditional food and North dishes",
//                             average_price_to_order:"300 for one",
//                             follows_all_covid_protocals: true,
//                             promoted : true,
//                             menu_available : {
//                                 non_veg : [
//                                     {
//                                         food_name: "Chicken Fried Rice",
//                                         votes: 154,
//                                         price:150,
//                                     },
//                                     {
//                                         food_name: "Chicken biriyani",
//                                         votes: 54,
//                                         price:200
//                                     }
//                                 ],
//                                 veg:[
//                                     {
//                                         food_name: "Veg Fried Rice",
//                                         votes: 154,
//                                         price:150,
//                                     }
//                                     {
//                                         food_name: "Mushroom fried Rice",
//                                         votes: 154,
//                                         price:130,
//                                     }
//                                     {
//                                         food_name: "Paneer Fired Rice",
//                                         votes: 154,
//                                         price:120,
//                                     }
//                                 ]
//                             }
//                         }
                        
//                         ]





//                         const foodData =[
//                             {
//                                 hotel_name : "Erode Amman Mess",
//                                 offer_available:"30%",
//                                 kind_of_food_available:"Rice and gravys",
//                                 average_price_to_order:"200 for one",
//                                 follows_all_covid_protocals: true,
//                                 promoted : true,
//                                 menu_available : {
//                                     non_veg : [
//                                         {
//                                             food_name: "Prawn Biriyani",
//                                             votes: 154,
//                                             price:155,
//                                         },
//                                         {
//                                             food_name: "Chicken biriyani",
//                                             votes: 54,
//                                             price:250
//                                         }
//                                     ],
//                                     veg:[
//                                         {
//                                             food_name: "Veg Fried Rice",
//                                             votes: 154,
//                                             price:300,
//                                         }
//                                         {
//                                             food_name: "Mushroom fried Rice",
//                                             votes: 154,
//                                             price:350,
//                                         }
//                                         {
//                                             food_name: "Paneer Fired Rice",
//                                             votes: 154,
//                                             price:450,
//                                         }
//                                     ]
//                                 }
//                             }
                            
//                             ]






//                             const foodData =[
//                                 {
//                                     hotel_name : "Deen Biriyani",
//                                     offer_available:"30%",
//                                     kind_of_food_available:"Rice and Grills",
//                                     average_price_to_order:"300 for one",
//                                     follows_all_covid_protocals: true,
//                                     promoted : true,
//                                     menu_available : {
//                                         non_veg : [
//                                             {
//                                                 food_name: "Nandu Fried Rice",
//                                                 votes: 154,
//                                                 price:155,
//                                             },
//                                             {
//                                                 food_name: "Chicken biriyani",
//                                                 votes: 54,
//                                                 price:200
//                                             }
//                                         ],
//                                         veg:[
//                                             {
//                                                 food_name: "Veg Fried Rice",
//                                                 votes: 154,
//                                                 price:250,
//                                             }
//                                             {
//                                                 food_name: "Mushroom fried Rice",
//                                                 votes: 154,
//                                                 price:200,
//                                             }
//                                             {
//                                                 food_name: "Paneer Fired Rice",
//                                                 votes: 154,
//                                                 price:250,
//                                             }
//                                         ]
//                                     }
//                                 }
                                
//                                 ]