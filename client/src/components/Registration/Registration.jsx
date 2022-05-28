import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../Registration/Registration.css";
import { registerUser } from '../../redux/thunk/asyncUsers'

function Registration(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { session } = useSelector(state => state.session)
  console.log(session);
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      fathersname: e.target.fathersname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      city: e.target.city.value,
      select: e.target.select.value,
    }
    console.log(data);
    dispatch(registerUser(data))
    navigate('/login')
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="placeholder-form">
          <div className="card">
            <div className="card-body py-md-4">
              <div className="login-link">
                <h2 className="card-title text-center">Регистрация</h2>
                <Link to='/login'>Вход</Link>
              </div>
              <form _lpchecked="1" onSubmit={handleSubmit}>
                <div className="placeholder-container">
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder=" "
                  />
                  <label htmlFor="firstname">Firstname</label>
                </div>
                <div className="placeholder-container">
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder=" "
                  />
                  <label htmlFor="lastname">Lastname</label>
                </div>
                <div className="placeholder-container">
                  <input
                    type="text"
                    className="form-control"
                    id="fathersname"
                    placeholder=" "
                  />
                  <label htmlFor="fathersname">Fathersname</label>
                </div>
                <div className="placeholder-container">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder=" "
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="placeholder-container">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder=" "
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="placeholder-container">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder=" "
                  />
                  <label htmlFor="city">City</label>
                </div>
                <div className="placeholder-container">
                  <select
                    type="select"
                    className="form-control"
                    id="select"
                    placeholder="select"
                  />
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <button type='submit' className="btn btn-primary">Зарегистрироваться</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
