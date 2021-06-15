<template>
    <v-hover>
    <v-timeline-item icon="mdi-party-popper" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/05</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>[Kaggle] Indoorコンペでチーム銀メダルを獲得</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            16/1170 位。<br>
                            仲良しこよしでチームを組んだので案の定楽しかった。<br>
                            画像処理を少し使えて嬉しかった。
                            
                            [戦績]<br>
                            - ソロ銅: 1<br>
                            - ソロ銀: 1<br>
                            - チーム銅: 1<br>
                            - チーム銀: 3<br>
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://www.kaggle.com/c/indoor-location-navigation/leaderboard'
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

