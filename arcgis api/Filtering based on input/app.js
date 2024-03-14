document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
  ], function (Map, MapView, FeatureLayer) {
    const myMap = new Map({
      basemap: "streets-navigation-vector",
    });

    const view = new MapView({
      container: "viewDiv",
      map: myMap,
      center: [-100, 40],
      zoom: 4,
    });

    setTimeout(() => {
      //   view.zoom = 10;
      //   view.center = [-140, 40];
    }, 3000);

    const featureLayer = new FeatureLayer({
      url: "https://services.gis.ca.gov/arcgis/rest/services/Boundaries/CA_Counties/FeatureServer/0",
      popupTemplate: {
        title: "CA countries",
        content:
          "OBJECTID: {OBJECTID}<br>Population : {Population}<br>AREA_ID: {AREA_ID}<br>DETAIL_CITY: {DETAIL_CITY}",
      },
    });

    view.whenLayerView(featureLayer).then((layerView) => {
      const filterInput = document.getElementById("filterInput");
      const fieldSelect = document.getElementById("fieldSelect");

      layerView.layer.fields.forEach((field) => {
        let option = document.createElement("option");
        option.value = option.id = field.name;
        option.text = field.alias;
        option.fieldType = field.type;
        fieldSelect.append(option);
      });

      filterInput.addEventListener("input", (e) => {
        const inputValue = e.target.value.trim();

        const field = fieldSelect.value;

        const optionType = document.getElementById(field).fieldType;
        if (inputValue !== "") {
          if (optionType === "integer" || optionType === "double")
            featureLayer.definitionExpression = field + " = " + inputValue;
          // AREA_ID = 32520284
          else if (optionType === "string") {
            featureLayer.definitionExpression =
              "upper(" + field + ") LIKE '%" + inputValue.toUpperCase() + "%'";
          } else {
            console.warn("Unsupported field type:", fieldInfo.type);
          }
        } else {
          featureLayer.definitionExpression = "1=1"; // AREA_ID = 32520284
        }
      });
    });

    // Add change event listener to field select dropdown
    var fieldSelect = document.getElementById("fieldSelect");
    fieldSelect.addEventListener("change", function (e) {
      document.getElementById("filterInput").value = "";
    });

    myMap.add(featureLayer);
  });
});
