import React, {Component} from "react";
import Titles from "./components/Titles/Titles";
import Forms from "./components/Forms/Forms";
import Weather from "./components/Weather/Weather";

const API_KEY = "f48e2dd248772bbdeb18fd8f6958bdcd";

class App extends Component {
    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`)
        const data = await api_call.json();
        console.log(data);
    }
    render(){
    return (
        <div>
            <Titles />
            <Forms />
            <Weather />
        </div>
        )
    };
}    

export default App;
