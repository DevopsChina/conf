import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('video', () => {
    it('matches the shape of the default data', () => {
        const videos = Object.values(data['videos']);
        const keys = ['speakers', 'thumbnail', 'title', 'youtubeId'];
        expect(videos).toHaveLength(22);
        expect(allKeys(videos)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=video.test.js.map