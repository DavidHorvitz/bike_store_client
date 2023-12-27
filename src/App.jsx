import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Templates/wrapper/Header';
import { Main } from './components/Templates/wrapper/Main';
import { getCategories } from './store/actions/categories/getCategories';
import { useDispatch, useSelector } from 'react-redux';
import {  } from './store/features/productsSlice';

function App() {
  const dispatch = useDispatch();
  dispatch(getCategories())
  return (

    <div>
      <Header />
      <Main />
    </div>
  )
}

export default App
