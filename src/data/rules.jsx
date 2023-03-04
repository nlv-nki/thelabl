const rules = () => {
  return {
    login: {
      minLength: 5,
      specChar: false,
    },
    password: {
      minLength: 10,
      specChar: false,
    },

    email: {
      minLength: 5,
      specChar: "@",
    },
  };
};

export default rules();
