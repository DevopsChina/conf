import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('partner', () => {
    it('matches the shape of the default data', () => {
        const teams = Object.values(data['team']);
        const keys = ['members', 'title'];
        expect(teams).toHaveLength(2);
        expect(allKeys(teams)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=team.test.js.map