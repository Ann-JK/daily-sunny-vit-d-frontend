const PROXY_CONFIG = [
  {
    context: [
      "/d-vit/uv",
      "/d-vit"
    ],
    target: "http://localhost:8080",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
