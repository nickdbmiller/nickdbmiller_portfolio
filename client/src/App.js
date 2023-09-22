import { useState } from 'react'

import Layout from './components/Layout/Layout';
import { Contact, Intro, Projects, Resume, Skills } from './components/Sections'

import './App.css';

function App() {
  const [modalToggle, setModalToggle] = useState(false)

  return (
    <div className="font-raleway">
      <Layout
        modalToggle = {modalToggle}
        setModalToggle = {setModalToggle}
      >
        <Intro />
        <Skills />
        <Contact
          modalToggle = {modalToggle}
          setModalToggle = {setModalToggle}
        />
      </Layout>
    </div>
  );
}

export default App;
