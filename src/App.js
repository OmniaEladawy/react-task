import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes , Route, Navigate} from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
import PostDetails from './components/PostDetails';
import Login from './components/Login';
import { useState } from 'react';

function App() {

  let [body,setBody] = useState("");
  let [title,setTitle] = useState("");

  let onBody = (data) => {
    setBody(data);
  }

  let onTitle = (tData) => {
    setTitle(tData);
}

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/' element={<Navigate  to='/home'/>}/>
      <Route path='/posts' element={<Posts onBody = {onBody} onTitle = {onTitle}/>}/>
      <Route path='/posts/:id' element={<Posts />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/details' element={<PostDetails body={body} title={title}/>}/>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
    
    <Footer/>
    </>
  );
}

export default App;
