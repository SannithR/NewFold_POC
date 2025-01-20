import React, { useState } from 'react';
import './PlainLanguageConversion.css'; // Import the CSS for styling

const PlainLanguageConversion = () => {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Question:", question);
    if (file) {
      console.log("File uploaded:", file.name);
    }
    // Add your logic for handling question submission here
  };

  return (
    <div className="chat-container">
      <h1 className="title">PLAIN LANGUAGE CONVERSION</h1>
      
      {/* Main buttons */}
      <div className="button-group">
        <button className="btn">Enter Grade</button>
        <button className="btn">Check Readability</button>
        <button className="btn">Process Folder</button>
      </div>
      
      {/* Chat Input Section */}
      <div className="chat-input-container">
        <label htmlFor="file-upload" className="attachment-btn">
          <img
            src="./Attach.png"
            alt="Attachment"
            className="attachment-icon"
          />
        </label>
        <input
          type="file"
          id="file-upload"
          className="file-input"
          onChange={handleFileChange}
        />
        <input
          type="text"
          className="chat-input"
          placeholder="Ask a question or drop files here"
          value={question}
          onChange={handleQuestionChange}
        />
        <button className="send-btn" onClick={handleSubmit}>
          <img src="./send.png" alt="Send" className="send-icon" />
        </button>
      </div>
      {file && <p className="file-name">Selected file: {file.name}</p>}
    </div>
  );
};

export default PlainLanguageConversion;
