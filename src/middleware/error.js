const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Bir hata oluştu';
  const error = process.env.NODE_ENV === 'development' ? err : {};

  res.status(statusCode).json({
    success: false,
    message,
    error
  });
};

module.exports = {
  errorHandler
}; 