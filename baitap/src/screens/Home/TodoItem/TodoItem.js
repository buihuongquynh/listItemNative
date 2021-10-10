import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './TodoItem.styles';
const FoodItem = ({food, deleteItem, editItem }) => {

  return (
    <View style={styles.Item}>
     
        <Image source={{uri: food.image}} style={styles.Image} />
     
        <View>
          <Text style={styles.Text}>{food.category}</Text>
          <Text style={styles.TextPrice}>{food.price}</Text>
        </View>
        <View style={styles.listImg}>
        <TouchableOpacity
          onPress={() => {
            deleteItem(food.id)
          }}
          >
            <View>
              <Image
                style={styles.Icon}
                source={{
                  uri: 'https://tse3.mm.bing.net/th?id=OIP.90bvTUGcCJqR0qsvzA85HQHaHx&pid=Api&P=0&w=300&h=300',
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {
            editItem(food.id)
          }}
          >
            <View>
              <Image
                style={styles.Icon}
                source={{
                  uri: 'https://tse2.mm.bing.net/th?id=OIP.d1sTN41laBxAg-Uy_pXvmgHaHx&pid=Api&P=0&w=300&h=300',
                }}
              />
               </View>
          </TouchableOpacity>
        </View>
         
           
        </View>
  );
};

export default FoodItem;
