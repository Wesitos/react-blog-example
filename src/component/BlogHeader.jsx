import React from "react";

const BlogHeader = React.createClass({
    render: function(){
        const titulo = this.props.titulo;
        return(
            <header>
                <h1>{titulo}</h1>
            </header>
        );
    }
});

export {BlogHeader};
