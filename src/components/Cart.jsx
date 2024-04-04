import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const removeCart = (id)=> {
        dispatch(remove(id))
    }
    return (
        <>
            <div className="row">
                {cartProducts.map((items) => {
                    return (
                        <div className="col-md-12" style={{ marginBottom: "10px" }}>
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
                                <Card.Footer className="bg-white"><Button variant="danger" onClick={() => removeCart(items.id)}>Remove Cart</Button></Card.Footer>
                            </Card>
                        </div>
                    )
                })}


            </div>
        </>
    )
}

export default Cart
