import React from 'react'

export default function Header() {
    return (
        <div className="ecommerce">
            {/* BEGIN STYLE CUSTOMIZER  */}
            <div className="color-panel hidden-sm">
                <div className="color-mode-icons icon-color"></div>
                <div className="color-mode-icons icon-color-close"></div>
                <div className="color-mode">
                    <p>THEME COLOR</p>
                    <ul className="inline">
                        <li className="color-red current color-default" data-style="red"></li>
                        <li className="color-blue" data-style="blue"></li>
                        <li className="color-green" data-style="green"></li>
                        <li className="color-orange" data-style="orange"></li>
                        <li className="color-gray" data-style="gray"></li>
                        <li className="color-turquoise" data-style="turquoise"></li>
                    </ul>
                </div>
            </div>


            {/* <!-- BEGIN TOP BAR --> */}
            <div className="pre-header">
                <div className="container">
                    <div className="row">
                        {/* <!-- BEGIN TOP BAR LEFT PART --> */}
                        <div className="col-md-6 col-sm-6 additional-shop-info">
                            <ul className="list-unstyled list-inline">
                                <li><i className="fa fa-phone"></i><span>+1 456 6717</span></li>
                                {/* <!-- BEGIN CURRENCIES --> */}
                                <li className="shop-currencies">
                                    <a href=" ">€</a>
                                    <a href=" ">£</a>
                                    <a href=" " className="current">$</a>
                                </li>
                                {/* <!-- END CURRENCIES --> */}
                                {/* <!-- BEGIN LANGS --> */}
                                <li className="langs-block">
                                    <a href=" " className="current">English </a>
                                    <div className="langs-block-others-wrapper"><div className="langs-block-others">
                                        <a href=" ">French</a>
                                        <a href=" ">Germany</a>
                                        <a href=" ">Turkish</a>
                                    </div></div>
                                </li>
                                {/* <!-- END LANGS --> */}
                            </ul>
                        </div>
                        {/* <!-- END TOP BAR LEFT PART --> */}
                        {/* <!-- BEGIN TOP BAR MENU --> */}
                        <div className="col-md-6 col-sm-6 additional-nav">
                            <ul className="list-unstyled list-inline pull-right">
                                <li><a href="shop-account.html">My Account</a></li>
                                <li><a href="shop-wishlist.html">My Wishlist</a></li>
                                <li><a href="shop-checkout.html">Checkout</a></li>
                                <li><a href="page-login.html">Log In</a></li>
                            </ul>
                        </div>
                        {/* <!-- END TOP BAR MENU --> */}
                    </div>
                </div>
            </div>
            {/* <!-- END TOP BAR --> */}
            {/* END BEGIN STYLE CUSTOMIZER  */}

        </div>
    )
}
