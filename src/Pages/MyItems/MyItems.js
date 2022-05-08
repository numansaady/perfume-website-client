import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';

const MyItems = () => {
    const [myPerfume, setMyPerfume] = useState([]);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    useEffect( () =>{
        const email = user?.email;
        fetch(`https://blooming-lowlands-86443.herokuapp.com/myItem?email=${email}`, {
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
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
            if(proceed){
                const url = `https://blooming-lowlands-86443.herokuapp.com/perfume/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    const remaining = myPerfume.filter(perfume => perfume._id !== id);
                    setMyPerfume(remaining);
                })
            }
      }

    return (        
        <div id="perfumes" className="container">
        <PageTitle title="My Items"></PageTitle>
        <div className="row">
          <h1 className="text-primary text-center mt-5">{myPerfume.length} Items of : {user?.displayName || user?.email}</h1>
          <div className="">
          <table className="table table-success table-striped table-hover">
                <thead>
                  <th>Perfume Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Action</th>
                </thead>
            {myPerfume.map((perfume) => (            
              
                <tbody key={perfume._id}>
                  <tr>
                    <td>{perfume.name}</td>
                    <td>{perfume.description}</td>
                    <td>${perfume.price}</td>
                    <td>{<button onClick={()=>handleDelete(perfume._id)}>Delete Item</button>}</td>
                  </tr>
                </tbody>
            ))}          
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyItems; 