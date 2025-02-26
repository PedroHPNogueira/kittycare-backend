const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, GOOGLE_CLIENT_ID } = require("../config/config");

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const signinUserWithGoogleIdToken = async (googleIdToken) => {
  try {
    const data = await client.verifyIdToken({
      idToken: googleIdToken,
      audience: GOOGLE_CLIENT_ID,
    });
  
    const payload = data.getPayload();

    // Generate the JWT token
    const tokenPayload = {
      email: payload.email,
      full_name: payload.name,
      picture: payload.picture,
    };
    const expiresIn = "7d";
    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn });

    return { token, expiresIn, googleUser: payload };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  signinUserWithGoogleIdToken
};