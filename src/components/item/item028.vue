<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2020/12/14</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>[記事]「Jupyter Notebook のグローバル変数汚染との戦い
」を公開</strong>
                    <div class="text-caption">
                        Kaggleアドベントカレンダー2020。<br>
                        @noglobal デコレータの解説記事。
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://qiita.com/fkubota/items/53d9b58acce4afa10046'
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
