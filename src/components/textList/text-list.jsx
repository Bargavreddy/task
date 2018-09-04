import React, { Component } from 'react'
import {connect } from 'react-redux'
import TextDetails  from './text-deatils'
import TextForm from './text-form'

class TextList extends Component {
    constructor(props){
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }
   
    deleteItem(id){
        console.log(id)
        this.props.deleteSelctedTodo(id)
    }

  render() {
    return (
      <div>
          <h3> Text list  </h3>
          <TextForm/> 
          <div className="ui selection aligned list">
          {this.props.textList.map(data  => 
           <TextDetails
             deleteTodo ={this.deleteItem}
          key={data.id} todo={data} />)}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
return {
    textList: state.text
}
}

const mapDispatchId=(dispatch)=>{
    return{
       deleteSelctedTodo: (deletedId)=>{
        //    console.log('delete Selected Id',deletedId)
           dispatch({type:'DELETE_TEXT', payload:deletedId})
       }
    }
}

 export default connect(mapStateToProps,mapDispatchId)(TextList) 