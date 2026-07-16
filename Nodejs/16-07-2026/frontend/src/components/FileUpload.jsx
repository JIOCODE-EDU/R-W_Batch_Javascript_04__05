import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const FileUpload = () => {

  const [file , setFile] = useState(null)
  const [message , setMessage] = useState("")
  const [uploadFile , setUploadFile] = useState(null)

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const onSubmit = async(e) => {
    e.preventDefault()

    if(!file){
      setMessage("Please select a file");
      return;
    }

    const formData = new FormData()

    formData.append("file" , file)

    try{
      const res = await axios.post('http://localhost:3000/upload' , formData , {headers:{'Content-Type':"multipart/form-data"}})

      setMessage(res.data.message)

      setUploadFile(res.data.file)

    }catch{
      setMessage("Upload Failed.")
    }

  }



  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input type="file" onChange={onFileChange} />
          <button type='submit'>Upload</button>
        </form>
        <p>{message}</p>

        {
          uploadFile && (
            <div>
                <h3>Uploded File</h3>
                <p>{uploadFile.originalname}</p>
                <img src={`http://www.localhost:3000/uploads/${uploadFile.filename}`} alt=""/> 
            </div>
          )
        }
      </div>
    
    </>
  )
}

export default FileUpload