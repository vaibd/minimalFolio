module.exports = {
  "**/*.ts?(x)": ["prettier --write", "eslint"],
  "**/*.(ts)?(x)": "npm run type-check",
  "./*.md": ["prettier --write"]
}