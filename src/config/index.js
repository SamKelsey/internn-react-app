export default process.env.REACT_APP_STAGE === "prod"
  ? require("./config.json")
  : {
      ...require("./config.json"),
      ...require("./config-dev.json"),
    };
