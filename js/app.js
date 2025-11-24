document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------
    // 1. Lógica do Gráfico (Plotly)
    // ----------------------------------------

    // Dados fictícios de desempenho
    const data = [{
        values: [20, 15, 25, 10, 15, 10],
        labels: ['Humanas', 'Natureza', 'Matemática', 'Português', 'Gerais', 'Comportamento'],
        type: 'pie',
        // Estilo adicional para o gráfico circular
        marker: {
            colors: ['#4C72B0', '#55A868', '#C44E52', '#8172B2', '#CCB974', '#64B5CD']
        },
        // Configurações para evitar que o gráfico seja um donut (se quiser donut, mude o hole)
        hole: 0.3 
    }];

    // Layout do Gráfico
    const layout = {
        title: 'Distribuição de Competências',
        height: 400,
        width: 500,
        margin: { t: 50, b: 50, l: 50, r: 50 }
    };

    // Cria o gráfico no elemento com id="charts"
    Plotly.newPlot('charts', data, layout, {responsive: true});


    // ----------------------------------------
    // 2. Lógica de Upload da Foto de Perfil
    // ----------------------------------------
    
    const uploadInput = document.getElementById('upload');
    const profileImg = document.getElementById('profile-img');

    if (uploadInput && profileImg) {
        uploadInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    profileImg.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

});