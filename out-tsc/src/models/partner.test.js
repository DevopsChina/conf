import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('partner', () => {
    it('matches the shape of the default data', () => {
        const partner = Object.values(data['partners']);
        const keys = ['logos', 'order', 'title'];
        expect(partner).toHaveLength(2);
        expect(allKeys(partner)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=partner.test.js.map