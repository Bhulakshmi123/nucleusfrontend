import React, { useState } from 'react'

function TestFile() {
    const [chosen, setChosen] = useState('');
    console.log('chooosen',chosen)
    console.log('',setChosen)
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
export default TestFile;