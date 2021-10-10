import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  Item: {
    width:'100%',
    borderWidth: 0.2,
    borderColor: '#119',
    padding: 20,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  Image: {
    width: 50,
    height: 50,
  },
  ContText: {
    width:'100%',
    flexDirection: 'row',
  justifyContent:'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  Text: {
    textAlign: 'center',
    margin: 1,
  },
  TextPrice: {
    textAlign: 'center',
    fontSize: 20,
    color: 'red',
    fontWeight: '900',
  },
  Icon: {
    width: 20,
    height: 20,
    margin: 5,
  },
  listImg:{
    flexDirection: 'row',
  }
});
export default styles;
