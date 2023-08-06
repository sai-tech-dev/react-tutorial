import { useState } from "react";

function MyForm(){
    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [email, setEmail] = useState("");
    // console.log("Current Val",name)
    const [inputs,setInputs] = useState({mobile:"+91",country:"India"});
    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Submitted")
        // console.log("Current Val",name,email,age);
        console.log("Inputs see",inputs)
    }

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        return setInputs((previousState) => {return {...previousState,[name] :value}})
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label>Enter Name</label>
            <input type="text" name="name" onChange={handleChange} /><br/>
            <label>Enter Age</label>
            <input type="number" name="age" onChange={handleChange} /><br/>
            <label>Enter Email</label>
            <input type="email" name="email" onChange={handleChange} /><br/>
            <label>Enter Mobile</label>
            <input type="text" name="mobile" onChange={handleChange} value={inputs.mobile} /><br/>
            {/* <input type="email" onChange={(evt) => {setInputs((previousState) => {return {...previousState,email:evt.target.value}} )}} /><br/> */}
            <label>Select Country</label>
            <select name="country" onChange={handleChange} value={inputs.country}>
                <option value="">Select</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
            </select><br/>
            <label>Enter about You</label>
            <textarea name="about" value={inputs.about} onChange={handleChange}></textarea><br/>
            <input type="submit" value="Submit Form"/>
        </form>
    </>
}

export default MyForm;