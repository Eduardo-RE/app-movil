import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FormControl, Input } from "native-base";

const CustomInput = ({ label, type, placeholder, onChangeText }) => {
  return (
    <FormControl>
      <FormControl.Label
        _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
      >
        {label}
      </FormControl.Label>
      <Input
        type={type}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </FormControl>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
