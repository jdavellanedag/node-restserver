// ============
// Puerto
// ============
process.env.PORT = process.env.PORT || 3000

// ============
// Entorno
// ============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ============
// Vencimiento del token
// ============
// 60 segundos

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============
// SEED de autenticacion
// ============

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ============
// DB
// ============

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ============
// Google Client ID
// ============

process.env.CLIENT_ID = process.env.CLIENT_ID || '748171488260-s1rojr2emo3o1eqh0sj1qotl94il0om6.apps.googleusercontent.com';