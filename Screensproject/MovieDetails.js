import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Searchcomp from '../components/Searchcomp'
import YoutubePlayer from "react-native-youtube-iframe";

const image = { uri: 'https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg' }

const Action = ({route}) => {

  const [searched, setSearched] = useState([]);
  const [videoPlay,setVideoPlay] = useState('')

  const rout = route.params
  console.log(route)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI',
    }
  };

  const fetchData = async () => {

    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
      const data = await response.json();
      setSearched(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    Handleplay();
  }, []);

  const Handleplay =()=>{
    fetch(`https://api.themoviedb.org/3/movie/${rout.id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then((response) => {
    setVideoPlay(response.results[0].key)
  })
  .catch(err => console.error(err));
  }



  return (
    <View style={{ backgroundColor: '#26282C', width: '100%', height: '100%', position: 'relative' }}>
      <StatusBar style="auto" />
      {/* <Image source={{uri:https://image.tmdb.org/t/p/w500${rout.poster_path}}} style={{ width: '90%', height: '30%', position: 'absolute', marginTop: 40, alignSelf: 'center' }} /> */}
      <YoutubePlayer
        height={300}
        // play={playing}
        videoId={videoPlay}
        // onChangeState={onStateChange}
      />
      <View style={{ position: 'absolute', top: 280, padding: 20 }}>
        <Text style={{ color: 'white', fontSize: 20 }}>{rout.title}</Text>
        <Text style={{ color: 'grey', marginTop: 10, fontSize: 15 }}>
         {rout.overview}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity style={{ width: '47%', flexDirection: 'row', padding: 7, borderRadius: 5, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#FFD22F' }}>
            <Feather name="play" size={24} color="white" />
            <Text style={{ color: 'white', marginLeft: 5 }}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '47%', flexDirection: 'row', padding: 7, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderColor: 'grey', borderWidth: 1 }}>
            <AntDesign name="plus" size={15} color="yellow" />
            <Text style={{ color: 'white', marginLeft: 5 }}>My List</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'white', marginTop: 20, fontSize: 20 }}>U.S Action Movies</Text>
        <FlatList
          horizontal={true}
          data={searched}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => <Searchcomp img={item.poster_path} />}
        />
         <Text style={{ color: 'white', marginTop: 10, fontSize: 20 }}>Muvi Originals Action</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    width: 10,
  },
});

export default Action;