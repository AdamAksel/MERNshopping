import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'adminuser',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'userno1',
    email: 'userno1@user.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'userno2',
    email: 'userno2@user.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
