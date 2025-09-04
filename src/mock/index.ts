import Mock from "mockjs";

Mock.mock("https://www.smartechpark.com/login", "post", () => {
  return {
    code: 200,
    message: "Login Successful",
    data: {
      username: "Jack",
      token: "mocktoken123456admin",
    },
  };
});
