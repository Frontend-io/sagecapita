const ls = localStorage;
const lsID = '6ftgj';

export const userIsLoggedIn = (): boolean => {
    return !!ls.getItem(lsID);
};

export const loggedInUser = (): void => {
    ls.setItem(lsID, '1');
};

export const loggedOutUser = (): void => {
    ls.removeItem(lsID);
};
