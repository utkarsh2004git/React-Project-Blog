import express from "express";
import router from "./routers/auth-router.js";
import connectDB from "../utils/db.js";
import cors from "cors";
import adminRoute from "./routers/admin-router.js"
const app = express();

// Configure CORS
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
  };
  
  app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", router);
app.use("/api/admin", adminRoute);

const PORT = 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
    });
});
