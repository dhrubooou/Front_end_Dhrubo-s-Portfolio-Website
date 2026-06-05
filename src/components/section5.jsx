import React, { useState } from "react";

function Sec5() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [consoleLogs, setConsoleLogs] = useState([]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setConsoleLogs([]);

    const addLog = async (text, delay = 500) => {
      setConsoleLogs((prev) => [...prev, text]);
      await sleep(delay);
    };

    // Create abort controller with a generous 30-second threshold
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 30000);

    try {
      // Run the initial setup console logs sequentially
      await addLog("> ./send_message.sh --payload=client_data", 700);
      await addLog("Resolving SMTP mail gateway: gateway.onrender.com...", 500);
      await addLog("[INFO] Secure TCP handshaking initiated.", 400);
      await addLog("[SECURE] SSL/TLS connection established with Render backend.", 600);
      await addLog("Packaging payload streams in JSON transport formats...", 400);
      
      // Print dispatch message
      await addLog("Dispatching SMTP payload request to dhrubojyoti72@gmail.com...", 600);

      // Determine backend URL from Environment Variable with FormSubmit fallback
      const API_URL = process.env.REACT_APP_API_URL;
      const backendUrl = API_URL ? `${API_URL}/send-email` : "https://formsubmit.co/ajax/dhrubojyoti72@gmail.com";

      await addLog(`Calling API gateway: ${backendUrl}...`, 400);

      const isFormSubmit = backendUrl.includes("formsubmit.co");
      const payload = isFormSubmit ? {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `New Portfolio Message from ${formData.name}`,
        _replyto: formData.email,
        _captcha: "false"
      } : formData;

      // Perform the actual API call with 30s timeout signal
      const res = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      // Clear the timeout if the request succeeds in time!
      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`Server responded with status code ${res.status}`);
      }

      const data = await res.json();
      if (data.success) {
        await addLog("[SUCCESS] Message sent successfully. I'll get back to you soon.", 300);
        setStatus("success");
      } else {
        await addLog("[ERROR] Destination SMTP gateway refused package.", 600);
        await addLog("[INFO] Please verify your fields or reset to try again.", 600);
        setStatus("error");
      }
    } catch (err) {
      clearTimeout(timeoutId); // Make sure timeout is cleared on error
      
      const isTimeout = err.name === "AbortError";
      
      if (isTimeout) {
        await addLog("[ERROR] Rest API gateway connection timeout.", 600);
        await addLog("[INFO] Render server is likely cold-booting from sleeping state.", 600);
      } else {
        await addLog("[ERROR] Failed connection handshake with REST mail gateway.", 600);
      }
      
      await addLog("[FALLBACK] Initializing local browser mail client fallback transfer...", 800);
      setStatus("error");
      console.error(err);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setStatus("idle");
    setConsoleLogs([]);
  };

  return (
    <section className="contactSection" id="contactme">
      <h1>{"/* Get in Touch */"}</h1>
      <div className="contactContainer">
        <div className="contactInfo">
          <h2>~$ cat info.json</h2>
          <pre className="code-block-json">
{`{
  "status": "active_software_developer_at_bluevector_ai",
  "email": "dhrubojyoti72@gmail.com",
  "phone": "+91 7980347474",
  "location": "Kolkata, India"
}`}
          </pre>
        </div>

        <div className="contactFormContainer">
          {status === "idle" && (
            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="form-terminal-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="card-terminal-title">send_message.sh</span>
              </div>
              <input 
                type="text" 
                name="name" 
                placeholder="> enter your name" 
                value={formData.name}
                required 
                onChange={handleChange} 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="> enter your email" 
                value={formData.email}
                required 
                onChange={handleChange} 
              />
              <textarea 
                name="message" 
                rows="5" 
                placeholder="> enter your message..." 
                value={formData.message}
                required 
                onChange={handleChange} 
              ></textarea>
              <button type="submit">git commit -m "send message"</button>
            </form>
          )}

          {(status === "sending" || status === "success" || status === "error") && (
            <div className="terminal-window contact-console-window">
              <div className="terminal-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="terminal-title">mail_console.log</span>
              </div>
              <div className="terminal-body contact-console-body">
                <div className="console-log-lines">
                  {consoleLogs.map((log, index) => (
                    <p key={index} className="console-log-line">
                      {log.startsWith("[SUCCESS]") ? (
                        <span className="terminal-green-text">{log}</span>
                      ) : log.startsWith("[ERROR]") ? (
                        <span className="terminal-red-text">{log}</span>
                      ) : log.startsWith("[WARN]") || log.startsWith("[FALLBACK]") || log.startsWith("[INFO]") ? (
                        <span className="terminal-yellow-text">{log}</span>
                      ) : (
                        <span>{log}</span>
                      )}
                    </p>
                  ))}
                  {status === "sending" && <p className="console-log-cursor-blinking">█</p>}
                </div>
                {(status === "success" || status === "error") && (
                  <button onClick={handleReset} className="console-reset-btn">
                    clear -h --reset
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Sec5;