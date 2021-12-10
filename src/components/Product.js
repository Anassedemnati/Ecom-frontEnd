import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
function Product({product}) {
    return (
        <div>
            <Card className="my-3 p-3 rounded">
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} />
                </Link>
                <Card.Body>
                <Card.Title as="div" >
                <Link to={`/product/${product._id}`}>
                    
                        <strong> {product.name}</strong>
                    
                </Link>
                </Card.Title>
                <Card.Text as="div">
                    <div className="my-3">
                        
                        <Rating value={product.rating} text={`${product.rating} from ${product.numReviews} reviews`} color={'#f8e825'}/>

                    </div>

                </Card.Text>
                <Card.Text as="h3">
                    ${product.price}



                </Card.Text>



                </Card.Body>



            </Card>
        </div>
    )
}

export default Product
