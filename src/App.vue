<template>
<v-app>
  <home/>
</v-app>
</template>

<script>
import home from './components/home';

export default {
        name: 'App',
        components: {
                home,
            },
        data: () => ({
                //
            }),
    };

</script>
