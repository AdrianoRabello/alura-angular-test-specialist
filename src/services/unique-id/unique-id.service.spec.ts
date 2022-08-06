import { UniqueIdService } from "./unique-id.service"


describe(UniqueIdService.name, () => {

    it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} method should generate id  when  called with prefix`, () => {
        const service = new UniqueIdService();
        const id:string = service.generateUniqueIdWithPrefix('app');
        expect(id).toContain('app-');

    })

})