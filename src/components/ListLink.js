import { useContext } from "react";
import { Button, Dropdown, Menu, List, Divider, Row, Col } from "antd";
import { DownOutlined } from '@ant-design/icons';
import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";
import "./ListLink.css";
import { FileAddOutlined, PlusOutlined } from '@ant-design/icons';

import LinkContext from "../context/LinkContext";

const ListLink = () => {

    const { link, addLink } = useContext(LinkContext);
    
    //React Hook "useNavigate" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function
    //bundan dolayı bir değişkene atayıp ondan sonra içerde kullanıyoruz.
    const navigate = useNavigate();

    const orderByMenu = (
        <Menu>
            <Menu.Item>Most Voted</Menu.Item>
            <Menu.Item>Less Voted</Menu.Item>
            {/* <Menu.Item danger>Danger Item</Menu.Item>
            <Menu.Item disabled>Disabled Item</Menu.Item> */}
        </Menu>
    );
    
    return (
        <div className="container">
            <Row >
                <Col span={8} offset={8}>
                    <Button type="default" className="submit-a-link-button" shape="round" size="large" block="true"
                        icon={<PlusOutlined />}
                        onClick={(event) => {
                            event.preventDefault(); 
                            navigate("/new");
                        }}
                    >SUBMIT A LINK</Button>
                    <Divider></Divider>
                    <List
                        bordered="true"
                        header={
                            <Dropdown overlay={orderByMenu} >
                                <Button type="default" shape="default" className="dropdown-button">
                                    Order by <DownOutlined />
                                </Button>
                            </Dropdown>
                        }
                        dataSource={link}
                        renderItem={item => (
                            <List.Item>
                                <ListItem data={item}/>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ListLink;