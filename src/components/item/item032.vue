<template>
    <v-hover>
        <v-timeline-item icon="mdi-briefcase" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/02</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>株式会社カンム</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            フィンテックベンチャーのカンムに入社。<br>
                            機械学習エンジニアとして入社。 <br>  
                            バンドルカードの機械学習部分を担当する。
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://kanmu.co.jp/'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-img src="./../../images/bg009.png" max-width='300' max-height='200' contain> </v-img>
                </v-col>
                <v-col>
                    <Tweet :options="{width: 200}" id='1356024618822168578'></Tweet>
                </v-col>
            </v-row>
        </v-timeline-item>
    </v-hover>
</template>

<script>
    import { Tweet  } from 'vue-tweet-embed'
    export default {
            components: {
                    Tweet,
                }
        }
</script>

<style>
  @import "./../../css/mycss.css";
</style>
