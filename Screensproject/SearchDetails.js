import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import MovieDetails from './MovieDetails';

const Stack = createStackNavigator();

const SearchDetails= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} /> {/* Add this line */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SearchDetails;
