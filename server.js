const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(middlewares);

// Регистрация пользователя
server.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const db = router.db;
  const users = db.get('users').value();

  // Проверяем, существует ли пользователь с таким же именем или email
  const existingUser = users.find((user) => user.username === username || user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'Пользователь с таким именем или email уже существует' });
  }

  // Хэшируем пароль перед сохранением
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Создаем нового пользователя
  const newUser = { username, email, password: hashedPassword };
  db.get('users').push(newUser).write();

  res.status(200).json({ message: 'Регистрация прошла успешно' });
});

// Авторизация пользователя
server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const db = router.db;
  const users = db.get('users').value();

  // Проверяем, существует ли пользователь с указанным email
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({ error: 'Неверный email или пароль' });
  }

  // Проверяем правильность пароля
  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    return res.status(400).json({ error: 'Неверный email или пароль' });
  }

  // Создаем JWT-токен
  const token = jwt.sign({ userId: user.id }, 'your-secret-key');

  res.status(200).json({ token });
});

server.get('/products', (req, res) => {
  fs.readFile('products.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Ошибка сервера' });
    }

    const products = JSON.parse(data).products;
    res.status(200).json(products);
  });
});

server.use(router);

const port = 8080;
server.listen(port, () => {
  console.log(`JSON Server запущен на порту ${port}`);
});
