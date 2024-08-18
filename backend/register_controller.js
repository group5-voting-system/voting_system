
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');

const knex = require('knex');
const knexfile = require('../knexfile');
const db = knex(knexfile.development);


function generateRandomPassword(length = 4) {
  return crypto.randomBytes(length).toString('base64').slice(0, length);
}

async function sendEmail(to, subject, html) {
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "Elect_site@outlook.com",
      pass: "A12qw34er"
    }
  });

  const mailOptions = {
    from: "Elect_site@outlook.com",
    to,
    subject,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (err) {
    console.error("Error sending email: " + err.message);
    throw err;
  }
}

exports.sign_up = async (req, res) => {
  // const db = req.app.locals.db;
  const { nid, email } = req.body;


  try {
    const user = await db('USERS')
      .select('*')
      .where('N_Id', nid)
      .first();


    if (user && user.password) {
      res.json("password");
    } else {
      const random_pass = generateRandomPassword();
      const temporary_pass = `password-${random_pass}`;
      const html = `
        <h3>Hello</h3>
        <h4>Your temporary password : ${temporary_pass} </h4>
      `;

      await sendEmail(email, "First login", html);

      await db('USERS')
        .where('N_Id', nid)
        .update({
          otp: temporary_pass,
        });

      res.json("otp");
    }
  } catch (error) {
    console.error('Error in sign_up:', error.message);
    res.status(500).json("Error occurred");
  }
};

exports.log_in = async (req, res) => {
  // const db = req.app.locals.db;
  const { nid, pass } = req.body;

  console.log("inside log in");
  try {
    const user = await db('USERS')
      .select('*')
      .where('N_Id', nid)
      .first();

    if (user && await bcrypt.compare(pass, user.password)) {
      const token = jwt.sign(user, "tegthtyh3c25d5a5ddfdfd", { expiresIn: '1h' });

      await db('USERS')
        .where('N_Id', nid)
        .update({
          token: token,
        });

      console.log("Log in successfully :) !!");



      res.json({ token });
      // res.status(200).json({ message: "Login successful", token: token });
    } else {
      console.log("Log in error somthing wrong !!");
      res.status(401).json("Invalid credentials");
    }
    // console.log("end of try");
  } catch (error) {
    console.error('Error in log_in:', error.message);
    res.status(500).json("Error occurred");
  }
};


// exports.log_in = async (req, res) => {
//   const { nid, pass } = req.body;

//   console.log("inside log in");
//   try {
//     const user = await db('USERS')
//       .select('*')
//       .where('N_Id', nid)
//       .first();

//     if (user && await bcrypt.compare(pass, user.password)) {
//       const token = jwt.sign(user, "tegthtyh3c25d5a5ddfdfd", { expiresIn: '1h' });

//       await db('USERS')
//         .where('N_Id', nid)
//         .update({
//           token: token,
//         });

//       console.log("Log in successfully :) !!");

//       // Send the token as part of the response
//       res.status(200).json({ message: "Login successful", token: token });
//     } else {
//       console.log("Log in error: Something went wrong !!");
//       res.status(401).json("Invalid credentials");
//     }
//   } catch (error) {
//     console.error('Error in log_in:', error.message);
//     res.status(500).json("Error occurred");
//   }
// };


exports.log_in_new = async (req, res) => {
  // const db = req.app.locals.db;
  const { nid, otp } = req.body;
  console.log(nid, otp);

  try {
    const user = await db('USERS')
      .select('*')
      .where('N_Id', nid)
      .first();

    // console.log(user);
    // console.log("here !!! up");
    console.log(user.otp + "==" + otp);
    if (user && user.otp === otp) {
      res.json("matched");
    } else {
      res.json("not-matched");
    }
  } catch (error) {
    console.error('Error in log_in_new:', error.message);
    res.status(500).json("Error occurred");
  }
};

exports.set_new_pass = async (req, res) => {
  // const db = req.app.locals.db;
  const { nid, pass } = req.body;

  console.log("inside set pass");

  try {
    const salt = await bcrypt.genSalt();
    const hashed_password = await bcrypt.hash(pass, salt);

    console.log("down");
    await db('USERS')
      .where('N_Id', nid)
      .update({
        password: hashed_password,
        otp: null
      });
    console.log("up");


    res.json("Password updated successfully");
  } catch (error) {
    console.error('Error in set_new_pass:', error.message);
    res.status(500).json("Error occurred");
  }
};

exports.get_data = async (req, res) => {
  // const db = req.app.locals.db;
  const { nid } = req.body;

  try {
    const user = await db('USERS')
      .select('*')
      .where('N_Id', nid)
      .first();

    if (user) {
      // Remove sensitive information before sending
      delete user.Password;
      delete user.otp;
      res.json(user);
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    console.error('Error in get_data:', error.message);
    res.status(500).json("Error occurred");
  }
};