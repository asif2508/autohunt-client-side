import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {params} = useParams();
    return (
        <div>
            <h1>This is inventory</h1>
        </div>
    );
};

export default Inventory;