import React from "react";

// Import your icons
import python from "../assets/icons8-python-48.png";
import c from "../assets/icons8-c-50.png";
import javascript from "../assets/icons8-js-48.png";
import html from "../assets/icons8-html-48.png";
import css from "../assets/icons8-css-48.png";
import react from "../assets/icons8-react-50.png";
import nodejs from "../assets/icons8-node-js-48.png";
import github from "../assets/icons8-github-logo-96.png";
import mysql from "../assets/icons8-sql-48.png";
import postgresql from "../assets/icons8-postgresql-48.png";
import dsa from "../assets/icons8-data-structures-32.png";
import algorithm from "../assets/icons8-algorithms-64.png";
import oop from "../assets/icons8-object-oriented-programming-64.png";
import dbms from "../assets/icons8-dbms-64 (1).png";
import os from "../assets/icons8-operating-system-50.png";
import cn from "../assets/icons8-computer-network-48.png";
import express from "../assets/icons8-express-js-48.png";

function Sec4() {
  return (
    <section className="techStackSection" id="techstack">
      <h1>{"/* Tech Stack */"}</h1>
      <p className="system-subtitle">{"// End-to-end journey of a request from browser to database "}</p>
      
      <div className="system-diagram-container">
        
        {/* Step 1: User Actions & Client Browser */}
        <div className="system-node browser-node">
          <div className="node-header request-flow-header">
            <span className="node-status status-active"></span>
            <span className="node-title">step_1: user_browser_ingress</span>
            <span className="node-port">CLIENT SIDE</span>
          </div>
          <div className="node-body">
            <p className="gcp-service-label">{"// user inputs 'dhrubojyoti.dev' into browser search bar"}</p>
            <div className="dns-terminal-output browser-address-bar">
              <p><span className="address-protocol">https://</span> dhrubojyoti.dev <span className="address-status">ENTER ↵</span></p>
            </div>
          </div>
        </div>

        {/* Connection 1: Domain input to DNS Lookup */}
        <div className="system-connector vertical-connector flow-browser-dns">
          <div className="connector-line animated-line"></div>
          <div className="connector-arrow">▼</div>
          <span className="connector-text">1. DNS Lookup Query</span>
        </div>

        {/* Step 2: DNS IP Lookup (No tech stack inside!) */}
        <div className="system-node dns-resolver-node">
          <div className="node-header request-flow-header dns-flow-header">
            <span className="node-status status-active"></span>
            <span className="node-title">step_2: dns_lookup_resolver</span>
            <span className="node-port">NAMESERVER</span>
          </div>
          <div className="node-body dns-body">
            <p className="gcp-service-label">{"// dns server searches records to match CNAME/A records to IP"}</p>
            <div className="dns-terminal-output">
              <p>&gt; nslookup dhrubojyoti.dev</p>
              <p>Searching records... <span className="terminal-green-text">Found!</span></p>
              <p>IP resolved: <span className="terminal-cyan-text">185.199.110.153</span> (Sends IP back to client)</p>
            </div>
          </div>
        </div>

        {/* Connection 2: DNS Returns IP & Browser Sends HTTP Request */}
        <div className="system-connector vertical-connector flow-dns-cdn">
          <div className="connector-line animated-line"></div>
          <div className="connector-arrow">▼</div>
          <span className="connector-text">2. Sends TCP/HTTP Request to IP</span>
        </div>

        {/* Step 3: Web Server / Content Delivery (Serves Frontend) */}
        <div className="system-node cloud-cdn-node">
          <div className="node-header request-flow-header">
            <span className="node-status status-active"></span>
            <span className="node-title">step_3: web_server [serves frontend]</span>
            <span className="node-port">PORT: 443 (HTTPS)</span>
          </div>
          <div className="node-body">
            <p className="gcp-service-label">{"// serves compiled React, HTML & CSS static assets to client"}</p>
            <div className="node-tech-grid">
              <div className="node-tech-item"><img src={html} alt="HTML" /><span>HTML</span></div>
              <div className="node-tech-item"><img src={css} alt="CSS" /><span>CSS</span></div>
              <div className="node-tech-item"><img src={react} alt="React" /><span>React JS</span></div>
            </div>
          </div>
        </div>

        {/* Connection 3: Frontend serves and Client initiates API calls */}
        <div className="system-connector vertical-connector flow-cdn-api">
          <div className="connector-line animated-line"></div>
          <div className="connector-arrow">▼</div>
          <span className="connector-text">3. Fires REST API Requests to Backend</span>
        </div>

        <div className="system-middle-row">
          
          {/* Step 4: API Gateway Router */}
          <div className="system-node api-gateway-node">
            <div className="node-header request-flow-header">
              <span className="node-status status-active"></span>
              <span className="node-title">step_4: api_gateway [proxy & router]</span>
              <span className="node-port">PORT: 8080 (REST)</span>
            </div>
            <div className="node-body">
              <p className="gcp-service-label">{"// authenticates, validates & routes request endpoints"}</p>
              <div className="node-tech-grid">
                <div className="node-tech-item"><img src={nodejs} alt="Node JS" /><span>Node JS</span></div>
                <div className="node-tech-item"><img src={express} alt="Express" /><span>Express</span></div>
                <div className="node-tech-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="node-tech-svg">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                    <line x1="6" y1="6" x2="6.01" y2="6"/>
                    <line x1="6" y1="18" x2="6.01" y2="18"/>
                  </svg>
                  <span>REST APIs</span>
                </div>
                <div className="node-tech-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="node-tech-svg">
                    <polygon points="6 2 18 12 6 22 6 2"/>
                  </svg>
                  <span>Postman</span>
                </div>
              </div>
            </div>
          </div>

          {/* VPC Peering Connector */}
          <div className="system-connector horizontal-connector flow-api-run">
            <div className="connector-line animated-horizontal-line"></div>
            <div className="connector-arrows">&lt; ── &gt;</div>
            <span className="connector-text">4. IPC Logic Dispatch</span>
          </div>

          {/* Step 5: Backend Engine [Business Logic] */}
          <div className="system-node cloud-run-node">
            <div className="node-header request-flow-header">
              <span className="node-status status-active"></span>
              <span className="node-title">step_5: backend_engine [logic engine]</span>
              <span className="node-port">PORT: 5000 (Flask)</span>
            </div>
            <div className="node-body">
              <p className="gcp-service-label">{"// runs core python/c computations, template generation & scripts"}</p>
              <div className="node-tech-grid">
                <div className="node-tech-item"><img src={python} alt="Python" /><span>Python</span></div>
                <div className="node-tech-item"><img src={c} alt="C" /><span>C</span></div>
                <div className="node-tech-item"><img src={javascript} alt="JS" /><span>JavaScript</span></div>
                <div className="node-tech-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="node-tech-svg">
                    <path d="M6 3h12M10 3v5c0 .5-.2 1-.5 1.5L4.1 19.3c-.8 1.1-.1 2.7 1.3 2.7h13.1c1.4 0 2.2-1.6 1.3-2.7L14.5 9.5c-.3-.5-.5-1-.5-1.5V3"/>
                  </svg>
                  <span>Flask</span>
                </div>
                <div className="node-tech-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="node-tech-svg">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                  <span>Jinja2</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Database & DevOps Split Line */}
        <div className="system-connectors-split-row">
          <div className="split-connector-left">
            <div className="connector-line angle-left animated-angle-left"></div>
            <span className="connector-text">5. Fetch / Write DB</span>
          </div>
          <div className="split-connector-right">
            <div className="connector-line angle-right animated-angle-right"></div>
            <span className="connector-text">CI/CD Deploy Pipelines</span>
          </div>
        </div>

        {/* Layer 4: Databases & Build Clusters */}
        <div className="system-bottom-row">
          
          {/* Step 6: Database Storage Persistence */}
          <div className="system-node cloud-sql-node">
            <div className="node-header request-flow-header">
              <span className="node-status status-active"></span>
              <span className="node-title">step_6: database_persistence [data store]</span>
              <span className="node-port">PORT: 5432 (SQL)</span>
            </div>
            <div className="node-body">
              <p className="gcp-service-label">{"// stores transactional records & schema data"}</p>
              <div className="node-tech-grid">
                <div className="node-tech-item"><img src={postgresql} alt="PostgreSQL" /><span>PostgreSQL</span></div>
                <div className="node-tech-item"><img src={mysql} alt="MySQL" /><span>MySQL</span></div>
                
              </div>
            </div>
          </div>

          {/* Infrastructure DevOps */}
          <div className="system-node cloud-build-node">
            <div className="node-header request-flow-header">
              <span className="node-status status-active"></span>
              <span className="node-title">devops_pipelines [build core]</span>
              <span className="node-port">AUTO-DEPLOY</span>
            </div>
            <div className="node-body">
              <p className="gcp-service-label">{"// automates container build clusters upon git updates"}</p>
              <div className="node-tech-grid">
                <div className="node-tech-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="node-tech-svg">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                  <span>GitHub Actions</span>
                </div>
                <div className="node-tech-item"><img src={github} alt="Git" /><span>Git</span></div>
                <div className="node-tech-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="node-tech-svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span>GCP Cloud</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Deep Infrastructure Connector */}
        <div className="system-connector vertical-connector flow-sql-bare">
          <div className="connector-line animated-line"></div>
          <div className="connector-arrow">▼</div>
          <span className="connector-text">Bare Metal Systems Processing Core</span>
        </div>

        {/* Layer 5: Underlying CS foundations (CS Theory) */}
        <div className="system-node compute-engine-node">
          <div className="node-header request-flow-header">
            <span className="node-status status-active"></span>
            <span className="node-title">systems_processing_core [cs_foundations]</span>
            <span className="node-port">ROOT ENGINE</span>
          </div>
          <div className="node-body">
            <p className="gcp-service-label">{"// low-level mathematical & logistical systems driving all active cloud modules"}</p>
            <div className="node-tech-grid">
              <div className="node-tech-item"><img src={dsa} alt="DSA" /><span>Data Structures</span></div>
              <div className="node-tech-item"><img src={algorithm} alt="Algorithms" /><span>Algorithms</span></div>
              <div className="node-tech-item"><img src={oop} alt="OOP" /><span>OOP</span></div>
              <div className="node-tech-item"><img src={os} alt="OS" /><span>Operating Systems</span></div>
              <div className="node-tech-item"><img src={cn} alt="CN" /><span>Computer Networks</span></div>
              <div className="node-tech-item"><img src={dbms} alt="DBMS" /><span>DBMS</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Sec4;