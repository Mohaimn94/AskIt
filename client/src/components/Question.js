import React, { Component } from 'react';
import{Container,Form,Row,Col,Button} from 'react-bootstrap'

class Question extends Component{

    constructor(props){
        super(props);
        this.state ={
            postTitle:'',
            postContent:'',
            
        }
    }
    
    postSubmit = e =>{
       console.log(this.state.postTitle);
       console.log(this.state.postContent);
    }
    handleChange = e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    /* courseNameHandler(name)
    {
        this.setState({courseName:name})
    } */
    render() {
        return (
            <Container fluid>
                <Form>
                    <Row style={{textAlign: "center"}}>
                      <Col xs={12} style={{textAlign: "center"}}>
                      <h3 style={{textAlign: "center"}}> {this.props.courseName} </h3> 
                        <textarea  rows="4" cols="50" type="text"  onChange={this.handleChange} placeholder="Question" value={this.state.postContent} name="postContent"></textarea><br/>
                      </Col> 
                      <Col xs={12} style={{textAlign: "center"}}>
                        <Button className="btn-info btn-lg rounded-pill"onClick={(val) => this.props.onClick({qTitle:this.state.postTitle, qContent:this.state.postContent})} >Post</Button>
                       {/* <input type="Button" onClick={(title,question) => this.props.postQuestion()} value="Post" ></input> */}
                      </Col>
                    </Row>      
                </Form> 
            </Container>
            
        );
    }
}
export default Question;