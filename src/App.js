import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Muzic from './components/Muzic/Muzic';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News';
import Profile from './components/Profile/Profile.jsx';
import Settings from './components/Settings/Settings';


const App = () => {    // App - это компонента.
  return (<div className='app-wrapper'>

    <BrowserRouter>
      <Header />
      <Navbar />
      <div class={'app-wrapper-content'}>
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} />
        <Route path='/muzic' component={Muzic} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />
      </div>
    </BrowserRouter>


  </div>)
};

export default App;

        //  Запуск терминала:  CTRL + Ё    !!!
        // creat react app - запуск загрузки файлов...
         // для возврата сервера нужно написать: npm start