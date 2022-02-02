import { Button, Row, Col } from "antd";

const ListItem = () => {
    return (
        <>
        <Row>
            <Col span={5}>
                <div style={{ backgroundColor: "#8080808c", height: "70px", width: "70px", borderRadius: "5px"}}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>6</div>
                    <div>POINTS</div>
                </div>
            </Col>
            <Col span={19}>React Tutorial</Col>
        </Row>
        </>
    )
}

export default ListItem;