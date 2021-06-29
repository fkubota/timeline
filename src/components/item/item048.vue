<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/06/25</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>bookshelfに4つのコンテンツを追加</strong>
                    <div class="text-caption">
                      [2021/05/23~2021/05/25] 
                      「深層学習の原理に迫る」や「Cost-Sensitive learning関係の論文」など。
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://fkubota.github.io/bookshelf/'
                            >
                            Learn More
                    </v-btn>

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

