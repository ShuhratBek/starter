import { Injectable } from '@angular/core';
import {Company} from './item';
import {Companies} from "./mock-company";

@Injectable()
export class CompanyService {
    getCompanies(): Promise<Company[]> {
        return Promise.resolve(Companies);
    }
}
