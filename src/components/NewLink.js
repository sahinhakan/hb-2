import { useContext, useState } from 'react';
import { Row, Col, PageHeader, Form, Input, Button, message } from 'antd';
import { useNavigate } from "react-router-dom";
import './NewLink.css';

import LinkContext from "../context/LinkContext";

const NewLink = () => {
    const navigate = useNavigate();
    const { addLink, createLinkObject } = useContext(LinkContext);

    //antd form'da bu önerilmiyor. onFinish ile hem validate  hem de submit edebiliyorsun
    /* const [name, setName ] = useState("");
    const [url, setURL ] = useState("");

    const handleNameChange = (oEvent) => {
        setName(oEvent.target.value)
    }

    const handleUrlChange = (oEvent) => {
        setURL(oEvent.target.value)
    } */

    const [ form ] = Form.useForm();

    const initialFormValues = {
        linkName: '',
        linkUrl: ''
    }

    const onFinish = (fieldsValue) => {
        addLink({
            name: fieldsValue['linkName'],
            url: fieldsValue['linkUrl']
        });
        message.success(`${fieldsValue['linkName']} added`);
        onReset();
    }

    const onReset = () => {
        form.resetFields();
    }

    const onFill = () => {
        form.setFieldsValue({
            linkName: 'Hakan Şahin',
            linkUrl: 'https://hakansahin.com'
        })
    }

    return (
        <div>
            <Row>
                <Col span={8} offset={8}>
                    <PageHeader title="Return to List" className='headerPage' onBack={ () => navigate(-1) }></PageHeader>
                    <h2>Add New Link</h2>
                    <Form layout='vertical' size='large' onFinish={onFinish} initialValues={initialFormValues} form={form}>
                        <Form.Item label="Link Name" name="linkName" shouldUpdate="true">
                            <Input placeholder='e.g. Alphabet' type="text"/>     
                        </Form.Item>
                        <Form.Item label="Link URL" name="linkUrl">
                            <Input placeholder="e.g. http://abc.xyz" type="url"/>     
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 6, offset: 18 }}>
                            <Button type='primary' block="true" shape='round' htmlType='submit'>ADD</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default NewLink;