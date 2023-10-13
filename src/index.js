import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <header style={{ backgroundColor: 'burgundy', color: 'white', padding: '10px' }}>
        <h1>Horizon Consultants</h1>
      </header>
      <nav style={{ backgroundColor: 'olive', padding: '10px' }}>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="about" style={{ backgroundColor: 'tan', padding: '20px' }}>
        <h2>About Us</h2>
        <p>Our goal is to provide solutions to our clients.</p>
      </section>
      <section id="contact" style={{ backgroundColor: 'navy', padding: '20px', color: 'white' }}>
        <h2>Contact Us</h2>
        <p>Phone: 307-306-5678</p>
        <p>Email: horizon.llc.wy@gmail.com</p>
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
