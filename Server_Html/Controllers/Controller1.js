const books = require('../models/books');

exports.getBookID = (req,res,next) => {
    books.findById(req.params,(error,books) =>{
        if (error) next(error);
        req.data = books;
        next();
    });
};

exports.getBooks = (req,res,next) => {
    books.find({},(error,books)=>{
        if (error) next(error);
        req.data = books;
        next();
    })
};

exports.createNewBook = (req, res, next) => {
    let bookParams = new books({
        title: req.body.title,
        Author: req.body.Author,
    });
    bookParams.save((error, savedBook) => {
      if (error) next(error);
      res.locals.redirect = "/admin";
      next();
    })
  };

  exports.deleteBook = (req, res, next) => {
    let _id = req.params.id;
    books.findByIdAndRemove(_id)
      .then(() => {
        res.locals.redirect = "/admin";
        next();
      })};

  exports.redirectView = (req, res, next) => {
    let redirectPath = res.locals.redirect;
    if (redirectPath) res.redirect(redirectPath);
    else next();
  }

  exports.edit = (req,res,next) => {
    let _id = req.params.id;
    books.findOne (_id, function(err,data){
      res.render('edit',{
        books: data
      })
    })
  }
  
exports.update = (req,res) =>
{
  let _id = req.params.id;
  books.findOneAndUpdate(_id, {
    $set:
    {
      title: req.body.title,
      Author: req.body.Author
    }
  })
  .then(() => {
    res.locals.redirect = "/admin";
    next();
  })};