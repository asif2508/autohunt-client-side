import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import InventoryDetails from '../InventoryDetails/InventoryDetails';
import PageTitle from '../PageTitle/PageTitle';
import './ManageInventories.css';
const ManageInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-sands-65553.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [inventories])
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
        <div className='manage-inventories-style'>
            <PageTitle title="Manage Inventory"></PageTitle>
            <Container>
                <h3 className='pt-3 mb-3'>Manage Inventories</h3>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Supplier</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventories.map(inventory => <InventoryDetails
                                key={inventory._id}
                                inventory={inventory}
                                handleDeleteItem={handleDeleteItem}
                            ></InventoryDetails>)
                        }
                    </tbody>
                </Table>
                <div className='mt-3 pb-5'>
                    <Link className='manage-inventories-btn d-flex align-items-center justify-content-center mx-auto' to='/additem'>Add new Item
                        <FontAwesomeIcon className='me-2 ms-2' icon={faLongArrowAltRight}></FontAwesomeIcon>
                    </Link>
                </div>
            </Container>

        </div>
    );
};

export default ManageInventories;