<template>
    <v-hover>
        <v-timeline-item icon="mdi-briefcase" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2020/12/22</strong>
                </v-col>
                <v-col>
                    <h1 class='contents-title'>Carrier-Owl を公開</h1>
                    <div class="text-caption">
                        <div class='contents-text'>
                            arxiv-->DeepL-->slack と通知するアプリ <br>
                            社内で使うために作ったツールをOSS化した。<br>
                            反響が大きくてビビった。
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://github.com/fkubota/Carrier-Owl'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-img src="./../../images/bg008.png" max-width='300' max-height='200' contain> </v-img>
                </v-col>
                <v-col>
                    <Tweet :options="{width: 200}" id='1341038462128930816'></Tweet>
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
