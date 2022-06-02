import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { logoutUser } from '../../redux/thunk/asyncUsers'

function Nav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { session } = useSelector(store => store.session)

  const basicLinks = [
    { to: 'registration', title: 'Регистрация' },
    { to: 'login', title: 'Вход'}
  ]
  const authLinks = []
  if (!session.isAdmin) {
    authLinks.push({ to: 'profile', title: 'Личный кабинет' })
  }
  authLinks.push({ to: '', title: 'Выход', onClick: () => { logout() } })
  const adminLinks = [
    { to: 'admin', title: 'Панель управления' },
    { to: '', title: 'Выход', onClick: () => { logout() } }
  ]

  const logout = () => {
    dispatch(logoutUser())
    navigate('/', { replace: true })
  }

  const renderLink = ({ to, title, onClick }) => {
    if (onClick) {
      return <div className="link" onClick={onClick}>{title}</div>
    }

    return <Link to={'/' + to} className="link">{title}</Link>
  }

  const renderLinks = (links) => {
    return <ul className="navigation__list">
      {links.map((link, index) => {
        return <li key={link.to + '-' + index} className="navigation__item">
          {renderLink(link)}
        </li>
      })}
    </ul>
  }

  const renderAdminLinks = () => {
    if (session.isAdmin) {
      return renderLinks(adminLinks)
    }
  }

  return <nav className="navigation">{ session.isAdmin? renderAdminLinks() : (session.id ? renderLinks(authLinks) : renderLinks(basicLinks)) }</nav>
}

export default Nav
