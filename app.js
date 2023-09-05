mapboxgl.accessToken = config.accessToken;

const fullScreenButton = document.getElementById('full-screen');
const mapContainer = document.getElementById('map');

// Jquery - Slide antes e depois
$(document).ready(function() {

  $("input.slider").on("input change", function(event) {
      var element = $(this).parents("div.container");
      var pos = event.target.value;

      element.find("div.before").css({width: pos + "%"});
      element.find("div.slider-button").css({left: "calc(" + pos + "% - 18px)"});
  });

});
// Fecha slide

fullScreenButton.addEventListener('click', () => {
  if (mapContainer.requestFullscreen) {
    mapContainer.requestFullscreen();
  } else if (mapContainer.mozRequestFullScreen) {
    mapContainer.mozRequestFullScreen();
  } else if (mapContainer.webkitRequestFullscreen) {
    mapContainer.webkitRequestFullscreen();
  } else if (mapContainer.msRequestFullscreen) {
    mapContainer.msRequestFullscreen();
  }

  // Esconder o botão de entrada em tela cheia
  fullScreenButton.style.display = 'none';
  map.flyTo({
    center: [-43.55873, -22.85996],
    zoom: 10.35,
  });
});

document.addEventListener('fullscreenchange', () => {
  // Verifique o estado de tela cheia e ajuste a visibilidade do botão de entrada em tela cheia
  if (document.fullscreenElement) {
    fullScreenButton.style.display = 'none';
  } else {
    fullScreenButton.style.display = 'block';

    // Se o mapa não estiver em tela cheia, ajuste o zoom de volta para 10
    map.flyTo({
      center: config.center, // Defina o centro do mapa como necessário
      zoom: 10,
    });
  }
});


//slide antes e depois
(function () {
  var containers = document.getElementsByClassName('antesDepois');
  for (var i = 0, qtd = containers.length; i < qtd; i++) {
    var container = containers[i];
    var depois = container.getElementsByClassName('depois')[0];
    var depoisImg = depois.getAttribute('data-src');
    depois.style.backgroundImage = "url('" + depoisImg + "')";
    container.addEventListener("mousemove", comparaPosicao, false);
    container.addEventListener("touchstart", comparaPosicao, false);
    container.addEventListener("touchmove", comparaPosicao, false);
  }
})();

function comparaPosicao(e) {
  var retangulo = this.getBoundingClientRect();
  var posicao = ((e.pageX - retangulo.left) / this.offsetWidth) * 100;
  if (posicao <= 100) {
    this.getElementsByClassName('depois')[0].style.width = posicao + "%";
  }
}

//feature do botão de saiba mais para scrollar para baixo

document.addEventListener('DOMContentLoaded', function () {
  var saibaMaisButton = document.querySelector('.botao button');
  var mapContainer = document.getElementById('map');

  saibaMaisButton.addEventListener('click', function (event) {
    event.preventDefault();
    mapContainer.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var playButton = document.getElementById("play-button");
  var overlay = document.getElementById("overlay");
  var closeButton = document.getElementById("close-button");
  var player;

  playButton.addEventListener("click", function () {
    overlay.style.display = "flex";

    // Criar o player do YouTube quando o botão é clicado
    if (!player) {
      player = new YT.Player("player", {
        videoId: "tXxTIJKBf30",  // ID do vídeo do YouTube
        playerVars: {
          controls: 0,  // Esconder os controles padrão do YouTube
          autoplay: 1   // Iniciar a reprodução automaticamente
        },
        width: 800,      // Largura do vídeo em pixels
        height: 450      // Altura do vídeo em pixels
      });
    }
  });

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";

    // Pausar o vídeo quando o modal é fechado
    if (player) {
      player.stopVideo();
    }
  });
});




