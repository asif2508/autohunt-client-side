import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';
const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItems, setMyitems] = useState([]);
    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/myitems/${email}`;

        fetch(url, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyitems(data))
    }, [user])

    const handleDeleteItem = id => {
        fetch(`http://localhost:5000/manageinventories/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className=' myitem-page-style pb-5 pt-3'>
            <Container>
                {
                    myItems.map(item => <MyItem
                        key={item.id}
                        item={item}
                        user={user}
                        handleDeleteItem={handleDeleteItem}
                    ></MyItem>)

                }
            </Container>
        </div>
    );
};

export default MyItems;