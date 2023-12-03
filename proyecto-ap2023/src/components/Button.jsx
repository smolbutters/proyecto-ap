import React from "react"
const TaskItem = () => {
    const [mostrar, setMostrar] = React.useState(false);
    const handleClick = () => {
        setMostrar(!mostrar);
    
    };
    return (
        <div>
            <h1>Título</h1>
            <h2>Hola</h2>
            <button type="button" onClick={handleClick}>Clickeame holo
            </button>
            {
            mostrar && (
                <div>
                    <ol>
                        <label for="cheese">Do you like cheese?</label>
                        <input type="miInput" name="cheese" id="cheese" />
                    </ol>
                    <ol>Marca:</ol> 
                    <ol>Precio:</ol>
                    </div>
            )
            }
        </div>
    );
};

export default TaskItem