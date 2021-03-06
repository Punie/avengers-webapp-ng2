import {Pipe, PipeTransform, Injectable} from '@angular/core';
import {Avenger} from "./avenger";

@Pipe({
  name: 'avengerOrderBy',
  pure: false
})
@Injectable()
export class AvengerOrderByPipe implements PipeTransform {

  transform(items: Avenger[], args: string): Avenger[] {
    if (items === null)
      return null;
    else if (args === '')
      return items;
    else
      return items.sort(
        (item1, item2) => {
          if (typeof item1[args] === 'string')
            return item1[args].localeCompare(item2[args]);
          if (typeof item1[args] === 'number')
            return item1[args] - item2[args];
          if (args === 'agent')
            return (item1.agent.firstName + item1.agent.lastName).localeCompare(item2.agent.firstName + item2.agent.lastName);
        });
  }

}
