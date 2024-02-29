import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavScrollExample from './Navbar';
import { Country } from './Country';
import { Allitem } from './Allitem';
import { Fav } from './Fav';
import { Category } from './Category';
import { Detail } from './Detail';
import { Recipe } from './Recipe';
import { Search } from './Search';
import { Countrydetail } from './Countrydetail';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <NavScrollExample/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allitems' element={<Allitem/>}/>
        <Route path='/fav' element={<Fav/>}/>
        <Route path='/country' element={<Country/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/detail/:strCategory' element={<Detail/>}/>
        <Route path='/cook/:idMeal' element={<Recipe/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/countrydetail/:strArea' element={<Countrydetail/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
