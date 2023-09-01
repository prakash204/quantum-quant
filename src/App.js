import './App.css';
import Table from './Table.js';
import UploadCsv from './UploadCsv.js';
import Intel from './Intel.js';
import { useState } from 'react';
import data from './dataSet.js';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <div class="header">
        <div class="logo">
          <span>Quant</span>
        </div>
      </div>
      <div class="body">
      <UploadCsv />
      <Table/>
      </div>
      <div class="footer">
        <div class="footer-content">
          <div class="footer-grid">
            <div class="footer-item">
              <div class="item-heading">Follow Us</div>
              <div class="item-content">
              
              <svg class="icon-instagram" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>

              <svg class="icon-facebook" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>

              <svg class="icon-linkedin" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>

              <svg class="icon-youtube" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>

              </div>
            </div>
            <div class="footer-item">
              <div class="item-heading">Contact Us</div>
              <div class="item-content">
                <a href="mailto:contact@quant.in" style={{textDecoration:'none', color : '#1e3266'}}>contact@quant.in</a></div>
            </div>
          </div>
          <div style={{bottom:"0",padding:"10px"}}>© Designed and developed by Shashi Prakash, Mukul, Abhijith</div>
        </div>
      </div>
    </div>
  );
}

export default App;