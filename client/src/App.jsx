import React, { useState } from 'react'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import LoginPage from './pages/Auth/Login.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const dispatch=useDispatch()
  const {isAuthenticated,isLoading}=useSelector((state)=>state.user)

  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />

            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
