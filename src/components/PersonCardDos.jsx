import React, {useState} from 'react';

const PersonCardDos = (props) => {
    
    const [count, setCount] = useState(props.age);
 
    const sumaEdad = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>            
            <p>Age: {count}</p>            
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ sumaEdad }>Click Me</button>   
        </div>
    );
   
}

export default PersonCardDos;
