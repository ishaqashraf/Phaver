import React from 'react';
import {View, StyleSheet} from 'react-native';
import GradientButton from '../components/GradientButton';
import Header from '../components/Header';

interface ButtonProps {
  title: string;
  colors: string[];
}

const BUTTONS: ButtonProps[] = [
  {title: 'Button 1', colors: ['#59c2ce', '#67a6d4', '#69a1d6', '#788bdc']},
  {title: 'Button 2', colors: ['#6ddbbb', '#5fccd1', '#6ddbbb', '#5fccd1']},
];

const HomeScreen: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.contentContainer}>
        {BUTTONS.map((item: ButtonProps) => (
          <GradientButton title={item.title} colors={item.colors} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default HomeScreen;
