import React from "react";

const PostItem = (props) => {
    console.log(props)
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong className="post__title" > {props.post.id}.{props.post.title}</strong>
                    <div className="post__body">
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
}
export default PostItem;