const User =require('../models/Info');

const Contact = (req, res) => {
    const { name, email } = req.body;
  
    // Handle form data as needed, e.g., send an email
    // In this example, we're just sending a JSON response
    const user=new User(name,email);
    user.save();
    const responseMessage = `Form successfully filled by ${name} with email ${email}`;
  
    res.json({ message: responseMessage });
  };
  
  module.exports = Contact;
  