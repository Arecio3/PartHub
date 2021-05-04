const Hdd = require('../models');

const hddData = [
    {
      "Type": "HDD",
      "Part Number": "WD121KRYZ",
      "Brand": "WD",
      "Model": "Gold 12TB (2017)",
      "Rank": 1,
      "Benchmark": 111,
      "Samples": 656,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/391336/WDC-WD121KRYZ-01"
    },
    {
      "Type": "HDD",
      "Part Number": "WD101KRYZ",
      "Brand": "WD",
      "Model": "Gold 10TB (2016)",
      "Rank": 2,
      "Benchmark": 107,
      "Samples": 859,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/171115/WDC-WD101KRYZ-01JPDB0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD6002FRYZ",
      "Brand": "WD",
      "Model": "Gold 6TB (2016)",
      "Rank": 3,
      "Benchmark": 102,
      "Samples": 1508,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/167511/WDC-WD6002FRYZ-01WD5"
    },
    {
      "Type": "HDD",
      "Part Number": "WD6002FZWX",
      "Brand": "WD",
      "Model": "Black 6TB (2016)",
      "Rank": 4,
      "Benchmark": 100,
      "Samples": 4919,
      "URL": "https://hdd.userbenchmark.com/WD-Black-6TB-2016/Rating/3927"
    },
    {
      "Type": "HDD",
      "Part Number": "WD6002FFWX",
      "Brand": "WD",
      "Model": "Red Pro 6TB (2015)",
      "Rank": 5,
      "Benchmark": 99.5,
      "Samples": 821,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/139230/WDC-WD6002FFWX-68TZ4N0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD8003FRYZ",
      "Brand": "WD",
      "Model": "Gold 8TB (256MB Cache 2017)",
      "Rank": 6,
      "Benchmark": 99.5,
      "Samples": 561,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/388081/WDC-WD8003FRYZ-01JPDB1"
    },
    {
      "Type": "HDD",
      "Part Number": "0S03839",
      "Brand": "HGST",
      "Model": "Deskstar NAS 6TB",
      "Rank": 7,
      "Benchmark": 96.7,
      "Samples": 819,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/22222/HGST-HDN726060ALE610"
    },
    {
      "Type": "HDD",
      "Part Number": "WD8002FRYZ",
      "Brand": "WD",
      "Model": "Gold 8TB (128MB Cache 2016)",
      "Rank": 8,
      "Benchmark": 95.1,
      "Samples": 216,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/226349/WDC-WD8002FRYZ-01FF2B0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD6001FZWX",
      "Brand": "WD",
      "Model": "Black 6TB (2015)",
      "Rank": 9,
      "Benchmark": 95,
      "Samples": 3498,
      "URL": "https://hdd.userbenchmark.com/WD-Black-6TB-2015/Rating/3519"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1000DHTZ",
      "Brand": "WD",
      "Model": "VelociRaptor 1TB",
      "Rank": 10,
      "Benchmark": 94.9,
      "Samples": 5482,
      "URL": "https://hdd.userbenchmark.com/WD-VelociRaptor-1TB/Rating/1389"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3000DM008",
      "Brand": "Seagate",
      "Model": "Barracuda 3TB (2016)",
      "Rank": 11,
      "Benchmark": 94.9,
      "Samples": 88110,
      "URL": "https://hdd.userbenchmark.com/Seagate-Barracuda-3TB-2016/Rating/3898"
    },
    {
      "Type": "HDD",
      "Part Number": "ST4000VN008",
      "Brand": "Seagate",
      "Model": "IronWolf 4TB (2016)",
      "Rank": 12,
      "Benchmark": 94,
      "Samples": 11855,
      "URL": "https://hdd.userbenchmark.com/Seagate-IronWolf-4TB-2016/Rating/3906"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000BHTZ",
      "Brand": "WD",
      "Model": "VelociRaptor 2.5\" 500GB",
      "Rank": 13,
      "Benchmark": 93.3,
      "Samples": 351,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11902/WDC-WD5000BHTZ-04JCPV1"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000DM010",
      "Brand": "Seagate",
      "Model": "Barracuda 1TB (2016)",
      "Rank": 14,
      "Benchmark": 92.2,
      "Samples": 731390,
      "URL": "https://hdd.userbenchmark.com/Seagate-Barracuda-1TB-2016/Rating/3896"
    },
    {
      "Type": "HDD",
      "Part Number": "WD4004FZWX",
      "Brand": "WD",
      "Model": "Black 4TB (2016)",
      "Rank": 15,
      "Benchmark": 92.1,
      "Samples": 6795,
      "URL": "https://hdd.userbenchmark.com/WD-Black-4TB-2016/Rating/3908"
    },
    {
      "Type": "HDD",
      "Part Number": "WD4002FYYZ",
      "Brand": "WD",
      "Model": "Gold 4TB (2016)",
      "Rank": 16,
      "Benchmark": 92,
      "Samples": 3204,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/147091/WDC-WD4002FYYZ-01B7CB0"
    },
    {
      "Type": "HDD",
      "Part Number": "ST6000DM001",
      "Brand": "Seagate",
      "Model": "Desktop HDD 6TB (2015)",
      "Rank": 17,
      "Benchmark": 92,
      "Samples": 655,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/36984/ST6000DM001-1XY17Z"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3000VX000",
      "Brand": "Seagate",
      "Model": "Video SV35.6 Series 3TB",
      "Rank": 18,
      "Benchmark": 91.8,
      "Samples": 4072,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4903/ST3000VX000-9YW166"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000HHTZ",
      "Brand": "WD",
      "Model": "VelociRaptor 500GB",
      "Rank": 19,
      "Benchmark": 91.7,
      "Samples": 7050,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1434/WDC-WD5000HHTZ-04N21V0"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000DM006",
      "Brand": "Seagate",
      "Model": "Barracuda 2TB (2016)",
      "Rank": 20,
      "Benchmark": 91.5,
      "Samples": 417040,
      "URL": "https://hdd.userbenchmark.com/Seagate-Barracuda-2TB-2016/Rating/3897"
    },
    {
      "Type": "HDD",
      "Part Number": "0F23267",
      "Brand": "HGST",
      "Model": "Ultrastar He8 Helium 8TB",
      "Rank": 21,
      "Benchmark": 91.4,
      "Samples": 738,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/29773/HGST-HUH728080ALE600"
    },
    {
      "Type": "HDD",
      "Part Number": "0F23668",
      "Brand": "HGST",
      "Model": "Ultrastar He8 Helium 8TB",
      "Rank": 21,
      "Benchmark": 91.4,
      "Samples": 738,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/29773/HGST-HUH728080ALE600"
    },
    {
      "Type": "HDD",
      "Part Number": "WD100EFAX",
      "Brand": "WD",
      "Model": "Red 10TB (2017)",
      "Rank": 22,
      "Benchmark": 91.4,
      "Samples": 1405,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/324807/WDC-WD100EFAX-68LHPN0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2005FBYZ",
      "Brand": "WD",
      "Model": "Gold 2TB (2016)",
      "Rank": 23,
      "Benchmark": 91.2,
      "Samples": 4157,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/206650/WDC-WD2005FBYZ-01YCBB1"
    },
    {
      "Type": "HDD",
      "Part Number": "ST6000DX000",
      "Brand": "Seagate",
      "Model": "Desktop HDD 6TB (2014)",
      "Rank": 24,
      "Benchmark": 90.8,
      "Samples": 1026,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12188/ST6000DX000-1H217Z"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000DM001",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.14 2TB",
      "Rank": 25,
      "Benchmark": 90.4,
      "Samples": 637722,
      "URL": "https://hdd.userbenchmark.com/Seagate-Barracuda-720014-2TB/Rating/1619"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000VX000",
      "Brand": "Seagate",
      "Model": "Video SV35.6 Series 2TB",
      "Rank": 26,
      "Benchmark": 90.4,
      "Samples": 9075,
      "URL": "https://hdd.userbenchmark.com/Seagate-Video-SV356-Series-2TB/Rating/1816"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWD120XZSTA",
      "Brand": "Toshiba",
      "Model": "P300 2TB",
      "Rank": 27,
      "Benchmark": 89.9,
      "Samples": 74337,
      "URL": "https://hdd.userbenchmark.com/Toshiba-P300-2TB/Rating/3590"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWD120EZSTA",
      "Brand": "Toshiba",
      "Model": "P300 2TB",
      "Rank": 27,
      "Benchmark": 89.9,
      "Samples": 74337,
      "URL": "https://hdd.userbenchmark.com/Toshiba-P300-2TB/Rating/3590"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWD120UZSVA",
      "Brand": "Toshiba",
      "Model": "P300 2TB",
      "Rank": 27,
      "Benchmark": 89.9,
      "Samples": 74337,
      "URL": "https://hdd.userbenchmark.com/Toshiba-P300-2TB/Rating/3590"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5001FZWX",
      "Brand": "WD",
      "Model": "Black 5TB (2015)",
      "Rank": 28,
      "Benchmark": 89.8,
      "Samples": 5467,
      "URL": "https://hdd.userbenchmark.com/WD-Black-5TB-2015/Rating/3907"
    },
    {
      "Type": "HDD",
      "Part Number": "ST5000DM002",
      "Brand": "Seagate",
      "Model": "Desktop HDD 5TB (2015)",
      "Rank": 29,
      "Benchmark": 89.5,
      "Samples": 243,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/123827/ST5000DM002-1XY17X"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3000DM001",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.14 3TB",
      "Rank": 30,
      "Benchmark": 89.5,
      "Samples": 178373,
      "URL": "https://hdd.userbenchmark.com/Seagate-Barracuda-720014-3TB/Rating/1374"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3000NC002",
      "Brand": "Seagate",
      "Model": "Constellation CS 3TB",
      "Rank": 31,
      "Benchmark": 89.3,
      "Samples": 584,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5929/ST3000NC002-1DY166"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2500HHTZ",
      "Brand": "WD",
      "Model": "VelociRaptor 250GB",
      "Rank": 32,
      "Benchmark": 89.2,
      "Samples": 1950,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/139/WDC-WD2500HHTZ-04N21V0"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000DM003",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.14 1TB",
      "Rank": 33,
      "Benchmark": 89.2,
      "Samples": 1247334,
      "URL": "https://hdd.userbenchmark.com/Seagate-Barracuda-720014-1TB/Rating/1849"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWD130XZSTA",
      "Brand": "Toshiba",
      "Model": "P300 3TB",
      "Rank": 34,
      "Benchmark": 88.8,
      "Samples": 60021,
      "URL": "https://hdd.userbenchmark.com/Toshiba-P300-3TB/Rating/3591"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWD130EZSTA",
      "Brand": "Toshiba",
      "Model": "P300 3TB",
      "Rank": 34,
      "Benchmark": 88.8,
      "Samples": 60021,
      "URL": "https://hdd.userbenchmark.com/Toshiba-P300-3TB/Rating/3591"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWD130UZSVA",
      "Brand": "Toshiba",
      "Model": "P300 3TB",
      "Rank": 34,
      "Benchmark": 88.8,
      "Samples": 60021,
      "URL": "https://hdd.userbenchmark.com/Toshiba-P300-3TB/Rating/3591"
    },
    {
      "Type": "HDD",
      "Part Number": "ST4000VX007",
      "Brand": "Seagate",
      "Model": "SkyHawk 4TB (2016)",
      "Rank": 35,
      "Benchmark": 88.5,
      "Samples": 4889,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/215593/ST4000VX007-2DT166"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000DM008",
      "Brand": "Seagate",
      "Model": "Barracuda 2TB (2018)",
      "Rank": 36,
      "Benchmark": 88.4,
      "Samples": 358529,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/466743/ST2000DM008-2FR102"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000VX000",
      "Brand": "Seagate",
      "Model": "Video SV35.6 Series 1TB",
      "Rank": 37,
      "Benchmark": 88.4,
      "Samples": 14213,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6250/ST1000VX-ST1000VX000-1CU1"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWE150XZSTA",
      "Brand": "Toshiba",
      "Model": "X300 5TB",
      "Rank": 38,
      "Benchmark": 88.3,
      "Samples": 10018,
      "URL": "https://hdd.userbenchmark.com/Toshiba-X300-5TB/Rating/3593"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWE150EZSTA",
      "Brand": "Toshiba",
      "Model": "X300 5TB",
      "Rank": 38,
      "Benchmark": 88.3,
      "Samples": 10018,
      "URL": "https://hdd.userbenchmark.com/Toshiba-X300-5TB/Rating/3593"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1005FBYZ",
      "Brand": "WD",
      "Model": "Gold 1TB (2016)",
      "Rank": 39,
      "Benchmark": 88.2,
      "Samples": 2398,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/204853/WDC-WD1005FBYZ-01YCBB1"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWE160XZSTA",
      "Brand": "Toshiba",
      "Model": "X300 6TB",
      "Rank": 40,
      "Benchmark": 87.5,
      "Samples": 4209,
      "URL": "https://hdd.userbenchmark.com/Toshiba-X300-6TB/Rating/3594"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWE160EZSTA",
      "Brand": "Toshiba",
      "Model": "X300 6TB",
      "Rank": 40,
      "Benchmark": 87.5,
      "Samples": 4209,
      "URL": "https://hdd.userbenchmark.com/Toshiba-X300-6TB/Rating/3594"
    },
    {
      "Type": "HDD",
      "Part Number": "WD80EFAX",
      "Brand": "WD",
      "Model": "Red 8TB (2017)",
      "Rank": 41,
      "Benchmark": 87.4,
      "Samples": 3639,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/314696/WDC-WD80EFAX-68LHPN0"
    },
    {
      "Type": "HDD",
      "Part Number": "HUS156045VLS600",
      "Brand": "Hitachi",
      "Model": "UltraStar 15K600 450GB",
      "Rank": 42,
      "Benchmark": 87.4,
      "Samples": 89,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9674/HITACHI-HUS156045VLS600"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2003FZEX",
      "Brand": "WD",
      "Model": "Black 2TB (2013)",
      "Rank": 43,
      "Benchmark": 87.2,
      "Samples": 109119,
      "URL": "https://hdd.userbenchmark.com/WD-Black-2TB-2013/Rating/1821"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "DT01ACA200 2TB",
      "Rank": 44,
      "Benchmark": 87,
      "Samples": 257467,
      "URL": "https://hdd.userbenchmark.com/Toshiba-DT01ACA200-2TB/Rating/2736"
    },
    {
      "Type": "HDD",
      "Part Number": "PH3600U-1I72",
      "Brand": "Toshiba",
      "Model": "MD04ACA600 6TB",
      "Rank": 45,
      "Benchmark": 86.7,
      "Samples": 487,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/35546/TOSHIBA-MD04ACA600"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWE140XZSTA",
      "Brand": "Toshiba",
      "Model": "X300 4TB",
      "Rank": 46,
      "Benchmark": 86.3,
      "Samples": 17722,
      "URL": "https://hdd.userbenchmark.com/Toshiba-X300-4TB/Rating/3592"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWE140EZSTA",
      "Brand": "Toshiba",
      "Model": "X300 4TB",
      "Rank": 46,
      "Benchmark": 86.3,
      "Samples": 17722,
      "URL": "https://hdd.userbenchmark.com/Toshiba-X300-4TB/Rating/3592"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000NM0033",
      "Brand": "Seagate",
      "Model": "Constellation ES.3 2TB",
      "Rank": 47,
      "Benchmark": 86.2,
      "Samples": 3393,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12036/ST2000NM0033-9ZM175"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000NC001",
      "Brand": "Seagate",
      "Model": "Constellation CS 2TB",
      "Rank": 48,
      "Benchmark": 86.2,
      "Samples": 516,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10959/ST2000NC001-1DY164"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3001FFSX",
      "Brand": "WD",
      "Model": "Red Pro 3TB (2014)",
      "Rank": 49,
      "Benchmark": 86.1,
      "Samples": 455,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/27132/WDC-WD3001FFSX-68JNUN0"
    },
    {
      "Type": "HDD",
      "Part Number": "0S03835",
      "Brand": "HGST",
      "Model": "Deskstar NAS 5TB",
      "Rank": 50,
      "Benchmark": 85.6,
      "Samples": 536,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/36844/HGST-HDN726050ALE610"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3000VN007",
      "Brand": "Seagate",
      "Model": "IronWolf 3TB (2016)",
      "Rank": 51,
      "Benchmark": 85.4,
      "Samples": 2829,
      "URL": "https://hdd.userbenchmark.com/Seagate-IronWolf-3TB-2016/Rating/3905"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000DX002",
      "Brand": "Seagate",
      "Model": "FireCuda SSHD 2TB (2016)",
      "Rank": 52,
      "Benchmark": 85.2,
      "Samples": 98933,
      "URL": "https://hdd.userbenchmark.com/Seagate-FireCuda-SSHD-2TB-2016/Rating/3903"
    },
    {
      "Type": "HDD",
      "Part Number": "PH3500U-1I72",
      "Brand": "Toshiba",
      "Model": "MD04ACA500 5TB",
      "Rank": 53,
      "Benchmark": 85.1,
      "Samples": 2501,
      "URL": "https://hdd.userbenchmark.com/Toshiba-MD04ACA500-5TB/Rating/3526"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3000VX010",
      "Brand": "Seagate",
      "Model": "SkyHawk 3TB (2016)",
      "Rank": 54,
      "Benchmark": 85.1,
      "Samples": 1500,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/237204/ST3000VX010-2E3166"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000DX001",
      "Brand": "Seagate",
      "Model": "Desktop SSHD 1TB",
      "Rank": 55,
      "Benchmark": 84.9,
      "Samples": 87202,
      "URL": "https://hdd.userbenchmark.com/Seagate-Desktop-SSHD-1TB/Rating/1784"
    },
    {
      "Type": "HDD",
      "Part Number": "PH3400U-1I72",
      "Brand": "Toshiba",
      "Model": "MD04ACA400 4TB",
      "Rank": 56,
      "Benchmark": 84.5,
      "Samples": 8036,
      "URL": "https://hdd.userbenchmark.com/Toshiba-MD04ACA400-4TB/Rating/3202"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWD110XZSTA",
      "Brand": "Toshiba",
      "Model": "P300 1TB",
      "Rank": 57,
      "Benchmark": 84.3,
      "Samples": 227057,
      "URL": "https://hdd.userbenchmark.com/Toshiba-P300-1TB/Rating/3589"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWD110EZSTA",
      "Brand": "Toshiba",
      "Model": "P300 1TB",
      "Rank": 57,
      "Benchmark": 84.3,
      "Samples": 227057,
      "URL": "https://hdd.userbenchmark.com/Toshiba-P300-1TB/Rating/3589"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWD110UZSVA",
      "Brand": "Toshiba",
      "Model": "P300 1TB",
      "Rank": 57,
      "Benchmark": 84.3,
      "Samples": 227057,
      "URL": "https://hdd.userbenchmark.com/Toshiba-P300-1TB/Rating/3589"
    },
    {
      "Type": "HDD",
      "Part Number": "ST4000DM005",
      "Brand": "Seagate",
      "Model": "Barracuda 4TB (2016)",
      "Rank": 58,
      "Benchmark": 84.1,
      "Samples": 28354,
      "URL": "https://hdd.userbenchmark.com/Seagate-Barracuda-4TB-2016/Rating/3899"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1003FZEX",
      "Brand": "WD",
      "Model": "Black 1TB (2013)",
      "Rank": 59,
      "Benchmark": 84.1,
      "Samples": 182137,
      "URL": "https://hdd.userbenchmark.com/WD-Black-1TB-2013/Rating/1822"
    },
    {
      "Type": "HDD",
      "Part Number": "WD4001FFSX",
      "Brand": "WD",
      "Model": "Red Pro 4TB (2014)",
      "Rank": 60,
      "Benchmark": 84,
      "Samples": 500,
      "URL": "https://hdd.userbenchmark.com/WD-Red-Pro-4TB-2014/Rating/2664"
    },
    {
      "Type": "HDD",
      "Part Number": "ST500DM009",
      "Brand": "Seagate",
      "Model": "Barracuda 500GB (2016)",
      "Rank": 61,
      "Benchmark": 83.9,
      "Samples": 11164,
      "URL": "https://hdd.userbenchmark.com/Seagate-Barracuda-500GB-2016/Rating/3909"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "DT01ACA300 3TB",
      "Rank": 62,
      "Benchmark": 83.8,
      "Samples": 67481,
      "URL": "https://hdd.userbenchmark.com/Toshiba-DT01ACA300-3TB/Rating/2735"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3300657SS",
      "Brand": "Seagate",
      "Model": "Cheetah 15K.7 SAS 300GB",
      "Rank": 63,
      "Benchmark": 83.5,
      "Samples": 889,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9679/SEAGATE-ST3300657SS"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000NM0033",
      "Brand": "Seagate",
      "Model": "Constellation ES.3 1TB",
      "Rank": 64,
      "Benchmark": 83.4,
      "Samples": 6781,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7297/ST1000NM0033-9ZM173"
    },
    {
      "Type": "HDD",
      "Part Number": "WD40EZRZ",
      "Brand": "WD",
      "Model": "Blue 4TB (2015)",
      "Rank": 65,
      "Benchmark": 83.2,
      "Samples": 96230,
      "URL": "https://hdd.userbenchmark.com/WD-Blue-4TB-2015/Rating/3523"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000VN004",
      "Brand": "Seagate",
      "Model": "IronWolf 2TB (2016)",
      "Rank": 66,
      "Benchmark": 82.9,
      "Samples": 3420,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/245098/ST2000VN004-2E4164"
    },
    {
      "Type": "HDD",
      "Part Number": "WD40PURZ",
      "Brand": "WD",
      "Model": "Purple Surveillance 4TB (2017)",
      "Rank": 67,
      "Benchmark": 82.8,
      "Samples": 4799,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/433989/WDC-WD40PURZ-85T"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000DX001",
      "Brand": "Seagate",
      "Model": "Desktop SSHD 2TB",
      "Rank": 68,
      "Benchmark": 82.4,
      "Samples": 67767,
      "URL": "https://hdd.userbenchmark.com/Seagate-Desktop-SSHD-2TB/Rating/1783"
    },
    {
      "Type": "HDD",
      "Part Number": "STCL2000400",
      "Brand": "Seagate",
      "Model": "Desktop SSHD 2TB",
      "Rank": 68,
      "Benchmark": 82.4,
      "Samples": 67767,
      "URL": "https://hdd.userbenchmark.com/Seagate-Desktop-SSHD-2TB/Rating/1783"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10EZEX",
      "Brand": "WD",
      "Model": "Blue 1TB (2012)",
      "Rank": 69,
      "Benchmark": 82.3,
      "Samples": 2565748,
      "URL": "https://hdd.userbenchmark.com/WD-Blue-1TB-2012/Rating/1779"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000VX008",
      "Brand": "Seagate",
      "Model": "SkyHawk 2TB (2016)",
      "Rank": 70,
      "Benchmark": 82,
      "Samples": 5842,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/211060/ST2000VX008-2E3164"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "DT01ACA100 1TB",
      "Rank": 71,
      "Benchmark": 81.9,
      "Samples": 611096,
      "URL": "https://hdd.userbenchmark.com/Toshiba-DT01ACA100-1TB/Rating/2737"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3000FYYZ",
      "Brand": "WD",
      "Model": "Re 3TB (2012)",
      "Rank": 72,
      "Benchmark": 81.8,
      "Samples": 1515,
      "URL": "https://hdd.userbenchmark.com/WD-Re-3TB-2012/Rating/2665"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3003FZEX",
      "Brand": "WD",
      "Model": "Black 3TB (2013)",
      "Rank": 73,
      "Benchmark": 81.6,
      "Samples": 12859,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5002/WDC-WD3003FZEX-00Z4SA0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5003AZEX",
      "Brand": "WD",
      "Model": "Black 500GB (2012)",
      "Rank": 74,
      "Benchmark": 81.4,
      "Samples": 16605,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2070/WDC-WD5003AZEX-00K1GA0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD80PURZ",
      "Brand": "WD",
      "Model": "Purple Surveillance 8TB (2017)",
      "Rank": 75,
      "Benchmark": 81.3,
      "Samples": 201,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/382445/WDC-WD80PURZ-85YNPY0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD4000F9YZ",
      "Brand": "WD",
      "Model": "Se 4TB",
      "Rank": 76,
      "Benchmark": 81.2,
      "Samples": 1892,
      "URL": "https://hdd.userbenchmark.com/WD-Se-4TB/Rating/1823"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000DX002",
      "Brand": "Seagate",
      "Model": "FireCuda SSHD 1TB (2016)",
      "Rank": 77,
      "Benchmark": 80.8,
      "Samples": 49683,
      "URL": "https://hdd.userbenchmark.com/Seagate-FireCuda-SSHD-1TB-2016/Rating/3902"
    },
    {
      "Type": "HDD",
      "Part Number": "WD4003FZEX",
      "Brand": "WD",
      "Model": "Black 4TB (2013)",
      "Rank": 78,
      "Benchmark": 80.3,
      "Samples": 15323,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3505/WDC-WD4003FZEX-00Z4SA0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD60PURZ",
      "Brand": "WD",
      "Model": "Purple Surveillance 6TB (2017)",
      "Rank": 79,
      "Benchmark": 80.1,
      "Samples": 1021,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/342114/WDC-WD60PURZ-85ZUFY1"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000VX005",
      "Brand": "Seagate",
      "Model": "SkyHawk 1TB (2016)",
      "Rank": 80,
      "Benchmark": 80,
      "Samples": 5390,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/225246/ST1000VX005-2EZ102"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS723030BLE640 3TB",
      "Rank": 81,
      "Benchmark": 80,
      "Samples": 688,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4601/Hitachi-HDS723030BLE640"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1002F9YZ",
      "Brand": "WD",
      "Model": "Se 1TB (2013)",
      "Rank": 82,
      "Benchmark": 79.7,
      "Samples": 1667,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11078/WDC-WD1002F9YZ-09H1JL0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD30PURZ",
      "Brand": "WD",
      "Model": "Purple Surveillance 3TB (2017)",
      "Rank": 83,
      "Benchmark": 79.6,
      "Samples": 2029,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/329567/WDC-WD30PURZ-85GU6Y0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD4000FYYZ",
      "Brand": "WD",
      "Model": "Re 4TB (2012)",
      "Rank": 84,
      "Benchmark": 79.4,
      "Samples": 3641,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1815/WDC-WD4000FYYZ-01UL1B0"
    },
    {
      "Type": "HDD",
      "Part Number": "PH3300U-1I72",
      "Brand": "Toshiba",
      "Model": "MD04ACA300 3TB",
      "Rank": 85,
      "Benchmark": 79.3,
      "Samples": 129,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/31118/TOSHIBA-MD04ACA300"
    },
    {
      "Type": "HDD",
      "Part Number": "WD60EFAX",
      "Brand": "WD",
      "Model": "Red 6TB (2019)",
      "Rank": 86,
      "Benchmark": 79.3,
      "Samples": 225,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/748440/WDC-WD60EFAX-68SHWN0"
    },
    {
      "Type": "HDD",
      "Part Number": "ST6000VX0023",
      "Brand": "Seagate",
      "Model": "SkyHawk 6TB (2016)",
      "Rank": 87,
      "Benchmark": 79.3,
      "Samples": 88,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/219872/ST6000VX0023-2EF110"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST1500DM003-9YN16G 1.5TB",
      "Rank": 88,
      "Benchmark": 79,
      "Samples": 4716,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2739/ST1500DM003-9YN16G"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000VN000",
      "Brand": "Seagate",
      "Model": "NAS HDD 2TB",
      "Rank": 89,
      "Benchmark": 78.8,
      "Samples": 2972,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9942/ST2000VN000-1H3164"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000VN002",
      "Brand": "Seagate",
      "Model": "IronWolf 1TB (2016)",
      "Rank": 90,
      "Benchmark": 78.8,
      "Samples": 1511,
      "URL": "https://hdd.userbenchmark.com/Seagate-IronWolf-1TB-2016/Rating/3904"
    },
    {
      "Type": "HDD",
      "Part Number": "WD80EFZX",
      "Brand": "WD",
      "Model": "Red 8TB (2016)",
      "Rank": 91,
      "Benchmark": 78.7,
      "Samples": 3049,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/124577/WDC-WD80EFZX-68UW8N0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST2000VM003-1CT164 2TB",
      "Rank": 92,
      "Benchmark": 78.6,
      "Samples": 13451,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7562/ST2000VM003-1CT164"
    },
    {
      "Type": "HDD",
      "Part Number": "ST4000VN000",
      "Brand": "Seagate",
      "Model": "NAS HDD 4TB",
      "Rank": 93,
      "Benchmark": 78.6,
      "Samples": 2134,
      "URL": "https://hdd.userbenchmark.com/Seagate-NAS-HDD-4TB/Rating/2669"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3000VN000",
      "Brand": "Seagate",
      "Model": "NAS HDD 3TB",
      "Rank": 94,
      "Benchmark": 77.8,
      "Samples": 1883,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3909/ST3000VN000-1H4167"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS723020BLE640 2TB",
      "Rank": 95,
      "Benchmark": 77.6,
      "Samples": 2566,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1260/Hitachi-HDS723020BLE640"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWD105XZSTA",
      "Brand": "Toshiba",
      "Model": "HDWD105 500GB",
      "Rank": 96,
      "Benchmark": 77.6,
      "Samples": 7865,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/67919/TOSHIBA-HDWD105"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWD105EZSTA",
      "Brand": "Toshiba",
      "Model": "HDWD105 500GB",
      "Rank": 96,
      "Benchmark": 77.6,
      "Samples": 7865,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/67919/TOSHIBA-HDWD105"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWD105UZSVA",
      "Brand": "Toshiba",
      "Model": "HDWD105 500GB",
      "Rank": 96,
      "Benchmark": 77.6,
      "Samples": 7865,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/67919/TOSHIBA-HDWD105"
    },
    {
      "Type": "HDD",
      "Part Number": "ST4000DM000",
      "Brand": "Seagate",
      "Model": "Desktop HDD 4TB (2013)",
      "Rank": 97,
      "Benchmark": 77.3,
      "Samples": 52300,
      "URL": "https://hdd.userbenchmark.com/Seagate-Desktop-HDD-4TB-2013/Rating/1598"
    },
    {
      "Type": "HDD",
      "Part Number": "HUS724020ALA640",
      "Brand": "Hitachi",
      "Model": "UltraStar 7K4000 2TB",
      "Rank": 98,
      "Benchmark": 77.2,
      "Samples": 1865,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10357/HGST-HUS724020ALA640"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST4000DM 000-1CD168 4TB",
      "Rank": 99,
      "Benchmark": 77,
      "Samples": 15,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2310/ST4000DM-000-1CD168"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST1000VM002-1CT162 1TB",
      "Rank": 100,
      "Benchmark": 76.8,
      "Samples": 28733,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11140/ST1000VM002-1CT162"
    },
    {
      "Type": "HDD",
      "Part Number": "WD60EFRX",
      "Brand": "WD",
      "Model": "Red 6TB (2014)",
      "Rank": 101,
      "Benchmark": 76.5,
      "Samples": 8609,
      "URL": "https://hdd.userbenchmark.com/WD-Red-6TB-2014/Rating/2663"
    },
    {
      "Type": "HDD",
      "Part Number": "WD50EZRX",
      "Brand": "WD",
      "Model": "Green 5TB (2014)",
      "Rank": 102,
      "Benchmark": 76.5,
      "Samples": 1380,
      "URL": "https://hdd.userbenchmark.com/WD-Green-5TB-2014/Rating/3517"
    },
    {
      "Type": "HDD",
      "Part Number": "WD40EFRX",
      "Brand": "WD",
      "Model": "Red 4TB (2013)",
      "Rank": 103,
      "Benchmark": 76.3,
      "Samples": 36783,
      "URL": "https://hdd.userbenchmark.com/WD-Red-4TB-2013/Rating/3525"
    },
    {
      "Type": "HDD",
      "Part Number": "WD60EZRZ",
      "Brand": "WD",
      "Model": "Blue 6TB (2015)",
      "Rank": 104,
      "Benchmark": 76.3,
      "Samples": 5939,
      "URL": "https://hdd.userbenchmark.com/WD-Blue-6TB-2015/Rating/3910"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3001FAEX",
      "Brand": "WD",
      "Model": "Black 3TB (2012)",
      "Rank": 105,
      "Benchmark": 76.3,
      "Samples": 1098,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8039/WDC-WD3001FAEX-00MJRA0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD50EFRX",
      "Brand": "WD",
      "Model": "Red 5TB (2014)",
      "Rank": 106,
      "Benchmark": 75.8,
      "Samples": 853,
      "URL": "https://hdd.userbenchmark.com/WD-Red-5TB-2014/Rating/3524"
    },
    {
      "Type": "HDD",
      "Part Number": "WD60EZRX",
      "Brand": "WD",
      "Model": "Green 6TB (2014)",
      "Rank": 107,
      "Benchmark": 75.5,
      "Samples": 3225,
      "URL": "https://hdd.userbenchmark.com/WD-Green-6TB-2014/Rating/3518"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "DT01ACA050 500GB",
      "Rank": 108,
      "Benchmark": 74.9,
      "Samples": 125144,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1379/TOSHIBA-DT01ACA050"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2000F9YZ",
      "Brand": "WD",
      "Model": "Se 2TB (2013)",
      "Rank": 109,
      "Benchmark": 74.3,
      "Samples": 1426,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11122/WDC-WD2000F9YZ-0"
    },
    {
      "Type": "HDD",
      "Part Number": "ST10000VN0004",
      "Brand": "Seagate",
      "Model": "IronWolf 10TB (2016)",
      "Rank": 110,
      "Benchmark": 74.2,
      "Samples": 167,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/161315/ST10000VN0004-1ZD101"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5000AZLX-00K4KA0 500GB",
      "Rank": 111,
      "Benchmark": 74.2,
      "Samples": 35984,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5409/WDC-WD5000AZLX-00K4KA0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2001FFSX",
      "Brand": "WD",
      "Model": "Red Pro 2TB (2014)",
      "Rank": 112,
      "Benchmark": 73.2,
      "Samples": 596,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/25063/WDC-WD2001FFSX-68JNU"
    },
    {
      "Type": "HDD",
      "Part Number": "WD40PURX",
      "Brand": "WD",
      "Model": "Purple 4TB (2014)",
      "Rank": 113,
      "Benchmark": 73,
      "Samples": 5671,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/13618/WDC-WD40PURX-64GVNY0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD4001FAEX",
      "Brand": "WD",
      "Model": "Black 4TB (2012)",
      "Rank": 114,
      "Benchmark": 72.9,
      "Samples": 3311,
      "URL": "https://hdd.userbenchmark.com/WD-Black-4TB-2012/Rating/1599"
    },
    {
      "Type": "HDD",
      "Part Number": "ST8000DM004",
      "Brand": "Seagate",
      "Model": "Barracuda 8TB (2017)",
      "Rank": 115,
      "Benchmark": 72.6,
      "Samples": 15514,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/323996/ST8000DM004-2CX188"
    },
    {
      "Type": "HDD",
      "Part Number": "HUS724030ALE640",
      "Brand": "Hitachi",
      "Model": "UltraStar 7K4000 3TB",
      "Rank": 116,
      "Benchmark": 72.6,
      "Samples": 59,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/14588/Hitachi-HUS724030ALE640"
    },
    {
      "Type": "HDD",
      "Part Number": "WD30EZRZ",
      "Brand": "WD",
      "Model": "Blue 3TB (2015)",
      "Rank": 117,
      "Benchmark": 72.2,
      "Samples": 55476,
      "URL": "https://hdd.userbenchmark.com/WD-Blue-3TB-2015/Rating/3522"
    },
    {
      "Type": "HDD",
      "Part Number": "ST4000DX001",
      "Brand": "Seagate",
      "Model": "Desktop SSHD 4TB",
      "Rank": 118,
      "Benchmark": 72.2,
      "Samples": 17328,
      "URL": "https://hdd.userbenchmark.com/Seagate-Desktop-SSHD-4TB/Rating/2668"
    },
    {
      "Type": "HDD",
      "Part Number": "STCL4000400",
      "Brand": "Seagate",
      "Model": "Desktop SSHD 4TB",
      "Rank": 118,
      "Benchmark": 72.2,
      "Samples": 17328,
      "URL": "https://hdd.userbenchmark.com/Seagate-Desktop-SSHD-4TB/Rating/2668"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721010DLE630 1TB",
      "Rank": 119,
      "Benchmark": 72.1,
      "Samples": 16258,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/744/Hitachi-HDS721010DLE630"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2000FYYZ",
      "Brand": "WD",
      "Model": "Re 2TB (2012)",
      "Rank": 120,
      "Benchmark": 72.1,
      "Samples": 4700,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1402/WDC-WD2000FYYZ-5"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST33000650NS 3TB",
      "Rank": 121,
      "Benchmark": 71.9,
      "Samples": 2099,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9344/ST33000650NS"
    },
    {
      "Type": "HDD",
      "Part Number": "ST6000DM004",
      "Brand": "Seagate",
      "Model": "Barracuda Pro 6TB (2016)",
      "Rank": 122,
      "Benchmark": 71.6,
      "Samples": 145,
      "URL": "https://hdd.userbenchmark.com/Seagate-Barracuda-Pro-6TB-2016/Rating/3900"
    },
    {
      "Type": "HDD",
      "Part Number": "WD20PURZ",
      "Brand": "WD",
      "Model": "Purple Surveillance 2TB (2017)",
      "Rank": 123,
      "Benchmark": 71.4,
      "Samples": 8203,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/306805/WDC-WD20PURZ-85GU6Y0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST32000645NS 2TB",
      "Rank": 124,
      "Benchmark": 71.3,
      "Samples": 873,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9954/Seagate-ST32000645NS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST2000NM0011 2TB",
      "Rank": 125,
      "Benchmark": 71.1,
      "Samples": 2876,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3761/ST2000NM0011"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS724040ALE640 4TB",
      "Rank": 126,
      "Benchmark": 71,
      "Samples": 4867,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1070/HGST-HDS724040ALE640"
    },
    {
      "Type": "HDD",
      "Part Number": "0S03664",
      "Brand": "HGST",
      "Model": "Deskstar NAS 4TB",
      "Rank": 127,
      "Benchmark": 70.9,
      "Samples": 5312,
      "URL": "https://hdd.userbenchmark.com/HGST-Deskstar-NAS-4TB/Rating/1971"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HUA723030ALA640 3TB",
      "Rank": 128,
      "Benchmark": 70.7,
      "Samples": 8699,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5187/Hitachi-HUA723030ALA640"
    },
    {
      "Type": "HDD",
      "Part Number": "ST10000DM0004",
      "Brand": "Seagate",
      "Model": "Barracuda Pro 10TB (2016)",
      "Rank": 129,
      "Benchmark": 70.4,
      "Samples": 188,
      "URL": "https://hdd.userbenchmark.com/Seagate-Barracuda-Pro-10TB-2016/Rating/3901"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWA130XZSTA",
      "Brand": "Toshiba",
      "Model": "E300 3TB",
      "Rank": 130,
      "Benchmark": 70.2,
      "Samples": 1038,
      "URL": "https://hdd.userbenchmark.com/Toshiba-E300-3TB/Rating/3596"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWA130EZSTA",
      "Brand": "Toshiba",
      "Model": "E300 3TB",
      "Rank": 130,
      "Benchmark": 70.2,
      "Samples": 1038,
      "URL": "https://hdd.userbenchmark.com/Toshiba-E300-3TB/Rating/3596"
    },
    {
      "Type": "HDD",
      "Part Number": "HDS723030ALA640",
      "Brand": "Hitachi",
      "Model": "Deskstar 7K3000 3TB",
      "Rank": 131,
      "Benchmark": 69.9,
      "Samples": 5031,
      "URL": "https://hdd.userbenchmark.com/Hitachi-Deskstar-7K3000-3TB/Rating/1373"
    },
    {
      "Type": "HDD",
      "Part Number": "ST4000DM004",
      "Brand": "Seagate",
      "Model": "Barracuda 4TB (2017)",
      "Rank": 132,
      "Benchmark": 69.8,
      "Samples": 117882,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/243570/ST4000DM004-2CV104"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1500HLHX-01JJPV0 150GB",
      "Rank": 133,
      "Benchmark": 69.2,
      "Samples": 560,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5038/WDC-WD1500HLHX-01JJPV0"
    },
    {
      "Type": "HDD",
      "Part Number": "ST8000VX0022",
      "Brand": "Seagate",
      "Model": "SkyHawk 8TB (2016)",
      "Rank": 134,
      "Benchmark": 69.1,
      "Samples": 48,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/228255/ST8000VX-ST8000VX0022-2EJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "DT01ABA300 3TB",
      "Rank": 135,
      "Benchmark": 69.1,
      "Samples": 4741,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8588/TOSHIBA-DT01ABA300"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3000DM007",
      "Brand": "Seagate",
      "Model": "Barracuda 3TB (2017)",
      "Rank": 136,
      "Benchmark": 69.1,
      "Samples": 17608,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/337813/ST3000DM007-1WY10G"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD20EURX 2TB",
      "Rank": 137,
      "Benchmark": 69,
      "Samples": 8414,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6121/WDC-WD20EURX-64H"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS5C3030BLE630 3TB",
      "Rank": 138,
      "Benchmark": 68.9,
      "Samples": 1026,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8059/Hitachi-HDS5C3030BLE630"
    },
    {
      "Type": "HDD",
      "Part Number": "WD30EFRX",
      "Brand": "WD",
      "Model": "Red 3TB (2012)",
      "Rank": 139,
      "Benchmark": 68.9,
      "Samples": 56852,
      "URL": "https://hdd.userbenchmark.com/WD-Red-3TB-2012/Rating/1386"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10EZRZ",
      "Brand": "WD",
      "Model": "Blue 1TB (2015)",
      "Rank": 140,
      "Benchmark": 68.9,
      "Samples": 42262,
      "URL": "https://hdd.userbenchmark.com/WD-Blue-1TB-2015/Rating/3520"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2003FYYS",
      "Brand": "WD",
      "Model": "Re 2TB",
      "Rank": 141,
      "Benchmark": 68.3,
      "Samples": 9330,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3985/WDC-WD2003FYYS-02W0B1"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWA120XZSTA",
      "Brand": "Toshiba",
      "Model": "E300 2TB",
      "Rank": 142,
      "Benchmark": 68.1,
      "Samples": 1589,
      "URL": "https://hdd.userbenchmark.com/Toshiba-E300-2TB/Rating/3595"
    },
    {
      "Type": "HDD",
      "Part Number": "HDWA120EZSTA",
      "Brand": "Toshiba",
      "Model": "E300 2TB",
      "Rank": 142,
      "Benchmark": 68.1,
      "Samples": 1589,
      "URL": "https://hdd.userbenchmark.com/Toshiba-E300-2TB/Rating/3595"
    },
    {
      "Type": "HDD",
      "Part Number": "WD20EFRX",
      "Brand": "WD",
      "Model": "Red 2TB (2012)",
      "Rank": 143,
      "Benchmark": 68,
      "Samples": 47336,
      "URL": "https://hdd.userbenchmark.com/WD-Red-2TB-2012/Rating/1789"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10PURZ",
      "Brand": "WD",
      "Model": "Purple Surveillance 1TB (2017)",
      "Rank": 144,
      "Benchmark": 68,
      "Samples": 5021,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/310059/WDC-WD10PURZ-85U8XY0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HUA723020ALA640 2TB",
      "Rank": 145,
      "Benchmark": 67.8,
      "Samples": 6013,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8994/Hitachi-HUA723020ALA640"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HUA723020ALA641 2TB",
      "Rank": 146,
      "Benchmark": 67.8,
      "Samples": 20666,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11019/Hitachi-HUA723020ALA641"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD6000BLHX-01V7BV0 600GB",
      "Rank": 147,
      "Benchmark": 67.8,
      "Samples": 238,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6689/WDC-WD6000BLHX-01V7BV0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1503FYYS",
      "Brand": "WD",
      "Model": "Re 1.5TB",
      "Rank": 148,
      "Benchmark": 67.7,
      "Samples": 126,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/14718/WDC-WD1503FYYS-01T8B0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS72302 2TB",
      "Rank": 149,
      "Benchmark": 67.7,
      "Samples": 411,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1223/Hitachi-HDS72302"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST33000651AS 3TB",
      "Rank": 150,
      "Benchmark": 67.6,
      "Samples": 3955,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2159/ST33000651AS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD30PURX",
      "Brand": "WD",
      "Model": "Purple 3TB (2014)",
      "Rank": 151,
      "Benchmark": 67.4,
      "Samples": 4812,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/15186/WDC-WD30PURX-64P"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD4500HLHX-01JJPV0 450GB",
      "Rank": 152,
      "Benchmark": 67.2,
      "Samples": 752,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8988/WDC-WD4500HLHX-01JJPV0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST500NM0011 500GB",
      "Rank": 153,
      "Benchmark": 67.1,
      "Samples": 1587,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2942/ST500NM0011"
    },
    {
      "Type": "HDD",
      "Part Number": "ST10000VX0004",
      "Brand": "Seagate",
      "Model": "SkyHawk 10TB (2016)",
      "Rank": 154,
      "Benchmark": 66.8,
      "Samples": 60,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/192288/ST10000VX0004-1ZE101"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10PURX",
      "Brand": "WD",
      "Model": "Purple 1TB (2014)",
      "Rank": 155,
      "Benchmark": 66.6,
      "Samples": 14709,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/14824/WDC-WD10PURX-64D85Y0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2002FAEX",
      "Brand": "WD",
      "Model": "Black 2TB (2010)",
      "Rank": 156,
      "Benchmark": 66.4,
      "Samples": 38599,
      "URL": "https://hdd.userbenchmark.com/WD-Black-2TB-2010/Rating/1414"
    },
    {
      "Type": "HDD",
      "Part Number": "WD20PURX",
      "Brand": "WD",
      "Model": "Purple 2TB (2014)",
      "Rank": 157,
      "Benchmark": 66.3,
      "Samples": 12435,
      "URL": "https://hdd.userbenchmark.com/WD-Purple-2TB-2014/Rating/2662"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10EFRX",
      "Brand": "WD",
      "Model": "Red 1TB (2012)",
      "Rank": 158,
      "Benchmark": 66.3,
      "Samples": 29001,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2832/WDC-WD10EFRX-68JCSN0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10EURX 1TB",
      "Rank": 159,
      "Benchmark": 66.3,
      "Samples": 38500,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1122/WDC-WD10EURX-73C57Y0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD6000HLHX-01JJPV0 600GB",
      "Rank": 160,
      "Benchmark": 66,
      "Samples": 5453,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1823/WDC-WD6000HLHX-01JJPV0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2001FASS-00U0B0 2TB",
      "Rank": 161,
      "Benchmark": 66,
      "Samples": 4808,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1611/WDC-WD2001FASS-00U0B0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD20EZRZ",
      "Brand": "WD",
      "Model": "Blue 2TB (2015)",
      "Rank": 162,
      "Benchmark": 65.9,
      "Samples": 185806,
      "URL": "https://hdd.userbenchmark.com/WD-Blue-2TB-2015/Rating/3521"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1502FAEX",
      "Brand": "WD",
      "Model": "Black 1.5TB (2010)",
      "Rank": 163,
      "Benchmark": 65.9,
      "Samples": 5825,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3664/WDC-WD1502FAEX-007BA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS723020BLA642 2TB",
      "Rank": 164,
      "Benchmark": 65.7,
      "Samples": 22649,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1339/Hitachi-HDS723020BLA642"
    },
    {
      "Type": "HDD",
      "Part Number": "WD40EZRX",
      "Brand": "WD",
      "Model": "Green 4TB (2013)",
      "Rank": 165,
      "Benchmark": 65.4,
      "Samples": 27593,
      "URL": "https://hdd.userbenchmark.com/WD-Green-4TB-2013/Rating/3516"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD45 00HLHX-01JJPV0 450GB",
      "Rank": 166,
      "Benchmark": 64.8,
      "Samples": 58,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7176/WDC-WD45-00HLHX-01JJPV0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3000HLHX-01JJPV0 300GB",
      "Rank": 167,
      "Benchmark": 64.8,
      "Samples": 2664,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3987/WDC-WD3000HLHX-01JJPV0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD20EZRX",
      "Brand": "WD",
      "Model": "Green 2TB (2012)",
      "Rank": 168,
      "Benchmark": 64.7,
      "Samples": 142367,
      "URL": "https://hdd.userbenchmark.com/WD-Green-2TB-2012/Rating/1781"
    },
    {
      "Type": "HDD",
      "Part Number": "WD30EZRX",
      "Brand": "WD",
      "Model": "Green 3TB (2011)",
      "Rank": 169,
      "Benchmark": 64.7,
      "Samples": 87491,
      "URL": "https://hdd.userbenchmark.com/WD-Green-3TB-2011/Rating/1415"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10EZRX",
      "Brand": "WD",
      "Model": "Green 1TB (2011)",
      "Rank": 170,
      "Benchmark": 64.4,
      "Samples": 115695,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1216/WDC-WD10EZRX-00A8LB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS5C3020BLE630 2TB",
      "Rank": 171,
      "Benchmark": 64.3,
      "Samples": 3480,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7375/Hitachi-HDS5C3020BLE630"
    },
    {
      "Type": "HDD",
      "Part Number": "ST12000VN0007",
      "Brand": "Seagate",
      "Model": "IronWolf 12TB (2017)",
      "Rank": 172,
      "Benchmark": 64.2,
      "Samples": 21,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/408715/ST12000VN0007-2GS116"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "Expansion Desk 4TB",
      "Rank": 173,
      "Benchmark": 63.6,
      "Samples": 16677,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7034/Seagate-Expansion-Desk"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1501FASS-00U0B 1.5TB",
      "Rank": 174,
      "Benchmark": 63.3,
      "Samples": 1051,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6711/WDC-WD1501FASS-00U0B"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD103SM 1TB",
      "Rank": 175,
      "Benchmark": 63,
      "Samples": 788,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3901/SAMSUNG-HD103SM"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD30EURX 3TB",
      "Rank": 176,
      "Benchmark": 63,
      "Samples": 1270,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4058/WDC-WD30EURX-63T0FY0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD40E31X",
      "Brand": "WD",
      "Model": "Blue SSHD 4TB (2015)",
      "Rank": 177,
      "Benchmark": 63,
      "Samples": 1658,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/35578/WDC-WD40E31X-00HY4A0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HUA722010CLA330 1TB",
      "Rank": 178,
      "Benchmark": 62.9,
      "Samples": 7340,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1380/Hitachi-HUA722010CLA330"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST31000524NS 1TB",
      "Rank": 179,
      "Benchmark": 62.7,
      "Samples": 3345,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9641/ST31000524NS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD30EURS-63SPKY0 3TB",
      "Rank": 180,
      "Benchmark": 62.4,
      "Samples": 2850,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1387/WDC-WD30EURS-63SPKY0"
    },
    {
      "Type": "HDD",
      "Part Number": "ST5000DM000",
      "Brand": "Seagate",
      "Model": "Barracuda Desktop 5TB",
      "Rank": 181,
      "Benchmark": 62.2,
      "Samples": 3027,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/17358/ST5000DM000-1FK178"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK1002TSKB 1TB",
      "Rank": 182,
      "Benchmark": 62.2,
      "Samples": 756,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6001/TOSHIBA-MK1002TSKB"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721050DLE630 500GB",
      "Rank": 183,
      "Benchmark": 62.1,
      "Samples": 8136,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1540/Hitachi-HDS721050DLE630"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1003FBYZ",
      "Brand": "WD",
      "Model": "Re 1TB (2013)",
      "Rank": 184,
      "Benchmark": 61.7,
      "Samples": 2479,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8573/WDC-WD1003FBYZ-010FB0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1003FBYX",
      "Brand": "WD",
      "Model": "RE4 1TB (2010)",
      "Rank": 185,
      "Benchmark": 61.1,
      "Samples": 16639,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4565/WDC-WD1003FBYX-01Y7B0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5003ABYX",
      "Brand": "WD",
      "Model": "RE4 500GB (2010)",
      "Rank": 186,
      "Benchmark": 61.1,
      "Samples": 9082,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5856/WDC-WD5003ABYX-01WERA1"
    },
    {
      "Type": "HDD",
      "Part Number": "ST8000AS0002",
      "Brand": "Seagate",
      "Model": "Archive HDD 8TB (2015)",
      "Rank": 187,
      "Benchmark": 61.1,
      "Samples": 1386,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/30791/ST8000AS0002-1NA17Z"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "Backup+ Desk 4TB",
      "Rank": 188,
      "Benchmark": 61,
      "Samples": 1439,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3619/Seagate-Backup--Desk"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HCS5C2020ALA632 2TB",
      "Rank": 189,
      "Benchmark": 60.3,
      "Samples": 1713,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1904/Hitachi-HCS5C2020ALA632"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000DL003",
      "Brand": "Seagate",
      "Model": "Barracuda Green 2TB",
      "Rank": 190,
      "Benchmark": 60,
      "Samples": 65756,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/979/ST2000DL003-9VT166"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721010CLA330 1TB",
      "Rank": 191,
      "Benchmark": 59.8,
      "Samples": 7115,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2095/Hitachi-HDS721010CLA330"
    },
    {
      "Type": "HDD",
      "Part Number": "HD103SJ",
      "Brand": "Samsung",
      "Model": "Spinpoint F3 1TB",
      "Rank": 192,
      "Benchmark": 59.8,
      "Samples": 130031,
      "URL": "https://hdd.userbenchmark.com/Samsung-Spinpoint-F3-1TB/Rating/1848"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD322GJ 320GB",
      "Rank": 193,
      "Benchmark": 59.8,
      "Samples": 7712,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3922/SAMSUNG-HD322GJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721010CLA630 1TB",
      "Rank": 194,
      "Benchmark": 59.7,
      "Samples": 10332,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1955/Hitachi-HDS721010CLA630"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS723015BLA642 1.5TB",
      "Rank": 195,
      "Benchmark": 59.7,
      "Samples": 2572,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1237/Hitachi-HDS723015BLA642"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS721010A9 1TB",
      "Rank": 196,
      "Benchmark": 59.6,
      "Samples": 426,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4115/HGST-HTS721010A9"
    },
    {
      "Type": "HDD",
      "Part Number": "ST8000VN0022",
      "Brand": "Seagate",
      "Model": "IronWolf 8TB (2016)",
      "Rank": 197,
      "Benchmark": 59.4,
      "Samples": 403,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/210875/ST8000VN0022-2EL112"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST500DM005 HD502HJ 500GB",
      "Rank": 198,
      "Benchmark": 59.4,
      "Samples": 8772,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3407/ST500DM005-HD502HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "HTS721010A9E630",
      "Brand": "HGST",
      "Model": "Travelstar 7K1000 2.5\" 1TB",
      "Rank": 199,
      "Benchmark": 59.4,
      "Samples": 512160,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/975/HGST-HTS721010A9E630"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3000BLFS-08YBU0 300GB",
      "Rank": 200,
      "Benchmark": 59.3,
      "Samples": 664,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4420/WDC-WD3000BLFS-08YBU0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721050CLA662 500GB",
      "Rank": 201,
      "Benchmark": 59.1,
      "Samples": 11032,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1785/Hitachi-HDS721050CLA662"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000DL001",
      "Brand": "Seagate",
      "Model": "Barracuda Green 2TB",
      "Rank": 202,
      "Benchmark": 59.1,
      "Samples": 6070,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/447/ST2000DL001-9VT156"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST32000641AS 2TB",
      "Rank": 203,
      "Benchmark": 59,
      "Samples": 11181,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1130/ST32000641AS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2503ABYX",
      "Brand": "WD",
      "Model": "RE4 250GB (2010)",
      "Rank": 204,
      "Benchmark": 58.7,
      "Samples": 1152,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5792/WDC-WD2503ABYX-01WERA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD7502AAEX-00Y9A0 750GB",
      "Rank": 205,
      "Benchmark": 58.7,
      "Samples": 3998,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1200/WDC-WD7502AAEX-00Y9A0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD502HJ 500GB",
      "Rank": 206,
      "Benchmark": 58.7,
      "Samples": 64908,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1184/SAMSUNG-HD502HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500514NS 500GB",
      "Rank": 207,
      "Benchmark": 58.5,
      "Samples": 1752,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6066/ST3500514NS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721010CLA632 1TB",
      "Rank": 208,
      "Benchmark": 58.4,
      "Samples": 11498,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2755/Hitachi-HDS721010CLA632"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS5C4040ALE630 4TB",
      "Rank": 209,
      "Benchmark": 58.3,
      "Samples": 996,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2257/Hitachi-HDS5C4040ALE630"
    },
    {
      "Type": "HDD",
      "Part Number": "ST500DM002",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.14 500GB",
      "Rank": 210,
      "Benchmark": 58.3,
      "Samples": 430270,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/712/ST500DM002-1BD142"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK1002TS 1TB",
      "Rank": 211,
      "Benchmark": 58.1,
      "Samples": 14,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4326/TOSHIBA-MK1002TS"
    },
    {
      "Type": "HDD",
      "Part Number": "MQ01ABD100H",
      "Brand": "Toshiba",
      "Model": "Notebook SSHD 2.5\" 1TB",
      "Rank": 212,
      "Benchmark": 58.1,
      "Samples": 2534,
      "URL": "https://hdd.userbenchmark.com/Toshiba-Notebook-SSHD-25--1TB/Rating/1957"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD7500AALX-009BA0 750GB",
      "Rank": 213,
      "Benchmark": 58,
      "Samples": 2106,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5152/WDC-WD7500AALX-009BA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1001FALS-41Y6A1 1TB",
      "Rank": 214,
      "Benchmark": 57.8,
      "Samples": 866,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4052/WDC-WD1001FALS-41Y6A1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS72101 1TB",
      "Rank": 215,
      "Benchmark": 57.8,
      "Samples": 1292,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3573/Hitachi-HDS72101"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD740HLFS-01G6U0 74GB",
      "Rank": 216,
      "Benchmark": 57.8,
      "Samples": 335,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2768/WDC-WD740HLFS-01G6U0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721050CLA360 500GB",
      "Rank": 217,
      "Benchmark": 57.8,
      "Samples": 11512,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3631/Hitachi-HDS721050CLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000AZRX",
      "Brand": "WD",
      "Model": "Green 500GB (2012)",
      "Rank": 218,
      "Benchmark": 57.6,
      "Samples": 27404,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2487/WDC-WD5000AZRX-00A8LB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD6402AAEX-00Z3A0 640GB",
      "Rank": 219,
      "Benchmark": 57.6,
      "Samples": 5544,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1783/WDC-WD6402AAEX-00Z3A0"
    },
    {
      "Type": "HDD",
      "Part Number": "HDS721010CLA332",
      "Brand": "Hitachi",
      "Model": "Deskstar 7K1000.C 1TB",
      "Rank": 220,
      "Benchmark": 57.6,
      "Samples": 67602,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1129/Hitachi-HDS721010CLA332"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000VX002",
      "Brand": "Seagate",
      "Model": "Surveillance 2TB",
      "Rank": 221,
      "Benchmark": 57.5,
      "Samples": 595,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11181/ST2000VX002-1AH166"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST2000DL 004 HD204UI 2TB",
      "Rank": 222,
      "Benchmark": 57.5,
      "Samples": 156,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7858/ST2000DL-004-HD204UI"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000DL002",
      "Brand": "Seagate",
      "Model": "Barracuda Green 1TB",
      "Rank": 223,
      "Benchmark": 57.4,
      "Samples": 12009,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1672/ST1000DL002-9TT153"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS5C3030ALA630 3TB",
      "Rank": 224,
      "Benchmark": 57.4,
      "Samples": 2108,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3627/Hitachi-HDS5C3030ALA630"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5002AALX-00J37A0 500GB",
      "Rank": 225,
      "Benchmark": 57.3,
      "Samples": 10546,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3694/WDC-WD5002AALX-00J37A0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10EALX",
      "Brand": "WD",
      "Model": "Blue 1TB (2010)",
      "Rank": 226,
      "Benchmark": 57.1,
      "Samples": 48638,
      "URL": "https://hdd.userbenchmark.com/WD-Blue-1TB-2010/Rating/2023"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD254GJ 250GB",
      "Rank": 227,
      "Benchmark": 56.9,
      "Samples": 943,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10095/SAMSUNG-HD254GJ"
    },
    {
      "Type": "HDD",
      "Part Number": "HD204UI",
      "Brand": "Samsung",
      "Model": "Spinpoint F4 2TB",
      "Rank": 228,
      "Benchmark": 56.9,
      "Samples": 37559,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/324/SAMSUNG-HD204UI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1001FAES-60Z2A0 1TB",
      "Rank": 229,
      "Benchmark": 56.9,
      "Samples": 7867,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3129/WDC-WD1001FAES-60Z2A0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1500HLFS-01G6U1 150GB",
      "Rank": 230,
      "Benchmark": 56.7,
      "Samples": 6471,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2890/WDC-WD1500HLFS-01G6U1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD253GJ 250GB",
      "Rank": 231,
      "Benchmark": 56.6,
      "Samples": 3186,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3770/SAMSUNG-HD253GJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS721010A9E6300 1TB",
      "Rank": 232,
      "Benchmark": 56.5,
      "Samples": 1347,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11219/HGST-HTS721010A9E6300"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721075CLA332 750GB",
      "Rank": 233,
      "Benchmark": 56.4,
      "Samples": 2932,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5587/Hitachi-HDS721075CLA332"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS72105 500GB",
      "Rank": 234,
      "Benchmark": 56.3,
      "Samples": 701,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7340/Hitachi-HDS72105"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "HDD WDC WD10EALX-408EA0 1TB",
      "Rank": 235,
      "Benchmark": 56.3,
      "Samples": 375,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6944/APPLE-HDD-WDC-WD10EALX-408EA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721050CLA660 500GB",
      "Rank": 236,
      "Benchmark": 56.3,
      "Samples": 14337,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/289/Hitachi-HDS721050CLA660"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD30EZRS-00J99B0 3TB",
      "Rank": 237,
      "Benchmark": 56.2,
      "Samples": 2458,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3380/WDC-WD30EZRS-00J99B0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1002FAEX",
      "Brand": "WD",
      "Model": "Black 1TB (2010)",
      "Rank": 238,
      "Benchmark": 56.2,
      "Samples": 225421,
      "URL": "https://hdd.userbenchmark.com/WD-Black-1TB-2010/Rating/1580"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500410SV 500GB",
      "Rank": 239,
      "Benchmark": 56.2,
      "Samples": 1574,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1363/ST3500410SV"
    },
    {
      "Type": "HDD",
      "Part Number": "ST31500341AS",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.11 1.5TB",
      "Rank": 240,
      "Benchmark": 56.2,
      "Samples": 34480,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/864/ST31500341AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3000GLFS-01F8U0 300GB",
      "Rank": 241,
      "Benchmark": 56.2,
      "Samples": 3806,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1583/WDC-WD3000GLFS-01F8U0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3000HLFS",
      "Brand": "WD",
      "Model": "VelociRaptor 300GB",
      "Rank": 242,
      "Benchmark": 56.2,
      "Samples": 9104,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1307/WDC-WD3000HLFS-01G6U1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS722020ALA330 2TB",
      "Rank": 243,
      "Benchmark": 56.1,
      "Samples": 14567,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1289/Hitachi-HDS722020ALA330"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10EALS",
      "Brand": "WD",
      "Model": "Blue 1TB (2010)",
      "Rank": 244,
      "Benchmark": 55.9,
      "Samples": 9547,
      "URL": "https://hdd.userbenchmark.com/WD-Blue-1TB-2010/Rating/1780"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000DM000",
      "Brand": "Seagate",
      "Model": "Desktop HDD 1TB (2013)",
      "Rank": 245,
      "Benchmark": 55.7,
      "Samples": 1639,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3274/ST1000DM000-9TS15E"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3500418AS",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.12 500GB",
      "Rank": 246,
      "Benchmark": 55.7,
      "Samples": 174532,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/441/ST3500418AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD20EURS-63S48Y0 2TB",
      "Rank": 247,
      "Benchmark": 55.6,
      "Samples": 8882,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2441/WDC-WD20EURS-63S48Y0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS72202 2TB",
      "Rank": 248,
      "Benchmark": 55.6,
      "Samples": 207,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9104/Hitachi-HDS72202"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721050CLA362 500GB",
      "Rank": 249,
      "Benchmark": 55.5,
      "Samples": 38154,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2062/Hitachi-HDS721050CLA362"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500411SV 500GB",
      "Rank": 250,
      "Benchmark": 55.5,
      "Samples": 791,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5943/ST3500411SV"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD800HLFS-75G6U0 80GB",
      "Rank": 251,
      "Benchmark": 55.4,
      "Samples": 656,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5888/WDC-WD800HLFS-75G6U0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS5C3020ALA632 2TB",
      "Rank": 252,
      "Benchmark": 55.1,
      "Samples": 6312,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/693/Hitachi-HDS5C3020ALA632"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "STM3500418AS 500GB",
      "Rank": 253,
      "Benchmark": 55.1,
      "Samples": 7247,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2669/STM3500418AS"
    },
    {
      "Type": "HDD",
      "Part Number": "ST31000524AS",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.12 1TB",
      "Rank": 254,
      "Benchmark": 55.1,
      "Samples": 304318,
      "URL": "https://hdd.userbenchmark.com/Seagate-Barracuda-720012-1TB/Rating/2022"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10EUCX-63YZ1Y0 1TB",
      "Rank": 255,
      "Benchmark": 54.9,
      "Samples": 652,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2516/WDC-WD10EUCX-63YZ1Y0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500410AS 500GB",
      "Rank": 256,
      "Benchmark": 54.6,
      "Samples": 3957,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1333/ST3500410AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1001FALS-00U9B0 1TB",
      "Rank": 257,
      "Benchmark": 54.6,
      "Samples": 3160,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2730/WDC-WD1001FALS-00U9B0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST31000525SV 1TB",
      "Rank": 258,
      "Benchmark": 54.6,
      "Samples": 1853,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9992/ST31000525SV"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5000AUDX-63WNHY0 500GB",
      "Rank": 259,
      "Benchmark": 54.5,
      "Samples": 2825,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1793/WDC-WD5000AUDX-63WNHY0"
    },
    {
      "Type": "HDD",
      "Part Number": "ST250DM000",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.14 250GB",
      "Rank": 260,
      "Benchmark": 54.4,
      "Samples": 26037,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3265/ST250DM000-1BD141"
    },
    {
      "Type": "HDD",
      "Part Number": "WD25EZRX",
      "Brand": "WD",
      "Model": "Green 2.5TB (2011)",
      "Rank": 261,
      "Benchmark": 54.1,
      "Samples": 1064,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3574/WDC-WD25EZRX-00MMMB0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD7500BPKT",
      "Brand": "WD",
      "Model": "Black 2.5\" 750GB (2011)",
      "Rank": 262,
      "Benchmark": 54,
      "Samples": 16466,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/310/WDC-WD7500BPKT-60PK4T0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MQ01ACF050 500GB",
      "Rank": 263,
      "Benchmark": 54,
      "Samples": 17595,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7527/TOSHIBA-MQ01ACF050"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1500DL003",
      "Brand": "Seagate",
      "Model": "Barracuda Green 1.5TB",
      "Rank": 264,
      "Benchmark": 53.9,
      "Samples": 16200,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2196/ST1500DL003-9VT16L"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3500413AS",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.12 500GB",
      "Rank": 265,
      "Benchmark": 53.8,
      "Samples": 88219,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1134/ST3500413AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD155UI 1.5TB",
      "Rank": 266,
      "Benchmark": 53.8,
      "Samples": 944,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6951/SAMSUNG-HD155UI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS725050A7E630 500GB",
      "Rank": 267,
      "Benchmark": 53.7,
      "Samples": 37734,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/386/HGST-HTS725050A7E630"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS725050A7E63 500GB",
      "Rank": 268,
      "Benchmark": 53.7,
      "Samples": 22,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12194/HTS725050A7E63"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST31500341AS 1.5TB",
      "Rank": 269,
      "Benchmark": 53.6,
      "Samples": 99,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6611/Seagate-ST31500341AS"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000LM014",
      "Brand": "Seagate",
      "Model": "Laptop SSHD 2.5\" (32GB NAND) 1TB",
      "Rank": 270,
      "Benchmark": 53.6,
      "Samples": 467,
      "URL": "https://hdd.userbenchmark.com/Seagate-Laptop-SSHD-25--32GB-NAND-1TB/Rating/3600"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "",
      "Model": "GB0500EAFYL 500GB",
      "Rank": 271,
      "Benchmark": 53.4,
      "Samples": 498,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5763/GB0500EAFYL"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST2000LM003 HN-M201RAD 2TB",
      "Rank": 272,
      "Benchmark": 53.2,
      "Samples": 42499,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12558/ST2000LM003-HN-M201RAD"
    },
    {
      "Type": "HDD",
      "Part Number": "WD7500BPKX",
      "Brand": "WD",
      "Model": "Black 2.5\" 750GB (2013)",
      "Rank": 273,
      "Benchmark": 53.2,
      "Samples": 15664,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1740/WDC-WD7500BPKX-80HPJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST31000524AS 1TB",
      "Rank": 274,
      "Benchmark": 53.2,
      "Samples": 287,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12491/Seagate-ST31000524AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5002ABYS-02B1B0 500GB",
      "Rank": 275,
      "Benchmark": 53,
      "Samples": 6105,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4481/WDC-WD5002ABYS-02B1B0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250312AS 250GB",
      "Rank": 276,
      "Benchmark": 52.8,
      "Samples": 14882,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2897/ST3250312AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "STM31000528AS 1TB",
      "Rank": 277,
      "Benchmark": 52.6,
      "Samples": 982,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4190/STM31000528AS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD05PURZ",
      "Brand": "WD",
      "Model": "Purple Surveillance 500GB (2017)",
      "Rank": 278,
      "Benchmark": 52.5,
      "Samples": 9,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/430589/WDC-WD05PURZ-85U8XY0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600HLFS-60G6U2 160GB",
      "Rank": 279,
      "Benchmark": 52.5,
      "Samples": 3139,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5606/WDC-WD1600HLFS-60G6U2"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000AAKX",
      "Brand": "WD",
      "Model": "Blue 500GB (2010)",
      "Rank": 280,
      "Benchmark": 52.5,
      "Samples": 404658,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/398/WDC-WD5000AAKX-001CA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST31000333AS 1TB",
      "Rank": 281,
      "Benchmark": 52.5,
      "Samples": 12047,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1279/ST31000333AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD7502ABYS-02A6B0 750GB",
      "Rank": 282,
      "Benchmark": 52.2,
      "Samples": 922,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9643/WDC-WD7502ABYS-02A6B0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3640623AS 640GB",
      "Rank": 283,
      "Benchmark": 52,
      "Samples": 724,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5431/ST3640623AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "",
      "Model": "GB0250EAFYK 250GB",
      "Rank": 284,
      "Benchmark": 52,
      "Samples": 585,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5794/GB0250EAFYK"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721025CLA382 250GB",
      "Rank": 285,
      "Benchmark": 51.9,
      "Samples": 5688,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6106/Hitachi-HDS721025CLA382"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "",
      "Model": "WL1000GSA6472R 1TB",
      "Rank": 286,
      "Benchmark": 51.9,
      "Samples": 21,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7128/WL1000GSA6472R"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10EARX",
      "Brand": "WD",
      "Model": "Green 1TB (2011)",
      "Rank": 287,
      "Benchmark": 51.7,
      "Samples": 35361,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2607/WDC-WD10EARX-00N0YB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1002FBYS-02A6B0 1TB",
      "Rank": 288,
      "Benchmark": 51.7,
      "Samples": 20922,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/22/WDC-WD1002FBYS-02A6B0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3640323AS 640GB",
      "Rank": 289,
      "Benchmark": 51.6,
      "Samples": 2394,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3064/ST3640323AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MQ01ACF032 320GB",
      "Rank": 290,
      "Benchmark": 51.2,
      "Samples": 4947,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4030/TOSHIBA-MQ01ACF032"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2502ABYS-18B7A0 250GB",
      "Rank": 291,
      "Benchmark": 51,
      "Samples": 1217,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4931/WDC-WD2502ABYS-18B7A0"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3750525AS",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.12 750GB",
      "Rank": 292,
      "Benchmark": 51,
      "Samples": 2775,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/562/ST3750525AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9750422AS 750GB",
      "Rank": 293,
      "Benchmark": 50.9,
      "Samples": 724,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6425/ST9750422AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721010CLA 1TB",
      "Rank": 294,
      "Benchmark": 50.9,
      "Samples": 1223,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1227/Hitachi-HDS721010CLA"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT721075SLA380 750GB",
      "Rank": 295,
      "Benchmark": 50.9,
      "Samples": 628,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3276/Hitachi-HDT721075SLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2500AAKX",
      "Brand": "WD",
      "Model": "Blue 250GB (2010)",
      "Rank": 296,
      "Benchmark": 50.9,
      "Samples": 45114,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/53/WDC-WD2500AAKX-753CA1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD25EZRS-00J99B0 2.5TB",
      "Rank": 297,
      "Benchmark": 50.8,
      "Samples": 771,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9160/WDC-WD25EZRS-00J99B0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD7500AZRX",
      "Brand": "WD",
      "Model": "Green 750GB (2012)",
      "Rank": 298,
      "Benchmark": 50.8,
      "Samples": 1122,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1925/WDC-WD7500AZRX-00A8LB0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD7501AALS",
      "Brand": "WD",
      "Model": "Black 750GB (2008)",
      "Rank": 299,
      "Benchmark": 50.8,
      "Samples": 9460,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1987/WDC-WD7501AALS-00J7B0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD20EARX",
      "Brand": "WD",
      "Model": "Green 2TB (2011)",
      "Rank": 300,
      "Benchmark": 50.7,
      "Samples": 169713,
      "URL": "https://hdd.userbenchmark.com/WD-Green-2TB-2011/Rating/1850"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM31000333AS 1TB",
      "Rank": 301,
      "Benchmark": 50.7,
      "Samples": 293,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10102/MAXTOR-STM31000333AS"
    },
    {
      "Type": "HDD",
      "Part Number": "HTS727575A9E364",
      "Brand": "HGST",
      "Model": "Travelstar 7K750 2.5\" 750GB",
      "Rank": 302,
      "Benchmark": 50.6,
      "Samples": 13971,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/104/Hitachi-HTS727575A9E364"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD102UJ 1TB",
      "Rank": 303,
      "Benchmark": 50.6,
      "Samples": 458,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7223/SAMSUNG-HD102UJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS7275 750GB",
      "Rank": 304,
      "Benchmark": 50.5,
      "Samples": 20,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6142/Hitachi-HTS7275"
    },
    {
      "Type": "HDD",
      "Part Number": "WD6400AAKS",
      "Brand": "WD",
      "Model": "Blue 640GB (2008)",
      "Rank": 305,
      "Benchmark": 50.5,
      "Samples": 57277,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2174/WDC-WD6400AAKS-22A7B2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "",
      "Model": "GB1000EAMYC 1TB",
      "Rank": 306,
      "Benchmark": 50.4,
      "Samples": 1033,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10569/GB1000EAMYC"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2002FYPS-01U1B0 2TB",
      "Rank": 307,
      "Benchmark": 50.3,
      "Samples": 5145,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3788/WDC-WD2002FYPS-01U1B0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD6401AALS",
      "Brand": "WD",
      "Model": "Black 640GB (2008)",
      "Rank": 308,
      "Benchmark": 50.2,
      "Samples": 14823,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/136/WDC-WD6401AALS-00L3B2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HE103UJ 1TB",
      "Rank": 309,
      "Benchmark": 50.2,
      "Samples": 790,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5305/SAMSUNG-HE103UJ"
    },
    {
      "Type": "HDD",
      "Part Number": "ST750LX003",
      "Brand": "Seagate",
      "Model": "Momentus XT 7200 RPM 2.5\" 750GB",
      "Rank": 310,
      "Benchmark": 50.1,
      "Samples": 8228,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/840/ST750LX003-1AC154"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3250318AS",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.12 250GB",
      "Rank": 311,
      "Benchmark": 50,
      "Samples": 41385,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/169/ST3250318AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST310005 28AS 1TB",
      "Rank": 312,
      "Benchmark": 49.8,
      "Samples": 7897,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1219/ST310005-28AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10JUCT-63J6SY0 1TB",
      "Rank": 313,
      "Benchmark": 49.8,
      "Samples": 2598,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9459/WDC-WD10JUCT-63J6SY0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721050CLA 500GB",
      "Rank": 314,
      "Benchmark": 49.7,
      "Samples": 2094,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1561/Hitachi-HDS721050CLA"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3320613AS 320GB",
      "Rank": 315,
      "Benchmark": 49.6,
      "Samples": 1862,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4882/MAXTOR-STM3320613AS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000AAKS",
      "Brand": "WD",
      "Model": "Blue 500GB (2008)",
      "Rank": 316,
      "Benchmark": 49.6,
      "Samples": 166758,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1305/WDC-WD5000AAKS-00YGA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "FA GoFlex Desk 2TB",
      "Rank": 317,
      "Benchmark": 49.6,
      "Samples": 73,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9703/Seagate-FA-GoFlex-Desk"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "",
      "Model": "KingFast 128GB",
      "Rank": 318,
      "Benchmark": 49.5,
      "Samples": 12,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9927/KingFast"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3320813AS 320GB",
      "Rank": 319,
      "Benchmark": 49.5,
      "Samples": 3283,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5403/ST3320813AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS5C1010CLA382 1TB",
      "Rank": 320,
      "Benchmark": 49.3,
      "Samples": 2170,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1569/Hitachi-HDS5C1010CLA382"
    },
    {
      "Type": "HDD",
      "Part Number": "WD20EARS",
      "Brand": "WD",
      "Model": "Green 2TB (2010)",
      "Rank": 321,
      "Benchmark": 49.2,
      "Samples": 4823,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2609/WDC-WD20EARS-00M"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HCS5C1010CLA382 1TB",
      "Rank": 322,
      "Benchmark": 49.2,
      "Samples": 2006,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3428/Hitachi-HCS5C1010CLA382"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS5C3015ALA632 1.5TB",
      "Rank": 323,
      "Benchmark": 49.1,
      "Samples": 422,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5797/Hitachi-HDS5C3015ALA632"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000BPKX",
      "Brand": "WD",
      "Model": "Black 2.5\" 500GB (2013)",
      "Rank": 324,
      "Benchmark": 49.1,
      "Samples": 3668,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3355/WDC-WD5000BPKX-75HPJT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDE721010SLA330 1TB",
      "Rank": 325,
      "Benchmark": 49.1,
      "Samples": 7947,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2356/Hitachi-HDE721010SLA330"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT721075SLA360 750GB",
      "Rank": 326,
      "Benchmark": 48.9,
      "Samples": 345,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3764/Hitachi-HDT721075SLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST31000520AS 1TB",
      "Rank": 327,
      "Benchmark": 48.9,
      "Samples": 8266,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1280/ST31000520AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD642JJ 640GB",
      "Rank": 328,
      "Benchmark": 48.9,
      "Samples": 10270,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1574/SAMSUNG-HD642JJ"
    },
    {
      "Type": "HDD",
      "Part Number": "ST320DM000",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.14 320GB",
      "Rank": 329,
      "Benchmark": 48.8,
      "Samples": 2784,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2924/ST320DM000-1BD14C"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3750528AS 750GB",
      "Rank": 330,
      "Benchmark": 48.8,
      "Samples": 17583,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1714/ST3750528AS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000BPKT",
      "Brand": "WD",
      "Model": "Black 2.5\" 500GB (2011)",
      "Rank": 331,
      "Benchmark": 48.8,
      "Samples": 10618,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2036/WDC-WD5000BPKT-60PK4T0"
    },
    {
      "Type": "HDD",
      "Part Number": "ST9750420AS",
      "Brand": "Seagate",
      "Model": "Momentus 2.5\" 750GB (2010)",
      "Rank": 332,
      "Benchmark": 48.8,
      "Samples": 18338,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/922/ST9750420AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3320613AS 320GB",
      "Rank": 333,
      "Benchmark": 48.7,
      "Samples": 12694,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1722/ST3320613AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS72757 750GB",
      "Rank": 334,
      "Benchmark": 48.7,
      "Samples": 190,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4050/Hitachi-HTS72757"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT72101 1TB",
      "Rank": 335,
      "Benchmark": 48.7,
      "Samples": 218,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4490/Hitachi-HDT72101"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "STM3250318AS 250GB",
      "Rank": 336,
      "Benchmark": 48.6,
      "Samples": 3309,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5134/STM3250318AS"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000LM014",
      "Brand": "Seagate",
      "Model": "Laptop SSHD 2.5\" 1TB",
      "Rank": 337,
      "Benchmark": 48.5,
      "Samples": 55931,
      "URL": "https://hdd.userbenchmark.com/Seagate-Laptop-SSHD-25--1TB/Rating/1804"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3202ABYS-02B7A0 320GB",
      "Rank": 338,
      "Benchmark": 48.5,
      "Samples": 1004,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8044/WDC-WD3202ABYS-02B7A0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10JFCX",
      "Brand": "WD",
      "Model": "Red 2.5\" 1TB (2013)",
      "Rank": 339,
      "Benchmark": 48.3,
      "Samples": 1682,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2756/WDC-WD10JFCX-68N6GN0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST31000340NS 1TB",
      "Rank": 340,
      "Benchmark": 48.2,
      "Samples": 6356,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1232/ST31000340NS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1001X06X",
      "Brand": "WD",
      "Model": "Black2 2.5\" 1.120 TB (2013)",
      "Rank": 341,
      "Benchmark": 48.1,
      "Samples": 1511,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5448/WDC-WD1001X06X-00SJVT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK6461GSYN 640GB",
      "Rank": 342,
      "Benchmark": 48,
      "Samples": 567,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2644/TOSHIBA-MK6461GSYN"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT721010SLA360 1TB",
      "Rank": 343,
      "Benchmark": 47.8,
      "Samples": 26302,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1320/Hitachi-HDT721010SLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "MQ02ABD100H",
      "Brand": "Toshiba",
      "Model": "Notebook SSHD 2.5\" 1TB",
      "Rank": 344,
      "Benchmark": 47.8,
      "Samples": 23489,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/24488/TOSHIBA-MQ02ABD100H"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST32000542AS 2TB",
      "Rank": 345,
      "Benchmark": 47.7,
      "Samples": 18438,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/696/ST32000542AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST31000322CS 1TB",
      "Rank": 346,
      "Benchmark": 47.6,
      "Samples": 2161,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6933/ST31000322CS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500412AS 500GB",
      "Rank": 347,
      "Benchmark": 47.6,
      "Samples": 3887,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5332/ST3500412AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3750330NS 750GB",
      "Rank": 348,
      "Benchmark": 47.6,
      "Samples": 877,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8704/ST3750330NS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "",
      "Model": "VB0250EAVER 250GB",
      "Rank": 349,
      "Benchmark": 47.5,
      "Samples": 1600,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1098/VB0250EAVER"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT721050SLA360 500GB",
      "Rank": 350,
      "Benchmark": 47.5,
      "Samples": 1894,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4865/Hitachi-HDT721050SLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "S TM3320613AS 320GB",
      "Rank": 351,
      "Benchmark": 47.4,
      "Samples": 185,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10528/MAXTOR-S-TM3320613AS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10JPVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 1TB (2011)",
      "Rank": 352,
      "Benchmark": 47.4,
      "Samples": 14613,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1109/WDC-WD10JPVT-75"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "HDD HTS545050A7E362 500GB",
      "Rank": 353,
      "Benchmark": 47.4,
      "Samples": 3177,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7208/APPLE-HDD-HTS545050A7E362"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500320NS 500GB",
      "Rank": 354,
      "Benchmark": 47.4,
      "Samples": 3663,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/507/ST3500320NS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500820AS 500GB",
      "Rank": 355,
      "Benchmark": 47.3,
      "Samples": 3714,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3950/ST3500820AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MQ02ABF100 1TB",
      "Rank": 356,
      "Benchmark": 47.3,
      "Samples": 5702,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11528/TOSHIBA-MQ02ABF100"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500312CS 500GB",
      "Rank": 357,
      "Benchmark": 47.3,
      "Samples": 77452,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1659/ST3500312CS"
    },
    {
      "Type": "HDD",
      "Part Number": "HD103UJ",
      "Brand": "Samsung",
      "Model": "Spinpoint F1 1TB",
      "Rank": 358,
      "Benchmark": 47.2,
      "Samples": 47524,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/413/SAMSUNG-HD103UJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST31000340AS 1TB",
      "Rank": 359,
      "Benchmark": 47.1,
      "Samples": 6314,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/206/ST31000340AS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD15EARX",
      "Brand": "WD",
      "Model": "Green 1.5TB (2011)",
      "Rank": 360,
      "Benchmark": 47.1,
      "Samples": 6483,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4721/WDC-WD15EARX-22PASB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD153WI 1.5TB",
      "Rank": 361,
      "Benchmark": 47.1,
      "Samples": 926,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1489/SAMSUNG-HD153WI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3750330AS 750GB",
      "Rank": 362,
      "Benchmark": 47.1,
      "Samples": 3066,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1776/ST3750330AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10S12X-55JTET0 1TB",
      "Rank": 363,
      "Benchmark": 47.1,
      "Samples": 637,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12098/WDC-WD10S12X-55JTET0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500620AS 500GB",
      "Rank": 364,
      "Benchmark": 47,
      "Samples": 4676,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3388/ST3500620AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT721064SLA360 640GB",
      "Rank": 365,
      "Benchmark": 47,
      "Samples": 2945,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6072/Hitachi-HDT721064SLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK3261GSY 320GB",
      "Rank": 366,
      "Benchmark": 47,
      "Samples": 468,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/694/TOSHIBA-MK3261GSY"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD105SI 1TB",
      "Rank": 367,
      "Benchmark": 46.9,
      "Samples": 4439,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2699/SAMSUNG-HD105SI"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5001AALS",
      "Brand": "WD",
      "Model": "Black 500GB (2008)",
      "Rank": 368,
      "Benchmark": 46.8,
      "Samples": 21140,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1199/WDC-WD5001AALS-00L3B2"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000LX015",
      "Brand": "Seagate",
      "Model": "FireCuda 2.5\" 1TB",
      "Rank": 369,
      "Benchmark": 46.7,
      "Samples": 92302,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/193028/ST1000LX015-1U7172"
    },
    {
      "Type": "HDD",
      "Part Number": "ST2000LX001",
      "Brand": "Seagate",
      "Model": "FireCuda 2.5\" 2TB",
      "Rank": 370,
      "Benchmark": 46.7,
      "Samples": 51695,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/192181/ST2000LX001-1RG174"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MQ01ABD050 500GB",
      "Rank": 371,
      "Benchmark": 46.5,
      "Samples": 32349,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/924/TOSHIBA-MQ01ABD050"
    },
    {
      "Type": "HDD",
      "Part Number": "WD20EADS",
      "Brand": "WD",
      "Model": "Green 2TB (2009)",
      "Rank": 372,
      "Benchmark": 46.5,
      "Samples": 9783,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1732/WDC-WD20EADS-11R6B1"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3200AAKX",
      "Brand": "WD",
      "Model": "Blue 320GB (2010)",
      "Rank": 373,
      "Benchmark": 46.4,
      "Samples": 12504,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2995/WDC-WD3200AAKX-001CA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM250HJ 250GB",
      "Rank": 374,
      "Benchmark": 46.4,
      "Samples": 410,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11688/SAMSUNG-HM250HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD6400AARS-00Y5B1 640GB",
      "Rank": 375,
      "Benchmark": 46.3,
      "Samples": 2496,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1604/WDC-WD6400AARS-00Y5B1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD502HI 500GB",
      "Rank": 376,
      "Benchmark": 46.2,
      "Samples": 21152,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1270/SAMSUNG-HD502HI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3750330SV 750GB",
      "Rank": 377,
      "Benchmark": 46.2,
      "Samples": 133,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10527/ST3750330SV"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3500320AS",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.11 500GB",
      "Rank": 378,
      "Benchmark": 46.2,
      "Samples": 23592,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/137/ST3500320AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MQ01ABD100 1TB",
      "Rank": 379,
      "Benchmark": 46.2,
      "Samples": 270410,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/784/TOSHIBA-MQ01ABD100"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM320HJ 320GB",
      "Rank": 380,
      "Benchmark": 46.2,
      "Samples": 722,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2116/SAMSUNG-HM320HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250310NS 250GB",
      "Rank": 381,
      "Benchmark": 46.2,
      "Samples": 1127,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1947/ST3250310NS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD321HJ 320GB",
      "Rank": 382,
      "Benchmark": 46.1,
      "Samples": 4097,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6799/SAMSUNG-HD321HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "ST95005620AS",
      "Brand": "Seagate",
      "Model": "Momentus XT SSHD 2.5\" 500GB",
      "Rank": 383,
      "Benchmark": 46.1,
      "Samples": 10482,
      "URL": "https://hdd.userbenchmark.com/Seagate-Momentus-XT-SSHD-25--500GB/Rating/1800"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD15EURS-63S48Y0 1.5TB",
      "Rank": 384,
      "Benchmark": 46,
      "Samples": 437,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7870/WDC-WD15EURS-63S48Y0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM31000340AS 1TB",
      "Rank": 385,
      "Benchmark": 45.9,
      "Samples": 558,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/99/MAXTOR-STM31000340AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD322HJ 320GB",
      "Rank": 386,
      "Benchmark": 45.9,
      "Samples": 38952,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1377/SAMSUNG-HD322HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10JPVX",
      "Brand": "WD",
      "Model": "Blue 2.5\" 1TB (2004)",
      "Rank": 387,
      "Benchmark": 45.9,
      "Samples": 171586,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3140/WDC-WD10JPVX-22JC3T0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMPC064HBDR-000 1TB",
      "Rank": 388,
      "Benchmark": 45.8,
      "Samples": 10,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1769/SAMSUNG-MZMPC064HBDR-000"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3500320AS 500GB",
      "Rank": 389,
      "Benchmark": 45.8,
      "Samples": 4141,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2192/MAXTOR-STM3500320AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST310005 1TB",
      "Rank": 390,
      "Benchmark": 45.8,
      "Samples": 15,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1342/ST310005"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "STM3320418AS 320GB",
      "Rank": 391,
      "Benchmark": 45.8,
      "Samples": 684,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5696/STM3320418AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST1000LM014-SSHD-8GB 1TB",
      "Rank": 392,
      "Benchmark": 45.8,
      "Samples": 13543,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6737/ST1000LM014-SSHD-8GB"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS725050A9A362 500GB",
      "Rank": 393,
      "Benchmark": 45.7,
      "Samples": 465,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5508/Hitachi-HTS725050A9A362"
    },
    {
      "Type": "HDD",
      "Part Number": "HD154UI",
      "Brand": "Samsung",
      "Model": "Spinpoint F2 1TB",
      "Rank": 394,
      "Benchmark": 45.7,
      "Samples": 27253,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1306/SAMSUNG-HD154UI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD103SI 1TB",
      "Rank": 395,
      "Benchmark": 45.7,
      "Samples": 34827,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1110/SAMSUNG-HD103SI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "FreeAgent XTreme 1TB",
      "Rank": 396,
      "Benchmark": 45.5,
      "Samples": 51,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2882/Seagate-FreeAgent-XTreme"
    },
    {
      "Type": "HDD",
      "Part Number": "ST500LX005",
      "Brand": "Seagate",
      "Model": "SSHD 500GB",
      "Rank": 397,
      "Benchmark": 45.4,
      "Samples": 180,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5338/ST500LX005-1CW162"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160813AS 160GB",
      "Rank": 398,
      "Benchmark": 45.4,
      "Samples": 3711,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2850/ST3160813AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3750630AS 750GB",
      "Rank": 399,
      "Benchmark": 45.3,
      "Samples": 1922,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3071/ST3750630AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD161GJ 160GB",
      "Rank": 400,
      "Benchmark": 45.2,
      "Samples": 12373,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2493/SAMSUNG-HD161GJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS72755 500GB",
      "Rank": 401,
      "Benchmark": 45.2,
      "Samples": 66,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2252/Hitachi-HTS72755"
    },
    {
      "Type": "HDD",
      "Part Number": "HD203WI",
      "Brand": "Samsung",
      "Model": "Spinpoint F3 2TB",
      "Rank": 402,
      "Benchmark": 45.1,
      "Samples": 3239,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/640/SAMSUNG-HD203WI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250312CS 250GB",
      "Rank": 403,
      "Benchmark": 45.1,
      "Samples": 2105,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3255/ST3250312CS"
    },
    {
      "Type": "HDD",
      "Part Number": "HM640JJ",
      "Brand": "Samsung",
      "Model": "Spinpoint MP4 2.5\" 640GB",
      "Rank": 404,
      "Benchmark": 45,
      "Samples": 617,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2214/SAMSUNG-HM640JJ"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3200AAKS",
      "Brand": "WD",
      "Model": "Blue 320GB (2008)",
      "Rank": 405,
      "Benchmark": 45,
      "Samples": 48613,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1186/WDC-WD3200AAKS-00B3A0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000LPVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 500GB (2012)",
      "Rank": 406,
      "Benchmark": 45,
      "Samples": 13469,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/241/WDC-WD5000LPVT-22G33T0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3160813AS 160GB",
      "Rank": 407,
      "Benchmark": 44.9,
      "Samples": 994,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7161/MAXTOR-STM3160813AS"
    },
    {
      "Type": "HDD",
      "Part Number": "ST500LM000",
      "Brand": "Seagate",
      "Model": "Laptop Thin SSHD 2.5\" 500GB",
      "Rank": 408,
      "Benchmark": 44.9,
      "Samples": 30848,
      "URL": "https://hdd.userbenchmark.com/Seagate-Laptop-Thin-SSHD-25--500GB/Rating/1803"
    },
    {
      "Type": "HDD",
      "Part Number": "WD7500BPVX",
      "Brand": "WD",
      "Model": "Blue 2.5\" 750GB",
      "Rank": 409,
      "Benchmark": 44.9,
      "Samples": 12134,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3028/WDC-WD7500BPVX-75JC3T0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10SPCX",
      "Brand": "WD",
      "Model": "Blue 2.5\" 1TB (2013)",
      "Rank": 410,
      "Benchmark": 44.9,
      "Samples": 48634,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3227/WDC-WD10SPCX-22HWST0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000BEKT",
      "Brand": "WD",
      "Model": "Black 2.5\" 500GB (2010)",
      "Rank": 411,
      "Benchmark": 44.8,
      "Samples": 4189,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2241/WDC-WD5000BEKT-22KA9T0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3200AAJS",
      "Brand": "WD",
      "Model": "Blue 320GB (2007)",
      "Rank": 412,
      "Benchmark": 44.8,
      "Samples": 80613,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/804/WDC-WD3200AAJS-00L7A0"
    },
    {
      "Type": "HDD",
      "Part Number": "ST320LT007",
      "Brand": "Seagate",
      "Model": "Momentus Thin 7200 2.5\" 320GB",
      "Rank": 413,
      "Benchmark": 44.7,
      "Samples": 9926,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1923/ST320LT007-9ZV142"
    },
    {
      "Type": "HDD",
      "Part Number": "ST500LX003",
      "Brand": "Seagate",
      "Model": "Momentus XT 7200 RPM 2.5\" 500GB",
      "Rank": 414,
      "Benchmark": 44.7,
      "Samples": 1261,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7156/ST500LX003-1AC15G"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10EURS-630AB1 1TB",
      "Rank": 415,
      "Benchmark": 44.6,
      "Samples": 2263,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5849/WDC-WD10EURS-630AB1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST31500541AS 1.5TB",
      "Rank": 416,
      "Benchmark": 44.5,
      "Samples": 7983,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/667/ST31500541AS"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3320413AS",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.12 320GB",
      "Rank": 417,
      "Benchmark": 44.5,
      "Samples": 5856,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3234/ST3320413AS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10EARS",
      "Brand": "WD",
      "Model": "Green 1TB (2010)",
      "Rank": 418,
      "Benchmark": 44.5,
      "Samples": 120320,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1117/WDC-WD10EARS-00Y5B1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MQ01ABF050 500GB",
      "Rank": 419,
      "Benchmark": 44.4,
      "Samples": 93034,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2789/TOSHIBA-MQ01ABF050"
    },
    {
      "Type": "HDD",
      "Part Number": "WD15EARS",
      "Brand": "WD",
      "Model": "Green 1.5TB (2010)",
      "Rank": 420,
      "Benchmark": 44.4,
      "Samples": 31042,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1144/WDC-WD15EARS-00MVWB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK6461GSY 640GB",
      "Rank": 421,
      "Benchmark": 44.3,
      "Samples": 791,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3150/TOSHIBA-MK6461GSY"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MQ01ABD0 500GB",
      "Rank": 422,
      "Benchmark": 44.3,
      "Samples": 393,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11593/TOSHIBA-MQ01ABD0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK7559GSXF 750GB",
      "Rank": 423,
      "Benchmark": 44.3,
      "Samples": 1170,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2028/TOSHIBA-MK7559GSXF"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK3261GSYN 320GB",
      "Rank": 424,
      "Benchmark": 44.3,
      "Samples": 5788,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/30/TOSHIBA-MK3261GSYN"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "",
      "Model": "OCZ-AGILITY3 120GB",
      "Rank": 425,
      "Benchmark": 44.3,
      "Samples": 97,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2512/OCZ-AGILITY3"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000LPCX",
      "Brand": "WD",
      "Model": "Blue 2.5\" 500GB (2013)",
      "Rank": 426,
      "Benchmark": 44.3,
      "Samples": 57994,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6849/WDC-WD5000LPCX-24C6HT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS541010A9 1TB",
      "Rank": 427,
      "Benchmark": 44.2,
      "Samples": 311,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6753/HGST-HTS541010A9"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT721032SLA360 320GB",
      "Rank": 428,
      "Benchmark": 44.2,
      "Samples": 4917,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3078/Hitachi-HDT721032SLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD503HI 500GB",
      "Rank": 429,
      "Benchmark": 44.2,
      "Samples": 7061,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4359/SAMSUNG-HD503HI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD502IJ 500GB",
      "Rank": 430,
      "Benchmark": 44.1,
      "Samples": 19675,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/111/SAMSUNG-HD502IJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS5C1050CLA382 500GB",
      "Rank": 431,
      "Benchmark": 44.1,
      "Samples": 2436,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4543/Hitachi-HDS5C1050CLA382"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT721032SLA380 320GB",
      "Rank": 432,
      "Benchmark": 44,
      "Samples": 2934,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4609/Hitachi-HDT721032SLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2500AAKS",
      "Brand": "WD",
      "Model": "Blue 250GB (2008)",
      "Rank": 433,
      "Benchmark": 44,
      "Samples": 8692,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2143/WDC-WD2500AAKS-00L6A0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3320418AS 320GB",
      "Rank": 434,
      "Benchmark": 44,
      "Samples": 23402,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/168/ST3320418AS"
    },
    {
      "Type": "HDD",
      "Part Number": "HD753LJ",
      "Brand": "Samsung",
      "Model": "Spinpoint F1 750GB",
      "Rank": 435,
      "Benchmark": 43.9,
      "Samples": 20345,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1245/SAMSUNG-HD753LJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10JPCX-24UE4T0 1TB",
      "Rank": 436,
      "Benchmark": 43.9,
      "Samples": 36704,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11224/WDC-WD10JPCX-24UE4T0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST500LM000-SSHD-8GB 500GB",
      "Rank": 437,
      "Benchmark": 43.9,
      "Samples": 9565,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9154/ST500LM000-SSHD-8GB"
    },
    {
      "Type": "HDD",
      "Part Number": "ST500LX025",
      "Brand": "Seagate",
      "Model": "FireCuda 2.5\" 500GB",
      "Rank": 438,
      "Benchmark": 43.8,
      "Samples": 1686,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/208729/ST500LX025-1U717D"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD6400AADS-00M2B0 640GB",
      "Rank": 439,
      "Benchmark": 43.7,
      "Samples": 1254,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10673/WDC-WD6400AADS-00M2B0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD8000AARS-00Y5B1 800GB",
      "Rank": 440,
      "Benchmark": 43.7,
      "Samples": 954,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3653/WDC-WD8000AARS-00Y5B1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250410AS 250GB",
      "Rank": 441,
      "Benchmark": 43.7,
      "Samples": 19590,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/456/ST3250410AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3200AVJS-63WDA0 320GB",
      "Rank": 442,
      "Benchmark": 43.6,
      "Samples": 6478,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11043/WDC-WD3200AVJS-63WDA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST320LT009-9WC142 320GB",
      "Rank": 443,
      "Benchmark": 43.6,
      "Samples": 721,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4704/ST320LT009-9WC142"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10EADS",
      "Brand": "WD",
      "Model": "Green 1TB (2009)",
      "Rank": 444,
      "Benchmark": 43.5,
      "Samples": 95852,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/362/WDC-WD10EADS-00L5B1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MQ01ABD075 750GB",
      "Rank": 445,
      "Benchmark": 43.5,
      "Samples": 39092,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/869/TOSHIBA-MQ01ABD075"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS541515A9E630 1.5TB",
      "Rank": 446,
      "Benchmark": 43.3,
      "Samples": 2050,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9932/HGST-HTS541515A9E630"
    },
    {
      "Type": "HDD",
      "Part Number": "WD15EADS",
      "Brand": "WD",
      "Model": "Green 1.5TB (2009)",
      "Rank": 447,
      "Benchmark": 43.2,
      "Samples": 14146,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2529/WDC-WD15EADS-22P8B0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD252HJ 250GB",
      "Rank": 448,
      "Benchmark": 43.2,
      "Samples": 5727,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2959/SAMSUNG-HD252HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HN-M101MBB 1TB",
      "Rank": 449,
      "Benchmark": 43,
      "Samples": 3094,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2830/SAMSUNG-HN-M101MBB"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10EADX-00TDHB0 1TB",
      "Rank": 450,
      "Benchmark": 43,
      "Samples": 9361,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1049/WDC-WD10EADX-00TDHB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST750LM000-1EJ16G 750GB",
      "Rank": 451,
      "Benchmark": 42.9,
      "Samples": 962,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10621/ST750LM000-1EJ16G"
    },
    {
      "Type": "HDD",
      "Part Number": "HTS727550A9E364",
      "Brand": "HGST",
      "Model": "Travelstar 7K750 2.5\" 500GB",
      "Rank": 452,
      "Benchmark": 42.9,
      "Samples": 8687,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/789/Hitachi-HTS727550A9E364"
    },
    {
      "Type": "HDD",
      "Part Number": "ST9500420AS",
      "Brand": "Seagate",
      "Model": "Momentus 2.5\" 500GB",
      "Rank": 453,
      "Benchmark": 42.9,
      "Samples": 39665,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/785/ST9500420AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST500LX012-SSHD-8GB 500GB",
      "Rank": 454,
      "Benchmark": 42.9,
      "Samples": 919,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12260/ST500LX012-SSHD-8GB"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS725050A9A364 500GB",
      "Rank": 455,
      "Benchmark": 42.8,
      "Samples": 6984,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1690/Hitachi-HTS725050A9A364"
    },
    {
      "Type": "HDD",
      "Part Number": "ST1000LM024",
      "Brand": "Seagate",
      "Model": "Momentus 2.5\" 1TB",
      "Rank": 456,
      "Benchmark": 42.7,
      "Samples": 238506,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/130/ST1000LM024-HN-M101MBB"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000LPVX",
      "Brand": "WD",
      "Model": "Blue 2.5\" 500GB",
      "Rank": 457,
      "Benchmark": 42.6,
      "Samples": 62907,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1040/WDC-WD5000LPVX-22V0TT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10EVDS-63N5B1 1TB",
      "Rank": 458,
      "Benchmark": 42.6,
      "Samples": 2129,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4828/WDC-WD10EVDS-63N5B1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD250HJ 250GB",
      "Rank": 459,
      "Benchmark": 42.6,
      "Samples": 9889,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2247/SAMSUNG-HD250HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545050A7E380 500GB",
      "Rank": 460,
      "Benchmark": 42.6,
      "Samples": 52631,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/664/Hitachi-HTS545050A7E380"
    },
    {
      "Type": "HDD",
      "Part Number": "HM500JJ",
      "Brand": "Samsung",
      "Model": "Spinpoint MP4 2.5\" 500GB",
      "Rank": 461,
      "Benchmark": 42.4,
      "Samples": 899,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1178/SAMSUNG-HM500JJ"
    },
    {
      "Type": "HDD",
      "Part Number": "WD7500LPCX",
      "Brand": "WD",
      "Model": "Blue 2.5\" 750GB (2013)",
      "Rank": 462,
      "Benchmark": 42.4,
      "Samples": 918,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7349/WDC-WD7500LPCX-80HWST0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MQ01ABF032 320GB",
      "Rank": 463,
      "Benchmark": 42.2,
      "Samples": 5021,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5425/TOSHIBA-MQ01ABF032"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD15EVDS-73V9B1 1.5TB",
      "Rank": 464,
      "Benchmark": 42.2,
      "Samples": 1715,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6540/WDC-WD15EVDS-73V9B1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS725032A7E630 320GB",
      "Rank": 465,
      "Benchmark": 42.2,
      "Samples": 7847,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5008/HGST-HTS725032A7E630"
    },
    {
      "Type": "HDD",
      "Part Number": "WD10J31X",
      "Brand": "WD",
      "Model": "Blue SSHD 1TB (2015)",
      "Rank": 466,
      "Benchmark": 42.1,
      "Samples": 771,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/31760/WDC-WD10J31X-00U3VT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MMCRE28G8MXP-0VBL1 128GB",
      "Rank": 467,
      "Benchmark": 42.1,
      "Samples": 46,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5433/SAMSUNG-MMCRE28G8MXP-0VBL1"
    },
    {
      "Type": "HDD",
      "Part Number": "HDP725050GLA360",
      "Brand": "Hitachi",
      "Model": "Deskstar P7K500 500GB",
      "Rank": 468,
      "Benchmark": 42.1,
      "Samples": 38558,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/745/Hitachi-HDP725050GLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS725050A9A360 500GB",
      "Rank": 469,
      "Benchmark": 42,
      "Samples": 1092,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/416/Hitachi-HTS725050A9A360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3250310AS 250GB",
      "Rank": 470,
      "Benchmark": 42,
      "Samples": 11359,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1239/MAXTOR-STM3250310AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD75 00AARS-00Y5B 750GB",
      "Rank": 471,
      "Benchmark": 42,
      "Samples": 2585,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1693/WDC-WD75-00AARS-00Y5B"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK5061GSY 500GB",
      "Rank": 472,
      "Benchmark": 41.9,
      "Samples": 1975,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2829/TOSHIBA-MK5061GSY"
    },
    {
      "Type": "HDD",
      "Part Number": "WD7500AAKS",
      "Brand": "WD",
      "Model": "Blue 750GB (2008)",
      "Rank": 473,
      "Benchmark": 41.9,
      "Samples": 3162,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2292/WDC-WD7500AAKS-00RBA0"
    },
    {
      "Type": "HDD",
      "Part Number": "HTS541010A9E680",
      "Brand": "HGST",
      "Model": "Travelstar 5K1000 2.5\" 1TB",
      "Rank": 474,
      "Benchmark": 41.8,
      "Samples": 120046,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/72/HGST-HTS541010A9E680"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST500LM012 HN-M500MBB 500GB",
      "Rank": 475,
      "Benchmark": 41.8,
      "Samples": 38093,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2104/ST500LM012-HN-M500MBB"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3200BEKT",
      "Brand": "WD",
      "Model": "Black 2.5\" 320GB (2010)",
      "Rank": 476,
      "Benchmark": 41.6,
      "Samples": 19204,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/35/WDC-WD3200BEKT-60V5T1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK5061GSYN 500GB",
      "Rank": 477,
      "Benchmark": 41.5,
      "Samples": 5238,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2032/TOSHIBA-MK5061GSYN"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDP72505 500GB",
      "Rank": 478,
      "Benchmark": 41.5,
      "Samples": 311,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5536/Hitachi-HDP72505"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000BPVX",
      "Brand": "WD",
      "Model": "Blue 2.5\" 500GB",
      "Rank": 479,
      "Benchmark": 41.5,
      "Samples": 986,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/14364/WDC-WD5000BPVX-00JC3T0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000AADS",
      "Brand": "WD",
      "Model": "Green 500GB (2009)",
      "Rank": 480,
      "Benchmark": 41.5,
      "Samples": 54290,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1125/WDC-WD5000AADS-00S9B0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250310CS 250GB",
      "Rank": 481,
      "Benchmark": 41.5,
      "Samples": 2704,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7048/ST3250310CS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250310AS 250GB",
      "Rank": 482,
      "Benchmark": 41.5,
      "Samples": 29288,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/205/ST3250310AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10EAVS-00D7B1 1TB",
      "Rank": 483,
      "Benchmark": 41.5,
      "Samples": 26496,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/256/WDC-WD10EAVS-00D7B1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545050A7E680 500GB",
      "Rank": 484,
      "Benchmark": 41.4,
      "Samples": 51674,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2870/HGST-HTS545050A7E680"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS725032A9A360 320GB",
      "Rank": 485,
      "Benchmark": 41.4,
      "Samples": 569,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5927/Hitachi-HTS725032A9A360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MQ01ABD064 640GB",
      "Rank": 486,
      "Benchmark": 41.4,
      "Samples": 457,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8271/TOSHIBA-MQ01ABD064"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS725025A9A364 250GB",
      "Rank": 487,
      "Benchmark": 41.3,
      "Samples": 2187,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6783/Hitachi-HTS725025A9A364"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160318AS 160GB",
      "Rank": 488,
      "Benchmark": 41.2,
      "Samples": 13456,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1676/ST3160318AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST500LT032-1E9142 500GB",
      "Rank": 489,
      "Benchmark": 41.1,
      "Samples": 1172,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12252/ST500LT032-1E9142"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK5056GSY 500GB",
      "Rank": 490,
      "Benchmark": 41.1,
      "Samples": 2610,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2645/TOSHIBA-MK5056GSY"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545050A7E3800 500GB",
      "Rank": 491,
      "Benchmark": 41.1,
      "Samples": 550,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6179/HGST-HTS545050A7E3800"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3200BEKX",
      "Brand": "WD",
      "Model": "Black 2.5\" 320GB (2013)",
      "Rank": 492,
      "Benchmark": 40.8,
      "Samples": 3264,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6418/WDC-WD3200BEKX-00B7WT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK7559GSXP 750GB",
      "Rank": 493,
      "Benchmark": 40.8,
      "Samples": 5157,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3733/TOSHIBA-MK7559GSXP"
    },
    {
      "Type": "HDD",
      "Part Number": "HTS541075A9E680",
      "Brand": "HGST",
      "Model": "Travelstar 5K1000 2.5\" 750GB",
      "Rank": 494,
      "Benchmark": 40.8,
      "Samples": 20896,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4988/HGST-HTS541075A9E680"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HN-M101M 1TB",
      "Rank": 495,
      "Benchmark": 40.7,
      "Samples": 38,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5762/SAMSUNG-HN-M101M"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT721032SLA 320GB",
      "Rank": 496,
      "Benchmark": 40.7,
      "Samples": 566,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6947/Hitachi-HDT721032SLA"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1600AAJS",
      "Brand": "WD",
      "Model": "Blue 160GB (2007)",
      "Rank": 497,
      "Benchmark": 40.6,
      "Samples": 45382,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1801/WDC-WD1600AAJS-00YZCA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST500LM011 HM501II 500GB",
      "Rank": 498,
      "Benchmark": 40.6,
      "Samples": 131,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12328/ST500LM011-HM501II"
    },
    {
      "Type": "HDD",
      "Part Number": "WD7500AADS",
      "Brand": "WD",
      "Model": "Green 750GB (2009)",
      "Rank": 499,
      "Benchmark": 40.6,
      "Samples": 4178,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3726/WDC-WD7500AADS-00M2B0"
    },
    {
      "Type": "HDD",
      "Part Number": "ST500LT012",
      "Brand": "Seagate",
      "Model": "Momentus Thin 5400.9 2.5\" 500GB",
      "Rank": 500,
      "Benchmark": 40.5,
      "Samples": 152510,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1080/ST500LT012-9WS142"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST500LM0 ST500LM012 HN-M5 500GB",
      "Rank": 501,
      "Benchmark": 40.5,
      "Samples": 188,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9065/ST500LM0-ST500LM012-HN-M5"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK2556GSY 250GB",
      "Rank": 502,
      "Benchmark": 40.5,
      "Samples": 1204,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4588/TOSHIBA-MK2556GSY"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10S21X-24R1BT0-SSHD-8GB 1TB",
      "Rank": 503,
      "Benchmark": 40.5,
      "Samples": 15549,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12991/WDC-WD10S21X-24R1BT0-SSHD-8GB"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "",
      "Model": "OCZ-AGILITY3 60GB",
      "Rank": 504,
      "Benchmark": 40.4,
      "Samples": 49,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2437/OCZ-AGILITY3"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD8088AADS-00M2B0 809GB",
      "Rank": 505,
      "Benchmark": 40.4,
      "Samples": 596,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10079/WDC-WD8088AADS-00M2B0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT721016SLA380 160GB",
      "Rank": 506,
      "Benchmark": 40.4,
      "Samples": 2748,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10627/Hitachi-HDT721016SLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10EACS-00ZJB0 1TB",
      "Rank": 507,
      "Benchmark": 40.2,
      "Samples": 19670,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1758/WDC-WD10EACS-00ZJB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM100UI 1TB",
      "Rank": 508,
      "Benchmark": 40.1,
      "Samples": 849,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5426/SAMSUNG-HM100UI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD251HJ 250GB",
      "Rank": 509,
      "Benchmark": 40.1,
      "Samples": 2612,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/615/SAMSUNG-HD251HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10EVCS-63E0B0 1TB",
      "Rank": 510,
      "Benchmark": 40.1,
      "Samples": 314,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1803/WDC-WD10EVCS-63E0B0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD740ADFD-00NLR1 74GB",
      "Rank": 511,
      "Benchmark": 40,
      "Samples": 942,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3613/WDC-WD740ADFD-00NLR1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD6400AACS-00G8B1 640GB",
      "Rank": 512,
      "Benchmark": 40,
      "Samples": 6931,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2285/WDC-WD6400AACS-00G8B1"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3200LPVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 320GB (2012)",
      "Rank": 513,
      "Benchmark": 40,
      "Samples": 512,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/458/WDC-WD3200LPVT-22G33T0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD740ADFS-00SLR5 74GB",
      "Rank": 514,
      "Benchmark": 39.9,
      "Samples": 44,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4376/WDC-WD740ADFS-00SLR5"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST750LM022 HN-M750MBB 750GB",
      "Rank": 515,
      "Benchmark": 39.9,
      "Samples": 27363,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/434/ST750LM022-HN-M750MBB"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "",
      "Model": "WL640GSA872 640GB",
      "Rank": 516,
      "Benchmark": 39.9,
      "Samples": 20,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9895/WL640GSA872"
    },
    {
      "Type": "HDD",
      "Part Number": "ST250LT007",
      "Brand": "Seagate",
      "Model": "Momentus Thin 7200 2.5\" 250GB",
      "Rank": 517,
      "Benchmark": 39.9,
      "Samples": 1129,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5055/ST250LT007-9ZV14C"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1500ADFD-00NLR1 150GB",
      "Rank": 518,
      "Benchmark": 39.9,
      "Samples": 1615,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1836/WDC-WD1500ADFD-00NLR1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD103UI 1TB",
      "Rank": 519,
      "Benchmark": 39.7,
      "Samples": 1304,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5608/SAMSUNG-HD103UI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK2561GSYN 250GB",
      "Rank": 520,
      "Benchmark": 39.7,
      "Samples": 1890,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3299/TOSHIBA-MK2561GSYN"
    },
    {
      "Type": "HDD",
      "Part Number": "WD7500BPVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 750GB (2010)",
      "Rank": 521,
      "Benchmark": 39.6,
      "Samples": 25017,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/160/WDC-WD7500BPVT-24HXZT3"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HN-M500MBB 500GB",
      "Rank": 522,
      "Benchmark": 39.6,
      "Samples": 3596,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4774/SAMSUNG-HN-M500MBB"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5000AVDS-63U7B1 500GB",
      "Rank": 523,
      "Benchmark": 39.6,
      "Samples": 15645,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3450/WDC-WD5000AVDS-63U7B1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MQ01ABD032 320GB",
      "Rank": 524,
      "Benchmark": 39.5,
      "Samples": 7893,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3087/TOSHIBA-MQ01ABD032"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3320310CS 320GB",
      "Rank": 525,
      "Benchmark": 39.4,
      "Samples": 3226,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10402/ST3320310CS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS723232A7A364 320GB",
      "Rank": 526,
      "Benchmark": 39.3,
      "Samples": 9330,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2190/HITACHI-HTS723232A7A364"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2500AAJS",
      "Brand": "WD",
      "Model": "Blue 250GB (2007)",
      "Rank": 527,
      "Benchmark": 39.3,
      "Samples": 35141,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1491/WDC-WD2500AAJS-22L7A0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9250410AS 250GB",
      "Rank": 528,
      "Benchmark": 39.3,
      "Samples": 6838,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/525/ST9250410AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD6400AAVS-00G9B1 640GB",
      "Rank": 529,
      "Benchmark": 39.3,
      "Samples": 2920,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3045/WDC-WD6400AAVS-00G9B1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1500AHFD-00RAR5 150GB",
      "Rank": 530,
      "Benchmark": 39.1,
      "Samples": 937,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1770/WDC-WD1500AHFD-00RAR5"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Excelstor",
      "Model": "Technology J9250S 250GB",
      "Rank": 531,
      "Benchmark": 38.9,
      "Samples": 1719,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5045/ExcelStor-Technology-J9250S"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600ADFS-60SLR2 160GB",
      "Rank": 532,
      "Benchmark": 38.9,
      "Samples": 349,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10871/WDC-WD1600ADFS-60SLR2"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3200LPCX",
      "Brand": "WD",
      "Model": "Blue 2.5\" 320GB (2013)",
      "Rank": 533,
      "Benchmark": 38.8,
      "Samples": 566,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/14140/WDC-WD3200LPCX-24C6HT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721010KLA330 1TB",
      "Rank": 534,
      "Benchmark": 38.7,
      "Samples": 8096,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2888/Hitachi-HDS721010KLA330"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK1059GSM 1TB",
      "Rank": 535,
      "Benchmark": 38.7,
      "Samples": 3024,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1480/TOSHIBA-MK1059GSM"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK3265GSX H 320GB",
      "Rank": 536,
      "Benchmark": 38.6,
      "Samples": 768,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6469/TOSHIBA-MK3265GSX-H"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2500BEKT",
      "Brand": "WD",
      "Model": "Black 2.5\" 250GB (2010)",
      "Rank": 537,
      "Benchmark": 38.6,
      "Samples": 7416,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4008/WDC-WD2500BEKT-00PVM"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HUA721010KLA330 1TB",
      "Rank": 538,
      "Benchmark": 38.6,
      "Samples": 9726,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3043/Hitachi-HUA721010KLA330"
    },
    {
      "Type": "HDD",
      "Part Number": "HDP725025GLA380",
      "Brand": "Hitachi",
      "Model": "Deskstar P7K500 250GB",
      "Rank": 539,
      "Benchmark": 38.6,
      "Samples": 8390,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/372/Hitachi-HDP725025GLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2500AVJS-63B6A0 250GB",
      "Rank": 540,
      "Benchmark": 38.5,
      "Samples": 1428,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11610/WDC-WD2500AVJS-63B6A0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000AAJS",
      "Brand": "WD",
      "Model": "Blue 500GB (2007)",
      "Rank": 541,
      "Benchmark": 38.5,
      "Samples": 9084,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/610/WDC-WD5000AAJS-00YFA0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3200LPVX",
      "Brand": "WD",
      "Model": "Blue 2.5\" 320GB",
      "Rank": 542,
      "Benchmark": 38.3,
      "Samples": 4673,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3840/WDC-WD3200LPVX-75V0TT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721075KLA330 750GB",
      "Rank": 543,
      "Benchmark": 38.3,
      "Samples": 3488,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1370/Hitachi-HDS721075KLA330"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK6459GSX 640GB",
      "Rank": 544,
      "Benchmark": 38.3,
      "Samples": 220,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1212/TOSHIBA-MK6459GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5000ABYS-01TNA0 500GB",
      "Rank": 545,
      "Benchmark": 38.3,
      "Samples": 1110,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5181/WDC-WD5000ABYS-01TNA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD10TPVT-00H 1TB",
      "Rank": 546,
      "Benchmark": 38.2,
      "Samples": 1503,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6175/WDC-WD10TPVT-00H"
    },
    {
      "Type": "HDD",
      "Part Number": "HTS547575A9E384",
      "Brand": "Hitachi",
      "Model": "Travelstar 5K750 750GB",
      "Rank": 547,
      "Benchmark": 38.1,
      "Samples": 34947,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1367/Hitachi-HTS547575A9E384"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS54757 750GB",
      "Rank": 548,
      "Benchmark": 38.1,
      "Samples": 263,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6112/Hitachi-HTS54757"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDP725050GLA 500GB",
      "Rank": 549,
      "Benchmark": 38.1,
      "Samples": 1173,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4070/Hitachi-HDP725050GLA"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS725032A9A364 320GB",
      "Rank": 550,
      "Benchmark": 37.9,
      "Samples": 6127,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3403/Hitachi-HTS725032A9A364"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST640LM001 HN-M640MBB 640GB",
      "Rank": 551,
      "Benchmark": 37.8,
      "Samples": 955,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2212/ST640LM001-HN-M640MBB"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD200HJ 200GB",
      "Rank": 552,
      "Benchmark": 37.6,
      "Samples": 2466,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1948/SAMSUNG-HD200HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9750423AS 750GB",
      "Rank": 553,
      "Benchmark": 37.6,
      "Samples": 2658,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/935/ST9750423AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT721025SLA380 250GB",
      "Rank": 554,
      "Benchmark": 37.5,
      "Samples": 1682,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2907/Hitachi-HDT721025SLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK7575GSX 750GB",
      "Rank": 555,
      "Benchmark": 37.4,
      "Samples": 6160,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2614/TOSHIBA-MK7575GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HN-M750MBB 750GB",
      "Rank": 556,
      "Benchmark": 37.3,
      "Samples": 931,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/121/SAMSUNG-HN-M750MBB"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK6476GSXN 640GB",
      "Rank": 557,
      "Benchmark": 37.2,
      "Samples": 583,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6224/TOSHIBA-MK6476GSXN"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS54505 500GB",
      "Rank": 558,
      "Benchmark": 36.9,
      "Samples": 497,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1400/Hitachi-HTS54505"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD800ADFS-75SLR2 80GB",
      "Rank": 559,
      "Benchmark": 36.9,
      "Samples": 255,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/268/WDC-WD800ADFS-75SLR2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9320421AS 320GB",
      "Rank": 560,
      "Benchmark": 36.9,
      "Samples": 879,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6523/ST9320421AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "ST3320630NS 324GB",
      "Rank": 561,
      "Benchmark": 36.9,
      "Samples": 70,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9541/Maxtor--ST3320630NS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3200BJKT-00F4T0 320GB",
      "Rank": 562,
      "Benchmark": 36.8,
      "Samples": 572,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6337/WDC-WD3200BJKT-00F4T0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9320423AS 320GB",
      "Rank": 563,
      "Benchmark": 36.8,
      "Samples": 10447,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/131/ST9320423AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5000AVVS-63H0B1 500GB",
      "Rank": 564,
      "Benchmark": 36.6,
      "Samples": 8359,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2986/WDC-WD5000AVVS-63H0B1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5000AACS-00ZUB0 500GB",
      "Rank": 565,
      "Benchmark": 36.5,
      "Samples": 18692,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1623/WDC-WD5000AACS-00ZUB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM641JI 640GB",
      "Rank": 566,
      "Benchmark": 36.5,
      "Samples": 8398,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2867/SAMSUNG-HM641JI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST1000LM010-9YH146 1TB",
      "Rank": 567,
      "Benchmark": 36.5,
      "Samples": 2140,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4168/ST1000LM010-9YH146"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3500630AS 500GB",
      "Rank": 568,
      "Benchmark": 36.4,
      "Samples": 3071,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1780/MAXTOR-STM3500630AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9320423ASG 320GB",
      "Rank": 569,
      "Benchmark": 36.4,
      "Samples": 317,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7583/ST9320423ASG"
    },
    {
      "Type": "HDD",
      "Part Number": "HDP725032GLA360",
      "Brand": "Hitachi",
      "Model": "Deskstar P7K500 320GB",
      "Rank": 570,
      "Benchmark": 36.4,
      "Samples": 5144,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3494/Hitachi-HDP725032GLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST640LM000 HM641JI 640GB",
      "Rank": 571,
      "Benchmark": 36.3,
      "Samples": 1134,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9709/ST640LM000-HM641JI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDP725050GLAT80 500GB",
      "Rank": 572,
      "Benchmark": 36.2,
      "Samples": 140,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2621/Hitachi-HDP725050GLAT80"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9250421ASG 250GB",
      "Rank": 573,
      "Benchmark": 36,
      "Samples": 277,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6246/ST9250421ASG"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST1000LM002-9VQ14L 1TB",
      "Rank": 574,
      "Benchmark": 36,
      "Samples": 264,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9979/ST1000LM002-9VQ14L"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721032CLA362 320GB",
      "Rank": 575,
      "Benchmark": 35.9,
      "Samples": 9388,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3419/Hitachi-HDS721032CLA362"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5000AAVS-00ZTB0 500GB",
      "Rank": 576,
      "Benchmark": 35.8,
      "Samples": 12289,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/947/WDC-WD5000AAVS-00ZTB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "Touro Mobile 3.0 1TB",
      "Rank": 577,
      "Benchmark": 35.8,
      "Samples": 800,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3230/HGST-Touro-Mobile-30"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3250820AS 250GB",
      "Rank": 578,
      "Benchmark": 35.7,
      "Samples": 2505,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1310/MAXTOR-STM3250820AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD7500AACS-00D6B0 750GB",
      "Rank": 579,
      "Benchmark": 35.6,
      "Samples": 3942,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3233/WDC-WD7500AACS-00D6B0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5001ABYS-01YNA0 500GB",
      "Rank": 580,
      "Benchmark": 35.6,
      "Samples": 905,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5765/WDC-WD5001ABYS-01YNA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3360320AS 360GB",
      "Rank": 581,
      "Benchmark": 35.5,
      "Samples": 5303,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1850/ST3360320AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "",
      "Model": "GB0500C4413 500GB",
      "Rank": 582,
      "Benchmark": 35.5,
      "Samples": 416,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1828/GB0500C4413"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000BPVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 500GB (2010)",
      "Rank": 583,
      "Benchmark": 35.4,
      "Samples": 27302,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2839/WDC-WD5000BPVT-75HXZT3"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK1059GSMP 1TB",
      "Rank": 584,
      "Benchmark": 35.3,
      "Samples": 1772,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/604/TOSHIBA-MK1059GSMP"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500630AS 500GB",
      "Rank": 585,
      "Benchmark": 35.3,
      "Samples": 21701,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/20/ST3500630AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS547564A9E384 640GB",
      "Rank": 586,
      "Benchmark": 35.3,
      "Samples": 12419,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/953/Hitachi-HTS547564A9E384"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK6465GSX 640GB",
      "Rank": 587,
      "Benchmark": 35.2,
      "Samples": 3695,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/994/TOSHIBA-MK6465GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "WD4000AAKS",
      "Brand": "WD",
      "Model": "Blue 400GB (2008)",
      "Rank": 588,
      "Benchmark": 35.2,
      "Samples": 1952,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3883/WDC-WD4000AAKS-00YGA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK3256GSY 320GB",
      "Rank": 589,
      "Benchmark": 35.2,
      "Samples": 1418,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5782/TOSHIBA-MK3256GSY"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600BJKT-75F4T0 160GB",
      "Rank": 590,
      "Benchmark": 35.2,
      "Samples": 811,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5905/WDC-WD1600BJKT-75F4T0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9320421ASG 320GB",
      "Rank": 591,
      "Benchmark": 35.2,
      "Samples": 302,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10280/ST9320421ASG"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3320820AS 320GB",
      "Rank": 592,
      "Benchmark": 35.1,
      "Samples": 3996,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1541/MAXTOR-STM3320820AS"
    },
    {
      "Type": "HDD",
      "Part Number": "HDP725040GLA360",
      "Brand": "Hitachi",
      "Model": "Deskstar P7K500 400GB",
      "Rank": 593,
      "Benchmark": 35.1,
      "Samples": 616,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5788/Hitachi-HDP725040GLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3750640AS 750GB",
      "Rank": 594,
      "Benchmark": 35,
      "Samples": 6206,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1206/ST3750640AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1601ABYS-01C0A0 165GB",
      "Rank": 595,
      "Benchmark": 35,
      "Samples": 248,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6509/WDC-WD1601ABYS-01C0A0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250820NS 250GB",
      "Rank": 596,
      "Benchmark": 35,
      "Samples": 232,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11777/ST3250820NS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500830AS 500GB",
      "Rank": 597,
      "Benchmark": 35,
      "Samples": 6551,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3724/ST3500830AS"
    },
    {
      "Type": "HDD",
      "Part Number": "HD501LJ",
      "Brand": "Samsung",
      "Model": "Spinpoint T166 500GB",
      "Rank": 598,
      "Benchmark": 35,
      "Samples": 35797,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/946/SAMSUNG-HD501LJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3320620AS 320GB",
      "Rank": 599,
      "Benchmark": 34.9,
      "Samples": 1715,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3702/MAXTOR-STM3320620AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM321HI 320GB",
      "Rank": 600,
      "Benchmark": 34.8,
      "Samples": 9462,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2705/SAMSUNG-HM321HI"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1600BPVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 160GB (2010)",
      "Rank": 601,
      "Benchmark": 34.8,
      "Samples": 256,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4951/WDC-WD1600BPVT-22ZEST0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK6465GSXN 640GB",
      "Rank": 602,
      "Benchmark": 34.8,
      "Samples": 1454,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1267/TOSHIBA-MK6465GSXN"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9640320AS 640GB",
      "Rank": 603,
      "Benchmark": 34.8,
      "Samples": 4382,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/492/ST9640320AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM501II 500GB",
      "Rank": 604,
      "Benchmark": 34.7,
      "Samples": 920,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8100/SAMSUNG-HM501II"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3320620NS 320GB",
      "Rank": 605,
      "Benchmark": 34.7,
      "Samples": 841,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5481/ST3320620NS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD6400BPVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 640GB (2010)",
      "Rank": 606,
      "Benchmark": 34.6,
      "Samples": 9748,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/799/WDC-WD6400BPVT-80HXZT1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1000FYPS-01ZKB0 1TB",
      "Rank": 607,
      "Benchmark": 34.6,
      "Samples": 1282,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9121/WDC-WD1000FYPS-01ZKB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3201ABYS-01B9A0 320GB",
      "Rank": 608,
      "Benchmark": 34.6,
      "Samples": 370,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6707/WDC-WD3201ABYS-01B9A0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250620AS 250GB",
      "Rank": 609,
      "Benchmark": 34.6,
      "Samples": 5037,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2769/ST3250620AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3300620AS 300GB",
      "Rank": 610,
      "Benchmark": 34.6,
      "Samples": 458,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6252/ST3300620AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM500JI 500GB",
      "Rank": 611,
      "Benchmark": 34.5,
      "Samples": 7835,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1276/SAMSUNG-HM500JI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3320820AS 320GB",
      "Rank": 612,
      "Benchmark": 34.4,
      "Samples": 12401,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1469/ST3320820AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK1665GSX 160GB",
      "Rank": 613,
      "Benchmark": 34.4,
      "Samples": 1036,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9119/TOSHIBA-MK1665GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "ST3320620AS",
      "Brand": "Seagate",
      "Model": "Barracuda 7200.10 320GB",
      "Rank": 614,
      "Benchmark": 34.3,
      "Samples": 30431,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/257/ST3320620AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD7500AYPS-01ZKB0 750GB",
      "Rank": 615,
      "Benchmark": 34.3,
      "Samples": 172,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7309/WDC-WD7500AYPS-01ZKB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250620NS 250GB",
      "Rank": 616,
      "Benchmark": 34.2,
      "Samples": 1232,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3394/ST3250620NS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD321KJ 320GB",
      "Rank": 617,
      "Benchmark": 34.1,
      "Samples": 8256,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1934/SAMSUNG-HD321KJ"
    },
    {
      "Type": "HDD",
      "Part Number": "WD6400BEVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 640GB (2009)",
      "Rank": 618,
      "Benchmark": 34.1,
      "Samples": 5073,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/503/WDC-WD6400BEVT-22A0RT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9160411ASG 160GB",
      "Rank": 619,
      "Benchmark": 34.1,
      "Samples": 766,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1633/ST9160411ASG"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9640423AS 640GB",
      "Rank": 620,
      "Benchmark": 34.1,
      "Samples": 1247,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1709/ST9640423AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3400620AS 400GB",
      "Rank": 621,
      "Benchmark": 34.1,
      "Samples": 2690,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5340/ST3400620AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500630NS 500GB",
      "Rank": 622,
      "Benchmark": 34,
      "Samples": 3762,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1456/ST3500630NS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3750640NS 750GB",
      "Rank": 623,
      "Benchmark": 34,
      "Samples": 9774,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4285/ST3750640NS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3750840AS 750GB",
      "Rank": 624,
      "Benchmark": 34,
      "Samples": 673,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3075/ST3750840AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD320KJ 320GB",
      "Rank": 625,
      "Benchmark": 34,
      "Samples": 2859,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4162/SAMSUNG-HD320KJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600AVJS-63SWA0 160GB",
      "Rank": 626,
      "Benchmark": 34,
      "Samples": 1103,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2491/WDC-WD1600AVJS-63SWA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3400820AS 400GB",
      "Rank": 627,
      "Benchmark": 33.9,
      "Samples": 748,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3144/ST3400820AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HCC547550A9E380 500GB",
      "Rank": 628,
      "Benchmark": 33.9,
      "Samples": 504,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8947/Hitachi-HCC547550A9E380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK3265GSX 320GB",
      "Rank": 629,
      "Benchmark": 33.9,
      "Samples": 4888,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/382/TOSHIBA-MK3265GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "WD800AAJS",
      "Brand": "WD",
      "Model": "Blue 80GB (2007)",
      "Rank": 630,
      "Benchmark": 33.8,
      "Samples": 3218,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1866/WDC-WD800AAJS-60B4A0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1600BEKT",
      "Brand": "WD",
      "Model": "Black 2.5\" 160GB (2010)",
      "Rank": 631,
      "Benchmark": 33.8,
      "Samples": 1897,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2369/WDC-WD1600BEKT-60V5T1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS723232L9SA60 320GB",
      "Rank": 632,
      "Benchmark": 33.8,
      "Samples": 350,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6838/HITACHI-HTS723232L9SA60"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK6475GS 640GB",
      "Rank": 633,
      "Benchmark": 33.8,
      "Samples": 86,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3610/TOSHIBA-MK6475GS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HCS545050GLA380 500GB",
      "Rank": 634,
      "Benchmark": 33.7,
      "Samples": 279,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2081/Hitachi-HCS545050GLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Excelstor",
      "Model": "Technology V8160 165GB",
      "Rank": 635,
      "Benchmark": 33.7,
      "Samples": 24,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6697/ExcelStor-Technology-V8160"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9160412ASG 160GB",
      "Rank": 636,
      "Benchmark": 33.7,
      "Samples": 605,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4331/ST9160412ASG"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3320620AS 320GB",
      "Rank": 637,
      "Benchmark": 33.7,
      "Samples": 12,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7871/MAXTOR--STM3320620AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "S TM3320820AS 320GB",
      "Rank": 638,
      "Benchmark": 33.7,
      "Samples": 246,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2573/MAXTOR-S-TM3320820AS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD4000AAJS",
      "Brand": "WD",
      "Model": "Blue 400GB (2007)",
      "Rank": 639,
      "Benchmark": 33.6,
      "Samples": 1589,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1532/WDC-WD4000AAJS-00YFA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3300820SCE 300GB",
      "Rank": 640,
      "Benchmark": 33.6,
      "Samples": 629,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1944/ST3300820SCE"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250820AS 250GB",
      "Rank": 641,
      "Benchmark": 33.6,
      "Samples": 12596,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1655/ST3250820AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM400JI 400GB",
      "Rank": 642,
      "Benchmark": 33.5,
      "Samples": 188,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10816/SAMSUNG-HM400JI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM251HI 250GB",
      "Rank": 643,
      "Benchmark": 33.4,
      "Samples": 777,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6909/SAMSUNG-HM251HI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3400620NS 400GB",
      "Rank": 644,
      "Benchmark": 33.3,
      "Samples": 658,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9788/ST3400620NS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5000KS-00MNB0 500GB",
      "Rank": 645,
      "Benchmark": 33.2,
      "Samples": 1003,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2813/WDC-WD5000KS-00MNB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT725050VLA360 500GB",
      "Rank": 646,
      "Benchmark": 33,
      "Samples": 3046,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1926/Hitachi-HDT725050VLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5000YS-18MPB1 500GB",
      "Rank": 647,
      "Benchmark": 32.9,
      "Samples": 964,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12608/WDC-WD5000YS-18MPB1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT725050VLA380 500GB",
      "Rank": 648,
      "Benchmark": 32.9,
      "Samples": 1271,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2605/Hitachi-HDT725050VLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3200AVVS-63L2B0 320GB",
      "Rank": 649,
      "Benchmark": 32.8,
      "Samples": 6904,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5116/WDC-WD3200AVVS-63L2B0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS547550A9E384 500GB",
      "Rank": 650,
      "Benchmark": 32.8,
      "Samples": 22388,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/938/Hitachi-HTS547550A9E384"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK6475GSX 640GB",
      "Rank": 651,
      "Benchmark": 32.8,
      "Samples": 7422,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3809/TOSHIBA-MK6475GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT725032VLA360 320GB",
      "Rank": 652,
      "Benchmark": 32.7,
      "Samples": 3965,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1265/Hitachi-HDT725032VLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "ST320LT012",
      "Brand": "Seagate",
      "Model": "Momentus Thin 5400.9 2.5\" 320GB",
      "Rank": 653,
      "Benchmark": 32.6,
      "Samples": 6708,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3598/ST320LT012-9WS14C"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD740GD-00FLA2 74GB",
      "Rank": 654,
      "Benchmark": 32.6,
      "Samples": 1240,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3765/WDC-WD740GD-00FLA2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HCS5C3232SLA380 320GB",
      "Rank": 655,
      "Benchmark": 32.6,
      "Samples": 808,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8115/Hitachi-HCS5C3232SLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3200BPVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 320GB (2010)",
      "Rank": 656,
      "Benchmark": 32.6,
      "Samples": 33152,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2595/WDC-WD3200BPVT-75JJ5T0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT725032VLA380 320GB",
      "Rank": 657,
      "Benchmark": 32.5,
      "Samples": 3694,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2691/Hitachi-HDT725032VLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "ST320LT020",
      "Brand": "Seagate",
      "Model": "Momentus Thin 5400 2.5\" 320GB",
      "Rank": 658,
      "Benchmark": 32.5,
      "Samples": 7777,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/855/ST320LT020-9YG142"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9160412AS 160GB",
      "Rank": 659,
      "Benchmark": 32.5,
      "Samples": 2085,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2544/ST9160412AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MJA2500BH G2 500GB",
      "Rank": 660,
      "Benchmark": 32.5,
      "Samples": 1413,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7426/FUJITSU-MJA2500BH-G2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS723232L9A360 320GB",
      "Rank": 661,
      "Benchmark": 32.4,
      "Samples": 1259,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6590/Hitachi-HTS723232L9A360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST320LM001 HN-M320MBB 320GB",
      "Rank": 662,
      "Benchmark": 32.4,
      "Samples": 5137,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5867/ST320LM001-HN-M320MBB"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM250HI 250GB",
      "Rank": 663,
      "Benchmark": 32.3,
      "Samples": 4655,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2355/SAMSUNG-HM250HI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS723225L9A362 250GB",
      "Rank": 664,
      "Benchmark": 32.3,
      "Samples": 150,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4098/Hitachi-HTS723225L9A362"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK6476GSX 640GB",
      "Rank": 665,
      "Benchmark": 32.3,
      "Samples": 3432,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/795/TOSHIBA-MK6476GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD401LJ 400GB",
      "Rank": 666,
      "Benchmark": 32.2,
      "Samples": 1570,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1229/SAMSUNG-HD401LJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD753LI 750GB",
      "Rank": 667,
      "Benchmark": 32.2,
      "Samples": 50,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10511/SAMSUNG-HD753LI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3200820AS 200GB",
      "Rank": 668,
      "Benchmark": 32.1,
      "Samples": 1365,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2833/ST3200820AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS54755 500GB",
      "Rank": 669,
      "Benchmark": 32.1,
      "Samples": 181,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1555/Hitachi-HTS54755"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK3276GSX 320GB",
      "Rank": 670,
      "Benchmark": 32,
      "Samples": 4268,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7284/TOSHIBA-MK3276GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545032B9SA02 320GB",
      "Rank": 671,
      "Benchmark": 32,
      "Samples": 444,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11306/Hitachi-HTS545032B9SA02"
    },
    {
      "Type": "HDD",
      "Part Number": "HDP725016GLA380",
      "Brand": "Hitachi",
      "Model": "Deskstar P7K500 160GB",
      "Rank": 672,
      "Benchmark": 31.9,
      "Samples": 2329,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3051/Hitachi-HDP725016GLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK6459GSXP 640GB",
      "Rank": 673,
      "Benchmark": 31.8,
      "Samples": 1988,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2337/TOSHIBA-MK6459GSXP"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS723216L9SA60 160GB",
      "Rank": 674,
      "Benchmark": 31.8,
      "Samples": 649,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1119/HITACHI-HTS723216L9SA60"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3250820A 250GB",
      "Rank": 675,
      "Benchmark": 31.7,
      "Samples": 301,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9658/MAXTOR-STM3250820A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD161HJ 160GB",
      "Rank": 676,
      "Benchmark": 31.7,
      "Samples": 19951,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1496/SAMSUNG-HD161HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK5059GSXP 500GB",
      "Rank": 677,
      "Benchmark": 31.7,
      "Samples": 4668,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2764/TOSHIBA-MK5059GSXP"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3160811AS 160GB",
      "Rank": 678,
      "Benchmark": 31.7,
      "Samples": 426,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10214/MAXTOR-STM3160811AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6V300F0 300GB",
      "Rank": 679,
      "Benchmark": 31.7,
      "Samples": 1245,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2286/Maxtor-6V300F0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2500AAJB-00J3A0 250GB",
      "Rank": 680,
      "Benchmark": 31.6,
      "Samples": 604,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2580/WDC-WD2500AAJB-00J3A0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9250315AS 250GB",
      "Rank": 681,
      "Benchmark": 31.6,
      "Samples": 10775,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/624/ST9250315AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3200AAVS-00ZTB0 320GB",
      "Rank": 682,
      "Benchmark": 31.6,
      "Samples": 495,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5519/WDC-WD3200AAVS-00ZTB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK3259GSXP 320GB",
      "Rank": 683,
      "Benchmark": 31.5,
      "Samples": 2341,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/705/TOSHIBA-MK3259GSXP"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS723216L9A360 160GB",
      "Rank": 684,
      "Benchmark": 31.5,
      "Samples": 600,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5339/Hitachi-HTS723216L9A360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545050B9A300 500GB",
      "Rank": 685,
      "Benchmark": 31.4,
      "Samples": 19778,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1634/Hitachi-HTS545050B9A300"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MJA2250BH G2 250GB",
      "Rank": 686,
      "Benchmark": 31.4,
      "Samples": 925,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4346/FUJITSU-MJA2250BH-G2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "7V300F0 300GB",
      "Rank": 687,
      "Benchmark": 31.3,
      "Samples": 176,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8427/Maxtor-7V300F0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS543216A7A384 160GB",
      "Rank": 688,
      "Benchmark": 31.3,
      "Samples": 748,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6327/Hitachi-HTS543216A7A384"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST332082 0SCE 320GB",
      "Rank": 689,
      "Benchmark": 31.3,
      "Samples": 84,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4800/ST332082-0SCE"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT725032VLA 320GB",
      "Rank": 690,
      "Benchmark": 31.3,
      "Samples": 430,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10037/Hitachi-HDT725032VLA"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD160HJ 160GB",
      "Rank": 691,
      "Benchmark": 31.2,
      "Samples": 1439,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5876/SAMSUNG-HD160HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "ST9500325AS",
      "Brand": "Seagate",
      "Model": "Momentus 5400.6 2.5\" 500GB",
      "Rank": 692,
      "Benchmark": 31.2,
      "Samples": 70561,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/166/ST9500325AS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD5000BEVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 500GB (2009)",
      "Rank": 693,
      "Benchmark": 31.1,
      "Samples": 25080,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1943/WDC-WD5000BEVT-22A0RT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545032A7E380 320GB",
      "Rank": 694,
      "Benchmark": 31,
      "Samples": 3574,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1588/Hitachi-HTS545032A7E380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600AABS-00PRA0 160GB",
      "Rank": 695,
      "Benchmark": 31,
      "Samples": 7065,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1353/WDC-WD1600AABS-00PRA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545050B9SA00 500GB",
      "Rank": 696,
      "Benchmark": 31,
      "Samples": 1142,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6645/Hitachi-HTS545050B9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HUA721075KLA 750GB",
      "Rank": 697,
      "Benchmark": 31,
      "Samples": 22,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6886/Hitachi-HUA721075KLA"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721616PLA380 165GB",
      "Rank": 698,
      "Benchmark": 30.9,
      "Samples": 3252,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3895/Hitachi-HDS721616PLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT725040VLA360 400GB",
      "Rank": 699,
      "Benchmark": 30.9,
      "Samples": 1313,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1719/Hitachi-HDT725040VLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5000AAKB-00H8A0 500GB",
      "Rank": 700,
      "Benchmark": 30.9,
      "Samples": 1026,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4691/WDC-WD5000AAKB-00H8A0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160812AS 160GB",
      "Rank": 701,
      "Benchmark": 30.9,
      "Samples": 9116,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1935/ST3160812AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545050KTA300 500GB",
      "Rank": 702,
      "Benchmark": 30.8,
      "Samples": 203,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9294/Hitachi-HTS545050KTA300"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3160815AS 160GB",
      "Rank": 703,
      "Benchmark": 30.8,
      "Samples": 2146,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6381/MAXTOR-STM3160815AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "7H500F0 500GB",
      "Rank": 704,
      "Benchmark": 30.8,
      "Samples": 846,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3697/Maxtor-7H500F0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK5055GSX 500GB",
      "Rank": 705,
      "Benchmark": 30.7,
      "Samples": 3919,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2029/TOSHIBA-MK5055GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3200820AS 200GB",
      "Rank": 706,
      "Benchmark": 30.7,
      "Samples": 255,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4619/MAXTOR-STM3200820AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK2576GSX 250GB",
      "Rank": 707,
      "Benchmark": 30.7,
      "Samples": 730,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1627/TOSHIBA-MK2576GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK3275GSX 320GB",
      "Rank": 708,
      "Benchmark": 30.7,
      "Samples": 3714,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6320/TOSHIBA-MK3275GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3320820SCE 320GB",
      "Rank": 709,
      "Benchmark": 30.7,
      "Samples": 931,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7203/ST3320820SCE"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK5075GSX 500GB",
      "Rank": 710,
      "Benchmark": 30.7,
      "Samples": 4777,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4046/TOSHIBA-MK5075GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD403LJ 400GB",
      "Rank": 711,
      "Benchmark": 30.6,
      "Samples": 3386,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3800/SAMSUNG-HD403LJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6V320F0 320GB",
      "Rank": 712,
      "Benchmark": 30.6,
      "Samples": 554,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7185/Maxtor-6V320F0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160815SV 160GB",
      "Rank": 713,
      "Benchmark": 30.6,
      "Samples": 569,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10181/ST3160815SV"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250620A 250GB",
      "Rank": 714,
      "Benchmark": 30.5,
      "Samples": 443,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8803/ST3250620A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD082GJ 80GB",
      "Rank": 715,
      "Benchmark": 30.5,
      "Samples": 1423,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5654/SAMSUNG-HD082GJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP2504C 250GB",
      "Rank": 716,
      "Benchmark": 30.5,
      "Samples": 12239,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2057/SAMSUNG-SP2504C"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3300822AS 300GB",
      "Rank": 717,
      "Benchmark": 30.5,
      "Samples": 406,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4225/ST3300822AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD400LJ 400GB",
      "Rank": 718,
      "Benchmark": 30.4,
      "Samples": 1302,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4474/SAMSUNG-HD400LJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545025B9A300 250GB",
      "Rank": 719,
      "Benchmark": 30.4,
      "Samples": 7426,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1535/Hitachi-HTS545025B9A300"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500830A 500GB",
      "Rank": 720,
      "Benchmark": 30.4,
      "Samples": 81,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4792/ST3500830A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250820A 250GB",
      "Rank": 721,
      "Benchmark": 30.4,
      "Samples": 568,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/709/ST3250820A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160815AS 160GB",
      "Rank": 722,
      "Benchmark": 30.3,
      "Samples": 26116,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1990/ST3160815AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6V080E0 82GB",
      "Rank": 723,
      "Benchmark": 30.3,
      "Samples": 670,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2524/Maxtor-6V080E0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721616PLA380 160GB",
      "Rank": 724,
      "Benchmark": 30.3,
      "Samples": 7821,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2578/Hitachi-HDS721616PLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK5076GSX 500GB",
      "Rank": 725,
      "Benchmark": 30.3,
      "Samples": 6071,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2073/TOSHIBA-MK5076GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3320820A 320GB",
      "Rank": 726,
      "Benchmark": 30.3,
      "Samples": 205,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5392/MAXTOR-STM3320820A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721680PLA380 82GB",
      "Rank": 727,
      "Benchmark": 30.2,
      "Samples": 793,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7255/Hitachi-HDS721680PLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS543232A7A384 320GB",
      "Rank": 728,
      "Benchmark": 30.2,
      "Samples": 13388,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4638/HITACHI-HTS543232A7A384"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3808110AS 80GB",
      "Rank": 729,
      "Benchmark": 30.2,
      "Samples": 3923,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4753/ST3808110AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD5000AAJB-00YRA0 500GB",
      "Rank": 730,
      "Benchmark": 30.1,
      "Samples": 117,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6902/WDC-WD5000AAJB-00YRA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD081GJ 80GB",
      "Rank": 731,
      "Benchmark": 30.1,
      "Samples": 826,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4836/SAMSUNG-HD081GJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM320II 320GB",
      "Rank": 732,
      "Benchmark": 30.1,
      "Samples": 1967,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8571/SAMSUNG-HM320II"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3200AAJB-00J3A0 320GB",
      "Rank": 733,
      "Benchmark": 30,
      "Samples": 1251,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2623/WDC-WD3200AAJB-00J3A0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3802110AS 80GB",
      "Rank": 734,
      "Benchmark": 30,
      "Samples": 338,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2586/ST3802110AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK5076GSXN 500GB",
      "Rank": 735,
      "Benchmark": 30,
      "Samples": 523,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11398/TOSHIBA-MK5076GSXN"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160811AS 160GB",
      "Rank": 736,
      "Benchmark": 30,
      "Samples": 4734,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3594/ST3160811AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6V250F0 251GB",
      "Rank": 737,
      "Benchmark": 30,
      "Samples": 1224,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2361/Maxtor-6V250F0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600AVBS-63SVA0 160GB",
      "Rank": 738,
      "Benchmark": 30,
      "Samples": 436,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3472/WDC-WD1600AVBS-63SVA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHZ2160BJ FFS G2 160GB",
      "Rank": 739,
      "Benchmark": 29.9,
      "Samples": 106,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3938/FUJITSU-MHZ2160BJ-FFS-G2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3200KS-00PFB0 320GB",
      "Rank": 740,
      "Benchmark": 29.9,
      "Samples": 2601,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/676/WDC-WD3200KS-00PFB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK2555GSX 250GB",
      "Rank": 741,
      "Benchmark": 29.8,
      "Samples": 4051,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2698/TOSHIBA-MK2555GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS723225L9A360 250GB",
      "Rank": 742,
      "Benchmark": 29.8,
      "Samples": 521,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4544/Hitachi-HTS723225L9A360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500630A 500GB",
      "Rank": 743,
      "Benchmark": 29.8,
      "Samples": 586,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6609/ST3500630A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3160211AS 160GB",
      "Rank": 744,
      "Benchmark": 29.8,
      "Samples": 1334,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8177/MAXTOR-STM3160211AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3400832AS 400GB",
      "Rank": 745,
      "Benchmark": 29.7,
      "Samples": 1571,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/780/ST3400832AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM380215AS 80GB",
      "Rank": 746,
      "Benchmark": 29.6,
      "Samples": 1748,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2696/MAXTOR-STM380215AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST380215AS 80GB",
      "Rank": 747,
      "Benchmark": 29.6,
      "Samples": 2207,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6286/ST380215AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160215AS 160GB",
      "Rank": 748,
      "Benchmark": 29.6,
      "Samples": 4656,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3966/ST3160215AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Excelstor",
      "Model": "Technology J8160S 160GB",
      "Rank": 749,
      "Benchmark": 29.6,
      "Samples": 1065,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11714/ExcelStor-Technology-J8160S"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250823AS 250GB",
      "Rank": 750,
      "Benchmark": 29.6,
      "Samples": 3850,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2690/ST3250823AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250824AS 250GB",
      "Rank": 751,
      "Benchmark": 29.5,
      "Samples": 3935,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2131/ST3250824AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3300622AS 300GB",
      "Rank": 752,
      "Benchmark": 29.5,
      "Samples": 656,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2993/ST3300622AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT722525DLA380 250GB",
      "Rank": 753,
      "Benchmark": 29.4,
      "Samples": 3207,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1390/HDT722525DLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3200JS-63PDB1 320GB",
      "Rank": 754,
      "Benchmark": 29.4,
      "Samples": 2495,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4071/WDC-WD3200JS-63PDB1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160211AS 160GB",
      "Rank": 755,
      "Benchmark": 29.3,
      "Samples": 1050,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7276/ST3160211AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6V200E0 204GB",
      "Rank": 756,
      "Benchmark": 29.3,
      "Samples": 1377,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1837/Maxtor-6V200E0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK5065GSXN 500GB",
      "Rank": 757,
      "Benchmark": 29.3,
      "Samples": 1691,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5561/TOSHIBA-MK5065GSXN"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK5055GSXN 500GB",
      "Rank": 758,
      "Benchmark": 29.3,
      "Samples": 693,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1798/TOSHIBA-MK5055GSXN"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6V160E0 160GB",
      "Rank": 759,
      "Benchmark": 29.3,
      "Samples": 1593,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4072/Maxtor-6V160E0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MJA2320BH G2 320GB",
      "Rank": 760,
      "Benchmark": 29.3,
      "Samples": 977,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3975/FUJITSU-MJA2320BH-G2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK5065GSX 500GB",
      "Rank": 761,
      "Benchmark": 29.2,
      "Samples": 3825,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/252/TOSHIBA-MK5065GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2500BEVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 250GB (2009)",
      "Rank": 762,
      "Benchmark": 29.2,
      "Samples": 14912,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2695/WDC-WD2500BEVT-00ZCT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3400633AS 400GB",
      "Rank": 763,
      "Benchmark": 29.1,
      "Samples": 428,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6724/ST3400633AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST380811AS 80GB",
      "Rank": 764,
      "Benchmark": 29.1,
      "Samples": 2375,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2147/ST380811AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3200JD-22K 320GB",
      "Rank": 765,
      "Benchmark": 29,
      "Samples": 674,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6647/WDC-WD3200JD-22K"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3200YS-01PGB0 320GB",
      "Rank": 766,
      "Benchmark": 29,
      "Samples": 998,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3238/WDC-WD3200YS-01PGB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L160M0 160GB",
      "Rank": 767,
      "Benchmark": 28.9,
      "Samples": 453,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4958/Maxtor-6L160M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3200BMVS-11F9S0 320GB",
      "Rank": 768,
      "Benchmark": 28.9,
      "Samples": 134,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10626/WDC-WD3200BMVS-11F9S0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545032B9SA00 320GB",
      "Rank": 769,
      "Benchmark": 28.8,
      "Samples": 1015,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10455/Hitachi-HTS545032B9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3160215AS 160GB",
      "Rank": 770,
      "Benchmark": 28.8,
      "Samples": 7108,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1296/MAXTOR-STM3160215AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD4000KD-00NAB0 400GB",
      "Rank": 771,
      "Benchmark": 28.8,
      "Samples": 161,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2338/WDC-WD4000KD-00NAB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "7L250S0 250GB",
      "Rank": 772,
      "Benchmark": 28.7,
      "Samples": 541,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5847/Maxtor-7L250S0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721680PLA380 80GB",
      "Rank": 773,
      "Benchmark": 28.7,
      "Samples": 1995,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4750/Hitachi-HDS721680PLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2500YD-01NVB1 251GB",
      "Rank": 774,
      "Benchmark": 28.7,
      "Samples": 448,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8909/WDC-WD2500YD-01NVB1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600AAJB-00PVA0 160GB",
      "Rank": 775,
      "Benchmark": 28.6,
      "Samples": 1520,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4799/WDC-WD1600AAJB-00PVA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD252KJ 250GB",
      "Rank": 776,
      "Benchmark": 28.6,
      "Samples": 1007,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3923/SAMSUNG-HD252KJ"
    },
    {
      "Type": "HDD",
      "Part Number": "WD3200BEVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 320GB (2009)",
      "Rank": 777,
      "Benchmark": 28.6,
      "Samples": 31128,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2273/WDC-WD3200BEVT-22ZCT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545032B9A300 320GB",
      "Rank": 778,
      "Benchmark": 28.6,
      "Samples": 12424,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1389/Hitachi-HTS545032B9A300"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600YS-18SHB2 160GB",
      "Rank": 779,
      "Benchmark": 28.6,
      "Samples": 227,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10150/WDC-WD1600YS-18SHB2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST380815AS 80GB",
      "Rank": 780,
      "Benchmark": 28.5,
      "Samples": 14235,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/637/ST380815AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS543225A7A384 250GB",
      "Rank": 781,
      "Benchmark": 28.5,
      "Samples": 1620,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9742/Hitachi-HTS543225A7A384"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT725032VLAT80 320GB",
      "Rank": 782,
      "Benchmark": 28.5,
      "Samples": 164,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5147/Hitachi-HDT725032VLAT80"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "7L250S0 251GB",
      "Rank": 783,
      "Benchmark": 28.4,
      "Samples": 316,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4393/Maxtor--7L250S0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250624AS 250GB",
      "Rank": 784,
      "Benchmark": 28.4,
      "Samples": 676,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6831/ST3250624AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD4000YR-01PLB0 400GB",
      "Rank": 785,
      "Benchmark": 28.4,
      "Samples": 206,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3948/WDC-WD4000YR-01PLB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "7L300S0 300GB",
      "Rank": 786,
      "Benchmark": 28.3,
      "Samples": 301,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2130/Maxtor-7L300S0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS722020K9SA00 200GB",
      "Rank": 787,
      "Benchmark": 28.3,
      "Samples": 200,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10167/Hitachi-HTS722020K9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3400832A 400GB",
      "Rank": 788,
      "Benchmark": 28.3,
      "Samples": 134,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2624/ST3400832A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6 L300S0 300GB",
      "Rank": 789,
      "Benchmark": 28.2,
      "Samples": 130,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9919/Maxtor-6-L300S0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160815A 160GB",
      "Rank": 790,
      "Benchmark": 28.2,
      "Samples": 662,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1808/ST3160815A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP2514N 250GB",
      "Rank": 791,
      "Benchmark": 28.2,
      "Samples": 564,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4577/SAMSUNG-SP2514N"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9320325AS 320GB",
      "Rank": 792,
      "Benchmark": 28.1,
      "Samples": 15128,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2223/ST9320325AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600YS-01SHB1 165GB",
      "Rank": 793,
      "Benchmark": 28.1,
      "Samples": 805,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10600/WDC-WD1600YS-01SHB1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6B200M0 204GB",
      "Rank": 794,
      "Benchmark": 28.1,
      "Samples": 1048,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2239/Maxtor-6B200M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3300831AS 300GB",
      "Rank": 795,
      "Benchmark": 28,
      "Samples": 1101,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1777/ST3300831AS"
    },
    {
      "Type": "HDD",
      "Part Number": "WD2500BPVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 250GB (2010)",
      "Rank": 796,
      "Benchmark": 28,
      "Samples": 2254,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2517/WDC-WD2500BPVT-75JJ5T0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3250823A 250GB",
      "Rank": 797,
      "Benchmark": 28,
      "Samples": 200,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4671/ST3250823A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L200M0 200GB",
      "Rank": 798,
      "Benchmark": 27.9,
      "Samples": 467,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6596/Maxtor-6L200M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS54323 320GB",
      "Rank": 799,
      "Benchmark": 27.8,
      "Samples": 264,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7228/Hitachi-HTS54323"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160215SCE 160GB",
      "Rank": 800,
      "Benchmark": 27.8,
      "Samples": 1953,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9361/ST3160215SCE"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2500KS-00MJB0 250GB",
      "Rank": 801,
      "Benchmark": 27.7,
      "Samples": 6804,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1521/WDC-WD2500KS-00MJB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L300S0 300GB",
      "Rank": 802,
      "Benchmark": 27.6,
      "Samples": 1978,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2242/Maxtor-6L300S0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3200BEVS-16VAT0 320GB",
      "Rank": 803,
      "Benchmark": 27.6,
      "Samples": 1319,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3173/WDC-WD3200BEVS-16VAT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST312081 2AS 120GB",
      "Rank": 804,
      "Benchmark": 27.6,
      "Samples": 9,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/13081/ST312081-2AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6Y120L0 120GB",
      "Rank": 805,
      "Benchmark": 27.6,
      "Samples": 10,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9085/Maxtor-6Y120L0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST380211AS 80GB",
      "Rank": 806,
      "Benchmark": 27.6,
      "Samples": 667,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2053/ST380211AS"
    },
    {
      "Type": "HDD",
      "Part Number": "ST9200420AS",
      "Brand": "Seagate",
      "Model": "Momentus 2.5\" 200GB",
      "Rank": 807,
      "Benchmark": 27.5,
      "Samples": 460,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6639/ST9200420AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2500YS-01SHB1 251GB",
      "Rank": 808,
      "Benchmark": 27.5,
      "Samples": 1774,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3947/WDC-WD2500YS-01SHB1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD25 00JS-58NCB1 250GB",
      "Rank": 809,
      "Benchmark": 27.5,
      "Samples": 15757,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2392/WDC-WD25-00JS-58NCB1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3200822AS 200GB",
      "Rank": 810,
      "Benchmark": 27.4,
      "Samples": 3520,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1057/ST3200822AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3200826AS 200GB",
      "Rank": 811,
      "Benchmark": 27.4,
      "Samples": 1828,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7868/ST3200826AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6B250S0 251GB",
      "Rank": 812,
      "Benchmark": 27.3,
      "Samples": 300,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3399/Maxtor-6B250S0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3200827AS 200GB",
      "Rank": 813,
      "Benchmark": 27.3,
      "Samples": 2307,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2117/ST3200827AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160215A 160GB",
      "Rank": 814,
      "Benchmark": 27.2,
      "Samples": 769,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4962/ST3160215A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L200M0 204GB",
      "Rank": 815,
      "Benchmark": 27.2,
      "Samples": 1298,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2656/Maxtor-6L200M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT725025VLA380 250GB",
      "Rank": 816,
      "Benchmark": 27.2,
      "Samples": 5016,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1140/Hitachi-HDT725025VLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "WD800BEVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 80GB (2009)",
      "Rank": 817,
      "Benchmark": 27.1,
      "Samples": 341,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1891/WDC-WD800BEVT-75ZCT1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2000JS-00MHB0 200GB",
      "Rank": 818,
      "Benchmark": 27,
      "Samples": 2208,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1235/WDC-WD2000JS-00MHB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9320320AS 320GB",
      "Rank": 819,
      "Benchmark": 27,
      "Samples": 2917,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1647/ST9320320AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS725050KLA360 500GB",
      "Rank": 820,
      "Benchmark": 27,
      "Samples": 4524,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5034/HDS725050KLA360"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM3160215A 160GB",
      "Rank": 821,
      "Benchmark": 27,
      "Samples": 577,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9767/MAXTOR-STM3160215A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L250M0 251GB",
      "Rank": 822,
      "Benchmark": 27,
      "Samples": 148,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9542/Maxtor-6L250M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L250S0 251GB",
      "Rank": 823,
      "Benchmark": 26.9,
      "Samples": 839,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1207/Maxtor-6L250S0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6B160M0 164GB",
      "Rank": 824,
      "Benchmark": 26.9,
      "Samples": 179,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6303/Maxtor-6B160M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST925032 0AS 250GB",
      "Rank": 825,
      "Benchmark": 26.9,
      "Samples": 1265,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4392/ST925032-0AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600JS-75NCB1 160GB",
      "Rank": 826,
      "Benchmark": 26.8,
      "Samples": 8570,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1439/WDC-WD1600JS-75NCB1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS721616PLAT80 160GB",
      "Rank": 827,
      "Benchmark": 26.8,
      "Samples": 178,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6818/Hitachi-HDS721616PLAT80"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP1603C 160GB",
      "Rank": 828,
      "Benchmark": 26.7,
      "Samples": 302,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11458/SAMSUNG-SP1603C"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT722516DLA380 165GB",
      "Rank": 829,
      "Benchmark": 26.7,
      "Samples": 1529,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3422/HDT722516DLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9160310AS 160GB",
      "Rank": 830,
      "Benchmark": 26.6,
      "Samples": 2069,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1274/ST9160310AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6Y160M0 160GB",
      "Rank": 831,
      "Benchmark": 26.5,
      "Samples": 404,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2372/Maxtor-6Y160M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3802110A 80GB",
      "Rank": 832,
      "Benchmark": 26.4,
      "Samples": 664,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11154/ST3802110A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3000JS-60PDB0 300GB",
      "Rank": 833,
      "Benchmark": 26.4,
      "Samples": 986,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9069/WDC-WD3000JS-60PDB0"
    },
    {
      "Type": "HDD",
      "Part Number": "WD1600BEVT",
      "Brand": "WD",
      "Model": "Blue 2.5\" 160GB (2009)",
      "Rank": 834,
      "Benchmark": 26.3,
      "Samples": 12623,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2327/WDC-WD1600BEVT-22ZCT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK4058GSX 400GB",
      "Rank": 835,
      "Benchmark": 26.2,
      "Samples": 631,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6302/TOSHIBA-MK4058GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP1213C 120GB",
      "Rank": 836,
      "Benchmark": 26.2,
      "Samples": 611,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5318/SAMSUNG-SP1213C"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT722525DLAT80 250GB",
      "Rank": 837,
      "Benchmark": 26.2,
      "Samples": 243,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6021/HDT722525DLAT80"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK3263GS 320GB",
      "Rank": 838,
      "Benchmark": 26.2,
      "Samples": 52,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7948/TOSHIBA-MK3263GS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500841AS 500GB",
      "Rank": 839,
      "Benchmark": 26.2,
      "Samples": 471,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1585/ST3500841AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK3263GSX 320GB",
      "Rank": 840,
      "Benchmark": 26.2,
      "Samples": 2052,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1707/TOSHIBA-MK3263GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545032B9A 320GB",
      "Rank": 841,
      "Benchmark": 26.2,
      "Samples": 193,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5973/Hitachi-HTS545032B9A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3500641AS 500GB",
      "Rank": 842,
      "Benchmark": 26.1,
      "Samples": 1721,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4005/ST3500641AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3200JB-00KFA0 320GB",
      "Rank": 843,
      "Benchmark": 26.1,
      "Samples": 311,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/932/WDC-WD3200JB-00KFA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "7Y250M0 251GB",
      "Rank": 844,
      "Benchmark": 26.1,
      "Samples": 500,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3687/Maxtor-7Y250M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160212AS 160GB",
      "Rank": 845,
      "Benchmark": 26.1,
      "Samples": 1413,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6800/ST3160212AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600AABB-00PUA0 160GB",
      "Rank": 846,
      "Benchmark": 26.1,
      "Samples": 225,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4532/WDC-WD1600AABB-00PUA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "STM380215A 80GB",
      "Rank": 847,
      "Benchmark": 26,
      "Samples": 322,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10373/MAXTOR-STM380215A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHZ2320BH G2 320GB",
      "Rank": 848,
      "Benchmark": 26,
      "Samples": 2005,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3241/FUJITSU-MHZ2320BH-G2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST380215A 80GB",
      "Rank": 849,
      "Benchmark": 26,
      "Samples": 656,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2923/ST380215A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD300LJ 300GB",
      "Rank": 850,
      "Benchmark": 26,
      "Samples": 974,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10568/SAMSUNG-HD300LJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD160JJ/P 160GB",
      "Rank": 851,
      "Benchmark": 25.8,
      "Samples": 1844,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2146/SAMSUNG-HD160JJP"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD120IJ 120GB",
      "Rank": 852,
      "Benchmark": 25.7,
      "Samples": 708,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2996/SAMSUNG-HD120IJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK3252GSX 320GB",
      "Rank": 853,
      "Benchmark": 25.7,
      "Samples": 2954,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4807/TOSHIBA-MK3252GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9250827AS 250GB",
      "Rank": 854,
      "Benchmark": 25.6,
      "Samples": 3054,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3497/ST9250827AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP1614C 160GB",
      "Rank": 855,
      "Benchmark": 25.4,
      "Samples": 1456,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6801/SAMSUNG-SP1614C"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD160JJ 160GB",
      "Rank": 856,
      "Benchmark": 25.3,
      "Samples": 4514,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3475/SAMSUNG-HD160JJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3120813AS 120GB",
      "Rank": 857,
      "Benchmark": 25.3,
      "Samples": 590,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8799/ST3120813AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6Y160M0 164GB",
      "Rank": 858,
      "Benchmark": 25.3,
      "Samples": 699,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9950/Maxtor-6Y160M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L100P0 100GB",
      "Rank": 859,
      "Benchmark": 25.2,
      "Samples": 48,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5231/Maxtor-6L100P0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3120213AS 120GB",
      "Rank": 860,
      "Benchmark": 25.2,
      "Samples": 644,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/8435/ST3120213AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6Y120M0 123GB",
      "Rank": 861,
      "Benchmark": 25.2,
      "Samples": 686,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4197/Maxtor-6Y120M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK1652GSX 160GB",
      "Rank": 862,
      "Benchmark": 25.1,
      "Samples": 1862,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3060/TOSHIBA-MK1652GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L080M0 82GB",
      "Rank": 863,
      "Benchmark": 25.1,
      "Samples": 222,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3878/Maxtor-6L080M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6 Y080M0 82GB",
      "Rank": 864,
      "Benchmark": 25,
      "Samples": 86,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5709/Maxtor-6-Y080M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6 L200P0 204GB",
      "Rank": 865,
      "Benchmark": 25,
      "Samples": 22,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3778/Maxtor-6-L200P0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3120811AS 120GB",
      "Rank": 866,
      "Benchmark": 25,
      "Samples": 421,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1497/ST3120811AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3120827AS 120GB",
      "Rank": 867,
      "Benchmark": 24.9,
      "Samples": 1653,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/27/ST3120827AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L160P0 164GB",
      "Rank": 868,
      "Benchmark": 24.9,
      "Samples": 504,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5287/Maxtor-6L160P0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP2004C 200GB",
      "Rank": 869,
      "Benchmark": 24.8,
      "Samples": 3840,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3536/SAMSUNG-SP2004C"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD080HJ 80GB",
      "Rank": 870,
      "Benchmark": 24.8,
      "Samples": 4053,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/810/SAMSUNG-HD080HJ"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK1633GSG 160GB",
      "Rank": 871,
      "Benchmark": 24.8,
      "Samples": 403,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5563/TOSHIBA-MK1633GSG"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST380819AS 80GB",
      "Rank": 872,
      "Benchmark": 24.8,
      "Samples": 765,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5233/ST380819AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS722016K9SA00 160GB",
      "Rank": 873,
      "Benchmark": 24.8,
      "Samples": 297,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4166/HITACHI-HTS722016K9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST380817AS 80GB",
      "Rank": 874,
      "Benchmark": 24.8,
      "Samples": 1733,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4251/ST380817AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160023AS 160GB",
      "Rank": 875,
      "Benchmark": 24.8,
      "Samples": 4077,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2396/ST3160023AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6Y080M0 82GB",
      "Rank": 876,
      "Benchmark": 24.8,
      "Samples": 653,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2523/Maxtor-6Y080M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP0812C 80GB",
      "Rank": 877,
      "Benchmark": 24.7,
      "Samples": 744,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6580/SAMSUNG-SP0812C"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS725050KLAT80 500GB",
      "Rank": 878,
      "Benchmark": 24.7,
      "Samples": 81,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4136/HDS725050KLAT80"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM160HI 160GB",
      "Rank": 879,
      "Benchmark": 24.7,
      "Samples": 3287,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1443/SAMSUNG-HM160HI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS722512VLSA80 124GB",
      "Rank": 880,
      "Benchmark": 24.7,
      "Samples": 78,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4756/HDS722512VLSA80"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD3000JB-00KFA0 300GB",
      "Rank": 881,
      "Benchmark": 24.7,
      "Samples": 125,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12574/WDC-WD3000JB-00KFA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160827AS 160GB",
      "Rank": 882,
      "Benchmark": 24.6,
      "Samples": 1582,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2026/ST3160827AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS722516VLSA80 165GB",
      "Rank": 883,
      "Benchmark": 24.6,
      "Samples": 474,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1980/HDS722516VLSA80"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS722580VLSA80 82GB",
      "Rank": 884,
      "Benchmark": 24.5,
      "Samples": 215,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7444/HDS722580VLSA80"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD800JD-75MSA3 80GB",
      "Rank": 885,
      "Benchmark": 24.4,
      "Samples": 19780,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2331/WDC-WD800JD-75MSA3"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9160823AS 160GB",
      "Rank": 886,
      "Benchmark": 24.4,
      "Samples": 474,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4557/ST9160823AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST380013AS 80GB",
      "Rank": 887,
      "Benchmark": 24.4,
      "Samples": 2477,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2648/ST380013AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD080HJ/P 80GB",
      "Rank": 888,
      "Benchmark": 24.4,
      "Samples": 1701,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2558/SAMSUNG-HD080HJP"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9120823AS 120GB",
      "Rank": 889,
      "Benchmark": 24.3,
      "Samples": 275,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1667/ST9120823AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM250JI 250GB",
      "Rank": 890,
      "Benchmark": 24.3,
      "Samples": 826,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3524/SAMSUNG-HM250JI"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9160827AS 160GB",
      "Rank": 891,
      "Benchmark": 24.3,
      "Samples": 889,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1284/ST9160827AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP1614N 160GB",
      "Rank": 892,
      "Benchmark": 24.3,
      "Samples": 215,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12600/SAMSUNG-SP1614N"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600JD-22HBB0 160GB",
      "Rank": 893,
      "Benchmark": 24.3,
      "Samples": 2118,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/233/WDC-WD1600JD-22HBB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2000JB-00GVA0 200GB",
      "Rank": 894,
      "Benchmark": 24.2,
      "Samples": 573,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6220/WDC-WD2000JB-00GVA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS543232L9A300 320GB",
      "Rank": 895,
      "Benchmark": 24.2,
      "Samples": 3564,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1887/Hitachi-HTS543232L9A300"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L080M0 80GB",
      "Rank": 896,
      "Benchmark": 24.2,
      "Samples": 398,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1731/Maxtor-6L080M0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS728080PLA380 82GB",
      "Rank": 897,
      "Benchmark": 24.2,
      "Samples": 2012,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1187/HDS728080PLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L300R0 300GB",
      "Rank": 898,
      "Benchmark": 24.1,
      "Samples": 297,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4620/Maxtor-6L300R0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDT722516DLAT80 165GB",
      "Rank": 899,
      "Benchmark": 24.1,
      "Samples": 209,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3500/HDT722516DLAT80"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP2014N 200GB",
      "Rank": 900,
      "Benchmark": 24,
      "Samples": 327,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4945/SAMSUNG-SP2014N"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHZ2160BH G2 160GB",
      "Rank": 901,
      "Benchmark": 24,
      "Samples": 1722,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4477/FUJITSU-MHZ2160BH-G2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3120026AS 120GB",
      "Rank": 902,
      "Benchmark": 24,
      "Samples": 1939,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/508/ST3120026AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2500JD-00HBB0 250GB",
      "Rank": 903,
      "Benchmark": 24,
      "Samples": 2743,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3022/WDC-WD2500JD-00HBB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST340014AS 40GB",
      "Rank": 904,
      "Benchmark": 24,
      "Samples": 774,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4925/ST340014AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2000JD-00HBB0 200GB",
      "Rank": 905,
      "Benchmark": 23.9,
      "Samples": 1962,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1208/WDC-WD2000JD-00HBB0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP1604N 160GB",
      "Rank": 906,
      "Benchmark": 23.9,
      "Samples": 304,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3596/SAMSUNG-SP1604N"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2500BB-98DWA0 250GB",
      "Rank": 907,
      "Benchmark": 23.8,
      "Samples": 302,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/294/WDC-WD2500BB-98DWA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD400BD-22JMC0 40GB",
      "Rank": 908,
      "Benchmark": 23.8,
      "Samples": 1056,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7189/WDC-WD400BD-22JMC0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3120211AS 120GB",
      "Rank": 909,
      "Benchmark": 23.8,
      "Samples": 112,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1804/ST3120211AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST980813AS 80GB",
      "Rank": 910,
      "Benchmark": 23.8,
      "Samples": 222,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1190/ST980813AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS543216L9SA00 160GB",
      "Rank": 911,
      "Benchmark": 23.8,
      "Samples": 1241,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2975/Hitachi-HTS543216L9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS543232L9SA00 320GB",
      "Rank": 912,
      "Benchmark": 23.8,
      "Samples": 963,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1414/Hitachi-HTS543232L9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600JB-00GVC0 160GB",
      "Rank": 913,
      "Benchmark": 23.7,
      "Samples": 932,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4380/WDC-WD1600JB-00GVC0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK1655GSX 160GB",
      "Rank": 914,
      "Benchmark": 23.7,
      "Samples": 1632,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1628/TOSHIBA-MK1655GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS724040KLSA80 400GB",
      "Rank": 915,
      "Benchmark": 23.7,
      "Samples": 482,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6426/HDS724040KLSA80"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP1213N 120GB",
      "Rank": 916,
      "Benchmark": 23.6,
      "Samples": 118,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1600/SAMSUNG-SP1213N"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS543216L9A300 160GB",
      "Rank": 917,
      "Benchmark": 23.6,
      "Samples": 2430,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1763/Hitachi-HTS543216L9A300"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHZ2250BH G2 250GB",
      "Rank": 918,
      "Benchmark": 23.6,
      "Samples": 1360,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2860/FUJITSU-MHZ2250BH-G2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS543225L9SA00 250GB",
      "Rank": 919,
      "Benchmark": 23.6,
      "Samples": 1006,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/9015/Hitachi-HTS543225L9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "7Y250P0 251GB",
      "Rank": 920,
      "Benchmark": 23.5,
      "Samples": 86,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4982/Maxtor-7Y250P0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6B200P0 204GB",
      "Rank": 921,
      "Benchmark": 23.5,
      "Samples": 222,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6815/Maxtor-6B200P0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2500BEVS-22UST0 250GB",
      "Rank": 922,
      "Benchmark": 23.4,
      "Samples": 7245,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3263/WDC-WD2500BEVS-22UST0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD800BD-22MRA1 80GB",
      "Rank": 923,
      "Benchmark": 23.4,
      "Samples": 2984,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5953/WDC-WD800BD-22MRA1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS545016B9A300 160GB",
      "Rank": 924,
      "Benchmark": 23.4,
      "Samples": 2842,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4712/Hitachi-HTS545016B9A300"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1200JD-00HBC0 120GB",
      "Rank": 925,
      "Benchmark": 23.4,
      "Samples": 947,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3615/WDC-WD1200JD-00HBC0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3120814A 120GB",
      "Rank": 926,
      "Benchmark": 23.4,
      "Samples": 150,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2132/ST3120814A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK2552GSX 250GB",
      "Rank": 927,
      "Benchmark": 23.4,
      "Samples": 2010,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/200/TOSHIBA-MK2552GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "",
      "Model": "IC35L120AVV207-1 124GB",
      "Rank": 928,
      "Benchmark": 23.3,
      "Samples": 51,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2982/IC35L120AVV207-1"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6 Y160P0 164GB",
      "Rank": 929,
      "Benchmark": 23.3,
      "Samples": 379,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2357/Maxtor-6-Y160P0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Excelstor",
      "Model": "Technology J880 82GB",
      "Rank": 930,
      "Benchmark": 23.2,
      "Samples": 218,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5162/ExcelStor-Technology-J880"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HM160HC 160GB",
      "Rank": 931,
      "Benchmark": 23.2,
      "Samples": 145,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5384/SAMSUNG-HM160HC"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS542525K9SA00 250GB",
      "Rank": 932,
      "Benchmark": 23.1,
      "Samples": 2804,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/487/Hitachi-HTS542525K9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6Y080P0 82GB",
      "Rank": 933,
      "Benchmark": 23,
      "Samples": 276,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3815/Maxtor-6Y080P0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS728080PLA380 80GB",
      "Rank": 934,
      "Benchmark": 23,
      "Samples": 955,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4994/HDS728080PLA380"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP0812N 80GB",
      "Rank": 935,
      "Benchmark": 23,
      "Samples": 159,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7242/SAMSUNG-SP0812N"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L200R0 204GB",
      "Rank": 936,
      "Benchmark": 23,
      "Samples": 64,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4436/Maxtor-6L200R0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS728040PLA320 40GB",
      "Rank": 937,
      "Benchmark": 23,
      "Samples": 76,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5170/HDS728040PLA320"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD2500JB-00REA0 250GB",
      "Rank": 938,
      "Benchmark": 22.9,
      "Samples": 1090,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/678/WDC-WD2500JB-00REA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHW2160BJ FFS G2 160GB",
      "Rank": 939,
      "Benchmark": 22.9,
      "Samples": 58,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4184/FUJITSU-MHW2160BJ-FFS-G2"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP0842N 80GB",
      "Rank": 940,
      "Benchmark": 22.8,
      "Samples": 626,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5511/SAMSUNG-SP0842N"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1200JB-00EVA0 120GB",
      "Rank": 941,
      "Benchmark": 22.7,
      "Samples": 605,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2471/WDC-WD1200JB-00EVA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS543225L9A300 250GB",
      "Rank": 942,
      "Benchmark": 22.7,
      "Samples": 3859,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2281/Hitachi-HTS543225L9A300"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6E040L0 41GB",
      "Rank": 943,
      "Benchmark": 22.6,
      "Samples": 563,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/769/Maxtor-6E040L0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK2546GSX 250GB",
      "Rank": 944,
      "Benchmark": 22.5,
      "Samples": 915,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4487/TOSHIBA-MK2546GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "HD300LD 300GB",
      "Rank": 945,
      "Benchmark": 22.5,
      "Samples": 179,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1871/SAMSUNG-HD300LD"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP0411C 40GB",
      "Rank": 946,
      "Benchmark": 22.4,
      "Samples": 269,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6293/SAMSUNG-SP0411C"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD800JB-00ETA0 80GB",
      "Rank": 947,
      "Benchmark": 22.3,
      "Samples": 193,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3829/WDC-WD800JB-00ETA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6L160P0 160GB",
      "Rank": 948,
      "Benchmark": 22.3,
      "Samples": 51,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6841/Maxtor-6L160P0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK2546GSX_200 200GB",
      "Rank": 949,
      "Benchmark": 22.3,
      "Samples": 142,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3937/TOSHIBA-MK2546GSX-200"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS722012K9SA00 120GB",
      "Rank": 950,
      "Benchmark": 22.1,
      "Samples": 100,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3793/Hitachi-HTS722012K9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1200BB-00RDA0 120GB",
      "Rank": 951,
      "Benchmark": 22,
      "Samples": 313,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10238/WDC-WD1200BB-00RDA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS542512K9SA00 120GB",
      "Rank": 952,
      "Benchmark": 22,
      "Samples": 1240,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1928/Hitachi-HTS542512K9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6Y120L0 123GB",
      "Rank": 953,
      "Benchmark": 21.8,
      "Samples": 480,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1790/Maxtor-6Y120L0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160023A 160GB",
      "Rank": 954,
      "Benchmark": 21.8,
      "Samples": 449,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5944/ST3160023A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP0802N 80GB",
      "Rank": 955,
      "Benchmark": 21.8,
      "Samples": 655,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2601/SAMSUNG-SP0802N"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHZ2120B 120GB",
      "Rank": 956,
      "Benchmark": 21.7,
      "Samples": 10,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5860/FUJITSU-MHZ2120B"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600BEVS-22UST0 160GB",
      "Rank": 957,
      "Benchmark": 21.4,
      "Samples": 4585,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3126/WDC-WD1600BEVS-22UST0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHY2250BH 250GB",
      "Rank": 958,
      "Benchmark": 21.3,
      "Samples": 1004,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5732/FUJITSU-MHY2250BH"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP0822N 80GB",
      "Rank": 959,
      "Benchmark": 21.3,
      "Samples": 272,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2110/SAMSUNG-SP0822N"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD400JB-00FMA0 40GB",
      "Rank": 960,
      "Benchmark": 21.2,
      "Samples": 95,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3602/WDC-WD400JB-00FMA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS543212L9A300 120GB",
      "Rank": 961,
      "Benchmark": 21.1,
      "Samples": 222,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/266/Hitachi-HTS543212L9A300"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD800JB-00JJC0 80GB",
      "Rank": 962,
      "Benchmark": 21.1,
      "Samples": 1037,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/70/WDC-WD800JB-00JJC0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600BEVE-00WZT0 160GB",
      "Rank": 963,
      "Benchmark": 20.8,
      "Samples": 40,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10531/WDC-WD1600BEVE-00WZT0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD400BB-60DGA0 40GB",
      "Rank": 964,
      "Benchmark": 20.8,
      "Samples": 698,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5256/WDC-WD400BB-60DGA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1600BB-22GUC0 160GB",
      "Rank": 965,
      "Benchmark": 20.8,
      "Samples": 733,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/12099/WDC-WD1600BB-22GUC0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6Y080L0 82GB",
      "Rank": 966,
      "Benchmark": 20.7,
      "Samples": 1219,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/933/Maxtor-6Y080L0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST380023AS 80GB",
      "Rank": 967,
      "Benchmark": 20.6,
      "Samples": 52,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6282/ST380023AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SP0411N 40GB",
      "Rank": 968,
      "Benchmark": 20.6,
      "Samples": 448,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6089/SAMSUNG-SP0411N"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3120022A 120GB",
      "Rank": 969,
      "Benchmark": 20.5,
      "Samples": 872,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2299/ST3120022A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD1200BEVS-60UST0 120GB",
      "Rank": 970,
      "Benchmark": 20.5,
      "Samples": 3031,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3682/WDC-WD1200BEVS-60UST0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS721010G9SA00 100GB",
      "Rank": 971,
      "Benchmark": 20.5,
      "Samples": 187,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5680/HTS721010G9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3160021A 160GB",
      "Rank": 972,
      "Benchmark": 20.3,
      "Samples": 823,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6402/ST3160021A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6Y060L0 61GB",
      "Rank": 973,
      "Benchmark": 20,
      "Samples": 168,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3853/Maxtor-6Y060L0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST910021AS 100GB",
      "Rank": 974,
      "Benchmark": 20,
      "Samples": 197,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/11880/ST910021AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST340014A 40GB",
      "Rank": 975,
      "Benchmark": 19.9,
      "Samples": 845,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1817/ST340014A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHY2120BH 120GB",
      "Rank": 976,
      "Benchmark": 19.8,
      "Samples": 1142,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10510/FUJITSU-MHY2120BH"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD800BB-88JHC0 80GB",
      "Rank": 977,
      "Benchmark": 19.7,
      "Samples": 2572,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1308/WDC-WD800BB-88JHC0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "6 Y120P0 123GB",
      "Rank": 978,
      "Benchmark": 19.6,
      "Samples": 9,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4430/Maxtor-6-Y120P0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK1646GSX 160GB",
      "Rank": 979,
      "Benchmark": 19.6,
      "Samples": 680,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5350/TOSHIBA-MK1646GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS542516K9SA00 160GB",
      "Rank": 980,
      "Benchmark": 19.5,
      "Samples": 2019,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2771/Hitachi-HTS542516K9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHY2160BH 160GB",
      "Rank": 981,
      "Benchmark": 19.3,
      "Samples": 887,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4449/FUJITSU-MHY2160BH"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS728080PLAT20 82GB",
      "Rank": 982,
      "Benchmark": 19.2,
      "Samples": 1087,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2913/HDS728080PLAT20"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST380011A 80GB",
      "Rank": 983,
      "Benchmark": 19.1,
      "Samples": 2219,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1697/ST380011A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHY2200BH 200GB",
      "Rank": 984,
      "Benchmark": 18.8,
      "Samples": 740,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1960/FUJITSU-MHY2200BH"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK8037GSX 80GB",
      "Rank": 985,
      "Benchmark": 18.5,
      "Samples": 657,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1841/TOSHIBA-MK8037GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD800BEVS-22RST0 80GB",
      "Rank": 986,
      "Benchmark": 18.3,
      "Samples": 998,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3519/WDC-WD800BEVS-22RST0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHW2120BH 120GB",
      "Rank": 987,
      "Benchmark": 18.2,
      "Samples": 1056,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3831/FUJITSU-MHW2120BH"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS542580K9SA00 80GB",
      "Rank": 988,
      "Benchmark": 18.1,
      "Samples": 556,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/7089/Hitachi-HTS542580K9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST3120023A 120GB",
      "Rank": 989,
      "Benchmark": 17.9,
      "Samples": 134,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6505/ST3120023A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK1637GSX 160GB",
      "Rank": 990,
      "Benchmark": 17.8,
      "Samples": 1423,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4513/TOSHIBA-MK1637GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9120822AS 120GB",
      "Rank": 991,
      "Benchmark": 17.5,
      "Samples": 1798,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5319/ST9120822AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS541616J9SA00 160GB",
      "Rank": 992,
      "Benchmark": 17.4,
      "Samples": 2693,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4013/Hitachi-HTS541616J9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9160821AS 160GB",
      "Rank": 993,
      "Benchmark": 17.3,
      "Samples": 3075,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1006/ST9160821AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "WD",
      "Model": "WD600BB-75CAA0 60GB",
      "Rank": 994,
      "Benchmark": 17.1,
      "Samples": 85,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6010/WDC-WD600BB-75CAA0"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS541680J9SA00 80GB",
      "Rank": 995,
      "Benchmark": 17,
      "Samples": 1484,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2399/Hitachi-HTS541680J9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHW2080BH 80GB",
      "Rank": 996,
      "Benchmark": 16.9,
      "Samples": 298,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/6989/FUJITSU-MHW2080BH"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST980811AS 80GB",
      "Rank": 997,
      "Benchmark": 16.9,
      "Samples": 1510,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1970/ST980811AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST340016A 40GB",
      "Rank": 998,
      "Benchmark": 16.8,
      "Samples": 319,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2501/ST340016A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HDS722580VLAT20 61GB",
      "Rank": 999,
      "Benchmark": 16.8,
      "Samples": 30,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/3589/HDS722580VLAT20"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHV2120BH PL 120GB",
      "Rank": 1000,
      "Benchmark": 16.6,
      "Samples": 607,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1025/FUJITSU-MHV2120BH-PL"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK1237GSX 120GB",
      "Rank": 1001,
      "Benchmark": 16.5,
      "Samples": 784,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4749/TOSHIBA-MK1237GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST360021A 60GB",
      "Rank": 1002,
      "Benchmark": 16.4,
      "Samples": 92,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/10830/ST360021A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK2035GSS 200GB",
      "Rank": 1003,
      "Benchmark": 16.2,
      "Samples": 984,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5833/TOSHIBA-MK2035GSS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHV2100BH 100GB",
      "Rank": 1004,
      "Benchmark": 15.9,
      "Samples": 238,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1474/FUJITSU-MHV2100BH"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS541612J9SA00 120GB",
      "Rank": 1005,
      "Benchmark": 15.8,
      "Samples": 1846,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1249/Hitachi-HTS541612J9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST98823AS 80GB",
      "Rank": 1006,
      "Benchmark": 15.7,
      "Samples": 565,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5717/ST98823AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Fujitsu",
      "Model": "MHV2080BH PL 80GB",
      "Rank": 1007,
      "Benchmark": 15.6,
      "Samples": 477,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5000/FUJITSU-MHV2080BH-PL"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST9100824AS 100GB",
      "Rank": 1008,
      "Benchmark": 15.6,
      "Samples": 254,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2949/ST9100824AS"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST340015A 40GB",
      "Rank": 1009,
      "Benchmark": 15.5,
      "Samples": 190,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4591/ST340015A"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Hitachi",
      "Model": "HTS541010G9SA00 100GB",
      "Rank": 1010,
      "Benchmark": 15.4,
      "Samples": 395,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/5274/HTS541010G9SA00"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Maxtor",
      "Model": "4G120J6 123GB",
      "Rank": 1011,
      "Benchmark": 14.9,
      "Samples": 6,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4566/Maxtor-4G120J6"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK1234GSX 120GB",
      "Rank": 1012,
      "Benchmark": 14.8,
      "Samples": 725,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/1726/TOSHIBA-MK1234GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK8034GSX 80GB",
      "Rank": 1013,
      "Benchmark": 13.6,
      "Samples": 365,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4167/TOSHIBA-MK8034GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "MK8032GSX 80GB",
      "Rank": 1014,
      "Benchmark": 12.9,
      "Samples": 312,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/4083/TOSHIBA-MK8032GSX"
    },
    {
      "Type": "HDD",
      "Part Number": "",
      "Brand": "Seagate",
      "Model": "ST960821A 60GB",
      "Rank": 1015,
      "Benchmark": 9.55,
      "Samples": 17,
      "URL": "https://hdd.userbenchmark.com/SpeedTest/2864/ST960821A"
    }
  ]

  const seedGallery = () => Hdd.bulkCreate(hddData);

  module.exports = seedGallery;