import Post from '../Components/Post/Post';

const profile = {
    id: 1,
    username: "myUser",
    following: [2, 5, 8, 33, 58, 72, 73, 91]
}

const Following = () => {
    var rows = [];
    for (let index = 0; index < 100; index++) {
        if(profile.following.includes(index+1)){
        rows.push(<Post num={index} key={index}/>)}
    }
    return(
        <>
        <h1>Following</h1>
        {rows}
        </>
    )
  };
  
export default Following;