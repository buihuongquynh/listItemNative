import {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, DEFAULT_TAB_SELECTED} from '../../api/common';
const useHome = () => {
  const [add,setAdd] = useState(false)
  const [edit,setEdit] = useState(false)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(DEFAULT_TAB_SELECTED)
  const deleteItem = async(id) => {
    let mounted = true; 
    try {
      await axios.delete(`${BASE_URL}/products/${id}`);
    
      const newData = data.filter((x) =>{
        return x.id !== id;
      });
      setData(newData)
      console.log(newData)
      console.log("xoa thanh cong")
    } catch (error) {
     console.log(error)
     console.log("xoa loi roi ")
    }
    if(mounted)fetchApi();
    return()=>(mounted=false)
  };
  const editItem =(id) => {
    try {
      axios.put(`${BASE_URL}/products/${id}`);
      const newData = data.filter((x) =>{
        return x.id !== id;
      });
      setData(newData)
     
    } catch (error) {
     console.log(error)
     console.log("xoa loi roi ")
    }
  };
  
  useEffect(() => {
    let mounted = true; 
    const fetchApi = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/products`);
        setData(res.data);
        setLoading(false)
      } catch (error) {
       console.log(error)
      }
    };
    if(mounted)fetchApi();
    return()=>(mounted=false)
  }, [setData]);
  return {
    dataFood: data,
    foodLoading: loading,
    selected,
    setSelected,
    deleteItem,
    add,
    setData,
    edit,
    setAdd,
    setEdit
  };
};

export default useHome;
