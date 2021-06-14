<template>
    <v-hover>
        <v-timeline-item icon="mdi-monitor" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2020/04</strong>
                </v-col>
                <v-col>
                    <h1 class='contents-title'>社内コンペを主催</h1>
                    <div class="text-caption">
                        <div class='contents-text'>
                            vue.jsを用いたwebアプリケーションを開発した。  
                            webアプリケーション初挑戦。  <br><br>
                            [アーキテクチャ]<br>
                            backend: heroku<br>
                            frontend: vue.js<br>
                            database: postgreSQL<br>
                            webpage: githubpages
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://github.com/fkubota/data-science-comp-01'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-img src="./../../images/bg007.png" max-width='300' max-height='200' contain> </v-img>
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
