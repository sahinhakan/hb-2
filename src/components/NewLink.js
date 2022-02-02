import { useContext } from 'react';
import { Row, Col, PageHeader, Form, Input, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import './NewLink.css';

import LinkContext from "../context/LinkContext";

const NewLink = () => {
    const navigate = useNavigate();
    const { link, addLink } = useContext(LinkContext);

    return (
        <div>
            <Row>
                <Col span={8} offset={8}>
                    <PageHeader title="Return to List" className='headerPage' onBack={ () => navigate(-1) }></PageHeader>
                    <h2>Add New Link</h2>
                    <Form layout='vertical' size='large'>
                        <Form.Item label="Link Name" name="linkName">
                            <Input placeholder='e.g. Alphabet'/>     
                        </Form.Item>
                        <Form.Item label="Link URL" name="linkUrl">
                            <Input placeholder="e.g. http://abc.xyz"/>     
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 6, offset: 18 }}>
                            <Button type='primary' block="true" shape='round'
                                onClick={ () => {
                                    addLink(3)
                                }}
                            >
                            ADD</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default NewLink;