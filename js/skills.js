document.addEventListener('DOMContentLoaded', () => {

    const themeColors = {
      primary: '#ff6161',
      secondary: '#b93838',
      accent: '#333333',
      additional1: '#666666',
      additional2: '#543737',
      additional3: '#691500',
      additional4: '#ff5d34',
      additional5: '#e43f3f',
      additional6: '#c83f1c',
      additional7: '#dc0000',
      additional8: '#ff0000',
      additional9: '#ff6347',
      additional10: '#8B0000',
      additional11: '#A52A2A'
    };

    const chartData = {
      programming: {
        labels: ['Python', 'C++', 'HTML', 'CSS', 'PHP', 'R', 'Javascript'],
        data: [95, 80, 85, 80, 75, 90, 70],
        backgroundColor: [
          themeColors.primary,
          themeColors.secondary,
          themeColors.accent,
          themeColors.additional1,
          themeColors.additional2,
          themeColors.additional3,
          themeColors.additional4
        ]
      },
      ml: {
        labels: ['PyTorch', 'TensorFlow', 'OpenCV', 'sci-kit learn', 'Keras', 'Computer Vision', 'Reinforcement Learning', 'NLP', 'LangChain', 'RAG', 'LLMs', 'LlamaIndex', 'GANs & DANNs'],
        data: [90, 80, 90, 95, 90, 80, 80, 90, 80, 85, 85, 75, 75],
        backgroundColor: [
          themeColors.primary,
          themeColors.secondary,
          themeColors.accent,
          themeColors.additional1,
          themeColors.additional2,
          themeColors.additional3,
          themeColors.additional4,
          themeColors.additional5,
          themeColors.additional6,
          themeColors.additional7,
          themeColors.additional8,
          themeColors.additional9,
          themeColors.additional10
        ]
      },
      backend: {
        labels: ['AWS', 'GCP', 'Algorithms', 'MySQL', 'PostgreSQL', 'Django', 'FASTAPI', 'Flask', 'Kafka', 'VectorDB', 'Snowflake', 'Pandas'],
        data: [80, 70, 80, 90, 80, 85, 80, 75, 70, 50, 50, 80],
        backgroundColor: [
          themeColors.primary,
          themeColors.secondary,
          themeColors.accent,
          themeColors.additional1,
          themeColors.additional2,
          themeColors.additional3,
          themeColors.additional4,
          themeColors.additional5,
          themeColors.additional6,
          themeColors.additional7,
          themeColors.additional8,
          themeColors.additional9
        ]
      }
    };

    function getLegendFontSize() {
      const width = window.innerWidth;
      if (width < 768) {
        return 12;
      } else if (width < 992) {
        return 14;
      } else {
        return 16;
      }
    }

    function isSmallScreen() {
      return window.innerWidth < 768;
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true, // Changed to true to maintain aspect ratio
      animation: {
        animateRotate: true,
        duration: 2500,
      },
      plugins: {
        legend: {
          display: !isSmallScreen(), // Hide legend on small screens
          position: 'bottom',
          labels: {
            color: '#707070',
            font: {
              size: getLegendFontSize(),
              family: 'Roboto'
            }
          }
        },
        tooltip: {
          backgroundColor: '#ecf0f1',
          titleColor: '#2c3e50',
          bodyColor: '#2c3e50',
          titleFont: {
            family: 'Roboto'
          },
          bodyFont: {
            family: 'Sans-Serif'
          },
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed;
              return `${label}: ${value}%`;
            }
          }
        }
      }
    };

    let chartInstances = []; // To store chart instances

    function createChart(chartId, chartType, data) {
      const ctx = document.getElementById(chartId).getContext('2d');
      const chartInstance = new Chart(ctx, {
        type: chartType,
        data: {
          labels: data.labels,
          datasets: [{
            data: data.data,
            backgroundColor: data.backgroundColor,
            borderColor: '#000000',
            borderWidth: 2,
            hoverOffset: 20
          }]
        },
        options: chartOptions,
      });
      chartInstances.push(chartInstance);
      return chartInstance;
    }

    function animateCharts() {
      const chartsConfig = [
        { id: 'programmingChart', data: chartData.programming },
        { id: 'mlChart', data: chartData.ml },
        { id: 'backendChart', data: chartData.backend }
      ];
  
      chartsConfig.forEach(({ id, data }) => {
        const chartCanvas = document.getElementById(id);
  
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              createChart(id, 'doughnut', data); 
              observer.unobserve(entry.target); 
            }
          });
        }, { threshold: 0.3 });
  
        observer.observe(chartCanvas);
      });
    }

    animateCharts();

    // Update legend display and font size on window resize
    window.addEventListener('resize', () => {
      const newFontSize = getLegendFontSize();
      chartInstances.forEach(instance => {
        if (instance.config.options.plugins.legend) {
          instance.config.options.plugins.legend.display = !isSmallScreen();
          instance.config.options.plugins.legend.labels.font.size = newFontSize;
          instance.update();
        }
      });
    });

    // Legend Toggle Functionality
    const legendButtons = document.querySelectorAll('.legend-btn');

    legendButtons.forEach(button => {
        button.addEventListener('click', () => {
            const legendContainer = button.nextElementSibling;
            if (legendContainer) {
                legendContainer.classList.toggle('show');
                // Removed modal-open class toggling
            }
        });
    });

});
