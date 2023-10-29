import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import QuizIndex from "./components/QuizIndex";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import CreateQuiz from "./components/CreateQuiz";
import ViewQuizzes from "./components/ViewQuizzes";
import AdminLoggedIn from "./components/AdminloggedIn";
import "bootstrap/dist/css/bootstrap.min.css";
import UserLoggedIn from "./components/UserLoggedIn";
import QuizForm from "./components/QuizForm";
import ProfileAdmin from "./components/ProfileAdmin";
import ProfileUser from "./components/ProfileUser";
import { UserContextProvider } from "./context/user";

function App() {
  const tests = [
    { id: 1, title: "Test1", description: "Description of Test 1" },
    { id: 2, title: "Test2", description: "Description of Test 2" },
    { id: 3, title: "Test3", description: "Description of Test 3" },
    { id: 4, title: "Test4", description: "Description of Test 4" },
    { id: 5, title: "Test5", description: "Description of Test 5" },
    { id: 6, title: "Test6", description: "Description of Test 6" },
  ];
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <header>
            <Routes>
              <Route
                path="/*"
                element={
                  <Navbar showLogout={true} /> /* By default, show Logout in Navbar */
                }
              />
            </Routes>
          </header>
          <main>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin-logged-in" element={<AdminLoggedIn />} />
              <Route path="/create-quiz" element={<CreateQuiz />} />
              <Route path="/view-quiz" element={<ViewQuizzes />} />
              <Route path="/user-logged-in" element={<UserLoggedIn />} />
              <Route path="/QuizForm/:testId" element={<QuizForm />} />
              <Route path="/user-profile" element={<ProfileUser />} />
              <Route path="/admin-profile" element={<ProfileAdmin />} />
              <Route path="/" element={<QuizIndex />} />
              <Route path="/" element={<UserLoggedIn tests={tests} />} />
              <Route path="/QuizForm/:id" component={QuizForm} />
            </Routes>
          </main>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;




