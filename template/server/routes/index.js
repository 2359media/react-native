const routes = [require('./login'), require('./todos')];

const fallbackRoute = {response: () => ({})};

module.exports = req => {
  const route = routes.find(r => r.match(req)) || fallbackRoute;
  const {status = 200, data} = route.response(req);
  return {status, data};
};
