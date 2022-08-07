import { UniqueIdService } from "./unique-id.service"


describe(UniqueIdService.name, () => {

    let service = null;
    beforeEach(() => {
        service = new UniqueIdService();
    })

    it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} method should generate id  when  called with prefix`, () => {
        const id:string = service.generateUniqueIdWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue();

    });

    it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate the same id when has multiple calls `, () => {
        const ids = new Set();
        for(let i = 0; i < 50; i++){
            ids.add(service.generateUniqueIdWithPrefix('app'))
        }
        expect(ids.size).toBe(50);
    })


    it(`${UniqueIdService.prototype.getNumberOfGenerateduniqueIds.name} method should return incremented id when called`,() => {
        service.generateUniqueIdWithPrefix('app');
        service.generateUniqueIdWithPrefix('app');
        const id = service.getNumberOfGenerateduniqueIds();
        expect(id).toBe(2)
        
    })


    it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} method should throw a error when called with null, empty or undefined prefix`, () => {

        const emptyValues = ['',null, undefined, 0];
        emptyValues.forEach(value => {
            expect(() => service.generateUniqueIdWithPrefix(value))
            .withContext(`Empty value:  ${value}`)
            .toThrow();
        })

    })

    it(`Testind true methods `, () => {



        /** totoBeTrueBe compare primitive or literal  values **/
        expect(true).toBeTrue();

        // toBe compare object with object. in this case the method will be fail 
        // expect(new Boolean(true)).toBe(new Boolean(true));


        // this is more generic method. this method use javascript default check object.
        expect(true).toBeTruthy();

    })


})