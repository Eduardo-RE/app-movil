import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Center, FlatList } from "native-base";
import HeroBanner from "../../components/HeroBanner";
import doctors from "../../data/doctors";
import DoctorCard from "../../components/DoctorCard";
import { database } from "../../utils/firebase";
import { ref, set, child, get } from "firebase/database";

const HomeScreen = () => {
  const [sucursales, setSucursales] = useState([]);
  const dbRef = ref(database);

  useEffect(() => {
    get(child(dbRef, `establecimientos`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setSucursales(
            Object.keys(snapshot.val()).map((key) => snapshot.val()[key])
          );
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box bgColor={"white"}>
      <FlatList
        ListHeaderComponent={() => <HeroBanner />}
        data={sucursales}
        renderItem={({ item }) => (
          <Center bgColor={"white"}>
            <DoctorCard doctor={item} />
          </Center>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      />
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
