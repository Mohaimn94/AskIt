import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CourseList from '../data/courses.json';
import './Stylesheets/CoursesMenu.css';


class CoursesMenu extends Component {

    render() {
        return (
    <div classNme="container-fluid">
      <div className="row row-offcanvas row-offcanvas-right">
        <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
            <div class="sidebar-nav">
                    <h4>Courses</h4>
                {
                   CourseList.map(courseList =>{
                       return(
                            <div className="nav">
                                <Link to='/profile'>{courseList.name}</Link> 
                            </div>
                       )
                   })
                }
            </div>
        </div>
      </div>
    </div>
        );
    }
}

export default CoursesMenu;