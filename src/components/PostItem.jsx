import React, { useState } from 'react';

const PostItem =  () => {


    return (
        <div>
        <div className="post">
            <div className="post__content">
                <strong>1. Javascript</strong>
                <div>
                    Javascript - язык программирования
                </div>
            </div>
            <div className="post__btns">
                <button className= "button">УДАЛИТЬ</button>

                
            </div>
        </div>
        </div>
    );
}

export default PostItem;
