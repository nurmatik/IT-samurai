import React from 'react';
import './App.css';

function App() {
    return (
        <div>
                <Header />
                <Technologies />
        </div>
    );
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
            </ul>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href = '#s'>Home</a>
            <a href= '#s'>New feed</a>
            <a href= '#s'>Message</a>
        </div>
    );
}

export default App;
