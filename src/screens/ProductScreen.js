import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import axios from 'axios'
import { Row,Col,Image,ListGroup,Button,Card } from 'react-bootstrap'
import Rating from '../components/Rating'


const ProductScreen = () => {
    const {id}=useParams();
     //const product = products.find((p)=>p._id === id)
     
     const [product,setProduct] = useState({});

      //useEffect it fire off in load of page
    useEffect(()=>{
        // console.log('hello')
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${id}`);
            setProduct(data)

        }

        fetchProduct()
    },[id])


    return (
        <div>
           <Link to='/' className='btn btn-light my-3'>Go Back</Link>
           <Row>
               <Col md={6}>
                   <Image src={product.image} alt={product.name} fluid/>
               </Col>
               <Col md={3}>
                   <ListGroup variant="flush">
                       <ListGroup.Item>
                           <h3>{product.name}</h3>
                       </ListGroup.Item>

                       <ListGroup.Item>
                          <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                       </ListGroup.Item>
                       
                       <ListGroup.Item>
                        Price: ${product.price}
                       </ListGroup.Item>

                       <ListGroup.Item>
                        Description: {product.description}
                       </ListGroup.Item>

                   </ListGroup>

               </Col>
               <Col md={3}>
                   <Card>
                       <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                    <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                       </ListGroup>
                       <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                    {product.countInStock >0 ? 'In Stock':'Out of stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className="btn-block" disabled={product.countInStock===0} type='button'>Add to Cart</Button>
                            </ListGroup.Item>

                       </ListGroup>
                   </Card>

               </Col>
           </Row>
        </div>
    )
}

export default ProductScreen
