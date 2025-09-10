async function querydata() {
    try {
        const response = await fetch('https://thingspeak.mathworks.com/channels/1293177/feed.json')
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status ${response.status}`);
        }
        // const data = await response.json();
        const string = await response.text();
        const data = JSON.parse(string);

        // Extrair metadados
        const channel = data.channel;
        console.log(`🛰️ Estação: ${channel.name}`);
        console.log(`📍 Localização: ${channel.latitude}, ${channel.longitude}`);
        console.log(`📏 Sensores:`);
        for (let i = 1; i <= 8; i++) {
        console.log(`  field${i}: ${channel[`field${i}`]}`);
        }

        


    } catch (error) {
        console.error('Erro:', error);
    }


    

    
}

querydata();