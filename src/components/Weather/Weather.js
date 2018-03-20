import React from "react";

const weather = (props) => {
        return(
            <div>
                {props.city && props.country && <p>City: {props.city},{props.country}</p> }
                {props.temperature && <p>Temperature: {props.temperature}</p> }
                {props.humidity && <p>Humidity: {props.humidity}</p> }
                {props.description && <p>Conditions: {props.description}</p> }
                {props.error && <p>Please enter City / Country name</p>}
            </div>    
        )
};

export default weather ;