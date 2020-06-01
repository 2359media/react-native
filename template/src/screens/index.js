const screens = {
  MainSwitch: {
    Initial: require('./InitialScreen').default,
    Onboard: require('./OnboardScreen').default,
    Login: require('./LoginScreen').default,
  },
  Modal: require('./ModalScreen').default,
};

export default screens;
