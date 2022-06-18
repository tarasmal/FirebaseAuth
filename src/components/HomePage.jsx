import React, {useEffect, useState} from 'react';
import {auth} from "../firebase";
import {useNavigate} from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
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
    const out = async () => {
        try{
            await signOut(auth)
        }
        catch (e){
            console.log(e.message)
        }
    }
    return (
        <>
            <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
                <ul className={'navbar-nav me-auto mb-2 mb-lg-0'}>

                    <li className={'nav-item m-2'}>
                        {name}
                    </li>
                    <li className={'nav-item m-2'}>
                        <button className={'btn-secondary'} onClick={out}>Sign out</button>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default HomePage;