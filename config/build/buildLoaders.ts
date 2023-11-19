import { buildCssLoader } from "./loaders/buildCssLoader";
import { BuildOptions } from "./types/config";
import webpack from "webpack";

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const cssLoader = buildCssLoader(isDev);

  const babelLoader =  {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            "i18next-extract", 
            {
              locales: ["ru", "en"],
              keyAsDefaultValue: true,
            }
          ],
        ]
      }
    }
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    // test: /\.m?ts$|\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    babelLoader,
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader, 
  ]
};
