var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_3, 
                style: style_building_3,
                interactive: true,
                title: '<img src="styles/legend/building_3.png" /> building'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_4, 
                style: style_building_4,
                interactive: true,
                title: '<img src="styles/legend/building_4.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_building_2.setVisible(true);lyr_building_3.setVisible(true);lyr_building_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_building_2,lyr_building_3,lyr_building_4];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'highway': 'highway', 'crossing': 'crossing', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'cuisine': 'cuisine', 'layer': 'layer', 'tourism': 'tourism', 'healthcare': 'healthcare', 'sport': 'sport', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'description': 'description', 'shop': 'shop', 'healthcare:speciality': 'healthcare:speciality', 'operator:type': 'operator:type', 'religion': 'religion', 'school:type_idn': 'school:type_idn', 'ground_floor:height': 'ground_floor:height', 'office': 'office', 'admin_level': 'admin_level', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'amenity': 'amenity', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'type': 'type', });
lyr_building_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'highway': 'highway', 'crossing': 'crossing', });
lyr_building_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'cuisine': 'cuisine', 'layer': 'layer', 'operator': 'operator', 'opening_hours': 'opening_hours', 'name:en': 'name:en', 'healthcare': 'healthcare', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'description': 'description', 'shop': 'shop', 'healthcare:speciality': 'healthcare:speciality', 'tourism': 'tourism', 'leisure': 'leisure', 'religion': 'religion', 'ground_floor:height': 'ground_floor:height', 'office': 'office', 'admin_level': 'admin_level', 'sport': 'sport', 'name': 'name', 'amenity': 'amenity', 'type': 'type', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'highway': '', 'crossing': '', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'cuisine': '', 'layer': '', 'tourism': '', 'healthcare': '', 'sport': '', 'addr:street': '', 'addr:postcode': '', 'description': '', 'shop': '', 'healthcare:speciality': '', 'operator:type': '', 'religion': '', 'school:type_idn': '', 'ground_floor:height': '', 'office': '', 'admin_level': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'amenity': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'type': '', });
lyr_building_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'highway': '', 'crossing': '', });
lyr_building_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'cuisine': '', 'layer': '', 'operator': '', 'opening_hours': '', 'name:en': '', 'healthcare': '', 'addr:street': '', 'addr:postcode': '', 'description': '', 'shop': '', 'healthcare:speciality': '', 'tourism': '', 'leisure': '', 'religion': '', 'ground_floor:height': '', 'office': '', 'admin_level': '', 'sport': '', 'name': '', 'amenity': '', 'type': '', 'school:type_idn': '', 'operator:type': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'highway': 'no label', 'crossing': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'cuisine': 'no label', 'layer': 'no label', 'tourism': 'no label', 'healthcare': 'no label', 'sport': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'description': 'no label', 'shop': 'no label', 'healthcare:speciality': 'no label', 'operator:type': 'no label', 'religion': 'no label', 'school:type_idn': 'no label', 'ground_floor:height': 'no label', 'office': 'no label', 'admin_level': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'type': 'no label', });
lyr_building_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'highway': 'no label', 'crossing': 'no label', });
lyr_building_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'cuisine': 'no label', 'layer': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'name:en': 'no label', 'healthcare': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'description': 'no label', 'shop': 'no label', 'healthcare:speciality': 'no label', 'tourism': 'no label', 'leisure': 'no label', 'religion': 'no label', 'ground_floor:height': 'no label', 'office': 'no label', 'admin_level': 'no label', 'sport': 'no label', 'name': 'no label', 'amenity': 'no label', 'type': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_building_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});