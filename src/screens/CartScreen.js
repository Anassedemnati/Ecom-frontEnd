import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col,ListGroup,Image,Form,Button,Cart} from 'react-bootstrap'
import Message from '../components/Message'
import {Link, useNavigate ,useParams,useLocation} from 'react-router-dom'
import { addToCart } from "../actions/cartActions";

function CartScreen() {
    const {id}=useParams();
    let location = useLocation();
    
    
    
    
    //recupere la qty de url avec location.search
    const qty = location.search? Number(location.search.split('=')[1]) : 1
    
    
    const dispatch=useDispatch();

    const cart =useSelector(state=>state.cart);
    const {cartItems} = cart;

    
    
    useEffect(()=>{
        if(id){
           dispatch(addToCart(id,qty));     
        }
    },[dispatch,id,qty])
    
    return (
        <div>
           cart
        </div>
    )
}

export default CartScreen
