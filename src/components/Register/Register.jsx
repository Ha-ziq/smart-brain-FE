import {useState} from 'react'

const Register = ({ setroute,loadUsers }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");



 const onregister = () => {

    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      })
    })
    .then(response=>response.json())
    .then(user=>{
      if(user.id){
        console.log(user)
        loadUsers(user)
        setroute("home")
      }
    }).catch(error => {
        console.error('Error:', error.message);
    }
    )}

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white-20">

      <main className="pa4 black-80 ">
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 ">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 " for="email-address">Name</label>
              <input className="br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name"
              onChange={(e) => setname(e.target.value)} />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 " for="email-address">Email</label>
              <input className="br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" 
              onChange={(e) => setemail(e.target.value)}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 " for="password">Password</label>
              <input className="br3 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" 
              onChange={(e) => setpassword(e.target.value)}/>
            </div>
          </fieldset>
          <div className="">
            <input className="br3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib "
              type="submit" value="Register"
              onClick={onregister} />
          </div>
          {/* <div className="lh-copy mt3">
      <a  className="f6 link dim black db pointer"
      
      >Register</a>
    </div> */}
        </div>
      </main>
    </article>
  )
}

export default Register