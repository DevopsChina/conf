import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('track', () => {
    it('matches the shape of the default data', () => {
        const days = data['schedule']['2016-09-09']['tracks'];
        const keys = ['title'];
        expect(days).toHaveLength(3);
        expect(allKeys(days)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=track.test.js.map