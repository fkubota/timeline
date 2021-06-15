<template>
    <v-hover>
        <v-timeline-item icon="mdi-github" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/02/19</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>「enjoy-vim」 を公開</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            少人数でvimを学ぶための勉強会を企画。 <br>
                            問題を作成し解きながら学ぶスタイル。
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://github.com/fkubota/enjoy-Vim'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-img src="./../../images/bg014.png" max-width='300' max-height='200' contain> </v-img>
                </v-col>
                <v-col>
                    <Tweet :options="{width: 200}" id='1362705544557989892'></Tweet>
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
