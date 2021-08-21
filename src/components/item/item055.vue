<template>
    <v-hover>
    <v-timeline-item icon="mdi-account-voice" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                  <strong class='contents-title'>{{ date_ }}</strong>
                </v-col>
                <v-col>
                  <h2 class='contents-title'>{{ title }}</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                          参加者数: 518人 <br>
                          title: 「JupyterNotebookでのdebug入門」  <br>
                          JupyterNotebookでdebugするための pdbと%debug などの紹介を行った。 <br>
                          Colabolatoryで動かせるサンプルも作った。  <br>

                          スライドは<a href='https://speakerdeck.com/fkubota/jupyternotebooktefalsedebugru-men-sanpuruhashuo-ming-lan-niarimasu'>こちら</a>。

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
  export default {
      components: {
        },
    data () {
        return {
            date_: '2021/08/17',
            title: '[登壇] 第三回分析コンペLT会',
            link: 'https://kaggle-friends.connpass.com/event/220927/',
          }
      }
    }
</script>

<style>
  @import "./../../css/mycss.css";
</style>
