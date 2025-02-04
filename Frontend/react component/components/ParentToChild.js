import { Component } from "react";
import './style.css'

export class ParentToChild extends Component{
    state={eid:100,ename:"hawkings",esal:923847,eadd:"India"}
    
    render(){
        return(<div className="parent">
                Iam from the parent component

                <Child id={this.state.eid} name={this.state.ename} sal={this.state.esal} add={this.state.eadd}/>
        <br/><br/>
        </div>);
    }
}

class Child extends Component{

    render(){
        return(<div className="child">
            Iam from the child component

            <p>Employee id:- {this.props.id}</p>
            <p>Employee Name:- {this.props.name}</p>
            <p>Employee Salary :- {this.props.sal}</p>
            <p>Employee Address:- {this.props.add}</p>


        </div>)
    }
}