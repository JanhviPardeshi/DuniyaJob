/* eslint-disable react/jsx-pascal-case */
// <<<<<<< HEAD
// import Check from "./components/check";

import { Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/_auth/AuthLayout";
import RootLayout from "./pages/_root/RootLayout";
import EmployeeSignup from "./pages/_auth/forms/EmployeeSignup";
import EmployeeLogin from "./pages/_auth/forms/EmployeeLogin";
import EmployerSignup from "./pages/_auth/forms/EmployerSignup";
import EmployerLogin from "./pages/_auth/forms/EmployerLogin";
import LandingPage from "./pages/_auth/forms/LandingPage";
// import Home from "./pages/_root/innerpages/Home";
import './index.css';
import LoaderPage from "./pages/_auth/forms/LoaderPage";
// import JobSearch from "./pages/_root/innerpages/JobSearch";
//import PostJobs from "./pages/_root/innerpages/PostJobs";
// import Footer from '../src/components/Footer';
import OTPPage from "./pages/_auth/forms/Employee_OTP";
import EmployeePassword from "./pages/_auth/forms/EmployeePassword";
import Employer_OTP from "./pages/_auth/forms/Employer_OTP";
import EmployerPassword from "./pages/_auth/forms/EmployerPassword";
import FAQPage from "./pages/_root/footerpages/FAQPage";
import AboutUs from "./pages/_root/footerpages/AboutUs";
import ForgetPassword from "./pages/_auth/forms/ForgetPassword";
import EmployeeProfile from "./pages/_root/innerpages/EmployeeProfile";
import Notifications from "./pages/_root/footerpages/Notifications";
import EmployerHome from "./pages/_root/innerpages/EmployerHome";
import PostJobs from "./components/employerprofile/PostJobs";
import ApplyForm from "./components/applyform/ApplyForm";
import data from "./jsondata/csvjson.json";
import TermsCondtions from "./pages/_root/footerpages/TermsConditions";
import PRIVACYPOLICY from "./pages/_root/footerpages/PrivacyPolicy";

import EmployeeEditPage from "./pages/_root/innerpages/EmployeeEditPage";
import Jobs from "./pages/_root/innerpages/Jobs";
import JobDetails from "./components/JobDetails";
// import DashboardPostJob from "./pages/_root/innerpages/DashboardPostJob";

// import RtlLayout from "../src/views/rtl";
// import RtlLayout from "../src/views/rtl/index.jsx";

import ApplicationTracker from "./pages/_root/innerpages/ApplicationTracker";
import EmployeeDashboard from "./pages/_root/innerpages/EmployeeDashboard";
// import Home from "./components/dashboard/Home";
import ErrorPage from './components/errorpage/ErrorPage'
// import Errorpage from "./components/errorpage/Errorpage";



import ContactUs from "./pages/_root/footerpages/ContactUs";
import EmployerDashboard from "./components/employerprofile/EmployerDashboard";
import Home from "./components/employerprofile/Home";
import CheckProfile from "./components/employeeprofile/CheckProfile";
import Candidates1 from "./components/employerprofile/Candidates1";
// import EmployerDashboard from "./pages/_root/innerpages/EmployerDashboard";
// import Home from "./pages/_root/dashboardpages/Home";


function App() {
  // const [color, setcolor] = useState("Blue")
  // const click = color => {
  //   setcolor(color)
  // }
  
  return (
    <main className="flex-1 bg-slate-200 overflow-x-hidden no-scrollbar justify-center align-middle" style={{ backgroundSize: '100% 100%' }}>
      <div>
          
    <Routes>
      {/* public routes */}
      <Route element={<AuthLayout />}>

        {/* <Route path="/Employee sign-up" element={<EmployeeSignup />} /> */}
        <Route  path="/Home" element={<LandingPage />} />
        <Route index path="/" element={<LoaderPage />} />

      {/* Employee ........... */}
        <Route path="/Employee-sign-up" element={<EmployeeSignup />} />
        <Route path="/Employee-login" element={<EmployeeLogin />} />
      {/* Employer ............ */}
        <Route path="/Employer-sign-up" element={<EmployerSignup />} />
        <Route path="/Employer-login" element={<EmployerLogin />} />
        <Route path="/otp" element={<OTPPage />}/>
        <Route path="/employer-verification-otp" element={<Employer_OTP />}/>
        <Route path="/Employee-set-password" element={<EmployeePassword />}/>
        <Route path="/Employer-set-password" element={<EmployerPassword />}/>
        <Route path="/forget-password" element={<ForgetPassword />}/>

      </Route>

      {/* private routes */}
      <Route element={<RootLayout />}>
{/* 
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:id" element={<EditPost />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/profile/:id/*" element={<Profile />} />
        <Route path="/update-profile/:id" element={<UpdateProfile />} />
        <Route path="/chat/:id/" element={<Chat />} />
        <Route path="/chats/:id/" element={<ChatSection />}/> */}
        {/* <Route path="/Home" element={<Home/>} /> */}
        <Route path="/JobSearch" element={<Jobs/>} />
        {/* <Route path="/PostJob" element={<PostJobs/>} /> */}
        <Route path="/PostJob" element={<PostJobs/>}/>
        <Route path="/FAQ" element={<FAQPage />}/> 
        <Route path="/terms-&-conditions" element={<TermsCondtions />}/>
        <Route path="/About-us" element={<AboutUs/>}/>
        <Route path="/Privacy-policy" element={<PRIVACYPOLICY />}/>
        
        <Route path="/Employee-Profile" element={<EmployeeProfile />}/>
        <Route path="/check" element={<CheckProfile />}/>


        <Route path="/Notifications" element={<Notifications />}/>
        <Route path="/EmployerHome" element={<EmployerHome />} />
        <Route path="/apply-job" element={<ApplyForm />} />
        <Route path="/Edit-profile"  element={<EmployeeEditPage />} />
        <Route path="/job-details/:FIELD1"  element={<JobDetails data={data} />}/>
        {/* <Route path="/Employer-Dashboard" element={<EmployerDashboard/>}/> */}
        <Route path="/contact-us" element={<ContactUs/>}/>


        <Route path="/Application-tracking" element={<ApplicationTracker/>}/>
        <Route path="/Employee-dashboard" element={<EmployeeDashboard/>}/>
        {/* <Route path="/Dashboard-employer-Home" element={<Home />}/> */}
        <Route path="/error-page" element={ <ErrorPage /> } />
        
        <Route path="/Employer-Dashboard" element={<EmployerDashboard />} />
        <Route path="/Candidate1" element={<Candidates1/>}/>

       
        
      </Route>
    </Routes>
          
            {/* <Footer /> */}

        </div>
  </main>

  
// >>>>>>> 39dcba460153505831c5c3cb5a25c1ee308748e0
  );
}

export default App;
 