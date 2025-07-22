import React from "react"
import ReactMarkdown from 'react-markdown'


export default function Claude_Recipe(props) {
    // const recipeSection = React.useRef();

    return (
        <section className="suggested-recipe-container" >
            <h2>DishGenie Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    );
}
