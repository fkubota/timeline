<template>
    <v-hover>
        <v-timeline-item icon="mdi-school" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2016/03</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>琉球大学大学を卒業</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            理学部物質地球科学科物理系
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href="http://www.phys.u-ryukyu.ac.jp/wiki/index.php?FrontPage"
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-img src="./../../images/bg005.png" max-width='300' max-height='200' contain> </v-img>
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
