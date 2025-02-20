import { useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const lightBackground = require('./assets/whitemarble.jpg');  // Light mode background
  const darkBackground = require('./assets/blackmarble.jpg');  // Dark mode background

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    { id: '1', title: 'Ingat Kampus', description: 'A Lost and Found System for DLSL' },
    { id: '2', title: 'Penny-Wise', description: 'A Finance Tracking App' },
    { id: '3', title: 'This mobile app', description: 'My first attempt at a mobile app' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Background Image */}
      <ImageBackground source={darkMode ? darkBackground : lightBackground} style={styles.backgroundImage} resizeMode="cover">
        
        <FlatList
          data={projects}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingTop: 50 }} // Adds space at the top
          ListHeaderComponent={
            <>
              <View style={[styles.contain, darkMode && styles.darkContain]}>
                {/* Profile Picture as Theme Toggle Button */}
                <TouchableOpacity onPress={toggleDarkMode}>
                  <Image source={require("./assets/picture_ko.jpg")} style={styles.picture} />
                </TouchableOpacity>
                <Text style={[styles.name, darkMode && styles.darkText]}>Carlo Dela Roca</Text>
                <Text style={[styles.bio, darkMode && styles.darkText]}>3rd year BSCS</Text>
                <Text style={[styles.bio, darkMode && styles.darkText]}>Dereshishishishishi</Text>
                <Text style={[styles.bio, darkMode && styles.darkText]}>Press profile to change theme</Text>
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
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  projectTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#333",
    backgroundColor: "transparent",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 50,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  darkCard: {
    backgroundColor: "rgba(50, 50, 50, 0.8)",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    marginBottom: 5,
    backgroundColor: "transparent",
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    backgroundColor: "transparent",
  },
  contain: {
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // White with 80% opacity
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    maxWidth: 350,
    width: "90%",
    marginBottom: 20,
    padding: 20,
    elevation: 100,
  },
  darkContain: {
    backgroundColor: "rgba(50, 50, 50, 0.8)",
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
