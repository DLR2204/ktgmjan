import { Component } from "react";

class Calculator extends Component{

    state={a:20,b:10,username:"everyone"} 
    
    setA=(e)=>{

        this.setState({a:parseInt(e.target.value)});
    }

    setB=(e)=>{

        this.setState({b:parseInt(e.target.value)});
    }

    user=(e)=>{
        this.setState({username:(e.target.value)});

        console.log(e.target.value)
    }

    render(){
        return(<div>

            <h4>Please enter your name:- </h4>

            <h1>Welcome {this.state.username}</h1>

            <input type="text" onChange={this.user}/><br/><br/>

            <br/><br/>

            
            
            <input type="text" name="inputA" placeholder={this.state.a} onChange={this.setA}/>

            <input type="text" name="inputB" placeholder={this.state.b} onChange={this.setB}/>
            <br/><br/>

            <h1>

            Addition :-{ this.state.a+this.state.b}<br/>
            Subraction :- {this.state.a-this.state.b}<br/>
            Multiplication :- {this.state.a*this.state.b}<br/>
            Division :- {this.state.a/this.state.b}<br/>
</h1>
        </div>);
    }
}

export default Calculator;