import { StyleSheet, Text, View } from "react-native";
import Earthquake from "./Earthquake";

export default function Earthquakes({ datas }) {
  return (
    <View>
      <View style={styles.subHeaderCard}>
        <Text style={styles.subHeader}>Last Earthquakes</Text>
      </View>
      <View>
        {datas?.map((data) => (
          <Earthquake key={data.eventID} data={data} />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  subHeader: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  subHeaderCard: {
    backgroundColor: "#1f2937",
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
});
