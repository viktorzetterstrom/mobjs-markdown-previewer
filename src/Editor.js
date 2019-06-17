import React, { useState, useEffect } from 'react';
import Preview from './Preview';
import marked from 'marked';
marked.setOptions({
  sanitize: true
});


export default function Editor() {
  const [ textContent, setTextContent ] = useState('');
  const update = event => {
    marked(event.target.value, (_, a) => {
      setTextContent(a);
    });
  }
  return (
    <div className='editor'>
      <div className='editor--textarea--container'>
        <textarea
          className='editor--textarea'
          rows='10'
          cols='100'
          onChange={ update }
        ></textarea>
      </div>
      <Preview text={ textContent }/>
    </div>
  );
}
