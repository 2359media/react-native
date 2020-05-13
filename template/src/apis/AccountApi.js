const AccountApi = {
  login: (username, password) => ({
    url: '/login',
    method: 'post',
    data: {username, password},
  }),

  logout: () => ({
    url: '/logout',
  }),
};

export default AccountApi;
