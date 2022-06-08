import React , {useState} from "react";
import PostItem from '../components/PostItem';


const PostList = ({posts , title}) => {
    

    return (
        <div class="post__list" >
            <h1 style={{textAling: 'center'}} >{title}</h1>
            {posts.map( posts => 
					<PostItem post={posts} key={posts.id}/>
			)}
        </div>
        
    );
}
export default PostList;