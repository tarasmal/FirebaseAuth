import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Input from "../Input";
import Button from "../Button";
import {Link} from "react-router-dom";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";

import {auth} from "../../firebase";

const SignInPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (auth.currentUser){
            navigate('/home')
        }
    }, [])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const signIn = async () => {
        setLoading(true)
        if (email && password ){
            try{
                await signInWithEmailAndPassword(auth, email, password)
                navigate('/home')

            }
            catch (e){
                console.log(e.code)
            }
        }
        else{
            alert('Fill all fields!')
        }
    }
    return (
        <div className={'row'}>
            <div className={'col'}></div>
            <div className={'col justify-content-center text-center'}>
                <form className={'w-75'}>
                    <Header text={'Sign in'}/>
                    <Input placeholder={'email'} value={email} type={'email'} setValue={setEmail}/>
                    <Input placeholder={'password'} value={password} type={'password'} setValue={setPassword}/>
                    <Link style={{'textDecoration':"none"}} to={'/auth/register'}>
                        <p>Not registered? Register</p>
                    </Link>
                    <Button text={'Sign in'} handler={signIn}/>
                </form>
                {loading && <LoaderSpinner/>}
            </div>
            <div className={'col'}></div>
        </div>

    );
};

export default SignInPage;