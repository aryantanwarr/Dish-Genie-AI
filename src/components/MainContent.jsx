import React from "react"
import Claude_Recipe from "./ClaudeRecipe.jsx"
import IngredientListSection from "./IngredientListSection.jsx"
import { getRecipeFromGemini} from "./ai.js"
function MainContent(){
    const [ingredients,setIngredients]=React.useState([])
    const [recipe,setRecipe]=React.useState("")

    const recipeSection = React.useRef(null);
    // console.log(recipeSection)

    async function getRecipe(){
        // setRecipeShown(prevShown=>!prevShown)
        try {
            const recipeMarkdown = await getRecipeFromGemini(ingredients);
            setRecipe(recipeMarkdown);
            // console.log(recipeMarkdown)
        } catch (error) {
            console.error("Error fetching recipe:", error);
            alert("Failed to fetch the recipe. Please try again.");
        }
    }
// React smooth scroll to the content
    React.useEffect(()=>{
        if(recipe !=="" && recipeSection.current !==null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[recipe])

    // const [isShown,setIsShown]=React.useState(false) 

    // function toggle(){
    //     setIsShown(prevSwitch=>!prevSwitch)
    //     console.log(isShown)

    // }

    
    // const [messages,setMessages]= React.useState(["a","b","c"])
    // let text
    // function shownMessage(){
        //     return(
            
        //     (messages.length===0 ? 
        //         "You're all caught up": 
        //         messages.length===1?
        //         "You have 1 unread Message":
        //         `You have ${messages.length} messages`)
        //     )
        // <div>
        //     <h1> {shownMessage()}</h1>
        // </div>
        // {/* <button onClick={toggle} className="toggle"> On</button> */}
        // }
    function addIngredient(event){
        event.preventDefault()
        //this form data is the text recived from the input box
        // const formData=new FormData(event.currentTarget)
        //This is inserting and dispalying the data on the page when the form is submitted usign thesetIngredients
        // 
        const formData= new FormData(event.currentTarget)
        const newIngredient= formData.get("ingredient")

        if (newIngredient.trim().length > 0) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
            event.currentTarget.reset()
        } else {
            alert("Ingredient cannot be null");
        }
    }

    function removeIngredient(ingredientToRemove) {
        setIngredients(prevIngredients =>
            prevIngredients.filter(ingredient => ingredient !== ingredientToRemove)
        );
        console.log(ingredients)
    }
    // Hooks are functions that let you use state and other React features in functional components.
    // Examples of hooks used in this component:
    // 1. useState: Manages state for ingredients and recipe.
    // 2. useRef: Creates a reference to the recipe section for smooth scrolling.
    // 3. useEffect: Executes side effects, like scrolling to the recipe section when it changes.
    return (
        <main>
            <h1 className="instruction">Welcome to Genie Chef!</h1>

            <p className="description">
            <h3>Let's cook something amazing with what you have 🍳</h3>
                Enter the ingredients you have at home, and we'll help you create a delicious recipe. 
                {/* Discover new dishes and make the most of what you already have in your kitchen! */}
            </p>
            <form onSubmit={addIngredient} className="dishForm">
                <input 
                    type="text" 
                    placeholder="e.g. Avocado"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button className="addButton">+ Add Ingredients</button>
            </form>

            {ingredients.length > 0 && 
            <IngredientListSection 
                ingredients={ingredients} 
                getRecipe={getRecipe}
                ref={recipeSection}
                removeIngredient={removeIngredient}
            />}
            {ingredients.length > 3 && recipe && <Claude_Recipe recipe={recipe}/>}
        </main>
    )
}
export default MainContent