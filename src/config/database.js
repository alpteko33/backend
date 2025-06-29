const { PrismaClient } = require('@prisma/client');
const logger = require('../utils/logger');

// Vercel'de cold start durumlarını iyileştirmek için connection pooling kullanımı
const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query'
    },
    {
      emit: 'event',
      level: 'error'
    }
  ]
});

// Log event handlers
prisma.$on('query', (e) => {
  logger.debug(`Sorgu: ${e.query}`);
});

prisma.$on('error', (e) => {
  logger.error(`Veritabanı hatası: ${e.message}`);
});

// Development ortamında global nesne üzerinde tutalım
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

module.exports = prisma; 