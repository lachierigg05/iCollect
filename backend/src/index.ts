import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/api/health', (req: Request, res: Response) => {
    res.json({status: 'Backend is running!', timestamp: new Date()})
});

// Starts Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})