import React, { useState } from 'react';

const PostItem =  (data) => {

    console.log(data);
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>
                        {data.post.id}. {data.post.title}
                    </strong>
                    <div>
                        {data.post.body}
                    </div>
                
                
                </div>

                <div className="post__btns">
                    <button className="post__btn">Удалить</button>
                </div>

                
                
            </div>

        </div>
    );
}

export default PostItem;

// Language: javascript