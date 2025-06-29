require('dotenv').config();
const app = require('./src/app');
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
