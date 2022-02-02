import { Button, Dropdown, Menu, List, Divider, Row, Col } from "antd";
import { DownOutlined } from '@ant-design/icons';
import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";

const ListLink = () => {
    const orderByMenu = (
        <Menu>
            <Menu.Item>Most Voted</Menu.Item>
            <Menu.Item>Less Voted</Menu.Item>
            <Menu.Item danger>Danger Item</Menu.Item>
            <Menu.Item disabled>Disabled Item</Menu.Item>
        </Menu>
    );
    
    //React Hook "useNavigate" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function
    //bundan dolayı bir değişkene atayıp ondan sonra içerde kullanıyoruz.
    const navigate = useNavigate();
    let aList = [1,2,3,4,5];

    return (
        <div style={{flexDirection: "column", alignItems: "stretch"}}>
            <Row >
                <Col span={8} offset={8}>
                    <Button type="primary" 
                        onClick={(event) => {
                            event.preventDefault();
                            //todo: navigate to new link page
                            navigate("/new");
                        }}
                    >SUBMIT A LINK</Button>
                    {/* <Divider>List</Divider> */}
                    <List
                        bordered="true"
                        header={
                            <Dropdown overlay={orderByMenu} >
                                <Button type="dashed" shape="round" >
                                    Order by <DownOutlined />
                                </Button>
                            </Dropdown>
                        }
                        dataSource={aList}
                        renderItem={item => (
                            <List.Item style={{flexDirection: "column", alignItems: "stretch"}}>
                                <ListItem/>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ListLink;