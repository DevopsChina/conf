import { allKeys } from './utils';
describe('hero', () => {
    it('matches the shape of the default data', () => {
        const heros = [
            {
                backgroundColor: '/images/backgrounds/home.jpg',
                backgroundImage: '#673ab7',
                fontColor: '#fff',
                hideLogo: true,
            },
        ];
        const keys = ['backgroundColor', 'backgroundImage', 'fontColor', 'hideLogo'];
        expect(heros).toHaveLength(1);
        expect(allKeys(heros)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=hero.test.js.map