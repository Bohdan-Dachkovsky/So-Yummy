import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "../Loader/Loader";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";

import MotivatingModal from "../MotivatingModal/MotivatingModal";
import { useAuth } from "hooks";

// import THEME from 'theme';

const SharedLayout = ({ onTheme }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? <Header onTheme={onTheme} /> : null}
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
          <MotivatingModal />
        </main>
      </Suspense>
      {isLoggedIn ? <Footer /> : null}
      <ToastContainer autoClose={false} />
    </>
  );
};

export default SharedLayout;
