import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:80/api/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        console.log(inputs)
    }
    
    return (
        
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th><lable>Name: </lable></th>
                            <td><input type="text" name="name" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <th><lable>Email: </lable></th>
                            <td><input type="email" name="email" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <th><lable>Mobile: </lable></th>
                            <td><input type="number" name="mobile" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <td><button>Save</button></td>
                        </tr>
                    </tbody>
                </table>
                
               
                
            </form>
        </div>
    
    )
}