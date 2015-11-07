import React from "react";

const Post = React.createClass({
    render: function(){
        const texto = this.props.texto;
        const titulo = this.props.titulo;
        return(
            <article>
                <header>{titulo}</header>
                <p>{texto}</p>
            </article>
        );
    }
});

export {Post};
