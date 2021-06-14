<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2020/10/01</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>[記事]「Kaggleで多くの実験を回すためにやっていること」を公開</strong>
                    <div class="text-caption">
                        ちょっとだけ気にかけていることを書き出してみた。
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://zenn.dev/fkubota/articles/2b8d46b11c178ac2fa2d'
                            >
                            Learn More
                    </v-btn>

                </v-col>
            </v-row>
    </v-timeline-item>
    </v-hover>
</template>

<script>
    export default {}
</script>

<style>
@import "./../../css/mycss.css";
</style>
