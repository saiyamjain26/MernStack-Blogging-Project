import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotAllowedLoggedInRoutes from "./routes/NotAllowedLoggedInRoutes";
import { useSelector } from "react-redux";
import WritePost from "./pages/write/WritePost";
import Profile from "./pages/Profile";
import ArticlePage from "./pages/ArticlePage";
import ResetPassword from "./pages/ResetPassword";
import ProfileOfOtherUser from "./components/profileOftherUser/ProfileOfOtherUser";
import OurTeam from './pages/OurTeam';
import OurStory from './pages/OurStory';
import PrivacySecurity from './pages/PrivacySecurity';
import OurMission from './pages/OurMission'
import OurVision from './pages/OurVision';
import ContactUs from './pages/ContactUs';
import Reviews from './pages/Reviews';
import Customer from './pages/Customer';
import Pricing from './pages/Pricing';
import TermsAndConditions from './pages/TermsAndConditions';
import FAQs from './pages/FAQs';
import Linkedin from './pages/Linkedin';
import Instagram from './pages/Instagram';

import { inject } from '@vercel/analytics';
 
function App() {
  const { user } = useSelector((state) => ({ ...state }));

  inject();

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage user={user} />} />
        <Route path="/article" exact element={<ArticlePage />} />
        <Route path="/ProfileRedirect/:userID" element={<ProfileOfOtherUser />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/ourstory" element={<OurStory />}/>
        <Route path="/ourteam" element={<OurTeam />}/>
        <Route path="/ourvision" element={<OurVision />}/>
        <Route path="/ourmission" element={<OurMission />}/>
        <Route path="/linkedin" element={<Linkedin />}/>
        <Route path="/instagram" element={<Instagram />}/>
        <Route path="/faqs" element={<FAQs />}/>
        <Route path="/termsandconditions" element={<TermsAndConditions />}/>
        <Route path="/reviews" element={<Reviews />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/customer" element={<Customer />}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="/privacysecurity" element={<PrivacySecurity />}/>
        <Route element={<LoggedInRoutes />}>
          <Route path="/write" element={<WritePost />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route element={<NotAllowedLoggedInRoutes />}>
          <Route path="/auth" exact element={<Auth />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
