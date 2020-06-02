const screens = {
  MainSwitch: {
    Initial: require('./InitialScreen').default,
    Onboard: require('./OnboardScreen').default,
    Login: require('./LoginScreen').default,
    Home: {
      Home: require('./HomeScreen').default,
      Details: require('./DetailsScreen').default,
    },
  },
  Modal: require('./ModalScreen').default,
};

export default screens;
