import data from '../../docs/default-firebase-data.json';
import { allKeys } from './utils';
describe('ticket', () => {
    it('matches the shape of the default data', () => {
        const tickets = Object.values(data['tickets']);
        const keys = [
            'available',
            'currency',
            'ends',
            'inDemand',
            'info',
            'name',
            'price',
            'primary',
            'regular',
            'soldOut',
            'starts',
            'url',
        ];
        expect(tickets).toHaveLength(5);
        expect(allKeys(tickets)).toStrictEqual(keys);
    });
});
//# sourceMappingURL=ticket.test.js.map