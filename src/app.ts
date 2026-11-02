import express from 'express';
const app = express();
app.get('/', (_req, res) => res.json({service: 'inventory-service', status: 'running'}));
app.get('/health', (_req, res) => res.json({status: 'UP'}));
app.get('/api/inventory', (_req, res) => res.json([{ sku: 'SKU-001', quantity: 25 }, { sku: 'SKU-002', quantity: 10 }]));
app.listen(Number(process.env.PORT || 3000), '0.0.0.0');
