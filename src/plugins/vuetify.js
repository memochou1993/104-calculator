import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightBlue,
    secondary: colors.grey,
    accent: colors.purple,
    error: colors.red,
    info: colors.amber,
    success: colors.lightGreen,
    warning: colors.orange,
  },
  options: {
    customProperties: true,
  },
  iconfont: 'mdi',
});
