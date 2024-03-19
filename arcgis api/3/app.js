var initialMapExtent = {};

document.addEventListener("DOMContentLoaded", () => {
  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/geometry/Point",
    "esri/widgets/Home",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Measurement",
  ], function (
    Map,
    MapView,
    Graphic,
    GraphicsLayer,
    SimpleMarkerSymbol,
    Point,
    Home,
    BasemapGallery,
    Measurement,
  ) {
    // Create a map
    let map = new Map({
      basemap: "streets-navigation-vector",
    });

    // Create a map view
    let view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-100, 40],
      zoom: 4,
    });

    /// Add widgets to the view UI
    let homeWidget = new Home({
      view: view,
    });

    let basemapGallery = new BasemapGallery({
      view: view,
    });

    // adds the home widget to the top left corner of the MapView
    view.ui.add(homeWidget, "top-left");

    // // Add widget to the top right corner of the view
    // view.ui.add(basemapGallery, {
    //   position: "top-right",
    // });

    const measurement = new Measurement({
      view: view,
      activeTool: "area",
    });
    view.ui.add(measurement, "top-right");

    // Create a GraphicsLayer to hold icons
    let graphicsLayerPoints = new GraphicsLayer();

    // Add the GraphicsLayer to the map
    map.add(graphicsLayerPoints);

    // Create a SimpleMarkerSymbol for the icons
    let iconSymbol = new SimpleMarkerSymbol({
      color: "blue",
      size: "24px", // You can adjust the size of the icons here
      outline: {
        color: [255, 255, 255],
        width: 1,
      },
    });

    // Add event listener for user clicks on the map
    view.on("click", (e) => {
      // Create a graphic for the point
      let graphic = new Graphic({
        geometry: e.mapPoint,
        symbol: iconSymbol,
      });

      // Add the graphic to the GraphicsLayer
      graphicsLayerPoints.add(graphic);
    });
  });
});
