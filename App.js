import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Expo from 'expo';

const kanaArr = [
  'あ', 'い', 'う', 'え', 'お',
  'か', 'き', 'く', 'け', 'こ',
  'さ', 'し', 'す', 'せ', 'そ',
  'た', 'ち', 'つ', 'て', 'と',
  'な', 'に', 'ぬ', 'ね', 'の',
  'は', 'ひ', 'ふ', 'へ', 'ほ',
  'ま', 'み', 'む', 'め', 'も',
  'ら', 'り', 'る', 'れ', 'ろ',
  'や', 'ゆ', 'よ',
  'わ', 'お',
];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Start',
    };
  }

  onPress = () => {
    let index = 0;
    let text = this.state.text;
    if (text != 'Start') {
      index = kanaArr.indexOf(text);
      if (index == kanaArr.length - 1) {
        index = 0;
      } else {
        index++;
      }
    }
    text = kanaArr[index];
    this.setState({ text });
    Expo.Speech.speak(text.toString(), { language: 'ja' });
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Text style={styles.number} onPress={this.onPress}>{this.state.text}</Text>
      </TouchableOpacity >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 130,
    fontWeight: 'bold',
  },
});
