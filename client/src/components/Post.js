import React, { Component } from 'react';
import PostData from '../data/postsData.json'
import './Stylesheets/Post.css'
import Like from '../assets/img/like.png'
import Dislike from '../assets/img/dislike.png'
import Footer from './footer'
import _ from 'lodash';
import CourseData from '../data/coursewisePosts.json'
import Forum from './Forum';
import{Container,Row,Col,Button} from 'react-bootstrap'
import Reply from './Reply'
import { faThumbsUp , faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





class Post extends Component {

    constructor(props){
        super(props);
        this.state={
            likes:4,
            dislikes:8,
            posts: PostData,
            coursePosts:CourseData,
            recentReply:"",
            postId:0,
            
        }
    }

    onClickLike(val){
        this.setState(state => {
            const newPosts = this.state.coursePosts;
            newPosts[val].likes++;
            return newPosts;
        });
        console.log('state update -> ', this.state.posts );
    }  
    onClickDislike(val){
        this.setState(state => {
            const newPosts = this.state.coursePosts;
            newPosts[val].dislikes++;
            return newPosts;
        });
        console.log('state update -> ', this.state.posts );
    }

    handleChange = e=>{
        this.setState({
            [e.target.value]:(e.target.value).toString(),
            
        },
 //       console.log(e.target.value)
        )
    }

    updateReply(reply){
        this.setState({ 
            reply:this.state.reply
            
        })
        console.log("Reply is ->",reply);
    }
    postComment(comment){
        this.state.recentReply=comment;
        console.log("comment---",this.state.recentReply);
    }
      
    render() {
        //  console.log("New DAta---",this.props.parent);
        //   console.log("coursename------>",this.props.courseName);
         
        return (
            <div className="container-fluid">
                {
                   this.props.parent.coursewisePosts.map(post =>{
                       this.state.postId = post.postId;
                       console.log("Post Id ",this.state.postId);

                       if(this.props.parent.courseName!=post.postCourse)
                       {
                            return (
                                <div>
                                    
                                </div>
                            );
                       }
                       //console.log("pposts",post);
                       else
                    return(
                        
                            <div className="row border rounded border-warning m-5 pb-5">
                                <div className="col col-12 mt-2" key={post.postId}>
                                    {/* <h4> {post.postTitle}</h4> */}
                                    <h6 style={{fontWeight:"bold"}}> {post.postContent}</h6>
                                </div>
                                <div className="col-12">
                                <p><span style={{fontWeight:"bold"}}>Posted By:</span>  {post.author}</p>
                                </div>
                                <div className="col-12">
                                <p><span style={{fontWeight:"bold"}}>Posted on: </span> {post.date}</p>
                                </div>
                                <div className="col-12">
                                <p><span style={{fontWeight:"bold"}}>Posted at:  </span>{post.time}</p>
                                </div>
                                <div className="col-12">
                                <p className="thu"><FontAwesomeIcon icon={ faThumbsUp } size="1x" onClick={() => this.onClickLike(post.postId)}/>
                                    {post.likes} <span style={{fontWeight:"bold"}}>Like</span>
                                </p>
                                </div>
                                <div className="col-12">
                                <p className="thd" ><FontAwesomeIcon  icon={ faThumbsDown }  size="1x" onClick={() => this.onClickDislike(post.postId)}/>
                                    {post.dislikes} <span style={{fontWeight:"bold"}}>Dislike</span>
                                </p>
                                </div>
                                <br/>
                                <Reply reply={post.replies}/>
                                <div className="col-12">
                                    <textarea rows="4" cols="30"  onChange={this.handleChange} value={this.state.recentReply} name="recentReply" placeholder="Reply.."></textarea>
                                    <Col offset-0>
                                       <Button variant="outline-info rounded" onClick={(comment)=>this.postComment(this.state.recentReply)}>Reply</Button>
                                    </Col>
                                </div>

                            </div>
                            
                       )
                   })

                }   
            </div>

        );
    }
}

export default Post;