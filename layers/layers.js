var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PEAINDEC_3 = new ol.format.GeoJSON();
var features_PEAINDEC_3 = format_PEAINDEC_3.readFeatures(json_PEAINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_3.addFeatures(features_PEAINDEC_3);
var lyr_PEAINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_3, 
                style: style_PEAINDEC_3,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_3_0.png" /> 2.350 - 3.000<br />\
    <img src="styles/legend/PEAINDEC_3_1.png" /> 3.001 - 12.500<br />\
    <img src="styles/legend/PEAINDEC_3_2.png" /> 12.501 - 80.000<br />\
    <img src="styles/legend/PEAINDEC_3_3.png" /> 80.001 o más<br />'
        });
var format_PoblacinpordepartamentoINDEC_4 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_4 = format_PoblacinpordepartamentoINDEC_4.readFeatures(json_PoblacinpordepartamentoINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_4.addFeatures(features_PoblacinpordepartamentoINDEC_4);
var lyr_PoblacinpordepartamentoINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_4, 
                style: style_PoblacinpordepartamentoINDEC_4,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_0.png" /> 3.750 - 4.750<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_1.png" /> 4.750 - 13.000<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_2.png" /> 13.001 - 126.000<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_3.png" /> 126.001 o más<br />'
        });
var format_ViviendasenreasruralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_5 = format_ViviendasenreasruralesINDEC_5.readFeatures(json_ViviendasenreasruralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_5.addFeatures(features_ViviendasenreasruralesINDEC_5);
var lyr_ViviendasenreasruralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_5, 
                style: style_ViviendasenreasruralesINDEC_5,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_0.png" /> 1.750 - 2.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_1.png" /> 2.001 - 2.500<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_2.png" /> 2.501 - 3.250<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_3.png" /> 3.251 o más<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 2.750 - 5.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 5.001 - 75.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 75.001 - 120.000<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 3.500 - 4.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 4.001 - 8500<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 8.501 - 20.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_3.png" /> 20.001 o más<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 2.000 - 3.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 3.501 - 10.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 10.001 - 20.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 20.001 - 32.000<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 30.000 - 75.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 75.001 - 150.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 150.001 - 400.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 400.001 o más<br />'
        });
var format_HectreassembradasdemazMAGyP_10 = new ol.format.GeoJSON();
var features_HectreassembradasdemazMAGyP_10 = format_HectreassembradasdemazMAGyP_10.readFeatures(json_HectreassembradasdemazMAGyP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdemazMAGyP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdemazMAGyP_10.addFeatures(features_HectreassembradasdemazMAGyP_10);
var lyr_HectreassembradasdemazMAGyP_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdemazMAGyP_10, 
                style: style_HectreassembradasdemazMAGyP_10,
                interactive: true,
    title: 'Hectáreas sembradas de maíz (MAGyP)<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_10_1.png" /> 500 - 1.000<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_10_2.png" /> 1.001 - 25.000<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_10_3.png" /> 25.001 - 65.000<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_10_4.png" /> 65.001<br />'
        });
var format_HectreassembradasdetrigoMAGyP_11 = new ol.format.GeoJSON();
var features_HectreassembradasdetrigoMAGyP_11 = format_HectreassembradasdetrigoMAGyP_11.readFeatures(json_HectreassembradasdetrigoMAGyP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdetrigoMAGyP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdetrigoMAGyP_11.addFeatures(features_HectreassembradasdetrigoMAGyP_11);
var lyr_HectreassembradasdetrigoMAGyP_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdetrigoMAGyP_11, 
                style: style_HectreassembradasdetrigoMAGyP_11,
                interactive: true,
    title: 'Hectáreas sembradas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreassembradasdetrigoMAGyP_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreassembradasdetrigoMAGyP_11_1.png" /> 250 - 500<br />\
    <img src="styles/legend/HectreassembradasdetrigoMAGyP_11_2.png" /> 501 - 1.500<br />\
    <img src="styles/legend/HectreassembradasdetrigoMAGyP_11_3.png" /> 1.501 - 4.000<br />\
    <img src="styles/legend/HectreassembradasdetrigoMAGyP_11_4.png" /> 4.001 - 8.000<br />'
        });
