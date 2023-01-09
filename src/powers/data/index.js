import powers from './powers';

const loadPowers = async () => powers.map((power, powerId) => ({
    powerId,
    ...power,
}));

export default loadPowers;
