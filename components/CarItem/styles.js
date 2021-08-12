import { StyleSheet, Dimensions, ProgressViewIOSComponent } from "react-native";

const styles = StyleSheet.create({
    carContainer:{
        width: '100%',
        height: Dimensions.get('window').height,
       },
       titles:{
         marginTop: '30%',
         width: '100%',
         alignItems: 'center',
         color: '#000000',
       },
       title:{
         fontSize: 40,
         fontWeight: '500',
         alignItems: 'center',
       },
       subtitle:{
         fontSize: 16,
         alignItems: 'center',
       },
       subtitleCTA: {
        textDecorationLine: 'underline',
       },
       image: {
         height: '100%',
         width: '100%',
         resizeMode: 'cover',
         position: 'absolute',
       },
       buttonsContainer:{
         position: 'absolute',
         bottom: 50,
         width: '100%',
       },
});

export default styles;