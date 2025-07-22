export default function IngredientListSection(props){
    const ingredientsItemList= props.ingredients.map(ingred=>(
        <li key={ingred}>{ingred} <button onClick={()=> props.removeIngredient(ingred)} className="RemoveButton">Remove</button></li>
    ))

    return (
        <section className="ingredSection">
            <h1>Ingredients on hand:</h1>
            <ul className="ingredients-list" aria-live="polite">{ingredientsItemList} </ul>
            {props.ingredients.length > 3 && (
                <div className="get-a-recipe-container">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button 
                        onClick={props.getRecipe} 
                        className="recipe-button"
                    >Get a recipe</button>
                </div>
            )}
        </section>
    );
}
