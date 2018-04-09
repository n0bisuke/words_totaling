<template>
    <div class="container">
        <div class="input-area">
            <Header2 :header2-text="header2Text"></Header2> <br />
            <p>1行目はデータラベルになります。</p>
            <p><a href="https://github.com/n0bisuke/words_totaling" target="_blank">使い方</p>
            <div class="box1">
                <textarea v-model="inputText"></textarea>
            </div>
            <p><a href="#" @click="totaling" class="square_btn">集計する</a></p>
        </div>
        <BarChart :width="600" :height="400" :options="options" :chart-data="datacollection"></BarChart>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.box1 textarea {
    margin: 0; 
    padding: 0;
    width: 600px;
    height: 200px;
    background: #eee;
    border: 1px solid #bebebe;
    font-size: 1em;
}

textarea:focus {
    background: #edf4ff;
    border: 1px solid #4881d9;
}

/*
ボタン
*/
.square_btn{
    position: relative;
    display: inline-block;
    font-weight: bold;
    padding: 0.25em 0.5em;
    text-decoration: none;
    color: #00BCD4;
    background: #ECECEC;
    transition: .4s;
  }

.square_btn:hover {
    background: #00bcd4;
    color: white;
}
</style>

<script>
import BarChart from './chart.vue';
import Header2 from './header2.vue';

export default {
    data: function() {
        return {
            header2Text: '集計したいデータをコピペ↓',
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
            this._object_array_sort(result2, 'value', 'DESC', (new_data) => this.classify(new_data));
        },

        //Chart.jsのlabelとdataの形式に分けてChart.jsの形式に
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
        _object_array_sort: (data,key,order,fn) => {
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
        }
    },
    components: {
        'BarChart': BarChart,
        'Header2': Header2
    }
}
</script>