import React from 'react';

// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//                 { this.props.city &&
//                     <div>
//                         <p>Местоположение: {this.props.city},{this.props.country} </p>
//                         <p>Температура: {this.props.temp}</p>
//                         <p>Восход Солнца: {this.props.sunrise}</p>
//                         <p>Закат Солнца: {this.props.sunset}</p>
//                     </div>
//                 }
//                 <p> {this.props.error} </p>
//             </div>
            
//         );
//     }
// }

const Weather = props => (
    <div className="infoWeath">
        {props.city &&
            <div>
                <p>Местоположение: {props.city},{props.country} </p>
                <p>Температура: {props.temp}</p>
                <p>Восход Солнца: {props.sunrise}</p>
                <p>Закат Солнца: {props.sunset}</p>
            </div>
        } 
           
        <p className="error"> {props.error} </p>
    </div>
)

export default Weather;