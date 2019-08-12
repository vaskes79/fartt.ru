"use strict"

const autoprefixer = require("autoprefixer")
const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = [
  postcssPresetEnv({
    stage: 0,
  }),
  autoprefixer(),
]
