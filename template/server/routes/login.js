module.exports = {
  match: req => req.url.match(/\/login/),
  response: req => {
    const isCorrect =
      req.body && req.body.username === 'john' && req.body.password === '1234';
    if (isCorrect) {
      return {data: {token: 'token'}};
    } else {
      return {status: 400, data: {message: 'Wrong username or password'}};
    }
  },
};
