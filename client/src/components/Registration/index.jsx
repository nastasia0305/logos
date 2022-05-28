import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from '../../redux/thunk/asyncUsers'

function Registration(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const { session } = useSelector(state => state.session )

  const registration = event => {
    event.preventDefault()
    
    const data = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      fathersname: event.target.fathersname.value,
      email: event.target.email.value,
      password: event.target.password.value,
      city: event.target.city.value,
      select: event.target.select.value,
    }
    console.log(data)
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
              <form onSubmit={registration}>
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
