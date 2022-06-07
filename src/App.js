import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className='app'>
      <header className='main-header'>
        <div className='header__top'>
           <nav className='top-container'>
               <ul className='top-list'>
                  <li className="top-item">
                     Главная
                  </li>
                  <li className="top-item">
                     Новости
                  </li>
                  <li className="top-item">
                     Размещение и тарифы 
                  </li>
                  <li className="top-item">
                     Объявления на карте
                  </li>
                  <li className="top-item">
                     Контакты
                  </li>
               </ul>
               <div className='top-btn'>
                  <ul className='top-list__btn'>
                  <li className="btn-item faivorite">
                     Закладки
                  </li>
                  <li className="btn-item login">
                     Вход и регистрация
                  </li>
                  </ul>
               </div>
           </nav>
        </div>
        <div className='header__lower'>
            <nav className='lower-container'>
               <ul className='lower__list'>
                  <li className="lower-item">
                     <img src={logo} className="logo-img" alt="logo" />
                  </li>
                  <li className="lower-item">
                     Квартиры на сутки
                  </li>
                  <li className="lower-item">
                     Коттеджи и усадьбы
                  </li>
                  <li className="lower-item">
                     Бани и Сауны
                  </li>
                  <li className="lower-item">
                     Авто напрокат
                  </li>
               </ul>
               <div className='lower-btn'>
                  <button className='btn'>
                     +  Разместить объявление
                  </button>
               </div>
            </nav>
        </div>
      </header>
    </div>
    
  );
}

export default App;
