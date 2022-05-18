import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [listArticle, setListArticle] = useState([]);

  useEffect(() => {
    fetch('https://62850adda48bd3c40b7a0c9c.mockapi.io/api/v1/articles')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListArticle(data);
      });
  }, []);

  return (
    <>
      <header
        className="masthead"
        style={{ backgroundImage: 'url("assets/img/home-bg.jpg")' }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">
                  A Blog Theme by Start Bootstrap
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {listArticle.map((article, index) => {
              return (
                <>
                  <div className="post-preview">
                    <NavLink to={`/article/${article.id}`}>
                      <h2 className="post-title">{article.title}</h2>
                    </NavLink>
                    <p className="post-meta">
                      Author: {article.author} <a href="#!">Start Bootstrap</a>{' '}
                      on {article.createAt}
                    </p>
                  </div>
                  <hr className="my-4" />
                </>
              );
            })}
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
