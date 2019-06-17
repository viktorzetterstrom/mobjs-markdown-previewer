import React from 'react';
import './App.css';
import Editor from './Editor';
import Preview from './Preview';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>MobJs Markdown Editor</h1>
      <Editor />
    </div>
  );
}

export default App;
