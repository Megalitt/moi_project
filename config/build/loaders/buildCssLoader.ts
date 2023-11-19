import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPatch: string) => resPatch.includes('.module.'),
            localIdentName: isDev 
              ? '[patch][name]__[local]--[hash:base64:5]' 
              : '[hash:base64:8]',
          },
        },
      },
      "sass-loader",
    ],
  };
}