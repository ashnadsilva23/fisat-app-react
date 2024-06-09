import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './components/AddStudent';
import DeleteStudent from './components/DeleteStudent';
import SearchStudent from './components/SearchStudent';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddStudent/>}/>
        <Route path='/search' element={<SearchStudent/>}/>
        <Route path='/delete' element={<DeleteStudent/>}/>
        <Route path='/view' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
