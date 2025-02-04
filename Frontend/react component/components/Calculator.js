import { Component } from "react";

class Calculator extends Component{

    state={a:20,b:10,username:"everyone",showResult:false} 

    
    
    setA=(e)=>{

        this.setState({a:parseInt(e.target.value),showResult:false});
    }

    setB=(e)=>{

        this.setState({b:parseInt(e.target.value),showResult:false});
    }

    user=(e)=>{
        this.setState({username:(e.target.value)});

        console.log(e.target.value)
    }

    setShowResult=(e)=>{
        this.setState(preValue=>
            
           { return{ showResult:!preValue.showResult}
        })
    }

    render(){
        return(<div>

            <h4>Please enter your name:- </h4>

            <h1>Welcome {this.state.username}</h1>

            <input type="text" onChange={this.user}/><br/><br/>

            <br/><br/>

            
            
            <input type="text" name="inputA" placeholder={this.state.a} onChange={this.setA}/>

            <input type="text" name="inputB" placeholder={this.state.b} onChange={this.setB}/>
            
            <button type="button" onClick={this.setShowResult}>CheckResult</button>
            
            <br/><br/>

{this.state.showResult?(<div>
            <h1>

            Addition :-{ this.state.a+this.state.b}<br/>
            Subraction :- {this.state.a-this.state.b}<br/>
            Multiplication :- {this.state.a*this.state.b}<br/>
            Division :- {this.state.a/this.state.b}<br/>
</h1></div>):(<div>


    <p>Please click on the result button to check the result</p>
</div>)}

        </div>);
    }
}

export default Calculator;