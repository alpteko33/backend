const { PrismaClient } = require('@prisma/client');

// Vercel'de cold start durumlarını iyileştirmek için connection pooling kullanımı
const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

module.exports = prisma;
