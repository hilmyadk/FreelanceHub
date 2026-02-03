import User from './models/User.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

// Test database connection and queries
const testDatabase = async () => {
  try {
    console.log('🧪 Testing Database Connection...\n');
    
    // Connect to database
    await connectDB();
    
    // Test 1: Count users
    const userCount = await User.countDocuments();
    console.log(`✅ Total users in database: ${userCount}`);
    
    // Test 2: Find all users (limit 5)
    const users = await User.find().limit(5);
    console.log(`\n📋 Sample users:`);
    users.forEach(user => {
      console.log(`- ${user.nama} (${user.email}) - Role: ${user.role}`);
    });
    
    // Test 3: Find by role
    const customers = await User.countDocuments({ role: 'customer' });
    const freelancers = await User.countDocuments({ role: 'freelancer' });
    console.log(`\n👥 Customers: ${customers}`);
    console.log(`💼 Freelancers: ${freelancers}`);
    
    console.log('\n✅ Database test completed!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database test failed:', error);
    process.exit(1);
  }
};

testDatabase();
