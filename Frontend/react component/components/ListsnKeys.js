import { Component } from "react";
class ListsnKeys extends Component{

    state={
    employees:[{id:100,users:"Ramesh"},{id:102,users:"Naresh"},{id:103,users:"Suresh"},{id:104,users:"Rajesh"},{id:105,users:"Somesh"}]
    }
    render(){
        return(<div>
            <h1><u>Lists in React</u></h1>

            {this.state.employees.map(emp=>{
                  return  <p >{emp.id}.{emp.users}</p>
                })}

        </div>);
    }
}

export default ListsnKeys;