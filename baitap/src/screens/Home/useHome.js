import {useState, useEffect} from 'react';
import axios from 'axios';
import {
  ToastAndroid
} from 'react-native';
import {BASE_URL, DEFAULT_TAB_SELECTED} from '../../api/common';
const useHome = () => {
  const showToastEdit = () => {
    ToastAndroid.showWithGravity(
      "Edit thanh cong",
      ToastAndroid.SHORT,
      ToastAndroid.TOP
    );
  };
  const showToastThem = () => {
    ToastAndroid.showWithGravity(
      "Them thanh cong",
      ToastAndroid.SHORT,
      ToastAndroid.TOP
    );
  };
  const showToastXoa = () => {
    ToastAndroid.showWithGravity(
      "Xoa thanh cong",
      ToastAndroid.SHORT,
      ToastAndroid.TOP
    );
  };
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [idEdit, setIdEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [listItem, setListItem] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image:
      'https://i0.wp.com/blackpinkupdate.com/wp-content/uploads/2019/09/BLACKPINK-Rose-Instagram-Update-8-September-2019.jpg?fit=1440%2C1800&ssl=1',
  });
  const handleSearch = (text) =>{
    setSearch(text)
    console.log(text)
      const newList = [...data];
      const a = newList.filter(i => i.category.includes(text));
      setData(a)
  }
  const handleTitle = text => {
    setListItem({...listItem, title: text});
  };
  const handlePrice = text => {
    setListItem({...listItem, price: text});
  };
  const handleDescription = text => {
    setListItem({...listItem, description: text});
  };
  const handleCategory = text => {
    setListItem({...listItem, category: text});
  };
  const [selected, setSelected] = useState(DEFAULT_TAB_SELECTED);
  const deleteItem = async id => {
    const newData = data.filter(x => {
      return x.id !== id;
    });
    setData(newData);
    try {
      await axios.delete(`${BASE_URL}/products/${id}`);
      showToastXoa()
    } catch (error) {
      console.log(error);
      console.log('xoa loi roi ');
    }
    if (mounted) fetchApi();
    return () => (mounted = false);
  };
  const handleEdit = (key) => {
    const newList = [...data];
    const number = newList.findIndex((item) => item.id == key);
    const newItem = newList[number];
    setListItem({
      title: newItem.title,
      price: newItem.price,
      description: newItem.description,
      category: newItem.category,
      image: newItem.image,
    });
  };
  const SaveHanldeEdit = async() => {
    setEdit(false);
        try {
          const List = [...data];
          const newList = List.map((item)=>{
            if(item.id === idEdit){
              return{...listItem};
            }
            return item;
          });
         setData(newList)
          const res = await axios.put(`${BASE_URL}/products/${idEdit}`, listItem);
          showToastEdit()
        } catch (err) {
          console.error(err);
          console.log("edit loi roi ")
        }
        setListItem({
          title: '',
          price: '',
          description: '',
          category: '',
          image: 'https://i0.wp.com/blackpinkupdate.com/wp-content/uploads/2019/09/BLACKPINK-Rose-Instagram-Update-8-September-2019.jpg?fit=1440%2C1800&ssl=1',
        });
  };
  const AddItem = async dataAdd => {
    const newList = [...data];
    newList.push(dataAdd);
    setData(newList);
    setListItem({
      title: '',
      price: '',
      description: '',
      category: '',
      image: 'https://i0.wp.com/blackpinkupdate.com/wp-content/uploads/2019/09/BLACKPINK-Rose-Instagram-Update-8-September-2019.jpg?fit=1440%2C1800&ssl=1',
    });
    try {
      const res = await axios.post(`${BASE_URL}/products`, dataAdd);
      showToastThem()
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    let mounted = true;
    const fetchApi = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/products`);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (mounted) fetchApi();
    return () => (mounted = false);
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
    setEdit,
    listItem,
    setListItem,
    handleTitle,
    handlePrice,
    handleDescription,
    handleCategory,
    AddItem,
    SaveHanldeEdit,
    handleEdit,
    setIdEdit,
    search,
    handleSearch
  };
};

export default useHome;
