import React from 'react'
import {beens_logo,beens_logo_dark} from '../logo/logo'
import Footer from "../footer/footer";
import Header from "../header/header";
import {NavLink} from "react-router-dom";
import BestItem from "./bestItem/bestItem";
import {withRouter} from "react-router";


const Main = ({bestsellers,onChosenItem}) => {
    window.scroll(0,0)
     return (
        <div className='main'>
            <div className="preview">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Header/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <h1 className="title-big">Everything You Love About Coffee</h1>
                            <img className="beanslogo" src={beens_logo} alt="Beans logo"/>
                            <div className="preview__subtitle">We makes every day full of energy and taste</div>
                            <div className="preview__subtitle">Want to try our beans?</div>
                            <NavLink to='/landing/coffeepage' className="preview__btn">More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="title">
                                About Us
                            </div>

                            <img className="beanslogo" src={beens_logo_dark} alt="Beans logo"/>
                            <div className="about__text">
                                <p>
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.
                                </p>
                                <p>
                                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                    horrible but confined day end marriage. Eagerness furniture set preserved far
                                    recommend. Did even but nor are most gave hope. Secure active living depend son
                                    repair day ladies now
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="best">
                <div className="container">
                    <div className="title">Our best</div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="best__wrapper">
                                {
                                    bestsellers && bestsellers.map( item =>(
                                        <BestItem
                                            key={item.name+'coffeebestsellers'}
                                            title={item.name}
                                            image={item.url}
                                            price={item.price}
                                            onChosenItem={onChosenItem}
                                        />
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default withRouter(Main)
