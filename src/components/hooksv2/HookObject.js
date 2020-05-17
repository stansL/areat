import React, { useState } from 'react'

function HookObject() {
    const [name, setName] = useState({ firstName: '', lastName: '' });


    const handleChange = (e) => {
        const target = e.target;
        const n = target.name;
        const v = target.value;
        setName({ ...name, [n]: v });
    }

    return (
        <form>
            <input type="text" value={name.firstName} name="firstName" onChange={handleChange} /> <br />
            <input type="text" value={name.lastName} name="lastName" onChange={handleChange} /> <br />
            <input type="button" value="Click" /><br />

            <h3>Your First Name is : {name.firstName}</h3>
            <h3>Your Last Name is : {name.lastName}</h3>

        </form>
    )
}

export default HookObject
