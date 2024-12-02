
import { Item, ItemStatus } from '../scroll-container-item/scroll-container-item.component';


export const ProjectData: Item[] = [
    {
      title: 'Chokanzu',
      description: 'An UI to maintain K8 cluster visually',
      chips: ['Angular'],
      status: ItemStatus.conceptualizing,
      actions: [{ text: 'View Project', link: 'https://github.com/jinto-josan/chokanzu' }],
      order: 1
    },
    {
      title: 'OMS',
      description: 'A Full blown Order Management System which is reactive and scalable',
      chips: ['Angular', '.NET', 'C#'],
      status: ItemStatus.ongoing,
      actions: [{ text: 'View Project', link: 'https://github.com/jinto-josan/OrderManagementSystem' }],
      order: 4
    },
    {
      title: 'Mindara',
      description: 'A E2E testing framework to test a subsystem in absence of downstream system',
      chips: ['Angular', 'Java', 'Spring Boot', 'Karate', 'Junit'],
      status: ItemStatus.ongoing,
      actions: [{ text: 'View Project', link: 'https://github.com/jinto-josan/E2EProduct' }],
      order: 3
    },
    {
      title: 'ProfilePage',
      description: 'Its built on angular',
      chips: ['Angular', 'Git Workflow'],
      status: ItemStatus.completed,
      actions: [{ text: 'View Project', link: 'https://github.com/jinto-josan/jinto-josan.github.io' }],
      order: 2
    }
  ].sort((a, b) => b.order - a.order)