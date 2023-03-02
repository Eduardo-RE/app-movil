import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReviewCard = ({ review }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<Text>{" \u2605 "}</Text>);
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.iamgeContainer}
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
          alt="doctor"
        />
        <View style={styles.profileText}>
          <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 18 }}>
            {review.nameUser}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            {review.fecha}
          </Text>
          <Text>{renderStars(review?.rating)}</Text>
        </View>
      </View>
      <View style={styles.reviewTextContainer}>
        <Text style={styles.reviewText}>{review.texto}</Text>
        <TouchableOpacity style={styles.showMoreButton}>
          <Text style={{ textDecorationLine: "underline", fontSize: 17 }}>
            Mostra más
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    width: 360,
    marginRight: 8,
  },
  iamgeContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileText: {
    marginLeft: 10,
  },
  reviewTextContainer: {
    marginTop: 10,
    padding: 10,
  },
  reviewText: {
    fontSize: 18,
  },
  showMoreButton: {
    marginTop: 10,
  },
});
