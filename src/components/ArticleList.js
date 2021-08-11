import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
    return (
        <main>
            
            {posts.map(postArt => 
                <Article 
                key={postArt.id}
                title={postArt.title}
                date={postArt.date}
                preview={postArt.preview}
                minutes={postArt.minutes}
                />
                )}
          
        </main>
    )
}

export default ArticleList;