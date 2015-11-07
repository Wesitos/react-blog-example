import React from "react";
import ReactDOM from "react-dom";

import {Blog} from "../component/Blog.jsx";

const posts = [
    {
        titulo: "Titulo bonito",
        texto: "Hola mundillo",
    },
    {
        titulo: "Titulo boni",
        texto: "Hola mundoooo",
    }
]

ReactDOM.render(<Blog titulo="Bloggy" posts={ posts } />,
                document.getElementById("app-container"));
