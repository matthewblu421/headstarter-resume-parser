import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FileUpload from './FileUpload';

function App() {
	return (
		<div className="App">
			<h1 className="main-header">Matt's Resume Parser</h1>

			<FileUpload />
		</div>
	);
}

export default App;