var format_HectreassembradasdegirasolMAGyP_12 = new ol.format.GeoJSON();
var features_HectreassembradasdegirasolMAGyP_12 = format_HectreassembradasdegirasolMAGyP_12.readFeatures(json_HectreassembradasdegirasolMAGyP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdegirasolMAGyP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdegirasolMAGyP_12.addFeatures(features_HectreassembradasdegirasolMAGyP_12);
var lyr_HectreassembradasdegirasolMAGyP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdegirasolMAGyP_12, 
                style: style_HectreassembradasdegirasolMAGyP_12,
                interactive: true,
    title: 'Hectáreas sembradas de girasol (MAGyP)<br />\
    <img src="styles/legend/HectreassembradasdegirasolMAGyP_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreassembradasdegirasolMAGyP_12_1.png" /> 100 - 750<br />\
    <img src="styles/legend/HectreassembradasdegirasolMAGyP_12_2.png" /> 751 - 2.000<br />\
    <img src="styles/legend/HectreassembradasdegirasolMAGyP_12_3.png" /> 2.001 o más<br />'
        });
var format_HectreassembradasdecentenoMAGyP_13 = new ol.format.GeoJSON();
var features_HectreassembradasdecentenoMAGyP_13 = format_HectreassembradasdecentenoMAGyP_13.readFeatures(json_HectreassembradasdecentenoMAGyP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdecentenoMAGyP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdecentenoMAGyP_13.addFeatures(features_HectreassembradasdecentenoMAGyP_13);
var lyr_HectreassembradasdecentenoMAGyP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdecentenoMAGyP_13, 
                style: style_HectreassembradasdecentenoMAGyP_13,
                interactive: true,
    title: 'Hectáreas sembradas de centeno (MAGyP)<br />\
    <img src="styles/legend/HectreassembradasdecentenoMAGyP_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreassembradasdecentenoMAGyP_13_1.png" /> 200 - 1.000<br />\
    <img src="styles/legend/HectreassembradasdecentenoMAGyP_13_2.png" /> 1.001 - 10.000<br />\
    <img src="styles/legend/HectreassembradasdecentenoMAGyP_13_3.png" /> 10.001 - 33.000<br />'
        });
var format_HectreassembradasdesojaMAGyP_14 = new ol.format.GeoJSON();
var features_HectreassembradasdesojaMAGyP_14 = format_HectreassembradasdesojaMAGyP_14.readFeatures(json_HectreassembradasdesojaMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdesojaMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdesojaMAGyP_14.addFeatures(features_HectreassembradasdesojaMAGyP_14);
var lyr_HectreassembradasdesojaMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdesojaMAGyP_14, 
                style: style_HectreassembradasdesojaMAGyP_14,
                interactive: true,
    title: 'Hectáreas sembradas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_14_1.png" /> 1.000 - 5.000<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_14_2.png" /> 5.001 - 11.000<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_14_3.png" /> 11.001 - 75.000<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_14_4.png" /> 75.001 o más<br />'
        });
var format_Localidades_15 = new ol.format.GeoJSON();
var features_Localidades_15 = format_Localidades_15.readFeatures(json_Localidades_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_15.addFeatures(features_Localidades_15);
var lyr_Localidades_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_15, 
                style: style_Localidades_15,
                interactive: true,
                title: '<img src="styles/legend/Localidades_15.png" /> Localidades'
            });
var format_BER_16 = new ol.format.GeoJSON();
var features_BER_16 = format_BER_16.readFeatures(json_BER_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_16.addFeatures(features_BER_16);
var lyr_BER_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_16, 
                style: style_BER_16,
                interactive: true,
                title: '<img src="styles/legend/BER_16.png" /> BER'
            });
var format_BER_17 = new ol.format.GeoJSON();
var features_BER_17 = format_BER_17.readFeatures(json_BER_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_17.addFeatures(features_BER_17);
var lyr_BER_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_17, 
                style: style_BER_17,
                interactive: true,
                title: '<img src="styles/legend/BER_17.png" /> BER'
            });
var format_CAIR_18 = new ol.format.GeoJSON();
var features_CAIR_18 = format_CAIR_18.readFeatures(json_CAIR_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAIR_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAIR_18.addFeatures(features_CAIR_18);
var lyr_CAIR_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAIR_18, 
                style: style_CAIR_18,
                interactive: true,
                title: '<img src="styles/legend/CAIR_18.png" /> CAIR'
            });
