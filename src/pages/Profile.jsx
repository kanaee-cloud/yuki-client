import { useState } from 'react';
import apiClient from '../utils/api';

const ProfileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
    } else {
      setFile(null); 
      setPreview(null); 
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file before submitting');
      return;
    }
    
    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      const response = await apiClient.post('/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer dummyToken`, 
        },
      });
      setMessage('Profile image uploaded successfully');
      setPreview(null); 
    } catch (err) {
      if (err.response && err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response ? err.response.data.message : 'An error occurred');
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" onChange={onChange} />
        </div>
        {preview && (
          <div>
            <img src={preview} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          </div>
        )}
        <input type="submit" value="Upload" />
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ProfileUpload;
