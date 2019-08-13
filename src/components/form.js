import React from 'react';

// class Form extends React.Component {
//     render() {
//         return (
//             <form onSubmit={this.props.weatherMethod}>
//                 <input type="text" name="city" placeholder="Город" />
//                 <button>Посмотреть погоду</button>
//             </form>
//         );
//     }
// }

const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Город" />
        <button>Посмотреть погоду</button>
    </form>
)

export default Form;