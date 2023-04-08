/** @type {import('next').NextConfig} */

const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
  images: {
    domains: [],
  },
};
