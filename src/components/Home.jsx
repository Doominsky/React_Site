import React from "react";

function Home() {
  return (
    <div className="home" align="center">
      <div class="mt-5">
        <div class="align-items-center my-5">
          </div>
          <div class="col-lg-6 mt-5" align="center">
            <h1 class="font-weight-light text-white">Home</h1>
            </div>
            <div class="align-items-center my-5">
            <div class="col-lg-6 mt-5" align="center">
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
      <div align="right">
        <a href="https://www.instagram.com/doominsky_24/"><img alt="" class="mr-3" src="/pics/insta.png" width="50px" height="50px"/></a>
        <a href="https://www.facebook.com/andrei.iatin"><img alt="" class="mr-2" src="/pics/fb.png" width="50px" height="50px"/></a>
      </div>
    </div>
  );
}

export default Home;