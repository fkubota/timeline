<template>
    <v-hover>
    <v-timeline-item icon="mdi-account-voice" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/06/18</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>[登壇] 第二回分析コンペLT会</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            参加者数: 449人 <br>
                            title: 「ルールベース画像処理のススメ」<br>
                            カレーちゃんさん主催の勉強会で登壇させていただきました。<br>
                            教師データなしのルールベースでもそれなりにできますよという内容で発表した。<br>
                            楽しかったという声多数で嬉しかったです。

                            スライドは<a href='https://speakerdeck.com/fkubota/rurubesuhua-xiang-chu-li-falsesusume'>こちら</a>。
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://kaggle-friends.connpass.com/event/214854/'
                            >
                            Learn More
                    </v-btn>

                </v-col>
                <v-col>
                    <v-img src="./../../images/bg012.png" max-width='300' max-height='200' contain> </v-img>
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
