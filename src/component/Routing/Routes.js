import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Landing from '../Dashboard/Landing';
import Login from '../Autherization/Login';
import Register from '../Autherization/Register';
import ContactUs from '../Dashboard/ContactUs';
import Aboutus from '../Dashboard/Aboutus';
import Blog from '../Dashboard/Blog';
import Services from '../Dashboard/Services';

// import InstituteDashboard from '../Institute/InstituteDashboard';
// import InstituteStudents from '../Institute/InstituteStudents';
// import InstituteStaffs from '../Institute/InstituteStaffs';
// import InstituteLibrary from '../Institute/InstituteLibrary';
// import InstituteScholarship from '../Institute/InstituteScholarship';
// import InstituteTimetable from '../Institute/InstituteTimeTable';
// import InstituteApplication from '../Institute/InstituteApplication';
// import InstituteSupport from '../Institute/InstituteSupport';
// import InstituteNotice from '../Institute/InstituteNotice';
// import InstituteTodo from '../Institute/InstituteTodo';
// import InstituteMeeting from '../Institute/InstituteMeeting';
// import InstituteFees from '../Institute/InstituteFees';

function Routes() {
    return (
        <div>
        <Switch>
            <Route exact path="/homepage" component={Landing} />
            <Route exact path="/login" component={ Login} />
            <Route exact path="/contact_us" component={ ContactUs} />
            <Route exact path="/about_us_and_our_team" component={ Aboutus} />
            <Route exact path="/register_your_institue" component={Register} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/blog" component={Blog} />
              {/* <Route exact path="/institutedashboard" component={InstituteDashboard} />
              <Route exact path="/student_dashboard" component={InstituteStudents} />
              <Route exact path="/staffs_of_institute" component={InstituteStaffs} />
              <Route exact path="/institute_library" component={InstituteLibrary} />
              <Route exact path="/institute_scholarship" component={InstituteScholarship} />
              <Route exact path="/institute_time_table" component={InstituteTimetable} />
              <Route exact path="/institute_exams" component={InstituteApplication} />
              <Route exact path="/institute_support" component={InstituteSupport} />
              <Route exact path="/notice-board-institute" component={InstituteNotice} />
              <Route exact path="/todo-institute" component={InstituteTodo} />
              <Route exact path="/meeting-orgainzer" component={InstituteMeeting} />
              <Route exact path="/fee-structre-and-fee-details" component={InstituteFees} /> */}
              {/* <PrivateRoute exact path="/" component={Loading} /> */}
            </Switch>
        </div>
    )
}

export default Routes

