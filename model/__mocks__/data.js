const faker = require('faker');

   
const contacts = [
    {
    "_id" : faker.random.uuid(),
    "name" : faker.name.firstName(),
    "email" : faker.internet.email(),
    "phone" : faker.phone.phoneNumber(),
    "owner" : "604ca2d92a3a55122c1af5f3",
    
},
{
     "_id" : faker.random.uuid(),
    "name" : faker.name.firstName(),
    "email" : faker.internet.email(),
    "phone" : faker.phone.phoneNumber(),
    "owner" : "604ca2d92a3a55122c1af5f3",
}
]

const newContact = {
  name: faker.name.firstName(),
  email : faker.internet.email(),
  phone : faker.phone.phoneNumber(),
}

// const newContact = {
//   name: 'Paul',
//   email: 'paul@gmail.com',
//   phone: '(066) 958-1642',
//   };

const User = {
   "_id" : faker.random.uuid(),
    "name" : faker.name.firstName(),
    "subscription" : "free",
    "imgIdCloud" : "Photo/owonadfrhtqq4piuqyfb",
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTExZmJlN2FhMTllMzAwYzA0OTkzYSIsImlhdCI6MTYxNjA4NzgyMiwiZXhwIjoxNjE2MDk1MDIyfQ.B4fzzqPlYCW9LTj3nNzXFSzU8eF4pztrCPYSlcnulj0",
    "email" : faker.internet.email(),
    "password" : "$2a$08$4.4iUq6dQcle6Ddtnzn83eKxB8kPEs9v2HXw5zeeV9h4xxi8OwhDW",
    "avatar" : "https://res.cloudinary.com/zhivotenko/image/upload/v1615929525/Photo/owonadfrhtqq4piuqyfb.jpg",
}

const users = []

users[0] = User

const newUser = {
    email: faker.internet.email(),
    password: faker.internet.password()
}

module.exports = { contacts, newContact, User, users, newUser }