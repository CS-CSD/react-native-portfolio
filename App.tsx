import { useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    { id: '1', title: 'Ingat Kampus', description: 'A Lost and Found System for DLSL' },
    { id: '2', title: 'Penny-Wise', description: 'A Finance Tracking App' },
    { id: '3', title: '', description: 'Description of project C' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: darkMode ? '#222' : '#f5f5f5' }}>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 50 }} // Adds space at the top
        ListHeaderComponent={
          <>
            {/* <TouchableOpacity style={styles.button} onPress={toggleDarkMode}> */}
              {/* <Text style={styles.buttonText}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Text> */}
            {/* </TouchableOpacity> */}
            <View style={[styles.contain, darkMode && styles.darkContain]}>
            <TouchableOpacity onPress={toggleDarkMode}>
              {/* <Text style={styles.buttonText}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Text> */}
              <Image source={require("./assets/picture_ko.jpg")} style={styles.picture} />
            </TouchableOpacity>
              {/* <Image source={require("./assets/picture_ko.jpg")} style={styles.picture} /> */}
              <Text style={[styles.name, darkMode && styles.darkText]}>Carlo Dela Roca</Text>
              <Text style={[styles.bio, darkMode && styles.darkText]}>3rd year BSCS</Text>
              <Text style={[styles.bio, darkMode && styles.darkText]}>Dereshishishishishi</Text>
              <Text style={[styles.bio, darkMode && styles.darkText]}> press profile to change theme </Text>
            </View>
            <View style={[styles.contain, darkMode && styles.darkContain]}>
              <Text style={[styles.name, darkMode && styles.darkText]}>Skills:</Text>
              <Text style={[styles.bio, darkMode && styles.darkText]}>C++</Text>
              <Text style={[styles.bio, darkMode && styles.darkText]}>SQL</Text>
              <Text style={[styles.bio, darkMode && styles.darkText]}>React</Text>
            </View>
            <View style={[styles.contain, darkMode && styles.darkContain]}>
              <Text style={[styles.name, darkMode && styles.darkText]}>Contact Info:</Text>
              <Text style={[styles.bio, darkMode && styles.darkText]}>✉ carlo_silvino_delaroca@dlsl.edu.ph ✉</Text>
              <Text style={[styles.bio, darkMode && styles.darkText]}>https://github.com/CS-CSD</Text>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View style={[styles.card, darkMode && styles.darkCard]}>
            <Text style={[styles.projectTitle, darkMode && styles.darkText]}>{item.title}</Text>
            <Text style={[styles.bio, darkMode && styles.darkText]}>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#333",
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  darkCard: {
    backgroundColor: "#444",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    marginBottom: 5, 
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
  contain: {
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
    maxWidth: 350,
    width: "90%",
    marginBottom: 20,
    padding: 20,
  },
  darkContain: {
    backgroundColor: "#333",
  },
  darkText: {
    color: "#ddd",
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ddd",
  },
});
