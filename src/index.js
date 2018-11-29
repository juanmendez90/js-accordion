import Home from './containers/Home';
import './styles.scss';
import 'normalize.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  root.innerHTML = Home();
});
