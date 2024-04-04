/* eslint-disable */
import { useState, useEffect } from "react"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
    // const [data, setData] = useState([])
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.products)
    useEffect(() => {
        // axios.get("https://fakestoreapi.com/products").then((res) => { setData(res.data) }).catch((error) => error.message)
        dispatch(getProducts())
    }, [])
    const addToCart = (items) => {
        dispatch(add(items))
    }
    if (status === 'Loading') {
        return <p>Is Loading.........</p>
    }
    if (status === 'Error') {
        return <p>Something went Wrong.....</p>
    }
    return (
        <>
            <h1>Product DashBoard</h1>
            <div className="row">
                {data.map((items) => {
                    return (
                        <div className="col-md-3" style={{ marginBottom: "10px" }}>
                            <Card style={{ width: '18rem' }} key={items.id} className="h-100">
                                <div className="text-center">
                                    <Card.Img variant="top" src={items.image} style={{ width: '100px', height: '130px' }} />
                                </div>

                                <Card.Body>
                                    <Card.Title>{items.title}</Card.Title>
                                    <Card.Text>
                                        PKR: {items.price}
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer className="bg-white"><Button variant="primary" onClick={() => addToCart(items)}>Add to Cart</Button></Card.Footer>
                            </Card>
                        </div>
                    )
                })}


            </div>

        </>
    )
}

export default Product
