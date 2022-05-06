import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';
const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItems, setMyitems] = useState([]);
    useEffect(()=>{
        const email = user?.email;
        const url = `http://localhost:5000/myitems/${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMyitems(data))
    },[user])
    return (
        <div className=' myitem-page-style pb-5 pt-3'>
            <Container>
            {
                 myItems.map(item => <MyItem
                 key={item.id}
                 item={item}
                 user={user}
                 ></MyItem>)
              
            }
            </Container>
        </div>
    );
};

export default MyItems;