import Layout from './components/Layout/Layout';
import { Contact, Intro, Projects, Resume, Skills } from './components/Sections'

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Intro />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
