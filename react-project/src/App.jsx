import { useState } from 'react'
import { marked } from 'marked';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) =>
  {
    setText(event.target.value);
  }

  return (
    <div id="wrapper">
      <div id="editor">
        <h1>Editor</h1>
        <textarea
          onChange={handleChange} 
          placeholder="Enter Markdown here..." 
          value={text}
        />
      </div>
      <div id="preview">
        <h1>Previewer</h1>
        <div dangerouslySetInnerHTML={{ __html: marked(text) }} />
      </div>
    </div>
  )
}

export default App