var format_Delegacin_19 = new ol.format.GeoJSON();
var features_Delegacin_19 = format_Delegacin_19.readFeatures(json_Delegacin_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_19.addFeatures(features_Delegacin_19);
var lyr_Delegacin_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_19, 
                style: style_Delegacin_19,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_19.png" /> Delegación'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PEAINDEC_3.setVisible(true);lyr_PoblacinpordepartamentoINDEC_4.setVisible(true);lyr_ViviendasenreasruralesINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreassembradasdemazMAGyP_10.setVisible(true);lyr_HectreassembradasdetrigoMAGyP_11.setVisible(true);lyr_HectreassembradasdegirasolMAGyP_12.setVisible(true);lyr_HectreassembradasdecentenoMAGyP_13.setVisible(true);lyr_HectreassembradasdesojaMAGyP_14.setVisible(true);lyr_Localidades_15.setVisible(true);lyr_BER_16.setVisible(true);lyr_BER_17.setVisible(true);lyr_CAIR_18.setVisible(true);lyr_Delegacin_19.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PEAINDEC_3,lyr_PoblacinpordepartamentoINDEC_4,lyr_ViviendasenreasruralesINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreassembradasdemazMAGyP_10,lyr_HectreassembradasdetrigoMAGyP_11,lyr_HectreassembradasdegirasolMAGyP_12,lyr_HectreassembradasdecentenoMAGyP_13,lyr_HectreassembradasdesojaMAGyP_14,lyr_Localidades_15,lyr_BER_16,lyr_BER_17,lyr_CAIR_18,lyr_Delegacin_19];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PEAINDEC_3.set('fieldAliases', {'pea': 'pea', });
lyr_PoblacinpordepartamentoINDEC_4.set('fieldAliases', {'poblacion': 'poblacion', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldAliases', {'viv. rur': 'viv. rur', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_HectreassembradasdemazMAGyP_10.set('fieldAliases', {'maiz': 'maiz', });
lyr_HectreassembradasdetrigoMAGyP_11.set('fieldAliases', {'trigo': 'trigo', });
lyr_HectreassembradasdegirasolMAGyP_12.set('fieldAliases', {'girasol': 'girasol', });
lyr_HectreassembradasdecentenoMAGyP_13.set('fieldAliases', {'centeno': 'centeno', });
lyr_HectreassembradasdesojaMAGyP_14.set('fieldAliases', {'soja': 'soja', });
lyr_Localidades_15.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BER_16.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_BER_17.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_CAIR_18.set('fieldAliases', {'Nº': 'Nº', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_Delegacin_19.set('fieldAliases', {'localidad': 'localidad', 'direccion': 'direccion', 'prest 2016': 'prest 2016', 'prest 2017': 'prest 2017', 'prest 2018': 'prest 2018', 'prest 2019': 'prest 2019', 'prest 2020': 'prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'Depto': '', });
lyr_PEAINDEC_3.set('fieldImages', {'pea': 'TextEdit', });
lyr_PoblacinpordepartamentoINDEC_4.set('fieldImages', {'poblacion': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldImages', {'viv. rur': '', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_HectreassembradasdemazMAGyP_10.set('fieldImages', {'maiz': 'TextEdit', });
lyr_HectreassembradasdetrigoMAGyP_11.set('fieldImages', {'trigo': 'TextEdit', });
lyr_HectreassembradasdegirasolMAGyP_12.set('fieldImages', {'girasol': 'TextEdit', });
lyr_HectreassembradasdecentenoMAGyP_13.set('fieldImages', {'centeno': 'TextEdit', });
lyr_HectreassembradasdesojaMAGyP_14.set('fieldImages', {'soja': 'TextEdit', });
lyr_Localidades_15.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BER_16.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_BER_17.set('fieldImages', {'Localidad': '', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_CAIR_18.set('fieldImages', {'Nº': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_Delegacin_19.set('fieldImages', {'localidad': 'TextEdit', 'direccion': '', 'prest 2016': '', 'prest 2017': '', 'prest 2018': '', 'prest 2019': '', 'prest 2020': '', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PEAINDEC_3.set('fieldLabels', {'pea': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_4.set('fieldLabels', {'poblacion': 'inline label', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldLabels', {'viv. rur': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'bovinos': 'inline label', });
lyr_HectreassembradasdemazMAGyP_10.set('fieldLabels', {'maiz': 'inline label', });
lyr_HectreassembradasdetrigoMAGyP_11.set('fieldLabels', {'trigo': 'inline label', });
lyr_HectreassembradasdegirasolMAGyP_12.set('fieldLabels', {'girasol': 'inline label', });
lyr_HectreassembradasdecentenoMAGyP_13.set('fieldLabels', {'centeno': 'inline label', });
lyr_HectreassembradasdesojaMAGyP_14.set('fieldLabels', {'soja': 'inline label', });
lyr_Localidades_15.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BER_16.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_BER_17.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_CAIR_18.set('fieldLabels', {'Nº': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_Delegacin_19.set('fieldLabels', {'localidad': 'inline label', 'direccion': 'inline label', 'prest 2016': 'inline label', 'prest 2017': 'inline label', 'prest 2018': 'inline label', 'prest 2019': 'inline label', 'prest 2020': 'inline label', });
lyr_Delegacin_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});