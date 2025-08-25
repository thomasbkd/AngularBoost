import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(startDate: Date | null, endDate: Date | null, format: string = "mm:ss"): string {
    if (!startDate) return "";
    if (!endDate) endDate = new Date();

    const diff = moment(endDate.getTime() - startDate.getTime());
    return moment.utc(diff).format(format);
  }


}
