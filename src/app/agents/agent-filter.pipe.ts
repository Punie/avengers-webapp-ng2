import { Pipe, PipeTransform, Injectable } from '@angular/core';

import { Agent } from "./agent";

@Pipe({
  name: 'agentFilter',
  pure: false
})
@Injectable()
export class AgentFilterPipe implements PipeTransform {

  transform(items: Agent[], args?: string): Agent[] {
    if (items === null)
      return null;
    else {
      let formattedArgs = args.toLowerCase().trim();
      return items.filter(item => item.firstName.toLowerCase().match(formattedArgs)
      || item.lastName.toLowerCase().match(formattedArgs));
    }
  }

}
