<template>
    <v-hover>
    <v-timeline-item icon="mdi-party-popper" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/02</strong>
                </v-col>
                <v-col>
                    <h1 class='contents-title'>[Kaggle] 鳥カエルコンペでチーム銀メダルを獲得</h1>
                    <div class="text-caption">
                        <div class='contents-text'>
                            33/1143 位。<br>
                            転職活動などでコミットが圧倒的に足りず完全にチームメンバーのおかげでこの結果になった。<br><br>
                            
                            [戦績]<br>
                            - ソロ銅: 1<br>
                            - ソロ銀: 1<br>
                            - チーム銅: 1<br>
                            - チーム銀: 2<br>
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://www.kaggle.com/c/rfcx-species-audio-detection/leaderboard'
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
