import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@greatnile.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Swasthika',
    email: 'swasthika@greatnile.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'CEO',
    email: 'ceo@greatnile.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
