<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/01</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>デカルトの哲学を勉強した</strong>
                    <div class="text-caption">
						半年ほどだらだらと勉強していたデカルトの哲学が一区切りした。<br>
						後半はめちゃくちゃ楽しかった。<br> 
						完全に体系化して理解できたわけではないので今後の定期的な勉強が必要。<br>
						「方法序説」はバイブルになった。<br><br>

						[書籍]<br>
						- 方法序説(岩波文庫)<br>
						- 方法序説(ちくま学芸文庫)<br>
						- 省察(ちくま学芸文庫)<br>
                        - 哲学原理(岩波文庫)<br>
						- デカルト入門(ちくま新書)<br>
						- 岩波哲学小辞典(岩波書店)<br>
                    </div>
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
