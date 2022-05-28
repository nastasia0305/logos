import React from 'react';

import { useSelector } from 'react-redux';

function Home(props) {
  const { session } = useSelector(store => store.session)
  const { id } = session

  const renderContent = () => {
    if (id) {
      return <div>Вы в сети! ВаУ!!!</div>
    }

    return <div>
      <h3>Новости Logos</h3>
      <p>Добро пожаловать!</p>
      <p>У нас хорошие новости для новых пользователей!</p>
    </div>
  }

  return (
    <div>
      {renderContent()}
    </div>
  );
}

export default Home;
