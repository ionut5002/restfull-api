import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videosFilter'
})
export class VideosFilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: any): any[] {
    if (!items) return [];
    return items.filter(it => it[field] == value);
  }

}
