import jwt from 'jsonwebtoken'


const auth = (req , res , next) => {
  const token = req.header("Authorization")

  if(!token){
    return res.status(401).json({
      message:"Unauthorized"
    })
  }

  try{

    const actualToken = token.replace("Bearer" , "")

    const verify = jwt.verify(actualToken , process.env.JWT_SECRET)

    req.user = verify;

    next()

  }catch(err){
    res.status(401).json({
      message:"Invalid Token"
    })
  }
}