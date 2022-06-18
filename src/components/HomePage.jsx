import React, {useEffect} from 'react';
import {auth} from "../firebase";
import {useNavigate} from "react-router-dom";
const HomePage = () => {
    const currentUser = auth.currentUser
    const navigate = useNavigate()
    useEffect(() => {
        if (!currentUser){
            navigate('/auth/login')
        }
    }, [])
    return (
        <div>
            Homepage
        </div>
    );
};

export default HomePage;