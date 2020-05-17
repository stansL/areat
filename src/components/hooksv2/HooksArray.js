import React from 'react'
import { useState } from 'react'

function HooksArray() {
    const [items, setItems] = useState([{ id: 1, value: "James" }]);

    const addItem = () => {
        setItems([...items, { id:  2, value: "Maria" }])

    }
    return (
        <div>
            <button onClick={addItem}>Add a Number</button>
            <ul>
                {items.map(item => <li key={item.id}>{item.value}</li>)}
            </ul>

        </div>
    )
}

export default HooksArray
