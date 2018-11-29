import AccordionItem from '../AccordionItem'
import styles from './styles.module.scss';

const renderItems = (items) => {
  let transformedItems = '';
  let { title, content } = {};
  for( let i = 0; i < items.length; i += 1) {
    ({ title, content } = items[i]);
    transformedItems += AccordionItem({ title, content });
  }
  return transformedItems;
}

const Accordion = ({ items }) => `<dl class="${styles.test}">${renderItems(items)}<dl>`

export default Accordion;
