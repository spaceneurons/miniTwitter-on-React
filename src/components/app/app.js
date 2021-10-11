import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

const App = () => {
    // приложение APP на верхнем уровне получает какие -то данные передает их в
    // компонент PostList компонент PostList формирует из этого посты на основании
    // PostListItem
    const data = [
        {
            label: 'Going to learn react',
            important: true,
            id:'asdasd'
        }, {
            label: 'Going to learn',
            important: false,
            id:'jhgghj'
        }, {
            label: 'Going to',
            important: false,
            id:'fffffg'
        }
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="seach-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;