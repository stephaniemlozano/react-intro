import { useState } from 'react'

const ColorComponent = () => {
    const [textColor, setTextColor] = useState('Purple')
    //textColor = Getter, param 1, (is a const variable that can only be updated by the Setter)
    //setTextColor = Setter, param 2 (is a function that updates textColor)
  
    console.log('TextColor -->', textColor)

    return (
        <div className='App'>
        <header className='App-header'>
          <h1 style={{ color: textColor }}>My favorite color is {textColor}</h1>
          <button onClick={() => setTextColor('green')}>Green</button>
          <br />
          <button onClick={() => setTextColor('blue')}>Blue</button>
          <br />
          <button onClick={() => setTextColor('purple')}>Purple</button>
        </header>
      </div>  
    )
}

export default ColorComponent