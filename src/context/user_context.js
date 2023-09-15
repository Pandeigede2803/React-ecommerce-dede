import React, { useContext, useEffect, useState, useReducer } from "react";
import reducer from "../reducers/user_reducer.js";
import axios from "axios";

// Membuat konteks UserContext
const UserContext = React.createContext();

// Mendapatkan user ID dan token dari penyimpanan lokal jika ada
let userId = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")).userId
  : "";

let token = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")).token
  : "";

// Membuat nilai awal state untuk konteks pengguna
const initialState = {
  user: userId,
  token: token,
  loading: false,
  error: "",
};

// Membuat Provider konteks pengguna
export const UserProvider = ({ children }) => {
  // Menggunakan useReducer untuk mengelola state pengguna
  const [userState, dispatch] = useReducer(reducer, initialState);

  // Fungsi untuk login pengguna
  const login = (email, password) => {
    // Mengirim aksi "USER_LOGIN_REQUEST" untuk mengindikasikan permintaan login
    dispatch({ type: "USER_LOGIN_REQUEST" });

    // Data pengguna yang akan dikirim ke server
    const userData = { email: email, password: password };
    console.log('Mengirim data:', userData);
    
    // Mengirim permintaan POST ke server untuk login
    axios
      .post(`http://localhost:7000/auth/login`, userData)
      .then((resp) => {
        if (resp.status === 400) {
          // Menangani pesan kesalahan yang diterima dari server
          dispatch({ type: "USER_LOGIN_FAIL", payload: resp.data.message });
        } else {
          // Menangani login yang berhasil
          dispatch({ type: "USER_LOGIN_SUCCESS", payload: resp.data });
          console.log('Login Berhasil - Email:', email, 'Password:', password);
        }
      })
      .catch((err) => {
        // Menangani kesalahan lainnya
        dispatch({ type: "USER_LOGIN_FAIL", payload: err.response.data.message });
        console.log(userState);
      });
  };

  // Fungsi untuk logout pengguna
  const logout = () => {
    dispatch({ type: "USER_LOGOUT" });
  };

  // Fungsi untuk mendaftarkan pengguna
  const register = (name, email, password) => {
    dispatch({ type: "USER_REGISTER_REQUEST" });

    // Data pengguna yang akan dikirim ke server untuk pendaftaran
    const userData = { name: name, email: email, password: password };

    // Mengirim permintaan POST ke server untuk pendaftaran
    axios
      .post(`/api/users/register`, userData)
      .then((resp) => {
        dispatch({ type: "USER_REGISTER_SUCCESS", payload: resp });
      })
      .catch((err) => {
        dispatch({ type: "USER_REGISTER_FAIL", payload: err.message });
      });
  };

  return (
    <UserContext.Provider value={{ userState, login, logout, register }}>
      {/* getUserDetails */}
      {children}
    </UserContext.Provider>
  );
};

// Fungsi untuk menggunakan konteks pengguna
export const useUserContext = () => {
  return useContext(UserContext);
};
