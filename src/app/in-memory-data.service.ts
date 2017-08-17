import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      {
        id: 0,
        name: 'Code an HTML Table',
        deadline: new Date('Jun 23 2015'),
        queued: false,
        pomodorosRequired: 1
      }, {
        id: 1,
        name: 'Sketch a wireframe for the new homepage',
        deadline: new Date('Jun 1 2018'),
        queued: false,
        pomodorosRequired: 2
      }, {
        id: 2,
        name: 'Style table with Bootstrap styles',
        deadline: new Date('Aug 25 2017'),
        queued: false,
        pomodorosRequired: 1
      }, {
        id: 3,
        name: 'Reinforce SEO with custom sitemap.xml',
        deadline: new Date('Jun 26 2016'),
        queued: false,
        pomodorosRequired: 3
      }
    ];
    return {tasks};
  }
}
