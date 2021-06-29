<template>
    <v-hover>
        <v-timeline-item icon="mdi-twitter" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/06/29</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>Twitterのヘッダー画像を作成</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                          voxelというタイプの描画方法で作成した。  <br>
                          非常に簡単でいい感じに作れて満足度が高い。  <br>
                          ソフトは <strong>magica voxel</strong> を使用。<br>

                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://ephtracy.github.io/'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-img src="./../../images/bk013.png" max-width='300' max-height='200' contain> </v-img>
                </v-col>
                <v-col>
                    <Tweet :options="{width: 200}" id='1409521522880905216'></Tweet>
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
