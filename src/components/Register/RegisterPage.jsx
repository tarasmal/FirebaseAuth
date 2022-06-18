import React, {useState} from 'react';
import Input from "../Input";
import Button from "../Button";
import {Link} from "react-router-dom";
import Header from "../SignIn/Header";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../../firebase";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

const RegisterPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const register = async () => {
        setLoading(true)
        if (email && password === confirmPassword){
           try{
               await createUserWithEmailAndPassword(auth, email, password)
                updateProfile(auth.currentUser,{
                    displayName: name
                })
               setLoading(false)
               alert('Registration successful')

           }
           catch (e){
               switch (e.code){
                   case 'auth/email-already-in-use':
                       alert('User is registered!')

                       break
                   default:
                       alert("Unexpected error", e.code)
               }
               setLoading(false)
           }
        }
        else
        {   setLoading(false)
            alert("Fill the fields correctly!")

        }
    }
    return (
        <div className={'row'}>
            <div className={'col'}></div>
            <div className={'col justify-content-center text-center'}>
                <Header text={'Register'}/>
                <form>
                    <div className={'form-outline mb-4'}>
                        <Input
                            placeholder={'name'}
                            type={'text'}
                            value={name}
                            setValue={setName}
                        />
                        <Input
                            placeholder={'email'}
                            type={'email'}
                            value={email}
                            setValue={setEmail}
                        />

                        <Input
                            placeholder={'password'}
                            type={'password'}
                            value={password}
                            setValue={setPassword}
                        />

                        <Input
                            placeholder={'confirm password'}
                            type={'password'}
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                        />
                        <Button text={'Register'} handler={register}/>
                    </div>
                    <Link to={'/auth/login'}>Already registered? Sign in</Link>
                </form>
                {loading && <LoaderSpinner/>}
            </div>
            <div className={'col'}></div>
        </div>
    );
};

export default RegisterPage;