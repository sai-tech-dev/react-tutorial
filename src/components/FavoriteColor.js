import { useState } from "react";

function FavoriteColor() {
    // let color = 'Blue';
    
    const [color, setColor] = useState('Blue')

    return <> <h1>My Favo Color is {color}</h1>
    <button onClick={() => {setColor('Black')}}>Change Color</button>
    </>
}

export default FavoriteColor;