import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
//ITS RECOMMENDED TO CREATE 1 PRISMA INSTANCE ACROSS THE APP

export async function createUser(firstName, lastName, email) {
  try {
    await prisma.users.create({
      data: {
        firstName,
        lastName,
        email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
    });
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

export async function disconnectPrisma() {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error('Error disconnecting Prisma:', error);
    throw error;
  }
}