document.addEventListener("DOMContentLoaded", function () {
  var playButton2 = document.getElementById("play-button2");
  var overlay2 = document.getElementById("overlay2");
  var closeButton2 = document.getElementById("close-button2");

  playButton2.addEventListener("click", function () {
    overlay2.style.display = "flex";
  });

  closeButton2.addEventListener("click", function () {
    overlay2.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var playButton3 = document.getElementById("play-button3");
  var overlay3 = document.getElementById("overlay3");
  var closeButton3 = document.getElementById("close-button3");

  playButton3.addEventListener("click", function () {
    overlay3.style.display = "flex";
  });

  closeButton3.addEventListener("click", function () {
    overlay3.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var playButton4 = document.getElementById("play-button4");
  var overlay4 = document.getElementById("overlay4");
  var closeButton4 = document.getElementById("close-button4");

  playButton4.addEventListener("click", function () {
    overlay4.style.display = "flex";
  });

  closeButton4.addEventListener("click", function () {
    overlay4.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var playButton5 = document.getElementById("play-button5");
  var overlay5 = document.getElementById("overlay5");
  var closeButton5 = document.getElementById("close-button5");

  playButton5.addEventListener("click", function () {
    overlay5.style.display = "flex";
  });

  closeButton5.addEventListener("click", function () {
    overlay5.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var playButton6 = document.getElementById("play-button6");
  var overlay6 = document.getElementById("overlay6");
  var closeButton6 = document.getElementById("close-button6");

  playButton6.addEventListener("click", function () {
    overlay6.style.display = "flex";
  });

  closeButton6.addEventListener("click", function () {
    overlay6.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var playButton7 = document.getElementById("play-button7");
  var overlay7 = document.getElementById("overlay7");
  var closeButton7 = document.getElementById("close-button7");

  playButton7.addEventListener("click", function () {
    overlay7.style.display = "flex";
  });

  closeButton7.addEventListener("click", function () {
    overlay7.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var playButton8 = document.getElementById("play-button8");
  var overlay8 = document.getElementById("overlay8");
  var closeButton8 = document.getElementById("close-button8");

  playButton8.addEventListener("click", function () {
    overlay8.style.display = "flex";
  });

  closeButton8.addEventListener("click", function () {
    overlay8.style.display = "none";
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.page-btn');
  const contents = document.querySelectorAll('.content');
  const contentSlides = document.querySelectorAll('.contentSlide');
  const titles = document.querySelectorAll('.title');

  // Função para mostrar o conteúdo de cada aba
  function showContent(target) {
    contents.forEach(content => {
      if (content.id === target) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
    contentSlides.forEach(contentSlide => {
      if (contentSlide.id === target) {
        contentSlide.style.display = 'block';
      } else {
        contentSlide.style.display = 'none';
      }
    });
  }
  function showTitle(target) {
    titles.forEach(title => {
      if (title.id === target) {
        title.style.display = 'block';
      } else {
        title.style.display = 'none';
      }
    });
  }

  // Add event listeners aos botões
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');

      showContent(target);
      showTitle(target)

      buttons.forEach(btn => {
        btn.classList.remove('active');
      });
      button.classList.add('active');
    });
  });

  buttons[0].click();
});


let geojsonData = {};
const filteredGeojson = {
  type: 'FeatureCollection',
  features: [],
};

const map = new mapboxgl.Map({
  container: 'map',
  style: config.style,
  center: config.center,
  zoom: isMobileDevice() ? 8.35 : config.zoom, // Define o zoom para 8 se for um dispositivo móvel, caso contrário, usa o valor de configuração
});

// Função para verificar se o dispositivo é móvel
function isMobileDevice() {
  return window.innerWidth < 768;
}


function flyToCentroMapa(currentFeature) {
  map.flyTo({
    center: currentFeature,
    zoom: isMobileDevice() ? 8.35 : config.zoom, // Define o zoom para 8 se for um dispositivo móvel, caso contrário, usa o valor de configuração
    essential: true, // Certifique-se de definir isso como true para garantir que a animação ocorra
    animate: true,   // Ative a animação
    duration: 2      // Duração da animação em segundos (ajuste conforme necessário)
  });

}


function flyToBairro(currentFeature) {
  map.flyTo({
    center: currentFeature,
    zoom: 11,
    essential: true, 
    animate: true,  
    duration: 1000    
  });
}

// Define variáveis globais para armazenar as referências às camadas de contorno e preenchimento atuais
let boundaryLineLayerId = null;
let boundaryFillLayerId = null;

function highlightBairro(bairro) {
  // Remova a camada de contorno e preenchimento anterior, se existirem
  if (boundaryFillLayerId !== null && map.getLayer(boundaryFillLayerId)) {
    map.removeLayer(boundaryFillLayerId);
  }
  if (boundaryLineLayerId !== null && map.getLayer(boundaryLineLayerId)) {
    map.removeLayer(boundaryLineLayerId);
    map.removeSource(boundaryLineLayerId);
  }

  const coordinates = boundaryVertices[bairro];

  if (!coordinates) {
    console.log("Coordenadas não encontradas para o bairro " + bairro);
    return;
  }

  console.log("Coordinates for " + bairro + ": " + JSON.stringify(coordinates));

  const boundaryPolygon = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [coordinates]
    }
  };

  const newBoundaryLineLayerId = 'boundary-line-layer-' + bairro;
  const newBoundaryFillLayerId = 'boundary-fill-layer-' + bairro;

  map.addSource(newBoundaryLineLayerId, {
    type: 'geojson',
    data: boundaryPolygon
  });

  map.addLayer({
    id: newBoundaryFillLayerId,
    type: 'fill',
    source: newBoundaryLineLayerId,
    paint: {
      'fill-color': '#000000', // Cor de preenchimento azul claro (formato RGBA)
      'fill-opacity': 0.1
    }
  });

  map.addLayer({
    id: newBoundaryLineLayerId,
    type: 'line',
    source: newBoundaryLineLayerId,
    paint: {
      'line-color': '#000000', // Cor do contorno da linha
      'line-width': 2 // Largura do contorno da linha
    }
  });

  // Atualize as referências às camadas de contorno e preenchimento atuais
  boundaryLineLayerId = newBoundaryLineLayerId;
  boundaryFillLayerId = newBoundaryFillLayerId;
}


function createPopup(currentFeature) {
  const popups = document.getElementsByClassName('mapboxgl-popup');

  if (popups[0]) popups[0].remove();
  new mapboxgl.Popup({ className: "mapa-popup", closeOnClick: true, anchor: 'top' })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h3>' + '<b>' + currentFeature.properties[config.popupInfo[0]] + '</b>' + '</h3>' + '<hr>'
      + '<h3>' + '<b>' + 'Projeto &nbsp' + '</b>' + currentFeature.properties[config.popupInfo[1]] + '</h3>'
      + '<h3>' + '<b>' + 'Órgão &nbsp' + '</b>' + currentFeature.properties[config.popupInfo[2]] + '</h3>'
      + '<h3>' + '<b>' + 'Bairro &nbsp' + '</b>' + currentFeature.properties[config.popupInfo[3]] + '</h3>'
      + '<h3>' + '<b>' + 'Situação &nbsp' + '</b>' + currentFeature.properties[config.popupInfo[4]] + '</h3>'
      + '<h3>' + '<b>' + 'Investimento &nbsp' + '</b>' + currentFeature.properties[config.popupInfo[5]] + '</h3>'
      + '<h3>' + '<b>' + 'Beneficiados &nbsp' + '</b>' + currentFeature.properties[config.popupInfo[6]] + '</h3>')
    .addTo(map);
}


function buildDropDownList(title, listItems) {
  const filtersDiv = document.getElementById('filters');
  const mainDiv = document.createElement('div');
  const filterTitle = document.createElement('h3');
  filterTitle.innerText = title;
  filterTitle.classList.add('py12', 'txt-bold');
  mainDiv.appendChild(filterTitle);

  const selectContainer = document.createElement('div');
  selectContainer.classList.add('flex-parent', 'flex-parent--row');

  const dropDown = document.createElement('select');
  dropDown.classList.add('select', 'filter-option', 'cerapromedium');
  dropDown.style.width = '270px';

  dropDown.addEventListener('change', function () {
    const selectedValue = this.value;

    if (selectedValue === 'Todos') {
      // Set the dropdown text back to the default when "Todos" is selected
      this.selectedIndex = 0;

      // Call the function to fly to the center of the map
      flyToCentroMapa([-43.45273, -22.90996]);
    }

    // Update the map or other related functionality based on the selected option
    if (selectedValue != 'Todos') {
      highlightBairro(selectedValue);
      const selectedFeature = geojsonData.features.find(
        (feature) => feature.properties.Bairro === selectedValue
      );
      flyToBairro(selectedFeature.geometry.coordinates);
    }
  });

  const placeholderOption = document.createElement('option');
  placeholderOption.value = '';
  placeholderOption.text = 'Selecione um Bairro';
  placeholderOption.disabled = true;
  placeholderOption.selected = true;

  dropDown.appendChild(placeholderOption);

  const allOption = document.createElement('option');
  allOption.textContent = 'Todos';
  allOption.value = 'Todos';
  dropDown.appendChild(allOption);

  for (let i = 0; i < listItems.length; i++) {
    const opt = listItems[i];
    const el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    dropDown.appendChild(el);
  }

  const selectArrow = document.createElement('div');
  selectArrow.classList.add('select-arrow');

  selectContainer.appendChild(dropDown);
  selectContainer.appendChild(selectArrow);
  mainDiv.appendChild(selectContainer);

  filtersDiv.appendChild(mainDiv);
}

function buildCheckbox(title, listItems) {
  const filtersDiv = document.getElementById('filters');
  const mainDiv = document.createElement('div');
  const filterTitle = document.createElement('div');
  const formatcontainer = document.createElement('div');

  formatcontainer.classList.add('flex-parent', 'flex-parent--row', 'px3');

  filterTitle.classList.add('center', 'py12', 'txt-bold');
  filterTitle.innerText = title;
  mainDiv.appendChild(filterTitle);
  mainDiv.appendChild(formatcontainer);

  for (let i = 0; i < listItems.length; i++) {
    const container = document.createElement('label');
    container.classList.add('checkbox-container');

    const input = document.createElement('input');
    input.classList.add('px12', 'filter-option');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', listItems[i]);
    input.setAttribute('value', listItems[i]);

    if (listItems[i]) {
      input.setAttribute('checked', 'true');
    }

    const checkboxDiv = document.createElement('div');
    const inputValue = document.createElement('p');
    inputValue.innerText = listItems[i];
    inputValue.classList.add('checkbox-label', 'bold', 'cerapro');
    checkboxDiv.classList.add('checkbox', 'mr6', 'checkbox-label');

    container.appendChild(input);
    container.appendChild(checkboxDiv);
    container.appendChild(inputValue);

    // Definir cores iniciais com base no valor do checkbox
    function updateColors() {
      if (input.checked && !input.disabled) {
        if (input.value === 'Morar Carioca') {
          checkboxDiv.style.backgroundColor = '#6FA64E';
          inputValue.style.color = '#6FA64E';
        } else if (input.value === 'Bairro Maravilha') {
          checkboxDiv.style.backgroundColor = '#4E81A6';
          inputValue.style.color = '#4E81A6';
        } else if (input.value === 'Saúde') {
          checkboxDiv.style.backgroundColor = '#754EA6';
          inputValue.style.color = '#754EA6';
        } else if (input.value === 'BRT') {
          checkboxDiv.style.backgroundColor = '#A68D4E';
          inputValue.style.color = '#A68D4E';
        }
      } else {
        checkboxDiv.style.backgroundColor = '';
        inputValue.style.color = '';
      }
    }

    input.addEventListener('change', updateColors);

    // Atualizar cores iniciais quando a página carrega
    updateColors();

    container.addEventListener('click', function () {
      if (!input.disabled) {
        checkboxDiv.classList.toggle('checked');
      }
    });

    formatcontainer.appendChild(container);
  }
  filtersDiv.appendChild(mainDiv);

}


const selectFilters = [];
const checkboxFilters = [];

function createFilterObject(filterSettings) {
  filterSettings.forEach((filter) => {
    if (filter.type === 'checkbox') {
      const keyValues = {};
      Object.assign(keyValues, {
        header: filter.columnHeader,
        value: filter.listItems,
      });
      checkboxFilters.push(keyValues);
    }
    if (filter.type === 'dropdown') {
      const keyValues = {};
      Object.assign(keyValues, {
        header: filter.columnHeader,
        value: filter.listItems,
      });
      selectFilters.push(keyValues);
    }
  });
}

function applyFilters() {
  const filterForm = document.getElementById('filters');

  filterForm.addEventListener('change', function () {
    const filterOptionHTML = this.getElementsByClassName('filter-option');
    const filterOption = [].slice.call(filterOptionHTML);

    const geojSelectFilters = [];
    const geojCheckboxFilters = [];

    filteredGeojson.features = [];

    filterOption.forEach((filter) => {
      if (filter.type === 'checkbox' && filter.checked) {
        checkboxFilters.forEach((objs) => {
          Object.entries(objs).forEach(([, value]) => {
            if (value.includes(filter.value)) {
              const geojFilter = [objs.header, filter.value];
              geojCheckboxFilters.push(geojFilter);
            }
          });
        });
      }
      if (filter.type === 'select-one' && filter.value) {
        selectFilters.forEach((objs) => {
          Object.entries(objs).forEach(([, value]) => {
            if (value.includes(filter.value)) {
              const geojFilter = [objs.header, filter.value];
              geojSelectFilters.push(geojFilter);
            }
          });
        });
      }
    });

    if (geojCheckboxFilters.length === 0 && geojSelectFilters.length === 0) {
      geojsonData.features.forEach((feature) => {
        filteredGeojson.features.push(feature);
      });
    } else if (geojCheckboxFilters.length > 0) {
      geojCheckboxFilters.forEach((filter) => {
        geojsonData.features.forEach((feature) => {
          if (feature.properties[filter[0]].includes(filter[1])) {
            if (
              filteredGeojson.features.filter(
                (f) => f.properties.id === feature.properties.id,
              ).length === 0
            ) {
              filteredGeojson.features.push(feature);
            }
          }
        });
      });
      if (geojSelectFilters.length > 0) {
        const removeIds = [];
        filteredGeojson.features.forEach((feature) => {
          let selected = true;
          geojSelectFilters.forEach((filter) => {
            if (
              feature.properties[filter[0]].indexOf(filter[1]) < 0 &&
              selected === true
            ) {
              selected = false;
              removeIds.push(feature.properties.id);
            } else if (selected === false) {
              removeIds.push(feature.properties.id);
            }
          });
        });
        let uniqueRemoveIds = [...new Set(removeIds)];
        uniqueRemoveIds.forEach(function (id) {
          const idx = filteredGeojson.features.findIndex(
            (f) => f.properties.id === id,
          );
          filteredGeojson.features.splice(idx, 1);
        });
      }
    } else {
      geojsonData.features.forEach((feature) => {
        let selected = true;
        geojSelectFilters.forEach((filter) => {
          if (
            !feature.properties[filter[0]].includes(filter[1]) &&
            selected === true
          ) {
            selected = false;
          }
        });
        if (
          selected === true &&
          filteredGeojson.features.filter(
            (f) => f.properties.id === feature.properties.id,
          ).length === 0
        ) {
          filteredGeojson.features.push(feature);
        }
      });
    }

    map.getSource('locationData').setData(filteredGeojson);
  });
}

function filters(filterSettings) {
  filterSettings.forEach((filter) => {
    if (filter.type === 'checkbox') {
      buildCheckbox(filter.title, filter.listItems);
    } else if (filter.type === 'dropdown') {
      buildDropDownList(filter.title, filter.listItems);
    }
  });
}

function removeFilters() {
  const input = document.getElementsByTagName('input');
  const select = document.getElementsByTagName('select');
  const selectOption = [].slice.call(select);
  const checkboxOption = [].slice.call(input);
  filteredGeojson.features = [];
  checkboxOption.forEach((checkbox) => {
    if (checkbox.type === 'checkbox' && checkbox.checked === true) {
      checkbox.checked = false;
    }
  });

  selectOption.forEach((option) => {
    option.selectedIndex = 0;
  });

  map.getSource('locationData').setData(geojsonData);
}

createFilterObject(config.filters);
applyFilters();
filters(config.filters);


const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl,
  marker: true,
  zoom: 11,
});

map.on('load', () => {
  map.addControl(geocoder, 'top-right');

  $(document).ready(() => {
    console.log('ready');
    $.ajax({
      type: 'GET',
      url: config.CSV,
      dataType: 'text',
      success: function (csvData) {
        makeGeoJSON(csvData);
      },
      error: function (request, status, error) {

      },
    });
  });


  function makeGeoJSON(csvData) {
    csv2geojson.csv2geojson(
      csvData,
      {
        latfield: 'Latitude',
        lonfield: 'Longitude',
        delimiter: ',',
      },
      (err, data) => {
        data.features.forEach((data, i) => {
          data.properties.id = i;
        });

        geojsonData = data;
        map.addLayer({
          id: 'locationData',
          type: 'circle',
          source: {
            type: 'geojson',
            data: geojsonData,
          },
          paint: {
            'circle-radius': 6,
            'circle-color': [
              'match',
              ['get', 'Projeto'],
              'Saúde', '#754EA6',
              'Bairro Maravilha', '#4E81A6',
              'Morar Carioca', '#6FA64E',
              'BRT', '#A68D4E', '#448EE4'
            ],
          },
        });
      }
    );
    //zoom enabled only if scrollar
    map.on("wheel", event => {
      if (event.originalEvent.ctrlKey) {

        const mapElement = document.getElementById("map");
        const messageElement = document.querySelector(".zoom-message");

        if (messageElement) {
          messageElement.remove();
        }

        mapElement.style.filter = "brightness(100%)";
        return;
      }

      if (event.originalEvent.metaKey) {
        return;
      }

      if (event.originalEvent.altKey) {
        return;
      }

      event.preventDefault();

      // Escurecer a seção do mapa gradualmente
      const mapElement = document.getElementById("map");
      mapElement.style.position = "relative";
      mapElement.style.filter = "brightness(50%)";
      mapElement.style.transition = "filter 0.5s ease";

      // Exibir a mensagem no meio do mapa
      const messageElement = document.createElement("div");
      messageElement.innerText = "Use Ctrl + scroll para ampliar o mapa";
      messageElement.classList.add("zoom-message");
      messageElement.style.position = "absolute";
      messageElement.style.top = "50%";
      messageElement.style.left = "50%";
      messageElement.style.transform = "translate(-50%, -50%)";
      messageElement.style.color = "#2b2727";
      messageElement.style.fontSize = "20px";
      mapElement.appendChild(messageElement);

      // Remover a mensagem após 3 segundos
      setTimeout(() => {
        mapElement.style.filter = "brightness(100%)";
        mapElement.style.transition = "filter 0.5s ease";
        messageElement.remove();
      }, 1000);
    });


    map.on('click', 'locationData', (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['locationData'],
      });
      createPopup(features[0]);
    });

    map.on('mouseenter', 'locationData', () => {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'locationData', () => {
      map.getCanvas().style.cursor = '';
    });
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');

    // Evento de clique para zoom in
    zoomInButton.addEventListener('click', () => {
      map.zoomIn();
    });

    // Evento de clique para zoom out
    zoomOutButton.addEventListener('click', () => {
      map.zoomOut();
    });

  }
});
