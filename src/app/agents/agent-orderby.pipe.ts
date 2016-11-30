import {Pipe, PipeTransform, Injectable} from '@angular/core';
import {Agent} from "./agent";

@Pipe({
  name: 'agentOrderBy',
  pure: false
})
@Injectable()
export class AgentOrderByPipe implements PipeTransform {

  transform(items: Agent[], args: string): Agent[] {
    if (items === null)
      return null;
    else if (args === '')
      return items;
    else
      return items.sort((item1, item2) => {
        if (typeof item1[args] === 'string')
          return item1[args].localeCompare(item2[args]);
      });
  }

}
