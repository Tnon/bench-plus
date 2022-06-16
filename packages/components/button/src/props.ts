/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-03-25 18:46:53
 * @LastEditTime: 2022-03-25 18:48:11
 */
import { ExtractPropTypes, PropType } from "vue";
export const buttonProps = {
  type: {
    type: String as PropType<"danger" | "success">,
  },
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
