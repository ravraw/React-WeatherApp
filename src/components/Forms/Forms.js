import React,{Component} from "react";

class Forms extends Component {
    render(){
        return(
            <div>
                <input type ="text" name = "city" placeholder = "City..."/>
                <input type ="text" name = "country" placeholder = "Country..."/>
                <button>Get Weather</button>
            </div>    
        )
    };
};

export default Forms;