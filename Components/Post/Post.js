import React, { useState, useEffect } from 'react';
import './Post.css';
import './Helper.js';
import json from '../../Helpers/Helper.js';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Post(num) {
    const [isLoading, SetIsLoading] = useState(true);
    const [postTitle, setPostTitle] = useState();
    const [postAuthor, setPostAuthor] = useState();
    const [postBody, setPostBody] = useState();
    useEffect(() => {
        try{
        const getData = async () => {
            let postHREF = await json.get('/posts');
            let postResult = postHREF.data;
            setPostTitle(postResult[num.num].id);
            setPostAuthor(postResult[num.num].title);
            setPostBody(postResult[num.num].body);
        }
        getData();
        }
        catch(error){
            return <h1>{error}</h1>;
        }
        finally{
            SetIsLoading(false);
        }
    }, []);
    if(isLoading){
        return(
            <Stack spacing={1}>
                <Skeleton variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={118} />
            </Stack>
        );
    }
    else{
    return (  
    <div className="Post">
        <h1>{postTitle}</h1>
        <h2>{postAuthor}</h2>
        <p>{postBody}</p>
    </div>
    );
    }
    
}

export default Post;