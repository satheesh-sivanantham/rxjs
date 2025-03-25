import { Pipe, PipeTransform } from "@angular/core";
import {users} from '../DB/data'


@Pipe({
    name:'filterByAge'
})
export class FilterByAgePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return args.filter((item: { age: any; }) => item.age)
    }
} 