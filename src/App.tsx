import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import router from './router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <RouterProvider router={router}/>
        </Card>
      </header>
    </div>
  );
}

export default App;
