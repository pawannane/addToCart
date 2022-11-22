import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { Table } from 'react-bootstrap';
import Menu from '@mui/material/Menu';
import cart from '../images/cart.gif'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { DLT } from '../redux/actions/action';

const Header = () => {

    const getData = useSelector((state)=> state.cartreducer.carts)
    // console.log(getData);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    return (
        <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
            <Container>
                <Link to="/" className='text-decoration-none text-light mx-4'>Add to Cart</Link>
                <Nav className="me-auto">
                    <Link to="/" className='text-decoration-none text-light'>Home</Link>
                </Nav>
                <Badge badgeContent={getData.length} color="primary" id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: "25px", cursor: "pointer" }}></i>
                </Badge>
            </Container>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {
                    getData.length ? 
                    <div className="card_details" style={{width: "24rem", padding: 10}}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Restaurant Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getData.map((e, id)=>{
                                        return(
                                            <>
                                                <tr>
                                                    <td>
                                                        <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                        <img src={e.imgdata} alt="restaurant_img" srcset="" style={{width: "5rem",height: "5rem"}}/>
                                                        </NavLink>
                                                    </td>
                                                    <td>
                                                        <p>{e.rname}</p>
                                                        <p>Price: ₹ {e.price}</p>
                                                        <p>Quantity: {e.qnty}</p>
                                                        <p style={{color: "red", fontSize: 20, cursor: "pointer"}} onClick={() => dlt(e.id)}>
                                                            <i className="fas fa-trash smalltrash"></i>
                                                        </p>
                                                    </td>
                                                    <td className='mt-4' style={{color: "red", fontSize: 20, cursor: "pointer"}} onClick={() => dlt(e.id)}>
                                                    <i className="fas fa-trash largetrash" ></i>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                                <p className='text-center'>Total: ₹ 300</p>
                            </tbody>
                        </Table>
                    </div>
                    : 
                    <div className="card_details d-flex justify-content-center align-items-center" style={{width: "24rem", padding: 10, position: "relative"}}>
                    <i className='fas fa-close smallclose' style={{position: "absolute", top: 2, right: 30, fontSize: 22, cursor: "pointer"}} onClick={handleClose} ></i>
                    <p style={{fontSize: 22}}>Your Cart is Empty</p>
                    <img src={cart} alt="cart" srcset="" className='emptycart_img' style={{width: "5rem", padding: 10}}/>
                </div>
                }

                
            </Menu>
        </Navbar>
    )
}

export default Header