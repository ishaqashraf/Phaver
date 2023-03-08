import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: string;
  colors: string[];
}

const GradientButton: React.FC<Props> = ({title, colors}) => {
  return (
    <LinearGradient
      colors={colors}
      locations={[0.25, 0.5, 0.75, 1]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert(title)}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 75,
    borderRadius: 10,
    padding: 3,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
});

export default GradientButton;
