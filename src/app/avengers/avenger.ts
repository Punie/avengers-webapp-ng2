import { Agent } from "../agents/agent";

export class Avenger {
  constructor(public id: string,
              public firstName: string,
              public lastName: string,
              public alias: string,
              public power: number,
              public agent: Agent) {}
}
