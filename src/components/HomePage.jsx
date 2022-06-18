import React, {useEffect} from 'react';
import {auth} from "../firebase";
const HomePage = () => {
    const currentUser = auth.currentUser
    useEffect(() => {
        console.log(currentUser)
    })
    return (
        <div>
            Homepage
        </div>
    );
};

export default HomePage;