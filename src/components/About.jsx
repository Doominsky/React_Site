import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          
          <div class="col-lg-6">
            <h1 class="font-weight-light">Who am I?</h1>
            <p>
              Year 3 Student within "Politehnica" University of Timișoara, I'm currently looking
              to enhance my future Computer Science career by learning new technologies, and develop 
              new skills. I'm driven by my motivation to fulfill goals and dreams, personal or professional.
            </p>
          </div>
          <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
        </div>
        <div class="row align-items-center my-5">
        <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light">Main Knowledge?</h1>
            <p>
              There isn't a real focused knowledge I have. Personally, I can say I aquired knowledge from
              multiple mentors or courses. For an instance, I've finished "We Speak Code" in the summer of 2017,
              which gave me an abudance of HTML/CSS knowledge and skills, and also built a foundation and welcomed
              me into the Web Programming world. In 2018, I've worked on a website called "20th Century Music", 
              translated in Romanian. If you'd like to take a glance at it, here is the<a href=""> GitHub</a> link.
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
        
          <div class="col-lg-6">
            <h1 class="font-weight-light">Hobbies?</h1>
            <p>
              Anytime I want to escape from the real world, I like to game and listen to music. I know for some
              folks this hobby might not be interesting at all, but I love games, and I am very competitive at them
              too. For the most part, I am playing Tom Clancy's Rainbow Six Siege, but often I'm also playing
              Rocket League too. When I have time, I also like to edit videos and make nature pictures. Here is my
              <a href="/gallery"> Gallery</a>.
            </p>
          </div>
          <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;