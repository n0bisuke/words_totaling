<template>
    <div class="main-page">
        <input @change="selectedFile" type="file" name="file">
        <button @click="upload" type="submit">アップロード</button>
    </div>
</template>

<style>
</style>

<script>
//WIP
export default {
    data: function() {
        return {
            uploadFile: null
        }
    },
    methods: {
        selectedFile: function(e) {
            console.log(`----`);
            // 選択された File の情報を保存しておく
            e.preventDefault();
            let fileData = e.target.files[0];
            console.log(fileData);

            let reader = new FileReader();
            
            //ファイル読み取りに失敗したとき
            reader.onerror = () => console.log(`ファイル読み取りに失敗しました`); 
            
            // ファイル読み取りに成功したとき
            reader.onload = function() {
                let lineArr = reader.result.split("\n"); // 行単位で配列にする
                let itemArr = []; // 行と列の二次元配列にする
                for (let i = 0,len = lineArr.length; i < len; i++) itemArr[i] = lineArr[i].split(",");
    
                // tableで出力
                let insert = '<table>';
                for (let i = 0, len = itemArr.length; i < len; i++) {
                    insert += '<tr>';
                    for (let j = 0, len = itemArr[i].length; j < len; j++) {
                        insert += '<td>';
                        insert += itemArr[i][j];
                        insert += '</td>';
                    }
                    insert += '</tr>';
                }
                insert += '</table>';
                console.log(insert);
                // result.innerHTML = insert;
            }
    
            // ファイル読み取りを実行
            reader.readAsText(fileData);
            
        },
        upload: function(){},
    }
}

</script>
