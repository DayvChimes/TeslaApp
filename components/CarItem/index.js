import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) => {

  const {name, tagline, taglineCTA, image, textColor} = props.car;

    return (
    <View style = {styles.carContainer}>
      <ImageBackground
      source={image} 
      style= {styles.image}    
      />
      <View style = {styles.titles}>
        <Text style = {[styles.title, {color: textColor}]} >{name}</Text>
        <Text style = {[styles.subtitle, {color: textColor}]}>
          {tagline}
          {' '}
        <Text style = {[styles.subtitleCTA, {color: textColor}]}>
          {taglineCTA}
        </Text>
        </Text> 
    
        </View>  
      <View style = {styles.buttonsContainer}>
      <StyledButton 
      type="primary"
      content={"Custom order"}
      onPress ={()  => 
          console.warn("Custom order was pressed")
      }
      
      /> 

      <StyledButton 
      type="secondary"
      content={"Existing inventory"}
      onPress ={()  => 
          console.warn("Existing Inventory was pressed")
      }
      
      /> 

      </View> 
      </View>
    );
};

export default CarItem;