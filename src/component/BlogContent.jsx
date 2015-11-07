import React from "react";

import {Post} from "./Post.jsx";

const BlogContent = React.createClass({
    render: function(){
        const posts = this.props.posts;
        const postComponents = posts.map(function(postObject){
            return (<Post titulo={postObject.titulo} 
                          texto={postObject.texto}/>);
        });
        return(
            <main>
                {postComponents}
            </main>
        );
    }
});

export {BlogContent};
