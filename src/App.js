import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Article from './pages/Article/Article';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import PostArticle from './pages/PostArticle/PostArticle';

const App = () => {
  return (
    <>
      <Header />

      {/* body */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-article" element={<PostArticle />} />
        <Route path="/article">
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
// rafce
