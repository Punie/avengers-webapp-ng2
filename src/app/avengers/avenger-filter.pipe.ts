import {Pipe, PipeTransform, Injectable} from '@angular/core';
import {Avenger} from "./avenger";

@Pipe({
  name: 'avengerFilter',
  pure: false
})
@Injectable()
export class AvengerFilterPipe implements PipeTransform {

  transform(items: Avenger[], args?: string): Avenger[] {
    if (items === null)
      return null;
    else {
      let formattedArgs = args.toLowerCase().trim();
      return items.filter(item => item.firstName.toLowerCase().match(formattedArgs)
        || item.lastName.toLowerCase().match(formattedArgs)
        || item.alias.toLowerCase().match(formattedArgs)
        || item.power.toString().match(formattedArgs)
        || item.agent.firstName.toLowerCase().match(formattedArgs)
        || item.agent.lastName.toLowerCase().match(formattedArgs));
    }
  }

}
