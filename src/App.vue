<template>
  <v-app>
    <v-toolbar
      dark
      color="accent lighten-2"
    >
      <v-toolbar-title
        class="headline"
      >
        104 應徵人數計算器
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <AppCalculate />
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
};
</script>
