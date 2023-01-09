export const INSTANT = 'INSTANT';
// export const TOUCH = 'TOUCH';
// export const SELF = 'SELF';
// export const VIEW_FIELD = 'VIEW_FIELD';
export const SPECIAL = 'SPECIAL';

// export const CONE = 'CONE';
// export const AVERAGE = 'AVERAGE';

export const MINUTES = 'MINUTES';
export const HOURS = 'HOURS';

export const FROM_STAT = 'FROM_STAT';
export const WITH_EXTRA = 'WITH_EXTRA';
export const COMPLEX = 'COMPLEX';
// export const WEAPON = 'WEAPON;'
// export const FIXED = 'FIXED;'

export const withUnits = (stat, multiplier=1, unit=null) => ({
    durationType: FROM_STAT,
    stat,
    multiplier,
    unit,
});

export const withExtra = (value, extra=null, unit=null, units=null) => ({
    durationType: WITH_EXTRA,
    value,
    extra,
    unit,
    units,
});

export const complex = (...values) => ({
    durationType: COMPLEX,
    values,
});
