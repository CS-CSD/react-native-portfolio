import { View, FlatList, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

const projects = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A React-based personal portfolio website.",
    image: require("./assets/portfolio.png"), // Make sure the image exists
  },
  {
    id: "2",
    title: "Lost and Found System",
    description: "A system for tracking lost and found items at school.",
    image: require("./assets/lostfound.png"),
  },
  {
    id: "3",
    title: "Penny-Wise",
    description: "An expense tracking app to manage personal finances.",
    image: require("./assets/pennywise.png"),
  },
];

export default function App(){
  return(
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.contain}>
        <Image source={require("./assets/picture_ko.jpg")} style={styles.picture}/>
      <Text style={styles.name}>Carlo Dela Roca</Text>
      <Text style={styles.bio}>3rd year BSCS</Text>
      <Text style={styles.bio}>Dereshishishishishi</Text>
      <Text style={styles.bio}>👍👍</Text>
      </View>
      <View style={styles.contain}>
      <Text style={styles.name}>Skills:</Text>
      <Text style={styles.bio}>C++</Text>
      <Text style={styles.bio}>SQL</Text>
      <Text style={styles.bio}>React</Text>
      </View>
      <View style={styles.contain}>
      <Text style={styles.name}>Contact Info:</Text>
      <Text style={styles.bio}>✉ carlo_silvino_delaroca@dlsl.edu.ph ✉</Text>
      <Text style={styles.bio}>https://github.com/CS-CSD</Text>
      </View>
      <FlatList
  data={projects}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.card}>
      <Text style={styles.projectTitle}>{item.title}</Text>
      <Text style={styles.bio}>{item.description}</Text>
    </View>
  )}
  nestedScrollEnabled={true} // Enables scrolling inside ScrollView
/>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
projectTitle: { fontSize: 18, fontWeight: "bold" },
card: {
  backgroundColor: "white",
  padding: 15,
  margin: 10,
  borderRadius: 10,
  elevation: 3,
},
name:{
  fontSize: 20,
  fontWeight: "bold",
},
bio:{
  fontSize:16,
  textAlign: "center",
},
contain: {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  borderRadius: 15,
  shadowColor: "#000",
  shadowRadius: 0,
  elevation: 70,
  width: "80%",
  marginBottom: 20,
  padding:20,
},
scrollContainer:{
  flexGrow:1,
  alignItems: "center",
  justifyContent: "center",
},
picture:{
width: 100,
height: 100,
borderRadius: 50,
marginBottom: 10,
}
});