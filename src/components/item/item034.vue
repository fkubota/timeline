<template>
    <v-hover>
        <v-timeline-item icon="mdi-newspaper" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2020/12/26</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>[記事] 「未経験で機械学習エンジニアに転職。〜安定からベンチャーへ〜」を公開</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            Twitterで経験談が聞きたいとのお声を多数頂いたので頑張って書いてみました。 <br>
                            新卒で入社した会社を8ヶ月でやめた時の話です。
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://note.com/f_kubota/n/n744d269a9b6e'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-img src="./../../images/bk013.png" max-width='300' max-height='200' contain> </v-img>
                </v-col>
                <v-col>
                    <Tweet :options="{width: 200}" id='1342633196689584128'></Tweet>
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
