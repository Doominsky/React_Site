import React from "react";

function Gallery(){
    return(
        <div className="mt-3">
        <div align="center">
          <h1 class="font-weight-light" align="center">Gallery</h1>
            
        </div>
        <div class="container">
        <div class="row align-items-center my-5">
          
          <div class="col-lg-6">
            <h1 class="font-weight-light">Who am I?</h1>
            <p>
             
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
             
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
        
          <div class="col-lg-6">
            <h1 class="font-weight-light">Hobbies?</h1>
            <p>
              
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

export default Gallery;