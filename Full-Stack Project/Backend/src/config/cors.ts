import type { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [process.env.FRONTEND_URL];

    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS restriction"), false);
    }
  },
<<<<<<< HEAD
=======
  
>>>>>>> cfdabaebd685b87a703514425d9c2efe9792515e
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  credentials: true,
};

export default corsOptions;
