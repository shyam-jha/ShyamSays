import Image from 'next/image';
import Feature from './ui/abt';
import f1 from '../src/images/p1.jpeg';
import f2 from '../src/images/p2.jpeg';
import f3 from '../src/images/p3.jpeg';
import f4 from '../src/images/p4.jpeg';

const featuresData = [
  {
    title: 'ENACTUS DDUC',
    sub: 'Director of Research and Development',
    text: 'I led initiatives aimed at fostering sustainable business development. Through innovative research and strategic planning, our team implemented projects that aligned with Enactus mission to drive positive social impact while promoting environmentally conscious and economically viable business practices',
  },
  {
    title: 'ACM DDUC',
    sub: 'Core Team',
    text: 'I am dedicated to advancing technology. With a passion for computer science our team collaborates to organize events, workshops, and initiatives that empowers individual in tech community',
  },
  {
    title: 'Data Analytics Club',
    sub: 'Executive Team',
    text: 'Through collaboration with industry partners and hands-on projects, we empower members to sharpen their analytics and make meaningful contribution, skill development, and technology advancement',
  },
  {
    title: 'Sanganika',
    sub: 'Member',
    text: 'With a passion for Computer Science and commitment to excellence, I actively contribute to our society initiatives.',
  },
];

const Features = () => (
  <div className="w-full flex flex-col lg:flex-row justify-between mt-20 px-8" id="experience">
    <div className="flex-1.5 flex flex-col items-center lg:items-start">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} sub={item.sub} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
