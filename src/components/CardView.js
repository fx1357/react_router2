import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const CardView = ({img, title, desc, link}) => {


    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Link to={link}>
                        <Button variant="primary">자세히보기</Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardView;