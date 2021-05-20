import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light text-white">Home</h1>
            <p class="text-white">
              Hello, and welcome to my professional CV React Application! In here you will acknowledge 
              various information and facts about me, both professional and personal. This application is 
              made with HTML/CSS, and JSX files, linked together in a simple and user-friendly way, so you
              can enjoy the content presented here. Should you have any further questions about me, feel free 
              to visit the Contact page on this app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;