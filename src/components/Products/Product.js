import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './product.css'

const Product = ({ product }) => {
    const { _id, title, image } = product;
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <Col className="colum">
            <Card className="ms-auto border shadow p-3 mb-5 bg-body rounded">
                <Card.Img className="imagesize" variant="top" src={image} />
                <Card.Body className="">
                    <Card.Title className="services-title">{title.length > 40 ? <>{title.slice(0, 40)} <span>...</span></> : <>{title}</>}</Card.Title>
                </Card.Body>
                <button onClick={() => navigateToServiceDetail(_id)} className="button">
                    Details
                </button>
            </Card>
        </Col>

    )
};


export default Product;
