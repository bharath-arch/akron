import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import Sideimage from "./Layout/Sideimage";
import Home from "./Layout/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startup from "./Layout/Startup";
import About from "./Layout/About ";
import Academy from "./Layout/Academy";
import Partnership from "./Layout/Partnership";
import Login from "./Login/Login";
import Verification from "./Login/Verification";
import Explore from "./User/Explore";
import Id from "./User/Id";
import {Toaster} from "react-hot-toast";
import Wealth from "./User/Wealth";
import Layout_user from "./User/Layout_user";
import Square from "./User/Square";
import Portfolio from "./User/Portfolio";
import Sign_in from "./Sign_in/Sign_in";
import Profile from "./User/Profile";
import Kyc from "./User/Kyc";
import Founder_form from "./User/Founder_form";
import Company_dashboard from "./Company/Company_dashboard"
import Admin_dashboard from "./Admin/Admin_dashboard"
import Application_data from "./Admin/Application_data";
import Admin_login from "./Admin/Admin_login";
import Manage_user from './Admin/Manage_user';
import Kyc_approval from './Admin/Kyc_approval';
import WithdrawInvestmentAmount from "./Admin/WithdrawInvestmentAmount";


function App() {
 
 
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/Aboutus" element={<About />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/partnership" element={<Partnership />} />
          {/* <Route path="/Login" element={<Login />}></Route> */}
        </Route>

        <Route path="/Login" element={<Login />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/sign_in" element={<Sign_in />} />
        <Route path="/Login/login_in/:usertype" element={<Sign_in />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/kyc" element={<Kyc />}></Route>
        <Route path="/startup/founder_form" element={<Founder_form />}></Route>
        <Route path="/founder_form" element={<Founder_form />}></Route>
        <Route path="/company_dashboard" element={<Company_dashboard />}></Route>
        <Route path="/admin_dashboard" element={<Admin_dashboard />}></Route>
        <Route path="/Admin_login"  element={<Admin_login />}></Route>
        <Route path="/manage_user"  element={<Manage_user/>}></Route>
        <Route path="/withdrawInvestment"  element={<WithdrawInvestmentAmount/>}></Route>
        {/* <Route path="/Application_data/admin_dashboard" element={<Admin_dashboard />}></Route> */}
        <Route path="/manage_user/kyc/:id" element={<Kyc_approval/>}></Route>
        <Route path="/:id" element={<Application_data />}> </Route>
       
        
       

        <Route path="/user" element={<Layout_user />}>
          <Route path="" element={<Explore />} />
          <Route path="explore" element={<Explore />} />
          <Route path="id" element={<Id />} />
          <Route path="wealth" element={<Wealth />} />
          <Route path="square" element={<Square />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>

        

        

      </Routes>
     
    </BrowserRouter>

  );
}

export default App;
