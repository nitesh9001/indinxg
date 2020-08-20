import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Landing from '../Dashboard/Landing';
import ContactUs from '../Dashboard/ContactUs';
import Aboutus from '../Dashboard/Aboutus';
import Blog from '../Dashboard/Blog';
import Services from '../Dashboard/Services';
import Notfound from '../Dashboard/Notfound';
import ScrollalwaysTop from '../Layout/ScrollalwaysTop';
import GiveTestimonial from '../Dashboard/GiveTestimonails';




function Routes() {
    return (
        <div>
        <ScrollalwaysTop>
        <Switch>
            <Route exact path="/indinxg" component={Landing} />np
            <Route exact path="/contact_us" component={ ContactUs} />
            <Route exact path="/about_us_and_our_team" component={ Aboutus} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/notfound" component={Notfound} />
            <Route exact path="/give_testimonails" component={GiveTestimonial} />
            <Route component={Notfound} />
            </Switch>
            </ScrollalwaysTop>

        </div>
    )
}

export default Routes

