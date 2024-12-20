import { useState } from "react";
import axios from "axios";
import "./Photo.css"; // Import the CSS file

const Photo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle file upload
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("photo", selectedFile);

    // Using axios for file upload
    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        setUploadedFile(response.data.file);
        console.log(response, "Photo upload");
      })
      .catch((error) => {
        alert("Upload failed!", error);
      });
  };

  return (
    <div className="photo-container">
      <h1 className="photo-title">Upload a Photo</h1>
      <input type="file" className="photo-input" onChange={handleFileChange} />
      <button className="photo-button" onClick={handleUpload}>
        Upload
      </button>

      {uploadedFile && (
        <div className="uploaded-file-container">
          <h2 className="uploaded-file-title">Uploaded File:</h2>
          <p className="uploaded-file-name">{uploadedFile.originalname}</p>
        </div>
      )}
    </div>
  );
};

export default Photo;
