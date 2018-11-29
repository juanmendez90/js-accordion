import Accordion from '../../components/Accordion';

const items = [{
  title: "Test",
  content: "Bacon"
},
{
  title: "Bacon",
  content: "test"
}];

const Home = () => {
  const accordion = Accordion({ items });
  return accordion;
}

export default Home;
