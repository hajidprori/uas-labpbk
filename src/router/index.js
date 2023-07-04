import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import WeatherWidget from '../components/WeatherWidget.vue';
import LocationWidget from '../components/LocationWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import TicTacToeWidget from '../components/TicTacToeWidget.vue';
import PhotoWidget from '../components/PhotoWidget.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherWidget
  },
  {
    path: '/location',
    name: 'location',
    component: LocationWidget
  },
  {
    path: '/stopwatch',
    name: 'stopwatch',
    component: StopwatchWidget
  },
  {
    path: '/tictactoe',
    name: 'tictactoe',
    component: TicTacToeWidget
  },
  {
    path: '/photo',
    name: 'photo',
    component: PhotoWidget
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
