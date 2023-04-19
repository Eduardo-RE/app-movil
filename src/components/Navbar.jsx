import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Divider, HStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Navbar = ({ props }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.container }}>
      <HStack
        style={{
          marginTop: insets.top,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
            marginRight: 0,
          }}
        >
          <Ionicons name="ios-chevron-back-outline" size={18} color="black" />
        </TouchableOpacity>
        <Text style={styles.titleText}>{props.options.title}</Text>
      </HStack>
      <Divider style={{ marginTop: 10 }} />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 8,
  },
  titleText: {
    fontWeight: "600",
    fontSize: 16,
  },
});
