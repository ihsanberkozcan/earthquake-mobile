import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Earthquakes from "./components/Earthquakes";
import { useEffect, useState } from "react";
import moment from "moment-timezone";

export default function App() {
  const [datas, setDatas] = useState();
  useEffect(() => {
    fetchEarthquake();
  }, []);

  const fetchEarthquake = async () => {
    console.log("I am here");
    const start = moment()
      .tz("Europe/Istanbul")
      .subtract(1, "days")
      .format("YYYY-MM-DD HH:mm:ss");
    const end = moment().tz("Europe/Istanbul").format("YYYY-MM-DD HH:mm:ss");

    const url = new URL("https://deprem.afad.gov.tr/apiv2/event/filter");

    url.searchParams.append("start", start);
    url.searchParams.append("end", end);
    url.searchParams.append("orderby", "timedesc");
    url.searchParams.append("minmag", "2");

    const response = await fetch(url.toString(), { cache: "no-cache" });
    const data = await response.json();
    setDatas(data);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Text style={styles.header}>Earthquake</Text>
        <Button
          onPress={fetchEarthquake}
          title="↻"
          color="#374151"
          accessibilityLabel="Refresh"
        />
      </View>
      <ScrollView>
        <Earthquakes datas={datas} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
  },
  header: {
    color: "white",
    fontSize: 30,
  },
  headerBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
});
