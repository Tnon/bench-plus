/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-03-25 18:46:53
 * @LastEditTime: 2022-03-25 18:48:11
 */
import { ExtractPropTypes } from "vue";
export const iconProps = {
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
};
export type IconProps = ExtractPropTypes<typeof iconProps>;
