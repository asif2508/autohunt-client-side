import { useEffect, useState } from "react"

const useInventory = () =>{
    const [inventories, setInventories] = useState([]);
    useEffect(()=>{
        fetch('inventories.json')
        .then(res => res.json())
        .then(data => setInventories(data))
    },[])
    return [inventories, setInventories];
}
export default useInventory;