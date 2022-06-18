import React, {useEffect, useState} from 'react';
import {auth} from "../firebase";
import {useNavigate} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
const HomePage = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (!user){
                navigate('/auth/login')
            }
            else{
                setName(user.displayName)
            }
        })
    }, [])
    return (
        <>
            <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
                <ul className={'navbar-nav me-auto mb-2 mb-lg-0'}>
                    <div className={'col'}></div>
                    <div className={'col'}></div>
                    <div className={'col'}></div>
                    <div className={'col'}></div>
                    <div className={'col'}></div>
                    <div className={'col'}></div>

                    <div className={'col'}></div>
                    <div className={'col'}></div>
                    <div className={'col'}></div>

                    <li className={'nav-item m-2 float-right'}>
                        {name}
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default HomePage;