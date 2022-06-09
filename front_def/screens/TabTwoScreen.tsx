import axios from 'axios';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useEffect, useState } from 'react';

export default function TabTwoScreen() {
  const [isLoading, setLoading] = useState(true);
  const [results, setResults] = useState();
  const [pokemon, setPokemon] = useState();
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/forms")
    .then(response => {
      setResults(response.data)
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <View>
      {results.map(a => {
        return <div key={a}>
        <Card>
          <Text key={a}>{a.age}</Text>
        </Card>
        </div>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
