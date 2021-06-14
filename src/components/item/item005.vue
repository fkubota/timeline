<template>
        <v-timeline-item icon="mdi-briefcase" color='#208ea3'>
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2018/12</strong>
                </v-col>
                <v-col>
                    <h1 class='contents-title'>Hmcomm株式会社</h1>
                    <div class="text-caption">
                        <div class='contents-text'>
                            機械学習、プログラマ未経験で入社。  
                            異常音検知プラットフォームの研究開発部署に配属。  
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://hmcom.co.jp/'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-img src="./../../images/bg004.png" max-width='300' max-height='200' contain> </v-img>
                </v-col>
            </v-row>
        </v-timeline-item>
</template>

<script>
    export default {}
</script>

<style>
  @import "./../../css/mycss.css";
</style>
