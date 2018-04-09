<template>
    <div class="container">
        <div class="input-area">
            <h2>コピペ↓</h2>
            <textarea v-model="inputText" id="" cols="80" rows="20"></textarea>
            <p><button @click="totaling" type="submit">計算</button></p>
        </div>
        <BarChart :width="600" :height="400" :options="options" :chart-data="datacollection"></BarChart>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>

<script>

import BarChart from './chart.vue';

export default {
    data: function() {
        return {
            inputText: '',
            options: {},
            datacollection: null,
            myChartData: [],
            myChartLabels: [],
            myLabelName: ''
        }
    },
    methods: {
        //集計
        totaling: function(){
            const inputDataArr = this.inputText.split('\n'); //データを1行ごとの配列に
            this.myLabelName = inputDataArr[0]; //先頭をラベルにする
            inputDataArr.shift(); //先頭を削除

            const flatText = inputDataArr.toString(); //配列を分解して文字列に
            const items = flatText.split(/, |,/); //配列に変換
            
            let result = {}; //集計結果を入れ込む
            items.forEach(elm => result[elm] ? result[elm]++ : result[elm] = 1); //計算していく
            // console.log(result); //オブジェクト {}

            let result2 = [];
            for (const k of Object.keys(result)) result2.push({key: k, value: result[k]});
            // console.log(result2); //配列オブジェクト [{key: '',value: ''}]
            this.object_array_sort(result2, 'value', 'DESC', (new_data) => this.classify(new_data));
        },

        //Chart.jsのlabelとdataの形式に分ける
        classify: function(items){
            for(const item of items){
                this.myChartLabels.push(item.key);
                this.myChartData.push(item.value);
            }

            this.datacollection = {
                labels: this.myChartLabels,
                datasets: [{
                    label: this.myLabelName,
                    backgroundColor: '#f87979',
                    data: this.myChartData
                }]
            }
            
            //リセット処理
            this.myChartLabels = [];
            this.myChartData = [];
        },

        //オブジェクトのソート
        object_array_sort: (data,key,order,fn) => {
            let num_a = -1;
            let num_b = 1;
            let newData = data;

            if(order === 'asc'){//指定があれば昇順(ASC)
                num_a = 1;
                num_b = -1;
            }

            newData = newData.sort((a, b) => {
                const x = a[key];
                const y = b[key];
                if (x > y) return num_a;
                if (x < y) return num_b;
                return 0;
            });
            // ソート後の配列を返す
            fn(newData); 
        },

        saveImage: function(){
            console.log(this,BarChart);

        }
    },
    components: {
        'BarChart': BarChart
    }
}

</script>
