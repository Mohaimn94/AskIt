import React, { Component } from 'react';
import './Stylesheets/Reply.css'

class Reply extends Component {
    
    constructor(props){
        super(props);
       

    }
     

    
    render() {
        let reps = []
        //console.log("Repliess Length--> ",this.props.reply[0].replyContent);
       // console.log("Get Replies function -->",this.props.getReplies);
        
        //this.props.getReplies.map((reply) => {
            
            
        //});
        
        

        
        return (

            this.props.reply.map((reply) => {
                return(
                    <div className="repliedDiv">
                    <p>{reply.replyContent}</p>
                    <p>Replied By: {reply.author}</p>
                    </div>
                )
            })
            
   
        );
        
    }
}



export default Reply;