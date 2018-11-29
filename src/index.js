import Home from './containers/Home';
import './styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  root.innerHTML = Home();
});
