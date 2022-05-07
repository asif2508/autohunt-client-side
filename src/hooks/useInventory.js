import { useEffect, useState } from "react"

const useInventory = () =>{
    const [inventories, setInventories] = useState([]);
    useEffect(()=>{
        fetch('https://enigmatic-sands-65553.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setInventories(data))
    },[inventories])
    return [inventories, setInventories];
}
export default useInventory;