import Layout from './components/Layout/Layout';

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <section>Intro</section>
        <section>Projects</section>
        <section>Skills</section>
        <section>Resume</section>
        <section>Contact</section>
      </Layout>
    </div>
  );
}

export default App;
