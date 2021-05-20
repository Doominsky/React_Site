import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="mt-5">
          <div align="center">
            <h1 class="font-weight-light text-white" align="center">Contact</h1>
              <form class="text-white" name="form1" action="MAILTO:andrei_iatin@yahoo.com" method="post" enctype="text/plain">
                <font/>Name: <br/>
                  <input type="text" name="firstname" /><br />
                  Surname: <br/>
                  <input type="text" name="surname" /><br /><br/>
                  What programming language do you see me fit for your job position?<br/>
                  <input type="checkbox" name="job[]"  value="html"/> HTML/CSS/JS<br/>

                  <input type="checkbox" name="job[]"  value="java"/> Java<br/>

                  <input type="checkbox" name="job[]"  value="cplusplus"/> C++<br/>

                  <br />
                  What company are you representing?<br/>
                  <select name="company">
                  <option value="">Select one</option>
                  <option value="Haufe">Haufe Group</option>
                  <option value="Haufe">Atoss Software</option>
                  <option value="Haufe">Fastbit</option>
                  <option value="Haufe">Other</option>
                  </select><br/>

                  <br />
                  If other, type it below.<br/>
                  <textarea name="other"></textarea><br/><br/>
                  Send a message.<br/>
                  <textarea name="message"></textarea><br /><br/>

                  <input type="submit"  value="Send" />

                  <input type="reset"  value="Reset"/>

            </form>
          </div>
        
      </div>
      <div align="right">
        <a href="https://www.instagram.com/doominsky_24/"><img class="mr-3" src="/pics/insta.png" width="50px" height="50px"/></a>
        <a href="https://www.facebook.com/andrei.iatin"><img class="mr-2" src="/pics/fb.png" width="50px" height="50px"/></a>
      </div>
    </div>
  );
}
export default Contact;