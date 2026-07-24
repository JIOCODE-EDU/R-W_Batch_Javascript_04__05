import jwt from 'jsonwebtoken'

export const auth = (req , res , next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader ? authHeader.replace(/^Bearer\s+/i, "") : req.cookies?.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verify;
    next();
  } catch (err) {
    res.status(401).json({
      message: "Invalid Token"
    });
  }
};
