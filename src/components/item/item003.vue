<template>
    <v-hover>
        <v-timeline-item icon="mdi-briefcase" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2018/04</strong>
                </v-col>
                <v-col>
                    <h1 class='contents-title'>株式会社LINX</h1>
                    <div class="text-caption">
                        <div class='contents-text'>
                            ファクトリーオートメーション系のプロダクトを扱う技術商社。産業用カメラや画像処理ソフトを扱う部署に配属された。
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://linx.jp/'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-img src="./../../images/bg003.png" max-width='300' max-height='200' contain> </v-img>
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
