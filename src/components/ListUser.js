import axios from "axios";
import { useEffect } from "react";

export default function ListUser(){

    useEffect(() => {
        getUsers();
    },[]);

    function getUsers(){
        axios.get('http://localhost:80/api/user/save').then(function(response){
            console.log(response.data);
        })
    }
}