<template>
  <v-app>
    <v-content>
      <AppCalculate />
    </v-content>
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
