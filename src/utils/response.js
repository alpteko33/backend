const successResponse = (res, data, message = 'İşlem başarılı', statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

const errorResponse = (res, message = 'Bir hata oluştu', statusCode = 500, error = {}) => {
  res.status(statusCode).json({
    success: false,
    message,
    error: process.env.NODE_ENV === 'development' ? error : {}
  });
};

module.exports = {
  successResponse,
  errorResponse
}; 