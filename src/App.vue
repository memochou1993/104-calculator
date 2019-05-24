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
        @click="expanded = !expanded"
      >
        <v-icon>
          {{ `mdi-arrow-${expanded ? 'collapse' : 'expand'}-vertical` }}
        </v-icon>
      </v-btn>
      <v-btn
        icon
        @click="refreshed = refreshed + 1"
      >
        <v-icon>
          mdi-refresh
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <transition
        name="fade"
      >
        <AppCalculate
          v-show="loaded"
          :expanded="expanded"
          :refreshed="refreshed"
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
import AppCalculate from '@/components/AppCalculate';

export default {
  name: 'App',
  components: {
    AppCalculate,
  },
  data() {
    return {
      loaded: false,
      refreshed: 0,
      expanded: true,
    };
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    reload() {
      window.location = '/';
    },
  },
};
</script>

<style lang="stylus">
.pointer
  cursor pointer
.fade-enter-active,
.fade-leave-active
  transition opacity 0.5s
.fade-enter,
.fade-leave-to
  opacity 0
</style>
