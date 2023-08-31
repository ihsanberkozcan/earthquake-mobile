import { relativeDate } from "../utils/relativeDate";
import { localDate } from "../utils/localDate";
import { StyleSheet, Text, View } from "react-native";

/* ${
  parseFloat(data.magnitude) >= 5.0
    ? "bg-red-600"
    : parseFloat(data.magnitude) >= 4.0
    ? "bg-orange-600"
    : parseFloat(data.magnitude) >= 3.0
    ? "bg-yellow-600"
    : "bg-gray-800"
}
 */

export default function Earthquake({ data }) {
  return (
    <View
      style={
        parseFloat(data.magnitude) >= 5.0
          ? styles.earthquakeCardRed
          : parseFloat(data.magnitude) >= 4.0
          ? styles.earthquakeCardOrange
          : parseFloat(data.magnitude) >= 3.0
          ? styles.earthquakeCardYellow
          : styles.earthquakeCard
      }
    >
      <View style={styles.earthquakeInfo}>
        <Text
          style={
            parseFloat(data.magnitude) >= 5.0
              ? styles.earthquakeMagnitudeRed
              : parseFloat(data.magnitude) >= 4.0
              ? styles.earthquakeMagnitudeOrange
              : parseFloat(data.magnitude) >= 3.0
              ? styles.earthquakeMagnitudeYellow
              : styles.earthquakeMagnitude
          }
        >
          {data.magnitude}
        </Text>
        <View>
          <Text style={styles.text}>{data.location}</Text>
          <Text style={styles.text}>Depth: {data.depth} KM </Text>
          <Text style={styles.text}>{localDate(data.date)}</Text>
          <Text style={styles.text}>{relativeDate(data.date)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  earthquakeCardRed: {
    backgroundColor: "#dc2626",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  earthquakeCardOrange: {
    backgroundColor: "#ea580c",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  earthquakeCardYellow: {
    backgroundColor: "#ca8a04",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  earthquakeCard: {
    backgroundColor: "#1f2937",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  earthquakeMagnitudeRed: {
    backgroundColor: "#ef4444",
    color: "white",
    padding: 20,
    marginRight: 10,
    marginRight: 10,
    borderRadius: 5,
    width: "20%",
    textAlign:"center"
  },
  earthquakeMagnitudeOrange: {
    backgroundColor: "#f97316",
    color: "white",
    padding: 20,
    marginRight: 10,
    borderRadius: 5,
    width: "20%",
    textAlign:"center"

  },
  earthquakeMagnitudeYellow: {
    backgroundColor: "#eab308",
    color: "white",
    padding: 20,
    marginRight: 10,
    borderRadius: 5,
    width: "20%",
    textAlign:"center"
  },
  earthquakeMagnitude: {
    backgroundColor: "#374151",
    color: "white",
    padding: 20,
    marginRight: 10,
    borderRadius: 5,
    width: "20%",
    textAlign:"center",
  },
  text: {
    color: "white",
  },
  earthquakeInfo: {
    display: "flex",
    flexDirection: "row",
  },
});
