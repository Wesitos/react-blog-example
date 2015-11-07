import React from "react";
import {BlogHeader} from "./BlogHeader.jsx";
import {BlogContent} from "./BlogContent.jsx";
import {BlogFooter} from "./BlogFooter.jsx";

const Blog = React.createClass({
    onclickHandler: function(event){

    },
    render: function(){
        const titulo = this.props.titulo;
        const posts = this.props.posts;
        return(
            <div onClick={this.onclickHandler} className="Blog">
                <BlogHeader titulo={titulo}/>
                <BlogContent posts={posts}/>
                <BlogFooter/>
            </div>
        );
    }
});

export {Blog};
