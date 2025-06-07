exports.getHome = (req, res) => {
  res.render('index', { title: 'Home' });
};

exports.getAbout = (req, res) => {
  res.render('about', { title: 'About' });
};

exports.getServices = (req, res) => {
  res.render('services', { title: 'Services' });
};

exports.getEvents = (req, res) => {
  res.render('events', { title: 'Events' });
};
exports.getYoutube = (req, res) => {
  res.render('youtube', { title: 'YouTube' });
};  
exports.getContact = (req, res) => {
  res.render('contact', { title: 'Contact' });
};      

