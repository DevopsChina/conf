import 'core-js/features/array/flat-map';
export const allKeys = (values) => {
    const keys = values.flatMap((value) => Object.keys(value));
    return [...new Set(keys)].sort();
};
//# sourceMappingURL=utils.js.map