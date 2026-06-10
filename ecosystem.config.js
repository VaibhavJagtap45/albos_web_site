/**
 * PM2 process config for the standalone Next.js server.
 *
 * Secrets live in .env (which is gitignored). This file reads them in at PM2
 * start time and injects them into the process environment, so nothing
 * sensitive is committed and the standalone server gets DATABASE_URL,
 * RESEND_API_KEY, etc. regardless of how Next loads env at runtime.
 *
 * Usage on the server (from the project root):
 *   pm2 start ecosystem.config.js
 *   pm2 save
 *   pm2 startup        # then run the line it prints (survives reboots)
 */
const fs = require('fs');
const path = require('path');

// Minimal .env parser — no extra dependency needed.
function loadEnv(file) {
  const env = {};
  if (!fs.existsSync(file)) return env;
  for (const raw of fs.readFileSync(file, 'utf8').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    env[key] = val;
  }
  return env;
}

const fileEnv = loadEnv(path.join(__dirname, '.env'));

module.exports = {
  apps: [
    {
      name: 'albos-web',
      script: '.next/standalone/server.js',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_restarts: 10,
      env: {
        NODE_ENV: 'production',
        ...fileEnv,
        // Defaults applied only if not present in .env:
        PORT: fileEnv.PORT || '3000',
        HOSTNAME: fileEnv.HOSTNAME || '127.0.0.1',
      },
    },
  ],
};
