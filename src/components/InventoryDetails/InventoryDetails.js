import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InventoryDetails.css';
const InventoryDetails = (props) => {
    const { _id, name, price, brand, quantity} = props.inventory;
    return (
            <tr>
                <td>{_id}</td>
                <td>{name}</td>
                <td>{brand}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><button className='delete-btn'>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button></td>
            </tr>
    );
};

export default InventoryDetails;