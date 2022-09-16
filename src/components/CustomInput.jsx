import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FormControl, Input } from "native-base";
import { globalStyles } from "../styles/globalStyles";

const CustomInput = ({ label, type, placeholder, onChangeText }) => {
  return (
    <FormControl>
      <FormControl.Label
        _text={{
          color: "muted.700",
          fontWeight: 600,
          ...globalStyles.text,
        }}
      >
        {label}
      </FormControl.Label>
      <Input
        type={type}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={globalStyles.inputContainer}
      />
    </FormControl>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    fontSize: 16,
  },
});
