const AccountApi = {
  login: ({username, password}) => ({
    url: '/login',
    method: 'post',
    body: {username, password},
  }),

  logout: () => ({
    url: '/logout',
  }),
};

export default AccountApi;
