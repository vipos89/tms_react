import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Media.css';

function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="container header_container">
                    <a href="" className="logo">
                        <img src="img/logo.png" alt=""></img>
                    </a>
                    <ul className="menu" id="menu">
                        <li className="menu_item"><a href="#features">Features</a></li>
                        <li className="menu_item"><a href="#about">About</a></li>
                        <li className="menu_item"><a href="#pricing">Pricing</a></li>
                        <li className="menu_item"><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="burger" id="burger">
                        <span></span>
                    </div>
                </div>
            </header>
            <section className="top scroll_bg">
                <div className="container top_container">
                    <div className="description">
                        <img src="img/big_logo.png" alt="" className="description_logo"></img>
                            <h1 className="description_title">modern axure template for beautiful prototypes</h1>
                            <p className="description_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                                adipisci, cum
                                ducimus eligendi ex impedit
                                magnam minima molestias nihil nisi nostrum numquam possimus praesentium quam rerum
                                temporibus
                                voluptatem! Facilis, vero.</p>
                            <a href="#" className="description_button"> Download</a>
                    </div>
                    <form className="top-form">
                        <h3 className="form_title">Try Your <span className="orange_title">FREE</span> Trial Today</h3>
                        <div className="input-container">
                            <input type="text" className="top-form_input" placeholder="Name"></input>
                            <input type="text" className="top-form_input" placeholder="Email"></input>
                            <input type="password" className="top-form_input" placeholder="Password"></input>
                        </div>

                        <input type="submit" value="Get Started" className="top-form_submit"></input>
                    </form>
                </div>
            </section>
            <section className="social-media">
                <div className="container media_container">
                    <div className="media_text">
                        <h3>Social media</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea</p>
                    </div>
                    <div className="media_icons">
                        <i className="fab fa-facebook-f fa-2x"></i>
                        <i className="fab fa-twitter fa-2x"></i>
                        <i className="fab fa-google-plus-g fa-2x"></i>
                        <i className="fab fa-pinterest fa-2x"></i>
                        <i className="fab fa-instagram fa-2x"></i>
                        <i className="fab fa-instagram fa-2x"></i>
                        <i className="fas fa-rss fa-2x"></i>
                    </div>
                </div>
            </section>
            <section className="tabs">
                <div className="container tab_container">
                    <div className="tab">
                        <button className="tab-links active-tab" data-id="tab1">Tab1</button>
                        <button className="tab-links" data-id="tab2">Tab2</button>
                        <button className="tab-links" data-id="tab3">Tab3</button>
                    </div>

                    <div id="tab1" className="tab-content ">
                        <div className="tab-content-text">
                            <h2>Tabs with soft transitioning effect. 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur in gravida dolor sit amet lacus accumsan et
                                viverra justo
                                commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                                parturient
                                montes.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet.</p>
                            <a href="" className="orange_button">Download</a>
                        </div>
                        <img src="img/image_right_u255.png" alt="" className="tab-content-img"></img>

                    </div>
                    <div id="tab2" className="tab-content ">
                        <div className="tab-content-text">
                            <h2>Tabs with soft transitioning effect. 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur in gravida dolor sit amet lacus accumsan et
                                viverra justo
                                commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                                parturient
                                montes.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet.</p>
                            <a href="" className="orange_button">Download</a>
                        </div>
                        <img src="img/image_right_u255.png" alt="" className="tab-content-img"></img>

                    </div>
                    <div id="tab3" className="tab-content ">
                        <div className="tab-content-text">
                            <h2>Tabs with soft transitioning effect. 3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur in gravida dolor sit amet lacus accumsan et
                                viverra justo
                                commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                                parturient
                                montes.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet.</p>
                            <a href="" className="orange_button">Download</a>
                        </div>
                        <img src="img/image_right_u255.png" alt="" className="tab-content-img"></img>

                    </div>

                </div>
            </section>
            <section className="about_section" id="about">
                <div className="container about_container">
                    <div className="block">
                        <h1 className="uppercase after_delimiter">Why This is awesome</h1>

                        <div className="intro-text grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </div>
                    </div>
                    <div className="block">
                        <div className="item">
                            <i className="far fa-lightbulb fa-2x"></i>
                            <h2>Thoughtful design</h2>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Assumenda dolorem eos fugiat in inventore magnam neque porro quo tenetur.
                                Blanditiis consequuntur corporis dolorem eligendi illo ipsa neque optio tempora
                                vitae.</p>
                        </div>
                        <div className="item">
                            <i className="far fa-keyboard fa-2x"></i>
                            <h2>Well crafted</h2>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Assumenda dolorem eos fugiat in inventore magnam neque porro quo tenetur.
                                Blanditiis consequuntur corporis dolorem eligendi illo ipsa neque optio tempora
                                vitae.</p>
                        </div>
                        <div className="item">
                            <i className="fas fa-bolt fa-2x"></i>
                            <h2>Easy to customize</h2>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Assumenda dolorem eos fugiat in inventore magnam neque porro quo tenetur.
                                Blanditiis consequuntur corporis dolorem eligendi illo ipsa neque optio tempora
                                vitae.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pricing" id="pricing">
                <div className="container pricing_container">
                    <h2 className="uppercase after_delimiter">Pricing options</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea</p>
                    <div className="pricing_items">
                        <div className="pricing_item">
                            <div className="item_service black_background">Basic</div>
                            <div className="item_service black_background price">$0</div>
                            <div className="item_service black_background">Free for life</div>
                            <div className="item_service_orange"></div>
                            <div className="item_service">1 GB OF SPACE</div>
                            <div className="item_service">10 GB OF BANDWIDTH</div>
                            <div className="item_service">3 WEBSITES</div>
                            <div className="item_service">BASIC CUSTOMIZATION</div>
                            <div className="item_service">WORDPRESS INTEGRATION</div>
                            <div className="item_service">EMAIL SUPPORT</div>
                        </div>
                        <div className="pricing_item">
                            <div className="item_service black_background">Basic</div>
                            <div className="item_service black_background price">$19</div>
                            <div className="item_service black_background grey-text">Free for life</div>
                            <div className=" item_service item_service_orange">
                                <span>OUR MOST POPULAR</span>
                            </div>
                            <div className="item_service">1 GB OF SPACE</div>
                            <div className="item_service">10 GB OF BANDWIDTH</div>
                            <div className="item_service">3 WEBSITES</div>
                            <div className="item_service">BASIC CUSTOMIZATION</div>
                            <div className="item_service">WORDPRESS INTEGRATION</div>
                            <div className="item_service">EMAIL SUPPORT</div>
                        </div>
                        <div className="pricing_item">
                            <div className="item_service black_background">Basic</div>
                            <div className="item_service black_background price">$0</div>
                            <div className="item_service black_background">Free for life</div>
                            <div className="item_service_orange"></div>
                            <div className="item_service">1 GB OF SPACE</div>
                            <div className="item_service">10 GB OF BANDWIDTH</div>
                            <div className="item_service">3 WEBSITES</div>
                            <div className="item_service">BASIC CUSTOMIZATION</div>
                            <div className="item_service">WORDPRESS INTEGRATION</div>
                            <div className="item_service">EMAIL SUPPORT</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reviews">
                <div className="container review_container">
                    <h2 className="uppercase after_delimiter uppercase">What our customers are saying</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea</p>
                    <div className="reviews_items">
                        <div className="review_item">
                            <div className="review_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consequatur delectus
                                dolorum molestias nam natus possimus praesentium reprehenderit soluta ut vero.
                            </div>
                            <div className="review_user">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
                                    <div className="user_name">Jeremy</div>
                                    <span>freelanser</span>
                            </div>
                        </div>
                        <div className="review_item">
                            <div className="review_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consequatur delectus
                                dolorum molestias nam natus possimus praesentium reprehenderit soluta ut vero.
                            </div>
                            <div className="review_user">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
                                    <div className="user_name">Jeremy</div>
                                    <span>freelanser</span>
                            </div>
                        </div>
                        <div className="review_item">
                            <div className="review_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consequatur delectus
                                dolorum molestias nam natus possimus praesentium reprehenderit soluta ut vero.
                            </div>
                            <div className="review_user">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
                                    <div className="user_name">Jeremy</div>
                                    <span>freelanser</span>
                            </div>
                        </div>
                        <div className="review_item">
                            <div className="review_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consequatur delectus
                                dolorum molestias nam natus possimus praesentium reprehenderit soluta ut vero.
                            </div>
                            <div className="review_user">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
                                    <div className="user_name">Jeremy</div>
                                    <span>freelanser</span>
                            </div>
                        </div>
                        <div className="review_item">
                            <div className="review_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consequatur delectus
                                dolorum molestias nam natus possimus praesentium reprehenderit soluta ut vero.
                            </div>
                            <div className="review_user">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
                                    <div className="user_name">Jeremy</div>
                                    <span>freelanser</span>
                            </div>
                        </div>
                        <div className="review_item">
                            <div className="review_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consequatur delectus
                                dolorum molestias nam natus possimus praesentium reprehenderit soluta ut vero.
                            </div>
                            <div className="review_user">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
                                    <div className="user_name">Jeremy</div>
                                    <span>freelanser</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="design scroll_bg">
                <div className="container design_container">
                    <h2 className="uppercase after_delimiter">STYLISH AXURE DESIGN</h2>
                    <div className="design_text">Use the sections you need, remove the ones you don't. Create gorgeous
                        prototypes faster than ever!
                    </div>
                    <a href="#" className="description_button"> Download</a>
                </div>
            </section>
            <section className="contact" id="contact">
                <div className="container contact_container">
                    <h2 className="uppercase after_delimiter">Contact US</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea</p>
                    <form action="" className="contact_form">
                        <div className="flex_form">
                            <div className="left">
                                <input type="text" className="top-form_input" placeholder="Name" required></input>
                                <input type="email" className="top-form_input" placeholder="Email" required></input>
                                <input type="text" className="top-form_input" placeholder="Subject" required></input>
                            </div>
                            <div className="right">
                                <textarea name="" id="" cols="30" rows="10" className="top-form_input"
                                          placeholder="Message"></textarea>
                            </div>
                        </div>

                        <div className="submit_block">
                            <button className="orange_button msg_button" type="submit">Send Message</button>
                        </div>

                    </form>
                </div>
            </section>
            <section className="footer black_background">
                <div className="container footer_container">
                    <div className="footer_icons">
                        <ul className="footer_icons_list">
                            <li><a href="" title="Facebook"><i className="fab fa-facebook-f fa-2x "></i></a></li>
                            <li><a href="" title="Twitter"><i className="fab fa-twitter fa-2x"></i></a></li>
                            <li><a href="" title="Google+"><i className="fab fa-google-plus fa-2x"></i></a></li>
                            <li><a href="" title="Pinterest"><i className="fab fa-pinterest fa-2x"></i></a></li>
                            <li><a href="" title="Instagram"><i className="fab fa-instagram fa-2x"></i></a></li>
                            <li><a href="" title="StumbleUpon"><i className="fab fa-stumbleupon fa-2x"></i></a></li>
                            <li><a href="" title="RSS"><i className="fas fa-rss fa-2x"></i></a></li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <span>&copy; 2020 AlexIt.com</span>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default App;
