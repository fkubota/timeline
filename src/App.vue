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
            },
        metaInfo() {
                return {
                        meta: [
                                { property: `og:locale`, content: `ja_JP` },
                                { key: `og:type`, property: `og:type`, content: `website` },
                                {
                                        key: `og:site_name`,
                                        property: `og:site_name`,
                                        content: `my site`,
                                    },
                                {
                                        key: `og:title`,
                                        property: `og:title`,
                                        content: `Home | my site`,
                                    },
                            ]
                    }
            }
    };

</script>
