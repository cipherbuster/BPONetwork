import TaskList from '../components/TaskList/TaskList';
import TaskDescription from '../components/TaskDescription/TaskDescription';
import headingList from '../components/TaskList/headingList';
import headingDescription from '../components/TaskDescription/headingDescription';
import heading from '../components/Home/heading';
import home from '../components/Home/home'

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
    components: {
      default: home,
      heading: heading
    }
  },
];
