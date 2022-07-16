import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "./Product";
import './products.css'


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("product.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div id="services" className="container">
            <div className="row">
                <h1 className="text-primary text-center mt-5 mb-5"> Our Collection</h1>
                <Row xs={1} md={3} className="g-3">
                    {
                        !products ? <><p>Loading....</p></> : <> {products?.map((product) => (
                            <Product key={product._id} product={product}> </Product>
                        ))} </>
                    }
                </Row>
            </div>
        </div>
    );
};

export default Products;
