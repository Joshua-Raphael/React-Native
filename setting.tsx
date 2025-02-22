import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

const Setting = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {}
      <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgp53HKq4fyclYtZdD-0wHVV2YC2rZ0tmGg&s' }}
                style={styles.logo}
            />
      <View style={styles.div}>
        

            <Text style={styles.title}></Text>
            <Text style={styles.description}>
                Welcome to 2C CHUNSY SETTINGS
            </Text>
            
            <Text style={styles.sectionTitle}>Features:</Text>
            <Text style={styles.description}>
                - Language.
                {'\n'}- Time Zone.
                {'\n'}- Language.
            </Text>

            <Text style={styles.sectionTitle}>Contact Us:</Text>
            <Text style={styles.description}>
                If you have any question, feel free to reach out to us at:
                {'\n'}Email: chunsy@reactnative.com
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
    alignItems: "center",
  },
  logo: {
    width: 150,
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

export default Setting;

