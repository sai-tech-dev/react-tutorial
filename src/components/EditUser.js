import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateUser(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})
    
    const {id} = useParams();

    useEffect(() => {
        getUser();
    },[]);

    function getUser(){
        axios.get(`http://localhost:80/api/user/${id}`).then(function(response){
            console.log(response.data);
            setInputs(response.data);
        })
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:80/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        console.log(inputs)
    }
    
    return (
        
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th><lable>Name: </lable></th>
                            <td><input value={inputs.name} type="text" name="name" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <th><lable>Email: </lable></th>
                            <td><input value={inputs.email} type="email" name="email" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <th><lable>Mobile: </lable></th>
                            <td><input value={inputs.mobile} type="number" name="mobile" onChange={handleChange}></input></td>
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