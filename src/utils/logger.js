const winston = require('winston');
const path = require('path');

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
  return isDevelopment ? 'debug' : 'warn';
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

// Tarih-saat formatı
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

// Logların yazılacağı hedefler 
const transports = [
  // Konsola loglama
  new winston.transports.Console(),
  
  // Hataları dosyaya yazma
  new winston.transports.File({
    filename: path.join('logs', 'error.log'),
    level: 'error',
  }),
  
  // Tüm logları dosyaya yazma
  new winston.transports.File({
    filename: path.join('logs', 'all.log'),
  }),
];

// Winston logger nesnesi oluştur
const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

module.exports = logger; 