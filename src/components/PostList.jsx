import React , {useState} from "react";
import PostItem from '../components/PostItem';


const PostList = ({posts}) => {
    

    return (
        <div>
            <h1 style={{textAling: 'center'}} >Список постов</h1>
            {posts.map( posts => 
					<PostItem post={posts} key={posts.id}/>
			)}
        </div>
        
    );
}
export default PostList;