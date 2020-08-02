import React, { Component } from 'react';
import Question from './Question';
import SideBar from './Sidebar';
import Post from './Post';
import CourseWise from '../data/coursewisePosts.json';
import ReactDOM from 'react-dom';
import{Container} from 'react-bootstrap'


class Forum extends Component {


    constructor(props){
        super(props);
        this.state = {
            stateUpdated: false,
            courseName:'All Courses',
            coursewisePosts:CourseWise,
            postId:''
        }
    }
    
    render() {
        if(!this.state.stateUpdated){
            return (
            <Container>
                <h3 style={{textAlign: "center"}} className="justify-content-center">Welcome to Discussion Forum</h3>
                <h4 style={{textAlign: "center"}}>{this.state.courseName}</h4>
                <SideBar onClick = {this.courseClick}/>
                <Post parent={this.state}/>
            </Container>
            
            );
        }
        else{
            return(
                <Container>
                 <h3 style={{textAlign: "center"}} className="text center">Welcome to Discussion Forum</h3>
                 <Question courseName = {this.state.courseName} onClick={this.postQuestion}  />
                 <SideBar onClick = {this.courseClick}/>
                 <Post id="postDiv"parent={this.state}/>
                </Container>
                
            );
        }
    
    }
    
    postQuestion= (val) => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        today = dd + '-' + mm + '-' + yyyy;
       // document.write(today);
        
        var temp = {
            "postId": 0,
            "postContent": "Does anyone know the Banking problem?",
            "postCourse": "Distributed Systems",
            "author": "Muhammad Dawar",
            "date": today,
            "time": time,
            "likes": 0,
            "dislikes": 0,
            "replies": [
                {
                    "replyId": 0,
                    "replyContent": "",
                    "author": "",
                    "date": today,
                    "time": time
                }
            ]
        }
        temp.postContent = val.qContent;
        temp.postCourse = this.state.courseName;
        temp.date=today;
        temp.time=time;
        temp.likes=0;
        temp.dislikes=0;
        console.log("before adding",this.state.coursewisePosts);
        this.state.coursewisePosts.push(temp);
        console.log("after adding",this.state.coursewisePosts);
        this.forceUpdate();
        
    }
    courseClick = (val) => {
        this.setState({courseName: val, stateUpdated: true});
    }
}

export default Forum;