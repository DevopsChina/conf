import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('post', () => {
    it('matches the shape of the default data', () => {
        const posts = Object.values(data['blog']);
        const keys = [
            'backgroundColor',
            'brief',
            'content',
            'image',
            'published',
            'source',
            'title',
        ];
        expect(posts).toHaveLength(5);
        expect(allKeys(posts)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=post.test.js.map