


export const config = {
  mongoDB: {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    db:   process.env.MONGODB_NAME,
    host: process.env.MONGODB_HOST
  }
};