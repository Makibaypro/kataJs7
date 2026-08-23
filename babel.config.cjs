// Permet à Jest de comprendre les import/export.
// Tu n'as pas besoin d'y toucher.
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
}
