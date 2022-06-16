export const AutoInstall = (component) => {
    component.install = (app) => {
        app.component(component.name, component);
    };
    return component;
};
