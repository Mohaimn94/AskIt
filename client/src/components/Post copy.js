import React, { Component } from 'react';
import PostData from '../data/postsData.json'
import './Stylesheets/Post.css'
import Like from '../assets/img/like.png'
import Dislike from '../assets/img/dislike.png'
import _ from 'lodash';
import CourseData from '../data/coursewisePosts.json'


class Post extends Component {

    constructor(props){
        super(props);
        this.state={
            likes:4,
            dislikes:8,
            posts: PostData,
            coursePosts:CourseData
        }
    }
    

    onClickLike(val){
        this.setState(state => {
            const newPosts = this.state.posts;
            newPosts[val].postLikes++;
            return newPosts;
        });
        console.log('state update -> ', this.state.posts );
    }  
    onClickDislike(val){
        this.setState(state => {
            const newPosts = this.state.posts;
            newPosts[val].postDislikes++;
            return newPosts;
        });
        console.log('state update -> ', this.state.posts );
    }



    handleChange = e=>{
        this.setState({
            [e.target.value]:(e.target.value).toString()
        },
        console.log(e.target.value)
        )
    }
      
    render() {
        console.log(CourseData.distributedSystems[0]);
        return (
            <div>
                
                {
                   this.state.posts.map(post =>{

                    if(this.props.courseName)
                    {
                        return(
                            
                            <div className="post" key={post.id}>
                            <h4> {post.postTitle}</h4>
                            <h6> {post.postContent}</h6>
                            <p>Posted By:  {post.postAuthor}</p>
                            <p>Posted on  {post.postDate}</p>
                            
                            <p><img src={Like} alt="Likes" name="likes" onClick={() => this.onClickLike(post.id)}/>
                                {post.postLikes} Fellows
                            </p>
                            <p><img src={Dislike} name="dislikes" alt="Dislikes" onClick={() => this.onClickDislike(post.id)}/>
                                {post.postDislikes} Fellows
                            </p>
                            </div>
                        );
                    }
                    else{
                        return(
                            
                            <div className="post" key={post.id}>
                            <h4> {post.postTitle}</h4>
                            <h6> {post.postContent}</h6>
                            <p>Posted By:  {post.postAuthor}</p>
                            <p>Posted on  {post.postDate}</p>
                            
                            <p><img src={Like} alt="Likes" name="likes" onClick={() => this.onClickLike(post.id)}/>
                                {post.postLikes} Fellows
                            </p>
                            <p><img src={Dislike} name="dislikes" alt="Dislikes" onClick={() => this.onClickDislike(post.id)}/>
                                {post.postDislikes} Fellows
                            </p>
                            </div>
                        );

                    }                  
                       
                   })
                }   
            </div>
        );
    }
}

export default Post;