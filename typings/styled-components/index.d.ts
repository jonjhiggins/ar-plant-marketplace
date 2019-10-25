import "styled-components";
import { SimpleInterpolation } from "styled-components";
// import {StyleSizes} from "../../src/types"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      bodyText: string;
      borderGrey: string;
    };
    shadow: string;
    text: StyleSizes;
  }
}
