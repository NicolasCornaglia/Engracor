

const controller = {
   displayHome: (req,res) => {
      return res.render('index.ejs');
   },
   displayAbout: (req,res) => {
      return res.render("about.ejs");
   },
   displayContact: (req,res) => {
      return res.render("contact.ejs");
   },
   displayProducts: (req,res) => {
      return res.render("products.ejs");
   }

}

module.exports = controller;