import Post from '../Components/Post/Post';


const Home = () => {
//   var count = prompt("Enter the post count!")
//   parseFloat(count);
  var rows = [];
  console.log(rows)
  for (let index = 0; index < 100; index++) {
    rows.push(<Post num={index} key={index}/>)
  }
  return (
    <div className="Home">
        <h1>Home</h1>
      {rows}
    </div>
  );
  };
  
export default Home;