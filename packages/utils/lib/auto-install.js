"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoInstall = void 0;
const AutoInstall = (component) => {
    component.install = (app) => {
        app.component(component.name, component);
    };
    return component;
};
exports.AutoInstall = AutoInstall;
