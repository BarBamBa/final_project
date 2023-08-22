import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Main from './pages/Main';
import About from './pages/about/About';
import Board from './pages/board/Board';
import Login from './pages/login/Login';
import MyPage from './pages/myPage/MyPage';
import Qna from './pages/qna/Qna';
import SignUp from './pages/signUp/SignUp';
import Volunteer from './pages/volunteer/Volunteer';
import Vdetail from './pages/volunteer/Vdetail';
import BoardDetail from './pages/board/BoardDetail';
import BoardInputForm from './components/BoardInputForm'
import FindUser from './pages/login/FindUser';
import MyVolunteer from './pages/myPage/MyVolunteer';
import VolunteerSpec from './pages/myPage/VolunteerSpec';
import VolunteerReview from './pages/myPage/VolunteerReview';
import WishList from './pages/myPage/WishList'
import VolunteerHeaders from './pages/myPage/VolunteerHeaders';
import Reserve from './pages/volunteer/Reserve';
import './scss/App.scss'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/volunteer/*" element={<Volunteer/>} />
        <Route path="/vdetail/*" element={<Vdetail/>} />
        <Route path="/reserve/*" element={<Reserve/>} />
        <Route path="/board/*" element={<Board/>} />
        <Route path="/MyVolunteer/*" element={<MyVolunteer/>} />
        <Route path="/VolunteerSpec/*" element={<VolunteerSpec/>} />
        <Route path="/VolunteerReview/*" element={<VolunteerReview/>} />
        <Route path="/VolunteerHeaders/*" element={<VolunteerHeaders/>} />
        <Route path='/board/detail/:id' element={<BoardDetail/>} />
        <Route path='/board/input' element={<BoardInputForm/>} />
        <Route path="/mypage/*" element={<MyPage/>} />
        <Route path="/WishList/*" element={<WishList/>} />
        <Route path="/qna/*" element={<Qna/>} />
        <Route path="/login/*" element={<Login/>} />
        <Route path="/FindUser/*" element={<FindUser/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
