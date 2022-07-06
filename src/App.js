import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import PostForm from './components/PostForm'

function App() {
  return (
    <div className="App">
     <h1 className="main-header">Matt's Resume Parser</h1>     
     <Upload />
     <PostForm />
    </div>
  );
}

export function Upload() {
  return (
      <div className='upload-file-container'>
      <h3>
        CV/Resume
      </h3>
      <button className='upload-button'>Upload</button>
      </div>

  );
}

export default App;
