import React, { Component } from 'react'
import Plan from './plan';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  state = {
    items:[],
    text:""
  }
  handleChange = e =>{
    this.setState({text:e.target.value})
  }

  handleAdd = e =>{
    if(this.state.text !==""){
      const items = [...this.state.items, this.state.text];
      this.setState({items:items, text:""});
    }
  }
    handleDelete = id =>{
      const Olditems = [...this.state.items]
      const items = Olditems.filter((element,i) =>{
        return i!==id
      })
      this.setState({items:items})
    }
  

  render() {
    return (
      <div>
        <div className="container-fluid my-5">
    <div className="row">
      <div className="col-sm-6 mx-auto">
        <h2 className="text-center text-white shadow-lg p-3">
          Tody's Plan
          <div className="row">
          <div className="col-9">
            <input type="text" className="form-control" placeholder="write your plan"
             value={this.state.text} onChange={this.handleChange} />
          </div>
          <div className="col-2">
            <button className="btn btn-warning font-weight-bold px-5" onClick={this.handleAdd}>Add</button>
          </div>
          <div className="container-fluid">
          <ul className="list-unstyled row m-5">
           {
             this.state.items.map((item,i)=>{
               return <Plan key={i} id={i} value = {item} sendData={this.handleDelete} />
             } )
           }
          </ul>
        </div>
        </div>
        </h2>
        
      </div>
    </div>

    </div>
      </div>
    )
  }
}
