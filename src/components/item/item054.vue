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
            date_: '2021/08/10',
            title: '[記事] 休日に行う「ゆるゆる朝会」のススメ',
            body: '6人のメンバーで行っている休日の朝活がめちゃいいので記事書いた。',
            link: 'https://note.com/f_kubota/n/nfce9b9839930',
          }
      }
    }

</script>

<style>
@import "./../../css/mycss.css";
</style>

