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
        head: {
                meta: [
                        // Twitter Card
                        {name: 'twitter:site', content: '@fkubota_'},
                        {name: 'twitter:card', content: 'summary'},
                        {name: 'twitter:title', content: 'Vue Social Cards Example'},
                        {name: 'twitter:description', content: 'Vue sample site showing off Twitter and Facebook Cards.'},
                        {name: "og:image", content: "https://saruwakakun.com/images/example.png"},
                    ]
            }
};
</script>
