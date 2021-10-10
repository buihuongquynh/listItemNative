import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
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
    setEdit,
    listItem,
    setListItem,
    handleTitle,
    handlePrice,
    handleDescription,
    handleCategory,
    SaveHanldeEdit,
    AddItem,
    handleEdit,
    setIdEdit,
    search,
    handleSearch,
  } = useHome();
  useEffect(() => {}, [setData]);
  const deleteIT = id => {
    deleteItem(id);
  };
  const editIT = id => {
    setIdEdit(id);
    setEdit(true);
    handleEdit(id);
  };
  const renderItem = ({item}) => (
    <FoodItem deleteItem={deleteIT} editItem={editIT} food={item} />
  );
  if (foodLoading || !dataFood) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View>
      <TextInput
        placeholder="category?"
        style={styles.search}
        value={search}
        onChangeText={handleSearch}
      />
      {!add ? (
        <Button
          onPress={() => {
            setAdd(true);
          }}
          title="Add Item"
          color="#841584"
        />
      ) : null}
      {add ? (
        <View>
          <TextInput
            placeholder="title?"
            style={styles.oinput}
            value={listItem.title}
            onChangeText={handleTitle}
          />
          <TextInput
            placeholder="price?"
            style={styles.oinput}
            value={listItem.price}
            onChangeText={handlePrice}
          />
          <TextInput
            placeholder="description?"
            style={styles.oinput}
            value={listItem.description}
            onChangeText={handleDescription}
          />
          <TextInput
            placeholder="category?"
            style={styles.oinput}
            value={listItem.category}
            onChangeText={handleCategory}
          />
          <Button
            onPress={() => {
              setAdd(false), AddItem(listItem);
            }}
            title="Save"
            color="#841584"
          />
        </View>
      ) : null}
      {edit ? (
        <View>
          <View>
            <TextInput
              placeholder="title?"
              style={styles.oinput}
              value={listItem.title}
              onChangeText={handleTitle}
            />
            <TextInput
              placeholder="price?"
              style={styles.oinput}
              value={listItem.price}
              onChangeText={handlePrice}
            />
            <TextInput
              placeholder="description?"
              style={styles.oinput}
              value={listItem.description}
              onChangeText={handleDescription}
            />
            <TextInput
              placeholder="category?"
              style={styles.oinput}
              value={listItem.category}
              onChangeText={handleCategory}
            />
            <Button
              onPress={() => {
                setEdit(false), SaveHanldeEdit();
              }}
              title="Save"
              color="#841584"
            />
          </View>
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
