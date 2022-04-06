/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-03-25 15:42:23
 * @LastEditTime: 2022-03-25 19:58:27
 */
import { createApp } from "vue";
import App from "./app.vue";
import BIcon from "@bench-plus/components/icon";
const app = createApp(App);
import "@bench-plus/theme/src/index.scss";
app.use(BIcon);
app.mount("#app");
