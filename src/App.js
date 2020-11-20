import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Nav, Navbar, Form, FormControl} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faMinusCircle, faPlusCircle, faGem, faSearch} from "@fortawesome/free-solid-svg-icons";
import jar from './assets/images/jar.png';
import apple from './assets/images/apple.png'
import grape from './assets/images/grape.png'
import {motion, useAnimation} from "framer-motion"


function App() {
    const [cartItems, setCartItems] = useState(0);
    const controls1 = useAnimation();
    const controls2 = useAnimation();

    const handleBestSellerHover = (id) => {
        if (id === 1) {
            controls1.start({
                scale: '1.1',
                transition: {duration: 3}
            })
            controls2.start({
                scale: '1',
                transition: {duration: 5}
            })
        } else {
            controls2.start({
                scale: '1.1',
                transition: {duration: 3}
            })
            controls1.start({
                scale: '1',
                transition: {duration: 3}
            })
        }

    }

    const [products, setProducts] = useState(
        {
            arr: [
                {
                    id: 1,
                    title: 'Apple Fruit',
                    img: apple,
                    price: 100,
                },
                {
                    id: 2,
                    title: 'Grape Fruit',
                    img: grape,
                    price: 200,
                },
                {
                    id: 3,
                    title: 'Grape Fruit',
                    img: grape,
                    price: 250,
                },
            ],
            hoverId: 2,
        }
    )

    const handleProductsHover = (id) => {
        setProducts({
            ...products,
            hoverId: id,
        })
    }

    const handleAddToCart = () => {
        setCartItems(cartItems + 1);
    }


    return (
        <div className="container-fluid" id="home">
            <svg width="1000" height="1024" viewBox="0 0 1000 200" preserveAspectRatio="xMinYMin meet" fill="none"
                 xmlns="http://www.w3.org/2000/svg" className="bg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 0H814.527C850.33 0 874.531 36.5291 860.569 69.4979L478.147 972.536C464.679 1004.34 433.492 1025 398.955 1025H0V0Z"
                      fill="url(#paint0_linear)"/>
                <defs>
                    <linearGradient id="paint0_linear" x1="262.972" y1="-630.882" x2="-1040.21" y2="526.977"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#78FFD6"/>
                        <stop offset="1" stop-color="#007991"/>
                    </linearGradient>
                </defs>
            </svg>
            <header className="row">
                <Navbar expand="lg">
                    <Navbar.Brand>Lotus
                        <FontAwesomeIcon icon={faGem} size="sm" color={"#ffffff"} className="ml-4 gem-icon"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <FontAwesomeIcon icon={faSearch} color={"#0B7171"} className="ml-4 search-icon"/>
                        </Form>
                        <FontAwesomeIcon icon={faShoppingCart} color={"#0B7171"} className="ml-4 cart-icon"/>
                        <div className={`badge ${cartItems !== 0 ? 'd-flex' : 'd-none'}`}>{cartItems}</div>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <main className="row content">
                <div className="col-12 col-md-6 best-sellers">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <h1 className="text-white">Best Sellers</h1>
                        <FontAwesomeIcon icon={faMinusCircle} color={"#ffffff"} className="ml-4 minus-icon"/>
                    </div>
                    <div className="d-flex">
                        <motion.div
                            initial={{scale: 1.1}}
                            whileTap={{
                                scale: .9,
                            }}
                            onClick={handleAddToCart}
                            animate={controls1}
                            onHoverStart={handleBestSellerHover.bind(null, 1)}
                            className="card mx-2 mr-4"
                            id="1"
                        >
                            <div className="card-body">
                                <img src={jar} alt="jar"/>
                            </div>
                            <div className="card-footer text-white">
                                <h2 className="my-0">Lotus Jar</h2>
                                <span>Green Fruit Jelly</span>
                                <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem</p>
                                <div className="price d-flex justify-content-between align-items-center">
                                    <span>4.00 $</span>
                                    <button className="btn">
                                        <FontAwesomeIcon icon={faPlusCircle} color={"#23A0A5"}
                                                         className="ml-4 add-icon"/>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{scale: 1}}
                                    whileTap={{
                                        scale: .9,
                                    }}
                                    onClick={handleAddToCart}
                                    animate={controls2}
                                    onHoverStart={handleBestSellerHover.bind(null, 2)}
                                    className="card mx-2 ml-4"
                                    id="2"
                        >
                            <div className="card-body">
                                <img src={jar} alt="jar"/>
                            </div>
                            <div className="card-footer text-white">
                                <h2 className="my-0">Lotus Jar</h2>
                                <span>Green Fruit Jelly</span>
                                <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem</p>
                                <div className="price d-flex justify-content-between align-items-center">
                                    <span>4.00 $</span>
                                    <button className="btn">
                                        <FontAwesomeIcon icon={faPlusCircle} color={"#23A0A5"}
                                                         className="ml-4 add-icon"/>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="col-12 col-md-6 more-items d-flex flex-column">
                    <h2 className="h1 mt-5">More Items</h2>
                    {products.arr.map(e => {
                        return (
                            <motion.div
                                onHoverStart={handleProductsHover.bind(null, e.id)}
                                onClick={handleAddToCart}
                                className={`item my-3 px-3 d-flex justify-content-between align-items-center ${products.hoverId === e.id ? 'active' : ''}`}
                            >
                                <span
                                    className={`price ${products.hoverId === e.id ? 'd-flex' : 'd-none'}`}>$ {e.price}</span>
                                <img src={e.img} alt={e.title}/>
                                <div className="product-desc d-flex flex-column">
                                    <strong>{e.title}</strong>
                                    <span className="text-muted">Original Taste</span>
                                </div>
                                <motion.button className="btn">
                                    <FontAwesomeIcon icon={faPlusCircle} color={"#23A0A5"} className="ml-4 add-icon"/>
                                </motion.button>
                            </motion.div>
                        )
                    })}
                </div>
            </main>
        </div>
    );
}

export default App;
