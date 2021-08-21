<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                  <strong class='contents-title'>{{ date_ }}</strong>
                </v-col>
                <v-col>
                  <strong class='contents-title'>{{ title }}</strong>
                    <div class="text-caption">
                      <a href='https://note.com/f_kubota/n/nfce9b9839930'>ゆるゆる朝会のメンバーのアイコンを3つ作りました。好評でとてもうれしいです。</a>
                    </div>
                </v-col>
                <v-col>
                  <Tweet :options="{width: 200}" :id='tweet_id'></Tweet>
                </v-col>
            </v-row>
    </v-timeline-item>
    </v-hover>
</template>

<script>
  import { Tweet  } from 'vue-tweet-embed'
  export default {
      components: {
          Tweet
        },
    data () {
        return {
            date_: '2021/08/20',
            title: 'Twitterの友人のアイコンを3つ作りました',
            tweet_id: '1428490683111727107'
          }
      }
    }

</script>

<style>
@import "./../../css/mycss.css";
</style>

