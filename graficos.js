import fetch from "node-fetch";
import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import fs from "fs";

const width = 800;  
const height = 600; 
const chartCallback = (ChartJS) => {
    
};

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, chartCallback });

async function querydata() {
    try {
        const response = await fetch('https://thingspeak.mathworks.com/channels/1293177/feed.json');
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status ${response.status}`);
        }
        const data = await response.json();

        const feeds = data.feeds;

        
        const valores = feeds.map(f => parseFloat(f.field1)).filter(v => !isNaN(v));
        const tempos = feeds.map(f => f.created_at);

       
        const config = {
            type: "line",
            data: {
                labels: tempos,
                datasets: [
                    {
                        label: data.channel.field1,
                        data: valores,
                        borderColor: "blue",
                        fill: false,
                    }
                ]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: `📊 ${data.channel.name} - ${data.channel.field1}`
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            maxRotation: 90,
                            minRotation: 45
                        }
                    }
                }
            }
        };

       
        const image = await chartJSNodeCanvas.renderToBuffer(config);
        fs.writeFileSync("./grafico.png", image);
        console.log("✅ Gráfico salvo como grafico.png");

    } catch (error) {
        console.error("Erro:", error);
    }
}

querydata();
