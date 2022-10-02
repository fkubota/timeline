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
                      {{ body }}
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            :href='link'
                            >
                            Learn More
                    </v-btn>
                </v-col>
            </v-row>
    </v-timeline-item>
    </v-hover>
</template>

<script>
  export default {
      components: {
        },
    data () {
        return {

            date_: '2022/06',
            title: 'ラストマンシップの記事を読んだ',
            body: '最近この概念に漠然と気付きはじめた。上司からいい記事を紹介してもらいより問題意識を持つようになった。この概念は大事にしたい。',
            link: 'https://note.com/tokyo_harbor/n/n9622fb5b6a39',

          }
      }
    }

</script>

<style>
@import "./../../css/mycss.css";
</style>

