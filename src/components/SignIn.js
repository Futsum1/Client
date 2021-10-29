import React from 'react'
import signinImg from "../assets/images/signupImg.svg"

const SignIn = () => {
    return (
        <div>
            <section class="vh-100" style={{backgroundColor: "#508bfc"}}>
  <div class="container py-5 h-100">
    <div class=" card-body p-md-5 text-center shadow-2-strong row d-flex justify-content-center align-items-center h-100" style={{borderRadius: "1rem"}}>
      <div class="col-10 col-md-8 col-lg-4 col-xl-5 ">
        <div class="" >
          <div class="card-body p-md-5 text-center">

            <h3 class="mb-5">Sign in</h3>

            <div class="form-outline mb-4">
              <label class="form-label" for="typeEmailX-2">Email</label>
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="typePasswordX-2">Password</label>
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
            </div>

            
            <div class="form-check d-flex justify-content-start mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

          </div>
        </div>
         
      </div>

      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

        {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image"/> */}
         <img src={signinImg} alt="signup Image" style={{ height: "62vh"}}/>
    </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default SignIn
