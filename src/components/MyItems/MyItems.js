import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';
import { signOut } from 'firebase/auth';
import PageTitle from '../PageTitle/PageTitle';
const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItems, setMyitems] = useState([]);
    const naviagate = useNavigate();
    useEffect(() => {
        const email = user?.email;
        const url = `https://enigmatic-sands-65553.herokuapp.com/myitems/${email}`;

        fetch(url, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then((response) => {
            if (response.ok) {
                return response.json()
            }
            else {
                if (response.status === 401 || response.status === 403) {
                    signOut(auth)
                    naviagate('/login');

                }
            }
        })
            .then(data => setMyitems(data))
            .catch((error) => {
                console.log(error)
            });

    }, [myItems])

    const handleDeleteItem = id => {
        const confirmation = window.confirm('Are you sure?');
        if (confirmation) {
            fetch(`https://enigmatic-sands-65553.herokuapp.com/manageinventories/${id}`, {
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
    }
    return (
        <div className=' myitem-page-style pb-5 pt-3'>
            <PageTitle title="My Items"></PageTitle>
            <Container>
                {
                    myItems.map(item => <MyItem
                        key={item._id}
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