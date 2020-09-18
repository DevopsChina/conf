import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('speaker', () => {
    it('matches the shape of the default data', () => {
        const speakers = Object.values(data['speakers']);
        const keys = [
            'badges',
            'bio',
            'company',
            'companyLogo',
            'companyLogoUrl',
            'country',
            'featured',
            'name',
            'order',
            'photo',
            'photoUrl',
            'pronouns',
            'shortBio',
            'socials',
            'title',
        ];
        expect(speakers).toHaveLength(27);
        expect(allKeys(speakers)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=speaker.test.js.map