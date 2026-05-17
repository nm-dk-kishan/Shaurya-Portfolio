import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

import { Safari, Terminal, Resume , Finder, Text, Image, Contact } from '#windows';
import { Navbar, Welcome, Dock } from '#components';
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  );
};

export default App;