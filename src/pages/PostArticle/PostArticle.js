import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostArticle = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const hanldeChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeSummary = (e) => {
    setSummary(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handlePostArticle = async () => {
    const newArticle = {
      title,
      summary,
      author,
      content,
    };

    try {
      const rawResponse = await fetch(
        'https://62850adda48bd3c40b7a0c9c.mockapi.io/api/v1/articles',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newArticle),
        }
      );
      const response = await rawResponse.json();
      console.log(response);

      toast.success('Post article successfully!', {
        position: 'top-right',
        autoClose: 2000,
      });
    } catch (e) {
      toast.error(`${e}`, {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <header
        className="masthead"
        style={{ backgroundImage: 'url("assets/img/home-bg.jpg")' }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>POST Blog</h1>
                <span className="subheading">
                  A Blog Theme by Start Bootstrap
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <h1>POST ARTICLE</h1>
              <div className="my-5">
                {/* * * * * * * * * * * * * * * **/}
                {/* * * SB Forms Contact Form * **/}
                {/* * * * * * * * * * * * * * * **/}
                {/* This form is pre-integrated with SB Forms.*/}
                {/* To make this form functional, sign up at*/}
                {/* https://startbootstrap.com/solution/contact-forms*/}
                {/* to get an API token!*/}
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                    onChange={hanldeChangeTitle}
                  />
                  <label htmlFor="name">Title</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A title is required.
                  </div>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="summary"
                    name="summary"
                    type="email"
                    placeholder="Enter your summary..."
                    data-sb-validations="required,summary"
                    onChange={handleChangeSummary}
                  />
                  <label htmlFor="summary">Summary</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    Summary is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Summary is not valid.
                  </div>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="author"
                    name="author"
                    type="tel"
                    placeholder="Enter author..."
                    data-sb-validations="required"
                    onChange={handleChangeAuthor}
                  />
                  <label htmlFor="author">Author</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    Author is required.
                  </div>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="content"
                    name="content"
                    placeholder="Enter content article..."
                    style={{ height: '12rem' }}
                    data-sb-validations="required"
                    defaultValue={''}
                    onChange={handleChangeContent}
                  />
                  <label htmlFor="message">Content</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    Content is required.
                  </div>
                </div>
                <br />
                {/* Submit success message*/}
                {/**/}
                {/* This is what your users will see when the form*/}
                {/* has successfully submitted*/}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>
                {/* Submit error message*/}
                {/**/}
                {/* This is what your users will see when there is*/}
                {/* an error submitting the form*/}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/* Submit Button*/}
                <button
                  className="btn btn-primary text-uppercase"
                  onClick={handlePostArticle}
                >
                  Post Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PostArticle;
