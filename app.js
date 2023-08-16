
mapboxgl.accessToken = config.accessToken;
const columnHeaders = config.sideBarInfo;

//feature do botão de saiba mais para scrollar para baixo

document.addEventListener('DOMContentLoaded', function() {
  var saibaMaisButton = document.querySelector('.botao button');
  var mapContainer = document.getElementById('map');

  saibaMaisButton.addEventListener('click', function(event) {
    event.preventDefault();
    mapContainer.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var playButton = document.getElementById("play-button");
  var overlay = document.getElementById("overlay");
  var closeButton = document.getElementById("close-button");

  playButton.addEventListener("click", function() {
    overlay.style.display = "flex";
  });

  closeButton.addEventListener("click", function() {
    overlay.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var playButton2 = document.getElementById("play-button2");
  var overlay2 = document.getElementById("overlay2");
  var closeButton2 = document.getElementById("close-button2");

  playButton2.addEventListener("click", function() {
    overlay2.style.display = "flex";
  });

  closeButton2.addEventListener("click", function() {
    overlay2.style.display = "none";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.page-btn');
  const contents = document.querySelectorAll('.content');
  const titles = document.querySelectorAll('.title');

  // Function to show content based on button click
  function showContent(target) {
    contents.forEach(content => {
      if (content.id === target) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
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

  // Add event listeners to buttons
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');

      // Show the corresponding content
      showContent(target);
      showTitle(target)

      // Update active button state
      buttons.forEach(btn => {
        btn.classList.remove('active');
      });
      button.classList.add('active');
    });
  });

  // Initialize the first button as active
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
  zoom: config.zoom,
});

function flyToLocation(currentFeature) {
  map.flyTo({
    center: currentFeature,
    zoom: 11,
  });
}

function createPopup(currentFeature) {
  const popups = document.getElementsByClassName('mapboxgl-popup');
  
  if (popups[0]) popups[0].remove();
  new mapboxgl.Popup({className: "apple-popup", closeOnClick: true })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h3>' + '<b>' + 'Título &nbsp' +'</b>'+ currentFeature.properties[config.popupInfo[0]] + '</h3>'
           + '<h3>' + '<b>' + 'Projeto &nbsp' +'</b>'+ currentFeature.properties[config.popupInfo[1]] + '</h3>'
           + '<h3>' + '<b>' + 'Bairro &nbsp' +'</b>'+  currentFeature.properties[config.popupInfo[2]] + '</h3>'
           + '<h3>' + '<b>' + 'Situação &nbsp' +'</b>'+  currentFeature.properties[config.popupInfo[3]] +'</h3>') 
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
  dropDown.classList.add('select', 'filter-option','cerapromedium');

  const placeholderOption = document.createElement('option', 'cerapromedium');
  placeholderOption.value = '';
  placeholderOption.text = 'Defina uma área de planejamento';
  placeholderOption.disabled = false;
  placeholderOption.selected = true; 
  dropDown.style.width = '270px'

  dropDown.appendChild(placeholderOption);

  const selectArrow = document.createElement('div');
  selectArrow.classList.add('select-arrow');

  selectContainer.appendChild(dropDown);
  selectContainer.appendChild(selectArrow);
  mainDiv.appendChild(selectContainer);

  for (let i = 0; i < listItems.length; i++) {
    const opt = listItems[i];
    const el1 = document.createElement('option');
    el1.textContent = opt;
    el1.value = opt;
    dropDown.appendChild(el1);
  }
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

    if (listItems[i])  {
      input.setAttribute('checked', 'true');
    }

    const checkboxDiv = document.createElement('div');
    const inputValue = document.createElement('p');
    inputValue.innerText = listItems[i];
    inputValue.classList.add('checkbox-label', 'bold','cerapro');
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
          checkboxDiv.style.backgroundColor = '#A6634E';
          inputValue.style.color = '#A6634E';
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

  console.log('loaded');
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
        console.log(request);
        console.log(status);
        console.log(error);
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
            'Morar Carioca', '#6FA64E', 
            'Bairro Maravilha', '#4E81A6',
            'Saúde', '#A6634E', 
            'BRT', '#A68D4E',
            '#448EE4' 
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
      const clickedPoint = features[0].geometry.coordinates;
    
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
