# MongoDB Atlas Connection Fix Guide

## Problem
Your application shows "Invalid credentials" when trying to login, but the real issue is that it **cannot connect to MongoDB Atlas**. The error shows:

```
MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster
```

## Root Cause
Your current IP address is not whitelisted in MongoDB Atlas, so the database rejects the connection.

## Solution: Whitelist Your IP Address

### Step 1: Go to MongoDB Atlas
1. Visit [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. Log in with your account (username: car)

### Step 2: Navigate to Network Access
1. Click on your cluster name "Car"
2. In the left sidebar, click **"Network Access"** (under Security section)

### Step 3: Add Your IP Address
1. Click **"Add IP Address"** button
2. You have two options:

   **Option A: Add Current IP (Recommended for testing)**
   - Click **"Add Current IP Address"**
   - It will automatically detect your IP
   - Add a comment like "Development Machine"
   - Click **"Confirm"**

   **Option B: Allow Access from Anywhere (Not recommended for production)**
   - Click **"Allow Access from Anywhere"**
   - This adds `0.0.0.0/0` which allows all IPs
   - Only use this for testing, never in production
   - Click **"Confirm"**

### Step 4: Wait for Changes to Apply
- It takes 1-2 minutes for the changes to propagate
- Wait until the status shows "Active"

### Step 5: Restart Your Application
```bash
# Stop the current running server (Ctrl+C in terminal)
# Then restart:
cd maple-ford-school && npm run dev
```

## Verify the Fix

After whitelisting your IP and restarting:

1. **Check Server Logs**
   - You should see: `MongoDB connected`
   - You should NOT see connection errors

2. **Test Login**
   - Go to your admin panel
   - Try logging in with:
     - Username: `admin`
     - Password: `admin123`
   - It should work now!

## Alternative: Use Environment-Based IP Whitelisting

If your IP changes frequently (like on mobile networks), consider:

1. **Deploying to a cloud service** with a static IP
2. **Using MongoDB's VPC Peering** for cloud deployments
3. **Adding multiple common IPs** you use

## Current Connection String
Your app is using: `car.l3zw2eq.mongodb.net/maplefordschool`

## Troubleshooting

If it still doesn't work:

1. **Check your IP changed**: Your IP might have changed since whitelisting
   - Check current IP: [https://whatismyipaddress.com](https://whatismyipaddress.com)
   - Add it to MongoDB Atlas

2. **Verify connection string**: Check [`backend/.env`](backend/.env:1)
   - Should be: `mongodb+srv://car:Aman5413@car.l3zw2eq.mongodb.net/...`

3. **Check MongoDB Atlas status**: 
   - Visit [https://status.mongodb.com](https://status.mongodb.com)
   - Ensure no outages

4. **Create admin user**: If you haven't created the admin user yet:
   ```bash
   cd maple-ford-school
   node scripts/create-admin.js
   ```

## Security Note
- Never commit your `.env` file with credentials to version control
- Use strong passwords in production
- Restrict IP access to only necessary IPs in production