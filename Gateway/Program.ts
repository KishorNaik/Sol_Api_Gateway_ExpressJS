import express from 'express';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const app = express();

app.use('/api/customer', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/api/product', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.listen(3000,()=> console.log("Gateway is Start"));