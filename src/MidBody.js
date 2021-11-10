import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Button } from 'antd';
import "./MidBody.css";
import { Menu, Dropdown, message, Space, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

function MidBody() {
  return (
    <div>
      <div className="Bread">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">India</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Chennai</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">T.nagar</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        ,
      </div>
      <div className="AvatarContainer">
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
      </div>

     
    <div className="Button1">
      <Button size="large" type="primary" danger>
      Primary
    </Button>
    </div>

    <div className="Button2">
    <Button size="large">Default</Button>
    </div>

    <div className="Button3">
    <Button size="large">Default</Button>
    </div>


    <div className="Button4">
    <Button size="large">Default</Button>
    </div>

    <div className="Button5">
    <Button size="large">Default</Button>
    </div>

<div className="Dropdown">
<Dropdown>
      <Button>
        Button <DownOutlined />
      </Button>
    </Dropdown>
</div>

<div className="divide">
<Divider />
</div>

      </div>
    
  );
}

export default MidBody;
