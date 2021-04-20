import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      zIndex: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
      paddingBottom: 5,
      backgroundColor: '#FFFFFF',
      paddingTop: 40,
    },
    logo:{
      width: 100,
      height: 20,
      resizeMode: 'contain',
    },
    menu:{
      width: 25,
      height: 25,
      resizeMode: 'contain'

    },
  });
  
  export default styles;