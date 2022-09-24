import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css';

function App() {

    const [selectedSort, setSelectedSort] = useState(
        ''
    );

    const [posts, setPosts] = useState([
        {id: 1, title: 'А', body: '3'},
        {id: 2, title: 'В', body: '40'},
        {id: 3, title: 'Г', body: '1'}
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sortType) => {
        setSelectedSort(sortType)
        setPosts([...posts].sort(
            (a, b) => a[sortType].localeCompare(b[sortType])
        ))
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{margin: '15px 0'}} />
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts} 
                    defaultValue="Сортировка"
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                />
            </div>
            {posts.length
                ?   
                <PostList remove={removePost} posts={posts} title="Посты про JS"/>
                :   
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены
                </h1>
            }
        </div>
    );
}
    
export default App;