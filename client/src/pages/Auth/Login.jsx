import React, { useEffect } from "react";
import Header from "../../components/Header";
import Login from "../../components/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {useAlert} from 'react-alert'
import { loadUser } from "../../action/userAction";



export default function LoginPage() {

    const dispatch = useDispatch()
    const alert=useAlert();
    const Navigate=useNavigate();
    const {user,isLoading,isAuthenticated,error}=useSelector((state)=>state.user)
  useEffect(() => {
  
    if (isAuthenticated) {
        Navigate('/admin/dashoard')
    }
    
  }, [isAuthenticated,error,alert])

    useEffect(() => {
        if (error) {
            alert.error(error.message);
        }
        if (isAuthenticated) {
            Navigate('/admin/dashboard')
        }
        dispatch(loadUser())
    }, [isAuthenticated])

    useEffect(() => {
        const notify = () => {
            toast("email: adminkumar@gmail.com\npassword: adminkumar", {
                autoClose: false,
                closeOnClick: false,
                draggable: false,
                className: 'custom-toast',
                bodyClassName: 'custom-toast-body',
            });
        };

        notify();

    }, []);

    return (
        <>
            <Header
                heading="Login to your account"
            />

            <Login />

            <ToastContainer className="custom-toast-container" />
        </>
    )
}
