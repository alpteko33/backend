require('dotenv').config();

// Database connection test
async function testDatabaseConnection() {
  try {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    await prisma.$connect();
    console.log('✅ Database bağlantısı başarılı');
    await prisma.$disconnect();
  } catch (error) {
    console.error('❌ Database bağlantı hatası:', error.message);
    console.error('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not Set');
    throw error;
  }
}

async function startServer() {
  try {
    // Test database connection
    await testDatabaseConnection();
    
    const app = require('./src/app');
    const port = process.env.PORT || 3000;

    // Start server
    const server = app.listen(port, () => {
      console.log(`✅ Sunucu ${port} portunda çalışıyor`);
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err) => {
      console.error('❌ Unhandled Promise Rejection:', err.message);
      server.close(() => {
        process.exit(1);
      });
    });

  } catch (error) {
    console.error('❌ Server başlatma hatası:', error.message);
    process.exit(1);
  }
}

// For Vercel serverless
if (process.env.VERCEL) {
  module.exports = require('./src/app');
} else {
  startServer();
}
