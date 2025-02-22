import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {}
      <Image
                source={{ uri: 'https://st2.depositphotos.com/1339687/6598/i/450/depositphotos_65986857-stock-photo-metal-about-us-text.jpg' }}
                style={styles.logo}
            />
      <View style={styles.div}>
        

            <Text style={styles.title}></Text>
            <Text style={styles.description}>
                Welcome to 2C CHUNSY
            </Text>
            
            <Text style={styles.sectionTitle}>Features:</Text>
            <Text style={styles.description}>
                - Security Settings.
                {'\n'}- Data Management.
                {'\n'}- Help & Support.
            </Text>

            <Text style={styles.sectionTitle}>Contact Us:</Text>
            <Text style={styles.description}>
                If you have any question, feel free to reach out to us at:
                {'\n'}Email: joshua.gayoba@reactnative.com
                {'\n'}Phone: +1234567890
            </Text>

      </View>
      
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: "90%",
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 5,
    color: '#333',
  },

  div: {
    paddingLeft: 50,
  }
});

export default About;
