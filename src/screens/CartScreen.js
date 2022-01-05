import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col,ListGroup,Image,Form,Button,Cart} from 'react-bootstrap'
import Message from '../components/Message'
import { useNavigate } from 'react-router-dom'
import { addToCart } from "../actions/cartActions";
import { useParams } from 'react-router'
function CartScreen() {
    const {productId}=useParams();
    return (
        <div>
           cart
        </div>
    )
}

export default CartScreen
