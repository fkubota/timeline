<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2020/03</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>[Slide] 「クロマベクトルっなに？」を公開</strong>
                    <div class="text-caption">
                        クロマベクトルの良い勉強資料がネットに落ちてなかったので作成。
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://speakerdeck.com/fkubota/kuromabekutorututehe'
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
