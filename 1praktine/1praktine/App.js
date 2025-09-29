import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const ColorButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const ColorText = ({ label, color }) => (
  <Text style={[styles.text, { color }]}>{label}</Text>
);

export default function App() {
  const initialColors = ['black', 'black', 'black', 'black'];
  const [textColors, setTextColors] = useState(initialColors);

  const customColors = ['red', 'blue', 'green', 'purple'];

  const toggleColor = (index) => {
    setTextColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = newColors[index] === 'black' ? customColors[index] : 'black';
      return newColors;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      
      <View style={styles.buttonsContainer}>
        {['Button1', 'Button2', 'Button3', 'Button4'].map((label, i) => (
          <ColorButton key={i} label={label} onPress={() => toggleColor(i)} />
        ))}
      </View>

      
      <View style={styles.textsContainer}>
        {['Text1', 'Text2', 'Text3', 'Text4'].map((label, i) => (
          <ColorText key={i} label={label} color={textColors[i]} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#ccc',
    paddingVertical: 1,
    paddingBottom: 70,
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'yellow',
    borderWidth: 5,
    padding: 10,
    margin: 25,
    width: 130,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textsContainer: {
    backgroundColor: 'pink',
    alignItems: 'center',
    paddingVertical: 30,
  },
  text: {
    borderWidth: 4,
    borderColor: '#aaa',
    padding: 4,
    marginVertical: 10,
    fontSize: 18,
    width: 100,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
