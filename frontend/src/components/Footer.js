import React from 'react';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* Footer Subscribe */}
                    <div className="footer-sunscribe col-sm-12">
                        <h1>subscribe to newsletter</h1>
                        <form action="#" id="footer-sub-form" className="float-right">
                            <input type="email" placeholder="Your email please" />
                            <input type="submit" value="subscribe" />
                        </form>
                    </div>
                    {/* Footer Copyright & Navigation */}
                    <div className="footer-bottom col-sm-12">
                        <div className="copyright float-left"><p>Copyright &copy; {new Date.getFullYear()} <a href="http://www.github.com/prateek951">SocialU-</a> All Rights Reserved</p></div>
                        <div className="footer-menu float-right">
                            <nav>
                                <ul>
                                    <li><a href="map-sidebar-4.html">About</a></li>
                                    <li><a href="map.html">Explore</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>    
        </footer>
    );
};

export default Footer;