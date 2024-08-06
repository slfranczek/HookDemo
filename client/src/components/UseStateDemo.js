import React, {useState} from 'react';

const UseStateDemo = () => {

    const [message, setMessage] = useState('Hello, useState!');
    
    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div>
            <h1>Demonstration of useState</h1>
            <p><label>message: </label>{message}</p>
            <p><div><span>Whatever you type here will change the state of the underlying state variable "message" that was created using useState</span><br/>
            <span>Because React does not use 2-way databinding this value will need to be manually set to message using the setMessage dispatch returned from useState</span></div></p> 
            <input
                type="text"
                value={message}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default UseStateDemo;