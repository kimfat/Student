import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



const LotsOfStyles = () => {
    return (
      <View style={styles.box}>
        <Text style={{color:'blue', fontSize: 17, top:50, left: 18}}>Новости</Text>
        <Image
        style={{width: 300, height: 220, top: 100, right: 50}}
        source={require('./assets/1.jpeg')}
        />
        <Text style={{position:'absolute' ,top: 350,left:28,fontWeight:"bold", color:"black", fontSize:23}}>    Люди, живущие в деревне{'\n'}лучше ориентируются в{'\n'}пространстве</Text>
        <Text style={{position:'absolute' ,top: 430,left:28,fontWeight:"normal", color:"black", fontSize:15}}>      Данные выводы исследователи сделали{'\n'}после серии опытов, в которых приняли{'\n'}участие 400 тысяч человек. Добровольцы{'\n'}из 38 стран мира играли в мобильную игру{'\n'}Sea Hero Quest, а ученые наблюдали, как они{'\n'}проявляют навыки ориентации.
        </Text>
      </View>
    );
};
const styles = StyleSheet.create({
  box: {
    flex: 0,
    backgroundColor:'white',
    width: 400,
    height: 600,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative'
  },
});
export default LotsOfStyles;
