<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2019/11</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>統計検定1級 2ヶ月チャレンジ失敗</strong>
                    <div class="text-caption">
                        数理統計のほうは、不合格のうちの上位15%には入っていたので次頑張れば受かりそう。<br>
                        2ヶ月前は検定もわからない状態だったが、2ヶ月がんばった分知識はかなりついた。<br>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://www.toukei-kentei.jp'
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
