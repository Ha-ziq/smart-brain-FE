import React, { useState } from 'react'

const SignIn = ({ setroute,loadUsers }) => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 
  const [wrongCredentals, setwrongCredentials] = useState(false)
 const API_URL = import.meta.env.VITE_API_URL;

  const submit = () => {
    // console.log(email,password)

    fetch(`${API_URL}/signin`, {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(Response => Response.json())
      .then(user => { 
        console.log(user)

        if (user.id) {
          loadUsers(user)
          setroute("home")
        } else {
          setwrongCredentials(true)
          console.log("wrong emial password")
        }
      }).catch(error => {
        console.error('Error:', error.message);
        // You can display an error message to the user here if needed.
      });
  }


 



  return (
    <article className="br3 ba b--black-80 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white-20">

      <main className="pa4 black-80 ">
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            {
              (wrongCredentals) ? <p className='red'>wrong email or password</p> : <p></p>
            }
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"
                onChange={(e) => setemail(e.target.value)} />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="br3 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"
                onChange={(e) => setpassword(e.target.value)} />
            </div>
          </fieldset>
          <div className="">
            {/* <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit" value="Sign in"
              /> */}
            <button
              className=" br3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"  // Ensure the button behaves as a submit button
              onClick={submit}
            >
              Sign in
            </button>
          </div>
          <div className="lh-copy mt3">
            <a className="f6 link dim black db pointer"
              onClick={() => setroute("register")}
            >Register</a>
          </div>
        </div>
      </main>
    </article>
  )
}

export default SignIn