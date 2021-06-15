<template>
    <v-hover>
    <v-timeline-item icon="mdi-party-popper" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2020/09</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>[Kaggle] 鳥コンペでチーム銅メダルを獲得</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            114/1390 位。<br>
                            3回目の参戦。<br>
                            ソロ金を狙ったが惨敗。 <br>
                            <a href='https://www.kaggle.com/c/liverpool-ion-switching/leaderboard'>root4kaidoさん</a>とチームを組んだ。<br><br>
                            
                            [戦績]<br>
                            - ソロ銅: 1<br>
                            - ソロ銀: 1<br>
                            - チーム銅: 1<br>
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://www.kaggle.com/c/birdsong-recognition/leaderboard'
                            >
                            Learn More
                    </v-btn>

                </v-col>
                <v-col>
                    <v-img src="./../../images/bg006.png" max-width='300' max-height='200' contain> </v-img>
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
