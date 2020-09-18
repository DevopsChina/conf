import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('speaker', () => {
    it('matches the shape of the default data', () => {
        const socials = Object.values(data['speakers']['aleksander_piotrowski']['socials']);
        const keys = ['icon', 'link', 'name'];
        expect(socials).toHaveLength(4);
        expect(allKeys(socials)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=social.test.js.map