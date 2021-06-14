<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2020/07/19</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>[記事] 「組織としての技術力とはなんだろうか」を公開</strong>
                    <div class="text-caption">
                        仕事でいろいろ思うところがあって書き出してみた。
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://note.com/f_kubota/n/n84a0cd9cc77a'
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
