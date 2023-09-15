import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/user_context";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components";

const Login = () => {
  // State untuk menyimpan email dan password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Menggunakan User Context untuk mendapatkan data pengguna
  const { userState, login } = useUserContext();

  // Menggunakan hook Navigate dari React Router DOM untuk navigasi
  const navigate = useNavigate();

  // Handler saat form login di-submit
  const submitHandler = async (e) => {
    //agar tidak mengarahkan halaman ke sembarang halaman
    e.preventDefault();
    await login(email, password);
  };

  // Menggunakan useEffect untuk mengecek apakah pengguna sudah login, jika ya, maka dialihkan ke halaman "/about"
  useEffect(() => {
    if (userState.userId) {
      navigate("/");
    }
  }, [userState]);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Masuk ke akun Anda
        </h2>
      </div>
      {userState.error ? (
        <div className="">{userState.error.message}</div>
      ) : null}
      {userState.loading && <Loading />}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={submitHandler}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Alamat Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Kata Sandi
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Lupa kata sandi?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password} // Add this line to bind the input value to the state
                onChange={(e) => setPassword(e.target.value)} // Add this line to update the password state
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="h-auto flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Masuk
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Belum punya akun?
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Mulai uji coba gratis 14 hari
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
