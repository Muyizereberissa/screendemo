import { StyleSheet, Text, View , Image, FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'
import Searchcomp from '../components/Searchcomp'

const Listscreen = (navigation) => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
    }
  };
  
  fetch('https://api.themoviedb.org/3/account/21026331/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options)
    .then(response => response.json())
    .then(response => setTrends(response.results))
    .catch(err => console.error(err));
  useEffect(()=>{

  })

  const [trends, setTrends] = useState([])



  return (
    <View style={styles.container}>
      <View>
          <View style={{ flexDirection: 'row', marginTop: 60 }}>
            <Image source={require('../assets/logo.png')} />
          </View>
          <View style={{ flexDirection: 'row', gap: 40, marginLeft: 10, color: 'white'}}>
            <View>
              <Text  style={{ color: '#f1b91c', fontSize: 20 }}> My list</Text>
              <View style={{ width: 20, height: 2, backgroundColor: '#f1b91c', marginLeft: 10}}></View>
            </View>
            <Text  style={{ color: 'white', fontSize: 20}}> Downloaded</Text>
          </View>
          <FlatList
            vertical={true}
            style={styles.list}
            data={trends}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <Searchcomp img={item.poster_path}  text={item.original_title} year={item.release_date} type={item.media_type} />
            )}
          />
      </View>
    </View>
  )
}

export default Listscreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26282C',
    width: '100%',
    height: '100%',
    
  }
})