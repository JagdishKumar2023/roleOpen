import { useState } from "react";
import axios from "axios";

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
    <div>
      <h1>Upload a Photo</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {uploadedFile && (
        <div>
          <h2>Uploaded File:</h2>
          <p>{uploadedFile.originalname}</p>
        </div>
      )}
    </div>
  );
};

export default Photo;
