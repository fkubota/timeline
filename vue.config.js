// module.exports = {
//   transpileDependencies: [
//     'vuetify'
//   ]
// }
module.exports = {
  "outputDir": "docs",
  "assetsDir": "./",
  "publicPath": "./",
  "transpileDependencies": [
    "vuetify"
  ],
    pages: {
    index: {
      entry: 'src/main.js', // 必須パラメータ
      title: "fkubota's timeline",
    }
  }
}
