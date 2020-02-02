export const CHANGE_UNIT = 'CHANGE_UNIT';
export const SEARCH_VALUE = 'SEARCH_VALUE';

export const changeUnitAction = () => ({
    type:CHANGE_UNIT,
});

export const searchValueAction = value => ({
    type:SEARCH_VALUE,
    value,
});

