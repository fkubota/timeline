<template>
    <v-hover>
        <v-timeline-item icon="mdi-party-popper" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2019/08</strong>
                </v-col>
                <v-col>
                    <h1 class='contents-title'>[Kaggle] 分子コンペでソロ銅メダルを獲得</h1>
                    <div class="text-caption">
                        <div class='contents-text'>
                            234/2477 位。<br>
                            初参戦のコンペ。<br>
                            分子の結合の強さを予測するタスク。
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://www.kaggle.com/c/champs-scalar-coupling/leaderboard'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-img src="./../../images/bg006.png" max-width='300' max-height='200' contain> </v-img>
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
