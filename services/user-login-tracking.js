import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
//Its recommended to initialize 1 prisma instance and pass it down the app

export async function createUser(first_name, last_name, email) {
  try {

    console.log("Creating user: ", email, first_name, last_name);
    const newUser = await prisma.users.create({
      data: {
        first_name,
        last_name,
        email
      },
    });

    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

export async function getAllUsers() {
  try {
    const allUsers = await prisma.users.findMany();
    return allUsers;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function getAllLogs() {
  try {
    const allLogs = await prisma.logs.findMany();
    return allLogs;
  } catch (error) {
    console.error('Error fetching logs:', error);
    throw error;
  }
}

async function logUserLogin(userId) {
  try {
    const loggedAt = new Date();
    const newLog = await prisma.logs.create({
      data: {
        user_id: userId,
        logged_at: loggedAt
      },
    });
    console.log('User login logged successfully');

    return newLog;
  } catch (error) {
    console.error('Error logging user login:', error);
    throw error;
  }
}

async function findUserByEmail(email) { 
  let user = await prisma.users.findUnique({
    where: {
      email: email
    }
  });

  return user;
}

export async function introduceNewUser(firstName, lastName, email) {
  let user = await findUserByEmail(email);
  
  if (!user) {
    user = await createUser(firstName, lastName, email);
  }

  await logUserLogin(user.id);
}

export async function disconnectPrisma() {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error('Error disconnecting Prisma:', error);
    throw error;
  }
}
