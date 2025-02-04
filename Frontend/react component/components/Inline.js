import { Component } from "react";

class Inline extends Component{

   state={
    hello:{fontSize:'100px'}
   }

    render(){
        return(<div style={this.state.hello}>
            Hello Mahesh.......Good Evening

        </div>);
    }
}

export default Inline;