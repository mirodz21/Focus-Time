import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/roundedButton';
import {spacing} from '../utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={setSubject}
          label="What You Want to Focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size= {spacing.xl}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  textInputStyle: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
