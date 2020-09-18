import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('session', () => {
    it('matches the shape of the default data', () => {
        const sessions = Object.values(data['sessions']);
        const keys = [
            'complexity',
            'description',
            'extend',
            'icon',
            'image',
            'language',
            'presentation',
            'speakers',
            'tags',
            'title',
            'videoId',
        ];
        expect(sessions).toHaveLength(40);
        expect(allKeys(sessions)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=session.test.js.map