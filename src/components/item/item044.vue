<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/06/17</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>中心極限定理を復習した</strong>
                    <div class="text-caption">
                        中心極限定理の証明を復習した。<br>
                        こんなに証明簡単だったっけ？<br>
                        大定理がこれだけ簡単に理解できるのって本当すごい。
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://k-san.link/central-limit-theorem/'
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

