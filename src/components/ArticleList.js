import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    return (
        <main>
            {posts.map(info => <Article key={info.id} title={info.title} date={info.date} preview={info.preview}/>)}
        </main>
    )
}

export default ArticleList