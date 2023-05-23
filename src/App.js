import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./cards/styles.css"
import Card from '../src/cards/card';



function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar_back" style={{position:"sticky"}}>
  <a className="navbar-brand nav_color" href="#">
    CREDMANTRA
  </a>
  <button
    className="navbar-toggler"
    type="button"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
      <li className="nav-item item4">
        <a className="nav-link nav_color" href="#">
          Home 
        </a>
      </li>
      <li className="nav-item item5">
        <a className="nav-link nav_color" href="#">
        Financial Tools
        </a>
      </li>
      <li className="nav-item item2">
        <a className="nav-link nav_color" href="#">
        Credit Score
        </a>
      </li>
      <li className="nav-item item3">
        <a className="nav-link nav_color" href="#">
        Blogs
        </a>
      </li>
      <li className="nav-item item1">
        <a className="nav-link nav_color" href="#">
        Contact
        </a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0 align_text">
       <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
        sign up
      </button>
    </form>
  </div>
</nav>
<body>
<p className='get_in'>Get in touch with us for <br/> more Information</p>

<p className='help'>If you need any help or have any question , we were here for you</p>


<ul>
  <li>
<Card name="Buisness" email='xyx@yahoo.in' phoneno='546944645'/></li>
<li>
<Card name="Salary/operation" email='ayz@gmail.com' phoneno='7568664'/></li>
<li>
<Card name="Payments" email='uvw@hotmail.com' phoneno='464575'/></li>
<li>
<Card name="Technology" email='qqq@gmail.com' phoneno='65567568' /></li>


<div className='box'>

</div>
</ul>

</body>

 </>
  );
}

export default App;
