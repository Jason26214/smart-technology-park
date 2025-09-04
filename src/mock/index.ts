import Mock from "mockjs";

Mock.mock("https://www.smartechpark.com/login", "post", (options) => {
  return {
    code: 401,
    message: "Login failed",
    data: {
      username: "Jack",
      token: "mocktoken123456admin",
    },
  };
});
