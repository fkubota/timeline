<template>
<v-app>
  <Timeline/>
</v-app>
</template>

<script>
import Timeline from './components/Timeline';

export default {
        name: 'App',
        components: {
                Timeline,
            },
        data: () => ({
                //
            }),
    };

</script>
