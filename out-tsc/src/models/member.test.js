import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('partner', () => {
    it('matches the shape of the default data', () => {
        const members = Object.values(data['team'][0]['members']);
        const keys = ['name', 'order', 'photo', 'photoUrl', 'socials', 'title'];
        expect(members).toHaveLength(8);
        expect(allKeys(members)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=member.test.js.map