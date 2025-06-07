exports.postFormData = (req, res) => {
  const formData = req.body;
  console.log('Form Data Received:', formData);
  
  // Here you can process the form data, e.g., save it to a database

  res.redirect('/contact'); // Redirect to the contact page after form submission
}

exports.getAppointment = (req, res) => {
  res.render('appointment', { title: 'Appointment' });
}
