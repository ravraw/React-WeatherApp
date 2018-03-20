import React, {Component} from "react";
import Titles from "./components/Titles/Titles";
import Forms from "./components/Forms/Forms";
import Weather from "./components/Weather/Weather";

const API_KEY = "f48e2dd248772bbdeb18fd8f6958bdcd";

class App extends Component {

    state = {
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined
    }

    getWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
        const data = await api_call.json();
        console.log(data);
        if(city && country){
            this.setState({
                city:data.name,
                country:data.sys.country,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                description:data.weather['0'].description,
                error: ""
            })
        }else {
            this.setState({
                city:data.undefined,
                country:undefined,
                temperature: undefined,
                humidity: undefined,
                description:undefined,
                error: " Please enter a City / Country name "
            })

        }
    }
    render(){
    return (
        <div>
            <Titles />
            <Forms getWeather ={this.getWeather}/>
            <Weather 
                city = {this.state.city}
                country = {this.state.country}
                temperature = {this.state.temperature}
                humidity = {this.state.humidity}
                description ={this.state.description}
                error = {this.state.error}
                
                />
        </div>
        )
    };
}    

export default App;
