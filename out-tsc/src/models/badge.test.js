import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('badge', () => {
    it('matches the shape of the default data', () => {
        const badges = Object.values(data['speakers']['dmytro_danylyk']['badges']);
        const keys = ['description', 'link', 'name'];
        expect(badges).toHaveLength(2);
        expect(allKeys(badges)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=badge.test.js.map