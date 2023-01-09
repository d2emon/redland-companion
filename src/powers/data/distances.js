export const TOUCH = 'TOUCH';
export const SELF = 'SELF';
export const VIEW_FIELD = 'VIEW_FIELD';
export const SPECIAL = 'SPECIAL';

export const CONE = 'CONE';
export const AVERAGE = 'AVERAGE';

export const METERS = 'METERS';
export const KILOMETERS = 'KILOMETERS';

export const FROM_STAT = 'FROM_STAT';
export const WEAPON = 'WEAPON;'
export const FIXED = 'FIXED;'

export const withUnits = (stat, multiplier=1, unit=null) => ({
    distanceType: FROM_STAT,
    stat,
    multiplier,
    unit,
});

export const weapon = (...ranges) => ({
    distanceType: WEAPON,
    ranges,
});

export const fixed = (distance) => ({
    distanceType: FIXED,
    distance,
});
