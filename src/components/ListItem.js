import { Button, Row, Col } from "antd";
import { SearchOutlined, ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import './ListItem.css';

const ListItem = (props) => {
    return (
        <>
        <Row className="row">
            <Col span={5}>
                <div className="item-point">
                    <div >6</div>
                    <div>POINTS</div>
                </div>
            </Col>
            <Col span={19}>
                <div className="item-detail">
                    <h3 className="detail-text">{props.data.name}</h3>
                    <h5>{props.data.url}</h5>
                    <div className="vote-buttons">
                        <Button size="small" icon={<ArrowUpOutlined />} type="text">Up Vote</Button>
                        <Button size="small" icon={<ArrowDownOutlined />} type="text">Down Vote</Button>
                    </div>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default ListItem;