import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('day', () => {
    it('matches the shape of the default data', () => {
        const days = Object.values(data['schedule']);
        const keys = ['dateReadable', 'timeslots', 'tracks'];
        expect(days).toHaveLength(2);
        expect(allKeys(days)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=day.test.js.map