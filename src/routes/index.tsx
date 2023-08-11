import Admin from "@/pages/Admin";
import CheckIn from "@/pages/CheckIn";
import CheckOut from "@/pages/CheckOut";
import Lodge from '@/pages/Lodge';
import Main from "@/pages/Main";
import { Route, Router } from "electron-router-dom";

export function AppRoute() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/checkIn" element={<CheckIn />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/lodge" element={<Lodge />} />
        </>
      }
    />
  );
}

export default AppRoute;
