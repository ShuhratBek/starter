import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
    name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], searchString: string) {
        return items.filter(
            item => item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
        );
    }
}
