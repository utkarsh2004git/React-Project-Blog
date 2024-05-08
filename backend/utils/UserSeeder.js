import 'dotenv/config';
import mongoose from 'mongoose';
import User from "../src/models/user-model.js";
import bcrypt from "bcryptjs"

const { DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_NAME } = process.env;

if (!DATABASE_USERNAME || !DATABASE_PASSWORD || !DATABASE_HOST || !DATABASE_NAME) {
  throw new Error('Missing required environment variables!');
}

const url = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/?retryWrites=true&w=majority`;
const options = {
  dbName: DATABASE_NAME,
};

(async () => {
  try {
    await mongoose.connect(url, options);

    let users=[];
    const user1={
      name: `utkarsh`,
      email: `utkarsh@123`,
      password: '123',
      gender:'Male', 
      role: 'Admin',
    }
    users.push(user1);


    for (let i = 0; i < 20; i++) {
      const user = {
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        password: 'password123', 
        gender: i % 2 === 0 ? 'Male' : 'Female', 
        role: i %4 === 0 ? 'Admin' : 'User',
      };
      users.push(user);
    }

    // Clear existing users (optional)
    await User.deleteMany({});

    // Hash passwords before saving
    for (const user of users) {
      user.password = await bcrypt.hash(user.password, 10);
    }

    // Save each user to the database
    await User.insertMany(users);

    console.log('Users seeded successfully!');
    process.exit(0); // Exit process after seeding

  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1); // Exit with error code
  }
})();
