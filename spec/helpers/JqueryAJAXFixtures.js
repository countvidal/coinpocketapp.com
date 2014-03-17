$.getJSON = function(endPoint, data, hollaback) {
  if (typeof data === 'function') {
    hollaback = data;
  }

  if (endPoint === "https://query.yahooapis.com/v1/public/yql") {

    if (data.q === 'select * from json where url="http://blockchain.info/rawaddr/1M3p9Gfhn9vrPgjYLZEcFSnxSM6WuCVm2Y-empty"') {
      // Empty transactions
      var json = {
        "address": "1M3p9Gfhn9vrPgjYLZEcFSnxSM6WuCVm2Y",
        "final_balance": 0,
        "hash160": "dbeab3439788b867c4f212e73f42a6648db1a1b7",
        "n_tx": 0,
        "total_received": 0,
        "total_sent": 0,
        "txs": []
      }

      hollaback({ 'query': { 'results': { 'json': json } } } );
    } else if (data.q === 'select * from json where url="http://blockchain.info/rawaddr/1KCVyR5Ucq3ExNhVFwbTWkeviU1ZpWpSoH-2credit1debit"') {
      // 2 credits and 1 debit
      var json = {
        "address": "1KCVyR5Ucq3ExNhVFwbTWkeviU1ZpWpSoH-2credit1debit",
        "final_balance": 1000000000,
        "hash160": "c79f065d1f516c93776114325be061c5bfd63793",
        "n_tx": 3,
        "total_received": 1001000000,
        "total_sent": 1000000,
        "txs": [
          {
          "block_height": 279165,
          "hash": "f981384f0d4da2b90774226e4e89fd39d0e092922c0f69630cd9e1f9762970da",
          "inputs": [
            {
            "prev_out": {
              "addr": "18J6nWWgRHKY6owWgJ3cXrixfi5TsdwVi",
              "n": 2,
              "tx_index": 106531578,
              "type": 0,
              "value": 3359622
            }
          },
          {
            "prev_out": {
              "addr": "1CHhMZMFmJK18RdBGLGyyhtxcM6a3jcJEz",
              "n": 0,
              "tx_index": 106539715,
              "type": 0,
              "value": 1000000000
            }
          }
          ],
          "out": [
            {
            "addr": "1KCVyR5Ucq3ExNhVFwbTWkeviU1ZpWpSoH-2credit1debit",
            "n": 0,
            "tx_index": 106538049,
            "type": 0,
            "value": 1000000000
          },
          {
            "addr": "1MRCFzZqSWp3JckWkBFRZfq5hwf7qM8E2B",
            "n": 1,
            "tx_index": 106538049,
            "type": 0,
            "value": 3339622
          }
          ],
          "relayed_by": "127.0.0.1",
          "result": 0,
          "size": 438,
          "time": 1389124087,
          "tx_index": 106538049,
          "ver": 1,
          "vin_sz": 2,
          "vout_sz": 2
        },
        {
          "block_height": 279054,
          "hash": "873b2a002b466b20c05ded50b0f0d7e378a24709acf31b9de35a90d1d5433d65",
          "inputs": [
            {
            "prev_out": {
              "addr": "1KCVyR5Ucq3ExNhVFwbTWkeviU1ZpWpSoH-2credit1debit",
              "n": 0,
              "tx_index": 105431468,
              "type": 0,
              "value": 1000000
            }
          }
          ],
          "out": [
            {
            "addr": "13YiSyhdhHoxL1LZuufh4JFSLQix1N72LA",
            "n": 0,
            "tx_index": 106416936,
            "type": 0,
            "value": 990000
          }
          ],
          "relayed_by": "127.0.0.1",
          "result": 1000000000,
          "size": 224,
          "time": 1389067925,
          "tx_index": 106416936,
          "ver": 1,
          "vin_sz": 1,
          "vout_sz": 1
        },
        {
          "block_height": 278021,
          "hash": "c715981656ddfd6750a984f94573467f4908b772d649a24abe193b3b73ea9e2b",
          "inputs": [
            {
            "prev_out": {
              "addr": "17acNyKGtieoi1QKo6vvPVtGVAsACJycsc",
              "n": 0,
              "tx_index": 105262311,
              "type": 0,
              "value": 3980000
            }
          }
          ],
          "out": [
            {
            "addr": "1KCVyR5Ucq3ExNhVFwbTWkeviU1ZpWpSoH-2credit1debit",
            "n": 0,
            "tx_index": 105431468,
            "type": 0,
            "value": 1000000
          },
          {
            "addr": "16h3XtawehExMx8DadgCEYTPQXdceUK6uT",
            "n": 1,
            "tx_index": 105431468,
            "type": 0,
            "value": 2970000
          }
          ],
          "relayed_by": "46.246.58.138",
          "result": -1000000,
          "size": 226,
          "time": 1388545895,
          "tx_index": 105431468,
          "ver": 1,
          "vin_sz": 1,
          "vout_sz": 2
        }
        ]
      }

      hollaback({ 'query': { 'results': { 'json': json } } } );
    } else if (data.q === 'select * from json where url="http://blockchain.info/latestblock"') {
      var json = {
        "hash":"0000000000000000116ae4d98ce0d0e51955cb746c95e1976a2f5ea450b8785b",
        "time":1394339523,
        "block_index":473256,
        "height":289645,
        "txIndexes":[114833593,114833639,114833638,114833637,114833636,114833635,114833634,114833632,114833631,114833630,114833629,114833628,114833627,114833626,114833625,114833624,114833623,114833622,114833621,114833620,114833619,114833618,114833617,114833616,114833615,114833614,114833613,114833612,114833611,114833610,114833609,114833608,114833607,114833606,114833605,114833604,114833603,114833602,114833601,114833600,114833599,114833598,114833597,114833596,114833595,114833594,114833577,114833576,114833574,114833573,114833572,114833571,114833570,114833568,114833566,114833558,114833556,114833555,114833553,114833550,114833549,114833548,114833547,114833546,114833545,114833544,114833543,114833542,114833541,114833540,114833539,114833538,114833537,114833536,114833535,114833534,114833533,114833532,114833531,114833530,114833529,114833528,114833527,114833526,114833525,114833524,114833523,114833522,114833521,114833520,114833519,114833518,114833517,114833516,114833515,114833514,114833513,114833512,114833511,114833510,114833509,114833508,114833507,114833506,114833505,114833504,114833503,114833499,114833498,114833497,114833495,114833494,114833493,114833492,114833491,114833490,114833489,114833488,114833487,114833486,114833484,114833482,114833481,114833480,114833479,114833478,114833477,114833476,114833475,114833474,114833473,114833472,114833471,114833470,114833467,114833465,114833463,114833461,114833460,114833456,114833455,114833451,114833450,114833449,114833448,114833447,114833446,114833445,114833444,114833443,114833442,114833441,114833440,114833438,114833437,114833436,114833434,114833429,114833428,114833427,114833426,114833424,114833423,114833422,114833421,114833420,114833417,114833416,114833415,114833414,114833413,114833412,114833410,114833409,114833408,114833407,114833406,114833405,114833404,114833402,114833398,114833396,114833394,114833393,114833392,114833390,114833387,114833386,114833385,114833383,114833382,114833380,114833379,114833378,114833377,114833376,114833375,114833374,114833371,114833370,114833369,114833368,114833364,114833363,114833361,114833360,114833359,114833358,114833357,114833356,114833355,114833354,114833353,114833352,114833351,114833350,114833349,114833348,114833347,114833346,114833345,114833344,114833343,114833342,114833341,114833340,114833339,114833338,114833336,114833335,114833334,114833332,114833331,114833330,114833329,114833328,114833327,114833326,114833325,114833324,114833323,114833322,114833321,114833320,114833319,114833318,114833317,114833316,114833315,114833313,114833311,114833310,114833309,114833308,114833307,114833306,114833305,114833304,114833303,114833302,114833301,114833300,114833299,114833298,114833297,114833296,114833295,114833294,114833291,114833290,114833233,114833232,114833228,114833227,114833226,114833225,114833224,114833223,114833222,114833221,114833220,114833219,114833218,114833217,114833216,114833215,114833214,114833213,114831718,114831717,114831716,114831715,114831714,114831713,114831712,114831711,114831710,114831709,114831708,114831707,114831706,114831705,114831704,114831703,114831702,114831701,114831700,114831699,114831698,114831697,114831696,114831695,114831694,114831692,114831691,114831690,114831689,114831688,114831687,114831686,114831685,114831684,114831683,114831682,114831681,114831680,114831679,114831678,114831677,114831676,114831675,114831674,114831673,114831672,114831671,114831670,114831669,114831668,114831667,114831666,114831665,114831664,114831663,114831662,114831661,114831660,114831659,114831658,114831657,114831656,114831655,114831654,114831653,114831652,114831651,114831650,114831649,114831648,114831647]
      }

      hollaback({ 'query': { 'results': { 'json': json } } } );
    } else {
      console.log("Need to stub AJAX request in spec/helpers/JqueryAJAXFixtures.js for yql '" + data.q + "'");
    }

  } else {
    console.log("Need to stub AJAX request in spec/helpers/JqueryAJAXFixtures.js for $.getJSON('" + endPoint + "')");
  }

}