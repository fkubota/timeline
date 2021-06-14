<template>
        <v-timeline-item icon="mdi-school" color='#208ea3'>
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2018/03</strong>
                </v-col>
                <v-col>
                    <h1 class='contents-title'>琉球大学大学大学院を卒業</h1>
                    <div class="text-caption">
                        <div class='contents-text'>
                            理工学研究科物質地球科学専攻物理系。<br>
                            専門は物性物理学。<br>
                            強相関電子系に属する磁性体をNMR(核磁気共鳴)を用いた実験的手法による研究を行った。
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://sm1018.skr.u-ryukyu.ac.jp/db50031_yogi/'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-parallax src="./../../images/bg05.jpg" height="150"> </v-parallax>
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
