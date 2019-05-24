import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightBlue,
    secondary: '#424242',
    accent: colors.purple,
    error: colors.red,
    info: colors.amber,
    success: '#4CAF50',
    warning: '#FFC107',
  },
  options: {
    customProperties: true,
  },
  iconfont: 'mdi',
});
