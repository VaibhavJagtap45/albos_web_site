#!/usr/bin/env bash
#
# One-shot deploy for the CyberPanel (Linux) server.
# Run from the project root:
#   bash deploy.sh
#
# It installs deps, generates the Prisma client, builds the standalone output,
# copies the runtime bits Next doesn't auto-bundle, and (re)starts PM2.
#
set -euo pipefail
cd "$(dirname "$0")"

echo "==> [1/5] Installing dependencies..."
npm install

echo "==> [2/5] Generating Prisma client..."
npx prisma generate
# First deploy only / after schema changes, uncomment to sync the SQLite schema:
# npx prisma db push

echo "==> [3/5] Building (next build + copy standalone assets)..."
npm run build

echo "==> [4/5] Copying runtime files into the standalone output..."
# Prisma's engine/client aren't always traced into the standalone bundle, so
# copy them in explicitly. Remove-then-copy keeps this idempotent across redeploys.
mkdir -p .next/standalone/node_modules
rm -rf .next/standalone/node_modules/.prisma
cp -r node_modules/.prisma .next/standalone/node_modules/.prisma
# Copy .env alongside server.js as a runtime fallback.
if [ -f .env ]; then
  cp .env .next/standalone/.env
fi

echo "==> [5/5] (Re)starting with PM2..."
if pm2 describe albos-web > /dev/null 2>&1; then
  pm2 restart albos-web --update-env
else
  pm2 start ecosystem.config.js
fi
pm2 save

echo ""
echo "==> Done. Useful commands:"
echo "     pm2 status"
echo "     pm2 logs albos-web"
echo "     curl http://127.0.0.1:3000   # quick sanity check"
