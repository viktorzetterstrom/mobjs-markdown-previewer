import React from 'react';

export default function Preview(props) {
  return (
    <div>
      <div
        className='preview'
        dangerouslySetInnerHTML={{__html: props.text}}></div>
    </div>
  );
}
