import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import BlogDetail from "./Components/blog/BlogDetail/BlogDetail";
import MainPage from "./Components/blog/Mainpage/MainPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import Error from "./Components/Error/Error";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Reviews" element={<Reviews />} />

        <Route path="/blogs" element={<MainPage />} />
        <Route path="/blog/:blogId" element={<BlogDetail />}></Route>

        <Route path="/About" element={<About />} />

        <Route path="/Dashboard" element={<Dashboard />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
