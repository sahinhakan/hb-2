import { useContext } from "react";
import { Button, Row, Col } from "antd";
import { SearchOutlined, ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import './ListItem.css';
import LinkContext from "../context/LinkContext";

const ListItem = (props) => {

    const { upVote, downVote } = useContext(LinkContext);


    return (
        <>
        <Row className="row">
            <Col span={5}>
                <div className="item-point">
                    <div >{props.data.point}</div>
                    <div>POINTS</div>
                </div>
            </Col>
            <Col span={19}>
                <div className="item-detail">
                    <h3 className="detail-text">{props.data.name}</h3>
                    <h5>{props.data.url}</h5>
                    <div className="vote-buttons">
                        <Button size="small" icon={<ArrowUpOutlined />} type="text" className="up-button" 
                            onClick={ (event) => {
                                event.preventDefault()
                                upVote(props.data);
                            }}
                        >Up Vote</Button>
                        <Button size="small" icon={<ArrowDownOutlined />} type="text" className="down-button" 
                            onClick={ (event) => {
                                downVote(props.data);
                            }}
                        >Down Vote</Button>
                    </div>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default ListItem;