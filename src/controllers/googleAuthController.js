const { OAuth2Client } = require("google-auth-library");
const { signinUserWithGoogleIdToken } = require('../services/googleAuthService');

const client = new OAuth2Client('58466193136-8us2mg76l6feads89na899r4p6nq6tfn.apps.googleusercontent.com');

exports.signin = async (req, res) => {
  const { googleIdToken } = req.body;

  try{
    const result = await signinUserWithGoogleIdToken(googleIdToken);

    if (result.error) return res.status(401).json({ message: result.error });
    
    res.json(result);
  } catch (error) { 
    return res.status(500).json({ message: 'error' + JSON.stringify(error) });
  }
};