import { Component } from "react";
import "./style.css"

export class ChildToParent extends Component{
    state={}

    getData=(id,name,sal,add)=>{
        this.setState({
           id : id,
           name: name,
           sal:sal,
           add:add
        })
    }

    

    render(){
        return(<div className="parent">
             <p>Employee id:- {this.state.id}</p>
            <p>Employee Name:- {this.state.name}</p>
            <p>Employee Salary :- {this.state.sal}</p>
            <p>Employee Address:- {this.state.add}</p>

            <Child1 onChange={this.getData}/>

        </div>);
    }
}

class Child1 extends Component{
    state={eid:100,ename:"steve",esal:923847,eadd:"India"}

    sendData=()=>{
        this.props.onChange(this.state.eid,this.state.ename,this.state.esal,this.state.eadd)
    }



    render(){
        return(<div className="child">

            <button type="button" onClick={this.sendData}>sendData</button>

        </div>);
    }
}