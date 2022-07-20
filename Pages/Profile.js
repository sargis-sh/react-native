import Post from '../Components/Post/Post';

const profile = {
    id: 1,
    username: "myUser",
    following: [2, 5, 8, 33, 58, 72, 73, 91]
}

const Profile = () => {
    var rows = [];
    for (let index = 0; index < 100; index++) {
        if(profile.id==index+1){
        rows.push(<Post num={index} key={index}/>)}
    }
    return(
        <>
            <h1>Profile</h1>
            <h2>{profile.username}</h2>
            {rows}
        </>
    );
};
  
export default Profile;