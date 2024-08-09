import { useState } from 'react'
import apiClient from '../utils/api'


const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [message, setMessage] = useState('')

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('profilePic', selectedFile);

    try{
      const response = await apiClient.post('upload-profile-pic', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setMessage('File uploaded successfully: ' + response.data.filePath)
    } catch (error) {
      setMessage('Error uploading file: ' + error)
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Profile