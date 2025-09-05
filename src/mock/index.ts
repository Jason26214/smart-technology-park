import Mock from "mockjs";

Mock.mock("https://www.smartechpark.com/login", "post", (options: any) => {
  const { username, password } = JSON.parse(options.body);
  //console.log("LoginData: ", username, password);

  if (username === "admin" && password === "Admin123!") {
    return {
      code: 200,
      message: "Login Successful",
      data: {
        username: "Admin",
        token: "mocktoken123456admin",
      },
    };
  } else if (username === "manager" && password === "Manager123!") {
    return {
      code: 200,
      message: "Login Successful",
      data: {
        username: "Manager",
        token: "mocktoken123456manager",
      },
    };
  } else if (username === "user" && password === "User123!") {
    return {
      code: 200,
      message: "Login Successful",
      data: {
        username: "User",
        token: "mocktoken123456user",
      },
    };
  } else {
    return {
      code: 401,
      message: "Invalid username or password",
      data: "",
    };
  }
});
