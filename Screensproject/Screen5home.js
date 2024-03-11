import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput } from "react-native-paper";
import { Ionicons } from 'react-native-vector-icons';
import Inputcomp from '../components/Inputcomp'
import Trendcomp from '../components/Trendcomp'
import Imagecomp from '../components/Imagecomp';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Screen5home = ({ navigation, route }) => {
  const muvi = route.params
  console.log(route)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
    }
  };

  const [results, setResult] = useState([]);
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    let data = await AsyncStorage.getItem('user_data')
    console.log(data)
  }
 
  useEffect(() => {
    getData();

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setResult(response.results))
      .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setMovie(response.results))
      .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));




  }, []);

  onPress = () => {
    navigation.navigate('Search')
  }

  return (
    <View style={styles.container}>
      <ScrollView>

        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', marginTop: 60 }}>
            <Image source={require('../assets/logo.png')} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 70, marginLeft: 180 }}>
            <Ionicons name="bookmark-outline" size={24} color="white" />
            <TouchableOpacity >
              <Ionicons name="search-outline" size={24} color="white" />
            </TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </View>
        </View>

        {/* Navigation */}
        <View>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row', gap: 40 }}>
              <View>
                <Text style={{ color: '#f1b91c' }}>Featured</Text>
                <View style={{ width: 20, height: 2, backgroundColor: '#f1b91c' }}></View>
              </View>
              <View style={{ flexDirection: 'row', gap: 40 }}>
                <Text style={{ color: 'white' }}>Series</Text>
                <Text style={{ color: 'white' }}>Films</Text>
                <Text style={{ color: 'white' }}>origin</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Trending Movies */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', marginTop: 20, gap: 20, fontSize: 20 }}>
            <Trendcomp trend="Popular Today" />
            <Trendcomp trend="Marvel" />
            <Trendcomp trend="Fans Choice" />
            <Trendcomp trend="Star Wars" />
            <Trendcomp trend="Star Wars" />
            <Trendcomp trend="Star Wars" />
          </View>

        </ScrollView>
        {/* New Releases */}
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Text style={{ color: 'white', fontSize: 25 }}>New Release</Text>
            <Text style={{ color: '#5f6064' }}>View more</Text>
          </View>

          <FlatList
            horizontal={true}
            style={styles.list}
            data={results}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Actionscreen', item)}>
                <Imagecomp image={item.poster_path} text='0.8' />
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Made for You */}
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Text style={{ color: 'white', fontSize: 25 }}>Made for you</Text>
            <Text style={{ color: '#5f6064' }}>View more</Text>
          </View>

          <FlatList
            horizontal={true}
            style={styles.list}
            data={movie}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <Imagecomp image={item.poster_path} text='0.8' />
            )}
          />
        </View>

        {/* Popular on Muvi */}
        <View>
          <Text style={{ color: 'white', marginTop: 20, fontSize: 25 }}>Popular on Muvi</Text>
          <View style={{ height: 10 }}></View>
          <FlatList
            style={styles.list}
            data={movies}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 20 }}>
                <Inputcomp image={item.poster_path} text='0.8' />
              </View>
            )}
          />
        </View>
      </ScrollView>

    </View>
  )
}

export default Screen5home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26282C',
    width: '100%',
    height: '100%',
  },
  list: {
    marginTop: 20,
  },
  separator: {
    height: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#26282C',
  }
});
