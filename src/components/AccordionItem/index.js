import { addStyles } from '../../utilities/helpers';
import styles from './styles.module.scss';

const AccordionItem = ({ title, content }) => {
  const accordionTitle = document.createElement('dt');
  accordionTitle.innerHTML = title;
  accordionTitle.addEventListener('click', () => console.log(title));
  addStyles(accordionTitle, styles['AccordionItem-title'], styles['AccordionItem-title2'])

  const accordionContent = document.createElement('dd');
  accordionContent.innerHTML = `<p>${content}</p>`;
  return [accordionTitle, accordionContent];
}

export default AccordionItem;
