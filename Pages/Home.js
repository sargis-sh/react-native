import Post from '../Components/Post/Post';
import { Text, View, ScrollView } from 'react-native';
import './Home.css';
const Home = () => {
//   var count = prompt("Enter the post count!")
//   parseFloat(count);
  var rows = [];
  console.log(rows)
  for (let index = 0; index < 10; index++) {
    rows.push(<Post num={index} key={index}/>)
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView>
            <Text>Home!</Text>
            <h1>Home</h1>
            <div className='Home'>{rows}</div>
      </ScrollView>
    </View>
  );
  };
  
export default Home;