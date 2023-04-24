import {Routes, Route} from 'react-router-dom'
import './App.css';
import SearchScreen from './screens/SearchScreen';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />}/>
        <Route path='/search' element={<SearchScreen />}/>
        <Route path='/details/:id' element={<DetailScreen />}/>
      </Routes>
    </div>
  );
}

export default App;
