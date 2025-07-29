import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import NewsBanner from "../components/NewsBanner";
import Footer from "../components/Footer";

const backgrounds = [
  "fondo1_login_ucc.jpg",
  "fondo2_login_ucc.jpg",
  "fondo3_login_ucc.jpg",
  "fondo4_login_ucc.jpg",
  "fondo5_login_ucc.jpg",
  "fondo6_login_ucc.jpg",
];

const LoginPage = () => {
  const [bg, setBg] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setBg(`/assets/images/${backgrounds[randomIndex]}`);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="wrapper max-w-md absolute top-[7%] left-[12%] bg-[rgba(26,45,63,0.8)] text-center font-archivoNarrow">
        <Header />
        <LoginForm />
        <NewsBanner />
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;