import { Routes, Route } from "react-router-dom";
import "./App.css";
import Faculties from "./components/Faculties";
import Academics from "./components/Academics";
import MainPage from "./components/MainPage";
import Rdcell from "./components/Rdcell";

import * as React from "react";
import { background, ChakraProvider } from "@chakra-ui/react";
import SignInForm from "./components/SignInForm";
import LoginForm from "./components/LoginForm";
// import Base from './components/Base';
import Student from "./components/Student";
import UpdateProfile from "./components/UpdateProfile";
import ClassRoom from "./components/classRoom";
import Resources from "./components/Resources";
import Files from "./components/Files";
import Footers from "./components/Footers";

import Forum from "./components/Forum";
import Contact from "./components/Contact";
import Blank from "./components/Blank";
import Research from "./components/Research";
import RsearchArea from "./components/RsearchArea";
import Faculty from "./components/Faculty";

import PublicationsandJournals from "./components/PublicationsandJournals";
import Staff from "./components/Staff";
import Profile from "./components/Profile";
import Achievement from "./components/Achievement";
import Lab from "./components/Lab";
import Projects from "./components/Projects";
import UpFaculty from "./components/UpFaculty";
import Profilefac from "./components/Profilefac";
function App() {
  return (
    <ChakraProvider>
      <div className="App" style={{ marginTop: "60px" }}>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Faculties" element={<Faculties />} />
          <Route path="/Faculty/:emailId" element={<Faculty />} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="rdcell" element={<Rdcell />} />
          <Route path="resources" element={<Resources />} />
          <Route path="/files/:id" element={<Files />} />
          {/* <Route path='/upload/:id' element={<UploadFile/>}/> */}
          <Route path="/Student" element={<Student />} />
          <Route path="/update" element={<UpdateProfile />} />
          <Route path="signupform" element={<SignInForm />} />
          <Route path="loginform" element={<LoginForm />} />
          <Route path="classroom" element={<ClassRoom />} />
          <Route path="footer" element={<Footers />} />
          <Route path="Forum" element={<Forum />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/research" element={<Research />} />
          <Route path="/researchArea" element={<RsearchArea />} />
          <Route path="/publication" element={<PublicationsandJournals />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/updates" element={<UpFaculty />} />
          <Route path="/profiless" element={<Profilefac />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
