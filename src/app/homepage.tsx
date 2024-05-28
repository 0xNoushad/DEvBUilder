import React from 'react';
import Link from 'next/link';
 
import 'boxicons/css/boxicons.min.css';  
import './style.css'; 


const Homepage: React.FC = () => {
  return (
    <>
     <nav className="nav">
  <div className="navbar">
    <Link href="#">
      <div className="logo">DEV PROFILE BUILDER</div>
    </Link>
    <ul className="navlist hide-icons">
      <li className="navitem">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-instagram icon" style={{ color: "#364958" }}></i>
        </a>
      </li>
      <li className="navitem">
        <a href=" #" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-twitter icon" style={{ color: "#364958" }}></i>
        </a>
      </li>
      <li className="navitem">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-github icon" style={{ color: "#364958" }}></i>
        </a>
      </li>
    </ul>
  </div>
</nav>



      <main className="main">
        <div className="container">
          <h1 className="heading">Stand out on Github with a dynamic and <br />personalized profile</h1>
          <p className="para">
            Our app assists developers like you in creating visually appealing and professional profiles that highlight your work and skills 🚀.
            <br />
            You can quickly and easily create your own personal profile using our simple interface. Furthermore, you don't have to be concerned about the design's visibility in different themes. Because the design of your profile will change depending on the GitHub theme. That's pretty cool 😎, isn't it?
            <br />
            Consider the following <a href="#" target="_blank" rel="noopener noreferrer">Example</a> 🤓.
            <br />
            A well-designed profile will not only impress potential employers and clients, but it will also help you stand out in a crowded job market. So, why delay? With our app, you can start creating a beautiful and effective Github profile right away 🥁!
          </p>
          <div className="buttons-main">
            <div className="buttons">
               
              <a href="#create-profile" className="btn">Create Profile</a>
            </div>
          </div>

          <div className="product-hunt">
            <a href="https://www.producthunt.com/posts/dev-profile-builder?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dev&#0045;profile&#0045;builder" target="_blank" rel="noopener noreferrer">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=381199&theme=light" alt="Dev Profile Builder - Stand out on GitHub with a dynamic and personalized profile | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" />
            </a>
          </div>

          <p className="blog-link">
            <a href="https://simplysabir.hashnode.dev/create-an-awesome-github-profile-in-minutes" target="_blank" rel="noopener noreferrer">
              👉🏻 See this Blog to Fully Understand How to Use this App Effectively <em>(Must Read)</em>
              <p>
              <b style={{ color: "#f6f0f0" }} >this is where i am inspired by</b>
              </p>
             
            </a>
          </p>
        </div>
      </main>

      <section className="further-info">
        <p className="section-heading">Why Us</p>
        <div className="column-main-container">
          <div className="columns">
            <div className="card">
              <h3 className="card-heading">
                <i className='bx bxs-bug-alt' style={{ color: "#f6f0f0", fontSize: '12px' }}></i> Simple
              </h3>
              <p className="card-paragraph">
                Not only is our app quick and easy to use, but it also simplifies the process of creating a stunning Github profile. You don't have to waste time sifting through different websites or attempting to code your own design because everything is in one place.
              </p>
            </div>

            <div className="card">
              <h3 className="card-heading">
                <i className='bx bxs-ghost' style={{ color: "#f6f0f0", fontSize: '12px' }}></i> Unique
              </h3>
              <p className="card-paragraph">
                Our app distinguishes itself from the competition by providing a variety of customization options that allow you to truly personalise your Github profile. You can create a professional and visually striking profile that reflects your personal style or brand.
              </p>
            </div>

            <div className="card">
              <h3 className="card-heading">
                <i className='bx bxs-comment-dots' style={{ color: "#f6f0f0", fontSize: '12px' }}></i> Result
              </h3>
              <p className="card-paragraph">
                Our app is the best option for creating a beautiful and effective Github profile from an SEO standpoint. You can improve your visibility on search engines and make it easier for recruiters and potential employers to find you by including these keywords and phrases in your profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="create-profile" id="create-profile">
        <p className="section-heading">Create Profile</p>
        <div className="container-form">
          <div className="form-container">
            <form action="#">
              <div className="form first">
                <div className="details personal">
                  <span className="title">Personal Details</span>

                  <div className="fields">
                    <div className="input-field">
                      <label htmlFor="userFavEmoji">Fav Emoji</label>
                      <input type="text" placeholder="Enter Your Favourite Emoji .." id="userFavEmoji" required />
                    </div>

                    <div className="input-field">
                      <label htmlFor="userFullName">Full Name</label>
                      <input type="text" placeholder="Enter Your Name.." id="userFullName" required />
                    </div>

                    <div className="input-field">
                      <label htmlFor="userGithubUsername">Github Username</label>
                      <input type="text" placeholder="Enter Without @ (e.g. simplysabir)" id="userGithubUsername" required />
                    </div>

                    <div className="input-field">
                      <label htmlFor="userInstagramUsername">Instagram</label>
                      <input type="text" placeholder="Enter Username Without @ (e.g. malik_9136) .." id="userInstagramUsername" required />
                    </div>

                    <div className="input-field">
                      <label htmlFor="userTwitterUsername">Twitter</label>
                      <input type="text" placeholder="Enter Username Without @ (e.g. simplysabir_)" id="userTwitterUsername" required />
                    </div>

                    <div className="input-field">
                      <label htmlFor="userLinkedinUrl">LinkedIn</label>
                      <input type="text" placeholder="Enter Your LinkedIn Profile URL" id="userLinkedinUrl" required />
                    </div>

                    <div className="input-field">
                      <label htmlFor="userBriefIntro">Brief Intro</label>
                      <textarea name="intro" id="userBriefIntro" placeholder="Enter Brief Intro About You (approx. in 100 words) .." required />
                    </div>

                    <div className="input-field">
                      <label htmlFor="userLatestProject">Latest Project</label>
                      <input type="text" placeholder="Type the name of the repo as it is .." id="userLatestProject" required />
                    </div>
                  </div>
                </div>

                <div className="details skills">
                  <span className="title">Language and Tools</span>

                  <div className="fields">
                    <div className="input-field">
                      <label htmlFor="userLangAndTools">Type Language and Tech you use</label>
                      <label>
                        (Go to this <a href="https://languageandtools.super.site/" target="_blank" rel="noopener noreferrer">Page</a> and Fill in the details as Told, Also Visit the <a href="https://sabirkhan.hashnode.dev/create-an-awesome-github-profile-in-minutes" target="_blank" rel="noopener noreferrer">Blog</a>)
                      </label>
                      <textarea name="intro" id="userLangAndTools" placeholder="Write like this without space (e.g. js,html,css,react)" required />
                    </div>
                  </div>
                </div>

                <div className="submitBtn">
                  <button className="button btn" type="submit" id="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="output-section">
        <p className="section-heading">Output</p>
        <p className="para">Copy this and Paste in Your README.md File.</p>
        <div className="container-output">
          <div className="output-container">
            <div className="output">
              <pre className="fullName" id="fullName"></pre>
              <pre className="one-liner" id="one-liner">**`Digital Craftsman (Developer / Programmer)`</pre>
              <pre className="userIntro" id="userIntro"></pre>
              <pre className="languageAndTools" id="languageAndTools"></pre>
              <pre className="metrics" id="metrics"></pre>
              <pre className="latestProjectOutput" id="latestProjectOutput"></pre>
              <pre className="connectWithMe" id="connectWithMe"></pre>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <ul className="navlist">
          <li className="navitem">
            <a href="#">
              <i className='bx bxl-instagram icon' style={{ color: "#364958" }}></i>
            </a>
          </li>
          <li className="navitem">
            <a href="#">
              <i className='bx bxl-twitter icon' style={{ color: "#364958" }}></i>
            </a>
          </li>
          <li className="navitem">
            <a href="#">
              <i className='bx bxl-github icon' style={{ color: "#364958" }}></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Homepage;
