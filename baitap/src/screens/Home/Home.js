import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import useHome from './useHome';
import FoodItem from './TodoItem/TodoItem';
import styles from './Home.styles';
const TAB_VIEW = [
  {
    name: 'Đặt đơn',
    index: 1,
  },
  {
    name: 'Bình luận',
    index: 2,
  },
  {
    name: 'Thông tin',
    index: 3,
  },
];

const Home = () => {
  const {
    dataFood,
    setAdd,
    setData,
    foodLoading,
    selected,
    setSelected,
    edit,
    add,
    deleteItem,
    setEdit
  } = useHome();
  useEffect(() => {}, [setData]);
  const deleteIT =(id)=>{
    deleteItem(id)
  }
  const editItem =(id)=>{
    setEdit(true)
    // editItem(id)
  }
  const renderItem = ({item}) => <FoodItem deleteItem = {deleteIT} editItem={editItem} food={item} />;
  if (foodLoading || !dataFood) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  console.log(dataFood);
  return (
    <View>
      <Button onPress={() => setAdd(true)} title="Add Item" color="#841584" />
      {add ? (
        <View>
          <Text>add</Text>
        </View>
      ) : null}
      {edit ? (
        <View>
          <Text>edit</Text>
        </View>
      ) : null}
      <View style={styles.Tab}>
        {TAB_VIEW.map(item => (
          <View style={styles.Item}>
            <TouchableOpacity
              onPress={() => setSelected(item.index)}
              key={item.index}
              style={[styles.Item, selected === item.index && styles.selected]}>
              <View>
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View>
        <FlatList
          data={dataFood}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
export default Home;
