anychart.onDocumentReady(function() {
  anychart.data.loadCsvFile('jp-data.csv', function(data) {


    var year = '2000.75';

    // The number of residents per Japan 47 Prefectures
    var aichi_resident_count = 0;
    var akita_resident_count = 0;
    var aomori_resident_count = 0;
    var chiba_resident_count = 0;
    var ehime_resident_count = 0;
    var fukui_resident_count = 0;
    var fukuoka_resident_count = 0;
    var fukushima_resident_count = 0;
    var gifu_resident_count = 0;
    var gunma_resident_count = 0;
    var hiroshima_resident_count = 0;
    var hokkaido_resident_count = 0;
    var hyogo_resident_count = 0;
    var ibaraki_resident_count = 0;
    var ishikawa_resident_count = 0;
    var iwate_resident_count = 0;
    var kagawa_resident_count = 0;
    var kagoshima_resident_count = 0;
    var kanagawa_resident_count = 0;
    var kochi_resident_count = 0;
    var kumamoto_resident_count = 0;
    var kyoto_resident_count = 0;
    var mie_resident_count = 0;
    var miyagi_resident_count = 0;
    var miyazaki_resident_count = 0;
    var nagano_resident_count = 0;

    var nagasaki_resident_count = 0;
    var nara_resident_count = 0;
    var niigata_resident_count = 0;
    var oita_resident_count = 0;
    var okayama_resident_count = 0;
    var okinawa_resident_count = 0;
    var osaka_resident_count = 0;
    var saga_resident_count = 0;
    var saitama_resident_count = 0;
    var shiga_resident_count = 0;
    var shimane_resident_count = 0;
    var shizuoka_resident_count = 0;
    var tochigi_resident_count = 0;
    var tokushima_resident_count = 0;
    var tokyo_resident_count = 0;
    var tottori_resident_count = 0;
    var toyama_resident_count = 0;
    var wakayama_resident_count = 0;
    var yamagata_resident_count = 0;
    var yamaguchi_resident_count = 0;
    var yamanashi_resident_count = 0;

    var dataSet = anychart.data.set(data, { ignoreFirstRow: true, columnsSeparator: ',', rowsSeparator: "\r\n" });
    dataSet.lc.forEach(function(item, index) {
      console.dir(dataSet.lc[index][0]);
      // console.log(index);
      if (dataSet.lc[index][0] == "Aichi-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][]);
        aichi_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Akita-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        akita_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Aomori-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        aomori_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Chiba-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        chiba_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Ehime-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        ehime_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Fukui-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        fukui_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Fukuoka-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        fukuoka_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Fukushima-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        fukushima_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Gifu-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        gifu_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Gunma-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        gunma_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Hiroshima-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        hiroshima_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Hokkaido" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        hokkaido_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Hyogo-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        hyogo_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Ibaraki-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        ibaraki_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Ishikawa-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        ishikawa_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Iwate-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        iwate_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Kagawa-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        kagawa_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Kagoshima-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        kagoshima_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Kanagawa-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        kanagawa_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Kochi-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        kochi_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Kumamoto-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        kumamoto_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Kyoto-fu" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        kyoto_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Mie-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        mie_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Miyagi-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        miyagi_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Miyazaki-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        miyazaki_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Nagano-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        nagano_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Nagasaki-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        nagasaki_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Nara-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        nara_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Niigata-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        niigata_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Oita-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        oita_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Okayama-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        okayama_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Okinawa-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        okinawa_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Osaka-fu" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        osaka_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Saga-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        saga_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Saitama-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        saitama_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Shiga-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        shiga_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Shimane-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        shimane_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Shizuoka-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        shizuoka_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Tochigi-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        tochigi_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Tokushima-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        tokushima_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Tokyo-to" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        tokyo_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Tottori-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        tottori_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Toyama-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        toyama_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Wakayama-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        wakayama_resident_count += Number(dataSet.lc[index][2]);
      }
      else if (dataSet.lc[index][0] == "Yamagata-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        yamagata_resident_count += Number(dataSet.lc[index][2]);
      } else if (dataSet.lc[index][0] == "Yamaguchi-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        yamaguchi_resident_count += Number(dataSet.lc[index][2]);
      } else if (dataSet.lc[index][0] == "Yamanashi-ken" && dataSet.lc[index][1] == year) {
        // console.log(dataSet.lc[index][2]);
        yamanashi_resident_count += Number(dataSet.lc[index][2]);
      }
    })


    var map = anychart.map();


    // //Appending data to the data set
    dataSet.append({ "id": "JP.HS", "value": hiroshima_resident_count });
    dataSet.append({ "id": "JP.OY", "value": okayama_resident_count });
    dataSet.append({ "id": "JP.SM", "value": shimane_resident_count });
    dataSet.append({ "id": "JP.TT", "value": tottori_resident_count });
    dataSet.append({ "id": "JP.YC", "value": yamaguchi_resident_count });
    dataSet.append({ "id": "JP.SG", "value": saga_resident_count });
    dataSet.append({ "id": "JP.FO", "value": fukuoka_resident_count });
    dataSet.append({ "id": "JP.KM", "value": kumamoto_resident_count });
    dataSet.append({ "id": "JP.MZ", "value": miyazaki_resident_count });
    dataSet.append({ "id": "JP.EH", "value": ehime_resident_count });
    dataSet.append({ "id": "JP.KG", "value": kagawa_resident_count });
    dataSet.append({ "id": "JP.KC", "value": kochi_resident_count });
    dataSet.append({ "id": "JP.OT", "value": oita_resident_count });
    dataSet.append({ "id": "JP.TS", "value": tokushima_resident_count });
    dataSet.append({ "id": "JP.AI", "value": aichi_resident_count });
    dataSet.append({ "id": "JP.GF", "value": gifu_resident_count });
    dataSet.append({ "id": "JP.IS", "value": ishikawa_resident_count });
    dataSet.append({ "id": "JP.ME", "value": mie_resident_count });
    dataSet.append({ "id": "JP.NN", "value": nagano_resident_count });
    dataSet.append({ "id": "JP.SZ", "value": shizuoka_resident_count });
    dataSet.append({ "id": "JP.TY", "value": toyama_resident_count });
    dataSet.append({ "id": "JP.HK", "value": hokkaido_resident_count });
    dataSet.append({ "id": "JP.FI", "value": fukui_resident_count });
    dataSet.append({ "id": "JP.HG", "value": hyogo_resident_count });
    dataSet.append({ "id": "JP.KY", "value": kyoto_resident_count });
    dataSet.append({ "id": "JP.NR", "value": nara_resident_count });
    dataSet.append({ "id": "JP.OS", "value": osaka_resident_count });
    dataSet.append({ "id": "JP.SH", "value": shiga_resident_count });
    dataSet.append({ "id": "JP.WK", "value": wakayama_resident_count });
    dataSet.append({ "id": "JP.CH", "value": chiba_resident_count });
    dataSet.append({ "id": "JP.IB", "value": ibaraki_resident_count });
    dataSet.append({ "id": "JP.KN", "value": kanagawa_resident_count });
    dataSet.append({ "id": "JP.ST", "value": saitama_resident_count });
    dataSet.append({ "id": "JP.TC", "value": tochigi_resident_count });
    dataSet.append({ "id": "JP.TK", "value": tokyo_resident_count });
    dataSet.append({ "id": "JP.YN", "value": yamanashi_resident_count });
    dataSet.append({ "id": "JP.AK", "value": akita_resident_count });
    dataSet.append({ "id": "JP.AO", "value": aomori_resident_count });
    dataSet.append({ "id": "JP.FS", "value": fukushima_resident_count });
    dataSet.append({ "id": "JP.IW", "value": iwate_resident_count });
    dataSet.append({ "id": "JP.MG", "value": miyagi_resident_count });
    dataSet.append({ "id": "JP.NI", "value": niigata_resident_count });
    dataSet.append({ "id": "JP.YT", "value": yamagata_resident_count });
    dataSet.append({ "id": "JP.NS", "value": nagasaki_resident_count });
    dataSet.append({ "id": "JP.KS", "value": kagoshima_resident_count });
    dataSet.append({ "id": "JP.ON", "value": okinawa_resident_count });
    dataSet.append({ "id": "JP.GM", "value": gunma_resident_count });

    series = map.choropleth(dataSet);
    map.title().useHtml(true).hAlign('center');
    map.title('<span style="font-size: 18px;"><b>Japan Resident Count</b></span><br><span style= "font-size: 12px;"> Year 2005</span>');

    series.labels(true);
    labels = series.labels();

    labels.fontColor('black');
    labels.fontSize("9px");
    labels.offsetX(-12);

    series.geoIdField('id');

    series.colorScale(anychart.scales.linearColor('#deebf7', '#3182bd'));
    series.hovered().fill('#adddBe');

    map.geoData(anychart.maps["japan"]);
    map.container('container');
    map.draw();
  });
});
