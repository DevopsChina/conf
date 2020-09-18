export const isAuthenticated = (user) => {
    return user.signedIn;
};
export const isUnauthenticated = (user) => {
    return !user.signedIn;
};
//# sourceMappingURL=user.js.map