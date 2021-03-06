import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  Tab: {
    flexDirection: 'row',
  },
  selected: {
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  Item: {
    padding: 5,
  },
  Button: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textbutton: {
    backgroundColor: 'yellow',
    padding: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  oinput:{
    borderWidth: .5,
    borderRadius:10,
    margin:5,
    padding:5,
    borderColor:'#555'
  },
  search:{
    width:'50%',
    marginLeft: 200,
    justifyContent: 'center',
    borderWidth: .5,
    borderRadius:10,
    margin:5,
    padding:5,
    borderColor:'#555'
  },
});
export default styles;
