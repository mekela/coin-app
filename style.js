import {StyleSheet,Dimensions} from "react-native";

var {height, width} = Dimensions.get('window');

const defaultFontSize = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  top: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  stripeTop: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navigation: {
    height: 100,
    justifyContent:'center'
  },
  content: {
    flex: 1,
    //alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    paddingLeft: 20,
  },
  companyName: {
    fontWeight: "bold",
    color: "#000",
    marginTop: 0,
    paddingLeft: 20,
    fontSize: defaultFontSize * 3,
  },
  button: {
    borderRadius: 30,
    backgroundColor: "#27ae60",
    padding: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  companyText:{
    fontSize: defaultFontSize * 1.5,
    justifyContent:'center',
    textAlign: 'center',
  },
  buttonInside: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight:'bold',
    fontSize: 1.5* defaultFontSize
  },
  inputWrapper:{
    height:40,
    backgroundColor:"#fff",
    borderColor: "#777",
    borderWidth: 1,
    marginLeft: 30,
    paddingLeft: 10,
    marginRight: 30,
    paddingRight: 30,
    marginBottom:1,
    flexDirection:'row'
  },
  inputWrapperBottom:{
    marginBottom: 30,
  },
  inputIcon:{
    marginLeft:20,
    marginRight:20,
    marginTop: 10
  }
});

export default styles;