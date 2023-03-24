import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
const App=()=> {
  return(
    <AppContext>
      <div className="text-3xl">
        <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header/>
          <Routes>
            <Route path="/" exact element={<Feed/>}/>
            <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
            <Route path="/video/:id" element={<VideoDetails/>}/>
          </Routes>
        </div>
        </BrowserRouter>
      </div>
    </AppContext>
  ) ;
}

export default App;
