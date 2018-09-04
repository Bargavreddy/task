import React, { Component } from 'react'
import {connect} from 'react-redux'
 class TextForm extends Component {
     constructor(props) {
         super(props);
         this.state ={
             text:''
         }
     }
     handleChange = (e) => {
       this.setState({
           text:e.target.value
       })
     }
     handleSubmit= (e)=>{
        e.preventDefault();
         this.props.addTodo(this.state.text)
         this.resetForm();
     }
     resetForm(){
         this.setState({
            text:'' 
         })
     }
  render() {
    return (
      <div>
          <form className="ui form" onSubmit ={this.handleSubmit} >
                <div className="field" >
                <label>Enter  text</label>
                    <input type="text" name="text" value={this.state.text}
                     onChange={this.handleChange} /> <br/><br/>
                    <button type="submit"
                        className="ui button primary blue"
                        value="Submit">Add Text</button>
                </div>
            </form>
      </div>
    )
  }
}

const mapDispatch = (dispatch)=>{
    return {
        addTodo: (newText)=>{
            // console.log('new Todo Text', newText)
            dispatch({type:'addtoText', payload:newText})
        }
    }
}
export default connect(null, mapDispatch)(TextForm);