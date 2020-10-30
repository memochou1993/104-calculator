<template>
  <v-app>
    <v-toolbar
      dark
      color="accent lighten-2"
    >
      <v-toolbar-title
        class="headline pointer"
        @click="reload"
      >
        104 應徵人數計算器
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        :disabled="lock"
        @click="expanded = !expanded"
      >
        <v-icon>
          {{ `mdi-arrow-${expanded ? 'collapse' : 'expand'}-vertical` }}
        </v-icon>
      </v-btn>
      <v-btn
        icon
        @click="refresh"
      >
        <v-icon>
          mdi-refresh
        </v-icon>
      </v-btn>
      <v-btn
        icon
        @click="link"
      >
        <v-icon>
          mdi-facebook-box
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <transition
        name="fade"
      >
        <AppCalculator
          v-show="loaded"
          :expanded="expanded"
          :refreshed="refreshed"
          @unlock="unlock"
        />
      </transition>
    </v-content>
    <v-footer
      height="auto"
    >
      <v-card
        class="flex accent lighten-2 white--text text-xs-center"
      >
        <v-card-text>
          &copy; {{ (new Date).getFullYear() }} Memo Chou
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import AppCalculator from '@/components/AppCalculator';

export default {
  name: 'App',
  components: {
    AppCalculator,
  },
  data() {
    return {
      loaded: false,
      refreshed: 0,
      expanded: true,
      lock: true,
    };
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    reload() {
      window.location = '/';
    },
    unlock(value) {
      this.lock = !value;
    },
    refresh() {
      this.refreshed += 1;
    },
    link() {
      window.open('//fb.me/104calculator', '_blank');
    },
  },
};
</script>

<style lang="stylus">
.pointer
  cursor pointer
.fade-enter-active
  transition opacity 0.5s
.fade-leave-active
  transition opacity 0s
.fade-enter,
.fade-leave-to
  opacity 0
</style>
