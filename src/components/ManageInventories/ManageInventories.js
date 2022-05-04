import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import InventoryDetails from '../InventoryDetails/InventoryDetails';
import './ManageInventories.css';
const ManageInventories = () => {
    const [inventories] = useInventory();
    return (
        <div className='manage-inventories-style'>
            <h3 className='pt-3 mb-3'>Manage Inventories</h3>
            <Container>
                <Table size="lg" striped bordered hover variant="dark">
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
                            ></InventoryDetails>)
                        }
                    </tbody>
                </Table>
                <div className='mt-3 pb-5'>
                    <Link className='manage-inventories-btn d-flex align-items-center justify-content-center w-25 mx-auto' to='/additem'>Add new Item
                        <FontAwesomeIcon className='me-2 ms-2' icon={faLongArrowAltRight}></FontAwesomeIcon>
                    </Link>
                </div>
            </Container>

        </div>
    );
};

export default ManageInventories;