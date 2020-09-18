import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('speaker', () => {
    it('matches the shape of the default data', () => {
        const speakers = Object.values(data['previousSpeakers']);
        const keys = [
            'bio',
            'company',
            'companyLogo',
            'country',
            'id',
            'name',
            'order',
            'photoUrl',
            'sessions',
            'socials',
            'title',
        ];
        expect(speakers).toHaveLength(22);
        expect(allKeys(speakers)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=previous-speaker.test.js.map