import React from 'react';
import './App.css';
import html2pdf from 'html2pdf.js';

function App() {
  const handleDownload = () => {
    const element = document.getElementById('resume');
    const opt = {
      margin:       0.5,
      filename:     'Ajay_Kumar_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div>
      <div id="resume" className="resume">
        <header>
          <h1>AJAY KUMAR</h1>
          <p>
            <span>📞 +91 7781031768</span> ⋄ <span> 📍Bangalore, India</span>
          </p>
          <p>
            <a href="mailto:ajaykrdtg5@gmail.com">ajaykrdtg5@gmail.com</a> ⋄
            <a href="https://linkedin.com/in/ajaykumar7781">linkedin.com/in/ajaykumar7781</a> ⋄
            <a href="https://github.com/ajaykumar776">github.com/ajaykumar776</a>
          </p>
        </header>
        <section>
          <h2>OBJECTIVE</h2>
          <p>Software Engineer with over all 3+ years of experience in Software development, seeking full-time software engineering roles.</p>
        </section>
        <section>
          <h2>EDUCATION</h2>
          <p>Bachelor of Science (BSC-Computer Science), Bangalore University, Bangalore, India July 2019 - Oct 2022</p>
        </section>
        <section>
          <h2>SKILLS</h2>
          <p><strong>Backend Skills </strong>: Node.js, Express.js, PHP, Laravel, CodeIgniter</p>
          <p><strong>Frontend Skills </strong>: JavaScript, React.js, Vue.js, Ajax, jQuery</p>
          <p><strong>Database Skills </strong>: SQL, MySQL, Postgres</p>
          <p><strong>Extra Skills </strong>: APIs, Payment Gateways, Time Management, Adaptability, Problem Solving, Teamwork</p>
        </section>
        <section>
          <h2>EXPERIENCE</h2>
          <h3>Software Engineer</h3>
          <p><b>Floatr Fintech</b> , Bangalore, India | Nov 2022 - Mar 2024</p>
          <ul>
            <li>Developed and maintained the administration panel focusing on robust authentication systems to ensure high-level security for sensitive financial data and payments.</li>
            <li>Worked extensively with MVC architecture with PHP, Node.js, Laravel, React.js.</li>
            <li>Contributed to the design and functionality of the admin panel for managing multiple data streams related to payments.</li>
            <li>Created an Access Control System based on Role, contributing in both Backend and Frontend.</li>
            <li>Created a Promotions Module using standard architecture to give coupons and discounts to users.</li>
          </ul>
          <h3>Fullstack Engineer</h3>
          <p><b>Redgates IT Solution</b> , Delhi, India | July 2021 - Oct 2022 </p>
          <ul>
            <li>Worked on a multi-school management system encompassing various modules such as fee transactions, different role-logins, and implementing payment gateways.</li>
            <li>Developed and maintained the admin portal from end to end, ensuring seamless user experience and high functionality.</li>
            <li>Utilized technologies including PHP, Laravel, Livewire, Inertia, Tailwind CSS, HTML, CSS, JavaScript, Vue.js, REST/API, and JWT.</li>
            <li>Provided web application services and app services across India, ensuring the most effective service system in the world.</li>
          </ul>
          <h3>Software Engineer Intern</h3>
          <p><b>Pixaflip Technologies Pvt Ltd</b> , Pune, India | Mar 2021 - July 2021 </p>
          <ul>
            <li>Worked on a real-estate management system, building it from scratch and managing everything from end to end.</li>
            <li>Contributed to the hospital management system, focusing on the billing system and transaction details.</li>
            <li>Handled billing, including creating and managing unpaid and paid bills for customers, and generating doctor commissions based on bill items.</li>
          </ul>
        </section>
        <section>
          <h2>PROJECTS</h2>
          <div className="project">
            <h3>Blog Website</h3>
            <p><a href="https://blog.nfraz.co.in">Live Link</a></p>
          </div>
          <ul>
            <li>Developed an API-based blog website.</li>
            <li><strong>Technologies Used </strong>: PHP, Laravel, SQL, JWT, HTML, CSS, Bootstrap, Vue.js</li>
          </ul>
          <div className="project">
            <h3>E-commerce Site</h3>
            <p><a href="https://dinars-ecom.web.app/">Live Link</a></p>
          </div>
          <ul>
            <li>Built an e-commerce site for watches with real-time functionality.</li>
            <li><strong>Technologies Used </strong>: React.js, Firebase, Retool</li>
          </ul>
          <div className="project">
            <h3>Group Chat Application</h3>
            <p><a href="https://floatr-chit-chat.web.app/">Live Link</a></p>
          </div>
          <ul>
            <li>Created a group chat application for casual communication.</li>
            <li><strong><strong>Technologies Used </strong> </strong>:React.js,Firebase</li>
          </ul>
        </section>
        <section>
          <h2>EXTRA-CURRICULAR ACTIVITIES</h2>
          <ul>
            <li>Served as Class Representative (CR) in my batch, handling leadership responsibilities and coordinating between students and faculty.</li>
            <li>Won first prize in a college coding competition hackathon, receiving a medal and certificate.</li>
          </ul>
        </section>
      </div>
      <button onClick={handleDownload} className="download-btn">Download as PDF</button>
    </div>
  );
}

export default App;
