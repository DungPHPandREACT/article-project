import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const params = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    fetch(
      'https://62850adda48bd3c40b7a0c9c.mockapi.io/api/v1/articles/' + params.id
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticle(data);
      })
      .catch((error) => {
        console.log('Có chạy vào .catch, :', error);
      })
      .finally((done) => {
        console.log('Có chạy vào cái cuối cùng:', done);
      });
  }, []);

  return (
    <>
      <div>
        {/* Page Header*/}
        <header
          className="masthead"
          style={{ backgroundImage: 'url("assets/img/post-bg.jpg")' }}
        >
          <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="post-heading">
                  <h1>{article.title}</h1>
                  <h2 className="subheading">{article.summary}</h2>
                  <span className="meta">
                    Author: {article.author} <a href="#!">Start Bootstrap</a> on{' '}
                    {article.createAt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Post Content*/}
        <article className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <p>{article.content}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Article;
