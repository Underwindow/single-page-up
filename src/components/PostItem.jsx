import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
    return (
        <div className="Post">
            <div className="Post-PostContent">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="Post-PostButtons">
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>         
        </div>   
    );
}

export default PostItem;