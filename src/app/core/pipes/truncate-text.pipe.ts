import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
  standalone: true
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, limit: number = 100, suffix: string = '...'): string {
    if (!value) return '';
    if (value.length <= limit) return value;
    return value.substring(0, limit) + suffix;
  }

}
