declare module "*.scss" {
  const content: Record<string, string>;
  export = content;
}


declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
}