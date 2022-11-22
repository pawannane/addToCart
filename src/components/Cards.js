import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import Cardsdata from './CardsData';
import './style.css'
// import ADD

const Cards = () => {
    const [data, setData] = useState(Cardsdata)
    // console.log(data);

    const dispatch = useDispatch();

    const send = (element) => {
        // console.log(element)
        dispatch(ADD(element))
    }
    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Add to Cart Project</h2>
            <div className="row d-flex justify-content-center align-items-center">
                {
                    data.map((element, id) => {
                        return (
                                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                <Card.Img variant="top" src={element.imgdata} style={{height: "16rem"}} className='mt-4'/>
                                <Card.Body>
                                    <Card.Title>{element.rname}</Card.Title>
                                    <Card.Text>
                                        Price: ₹ {element.price}
                                    </Card.Text>
                                    <div className="button_div d-flex justify-content-center">
                                        <Button variant="primary" className='col lg-12' onClick={()=> send(element)}>Add to Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards