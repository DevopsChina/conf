import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('logo', () => {
    it('matches the shape of the default data', () => {
        const posts = Object.values(data['partners'][1]['logos']);
        const keys = ['logoUrl', 'name', 'order', 'url'];
        expect(posts).toHaveLength(11);
        expect(allKeys(posts)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=logo.test.js.map