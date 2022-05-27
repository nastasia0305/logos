import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../Registration/Registration.css";
import { registerUser } from '../../redux/thunk/asyncUsers'

function Registration(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { session } = useSelector(state => state.session )
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
        <div className="col-md-5">
          <div className="card">
            <h2 className="card-title text-center">Регистрация</h2>
            <div className="card-body py-md-4">
              <form _lpchecked="1" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="firstname"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="lastname"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="fathersname"
                    placeholder="fathersname"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="city"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="select"
                    placeholder="select"
                  />
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <Link to='/login'>Вход</Link>
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
