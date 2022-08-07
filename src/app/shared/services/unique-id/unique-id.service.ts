import { Injectable } from "@angular/core";

import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class UniqueIdService {

    private numberOfGeneratedIds = 0;

    private validId = /^[A-Za-z]+[\\w\-\:\.]*$/

    constructor() {

    }


    public generateUniqueIdWithPrefix(prefix: string): string {
        if(!prefix || !this.validId.test(prefix)){
            throw Error('Prefix can not be empty');
        }

        const uniqueId = this.generateUniqueId();
        this.numberOfGeneratedIds++;
        return `${prefix}-${uniqueId}`
    }

    private generateUniqueId(): string {
        return uuidv4();
    }

    public getNumberOfGenerateduniqueIds(): number {

        return this.numberOfGeneratedIds;
    }

}