import { allKeys } from './utils';
describe('feedback', () => {
    it('matches the shape of the default data', () => {
        const feedback = [
            {
                comment: 'Super awesome speaker',
                contentRating: 5,
                styleRating: 5,
            },
        ];
        const keys = ['comment', 'contentRating', 'styleRating'];
        expect(feedback).toHaveLength(1);
        expect(allKeys(feedback)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=feedback.test.js.map