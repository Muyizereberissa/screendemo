import { StyleSheet, Text, View ,Button, TextInput, Image, FlatList, ScrollView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StatusBar } from 'expo-status-bar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Searchcomp from '../components/Searchcomp'
import { useEffect, useState } from 'react'
import Inputcomp from '../components/Inputcomp'

const Actionscreen = () => {


  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setSearched(response.results))
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setMovies(response.results))
    .catch(err => console.error(err));

  const [searched, setSearched] = useState([])
  const [movies, setMovies] = useState([])
  return (
    
    <View style={styles.container}>
      
      <ScrollView>
        <View>
            <Text style={{marginLeft: 20, color: 'white', fontSize: 25}}>Action</Text>
            <View style={{padding: 20}}>
                <Image source={require('../assets/jumanji.jpeg') } style={{width: 390, height: 250, }}/>
                <Text style={{marginLeft: 18, color: 'white', fontSize: 20}}>Jumanji: The Next Level</Text>
                <Text style={{marginLeft: 18,marginRight: 20, color: '#7D7E82', fontSize: 15}}>When the world is under attack from creatures who hunt their human prey by sound, a teenager and her friends must work together to survive.</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '40%', marginLeft: 20}}>
                    <Button title="Play" color="orange" onPress={() => alert('Watch Now') } />
                    <AntDesign name={'caretright'} size={20} color="white" style={{position: 'absolute', left: 40, marginTop: 5}}/>
                </View>
                <View style={{width: '40%', marginLeft: 20}}>
                    <Button title="My list" color="#26282C" onPress={() => alert('My list') } />
                    <AntDesign name={'plus'} size={18} color="white" style={{position: 'absolute', left: 40, marginTop: 5}}/>
                </View>    
            </View>
            
            <View >
                <Text style={{marginLeft: 20, color: 'white', fontSize: 20,}}> U.S Action Movies</Text>

            <View>
            <FlatList
              horizontal={true}
              style={styles.list}
              data={searched}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item }) => (
                <Searchcomp img={item.poster_path}/>
              )}
          />
          </View>
          </View>
          <View>
            <Text style={{marginLeft: 20, color: 'white', fontSize: 20,}}> Muvi Originaks Action</Text>
            <View>

            <FlatList
              horizontal={true}
              style={styles.list}
              data={movies}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item }) => (
                <Searchcomp img={item.poster_path}/>
              )}
          />
      
            </View>
          </View>
        </View> 
       
        </ScrollView>
    </View>
  )
}

export default Actionscreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26282C',
    width: '100%',
    height: '100%',
  }
})