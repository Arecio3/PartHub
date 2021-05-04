const Hdd = require('../models');

const hddData = [
    {
      "type": "HDD",
      "part_number": "WD121KRYZ",
      "brand": "WD",
      "model": "Gold 12TB (2017)",
      "rank": 1,
      "benchmark": 111,
      "samples": 656,
      "url": "https://hdd.userbenchmark.com/SpeedTest/391336/WDC-WD121KRYZ-01"
    },
    {
      "type": "HDD",
      "part_number": "WD101KRYZ",
      "brand": "WD",
      "model": "Gold 10TB (2016)",
      "rank": 2,
      "benchmark": 107,
      "samples": 859,
      "url": "https://hdd.userbenchmark.com/SpeedTest/171115/WDC-WD101KRYZ-01JPDB0"
    },
    {
      "type": "HDD",
      "part_number": "WD6002FRYZ",
      "brand": "WD",
      "model": "Gold 6TB (2016)",
      "rank": 3,
      "benchmark": 102,
      "samples": 1508,
      "url": "https://hdd.userbenchmark.com/SpeedTest/167511/WDC-WD6002FRYZ-01WD5"
    },
    {
      "type": "HDD",
      "part_number": "WD6002FZWX",
      "brand": "WD",
      "model": "Black 6TB (2016)",
      "rank": 4,
      "benchmark": 100,
      "samples": 4919,
      "url": "https://hdd.userbenchmark.com/WD-Black-6TB-2016/Rating/3927"
    },
    {
      "type": "HDD",
      "part_number": "WD6002FFWX",
      "brand": "WD",
      "model": "Red Pro 6TB (2015)",
      "rank": 5,
      "benchmark": 99.5,
      "samples": 821,
      "url": "https://hdd.userbenchmark.com/SpeedTest/139230/WDC-WD6002FFWX-68TZ4N0"
    },
    {
      "type": "HDD",
      "part_number": "WD8003FRYZ",
      "brand": "WD",
      "model": "Gold 8TB (256MB Cache 2017)",
      "rank": 6,
      "benchmark": 99.5,
      "samples": 561,
      "url": "https://hdd.userbenchmark.com/SpeedTest/388081/WDC-WD8003FRYZ-01JPDB1"
    },
    {
      "type": "HDD",
      "part_number": "0S03839",
      "brand": "HGST",
      "model": "Deskstar NAS 6TB",
      "rank": 7,
      "benchmark": 96.7,
      "samples": 819,
      "url": "https://hdd.userbenchmark.com/SpeedTest/22222/HGST-HDN726060ALE610"
    },
    {
      "type": "HDD",
      "part_number": "WD8002FRYZ",
      "brand": "WD",
      "model": "Gold 8TB (128MB Cache 2016)",
      "rank": 8,
      "benchmark": 95.1,
      "samples": 216,
      "url": "https://hdd.userbenchmark.com/SpeedTest/226349/WDC-WD8002FRYZ-01FF2B0"
    },
    {
      "type": "HDD",
      "part_number": "WD6001FZWX",
      "brand": "WD",
      "model": "Black 6TB (2015)",
      "rank": 9,
      "benchmark": 95,
      "samples": 3498,
      "url": "https://hdd.userbenchmark.com/WD-Black-6TB-2015/Rating/3519"
    },
    {
      "type": "HDD",
      "part_number": "WD1000DHTZ",
      "brand": "WD",
      "model": "VelociRaptor 1TB",
      "rank": 10,
      "benchmark": 94.9,
      "samples": 5482,
      "url": "https://hdd.userbenchmark.com/WD-VelociRaptor-1TB/Rating/1389"
    },
    {
      "type": "HDD",
      "part_number": "ST3000DM008",
      "brand": "Seagate",
      "model": "Barracuda 3TB (2016)",
      "rank": 11,
      "benchmark": 94.9,
      "samples": 88110,
      "url": "https://hdd.userbenchmark.com/Seagate-Barracuda-3TB-2016/Rating/3898"
    },
    {
      "type": "HDD",
      "part_number": "ST4000VN008",
      "brand": "Seagate",
      "model": "IronWolf 4TB (2016)",
      "rank": 12,
      "benchmark": 94,
      "samples": 11855,
      "url": "https://hdd.userbenchmark.com/Seagate-IronWolf-4TB-2016/Rating/3906"
    },
    {
      "type": "HDD",
      "part_number": "WD5000BHTZ",
      "brand": "WD",
      "model": "VelociRaptor 2.5\" 500GB",
      "rank": 13,
      "benchmark": 93.3,
      "samples": 351,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11902/WDC-WD5000BHTZ-04JCPV1"
    },
    {
      "type": "HDD",
      "part_number": "ST1000DM010",
      "brand": "Seagate",
      "model": "Barracuda 1TB (2016)",
      "rank": 14,
      "benchmark": 92.2,
      "samples": 731390,
      "url": "https://hdd.userbenchmark.com/Seagate-Barracuda-1TB-2016/Rating/3896"
    },
    {
      "type": "HDD",
      "part_number": "WD4004FZWX",
      "brand": "WD",
      "model": "Black 4TB (2016)",
      "rank": 15,
      "benchmark": 92.1,
      "samples": 6795,
      "url": "https://hdd.userbenchmark.com/WD-Black-4TB-2016/Rating/3908"
    },
    {
      "type": "HDD",
      "part_number": "WD4002FYYZ",
      "brand": "WD",
      "model": "Gold 4TB (2016)",
      "rank": 16,
      "benchmark": 92,
      "samples": 3204,
      "url": "https://hdd.userbenchmark.com/SpeedTest/147091/WDC-WD4002FYYZ-01B7CB0"
    },
    {
      "type": "HDD",
      "part_number": "ST6000DM001",
      "brand": "Seagate",
      "model": "Desktop HDD 6TB (2015)",
      "rank": 17,
      "benchmark": 92,
      "samples": 655,
      "url": "https://hdd.userbenchmark.com/SpeedTest/36984/ST6000DM001-1XY17Z"
    },
    {
      "type": "HDD",
      "part_number": "ST3000VX000",
      "brand": "Seagate",
      "model": "Video SV35.6 Series 3TB",
      "rank": 18,
      "benchmark": 91.8,
      "samples": 4072,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4903/ST3000VX000-9YW166"
    },
    {
      "type": "HDD",
      "part_number": "WD5000HHTZ",
      "brand": "WD",
      "model": "VelociRaptor 500GB",
      "rank": 19,
      "benchmark": 91.7,
      "samples": 7050,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1434/WDC-WD5000HHTZ-04N21V0"
    },
    {
      "type": "HDD",
      "part_number": "ST2000DM006",
      "brand": "Seagate",
      "model": "Barracuda 2TB (2016)",
      "rank": 20,
      "benchmark": 91.5,
      "samples": 417040,
      "url": "https://hdd.userbenchmark.com/Seagate-Barracuda-2TB-2016/Rating/3897"
    },
    {
      "type": "HDD",
      "part_number": "0F23267",
      "brand": "HGST",
      "model": "Ultrastar He8 Helium 8TB",
      "rank": 21,
      "benchmark": 91.4,
      "samples": 738,
      "url": "https://hdd.userbenchmark.com/SpeedTest/29773/HGST-HUH728080ALE600"
    },
    {
      "type": "HDD",
      "part_number": "0F23668",
      "brand": "HGST",
      "model": "Ultrastar He8 Helium 8TB",
      "rank": 21,
      "benchmark": 91.4,
      "samples": 738,
      "url": "https://hdd.userbenchmark.com/SpeedTest/29773/HGST-HUH728080ALE600"
    },
    {
      "type": "HDD",
      "part_number": "WD100EFAX",
      "brand": "WD",
      "model": "Red 10TB (2017)",
      "rank": 22,
      "benchmark": 91.4,
      "samples": 1405,
      "url": "https://hdd.userbenchmark.com/SpeedTest/324807/WDC-WD100EFAX-68LHPN0"
    },
    {
      "type": "HDD",
      "part_number": "WD2005FBYZ",
      "brand": "WD",
      "model": "Gold 2TB (2016)",
      "rank": 23,
      "benchmark": 91.2,
      "samples": 4157,
      "url": "https://hdd.userbenchmark.com/SpeedTest/206650/WDC-WD2005FBYZ-01YCBB1"
    },
    {
      "type": "HDD",
      "part_number": "ST6000DX000",
      "brand": "Seagate",
      "model": "Desktop HDD 6TB (2014)",
      "rank": 24,
      "benchmark": 90.8,
      "samples": 1026,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12188/ST6000DX000-1H217Z"
    },
    {
      "type": "HDD",
      "part_number": "ST2000DM001",
      "brand": "Seagate",
      "model": "Barracuda 7200.14 2TB",
      "rank": 25,
      "benchmark": 90.4,
      "samples": 637722,
      "url": "https://hdd.userbenchmark.com/Seagate-Barracuda-720014-2TB/Rating/1619"
    },
    {
      "type": "HDD",
      "part_number": "ST2000VX000",
      "brand": "Seagate",
      "model": "Video SV35.6 Series 2TB",
      "rank": 26,
      "benchmark": 90.4,
      "samples": 9075,
      "url": "https://hdd.userbenchmark.com/Seagate-Video-SV356-Series-2TB/Rating/1816"
    },
    {
      "type": "HDD",
      "part_number": "HDWD120XZSTA",
      "brand": "Toshiba",
      "model": "P300 2TB",
      "rank": 27,
      "benchmark": 89.9,
      "samples": 74337,
      "url": "https://hdd.userbenchmark.com/Toshiba-P300-2TB/Rating/3590"
    },
    {
      "type": "HDD",
      "part_number": "HDWD120EZSTA",
      "brand": "Toshiba",
      "model": "P300 2TB",
      "rank": 27,
      "benchmark": 89.9,
      "samples": 74337,
      "url": "https://hdd.userbenchmark.com/Toshiba-P300-2TB/Rating/3590"
    },
    {
      "type": "HDD",
      "part_number": "HDWD120UZSVA",
      "brand": "Toshiba",
      "model": "P300 2TB",
      "rank": 27,
      "benchmark": 89.9,
      "samples": 74337,
      "url": "https://hdd.userbenchmark.com/Toshiba-P300-2TB/Rating/3590"
    },
    {
      "type": "HDD",
      "part_number": "WD5001FZWX",
      "brand": "WD",
      "model": "Black 5TB (2015)",
      "rank": 28,
      "benchmark": 89.8,
      "samples": 5467,
      "url": "https://hdd.userbenchmark.com/WD-Black-5TB-2015/Rating/3907"
    },
    {
      "type": "HDD",
      "part_number": "ST5000DM002",
      "brand": "Seagate",
      "model": "Desktop HDD 5TB (2015)",
      "rank": 29,
      "benchmark": 89.5,
      "samples": 243,
      "url": "https://hdd.userbenchmark.com/SpeedTest/123827/ST5000DM002-1XY17X"
    },
    {
      "type": "HDD",
      "part_number": "ST3000DM001",
      "brand": "Seagate",
      "model": "Barracuda 7200.14 3TB",
      "rank": 30,
      "benchmark": 89.5,
      "samples": 178373,
      "url": "https://hdd.userbenchmark.com/Seagate-Barracuda-720014-3TB/Rating/1374"
    },
    {
      "type": "HDD",
      "part_number": "ST3000NC002",
      "brand": "Seagate",
      "model": "Constellation CS 3TB",
      "rank": 31,
      "benchmark": 89.3,
      "samples": 584,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5929/ST3000NC002-1DY166"
    },
    {
      "type": "HDD",
      "part_number": "WD2500HHTZ",
      "brand": "WD",
      "model": "VelociRaptor 250GB",
      "rank": 32,
      "benchmark": 89.2,
      "samples": 1950,
      "url": "https://hdd.userbenchmark.com/SpeedTest/139/WDC-WD2500HHTZ-04N21V0"
    },
    {
      "type": "HDD",
      "part_number": "ST1000DM003",
      "brand": "Seagate",
      "model": "Barracuda 7200.14 1TB",
      "rank": 33,
      "benchmark": 89.2,
      "samples": 1247334,
      "url": "https://hdd.userbenchmark.com/Seagate-Barracuda-720014-1TB/Rating/1849"
    },
    {
      "type": "HDD",
      "part_number": "HDWD130XZSTA",
      "brand": "Toshiba",
      "model": "P300 3TB",
      "rank": 34,
      "benchmark": 88.8,
      "samples": 60021,
      "url": "https://hdd.userbenchmark.com/Toshiba-P300-3TB/Rating/3591"
    },
    {
      "type": "HDD",
      "part_number": "HDWD130EZSTA",
      "brand": "Toshiba",
      "model": "P300 3TB",
      "rank": 34,
      "benchmark": 88.8,
      "samples": 60021,
      "url": "https://hdd.userbenchmark.com/Toshiba-P300-3TB/Rating/3591"
    },
    {
      "type": "HDD",
      "part_number": "HDWD130UZSVA",
      "brand": "Toshiba",
      "model": "P300 3TB",
      "rank": 34,
      "benchmark": 88.8,
      "samples": 60021,
      "url": "https://hdd.userbenchmark.com/Toshiba-P300-3TB/Rating/3591"
    },
    {
      "type": "HDD",
      "part_number": "ST4000VX007",
      "brand": "Seagate",
      "model": "SkyHawk 4TB (2016)",
      "rank": 35,
      "benchmark": 88.5,
      "samples": 4889,
      "url": "https://hdd.userbenchmark.com/SpeedTest/215593/ST4000VX007-2DT166"
    },
    {
      "type": "HDD",
      "part_number": "ST2000DM008",
      "brand": "Seagate",
      "model": "Barracuda 2TB (2018)",
      "rank": 36,
      "benchmark": 88.4,
      "samples": 358529,
      "url": "https://hdd.userbenchmark.com/SpeedTest/466743/ST2000DM008-2FR102"
    },
    {
      "type": "HDD",
      "part_number": "ST1000VX000",
      "brand": "Seagate",
      "model": "Video SV35.6 Series 1TB",
      "rank": 37,
      "benchmark": 88.4,
      "samples": 14213,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6250/ST1000VX-ST1000VX000-1CU1"
    },
    {
      "type": "HDD",
      "part_number": "HDWE150XZSTA",
      "brand": "Toshiba",
      "model": "X300 5TB",
      "rank": 38,
      "benchmark": 88.3,
      "samples": 10018,
      "url": "https://hdd.userbenchmark.com/Toshiba-X300-5TB/Rating/3593"
    },
    {
      "type": "HDD",
      "part_number": "HDWE150EZSTA",
      "brand": "Toshiba",
      "model": "X300 5TB",
      "rank": 38,
      "benchmark": 88.3,
      "samples": 10018,
      "url": "https://hdd.userbenchmark.com/Toshiba-X300-5TB/Rating/3593"
    },
    {
      "type": "HDD",
      "part_number": "WD1005FBYZ",
      "brand": "WD",
      "model": "Gold 1TB (2016)",
      "rank": 39,
      "benchmark": 88.2,
      "samples": 2398,
      "url": "https://hdd.userbenchmark.com/SpeedTest/204853/WDC-WD1005FBYZ-01YCBB1"
    },
    {
      "type": "HDD",
      "part_number": "HDWE160XZSTA",
      "brand": "Toshiba",
      "model": "X300 6TB",
      "rank": 40,
      "benchmark": 87.5,
      "samples": 4209,
      "url": "https://hdd.userbenchmark.com/Toshiba-X300-6TB/Rating/3594"
    },
    {
      "type": "HDD",
      "part_number": "HDWE160EZSTA",
      "brand": "Toshiba",
      "model": "X300 6TB",
      "rank": 40,
      "benchmark": 87.5,
      "samples": 4209,
      "url": "https://hdd.userbenchmark.com/Toshiba-X300-6TB/Rating/3594"
    },
    {
      "type": "HDD",
      "part_number": "WD80EFAX",
      "brand": "WD",
      "model": "Red 8TB (2017)",
      "rank": 41,
      "benchmark": 87.4,
      "samples": 3639,
      "url": "https://hdd.userbenchmark.com/SpeedTest/314696/WDC-WD80EFAX-68LHPN0"
    },
    {
      "type": "HDD",
      "part_number": "HUS156045VLS600",
      "brand": "Hitachi",
      "model": "UltraStar 15K600 450GB",
      "rank": 42,
      "benchmark": 87.4,
      "samples": 89,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9674/HITACHI-HUS156045VLS600"
    },
    {
      "type": "HDD",
      "part_number": "WD2003FZEX",
      "brand": "WD",
      "model": "Black 2TB (2013)",
      "rank": 43,
      "benchmark": 87.2,
      "samples": 109119,
      "url": "https://hdd.userbenchmark.com/WD-Black-2TB-2013/Rating/1821"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "DT01ACA200 2TB",
      "rank": 44,
      "benchmark": 87,
      "samples": 257467,
      "url": "https://hdd.userbenchmark.com/Toshiba-DT01ACA200-2TB/Rating/2736"
    },
    {
      "type": "HDD",
      "part_number": "PH3600U-1I72",
      "brand": "Toshiba",
      "model": "MD04ACA600 6TB",
      "rank": 45,
      "benchmark": 86.7,
      "samples": 487,
      "url": "https://hdd.userbenchmark.com/SpeedTest/35546/TOSHIBA-MD04ACA600"
    },
    {
      "type": "HDD",
      "part_number": "HDWE140XZSTA",
      "brand": "Toshiba",
      "model": "X300 4TB",
      "rank": 46,
      "benchmark": 86.3,
      "samples": 17722,
      "url": "https://hdd.userbenchmark.com/Toshiba-X300-4TB/Rating/3592"
    },
    {
      "type": "HDD",
      "part_number": "HDWE140EZSTA",
      "brand": "Toshiba",
      "model": "X300 4TB",
      "rank": 46,
      "benchmark": 86.3,
      "samples": 17722,
      "url": "https://hdd.userbenchmark.com/Toshiba-X300-4TB/Rating/3592"
    },
    {
      "type": "HDD",
      "part_number": "ST2000NM0033",
      "brand": "Seagate",
      "model": "Constellation ES.3 2TB",
      "rank": 47,
      "benchmark": 86.2,
      "samples": 3393,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12036/ST2000NM0033-9ZM175"
    },
    {
      "type": "HDD",
      "part_number": "ST2000NC001",
      "brand": "Seagate",
      "model": "Constellation CS 2TB",
      "rank": 48,
      "benchmark": 86.2,
      "samples": 516,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10959/ST2000NC001-1DY164"
    },
    {
      "type": "HDD",
      "part_number": "WD3001FFSX",
      "brand": "WD",
      "model": "Red Pro 3TB (2014)",
      "rank": 49,
      "benchmark": 86.1,
      "samples": 455,
      "url": "https://hdd.userbenchmark.com/SpeedTest/27132/WDC-WD3001FFSX-68JNUN0"
    },
    {
      "type": "HDD",
      "part_number": "0S03835",
      "brand": "HGST",
      "model": "Deskstar NAS 5TB",
      "rank": 50,
      "benchmark": 85.6,
      "samples": 536,
      "url": "https://hdd.userbenchmark.com/SpeedTest/36844/HGST-HDN726050ALE610"
    },
    {
      "type": "HDD",
      "part_number": "ST3000VN007",
      "brand": "Seagate",
      "model": "IronWolf 3TB (2016)",
      "rank": 51,
      "benchmark": 85.4,
      "samples": 2829,
      "url": "https://hdd.userbenchmark.com/Seagate-IronWolf-3TB-2016/Rating/3905"
    },
    {
      "type": "HDD",
      "part_number": "ST2000DX002",
      "brand": "Seagate",
      "model": "FireCuda SSHD 2TB (2016)",
      "rank": 52,
      "benchmark": 85.2,
      "samples": 98933,
      "url": "https://hdd.userbenchmark.com/Seagate-FireCuda-SSHD-2TB-2016/Rating/3903"
    },
    {
      "type": "HDD",
      "part_number": "PH3500U-1I72",
      "brand": "Toshiba",
      "model": "MD04ACA500 5TB",
      "rank": 53,
      "benchmark": 85.1,
      "samples": 2501,
      "url": "https://hdd.userbenchmark.com/Toshiba-MD04ACA500-5TB/Rating/3526"
    },
    {
      "type": "HDD",
      "part_number": "ST3000VX010",
      "brand": "Seagate",
      "model": "SkyHawk 3TB (2016)",
      "rank": 54,
      "benchmark": 85.1,
      "samples": 1500,
      "url": "https://hdd.userbenchmark.com/SpeedTest/237204/ST3000VX010-2E3166"
    },
    {
      "type": "HDD",
      "part_number": "ST1000DX001",
      "brand": "Seagate",
      "model": "Desktop SSHD 1TB",
      "rank": 55,
      "benchmark": 84.9,
      "samples": 87202,
      "url": "https://hdd.userbenchmark.com/Seagate-Desktop-SSHD-1TB/Rating/1784"
    },
    {
      "type": "HDD",
      "part_number": "PH3400U-1I72",
      "brand": "Toshiba",
      "model": "MD04ACA400 4TB",
      "rank": 56,
      "benchmark": 84.5,
      "samples": 8036,
      "url": "https://hdd.userbenchmark.com/Toshiba-MD04ACA400-4TB/Rating/3202"
    },
    {
      "type": "HDD",
      "part_number": "HDWD110XZSTA",
      "brand": "Toshiba",
      "model": "P300 1TB",
      "rank": 57,
      "benchmark": 84.3,
      "samples": 227057,
      "url": "https://hdd.userbenchmark.com/Toshiba-P300-1TB/Rating/3589"
    },
    {
      "type": "HDD",
      "part_number": "HDWD110EZSTA",
      "brand": "Toshiba",
      "model": "P300 1TB",
      "rank": 57,
      "benchmark": 84.3,
      "samples": 227057,
      "url": "https://hdd.userbenchmark.com/Toshiba-P300-1TB/Rating/3589"
    },
    {
      "type": "HDD",
      "part_number": "HDWD110UZSVA",
      "brand": "Toshiba",
      "model": "P300 1TB",
      "rank": 57,
      "benchmark": 84.3,
      "samples": 227057,
      "url": "https://hdd.userbenchmark.com/Toshiba-P300-1TB/Rating/3589"
    },
    {
      "type": "HDD",
      "part_number": "ST4000DM005",
      "brand": "Seagate",
      "model": "Barracuda 4TB (2016)",
      "rank": 58,
      "benchmark": 84.1,
      "samples": 28354,
      "url": "https://hdd.userbenchmark.com/Seagate-Barracuda-4TB-2016/Rating/3899"
    },
    {
      "type": "HDD",
      "part_number": "WD1003FZEX",
      "brand": "WD",
      "model": "Black 1TB (2013)",
      "rank": 59,
      "benchmark": 84.1,
      "samples": 182137,
      "url": "https://hdd.userbenchmark.com/WD-Black-1TB-2013/Rating/1822"
    },
    {
      "type": "HDD",
      "part_number": "WD4001FFSX",
      "brand": "WD",
      "model": "Red Pro 4TB (2014)",
      "rank": 60,
      "benchmark": 84,
      "samples": 500,
      "url": "https://hdd.userbenchmark.com/WD-Red-Pro-4TB-2014/Rating/2664"
    },
    {
      "type": "HDD",
      "part_number": "ST500DM009",
      "brand": "Seagate",
      "model": "Barracuda 500GB (2016)",
      "rank": 61,
      "benchmark": 83.9,
      "samples": 11164,
      "url": "https://hdd.userbenchmark.com/Seagate-Barracuda-500GB-2016/Rating/3909"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "DT01ACA300 3TB",
      "rank": 62,
      "benchmark": 83.8,
      "samples": 67481,
      "url": "https://hdd.userbenchmark.com/Toshiba-DT01ACA300-3TB/Rating/2735"
    },
    {
      "type": "HDD",
      "part_number": "ST3300657SS",
      "brand": "Seagate",
      "model": "Cheetah 15K.7 SAS 300GB",
      "rank": 63,
      "benchmark": 83.5,
      "samples": 889,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9679/SEAGATE-ST3300657SS"
    },
    {
      "type": "HDD",
      "part_number": "ST1000NM0033",
      "brand": "Seagate",
      "model": "Constellation ES.3 1TB",
      "rank": 64,
      "benchmark": 83.4,
      "samples": 6781,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7297/ST1000NM0033-9ZM173"
    },
    {
      "type": "HDD",
      "part_number": "WD40EZRZ",
      "brand": "WD",
      "model": "Blue 4TB (2015)",
      "rank": 65,
      "benchmark": 83.2,
      "samples": 96230,
      "url": "https://hdd.userbenchmark.com/WD-Blue-4TB-2015/Rating/3523"
    },
    {
      "type": "HDD",
      "part_number": "ST2000VN004",
      "brand": "Seagate",
      "model": "IronWolf 2TB (2016)",
      "rank": 66,
      "benchmark": 82.9,
      "samples": 3420,
      "url": "https://hdd.userbenchmark.com/SpeedTest/245098/ST2000VN004-2E4164"
    },
    {
      "type": "HDD",
      "part_number": "WD40PURZ",
      "brand": "WD",
      "model": "Purple Surveillance 4TB (2017)",
      "rank": 67,
      "benchmark": 82.8,
      "samples": 4799,
      "url": "https://hdd.userbenchmark.com/SpeedTest/433989/WDC-WD40PURZ-85T"
    },
    {
      "type": "HDD",
      "part_number": "ST2000DX001",
      "brand": "Seagate",
      "model": "Desktop SSHD 2TB",
      "rank": 68,
      "benchmark": 82.4,
      "samples": 67767,
      "url": "https://hdd.userbenchmark.com/Seagate-Desktop-SSHD-2TB/Rating/1783"
    },
    {
      "type": "HDD",
      "part_number": "STCL2000400",
      "brand": "Seagate",
      "model": "Desktop SSHD 2TB",
      "rank": 68,
      "benchmark": 82.4,
      "samples": 67767,
      "url": "https://hdd.userbenchmark.com/Seagate-Desktop-SSHD-2TB/Rating/1783"
    },
    {
      "type": "HDD",
      "part_number": "WD10EZEX",
      "brand": "WD",
      "model": "Blue 1TB (2012)",
      "rank": 69,
      "benchmark": 82.3,
      "samples": 2565748,
      "url": "https://hdd.userbenchmark.com/WD-Blue-1TB-2012/Rating/1779"
    },
    {
      "type": "HDD",
      "part_number": "ST2000VX008",
      "brand": "Seagate",
      "model": "SkyHawk 2TB (2016)",
      "rank": 70,
      "benchmark": 82,
      "samples": 5842,
      "url": "https://hdd.userbenchmark.com/SpeedTest/211060/ST2000VX008-2E3164"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "DT01ACA100 1TB",
      "rank": 71,
      "benchmark": 81.9,
      "samples": 611096,
      "url": "https://hdd.userbenchmark.com/Toshiba-DT01ACA100-1TB/Rating/2737"
    },
    {
      "type": "HDD",
      "part_number": "WD3000FYYZ",
      "brand": "WD",
      "model": "Re 3TB (2012)",
      "rank": 72,
      "benchmark": 81.8,
      "samples": 1515,
      "url": "https://hdd.userbenchmark.com/WD-Re-3TB-2012/Rating/2665"
    },
    {
      "type": "HDD",
      "part_number": "WD3003FZEX",
      "brand": "WD",
      "model": "Black 3TB (2013)",
      "rank": 73,
      "benchmark": 81.6,
      "samples": 12859,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5002/WDC-WD3003FZEX-00Z4SA0"
    },
    {
      "type": "HDD",
      "part_number": "WD5003AZEX",
      "brand": "WD",
      "model": "Black 500GB (2012)",
      "rank": 74,
      "benchmark": 81.4,
      "samples": 16605,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2070/WDC-WD5003AZEX-00K1GA0"
    },
    {
      "type": "HDD",
      "part_number": "WD80PURZ",
      "brand": "WD",
      "model": "Purple Surveillance 8TB (2017)",
      "rank": 75,
      "benchmark": 81.3,
      "samples": 201,
      "url": "https://hdd.userbenchmark.com/SpeedTest/382445/WDC-WD80PURZ-85YNPY0"
    },
    {
      "type": "HDD",
      "part_number": "WD4000F9YZ",
      "brand": "WD",
      "model": "Se 4TB",
      "rank": 76,
      "benchmark": 81.2,
      "samples": 1892,
      "url": "https://hdd.userbenchmark.com/WD-Se-4TB/Rating/1823"
    },
    {
      "type": "HDD",
      "part_number": "ST1000DX002",
      "brand": "Seagate",
      "model": "FireCuda SSHD 1TB (2016)",
      "rank": 77,
      "benchmark": 80.8,
      "samples": 49683,
      "url": "https://hdd.userbenchmark.com/Seagate-FireCuda-SSHD-1TB-2016/Rating/3902"
    },
    {
      "type": "HDD",
      "part_number": "WD4003FZEX",
      "brand": "WD",
      "model": "Black 4TB (2013)",
      "rank": 78,
      "benchmark": 80.3,
      "samples": 15323,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3505/WDC-WD4003FZEX-00Z4SA0"
    },
    {
      "type": "HDD",
      "part_number": "WD60PURZ",
      "brand": "WD",
      "model": "Purple Surveillance 6TB (2017)",
      "rank": 79,
      "benchmark": 80.1,
      "samples": 1021,
      "url": "https://hdd.userbenchmark.com/SpeedTest/342114/WDC-WD60PURZ-85ZUFY1"
    },
    {
      "type": "HDD",
      "part_number": "ST1000VX005",
      "brand": "Seagate",
      "model": "SkyHawk 1TB (2016)",
      "rank": 80,
      "benchmark": 80,
      "samples": 5390,
      "url": "https://hdd.userbenchmark.com/SpeedTest/225246/ST1000VX005-2EZ102"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS723030BLE640 3TB",
      "rank": 81,
      "benchmark": 80,
      "samples": 688,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4601/Hitachi-HDS723030BLE640"
    },
    {
      "type": "HDD",
      "part_number": "WD1002F9YZ",
      "brand": "WD",
      "model": "Se 1TB (2013)",
      "rank": 82,
      "benchmark": 79.7,
      "samples": 1667,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11078/WDC-WD1002F9YZ-09H1JL0"
    },
    {
      "type": "HDD",
      "part_number": "WD30PURZ",
      "brand": "WD",
      "model": "Purple Surveillance 3TB (2017)",
      "rank": 83,
      "benchmark": 79.6,
      "samples": 2029,
      "url": "https://hdd.userbenchmark.com/SpeedTest/329567/WDC-WD30PURZ-85GU6Y0"
    },
    {
      "type": "HDD",
      "part_number": "WD4000FYYZ",
      "brand": "WD",
      "model": "Re 4TB (2012)",
      "rank": 84,
      "benchmark": 79.4,
      "samples": 3641,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1815/WDC-WD4000FYYZ-01UL1B0"
    },
    {
      "type": "HDD",
      "part_number": "PH3300U-1I72",
      "brand": "Toshiba",
      "model": "MD04ACA300 3TB",
      "rank": 85,
      "benchmark": 79.3,
      "samples": 129,
      "url": "https://hdd.userbenchmark.com/SpeedTest/31118/TOSHIBA-MD04ACA300"
    },
    {
      "type": "HDD",
      "part_number": "WD60EFAX",
      "brand": "WD",
      "model": "Red 6TB (2019)",
      "rank": 86,
      "benchmark": 79.3,
      "samples": 225,
      "url": "https://hdd.userbenchmark.com/SpeedTest/748440/WDC-WD60EFAX-68SHWN0"
    },
    {
      "type": "HDD",
      "part_number": "ST6000VX0023",
      "brand": "Seagate",
      "model": "SkyHawk 6TB (2016)",
      "rank": 87,
      "benchmark": 79.3,
      "samples": 88,
      "url": "https://hdd.userbenchmark.com/SpeedTest/219872/ST6000VX0023-2EF110"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST1500DM003-9YN16G 1.5TB",
      "rank": 88,
      "benchmark": 79,
      "samples": 4716,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2739/ST1500DM003-9YN16G"
    },
    {
      "type": "HDD",
      "part_number": "ST2000VN000",
      "brand": "Seagate",
      "model": "NAS HDD 2TB",
      "rank": 89,
      "benchmark": 78.8,
      "samples": 2972,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9942/ST2000VN000-1H3164"
    },
    {
      "type": "HDD",
      "part_number": "ST1000VN002",
      "brand": "Seagate",
      "model": "IronWolf 1TB (2016)",
      "rank": 90,
      "benchmark": 78.8,
      "samples": 1511,
      "url": "https://hdd.userbenchmark.com/Seagate-IronWolf-1TB-2016/Rating/3904"
    },
    {
      "type": "HDD",
      "part_number": "WD80EFZX",
      "brand": "WD",
      "model": "Red 8TB (2016)",
      "rank": 91,
      "benchmark": 78.7,
      "samples": 3049,
      "url": "https://hdd.userbenchmark.com/SpeedTest/124577/WDC-WD80EFZX-68UW8N0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST2000VM003-1CT164 2TB",
      "rank": 92,
      "benchmark": 78.6,
      "samples": 13451,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7562/ST2000VM003-1CT164"
    },
    {
      "type": "HDD",
      "part_number": "ST4000VN000",
      "brand": "Seagate",
      "model": "NAS HDD 4TB",
      "rank": 93,
      "benchmark": 78.6,
      "samples": 2134,
      "url": "https://hdd.userbenchmark.com/Seagate-NAS-HDD-4TB/Rating/2669"
    },
    {
      "type": "HDD",
      "part_number": "ST3000VN000",
      "brand": "Seagate",
      "model": "NAS HDD 3TB",
      "rank": 94,
      "benchmark": 77.8,
      "samples": 1883,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3909/ST3000VN000-1H4167"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS723020BLE640 2TB",
      "rank": 95,
      "benchmark": 77.6,
      "samples": 2566,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1260/Hitachi-HDS723020BLE640"
    },
    {
      "type": "HDD",
      "part_number": "HDWD105XZSTA",
      "brand": "Toshiba",
      "model": "HDWD105 500GB",
      "rank": 96,
      "benchmark": 77.6,
      "samples": 7865,
      "url": "https://hdd.userbenchmark.com/SpeedTest/67919/TOSHIBA-HDWD105"
    },
    {
      "type": "HDD",
      "part_number": "HDWD105EZSTA",
      "brand": "Toshiba",
      "model": "HDWD105 500GB",
      "rank": 96,
      "benchmark": 77.6,
      "samples": 7865,
      "url": "https://hdd.userbenchmark.com/SpeedTest/67919/TOSHIBA-HDWD105"
    },
    {
      "type": "HDD",
      "part_number": "HDWD105UZSVA",
      "brand": "Toshiba",
      "model": "HDWD105 500GB",
      "rank": 96,
      "benchmark": 77.6,
      "samples": 7865,
      "url": "https://hdd.userbenchmark.com/SpeedTest/67919/TOSHIBA-HDWD105"
    },
    {
      "type": "HDD",
      "part_number": "ST4000DM000",
      "brand": "Seagate",
      "model": "Desktop HDD 4TB (2013)",
      "rank": 97,
      "benchmark": 77.3,
      "samples": 52300,
      "url": "https://hdd.userbenchmark.com/Seagate-Desktop-HDD-4TB-2013/Rating/1598"
    },
    {
      "type": "HDD",
      "part_number": "HUS724020ALA640",
      "brand": "Hitachi",
      "model": "UltraStar 7K4000 2TB",
      "rank": 98,
      "benchmark": 77.2,
      "samples": 1865,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10357/HGST-HUS724020ALA640"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST4000DM 000-1CD168 4TB",
      "rank": 99,
      "benchmark": 77,
      "samples": 15,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2310/ST4000DM-000-1CD168"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST1000VM002-1CT162 1TB",
      "rank": 100,
      "benchmark": 76.8,
      "samples": 28733,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11140/ST1000VM002-1CT162"
    },
    {
      "type": "HDD",
      "part_number": "WD60EFRX",
      "brand": "WD",
      "model": "Red 6TB (2014)",
      "rank": 101,
      "benchmark": 76.5,
      "samples": 8609,
      "url": "https://hdd.userbenchmark.com/WD-Red-6TB-2014/Rating/2663"
    },
    {
      "type": "HDD",
      "part_number": "WD50EZRX",
      "brand": "WD",
      "model": "Green 5TB (2014)",
      "rank": 102,
      "benchmark": 76.5,
      "samples": 1380,
      "url": "https://hdd.userbenchmark.com/WD-Green-5TB-2014/Rating/3517"
    },
    {
      "type": "HDD",
      "part_number": "WD40EFRX",
      "brand": "WD",
      "model": "Red 4TB (2013)",
      "rank": 103,
      "benchmark": 76.3,
      "samples": 36783,
      "url": "https://hdd.userbenchmark.com/WD-Red-4TB-2013/Rating/3525"
    },
    {
      "type": "HDD",
      "part_number": "WD60EZRZ",
      "brand": "WD",
      "model": "Blue 6TB (2015)",
      "rank": 104,
      "benchmark": 76.3,
      "samples": 5939,
      "url": "https://hdd.userbenchmark.com/WD-Blue-6TB-2015/Rating/3910"
    },
    {
      "type": "HDD",
      "part_number": "WD3001FAEX",
      "brand": "WD",
      "model": "Black 3TB (2012)",
      "rank": 105,
      "benchmark": 76.3,
      "samples": 1098,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8039/WDC-WD3001FAEX-00MJRA0"
    },
    {
      "type": "HDD",
      "part_number": "WD50EFRX",
      "brand": "WD",
      "model": "Red 5TB (2014)",
      "rank": 106,
      "benchmark": 75.8,
      "samples": 853,
      "url": "https://hdd.userbenchmark.com/WD-Red-5TB-2014/Rating/3524"
    },
    {
      "type": "HDD",
      "part_number": "WD60EZRX",
      "brand": "WD",
      "model": "Green 6TB (2014)",
      "rank": 107,
      "benchmark": 75.5,
      "samples": 3225,
      "url": "https://hdd.userbenchmark.com/WD-Green-6TB-2014/Rating/3518"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "DT01ACA050 500GB",
      "rank": 108,
      "benchmark": 74.9,
      "samples": 125144,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1379/TOSHIBA-DT01ACA050"
    },
    {
      "type": "HDD",
      "part_number": "WD2000F9YZ",
      "brand": "WD",
      "model": "Se 2TB (2013)",
      "rank": 109,
      "benchmark": 74.3,
      "samples": 1426,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11122/WDC-WD2000F9YZ-0"
    },
    {
      "type": "HDD",
      "part_number": "ST10000VN0004",
      "brand": "Seagate",
      "model": "IronWolf 10TB (2016)",
      "rank": 110,
      "benchmark": 74.2,
      "samples": 167,
      "url": "https://hdd.userbenchmark.com/SpeedTest/161315/ST10000VN0004-1ZD101"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5000AZLX-00K4KA0 500GB",
      "rank": 111,
      "benchmark": 74.2,
      "samples": 35984,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5409/WDC-WD5000AZLX-00K4KA0"
    },
    {
      "type": "HDD",
      "part_number": "WD2001FFSX",
      "brand": "WD",
      "model": "Red Pro 2TB (2014)",
      "rank": 112,
      "benchmark": 73.2,
      "samples": 596,
      "url": "https://hdd.userbenchmark.com/SpeedTest/25063/WDC-WD2001FFSX-68JNU"
    },
    {
      "type": "HDD",
      "part_number": "WD40PURX",
      "brand": "WD",
      "model": "Purple 4TB (2014)",
      "rank": 113,
      "benchmark": 73,
      "samples": 5671,
      "url": "https://hdd.userbenchmark.com/SpeedTest/13618/WDC-WD40PURX-64GVNY0"
    },
    {
      "type": "HDD",
      "part_number": "WD4001FAEX",
      "brand": "WD",
      "model": "Black 4TB (2012)",
      "rank": 114,
      "benchmark": 72.9,
      "samples": 3311,
      "url": "https://hdd.userbenchmark.com/WD-Black-4TB-2012/Rating/1599"
    },
    {
      "type": "HDD",
      "part_number": "ST8000DM004",
      "brand": "Seagate",
      "model": "Barracuda 8TB (2017)",
      "rank": 115,
      "benchmark": 72.6,
      "samples": 15514,
      "url": "https://hdd.userbenchmark.com/SpeedTest/323996/ST8000DM004-2CX188"
    },
    {
      "type": "HDD",
      "part_number": "HUS724030ALE640",
      "brand": "Hitachi",
      "model": "UltraStar 7K4000 3TB",
      "rank": 116,
      "benchmark": 72.6,
      "samples": 59,
      "url": "https://hdd.userbenchmark.com/SpeedTest/14588/Hitachi-HUS724030ALE640"
    },
    {
      "type": "HDD",
      "part_number": "WD30EZRZ",
      "brand": "WD",
      "model": "Blue 3TB (2015)",
      "rank": 117,
      "benchmark": 72.2,
      "samples": 55476,
      "url": "https://hdd.userbenchmark.com/WD-Blue-3TB-2015/Rating/3522"
    },
    {
      "type": "HDD",
      "part_number": "ST4000DX001",
      "brand": "Seagate",
      "model": "Desktop SSHD 4TB",
      "rank": 118,
      "benchmark": 72.2,
      "samples": 17328,
      "url": "https://hdd.userbenchmark.com/Seagate-Desktop-SSHD-4TB/Rating/2668"
    },
    {
      "type": "HDD",
      "part_number": "STCL4000400",
      "brand": "Seagate",
      "model": "Desktop SSHD 4TB",
      "rank": 118,
      "benchmark": 72.2,
      "samples": 17328,
      "url": "https://hdd.userbenchmark.com/Seagate-Desktop-SSHD-4TB/Rating/2668"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721010DLE630 1TB",
      "rank": 119,
      "benchmark": 72.1,
      "samples": 16258,
      "url": "https://hdd.userbenchmark.com/SpeedTest/744/Hitachi-HDS721010DLE630"
    },
    {
      "type": "HDD",
      "part_number": "WD2000FYYZ",
      "brand": "WD",
      "model": "Re 2TB (2012)",
      "rank": 120,
      "benchmark": 72.1,
      "samples": 4700,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1402/WDC-WD2000FYYZ-5"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST33000650NS 3TB",
      "rank": 121,
      "benchmark": 71.9,
      "samples": 2099,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9344/ST33000650NS"
    },
    {
      "type": "HDD",
      "part_number": "ST6000DM004",
      "brand": "Seagate",
      "model": "Barracuda Pro 6TB (2016)",
      "rank": 122,
      "benchmark": 71.6,
      "samples": 145,
      "url": "https://hdd.userbenchmark.com/Seagate-Barracuda-Pro-6TB-2016/Rating/3900"
    },
    {
      "type": "HDD",
      "part_number": "WD20PURZ",
      "brand": "WD",
      "model": "Purple Surveillance 2TB (2017)",
      "rank": 123,
      "benchmark": 71.4,
      "samples": 8203,
      "url": "https://hdd.userbenchmark.com/SpeedTest/306805/WDC-WD20PURZ-85GU6Y0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST32000645NS 2TB",
      "rank": 124,
      "benchmark": 71.3,
      "samples": 873,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9954/Seagate-ST32000645NS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST2000NM0011 2TB",
      "rank": 125,
      "benchmark": 71.1,
      "samples": 2876,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3761/ST2000NM0011"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS724040ALE640 4TB",
      "rank": 126,
      "benchmark": 71,
      "samples": 4867,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1070/HGST-HDS724040ALE640"
    },
    {
      "type": "HDD",
      "part_number": "0S03664",
      "brand": "HGST",
      "model": "Deskstar NAS 4TB",
      "rank": 127,
      "benchmark": 70.9,
      "samples": 5312,
      "url": "https://hdd.userbenchmark.com/HGST-Deskstar-NAS-4TB/Rating/1971"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HUA723030ALA640 3TB",
      "rank": 128,
      "benchmark": 70.7,
      "samples": 8699,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5187/Hitachi-HUA723030ALA640"
    },
    {
      "type": "HDD",
      "part_number": "ST10000DM0004",
      "brand": "Seagate",
      "model": "Barracuda Pro 10TB (2016)",
      "rank": 129,
      "benchmark": 70.4,
      "samples": 188,
      "url": "https://hdd.userbenchmark.com/Seagate-Barracuda-Pro-10TB-2016/Rating/3901"
    },
    {
      "type": "HDD",
      "part_number": "HDWA130XZSTA",
      "brand": "Toshiba",
      "model": "E300 3TB",
      "rank": 130,
      "benchmark": 70.2,
      "samples": 1038,
      "url": "https://hdd.userbenchmark.com/Toshiba-E300-3TB/Rating/3596"
    },
    {
      "type": "HDD",
      "part_number": "HDWA130EZSTA",
      "brand": "Toshiba",
      "model": "E300 3TB",
      "rank": 130,
      "benchmark": 70.2,
      "samples": 1038,
      "url": "https://hdd.userbenchmark.com/Toshiba-E300-3TB/Rating/3596"
    },
    {
      "type": "HDD",
      "part_number": "HDS723030ALA640",
      "brand": "Hitachi",
      "model": "Deskstar 7K3000 3TB",
      "rank": 131,
      "benchmark": 69.9,
      "samples": 5031,
      "url": "https://hdd.userbenchmark.com/Hitachi-Deskstar-7K3000-3TB/Rating/1373"
    },
    {
      "type": "HDD",
      "part_number": "ST4000DM004",
      "brand": "Seagate",
      "model": "Barracuda 4TB (2017)",
      "rank": 132,
      "benchmark": 69.8,
      "samples": 117882,
      "url": "https://hdd.userbenchmark.com/SpeedTest/243570/ST4000DM004-2CV104"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1500HLHX-01JJPV0 150GB",
      "rank": 133,
      "benchmark": 69.2,
      "samples": 560,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5038/WDC-WD1500HLHX-01JJPV0"
    },
    {
      "type": "HDD",
      "part_number": "ST8000VX0022",
      "brand": "Seagate",
      "model": "SkyHawk 8TB (2016)",
      "rank": 134,
      "benchmark": 69.1,
      "samples": 48,
      "url": "https://hdd.userbenchmark.com/SpeedTest/228255/ST8000VX-ST8000VX0022-2EJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "DT01ABA300 3TB",
      "rank": 135,
      "benchmark": 69.1,
      "samples": 4741,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8588/TOSHIBA-DT01ABA300"
    },
    {
      "type": "HDD",
      "part_number": "ST3000DM007",
      "brand": "Seagate",
      "model": "Barracuda 3TB (2017)",
      "rank": 136,
      "benchmark": 69.1,
      "samples": 17608,
      "url": "https://hdd.userbenchmark.com/SpeedTest/337813/ST3000DM007-1WY10G"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD20EURX 2TB",
      "rank": 137,
      "benchmark": 69,
      "samples": 8414,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6121/WDC-WD20EURX-64H"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS5C3030BLE630 3TB",
      "rank": 138,
      "benchmark": 68.9,
      "samples": 1026,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8059/Hitachi-HDS5C3030BLE630"
    },
    {
      "type": "HDD",
      "part_number": "WD30EFRX",
      "brand": "WD",
      "model": "Red 3TB (2012)",
      "rank": 139,
      "benchmark": 68.9,
      "samples": 56852,
      "url": "https://hdd.userbenchmark.com/WD-Red-3TB-2012/Rating/1386"
    },
    {
      "type": "HDD",
      "part_number": "WD10EZRZ",
      "brand": "WD",
      "model": "Blue 1TB (2015)",
      "rank": 140,
      "benchmark": 68.9,
      "samples": 42262,
      "url": "https://hdd.userbenchmark.com/WD-Blue-1TB-2015/Rating/3520"
    },
    {
      "type": "HDD",
      "part_number": "WD2003FYYS",
      "brand": "WD",
      "model": "Re 2TB",
      "rank": 141,
      "benchmark": 68.3,
      "samples": 9330,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3985/WDC-WD2003FYYS-02W0B1"
    },
    {
      "type": "HDD",
      "part_number": "HDWA120XZSTA",
      "brand": "Toshiba",
      "model": "E300 2TB",
      "rank": 142,
      "benchmark": 68.1,
      "samples": 1589,
      "url": "https://hdd.userbenchmark.com/Toshiba-E300-2TB/Rating/3595"
    },
    {
      "type": "HDD",
      "part_number": "HDWA120EZSTA",
      "brand": "Toshiba",
      "model": "E300 2TB",
      "rank": 142,
      "benchmark": 68.1,
      "samples": 1589,
      "url": "https://hdd.userbenchmark.com/Toshiba-E300-2TB/Rating/3595"
    },
    {
      "type": "HDD",
      "part_number": "WD20EFRX",
      "brand": "WD",
      "model": "Red 2TB (2012)",
      "rank": 143,
      "benchmark": 68,
      "samples": 47336,
      "url": "https://hdd.userbenchmark.com/WD-Red-2TB-2012/Rating/1789"
    },
    {
      "type": "HDD",
      "part_number": "WD10PURZ",
      "brand": "WD",
      "model": "Purple Surveillance 1TB (2017)",
      "rank": 144,
      "benchmark": 68,
      "samples": 5021,
      "url": "https://hdd.userbenchmark.com/SpeedTest/310059/WDC-WD10PURZ-85U8XY0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HUA723020ALA640 2TB",
      "rank": 145,
      "benchmark": 67.8,
      "samples": 6013,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8994/Hitachi-HUA723020ALA640"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HUA723020ALA641 2TB",
      "rank": 146,
      "benchmark": 67.8,
      "samples": 20666,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11019/Hitachi-HUA723020ALA641"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD6000BLHX-01V7BV0 600GB",
      "rank": 147,
      "benchmark": 67.8,
      "samples": 238,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6689/WDC-WD6000BLHX-01V7BV0"
    },
    {
      "type": "HDD",
      "part_number": "WD1503FYYS",
      "brand": "WD",
      "model": "Re 1.5TB",
      "rank": 148,
      "benchmark": 67.7,
      "samples": 126,
      "url": "https://hdd.userbenchmark.com/SpeedTest/14718/WDC-WD1503FYYS-01T8B0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS72302 2TB",
      "rank": 149,
      "benchmark": 67.7,
      "samples": 411,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1223/Hitachi-HDS72302"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST33000651AS 3TB",
      "rank": 150,
      "benchmark": 67.6,
      "samples": 3955,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2159/ST33000651AS"
    },
    {
      "type": "HDD",
      "part_number": "WD30PURX",
      "brand": "WD",
      "model": "Purple 3TB (2014)",
      "rank": 151,
      "benchmark": 67.4,
      "samples": 4812,
      "url": "https://hdd.userbenchmark.com/SpeedTest/15186/WDC-WD30PURX-64P"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD4500HLHX-01JJPV0 450GB",
      "rank": 152,
      "benchmark": 67.2,
      "samples": 752,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8988/WDC-WD4500HLHX-01JJPV0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST500NM0011 500GB",
      "rank": 153,
      "benchmark": 67.1,
      "samples": 1587,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2942/ST500NM0011"
    },
    {
      "type": "HDD",
      "part_number": "ST10000VX0004",
      "brand": "Seagate",
      "model": "SkyHawk 10TB (2016)",
      "rank": 154,
      "benchmark": 66.8,
      "samples": 60,
      "url": "https://hdd.userbenchmark.com/SpeedTest/192288/ST10000VX0004-1ZE101"
    },
    {
      "type": "HDD",
      "part_number": "WD10PURX",
      "brand": "WD",
      "model": "Purple 1TB (2014)",
      "rank": 155,
      "benchmark": 66.6,
      "samples": 14709,
      "url": "https://hdd.userbenchmark.com/SpeedTest/14824/WDC-WD10PURX-64D85Y0"
    },
    {
      "type": "HDD",
      "part_number": "WD2002FAEX",
      "brand": "WD",
      "model": "Black 2TB (2010)",
      "rank": 156,
      "benchmark": 66.4,
      "samples": 38599,
      "url": "https://hdd.userbenchmark.com/WD-Black-2TB-2010/Rating/1414"
    },
    {
      "type": "HDD",
      "part_number": "WD20PURX",
      "brand": "WD",
      "model": "Purple 2TB (2014)",
      "rank": 157,
      "benchmark": 66.3,
      "samples": 12435,
      "url": "https://hdd.userbenchmark.com/WD-Purple-2TB-2014/Rating/2662"
    },
    {
      "type": "HDD",
      "part_number": "WD10EFRX",
      "brand": "WD",
      "model": "Red 1TB (2012)",
      "rank": 158,
      "benchmark": 66.3,
      "samples": 29001,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2832/WDC-WD10EFRX-68JCSN0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10EURX 1TB",
      "rank": 159,
      "benchmark": 66.3,
      "samples": 38500,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1122/WDC-WD10EURX-73C57Y0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD6000HLHX-01JJPV0 600GB",
      "rank": 160,
      "benchmark": 66,
      "samples": 5453,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1823/WDC-WD6000HLHX-01JJPV0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2001FASS-00U0B0 2TB",
      "rank": 161,
      "benchmark": 66,
      "samples": 4808,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1611/WDC-WD2001FASS-00U0B0"
    },
    {
      "type": "HDD",
      "part_number": "WD20EZRZ",
      "brand": "WD",
      "model": "Blue 2TB (2015)",
      "rank": 162,
      "benchmark": 65.9,
      "samples": 185806,
      "url": "https://hdd.userbenchmark.com/WD-Blue-2TB-2015/Rating/3521"
    },
    {
      "type": "HDD",
      "part_number": "WD1502FAEX",
      "brand": "WD",
      "model": "Black 1.5TB (2010)",
      "rank": 163,
      "benchmark": 65.9,
      "samples": 5825,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3664/WDC-WD1502FAEX-007BA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS723020BLA642 2TB",
      "rank": 164,
      "benchmark": 65.7,
      "samples": 22649,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1339/Hitachi-HDS723020BLA642"
    },
    {
      "type": "HDD",
      "part_number": "WD40EZRX",
      "brand": "WD",
      "model": "Green 4TB (2013)",
      "rank": 165,
      "benchmark": 65.4,
      "samples": 27593,
      "url": "https://hdd.userbenchmark.com/WD-Green-4TB-2013/Rating/3516"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD45 00HLHX-01JJPV0 450GB",
      "rank": 166,
      "benchmark": 64.8,
      "samples": 58,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7176/WDC-WD45-00HLHX-01JJPV0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3000HLHX-01JJPV0 300GB",
      "rank": 167,
      "benchmark": 64.8,
      "samples": 2664,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3987/WDC-WD3000HLHX-01JJPV0"
    },
    {
      "type": "HDD",
      "part_number": "WD20EZRX",
      "brand": "WD",
      "model": "Green 2TB (2012)",
      "rank": 168,
      "benchmark": 64.7,
      "samples": 142367,
      "url": "https://hdd.userbenchmark.com/WD-Green-2TB-2012/Rating/1781"
    },
    {
      "type": "HDD",
      "part_number": "WD30EZRX",
      "brand": "WD",
      "model": "Green 3TB (2011)",
      "rank": 169,
      "benchmark": 64.7,
      "samples": 87491,
      "url": "https://hdd.userbenchmark.com/WD-Green-3TB-2011/Rating/1415"
    },
    {
      "type": "HDD",
      "part_number": "WD10EZRX",
      "brand": "WD",
      "model": "Green 1TB (2011)",
      "rank": 170,
      "benchmark": 64.4,
      "samples": 115695,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1216/WDC-WD10EZRX-00A8LB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS5C3020BLE630 2TB",
      "rank": 171,
      "benchmark": 64.3,
      "samples": 3480,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7375/Hitachi-HDS5C3020BLE630"
    },
    {
      "type": "HDD",
      "part_number": "ST12000VN0007",
      "brand": "Seagate",
      "model": "IronWolf 12TB (2017)",
      "rank": 172,
      "benchmark": 64.2,
      "samples": 21,
      "url": "https://hdd.userbenchmark.com/SpeedTest/408715/ST12000VN0007-2GS116"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "Expansion Desk 4TB",
      "rank": 173,
      "benchmark": 63.6,
      "samples": 16677,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7034/Seagate-Expansion-Desk"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1501FASS-00U0B 1.5TB",
      "rank": 174,
      "benchmark": 63.3,
      "samples": 1051,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6711/WDC-WD1501FASS-00U0B"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD103SM 1TB",
      "rank": 175,
      "benchmark": 63,
      "samples": 788,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3901/SAMSUNG-HD103SM"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD30EURX 3TB",
      "rank": 176,
      "benchmark": 63,
      "samples": 1270,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4058/WDC-WD30EURX-63T0FY0"
    },
    {
      "type": "HDD",
      "part_number": "WD40E31X",
      "brand": "WD",
      "model": "Blue SSHD 4TB (2015)",
      "rank": 177,
      "benchmark": 63,
      "samples": 1658,
      "url": "https://hdd.userbenchmark.com/SpeedTest/35578/WDC-WD40E31X-00HY4A0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HUA722010CLA330 1TB",
      "rank": 178,
      "benchmark": 62.9,
      "samples": 7340,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1380/Hitachi-HUA722010CLA330"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST31000524NS 1TB",
      "rank": 179,
      "benchmark": 62.7,
      "samples": 3345,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9641/ST31000524NS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD30EURS-63SPKY0 3TB",
      "rank": 180,
      "benchmark": 62.4,
      "samples": 2850,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1387/WDC-WD30EURS-63SPKY0"
    },
    {
      "type": "HDD",
      "part_number": "ST5000DM000",
      "brand": "Seagate",
      "model": "Barracuda Desktop 5TB",
      "rank": 181,
      "benchmark": 62.2,
      "samples": 3027,
      "url": "https://hdd.userbenchmark.com/SpeedTest/17358/ST5000DM000-1FK178"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK1002TSKB 1TB",
      "rank": 182,
      "benchmark": 62.2,
      "samples": 756,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6001/TOSHIBA-MK1002TSKB"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721050DLE630 500GB",
      "rank": 183,
      "benchmark": 62.1,
      "samples": 8136,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1540/Hitachi-HDS721050DLE630"
    },
    {
      "type": "HDD",
      "part_number": "WD1003FBYZ",
      "brand": "WD",
      "model": "Re 1TB (2013)",
      "rank": 184,
      "benchmark": 61.7,
      "samples": 2479,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8573/WDC-WD1003FBYZ-010FB0"
    },
    {
      "type": "HDD",
      "part_number": "WD1003FBYX",
      "brand": "WD",
      "model": "RE4 1TB (2010)",
      "rank": 185,
      "benchmark": 61.1,
      "samples": 16639,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4565/WDC-WD1003FBYX-01Y7B0"
    },
    {
      "type": "HDD",
      "part_number": "WD5003ABYX",
      "brand": "WD",
      "model": "RE4 500GB (2010)",
      "rank": 186,
      "benchmark": 61.1,
      "samples": 9082,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5856/WDC-WD5003ABYX-01WERA1"
    },
    {
      "type": "HDD",
      "part_number": "ST8000AS0002",
      "brand": "Seagate",
      "model": "Archive HDD 8TB (2015)",
      "rank": 187,
      "benchmark": 61.1,
      "samples": 1386,
      "url": "https://hdd.userbenchmark.com/SpeedTest/30791/ST8000AS0002-1NA17Z"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "Backup+ Desk 4TB",
      "rank": 188,
      "benchmark": 61,
      "samples": 1439,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3619/Seagate-Backup--Desk"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HCS5C2020ALA632 2TB",
      "rank": 189,
      "benchmark": 60.3,
      "samples": 1713,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1904/Hitachi-HCS5C2020ALA632"
    },
    {
      "type": "HDD",
      "part_number": "ST2000DL003",
      "brand": "Seagate",
      "model": "Barracuda Green 2TB",
      "rank": 190,
      "benchmark": 60,
      "samples": 65756,
      "url": "https://hdd.userbenchmark.com/SpeedTest/979/ST2000DL003-9VT166"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721010CLA330 1TB",
      "rank": 191,
      "benchmark": 59.8,
      "samples": 7115,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2095/Hitachi-HDS721010CLA330"
    },
    {
      "type": "HDD",
      "part_number": "HD103SJ",
      "brand": "Samsung",
      "model": "Spinpoint F3 1TB",
      "rank": 192,
      "benchmark": 59.8,
      "samples": 130031,
      "url": "https://hdd.userbenchmark.com/Samsung-Spinpoint-F3-1TB/Rating/1848"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD322GJ 320GB",
      "rank": 193,
      "benchmark": 59.8,
      "samples": 7712,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3922/SAMSUNG-HD322GJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721010CLA630 1TB",
      "rank": 194,
      "benchmark": 59.7,
      "samples": 10332,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1955/Hitachi-HDS721010CLA630"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS723015BLA642 1.5TB",
      "rank": 195,
      "benchmark": 59.7,
      "samples": 2572,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1237/Hitachi-HDS723015BLA642"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS721010A9 1TB",
      "rank": 196,
      "benchmark": 59.6,
      "samples": 426,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4115/HGST-HTS721010A9"
    },
    {
      "type": "HDD",
      "part_number": "ST8000VN0022",
      "brand": "Seagate",
      "model": "IronWolf 8TB (2016)",
      "rank": 197,
      "benchmark": 59.4,
      "samples": 403,
      "url": "https://hdd.userbenchmark.com/SpeedTest/210875/ST8000VN0022-2EL112"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST500DM005 HD502HJ 500GB",
      "rank": 198,
      "benchmark": 59.4,
      "samples": 8772,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3407/ST500DM005-HD502HJ"
    },
    {
      "type": "HDD",
      "part_number": "HTS721010A9E630",
      "brand": "HGST",
      "model": "Travelstar 7K1000 2.5\" 1TB",
      "rank": 199,
      "benchmark": 59.4,
      "samples": 512160,
      "url": "https://hdd.userbenchmark.com/SpeedTest/975/HGST-HTS721010A9E630"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3000BLFS-08YBU0 300GB",
      "rank": 200,
      "benchmark": 59.3,
      "samples": 664,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4420/WDC-WD3000BLFS-08YBU0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721050CLA662 500GB",
      "rank": 201,
      "benchmark": 59.1,
      "samples": 11032,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1785/Hitachi-HDS721050CLA662"
    },
    {
      "type": "HDD",
      "part_number": "ST2000DL001",
      "brand": "Seagate",
      "model": "Barracuda Green 2TB",
      "rank": 202,
      "benchmark": 59.1,
      "samples": 6070,
      "url": "https://hdd.userbenchmark.com/SpeedTest/447/ST2000DL001-9VT156"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST32000641AS 2TB",
      "rank": 203,
      "benchmark": 59,
      "samples": 11181,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1130/ST32000641AS"
    },
    {
      "type": "HDD",
      "part_number": "WD2503ABYX",
      "brand": "WD",
      "model": "RE4 250GB (2010)",
      "rank": 204,
      "benchmark": 58.7,
      "samples": 1152,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5792/WDC-WD2503ABYX-01WERA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD7502AAEX-00Y9A0 750GB",
      "rank": 205,
      "benchmark": 58.7,
      "samples": 3998,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1200/WDC-WD7502AAEX-00Y9A0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD502HJ 500GB",
      "rank": 206,
      "benchmark": 58.7,
      "samples": 64908,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1184/SAMSUNG-HD502HJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500514NS 500GB",
      "rank": 207,
      "benchmark": 58.5,
      "samples": 1752,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6066/ST3500514NS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721010CLA632 1TB",
      "rank": 208,
      "benchmark": 58.4,
      "samples": 11498,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2755/Hitachi-HDS721010CLA632"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS5C4040ALE630 4TB",
      "rank": 209,
      "benchmark": 58.3,
      "samples": 996,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2257/Hitachi-HDS5C4040ALE630"
    },
    {
      "type": "HDD",
      "part_number": "ST500DM002",
      "brand": "Seagate",
      "model": "Barracuda 7200.14 500GB",
      "rank": 210,
      "benchmark": 58.3,
      "samples": 430270,
      "url": "https://hdd.userbenchmark.com/SpeedTest/712/ST500DM002-1BD142"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK1002TS 1TB",
      "rank": 211,
      "benchmark": 58.1,
      "samples": 14,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4326/TOSHIBA-MK1002TS"
    },
    {
      "type": "HDD",
      "part_number": "MQ01ABD100H",
      "brand": "Toshiba",
      "model": "Notebook SSHD 2.5\" 1TB",
      "rank": 212,
      "benchmark": 58.1,
      "samples": 2534,
      "url": "https://hdd.userbenchmark.com/Toshiba-Notebook-SSHD-25--1TB/Rating/1957"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD7500AALX-009BA0 750GB",
      "rank": 213,
      "benchmark": 58,
      "samples": 2106,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5152/WDC-WD7500AALX-009BA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1001FALS-41Y6A1 1TB",
      "rank": 214,
      "benchmark": 57.8,
      "samples": 866,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4052/WDC-WD1001FALS-41Y6A1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS72101 1TB",
      "rank": 215,
      "benchmark": 57.8,
      "samples": 1292,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3573/Hitachi-HDS72101"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD740HLFS-01G6U0 74GB",
      "rank": 216,
      "benchmark": 57.8,
      "samples": 335,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2768/WDC-WD740HLFS-01G6U0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721050CLA360 500GB",
      "rank": 217,
      "benchmark": 57.8,
      "samples": 11512,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3631/Hitachi-HDS721050CLA360"
    },
    {
      "type": "HDD",
      "part_number": "WD5000AZRX",
      "brand": "WD",
      "model": "Green 500GB (2012)",
      "rank": 218,
      "benchmark": 57.6,
      "samples": 27404,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2487/WDC-WD5000AZRX-00A8LB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD6402AAEX-00Z3A0 640GB",
      "rank": 219,
      "benchmark": 57.6,
      "samples": 5544,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1783/WDC-WD6402AAEX-00Z3A0"
    },
    {
      "type": "HDD",
      "part_number": "HDS721010CLA332",
      "brand": "Hitachi",
      "model": "Deskstar 7K1000.C 1TB",
      "rank": 220,
      "benchmark": 57.6,
      "samples": 67602,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1129/Hitachi-HDS721010CLA332"
    },
    {
      "type": "HDD",
      "part_number": "ST2000VX002",
      "brand": "Seagate",
      "model": "Surveillance 2TB",
      "rank": 221,
      "benchmark": 57.5,
      "samples": 595,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11181/ST2000VX002-1AH166"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST2000DL 004 HD204UI 2TB",
      "rank": 222,
      "benchmark": 57.5,
      "samples": 156,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7858/ST2000DL-004-HD204UI"
    },
    {
      "type": "HDD",
      "part_number": "ST1000DL002",
      "brand": "Seagate",
      "model": "Barracuda Green 1TB",
      "rank": 223,
      "benchmark": 57.4,
      "samples": 12009,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1672/ST1000DL002-9TT153"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS5C3030ALA630 3TB",
      "rank": 224,
      "benchmark": 57.4,
      "samples": 2108,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3627/Hitachi-HDS5C3030ALA630"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5002AALX-00J37A0 500GB",
      "rank": 225,
      "benchmark": 57.3,
      "samples": 10546,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3694/WDC-WD5002AALX-00J37A0"
    },
    {
      "type": "HDD",
      "part_number": "WD10EALX",
      "brand": "WD",
      "model": "Blue 1TB (2010)",
      "rank": 226,
      "benchmark": 57.1,
      "samples": 48638,
      "url": "https://hdd.userbenchmark.com/WD-Blue-1TB-2010/Rating/2023"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD254GJ 250GB",
      "rank": 227,
      "benchmark": 56.9,
      "samples": 943,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10095/SAMSUNG-HD254GJ"
    },
    {
      "type": "HDD",
      "part_number": "HD204UI",
      "brand": "Samsung",
      "model": "Spinpoint F4 2TB",
      "rank": 228,
      "benchmark": 56.9,
      "samples": 37559,
      "url": "https://hdd.userbenchmark.com/SpeedTest/324/SAMSUNG-HD204UI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1001FAES-60Z2A0 1TB",
      "rank": 229,
      "benchmark": 56.9,
      "samples": 7867,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3129/WDC-WD1001FAES-60Z2A0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1500HLFS-01G6U1 150GB",
      "rank": 230,
      "benchmark": 56.7,
      "samples": 6471,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2890/WDC-WD1500HLFS-01G6U1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD253GJ 250GB",
      "rank": 231,
      "benchmark": 56.6,
      "samples": 3186,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3770/SAMSUNG-HD253GJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS721010A9E6300 1TB",
      "rank": 232,
      "benchmark": 56.5,
      "samples": 1347,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11219/HGST-HTS721010A9E6300"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721075CLA332 750GB",
      "rank": 233,
      "benchmark": 56.4,
      "samples": 2932,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5587/Hitachi-HDS721075CLA332"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS72105 500GB",
      "rank": 234,
      "benchmark": 56.3,
      "samples": 701,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7340/Hitachi-HDS72105"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Apple",
      "model": "HDD WDC WD10EALX-408EA0 1TB",
      "rank": 235,
      "benchmark": 56.3,
      "samples": 375,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6944/APPLE-HDD-WDC-WD10EALX-408EA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721050CLA660 500GB",
      "rank": 236,
      "benchmark": 56.3,
      "samples": 14337,
      "url": "https://hdd.userbenchmark.com/SpeedTest/289/Hitachi-HDS721050CLA660"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD30EZRS-00J99B0 3TB",
      "rank": 237,
      "benchmark": 56.2,
      "samples": 2458,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3380/WDC-WD30EZRS-00J99B0"
    },
    {
      "type": "HDD",
      "part_number": "WD1002FAEX",
      "brand": "WD",
      "model": "Black 1TB (2010)",
      "rank": 238,
      "benchmark": 56.2,
      "samples": 225421,
      "url": "https://hdd.userbenchmark.com/WD-Black-1TB-2010/Rating/1580"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500410SV 500GB",
      "rank": 239,
      "benchmark": 56.2,
      "samples": 1574,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1363/ST3500410SV"
    },
    {
      "type": "HDD",
      "part_number": "ST31500341AS",
      "brand": "Seagate",
      "model": "Barracuda 7200.11 1.5TB",
      "rank": 240,
      "benchmark": 56.2,
      "samples": 34480,
      "url": "https://hdd.userbenchmark.com/SpeedTest/864/ST31500341AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3000GLFS-01F8U0 300GB",
      "rank": 241,
      "benchmark": 56.2,
      "samples": 3806,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1583/WDC-WD3000GLFS-01F8U0"
    },
    {
      "type": "HDD",
      "part_number": "WD3000HLFS",
      "brand": "WD",
      "model": "VelociRaptor 300GB",
      "rank": 242,
      "benchmark": 56.2,
      "samples": 9104,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1307/WDC-WD3000HLFS-01G6U1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS722020ALA330 2TB",
      "rank": 243,
      "benchmark": 56.1,
      "samples": 14567,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1289/Hitachi-HDS722020ALA330"
    },
    {
      "type": "HDD",
      "part_number": "WD10EALS",
      "brand": "WD",
      "model": "Blue 1TB (2010)",
      "rank": 244,
      "benchmark": 55.9,
      "samples": 9547,
      "url": "https://hdd.userbenchmark.com/WD-Blue-1TB-2010/Rating/1780"
    },
    {
      "type": "HDD",
      "part_number": "ST1000DM000",
      "brand": "Seagate",
      "model": "Desktop HDD 1TB (2013)",
      "rank": 245,
      "benchmark": 55.7,
      "samples": 1639,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3274/ST1000DM000-9TS15E"
    },
    {
      "type": "HDD",
      "part_number": "ST3500418AS",
      "brand": "Seagate",
      "model": "Barracuda 7200.12 500GB",
      "rank": 246,
      "benchmark": 55.7,
      "samples": 174532,
      "url": "https://hdd.userbenchmark.com/SpeedTest/441/ST3500418AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD20EURS-63S48Y0 2TB",
      "rank": 247,
      "benchmark": 55.6,
      "samples": 8882,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2441/WDC-WD20EURS-63S48Y0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS72202 2TB",
      "rank": 248,
      "benchmark": 55.6,
      "samples": 207,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9104/Hitachi-HDS72202"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721050CLA362 500GB",
      "rank": 249,
      "benchmark": 55.5,
      "samples": 38154,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2062/Hitachi-HDS721050CLA362"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500411SV 500GB",
      "rank": 250,
      "benchmark": 55.5,
      "samples": 791,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5943/ST3500411SV"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD800HLFS-75G6U0 80GB",
      "rank": 251,
      "benchmark": 55.4,
      "samples": 656,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5888/WDC-WD800HLFS-75G6U0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS5C3020ALA632 2TB",
      "rank": 252,
      "benchmark": 55.1,
      "samples": 6312,
      "url": "https://hdd.userbenchmark.com/SpeedTest/693/Hitachi-HDS5C3020ALA632"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "STM3500418AS 500GB",
      "rank": 253,
      "benchmark": 55.1,
      "samples": 7247,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2669/STM3500418AS"
    },
    {
      "type": "HDD",
      "part_number": "ST31000524AS",
      "brand": "Seagate",
      "model": "Barracuda 7200.12 1TB",
      "rank": 254,
      "benchmark": 55.1,
      "samples": 304318,
      "url": "https://hdd.userbenchmark.com/Seagate-Barracuda-720012-1TB/Rating/2022"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10EUCX-63YZ1Y0 1TB",
      "rank": 255,
      "benchmark": 54.9,
      "samples": 652,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2516/WDC-WD10EUCX-63YZ1Y0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500410AS 500GB",
      "rank": 256,
      "benchmark": 54.6,
      "samples": 3957,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1333/ST3500410AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1001FALS-00U9B0 1TB",
      "rank": 257,
      "benchmark": 54.6,
      "samples": 3160,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2730/WDC-WD1001FALS-00U9B0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST31000525SV 1TB",
      "rank": 258,
      "benchmark": 54.6,
      "samples": 1853,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9992/ST31000525SV"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5000AUDX-63WNHY0 500GB",
      "rank": 259,
      "benchmark": 54.5,
      "samples": 2825,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1793/WDC-WD5000AUDX-63WNHY0"
    },
    {
      "type": "HDD",
      "part_number": "ST250DM000",
      "brand": "Seagate",
      "model": "Barracuda 7200.14 250GB",
      "rank": 260,
      "benchmark": 54.4,
      "samples": 26037,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3265/ST250DM000-1BD141"
    },
    {
      "type": "HDD",
      "part_number": "WD25EZRX",
      "brand": "WD",
      "model": "Green 2.5TB (2011)",
      "rank": 261,
      "benchmark": 54.1,
      "samples": 1064,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3574/WDC-WD25EZRX-00MMMB0"
    },
    {
      "type": "HDD",
      "part_number": "WD7500BPKT",
      "brand": "WD",
      "model": "Black 2.5\" 750GB (2011)",
      "rank": 262,
      "benchmark": 54,
      "samples": 16466,
      "url": "https://hdd.userbenchmark.com/SpeedTest/310/WDC-WD7500BPKT-60PK4T0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MQ01ACF050 500GB",
      "rank": 263,
      "benchmark": 54,
      "samples": 17595,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7527/TOSHIBA-MQ01ACF050"
    },
    {
      "type": "HDD",
      "part_number": "ST1500DL003",
      "brand": "Seagate",
      "model": "Barracuda Green 1.5TB",
      "rank": 264,
      "benchmark": 53.9,
      "samples": 16200,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2196/ST1500DL003-9VT16L"
    },
    {
      "type": "HDD",
      "part_number": "ST3500413AS",
      "brand": "Seagate",
      "model": "Barracuda 7200.12 500GB",
      "rank": 265,
      "benchmark": 53.8,
      "samples": 88219,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1134/ST3500413AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD155UI 1.5TB",
      "rank": 266,
      "benchmark": 53.8,
      "samples": 944,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6951/SAMSUNG-HD155UI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS725050A7E630 500GB",
      "rank": 267,
      "benchmark": 53.7,
      "samples": 37734,
      "url": "https://hdd.userbenchmark.com/SpeedTest/386/HGST-HTS725050A7E630"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS725050A7E63 500GB",
      "rank": 268,
      "benchmark": 53.7,
      "samples": 22,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12194/HTS725050A7E63"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST31500341AS 1.5TB",
      "rank": 269,
      "benchmark": 53.6,
      "samples": 99,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6611/Seagate-ST31500341AS"
    },
    {
      "type": "HDD",
      "part_number": "ST1000LM014",
      "brand": "Seagate",
      "model": "Laptop SSHD 2.5\" (32GB NAND) 1TB",
      "rank": 270,
      "benchmark": 53.6,
      "samples": 467,
      "url": "https://hdd.userbenchmark.com/Seagate-Laptop-SSHD-25--32GB-NAND-1TB/Rating/3600"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "",
      "model": "GB0500EAFYL 500GB",
      "rank": 271,
      "benchmark": 53.4,
      "samples": 498,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5763/GB0500EAFYL"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST2000LM003 HN-M201RAD 2TB",
      "rank": 272,
      "benchmark": 53.2,
      "samples": 42499,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12558/ST2000LM003-HN-M201RAD"
    },
    {
      "type": "HDD",
      "part_number": "WD7500BPKX",
      "brand": "WD",
      "model": "Black 2.5\" 750GB (2013)",
      "rank": 273,
      "benchmark": 53.2,
      "samples": 15664,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1740/WDC-WD7500BPKX-80HPJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST31000524AS 1TB",
      "rank": 274,
      "benchmark": 53.2,
      "samples": 287,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12491/Seagate-ST31000524AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5002ABYS-02B1B0 500GB",
      "rank": 275,
      "benchmark": 53,
      "samples": 6105,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4481/WDC-WD5002ABYS-02B1B0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250312AS 250GB",
      "rank": 276,
      "benchmark": 52.8,
      "samples": 14882,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2897/ST3250312AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "STM31000528AS 1TB",
      "rank": 277,
      "benchmark": 52.6,
      "samples": 982,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4190/STM31000528AS"
    },
    {
      "type": "HDD",
      "part_number": "WD05PURZ",
      "brand": "WD",
      "model": "Purple Surveillance 500GB (2017)",
      "rank": 278,
      "benchmark": 52.5,
      "samples": 9,
      "url": "https://hdd.userbenchmark.com/SpeedTest/430589/WDC-WD05PURZ-85U8XY0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600HLFS-60G6U2 160GB",
      "rank": 279,
      "benchmark": 52.5,
      "samples": 3139,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5606/WDC-WD1600HLFS-60G6U2"
    },
    {
      "type": "HDD",
      "part_number": "WD5000AAKX",
      "brand": "WD",
      "model": "Blue 500GB (2010)",
      "rank": 280,
      "benchmark": 52.5,
      "samples": 404658,
      "url": "https://hdd.userbenchmark.com/SpeedTest/398/WDC-WD5000AAKX-001CA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST31000333AS 1TB",
      "rank": 281,
      "benchmark": 52.5,
      "samples": 12047,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1279/ST31000333AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD7502ABYS-02A6B0 750GB",
      "rank": 282,
      "benchmark": 52.2,
      "samples": 922,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9643/WDC-WD7502ABYS-02A6B0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3640623AS 640GB",
      "rank": 283,
      "benchmark": 52,
      "samples": 724,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5431/ST3640623AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "",
      "model": "GB0250EAFYK 250GB",
      "rank": 284,
      "benchmark": 52,
      "samples": 585,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5794/GB0250EAFYK"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721025CLA382 250GB",
      "rank": 285,
      "benchmark": 51.9,
      "samples": 5688,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6106/Hitachi-HDS721025CLA382"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "",
      "model": "WL1000GSA6472R 1TB",
      "rank": 286,
      "benchmark": 51.9,
      "samples": 21,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7128/WL1000GSA6472R"
    },
    {
      "type": "HDD",
      "part_number": "WD10EARX",
      "brand": "WD",
      "model": "Green 1TB (2011)",
      "rank": 287,
      "benchmark": 51.7,
      "samples": 35361,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2607/WDC-WD10EARX-00N0YB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1002FBYS-02A6B0 1TB",
      "rank": 288,
      "benchmark": 51.7,
      "samples": 20922,
      "url": "https://hdd.userbenchmark.com/SpeedTest/22/WDC-WD1002FBYS-02A6B0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3640323AS 640GB",
      "rank": 289,
      "benchmark": 51.6,
      "samples": 2394,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3064/ST3640323AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MQ01ACF032 320GB",
      "rank": 290,
      "benchmark": 51.2,
      "samples": 4947,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4030/TOSHIBA-MQ01ACF032"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2502ABYS-18B7A0 250GB",
      "rank": 291,
      "benchmark": 51,
      "samples": 1217,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4931/WDC-WD2502ABYS-18B7A0"
    },
    {
      "type": "HDD",
      "part_number": "ST3750525AS",
      "brand": "Seagate",
      "model": "Barracuda 7200.12 750GB",
      "rank": 292,
      "benchmark": 51,
      "samples": 2775,
      "url": "https://hdd.userbenchmark.com/SpeedTest/562/ST3750525AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9750422AS 750GB",
      "rank": 293,
      "benchmark": 50.9,
      "samples": 724,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6425/ST9750422AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721010CLA 1TB",
      "rank": 294,
      "benchmark": 50.9,
      "samples": 1223,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1227/Hitachi-HDS721010CLA"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT721075SLA380 750GB",
      "rank": 295,
      "benchmark": 50.9,
      "samples": 628,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3276/Hitachi-HDT721075SLA380"
    },
    {
      "type": "HDD",
      "part_number": "WD2500AAKX",
      "brand": "WD",
      "model": "Blue 250GB (2010)",
      "rank": 296,
      "benchmark": 50.9,
      "samples": 45114,
      "url": "https://hdd.userbenchmark.com/SpeedTest/53/WDC-WD2500AAKX-753CA1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD25EZRS-00J99B0 2.5TB",
      "rank": 297,
      "benchmark": 50.8,
      "samples": 771,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9160/WDC-WD25EZRS-00J99B0"
    },
    {
      "type": "HDD",
      "part_number": "WD7500AZRX",
      "brand": "WD",
      "model": "Green 750GB (2012)",
      "rank": 298,
      "benchmark": 50.8,
      "samples": 1122,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1925/WDC-WD7500AZRX-00A8LB0"
    },
    {
      "type": "HDD",
      "part_number": "WD7501AALS",
      "brand": "WD",
      "model": "Black 750GB (2008)",
      "rank": 299,
      "benchmark": 50.8,
      "samples": 9460,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1987/WDC-WD7501AALS-00J7B0"
    },
    {
      "type": "HDD",
      "part_number": "WD20EARX",
      "brand": "WD",
      "model": "Green 2TB (2011)",
      "rank": 300,
      "benchmark": 50.7,
      "samples": 169713,
      "url": "https://hdd.userbenchmark.com/WD-Green-2TB-2011/Rating/1850"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM31000333AS 1TB",
      "rank": 301,
      "benchmark": 50.7,
      "samples": 293,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10102/MAXTOR-STM31000333AS"
    },
    {
      "type": "HDD",
      "part_number": "HTS727575A9E364",
      "brand": "HGST",
      "model": "Travelstar 7K750 2.5\" 750GB",
      "rank": 302,
      "benchmark": 50.6,
      "samples": 13971,
      "url": "https://hdd.userbenchmark.com/SpeedTest/104/Hitachi-HTS727575A9E364"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD102UJ 1TB",
      "rank": 303,
      "benchmark": 50.6,
      "samples": 458,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7223/SAMSUNG-HD102UJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS7275 750GB",
      "rank": 304,
      "benchmark": 50.5,
      "samples": 20,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6142/Hitachi-HTS7275"
    },
    {
      "type": "HDD",
      "part_number": "WD6400AAKS",
      "brand": "WD",
      "model": "Blue 640GB (2008)",
      "rank": 305,
      "benchmark": 50.5,
      "samples": 57277,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2174/WDC-WD6400AAKS-22A7B2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "",
      "model": "GB1000EAMYC 1TB",
      "rank": 306,
      "benchmark": 50.4,
      "samples": 1033,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10569/GB1000EAMYC"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2002FYPS-01U1B0 2TB",
      "rank": 307,
      "benchmark": 50.3,
      "samples": 5145,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3788/WDC-WD2002FYPS-01U1B0"
    },
    {
      "type": "HDD",
      "part_number": "WD6401AALS",
      "brand": "WD",
      "model": "Black 640GB (2008)",
      "rank": 308,
      "benchmark": 50.2,
      "samples": 14823,
      "url": "https://hdd.userbenchmark.com/SpeedTest/136/WDC-WD6401AALS-00L3B2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HE103UJ 1TB",
      "rank": 309,
      "benchmark": 50.2,
      "samples": 790,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5305/SAMSUNG-HE103UJ"
    },
    {
      "type": "HDD",
      "part_number": "ST750LX003",
      "brand": "Seagate",
      "model": "Momentus XT 7200 RPM 2.5\" 750GB",
      "rank": 310,
      "benchmark": 50.1,
      "samples": 8228,
      "url": "https://hdd.userbenchmark.com/SpeedTest/840/ST750LX003-1AC154"
    },
    {
      "type": "HDD",
      "part_number": "ST3250318AS",
      "brand": "Seagate",
      "model": "Barracuda 7200.12 250GB",
      "rank": 311,
      "benchmark": 50,
      "samples": 41385,
      "url": "https://hdd.userbenchmark.com/SpeedTest/169/ST3250318AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST310005 28AS 1TB",
      "rank": 312,
      "benchmark": 49.8,
      "samples": 7897,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1219/ST310005-28AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10JUCT-63J6SY0 1TB",
      "rank": 313,
      "benchmark": 49.8,
      "samples": 2598,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9459/WDC-WD10JUCT-63J6SY0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721050CLA 500GB",
      "rank": 314,
      "benchmark": 49.7,
      "samples": 2094,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1561/Hitachi-HDS721050CLA"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3320613AS 320GB",
      "rank": 315,
      "benchmark": 49.6,
      "samples": 1862,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4882/MAXTOR-STM3320613AS"
    },
    {
      "type": "HDD",
      "part_number": "WD5000AAKS",
      "brand": "WD",
      "model": "Blue 500GB (2008)",
      "rank": 316,
      "benchmark": 49.6,
      "samples": 166758,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1305/WDC-WD5000AAKS-00YGA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "FA GoFlex Desk 2TB",
      "rank": 317,
      "benchmark": 49.6,
      "samples": 73,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9703/Seagate-FA-GoFlex-Desk"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "",
      "model": "KingFast 128GB",
      "rank": 318,
      "benchmark": 49.5,
      "samples": 12,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9927/KingFast"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3320813AS 320GB",
      "rank": 319,
      "benchmark": 49.5,
      "samples": 3283,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5403/ST3320813AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS5C1010CLA382 1TB",
      "rank": 320,
      "benchmark": 49.3,
      "samples": 2170,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1569/Hitachi-HDS5C1010CLA382"
    },
    {
      "type": "HDD",
      "part_number": "WD20EARS",
      "brand": "WD",
      "model": "Green 2TB (2010)",
      "rank": 321,
      "benchmark": 49.2,
      "samples": 4823,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2609/WDC-WD20EARS-00M"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HCS5C1010CLA382 1TB",
      "rank": 322,
      "benchmark": 49.2,
      "samples": 2006,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3428/Hitachi-HCS5C1010CLA382"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS5C3015ALA632 1.5TB",
      "rank": 323,
      "benchmark": 49.1,
      "samples": 422,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5797/Hitachi-HDS5C3015ALA632"
    },
    {
      "type": "HDD",
      "part_number": "WD5000BPKX",
      "brand": "WD",
      "model": "Black 2.5\" 500GB (2013)",
      "rank": 324,
      "benchmark": 49.1,
      "samples": 3668,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3355/WDC-WD5000BPKX-75HPJT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDE721010SLA330 1TB",
      "rank": 325,
      "benchmark": 49.1,
      "samples": 7947,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2356/Hitachi-HDE721010SLA330"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT721075SLA360 750GB",
      "rank": 326,
      "benchmark": 48.9,
      "samples": 345,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3764/Hitachi-HDT721075SLA360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST31000520AS 1TB",
      "rank": 327,
      "benchmark": 48.9,
      "samples": 8266,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1280/ST31000520AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD642JJ 640GB",
      "rank": 328,
      "benchmark": 48.9,
      "samples": 10270,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1574/SAMSUNG-HD642JJ"
    },
    {
      "type": "HDD",
      "part_number": "ST320DM000",
      "brand": "Seagate",
      "model": "Barracuda 7200.14 320GB",
      "rank": 329,
      "benchmark": 48.8,
      "samples": 2784,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2924/ST320DM000-1BD14C"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3750528AS 750GB",
      "rank": 330,
      "benchmark": 48.8,
      "samples": 17583,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1714/ST3750528AS"
    },
    {
      "type": "HDD",
      "part_number": "WD5000BPKT",
      "brand": "WD",
      "model": "Black 2.5\" 500GB (2011)",
      "rank": 331,
      "benchmark": 48.8,
      "samples": 10618,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2036/WDC-WD5000BPKT-60PK4T0"
    },
    {
      "type": "HDD",
      "part_number": "ST9750420AS",
      "brand": "Seagate",
      "model": "Momentus 2.5\" 750GB (2010)",
      "rank": 332,
      "benchmark": 48.8,
      "samples": 18338,
      "url": "https://hdd.userbenchmark.com/SpeedTest/922/ST9750420AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3320613AS 320GB",
      "rank": 333,
      "benchmark": 48.7,
      "samples": 12694,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1722/ST3320613AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS72757 750GB",
      "rank": 334,
      "benchmark": 48.7,
      "samples": 190,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4050/Hitachi-HTS72757"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT72101 1TB",
      "rank": 335,
      "benchmark": 48.7,
      "samples": 218,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4490/Hitachi-HDT72101"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "STM3250318AS 250GB",
      "rank": 336,
      "benchmark": 48.6,
      "samples": 3309,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5134/STM3250318AS"
    },
    {
      "type": "HDD",
      "part_number": "ST1000LM014",
      "brand": "Seagate",
      "model": "Laptop SSHD 2.5\" 1TB",
      "rank": 337,
      "benchmark": 48.5,
      "samples": 55931,
      "url": "https://hdd.userbenchmark.com/Seagate-Laptop-SSHD-25--1TB/Rating/1804"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3202ABYS-02B7A0 320GB",
      "rank": 338,
      "benchmark": 48.5,
      "samples": 1004,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8044/WDC-WD3202ABYS-02B7A0"
    },
    {
      "type": "HDD",
      "part_number": "WD10JFCX",
      "brand": "WD",
      "model": "Red 2.5\" 1TB (2013)",
      "rank": 339,
      "benchmark": 48.3,
      "samples": 1682,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2756/WDC-WD10JFCX-68N6GN0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST31000340NS 1TB",
      "rank": 340,
      "benchmark": 48.2,
      "samples": 6356,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1232/ST31000340NS"
    },
    {
      "type": "HDD",
      "part_number": "WD1001X06X",
      "brand": "WD",
      "model": "Black2 2.5\" 1.120 TB (2013)",
      "rank": 341,
      "benchmark": 48.1,
      "samples": 1511,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5448/WDC-WD1001X06X-00SJVT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK6461GSYN 640GB",
      "rank": 342,
      "benchmark": 48,
      "samples": 567,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2644/TOSHIBA-MK6461GSYN"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT721010SLA360 1TB",
      "rank": 343,
      "benchmark": 47.8,
      "samples": 26302,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1320/Hitachi-HDT721010SLA360"
    },
    {
      "type": "HDD",
      "part_number": "MQ02ABD100H",
      "brand": "Toshiba",
      "model": "Notebook SSHD 2.5\" 1TB",
      "rank": 344,
      "benchmark": 47.8,
      "samples": 23489,
      "url": "https://hdd.userbenchmark.com/SpeedTest/24488/TOSHIBA-MQ02ABD100H"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST32000542AS 2TB",
      "rank": 345,
      "benchmark": 47.7,
      "samples": 18438,
      "url": "https://hdd.userbenchmark.com/SpeedTest/696/ST32000542AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST31000322CS 1TB",
      "rank": 346,
      "benchmark": 47.6,
      "samples": 2161,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6933/ST31000322CS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500412AS 500GB",
      "rank": 347,
      "benchmark": 47.6,
      "samples": 3887,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5332/ST3500412AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3750330NS 750GB",
      "rank": 348,
      "benchmark": 47.6,
      "samples": 877,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8704/ST3750330NS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "",
      "model": "VB0250EAVER 250GB",
      "rank": 349,
      "benchmark": 47.5,
      "samples": 1600,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1098/VB0250EAVER"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT721050SLA360 500GB",
      "rank": 350,
      "benchmark": 47.5,
      "samples": 1894,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4865/Hitachi-HDT721050SLA360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "S TM3320613AS 320GB",
      "rank": 351,
      "benchmark": 47.4,
      "samples": 185,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10528/MAXTOR-S-TM3320613AS"
    },
    {
      "type": "HDD",
      "part_number": "WD10JPVT",
      "brand": "WD",
      "model": "Blue 2.5\" 1TB (2011)",
      "rank": 352,
      "benchmark": 47.4,
      "samples": 14613,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1109/WDC-WD10JPVT-75"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Apple",
      "model": "HDD HTS545050A7E362 500GB",
      "rank": 353,
      "benchmark": 47.4,
      "samples": 3177,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7208/APPLE-HDD-HTS545050A7E362"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500320NS 500GB",
      "rank": 354,
      "benchmark": 47.4,
      "samples": 3663,
      "url": "https://hdd.userbenchmark.com/SpeedTest/507/ST3500320NS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500820AS 500GB",
      "rank": 355,
      "benchmark": 47.3,
      "samples": 3714,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3950/ST3500820AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MQ02ABF100 1TB",
      "rank": 356,
      "benchmark": 47.3,
      "samples": 5702,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11528/TOSHIBA-MQ02ABF100"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500312CS 500GB",
      "rank": 357,
      "benchmark": 47.3,
      "samples": 77452,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1659/ST3500312CS"
    },
    {
      "type": "HDD",
      "part_number": "HD103UJ",
      "brand": "Samsung",
      "model": "Spinpoint F1 1TB",
      "rank": 358,
      "benchmark": 47.2,
      "samples": 47524,
      "url": "https://hdd.userbenchmark.com/SpeedTest/413/SAMSUNG-HD103UJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST31000340AS 1TB",
      "rank": 359,
      "benchmark": 47.1,
      "samples": 6314,
      "url": "https://hdd.userbenchmark.com/SpeedTest/206/ST31000340AS"
    },
    {
      "type": "HDD",
      "part_number": "WD15EARX",
      "brand": "WD",
      "model": "Green 1.5TB (2011)",
      "rank": 360,
      "benchmark": 47.1,
      "samples": 6483,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4721/WDC-WD15EARX-22PASB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD153WI 1.5TB",
      "rank": 361,
      "benchmark": 47.1,
      "samples": 926,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1489/SAMSUNG-HD153WI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3750330AS 750GB",
      "rank": 362,
      "benchmark": 47.1,
      "samples": 3066,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1776/ST3750330AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10S12X-55JTET0 1TB",
      "rank": 363,
      "benchmark": 47.1,
      "samples": 637,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12098/WDC-WD10S12X-55JTET0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500620AS 500GB",
      "rank": 364,
      "benchmark": 47,
      "samples": 4676,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3388/ST3500620AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT721064SLA360 640GB",
      "rank": 365,
      "benchmark": 47,
      "samples": 2945,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6072/Hitachi-HDT721064SLA360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK3261GSY 320GB",
      "rank": 366,
      "benchmark": 47,
      "samples": 468,
      "url": "https://hdd.userbenchmark.com/SpeedTest/694/TOSHIBA-MK3261GSY"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD105SI 1TB",
      "rank": 367,
      "benchmark": 46.9,
      "samples": 4439,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2699/SAMSUNG-HD105SI"
    },
    {
      "type": "HDD",
      "part_number": "WD5001AALS",
      "brand": "WD",
      "model": "Black 500GB (2008)",
      "rank": 368,
      "benchmark": 46.8,
      "samples": 21140,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1199/WDC-WD5001AALS-00L3B2"
    },
    {
      "type": "HDD",
      "part_number": "ST1000LX015",
      "brand": "Seagate",
      "model": "FireCuda 2.5\" 1TB",
      "rank": 369,
      "benchmark": 46.7,
      "samples": 92302,
      "url": "https://hdd.userbenchmark.com/SpeedTest/193028/ST1000LX015-1U7172"
    },
    {
      "type": "HDD",
      "part_number": "ST2000LX001",
      "brand": "Seagate",
      "model": "FireCuda 2.5\" 2TB",
      "rank": 370,
      "benchmark": 46.7,
      "samples": 51695,
      "url": "https://hdd.userbenchmark.com/SpeedTest/192181/ST2000LX001-1RG174"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MQ01ABD050 500GB",
      "rank": 371,
      "benchmark": 46.5,
      "samples": 32349,
      "url": "https://hdd.userbenchmark.com/SpeedTest/924/TOSHIBA-MQ01ABD050"
    },
    {
      "type": "HDD",
      "part_number": "WD20EADS",
      "brand": "WD",
      "model": "Green 2TB (2009)",
      "rank": 372,
      "benchmark": 46.5,
      "samples": 9783,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1732/WDC-WD20EADS-11R6B1"
    },
    {
      "type": "HDD",
      "part_number": "WD3200AAKX",
      "brand": "WD",
      "model": "Blue 320GB (2010)",
      "rank": 373,
      "benchmark": 46.4,
      "samples": 12504,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2995/WDC-WD3200AAKX-001CA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM250HJ 250GB",
      "rank": 374,
      "benchmark": 46.4,
      "samples": 410,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11688/SAMSUNG-HM250HJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD6400AARS-00Y5B1 640GB",
      "rank": 375,
      "benchmark": 46.3,
      "samples": 2496,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1604/WDC-WD6400AARS-00Y5B1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD502HI 500GB",
      "rank": 376,
      "benchmark": 46.2,
      "samples": 21152,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1270/SAMSUNG-HD502HI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3750330SV 750GB",
      "rank": 377,
      "benchmark": 46.2,
      "samples": 133,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10527/ST3750330SV"
    },
    {
      "type": "HDD",
      "part_number": "ST3500320AS",
      "brand": "Seagate",
      "model": "Barracuda 7200.11 500GB",
      "rank": 378,
      "benchmark": 46.2,
      "samples": 23592,
      "url": "https://hdd.userbenchmark.com/SpeedTest/137/ST3500320AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MQ01ABD100 1TB",
      "rank": 379,
      "benchmark": 46.2,
      "samples": 270410,
      "url": "https://hdd.userbenchmark.com/SpeedTest/784/TOSHIBA-MQ01ABD100"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM320HJ 320GB",
      "rank": 380,
      "benchmark": 46.2,
      "samples": 722,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2116/SAMSUNG-HM320HJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250310NS 250GB",
      "rank": 381,
      "benchmark": 46.2,
      "samples": 1127,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1947/ST3250310NS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD321HJ 320GB",
      "rank": 382,
      "benchmark": 46.1,
      "samples": 4097,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6799/SAMSUNG-HD321HJ"
    },
    {
      "type": "HDD",
      "part_number": "ST95005620AS",
      "brand": "Seagate",
      "model": "Momentus XT SSHD 2.5\" 500GB",
      "rank": 383,
      "benchmark": 46.1,
      "samples": 10482,
      "url": "https://hdd.userbenchmark.com/Seagate-Momentus-XT-SSHD-25--500GB/Rating/1800"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD15EURS-63S48Y0 1.5TB",
      "rank": 384,
      "benchmark": 46,
      "samples": 437,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7870/WDC-WD15EURS-63S48Y0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM31000340AS 1TB",
      "rank": 385,
      "benchmark": 45.9,
      "samples": 558,
      "url": "https://hdd.userbenchmark.com/SpeedTest/99/MAXTOR-STM31000340AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD322HJ 320GB",
      "rank": 386,
      "benchmark": 45.9,
      "samples": 38952,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1377/SAMSUNG-HD322HJ"
    },
    {
      "type": "HDD",
      "part_number": "WD10JPVX",
      "brand": "WD",
      "model": "Blue 2.5\" 1TB (2004)",
      "rank": 387,
      "benchmark": 45.9,
      "samples": 171586,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3140/WDC-WD10JPVX-22JC3T0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "MZMPC064HBDR-000 1TB",
      "rank": 388,
      "benchmark": 45.8,
      "samples": 10,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1769/SAMSUNG-MZMPC064HBDR-000"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3500320AS 500GB",
      "rank": 389,
      "benchmark": 45.8,
      "samples": 4141,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2192/MAXTOR-STM3500320AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST310005 1TB",
      "rank": 390,
      "benchmark": 45.8,
      "samples": 15,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1342/ST310005"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "STM3320418AS 320GB",
      "rank": 391,
      "benchmark": 45.8,
      "samples": 684,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5696/STM3320418AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST1000LM014-SSHD-8GB 1TB",
      "rank": 392,
      "benchmark": 45.8,
      "samples": 13543,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6737/ST1000LM014-SSHD-8GB"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS725050A9A362 500GB",
      "rank": 393,
      "benchmark": 45.7,
      "samples": 465,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5508/Hitachi-HTS725050A9A362"
    },
    {
      "type": "HDD",
      "part_number": "HD154UI",
      "brand": "Samsung",
      "model": "Spinpoint F2 1TB",
      "rank": 394,
      "benchmark": 45.7,
      "samples": 27253,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1306/SAMSUNG-HD154UI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD103SI 1TB",
      "rank": 395,
      "benchmark": 45.7,
      "samples": 34827,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1110/SAMSUNG-HD103SI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "FreeAgent XTreme 1TB",
      "rank": 396,
      "benchmark": 45.5,
      "samples": 51,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2882/Seagate-FreeAgent-XTreme"
    },
    {
      "type": "HDD",
      "part_number": "ST500LX005",
      "brand": "Seagate",
      "model": "SSHD 500GB",
      "rank": 397,
      "benchmark": 45.4,
      "samples": 180,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5338/ST500LX005-1CW162"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160813AS 160GB",
      "rank": 398,
      "benchmark": 45.4,
      "samples": 3711,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2850/ST3160813AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3750630AS 750GB",
      "rank": 399,
      "benchmark": 45.3,
      "samples": 1922,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3071/ST3750630AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD161GJ 160GB",
      "rank": 400,
      "benchmark": 45.2,
      "samples": 12373,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2493/SAMSUNG-HD161GJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS72755 500GB",
      "rank": 401,
      "benchmark": 45.2,
      "samples": 66,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2252/Hitachi-HTS72755"
    },
    {
      "type": "HDD",
      "part_number": "HD203WI",
      "brand": "Samsung",
      "model": "Spinpoint F3 2TB",
      "rank": 402,
      "benchmark": 45.1,
      "samples": 3239,
      "url": "https://hdd.userbenchmark.com/SpeedTest/640/SAMSUNG-HD203WI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250312CS 250GB",
      "rank": 403,
      "benchmark": 45.1,
      "samples": 2105,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3255/ST3250312CS"
    },
    {
      "type": "HDD",
      "part_number": "HM640JJ",
      "brand": "Samsung",
      "model": "Spinpoint MP4 2.5\" 640GB",
      "rank": 404,
      "benchmark": 45,
      "samples": 617,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2214/SAMSUNG-HM640JJ"
    },
    {
      "type": "HDD",
      "part_number": "WD3200AAKS",
      "brand": "WD",
      "model": "Blue 320GB (2008)",
      "rank": 405,
      "benchmark": 45,
      "samples": 48613,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1186/WDC-WD3200AAKS-00B3A0"
    },
    {
      "type": "HDD",
      "part_number": "WD5000LPVT",
      "brand": "WD",
      "model": "Blue 2.5\" 500GB (2012)",
      "rank": 406,
      "benchmark": 45,
      "samples": 13469,
      "url": "https://hdd.userbenchmark.com/SpeedTest/241/WDC-WD5000LPVT-22G33T0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3160813AS 160GB",
      "rank": 407,
      "benchmark": 44.9,
      "samples": 994,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7161/MAXTOR-STM3160813AS"
    },
    {
      "type": "HDD",
      "part_number": "ST500LM000",
      "brand": "Seagate",
      "model": "Laptop Thin SSHD 2.5\" 500GB",
      "rank": 408,
      "benchmark": 44.9,
      "samples": 30848,
      "url": "https://hdd.userbenchmark.com/Seagate-Laptop-Thin-SSHD-25--500GB/Rating/1803"
    },
    {
      "type": "HDD",
      "part_number": "WD7500BPVX",
      "brand": "WD",
      "model": "Blue 2.5\" 750GB",
      "rank": 409,
      "benchmark": 44.9,
      "samples": 12134,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3028/WDC-WD7500BPVX-75JC3T0"
    },
    {
      "type": "HDD",
      "part_number": "WD10SPCX",
      "brand": "WD",
      "model": "Blue 2.5\" 1TB (2013)",
      "rank": 410,
      "benchmark": 44.9,
      "samples": 48634,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3227/WDC-WD10SPCX-22HWST0"
    },
    {
      "type": "HDD",
      "part_number": "WD5000BEKT",
      "brand": "WD",
      "model": "Black 2.5\" 500GB (2010)",
      "rank": 411,
      "benchmark": 44.8,
      "samples": 4189,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2241/WDC-WD5000BEKT-22KA9T0"
    },
    {
      "type": "HDD",
      "part_number": "WD3200AAJS",
      "brand": "WD",
      "model": "Blue 320GB (2007)",
      "rank": 412,
      "benchmark": 44.8,
      "samples": 80613,
      "url": "https://hdd.userbenchmark.com/SpeedTest/804/WDC-WD3200AAJS-00L7A0"
    },
    {
      "type": "HDD",
      "part_number": "ST320LT007",
      "brand": "Seagate",
      "model": "Momentus Thin 7200 2.5\" 320GB",
      "rank": 413,
      "benchmark": 44.7,
      "samples": 9926,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1923/ST320LT007-9ZV142"
    },
    {
      "type": "HDD",
      "part_number": "ST500LX003",
      "brand": "Seagate",
      "model": "Momentus XT 7200 RPM 2.5\" 500GB",
      "rank": 414,
      "benchmark": 44.7,
      "samples": 1261,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7156/ST500LX003-1AC15G"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10EURS-630AB1 1TB",
      "rank": 415,
      "benchmark": 44.6,
      "samples": 2263,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5849/WDC-WD10EURS-630AB1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST31500541AS 1.5TB",
      "rank": 416,
      "benchmark": 44.5,
      "samples": 7983,
      "url": "https://hdd.userbenchmark.com/SpeedTest/667/ST31500541AS"
    },
    {
      "type": "HDD",
      "part_number": "ST3320413AS",
      "brand": "Seagate",
      "model": "Barracuda 7200.12 320GB",
      "rank": 417,
      "benchmark": 44.5,
      "samples": 5856,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3234/ST3320413AS"
    },
    {
      "type": "HDD",
      "part_number": "WD10EARS",
      "brand": "WD",
      "model": "Green 1TB (2010)",
      "rank": 418,
      "benchmark": 44.5,
      "samples": 120320,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1117/WDC-WD10EARS-00Y5B1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MQ01ABF050 500GB",
      "rank": 419,
      "benchmark": 44.4,
      "samples": 93034,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2789/TOSHIBA-MQ01ABF050"
    },
    {
      "type": "HDD",
      "part_number": "WD15EARS",
      "brand": "WD",
      "model": "Green 1.5TB (2010)",
      "rank": 420,
      "benchmark": 44.4,
      "samples": 31042,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1144/WDC-WD15EARS-00MVWB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK6461GSY 640GB",
      "rank": 421,
      "benchmark": 44.3,
      "samples": 791,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3150/TOSHIBA-MK6461GSY"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MQ01ABD0 500GB",
      "rank": 422,
      "benchmark": 44.3,
      "samples": 393,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11593/TOSHIBA-MQ01ABD0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK7559GSXF 750GB",
      "rank": 423,
      "benchmark": 44.3,
      "samples": 1170,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2028/TOSHIBA-MK7559GSXF"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK3261GSYN 320GB",
      "rank": 424,
      "benchmark": 44.3,
      "samples": 5788,
      "url": "https://hdd.userbenchmark.com/SpeedTest/30/TOSHIBA-MK3261GSYN"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "",
      "model": "OCZ-AGILITY3 120GB",
      "rank": 425,
      "benchmark": 44.3,
      "samples": 97,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2512/OCZ-AGILITY3"
    },
    {
      "type": "HDD",
      "part_number": "WD5000LPCX",
      "brand": "WD",
      "model": "Blue 2.5\" 500GB (2013)",
      "rank": 426,
      "benchmark": 44.3,
      "samples": 57994,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6849/WDC-WD5000LPCX-24C6HT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS541010A9 1TB",
      "rank": 427,
      "benchmark": 44.2,
      "samples": 311,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6753/HGST-HTS541010A9"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT721032SLA360 320GB",
      "rank": 428,
      "benchmark": 44.2,
      "samples": 4917,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3078/Hitachi-HDT721032SLA360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD503HI 500GB",
      "rank": 429,
      "benchmark": 44.2,
      "samples": 7061,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4359/SAMSUNG-HD503HI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD502IJ 500GB",
      "rank": 430,
      "benchmark": 44.1,
      "samples": 19675,
      "url": "https://hdd.userbenchmark.com/SpeedTest/111/SAMSUNG-HD502IJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS5C1050CLA382 500GB",
      "rank": 431,
      "benchmark": 44.1,
      "samples": 2436,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4543/Hitachi-HDS5C1050CLA382"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT721032SLA380 320GB",
      "rank": 432,
      "benchmark": 44,
      "samples": 2934,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4609/Hitachi-HDT721032SLA380"
    },
    {
      "type": "HDD",
      "part_number": "WD2500AAKS",
      "brand": "WD",
      "model": "Blue 250GB (2008)",
      "rank": 433,
      "benchmark": 44,
      "samples": 8692,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2143/WDC-WD2500AAKS-00L6A0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3320418AS 320GB",
      "rank": 434,
      "benchmark": 44,
      "samples": 23402,
      "url": "https://hdd.userbenchmark.com/SpeedTest/168/ST3320418AS"
    },
    {
      "type": "HDD",
      "part_number": "HD753LJ",
      "brand": "Samsung",
      "model": "Spinpoint F1 750GB",
      "rank": 435,
      "benchmark": 43.9,
      "samples": 20345,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1245/SAMSUNG-HD753LJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10JPCX-24UE4T0 1TB",
      "rank": 436,
      "benchmark": 43.9,
      "samples": 36704,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11224/WDC-WD10JPCX-24UE4T0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST500LM000-SSHD-8GB 500GB",
      "rank": 437,
      "benchmark": 43.9,
      "samples": 9565,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9154/ST500LM000-SSHD-8GB"
    },
    {
      "type": "HDD",
      "part_number": "ST500LX025",
      "brand": "Seagate",
      "model": "FireCuda 2.5\" 500GB",
      "rank": 438,
      "benchmark": 43.8,
      "samples": 1686,
      "url": "https://hdd.userbenchmark.com/SpeedTest/208729/ST500LX025-1U717D"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD6400AADS-00M2B0 640GB",
      "rank": 439,
      "benchmark": 43.7,
      "samples": 1254,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10673/WDC-WD6400AADS-00M2B0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD8000AARS-00Y5B1 800GB",
      "rank": 440,
      "benchmark": 43.7,
      "samples": 954,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3653/WDC-WD8000AARS-00Y5B1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250410AS 250GB",
      "rank": 441,
      "benchmark": 43.7,
      "samples": 19590,
      "url": "https://hdd.userbenchmark.com/SpeedTest/456/ST3250410AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3200AVJS-63WDA0 320GB",
      "rank": 442,
      "benchmark": 43.6,
      "samples": 6478,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11043/WDC-WD3200AVJS-63WDA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST320LT009-9WC142 320GB",
      "rank": 443,
      "benchmark": 43.6,
      "samples": 721,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4704/ST320LT009-9WC142"
    },
    {
      "type": "HDD",
      "part_number": "WD10EADS",
      "brand": "WD",
      "model": "Green 1TB (2009)",
      "rank": 444,
      "benchmark": 43.5,
      "samples": 95852,
      "url": "https://hdd.userbenchmark.com/SpeedTest/362/WDC-WD10EADS-00L5B1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MQ01ABD075 750GB",
      "rank": 445,
      "benchmark": 43.5,
      "samples": 39092,
      "url": "https://hdd.userbenchmark.com/SpeedTest/869/TOSHIBA-MQ01ABD075"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS541515A9E630 1.5TB",
      "rank": 446,
      "benchmark": 43.3,
      "samples": 2050,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9932/HGST-HTS541515A9E630"
    },
    {
      "type": "HDD",
      "part_number": "WD15EADS",
      "brand": "WD",
      "model": "Green 1.5TB (2009)",
      "rank": 447,
      "benchmark": 43.2,
      "samples": 14146,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2529/WDC-WD15EADS-22P8B0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD252HJ 250GB",
      "rank": 448,
      "benchmark": 43.2,
      "samples": 5727,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2959/SAMSUNG-HD252HJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HN-M101MBB 1TB",
      "rank": 449,
      "benchmark": 43,
      "samples": 3094,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2830/SAMSUNG-HN-M101MBB"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10EADX-00TDHB0 1TB",
      "rank": 450,
      "benchmark": 43,
      "samples": 9361,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1049/WDC-WD10EADX-00TDHB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST750LM000-1EJ16G 750GB",
      "rank": 451,
      "benchmark": 42.9,
      "samples": 962,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10621/ST750LM000-1EJ16G"
    },
    {
      "type": "HDD",
      "part_number": "HTS727550A9E364",
      "brand": "HGST",
      "model": "Travelstar 7K750 2.5\" 500GB",
      "rank": 452,
      "benchmark": 42.9,
      "samples": 8687,
      "url": "https://hdd.userbenchmark.com/SpeedTest/789/Hitachi-HTS727550A9E364"
    },
    {
      "type": "HDD",
      "part_number": "ST9500420AS",
      "brand": "Seagate",
      "model": "Momentus 2.5\" 500GB",
      "rank": 453,
      "benchmark": 42.9,
      "samples": 39665,
      "url": "https://hdd.userbenchmark.com/SpeedTest/785/ST9500420AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST500LX012-SSHD-8GB 500GB",
      "rank": 454,
      "benchmark": 42.9,
      "samples": 919,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12260/ST500LX012-SSHD-8GB"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS725050A9A364 500GB",
      "rank": 455,
      "benchmark": 42.8,
      "samples": 6984,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1690/Hitachi-HTS725050A9A364"
    },
    {
      "type": "HDD",
      "part_number": "ST1000LM024",
      "brand": "Seagate",
      "model": "Momentus 2.5\" 1TB",
      "rank": 456,
      "benchmark": 42.7,
      "samples": 238506,
      "url": "https://hdd.userbenchmark.com/SpeedTest/130/ST1000LM024-HN-M101MBB"
    },
    {
      "type": "HDD",
      "part_number": "WD5000LPVX",
      "brand": "WD",
      "model": "Blue 2.5\" 500GB",
      "rank": 457,
      "benchmark": 42.6,
      "samples": 62907,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1040/WDC-WD5000LPVX-22V0TT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10EVDS-63N5B1 1TB",
      "rank": 458,
      "benchmark": 42.6,
      "samples": 2129,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4828/WDC-WD10EVDS-63N5B1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD250HJ 250GB",
      "rank": 459,
      "benchmark": 42.6,
      "samples": 9889,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2247/SAMSUNG-HD250HJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545050A7E380 500GB",
      "rank": 460,
      "benchmark": 42.6,
      "samples": 52631,
      "url": "https://hdd.userbenchmark.com/SpeedTest/664/Hitachi-HTS545050A7E380"
    },
    {
      "type": "HDD",
      "part_number": "HM500JJ",
      "brand": "Samsung",
      "model": "Spinpoint MP4 2.5\" 500GB",
      "rank": 461,
      "benchmark": 42.4,
      "samples": 899,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1178/SAMSUNG-HM500JJ"
    },
    {
      "type": "HDD",
      "part_number": "WD7500LPCX",
      "brand": "WD",
      "model": "Blue 2.5\" 750GB (2013)",
      "rank": 462,
      "benchmark": 42.4,
      "samples": 918,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7349/WDC-WD7500LPCX-80HWST0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MQ01ABF032 320GB",
      "rank": 463,
      "benchmark": 42.2,
      "samples": 5021,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5425/TOSHIBA-MQ01ABF032"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD15EVDS-73V9B1 1.5TB",
      "rank": 464,
      "benchmark": 42.2,
      "samples": 1715,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6540/WDC-WD15EVDS-73V9B1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS725032A7E630 320GB",
      "rank": 465,
      "benchmark": 42.2,
      "samples": 7847,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5008/HGST-HTS725032A7E630"
    },
    {
      "type": "HDD",
      "part_number": "WD10J31X",
      "brand": "WD",
      "model": "Blue SSHD 1TB (2015)",
      "rank": 466,
      "benchmark": 42.1,
      "samples": 771,
      "url": "https://hdd.userbenchmark.com/SpeedTest/31760/WDC-WD10J31X-00U3VT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "MMCRE28G8MXP-0VBL1 128GB",
      "rank": 467,
      "benchmark": 42.1,
      "samples": 46,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5433/SAMSUNG-MMCRE28G8MXP-0VBL1"
    },
    {
      "type": "HDD",
      "part_number": "HDP725050GLA360",
      "brand": "Hitachi",
      "model": "Deskstar P7K500 500GB",
      "rank": 468,
      "benchmark": 42.1,
      "samples": 38558,
      "url": "https://hdd.userbenchmark.com/SpeedTest/745/Hitachi-HDP725050GLA360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS725050A9A360 500GB",
      "rank": 469,
      "benchmark": 42,
      "samples": 1092,
      "url": "https://hdd.userbenchmark.com/SpeedTest/416/Hitachi-HTS725050A9A360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3250310AS 250GB",
      "rank": 470,
      "benchmark": 42,
      "samples": 11359,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1239/MAXTOR-STM3250310AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD75 00AARS-00Y5B 750GB",
      "rank": 471,
      "benchmark": 42,
      "samples": 2585,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1693/WDC-WD75-00AARS-00Y5B"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK5061GSY 500GB",
      "rank": 472,
      "benchmark": 41.9,
      "samples": 1975,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2829/TOSHIBA-MK5061GSY"
    },
    {
      "type": "HDD",
      "part_number": "WD7500AAKS",
      "brand": "WD",
      "model": "Blue 750GB (2008)",
      "rank": 473,
      "benchmark": 41.9,
      "samples": 3162,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2292/WDC-WD7500AAKS-00RBA0"
    },
    {
      "type": "HDD",
      "part_number": "HTS541010A9E680",
      "brand": "HGST",
      "model": "Travelstar 5K1000 2.5\" 1TB",
      "rank": 474,
      "benchmark": 41.8,
      "samples": 120046,
      "url": "https://hdd.userbenchmark.com/SpeedTest/72/HGST-HTS541010A9E680"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST500LM012 HN-M500MBB 500GB",
      "rank": 475,
      "benchmark": 41.8,
      "samples": 38093,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2104/ST500LM012-HN-M500MBB"
    },
    {
      "type": "HDD",
      "part_number": "WD3200BEKT",
      "brand": "WD",
      "model": "Black 2.5\" 320GB (2010)",
      "rank": 476,
      "benchmark": 41.6,
      "samples": 19204,
      "url": "https://hdd.userbenchmark.com/SpeedTest/35/WDC-WD3200BEKT-60V5T1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK5061GSYN 500GB",
      "rank": 477,
      "benchmark": 41.5,
      "samples": 5238,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2032/TOSHIBA-MK5061GSYN"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDP72505 500GB",
      "rank": 478,
      "benchmark": 41.5,
      "samples": 311,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5536/Hitachi-HDP72505"
    },
    {
      "type": "HDD",
      "part_number": "WD5000BPVX",
      "brand": "WD",
      "model": "Blue 2.5\" 500GB",
      "rank": 479,
      "benchmark": 41.5,
      "samples": 986,
      "url": "https://hdd.userbenchmark.com/SpeedTest/14364/WDC-WD5000BPVX-00JC3T0"
    },
    {
      "type": "HDD",
      "part_number": "WD5000AADS",
      "brand": "WD",
      "model": "Green 500GB (2009)",
      "rank": 480,
      "benchmark": 41.5,
      "samples": 54290,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1125/WDC-WD5000AADS-00S9B0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250310CS 250GB",
      "rank": 481,
      "benchmark": 41.5,
      "samples": 2704,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7048/ST3250310CS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250310AS 250GB",
      "rank": 482,
      "benchmark": 41.5,
      "samples": 29288,
      "url": "https://hdd.userbenchmark.com/SpeedTest/205/ST3250310AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10EAVS-00D7B1 1TB",
      "rank": 483,
      "benchmark": 41.5,
      "samples": 26496,
      "url": "https://hdd.userbenchmark.com/SpeedTest/256/WDC-WD10EAVS-00D7B1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545050A7E680 500GB",
      "rank": 484,
      "benchmark": 41.4,
      "samples": 51674,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2870/HGST-HTS545050A7E680"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS725032A9A360 320GB",
      "rank": 485,
      "benchmark": 41.4,
      "samples": 569,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5927/Hitachi-HTS725032A9A360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MQ01ABD064 640GB",
      "rank": 486,
      "benchmark": 41.4,
      "samples": 457,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8271/TOSHIBA-MQ01ABD064"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS725025A9A364 250GB",
      "rank": 487,
      "benchmark": 41.3,
      "samples": 2187,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6783/Hitachi-HTS725025A9A364"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160318AS 160GB",
      "rank": 488,
      "benchmark": 41.2,
      "samples": 13456,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1676/ST3160318AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST500LT032-1E9142 500GB",
      "rank": 489,
      "benchmark": 41.1,
      "samples": 1172,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12252/ST500LT032-1E9142"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK5056GSY 500GB",
      "rank": 490,
      "benchmark": 41.1,
      "samples": 2610,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2645/TOSHIBA-MK5056GSY"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545050A7E3800 500GB",
      "rank": 491,
      "benchmark": 41.1,
      "samples": 550,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6179/HGST-HTS545050A7E3800"
    },
    {
      "type": "HDD",
      "part_number": "WD3200BEKX",
      "brand": "WD",
      "model": "Black 2.5\" 320GB (2013)",
      "rank": 492,
      "benchmark": 40.8,
      "samples": 3264,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6418/WDC-WD3200BEKX-00B7WT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK7559GSXP 750GB",
      "rank": 493,
      "benchmark": 40.8,
      "samples": 5157,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3733/TOSHIBA-MK7559GSXP"
    },
    {
      "type": "HDD",
      "part_number": "HTS541075A9E680",
      "brand": "HGST",
      "model": "Travelstar 5K1000 2.5\" 750GB",
      "rank": 494,
      "benchmark": 40.8,
      "samples": 20896,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4988/HGST-HTS541075A9E680"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HN-M101M 1TB",
      "rank": 495,
      "benchmark": 40.7,
      "samples": 38,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5762/SAMSUNG-HN-M101M"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT721032SLA 320GB",
      "rank": 496,
      "benchmark": 40.7,
      "samples": 566,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6947/Hitachi-HDT721032SLA"
    },
    {
      "type": "HDD",
      "part_number": "WD1600AAJS",
      "brand": "WD",
      "model": "Blue 160GB (2007)",
      "rank": 497,
      "benchmark": 40.6,
      "samples": 45382,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1801/WDC-WD1600AAJS-00YZCA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST500LM011 HM501II 500GB",
      "rank": 498,
      "benchmark": 40.6,
      "samples": 131,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12328/ST500LM011-HM501II"
    },
    {
      "type": "HDD",
      "part_number": "WD7500AADS",
      "brand": "WD",
      "model": "Green 750GB (2009)",
      "rank": 499,
      "benchmark": 40.6,
      "samples": 4178,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3726/WDC-WD7500AADS-00M2B0"
    },
    {
      "type": "HDD",
      "part_number": "ST500LT012",
      "brand": "Seagate",
      "model": "Momentus Thin 5400.9 2.5\" 500GB",
      "rank": 500,
      "benchmark": 40.5,
      "samples": 152510,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1080/ST500LT012-9WS142"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST500LM0 ST500LM012 HN-M5 500GB",
      "rank": 501,
      "benchmark": 40.5,
      "samples": 188,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9065/ST500LM0-ST500LM012-HN-M5"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK2556GSY 250GB",
      "rank": 502,
      "benchmark": 40.5,
      "samples": 1204,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4588/TOSHIBA-MK2556GSY"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10S21X-24R1BT0-SSHD-8GB 1TB",
      "rank": 503,
      "benchmark": 40.5,
      "samples": 15549,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12991/WDC-WD10S21X-24R1BT0-SSHD-8GB"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "",
      "model": "OCZ-AGILITY3 60GB",
      "rank": 504,
      "benchmark": 40.4,
      "samples": 49,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2437/OCZ-AGILITY3"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD8088AADS-00M2B0 809GB",
      "rank": 505,
      "benchmark": 40.4,
      "samples": 596,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10079/WDC-WD8088AADS-00M2B0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT721016SLA380 160GB",
      "rank": 506,
      "benchmark": 40.4,
      "samples": 2748,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10627/Hitachi-HDT721016SLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10EACS-00ZJB0 1TB",
      "rank": 507,
      "benchmark": 40.2,
      "samples": 19670,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1758/WDC-WD10EACS-00ZJB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM100UI 1TB",
      "rank": 508,
      "benchmark": 40.1,
      "samples": 849,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5426/SAMSUNG-HM100UI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD251HJ 250GB",
      "rank": 509,
      "benchmark": 40.1,
      "samples": 2612,
      "url": "https://hdd.userbenchmark.com/SpeedTest/615/SAMSUNG-HD251HJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10EVCS-63E0B0 1TB",
      "rank": 510,
      "benchmark": 40.1,
      "samples": 314,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1803/WDC-WD10EVCS-63E0B0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD740ADFD-00NLR1 74GB",
      "rank": 511,
      "benchmark": 40,
      "samples": 942,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3613/WDC-WD740ADFD-00NLR1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD6400AACS-00G8B1 640GB",
      "rank": 512,
      "benchmark": 40,
      "samples": 6931,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2285/WDC-WD6400AACS-00G8B1"
    },
    {
      "type": "HDD",
      "part_number": "WD3200LPVT",
      "brand": "WD",
      "model": "Blue 2.5\" 320GB (2012)",
      "rank": 513,
      "benchmark": 40,
      "samples": 512,
      "url": "https://hdd.userbenchmark.com/SpeedTest/458/WDC-WD3200LPVT-22G33T0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD740ADFS-00SLR5 74GB",
      "rank": 514,
      "benchmark": 39.9,
      "samples": 44,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4376/WDC-WD740ADFS-00SLR5"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST750LM022 HN-M750MBB 750GB",
      "rank": 515,
      "benchmark": 39.9,
      "samples": 27363,
      "url": "https://hdd.userbenchmark.com/SpeedTest/434/ST750LM022-HN-M750MBB"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "",
      "model": "WL640GSA872 640GB",
      "rank": 516,
      "benchmark": 39.9,
      "samples": 20,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9895/WL640GSA872"
    },
    {
      "type": "HDD",
      "part_number": "ST250LT007",
      "brand": "Seagate",
      "model": "Momentus Thin 7200 2.5\" 250GB",
      "rank": 517,
      "benchmark": 39.9,
      "samples": 1129,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5055/ST250LT007-9ZV14C"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1500ADFD-00NLR1 150GB",
      "rank": 518,
      "benchmark": 39.9,
      "samples": 1615,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1836/WDC-WD1500ADFD-00NLR1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD103UI 1TB",
      "rank": 519,
      "benchmark": 39.7,
      "samples": 1304,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5608/SAMSUNG-HD103UI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK2561GSYN 250GB",
      "rank": 520,
      "benchmark": 39.7,
      "samples": 1890,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3299/TOSHIBA-MK2561GSYN"
    },
    {
      "type": "HDD",
      "part_number": "WD7500BPVT",
      "brand": "WD",
      "model": "Blue 2.5\" 750GB (2010)",
      "rank": 521,
      "benchmark": 39.6,
      "samples": 25017,
      "url": "https://hdd.userbenchmark.com/SpeedTest/160/WDC-WD7500BPVT-24HXZT3"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HN-M500MBB 500GB",
      "rank": 522,
      "benchmark": 39.6,
      "samples": 3596,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4774/SAMSUNG-HN-M500MBB"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5000AVDS-63U7B1 500GB",
      "rank": 523,
      "benchmark": 39.6,
      "samples": 15645,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3450/WDC-WD5000AVDS-63U7B1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MQ01ABD032 320GB",
      "rank": 524,
      "benchmark": 39.5,
      "samples": 7893,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3087/TOSHIBA-MQ01ABD032"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3320310CS 320GB",
      "rank": 525,
      "benchmark": 39.4,
      "samples": 3226,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10402/ST3320310CS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS723232A7A364 320GB",
      "rank": 526,
      "benchmark": 39.3,
      "samples": 9330,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2190/HITACHI-HTS723232A7A364"
    },
    {
      "type": "HDD",
      "part_number": "WD2500AAJS",
      "brand": "WD",
      "model": "Blue 250GB (2007)",
      "rank": 527,
      "benchmark": 39.3,
      "samples": 35141,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1491/WDC-WD2500AAJS-22L7A0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9250410AS 250GB",
      "rank": 528,
      "benchmark": 39.3,
      "samples": 6838,
      "url": "https://hdd.userbenchmark.com/SpeedTest/525/ST9250410AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD6400AAVS-00G9B1 640GB",
      "rank": 529,
      "benchmark": 39.3,
      "samples": 2920,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3045/WDC-WD6400AAVS-00G9B1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1500AHFD-00RAR5 150GB",
      "rank": 530,
      "benchmark": 39.1,
      "samples": 937,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1770/WDC-WD1500AHFD-00RAR5"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Excelstor",
      "model": "Technology J9250S 250GB",
      "rank": 531,
      "benchmark": 38.9,
      "samples": 1719,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5045/ExcelStor-Technology-J9250S"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600ADFS-60SLR2 160GB",
      "rank": 532,
      "benchmark": 38.9,
      "samples": 349,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10871/WDC-WD1600ADFS-60SLR2"
    },
    {
      "type": "HDD",
      "part_number": "WD3200LPCX",
      "brand": "WD",
      "model": "Blue 2.5\" 320GB (2013)",
      "rank": 533,
      "benchmark": 38.8,
      "samples": 566,
      "url": "https://hdd.userbenchmark.com/SpeedTest/14140/WDC-WD3200LPCX-24C6HT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721010KLA330 1TB",
      "rank": 534,
      "benchmark": 38.7,
      "samples": 8096,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2888/Hitachi-HDS721010KLA330"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK1059GSM 1TB",
      "rank": 535,
      "benchmark": 38.7,
      "samples": 3024,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1480/TOSHIBA-MK1059GSM"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK3265GSX H 320GB",
      "rank": 536,
      "benchmark": 38.6,
      "samples": 768,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6469/TOSHIBA-MK3265GSX-H"
    },
    {
      "type": "HDD",
      "part_number": "WD2500BEKT",
      "brand": "WD",
      "model": "Black 2.5\" 250GB (2010)",
      "rank": 537,
      "benchmark": 38.6,
      "samples": 7416,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4008/WDC-WD2500BEKT-00PVM"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HUA721010KLA330 1TB",
      "rank": 538,
      "benchmark": 38.6,
      "samples": 9726,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3043/Hitachi-HUA721010KLA330"
    },
    {
      "type": "HDD",
      "part_number": "HDP725025GLA380",
      "brand": "Hitachi",
      "model": "Deskstar P7K500 250GB",
      "rank": 539,
      "benchmark": 38.6,
      "samples": 8390,
      "url": "https://hdd.userbenchmark.com/SpeedTest/372/Hitachi-HDP725025GLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2500AVJS-63B6A0 250GB",
      "rank": 540,
      "benchmark": 38.5,
      "samples": 1428,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11610/WDC-WD2500AVJS-63B6A0"
    },
    {
      "type": "HDD",
      "part_number": "WD5000AAJS",
      "brand": "WD",
      "model": "Blue 500GB (2007)",
      "rank": 541,
      "benchmark": 38.5,
      "samples": 9084,
      "url": "https://hdd.userbenchmark.com/SpeedTest/610/WDC-WD5000AAJS-00YFA0"
    },
    {
      "type": "HDD",
      "part_number": "WD3200LPVX",
      "brand": "WD",
      "model": "Blue 2.5\" 320GB",
      "rank": 542,
      "benchmark": 38.3,
      "samples": 4673,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3840/WDC-WD3200LPVX-75V0TT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721075KLA330 750GB",
      "rank": 543,
      "benchmark": 38.3,
      "samples": 3488,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1370/Hitachi-HDS721075KLA330"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK6459GSX 640GB",
      "rank": 544,
      "benchmark": 38.3,
      "samples": 220,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1212/TOSHIBA-MK6459GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5000ABYS-01TNA0 500GB",
      "rank": 545,
      "benchmark": 38.3,
      "samples": 1110,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5181/WDC-WD5000ABYS-01TNA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD10TPVT-00H 1TB",
      "rank": 546,
      "benchmark": 38.2,
      "samples": 1503,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6175/WDC-WD10TPVT-00H"
    },
    {
      "type": "HDD",
      "part_number": "HTS547575A9E384",
      "brand": "Hitachi",
      "model": "Travelstar 5K750 750GB",
      "rank": 547,
      "benchmark": 38.1,
      "samples": 34947,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1367/Hitachi-HTS547575A9E384"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS54757 750GB",
      "rank": 548,
      "benchmark": 38.1,
      "samples": 263,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6112/Hitachi-HTS54757"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDP725050GLA 500GB",
      "rank": 549,
      "benchmark": 38.1,
      "samples": 1173,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4070/Hitachi-HDP725050GLA"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS725032A9A364 320GB",
      "rank": 550,
      "benchmark": 37.9,
      "samples": 6127,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3403/Hitachi-HTS725032A9A364"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST640LM001 HN-M640MBB 640GB",
      "rank": 551,
      "benchmark": 37.8,
      "samples": 955,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2212/ST640LM001-HN-M640MBB"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD200HJ 200GB",
      "rank": 552,
      "benchmark": 37.6,
      "samples": 2466,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1948/SAMSUNG-HD200HJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9750423AS 750GB",
      "rank": 553,
      "benchmark": 37.6,
      "samples": 2658,
      "url": "https://hdd.userbenchmark.com/SpeedTest/935/ST9750423AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT721025SLA380 250GB",
      "rank": 554,
      "benchmark": 37.5,
      "samples": 1682,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2907/Hitachi-HDT721025SLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK7575GSX 750GB",
      "rank": 555,
      "benchmark": 37.4,
      "samples": 6160,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2614/TOSHIBA-MK7575GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HN-M750MBB 750GB",
      "rank": 556,
      "benchmark": 37.3,
      "samples": 931,
      "url": "https://hdd.userbenchmark.com/SpeedTest/121/SAMSUNG-HN-M750MBB"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK6476GSXN 640GB",
      "rank": 557,
      "benchmark": 37.2,
      "samples": 583,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6224/TOSHIBA-MK6476GSXN"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS54505 500GB",
      "rank": 558,
      "benchmark": 36.9,
      "samples": 497,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1400/Hitachi-HTS54505"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD800ADFS-75SLR2 80GB",
      "rank": 559,
      "benchmark": 36.9,
      "samples": 255,
      "url": "https://hdd.userbenchmark.com/SpeedTest/268/WDC-WD800ADFS-75SLR2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9320421AS 320GB",
      "rank": 560,
      "benchmark": 36.9,
      "samples": 879,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6523/ST9320421AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "ST3320630NS 324GB",
      "rank": 561,
      "benchmark": 36.9,
      "samples": 70,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9541/Maxtor--ST3320630NS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3200BJKT-00F4T0 320GB",
      "rank": 562,
      "benchmark": 36.8,
      "samples": 572,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6337/WDC-WD3200BJKT-00F4T0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9320423AS 320GB",
      "rank": 563,
      "benchmark": 36.8,
      "samples": 10447,
      "url": "https://hdd.userbenchmark.com/SpeedTest/131/ST9320423AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5000AVVS-63H0B1 500GB",
      "rank": 564,
      "benchmark": 36.6,
      "samples": 8359,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2986/WDC-WD5000AVVS-63H0B1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5000AACS-00ZUB0 500GB",
      "rank": 565,
      "benchmark": 36.5,
      "samples": 18692,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1623/WDC-WD5000AACS-00ZUB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM641JI 640GB",
      "rank": 566,
      "benchmark": 36.5,
      "samples": 8398,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2867/SAMSUNG-HM641JI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST1000LM010-9YH146 1TB",
      "rank": 567,
      "benchmark": 36.5,
      "samples": 2140,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4168/ST1000LM010-9YH146"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3500630AS 500GB",
      "rank": 568,
      "benchmark": 36.4,
      "samples": 3071,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1780/MAXTOR-STM3500630AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9320423ASG 320GB",
      "rank": 569,
      "benchmark": 36.4,
      "samples": 317,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7583/ST9320423ASG"
    },
    {
      "type": "HDD",
      "part_number": "HDP725032GLA360",
      "brand": "Hitachi",
      "model": "Deskstar P7K500 320GB",
      "rank": 570,
      "benchmark": 36.4,
      "samples": 5144,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3494/Hitachi-HDP725032GLA360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST640LM000 HM641JI 640GB",
      "rank": 571,
      "benchmark": 36.3,
      "samples": 1134,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9709/ST640LM000-HM641JI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDP725050GLAT80 500GB",
      "rank": 572,
      "benchmark": 36.2,
      "samples": 140,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2621/Hitachi-HDP725050GLAT80"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9250421ASG 250GB",
      "rank": 573,
      "benchmark": 36,
      "samples": 277,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6246/ST9250421ASG"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST1000LM002-9VQ14L 1TB",
      "rank": 574,
      "benchmark": 36,
      "samples": 264,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9979/ST1000LM002-9VQ14L"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721032CLA362 320GB",
      "rank": 575,
      "benchmark": 35.9,
      "samples": 9388,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3419/Hitachi-HDS721032CLA362"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5000AAVS-00ZTB0 500GB",
      "rank": 576,
      "benchmark": 35.8,
      "samples": 12289,
      "url": "https://hdd.userbenchmark.com/SpeedTest/947/WDC-WD5000AAVS-00ZTB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "Touro Mobile 3.0 1TB",
      "rank": 577,
      "benchmark": 35.8,
      "samples": 800,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3230/HGST-Touro-Mobile-30"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3250820AS 250GB",
      "rank": 578,
      "benchmark": 35.7,
      "samples": 2505,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1310/MAXTOR-STM3250820AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD7500AACS-00D6B0 750GB",
      "rank": 579,
      "benchmark": 35.6,
      "samples": 3942,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3233/WDC-WD7500AACS-00D6B0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5001ABYS-01YNA0 500GB",
      "rank": 580,
      "benchmark": 35.6,
      "samples": 905,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5765/WDC-WD5001ABYS-01YNA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3360320AS 360GB",
      "rank": 581,
      "benchmark": 35.5,
      "samples": 5303,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1850/ST3360320AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "",
      "model": "GB0500C4413 500GB",
      "rank": 582,
      "benchmark": 35.5,
      "samples": 416,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1828/GB0500C4413"
    },
    {
      "type": "HDD",
      "part_number": "WD5000BPVT",
      "brand": "WD",
      "model": "Blue 2.5\" 500GB (2010)",
      "rank": 583,
      "benchmark": 35.4,
      "samples": 27302,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2839/WDC-WD5000BPVT-75HXZT3"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK1059GSMP 1TB",
      "rank": 584,
      "benchmark": 35.3,
      "samples": 1772,
      "url": "https://hdd.userbenchmark.com/SpeedTest/604/TOSHIBA-MK1059GSMP"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500630AS 500GB",
      "rank": 585,
      "benchmark": 35.3,
      "samples": 21701,
      "url": "https://hdd.userbenchmark.com/SpeedTest/20/ST3500630AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS547564A9E384 640GB",
      "rank": 586,
      "benchmark": 35.3,
      "samples": 12419,
      "url": "https://hdd.userbenchmark.com/SpeedTest/953/Hitachi-HTS547564A9E384"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK6465GSX 640GB",
      "rank": 587,
      "benchmark": 35.2,
      "samples": 3695,
      "url": "https://hdd.userbenchmark.com/SpeedTest/994/TOSHIBA-MK6465GSX"
    },
    {
      "type": "HDD",
      "part_number": "WD4000AAKS",
      "brand": "WD",
      "model": "Blue 400GB (2008)",
      "rank": 588,
      "benchmark": 35.2,
      "samples": 1952,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3883/WDC-WD4000AAKS-00YGA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK3256GSY 320GB",
      "rank": 589,
      "benchmark": 35.2,
      "samples": 1418,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5782/TOSHIBA-MK3256GSY"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600BJKT-75F4T0 160GB",
      "rank": 590,
      "benchmark": 35.2,
      "samples": 811,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5905/WDC-WD1600BJKT-75F4T0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9320421ASG 320GB",
      "rank": 591,
      "benchmark": 35.2,
      "samples": 302,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10280/ST9320421ASG"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3320820AS 320GB",
      "rank": 592,
      "benchmark": 35.1,
      "samples": 3996,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1541/MAXTOR-STM3320820AS"
    },
    {
      "type": "HDD",
      "part_number": "HDP725040GLA360",
      "brand": "Hitachi",
      "model": "Deskstar P7K500 400GB",
      "rank": 593,
      "benchmark": 35.1,
      "samples": 616,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5788/Hitachi-HDP725040GLA360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3750640AS 750GB",
      "rank": 594,
      "benchmark": 35,
      "samples": 6206,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1206/ST3750640AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1601ABYS-01C0A0 165GB",
      "rank": 595,
      "benchmark": 35,
      "samples": 248,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6509/WDC-WD1601ABYS-01C0A0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250820NS 250GB",
      "rank": 596,
      "benchmark": 35,
      "samples": 232,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11777/ST3250820NS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500830AS 500GB",
      "rank": 597,
      "benchmark": 35,
      "samples": 6551,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3724/ST3500830AS"
    },
    {
      "type": "HDD",
      "part_number": "HD501LJ",
      "brand": "Samsung",
      "model": "Spinpoint T166 500GB",
      "rank": 598,
      "benchmark": 35,
      "samples": 35797,
      "url": "https://hdd.userbenchmark.com/SpeedTest/946/SAMSUNG-HD501LJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3320620AS 320GB",
      "rank": 599,
      "benchmark": 34.9,
      "samples": 1715,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3702/MAXTOR-STM3320620AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM321HI 320GB",
      "rank": 600,
      "benchmark": 34.8,
      "samples": 9462,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2705/SAMSUNG-HM321HI"
    },
    {
      "type": "HDD",
      "part_number": "WD1600BPVT",
      "brand": "WD",
      "model": "Blue 2.5\" 160GB (2010)",
      "rank": 601,
      "benchmark": 34.8,
      "samples": 256,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4951/WDC-WD1600BPVT-22ZEST0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK6465GSXN 640GB",
      "rank": 602,
      "benchmark": 34.8,
      "samples": 1454,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1267/TOSHIBA-MK6465GSXN"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9640320AS 640GB",
      "rank": 603,
      "benchmark": 34.8,
      "samples": 4382,
      "url": "https://hdd.userbenchmark.com/SpeedTest/492/ST9640320AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM501II 500GB",
      "rank": 604,
      "benchmark": 34.7,
      "samples": 920,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8100/SAMSUNG-HM501II"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3320620NS 320GB",
      "rank": 605,
      "benchmark": 34.7,
      "samples": 841,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5481/ST3320620NS"
    },
    {
      "type": "HDD",
      "part_number": "WD6400BPVT",
      "brand": "WD",
      "model": "Blue 2.5\" 640GB (2010)",
      "rank": 606,
      "benchmark": 34.6,
      "samples": 9748,
      "url": "https://hdd.userbenchmark.com/SpeedTest/799/WDC-WD6400BPVT-80HXZT1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1000FYPS-01ZKB0 1TB",
      "rank": 607,
      "benchmark": 34.6,
      "samples": 1282,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9121/WDC-WD1000FYPS-01ZKB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3201ABYS-01B9A0 320GB",
      "rank": 608,
      "benchmark": 34.6,
      "samples": 370,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6707/WDC-WD3201ABYS-01B9A0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250620AS 250GB",
      "rank": 609,
      "benchmark": 34.6,
      "samples": 5037,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2769/ST3250620AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3300620AS 300GB",
      "rank": 610,
      "benchmark": 34.6,
      "samples": 458,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6252/ST3300620AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM500JI 500GB",
      "rank": 611,
      "benchmark": 34.5,
      "samples": 7835,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1276/SAMSUNG-HM500JI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3320820AS 320GB",
      "rank": 612,
      "benchmark": 34.4,
      "samples": 12401,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1469/ST3320820AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK1665GSX 160GB",
      "rank": 613,
      "benchmark": 34.4,
      "samples": 1036,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9119/TOSHIBA-MK1665GSX"
    },
    {
      "type": "HDD",
      "part_number": "ST3320620AS",
      "brand": "Seagate",
      "model": "Barracuda 7200.10 320GB",
      "rank": 614,
      "benchmark": 34.3,
      "samples": 30431,
      "url": "https://hdd.userbenchmark.com/SpeedTest/257/ST3320620AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD7500AYPS-01ZKB0 750GB",
      "rank": 615,
      "benchmark": 34.3,
      "samples": 172,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7309/WDC-WD7500AYPS-01ZKB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250620NS 250GB",
      "rank": 616,
      "benchmark": 34.2,
      "samples": 1232,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3394/ST3250620NS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD321KJ 320GB",
      "rank": 617,
      "benchmark": 34.1,
      "samples": 8256,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1934/SAMSUNG-HD321KJ"
    },
    {
      "type": "HDD",
      "part_number": "WD6400BEVT",
      "brand": "WD",
      "model": "Blue 2.5\" 640GB (2009)",
      "rank": 618,
      "benchmark": 34.1,
      "samples": 5073,
      "url": "https://hdd.userbenchmark.com/SpeedTest/503/WDC-WD6400BEVT-22A0RT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9160411ASG 160GB",
      "rank": 619,
      "benchmark": 34.1,
      "samples": 766,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1633/ST9160411ASG"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9640423AS 640GB",
      "rank": 620,
      "benchmark": 34.1,
      "samples": 1247,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1709/ST9640423AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3400620AS 400GB",
      "rank": 621,
      "benchmark": 34.1,
      "samples": 2690,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5340/ST3400620AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500630NS 500GB",
      "rank": 622,
      "benchmark": 34,
      "samples": 3762,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1456/ST3500630NS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3750640NS 750GB",
      "rank": 623,
      "benchmark": 34,
      "samples": 9774,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4285/ST3750640NS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3750840AS 750GB",
      "rank": 624,
      "benchmark": 34,
      "samples": 673,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3075/ST3750840AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD320KJ 320GB",
      "rank": 625,
      "benchmark": 34,
      "samples": 2859,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4162/SAMSUNG-HD320KJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600AVJS-63SWA0 160GB",
      "rank": 626,
      "benchmark": 34,
      "samples": 1103,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2491/WDC-WD1600AVJS-63SWA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3400820AS 400GB",
      "rank": 627,
      "benchmark": 33.9,
      "samples": 748,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3144/ST3400820AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HCC547550A9E380 500GB",
      "rank": 628,
      "benchmark": 33.9,
      "samples": 504,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8947/Hitachi-HCC547550A9E380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK3265GSX 320GB",
      "rank": 629,
      "benchmark": 33.9,
      "samples": 4888,
      "url": "https://hdd.userbenchmark.com/SpeedTest/382/TOSHIBA-MK3265GSX"
    },
    {
      "type": "HDD",
      "part_number": "WD800AAJS",
      "brand": "WD",
      "model": "Blue 80GB (2007)",
      "rank": 630,
      "benchmark": 33.8,
      "samples": 3218,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1866/WDC-WD800AAJS-60B4A0"
    },
    {
      "type": "HDD",
      "part_number": "WD1600BEKT",
      "brand": "WD",
      "model": "Black 2.5\" 160GB (2010)",
      "rank": 631,
      "benchmark": 33.8,
      "samples": 1897,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2369/WDC-WD1600BEKT-60V5T1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS723232L9SA60 320GB",
      "rank": 632,
      "benchmark": 33.8,
      "samples": 350,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6838/HITACHI-HTS723232L9SA60"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK6475GS 640GB",
      "rank": 633,
      "benchmark": 33.8,
      "samples": 86,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3610/TOSHIBA-MK6475GS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HCS545050GLA380 500GB",
      "rank": 634,
      "benchmark": 33.7,
      "samples": 279,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2081/Hitachi-HCS545050GLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Excelstor",
      "model": "Technology V8160 165GB",
      "rank": 635,
      "benchmark": 33.7,
      "samples": 24,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6697/ExcelStor-Technology-V8160"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9160412ASG 160GB",
      "rank": 636,
      "benchmark": 33.7,
      "samples": 605,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4331/ST9160412ASG"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3320620AS 320GB",
      "rank": 637,
      "benchmark": 33.7,
      "samples": 12,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7871/MAXTOR--STM3320620AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "S TM3320820AS 320GB",
      "rank": 638,
      "benchmark": 33.7,
      "samples": 246,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2573/MAXTOR-S-TM3320820AS"
    },
    {
      "type": "HDD",
      "part_number": "WD4000AAJS",
      "brand": "WD",
      "model": "Blue 400GB (2007)",
      "rank": 639,
      "benchmark": 33.6,
      "samples": 1589,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1532/WDC-WD4000AAJS-00YFA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3300820SCE 300GB",
      "rank": 640,
      "benchmark": 33.6,
      "samples": 629,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1944/ST3300820SCE"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250820AS 250GB",
      "rank": 641,
      "benchmark": 33.6,
      "samples": 12596,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1655/ST3250820AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM400JI 400GB",
      "rank": 642,
      "benchmark": 33.5,
      "samples": 188,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10816/SAMSUNG-HM400JI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM251HI 250GB",
      "rank": 643,
      "benchmark": 33.4,
      "samples": 777,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6909/SAMSUNG-HM251HI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3400620NS 400GB",
      "rank": 644,
      "benchmark": 33.3,
      "samples": 658,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9788/ST3400620NS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5000KS-00MNB0 500GB",
      "rank": 645,
      "benchmark": 33.2,
      "samples": 1003,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2813/WDC-WD5000KS-00MNB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT725050VLA360 500GB",
      "rank": 646,
      "benchmark": 33,
      "samples": 3046,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1926/Hitachi-HDT725050VLA360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5000YS-18MPB1 500GB",
      "rank": 647,
      "benchmark": 32.9,
      "samples": 964,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12608/WDC-WD5000YS-18MPB1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT725050VLA380 500GB",
      "rank": 648,
      "benchmark": 32.9,
      "samples": 1271,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2605/Hitachi-HDT725050VLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3200AVVS-63L2B0 320GB",
      "rank": 649,
      "benchmark": 32.8,
      "samples": 6904,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5116/WDC-WD3200AVVS-63L2B0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS547550A9E384 500GB",
      "rank": 650,
      "benchmark": 32.8,
      "samples": 22388,
      "url": "https://hdd.userbenchmark.com/SpeedTest/938/Hitachi-HTS547550A9E384"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK6475GSX 640GB",
      "rank": 651,
      "benchmark": 32.8,
      "samples": 7422,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3809/TOSHIBA-MK6475GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT725032VLA360 320GB",
      "rank": 652,
      "benchmark": 32.7,
      "samples": 3965,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1265/Hitachi-HDT725032VLA360"
    },
    {
      "type": "HDD",
      "part_number": "ST320LT012",
      "brand": "Seagate",
      "model": "Momentus Thin 5400.9 2.5\" 320GB",
      "rank": 653,
      "benchmark": 32.6,
      "samples": 6708,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3598/ST320LT012-9WS14C"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD740GD-00FLA2 74GB",
      "rank": 654,
      "benchmark": 32.6,
      "samples": 1240,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3765/WDC-WD740GD-00FLA2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HCS5C3232SLA380 320GB",
      "rank": 655,
      "benchmark": 32.6,
      "samples": 808,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8115/Hitachi-HCS5C3232SLA380"
    },
    {
      "type": "HDD",
      "part_number": "WD3200BPVT",
      "brand": "WD",
      "model": "Blue 2.5\" 320GB (2010)",
      "rank": 656,
      "benchmark": 32.6,
      "samples": 33152,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2595/WDC-WD3200BPVT-75JJ5T0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT725032VLA380 320GB",
      "rank": 657,
      "benchmark": 32.5,
      "samples": 3694,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2691/Hitachi-HDT725032VLA380"
    },
    {
      "type": "HDD",
      "part_number": "ST320LT020",
      "brand": "Seagate",
      "model": "Momentus Thin 5400 2.5\" 320GB",
      "rank": 658,
      "benchmark": 32.5,
      "samples": 7777,
      "url": "https://hdd.userbenchmark.com/SpeedTest/855/ST320LT020-9YG142"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9160412AS 160GB",
      "rank": 659,
      "benchmark": 32.5,
      "samples": 2085,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2544/ST9160412AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MJA2500BH G2 500GB",
      "rank": 660,
      "benchmark": 32.5,
      "samples": 1413,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7426/FUJITSU-MJA2500BH-G2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS723232L9A360 320GB",
      "rank": 661,
      "benchmark": 32.4,
      "samples": 1259,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6590/Hitachi-HTS723232L9A360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST320LM001 HN-M320MBB 320GB",
      "rank": 662,
      "benchmark": 32.4,
      "samples": 5137,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5867/ST320LM001-HN-M320MBB"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM250HI 250GB",
      "rank": 663,
      "benchmark": 32.3,
      "samples": 4655,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2355/SAMSUNG-HM250HI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS723225L9A362 250GB",
      "rank": 664,
      "benchmark": 32.3,
      "samples": 150,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4098/Hitachi-HTS723225L9A362"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK6476GSX 640GB",
      "rank": 665,
      "benchmark": 32.3,
      "samples": 3432,
      "url": "https://hdd.userbenchmark.com/SpeedTest/795/TOSHIBA-MK6476GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD401LJ 400GB",
      "rank": 666,
      "benchmark": 32.2,
      "samples": 1570,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1229/SAMSUNG-HD401LJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD753LI 750GB",
      "rank": 667,
      "benchmark": 32.2,
      "samples": 50,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10511/SAMSUNG-HD753LI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3200820AS 200GB",
      "rank": 668,
      "benchmark": 32.1,
      "samples": 1365,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2833/ST3200820AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS54755 500GB",
      "rank": 669,
      "benchmark": 32.1,
      "samples": 181,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1555/Hitachi-HTS54755"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK3276GSX 320GB",
      "rank": 670,
      "benchmark": 32,
      "samples": 4268,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7284/TOSHIBA-MK3276GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545032B9SA02 320GB",
      "rank": 671,
      "benchmark": 32,
      "samples": 444,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11306/Hitachi-HTS545032B9SA02"
    },
    {
      "type": "HDD",
      "part_number": "HDP725016GLA380",
      "brand": "Hitachi",
      "model": "Deskstar P7K500 160GB",
      "rank": 672,
      "benchmark": 31.9,
      "samples": 2329,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3051/Hitachi-HDP725016GLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK6459GSXP 640GB",
      "rank": 673,
      "benchmark": 31.8,
      "samples": 1988,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2337/TOSHIBA-MK6459GSXP"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS723216L9SA60 160GB",
      "rank": 674,
      "benchmark": 31.8,
      "samples": 649,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1119/HITACHI-HTS723216L9SA60"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3250820A 250GB",
      "rank": 675,
      "benchmark": 31.7,
      "samples": 301,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9658/MAXTOR-STM3250820A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD161HJ 160GB",
      "rank": 676,
      "benchmark": 31.7,
      "samples": 19951,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1496/SAMSUNG-HD161HJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK5059GSXP 500GB",
      "rank": 677,
      "benchmark": 31.7,
      "samples": 4668,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2764/TOSHIBA-MK5059GSXP"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3160811AS 160GB",
      "rank": 678,
      "benchmark": 31.7,
      "samples": 426,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10214/MAXTOR-STM3160811AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6V300F0 300GB",
      "rank": 679,
      "benchmark": 31.7,
      "samples": 1245,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2286/Maxtor-6V300F0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2500AAJB-00J3A0 250GB",
      "rank": 680,
      "benchmark": 31.6,
      "samples": 604,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2580/WDC-WD2500AAJB-00J3A0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9250315AS 250GB",
      "rank": 681,
      "benchmark": 31.6,
      "samples": 10775,
      "url": "https://hdd.userbenchmark.com/SpeedTest/624/ST9250315AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3200AAVS-00ZTB0 320GB",
      "rank": 682,
      "benchmark": 31.6,
      "samples": 495,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5519/WDC-WD3200AAVS-00ZTB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK3259GSXP 320GB",
      "rank": 683,
      "benchmark": 31.5,
      "samples": 2341,
      "url": "https://hdd.userbenchmark.com/SpeedTest/705/TOSHIBA-MK3259GSXP"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS723216L9A360 160GB",
      "rank": 684,
      "benchmark": 31.5,
      "samples": 600,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5339/Hitachi-HTS723216L9A360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545050B9A300 500GB",
      "rank": 685,
      "benchmark": 31.4,
      "samples": 19778,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1634/Hitachi-HTS545050B9A300"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MJA2250BH G2 250GB",
      "rank": 686,
      "benchmark": 31.4,
      "samples": 925,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4346/FUJITSU-MJA2250BH-G2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "7V300F0 300GB",
      "rank": 687,
      "benchmark": 31.3,
      "samples": 176,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8427/Maxtor-7V300F0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS543216A7A384 160GB",
      "rank": 688,
      "benchmark": 31.3,
      "samples": 748,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6327/Hitachi-HTS543216A7A384"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST332082 0SCE 320GB",
      "rank": 689,
      "benchmark": 31.3,
      "samples": 84,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4800/ST332082-0SCE"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT725032VLA 320GB",
      "rank": 690,
      "benchmark": 31.3,
      "samples": 430,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10037/Hitachi-HDT725032VLA"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD160HJ 160GB",
      "rank": 691,
      "benchmark": 31.2,
      "samples": 1439,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5876/SAMSUNG-HD160HJ"
    },
    {
      "type": "HDD",
      "part_number": "ST9500325AS",
      "brand": "Seagate",
      "model": "Momentus 5400.6 2.5\" 500GB",
      "rank": 692,
      "benchmark": 31.2,
      "samples": 70561,
      "url": "https://hdd.userbenchmark.com/SpeedTest/166/ST9500325AS"
    },
    {
      "type": "HDD",
      "part_number": "WD5000BEVT",
      "brand": "WD",
      "model": "Blue 2.5\" 500GB (2009)",
      "rank": 693,
      "benchmark": 31.1,
      "samples": 25080,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1943/WDC-WD5000BEVT-22A0RT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545032A7E380 320GB",
      "rank": 694,
      "benchmark": 31,
      "samples": 3574,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1588/Hitachi-HTS545032A7E380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600AABS-00PRA0 160GB",
      "rank": 695,
      "benchmark": 31,
      "samples": 7065,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1353/WDC-WD1600AABS-00PRA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545050B9SA00 500GB",
      "rank": 696,
      "benchmark": 31,
      "samples": 1142,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6645/Hitachi-HTS545050B9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HUA721075KLA 750GB",
      "rank": 697,
      "benchmark": 31,
      "samples": 22,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6886/Hitachi-HUA721075KLA"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721616PLA380 165GB",
      "rank": 698,
      "benchmark": 30.9,
      "samples": 3252,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3895/Hitachi-HDS721616PLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT725040VLA360 400GB",
      "rank": 699,
      "benchmark": 30.9,
      "samples": 1313,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1719/Hitachi-HDT725040VLA360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5000AAKB-00H8A0 500GB",
      "rank": 700,
      "benchmark": 30.9,
      "samples": 1026,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4691/WDC-WD5000AAKB-00H8A0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160812AS 160GB",
      "rank": 701,
      "benchmark": 30.9,
      "samples": 9116,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1935/ST3160812AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545050KTA300 500GB",
      "rank": 702,
      "benchmark": 30.8,
      "samples": 203,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9294/Hitachi-HTS545050KTA300"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3160815AS 160GB",
      "rank": 703,
      "benchmark": 30.8,
      "samples": 2146,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6381/MAXTOR-STM3160815AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "7H500F0 500GB",
      "rank": 704,
      "benchmark": 30.8,
      "samples": 846,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3697/Maxtor-7H500F0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK5055GSX 500GB",
      "rank": 705,
      "benchmark": 30.7,
      "samples": 3919,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2029/TOSHIBA-MK5055GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3200820AS 200GB",
      "rank": 706,
      "benchmark": 30.7,
      "samples": 255,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4619/MAXTOR-STM3200820AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK2576GSX 250GB",
      "rank": 707,
      "benchmark": 30.7,
      "samples": 730,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1627/TOSHIBA-MK2576GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK3275GSX 320GB",
      "rank": 708,
      "benchmark": 30.7,
      "samples": 3714,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6320/TOSHIBA-MK3275GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3320820SCE 320GB",
      "rank": 709,
      "benchmark": 30.7,
      "samples": 931,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7203/ST3320820SCE"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK5075GSX 500GB",
      "rank": 710,
      "benchmark": 30.7,
      "samples": 4777,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4046/TOSHIBA-MK5075GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD403LJ 400GB",
      "rank": 711,
      "benchmark": 30.6,
      "samples": 3386,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3800/SAMSUNG-HD403LJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6V320F0 320GB",
      "rank": 712,
      "benchmark": 30.6,
      "samples": 554,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7185/Maxtor-6V320F0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160815SV 160GB",
      "rank": 713,
      "benchmark": 30.6,
      "samples": 569,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10181/ST3160815SV"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250620A 250GB",
      "rank": 714,
      "benchmark": 30.5,
      "samples": 443,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8803/ST3250620A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD082GJ 80GB",
      "rank": 715,
      "benchmark": 30.5,
      "samples": 1423,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5654/SAMSUNG-HD082GJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP2504C 250GB",
      "rank": 716,
      "benchmark": 30.5,
      "samples": 12239,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2057/SAMSUNG-SP2504C"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3300822AS 300GB",
      "rank": 717,
      "benchmark": 30.5,
      "samples": 406,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4225/ST3300822AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD400LJ 400GB",
      "rank": 718,
      "benchmark": 30.4,
      "samples": 1302,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4474/SAMSUNG-HD400LJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545025B9A300 250GB",
      "rank": 719,
      "benchmark": 30.4,
      "samples": 7426,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1535/Hitachi-HTS545025B9A300"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500830A 500GB",
      "rank": 720,
      "benchmark": 30.4,
      "samples": 81,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4792/ST3500830A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250820A 250GB",
      "rank": 721,
      "benchmark": 30.4,
      "samples": 568,
      "url": "https://hdd.userbenchmark.com/SpeedTest/709/ST3250820A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160815AS 160GB",
      "rank": 722,
      "benchmark": 30.3,
      "samples": 26116,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1990/ST3160815AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6V080E0 82GB",
      "rank": 723,
      "benchmark": 30.3,
      "samples": 670,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2524/Maxtor-6V080E0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721616PLA380 160GB",
      "rank": 724,
      "benchmark": 30.3,
      "samples": 7821,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2578/Hitachi-HDS721616PLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK5076GSX 500GB",
      "rank": 725,
      "benchmark": 30.3,
      "samples": 6071,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2073/TOSHIBA-MK5076GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3320820A 320GB",
      "rank": 726,
      "benchmark": 30.3,
      "samples": 205,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5392/MAXTOR-STM3320820A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721680PLA380 82GB",
      "rank": 727,
      "benchmark": 30.2,
      "samples": 793,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7255/Hitachi-HDS721680PLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS543232A7A384 320GB",
      "rank": 728,
      "benchmark": 30.2,
      "samples": 13388,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4638/HITACHI-HTS543232A7A384"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3808110AS 80GB",
      "rank": 729,
      "benchmark": 30.2,
      "samples": 3923,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4753/ST3808110AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD5000AAJB-00YRA0 500GB",
      "rank": 730,
      "benchmark": 30.1,
      "samples": 117,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6902/WDC-WD5000AAJB-00YRA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD081GJ 80GB",
      "rank": 731,
      "benchmark": 30.1,
      "samples": 826,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4836/SAMSUNG-HD081GJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM320II 320GB",
      "rank": 732,
      "benchmark": 30.1,
      "samples": 1967,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8571/SAMSUNG-HM320II"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3200AAJB-00J3A0 320GB",
      "rank": 733,
      "benchmark": 30,
      "samples": 1251,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2623/WDC-WD3200AAJB-00J3A0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3802110AS 80GB",
      "rank": 734,
      "benchmark": 30,
      "samples": 338,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2586/ST3802110AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK5076GSXN 500GB",
      "rank": 735,
      "benchmark": 30,
      "samples": 523,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11398/TOSHIBA-MK5076GSXN"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160811AS 160GB",
      "rank": 736,
      "benchmark": 30,
      "samples": 4734,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3594/ST3160811AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6V250F0 251GB",
      "rank": 737,
      "benchmark": 30,
      "samples": 1224,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2361/Maxtor-6V250F0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600AVBS-63SVA0 160GB",
      "rank": 738,
      "benchmark": 30,
      "samples": 436,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3472/WDC-WD1600AVBS-63SVA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHZ2160BJ FFS G2 160GB",
      "rank": 739,
      "benchmark": 29.9,
      "samples": 106,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3938/FUJITSU-MHZ2160BJ-FFS-G2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3200KS-00PFB0 320GB",
      "rank": 740,
      "benchmark": 29.9,
      "samples": 2601,
      "url": "https://hdd.userbenchmark.com/SpeedTest/676/WDC-WD3200KS-00PFB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK2555GSX 250GB",
      "rank": 741,
      "benchmark": 29.8,
      "samples": 4051,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2698/TOSHIBA-MK2555GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS723225L9A360 250GB",
      "rank": 742,
      "benchmark": 29.8,
      "samples": 521,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4544/Hitachi-HTS723225L9A360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500630A 500GB",
      "rank": 743,
      "benchmark": 29.8,
      "samples": 586,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6609/ST3500630A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3160211AS 160GB",
      "rank": 744,
      "benchmark": 29.8,
      "samples": 1334,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8177/MAXTOR-STM3160211AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3400832AS 400GB",
      "rank": 745,
      "benchmark": 29.7,
      "samples": 1571,
      "url": "https://hdd.userbenchmark.com/SpeedTest/780/ST3400832AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM380215AS 80GB",
      "rank": 746,
      "benchmark": 29.6,
      "samples": 1748,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2696/MAXTOR-STM380215AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST380215AS 80GB",
      "rank": 747,
      "benchmark": 29.6,
      "samples": 2207,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6286/ST380215AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160215AS 160GB",
      "rank": 748,
      "benchmark": 29.6,
      "samples": 4656,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3966/ST3160215AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Excelstor",
      "model": "Technology J8160S 160GB",
      "rank": 749,
      "benchmark": 29.6,
      "samples": 1065,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11714/ExcelStor-Technology-J8160S"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250823AS 250GB",
      "rank": 750,
      "benchmark": 29.6,
      "samples": 3850,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2690/ST3250823AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250824AS 250GB",
      "rank": 751,
      "benchmark": 29.5,
      "samples": 3935,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2131/ST3250824AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3300622AS 300GB",
      "rank": 752,
      "benchmark": 29.5,
      "samples": 656,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2993/ST3300622AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT722525DLA380 250GB",
      "rank": 753,
      "benchmark": 29.4,
      "samples": 3207,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1390/HDT722525DLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3200JS-63PDB1 320GB",
      "rank": 754,
      "benchmark": 29.4,
      "samples": 2495,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4071/WDC-WD3200JS-63PDB1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160211AS 160GB",
      "rank": 755,
      "benchmark": 29.3,
      "samples": 1050,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7276/ST3160211AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6V200E0 204GB",
      "rank": 756,
      "benchmark": 29.3,
      "samples": 1377,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1837/Maxtor-6V200E0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK5065GSXN 500GB",
      "rank": 757,
      "benchmark": 29.3,
      "samples": 1691,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5561/TOSHIBA-MK5065GSXN"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK5055GSXN 500GB",
      "rank": 758,
      "benchmark": 29.3,
      "samples": 693,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1798/TOSHIBA-MK5055GSXN"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6V160E0 160GB",
      "rank": 759,
      "benchmark": 29.3,
      "samples": 1593,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4072/Maxtor-6V160E0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MJA2320BH G2 320GB",
      "rank": 760,
      "benchmark": 29.3,
      "samples": 977,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3975/FUJITSU-MJA2320BH-G2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK5065GSX 500GB",
      "rank": 761,
      "benchmark": 29.2,
      "samples": 3825,
      "url": "https://hdd.userbenchmark.com/SpeedTest/252/TOSHIBA-MK5065GSX"
    },
    {
      "type": "HDD",
      "part_number": "WD2500BEVT",
      "brand": "WD",
      "model": "Blue 2.5\" 250GB (2009)",
      "rank": 762,
      "benchmark": 29.2,
      "samples": 14912,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2695/WDC-WD2500BEVT-00ZCT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3400633AS 400GB",
      "rank": 763,
      "benchmark": 29.1,
      "samples": 428,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6724/ST3400633AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST380811AS 80GB",
      "rank": 764,
      "benchmark": 29.1,
      "samples": 2375,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2147/ST380811AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3200JD-22K 320GB",
      "rank": 765,
      "benchmark": 29,
      "samples": 674,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6647/WDC-WD3200JD-22K"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3200YS-01PGB0 320GB",
      "rank": 766,
      "benchmark": 29,
      "samples": 998,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3238/WDC-WD3200YS-01PGB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L160M0 160GB",
      "rank": 767,
      "benchmark": 28.9,
      "samples": 453,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4958/Maxtor-6L160M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3200BMVS-11F9S0 320GB",
      "rank": 768,
      "benchmark": 28.9,
      "samples": 134,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10626/WDC-WD3200BMVS-11F9S0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545032B9SA00 320GB",
      "rank": 769,
      "benchmark": 28.8,
      "samples": 1015,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10455/Hitachi-HTS545032B9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3160215AS 160GB",
      "rank": 770,
      "benchmark": 28.8,
      "samples": 7108,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1296/MAXTOR-STM3160215AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD4000KD-00NAB0 400GB",
      "rank": 771,
      "benchmark": 28.8,
      "samples": 161,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2338/WDC-WD4000KD-00NAB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "7L250S0 250GB",
      "rank": 772,
      "benchmark": 28.7,
      "samples": 541,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5847/Maxtor-7L250S0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721680PLA380 80GB",
      "rank": 773,
      "benchmark": 28.7,
      "samples": 1995,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4750/Hitachi-HDS721680PLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2500YD-01NVB1 251GB",
      "rank": 774,
      "benchmark": 28.7,
      "samples": 448,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8909/WDC-WD2500YD-01NVB1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600AAJB-00PVA0 160GB",
      "rank": 775,
      "benchmark": 28.6,
      "samples": 1520,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4799/WDC-WD1600AAJB-00PVA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD252KJ 250GB",
      "rank": 776,
      "benchmark": 28.6,
      "samples": 1007,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3923/SAMSUNG-HD252KJ"
    },
    {
      "type": "HDD",
      "part_number": "WD3200BEVT",
      "brand": "WD",
      "model": "Blue 2.5\" 320GB (2009)",
      "rank": 777,
      "benchmark": 28.6,
      "samples": 31128,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2273/WDC-WD3200BEVT-22ZCT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545032B9A300 320GB",
      "rank": 778,
      "benchmark": 28.6,
      "samples": 12424,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1389/Hitachi-HTS545032B9A300"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600YS-18SHB2 160GB",
      "rank": 779,
      "benchmark": 28.6,
      "samples": 227,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10150/WDC-WD1600YS-18SHB2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST380815AS 80GB",
      "rank": 780,
      "benchmark": 28.5,
      "samples": 14235,
      "url": "https://hdd.userbenchmark.com/SpeedTest/637/ST380815AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS543225A7A384 250GB",
      "rank": 781,
      "benchmark": 28.5,
      "samples": 1620,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9742/Hitachi-HTS543225A7A384"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT725032VLAT80 320GB",
      "rank": 782,
      "benchmark": 28.5,
      "samples": 164,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5147/Hitachi-HDT725032VLAT80"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "7L250S0 251GB",
      "rank": 783,
      "benchmark": 28.4,
      "samples": 316,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4393/Maxtor--7L250S0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250624AS 250GB",
      "rank": 784,
      "benchmark": 28.4,
      "samples": 676,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6831/ST3250624AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD4000YR-01PLB0 400GB",
      "rank": 785,
      "benchmark": 28.4,
      "samples": 206,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3948/WDC-WD4000YR-01PLB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "7L300S0 300GB",
      "rank": 786,
      "benchmark": 28.3,
      "samples": 301,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2130/Maxtor-7L300S0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS722020K9SA00 200GB",
      "rank": 787,
      "benchmark": 28.3,
      "samples": 200,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10167/Hitachi-HTS722020K9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3400832A 400GB",
      "rank": 788,
      "benchmark": 28.3,
      "samples": 134,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2624/ST3400832A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6 L300S0 300GB",
      "rank": 789,
      "benchmark": 28.2,
      "samples": 130,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9919/Maxtor-6-L300S0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160815A 160GB",
      "rank": 790,
      "benchmark": 28.2,
      "samples": 662,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1808/ST3160815A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP2514N 250GB",
      "rank": 791,
      "benchmark": 28.2,
      "samples": 564,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4577/SAMSUNG-SP2514N"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9320325AS 320GB",
      "rank": 792,
      "benchmark": 28.1,
      "samples": 15128,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2223/ST9320325AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600YS-01SHB1 165GB",
      "rank": 793,
      "benchmark": 28.1,
      "samples": 805,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10600/WDC-WD1600YS-01SHB1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6B200M0 204GB",
      "rank": 794,
      "benchmark": 28.1,
      "samples": 1048,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2239/Maxtor-6B200M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3300831AS 300GB",
      "rank": 795,
      "benchmark": 28,
      "samples": 1101,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1777/ST3300831AS"
    },
    {
      "type": "HDD",
      "part_number": "WD2500BPVT",
      "brand": "WD",
      "model": "Blue 2.5\" 250GB (2010)",
      "rank": 796,
      "benchmark": 28,
      "samples": 2254,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2517/WDC-WD2500BPVT-75JJ5T0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3250823A 250GB",
      "rank": 797,
      "benchmark": 28,
      "samples": 200,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4671/ST3250823A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L200M0 200GB",
      "rank": 798,
      "benchmark": 27.9,
      "samples": 467,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6596/Maxtor-6L200M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS54323 320GB",
      "rank": 799,
      "benchmark": 27.8,
      "samples": 264,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7228/Hitachi-HTS54323"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160215SCE 160GB",
      "rank": 800,
      "benchmark": 27.8,
      "samples": 1953,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9361/ST3160215SCE"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2500KS-00MJB0 250GB",
      "rank": 801,
      "benchmark": 27.7,
      "samples": 6804,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1521/WDC-WD2500KS-00MJB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L300S0 300GB",
      "rank": 802,
      "benchmark": 27.6,
      "samples": 1978,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2242/Maxtor-6L300S0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3200BEVS-16VAT0 320GB",
      "rank": 803,
      "benchmark": 27.6,
      "samples": 1319,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3173/WDC-WD3200BEVS-16VAT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST312081 2AS 120GB",
      "rank": 804,
      "benchmark": 27.6,
      "samples": 9,
      "url": "https://hdd.userbenchmark.com/SpeedTest/13081/ST312081-2AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6Y120L0 120GB",
      "rank": 805,
      "benchmark": 27.6,
      "samples": 10,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9085/Maxtor-6Y120L0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST380211AS 80GB",
      "rank": 806,
      "benchmark": 27.6,
      "samples": 667,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2053/ST380211AS"
    },
    {
      "type": "HDD",
      "part_number": "ST9200420AS",
      "brand": "Seagate",
      "model": "Momentus 2.5\" 200GB",
      "rank": 807,
      "benchmark": 27.5,
      "samples": 460,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6639/ST9200420AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2500YS-01SHB1 251GB",
      "rank": 808,
      "benchmark": 27.5,
      "samples": 1774,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3947/WDC-WD2500YS-01SHB1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD25 00JS-58NCB1 250GB",
      "rank": 809,
      "benchmark": 27.5,
      "samples": 15757,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2392/WDC-WD25-00JS-58NCB1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3200822AS 200GB",
      "rank": 810,
      "benchmark": 27.4,
      "samples": 3520,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1057/ST3200822AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3200826AS 200GB",
      "rank": 811,
      "benchmark": 27.4,
      "samples": 1828,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7868/ST3200826AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6B250S0 251GB",
      "rank": 812,
      "benchmark": 27.3,
      "samples": 300,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3399/Maxtor-6B250S0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3200827AS 200GB",
      "rank": 813,
      "benchmark": 27.3,
      "samples": 2307,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2117/ST3200827AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160215A 160GB",
      "rank": 814,
      "benchmark": 27.2,
      "samples": 769,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4962/ST3160215A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L200M0 204GB",
      "rank": 815,
      "benchmark": 27.2,
      "samples": 1298,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2656/Maxtor-6L200M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT725025VLA380 250GB",
      "rank": 816,
      "benchmark": 27.2,
      "samples": 5016,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1140/Hitachi-HDT725025VLA380"
    },
    {
      "type": "HDD",
      "part_number": "WD800BEVT",
      "brand": "WD",
      "model": "Blue 2.5\" 80GB (2009)",
      "rank": 817,
      "benchmark": 27.1,
      "samples": 341,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1891/WDC-WD800BEVT-75ZCT1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2000JS-00MHB0 200GB",
      "rank": 818,
      "benchmark": 27,
      "samples": 2208,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1235/WDC-WD2000JS-00MHB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9320320AS 320GB",
      "rank": 819,
      "benchmark": 27,
      "samples": 2917,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1647/ST9320320AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS725050KLA360 500GB",
      "rank": 820,
      "benchmark": 27,
      "samples": 4524,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5034/HDS725050KLA360"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM3160215A 160GB",
      "rank": 821,
      "benchmark": 27,
      "samples": 577,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9767/MAXTOR-STM3160215A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L250M0 251GB",
      "rank": 822,
      "benchmark": 27,
      "samples": 148,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9542/Maxtor-6L250M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L250S0 251GB",
      "rank": 823,
      "benchmark": 26.9,
      "samples": 839,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1207/Maxtor-6L250S0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6B160M0 164GB",
      "rank": 824,
      "benchmark": 26.9,
      "samples": 179,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6303/Maxtor-6B160M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST925032 0AS 250GB",
      "rank": 825,
      "benchmark": 26.9,
      "samples": 1265,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4392/ST925032-0AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600JS-75NCB1 160GB",
      "rank": 826,
      "benchmark": 26.8,
      "samples": 8570,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1439/WDC-WD1600JS-75NCB1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS721616PLAT80 160GB",
      "rank": 827,
      "benchmark": 26.8,
      "samples": 178,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6818/Hitachi-HDS721616PLAT80"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP1603C 160GB",
      "rank": 828,
      "benchmark": 26.7,
      "samples": 302,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11458/SAMSUNG-SP1603C"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT722516DLA380 165GB",
      "rank": 829,
      "benchmark": 26.7,
      "samples": 1529,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3422/HDT722516DLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9160310AS 160GB",
      "rank": 830,
      "benchmark": 26.6,
      "samples": 2069,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1274/ST9160310AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6Y160M0 160GB",
      "rank": 831,
      "benchmark": 26.5,
      "samples": 404,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2372/Maxtor-6Y160M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3802110A 80GB",
      "rank": 832,
      "benchmark": 26.4,
      "samples": 664,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11154/ST3802110A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3000JS-60PDB0 300GB",
      "rank": 833,
      "benchmark": 26.4,
      "samples": 986,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9069/WDC-WD3000JS-60PDB0"
    },
    {
      "type": "HDD",
      "part_number": "WD1600BEVT",
      "brand": "WD",
      "model": "Blue 2.5\" 160GB (2009)",
      "rank": 834,
      "benchmark": 26.3,
      "samples": 12623,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2327/WDC-WD1600BEVT-22ZCT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK4058GSX 400GB",
      "rank": 835,
      "benchmark": 26.2,
      "samples": 631,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6302/TOSHIBA-MK4058GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP1213C 120GB",
      "rank": 836,
      "benchmark": 26.2,
      "samples": 611,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5318/SAMSUNG-SP1213C"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT722525DLAT80 250GB",
      "rank": 837,
      "benchmark": 26.2,
      "samples": 243,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6021/HDT722525DLAT80"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK3263GS 320GB",
      "rank": 838,
      "benchmark": 26.2,
      "samples": 52,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7948/TOSHIBA-MK3263GS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500841AS 500GB",
      "rank": 839,
      "benchmark": 26.2,
      "samples": 471,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1585/ST3500841AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK3263GSX 320GB",
      "rank": 840,
      "benchmark": 26.2,
      "samples": 2052,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1707/TOSHIBA-MK3263GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545032B9A 320GB",
      "rank": 841,
      "benchmark": 26.2,
      "samples": 193,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5973/Hitachi-HTS545032B9A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3500641AS 500GB",
      "rank": 842,
      "benchmark": 26.1,
      "samples": 1721,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4005/ST3500641AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3200JB-00KFA0 320GB",
      "rank": 843,
      "benchmark": 26.1,
      "samples": 311,
      "url": "https://hdd.userbenchmark.com/SpeedTest/932/WDC-WD3200JB-00KFA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "7Y250M0 251GB",
      "rank": 844,
      "benchmark": 26.1,
      "samples": 500,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3687/Maxtor-7Y250M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160212AS 160GB",
      "rank": 845,
      "benchmark": 26.1,
      "samples": 1413,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6800/ST3160212AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600AABB-00PUA0 160GB",
      "rank": 846,
      "benchmark": 26.1,
      "samples": 225,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4532/WDC-WD1600AABB-00PUA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "STM380215A 80GB",
      "rank": 847,
      "benchmark": 26,
      "samples": 322,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10373/MAXTOR-STM380215A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHZ2320BH G2 320GB",
      "rank": 848,
      "benchmark": 26,
      "samples": 2005,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3241/FUJITSU-MHZ2320BH-G2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST380215A 80GB",
      "rank": 849,
      "benchmark": 26,
      "samples": 656,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2923/ST380215A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD300LJ 300GB",
      "rank": 850,
      "benchmark": 26,
      "samples": 974,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10568/SAMSUNG-HD300LJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD160JJ/P 160GB",
      "rank": 851,
      "benchmark": 25.8,
      "samples": 1844,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2146/SAMSUNG-HD160JJP"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD120IJ 120GB",
      "rank": 852,
      "benchmark": 25.7,
      "samples": 708,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2996/SAMSUNG-HD120IJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK3252GSX 320GB",
      "rank": 853,
      "benchmark": 25.7,
      "samples": 2954,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4807/TOSHIBA-MK3252GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9250827AS 250GB",
      "rank": 854,
      "benchmark": 25.6,
      "samples": 3054,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3497/ST9250827AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP1614C 160GB",
      "rank": 855,
      "benchmark": 25.4,
      "samples": 1456,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6801/SAMSUNG-SP1614C"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD160JJ 160GB",
      "rank": 856,
      "benchmark": 25.3,
      "samples": 4514,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3475/SAMSUNG-HD160JJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3120813AS 120GB",
      "rank": 857,
      "benchmark": 25.3,
      "samples": 590,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8799/ST3120813AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6Y160M0 164GB",
      "rank": 858,
      "benchmark": 25.3,
      "samples": 699,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9950/Maxtor-6Y160M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L100P0 100GB",
      "rank": 859,
      "benchmark": 25.2,
      "samples": 48,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5231/Maxtor-6L100P0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3120213AS 120GB",
      "rank": 860,
      "benchmark": 25.2,
      "samples": 644,
      "url": "https://hdd.userbenchmark.com/SpeedTest/8435/ST3120213AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6Y120M0 123GB",
      "rank": 861,
      "benchmark": 25.2,
      "samples": 686,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4197/Maxtor-6Y120M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK1652GSX 160GB",
      "rank": 862,
      "benchmark": 25.1,
      "samples": 1862,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3060/TOSHIBA-MK1652GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L080M0 82GB",
      "rank": 863,
      "benchmark": 25.1,
      "samples": 222,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3878/Maxtor-6L080M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6 Y080M0 82GB",
      "rank": 864,
      "benchmark": 25,
      "samples": 86,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5709/Maxtor-6-Y080M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6 L200P0 204GB",
      "rank": 865,
      "benchmark": 25,
      "samples": 22,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3778/Maxtor-6-L200P0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3120811AS 120GB",
      "rank": 866,
      "benchmark": 25,
      "samples": 421,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1497/ST3120811AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3120827AS 120GB",
      "rank": 867,
      "benchmark": 24.9,
      "samples": 1653,
      "url": "https://hdd.userbenchmark.com/SpeedTest/27/ST3120827AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L160P0 164GB",
      "rank": 868,
      "benchmark": 24.9,
      "samples": 504,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5287/Maxtor-6L160P0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP2004C 200GB",
      "rank": 869,
      "benchmark": 24.8,
      "samples": 3840,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3536/SAMSUNG-SP2004C"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD080HJ 80GB",
      "rank": 870,
      "benchmark": 24.8,
      "samples": 4053,
      "url": "https://hdd.userbenchmark.com/SpeedTest/810/SAMSUNG-HD080HJ"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK1633GSG 160GB",
      "rank": 871,
      "benchmark": 24.8,
      "samples": 403,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5563/TOSHIBA-MK1633GSG"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST380819AS 80GB",
      "rank": 872,
      "benchmark": 24.8,
      "samples": 765,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5233/ST380819AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS722016K9SA00 160GB",
      "rank": 873,
      "benchmark": 24.8,
      "samples": 297,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4166/HITACHI-HTS722016K9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST380817AS 80GB",
      "rank": 874,
      "benchmark": 24.8,
      "samples": 1733,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4251/ST380817AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160023AS 160GB",
      "rank": 875,
      "benchmark": 24.8,
      "samples": 4077,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2396/ST3160023AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6Y080M0 82GB",
      "rank": 876,
      "benchmark": 24.8,
      "samples": 653,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2523/Maxtor-6Y080M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP0812C 80GB",
      "rank": 877,
      "benchmark": 24.7,
      "samples": 744,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6580/SAMSUNG-SP0812C"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS725050KLAT80 500GB",
      "rank": 878,
      "benchmark": 24.7,
      "samples": 81,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4136/HDS725050KLAT80"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM160HI 160GB",
      "rank": 879,
      "benchmark": 24.7,
      "samples": 3287,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1443/SAMSUNG-HM160HI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS722512VLSA80 124GB",
      "rank": 880,
      "benchmark": 24.7,
      "samples": 78,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4756/HDS722512VLSA80"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD3000JB-00KFA0 300GB",
      "rank": 881,
      "benchmark": 24.7,
      "samples": 125,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12574/WDC-WD3000JB-00KFA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160827AS 160GB",
      "rank": 882,
      "benchmark": 24.6,
      "samples": 1582,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2026/ST3160827AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS722516VLSA80 165GB",
      "rank": 883,
      "benchmark": 24.6,
      "samples": 474,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1980/HDS722516VLSA80"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS722580VLSA80 82GB",
      "rank": 884,
      "benchmark": 24.5,
      "samples": 215,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7444/HDS722580VLSA80"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD800JD-75MSA3 80GB",
      "rank": 885,
      "benchmark": 24.4,
      "samples": 19780,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2331/WDC-WD800JD-75MSA3"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9160823AS 160GB",
      "rank": 886,
      "benchmark": 24.4,
      "samples": 474,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4557/ST9160823AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST380013AS 80GB",
      "rank": 887,
      "benchmark": 24.4,
      "samples": 2477,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2648/ST380013AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD080HJ/P 80GB",
      "rank": 888,
      "benchmark": 24.4,
      "samples": 1701,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2558/SAMSUNG-HD080HJP"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9120823AS 120GB",
      "rank": 889,
      "benchmark": 24.3,
      "samples": 275,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1667/ST9120823AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM250JI 250GB",
      "rank": 890,
      "benchmark": 24.3,
      "samples": 826,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3524/SAMSUNG-HM250JI"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9160827AS 160GB",
      "rank": 891,
      "benchmark": 24.3,
      "samples": 889,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1284/ST9160827AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP1614N 160GB",
      "rank": 892,
      "benchmark": 24.3,
      "samples": 215,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12600/SAMSUNG-SP1614N"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600JD-22HBB0 160GB",
      "rank": 893,
      "benchmark": 24.3,
      "samples": 2118,
      "url": "https://hdd.userbenchmark.com/SpeedTest/233/WDC-WD1600JD-22HBB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2000JB-00GVA0 200GB",
      "rank": 894,
      "benchmark": 24.2,
      "samples": 573,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6220/WDC-WD2000JB-00GVA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS543232L9A300 320GB",
      "rank": 895,
      "benchmark": 24.2,
      "samples": 3564,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1887/Hitachi-HTS543232L9A300"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L080M0 80GB",
      "rank": 896,
      "benchmark": 24.2,
      "samples": 398,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1731/Maxtor-6L080M0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS728080PLA380 82GB",
      "rank": 897,
      "benchmark": 24.2,
      "samples": 2012,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1187/HDS728080PLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L300R0 300GB",
      "rank": 898,
      "benchmark": 24.1,
      "samples": 297,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4620/Maxtor-6L300R0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDT722516DLAT80 165GB",
      "rank": 899,
      "benchmark": 24.1,
      "samples": 209,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3500/HDT722516DLAT80"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP2014N 200GB",
      "rank": 900,
      "benchmark": 24,
      "samples": 327,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4945/SAMSUNG-SP2014N"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHZ2160BH G2 160GB",
      "rank": 901,
      "benchmark": 24,
      "samples": 1722,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4477/FUJITSU-MHZ2160BH-G2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3120026AS 120GB",
      "rank": 902,
      "benchmark": 24,
      "samples": 1939,
      "url": "https://hdd.userbenchmark.com/SpeedTest/508/ST3120026AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2500JD-00HBB0 250GB",
      "rank": 903,
      "benchmark": 24,
      "samples": 2743,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3022/WDC-WD2500JD-00HBB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST340014AS 40GB",
      "rank": 904,
      "benchmark": 24,
      "samples": 774,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4925/ST340014AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2000JD-00HBB0 200GB",
      "rank": 905,
      "benchmark": 23.9,
      "samples": 1962,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1208/WDC-WD2000JD-00HBB0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP1604N 160GB",
      "rank": 906,
      "benchmark": 23.9,
      "samples": 304,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3596/SAMSUNG-SP1604N"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2500BB-98DWA0 250GB",
      "rank": 907,
      "benchmark": 23.8,
      "samples": 302,
      "url": "https://hdd.userbenchmark.com/SpeedTest/294/WDC-WD2500BB-98DWA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD400BD-22JMC0 40GB",
      "rank": 908,
      "benchmark": 23.8,
      "samples": 1056,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7189/WDC-WD400BD-22JMC0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3120211AS 120GB",
      "rank": 909,
      "benchmark": 23.8,
      "samples": 112,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1804/ST3120211AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST980813AS 80GB",
      "rank": 910,
      "benchmark": 23.8,
      "samples": 222,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1190/ST980813AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS543216L9SA00 160GB",
      "rank": 911,
      "benchmark": 23.8,
      "samples": 1241,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2975/Hitachi-HTS543216L9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS543232L9SA00 320GB",
      "rank": 912,
      "benchmark": 23.8,
      "samples": 963,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1414/Hitachi-HTS543232L9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600JB-00GVC0 160GB",
      "rank": 913,
      "benchmark": 23.7,
      "samples": 932,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4380/WDC-WD1600JB-00GVC0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK1655GSX 160GB",
      "rank": 914,
      "benchmark": 23.7,
      "samples": 1632,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1628/TOSHIBA-MK1655GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS724040KLSA80 400GB",
      "rank": 915,
      "benchmark": 23.7,
      "samples": 482,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6426/HDS724040KLSA80"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP1213N 120GB",
      "rank": 916,
      "benchmark": 23.6,
      "samples": 118,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1600/SAMSUNG-SP1213N"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS543216L9A300 160GB",
      "rank": 917,
      "benchmark": 23.6,
      "samples": 2430,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1763/Hitachi-HTS543216L9A300"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHZ2250BH G2 250GB",
      "rank": 918,
      "benchmark": 23.6,
      "samples": 1360,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2860/FUJITSU-MHZ2250BH-G2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS543225L9SA00 250GB",
      "rank": 919,
      "benchmark": 23.6,
      "samples": 1006,
      "url": "https://hdd.userbenchmark.com/SpeedTest/9015/Hitachi-HTS543225L9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "7Y250P0 251GB",
      "rank": 920,
      "benchmark": 23.5,
      "samples": 86,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4982/Maxtor-7Y250P0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6B200P0 204GB",
      "rank": 921,
      "benchmark": 23.5,
      "samples": 222,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6815/Maxtor-6B200P0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2500BEVS-22UST0 250GB",
      "rank": 922,
      "benchmark": 23.4,
      "samples": 7245,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3263/WDC-WD2500BEVS-22UST0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD800BD-22MRA1 80GB",
      "rank": 923,
      "benchmark": 23.4,
      "samples": 2984,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5953/WDC-WD800BD-22MRA1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS545016B9A300 160GB",
      "rank": 924,
      "benchmark": 23.4,
      "samples": 2842,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4712/Hitachi-HTS545016B9A300"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1200JD-00HBC0 120GB",
      "rank": 925,
      "benchmark": 23.4,
      "samples": 947,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3615/WDC-WD1200JD-00HBC0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3120814A 120GB",
      "rank": 926,
      "benchmark": 23.4,
      "samples": 150,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2132/ST3120814A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK2552GSX 250GB",
      "rank": 927,
      "benchmark": 23.4,
      "samples": 2010,
      "url": "https://hdd.userbenchmark.com/SpeedTest/200/TOSHIBA-MK2552GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "",
      "model": "IC35L120AVV207-1 124GB",
      "rank": 928,
      "benchmark": 23.3,
      "samples": 51,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2982/IC35L120AVV207-1"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6 Y160P0 164GB",
      "rank": 929,
      "benchmark": 23.3,
      "samples": 379,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2357/Maxtor-6-Y160P0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Excelstor",
      "model": "Technology J880 82GB",
      "rank": 930,
      "benchmark": 23.2,
      "samples": 218,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5162/ExcelStor-Technology-J880"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HM160HC 160GB",
      "rank": 931,
      "benchmark": 23.2,
      "samples": 145,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5384/SAMSUNG-HM160HC"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS542525K9SA00 250GB",
      "rank": 932,
      "benchmark": 23.1,
      "samples": 2804,
      "url": "https://hdd.userbenchmark.com/SpeedTest/487/Hitachi-HTS542525K9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6Y080P0 82GB",
      "rank": 933,
      "benchmark": 23,
      "samples": 276,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3815/Maxtor-6Y080P0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS728080PLA380 80GB",
      "rank": 934,
      "benchmark": 23,
      "samples": 955,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4994/HDS728080PLA380"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP0812N 80GB",
      "rank": 935,
      "benchmark": 23,
      "samples": 159,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7242/SAMSUNG-SP0812N"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L200R0 204GB",
      "rank": 936,
      "benchmark": 23,
      "samples": 64,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4436/Maxtor-6L200R0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS728040PLA320 40GB",
      "rank": 937,
      "benchmark": 23,
      "samples": 76,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5170/HDS728040PLA320"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD2500JB-00REA0 250GB",
      "rank": 938,
      "benchmark": 22.9,
      "samples": 1090,
      "url": "https://hdd.userbenchmark.com/SpeedTest/678/WDC-WD2500JB-00REA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHW2160BJ FFS G2 160GB",
      "rank": 939,
      "benchmark": 22.9,
      "samples": 58,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4184/FUJITSU-MHW2160BJ-FFS-G2"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP0842N 80GB",
      "rank": 940,
      "benchmark": 22.8,
      "samples": 626,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5511/SAMSUNG-SP0842N"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1200JB-00EVA0 120GB",
      "rank": 941,
      "benchmark": 22.7,
      "samples": 605,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2471/WDC-WD1200JB-00EVA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS543225L9A300 250GB",
      "rank": 942,
      "benchmark": 22.7,
      "samples": 3859,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2281/Hitachi-HTS543225L9A300"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6E040L0 41GB",
      "rank": 943,
      "benchmark": 22.6,
      "samples": 563,
      "url": "https://hdd.userbenchmark.com/SpeedTest/769/Maxtor-6E040L0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK2546GSX 250GB",
      "rank": 944,
      "benchmark": 22.5,
      "samples": 915,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4487/TOSHIBA-MK2546GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "HD300LD 300GB",
      "rank": 945,
      "benchmark": 22.5,
      "samples": 179,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1871/SAMSUNG-HD300LD"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP0411C 40GB",
      "rank": 946,
      "benchmark": 22.4,
      "samples": 269,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6293/SAMSUNG-SP0411C"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD800JB-00ETA0 80GB",
      "rank": 947,
      "benchmark": 22.3,
      "samples": 193,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3829/WDC-WD800JB-00ETA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6L160P0 160GB",
      "rank": 948,
      "benchmark": 22.3,
      "samples": 51,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6841/Maxtor-6L160P0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK2546GSX_200 200GB",
      "rank": 949,
      "benchmark": 22.3,
      "samples": 142,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3937/TOSHIBA-MK2546GSX-200"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS722012K9SA00 120GB",
      "rank": 950,
      "benchmark": 22.1,
      "samples": 100,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3793/Hitachi-HTS722012K9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1200BB-00RDA0 120GB",
      "rank": 951,
      "benchmark": 22,
      "samples": 313,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10238/WDC-WD1200BB-00RDA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS542512K9SA00 120GB",
      "rank": 952,
      "benchmark": 22,
      "samples": 1240,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1928/Hitachi-HTS542512K9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6Y120L0 123GB",
      "rank": 953,
      "benchmark": 21.8,
      "samples": 480,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1790/Maxtor-6Y120L0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160023A 160GB",
      "rank": 954,
      "benchmark": 21.8,
      "samples": 449,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5944/ST3160023A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP0802N 80GB",
      "rank": 955,
      "benchmark": 21.8,
      "samples": 655,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2601/SAMSUNG-SP0802N"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHZ2120B 120GB",
      "rank": 956,
      "benchmark": 21.7,
      "samples": 10,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5860/FUJITSU-MHZ2120B"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600BEVS-22UST0 160GB",
      "rank": 957,
      "benchmark": 21.4,
      "samples": 4585,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3126/WDC-WD1600BEVS-22UST0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHY2250BH 250GB",
      "rank": 958,
      "benchmark": 21.3,
      "samples": 1004,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5732/FUJITSU-MHY2250BH"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP0822N 80GB",
      "rank": 959,
      "benchmark": 21.3,
      "samples": 272,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2110/SAMSUNG-SP0822N"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD400JB-00FMA0 40GB",
      "rank": 960,
      "benchmark": 21.2,
      "samples": 95,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3602/WDC-WD400JB-00FMA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS543212L9A300 120GB",
      "rank": 961,
      "benchmark": 21.1,
      "samples": 222,
      "url": "https://hdd.userbenchmark.com/SpeedTest/266/Hitachi-HTS543212L9A300"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD800JB-00JJC0 80GB",
      "rank": 962,
      "benchmark": 21.1,
      "samples": 1037,
      "url": "https://hdd.userbenchmark.com/SpeedTest/70/WDC-WD800JB-00JJC0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600BEVE-00WZT0 160GB",
      "rank": 963,
      "benchmark": 20.8,
      "samples": 40,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10531/WDC-WD1600BEVE-00WZT0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD400BB-60DGA0 40GB",
      "rank": 964,
      "benchmark": 20.8,
      "samples": 698,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5256/WDC-WD400BB-60DGA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1600BB-22GUC0 160GB",
      "rank": 965,
      "benchmark": 20.8,
      "samples": 733,
      "url": "https://hdd.userbenchmark.com/SpeedTest/12099/WDC-WD1600BB-22GUC0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6Y080L0 82GB",
      "rank": 966,
      "benchmark": 20.7,
      "samples": 1219,
      "url": "https://hdd.userbenchmark.com/SpeedTest/933/Maxtor-6Y080L0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST380023AS 80GB",
      "rank": 967,
      "benchmark": 20.6,
      "samples": 52,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6282/ST380023AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Samsung",
      "model": "SP0411N 40GB",
      "rank": 968,
      "benchmark": 20.6,
      "samples": 448,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6089/SAMSUNG-SP0411N"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3120022A 120GB",
      "rank": 969,
      "benchmark": 20.5,
      "samples": 872,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2299/ST3120022A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD1200BEVS-60UST0 120GB",
      "rank": 970,
      "benchmark": 20.5,
      "samples": 3031,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3682/WDC-WD1200BEVS-60UST0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS721010G9SA00 100GB",
      "rank": 971,
      "benchmark": 20.5,
      "samples": 187,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5680/HTS721010G9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3160021A 160GB",
      "rank": 972,
      "benchmark": 20.3,
      "samples": 823,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6402/ST3160021A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6Y060L0 61GB",
      "rank": 973,
      "benchmark": 20,
      "samples": 168,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3853/Maxtor-6Y060L0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST910021AS 100GB",
      "rank": 974,
      "benchmark": 20,
      "samples": 197,
      "url": "https://hdd.userbenchmark.com/SpeedTest/11880/ST910021AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST340014A 40GB",
      "rank": 975,
      "benchmark": 19.9,
      "samples": 845,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1817/ST340014A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHY2120BH 120GB",
      "rank": 976,
      "benchmark": 19.8,
      "samples": 1142,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10510/FUJITSU-MHY2120BH"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD800BB-88JHC0 80GB",
      "rank": 977,
      "benchmark": 19.7,
      "samples": 2572,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1308/WDC-WD800BB-88JHC0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "6 Y120P0 123GB",
      "rank": 978,
      "benchmark": 19.6,
      "samples": 9,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4430/Maxtor-6-Y120P0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK1646GSX 160GB",
      "rank": 979,
      "benchmark": 19.6,
      "samples": 680,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5350/TOSHIBA-MK1646GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS542516K9SA00 160GB",
      "rank": 980,
      "benchmark": 19.5,
      "samples": 2019,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2771/Hitachi-HTS542516K9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHY2160BH 160GB",
      "rank": 981,
      "benchmark": 19.3,
      "samples": 887,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4449/FUJITSU-MHY2160BH"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS728080PLAT20 82GB",
      "rank": 982,
      "benchmark": 19.2,
      "samples": 1087,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2913/HDS728080PLAT20"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST380011A 80GB",
      "rank": 983,
      "benchmark": 19.1,
      "samples": 2219,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1697/ST380011A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHY2200BH 200GB",
      "rank": 984,
      "benchmark": 18.8,
      "samples": 740,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1960/FUJITSU-MHY2200BH"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK8037GSX 80GB",
      "rank": 985,
      "benchmark": 18.5,
      "samples": 657,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1841/TOSHIBA-MK8037GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD800BEVS-22RST0 80GB",
      "rank": 986,
      "benchmark": 18.3,
      "samples": 998,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3519/WDC-WD800BEVS-22RST0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHW2120BH 120GB",
      "rank": 987,
      "benchmark": 18.2,
      "samples": 1056,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3831/FUJITSU-MHW2120BH"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS542580K9SA00 80GB",
      "rank": 988,
      "benchmark": 18.1,
      "samples": 556,
      "url": "https://hdd.userbenchmark.com/SpeedTest/7089/Hitachi-HTS542580K9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST3120023A 120GB",
      "rank": 989,
      "benchmark": 17.9,
      "samples": 134,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6505/ST3120023A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK1637GSX 160GB",
      "rank": 990,
      "benchmark": 17.8,
      "samples": 1423,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4513/TOSHIBA-MK1637GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9120822AS 120GB",
      "rank": 991,
      "benchmark": 17.5,
      "samples": 1798,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5319/ST9120822AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS541616J9SA00 160GB",
      "rank": 992,
      "benchmark": 17.4,
      "samples": 2693,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4013/Hitachi-HTS541616J9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9160821AS 160GB",
      "rank": 993,
      "benchmark": 17.3,
      "samples": 3075,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1006/ST9160821AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "WD",
      "model": "WD600BB-75CAA0 60GB",
      "rank": 994,
      "benchmark": 17.1,
      "samples": 85,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6010/WDC-WD600BB-75CAA0"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS541680J9SA00 80GB",
      "rank": 995,
      "benchmark": 17,
      "samples": 1484,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2399/Hitachi-HTS541680J9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHW2080BH 80GB",
      "rank": 996,
      "benchmark": 16.9,
      "samples": 298,
      "url": "https://hdd.userbenchmark.com/SpeedTest/6989/FUJITSU-MHW2080BH"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST980811AS 80GB",
      "rank": 997,
      "benchmark": 16.9,
      "samples": 1510,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1970/ST980811AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST340016A 40GB",
      "rank": 998,
      "benchmark": 16.8,
      "samples": 319,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2501/ST340016A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HDS722580VLAT20 61GB",
      "rank": 999,
      "benchmark": 16.8,
      "samples": 30,
      "url": "https://hdd.userbenchmark.com/SpeedTest/3589/HDS722580VLAT20"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHV2120BH PL 120GB",
      "rank": 1000,
      "benchmark": 16.6,
      "samples": 607,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1025/FUJITSU-MHV2120BH-PL"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK1237GSX 120GB",
      "rank": 1001,
      "benchmark": 16.5,
      "samples": 784,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4749/TOSHIBA-MK1237GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST360021A 60GB",
      "rank": 1002,
      "benchmark": 16.4,
      "samples": 92,
      "url": "https://hdd.userbenchmark.com/SpeedTest/10830/ST360021A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK2035GSS 200GB",
      "rank": 1003,
      "benchmark": 16.2,
      "samples": 984,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5833/TOSHIBA-MK2035GSS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHV2100BH 100GB",
      "rank": 1004,
      "benchmark": 15.9,
      "samples": 238,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1474/FUJITSU-MHV2100BH"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS541612J9SA00 120GB",
      "rank": 1005,
      "benchmark": 15.8,
      "samples": 1846,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1249/Hitachi-HTS541612J9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST98823AS 80GB",
      "rank": 1006,
      "benchmark": 15.7,
      "samples": 565,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5717/ST98823AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Fujitsu",
      "model": "MHV2080BH PL 80GB",
      "rank": 1007,
      "benchmark": 15.6,
      "samples": 477,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5000/FUJITSU-MHV2080BH-PL"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST9100824AS 100GB",
      "rank": 1008,
      "benchmark": 15.6,
      "samples": 254,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2949/ST9100824AS"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST340015A 40GB",
      "rank": 1009,
      "benchmark": 15.5,
      "samples": 190,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4591/ST340015A"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Hitachi",
      "model": "HTS541010G9SA00 100GB",
      "rank": 1010,
      "benchmark": 15.4,
      "samples": 395,
      "url": "https://hdd.userbenchmark.com/SpeedTest/5274/HTS541010G9SA00"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Maxtor",
      "model": "4G120J6 123GB",
      "rank": 1011,
      "benchmark": 14.9,
      "samples": 6,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4566/Maxtor-4G120J6"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK1234GSX 120GB",
      "rank": 1012,
      "benchmark": 14.8,
      "samples": 725,
      "url": "https://hdd.userbenchmark.com/SpeedTest/1726/TOSHIBA-MK1234GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK8034GSX 80GB",
      "rank": 1013,
      "benchmark": 13.6,
      "samples": 365,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4167/TOSHIBA-MK8034GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Toshiba",
      "model": "MK8032GSX 80GB",
      "rank": 1014,
      "benchmark": 12.9,
      "samples": 312,
      "url": "https://hdd.userbenchmark.com/SpeedTest/4083/TOSHIBA-MK8032GSX"
    },
    {
      "type": "HDD",
      "part_number": "",
      "brand": "Seagate",
      "model": "ST960821A 60GB",
      "rank": 1015,
      "benchmark": 9.55,
      "samples": 17,
      "url": "https://hdd.userbenchmark.com/SpeedTest/2864/ST960821A"
    }
  ]
  const seedGallery = () => Hdd.bulkCreate(hddData);

  module.exports = seedGallery;