const { post } = require("superagent");
require("dotenv").config();

const query = `query {
  viewer {
    login
  }
}`;

const token = process.env.GITHUB_TOKEN;
const headers = {
  "User-Agent": "superagent",
  Authorization: `Bearer ${token}`,
};

async function main() {
  const { body } = await post("https://api.github.com/graphql")
    .set(headers)
    .send({ query });

  console.log(body);
}

main();
