
import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useInventory from '../../hooks/useInventory';
import MyItem from '../MyItem/MyItem';
const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItems] = useInventory([])
    return (
        <div className=' myitem-page-style '>
            <Container>
                <h3 className='pt-2'>Items You have added</h3>
            {
                 myItems.map(item => <MyItem
                 key={item.id}
                 item={item}
                 user = {user}
                 ></MyItem>)
              
            }
            </Container>
        </div>
    );
};

export default MyItems;