module.exports = {
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": "svelte-jester"
  },
  "moduleFileExtensions": [
    "js",
    "svelte"
  ],
  "moduleNameMapper": {
    "^.+\\.css$": "identity-obj-proxy"
  }
}