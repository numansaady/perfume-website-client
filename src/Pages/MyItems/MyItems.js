import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../Auth/axiosPrivate';

const MyItems = () => {
    const [myPerfume, setMyPerfume] = useState([]);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    useEffect( () =>{
        const email = user?.email;
        fetch(`http://localhost:5000/myItem?email=${email}`, {
            method: 'GET', 
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status===403){
                navigate('/login');
            }
            return res.json()
        })
        .then(data =>{
            console.log(data);
            setMyPerfume(data);
        })
    }, [user])

    return (
        <div className='w-50 mx-auto'>
            <h2>My All Perfumes: {myPerfume.length}</h2>
            {
                myPerfume.map(perfume =><div key={perfume._id}>
                    <p>{perfume.email} : {perfume.name}</p>
                </div>)
            }
        </div>
    );
};

export default MyItems;