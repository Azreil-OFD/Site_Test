import React, { useState } from 'react';

const PostItem =  () => {


    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>
                        1. JavaScript
                    </strong>
                    <div>
                        JavaScript - Язык программирования
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