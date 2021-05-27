import TaskList from '../components/TaskList';
import TaskDescription from '../components/TaskDescription';
import headingList from '../components/headingList';
import headingDescription from '../components/headingDescription';
import heading from '../components/heading';

export default [
  {
    path: '/list',
    name: 'list',
    components: {
      default: TaskList,
      heading: headingList
    }
  },
  {
    path: '/task',
    name: 'task',
    components: {
      default: TaskDescription,
      heading: headingDescription
    }
  },
  {
    path: '/',
    name: 'heading',
    component: heading
  }
];
