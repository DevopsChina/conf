import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('timeslot', () => {
    it('matches the shape of the default data', () => {
        const days = data['schedule']['2016-09-09']['timeslots'];
        const keys = ['endTime', 'sessions', 'startTime'];
        expect(days).toHaveLength(13);
        expect(allKeys(days)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=timeslot.test.js.map