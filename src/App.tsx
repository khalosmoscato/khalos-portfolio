import React from 'react';
import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
import About from '@pages/About';
import Projects from '@pages/Projects';
import Contact from '@pages/Contact';

// Put pages in order - main layout handles header/footer.
const App: React.FC = () => (
  <MainLayout>
    <Home />
    <About />
    <Projects />
    <Contact />
  </MainLayout>
);

export default App;
