export const bindTo = (...args) => context => {
    args.forEach(arg => context[arg] = context[arg].bind(context));
};

export const randomizeHandTypes = handTypesCount =>
        Math.floor(Math.random() * handTypesCount);