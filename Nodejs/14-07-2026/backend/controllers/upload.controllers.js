const uploadFile = (req , res) => {
  
  if(!req.file){
    return res.status(400).json({message:"No file Uploaded."})
  }

  res.json({
    message:"File Upload successfully",
    file:req.file
  })
}

export default uploadFile