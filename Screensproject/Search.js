import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native'
import {Ionicons} from 'react-native-vector-icons'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Searchcomp from '../components/Searchcomp'
import MovieDetails from './MovieDetails'

const Search = () => {
  const [searched, setSearched] = useState([]);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
    }
  };
  
  const SearchMovie = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options);
      const data = await response.json();
      setSearched(data.results);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (search.length > 0) {
      SearchMovie();
    } else {
      setSearched([]);
    }
  }, [search]);

  return (
    <View style={styles.container}>
      <View>
        <View style={{height: 70}}></View>
        <Text style={{marginLeft: 20, color: 'white', fontSize: 25}}>Search</Text>
        <View style={{flexDirection: 'row', marginTop: 20, backgroundColor: '#252625', padding: 10}}>
          <TextInput style={{ marginLeft: 20 , color: 'white'}}
            placeholder="Type, title, categories, years, etc"
            onChangeText={text => setSearch(text)}/>
          <TouchableOpacity onPress={() => SearchMovie()}>
            <Ionicons name="search-outline" size={24} color="yellow" style={{marginLeft: 150}}/>
          </TouchableOpacity>
        </View>
        <View style={{height: 20}}></View>
        <View>
          <Text styles={{marginLeft: 20, fontSize: 25, color: "white"}}>Popular Search</Text>
          <FlatList
            vertical={true}
            style={styles.list}
            data={searched}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>navigation.navigate('Actionscreen',item)}>
                <Searchcomp img={item.poster_path}  year={item.release_date} type={item.media_type} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  )
}

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26282C',
    width: '100%',
    height: '100%',
  },
});
