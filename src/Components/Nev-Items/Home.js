import React, {Component} from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../Config'
import '../../assets/css/style.css';
import '../../assets/img/favicon.png';
import '../../assets/img/apple-touch-icon.png';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/icofont/icofont.min.css';
import '../../assets/vendor/boxicons/css/boxicons.min.css';
import '../../assets/vendor/animate.css/animate.min.css';
import '../../assets/vendor/remixicon/remixicon.css';
import '../../assets/vendor/venobox/venobox.css';
import '../../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import LightboxPage from './protfolio';
import Footer from "./footer";
import Slider from "../Tools/Slider";
class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>


                {/*End Hero */}

                <main id="main">
                    {/* About Section */}
                    <section id="about" className="about">
                        <div className="container">

                            <div className="row content">
                                <div className="col-lg-6">
                                    <h2>Ali Marble Pakistan marble export company</h2>
                                    <h3>Our products are getting fame amongst architects and builders worldwide
                                        as they give more artistic looks to the buildings.</h3>
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0">
                                    <p>
                                        We stock onyx tiles, mosaics, sinks, tubs, slabs,
                                        vanities, and custom products. We specialize in Pakistan Dark green onyx,
                                        Green onyx, Light green onyx, White onyx, multi green onyx, red onyx,
                                        brown/golden onyx.
                                    </p>
                                    <ul>
                                        <li><i className="ri-check-double-line"></i> Natural stones of Pakistan are
                                            acknowledged
                                        </li>
                                        <li><i className="ri-check-double-line"></i> worldwide as best in quality,
                                            variety and color. Here
                                        </li>
                                        <li><i className="ri-check-double-line"></i> Marble, Sand Stone and Onyx are
                                            found in exclusive colors and shades which are nonexistent in other regions
                                            of the world.
                                        </li>
                                    </ul>
                                    <p className="font-italic">
                                        We use modern techniques for producing and processing marble, sand stones, onyx
                                        which has resulted in improved quality
                                        and our products are fast acclaiming appreciation in the world market.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>
                    {/*End About Section */}


                    {/*Portfolio Section*/}


                    <LightboxPage/>
                    {/*     End Portfolio Section */}

                </main>
                End #main

                footer

                <Footer/>


            </div>
        )
    }
}

export default Home