import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get("window").height;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: "14px",
  },
  seccondaryText: {
    fontSize: "12px",
    color: "#666",
  },
  inputContainer: {
    height: 40,
    fontSize: 16,
  },
  heroBannerContainer: {
    height: height * 0.1,
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "left",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
