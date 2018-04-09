<script>
import { HorizontalBar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    name: 'chart',
    extends: HorizontalBar,
    mixins: [reactiveProp],
    props: ['options'],
    mounted () {
        this.addDataLabelsPlugin({fontSize: 16, fontStyle: 'normal', fontFamily:'Helvetica Neue'}); //データラベルを常に表示
        this.renderChart(this.chartData, this.options);
    },
    methods: {
        //データラベルプラグイン
        addDataLabelsPlugin: (options) => {
            Chart.plugins.register({
                afterDatasetsDraw: (chart, easing) => {
                    // To only draw at the end of animation, check for easing === 1
                    const ctx = chart.ctx;
                    chart.data.datasets.forEach((dataset, i) => {
                        const meta = chart.getDatasetMeta(i);
                        if (!meta.hidden) {
                            meta.data.forEach((element, index) => {
                                // Draw the text in black, with the specified font
                                ctx.fillStyle = 'rgb(0, 0, 0)';
                                ctx.font = Chart.helpers.fontString(options.fontSize, options.fontStyle, options.fontFamily);                            
                                // Just naively convert to string for now
                                const dataString = dataset.data[index].toString();

                                // Make sure alignment settings are correct
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                const padding = 2;
                                const position = element.tooltipPosition();
                                ctx.fillText(dataString, position.x, position.y - (options.fontSize / 2) - padding);
                            });
                        }
                    });
                }
            });
        }
    }
}
</script>
