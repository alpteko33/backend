const winston = require('winston');

// Loglama düzeyleri
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Çalışma ortamına göre log seviyesi belirle
const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'info';
};

// Özel renk formatları
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue',
};

winston.addColors(colors);

// Vercel/Serverless için format (renkli console çıktısı)
const consoleFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

// Production/Vercel için format (JSON çıktısı)
const productionFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

// Ortama göre format seçimi
const logFormat = process.env.VERCEL || process.env.NODE_ENV === 'production'
  ? productionFormat
  : consoleFormat;

// Logların yazılacağı hedefler (SADECE CONSOLE - Vercel uyumlu)
const transports = [
  new winston.transports.Console({
    level: level(),
    handleExceptions: true,
    handleRejections: true
  })
];

// Winston logger nesnesi oluştur
const logger = winston.createLogger({
  level: level(),
  levels,
  format: logFormat,
  transports,
  exitOnError: false
});

// Production'da unhandled exception'ları yakala
if (process.env.NODE_ENV === 'production') {
  logger.exceptions.handle(
    new winston.transports.Console({
      format: winston.format.json()
    })
  );
}

module.exports = logger; 