import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import FormInput from "./UI/input/FormInput";

const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
    });

        
    function addNewPost(e) {
        e.preventDefault();

        const newPost = {...post, id: Date.now()}

        create(newPost)
        setPost({
            title: '',
            body: '',
        })
    }

    return (
        <form>
            {/* Управляемый компонент */}
            <FormInput 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})} 
                type="text" 
                placeholder="Название поста"/>
            {/* Неконтролируемый/Неуправляемый компонент */}                    
            <FormInput 
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})} 
                type="text" 
                placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
}

export default PostForm;

