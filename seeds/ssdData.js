const {Ssd} = require('../models');

const ssdData = [
  {
    "type": "SSD",
    "part_number": "WDS200T1X0E",
    "brand": "WD",
    "model": "Black SN850 NVMe PCIe M.2 2TB",
    "rank": 1,
    "benchmark": 481,
    "samples": 129,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1363185/WD-BLACK-SN850-2TB"
  },
  {
    "type": "SSD",
    "part_number": "WDS100T1X0E",
    "brand": "WD",
    "model": "Black SN850 NVMe PCIe M.2 1TB",
    "rank": 2,
    "benchmark": 439,
    "samples": 1260,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1348947/WD-BLACK-SN850-1TB"
  },
  {
    "type": "SSD",
    "part_number": "SSDPED1D280GASX",
    "brand": "Intel",
    "model": "900P Optane NVMe PCIe 280GB",
    "rank": 3,
    "benchmark": 436,
    "samples": 2323,
    "url": "https://ssd.userbenchmark.com/SpeedTest/315555/INTEL-SSDPED1D280GA"
  },
  {
    "type": "SSD",
    "part_number": "SSDPE21D280GASX",
    "brand": "Intel",
    "model": "900P Optane NVMe PCIe 280GB",
    "rank": 3,
    "benchmark": 436,
    "samples": 2323,
    "url": "https://ssd.userbenchmark.com/SpeedTest/315555/INTEL-SSDPED1D280GA"
  },
  {
    "type": "SSD",
    "part_number": "SSDPED1D960GAX1",
    "brand": "Intel",
    "model": "905P Optane NVMe PCIe 960GB",
    "rank": 4,
    "benchmark": 433,
    "samples": 461,
    "url": "https://ssd.userbenchmark.com/SpeedTest/498903/INTEL-SSDPED1D960GAY"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V8P2T0B",
    "brand": "Samsung",
    "model": "980 Pro NVMe PCIe M.2 2TB",
    "rank": 5,
    "benchmark": 428,
    "samples": 1830,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1454302/Samsung-SSD-980-PRO-2TB"
  },
  {
    "type": "SSD",
    "part_number": "SSDPED1D480GASX",
    "brand": "Intel",
    "model": "900P Optane NVMe PCIe 480GB",
    "rank": 6,
    "benchmark": 420,
    "samples": 1439,
    "url": "https://ssd.userbenchmark.com/SpeedTest/375784/INTEL-SSDPED1D480GA"
  },
  {
    "type": "SSD",
    "part_number": "SSDPE21D480GASX",
    "brand": "Intel",
    "model": "900P Optane NVMe PCIe 480GB",
    "rank": 6,
    "benchmark": 420,
    "samples": 1439,
    "url": "https://ssd.userbenchmark.com/SpeedTest/375784/INTEL-SSDPED1D480GA"
  },
  {
    "type": "SSD",
    "part_number": "WDS500G1X0E",
    "brand": "WD",
    "model": "Black SN850 NVMe PCIe M.2 500GB",
    "rank": 7,
    "benchmark": 398,
    "samples": 113,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1366573/WD-BLACK-SN850-500GB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V8P1T0B",
    "brand": "Samsung",
    "model": "980 Pro NVMe PCIe M.2 1TB",
    "rank": 8,
    "benchmark": 395,
    "samples": 25381,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1302577/Samsung-SSD-980-PRO-1TB"
  },
  {
    "type": "SSD",
    "part_number": "SB-ROCKET-NVMe4-2TB",
    "brand": "Sabrent",
    "model": "Rocket 4 NVMe PCIe M.2 2TB",
    "rank": 9,
    "benchmark": 380,
    "samples": 4145,
    "url": "https://ssd.userbenchmark.com/SpeedTest/847932/Sabrent-ROCKET-40-2TB"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKNU020TZX1",
    "brand": "Intel",
    "model": "670p NVMe PCIe M.2 2TB",
    "rank": 10,
    "benchmark": 374,
    "samples": 1,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1393067/INTEL-SSDPEKNU020TZ"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F2000GBMP600",
    "brand": "Corsair",
    "model": "Force MP600 NVMe PCIe M.2 2TB",
    "rank": 11,
    "benchmark": 362,
    "samples": 5000,
    "url": "https://ssd.userbenchmark.com/SpeedTest/841469/Force-MP600"
  },
  {
    "type": "SSD",
    "part_number": "GP-ASM2NE6200TTTD",
    "brand": "Gigabyte",
    "model": "Aorus NVMe PCIe M.2 2TB",
    "rank": 12,
    "benchmark": 357,
    "samples": 2758,
    "url": "https://ssd.userbenchmark.com/SpeedTest/844144/GIGABYTE-GP-ASM2NE6200TTTD"
  },
  {
    "type": "SSD",
    "part_number": "SB-ROCKET-NVMe4-1TB",
    "brand": "Sabrent",
    "model": "Rocket 4 NVMe PCIe M.2 1TB",
    "rank": 13,
    "benchmark": 340,
    "samples": 33779,
    "url": "https://ssd.userbenchmark.com/SpeedTest/844208/Sabrent-ROCKET-40-1TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V8P500B",
    "brand": "Samsung",
    "model": "980 Pro NVMe PCIe M.2 500GB",
    "rank": 14,
    "benchmark": 337,
    "samples": 12167,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1307906/Samsung-SSD-980-PRO-500GB"
  },
  {
    "type": "SSD",
    "part_number": "GP-ASM2NE6100TTTD",
    "brand": "Gigabyte",
    "model": "Aorus NVMe PCIe M.2 1TB",
    "rank": 15,
    "benchmark": 333,
    "samples": 10078,
    "url": "https://ssd.userbenchmark.com/SpeedTest/842989/GIGABYTE-GP-ASM2NE6100TTTD"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7S2T0BW",
    "brand": "Samsung",
    "model": "970 Evo Plus NVMe PCIe M.2 2TB",
    "rank": 16,
    "benchmark": 332,
    "samples": 30296,
    "url": "https://ssd.userbenchmark.com/SpeedTest/798635/Samsung-SSD-970-EVO-Plus-2TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7S2T0B/AM",
    "brand": "Samsung",
    "model": "970 Evo Plus NVMe PCIe M.2 2TB",
    "rank": 16,
    "benchmark": 332,
    "samples": 30296,
    "url": "https://ssd.userbenchmark.com/SpeedTest/798635/Samsung-SSD-970-EVO-Plus-2TB"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F1000GBMP600",
    "brand": "Corsair",
    "model": "Force MP600 NVMe PCIe M.2 1TB",
    "rank": 17,
    "benchmark": 331,
    "samples": 32826,
    "url": "https://ssd.userbenchmark.com/SpeedTest/843047/Force-MP600"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7P1T0BW",
    "brand": "Samsung",
    "model": "970 Pro NVMe PCIe M.2 1TB",
    "rank": 18,
    "benchmark": 329,
    "samples": 33264,
    "url": "https://ssd.userbenchmark.com/SpeedTest/497261/Samsung-SSD-970-PRO-1TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7P512BW",
    "brand": "Samsung",
    "model": "970 Pro NVMe PCIe M.2 512GB",
    "rank": 19,
    "benchmark": 325,
    "samples": 78696,
    "url": "https://ssd.userbenchmark.com/SpeedTest/498971/Samsung-SSD-970-PRO-512GB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7S1T0BW",
    "brand": "Samsung",
    "model": "970 Evo Plus NVMe PCIe M.2 1TB",
    "rank": 20,
    "benchmark": 322,
    "samples": 220277,
    "url": "https://ssd.userbenchmark.com/SpeedTest/693540/Samsung-SSD-970-EVO-Plus-1TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7S1T0B/AM",
    "brand": "Samsung",
    "model": "970 Evo Plus NVMe PCIe M.2 1TB",
    "rank": 20,
    "benchmark": 322,
    "samples": 220277,
    "url": "https://ssd.userbenchmark.com/SpeedTest/693540/Samsung-SSD-970-EVO-Plus-1TB"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKNU010TZX1",
    "brand": "Intel",
    "model": "670p NVMe PCIe M.2 1TB",
    "rank": 21,
    "benchmark": 317,
    "samples": 41,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1493432/INTEL-SSDPEKNU010TZ"
  },
  {
    "type": "SSD",
    "part_number": "5MS24AA#ABC",
    "brand": "HP",
    "model": "EX950 NVMe PCIe M.2 2TB",
    "rank": 22,
    "benchmark": 307,
    "samples": 1763,
    "url": "https://ssd.userbenchmark.com/SpeedTest/710813/HP-SSD-EX950-2TB"
  },
  {
    "type": "SSD",
    "part_number": "CT2000P5SSD8",
    "brand": "Crucial",
    "model": "P5 3D NVMe PCIe M.2 2TB",
    "rank": 23,
    "benchmark": 304,
    "samples": 799,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1232397/CT2000P5SSD8"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7E1T0BW",
    "brand": "Samsung",
    "model": "970 Evo NVMe PCIe M.2 1TB",
    "rank": 24,
    "benchmark": 301,
    "samples": 242176,
    "url": "https://ssd.userbenchmark.com/SpeedTest/494791/Samsung-SSD-970-EVO-1TB"
  },
  {
    "type": "SSD",
    "part_number": "CT1000P5SSD8",
    "brand": "Crucial",
    "model": "P5 3D NVMe PCIe M.2 1TB",
    "rank": 25,
    "benchmark": 298,
    "samples": 6334,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1217319/CT1000P5SSD8"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V8V1T0B",
    "brand": "Samsung",
    "model": "980 NVMe PCIe M.2 1TB",
    "rank": 26,
    "benchmark": 296,
    "samples": 2026,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1488476/Samsung-SSD-980-1TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V8P250BW",
    "brand": "Samsung",
    "model": "980 Pro NVMe PCIe M.2 250GB",
    "rank": 27,
    "benchmark": 292,
    "samples": 2399,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1311638/Samsung-SSD-980-PRO-250GB"
  },
  {
    "type": "SSD",
    "part_number": "WDS100T3X0C",
    "brand": "WD",
    "model": "Black SN750 NVMe PCIe M.2 1TB (2019)",
    "rank": 28,
    "benchmark": 289,
    "samples": 62781,
    "url": "https://ssd.userbenchmark.com/SpeedTest/703216/WDS100T3X0C-00SJG0"
  },
  {
    "type": "SSD",
    "part_number": "SB-ROCKET-NVMe4-500",
    "brand": "Sabrent",
    "model": "Rocket 4 NVMe PCIe M.2 500GB",
    "rank": 29,
    "benchmark": 289,
    "samples": 7111,
    "url": "https://ssd.userbenchmark.com/SpeedTest/905105/Sabrent-Rocket-40-500GB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7S500BW",
    "brand": "Samsung",
    "model": "970 Evo Plus NVMe PCIe M.2 500GB",
    "rank": 30,
    "benchmark": 288,
    "samples": 289635,
    "url": "https://ssd.userbenchmark.com/SpeedTest/700020/Samsung-SSD-970-EVO-Plus-500GB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7S500B/AM",
    "brand": "Samsung",
    "model": "970 Evo Plus NVMe PCIe M.2 500GB",
    "rank": 30,
    "benchmark": 288,
    "samples": 289635,
    "url": "https://ssd.userbenchmark.com/SpeedTest/700020/Samsung-SSD-970-EVO-Plus-500GB"
  },
  {
    "type": "SSD",
    "part_number": "5MS23AA#ABC",
    "brand": "HP",
    "model": "EX950 NVMe PCIe M.2 1TB",
    "rank": 31,
    "benchmark": 285,
    "samples": 3085,
    "url": "https://ssd.userbenchmark.com/SpeedTest/706053/HP-SSD-EX950-1TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7E2T0BW",
    "brand": "Samsung",
    "model": "970 Evo NVMe PCIe M.2 2TB",
    "rank": 32,
    "benchmark": 280,
    "samples": 7986,
    "url": "https://ssd.userbenchmark.com/SpeedTest/501128/Samsung-SSD-970-EVO-2TB"
  },
  {
    "type": "SSD",
    "part_number": "2YY47AA#ABC",
    "brand": "HP",
    "model": "EX920 NVMe PCIe M.2 1TB",
    "rank": 33,
    "benchmark": 280,
    "samples": 11394,
    "url": "https://ssd.userbenchmark.com/SpeedTest/488611/HP-SSD-EX920-1TB"
  },
  {
    "type": "SSD",
    "part_number": "ASX8200PNP-1TT-C",
    "brand": "Adata",
    "model": "XPG SX8200 Pro NVMe PCIe M.2 1TB",
    "rank": 34,
    "benchmark": 279,
    "samples": 60301,
    "url": "https://ssd.userbenchmark.com/SpeedTest/638791/ADATA-SX8200PNP"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V6P2T0BW",
    "brand": "Samsung",
    "model": "960 Pro NVMe PCIe M.2 2TB",
    "rank": 35,
    "benchmark": 277,
    "samples": 3063,
    "url": "https://ssd.userbenchmark.com/SpeedTest/215493/Samsung-SSD-960-PRO-2TB"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDXPM2-1T00-G25",
    "brand": "SanDisk",
    "model": "Extreme Pro NVMe PCIe M.2 1TB (2018)",
    "rank": 36,
    "benchmark": 276,
    "samples": 1907,
    "url": "https://ssd.userbenchmark.com/SpeedTest/493695/SanDisk-Extreme-Pro-1TB"
  },
  {
    "type": "SSD",
    "part_number": "ASX8200PNP-2TT-C",
    "brand": "Adata",
    "model": "XPG SX8200 Pro NVMe PCIe M.2 2TB",
    "rank": 37,
    "benchmark": 276,
    "samples": 290,
    "url": "https://ssd.userbenchmark.com/SpeedTest/892867/NVMe-ADATA-SX8200PNP"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V6P512BW",
    "brand": "Samsung",
    "model": "960 Pro NVMe PCIe M.2 512GB",
    "rank": 38,
    "benchmark": 275,
    "samples": 56450,
    "url": "https://ssd.userbenchmark.com/SpeedTest/182182/Samsung-SSD-960-PRO-512GB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V6P1T0BW",
    "brand": "Samsung",
    "model": "960 Pro NVMe PCIe M.2 1TB",
    "rank": 39,
    "benchmark": 273,
    "samples": 14843,
    "url": "https://ssd.userbenchmark.com/SpeedTest/200815/Samsung-SSD-960-PRO-1TB"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEK1W120GA01",
    "brand": "Intel",
    "model": "800p NVMe PCIe M.2 118GB",
    "rank": 40,
    "benchmark": 273,
    "samples": 107,
    "url": "https://ssd.userbenchmark.com/SpeedTest/489136/NVMe-INTEL-SSDPEK1W12"
  },
  {
    "type": "SSD",
    "part_number": "WDS200T3X0C",
    "brand": "WD",
    "model": "Black SN750 NVMe PCIe M.2 2TB (2019)",
    "rank": 41,
    "benchmark": 271,
    "samples": 2131,
    "url": "https://ssd.userbenchmark.com/SpeedTest/764887/WDS200T3X0C-00SJG0"
  },
  {
    "type": "SSD",
    "part_number": "CT500P5SSD8",
    "brand": "Crucial",
    "model": "P5 3D NVMe PCIe M.2 500GB",
    "rank": 42,
    "benchmark": 270,
    "samples": 4435,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1213080/CT500P5SSD8"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7E500BW",
    "brand": "Samsung",
    "model": "970 Evo NVMe PCIe M.2 500GB",
    "rank": 43,
    "benchmark": 270,
    "samples": 322036,
    "url": "https://ssd.userbenchmark.com/SpeedTest/493995/Samsung-SSD-970-EVO-500GB"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEK1W060GA01",
    "brand": "Intel",
    "model": "800p NVMe PCIe M.2 58GB",
    "rank": 44,
    "benchmark": 266,
    "samples": 45,
    "url": "https://ssd.userbenchmark.com/SpeedTest/483445/NVMe-INTEL-SSDPEK1W06"
  },
  {
    "type": "SSD",
    "part_number": "5MS22AA#ABC",
    "brand": "HP",
    "model": "EX950 NVMe PCIe M.2 512GB",
    "rank": 45,
    "benchmark": 263,
    "samples": 2037,
    "url": "https://ssd.userbenchmark.com/SpeedTest/705098/HP-SSD-EX950-512GB"
  },
  {
    "type": "SSD",
    "part_number": "ASX8200NP-960GT-C",
    "brand": "Adata",
    "model": "XPG SX8200 NVMe PCIe M.2 960GB",
    "rank": 46,
    "benchmark": 262,
    "samples": 2954,
    "url": "https://ssd.userbenchmark.com/SpeedTest/504709/ADATA-SX8200NP"
  },
  {
    "type": "SSD",
    "part_number": "ZP1000GM300",
    "brand": "Seagate",
    "model": "FireCuda 510 NVMe PCIe M.2 1TB",
    "rank": 47,
    "benchmark": 261,
    "samples": 2021,
    "url": "https://ssd.userbenchmark.com/SpeedTest/819569/Seagate-FireCuda-510-SSD-ZP1000GM30001"
  },
  {
    "type": "SSD",
    "part_number": "CT2000P2SSD8",
    "brand": "Crucial",
    "model": "P2 3D NVMe PCIe M.2 2TB",
    "rank": 48,
    "benchmark": 251,
    "samples": 489,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1332635/CT2000P2SSD8"
  },
  {
    "type": "SSD",
    "part_number": "ZP2000GM300",
    "brand": "Seagate",
    "model": "FireCuda 510 NVMe PCIe M.2 2TB",
    "rank": 49,
    "benchmark": 251,
    "samples": 932,
    "url": "https://ssd.userbenchmark.com/SpeedTest/827002/Seagate-FireCuda-510-SSD-ZP2000GM30001"
  },
  {
    "type": "SSD",
    "part_number": "WDS100T2X0C",
    "brand": "WD",
    "model": "Black NVMe PCIe M.2 1TB (2018)",
    "rank": 50,
    "benchmark": 248,
    "samples": 5761,
    "url": "https://ssd.userbenchmark.com/SpeedTest/486281/WDS100T2X0C-00L350"
  },
  {
    "type": "SSD",
    "part_number": "WDS500G3X0C",
    "brand": "WD",
    "model": "Black SN750 NVMe PCIe M.2 500GB (2019)",
    "rank": 51,
    "benchmark": 247,
    "samples": 71307,
    "url": "https://ssd.userbenchmark.com/SpeedTest/701228/WDS500G3X0C-00SJG0"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V8V500B",
    "brand": "Samsung",
    "model": "980 NVMe PCIe M.2 500GB",
    "rank": 52,
    "benchmark": 246,
    "samples": 665,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1488477/Samsung-SSD-980-500GB"
  },
  {
    "type": "SSD",
    "part_number": "SB-ROCKET-4TB",
    "brand": "Sabrent",
    "model": "Rocket NVMe PCIe M.2 4TB",
    "rank": 53,
    "benchmark": 245,
    "samples": 256,
    "url": "https://ssd.userbenchmark.com/SpeedTest/953820/Sabrent"
  },
  {
    "type": "SSD",
    "part_number": "ASX8200PNP-512GT-C",
    "brand": "Adata",
    "model": "XPG SX8200 Pro NVMe PCIe M.2 512GB",
    "rank": 54,
    "benchmark": 244,
    "samples": 57628,
    "url": "https://ssd.userbenchmark.com/SpeedTest/634807/ADATA-SX8200PNP"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V6E1T0BW",
    "brand": "Samsung",
    "model": "960 Evo NVMe PCIe M.2 1TB",
    "rank": 55,
    "benchmark": 243,
    "samples": 34513,
    "url": "https://ssd.userbenchmark.com/SpeedTest/211052/Samsung-SSD-960-EVO-1TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7S250BW",
    "brand": "Samsung",
    "model": "970 Evo Plus NVMe PCIe M.2 250GB",
    "rank": 56,
    "benchmark": 242,
    "samples": 68970,
    "url": "https://ssd.userbenchmark.com/SpeedTest/711305/Samsung-SSD-970-EVO-Plus-250GB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7S250B/AM",
    "brand": "Samsung",
    "model": "970 Evo Plus NVMe PCIe M.2 250GB",
    "rank": 56,
    "benchmark": 242,
    "samples": 68970,
    "url": "https://ssd.userbenchmark.com/SpeedTest/711305/Samsung-SSD-970-EVO-Plus-250GB"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDXPM2-500G-G25",
    "brand": "SanDisk",
    "model": "Extreme Pro NVMe PCIe M.2 500GB (2018)",
    "rank": 57,
    "benchmark": 240,
    "samples": 3485,
    "url": "https://ssd.userbenchmark.com/SpeedTest/513270/SanDisk-Extreme-Pro-500GB"
  },
  {
    "type": "SSD",
    "part_number": "2YY46AA#ABC",
    "brand": "HP",
    "model": "EX920 NVMe PCIe M.2 512GB",
    "rank": 58,
    "benchmark": 240,
    "samples": 6296,
    "url": "https://ssd.userbenchmark.com/SpeedTest/486240/HP-SSD-EX920-512GB"
  },
  {
    "type": "SSD",
    "part_number": "SB-ROCKET-2TB",
    "brand": "Sabrent",
    "model": "Rocket NVMe PCIe M.2 2TB",
    "rank": 59,
    "benchmark": 239,
    "samples": 6669,
    "url": "https://ssd.userbenchmark.com/SpeedTest/847986/NVMe-Sabrent"
  },
  {
    "type": "SSD",
    "part_number": "MZVLB1T0HALR",
    "brand": "Samsung",
    "model": "PM981 NVMe PCIe M.2 1TB",
    "rank": 60,
    "benchmark": 239,
    "samples": 23339,
    "url": "https://ssd.userbenchmark.com/SpeedTest/413203/PM981-NVMe-Samsung-1024GB"
  },
  {
    "type": "SSD",
    "part_number": "WDS100T2B0C",
    "brand": "WD",
    "model": "Blue SN550 NVMe PCIe M.2 1TB",
    "rank": 61,
    "benchmark": 237,
    "samples": 79002,
    "url": "https://ssd.userbenchmark.com/SpeedTest/994217/WDC-WDS100T2B0C-00PXH0"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDPL500GB-D8",
    "brand": "Mushkin",
    "model": "Pilot NVMe PCIe M.2 500GB",
    "rank": 62,
    "benchmark": 237,
    "samples": 2473,
    "url": "https://ssd.userbenchmark.com/SpeedTest/517228/MKNSSDPL500GB-D8"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F1920GBMP510",
    "brand": "Corsair",
    "model": "Force NVMe PCIe M.2 2TB",
    "rank": 63,
    "benchmark": 236,
    "samples": 2308,
    "url": "https://ssd.userbenchmark.com/SpeedTest/633975/Force-MP510"
  },
  {
    "type": "SSD",
    "part_number": "MZVKW512HMJP-00000",
    "brand": "Samsung",
    "model": "SM961 NVMe PCIe M.2 512GB",
    "rank": 64,
    "benchmark": 235,
    "samples": 16018,
    "url": "https://ssd.userbenchmark.com/SpeedTest/147864/NVMe-SAMSUNG-MZVKW512"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F960GBMP510",
    "brand": "Corsair",
    "model": "Force NVMe PCIe M.2 960GB",
    "rank": 65,
    "benchmark": 233,
    "samples": 22885,
    "url": "https://ssd.userbenchmark.com/SpeedTest/609454/Force-MP510"
  },
  {
    "type": "SSD",
    "part_number": "CT250P5SSD8",
    "brand": "Crucial",
    "model": "P5 3D NVMe PCIe M.2 250GB",
    "rank": 66,
    "benchmark": 231,
    "samples": 452,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1239408/CT250P5SSD8"
  },
  {
    "type": "SSD",
    "part_number": "ASX8200NP-480GT-C",
    "brand": "Adata",
    "model": "XPG SX8200 NVMe PCIe M.2 480GB",
    "rank": 67,
    "benchmark": 231,
    "samples": 13377,
    "url": "https://ssd.userbenchmark.com/SpeedTest/482768/ADATA-SX8200NP"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM961 NVMe PCIe M.2 1TB",
    "rank": 68,
    "benchmark": 231,
    "samples": 5169,
    "url": "https://ssd.userbenchmark.com/SpeedTest/165378/NVMe-SAMSUNG-MZVLW1T0"
  },
  {
    "type": "SSD",
    "part_number": "WDS500G2X0C",
    "brand": "WD",
    "model": "Black NVMe PCIe M.2 500GB (2018)",
    "rank": 69,
    "benchmark": 230,
    "samples": 19255,
    "url": "https://ssd.userbenchmark.com/SpeedTest/485459/WDS500G2X0C-00L350"
  },
  {
    "type": "SSD",
    "part_number": "CT1000P1SSD8",
    "brand": "Crucial",
    "model": "P1 3D NVMe PCIe M.2 1TB",
    "rank": 70,
    "benchmark": 230,
    "samples": 112087,
    "url": "https://ssd.userbenchmark.com/SpeedTest/607339/CT1000P1SSD8"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V7E250BW",
    "brand": "Samsung",
    "model": "970 Evo NVMe PCIe M.2 250GB",
    "rank": 71,
    "benchmark": 229,
    "samples": 133384,
    "url": "https://ssd.userbenchmark.com/SpeedTest/494033/Samsung-SSD-970-EVO-250GB"
  },
  {
    "type": "SSD",
    "part_number": "SB-ROCKET-1TB",
    "brand": "Sabrent",
    "model": "Rocket NVMe PCIe M.2 1TB",
    "rank": 72,
    "benchmark": 226,
    "samples": 846,
    "url": "https://ssd.userbenchmark.com/SpeedTest/764240/NVMe-Sabrent"
  },
  {
    "type": "SSD",
    "part_number": "AGAMMIXS11-480GT-C",
    "brand": "XPG",
    "model": "Gammix S11 NVMe PCIe M.2 480GB",
    "rank": 73,
    "benchmark": 225,
    "samples": 1955,
    "url": "https://ssd.userbenchmark.com/SpeedTest/506229/XPG-GAMMIX-S11"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKKW512G8XT",
    "brand": "Intel",
    "model": "760p Series NVMe PCIe M.2 512GB",
    "rank": 74,
    "benchmark": 223,
    "samples": 7363,
    "url": "https://ssd.userbenchmark.com/SpeedTest/433786/INTEL-SSDPEKKW512G8"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V5P512BW",
    "brand": "Samsung",
    "model": "950 NVMe PCIe M.2 512GB",
    "rank": 75,
    "benchmark": 222,
    "samples": 47099,
    "url": "https://ssd.userbenchmark.com/SpeedTest/38554/NVMe-Samsung-SSD-950"
  },
  {
    "type": "SSD",
    "part_number": "CT1000P2SSD8",
    "brand": "Crucial",
    "model": "P2 3D NVMe PCIe M.2 1TB",
    "rank": 76,
    "benchmark": 222,
    "samples": 6649,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1312497/CT1000P2SSD8"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKNW020T8X1",
    "brand": "Intel",
    "model": "660p NVMe PCIe M.2 2TB",
    "rank": 77,
    "benchmark": 219,
    "samples": 26418,
    "url": "https://ssd.userbenchmark.com/SpeedTest/610546/INTEL-SSDPEKNW020T8"
  },
  {
    "type": "SSD",
    "part_number": "MZVLB512HAJQ",
    "brand": "Samsung",
    "model": "PM981 NVMe PCIe M.2 512GB",
    "rank": 78,
    "benchmark": 216,
    "samples": 57963,
    "url": "https://ssd.userbenchmark.com/SpeedTest/401452/SAMSUNG-MZVLB512HAJQ-000L2"
  },
  {
    "type": "SSD",
    "part_number": "ASX8200PNP-256GT-C",
    "brand": "Adata",
    "model": "XPG SX8200 Pro NVMe PCIe M.2 256GB",
    "rank": 79,
    "benchmark": 215,
    "samples": 27046,
    "url": "https://ssd.userbenchmark.com/SpeedTest/636955/ADATA-SX8200PNP"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V6E500BW",
    "brand": "Samsung",
    "model": "960 Evo NVMe PCIe M.2 500GB",
    "rank": 80,
    "benchmark": 213,
    "samples": 138264,
    "url": "https://ssd.userbenchmark.com/SpeedTest/204072/Samsung-SSD-960-EVO-500GB"
  },
  {
    "type": "SSD",
    "part_number": "SSDPE2MD400G401",
    "brand": "Intel",
    "model": "DC P3700 Series NVMe PCIe 400GB",
    "rank": 81,
    "benchmark": 208,
    "samples": 56,
    "url": "https://ssd.userbenchmark.com/SpeedTest/16595/NVMe-INTEL-SSDPEDMD40"
  },
  {
    "type": "SSD",
    "part_number": "WDS500G2B0C",
    "brand": "WD",
    "model": "Blue SN550 NVMe PCIe M.2 500GB",
    "rank": 82,
    "benchmark": 207,
    "samples": 50416,
    "url": "https://ssd.userbenchmark.com/SpeedTest/998114/WDC-WDS500G2B0C-00PXH0"
  },
  {
    "type": "SSD",
    "part_number": "2YY45AA#ABC",
    "brand": "HP",
    "model": "EX920 NVMe PCIe M.2 256GB",
    "rank": 83,
    "benchmark": 204,
    "samples": 1840,
    "url": "https://ssd.userbenchmark.com/SpeedTest/537061/HP-SSD-EX920-256GB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V8V250B",
    "brand": "Samsung",
    "model": "980 NVMe PCIe M.2 250GB",
    "rank": 84,
    "benchmark": 204,
    "samples": 144,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1501500/Samsung-SSD-980-250GB"
  },
  {
    "type": "SSD",
    "part_number": "WDS250G3X0C",
    "brand": "WD",
    "model": "Black SN750 NVMe PCIe M.2 250GB (2019)",
    "rank": 85,
    "benchmark": 201,
    "samples": 10099,
    "url": "https://ssd.userbenchmark.com/SpeedTest/716792/WDS250G3X0C-00SJG0"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKNW010T8X1",
    "brand": "Intel",
    "model": "660p NVMe PCIe M.2 1TB",
    "rank": 86,
    "benchmark": 200,
    "samples": 131677,
    "url": "https://ssd.userbenchmark.com/SpeedTest/602553/INTEL-SSDPEKNW010T8"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V5P256BW",
    "brand": "Samsung",
    "model": "950 NVMe PCIe M.2 256GB",
    "rank": 87,
    "benchmark": 200,
    "samples": 37853,
    "url": "https://ssd.userbenchmark.com/SpeedTest/38570/NVMe-Samsung-SSD-950"
  },
  {
    "type": "SSD",
    "part_number": "MZVPV512HDGL-00000",
    "brand": "Samsung",
    "model": "SM951 NVMe PCIe M.2 512GB",
    "rank": 88,
    "benchmark": 200,
    "samples": 8398,
    "url": "https://ssd.userbenchmark.com/SpeedTest/30300/NVMe-SAMSUNG-MZVKV512"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM961 NVMe PCIe M.2 512GB",
    "rank": 89,
    "benchmark": 199,
    "samples": 31897,
    "url": "https://ssd.userbenchmark.com/SpeedTest/181300/NVMe-SAMSUNG-MZVLW512"
  },
  {
    "type": "SSD",
    "part_number": "ASX6000PNP-512GT-C",
    "brand": "Adata",
    "model": "XPG SX6000 Pro NVMe PCIe M.2 512GB",
    "rank": 90,
    "benchmark": 196,
    "samples": 7627,
    "url": "https://ssd.userbenchmark.com/SpeedTest/594216/ADATA-SX6000PNP"
  },
  {
    "type": "SSD",
    "part_number": "PX-512M8PeG",
    "brand": "Plextor",
    "model": "M8Pe NVMe PCIe M.2 512GB",
    "rank": 91,
    "benchmark": 196,
    "samples": 2442,
    "url": "https://ssd.userbenchmark.com/SpeedTest/169863/PLEXTOR-PX-512M8PeG"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F480GBMP510",
    "brand": "Corsair",
    "model": "Force NVMe PCIe M.2 480GB",
    "rank": 92,
    "benchmark": 195,
    "samples": 25164,
    "url": "https://ssd.userbenchmark.com/SpeedTest/626885/Force-MP510"
  },
  {
    "type": "SSD",
    "part_number": "PX-1TM8PeG",
    "brand": "Plextor",
    "model": "M8Pe NVMe PCIe M.2 1TB",
    "rank": 93,
    "benchmark": 194,
    "samples": 353,
    "url": "https://ssd.userbenchmark.com/SpeedTest/175630/PLEXTOR-PX-1TM8PeG"
  },
  {
    "type": "SSD",
    "part_number": "MZ-V6E250BW",
    "brand": "Samsung",
    "model": "960 Evo NVMe PCIe M.2 250GB",
    "rank": 94,
    "benchmark": 194,
    "samples": 224761,
    "url": "https://ssd.userbenchmark.com/SpeedTest/200373/Samsung-SSD-960-EVO-250GB"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-N800GBNX500",
    "brand": "Corsair",
    "model": "Neutron NX500 NVMe PCIe 800GB",
    "rank": 95,
    "benchmark": 191,
    "samples": 95,
    "url": "https://ssd.userbenchmark.com/SpeedTest/369784/Neutron-NX500"
  },
  {
    "type": "SSD",
    "part_number": "ASX6000PNP-1TT-C",
    "brand": "Adata",
    "model": "XPG SX6000 Pro NVMe PCIe M.2 1TB",
    "rank": 96,
    "benchmark": 191,
    "samples": 5166,
    "url": "https://ssd.userbenchmark.com/SpeedTest/664077/ADATA-SX6000PNP"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEDMW400G4X1",
    "brand": "Intel",
    "model": "750 Series NVMe PCIe 400GB",
    "rank": 97,
    "benchmark": 190,
    "samples": 8102,
    "url": "https://ssd.userbenchmark.com/SpeedTest/26870/NVMe-INTEL-SSDPEDMW40"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEDMW400G4R5",
    "brand": "Intel",
    "model": "750 Series NVMe PCIe 400GB",
    "rank": 97,
    "benchmark": 190,
    "samples": 8102,
    "url": "https://ssd.userbenchmark.com/SpeedTest/26870/NVMe-INTEL-SSDPEDMW40"
  },
  {
    "type": "SSD",
    "part_number": "SB-ROCKET-512",
    "brand": "Nvme",
    "model": "Rocket NVMe PCIe M.2 512GB",
    "rank": 98,
    "benchmark": 190,
    "samples": 14088,
    "url": "https://ssd.userbenchmark.com/SpeedTest/801884/NVMe-Sabrent"
  },
  {
    "type": "SSD",
    "part_number": "WDS500G1B0C",
    "brand": "WD",
    "model": "Blue SN500 NVMe PCIe M.2 500GB",
    "rank": 99,
    "benchmark": 189,
    "samples": 11494,
    "url": "https://ssd.userbenchmark.com/SpeedTest/759521/WDC-WDS500G1B0C-00S6U0"
  },
  {
    "type": "SSD",
    "part_number": "CT500P2SSD8",
    "brand": "Crucial",
    "model": "P2 3D NVMe PCIe M.2 500GB",
    "rank": 100,
    "benchmark": 189,
    "samples": 15608,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1110621/CT500P2SSD8"
  },
  {
    "type": "SSD",
    "part_number": "ZTSSD-PG3-480G-GE",
    "brand": "Zotac",
    "model": "Sonix NVMe PCIe 480GB",
    "rank": 101,
    "benchmark": 188,
    "samples": 217,
    "url": "https://ssd.userbenchmark.com/SpeedTest/131041/NVMe-ZTSSDPG3-480G-GE"
  },
  {
    "type": "SSD",
    "part_number": "WDS250G2X0C",
    "brand": "WD",
    "model": "Black NVMe PCIe M.2 250GB (2018)",
    "rank": 102,
    "benchmark": 188,
    "samples": 7982,
    "url": "https://ssd.userbenchmark.com/SpeedTest/482421/WDS250G2X0C-00L350"
  },
  {
    "type": "SSD",
    "part_number": "2YY44AA#ABC",
    "brand": "HP",
    "model": "EX900 NVMe PCIe M.2 500GB",
    "rank": 103,
    "benchmark": 187,
    "samples": 6879,
    "url": "https://ssd.userbenchmark.com/SpeedTest/532017/HP-SSD-EX900-500GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Intel",
    "model": "Optane+ NVMe PCIe 500GB",
    "rank": 104,
    "benchmark": 187,
    "samples": 1390,
    "url": "https://ssd.userbenchmark.com/SpeedTest/268688/Intel-Optane-466GBSSD"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKKW256G8XT",
    "brand": "Intel",
    "model": "760p Series NVMe PCIe M.2 256GB",
    "rank": 105,
    "benchmark": 186,
    "samples": 16990,
    "url": "https://ssd.userbenchmark.com/SpeedTest/434656/INTEL-SSDPEKKW256G8"
  },
  {
    "type": "SSD",
    "part_number": "CT500P1SSD8",
    "brand": "Crucial",
    "model": "P1 3D NVMe PCIe M.2 500GB",
    "rank": 106,
    "benchmark": 184,
    "samples": 62615,
    "url": "https://ssd.userbenchmark.com/SpeedTest/614152/CT500P1SSD8"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDPL250GB-D8",
    "brand": "Mushkin",
    "model": "Pilot NVMe PCIe M.2 250GB",
    "rank": 107,
    "benchmark": 184,
    "samples": 881,
    "url": "https://ssd.userbenchmark.com/SpeedTest/515464/MKNSSDPL250GB-D8"
  },
  {
    "type": "SSD",
    "part_number": "MZVPV256HDGL-00000",
    "brand": "Samsung",
    "model": "SM951 NVMe PCIe M.2 256GB",
    "rank": 108,
    "benchmark": 183,
    "samples": 6858,
    "url": "https://ssd.userbenchmark.com/SpeedTest/30950/NVMe-SAMSUNG-MZVPV256"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-N400GBNX500",
    "brand": "Corsair",
    "model": "Neutron NX500 NVMe PCIe 400GB",
    "rank": 109,
    "benchmark": 183,
    "samples": 417,
    "url": "https://ssd.userbenchmark.com/SpeedTest/331636/Neutron-NX500"
  },
  {
    "type": "SSD",
    "part_number": "MZHPV512HDGL-00000",
    "brand": "Samsung",
    "model": "SM951 AHCI PCIe M.2 512GB",
    "rank": 110,
    "benchmark": 183,
    "samples": 5086,
    "url": "https://ssd.userbenchmark.com/SpeedTest/24647/SAMSUNG-MZHPV512HDGL-00000"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Intel",
    "model": "Optane+ NVMe PCIe 128GB",
    "rank": 111,
    "benchmark": 183,
    "samples": 200,
    "url": "https://ssd.userbenchmark.com/SpeedTest/278104/Intel-Optane-119GBSSD"
  },
  {
    "type": "SSD",
    "part_number": "5XM46AA#ABC",
    "brand": "HP",
    "model": "EX900 NVMe PCIe M.2 1TB",
    "rank": 112,
    "benchmark": 183,
    "samples": 105,
    "url": "https://ssd.userbenchmark.com/SpeedTest/695989/HP-SSD-EX900-1TB"
  },
  {
    "type": "SSD",
    "part_number": "MZVLW256HEHP",
    "brand": "Samsung",
    "model": "PM961 NVMe PCIe M.2 256GB",
    "rank": 113,
    "benchmark": 181,
    "samples": 72225,
    "url": "https://ssd.userbenchmark.com/SpeedTest/174249/SAMSUNG-MZVLW256HEHP-00000"
  },
  {
    "type": "SSD",
    "part_number": "PX-256M8PeG",
    "brand": "Plextor",
    "model": "M8Pe NVMe PCIe M.2 256GB",
    "rank": 114,
    "benchmark": 175,
    "samples": 2245,
    "url": "https://ssd.userbenchmark.com/SpeedTest/171701/PLEXTOR-PX-256M8PeG"
  },
  {
    "type": "SSD",
    "part_number": "RVD400-M22280-256G",
    "brand": "Toshiba",
    "model": "OCZ RD400 NVMe PCIe M.2 256GB",
    "rank": 115,
    "benchmark": 175,
    "samples": 3114,
    "url": "https://ssd.userbenchmark.com/SpeedTest/142093/NVMe-TOSHIBA-RD400"
  },
  {
    "type": "SSD",
    "part_number": "CT250P2SSD8",
    "brand": "Crucial",
    "model": "P2 3D NVMe PCIe M.2 250GB",
    "rank": 116,
    "benchmark": 173,
    "samples": 1854,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1121042/CT250P2SSD8"
  },
  {
    "type": "SSD",
    "part_number": "SKC1000/960G",
    "brand": "Kingston",
    "model": "KC1000 NVMe PCIe M.2 960GB",
    "rank": 117,
    "benchmark": 172,
    "samples": 266,
    "url": "https://ssd.userbenchmark.com/SpeedTest/320126/KINGSTON-SKC1000960G"
  },
  {
    "type": "SSD",
    "part_number": "MZVLW128",
    "brand": "Samsung",
    "model": "PM961 NVMe PCIe M.2 128GB",
    "rank": 118,
    "benchmark": 172,
    "samples": 8200,
    "url": "https://ssd.userbenchmark.com/SpeedTest/194898/NVMe-SAMSUNG-MZVLW128"
  },
  {
    "type": "SSD",
    "part_number": "MZHPV256HDGL-00000",
    "brand": "Samsung",
    "model": "SM951 AHCI PCIe M.2 256GB",
    "rank": 119,
    "benchmark": 172,
    "samples": 6448,
    "url": "https://ssd.userbenchmark.com/SpeedTest/24782/SAMSUNG-MZHPV256HDGL-00000"
  },
  {
    "type": "SSD",
    "part_number": "ASX6000PNP-256GT-C",
    "brand": "Adata",
    "model": "XPG SX6000 Pro NVMe PCIe M.2 256GB",
    "rank": 120,
    "benchmark": 172,
    "samples": 10345,
    "url": "https://ssd.userbenchmark.com/SpeedTest/607866/ADATA-SX6000PNP"
  },
  {
    "type": "SSD",
    "part_number": "WDS250G2B0C",
    "brand": "WD",
    "model": "Blue SN550 NVMe PCIe M.2 250GB",
    "rank": 121,
    "benchmark": 171,
    "samples": 7793,
    "url": "https://ssd.userbenchmark.com/SpeedTest/991678/WDC-WDS250G2B0C-00PXH0"
  },
  {
    "type": "SSD",
    "part_number": "MZVPV128HDGM-00000",
    "brand": "Samsung",
    "model": "SM951 NVMe PCIe M.2 128GB",
    "rank": 122,
    "benchmark": 167,
    "samples": 1518,
    "url": "https://ssd.userbenchmark.com/SpeedTest/34737/NVMe-SAMSUNG-MZVPV128"
  },
  {
    "type": "SSD",
    "part_number": "AGAMMIXS11-240GT-C",
    "brand": "XPG",
    "model": "Gammix S11 NVMe PCIe M.2 240GB",
    "rank": 123,
    "benchmark": 166,
    "samples": 1942,
    "url": "https://ssd.userbenchmark.com/SpeedTest/497242/XPG-GAMMIX-S11"
  },
  {
    "type": "SSD",
    "part_number": "ASX8200NP-240GT-C",
    "brand": "Adata",
    "model": "XPG SX8200 NVMe PCIe M.2 240GB",
    "rank": 124,
    "benchmark": 166,
    "samples": 9680,
    "url": "https://ssd.userbenchmark.com/SpeedTest/480586/ADATA-SX8200NP"
  },
  {
    "type": "SSD",
    "part_number": "WDS250G1B0C",
    "brand": "WD",
    "model": "Blue SN500 NVMe PCIe M.2 250GB",
    "rank": 125,
    "benchmark": 165,
    "samples": 2493,
    "url": "https://ssd.userbenchmark.com/SpeedTest/756076/WDC-WDS250G1B0C-00S6U0"
  },
  {
    "type": "SSD",
    "part_number": "SKC1000/480G",
    "brand": "Kingston",
    "model": "KC1000 NVMe PCIe M.2 480GB",
    "rank": 126,
    "benchmark": 163,
    "samples": 895,
    "url": "https://ssd.userbenchmark.com/SpeedTest/316248/KINGSTON-SKC1000480G"
  },
  {
    "type": "SSD",
    "part_number": "2YY43AA#ABC",
    "brand": "HP",
    "model": "EX900 NVMe PCIe M.2 250GB",
    "rank": 127,
    "benchmark": 163,
    "samples": 8437,
    "url": "https://ssd.userbenchmark.com/SpeedTest/455743/HP-SSD-EX900-250GB"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F480GBMP500",
    "brand": "Corsair",
    "model": "Force MP500 NVMe PCIe M.2 480GB",
    "rank": 128,
    "benchmark": 162,
    "samples": 3253,
    "url": "https://ssd.userbenchmark.com/SpeedTest/223982/Force-MP500"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Apple",
    "model": "SM0512G PCIe 500GB",
    "rank": 129,
    "benchmark": 161,
    "samples": 1067,
    "url": "https://ssd.userbenchmark.com/SpeedTest/25611/APPLE-SSD-SM0512G"
  },
  {
    "type": "SSD",
    "part_number": "MZHPV128HDGM-00000",
    "brand": "Samsung",
    "model": "SM951 AHCI PCIe M.2 128GB",
    "rank": 130,
    "benchmark": 160,
    "samples": 1946,
    "url": "https://ssd.userbenchmark.com/SpeedTest/26719/SAMSUNG-MZHPV128HDGM-00000"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F240GBMP510",
    "brand": "Corsair",
    "model": "Force NVMe PCIe M.2 240GB",
    "rank": 131,
    "benchmark": 160,
    "samples": 22099,
    "url": "https://ssd.userbenchmark.com/SpeedTest/612603/Force-MP510"
  },
  {
    "type": "SSD",
    "part_number": "RVD350-FHPX28-960G",
    "brand": "OCZ",
    "model": "RevoDrive 350 PCIe 960GB",
    "rank": 132,
    "benchmark": 159,
    "samples": 148,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15245/OCZ-REVODRIVE350"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSN5512GPU7 NVMe PCIe M.2 512GB",
    "rank": 133,
    "benchmark": 158,
    "samples": 10745,
    "url": "https://ssd.userbenchmark.com/SpeedTest/120558/NVMe-THNSN5512GPU7-NV"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEDME400G401",
    "brand": "Intel",
    "model": "DC P3600 Series NVMe PCIe 400GB",
    "rank": 134,
    "benchmark": 158,
    "samples": 40,
    "url": "https://ssd.userbenchmark.com/SpeedTest/22744/NVMe-INTEL-SSDPEDME40"
  },
  {
    "type": "SSD",
    "part_number": "MDNVME80-BPX-0512",
    "brand": "MyDigitalSSD",
    "model": "BPX NVMe PCIe M.2 480GB",
    "rank": 135,
    "benchmark": 157,
    "samples": 1415,
    "url": "https://ssd.userbenchmark.com/SpeedTest/206552/BPX"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKNW512G8X1",
    "brand": "Intel",
    "model": "660p NVMe PCIe M.2 512GB",
    "rank": 136,
    "benchmark": 157,
    "samples": 119484,
    "url": "https://ssd.userbenchmark.com/SpeedTest/557263/INTEL-SSDPEKNW512G8"
  },
  {
    "type": "SSD",
    "part_number": "KXG50ZNV1T02",
    "brand": "Toshiba",
    "model": "XG5 NVMe PCIe M.2 1TB",
    "rank": 137,
    "benchmark": 157,
    "samples": 6782,
    "url": "https://ssd.userbenchmark.com/SpeedTest/359586/KXG50ZNV1T02-NVMe-TOSHIBA-1024GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM951 NVMe PCIe M.2 512GB 1TB",
    "rank": 138,
    "benchmark": 156,
    "samples": 2114,
    "url": "https://ssd.userbenchmark.com/SpeedTest/39907/NVMe-PM951-NVMe-SAMSU"
  },
  {
    "type": "SSD",
    "part_number": "SB-ROCKET-256",
    "brand": "Sabrent",
    "model": "Rocket NVMe PCIe M.2 256GB",
    "rank": 139,
    "benchmark": 156,
    "samples": 8201,
    "url": "https://ssd.userbenchmark.com/SpeedTest/759740/NVMe-Sabrent"
  },
  {
    "type": "SSD",
    "part_number": "PH480GPM280SSDR",
    "brand": "Patriot",
    "model": "Hellfire NVMe PCIe M.2 480GB",
    "rank": 140,
    "benchmark": 153,
    "samples": 750,
    "url": "https://ssd.userbenchmark.com/SpeedTest/184918/Patriot-Hellfire-M2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSN5128GPU7 NVMe PCIe M.2 128GB",
    "rank": 141,
    "benchmark": 152,
    "samples": 2212,
    "url": "https://ssd.userbenchmark.com/SpeedTest/38688/NVMe-THNSN5128GPU7-TO"
  },
  {
    "type": "SSD",
    "part_number": "ASX8000NP-512GM-C",
    "brand": "Adata",
    "model": "XPG SX8000 NVMe PCIe M.2 512GB",
    "rank": 142,
    "benchmark": 152,
    "samples": 1387,
    "url": "https://ssd.userbenchmark.com/SpeedTest/218488/NVMe-ADATA-SX8000NP"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F240GBMP500",
    "brand": "Corsair",
    "model": "Force MP500 NVMe PCIe M.2 240GB",
    "rank": 143,
    "benchmark": 151,
    "samples": 9873,
    "url": "https://ssd.userbenchmark.com/SpeedTest/213562/Force-MP500"
  },
  {
    "type": "SSD",
    "part_number": "MDNVME80-BPX-0256",
    "brand": "MyDigitalSSD",
    "model": "BPX NVMe PCIe M.2 240GB",
    "rank": 144,
    "benchmark": 151,
    "samples": 1128,
    "url": "https://ssd.userbenchmark.com/SpeedTest/211350/BPX"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDPL120GB-D8",
    "brand": "Mushkin",
    "model": "Pilot NVMe PCIe M.2 120GB",
    "rank": 145,
    "benchmark": 149,
    "samples": 149,
    "url": "https://ssd.userbenchmark.com/SpeedTest/533910/MKNSSDPL120GB-D8"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Apple",
    "model": "SM0256G PCIe 251GB",
    "rank": 146,
    "benchmark": 148,
    "samples": 757,
    "url": "https://ssd.userbenchmark.com/SpeedTest/25442/APPLE-SSD-SM0256G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSN5256GPU7 NVMe PCIe M.2 256GB",
    "rank": 147,
    "benchmark": 148,
    "samples": 10597,
    "url": "https://ssd.userbenchmark.com/SpeedTest/36660/NVMe-THNSN5256GPU7-TO"
  },
  {
    "type": "SSD",
    "part_number": "PX-512M8SeY",
    "brand": "Plextor",
    "model": "M8Se NVMe PCIe M.2 512GB",
    "rank": 148,
    "benchmark": 146,
    "samples": 168,
    "url": "https://ssd.userbenchmark.com/SpeedTest/341666/PLEXTOR-PX-512M8SeG"
  },
  {
    "type": "SSD",
    "part_number": "PX-512M8SeG",
    "brand": "Plextor",
    "model": "M8Se NVMe PCIe M.2 512GB",
    "rank": 148,
    "benchmark": 146,
    "samples": 168,
    "url": "https://ssd.userbenchmark.com/SpeedTest/341666/PLEXTOR-PX-512M8SeG"
  },
  {
    "type": "SSD",
    "part_number": "PX-512M8SeGN",
    "brand": "Plextor",
    "model": "M8Se NVMe PCIe M.2 512GB",
    "rank": 148,
    "benchmark": 146,
    "samples": 168,
    "url": "https://ssd.userbenchmark.com/SpeedTest/341666/PLEXTOR-PX-512M8SeG"
  },
  {
    "type": "SSD",
    "part_number": "PX-1TM8SeY",
    "brand": "Plextor",
    "model": "M8Se NVMe PCIe M.2 1TB",
    "rank": 149,
    "benchmark": 143,
    "samples": 134,
    "url": "https://ssd.userbenchmark.com/SpeedTest/331208/PLEXTOR-PX-1TM8SeG"
  },
  {
    "type": "SSD",
    "part_number": "PX-1TM8SeG",
    "brand": "Plextor",
    "model": "M8Se NVMe PCIe M.2 1TB",
    "rank": 149,
    "benchmark": 143,
    "samples": 134,
    "url": "https://ssd.userbenchmark.com/SpeedTest/331208/PLEXTOR-PX-1TM8SeG"
  },
  {
    "type": "SSD",
    "part_number": "PX-1TM8SeGN",
    "brand": "Plextor",
    "model": "M8Se NVMe PCIe M.2 1TB",
    "rank": 149,
    "benchmark": 143,
    "samples": 134,
    "url": "https://ssd.userbenchmark.com/SpeedTest/331208/PLEXTOR-PX-1TM8SeG"
  },
  {
    "type": "SSD",
    "part_number": "2YY42AA#ABC",
    "brand": "HP",
    "model": "EX900 NVMe PCIe M.2 120GB",
    "rank": 150,
    "benchmark": 143,
    "samples": 1705,
    "url": "https://ssd.userbenchmark.com/SpeedTest/489362/HP-SSD-EX900-120GB"
  },
  {
    "type": "SSD",
    "part_number": "SHPM2280P2/480G",
    "brand": "Kingston",
    "model": "HyperX Predator AHCI PCIe M.2 480GB",
    "rank": 151,
    "benchmark": 143,
    "samples": 1721,
    "url": "https://ssd.userbenchmark.com/SpeedTest/27251/Kingston-SHPM2280P2480G"
  },
  {
    "type": "SSD",
    "part_number": "PX-128M8PeG",
    "brand": "Plextor",
    "model": "M8Pe NVMe PCIe M.2 128GB",
    "rank": 152,
    "benchmark": 143,
    "samples": 486,
    "url": "https://ssd.userbenchmark.com/SpeedTest/171560/PLEXTOR-PX-128M8PeG"
  },
  {
    "type": "SSD",
    "part_number": "RVD350-FHPX28-480G",
    "brand": "OCZ",
    "model": "RevoDrive 350 PCIe 480GB",
    "rank": 153,
    "benchmark": 142,
    "samples": 487,
    "url": "https://ssd.userbenchmark.com/SpeedTest/13514/OCZ-REVODRIVE350"
  },
  {
    "type": "SSD",
    "part_number": "PH240GPM280SSDR",
    "brand": "Patriot",
    "model": "Hellfire NVMe PCIe M.2 240GB",
    "rank": 154,
    "benchmark": 142,
    "samples": 1864,
    "url": "https://ssd.userbenchmark.com/SpeedTest/179778/Patriot-Hellfire-M2"
  },
  {
    "type": "SSD",
    "part_number": "SKC1000/240G",
    "brand": "Kingston",
    "model": "KC1000 NVMe PCIe M.2 240GB",
    "rank": 155,
    "benchmark": 140,
    "samples": 1442,
    "url": "https://ssd.userbenchmark.com/SpeedTest/312458/KINGSTON-SKC1000240G"
  },
  {
    "type": "SSD",
    "part_number": "MDNVME80-BPX-0128",
    "brand": "MyDigitalSSD",
    "model": "BPX NVMe PCIe M.2 120GB",
    "rank": 156,
    "benchmark": 139,
    "samples": 656,
    "url": "https://ssd.userbenchmark.com/SpeedTest/217777/BPX"
  },
  {
    "type": "SSD",
    "part_number": "KXG50ZNV512G",
    "brand": "Toshiba",
    "model": "XG5 NVMe PCIe M.2 512GB",
    "rank": 157,
    "benchmark": 137,
    "samples": 27891,
    "url": "https://ssd.userbenchmark.com/SpeedTest/359770/KXG50ZNV512G-NVMe-TOSHIBA-512GB"
  },
  {
    "type": "SSD",
    "part_number": "PX-256M8SeY",
    "brand": "Plextor",
    "model": "M8Se NVMe PCIe M.2 256GB",
    "rank": 158,
    "benchmark": 137,
    "samples": 322,
    "url": "https://ssd.userbenchmark.com/SpeedTest/327270/PLEXTOR-PX-256M8SeG"
  },
  {
    "type": "SSD",
    "part_number": "PX-256M8SeG",
    "brand": "Plextor",
    "model": "M8Se NVMe PCIe M.2 256GB",
    "rank": 158,
    "benchmark": 137,
    "samples": 322,
    "url": "https://ssd.userbenchmark.com/SpeedTest/327270/PLEXTOR-PX-256M8SeG"
  },
  {
    "type": "SSD",
    "part_number": "PX-256M8SeGN",
    "brand": "Plextor",
    "model": "M8Se NVMe PCIe M.2 256GB",
    "rank": 158,
    "benchmark": 137,
    "samples": 322,
    "url": "https://ssd.userbenchmark.com/SpeedTest/327270/PLEXTOR-PX-256M8SeG"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM951 NVMe PCIe M.2 512GB",
    "rank": 159,
    "benchmark": 137,
    "samples": 6277,
    "url": "https://ssd.userbenchmark.com/SpeedTest/37633/NVMe-PM951-NVMe-SAMSU"
  },
  {
    "type": "SSD",
    "part_number": "ASX8000NP-256GM-C",
    "brand": "Adata",
    "model": "XPG SX8000 NVMe PCIe M.2 256GB",
    "rank": 160,
    "benchmark": 137,
    "samples": 2212,
    "url": "https://ssd.userbenchmark.com/SpeedTest/209005/NVMe-ADATA-SX8000NP"
  },
  {
    "type": "SSD",
    "part_number": "SA1000M8/960G",
    "brand": "Kingston",
    "model": "A1000 NVMe PCIe M.2 960GB",
    "rank": 161,
    "benchmark": 135,
    "samples": 1631,
    "url": "https://ssd.userbenchmark.com/SpeedTest/495225/KINGSTON-SA1000M8960G"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F120GBMP500",
    "brand": "Corsair",
    "model": "Force MP500 NVMe PCIe M.2 120GB",
    "rank": 162,
    "benchmark": 132,
    "samples": 6699,
    "url": "https://ssd.userbenchmark.com/SpeedTest/221057/Force-MP500"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKKW512G7X1",
    "brand": "Intel",
    "model": "600p Series NVMe PCIe M.2 512GB",
    "rank": 163,
    "benchmark": 130,
    "samples": 20672,
    "url": "https://ssd.userbenchmark.com/SpeedTest/168978/INTEL-SSDPEKKW512G7"
  },
  {
    "type": "SSD",
    "part_number": "SA1000M8/480G",
    "brand": "Kingston",
    "model": "A1000 NVMe PCIe M.2 480GB",
    "rank": 164,
    "benchmark": 130,
    "samples": 10289,
    "url": "https://ssd.userbenchmark.com/SpeedTest/492906/KINGSTON-SA1000M8480G"
  },
  {
    "type": "SSD",
    "part_number": "MZHPU256HCGL",
    "brand": "Samsung",
    "model": "XP941 PCIe M.2 256GB",
    "rank": 165,
    "benchmark": 130,
    "samples": 2639,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4625/SAMSUNG-MZHPU256HCGL-00000"
  },
  {
    "type": "SSD",
    "part_number": "WDS512G1X0C",
    "brand": "WD",
    "model": "Black NVMe PCIe M.2 512GB (2017)",
    "rank": 166,
    "benchmark": 129,
    "samples": 10694,
    "url": "https://ssd.userbenchmark.com/SpeedTest/251339/WDC-WDS512G1X0C-00ENX0"
  },
  {
    "type": "SSD",
    "part_number": "MDNVME80-SBX-0512",
    "brand": "MyDigitalSSD",
    "model": "SBX NVMe PCIe M.2 512GB",
    "rank": 167,
    "benchmark": 128,
    "samples": 178,
    "url": "https://ssd.userbenchmark.com/SpeedTest/438137/SBX"
  },
  {
    "type": "SSD",
    "part_number": "SHPM2280P2/240G",
    "brand": "Kingston",
    "model": "HyperX Predator AHCI PCIe M.2 240GB",
    "rank": 168,
    "benchmark": 128,
    "samples": 5629,
    "url": "https://ssd.userbenchmark.com/SpeedTest/26065/Kingston-SHPM2280P2240G"
  },
  {
    "type": "SSD",
    "part_number": "ASX7000NP-512GT-C",
    "brand": "Adata",
    "model": "XPG SX7000 NVMe PCIe M.2 512GB",
    "rank": 169,
    "benchmark": 128,
    "samples": 2299,
    "url": "https://ssd.userbenchmark.com/SpeedTest/318275/NVMe-ADATA-SX7000NP"
  },
  {
    "type": "SSD",
    "part_number": "MZHPU512HCGL",
    "brand": "Samsung",
    "model": "XP941 PCIe M.2 512GB",
    "rank": 170,
    "benchmark": 126,
    "samples": 1239,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4874/SAMSUNG-MZHPU512HCGL-00000"
  },
  {
    "type": "SSD",
    "part_number": "KXG50ZNV256G",
    "brand": "Toshiba",
    "model": "XG5 NVMe PCIe M.2 256GB",
    "rank": 171,
    "benchmark": 126,
    "samples": 34693,
    "url": "https://ssd.userbenchmark.com/SpeedTest/358656/KXG50ZNV256G-NVMe-TOSHIBA-256GB"
  },
  {
    "type": "SSD",
    "part_number": "ASX6000NP-512GT-C",
    "brand": "Adata",
    "model": "XPG SX6000 NVMe PCIe M.2 512GB",
    "rank": 172,
    "benchmark": 126,
    "samples": 2837,
    "url": "https://ssd.userbenchmark.com/SpeedTest/410831/ADATA-SX6000NP"
  },
  {
    "type": "SSD",
    "part_number": "ASX6000NP-1TT-C",
    "brand": "Adata",
    "model": "XPG SX6000 NVMe PCIe M.2 1TB",
    "rank": 173,
    "benchmark": 125,
    "samples": 163,
    "url": "https://ssd.userbenchmark.com/SpeedTest/471014/ADATA-SX6000NP"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKKW128G8XT",
    "brand": "Intel",
    "model": "760p Series NVMe PCIe M.2 128GB",
    "rank": 174,
    "benchmark": 124,
    "samples": 747,
    "url": "https://ssd.userbenchmark.com/SpeedTest/446913/INTEL-SSDPEKKW128G8"
  },
  {
    "type": "SSD",
    "part_number": "PX-AG512M6e",
    "brand": "Plextor",
    "model": "M6e PCIe 512GB",
    "rank": 175,
    "benchmark": 121,
    "samples": 126,
    "url": "https://ssd.userbenchmark.com/SpeedTest/14616/PLEXTOR-PX-AG512M6e"
  },
  {
    "type": "SSD",
    "part_number": "WDS256G1X0C",
    "brand": "WD",
    "model": "Black NVMe PCIe M.2 256GB (2017)",
    "rank": 176,
    "benchmark": 120,
    "samples": 21757,
    "url": "https://ssd.userbenchmark.com/SpeedTest/237667/WDC-WDS256G1X0C-00ENX0"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKKW256G7X1",
    "brand": "Intel",
    "model": "600p Series NVMe PCIe M.2 256GB",
    "rank": 177,
    "benchmark": 120,
    "samples": 47650,
    "url": "https://ssd.userbenchmark.com/SpeedTest/169054/INTEL-SSDPEKKW256G7"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSN5512GPUK NVMe PCIe M.2 512GB",
    "rank": 178,
    "benchmark": 119,
    "samples": 17061,
    "url": "https://ssd.userbenchmark.com/SpeedTest/160272/NVMe-THNSN5512GPUK-NV"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKKF512G7X1",
    "brand": "Intel",
    "model": "Pro 6000p NVMe PCIe M.2 512GB",
    "rank": 179,
    "benchmark": 119,
    "samples": 1845,
    "url": "https://ssd.userbenchmark.com/SpeedTest/289714/INTEL-SSDPEKKF512G7H"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77E2T0B",
    "brand": "Samsung",
    "model": "870 EVO 2TB",
    "rank": 180,
    "benchmark": 119,
    "samples": 785,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1463967/Samsung-SSD-870-EVO-2TB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM951 NVMe PCIe M.2 256GB",
    "rank": 181,
    "benchmark": 119,
    "samples": 10763,
    "url": "https://ssd.userbenchmark.com/SpeedTest/37673/NVMe-PM951-NVMe-SAMSU"
  },
  {
    "type": "SSD",
    "part_number": "ASX6000NP-256GT-C",
    "brand": "Adata",
    "model": "XPG SX6000 NVMe PCIe M.2 256GB",
    "rank": 182,
    "benchmark": 119,
    "samples": 7558,
    "url": "https://ssd.userbenchmark.com/SpeedTest/387986/ADATA-SX6000NP"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77E1T0B",
    "brand": "Samsung",
    "model": "870 EVO 1TB",
    "rank": 183,
    "benchmark": 119,
    "samples": 3291,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1445454/Samsung-SSD-870-EVO-1TB"
  },
  {
    "type": "SSD",
    "part_number": "PX-G256M6e",
    "brand": "Plextor",
    "model": "M6e  PCIe M.2 256GB",
    "rank": 184,
    "benchmark": 118,
    "samples": 1269,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12059/PLEXTOR-PX-G256M6e"
  },
  {
    "type": "SSD",
    "part_number": "MDNVME80-SBX-1T",
    "brand": "MyDigitalSSD",
    "model": "SBX NVMe PCIe M.2 1TB",
    "rank": 185,
    "benchmark": 118,
    "samples": 37,
    "url": "https://ssd.userbenchmark.com/SpeedTest/455228/SBX"
  },
  {
    "type": "SSD",
    "part_number": "ASX8000NP-128GM-C",
    "brand": "Adata",
    "model": "XPG SX8000 NVMe PCIe M.2 128GB",
    "rank": 186,
    "benchmark": 116,
    "samples": 121,
    "url": "https://ssd.userbenchmark.com/SpeedTest/214181/NVMe-ADATA-SX8000NP"
  },
  {
    "type": "SSD",
    "part_number": "PX-128M8SeY",
    "brand": "Plextor",
    "model": "M8Se NVMe PCIe M.2 128GB",
    "rank": 187,
    "benchmark": 116,
    "samples": 208,
    "url": "https://ssd.userbenchmark.com/SpeedTest/345013/PLEXTOR-PX-128M8SeG"
  },
  {
    "type": "SSD",
    "part_number": "PX-128M8SeG",
    "brand": "Plextor",
    "model": "M8Se NVMe PCIe M.2 128GB",
    "rank": 187,
    "benchmark": 116,
    "samples": 208,
    "url": "https://ssd.userbenchmark.com/SpeedTest/345013/PLEXTOR-PX-128M8SeG"
  },
  {
    "type": "SSD",
    "part_number": "PX-128M8SeGN",
    "brand": "Plextor",
    "model": "M8Se NVMe PCIe M.2 128GB",
    "rank": 187,
    "benchmark": 116,
    "samples": 208,
    "url": "https://ssd.userbenchmark.com/SpeedTest/345013/PLEXTOR-PX-128M8SeG"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77E4T0B",
    "brand": "Samsung",
    "model": "870 EVO 4TB",
    "rank": 188,
    "benchmark": 116,
    "samples": 112,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1465671/Samsung-SSD-870-EVO-4TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76E4T0B",
    "brand": "Samsung",
    "model": "860 Evo 4TB",
    "rank": 189,
    "benchmark": 114,
    "samples": 4290,
    "url": "https://ssd.userbenchmark.com/SpeedTest/440150/Samsung-SSD-860-EVO-4TB"
  },
  {
    "type": "SSD",
    "part_number": "PX-AG256M6e",
    "brand": "Plextor",
    "model": "M6e PCIe 256GB",
    "rank": 190,
    "benchmark": 114,
    "samples": 647,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7265/PLEXTOR-PX-AG256M6e"
  },
  {
    "type": "SSD",
    "part_number": "MZHPU128HCGM",
    "brand": "Samsung",
    "model": "XP941 PCIe M.2 128GB",
    "rank": 191,
    "benchmark": 114,
    "samples": 689,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6251/SAMSUNG-MZHPU128HCGM-00000"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76E2T0B",
    "brand": "Samsung",
    "model": "860 Evo 2TB",
    "rank": 192,
    "benchmark": 114,
    "samples": 28654,
    "url": "https://ssd.userbenchmark.com/SpeedTest/430706/Samsung-SSD-860-EVO-2TB"
  },
  {
    "type": "SSD",
    "part_number": "ASX6000NP-128GT-C",
    "brand": "Adata",
    "model": "XPG SX6000 NVMe PCIe M.2 128GB",
    "rank": 193,
    "benchmark": 114,
    "samples": 4629,
    "url": "https://ssd.userbenchmark.com/SpeedTest/391493/ADATA-SX6000NP"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSN5256GPUK NVMe PCIe M.2 256GB",
    "rank": 194,
    "benchmark": 113,
    "samples": 19382,
    "url": "https://ssd.userbenchmark.com/SpeedTest/202063/THNSN5256GPUK-TOSHIBA"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76E1T0B",
    "brand": "Samsung",
    "model": "860 Evo 1TB",
    "rank": 195,
    "benchmark": 113,
    "samples": 399884,
    "url": "https://ssd.userbenchmark.com/SpeedTest/423831/Samsung-SSD-860-EVO-1TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-75E2T0B",
    "brand": "Samsung",
    "model": "850 Evo 2TB",
    "rank": 196,
    "benchmark": 112,
    "samples": 6414,
    "url": "https://ssd.userbenchmark.com/SpeedTest/32539/Samsung-SSD-850-EVO-2TB"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F240GBMP300",
    "brand": "Corsair",
    "model": "Force MP300 NVMe PCIe M.2 240GB",
    "rank": 197,
    "benchmark": 112,
    "samples": 3062,
    "url": "https://ssd.userbenchmark.com/SpeedTest/538791/NVMe-Force-MP300"
  },
  {
    "type": "SSD",
    "part_number": "MZ-75E1T0B",
    "brand": "Samsung",
    "model": "850 Evo 1TB",
    "rank": 198,
    "benchmark": 112,
    "samples": 106772,
    "url": "https://ssd.userbenchmark.com/Samsung-850-Evo-1TB/Rating/3576"
  },
  {
    "type": "SSD",
    "part_number": "MZ-75E4T0B",
    "brand": "Samsung",
    "model": "850 Evo 4TB",
    "rank": 199,
    "benchmark": 112,
    "samples": 605,
    "url": "https://ssd.userbenchmark.com/SpeedTest/169156/Samsung-SSD-850-EVO-4TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76P4T0B",
    "brand": "Samsung",
    "model": "860 Pro 4TB",
    "rank": 200,
    "benchmark": 111,
    "samples": 346,
    "url": "https://ssd.userbenchmark.com/SpeedTest/552119/Samsung-SSD-860-PRO-4TB"
  },
  {
    "type": "SSD",
    "part_number": "MDNVME80-SBX-0256",
    "brand": "MyDigitalSSD",
    "model": "SBX NVMe PCIe M.2 256GB",
    "rank": 201,
    "benchmark": 111,
    "samples": 251,
    "url": "https://ssd.userbenchmark.com/SpeedTest/456332/SBX"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76P1T0B",
    "brand": "Samsung",
    "model": "860 Pro 1TB",
    "rank": 202,
    "benchmark": 111,
    "samples": 5241,
    "url": "https://ssd.userbenchmark.com/SpeedTest/434505/Samsung-SSD-860-PRO-1TB"
  },
  {
    "type": "SSD",
    "part_number": "ASX7000NP-256GT-C",
    "brand": "Adata",
    "model": "XPG SX7000 NVMe PCIe M.2 256GB",
    "rank": 203,
    "benchmark": 110,
    "samples": 1543,
    "url": "https://ssd.userbenchmark.com/SpeedTest/304438/NVMe-ADATA-SX7000NP"
  },
  {
    "type": "SSD",
    "part_number": "MKNP44SC240GB",
    "brand": "Mushkin",
    "model": "Scorpion Deluxe PCIe 240GB",
    "rank": 204,
    "benchmark": 110,
    "samples": 50,
    "url": "https://ssd.userbenchmark.com/SpeedTest/18266/Mushkin-Scorpion-Deluxe"
  },
  {
    "type": "SSD",
    "part_number": "SA1000M8/240G",
    "brand": "Kingston",
    "model": "A1000 NVMe PCIe M.2 240GB",
    "rank": 205,
    "benchmark": 110,
    "samples": 23485,
    "url": "https://ssd.userbenchmark.com/SpeedTest/497453/KINGSTON-SA1000M8240G"
  },
  {
    "type": "SSD",
    "part_number": "MZ-75E500B",
    "brand": "Samsung",
    "model": "850 Evo 500GB",
    "rank": 206,
    "benchmark": 110,
    "samples": 638238,
    "url": "https://ssd.userbenchmark.com/Samsung-850-Evo-500GB/Rating/3477"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7KE2T0BW",
    "brand": "Samsung",
    "model": "850 Pro 2TB",
    "rank": 207,
    "benchmark": 109,
    "samples": 1825,
    "url": "https://ssd.userbenchmark.com/SpeedTest/38860/Samsung-SSD-850-PRO-2TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76P256BW",
    "brand": "Samsung",
    "model": "860 Pro 256GB",
    "rank": 208,
    "benchmark": 109,
    "samples": 7628,
    "url": "https://ssd.userbenchmark.com/Samsung-860-Pro-256GB/Rating/3950"
  },
  {
    "type": "SSD",
    "part_number": "ASU800SS-2TT-C",
    "brand": "Adata",
    "model": "Ultimate SU800 2TB",
    "rank": 209,
    "benchmark": 109,
    "samples": 1829,
    "url": "https://ssd.userbenchmark.com/SpeedTest/584479/ADATA-SU800"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76P512B",
    "brand": "Samsung",
    "model": "860 Pro 512GB",
    "rank": 210,
    "benchmark": 109,
    "samples": 10158,
    "url": "https://ssd.userbenchmark.com/SpeedTest/431483/Samsung-SSD-860-PRO-512GB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77Q2T0BW",
    "brand": "Samsung",
    "model": "870 QVO 2TB",
    "rank": 211,
    "benchmark": 108,
    "samples": 5481,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1260265/Samsung-SSD-870-QVO-2TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77Q2T0B/AM",
    "brand": "Samsung",
    "model": "870 QVO 2TB",
    "rank": 211,
    "benchmark": 108,
    "samples": 5481,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1260265/Samsung-SSD-870-QVO-2TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77Q4T0BW",
    "brand": "Samsung",
    "model": "870 QVO 4TB",
    "rank": 212,
    "benchmark": 108,
    "samples": 1065,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1243154/Samsung-SSD-870-QVO-4TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77Q4T0B/AM",
    "brand": "Samsung",
    "model": "870 QVO 4TB",
    "rank": 212,
    "benchmark": 108,
    "samples": 1065,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1243154/Samsung-SSD-870-QVO-4TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77E500B",
    "brand": "Samsung",
    "model": "870 EVO 500GB",
    "rank": 213,
    "benchmark": 108,
    "samples": 3134,
    "url": "https://ssd.userbenchmark.com/SpeedTest/972228/Samsung-SSD-870-EVO-500GB"
  },
  {
    "type": "SSD",
    "part_number": "CT2000MX500SSD1",
    "brand": "Crucial",
    "model": "MX500 2TB",
    "rank": 214,
    "benchmark": 108,
    "samples": 23888,
    "url": "https://ssd.userbenchmark.com/SpeedTest/421719/CT2000MX500SSD1"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZFLV512 NVMe PCIe M.2 512GB",
    "rank": 215,
    "benchmark": 108,
    "samples": 1305,
    "url": "https://ssd.userbenchmark.com/SpeedTest/36829/NVMe-SAMSUNG-MZFLV512"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77Q8T0BW",
    "brand": "Samsung",
    "model": "870 QVO 8TB",
    "rank": 216,
    "benchmark": 107,
    "samples": 205,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1280660/Samsung-SSD-870-QVO-8TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77Q8T0B/AM",
    "brand": "Samsung",
    "model": "870 QVO 8TB",
    "rank": 216,
    "benchmark": 107,
    "samples": 205,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1280660/Samsung-SSD-870-QVO-8TB"
  },
  {
    "type": "SSD",
    "part_number": "CT1000MX500SSD1",
    "brand": "Crucial",
    "model": "MX500 1TB",
    "rank": 217,
    "benchmark": 107,
    "samples": 126202,
    "url": "https://ssd.userbenchmark.com/SpeedTest/406099/CT1000MX500SSD1"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76E500B",
    "brand": "Samsung",
    "model": "860 Evo 500GB",
    "rank": 218,
    "benchmark": 107,
    "samples": 576489,
    "url": "https://ssd.userbenchmark.com/SpeedTest/428560/Samsung-SSD-860-EVO-500GB"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2KW512G8",
    "brand": "Intel",
    "model": "545s Series 512GB",
    "rank": 219,
    "benchmark": 106,
    "samples": 9149,
    "url": "https://ssd.userbenchmark.com/SpeedTest/302752/INTEL-SSDSC2KW512G8"
  },
  {
    "type": "SSD",
    "part_number": "CT500MX500SSD1",
    "brand": "Crucial",
    "model": "MX500 500GB",
    "rank": 220,
    "benchmark": 106,
    "samples": 177709,
    "url": "https://ssd.userbenchmark.com/SpeedTest/418385/CT500MX500SSD1"
  },
  {
    "type": "SSD",
    "part_number": "PX-G128M6e",
    "brand": "Plextor",
    "model": "M6e PCIe M.2 128GB",
    "rank": 221,
    "benchmark": 106,
    "samples": 568,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15095/PLEXTOR-PX-G128M6e"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77Q1T0BW",
    "brand": "Samsung",
    "model": "870 QVO 1TB",
    "rank": 222,
    "benchmark": 105,
    "samples": 14159,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1218310/Samsung-SSD-870-QVO-1TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77Q1T0B/AM",
    "brand": "Samsung",
    "model": "870 QVO 1TB",
    "rank": 222,
    "benchmark": 105,
    "samples": 14159,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1218310/Samsung-SSD-870-QVO-1TB"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKKF256G7X1",
    "brand": "Intel",
    "model": "Pro 6000p NVMe PCIe M.2 256GB",
    "rank": 223,
    "benchmark": 105,
    "samples": 7195,
    "url": "https://ssd.userbenchmark.com/SpeedTest/304420/INTEL-SSDPEKKF256G7H"
  },
  {
    "type": "SSD",
    "part_number": "ASU800SS-1TT-C",
    "brand": "Adata",
    "model": "Ultimate SU800 1TB",
    "rank": 224,
    "benchmark": 105,
    "samples": 15645,
    "url": "https://ssd.userbenchmark.com/Adata-Ultimate-SU800-1TB/Rating/3914"
  },
  {
    "type": "SSD",
    "part_number": "GP-GSM2NE8256GNTD",
    "brand": "Gigabyte",
    "model": "NVMe PCIe M.2 256GB",
    "rank": 225,
    "benchmark": 105,
    "samples": 2482,
    "url": "https://ssd.userbenchmark.com/SpeedTest/599447/GIGABYTE-GP-GSM2NE8256GNTD"
  },
  {
    "type": "SSD",
    "part_number": "MZ-77E250B",
    "brand": "Samsung",
    "model": "870 Evo 250GB",
    "rank": 226,
    "benchmark": 105,
    "samples": 1415,
    "url": "https://ssd.userbenchmark.com/Samsung-870-Evo-250GB/Rating/4094"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7KE1T0BW",
    "brand": "Samsung",
    "model": "850 Pro 1TB",
    "rank": 227,
    "benchmark": 104,
    "samples": 20307,
    "url": "https://ssd.userbenchmark.com/Samsung-850-Pro-1TB/Rating/3577"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7TE1T0BW",
    "brand": "Samsung",
    "model": "840 Evo 1TB",
    "rank": 228,
    "benchmark": 104,
    "samples": 22088,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1436/Samsung-SSD-840-EVO"
  },
  {
    "type": "SSD",
    "part_number": "TS256GMTE820",
    "brand": "Transcend",
    "model": "MTE820 NVMe PCIe M.2 256GB",
    "rank": 229,
    "benchmark": 104,
    "samples": 146,
    "url": "https://ssd.userbenchmark.com/SpeedTest/437614/TS256GMTE820"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7TE750BW",
    "brand": "Samsung",
    "model": "840 Evo 750GB",
    "rank": 230,
    "benchmark": 104,
    "samples": 2810,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2175/Samsung-SSD-840-EVO-750GB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7TE500BW",
    "brand": "Samsung",
    "model": "840 Evo 500GB",
    "rank": 231,
    "benchmark": 103,
    "samples": 52707,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1519/Samsung-SSD-840-EVO-500GB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76E250B",
    "brand": "Samsung",
    "model": "860 Evo 250GB",
    "rank": 232,
    "benchmark": 103,
    "samples": 223759,
    "url": "https://ssd.userbenchmark.com/Samsung-860-Evo-250GB/Rating/3949"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7KE512BW",
    "brand": "Samsung",
    "model": "850 Pro 512GB",
    "rank": 233,
    "benchmark": 103,
    "samples": 55640,
    "url": "https://ssd.userbenchmark.com/Samsung-850-Pro-512GB/Rating/3478"
  },
  {
    "type": "SSD",
    "part_number": "MZ-75E250B",
    "brand": "Samsung",
    "model": "850 Evo 250GB",
    "rank": 234,
    "benchmark": 103,
    "samples": 723278,
    "url": "https://ssd.userbenchmark.com/Samsung-850-Evo-250GB/Rating/2977"
  },
  {
    "type": "SSD",
    "part_number": "CT250MX500SSD1",
    "brand": "Crucial",
    "model": "MX500 250GB",
    "rank": 235,
    "benchmark": 103,
    "samples": 60324,
    "url": "https://ssd.userbenchmark.com/Crucial-MX500-250GB/Rating/3951"
  },
  {
    "type": "SSD",
    "part_number": "ASU800SS-512GT-C",
    "brand": "Adata",
    "model": "Ultimate SU800 512GB",
    "rank": 236,
    "benchmark": 102,
    "samples": 20258,
    "url": "https://ssd.userbenchmark.com/Adata-Ultimate-SU800-512GB/Rating/3913"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76Q4T0BW",
    "brand": "Samsung",
    "model": "860 QVO 4TB",
    "rank": 237,
    "benchmark": 102,
    "samples": 1970,
    "url": "https://ssd.userbenchmark.com/SpeedTest/743794/Samsung-SSD-860-QVO-4TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76Q4T0B/AM",
    "brand": "Samsung",
    "model": "860 QVO 4TB",
    "rank": 237,
    "benchmark": 102,
    "samples": 1970,
    "url": "https://ssd.userbenchmark.com/SpeedTest/743794/Samsung-SSD-860-QVO-4TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7KE256BW",
    "brand": "Samsung",
    "model": "850 Pro 256GB",
    "rank": 238,
    "benchmark": 102,
    "samples": 105833,
    "url": "https://ssd.userbenchmark.com/Samsung-850-Pro-256GB/Rating/2385"
  },
  {
    "type": "SSD",
    "part_number": "CT480BX300SSD1",
    "brand": "Crucial",
    "model": "BX300 480GB",
    "rank": 239,
    "benchmark": 101,
    "samples": 3384,
    "url": "https://ssd.userbenchmark.com/Crucial-BX300-480GB/Rating/3947"
  },
  {
    "type": "SSD",
    "part_number": "2AP99AA#ABL",
    "brand": "HP",
    "model": "S700 Pro 512GB",
    "rank": 240,
    "benchmark": 101,
    "samples": 755,
    "url": "https://ssd.userbenchmark.com/SpeedTest/370902/HP-SSD-S700-Pro"
  },
  {
    "type": "SSD",
    "part_number": "MZ-750500BW",
    "brand": "Samsung",
    "model": "750 EVO 500GB",
    "rank": 241,
    "benchmark": 99.9,
    "samples": 26371,
    "url": "https://ssd.userbenchmark.com/SpeedTest/143302/Samsung-SSD-750-EVO-500GB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76Q2T0BW",
    "brand": "Samsung",
    "model": "860 QVO 2TB",
    "rank": 242,
    "benchmark": 99.8,
    "samples": 20002,
    "url": "https://ssd.userbenchmark.com/SpeedTest/719017/Samsung-SSD-860-QVO-2TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76Q2T0B/AM",
    "brand": "Samsung",
    "model": "860 QVO 2TB",
    "rank": 242,
    "benchmark": 99.8,
    "samples": 20002,
    "url": "https://ssd.userbenchmark.com/SpeedTest/719017/Samsung-SSD-860-QVO-2TB"
  },
  {
    "type": "SSD",
    "part_number": "WDS100T2B0A",
    "brand": "WD",
    "model": "Blue 3D 1TB",
    "rank": 243,
    "benchmark": 99.3,
    "samples": 13187,
    "url": "https://ssd.userbenchmark.com/SpeedTest/352978/WDC-WDS100T2B0A-00SM50"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDH3-2T00-G25",
    "brand": "SanDisk",
    "model": "Ultra 3D 2TB",
    "rank": 244,
    "benchmark": 99.1,
    "samples": 2650,
    "url": "https://ssd.userbenchmark.com/SpeedTest/351750/SanDisk-SDSSDH32000G"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKKF360G7X1",
    "brand": "Intel",
    "model": "Pro 6000p NVMe PCIe M.2 360GB",
    "rank": 245,
    "benchmark": 98.8,
    "samples": 884,
    "url": "https://ssd.userbenchmark.com/SpeedTest/296966/INTEL-SSDPEKKF360G7H"
  },
  {
    "type": "SSD",
    "part_number": "WDS100T2B0B",
    "brand": "WD",
    "model": "Blue 3D SATA M.2 1TB",
    "rank": 246,
    "benchmark": 98.7,
    "samples": 8629,
    "url": "https://ssd.userbenchmark.com/SpeedTest/342470/WDC-WDS100T2B0B-00YS70"
  },
  {
    "type": "SSD",
    "part_number": "CT500MX200SSD4",
    "brand": "Crucial",
    "model": "MX200 SATA M.2 500GB",
    "rank": 247,
    "benchmark": 98.6,
    "samples": 1043,
    "url": "https://ssd.userbenchmark.com/SpeedTest/23836/Crucial-CT500MX200SSD4"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKKW128G7X1",
    "brand": "Intel",
    "model": "600p Series NVMe PCIe M.2 128GB",
    "rank": 248,
    "benchmark": 98.4,
    "samples": 9810,
    "url": "https://ssd.userbenchmark.com/SpeedTest/170119/INTEL-SSDPEKKW128G7"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDH3-500G-G25",
    "brand": "SanDisk",
    "model": "Ultra 3D 500GB",
    "rank": 249,
    "benchmark": 97.8,
    "samples": 10938,
    "url": "https://ssd.userbenchmark.com/SpeedTest/322712/SanDisk-SDSSDH3500G"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDH3-1T00-G25",
    "brand": "SanDisk",
    "model": "Ultra 3D 1TB",
    "rank": 250,
    "benchmark": 97.8,
    "samples": 4345,
    "url": "https://ssd.userbenchmark.com/SpeedTest/316514/SanDisk-SDSSDH31000G"
  },
  {
    "type": "SSD",
    "part_number": "VTR180-25SAT3-960G",
    "brand": "Toshiba",
    "model": "OCZ VT180 960GB",
    "rank": 251,
    "benchmark": 97.3,
    "samples": 80,
    "url": "https://ssd.userbenchmark.com/SpeedTest/171904/TOSHIBA-VT180"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7PD512BW",
    "brand": "Samsung",
    "model": "840 Pro 512GB",
    "rank": 252,
    "benchmark": 97,
    "samples": 12516,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2708/Samsung-SSD-840-PRO-Series"
  },
  {
    "type": "SSD",
    "part_number": "WDS200T2B0A",
    "brand": "WD",
    "model": "Blue 3D 2TB",
    "rank": 253,
    "benchmark": 96.8,
    "samples": 1053,
    "url": "https://ssd.userbenchmark.com/SpeedTest/373739/WDC-WDS200T2B0A-00SM50"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7KE128BW",
    "brand": "Samsung",
    "model": "850 Pro 128GB",
    "rank": 254,
    "benchmark": 96.7,
    "samples": 15365,
    "url": "https://ssd.userbenchmark.com/Samsung-850-Pro-128GB/Rating/3483"
  },
  {
    "type": "SSD",
    "part_number": "2LU81AA#ABL",
    "brand": "HP",
    "model": "S700 Pro 1TB",
    "rank": 255,
    "benchmark": 96.7,
    "samples": 71,
    "url": "https://ssd.userbenchmark.com/SpeedTest/387205/HP-SSD-S700-Pro-1TB"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDXPS-960G-G25",
    "brand": "SanDisk",
    "model": "Extreme Pro 960GB",
    "rank": 256,
    "benchmark": 96.5,
    "samples": 2265,
    "url": "https://ssd.userbenchmark.com/SanDisk-Extreme-Pro-960GB/Rating/3581"
  },
  {
    "type": "SSD",
    "part_number": "WDS500G2B0B",
    "brand": "WD",
    "model": "Blue 3D SATA M.2 500GB",
    "rank": 257,
    "benchmark": 96.4,
    "samples": 19674,
    "url": "https://ssd.userbenchmark.com/SpeedTest/325788/WDC-WDS500G2B0B-00YS70"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F120GBMP300",
    "brand": "Corsair",
    "model": "Force MP300 NVMe PCIe M.2 120GB",
    "rank": 258,
    "benchmark": 96.3,
    "samples": 2736,
    "url": "https://ssd.userbenchmark.com/SpeedTest/534036/NVMe-Force-MP300"
  },
  {
    "type": "SSD",
    "part_number": "WDS500G2B0A",
    "brand": "WD",
    "model": "Blue 3D 500GB",
    "rank": 259,
    "benchmark": 95.9,
    "samples": 33211,
    "url": "https://ssd.userbenchmark.com/SpeedTest/337874/WDC-WDS500G2B0A-00SM50"
  },
  {
    "type": "SSD",
    "part_number": "CT240BX300SSD1",
    "brand": "Crucial",
    "model": "BX300 240GB",
    "rank": 260,
    "benchmark": 95.4,
    "samples": 5565,
    "url": "https://ssd.userbenchmark.com/Crucial-BX300-240GB/Rating/3946"
  },
  {
    "type": "SSD",
    "part_number": "MZ-750250BW",
    "brand": "Samsung",
    "model": "750 EVO 250GB",
    "rank": 261,
    "benchmark": 95.4,
    "samples": 57125,
    "url": "https://ssd.userbenchmark.com/SpeedTest/71929/Samsung-SSD-750-EVO-250GB"
  },
  {
    "type": "SSD",
    "part_number": "CT250MX200SSD4",
    "brand": "Crucial",
    "model": "MX200 SATA M.2 250GB",
    "rank": 262,
    "benchmark": 95.3,
    "samples": 1885,
    "url": "https://ssd.userbenchmark.com/SpeedTest/23955/Crucial-CT250MX200SSD4"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BP480G410",
    "brand": "Intel",
    "model": "730 Series 480GB",
    "rank": 263,
    "benchmark": 95.3,
    "samples": 4324,
    "url": "https://ssd.userbenchmark.com/Intel-730-Series-480GB/Rating/3479"
  },
  {
    "type": "SSD",
    "part_number": "MZ-MTE1T0BW",
    "brand": "Samsung",
    "model": "840 Evo mSATA 1TB",
    "rank": 264,
    "benchmark": 95.2,
    "samples": 536,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10394/Samsung-SSD-840-EVO-1TB-mSATA"
  },
  {
    "type": "SSD",
    "part_number": "MZ-75E120B",
    "brand": "Samsung",
    "model": "850 Evo 120GB",
    "rank": 265,
    "benchmark": 95.1,
    "samples": 55309,
    "url": "https://ssd.userbenchmark.com/Samsung-850-Evo-120GB/Rating/3484"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7TE250BW",
    "brand": "Samsung",
    "model": "840 Evo 250GB",
    "rank": 266,
    "benchmark": 95.1,
    "samples": 185457,
    "url": "https://ssd.userbenchmark.com/Samsung-840-Evo-250GB/Rating/1594"
  },
  {
    "type": "SSD",
    "part_number": "MKNP44SC480GB",
    "brand": "Mushkin",
    "model": "Scorpion Deluxe PCIe 480GB",
    "rank": 267,
    "benchmark": 94.9,
    "samples": 109,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11924/Mushkin-Scorpion-Deluxe"
  },
  {
    "type": "SSD",
    "part_number": "VTR150-25SAT3-480G",
    "brand": "OCZ",
    "model": "Vector 150 480GB",
    "rank": 268,
    "benchmark": 94.8,
    "samples": 348,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7037/OCZ-VECTOR150"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSN5128GPUK NVMe PCIe M.2 128GB",
    "rank": 269,
    "benchmark": 94.7,
    "samples": 996,
    "url": "https://ssd.userbenchmark.com/SpeedTest/335393/NVMe-THNSN5128GPUK-TO"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2KW256G8",
    "brand": "Intel",
    "model": "545s Series 256GB",
    "rank": 270,
    "benchmark": 94.7,
    "samples": 11964,
    "url": "https://ssd.userbenchmark.com/SpeedTest/299881/INTEL-SSDSC2KW256G8"
  },
  {
    "type": "SSD",
    "part_number": "MDNVME80-SBX-0128",
    "brand": "MyDigitalSSD",
    "model": "SBX NVMe PCIe M.2 128GB",
    "rank": 271,
    "benchmark": 94.6,
    "samples": 112,
    "url": "https://ssd.userbenchmark.com/SpeedTest/431053/SBX"
  },
  {
    "type": "SSD",
    "part_number": "PX-512M6Pro",
    "brand": "Plextor",
    "model": "M6 Pro 512GB",
    "rank": 272,
    "benchmark": 94.3,
    "samples": 184,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15117/PLEXTOR-PX-512M6Pro"
  },
  {
    "type": "SSD",
    "part_number": "PX-256M6Pro",
    "brand": "Plextor",
    "model": "M6 Pro 256GB",
    "rank": 273,
    "benchmark": 94.2,
    "samples": 819,
    "url": "https://ssd.userbenchmark.com/SpeedTest/14560/PLEXTOR-PX-256M6Pro"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDST960GB",
    "brand": "Mushkin",
    "model": "Striker 960GB",
    "rank": 274,
    "benchmark": 94.2,
    "samples": 22,
    "url": "https://ssd.userbenchmark.com/SpeedTest/25597/MKNSSDST960GB"
  },
  {
    "type": "SSD",
    "part_number": "2AP98AA#ABL",
    "brand": "HP",
    "model": "S700 Pro 256GB",
    "rank": 275,
    "benchmark": 94,
    "samples": 980,
    "url": "https://ssd.userbenchmark.com/SpeedTest/366058/HP-SSD-S700-Pro"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDXPS-480G-G25",
    "brand": "SanDisk",
    "model": "Extreme Pro 480GB",
    "rank": 276,
    "benchmark": 94,
    "samples": 8233,
    "url": "https://ssd.userbenchmark.com/SanDisk-Extreme-Pro-480GB/Rating/3476"
  },
  {
    "type": "SSD",
    "part_number": "VTR1-25SAT3-512G",
    "brand": "OCZ",
    "model": "Vector 512GB",
    "rank": 277,
    "benchmark": 93.8,
    "samples": 305,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1810/OCZ-VECTOR"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7PD256BW",
    "brand": "Samsung",
    "model": "840 Pro 256GB",
    "rank": 278,
    "benchmark": 93.6,
    "samples": 53393,
    "url": "https://ssd.userbenchmark.com/Samsung-840-Pro-256GB/Rating/1408"
  },
  {
    "type": "SSD",
    "part_number": "VTR1-25SAT3-256G",
    "brand": "OCZ",
    "model": "Vector 256GB",
    "rank": 279,
    "benchmark": 93.3,
    "samples": 1813,
    "url": "https://ssd.userbenchmark.com/OCZ-Vector-256GB/Rating/1424"
  },
  {
    "type": "SSD",
    "part_number": "VTR180-25SAT3-240G",
    "brand": "Toshiba",
    "model": "OCZ VT180 240GB",
    "rank": 280,
    "benchmark": 93,
    "samples": 125,
    "url": "https://ssd.userbenchmark.com/SpeedTest/171243/TOSHIBA-VT180"
  },
  {
    "type": "SSD",
    "part_number": "CT1000BX100SSD1",
    "brand": "Crucial",
    "model": "BX100 1TB",
    "rank": 281,
    "benchmark": 93,
    "samples": 1198,
    "url": "https://ssd.userbenchmark.com/SpeedTest/22670/CT1000BX100SSD1"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76Q1T0BW",
    "brand": "Samsung",
    "model": "860 QVO 1TB",
    "rank": 282,
    "benchmark": 92.9,
    "samples": 126777,
    "url": "https://ssd.userbenchmark.com/SpeedTest/667965/Samsung-SSD-860-QVO-1TB"
  },
  {
    "type": "SSD",
    "part_number": "MZ-76Q1T0B/AM",
    "brand": "Samsung",
    "model": "860 QVO 1TB",
    "rank": 282,
    "benchmark": 92.9,
    "samples": 126777,
    "url": "https://ssd.userbenchmark.com/SpeedTest/667965/Samsung-SSD-860-QVO-1TB"
  },
  {
    "type": "SSD",
    "part_number": "VTX460A-25SAT3-240G",
    "brand": "OCZ",
    "model": "Vertex 460A 240GB",
    "rank": 283,
    "benchmark": 92.8,
    "samples": 1022,
    "url": "https://ssd.userbenchmark.com/OCZ-Vertex-460A-240GB/Rating/3147"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-N960GBXT",
    "brand": "Corsair",
    "model": "Neutron XT 960GB",
    "rank": 284,
    "benchmark": 92.8,
    "samples": 172,
    "url": "https://ssd.userbenchmark.com/SpeedTest/23267/Corsair-Neutron-XT-SSD"
  },
  {
    "type": "SSD",
    "part_number": "CT250MX200SSD1",
    "brand": "Crucial",
    "model": "MX200 250GB",
    "rank": 285,
    "benchmark": 92.8,
    "samples": 18806,
    "url": "https://ssd.userbenchmark.com/Crucial-MX200-250GB/Rating/3196"
  },
  {
    "type": "SSD",
    "part_number": "MZ-MTE500BW",
    "brand": "Samsung",
    "model": "840 Evo mSATA 500GB",
    "rank": 286,
    "benchmark": 92.5,
    "samples": 643,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10255/Samsung-SSD-840-EVO-500GB-mSATA"
  },
  {
    "type": "SSD",
    "part_number": "CT256M550SSD4",
    "brand": "Crucial",
    "model": "M550 SATA M.2 256GB",
    "rank": 287,
    "benchmark": 92.5,
    "samples": 128,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12143/Crucial-CT256M550SSD4"
  },
  {
    "type": "SSD",
    "part_number": "CT512M550SSD4",
    "brand": "Crucial",
    "model": "M550 SATA M.2 512GB",
    "rank": 288,
    "benchmark": 92.3,
    "samples": 161,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15375/Crucial-CT512M550SSD4"
  },
  {
    "type": "SSD",
    "part_number": "VTR180-25SAT3-960G",
    "brand": "OCZ",
    "model": "Vector 180 960GB",
    "rank": 289,
    "benchmark": 92.3,
    "samples": 305,
    "url": "https://ssd.userbenchmark.com/SpeedTest/30972/OCZ-VECTOR180"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDXPS-240G",
    "brand": "SanDisk",
    "model": "Extreme Pro 240GB",
    "rank": 290,
    "benchmark": 92.3,
    "samples": 8858,
    "url": "https://ssd.userbenchmark.com/SanDisk-Extreme-Pro-240GB/Rating/2356"
  },
  {
    "type": "SSD",
    "part_number": "VTR180-25SAT3-480G",
    "brand": "Toshiba",
    "model": "OCZ VT180 480GB",
    "rank": 291,
    "benchmark": 92.2,
    "samples": 101,
    "url": "https://ssd.userbenchmark.com/SpeedTest/146334/TOSHIBA-VT180"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDXP-480G-G25",
    "brand": "SanDisk",
    "model": "Extreme II 480GB",
    "rank": 292,
    "benchmark": 92.1,
    "samples": 1233,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2135/SanDisk-SDSSDXP480G"
  },
  {
    "type": "SSD",
    "part_number": "RADEON-R7SSD-480G",
    "brand": "OCZ",
    "model": "AMD Radeon R7 480GB",
    "rank": 293,
    "benchmark": 92.1,
    "samples": 703,
    "url": "https://ssd.userbenchmark.com/OCZ-AMD-Radeon-R7-480GB/Rating/3507"
  },
  {
    "type": "SSD",
    "part_number": "CT1024M550SSD1",
    "brand": "Crucial",
    "model": "M550 1TB",
    "rank": 294,
    "benchmark": 92.1,
    "samples": 1375,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7108/Crucial-CT1024M550SSD1"
  },
  {
    "type": "SSD",
    "part_number": "PX-512M6V",
    "brand": "Plextor",
    "model": "M6V 512GB",
    "rank": 295,
    "benchmark": 91.8,
    "samples": 46,
    "url": "https://ssd.userbenchmark.com/SpeedTest/31388/PLEXTOR-PX-512M6V"
  },
  {
    "type": "SSD",
    "part_number": "PI480GS25SSDR",
    "brand": "Patriot",
    "model": "Ignite 480GB",
    "rank": 296,
    "benchmark": 91.5,
    "samples": 2146,
    "url": "https://ssd.userbenchmark.com/Patriot-Ignite-480GB/Rating/3574"
  },
  {
    "type": "SSD",
    "part_number": "CT512M550SSD1",
    "brand": "Crucial",
    "model": "M550 512GB",
    "rank": 297,
    "benchmark": 91.4,
    "samples": 4298,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7172/Crucial-CT512M550SSD1"
  },
  {
    "type": "SSD",
    "part_number": "SHSS37A/240G",
    "brand": "HyperX",
    "model": "Savage 240GB",
    "rank": 298,
    "benchmark": 91.3,
    "samples": 31639,
    "url": "https://ssd.userbenchmark.com/HyperX-Savage-240GB/Rating/3494"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS1311-960-RB",
    "brand": "PNY",
    "model": "CS1311 960GB",
    "rank": 299,
    "benchmark": 91.3,
    "samples": 2852,
    "url": "https://ssd.userbenchmark.com/PNY-CS1311-960GB/Rating/3617"
  },
  {
    "type": "SSD",
    "part_number": "VTR180-25SAT3-480G",
    "brand": "OCZ",
    "model": "Vector 180 480GB",
    "rank": 300,
    "benchmark": 91.3,
    "samples": 907,
    "url": "https://ssd.userbenchmark.com/OCZ-Vector-180-480GB/Rating/3508"
  },
  {
    "type": "SSD",
    "part_number": "RVD3X2-FHPX4-480G",
    "brand": "OCZ",
    "model": "RevoDrive 3 X2 PCIe 480GB",
    "rank": 301,
    "benchmark": 91.2,
    "samples": 231,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8804/OCZ-REVODRIVE3-X2"
  },
  {
    "type": "SSD",
    "part_number": "SHSS37A/960G",
    "brand": "HyperX",
    "model": "Savage 960GB",
    "rank": 302,
    "benchmark": 91.2,
    "samples": 1274,
    "url": "https://ssd.userbenchmark.com/HyperX-Savage-960GB/Rating/3580"
  },
  {
    "type": "SSD",
    "part_number": "VTX460A-25SAT3-480G",
    "brand": "OCZ",
    "model": "Vertex 460A 480GB",
    "rank": 303,
    "benchmark": 91.1,
    "samples": 431,
    "url": "https://ssd.userbenchmark.com/SpeedTest/21677/OCZ-VERTEX460A"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS2211-480-RB",
    "brand": "PNY",
    "model": "CS2211 480GB",
    "rank": 304,
    "benchmark": 91.1,
    "samples": 1608,
    "url": "https://ssd.userbenchmark.com/PNY-CS2211-480GB/Rating/3630"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS2211-480-PB",
    "brand": "PNY",
    "model": "CS2211 480GB",
    "rank": 304,
    "benchmark": 91.1,
    "samples": 1608,
    "url": "https://ssd.userbenchmark.com/PNY-CS2211-480GB/Rating/3630"
  },
  {
    "type": "SSD",
    "part_number": "MZ-750120BW",
    "brand": "Samsung",
    "model": "750 EVO 120GB",
    "rank": 305,
    "benchmark": 91,
    "samples": 16496,
    "url": "https://ssd.userbenchmark.com/SpeedTest/42465/Samsung-SSD-750-EVO-120GB"
  },
  {
    "type": "SSD",
    "part_number": "ASU800SS-256GT-C",
    "brand": "Adata",
    "model": "Ultimate SU800 256GB",
    "rank": 306,
    "benchmark": 91,
    "samples": 28828,
    "url": "https://ssd.userbenchmark.com/Adata-Ultimate-SU800-256GB/Rating/3912"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-N240GBXT",
    "brand": "Corsair",
    "model": "Neutron XT 240GB",
    "rank": 307,
    "benchmark": 90.9,
    "samples": 1359,
    "url": "https://ssd.userbenchmark.com/Corsair-Neutron-XT-240GB/Rating/3277"
  },
  {
    "type": "SSD",
    "part_number": "VTX4-25SAT3-512G",
    "brand": "OCZ",
    "model": "Vertex 4 512GB",
    "rank": 308,
    "benchmark": 90.9,
    "samples": 1264,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4340/OCZ-VERTEX4"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7TE120BW",
    "brand": "Samsung",
    "model": "840 Evo 120GB",
    "rank": 309,
    "benchmark": 90.8,
    "samples": 86163,
    "url": "https://ssd.userbenchmark.com/Samsung-840-Evo-120GB/Rating/1886"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZFLV256 NVMe PCIe M.2 256GB",
    "rank": 310,
    "benchmark": 90.8,
    "samples": 3799,
    "url": "https://ssd.userbenchmark.com/SpeedTest/37597/NVMe-SAMSUNG-MZFLV256"
  },
  {
    "type": "SSD",
    "part_number": "VTR180-25SAT3-240G",
    "brand": "OCZ",
    "model": "Vector 180 240GB",
    "rank": 311,
    "benchmark": 90.7,
    "samples": 955,
    "url": "https://ssd.userbenchmark.com/OCZ-Vector-180-240GB/Rating/3493"
  },
  {
    "type": "SSD",
    "part_number": "CT256M550SSD1",
    "brand": "Crucial",
    "model": "M550 256GB",
    "rank": 312,
    "benchmark": 90.6,
    "samples": 5832,
    "url": "https://ssd.userbenchmark.com/Crucial-M550-256GB/Rating/2000"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Micron",
    "model": "M600 256GB",
    "rank": 313,
    "benchmark": 90.4,
    "samples": 833,
    "url": "https://ssd.userbenchmark.com/SpeedTest/24442/Micron-M600-MTFDDAK256MBF"
  },
  {
    "type": "SSD",
    "part_number": "CT500BX100SSD1",
    "brand": "Crucial",
    "model": "BX100 500GB",
    "rank": 314,
    "benchmark": 90.4,
    "samples": 12053,
    "url": "https://ssd.userbenchmark.com/Crucial-BX100-500GB/Rating/3474"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS2211-960-RB",
    "brand": "PNY",
    "model": "CS2211 960GB",
    "rank": 315,
    "benchmark": 90.4,
    "samples": 194,
    "url": "https://ssd.userbenchmark.com/PNY-CS2211-960GB/Rating/3631"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS2211-960-PB",
    "brand": "PNY",
    "model": "CS2211 960GB",
    "rank": 315,
    "benchmark": 90.4,
    "samples": 194,
    "url": "https://ssd.userbenchmark.com/PNY-CS2211-960GB/Rating/3631"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDRE512GB",
    "brand": "Mushkin",
    "model": "Reactor 512GB",
    "rank": 316,
    "benchmark": 90.3,
    "samples": 789,
    "url": "https://ssd.userbenchmark.com/Mushkin-Reactor-512GB/Rating/3584"
  },
  {
    "type": "SSD",
    "part_number": "HDTS451XZSTA",
    "brand": "Toshiba",
    "model": "Q300 Pro 512GB",
    "rank": 317,
    "benchmark": 90.3,
    "samples": 117,
    "url": "https://ssd.userbenchmark.com/SpeedTest/57809/TOSHIBA-Q300-Pro"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F512GBLX",
    "brand": "Corsair",
    "model": "Force LX 512GB",
    "rank": 318,
    "benchmark": 90.2,
    "samples": 385,
    "url": "https://ssd.userbenchmark.com/SpeedTest/16265/CORSAIR-FORCE-LX-SSD"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7PD128BW",
    "brand": "Samsung",
    "model": "840 Pro 128GB",
    "rank": 319,
    "benchmark": 90.1,
    "samples": 28715,
    "url": "https://ssd.userbenchmark.com/Samsung-840-Pro-128GB/Rating/1890"
  },
  {
    "type": "SSD",
    "part_number": "CT1050MX300SSD1",
    "brand": "Crucial",
    "model": "MX300 1TB",
    "rank": 320,
    "benchmark": 90,
    "samples": 13262,
    "url": "https://ssd.userbenchmark.com/Crucial-MX300-1TB/Rating/3645"
  },
  {
    "type": "SSD",
    "part_number": "CT120BX300SSD1",
    "brand": "Crucial",
    "model": "BX300 120GB",
    "rank": 321,
    "benchmark": 89.9,
    "samples": 5284,
    "url": "https://ssd.userbenchmark.com/Crucial-BX300-120GB/Rating/3945"
  },
  {
    "type": "SSD",
    "part_number": "VTX4-25SAT3-256G",
    "brand": "OCZ",
    "model": "Vertex 4 256GB",
    "rank": 322,
    "benchmark": 89.8,
    "samples": 9218,
    "url": "https://ssd.userbenchmark.com/OCZ-Vertex-4-256GB/Rating/1315"
  },
  {
    "type": "SSD",
    "part_number": "VX500-25SAT3-512G",
    "brand": "Toshiba",
    "model": "OCZ VX500 512GB",
    "rank": 323,
    "benchmark": 89.6,
    "samples": 133,
    "url": "https://ssd.userbenchmark.com/SpeedTest/190983/TOSHIBA-VX500"
  },
  {
    "type": "SSD",
    "part_number": "CT1050MX300SSD4",
    "brand": "Crucial",
    "model": "MX300 SATA M.2 1TB",
    "rank": 324,
    "benchmark": 89.5,
    "samples": 5390,
    "url": "https://ssd.userbenchmark.com/SpeedTest/182535/Crucial-CT1050MX300SSD4"
  },
  {
    "type": "SSD",
    "part_number": "PX-256M6S",
    "brand": "Plextor",
    "model": "M6S 256GB",
    "rank": 325,
    "benchmark": 89.5,
    "samples": 1287,
    "url": "https://ssd.userbenchmark.com/Plextor-M6S-256GB/Rating/3505"
  },
  {
    "type": "SSD",
    "part_number": "SSDPEKKF128GX1",
    "brand": "Intel",
    "model": "Pro 6000p NVMe PCIe M.2 128GB",
    "rank": 326,
    "benchmark": 89.5,
    "samples": 69,
    "url": "https://ssd.userbenchmark.com/SpeedTest/275754/INTEL-SSDPEKKF128G7"
  },
  {
    "type": "SSD",
    "part_number": "VTR150-25SAT3-240G",
    "brand": "OCZ",
    "model": "Vector 150 240GB",
    "rank": 327,
    "benchmark": 89.4,
    "samples": 1429,
    "url": "https://ssd.userbenchmark.com/OCZ-Vector-150-240GB/Rating/1748"
  },
  {
    "type": "SSD",
    "part_number": "PX-256M5P",
    "brand": "Plextor",
    "model": "M5 Pro 256GB",
    "rank": 328,
    "benchmark": 89.4,
    "samples": 2102,
    "url": "https://ssd.userbenchmark.com/Plextor-M5-Pro-256GB/Rating/1410"
  },
  {
    "type": "SSD",
    "part_number": "VTX460-25SAT3-240G",
    "brand": "OCZ",
    "model": "Vertex 460 240GB",
    "rank": 329,
    "benchmark": 89.3,
    "samples": 1552,
    "url": "https://ssd.userbenchmark.com/OCZ-Vertex-460-240GB/Rating/2043"
  },
  {
    "type": "SSD",
    "part_number": "ZTSSD-A5P-480G-PE",
    "brand": "Zotac",
    "model": "Premium Edition 480GB",
    "rank": 330,
    "benchmark": 89.2,
    "samples": 252,
    "url": "https://ssd.userbenchmark.com/Zotac-Premium-Edition-480GB/Rating/3599"
  },
  {
    "type": "SSD",
    "part_number": "MZ-MTE250BW",
    "brand": "Samsung",
    "model": "840 Evo mSATA 250GB",
    "rank": 331,
    "benchmark": 89.1,
    "samples": 1313,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5250/Samsung-SSD-840-EVO-250GB-mSATA"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDXP-240G-G25",
    "brand": "SanDisk",
    "model": "Extreme II 240GB",
    "rank": 332,
    "benchmark": 89,
    "samples": 2040,
    "url": "https://ssd.userbenchmark.com/SanDisk-Extreme-II-240GB/Rating/1545"
  },
  {
    "type": "SSD",
    "part_number": "RADEON-R7SSD-240G",
    "brand": "OCZ",
    "model": "AMD Radeon R7 240GB",
    "rank": 333,
    "benchmark": 89,
    "samples": 2061,
    "url": "https://ssd.userbenchmark.com/OCZ-AMD-Radeon-R7-240GB/Rating/2492"
  },
  {
    "type": "SSD",
    "part_number": "CT750MX300SSD1",
    "brand": "Crucial",
    "model": "MX300 750GB",
    "rank": 334,
    "benchmark": 88.9,
    "samples": 17214,
    "url": "https://ssd.userbenchmark.com/Crucial-MX300-750GB/Rating/3644"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDRE1TB",
    "brand": "Mushkin",
    "model": "Reactor 1TB",
    "rank": 335,
    "benchmark": 88.9,
    "samples": 8442,
    "url": "https://ssd.userbenchmark.com/Mushkin-Reactor-1TB/Rating/3583"
  },
  {
    "type": "SSD",
    "part_number": "CT512M550SSD3",
    "brand": "Crucial",
    "model": "M550 mSATA 512GB",
    "rank": 336,
    "benchmark": 88.8,
    "samples": 380,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8510/Crucial-CT512M550SSD3"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-N240GBXTI",
    "brand": "Corsair",
    "model": "Neutron XTi 240GB",
    "rank": 337,
    "benchmark": 88.7,
    "samples": 715,
    "url": "https://ssd.userbenchmark.com/SpeedTest/159221/Corsair-Neutron-XTI-SSD"
  },
  {
    "type": "SSD",
    "part_number": "ASP610SS3-1TM-C",
    "brand": "Adata",
    "model": "Premier SP610 1TB",
    "rank": 338,
    "benchmark": 88.6,
    "samples": 136,
    "url": "https://ssd.userbenchmark.com/SpeedTest/19263/ADATA-SP610"
  },
  {
    "type": "SSD",
    "part_number": "SB1CSK31MT560-0240",
    "brand": "OCZ",
    "model": "Saber 1000 240GB",
    "rank": 339,
    "benchmark": 88.6,
    "samples": 89,
    "url": "https://ssd.userbenchmark.com/SpeedTest/36693/OCZ-SABER1000"
  },
  {
    "type": "SSD",
    "part_number": "PI240GS325SSDR",
    "brand": "Patriot",
    "model": "Ignite 240GB",
    "rank": 340,
    "benchmark": 88.6,
    "samples": 1645,
    "url": "https://ssd.userbenchmark.com/Patriot-Ignite-240GB/Rating/3573"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC240G5SA754D117-511 240GB",
    "rank": 341,
    "benchmark": 88.2,
    "samples": 440,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11704/SSD2SC240G5SA754D117-511"
  },
  {
    "type": "SSD",
    "part_number": "SKC400S37/1T",
    "brand": "Kingston",
    "model": "SSDNow KC400 1TB",
    "rank": 342,
    "benchmark": 88.2,
    "samples": 582,
    "url": "https://ssd.userbenchmark.com/SpeedTest/127752/KINGSTON-SKC400S371T"
  },
  {
    "type": "SSD",
    "part_number": "CT250MX200SSD3",
    "brand": "Crucial",
    "model": "MX200 mSATA 250GB",
    "rank": 343,
    "benchmark": 88.1,
    "samples": 878,
    "url": "https://ssd.userbenchmark.com/SpeedTest/29438/Crucial--CT250MX200SSD3"
  },
  {
    "type": "SSD",
    "part_number": "WDS100T1B0A",
    "brand": "WD",
    "model": "Blue 1TB",
    "rank": 344,
    "benchmark": 88,
    "samples": 5000,
    "url": "https://ssd.userbenchmark.com/SpeedTest/186717/WDC-WDS100T1B0A-00H9H0"
  },
  {
    "type": "SSD",
    "part_number": "GP-GSM2NE8128GNTD",
    "brand": "Gigabyte",
    "model": "NVMe PCIe M.2 128GB",
    "rank": 345,
    "benchmark": 88,
    "samples": 1235,
    "url": "https://ssd.userbenchmark.com/SpeedTest/602706/GIGABYTE-GP-GSM2NE8128GNTD"
  },
  {
    "type": "SSD",
    "part_number": "TRN150-25SAT3-960G",
    "brand": "OCZ",
    "model": "Trion 150 960GB",
    "rank": 346,
    "benchmark": 87.8,
    "samples": 2281,
    "url": "https://ssd.userbenchmark.com/OCZ-Trion-150-960GB/Rating/3621"
  },
  {
    "type": "SSD",
    "part_number": "ASX930SS3-120GM-C",
    "brand": "Adata",
    "model": "XPG SX930 120GB",
    "rank": 347,
    "benchmark": 87.7,
    "samples": 1009,
    "url": "https://ssd.userbenchmark.com/Adata-XPG-SX930-120GB/Rating/3635"
  },
  {
    "type": "SSD",
    "part_number": "TS256GSSD370S",
    "brand": "Transcend",
    "model": "SSD370S 256GB",
    "rank": 348,
    "benchmark": 87.7,
    "samples": 8296,
    "url": "https://ssd.userbenchmark.com/SpeedTest/26718/TS256GSSD370S"
  },
  {
    "type": "SSD",
    "part_number": "2AP97AA#ABL",
    "brand": "HP",
    "model": "S700 Pro 128GB",
    "rank": 349,
    "benchmark": 87.7,
    "samples": 495,
    "url": "https://ssd.userbenchmark.com/SpeedTest/300937/HP-SSD-S700-Pro"
  },
  {
    "type": "SSD",
    "part_number": "VTX4-25SAT3-128G",
    "brand": "OCZ",
    "model": "Vertex 4 128GB",
    "rank": 350,
    "benchmark": 87.4,
    "samples": 17049,
    "url": "https://ssd.userbenchmark.com/OCZ-Vertex-4-128GB/Rating/1895"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BB800G4",
    "brand": "Intel",
    "model": "S3500 Series 800GB",
    "rank": 351,
    "benchmark": 87.4,
    "samples": 261,
    "url": "https://ssd.userbenchmark.com/SpeedTest/30895/INTEL-SSDSC2BB800G4"
  },
  {
    "type": "SSD",
    "part_number": "PX-256M6V",
    "brand": "Plextor",
    "model": "M6V 256GB",
    "rank": 352,
    "benchmark": 87.1,
    "samples": 378,
    "url": "https://ssd.userbenchmark.com/Plextor-M6V-256GB/Rating/3499"
  },
  {
    "type": "SSD",
    "part_number": "PX-512M5P",
    "brand": "Plextor",
    "model": "M5 Pro 512GB",
    "rank": 353,
    "benchmark": 87,
    "samples": 493,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1262/PLEXTOR-PX-512M5Pro"
  },
  {
    "type": "SSD",
    "part_number": "RADEON-R7SSD-120G",
    "brand": "OCZ",
    "model": "AMD Radeon R7 120GB",
    "rank": 354,
    "benchmark": 87,
    "samples": 1010,
    "url": "https://ssd.userbenchmark.com/OCZ-AMD-Radeon-R7-120GB/Rating/3492"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS2211-240-RB",
    "brand": "PNY",
    "model": "CS2211 240GB",
    "rank": 355,
    "benchmark": 86.9,
    "samples": 1531,
    "url": "https://ssd.userbenchmark.com/PNY-CS2211-240GB/Rating/3629"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS2211-240-PB",
    "brand": "PNY",
    "model": "CS2211 240GB",
    "rank": 355,
    "benchmark": 86.9,
    "samples": 1531,
    "url": "https://ssd.userbenchmark.com/PNY-CS2211-240GB/Rating/3629"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDHII-480G-G25",
    "brand": "SanDisk",
    "model": "Ultra II 480GB",
    "rank": 356,
    "benchmark": 86.9,
    "samples": 47943,
    "url": "https://ssd.userbenchmark.com/SanDisk-Ultra-II-480GB/Rating/3473"
  },
  {
    "type": "SSD",
    "part_number": "TS1TSSD370",
    "brand": "Transcend",
    "model": "SSD370 1TB",
    "rank": 357,
    "benchmark": 86.9,
    "samples": 207,
    "url": "https://ssd.userbenchmark.com/Transcend-SSD370-1TB/Rating/3579"
  },
  {
    "type": "SSD",
    "part_number": "CT256M550SSD3",
    "brand": "Crucial",
    "model": "M550 mSATA 256GB",
    "rank": 358,
    "benchmark": 86.8,
    "samples": 621,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8589/Crucial-CT256M550SSD3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "AGILITY3 256GB",
    "rank": 359,
    "benchmark": 86.8,
    "samples": 5,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9551/OCZ-AGILITY3"
  },
  {
    "type": "SSD",
    "part_number": "ASP610SS3-512GM-C",
    "brand": "Adata",
    "model": "Premier SP610 512GB",
    "rank": 360,
    "benchmark": 86.7,
    "samples": 213,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15096/ADATA-SP610"
  },
  {
    "type": "SSD",
    "part_number": "VTX450-25SAT3-256G",
    "brand": "OCZ",
    "model": "Vertex 450 256GB",
    "rank": 361,
    "benchmark": 86.6,
    "samples": 367,
    "url": "https://ssd.userbenchmark.com/OCZ-Vertex-450-256GB/Rating/1605"
  },
  {
    "type": "SSD",
    "part_number": "VTX460-25SAT3-480G",
    "brand": "OCZ",
    "model": "Vertex 460 480GB",
    "rank": 362,
    "benchmark": 86.6,
    "samples": 346,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11920/OCZ-VERTEX460"
  },
  {
    "type": "SSD",
    "part_number": "THNSNJ256GCSU",
    "brand": "Toshiba",
    "model": "HG6 256GB",
    "rank": 363,
    "benchmark": 86.5,
    "samples": 3732,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11911/TOSHIBA-THNSNJ256GCSU"
  },
  {
    "type": "SSD",
    "part_number": "PX-512M6S",
    "brand": "Plextor",
    "model": "M6S 512GB",
    "rank": 364,
    "benchmark": 86.5,
    "samples": 79,
    "url": "https://ssd.userbenchmark.com/Plextor-M6S-512GB/Rating/3506"
  },
  {
    "type": "SSD",
    "part_number": "ASX930SS3-240GM-C",
    "brand": "Adata",
    "model": "XPG SX930 240GB",
    "rank": 365,
    "benchmark": 86.5,
    "samples": 1270,
    "url": "https://ssd.userbenchmark.com/Adata-XPG-SX930-240GB/Rating/3636"
  },
  {
    "type": "SSD",
    "part_number": "PI960GS25SSDR",
    "brand": "Patriot",
    "model": "Ignite 960GB",
    "rank": 366,
    "benchmark": 86.4,
    "samples": 159,
    "url": "https://ssd.userbenchmark.com/Patriot-Ignite-960GB/Rating/3575"
  },
  {
    "type": "SSD",
    "part_number": "CT525MX300SSD1",
    "brand": "Crucial",
    "model": "MX300 525GB",
    "rank": 367,
    "benchmark": 86.3,
    "samples": 81500,
    "url": "https://ssd.userbenchmark.com/Crucial-MX300-525GB/Rating/3643"
  },
  {
    "type": "SSD",
    "part_number": "CT512MX100SSD1",
    "brand": "Crucial",
    "model": "MX100 512GB",
    "rank": 368,
    "benchmark": 86.1,
    "samples": 26293,
    "url": "https://ssd.userbenchmark.com/Crucial-MX100-512GB/Rating/3475"
  },
  {
    "type": "SSD",
    "part_number": "CT525MX300SSD4",
    "brand": "Crucial",
    "model": "MX300 SATA M.2 525GB",
    "rank": 369,
    "benchmark": 86.1,
    "samples": 16393,
    "url": "https://ssd.userbenchmark.com/SpeedTest/174014/Crucial-CT525MX300SSD4"
  },
  {
    "type": "SSD",
    "part_number": "ARC100-25SAT3-240G",
    "brand": "OCZ",
    "model": "ARC 100 240GB",
    "rank": 370,
    "benchmark": 86,
    "samples": 10150,
    "url": "https://ssd.userbenchmark.com/OCZ-ARC-100-240GB/Rating/2603"
  },
  {
    "type": "SSD",
    "part_number": "VTX460A-25SAT3-120G",
    "brand": "OCZ",
    "model": "Vertex 460A 120GB",
    "rank": 371,
    "benchmark": 85.9,
    "samples": 724,
    "url": "https://ssd.userbenchmark.com/OCZ-Vertex-460A-120GB/Rating/3490"
  },
  {
    "type": "SSD",
    "part_number": "VTR180-25SAT3-120G",
    "brand": "Toshiba",
    "model": "OCZ VT180 120GB",
    "rank": 372,
    "benchmark": 85.8,
    "samples": 38,
    "url": "https://ssd.userbenchmark.com/SpeedTest/172941/TOSHIBA-VT180"
  },
  {
    "type": "SSD",
    "part_number": "CT128M550SSD1",
    "brand": "Crucial",
    "model": "M550 128GB",
    "rank": 373,
    "benchmark": 85.8,
    "samples": 2256,
    "url": "https://ssd.userbenchmark.com/Crucial-M550-128GB/Rating/3485"
  },
  {
    "type": "SSD",
    "part_number": "CT500MX200SSD3",
    "brand": "Crucial",
    "model": "MX200 mSATA 500GB",
    "rank": 374,
    "benchmark": 85.8,
    "samples": 477,
    "url": "https://ssd.userbenchmark.com/SpeedTest/24060/Crucial-CT500MX200SSD3"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS1311-480-RB",
    "brand": "PNY",
    "model": "CS1311 480GB",
    "rank": 375,
    "benchmark": 85.7,
    "samples": 10711,
    "url": "https://ssd.userbenchmark.com/PNY-CS1311-480GB/Rating/3616"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Micron",
    "model": "M600 SATA M.2 256GB",
    "rank": 376,
    "benchmark": 85.6,
    "samples": 2202,
    "url": "https://ssd.userbenchmark.com/SpeedTest/22043/Micron-M600-MTFDDAV256MBF"
  },
  {
    "type": "SSD",
    "part_number": "PX-128M6Pro",
    "brand": "Plextor",
    "model": "M6 Pro 128GB",
    "rank": 377,
    "benchmark": 85.6,
    "samples": 644,
    "url": "https://ssd.userbenchmark.com/SpeedTest/14853/PLEXTOR-PX-128M6Pro"
  },
  {
    "type": "SSD",
    "part_number": "VTR180-25SAT3-120G",
    "brand": "OCZ",
    "model": "Vector 180 120GB",
    "rank": 378,
    "benchmark": 85.6,
    "samples": 334,
    "url": "https://ssd.userbenchmark.com/OCZ-Vector-180-120GB/Rating/3495"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDH3-250G-G25",
    "brand": "SanDisk",
    "model": "Ultra 3D 250GB",
    "rank": 379,
    "benchmark": 85.6,
    "samples": 4348,
    "url": "https://ssd.userbenchmark.com/SanDisk-Ultra-3D-250GB/Rating/3952"
  },
  {
    "type": "SSD",
    "part_number": "CT128M550SSD4",
    "brand": "Crucial",
    "model": "M550 SATA M.2 128GB",
    "rank": 380,
    "benchmark": 85.6,
    "samples": 149,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15846/Crucial-CT128M550SSD4"
  },
  {
    "type": "SSD",
    "part_number": "WDS250G2B0A",
    "brand": "WD",
    "model": "Blue 3D 250GB",
    "rank": 381,
    "benchmark": 85.6,
    "samples": 13721,
    "url": "https://ssd.userbenchmark.com/WD-Blue-3D-250GB/Rating/3948"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS900-960-RB",
    "brand": "PNY",
    "model": "CS900 960GB",
    "rank": 382,
    "benchmark": 85.5,
    "samples": 4053,
    "url": "https://ssd.userbenchmark.com/SpeedTest/443150/PNY-CS900-960GB-SSD"
  },
  {
    "type": "SSD",
    "part_number": "SKC400S37/512G",
    "brand": "Kingston",
    "model": "SSDNow KC400 512GB",
    "rank": 383,
    "benchmark": 85.5,
    "samples": 1959,
    "url": "https://ssd.userbenchmark.com/SpeedTest/72936/KINGSTON-SKC400S37512G"
  },
  {
    "type": "SSD",
    "part_number": "CT250BX100SSD1",
    "brand": "Crucial",
    "model": "BX100 250GB",
    "rank": 384,
    "benchmark": 85.5,
    "samples": 30870,
    "url": "https://ssd.userbenchmark.com/Crucial-BX100-250GB/Rating/3145"
  },
  {
    "type": "SSD",
    "part_number": "PX-128M6S",
    "brand": "Plextor",
    "model": "M6S 128GB",
    "rank": 385,
    "benchmark": 85.5,
    "samples": 2467,
    "url": "https://ssd.userbenchmark.com/Plextor-M6S-128GB/Rating/2225"
  },
  {
    "type": "SSD",
    "part_number": "SHSS37A/120G",
    "brand": "HyperX",
    "model": "Savage 120GB",
    "rank": 386,
    "benchmark": 85.5,
    "samples": 5773,
    "url": "https://ssd.userbenchmark.com/HyperX-Savage-120GB/Rating/3496"
  },
  {
    "type": "SSD",
    "part_number": "ST480HM000",
    "brand": "Seagate",
    "model": "600 480GB",
    "rank": 387,
    "benchmark": 85.2,
    "samples": 1073,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2966/ST480HM000-1G5162"
  },
  {
    "type": "SSD",
    "part_number": "MZ-MTE120BW",
    "brand": "Samsung",
    "model": "840 Evo mSATA 120GB",
    "rank": 388,
    "benchmark": 85.2,
    "samples": 577,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5728/Samsung-SSD-840-EVO-120GB-mSATA"
  },
  {
    "type": "SSD",
    "part_number": "ARC100-25SAT3-480G",
    "brand": "OCZ",
    "model": "ARC 100 480GB",
    "rank": 389,
    "benchmark": 85.2,
    "samples": 1583,
    "url": "https://ssd.userbenchmark.com/OCZ-ARC-100-480GB/Rating/3471"
  },
  {
    "type": "SSD",
    "part_number": "WDS250G2B0B",
    "brand": "WD",
    "model": "Blue 3D SATA M.2 250GB",
    "rank": 390,
    "benchmark": 85.2,
    "samples": 9861,
    "url": "https://ssd.userbenchmark.com/SpeedTest/341807/WDC-WDS250G2B0B-00YS70"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZ7PD256HAFV-000H7 256GB",
    "rank": 391,
    "benchmark": 85.1,
    "samples": 2880,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4570/SAMSUNG-MZ7PD256HAFV-000H7"
  },
  {
    "type": "SSD",
    "part_number": "WDS500G1B0A",
    "brand": "WD",
    "model": "Blue 500GB",
    "rank": 392,
    "benchmark": 85,
    "samples": 12572,
    "url": "https://ssd.userbenchmark.com/SpeedTest/192687/WDC-WDS500G1B0A-00H9H0"
  },
  {
    "type": "SSD",
    "part_number": "VX500-25SAT3-256G",
    "brand": "Toshiba",
    "model": "OCZ VX500 256GB",
    "rank": 393,
    "benchmark": 84.9,
    "samples": 168,
    "url": "https://ssd.userbenchmark.com/SpeedTest/193061/TOSHIBA-VX500"
  },
  {
    "type": "SSD",
    "part_number": "HDTS325XZSTA",
    "brand": "Toshiba",
    "model": "Q Series Pro 256GB",
    "rank": 394,
    "benchmark": 84.9,
    "samples": 1419,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7204/TOSHIBA-THNSNJ25"
  },
  {
    "type": "SSD",
    "part_number": "HDTS325EZSTA",
    "brand": "Toshiba",
    "model": "Q Series Pro 256GB",
    "rank": 394,
    "benchmark": 84.9,
    "samples": 1419,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7204/TOSHIBA-THNSNJ25"
  },
  {
    "type": "SSD",
    "part_number": "THNSNJ256GCST",
    "brand": "Toshiba",
    "model": "Q Series Pro 256GB",
    "rank": 394,
    "benchmark": 84.9,
    "samples": 1419,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7204/TOSHIBA-THNSNJ25"
  },
  {
    "type": "SSD",
    "part_number": "WDS500G1B0B",
    "brand": "WD",
    "model": "Blue SATA M.2 500GB",
    "rank": 395,
    "benchmark": 84.9,
    "samples": 5060,
    "url": "https://ssd.userbenchmark.com/SpeedTest/209713/WDC-WDS500G1B0B-00AS40"
  },
  {
    "type": "SSD",
    "part_number": "ZTSSD-A5P-240G-PE",
    "brand": "Zotac",
    "model": "Premium Edition 240GB",
    "rank": 396,
    "benchmark": 84.8,
    "samples": 1040,
    "url": "https://ssd.userbenchmark.com/Zotac-Premium-Edition-240GB/Rating/3598"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BB480G4",
    "brand": "Intel",
    "model": "S3500 Series 480GB",
    "rank": 397,
    "benchmark": 84.8,
    "samples": 776,
    "url": "https://ssd.userbenchmark.com/SpeedTest/16864/INTEL-SSDSC2BB480G4"
  },
  {
    "type": "SSD",
    "part_number": "TS512GSSD370",
    "brand": "Transcend",
    "model": "SSD370 512GB",
    "rank": 398,
    "benchmark": 84.6,
    "samples": 1268,
    "url": "https://ssd.userbenchmark.com/Transcend-SSD370-512GB/Rating/3472"
  },
  {
    "type": "SSD",
    "part_number": "TS512GMTS800",
    "brand": "Transcend",
    "model": "MTS800 M.2 512GB",
    "rank": 399,
    "benchmark": 84.6,
    "samples": 511,
    "url": "https://ssd.userbenchmark.com/SpeedTest/22251/TS512GMTS800"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LCS-256L9S-11 2.5 7mm 256GB",
    "rank": 400,
    "benchmark": 84.6,
    "samples": 3548,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11259/LITEONIT-LCS-256L9S-11-25-7mm-256GB"
  },
  {
    "type": "SSD",
    "part_number": "SD8SB8U-1T00-1122",
    "brand": "SanDisk",
    "model": "X400 1TB",
    "rank": 401,
    "benchmark": 84.5,
    "samples": 1765,
    "url": "https://ssd.userbenchmark.com/SpeedTest/66487/SanDisk-SD8SB8U1T001122"
  },
  {
    "type": "SSD",
    "part_number": "SKC400S37/256G",
    "brand": "Kingston",
    "model": "SSDNow KC400 256GB",
    "rank": 402,
    "benchmark": 84.5,
    "samples": 2326,
    "url": "https://ssd.userbenchmark.com/SpeedTest/79042/KINGSTON-SKC400S37256G"
  },
  {
    "type": "SSD",
    "part_number": "GP-GSTFS30512GTTD",
    "brand": "Gigabyte",
    "model": "UD PRO 512GB",
    "rank": 403,
    "benchmark": 84.3,
    "samples": 2369,
    "url": "https://ssd.userbenchmark.com/SpeedTest/522549/GIGABYTE-GP-GSTFS30512GTTD"
  },
  {
    "type": "SSD",
    "part_number": "VTX460-25SAT3-120G",
    "brand": "OCZ",
    "model": "Vertex 460 120GB",
    "rank": 404,
    "benchmark": 84.3,
    "samples": 1037,
    "url": "https://ssd.userbenchmark.com/OCZ-Vertex-460-120GB/Rating/3488"
  },
  {
    "type": "SSD",
    "part_number": "TRN150-25SAT3-480G",
    "brand": "OCZ",
    "model": "Trion 150 480GB",
    "rank": 405,
    "benchmark": 84.3,
    "samples": 11455,
    "url": "https://ssd.userbenchmark.com/OCZ-Trion-150-480GB/Rating/3620"
  },
  {
    "type": "SSD",
    "part_number": "WDS100T1B0B",
    "brand": "WD",
    "model": "Blue SATA M.2 1TB",
    "rank": 406,
    "benchmark": 84.2,
    "samples": 2089,
    "url": "https://ssd.userbenchmark.com/SpeedTest/199326/WDC-WDS100T1B0B-00AS40"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDXP-120G-G25",
    "brand": "SanDisk",
    "model": "Extreme II 120GB",
    "rank": 407,
    "benchmark": 84.2,
    "samples": 1984,
    "url": "https://ssd.userbenchmark.com/SanDisk-Extreme-II-120GB/Rating/1889"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LCS-256M6S 2.5 7mm 256GB",
    "rank": 408,
    "benchmark": 84.1,
    "samples": 7972,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2535/LITEONIT-LCS-256M6S-25-7mm-256GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Apple",
    "model": "SM0256F 251GB",
    "rank": 409,
    "benchmark": 84,
    "samples": 222,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3466/APPLE-SSD-SM0256F"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDHII-960G-G25",
    "brand": "SanDisk",
    "model": "Ultra II 960GB",
    "rank": 410,
    "benchmark": 83.9,
    "samples": 22467,
    "url": "https://ssd.userbenchmark.com/SanDisk-Ultra-II-960GB/Rating/3582"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BP240G410",
    "brand": "Intel",
    "model": "730 Series 240GB",
    "rank": 411,
    "benchmark": 83.9,
    "samples": 6698,
    "url": "https://ssd.userbenchmark.com/Intel-730-Series-240GB/Rating/2031"
  },
  {
    "type": "SSD",
    "part_number": "GP-GSTFS30256GTTD",
    "brand": "Gigabyte",
    "model": "UD PRO 256GB",
    "rank": 412,
    "benchmark": 83.9,
    "samples": 1777,
    "url": "https://ssd.userbenchmark.com/SpeedTest/514244/GIGABYTE-GP-GSTFS30256GTTD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "SM841N 2.5 7mm 256GB",
    "rank": 413,
    "benchmark": 83.8,
    "samples": 1670,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12586/SAMSUNG-SSD-SM841N-25-7mm-256GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Apple",
    "model": "SM0512F 500GB",
    "rank": 414,
    "benchmark": 83.8,
    "samples": 240,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9630/APPLE-SSD-SM0512F"
  },
  {
    "type": "SSD",
    "part_number": "HDTS251EZSTA",
    "brand": "Toshiba",
    "model": "HG5d Q Series 512GB",
    "rank": 415,
    "benchmark": 83.6,
    "samples": 453,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5182/TOSHIBA-THNSNH512GBST"
  },
  {
    "type": "SSD",
    "part_number": "HDTS251XZSTA",
    "brand": "Toshiba",
    "model": "HG5d Q Series 512GB",
    "rank": 415,
    "benchmark": 83.6,
    "samples": 453,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5182/TOSHIBA-THNSNH512GBST"
  },
  {
    "type": "SSD",
    "part_number": "THNSNH512GBST",
    "brand": "Toshiba",
    "model": "HG5d Q Series 512GB",
    "rank": 415,
    "benchmark": 83.6,
    "samples": 453,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5182/TOSHIBA-THNSNH512GBST"
  },
  {
    "type": "SSD",
    "part_number": "SD8SB8U-512G-1122",
    "brand": "SanDisk",
    "model": "X400 512GB",
    "rank": 416,
    "benchmark": 83.6,
    "samples": 6144,
    "url": "https://ssd.userbenchmark.com/SpeedTest/74118/SanDisk-SD8SB8U512G1122"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDST480GB",
    "brand": "Mushkin",
    "model": "Striker 480GB",
    "rank": 417,
    "benchmark": 83.6,
    "samples": 207,
    "url": "https://ssd.userbenchmark.com/SpeedTest/24686/MKNSSDST480GB"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDE3480GB",
    "brand": "Mushkin",
    "model": "ECO3 480GB",
    "rank": 418,
    "benchmark": 83.5,
    "samples": 2069,
    "url": "https://ssd.userbenchmark.com/SpeedTest/82715/MKNSSDE3480GB"
  },
  {
    "type": "SSD",
    "part_number": "VTR1-25SAT3-128G",
    "brand": "OCZ",
    "model": "Vector 128GB",
    "rank": 419,
    "benchmark": 83.4,
    "samples": 1202,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4023/OCZ-VECTOR"
  },
  {
    "type": "SSD",
    "part_number": "SD6SB2M-512G-1022I",
    "brand": "SanDisk",
    "model": "X210 512GB",
    "rank": 420,
    "benchmark": 83.3,
    "samples": 1309,
    "url": "https://ssd.userbenchmark.com/SpeedTest/16627/SanDisk-SD6SB2M512G1022I"
  },
  {
    "type": "SSD",
    "part_number": "CT960BX200SSD1",
    "brand": "Crucial",
    "model": "BX200 960GB",
    "rank": 421,
    "benchmark": 83.2,
    "samples": 963,
    "url": "https://ssd.userbenchmark.com/Crucial-BX200-960GB/Rating/3628"
  },
  {
    "type": "SSD",
    "part_number": "VTR150-25SAT3-120G",
    "brand": "OCZ",
    "model": "Vector 150 120GB",
    "rank": 422,
    "benchmark": 83.2,
    "samples": 1217,
    "url": "https://ssd.userbenchmark.com/OCZ-Vector-150-120GB/Rating/2242"
  },
  {
    "type": "SSD",
    "part_number": "CT1000MX200SSD1",
    "brand": "Crucial",
    "model": "MX200 1TB",
    "rank": 423,
    "benchmark": 83.2,
    "samples": 3067,
    "url": "https://ssd.userbenchmark.com/Crucial-MX200-1TB/Rating/3578"
  },
  {
    "type": "SSD",
    "part_number": "TS512GMTS600",
    "brand": "Transcend",
    "model": "MTS600 M.2 512GB",
    "rank": 424,
    "benchmark": 83.2,
    "samples": 114,
    "url": "https://ssd.userbenchmark.com/SpeedTest/13460/TS512GMTS600"
  },
  {
    "type": "SSD",
    "part_number": "VX500-25SAT3-128G",
    "brand": "Toshiba",
    "model": "OCZ VX500 128GB",
    "rank": 425,
    "benchmark": 83,
    "samples": 84,
    "url": "https://ssd.userbenchmark.com/SpeedTest/194663/TOSHIBA-VX500"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F256GBLX",
    "brand": "Corsair",
    "model": "Force LX 256GB",
    "rank": 426,
    "benchmark": 83,
    "samples": 1956,
    "url": "https://ssd.userbenchmark.com/SpeedTest/13556/CORSAIR-FORCE-LX-SSD"
  },
  {
    "type": "SSD",
    "part_number": "ST240HM000",
    "brand": "Seagate",
    "model": "600 240GB",
    "rank": 427,
    "benchmark": 82.9,
    "samples": 2636,
    "url": "https://ssd.userbenchmark.com/Seagate-600-240GB/Rating/1601"
  },
  {
    "type": "SSD",
    "part_number": "PX-128M5P",
    "brand": "Plextor",
    "model": "M5 Pro 128GB",
    "rank": 428,
    "benchmark": 82.9,
    "samples": 3464,
    "url": "https://ssd.userbenchmark.com/Plextor-M5-Pro-128GB/Rating/1893"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDHII-240G-G25",
    "brand": "SanDisk",
    "model": "Ultra II 240GB",
    "rank": 429,
    "benchmark": 82.9,
    "samples": 45730,
    "url": "https://ssd.userbenchmark.com/SanDisk-Ultra-II-240GB/Rating/2548"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Plextor",
    "model": "PX-256M5S 256GB",
    "rank": 430,
    "benchmark": 82.8,
    "samples": 1876,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1304/PLEXTOR-PX-256M5S"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-N480GBGTXB-BK",
    "brand": "Corsair",
    "model": "Neutron GTX 480GB",
    "rank": 431,
    "benchmark": 82.8,
    "samples": 444,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9137/Corsair-Neutron-GTX-SSD"
  },
  {
    "type": "SSD",
    "part_number": "THNSNS240GBSP",
    "brand": "Toshiba",
    "model": "THNSNS Series 240GB",
    "rank": 432,
    "benchmark": 82.6,
    "samples": 88,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4786/TOSHIBA-THNSNS240GBSP"
  },
  {
    "type": "SSD",
    "part_number": "CT480M500SSD1",
    "brand": "Crucial",
    "model": "M500 480GB",
    "rank": 433,
    "benchmark": 82.5,
    "samples": 7272,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2643/Crucial-CT480M500SSD1"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZ7PD128HAFV-000 128GB",
    "rank": 434,
    "benchmark": 82.4,
    "samples": 1291,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9510/SAMSUNG-MZ7PD128HAFV-000"
  },
  {
    "type": "SSD",
    "part_number": "CT500MX200SSD1",
    "brand": "Crucial",
    "model": "MX200 500GB",
    "rank": 435,
    "benchmark": 82.3,
    "samples": 13093,
    "url": "https://ssd.userbenchmark.com/Crucial-MX200-500GB/Rating/3504"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDTR480GB",
    "brand": "Mushkin",
    "model": "Triactor 480GB",
    "rank": 436,
    "benchmark": 82.3,
    "samples": 1519,
    "url": "https://ssd.userbenchmark.com/SpeedTest/80762/MKNSSDTR480GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LCS-512M6S 2.5 7mm 512GB",
    "rank": 437,
    "benchmark": 82.2,
    "samples": 907,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4103/LITEONIT-LCS-512M6S-25-7mm-512GB"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2KW480H6",
    "brand": "Intel",
    "model": "540s Series 480GB",
    "rank": 438,
    "benchmark": 82.2,
    "samples": 3431,
    "url": "https://ssd.userbenchmark.com/SpeedTest/128513/INTEL-SSDSC2KW480H6"
  },
  {
    "type": "SSD",
    "part_number": "WDS250G1B0A",
    "brand": "WD",
    "model": "Blue 250GB",
    "rank": 439,
    "benchmark": 82.1,
    "samples": 21094,
    "url": "https://ssd.userbenchmark.com/SpeedTest/191455/WDC-WDS250G1B0A-00H9H0"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-P256GBP-BK",
    "brand": "Corsair",
    "model": "Performance Pro 256GB",
    "rank": 440,
    "benchmark": 81.9,
    "samples": 272,
    "url": "https://ssd.userbenchmark.com/Corsair-Performance-Pro-256GB/Rating/45"
  },
  {
    "type": "SSD",
    "part_number": "SD7SB3Q-128G-1002",
    "brand": "SanDisk",
    "model": "X300s Non-Secure 256GB",
    "rank": 441,
    "benchmark": 81.8,
    "samples": 2091,
    "url": "https://ssd.userbenchmark.com/SpeedTest/20604/SanDisk-SD7SB3Q256G1002"
  },
  {
    "type": "SSD",
    "part_number": "CT960M500SSD1",
    "brand": "Crucial",
    "model": "M500 960GB",
    "rank": 442,
    "benchmark": 81.8,
    "samples": 3199,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2379/Crucial-CT960M500SSD1"
  },
  {
    "type": "SSD",
    "part_number": "CT256MX100SSD1",
    "brand": "Crucial",
    "model": "MX100 256GB",
    "rank": 443,
    "benchmark": 81.7,
    "samples": 48938,
    "url": "https://ssd.userbenchmark.com/Crucial-MX100-256GB/Rating/2317"
  },
  {
    "type": "SSD",
    "part_number": "SD6SB2M-256G-1022I",
    "brand": "SanDisk",
    "model": "X210 256GB",
    "rank": 444,
    "benchmark": 81.7,
    "samples": 199,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2244/SanDisk-SD6SB2M256G1022I"
  },
  {
    "type": "SSD",
    "part_number": "ASP610SS3-256GM-C",
    "brand": "Adata",
    "model": "Premier SP610 256GB",
    "rank": 445,
    "benchmark": 81.7,
    "samples": 1717,
    "url": "https://ssd.userbenchmark.com/Adata-Premier-SP610-256GB/Rating/3281"
  },
  {
    "type": "SSD",
    "part_number": "SKC400S37/128G",
    "brand": "Kingston",
    "model": "SSDNow KC400 128GB",
    "rank": 446,
    "benchmark": 81.7,
    "samples": 627,
    "url": "https://ssd.userbenchmark.com/SpeedTest/78104/KINGSTON-SKC400S37128G"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDHP-256G-G25",
    "brand": "SanDisk",
    "model": "Ultra Plus 256GB",
    "rank": 447,
    "benchmark": 81.5,
    "samples": 15443,
    "url": "https://ssd.userbenchmark.com/SanDisk-Ultra-Plus-256GB/Rating/1511"
  },
  {
    "type": "SSD",
    "part_number": "ASP550SS3-960GM-C",
    "brand": "Adata",
    "model": "Premier SP550 960GB",
    "rank": 448,
    "benchmark": 81.5,
    "samples": 898,
    "url": "https://ssd.userbenchmark.com/Adata-Premier-SP550-960GB/Rating/3625"
  },
  {
    "type": "SSD",
    "part_number": "HDTS212EZSTA",
    "brand": "Toshiba",
    "model": "HG5d Q Series 128GB",
    "rank": 449,
    "benchmark": 81.4,
    "samples": 2135,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2325/TOSHIBA-THNSNH128GBST"
  },
  {
    "type": "SSD",
    "part_number": "HDTS212XZSTA",
    "brand": "Toshiba",
    "model": "HG5d Q Series 128GB",
    "rank": 449,
    "benchmark": 81.4,
    "samples": 2135,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2325/TOSHIBA-THNSNH128GBST"
  },
  {
    "type": "SSD",
    "part_number": "THNSNH128GBST",
    "brand": "Toshiba",
    "model": "HG5d Q Series 128GB",
    "rank": 449,
    "benchmark": 81.4,
    "samples": 2135,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2325/TOSHIBA-THNSNH128GBST"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Plextor",
    "model": "PX-256M6M 256GB",
    "rank": 450,
    "benchmark": 81.4,
    "samples": 247,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9887/PLEXTOR-PX-256M6M"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSNH512GCST 512GB",
    "rank": 451,
    "benchmark": 81.4,
    "samples": 269,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12185/TOSHIBA-THNSNH512GCST"
  },
  {
    "type": "SSD",
    "part_number": "ARC100-25SAT3-120G",
    "brand": "OCZ",
    "model": "ARC 100 120GB",
    "rank": 452,
    "benchmark": 81.3,
    "samples": 3313,
    "url": "https://ssd.userbenchmark.com/OCZ-ARC-100-120GB/Rating/3487"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDRE256GB",
    "brand": "Mushkin",
    "model": "Reactor 256GB",
    "rank": 453,
    "benchmark": 81.3,
    "samples": 848,
    "url": "https://ssd.userbenchmark.com/SpeedTest/30195/MKNSSDRE256GB"
  },
  {
    "type": "SSD",
    "part_number": "HDTS412XZSTA",
    "brand": "Toshiba",
    "model": "Q300 Pro 128GB",
    "rank": 454,
    "benchmark": 81.1,
    "samples": 207,
    "url": "https://ssd.userbenchmark.com/SpeedTest/41261/TOSHIBA-Q300-Pro"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDE3240GB",
    "brand": "Mushkin",
    "model": "ECO3 240GB",
    "rank": 455,
    "benchmark": 81,
    "samples": 697,
    "url": "https://ssd.userbenchmark.com/SpeedTest/82991/MKNSSDE3240GB"
  },
  {
    "type": "SSD",
    "part_number": "SHSS37A/480G",
    "brand": "HyperX",
    "model": "Savage 480GB",
    "rank": 456,
    "benchmark": 81,
    "samples": 151,
    "url": "https://ssd.userbenchmark.com/HyperX-Savage-480GB/Rating/3602"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F240GBLEB",
    "brand": "Corsair",
    "model": "Force LE 240GB",
    "rank": 457,
    "benchmark": 81,
    "samples": 12071,
    "url": "https://ssd.userbenchmark.com/SpeedTest/42143/Corsair-Force-LE-SSD"
  },
  {
    "type": "SSD",
    "part_number": "HDTS312EZSTA",
    "brand": "Toshiba",
    "model": "Q Series Pro 128GB",
    "rank": 458,
    "benchmark": 80.9,
    "samples": 2285,
    "url": "https://ssd.userbenchmark.com/Toshiba-Q-Series-Pro-128GB/Rating/1943"
  },
  {
    "type": "SSD",
    "part_number": "HDTS312XZSTA",
    "brand": "Toshiba",
    "model": "Q Series Pro 128GB",
    "rank": 458,
    "benchmark": 80.9,
    "samples": 2285,
    "url": "https://ssd.userbenchmark.com/Toshiba-Q-Series-Pro-128GB/Rating/1943"
  },
  {
    "type": "SSD",
    "part_number": "TS256GSSD370",
    "brand": "Transcend",
    "model": "SSD370 256GB",
    "rank": 459,
    "benchmark": 80.9,
    "samples": 4299,
    "url": "https://ssd.userbenchmark.com/Transcend-SSD370-256GB/Rating/2701"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "SM841 2.5\" 7mm 256GB",
    "rank": 460,
    "benchmark": 80.8,
    "samples": 1982,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4650/SAMSUNG-SSD-SM841-25--7mm-256GB"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2KW010X6",
    "brand": "Intel",
    "model": "540s Series 1TB",
    "rank": 461,
    "benchmark": 80.8,
    "samples": 1413,
    "url": "https://ssd.userbenchmark.com/SpeedTest/123180/INTEL-SSDSC2KW010X6"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Plextor",
    "model": "PX-256M3P 256GB",
    "rank": 462,
    "benchmark": 80.7,
    "samples": 127,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3332/PLEXTOR-PX-256M3P"
  },
  {
    "type": "SSD",
    "part_number": "SD7SB6S-256G-1122",
    "brand": "SanDisk",
    "model": "X300 256GB",
    "rank": 463,
    "benchmark": 80.6,
    "samples": 1842,
    "url": "https://ssd.userbenchmark.com/SpeedTest/19618/SanDisk-SD7SB6S256G1122"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "SM841 mSATA 256GB",
    "rank": 464,
    "benchmark": 80.6,
    "samples": 836,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4244/SAMSUNG-SSD-SM841-mSATA-256GB"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-N240GBGTXB-BK",
    "brand": "Corsair",
    "model": "Neutron GTX 240GB",
    "rank": 465,
    "benchmark": 80.5,
    "samples": 2921,
    "url": "https://ssd.userbenchmark.com/Corsair-Neutron-GTX-240GB/Rating/1404"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "SM841 2.5\" 7mm 512GB",
    "rank": 466,
    "benchmark": 80.5,
    "samples": 486,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6119/SAMSUNG-SSD-SM841-25--7mm-512GB"
  },
  {
    "type": "SSD",
    "part_number": "ASP920SS3-512GM-C",
    "brand": "Adata",
    "model": "Premier Pro SP920 512GB",
    "rank": 467,
    "benchmark": 80.4,
    "samples": 269,
    "url": "https://ssd.userbenchmark.com/SpeedTest/26813/ADATA-SP920SS"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS1311-240-RB",
    "brand": "PNY",
    "model": "CS1311 240GB",
    "rank": 468,
    "benchmark": 80.4,
    "samples": 19804,
    "url": "https://ssd.userbenchmark.com/PNY-CS1311-240GB/Rating/3615"
  },
  {
    "type": "SSD",
    "part_number": "HDTS425XZSTA",
    "brand": "Toshiba",
    "model": "Q300 Pro 256GB",
    "rank": 469,
    "benchmark": 80.4,
    "samples": 1264,
    "url": "https://ssd.userbenchmark.com/SpeedTest/35467/TOSHIBA-Q300-Pro"
  },
  {
    "type": "SSD",
    "part_number": "ASP920SS3-256GM-C",
    "brand": "Adata",
    "model": "Premier Pro SP920 256GB",
    "rank": 470,
    "benchmark": 80.3,
    "samples": 2391,
    "url": "https://ssd.userbenchmark.com/Adata-Premier-Pro-SP920-256GB/Rating/3454"
  },
  {
    "type": "SSD",
    "part_number": "ASP550SS3-480GM-C",
    "brand": "Adata",
    "model": "Premier SP550 480GB",
    "rank": 471,
    "benchmark": 80.2,
    "samples": 6796,
    "url": "https://ssd.userbenchmark.com/Adata-Premier-SP550-480GB/Rating/3624"
  },
  {
    "type": "SSD",
    "part_number": "SSD7SC240GOPT-RB",
    "brand": "PNY",
    "model": "Optima 240GB",
    "rank": 472,
    "benchmark": 80.2,
    "samples": 673,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7567/SSD2SC240G1SA754D117-443"
  },
  {
    "type": "SSD",
    "part_number": "SSD2SC240G1SA754D117",
    "brand": "PNY",
    "model": "Optima 240GB",
    "rank": 472,
    "benchmark": 80.2,
    "samples": 673,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7567/SSD2SC240G1SA754D117-443"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS900-480-RB",
    "brand": "PNY",
    "model": "CS900 480GB",
    "rank": 473,
    "benchmark": 79.7,
    "samples": 10388,
    "url": "https://ssd.userbenchmark.com/SpeedTest/195106/PNY-CS900-480GB-SSD"
  },
  {
    "type": "SSD",
    "part_number": "TS256GMTS400",
    "brand": "Transcend",
    "model": "MTS400 M.2 256GB",
    "rank": 474,
    "benchmark": 79.7,
    "samples": 874,
    "url": "https://ssd.userbenchmark.com/SpeedTest/18101/TS256GMTS400"
  },
  {
    "type": "SSD",
    "part_number": "WDS250G1B0B",
    "brand": "WD",
    "model": "Blue SATA M.2 250GB",
    "rank": 475,
    "benchmark": 79.7,
    "samples": 6950,
    "url": "https://ssd.userbenchmark.com/SpeedTest/190515/WDC-WDS250G1B0B-00AS40"
  },
  {
    "type": "SSD",
    "part_number": "TS256GMTS600",
    "brand": "Transcend",
    "model": "MTS600 M.2 256GB",
    "rank": 476,
    "benchmark": 79.6,
    "samples": 184,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15991/TS256GMTS600"
  },
  {
    "type": "SSD",
    "part_number": "ASU635SS-960GQ-R",
    "brand": "Adata",
    "model": "SU635 960GB",
    "rank": 477,
    "benchmark": 79.4,
    "samples": 891,
    "url": "https://ssd.userbenchmark.com/SpeedTest/802076/ADATA-SU635"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Adata",
    "model": "SP600 256GB",
    "rank": 478,
    "benchmark": 79.4,
    "samples": 3824,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8707/ADATA-SP600"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-N256GB3-BK",
    "brand": "Corsair",
    "model": "Neutron 256GB",
    "rank": 479,
    "benchmark": 79.4,
    "samples": 976,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2557/Corsair-Neutron-SSD"
  },
  {
    "type": "SSD",
    "part_number": "SD6SB1M-256G-1022I",
    "brand": "SanDisk",
    "model": "X110 256GB",
    "rank": 480,
    "benchmark": 79.4,
    "samples": 4685,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6828/SanDisk-SD6SB1M256G1022I"
  },
  {
    "type": "SSD",
    "part_number": "TS256GMTS800",
    "brand": "Transcend",
    "model": "MTS800 M.2 256GB",
    "rank": 481,
    "benchmark": 79.4,
    "samples": 1789,
    "url": "https://ssd.userbenchmark.com/SpeedTest/20255/TS256GMTS800"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC120G709A104-432278 120GB",
    "rank": 482,
    "benchmark": 79.3,
    "samples": 104,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7030/SSD2SC120G709A104-432278"
  },
  {
    "type": "SSD",
    "part_number": "HDTS225EZSTA",
    "brand": "Toshiba",
    "model": "HG5d Q Series 256GB",
    "rank": 483,
    "benchmark": 79.3,
    "samples": 2290,
    "url": "https://ssd.userbenchmark.com/Toshiba-HG5d-Q-Series-256GB/Rating/1624"
  },
  {
    "type": "SSD",
    "part_number": "HDTS225XZSTA",
    "brand": "Toshiba",
    "model": "HG5d Q Series 256GB",
    "rank": 483,
    "benchmark": 79.3,
    "samples": 2290,
    "url": "https://ssd.userbenchmark.com/Toshiba-HG5d-Q-Series-256GB/Rating/1624"
  },
  {
    "type": "SSD",
    "part_number": "CT275MX300SSD4",
    "brand": "Crucial",
    "model": "MX300 SATA M.2 275GB",
    "rank": 484,
    "benchmark": 79.3,
    "samples": 14847,
    "url": "https://ssd.userbenchmark.com/SpeedTest/159989/Crucial-CT275MX300SSD4"
  },
  {
    "type": "SSD",
    "part_number": "SH103S3/240G",
    "brand": "Kingston",
    "model": "HyperX 3K 240GB",
    "rank": 485,
    "benchmark": 79.3,
    "samples": 21981,
    "url": "https://ssd.userbenchmark.com/Kingston-HyperX-3K-240GB/Rating/1818"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-256 256GB",
    "rank": 486,
    "benchmark": 79.2,
    "samples": 156,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6096/LITEONIT-LITEONIT-LMT-256"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F240GBGT-BK",
    "brand": "Corsair",
    "model": "Force GT 240GB",
    "rank": 487,
    "benchmark": 79.1,
    "samples": 2983,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1132/Corsair-Force-GT"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2CW240A3",
    "brand": "Intel",
    "model": "520 Series 240GB",
    "rank": 488,
    "benchmark": 79.1,
    "samples": 13220,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3641/INTEL-SSDSC2CW240A3"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BB300G4",
    "brand": "Intel",
    "model": "S3500 Series 300GB",
    "rank": 489,
    "benchmark": 79,
    "samples": 388,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9352/INTEL-SSDSC2BB300G4"
  },
  {
    "type": "SSD",
    "part_number": "MTFDDAK480MBB",
    "brand": "Micron",
    "model": "M500DC 480GB",
    "rank": 490,
    "benchmark": 78.8,
    "samples": 152,
    "url": "https://ssd.userbenchmark.com/SpeedTest/21867/Micron-M500DC-MT"
  },
  {
    "type": "SSD",
    "part_number": "PX-256M5M",
    "brand": "Plextor",
    "model": "M5M mSATA 256GB",
    "rank": 491,
    "benchmark": 78.8,
    "samples": 382,
    "url": "https://ssd.userbenchmark.com/Plextor-M5M-mSATA-256GB/Rating/1626"
  },
  {
    "type": "SSD",
    "part_number": "SD7UB2Q-512G-1022",
    "brand": "SanDisk",
    "model": "X300s SATA 512GB",
    "rank": 492,
    "benchmark": 78.7,
    "samples": 69,
    "url": "https://ssd.userbenchmark.com/SpeedTest/16017/SanDisk-SD7UB2Q512G1122"
  },
  {
    "type": "SSD",
    "part_number": "HDTS748XZSTA",
    "brand": "Toshiba",
    "model": "Q300 480GB",
    "rank": 493,
    "benchmark": 78.7,
    "samples": 4068,
    "url": "https://ssd.userbenchmark.com/SpeedTest/38603/TOSHIBA-Q300"
  },
  {
    "type": "SSD",
    "part_number": "HDTS748EZSTA",
    "brand": "Toshiba",
    "model": "Q300 480GB",
    "rank": 493,
    "benchmark": 78.7,
    "samples": 4068,
    "url": "https://ssd.userbenchmark.com/SpeedTest/38603/TOSHIBA-Q300"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2CT240A4K5",
    "brand": "Intel",
    "model": "335 Series 240GB",
    "rank": 494,
    "benchmark": 78.6,
    "samples": 3669,
    "url": "https://ssd.userbenchmark.com/Intel-335-Series-240GB/Rating/1942"
  },
  {
    "type": "SSD",
    "part_number": "SD5SB2-512G",
    "brand": "SanDisk",
    "model": "X100 512GB",
    "rank": 495,
    "benchmark": 78.5,
    "samples": 73,
    "url": "https://ssd.userbenchmark.com/SpeedTest/21973/SanDisk-SD5SB2512G"
  },
  {
    "type": "SSD",
    "part_number": "PX-256M3",
    "brand": "Plextor",
    "model": "M3 256GB",
    "rank": 496,
    "benchmark": 78.5,
    "samples": 218,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3752/PLEXTOR-PX-256M3"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-N120GBGTXB-BK",
    "brand": "Corsair",
    "model": "Neutron GTX 120GB",
    "rank": 497,
    "benchmark": 78.5,
    "samples": 1994,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1081/Corsair-Neutron-GTX-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Plextor",
    "model": "PX-128M5 128GB",
    "rank": 498,
    "benchmark": 78.3,
    "samples": 170,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4068/PLEXTOR-PX-128M5"
  },
  {
    "type": "SSD",
    "part_number": "TRN150-25SAT3-240G",
    "brand": "OCZ",
    "model": "Trion 150 240GB",
    "rank": 499,
    "benchmark": 78.3,
    "samples": 12497,
    "url": "https://ssd.userbenchmark.com/OCZ-Trion-150-240GB/Rating/3619"
  },
  {
    "type": "SSD",
    "part_number": "CT275MX300SSD1",
    "brand": "Crucial",
    "model": "MX300 275GB",
    "rank": 500,
    "benchmark": 78.2,
    "samples": 54306,
    "url": "https://ssd.userbenchmark.com/Crucial-MX300-275GB/Rating/3642"
  },
  {
    "type": "SSD",
    "part_number": "ST240FP0021",
    "brand": "Seagate",
    "model": "600 Pro 240GB",
    "rank": 501,
    "benchmark": 78.2,
    "samples": 307,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7447/ST240FP0021"
  },
  {
    "type": "SSD",
    "part_number": "SD6SN1M-256G",
    "brand": "SanDisk",
    "model": "X110 SATA M.2 256GB",
    "rank": 502,
    "benchmark": 78.2,
    "samples": 1709,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10522/SanDisk-SD6SN1M-256G-1006"
  },
  {
    "type": "SSD",
    "part_number": "CT480BX200SSD1",
    "brand": "Crucial",
    "model": "BX200 480GB",
    "rank": 503,
    "benchmark": 78,
    "samples": 9092,
    "url": "https://ssd.userbenchmark.com/Crucial-BX200-480GB/Rating/3627"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BW240H601",
    "brand": "Intel",
    "model": "535 Series 240GB",
    "rank": 504,
    "benchmark": 78,
    "samples": 6921,
    "url": "https://ssd.userbenchmark.com/Intel-535-Series-240GB/Rating/3500"
  },
  {
    "type": "SSD",
    "part_number": "SH100S3/240G",
    "brand": "Kingston",
    "model": "HyperX 240GB",
    "rank": 505,
    "benchmark": 78,
    "samples": 335,
    "url": "https://ssd.userbenchmark.com/Kingston-HyperX-240GB/Rating/1327"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDST240GB",
    "brand": "Mushkin",
    "model": "Striker 240GB",
    "rank": 506,
    "benchmark": 77.8,
    "samples": 99,
    "url": "https://ssd.userbenchmark.com/SpeedTest/36396/MKNSSDST240GB"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-N240GB3-BK",
    "brand": "Corsair",
    "model": "Neutron (v0) 240GB",
    "rank": 507,
    "benchmark": 77.7,
    "samples": 332,
    "url": "https://ssd.userbenchmark.com/Corsair-Neutron-v0-240GB/Rating/1405"
  },
  {
    "type": "SSD",
    "part_number": "ASP550SS3-240GM-C",
    "brand": "Adata",
    "model": "Premier SP550 240GB",
    "rank": 508,
    "benchmark": 77.7,
    "samples": 25052,
    "url": "https://ssd.userbenchmark.com/Adata-Premier-SP550-240GB/Rating/3623"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F240GBGS-BK",
    "brand": "Corsair",
    "model": "Force GS 240GB",
    "rank": 509,
    "benchmark": 77.6,
    "samples": 3895,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2047/Corsair-Force-GS"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-256L9M-11 MSATA 256GB",
    "rank": 510,
    "benchmark": 77.6,
    "samples": 1839,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12690/LITEONIT-LMT-256L9M-11-MSATA-256GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSNH128GCST 128GB",
    "rank": 511,
    "benchmark": 77.6,
    "samples": 1551,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5795/TOSHIBA-THNSNH128GCST"
  },
  {
    "type": "SSD",
    "part_number": "THNSNJ128GCSU",
    "brand": "Toshiba",
    "model": "HG6 128GB",
    "rank": 512,
    "benchmark": 77.6,
    "samples": 3444,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12239/TOSHIBA-THNSNJ128GCSU"
  },
  {
    "type": "SSD",
    "part_number": "TS256GSSD340",
    "brand": "Transcend",
    "model": "SSD340 256GB",
    "rank": 513,
    "benchmark": 77.6,
    "samples": 1607,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3495/TS256GSSD340"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDHII-120G-G25",
    "brand": "SanDisk",
    "model": "Ultra II 120GB",
    "rank": 514,
    "benchmark": 77.6,
    "samples": 9161,
    "url": "https://ssd.userbenchmark.com/SanDisk-Ultra-II-120GB/Rating/3486"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Geil",
    "model": "Zenith A3 240GB",
    "rank": 515,
    "benchmark": 77.5,
    "samples": 61,
    "url": "https://ssd.userbenchmark.com/SpeedTest/22706/GeIL-ZENITH-A3-240GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Plextor",
    "model": "PX-128M3P 128GB",
    "rank": 516,
    "benchmark": 77.4,
    "samples": 208,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3527/PLEXTOR-PX-128M3P"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2KW240H6",
    "brand": "Intel",
    "model": "540s Series 240GB",
    "rank": 517,
    "benchmark": 77.3,
    "samples": 6549,
    "url": "https://ssd.userbenchmark.com/SpeedTest/125849/INTEL-SSDSC2KW240H6"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-256M6M 256GB",
    "rank": 518,
    "benchmark": 77.2,
    "samples": 488,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5242/LITEONIT-LMT-256M6M"
  },
  {
    "type": "SSD",
    "part_number": "SD7SB6S-128G-1122",
    "brand": "SanDisk",
    "model": "X300 128GB",
    "rank": 519,
    "benchmark": 77.2,
    "samples": 1918,
    "url": "https://ssd.userbenchmark.com/SpeedTest/20791/SanDisk-SD7SB6S128G1122"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Apple",
    "model": "SD0256F 251GB",
    "rank": 520,
    "benchmark": 77.2,
    "samples": 258,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6365/APPLE-SSD-SD0256F"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LCT-256M3S 2.5 7mm 256GB",
    "rank": 521,
    "benchmark": 77,
    "samples": 1569,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2666/LITEONIT-LCT-256M3S-25-7mm-256GB"
  },
  {
    "type": "SSD",
    "part_number": "SD8SB8U-256G-1122",
    "brand": "SanDisk",
    "model": "X400 256GB",
    "rank": 522,
    "benchmark": 77,
    "samples": 1580,
    "url": "https://ssd.userbenchmark.com/SpeedTest/81834/SanDisk-SD8SB8U256G1122"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LCS-128L9S-11 2.5 7mm 128GB",
    "rank": 523,
    "benchmark": 77,
    "samples": 435,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8908/LITEON-IT-LCS-128L9S-11-25-7mm-128GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC240GD4DH08B-T 240GB",
    "rank": 524,
    "benchmark": 76.9,
    "samples": 107,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7546/SSD2SC240GD4DH08B-T"
  },
  {
    "type": "SSD",
    "part_number": "CT480M500SSD3",
    "brand": "Crucial",
    "model": "M500 mSATA 480GB",
    "rank": 525,
    "benchmark": 76.9,
    "samples": 348,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5698/Crucial-CT480M500SSD3"
  },
  {
    "type": "SSD",
    "part_number": "CT240BX200SSD1",
    "brand": "Crucial",
    "model": "BX200 240GB",
    "rank": 526,
    "benchmark": 76.9,
    "samples": 24782,
    "url": "https://ssd.userbenchmark.com/Crucial-BX200-240GB/Rating/3626"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "SM841 mSATA 128GB",
    "rank": 527,
    "benchmark": 76.8,
    "samples": 782,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6657/SAMSUNG-SSD-SM841-mSATA-128GB"
  },
  {
    "type": "SSD",
    "part_number": "ASU800SS-128GT-C",
    "brand": "Adata",
    "model": "Ultimate SU800 128GB",
    "rank": 528,
    "benchmark": 76.8,
    "samples": 24778,
    "url": "https://ssd.userbenchmark.com/Adata-Ultimate-SU800-128GB/Rating/3911"
  },
  {
    "type": "SSD",
    "part_number": "SKC300S37A/240G",
    "brand": "Kingston",
    "model": "SSDNow KC300 240GB",
    "rank": 529,
    "benchmark": 76.7,
    "samples": 1674,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8366/KINGSTON-SKC300S37A240G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "SM841 2.5\" 7mm 128GB",
    "rank": 530,
    "benchmark": 76.6,
    "samples": 3666,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5663/SAMSUNG-SSD-SM841-25--7mm-128GB"
  },
  {
    "type": "SSD",
    "part_number": "TS256GMSA370",
    "brand": "Transcend",
    "model": "MSA370 mSATA 256GB",
    "rank": 531,
    "benchmark": 76.5,
    "samples": 182,
    "url": "https://ssd.userbenchmark.com/SpeedTest/16272/TS256GMSA370"
  },
  {
    "type": "SSD",
    "part_number": "VTX3-25SAT3-240G",
    "brand": "OCZ",
    "model": "Vertex 3 240GB",
    "rank": 532,
    "benchmark": 76.3,
    "samples": 3135,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2653/OCZ-VERTEX3"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDHP-128G-G25",
    "brand": "SanDisk",
    "model": "Ultra Plus 128GB",
    "rank": 533,
    "benchmark": 76.3,
    "samples": 12884,
    "url": "https://ssd.userbenchmark.com/SanDisk-Ultra-Plus-128GB/Rating/1887"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BB240G4",
    "brand": "Intel",
    "model": "S3500 Series 240GB",
    "rank": 534,
    "benchmark": 76,
    "samples": 542,
    "url": "https://ssd.userbenchmark.com/SpeedTest/14275/INTEL-SSDSC2BB240G4"
  },
  {
    "type": "SSD",
    "part_number": "R3SL240G",
    "brand": "AMD",
    "model": "Radeon R3 240GB",
    "rank": 535,
    "benchmark": 76,
    "samples": 3764,
    "url": "https://ssd.userbenchmark.com/SpeedTest/134613/R3SL240G"
  },
  {
    "type": "SSD",
    "part_number": "THNSNJ128G8NU",
    "brand": "Toshiba",
    "model": "HG6 SATA M.2 128GB",
    "rank": 536,
    "benchmark": 76,
    "samples": 5159,
    "url": "https://ssd.userbenchmark.com/SpeedTest/14053/TOSHIBA-THNSNJ128G8NU"
  },
  {
    "type": "SSD",
    "part_number": "ASX900S3-256GM-C",
    "brand": "Adata",
    "model": "XPG SX900 256GB",
    "rank": 537,
    "benchmark": 75.8,
    "samples": 5253,
    "url": "https://ssd.userbenchmark.com/Adata-XPG-SX900-256GB/Rating/1819"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Patriot",
    "model": "Blast 240GB",
    "rank": 538,
    "benchmark": 75.8,
    "samples": 3694,
    "url": "https://ssd.userbenchmark.com/SpeedTest/33423/Patriot-Blast"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZNTE512HMJH-000SO 512GB",
    "rank": 539,
    "benchmark": 75.7,
    "samples": 309,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7215/SAMSUNG-MZNTE512HMJH-000SO"
  },
  {
    "type": "SSD",
    "part_number": "SA400S37/480G",
    "brand": "Kingston",
    "model": "A400 480GB",
    "rank": 540,
    "benchmark": 75.7,
    "samples": 143460,
    "url": "https://ssd.userbenchmark.com/SpeedTest/296710/KINGSTON-SA400S37480G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "SM841N mSATA 256GB",
    "rank": 541,
    "benchmark": 75.7,
    "samples": 468,
    "url": "https://ssd.userbenchmark.com/SpeedTest/17959/SAMSUNG-SSD-SM841N-mSATA"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BW240A4",
    "brand": "Intel",
    "model": "530 Series 240GB",
    "rank": 542,
    "benchmark": 75.7,
    "samples": 15454,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3104/INTEL-SSDSC2BW240A4"
  },
  {
    "type": "SSD",
    "part_number": "CT120BX100SSD1",
    "brand": "Crucial",
    "model": "BX100 120GB",
    "rank": 543,
    "benchmark": 75.7,
    "samples": 4408,
    "url": "https://ssd.userbenchmark.com/Crucial-BX100-120GB/Rating/3489"
  },
  {
    "type": "SSD",
    "part_number": "ASP550SS3-120GM-C",
    "brand": "Adata",
    "model": "Premier SP550 120GB",
    "rank": 544,
    "benchmark": 75.6,
    "samples": 19236,
    "url": "https://ssd.userbenchmark.com/Adata-Premier-SP550-120GB/Rating/3622"
  },
  {
    "type": "SSD",
    "part_number": "RVD3X2-FHPX4-240G",
    "brand": "OCZ",
    "model": "RevoDrive 3 X2 PCIe 240GB",
    "rank": 545,
    "benchmark": 75.6,
    "samples": 941,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6546/OCZ-REVODRIVE3-X2"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS1311-120-RB",
    "brand": "PNY",
    "model": "CS1311 120GB",
    "rank": 546,
    "benchmark": 75.5,
    "samples": 9773,
    "url": "https://ssd.userbenchmark.com/PNY-CS1311-120GB/Rating/3614"
  },
  {
    "type": "SSD",
    "part_number": "VTX3MI-25SAT3-240G",
    "brand": "OCZ",
    "model": "Vertex 3 MAX IOPS 240GB",
    "rank": 547,
    "benchmark": 75.5,
    "samples": 1259,
    "url": "https://ssd.userbenchmark.com/OCZ-Vertex-3-MAX-IOPS-240GB/Rating/376"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSNS120GBSP 120GB",
    "rank": 548,
    "benchmark": 75.4,
    "samples": 84,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7190/TOSHIBA-THNSNS120GBSP"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2KW128G8",
    "brand": "Intel",
    "model": "545s Series 128GB",
    "rank": 549,
    "benchmark": 75.4,
    "samples": 2268,
    "url": "https://ssd.userbenchmark.com/SpeedTest/372338/INTEL-SSDSC2KW128G8"
  },
  {
    "type": "SSD",
    "part_number": "CT128MX100SSD1",
    "brand": "Crucial",
    "model": "MX100 128GB",
    "rank": 550,
    "benchmark": 75.3,
    "samples": 8349,
    "url": "https://ssd.userbenchmark.com/Crucial-MX100-128GB/Rating/2618"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-128L9M-11 MSATA 128GB",
    "rank": 551,
    "benchmark": 75.3,
    "samples": 474,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12669/LITEONIT-LMT-128L9M-11-MSATA-128GB"
  },
  {
    "type": "SSD",
    "part_number": "VTX450-25SAT3-128G",
    "brand": "OCZ",
    "model": "Vertex 450 128GB",
    "rank": 552,
    "benchmark": 75.3,
    "samples": 966,
    "url": "https://ssd.userbenchmark.com/OCZ-Vertex-450-128GB/Rating/1896"
  },
  {
    "type": "SSD",
    "part_number": "CT240M500SSD1",
    "brand": "Crucial",
    "model": "M500 240GB",
    "rank": 553,
    "benchmark": 75.2,
    "samples": 26300,
    "url": "https://ssd.userbenchmark.com/Crucial-M500-240GB/Rating/1551"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDX-240G-G25",
    "brand": "SanDisk",
    "model": "Extreme 240GB",
    "rank": 554,
    "benchmark": 75.2,
    "samples": 6191,
    "url": "https://ssd.userbenchmark.com/SanDisk-Extreme-240GB/Rating/1328"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LCM-256M3S 256GB",
    "rank": 555,
    "benchmark": 75.2,
    "samples": 700,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5988/LITEONIT-LCM-256M3S"
  },
  {
    "type": "SSD",
    "part_number": "SD7SB3Q-128G-1002",
    "brand": "SanDisk",
    "model": "X300s Non-Secure 128GB",
    "rank": 556,
    "benchmark": 75.1,
    "samples": 1300,
    "url": "https://ssd.userbenchmark.com/SpeedTest/21087/SanDisk-SD7SB3Q128G1002"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Adata",
    "model": "SP600 128GB",
    "rank": 557,
    "benchmark": 75.1,
    "samples": 6589,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7306/ADATA-SP600"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZ7TE512HMHP-000 512GB",
    "rank": 558,
    "benchmark": 75,
    "samples": 2514,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10608/SAMSUNG-MZ7TE512HMHP-000"
  },
  {
    "type": "SSD",
    "part_number": "PPSE240GS25SSDR",
    "brand": "Patriot",
    "model": "Pyro SE 240GB",
    "rank": 559,
    "benchmark": 75,
    "samples": 44,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15337/Patriot-Pyro-SE"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LAT-256M3S 256GB",
    "rank": 560,
    "benchmark": 74.9,
    "samples": 511,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9087/LITEONIT-LAT-256M3S"
  },
  {
    "type": "SSD",
    "part_number": "HDTS724XZSTA",
    "brand": "Toshiba",
    "model": "Q300 240GB",
    "rank": 561,
    "benchmark": 74.9,
    "samples": 3720,
    "url": "https://ssd.userbenchmark.com/SpeedTest/35974/TOSHIBA-Q300"
  },
  {
    "type": "SSD",
    "part_number": "HDTS724EZSTA",
    "brand": "Toshiba",
    "model": "Q300 240GB",
    "rank": 561,
    "benchmark": 74.9,
    "samples": 3720,
    "url": "https://ssd.userbenchmark.com/SpeedTest/35974/TOSHIBA-Q300"
  },
  {
    "type": "SSD",
    "part_number": "SD7SN3Q-256G-1002",
    "brand": "SanDisk",
    "model": "X300s SATA M.2 256GB",
    "rank": 562,
    "benchmark": 74.9,
    "samples": 660,
    "url": "https://ssd.userbenchmark.com/SpeedTest/25276/SanDisk-SD7SN3Q256G1002"
  },
  {
    "type": "SSD",
    "part_number": "VTX3-25SAT3-256G",
    "brand": "OCZ",
    "model": "Vertex 3 256GB",
    "rank": 563,
    "benchmark": 74.8,
    "samples": 58,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5486/OCZ-VERTEX3"
  },
  {
    "type": "SSD",
    "part_number": "ST120HM000",
    "brand": "Seagate",
    "model": "600 120GB",
    "rank": 564,
    "benchmark": 74.8,
    "samples": 582,
    "url": "https://ssd.userbenchmark.com/Seagate-600-120GB/Rating/1891"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-P128GBP-BK",
    "brand": "Corsair",
    "model": "Performance Pro 128GB",
    "rank": 565,
    "benchmark": 74.8,
    "samples": 242,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5273/Corsair-Performance-Pro"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDTR240GB",
    "brand": "Mushkin",
    "model": "Triactor 240GB",
    "rank": 566,
    "benchmark": 74.6,
    "samples": 422,
    "url": "https://ssd.userbenchmark.com/SpeedTest/76610/MKNSSDTR240GB"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2CT240A3",
    "brand": "Intel",
    "model": "330 Series 240GB",
    "rank": 567,
    "benchmark": 74.5,
    "samples": 1552,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3643/INTEL-SSDSC2CT240A3"
  },
  {
    "type": "SSD",
    "part_number": "PX-128M6V",
    "brand": "Plextor",
    "model": "M6V 128GB",
    "rank": 568,
    "benchmark": 74.5,
    "samples": 335,
    "url": "https://ssd.userbenchmark.com/SpeedTest/31385/PLEXTOR-PX-128M6V"
  },
  {
    "type": "SSD",
    "part_number": "PX-128M5M",
    "brand": "Plextor",
    "model": "M5M mSATA 128GB",
    "rank": 569,
    "benchmark": 74.5,
    "samples": 540,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5214/PLEXTOR-PX-128M5M"
  },
  {
    "type": "SSD",
    "part_number": "THNSNJ128GMCU",
    "brand": "Toshiba",
    "model": "HG6 mSATA 128GB",
    "rank": 570,
    "benchmark": 74.4,
    "samples": 2433,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10610/TOSHIBA-THNSNJ128GMCU"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "SK",
    "model": "hynix SH920 2.5 256GB",
    "rank": 571,
    "benchmark": 74.4,
    "samples": 1877,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6594/SK--hynix-SH920-25"
  },
  {
    "type": "SSD",
    "part_number": "TRN150-25SAT3-120G",
    "brand": "OCZ",
    "model": "Trion 150 120GB",
    "rank": 572,
    "benchmark": 74.3,
    "samples": 3210,
    "url": "https://ssd.userbenchmark.com/OCZ-Trion-150-120GB/Rating/3618"
  },
  {
    "type": "SSD",
    "part_number": "SD5SB2-128G-1006E",
    "brand": "SanDisk",
    "model": "X100 128GB",
    "rank": 573,
    "benchmark": 74.2,
    "samples": 1520,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3767/SanDisk-SD5SB2-128G-1006E"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDCR240GB-DX",
    "brand": "Mushkin",
    "model": "Chronos Deluxe 240GB",
    "rank": 574,
    "benchmark": 74.1,
    "samples": 1476,
    "url": "https://ssd.userbenchmark.com/Mushkin-Chronos-Deluxe-240GB/Rating/1820"
  },
  {
    "type": "SSD",
    "part_number": "TS256GSSD720",
    "brand": "Transcend",
    "model": "SD720 256GB",
    "rank": 575,
    "benchmark": 74,
    "samples": 271,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11778/TS256GSS-TS256GSSD720"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LCT-256M3S-41 7mm 256GB FDE",
    "rank": 576,
    "benchmark": 73.7,
    "samples": 258,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5825/LITEONIT-LCT-256M3S-41-7mm-256GB-FDE"
  },
  {
    "type": "SSD",
    "part_number": "TS256GSSD320",
    "brand": "Transcend",
    "model": "SSD320 256GB",
    "rank": 577,
    "benchmark": 73.7,
    "samples": 100,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3357/TS256GSSD320"
  },
  {
    "type": "SSD",
    "part_number": "SD7UB3Q-128G-1122",
    "brand": "SanDisk",
    "model": "X300s SATA 128GB",
    "rank": 578,
    "benchmark": 73.7,
    "samples": 155,
    "url": "https://ssd.userbenchmark.com/SpeedTest/17035/SanDisk-SD7UB3Q128G1122"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "L8T-128L6G-HP 128GB",
    "rank": 579,
    "benchmark": 73.7,
    "samples": 375,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4986/LITEONIT-L8T-128L6G-HP"
  },
  {
    "type": "SSD",
    "part_number": "THNSNJ256GMCU",
    "brand": "Toshiba",
    "model": "HG6 mSATA 256GB",
    "rank": 580,
    "benchmark": 73.6,
    "samples": 1415,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10622/TOSHIBA-THNSNJ256GMCU"
  },
  {
    "type": "SSD",
    "part_number": "ASP900S3-256GM-C",
    "brand": "Adata",
    "model": "SP900 256GB",
    "rank": 581,
    "benchmark": 73.6,
    "samples": 7314,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3534/ADATA-SP900"
  },
  {
    "type": "SSD",
    "part_number": "THNSNH128GMCT",
    "brand": "Toshiba",
    "model": "HG5d Q Series mSATA 128GB",
    "rank": 582,
    "benchmark": 73.5,
    "samples": 1161,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3134/TOSHIBA-THNSNH128GMCT"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2CW120A3",
    "brand": "Intel",
    "model": "520 Series 120GB",
    "rank": 583,
    "benchmark": 73.3,
    "samples": 14845,
    "url": "https://ssd.userbenchmark.com/Intel-520-Series-120GB/Rating/1935"
  },
  {
    "type": "SSD",
    "part_number": "AS511S3-240GM-C",
    "brand": "Adata",
    "model": "S511 240GB",
    "rank": 584,
    "benchmark": 73.3,
    "samples": 54,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2462/ADATA-SS-D-S511-240GB"
  },
  {
    "type": "SSD",
    "part_number": "SUV400S37/480G",
    "brand": "Kingston",
    "model": "SSDNow UV400 480GB",
    "rank": 585,
    "benchmark": 73.3,
    "samples": 19024,
    "url": "https://ssd.userbenchmark.com/SpeedTest/138433/KINGSTON-SUV400S37480G"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS900-240-RB",
    "brand": "PNY",
    "model": "CS900 240GB",
    "rank": 586,
    "benchmark": 73.3,
    "samples": 41039,
    "url": "https://ssd.userbenchmark.com/SpeedTest/180142/PNY-CS900-240GB-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Geil",
    "model": "Zenith S3 240GB",
    "rank": 587,
    "benchmark": 73.3,
    "samples": 69,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15208/GeIL-ZENITH-S3-240GB"
  },
  {
    "type": "SSD",
    "part_number": "2DP99AA#ABC",
    "brand": "HP",
    "model": "S700 500GB",
    "rank": 588,
    "benchmark": 73.2,
    "samples": 9010,
    "url": "https://ssd.userbenchmark.com/SpeedTest/337629/HP-SSD-S700-500GB"
  },
  {
    "type": "SSD",
    "part_number": "SD6SB1M-128G-1022I",
    "brand": "SanDisk",
    "model": "X110 128GB",
    "rank": 589,
    "benchmark": 73.1,
    "samples": 8068,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8226/SanDisk-SD6SB1M128G1022I"
  },
  {
    "type": "SSD",
    "part_number": "PX-128M3",
    "brand": "Plextor",
    "model": "M3 128GB",
    "rank": 590,
    "benchmark": 73.1,
    "samples": 671,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1301/PLEXTOR-PX-128M3"
  },
  {
    "type": "SSD",
    "part_number": "SH103S3/120G",
    "brand": "Kingston",
    "model": "HyperX 3K 120GB",
    "rank": 591,
    "benchmark": 73.1,
    "samples": 42591,
    "url": "https://ssd.userbenchmark.com/Kingston-HyperX-3K-120GB/Rating/1894"
  },
  {
    "type": "SSD",
    "part_number": "SSD2SC240GE2DA16B-T",
    "brand": "PNY",
    "model": "XLR8 Pro 240GB",
    "rank": 592,
    "benchmark": 73,
    "samples": 54,
    "url": "https://ssd.userbenchmark.com/SpeedTest/19864/SSD2SC240GE2DA16B-T"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BW120H601",
    "brand": "Intel",
    "model": "535 Series 120GB",
    "rank": 593,
    "benchmark": 73,
    "samples": 5064,
    "url": "https://ssd.userbenchmark.com/SpeedTest/28259/INTEL-SSDSC2BW120H6"
  },
  {
    "type": "SSD",
    "part_number": "SD6SN1M-128G",
    "brand": "SanDisk",
    "model": "X110 SATA M.2 128GB",
    "rank": 594,
    "benchmark": 72.9,
    "samples": 614,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9934/SanDisk-SD6SN1M128G1002"
  },
  {
    "type": "SSD",
    "part_number": "R3SL480G",
    "brand": "AMD",
    "model": "Radeon R3 480GB",
    "rank": 595,
    "benchmark": 72.9,
    "samples": 460,
    "url": "https://ssd.userbenchmark.com/SpeedTest/134345/R3SL480G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "SK",
    "model": "hynix SH920 2.5 128GB",
    "rank": 596,
    "benchmark": 72.9,
    "samples": 607,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12032/SK--hynix-SH920-25"
  },
  {
    "type": "SSD",
    "part_number": "SD6SF1M-256G-1022",
    "brand": "SanDisk",
    "model": "X110 mSATA 256GB",
    "rank": 597,
    "benchmark": 72.8,
    "samples": 276,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10872/SanDisk-SD6SF1M256G1022"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F180GBGS-BK",
    "brand": "Corsair",
    "model": "Force GS 180GB",
    "rank": 598,
    "benchmark": 72.8,
    "samples": 524,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1010/Corsair-Force-GS"
  },
  {
    "type": "SSD",
    "part_number": "PX-128M5S",
    "brand": "Plextor",
    "model": "M5S 128GB",
    "rank": 599,
    "benchmark": 72.6,
    "samples": 5073,
    "url": "https://ssd.userbenchmark.com/Plextor-M5S-128GB/Rating/2261"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "SM841N mSATA 512GB",
    "rank": 600,
    "benchmark": 72.6,
    "samples": 329,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11367/SAMSUNG-SSD-SM841N-mSATA"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2CT180A4K5",
    "brand": "Intel",
    "model": "335 Series 180GB",
    "rank": 601,
    "benchmark": 72.6,
    "samples": 2276,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1641/INTEL-SSDSC2CT180A4"
  },
  {
    "type": "SSD",
    "part_number": "SD8SB8U-128G-1122",
    "brand": "SanDisk",
    "model": "X400 128GB",
    "rank": 602,
    "benchmark": 72.4,
    "samples": 813,
    "url": "https://ssd.userbenchmark.com/SpeedTest/68942/SanDisk-SD8SB8U128G1122"
  },
  {
    "type": "SSD",
    "part_number": "SD6SP1M-128G-1012",
    "brand": "SanDisk",
    "model": "X110 SATA M.2 128GB",
    "rank": 603,
    "benchmark": 72.4,
    "samples": 1275,
    "url": "https://ssd.userbenchmark.com/SpeedTest/20731/SanDisk-SD6SP1M128G1012"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7PC512B/WW",
    "brand": "Samsung",
    "model": "830 512GB",
    "rank": 604,
    "benchmark": 72.4,
    "samples": 1497,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1612/SAMSUNG-SSD-830-Series"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F128GBGS-BK",
    "brand": "Corsair",
    "model": "Force GS 128GB",
    "rank": 605,
    "benchmark": 72.4,
    "samples": 5385,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3191/Corsair-Force-GS"
  },
  {
    "type": "SSD",
    "part_number": "SKC300S37A/120G",
    "brand": "Kingston",
    "model": "SSDNow KC300 120GB",
    "rank": 606,
    "benchmark": 72.4,
    "samples": 1834,
    "url": "https://ssd.userbenchmark.com/Kingston-SSDNow-KC300-120GB/Rating/2264"
  },
  {
    "type": "SSD",
    "part_number": "SVP200S37A120G",
    "brand": "Kingston",
    "model": "SSDNow V+200 Series 120GB",
    "rank": 607,
    "benchmark": 72.3,
    "samples": 713,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1218/KINGSTON-SVP200S3120G"
  },
  {
    "type": "SSD",
    "part_number": "R3SL120G",
    "brand": "AMD",
    "model": "Radeon R3 120GB",
    "rank": 608,
    "benchmark": 72.3,
    "samples": 2724,
    "url": "https://ssd.userbenchmark.com/SpeedTest/124132/R3SL120G"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F180GBGT-BK",
    "brand": "Corsair",
    "model": "Force GT 180GB",
    "rank": 609,
    "benchmark": 72.3,
    "samples": 810,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1126/Corsair-Force-GT"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-256M6M mSATA 256GB",
    "rank": 610,
    "benchmark": 72.3,
    "samples": 3022,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2486/LITEONIT-LMT-256M6M-mSATA-256GB"
  },
  {
    "type": "SSD",
    "part_number": "VTX3MI-25SAT3-120G",
    "brand": "OCZ",
    "model": "Vertex 3 MAX IOPS 120GB",
    "rank": 611,
    "benchmark": 72.2,
    "samples": 2915,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1201/OCZ-VERTEX3-MI"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BF240A4L",
    "brand": "Intel",
    "model": "SSD Pro 1500 Series 240GB",
    "rank": 612,
    "benchmark": 72.2,
    "samples": 3675,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6255/INTEL-SS-DSC2BF240A4L"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BF240A401",
    "brand": "Intel",
    "model": "SSD Pro 1500 Series 240GB",
    "rank": 612,
    "benchmark": 72.2,
    "samples": 3675,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6255/INTEL-SS-DSC2BF240A4L"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Plextor",
    "model": "PX-128M2P 128GB",
    "rank": 613,
    "benchmark": 72.2,
    "samples": 69,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6634/PLEXTOR--PX-128M2P"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "SM841N mSATA 128GB",
    "rank": 614,
    "benchmark": 72.1,
    "samples": 74,
    "url": "https://ssd.userbenchmark.com/SpeedTest/13601/SAMSUNG-SSD-SM841N-mSATA"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-128M6M mSATA 128GB",
    "rank": 615,
    "benchmark": 72.1,
    "samples": 1385,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5385/LITEONIT-LMT-128M6M-mSATA-128GB"
  },
  {
    "type": "SSD",
    "part_number": "SSDMCEAC240B301",
    "brand": "Intel",
    "model": "525 Series mSATA 240GB",
    "rank": 616,
    "benchmark": 72.1,
    "samples": 112,
    "url": "https://ssd.userbenchmark.com/Intel-525-Series-mSATA-240GB/Rating/1509"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F128GBLX",
    "brand": "Corsair",
    "model": "Force LX 128GB",
    "rank": 617,
    "benchmark": 72,
    "samples": 1675,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12531/CORSAIR-FORCE-LX-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Team",
    "model": "XS3 SSD 240GB",
    "rank": 618,
    "benchmark": 71.9,
    "samples": 20,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8108/TEAM-XS3-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "SM841 mSATA 512GB",
    "rank": 619,
    "benchmark": 71.8,
    "samples": 489,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4000/SAMSUNG-SSD-SM841-mSATA-512GB"
  },
  {
    "type": "SSD",
    "part_number": "GP-GSTFS31240GNTD",
    "brand": "Gigabyte",
    "model": "SSD 240GB",
    "rank": 620,
    "benchmark": 71.7,
    "samples": 14346,
    "url": "https://ssd.userbenchmark.com/SpeedTest/554572/GIGABYTE-GP-GSTFS31240GNTD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSNH256G8NT 256GB",
    "rank": 621,
    "benchmark": 71.7,
    "samples": 310,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12184/TOSHIBA-THNSNH256G8NT"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-19nmBGA-256G-DS 256GB",
    "rank": 622,
    "benchmark": 71.6,
    "samples": 62,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4373/LITEONIT-LMT-19nmBGA-256G-DS"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMTE512HMHP-00000 512GB",
    "rank": 623,
    "benchmark": 71.6,
    "samples": 317,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5246/SAMSUNG-MZMTE512HMHP-00000"
  },
  {
    "type": "SSD",
    "part_number": "SD8SBAT-256G-1122",
    "brand": "SanDisk",
    "model": "Z400s 256GB",
    "rank": 624,
    "benchmark": 71.5,
    "samples": 9395,
    "url": "https://ssd.userbenchmark.com/SpeedTest/34116/SanDisk-SD8SBAT256G1122"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BW180H601",
    "brand": "Intel",
    "model": "535 Series 180GB",
    "rank": 625,
    "benchmark": 71.4,
    "samples": 380,
    "url": "https://ssd.userbenchmark.com/SpeedTest/27834/INTEL-SSDSC2BW180H6"
  },
  {
    "type": "SSD",
    "part_number": "HDTS712XZSTA",
    "brand": "Toshiba",
    "model": "Q300 120GB",
    "rank": 626,
    "benchmark": 71.2,
    "samples": 1618,
    "url": "https://ssd.userbenchmark.com/SpeedTest/35283/TOSHIBA-Q300"
  },
  {
    "type": "SSD",
    "part_number": "HDTS712EZSTA",
    "brand": "Toshiba",
    "model": "Q300 120GB",
    "rank": 626,
    "benchmark": 71.2,
    "samples": 1618,
    "url": "https://ssd.userbenchmark.com/SpeedTest/35283/TOSHIBA-Q300"
  },
  {
    "type": "SSD",
    "part_number": "AGT4-25SAT3-256G",
    "brand": "OCZ",
    "model": "Agility 4 256GB",
    "rank": 627,
    "benchmark": 71.2,
    "samples": 1259,
    "url": "https://ssd.userbenchmark.com/OCZ-Agility-4-256GB/Rating/1606"
  },
  {
    "type": "SSD",
    "part_number": "ASP610SS3-128GM-C",
    "brand": "Adata",
    "model": "Premier SP610 128GB",
    "rank": 628,
    "benchmark": 71.1,
    "samples": 693,
    "url": "https://ssd.userbenchmark.com/SpeedTest/13709/ADATA-SP610"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-256M6M-HP 256GB",
    "rank": 629,
    "benchmark": 71.1,
    "samples": 296,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7110/LITEONIT-LMT-256M6M-HP"
  },
  {
    "type": "SSD",
    "part_number": "SUV400S37/240G",
    "brand": "Kingston",
    "model": "SSDNow UV400 240GB",
    "rank": 630,
    "benchmark": 71,
    "samples": 100500,
    "url": "https://ssd.userbenchmark.com/SpeedTest/137815/KINGSTON-SUV400S37240G"
  },
  {
    "type": "SSD",
    "part_number": "THNSNH256GMCT",
    "brand": "Toshiba",
    "model": "HG5d Q Series mSATA 256GB",
    "rank": 631,
    "benchmark": 70.9,
    "samples": 1082,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5507/TOSHIBA-THNSNH256GMCT"
  },
  {
    "type": "SSD",
    "part_number": "CT960BX500SSD1",
    "brand": "Crucial",
    "model": "BX500 960GB",
    "rank": 632,
    "benchmark": 70.9,
    "samples": 8686,
    "url": "https://ssd.userbenchmark.com/SpeedTest/666214/CT960BX500SSD1"
  },
  {
    "type": "SSD",
    "part_number": "TS240GSSD220S",
    "brand": "Transcend",
    "model": "SSD220 240GB",
    "rank": 633,
    "benchmark": 70.9,
    "samples": 10711,
    "url": "https://ssd.userbenchmark.com/SpeedTest/129705/TS240GSSD220S"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDEC240GB",
    "brand": "Mushkin",
    "model": "ECO2 240GB",
    "rank": 634,
    "benchmark": 70.6,
    "samples": 298,
    "url": "https://ssd.userbenchmark.com/SpeedTest/24676/MKNSSDEC240GB"
  },
  {
    "type": "SSD",
    "part_number": "SD6SP1M-256G-1012",
    "brand": "SanDisk",
    "model": "X110 SATA M.2 256GB",
    "rank": 635,
    "benchmark": 70.6,
    "samples": 341,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8660/SanDisk-SD6SP1M256G1012"
  },
  {
    "type": "SSD",
    "part_number": "SHFS37A/240G",
    "brand": "HyperX",
    "model": "Fury 240GB",
    "rank": 636,
    "benchmark": 70.5,
    "samples": 25520,
    "url": "https://ssd.userbenchmark.com/SpeedTest/13145/KINGSTON-SHFS37A240G"
  },
  {
    "type": "SSD",
    "part_number": "TRN100-25SAT3-960G",
    "brand": "OCZ",
    "model": "Trion 100 960GB",
    "rank": 637,
    "benchmark": 70.5,
    "samples": 912,
    "url": "https://ssd.userbenchmark.com/SpeedTest/34219/OCZ-TRION100"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7PC256B/WW",
    "brand": "Samsung",
    "model": "830 256GB",
    "rank": 638,
    "benchmark": 70.4,
    "samples": 20514,
    "url": "https://ssd.userbenchmark.com/Samsung-830-256GB/Rating/1387"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LCT-512M3S 512GB",
    "rank": 639,
    "benchmark": 70.3,
    "samples": 136,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5388/LITEONIT-LCT-512M3S"
  },
  {
    "type": "SSD",
    "part_number": "SD6SF1M-128G-1022",
    "brand": "SanDisk",
    "model": "X110 mSATA 128GB",
    "rank": 640,
    "benchmark": 70.3,
    "samples": 1024,
    "url": "https://ssd.userbenchmark.com/SanDisk-X110-mSATA-128GB/Rating/2213"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BW180A4",
    "brand": "Intel",
    "model": "530 Series 180GB",
    "rank": 641,
    "benchmark": 70.3,
    "samples": 2892,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4282/INTEL-SSDSC2BW180A4"
  },
  {
    "type": "SSD",
    "part_number": "SD7SN3Q-128G-1002",
    "brand": "SanDisk",
    "model": "X300s SATA M.2 128GB",
    "rank": 642,
    "benchmark": 70.2,
    "samples": 571,
    "url": "https://ssd.userbenchmark.com/SpeedTest/25335/SanDisk-SD7SN3Q-128G-1006"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2CW180A3",
    "brand": "Intel",
    "model": "520 Series 180GB",
    "rank": 643,
    "benchmark": 70.2,
    "samples": 11591,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4086/INTEL-SSDSC2CW180A3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "SanDisk",
    "model": "mSATA SD5SE2256G1002E 256GB",
    "rank": 644,
    "benchmark": 70.1,
    "samples": 788,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3945/SanDisk-SD5SE2256G1002E"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZFLV128 NVMe PCIe M.2 128GB",
    "rank": 645,
    "benchmark": 70.1,
    "samples": 1869,
    "url": "https://ssd.userbenchmark.com/SpeedTest/36806/NVMe-SAMSUNG-MZFLV128"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-N128GB3-BK",
    "brand": "Corsair",
    "model": "Neutron 128GB",
    "rank": 646,
    "benchmark": 69.9,
    "samples": 575,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5914/Corsair-Neutron-SSD"
  },
  {
    "type": "SSD",
    "part_number": "TS128GMTS800",
    "brand": "Transcend",
    "model": "MTS800 M.2 128GB",
    "rank": 647,
    "benchmark": 69.9,
    "samples": 4338,
    "url": "https://ssd.userbenchmark.com/SpeedTest/22385/TS128GMTS800"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-128M6M 128GB",
    "rank": 648,
    "benchmark": 69.8,
    "samples": 604,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4933/LITEONIT-LMT-128M6M"
  },
  {
    "type": "SSD",
    "part_number": "TS128GSSD370",
    "brand": "Transcend",
    "model": "SSD370 128GB",
    "rank": 649,
    "benchmark": 69.8,
    "samples": 3807,
    "url": "https://ssd.userbenchmark.com/Transcend-SSD370-128GB/Rating/2699"
  },
  {
    "type": "SSD",
    "part_number": "CT240M500SSD3",
    "brand": "Crucial",
    "model": "M500 mSATA 240GB",
    "rank": 650,
    "benchmark": 69.6,
    "samples": 1106,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4823/Crucial--CT240M500SSD3"
  },
  {
    "type": "SSD",
    "part_number": "SSD7SC120GOPT-RB",
    "brand": "PNY",
    "model": "Optima 120GB",
    "rank": 651,
    "benchmark": 69.6,
    "samples": 149,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15456/SSD2SC120G1SA754D117-443"
  },
  {
    "type": "SSD",
    "part_number": "SSD2SC120G1SA754D117",
    "brand": "PNY",
    "model": "Optima 120GB",
    "rank": 651,
    "benchmark": 69.6,
    "samples": 149,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15456/SSD2SC120G1SA754D117-443"
  },
  {
    "type": "SSD",
    "part_number": "SVP200S3/240G",
    "brand": "Kingston",
    "model": "SSDNow V+200 240GB",
    "rank": 652,
    "benchmark": 69.6,
    "samples": 568,
    "url": "https://ssd.userbenchmark.com/Kingston-SSDNow-V-200-240GB/Rating/1445"
  },
  {
    "type": "SSD",
    "part_number": "SKC300S37A/180G",
    "brand": "Kingston",
    "model": "SSDNow KC300 180GB",
    "rank": 653,
    "benchmark": 69.6,
    "samples": 397,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5528/KINGSTON-SKC300S37A180G"
  },
  {
    "type": "SSD",
    "part_number": "VTX4-25SAT3-64G",
    "brand": "OCZ",
    "model": "Vertex 4 64GB",
    "rank": 654,
    "benchmark": 69.6,
    "samples": 478,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1650/OCZ-VERT-OCZ-VERTEX4"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7TD250BW",
    "brand": "Samsung",
    "model": "840 250GB",
    "rank": 655,
    "benchmark": 69.6,
    "samples": 30132,
    "url": "https://ssd.userbenchmark.com/Samsung-840-250GB/Rating/1510"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "AGILITY4 128GB",
    "rank": 656,
    "benchmark": 69.5,
    "samples": 863,
    "url": "https://ssd.userbenchmark.com/SpeedTest/557/OCZ-AGILITY4"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDCR240GB",
    "brand": "Mushkin",
    "model": "Chronos 240GB",
    "rank": 657,
    "benchmark": 69.5,
    "samples": 573,
    "url": "https://ssd.userbenchmark.com/Mushkin-Chronos-240GB/Rating/1622"
  },
  {
    "type": "SSD",
    "part_number": "ASU635SS-480GQ-R",
    "brand": "Adata",
    "model": "SU635 480GB",
    "rank": 658,
    "benchmark": 69.4,
    "samples": 3389,
    "url": "https://ssd.userbenchmark.com/SpeedTest/764320/ADATA-SU635"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2KW120H6",
    "brand": "Intel",
    "model": "540s Series 120GB",
    "rank": 659,
    "benchmark": 69.4,
    "samples": 2762,
    "url": "https://ssd.userbenchmark.com/SpeedTest/127931/INTEL-SSDSC2KW120H6"
  },
  {
    "type": "SSD",
    "part_number": "TRN100-25SAT3-480G",
    "brand": "OCZ",
    "model": "Trion 100 480GB",
    "rank": 660,
    "benchmark": 69.4,
    "samples": 1376,
    "url": "https://ssd.userbenchmark.com/SpeedTest/32318/OCZ-TRION100"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Team",
    "model": "L3 SSD 240GB",
    "rank": 661,
    "benchmark": 69.4,
    "samples": 404,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6481/TEAM-L3-SSD-240GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "INTENSO 256GB",
    "rank": 662,
    "benchmark": 69.4,
    "samples": 2242,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6851/INTENSO"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM810 2.5\" 7mm 256GB",
    "rank": 663,
    "benchmark": 69.3,
    "samples": 9,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1708/SAMSUNG-SSD-PM810-25--7mm-256GB"
  },
  {
    "type": "SSD",
    "part_number": "GP-GSTFS31120GNTD",
    "brand": "Gigabyte",
    "model": "SSD 120GB",
    "rank": 664,
    "benchmark": 69.3,
    "samples": 10195,
    "url": "https://ssd.userbenchmark.com/SpeedTest/547719/GIGABYTE-GP-GSTFS31120GNTD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "SK",
    "model": "hynix SH920 mSATA 256GB",
    "rank": 665,
    "benchmark": 69.1,
    "samples": 696,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5328/SK-hynix-SH920-mSATA-256GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Adata",
    "model": "S510 120GB",
    "rank": 666,
    "benchmark": 69.1,
    "samples": 498,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1908/ADATA-SSD-S510-120GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSNF128GCSS 128GB",
    "rank": 667,
    "benchmark": 69,
    "samples": 1331,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5540/TOSHIBA-THNSNF128GCSS"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC240G3LC726B104-327 240GB",
    "rank": 668,
    "benchmark": 68.8,
    "samples": 92,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5640/SSD2SC240G3LC726B104-327"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2CT180A3",
    "brand": "Intel",
    "model": "330 Series 180GB",
    "rank": 669,
    "benchmark": 68.8,
    "samples": 4332,
    "url": "https://ssd.userbenchmark.com/SpeedTest/261/INTEL-SSDSC2CT180A3"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDHP-064-G25",
    "brand": "SanDisk",
    "model": "Ultra Plus 64GB",
    "rank": 670,
    "benchmark": 68.8,
    "samples": 958,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6401/SanDisk-SDSSDHP064G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Geil",
    "model": "Zenith A3 120GB",
    "rank": 671,
    "benchmark": 68.7,
    "samples": 89,
    "url": "https://ssd.userbenchmark.com/SpeedTest/16792/GeIL-ZENITH-A3-120GB"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F120GBGT-BK",
    "brand": "Corsair",
    "model": "Force GT 120GB",
    "rank": 672,
    "benchmark": 68.7,
    "samples": 10100,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1263/Corsair-Force-GT"
  },
  {
    "type": "SSD",
    "part_number": "ASX900S3-128GM-C",
    "brand": "Adata",
    "model": "XPG SX900 128GB",
    "rank": 673,
    "benchmark": 68.5,
    "samples": 5617,
    "url": "https://ssd.userbenchmark.com/Adata-XPG-SX900-128GB/Rating/3491"
  },
  {
    "type": "SSD",
    "part_number": "ASP920SS3-128GM-C",
    "brand": "Adata",
    "model": "Premier Pro SP920 128GB",
    "rank": 674,
    "benchmark": 68.5,
    "samples": 2561,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10618/ADATA-SP920SS"
  },
  {
    "type": "SSD",
    "part_number": "SSD7CS900-120-RB",
    "brand": "PNY",
    "model": "CS900 120GB",
    "rank": 675,
    "benchmark": 68.4,
    "samples": 32191,
    "url": "https://ssd.userbenchmark.com/SpeedTest/175702/PNY-CS900-120GB-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM851 mSATA 512GB",
    "rank": 676,
    "benchmark": 68.4,
    "samples": 824,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8717/SAMSUNG-SSD-PM851-mSATA-512GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-19nmBGA-128G 128GB",
    "rank": 677,
    "benchmark": 68.4,
    "samples": 353,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4185/LITEONIT-LMT-19nmBGA-128G"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F240GBLS",
    "brand": "Corsair",
    "model": "Force LS 240GB",
    "rank": 678,
    "benchmark": 68.4,
    "samples": 3824,
    "url": "https://ssd.userbenchmark.com/Corsair-Force-LS-240GB/Rating/3340"
  },
  {
    "type": "SSD",
    "part_number": "HG5D",
    "brand": "Toshiba",
    "model": "HG5d SATA M.2 128GB",
    "rank": 679,
    "benchmark": 68.2,
    "samples": 371,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6450/TOSHIBA-THNSNH128G8NT"
  },
  {
    "type": "SSD",
    "part_number": "THNSNH128G8NT",
    "brand": "Toshiba",
    "model": "HG5d SATA M.2 128GB",
    "rank": 679,
    "benchmark": 68.2,
    "samples": 371,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6450/TOSHIBA-THNSNH128G8NT"
  },
  {
    "type": "SSD",
    "part_number": "ASU635SS-240GQ-R",
    "brand": "Adata",
    "model": "SU635 240GB",
    "rank": 680,
    "benchmark": 68.1,
    "samples": 7215,
    "url": "https://ssd.userbenchmark.com/SpeedTest/722603/ADATA-SU635"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LCT-128M3S 128GB",
    "rank": 681,
    "benchmark": 68,
    "samples": 1760,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4678/LITEONIT-LCT-128M3S"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM830 512GB",
    "rank": 682,
    "benchmark": 67.9,
    "samples": 507,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2045/SAMSUNG-SSD-PM830-25--7"
  },
  {
    "type": "SSD",
    "part_number": "VTX3-25SAT3-120G",
    "brand": "OCZ",
    "model": "Vertex 3 120GB",
    "rank": 683,
    "benchmark": 67.9,
    "samples": 16983,
    "url": "https://ssd.userbenchmark.com/OCZ-Vertex-3-120GB/Rating/1927"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC240G5LC726B104-298 240GB",
    "rank": 684,
    "benchmark": 67.8,
    "samples": 145,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10419/SSD2SC240G5LC726B104-298"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BF180A4L",
    "brand": "Intel",
    "model": "SSD Pro 1500 Series 180GB",
    "rank": 685,
    "benchmark": 67.6,
    "samples": 7821,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2904/INTEL-SSDSC2BF180A4L"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BF180A401",
    "brand": "Intel",
    "model": "SSD Pro 1500 Series 180GB",
    "rank": 685,
    "benchmark": 67.6,
    "samples": 7821,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2904/INTEL-SSDSC2BF180A4L"
  },
  {
    "type": "SSD",
    "part_number": "ASU650SS-240GT-C",
    "brand": "Adata",
    "model": "SU650 240GB",
    "rank": 686,
    "benchmark": 67.4,
    "samples": 31449,
    "url": "https://ssd.userbenchmark.com/SpeedTest/351933/ADATA-SU650"
  },
  {
    "type": "SSD",
    "part_number": "RVD3-FHPX4-240G",
    "brand": "OCZ",
    "model": "RevoDrive 3 PCIe 240GB",
    "rank": 687,
    "benchmark": 67.3,
    "samples": 278,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1346/OCZ-REVODRIVE3"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2CT120A3",
    "brand": "Intel",
    "model": "330 Series 120GB",
    "rank": 688,
    "benchmark": 67.3,
    "samples": 10462,
    "url": "https://ssd.userbenchmark.com/Intel-330-Series-120GB/Rating/1933"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BW120A401",
    "brand": "Intel",
    "model": "530 Series 120GB",
    "rank": 689,
    "benchmark": 67.2,
    "samples": 7469,
    "url": "https://ssd.userbenchmark.com/Intel-530-Series-120GB/Rating/1934"
  },
  {
    "type": "SSD",
    "part_number": "SMS200S3/120G",
    "brand": "Kingston",
    "model": "SSDNow mS200 mSATA 120GB",
    "rank": 690,
    "benchmark": 67.2,
    "samples": 756,
    "url": "https://ssd.userbenchmark.com/SpeedTest/536/KINGSTON-SMS200S3120G"
  },
  {
    "type": "SSD",
    "part_number": "TS128GSSD340",
    "brand": "Transcend",
    "model": "SSD340 128GB",
    "rank": 691,
    "benchmark": 67.1,
    "samples": 1741,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5472/TS128GSSD340"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "HFS128G3AMNB-2200A 128GB",
    "rank": 692,
    "benchmark": 67.1,
    "samples": 1596,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5987/HFS128G3AMNB-2200A"
  },
  {
    "type": "SSD",
    "part_number": "CT512M4SSD2",
    "brand": "Crucial",
    "model": "M4 512GB",
    "rank": 693,
    "benchmark": 67.1,
    "samples": 3648,
    "url": "https://ssd.userbenchmark.com/SpeedTest/144/M4-CT512M4SSD2"
  },
  {
    "type": "SSD",
    "part_number": "SUV400S37/120G",
    "brand": "Kingston",
    "model": "SSDNow UV400 120GB",
    "rank": 694,
    "benchmark": 67,
    "samples": 67928,
    "url": "https://ssd.userbenchmark.com/SpeedTest/137022/KINGSTON-SUV400S37120G"
  },
  {
    "type": "SSD",
    "part_number": "SD6SB1M-064G",
    "brand": "SanDisk",
    "model": "X110 64GB",
    "rank": 695,
    "benchmark": 67,
    "samples": 594,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8361/SanDisk-SD6SB1M064G"
  },
  {
    "type": "SSD",
    "part_number": "PW120GS25SSDR",
    "brand": "Patriot",
    "model": "Wildfire 120GB",
    "rank": 696,
    "benchmark": 66.9,
    "samples": 252,
    "url": "https://ssd.userbenchmark.com/Patriot-Wildfire-120GB/Rating/2235"
  },
  {
    "type": "SSD",
    "part_number": "AS511S3-120GM-C",
    "brand": "Adata",
    "model": "S511 120GB",
    "rank": 697,
    "benchmark": 66.9,
    "samples": 563,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4509/ADATA-SSD-S511-120GB"
  },
  {
    "type": "SSD",
    "part_number": "SVP200S37A60G",
    "brand": "Kingston",
    "model": "SSDNow V+200 Series 60GB",
    "rank": 698,
    "benchmark": 66.9,
    "samples": 173,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10560/KINGSTON-SVP200S37A60G"
  },
  {
    "type": "SSD",
    "part_number": "SH100S3/120G",
    "brand": "Kingston",
    "model": "HyperX 120GB",
    "rank": 699,
    "benchmark": 66.8,
    "samples": 2907,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1716/KINGSTON-SH100S3120G"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDCR120GB-DX",
    "brand": "Mushkin",
    "model": "Chronos Deluxe 120GB",
    "rank": 700,
    "benchmark": 66.8,
    "samples": 337,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4583/MKNSSDCR120GB-DX"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "AGILITY4 512GB",
    "rank": 701,
    "benchmark": 66.8,
    "samples": 135,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11959/OCZ-AGILITY4"
  },
  {
    "type": "SSD",
    "part_number": "MZ7PC256HAFU",
    "brand": "Samsung",
    "model": "PM830 256GB",
    "rank": 702,
    "benchmark": 66.7,
    "samples": 1838,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5924/SAMSUNG-MZ7PC256HAFU-000H1"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDX-120G-G25",
    "brand": "SanDisk",
    "model": "Extreme 120GB",
    "rank": 703,
    "benchmark": 66.7,
    "samples": 9660,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1102/SanDisk-SDSSDX120GG25"
  },
  {
    "type": "SSD",
    "part_number": "TRN100-25SAT3-240G",
    "brand": "OCZ",
    "model": "Trion 100 240GB",
    "rank": 704,
    "benchmark": 66.4,
    "samples": 7957,
    "url": "https://ssd.userbenchmark.com/OCZ-Trion-100-240GB/Rating/3501"
  },
  {
    "type": "SSD",
    "part_number": "SSDMCEAC180B301",
    "brand": "Intel",
    "model": "525 Series mSATA 180GB",
    "rank": 705,
    "benchmark": 66.3,
    "samples": 52,
    "url": "https://ssd.userbenchmark.com/SpeedTest/14110/INTEL-SSDMCEAC180B3"
  },
  {
    "type": "SSD",
    "part_number": "TS128GMTS400",
    "brand": "Transcend",
    "model": "MTS400 M.2 128GB",
    "rank": 706,
    "benchmark": 66.2,
    "samples": 604,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12551/TS128GMTS400"
  },
  {
    "type": "SSD",
    "part_number": "SKC300S37A/60G",
    "brand": "Kingston",
    "model": "SSDNow KC300 60GB",
    "rank": 707,
    "benchmark": 66.1,
    "samples": 579,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8566/KINGSTON-SKC300S37A60G"
  },
  {
    "type": "SSD",
    "part_number": "SA400S37/240G",
    "brand": "Kingston",
    "model": "A400 240GB",
    "rank": 708,
    "benchmark": 66,
    "samples": 271349,
    "url": "https://ssd.userbenchmark.com/Kingston-A400-240GB/Rating/3953"
  },
  {
    "type": "SSD",
    "part_number": "2DP98AA#ABC",
    "brand": "HP",
    "model": "S700 250GB",
    "rank": 709,
    "benchmark": 65.9,
    "samples": 6871,
    "url": "https://ssd.userbenchmark.com/SpeedTest/332066/HP-SSD-S700-250GB"
  },
  {
    "type": "SSD",
    "part_number": "ASU650SS-480GT-C",
    "brand": "Adata",
    "model": "SU650 480GB",
    "rank": 710,
    "benchmark": 65.9,
    "samples": 13822,
    "url": "https://ssd.userbenchmark.com/SpeedTest/434166/ADATA-SU650"
  },
  {
    "type": "SSD",
    "part_number": "CT480BX500SSD1",
    "brand": "Crucial",
    "model": "BX500 480GB",
    "rank": 711,
    "benchmark": 65.9,
    "samples": 49386,
    "url": "https://ssd.userbenchmark.com/SpeedTest/579817/CT480BX500SSD1"
  },
  {
    "type": "SSD",
    "part_number": "THNSNS128GMCP",
    "brand": "Toshiba",
    "model": "THNSNS Series mSATA PCI-E 128GB",
    "rank": 712,
    "benchmark": 65.9,
    "samples": 577,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3823/TOSHIBA-THNSNS128GMCP"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Apple",
    "model": "SM256E 251GB",
    "rank": 713,
    "benchmark": 65.8,
    "samples": 688,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1438/APPLE-SSD-SM256E"
  },
  {
    "type": "SSD",
    "part_number": "ASP900S3-128GM-C",
    "brand": "Adata",
    "model": "Premier Pro SP900 128GB",
    "rank": 714,
    "benchmark": 65.7,
    "samples": 2715,
    "url": "https://ssd.userbenchmark.com/Adata-Premier-Pro-SP900-128GB/Rating/1930"
  },
  {
    "type": "SSD",
    "part_number": "OCZSSDPX-1RVD0240",
    "brand": "OCZ",
    "model": "RevoDrive PCIe 240GB",
    "rank": 715,
    "benchmark": 65.7,
    "samples": 99,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3328/OCZ-REVODRIV"
  },
  {
    "type": "SSD",
    "part_number": "CT120M500SSD1",
    "brand": "Crucial",
    "model": "M500 120GB",
    "rank": 716,
    "benchmark": 65.7,
    "samples": 14545,
    "url": "https://ssd.userbenchmark.com/Crucial-M500-120GB/Rating/1888"
  },
  {
    "type": "SSD",
    "part_number": "TS128GSSD720",
    "brand": "Transcend",
    "model": "SSD720 128GB",
    "rank": 717,
    "benchmark": 65.6,
    "samples": 437,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8724/TS128GSSD720"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BF240A5L",
    "brand": "Intel",
    "model": "SSD Pro 2500 Series 240GB",
    "rank": 718,
    "benchmark": 65.5,
    "samples": 1806,
    "url": "https://ssd.userbenchmark.com/SpeedTest/21454/INTEL-SSDSC2BF240A5L"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BF240H501",
    "brand": "Intel",
    "model": "SSD Pro 2500 Series 240GB",
    "rank": 718,
    "benchmark": 65.5,
    "samples": 1806,
    "url": "https://ssd.userbenchmark.com/SpeedTest/21454/INTEL-SSDSC2BF240A5L"
  },
  {
    "type": "SSD",
    "part_number": "PX-64M5M",
    "brand": "Plextor",
    "model": "M5M mSATA 64GB",
    "rank": 719,
    "benchmark": 65.5,
    "samples": 105,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1638/PLEXTOR-PX-64M5M"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Geil",
    "model": "Zenith S3 120GB",
    "rank": 720,
    "benchmark": 65.5,
    "samples": 196,
    "url": "https://ssd.userbenchmark.com/SpeedTest/18730/GeIL-ZENITH-S3-120GB"
  },
  {
    "type": "SSD",
    "part_number": "SM2280S3/120G",
    "brand": "Kingston",
    "model": "SM2280S3 SATA M.2 120GB",
    "rank": 721,
    "benchmark": 65.5,
    "samples": 1522,
    "url": "https://ssd.userbenchmark.com/SpeedTest/14411/KINGSTON-SM2280S3120G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Apple",
    "model": "SM512E 500GB",
    "rank": 722,
    "benchmark": 65.4,
    "samples": 454,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2941/APPLE-SSD-SM512E"
  },
  {
    "type": "SSD",
    "part_number": "PP240GS25SSDR",
    "brand": "Patriot",
    "model": "Pyro 240GB",
    "rank": 723,
    "benchmark": 65.4,
    "samples": 341,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9501/Patriot-Pyro-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM851 mSATA 256GB",
    "rank": 724,
    "benchmark": 65.4,
    "samples": 5199,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8695/SAMSUNG-SSD-PM851-mSATA-256GB"
  },
  {
    "type": "SSD",
    "part_number": "SD5SF2-128G",
    "brand": "SanDisk",
    "model": "X100 mSATA 128GB",
    "rank": 725,
    "benchmark": 65.4,
    "samples": 164,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7539/SanDisk-SD5SF2128G"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BB120G4",
    "brand": "Intel",
    "model": "S3500 Series 120GB",
    "rank": 726,
    "benchmark": 65.3,
    "samples": 314,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10755/INTEL-SSDSC2BB120G4"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDCR120GB",
    "brand": "Mushkin",
    "model": "Chronos 120GB",
    "rank": 727,
    "benchmark": 65.3,
    "samples": 785,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3690/MKNSSDCR120GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX2 240GB",
    "rank": 728,
    "benchmark": 65.1,
    "samples": 10,
    "url": "https://ssd.userbenchmark.com/SpeedTest/127/OCZ-VERTEX2"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F90GBGT-BK",
    "brand": "Corsair",
    "model": "Force GT 90GB",
    "rank": 729,
    "benchmark": 64.8,
    "samples": 696,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2377/Corsair-Force-GT"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC120GE2DA08B-T 120GB",
    "rank": 730,
    "benchmark": 64.7,
    "samples": 87,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6740/SSD2SC120GE2DA08B-T"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSNF128GMCS 128GB",
    "rank": 731,
    "benchmark": 64.7,
    "samples": 1068,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1596/TOSHIBA-THNSNF128GMCS"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX3 90GB",
    "rank": 732,
    "benchmark": 64.5,
    "samples": 921,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1586/OCZ-VERTEX3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMTE256HMHP-000L1 256GB",
    "rank": 733,
    "benchmark": 64.4,
    "samples": 1005,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12653/SAMSUNG-MZMTE256HMHP-000L1"
  },
  {
    "type": "SSD",
    "part_number": "SHFS37A/120G",
    "brand": "HyperX",
    "model": "Fury 120GB",
    "rank": 734,
    "benchmark": 64.4,
    "samples": 7193,
    "url": "https://ssd.userbenchmark.com/HyperX-Fury-120GB/Rating/2586"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Goodram",
    "model": "C50 240GB",
    "rank": 735,
    "benchmark": 64.3,
    "samples": 31,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7031/GOODRAM-C50"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Adata",
    "model": "SX910 128GB",
    "rank": 736,
    "benchmark": 64.3,
    "samples": 317,
    "url": "https://ssd.userbenchmark.com/SpeedTest/444/ADATA-SX910"
  },
  {
    "type": "SSD",
    "part_number": "PPSE120GS25SSDR",
    "brand": "Patriot",
    "model": "Pyro SE 120GB",
    "rank": 737,
    "benchmark": 64.2,
    "samples": 334,
    "url": "https://ssd.userbenchmark.com/Patriot-Pyro-SE-120GB/Rating/2233"
  },
  {
    "type": "SSD",
    "part_number": "2DP97AA#ABC",
    "brand": "HP",
    "model": "S700 120GB",
    "rank": 738,
    "benchmark": 64.2,
    "samples": 3685,
    "url": "https://ssd.userbenchmark.com/SpeedTest/307263/HP-SSD-S700-120GB"
  },
  {
    "type": "SSD",
    "part_number": "RVD3-FHPX4-120G",
    "brand": "OCZ",
    "model": "RevoDrive 3 PCIe 120GB",
    "rank": 739,
    "benchmark": 64.1,
    "samples": 551,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3116/OCZ-REVODRIVE3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-128M3M 128GB",
    "rank": 740,
    "benchmark": 64.1,
    "samples": 494,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3187/LITEONIT-LMT-128M3M"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Mushkin",
    "model": "MKNSSDCR120GB-MX 120GB",
    "rank": 741,
    "benchmark": 64.1,
    "samples": 201,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1448/MKNSSDCR120GB-MX"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "MXSSD3MDSF-120G 120GB",
    "rank": 742,
    "benchmark": 64,
    "samples": 8,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10325/MXSSD3MDSF-120G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "HFS256G3AMNB-2200A 256GB",
    "rank": 743,
    "benchmark": 63.9,
    "samples": 1219,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4739/HFS256G3AMNB-2200A"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZ7TE128HMGR-000L1 128GB",
    "rank": 744,
    "benchmark": 63.8,
    "samples": 4194,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9061/SAMSUNG-MZ7TE128HMGR-000L1"
  },
  {
    "type": "SSD",
    "part_number": "TL100-25SAT3-240G",
    "brand": "Toshiba",
    "model": "OCZ TL100 240GB",
    "rank": 745,
    "benchmark": 63.7,
    "samples": 6739,
    "url": "https://ssd.userbenchmark.com/SpeedTest/182236/TOSHIBA-TL100"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZNTD512HAGL-000L1 512GB",
    "rank": 746,
    "benchmark": 63.7,
    "samples": 208,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6200/SAMSUNG-MZNTD512HAGL-000L1"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Kingston",
    "model": "SVP100S296G 96GB",
    "rank": 747,
    "benchmark": 63.5,
    "samples": 6,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2336/KINGSTON-SVP100S296G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSNF256GMCS 256GB",
    "rank": 748,
    "benchmark": 63.5,
    "samples": 742,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5493/TOSHIBA-THNSNF256GMCS"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Goodram",
    "model": "C100 120GB",
    "rank": 749,
    "benchmark": 63.4,
    "samples": 312,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5675/GOODRAM-C100"
  },
  {
    "type": "SSD",
    "part_number": "ASU650SS-120GT-C",
    "brand": "Adata",
    "model": "SU650 120GB",
    "rank": 750,
    "benchmark": 63.3,
    "samples": 35349,
    "url": "https://ssd.userbenchmark.com/SpeedTest/359434/ADATA-SU650"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM830 mSATA 256GB",
    "rank": 751,
    "benchmark": 63.2,
    "samples": 6770,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3903/SAMSUNG-SSD-PM830-mSATA-256GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "SD5SG2256G1052E 256GB",
    "rank": 752,
    "benchmark": 63.1,
    "samples": 573,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2816/SanDisk-SD5SG2256G1052E"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZ7TD512HAGM-000L1 512GB",
    "rank": 753,
    "benchmark": 63,
    "samples": 500,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3479/SAMSUNG-MZ7TD512HAGM-000L1"
  },
  {
    "type": "SSD",
    "part_number": "TRN100-25SAT3-120G",
    "brand": "OCZ",
    "model": "Trion 100 120GB",
    "rank": 754,
    "benchmark": 62.8,
    "samples": 3565,
    "url": "https://ssd.userbenchmark.com/SpeedTest/32000/OCZ-TRION100"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM841 2.5\" 256GB",
    "rank": 755,
    "benchmark": 62.8,
    "samples": 1082,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5077/SAMSUNG-SSD-PM841-25--7"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Adata",
    "model": "SX300 256GB",
    "rank": 756,
    "benchmark": 62.7,
    "samples": 92,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3900/ADATA-SX300"
  },
  {
    "type": "SSD",
    "part_number": "PP120GS25SSDR",
    "brand": "Patriot",
    "model": "Pyro 120GB",
    "rank": 757,
    "benchmark": 62.7,
    "samples": 120,
    "url": "https://ssd.userbenchmark.com/Patriot-Pyro-120GB/Rating/2234"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7PC128B/WW",
    "brand": "Samsung",
    "model": "830 128GB",
    "rank": 758,
    "benchmark": 62.6,
    "samples": 28570,
    "url": "https://ssd.userbenchmark.com/Samsung-830-128GB/Rating/1926"
  },
  {
    "type": "SSD",
    "part_number": "SSDSCKGF180A4L",
    "brand": "Intel",
    "model": "SSD Pro 1500 Series 180GB",
    "rank": 759,
    "benchmark": 62.5,
    "samples": 179,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6511/INTEL-SSDSCKGF180A4L"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZ7TD256HAFV-000L7 256GB",
    "rank": 760,
    "benchmark": 62.5,
    "samples": 5388,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2342/SAMSUNG-MZ7TD256HAFV-000L7"
  },
  {
    "type": "SSD",
    "part_number": "SV300S37A/240G",
    "brand": "Kingston",
    "model": "SSDNow V300 240GB",
    "rank": 761,
    "benchmark": 62.4,
    "samples": 136195,
    "url": "https://ssd.userbenchmark.com/Kingston-SSDNow-V300-240GB/Rating/1817"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Apple",
    "model": "SD512E 500GB",
    "rank": 762,
    "benchmark": 62.4,
    "samples": 220,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6934/APPLE-SSD-SD512E"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Kingston",
    "model": "SKC100S3120G 120GB",
    "rank": 763,
    "benchmark": 62.3,
    "samples": 244,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5074/KINGSTON-SKC100S3120G"
  },
  {
    "type": "SSD",
    "part_number": "PT240GS25SSDR",
    "brand": "Patriot",
    "model": "Torch 240GB",
    "rank": 764,
    "benchmark": 62.1,
    "samples": 43,
    "url": "https://ssd.userbenchmark.com/SpeedTest/18783/Patriot-Torch"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Intel",
    "model": "SS DSC2BW180A3H 180GB",
    "rank": 765,
    "benchmark": 61.9,
    "samples": 46,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9583/INTEL-SS-DSC2BW180A3H"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZNTD256HAGL-00000 256GB",
    "rank": 766,
    "benchmark": 61.8,
    "samples": 1085,
    "url": "https://ssd.userbenchmark.com/SpeedTest/396/SAMSUNG-MZNTD256HAGL-00000"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2CW480A3",
    "brand": "Intel",
    "model": "520 Series 480GB",
    "rank": 767,
    "benchmark": 61.8,
    "samples": 1485,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9939/INTEL-SSDSC2CW480A3"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2CW060A3",
    "brand": "Intel",
    "model": "520 Series 60GB",
    "rank": 768,
    "benchmark": 61.7,
    "samples": 979,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7251/INTEL-SSDSC2CW060A3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMTE256HMHP-000MV 256GB",
    "rank": 769,
    "benchmark": 61.6,
    "samples": 2490,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12210/SAMSUNG-MZMTE256HMHP-000MV"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Apple",
    "model": "SM768E 751GB",
    "rank": 770,
    "benchmark": 61.6,
    "samples": 154,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4350/APPLE-SSD-SM768E"
  },
  {
    "type": "SSD",
    "part_number": "SSDMCEAC120B301",
    "brand": "Intel",
    "model": "525 Series mSATA 120GB",
    "rank": 771,
    "benchmark": 61.5,
    "samples": 603,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5314/INTEL-SSDMCEAC120B3"
  },
  {
    "type": "SSD",
    "part_number": "PB240GS25SSDR",
    "brand": "Patriot",
    "model": "Blaze 240GB",
    "rank": 772,
    "benchmark": 61.5,
    "samples": 1200,
    "url": "https://ssd.userbenchmark.com/SpeedTest/19971/Patriot-Blaze"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F480GBGS-BK",
    "brand": "Corsair",
    "model": "Force GS 480GB",
    "rank": 773,
    "benchmark": 61,
    "samples": 532,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7580/Corsair-Force-GS"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDEC120GB",
    "brand": "Mushkin",
    "model": "ECO2 120GB",
    "rank": 774,
    "benchmark": 61,
    "samples": 266,
    "url": "https://ssd.userbenchmark.com/SpeedTest/24915/MKNSSDEC120GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Goodram",
    "model": "C40 240GB",
    "rank": 775,
    "benchmark": 61,
    "samples": 416,
    "url": "https://ssd.userbenchmark.com/SpeedTest/13085/GOODRAM-C40"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Apple",
    "model": "SM128E 121GB",
    "rank": 776,
    "benchmark": 60.7,
    "samples": 254,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8955/APPLE-SSD-SM128E"
  },
  {
    "type": "SSD",
    "part_number": "MZ7PC128HAFU",
    "brand": "Samsung",
    "model": "PM830 128GB",
    "rank": 777,
    "benchmark": 60.7,
    "samples": 9611,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3368/SAMSUNG-MZ7PC128HAFU-000H1"
  },
  {
    "type": "SSD",
    "part_number": "SD8SBAT-128G-1122",
    "brand": "SanDisk",
    "model": "Z400s 128GB",
    "rank": 778,
    "benchmark": 60.6,
    "samples": 7980,
    "url": "https://ssd.userbenchmark.com/SpeedTest/34216/SanDisk-SD8SBAT128G1122"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7TD120BW",
    "brand": "Samsung",
    "model": "840 120GB",
    "rank": 779,
    "benchmark": 60.4,
    "samples": 46360,
    "url": "https://ssd.userbenchmark.com/Samsung-840-120GB/Rating/2263"
  },
  {
    "type": "SSD",
    "part_number": "CT256M4SSD2",
    "brand": "Crucial",
    "model": "M4 256GB",
    "rank": 780,
    "benchmark": 60.4,
    "samples": 15578,
    "url": "https://ssd.userbenchmark.com/Crucial-M4-256GB/Rating/372"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Mushkin",
    "model": "MKNSSDAT240GB-DX 240GB",
    "rank": 781,
    "benchmark": 60.4,
    "samples": 124,
    "url": "https://ssd.userbenchmark.com/SpeedTest/85/MKNSSDAT240GB-DX"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDA-240G-G25",
    "brand": "SanDisk",
    "model": "SSD Plus 240GB",
    "rank": 782,
    "benchmark": 60.3,
    "samples": 103291,
    "url": "https://ssd.userbenchmark.com/SpeedTest/25612/SanDisk-SDSSDA240G"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDA-240G-G26",
    "brand": "SanDisk",
    "model": "SSD Plus 240GB",
    "rank": 782,
    "benchmark": 60.3,
    "samples": 103291,
    "url": "https://ssd.userbenchmark.com/SpeedTest/25612/SanDisk-SDSSDA240G"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BF120A5",
    "brand": "Intel",
    "model": "SSD Pro 2500 Series 120GB",
    "rank": 783,
    "benchmark": 60.1,
    "samples": 204,
    "url": "https://ssd.userbenchmark.com/SpeedTest/23404/INTEL-SSDSC2BF120A5"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BF120H501",
    "brand": "Intel",
    "model": "SSD Pro 2500 Series 120GB",
    "rank": 783,
    "benchmark": 60.1,
    "samples": 204,
    "url": "https://ssd.userbenchmark.com/SpeedTest/23404/INTEL-SSDSC2BF120A5"
  },
  {
    "type": "SSD",
    "part_number": "SA400S37/120G",
    "brand": "Kingston",
    "model": "A400 120GB",
    "rank": 784,
    "benchmark": 60.1,
    "samples": 119683,
    "url": "https://ssd.userbenchmark.com/SpeedTest/229920/KINGSTON-SA400S37120G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "DMT-80 11GB",
    "rank": 785,
    "benchmark": 60,
    "samples": 70,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5740/LITEONIT-DMT-80"
  },
  {
    "type": "SSD",
    "part_number": "CT128M4SSD2",
    "brand": "Crucial",
    "model": "M4 128GB",
    "rank": 786,
    "benchmark": 59.8,
    "samples": 31475,
    "url": "https://ssd.userbenchmark.com/Crucial-M4-128GB/Rating/1929"
  },
  {
    "type": "SSD",
    "part_number": "SH103S3/90G",
    "brand": "Kingston",
    "model": "HyperX 3K 90GB",
    "rank": 787,
    "benchmark": 59.7,
    "samples": 400,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3217/KINGSTON-SH103S390G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMTD512HAGL-00000 512GB",
    "rank": 788,
    "benchmark": 59.7,
    "samples": 414,
    "url": "https://ssd.userbenchmark.com/SpeedTest/298/SAMSUNG-MZMTD512HAGL-00000"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDA-960G-G25",
    "brand": "SanDisk",
    "model": "SSD Plus 960GB",
    "rank": 789,
    "benchmark": 59.7,
    "samples": 2197,
    "url": "https://ssd.userbenchmark.com/SpeedTest/206516/SanDisk-SDSSDA960G"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDA-960G-G26",
    "brand": "SanDisk",
    "model": "SSD Plus 960GB",
    "rank": 789,
    "benchmark": 59.7,
    "samples": 2197,
    "url": "https://ssd.userbenchmark.com/SpeedTest/206516/SanDisk-SDSSDA960G"
  },
  {
    "type": "SSD",
    "part_number": "SH103S3/480G",
    "brand": "Kingston",
    "model": "HyperX 3K 480GB",
    "rank": 790,
    "benchmark": 59.6,
    "samples": 1369,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8665/KINGSTON-KINGSTON-SH103S3"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F60GBGT-BK",
    "brand": "Corsair",
    "model": "Force GT 60GB",
    "rank": 791,
    "benchmark": 59.6,
    "samples": 1300,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1231/Corsair-Force-GT"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2BW480H601",
    "brand": "Intel",
    "model": "535 Series 480GB",
    "rank": 792,
    "benchmark": 59.4,
    "samples": 2578,
    "url": "https://ssd.userbenchmark.com/SpeedTest/29709/INTEL-SSDSC2BW480H6"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Mushkin",
    "model": "MKNSSDAT120GB-DX 120GB",
    "rank": 793,
    "benchmark": 59.4,
    "samples": 208,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6436/MKNSSDAT120GB-DX"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX3 60GB",
    "rank": 794,
    "benchmark": 59.3,
    "samples": 3824,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1912/OCZ-VERTEX3"
  },
  {
    "type": "SSD",
    "part_number": "SD8SNAT-128G",
    "brand": "SanDisk",
    "model": "X400s SATA M.2 128GB",
    "rank": 795,
    "benchmark": 59.1,
    "samples": 45,
    "url": "https://ssd.userbenchmark.com/SpeedTest/33396/SanDisk-SD8SNAT128G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "XLR8 Pro 480GB",
    "rank": 796,
    "benchmark": 59.1,
    "samples": 18,
    "url": "https://ssd.userbenchmark.com/SpeedTest/23219/SSD2SC480GC4DA16T-T"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMTE256HMHP-000SO 256GB",
    "rank": 797,
    "benchmark": 59.1,
    "samples": 23,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12855/SAMSUNG-MZMTE256HMHP-000SO"
  },
  {
    "type": "SSD",
    "part_number": "CT120M500SSD3",
    "brand": "Crucial",
    "model": "M500 mSATA 120GB",
    "rank": 798,
    "benchmark": 58.9,
    "samples": 824,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6146/Crucial-CT120M500SSD3"
  },
  {
    "type": "SSD",
    "part_number": "CT256M4SSD3",
    "brand": "Crucial",
    "model": "M4 256GB mSATA",
    "rank": 799,
    "benchmark": 58.7,
    "samples": 20,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5098/M4-CT256-M4-CT256M4SSD3"
  },
  {
    "type": "SSD",
    "part_number": "VTX3-25SAT3-480G",
    "brand": "OCZ",
    "model": "Vertex 3 480GB",
    "rank": 800,
    "benchmark": 58.5,
    "samples": 158,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4908/OCZ-VERTEX3"
  },
  {
    "type": "SSD",
    "part_number": "TL100-25SAT3-120G",
    "brand": "Toshiba",
    "model": "OCZ TL100 120GB",
    "rank": 801,
    "benchmark": 58.4,
    "samples": 1641,
    "url": "https://ssd.userbenchmark.com/SpeedTest/184159/TOSHIBA-TL100"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Spcc",
    "model": "Solid State Disk 120GB",
    "rank": 802,
    "benchmark": 58.3,
    "samples": 14650,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12061/SPCC-Solid-State-Disk"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Intel",
    "model": "510 Series 250GB",
    "rank": 803,
    "benchmark": 58.2,
    "samples": 682,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2447/INTEL-SSDSC2MH250A2"
  },
  {
    "type": "SSD",
    "part_number": "ASX900S3-512GM-C",
    "brand": "Adata",
    "model": "XPG SX900 512GB",
    "rank": 804,
    "benchmark": 58.1,
    "samples": 1370,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5993/ADATA-SX900"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDA-120G-G25",
    "brand": "SanDisk",
    "model": "SSD Plus 120GB",
    "rank": 805,
    "benchmark": 58,
    "samples": 70658,
    "url": "https://ssd.userbenchmark.com/SpeedTest/24452/SanDisk-SDSSDA120G"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDA-120G-G26",
    "brand": "SanDisk",
    "model": "SSD Plus 120GB",
    "rank": 805,
    "benchmark": 58,
    "samples": 70658,
    "url": "https://ssd.userbenchmark.com/SpeedTest/24452/SanDisk-SDSSDA120G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC120G5LC709B121-510 120GB",
    "rank": 806,
    "benchmark": 58,
    "samples": 268,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11896/SSD2SC120G5LC709B121-510"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Intel",
    "model": "SSDSC2CT080A4 80GB",
    "rank": 807,
    "benchmark": 57.9,
    "samples": 323,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6435/INTEL-SSDSC2CT080A4"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDX-480G-G25",
    "brand": "SanDisk",
    "model": "Extreme 480GB",
    "rank": 808,
    "benchmark": 57.8,
    "samples": 1075,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9517/SanDisk-SDSSDX48"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Adata",
    "model": "SP600 64GB",
    "rank": 809,
    "benchmark": 57.8,
    "samples": 479,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6806/ADATA-SP600"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMTD256HAGM-000L1 256GB",
    "rank": 810,
    "benchmark": 57.7,
    "samples": 898,
    "url": "https://ssd.userbenchmark.com/SpeedTest/505/SAMSUNG-MZMTD256HAGM-000L1"
  },
  {
    "type": "SSD",
    "part_number": "SSDSCMMW240A3L",
    "brand": "Intel",
    "model": "521 Series 240GB",
    "rank": 811,
    "benchmark": 57.7,
    "samples": 463,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6283/INTEL-SSDSCMMW240A3L"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Intel",
    "model": "SSDMCEAW120A4 120GB",
    "rank": 812,
    "benchmark": 57.6,
    "samples": 158,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8790/INTEL-SSDMCEAW120A4"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Team",
    "model": "XS3 SSD 120GB",
    "rank": 813,
    "benchmark": 57.4,
    "samples": 208,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7195/TEAM-XS3--SSD"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDCR60GB",
    "brand": "Mushkin",
    "model": "Chronos 60GB",
    "rank": 814,
    "benchmark": 57.3,
    "samples": 75,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1564/MKNSSDCR60GB"
  },
  {
    "type": "SSD",
    "part_number": "SKC300S37A/480G",
    "brand": "Kingston",
    "model": "SSDNow KC300 480GB",
    "rank": 815,
    "benchmark": 57.3,
    "samples": 545,
    "url": "https://ssd.userbenchmark.com/SpeedTest/13063/KINGSTON-SKC300S37A480G"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2CT060A3",
    "brand": "Intel",
    "model": "330 Series 60GB",
    "rank": 816,
    "benchmark": 56.9,
    "samples": 1968,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2796/INTEL-SSDSC2CT060A3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Kingston",
    "model": "RBU-SMS100S3128GA 128GB",
    "rank": 817,
    "benchmark": 56.8,
    "samples": 284,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10832/KINGSTON-RBU-SMS100S3128GA"
  },
  {
    "type": "SSD",
    "part_number": "TS128GMSA340",
    "brand": "Transcend",
    "model": "MSA340 mSATA 128GB",
    "rank": 818,
    "benchmark": 56.8,
    "samples": 22,
    "url": "https://ssd.userbenchmark.com/SpeedTest/20186/TS128GMSA340"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F480GBGT-BK",
    "brand": "Corsair",
    "model": "Force GT 480GB",
    "rank": 819,
    "benchmark": 56.7,
    "samples": 216,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12025/Corsair-Force-GT"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMPC256HBGJ-000H1 256GB",
    "rank": 820,
    "benchmark": 56.6,
    "samples": 464,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2935/SAMSUNG-MZMPC256HBGJ-000H1"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-19nmBGA-64G 64GB",
    "rank": 821,
    "benchmark": 56.5,
    "samples": 118,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7220/LITEONIT-LMT-19nmBGA-64G"
  },
  {
    "type": "SSD",
    "part_number": "CTFDDAC256MAG",
    "brand": "Crucial",
    "model": "RealSSD C300 256GB",
    "rank": 822,
    "benchmark": 56.4,
    "samples": 639,
    "url": "https://ssd.userbenchmark.com/Crucial-RealSSD-C300-256GB/Rating/370"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-N64GB3-BK",
    "brand": "Corsair",
    "model": "Neutron 64GB",
    "rank": 823,
    "benchmark": 56.4,
    "samples": 190,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4447/Corsair-Neutron-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSNS064GMCP 64GB",
    "rank": 824,
    "benchmark": 56.3,
    "samples": 65,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11198/TOSHIBA-THNSNS064GMCP"
  },
  {
    "type": "SSD",
    "part_number": "ASX900S3-64GM-C",
    "brand": "Adata",
    "model": "XPG SX900 64GB",
    "rank": 825,
    "benchmark": 56.1,
    "samples": 567,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3799/ADATA-SX900"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM830 64GB",
    "rank": 826,
    "benchmark": 56,
    "samples": 23,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3969/SAMSUNG-SSD-PM83"
  },
  {
    "type": "SSD",
    "part_number": "CT240BX500SSD1",
    "brand": "Crucial",
    "model": "BX500 240GB",
    "rank": 827,
    "benchmark": 55.9,
    "samples": 94333,
    "url": "https://ssd.userbenchmark.com/SpeedTest/578496/CT240BX500SSD1"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F360GBGS-BK",
    "brand": "Corsair",
    "model": "Force GS 360GB",
    "rank": 828,
    "benchmark": 55.9,
    "samples": 461,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6890/Corsair-Force-GS"
  },
  {
    "type": "SSD",
    "part_number": "SMS200S3/60G",
    "brand": "Kingston",
    "model": "SSDNow mS200 mSATA 60GB",
    "rank": 829,
    "benchmark": 55.8,
    "samples": 197,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5751/KINGSTON-SMS200S360G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Adata",
    "model": "SX300 128GB",
    "rank": 830,
    "benchmark": 55.8,
    "samples": 220,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4472/ADATA-SX300"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMPC128HBFU-000L1 128GB",
    "rank": 831,
    "benchmark": 55.6,
    "samples": 1123,
    "url": "https://ssd.userbenchmark.com/SpeedTest/157/SAMSUNG-MZMPC128HBFU-000L1"
  },
  {
    "type": "SSD",
    "part_number": "ASP900S3-064GM-C",
    "brand": "Adata",
    "model": "SP900 64GB",
    "rank": 832,
    "benchmark": 55.5,
    "samples": 419,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1593/ADATA-SP900"
  },
  {
    "type": "SSD",
    "part_number": "C400-MTFDDAK128MAM",
    "brand": "Micron",
    "model": "C400 RealSSD 128GB",
    "rank": 833,
    "benchmark": 55.4,
    "samples": 8490,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4661/C400-MTFDDAK128MAM"
  },
  {
    "type": "SSD",
    "part_number": "MZMTE128HMGR-00000",
    "brand": "Samsung",
    "model": "PM851 mSATA 128GB",
    "rank": 834,
    "benchmark": 55.3,
    "samples": 1961,
    "url": "https://ssd.userbenchmark.com/SpeedTest/13404/SAMSUNG-MZMTE128HMGR-000"
  },
  {
    "type": "SSD",
    "part_number": "TS64GMSA370",
    "brand": "Transcend",
    "model": "MSA370 mSATA 64GB",
    "rank": 835,
    "benchmark": 55.2,
    "samples": 106,
    "url": "https://ssd.userbenchmark.com/SpeedTest/23905/TS64GMSA370"
  },
  {
    "type": "SSD",
    "part_number": "C400-MTFDDAK256MAM",
    "brand": "Micron",
    "model": "C400 RealSSD 256GB",
    "rank": 836,
    "benchmark": 55.1,
    "samples": 8920,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5949/C400-MTFDDAK256MAM"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC240G726A104-474-27753 240GB",
    "rank": 837,
    "benchmark": 55.1,
    "samples": 75,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5288/SSD2SC240G726A104-474-27753"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDCR480GB-DX",
    "brand": "Mushkin",
    "model": "Chronos Deluxe 480GB",
    "rank": 838,
    "benchmark": 55.1,
    "samples": 96,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7111/MKNSSDCR480GB-DX"
  },
  {
    "type": "SSD",
    "part_number": "TS64GSSD370",
    "brand": "Transcend",
    "model": "SSD370 64GB",
    "rank": 839,
    "benchmark": 54.8,
    "samples": 341,
    "url": "https://ssd.userbenchmark.com/SpeedTest/17734/TS64GSSD370"
  },
  {
    "type": "SSD",
    "part_number": "MZ-7PC064B/WW",
    "brand": "Samsung",
    "model": "830 64GB",
    "rank": 840,
    "benchmark": 54.6,
    "samples": 3163,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1525/SAMSUNG-SSD-830-Series"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZ7TD128HAFV-000L1 128GB",
    "rank": 841,
    "benchmark": 54.6,
    "samples": 3358,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2753/SAMSUNG-MZ7TD128HAFV-000L1"
  },
  {
    "type": "SSD",
    "part_number": "SV310S37A/960G",
    "brand": "Kingston",
    "model": "SSDNow V310 960GB",
    "rank": 842,
    "benchmark": 54.6,
    "samples": 164,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15065/KINGSTON-SV310S37A960G"
  },
  {
    "type": "SSD",
    "part_number": "CT120BX500SSD1",
    "brand": "Crucial",
    "model": "BX500 120GB",
    "rank": 843,
    "benchmark": 54.5,
    "samples": 27291,
    "url": "https://ssd.userbenchmark.com/SpeedTest/576784/CT120BX500SSD1"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM830 mSATA 128GB",
    "rank": 844,
    "benchmark": 54.3,
    "samples": 586,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5211/SAMSUNG-SSD-PM830-mSATA-128GB"
  },
  {
    "type": "SSD",
    "part_number": "WDS120G1G0A",
    "brand": "WD",
    "model": "Green 120GB (2016)",
    "rank": 845,
    "benchmark": 54.2,
    "samples": 19298,
    "url": "https://ssd.userbenchmark.com/SpeedTest/201586/WDC-WDS120G1G0A-00SS50"
  },
  {
    "type": "SSD",
    "part_number": "TS128GMSA720",
    "brand": "Transcend",
    "model": "MSA720 mSATA 128GB",
    "rank": 846,
    "benchmark": 54.1,
    "samples": 121,
    "url": "https://ssd.userbenchmark.com/SpeedTest/18688/TS128GMSA720"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Kingston",
    "model": "SS200S330G 30GB",
    "rank": 847,
    "benchmark": 54.1,
    "samples": 147,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8275/KINGSTON-SS200S330G"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F60GBLS",
    "brand": "Corsair",
    "model": "Force LS 60GB",
    "rank": 848,
    "benchmark": 54.1,
    "samples": 2805,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4499/Corsair-Force-LS-SSD"
  },
  {
    "type": "SSD",
    "part_number": "CT128M4SSD3",
    "brand": "Crucial",
    "model": "M4 128GB mSATA",
    "rank": 849,
    "benchmark": 53.9,
    "samples": 356,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6566/M4-CT128M4SSD3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Team",
    "model": "L3 SSD 120GB",
    "rank": 850,
    "benchmark": 53.8,
    "samples": 779,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9314/TEAM-L3-SSD-120GB"
  },
  {
    "type": "SSD",
    "part_number": "WDS120G1G0B",
    "brand": "WD",
    "model": "Green SATA M.2 120GB",
    "rank": 851,
    "benchmark": 53.7,
    "samples": 5792,
    "url": "https://ssd.userbenchmark.com/SpeedTest/203345/WDC-WDS120G1G0B-00RC30"
  },
  {
    "type": "SSD",
    "part_number": "WDS240G1G0A",
    "brand": "WD",
    "model": "Green 240GB (2016)",
    "rank": 852,
    "benchmark": 53.6,
    "samples": 18369,
    "url": "https://ssd.userbenchmark.com/SpeedTest/204096/WDC-WDS240G1G0A-00SS50"
  },
  {
    "type": "SSD",
    "part_number": "SSDSCMMW180A3L",
    "brand": "Intel",
    "model": "521 Series 180GB",
    "rank": 853,
    "benchmark": 53.4,
    "samples": 270,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11361/INTEL-SSDSCMMW180A3L"
  },
  {
    "type": "SSD",
    "part_number": "CT064M4SSD2",
    "brand": "Crucial",
    "model": "M4 64GB",
    "rank": 854,
    "benchmark": 53.3,
    "samples": 6019,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1215/M4-CT064M4SSD2"
  },
  {
    "type": "SSD",
    "part_number": "SV300S37A/120G",
    "brand": "Kingston",
    "model": "SSDNow V300 120GB",
    "rank": 855,
    "benchmark": 53.3,
    "samples": 306888,
    "url": "https://ssd.userbenchmark.com/Kingston-SSDNow-V300-120GB/Rating/1892"
  },
  {
    "type": "SSD",
    "part_number": "SSDSC2MH120A2",
    "brand": "Intel",
    "model": "510 Series 120GB",
    "rank": 856,
    "benchmark": 53.1,
    "samples": 1689,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1357/INTEL-SSDSC2MH120A2"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDA-480G-G25",
    "brand": "SanDisk",
    "model": "SSD Plus 480GB",
    "rank": 857,
    "benchmark": 53,
    "samples": 14314,
    "url": "https://ssd.userbenchmark.com/SpeedTest/131770/SanDisk-SDSSDA480G"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDA-480G-G26",
    "brand": "SanDisk",
    "model": "SSD Plus 480GB",
    "rank": 857,
    "benchmark": 53,
    "samples": 14314,
    "url": "https://ssd.userbenchmark.com/SpeedTest/131770/SanDisk-SDSSDA480G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Crucial",
    "model": "C300-CTFDDAC128MAG 128GB",
    "rank": 858,
    "benchmark": 53,
    "samples": 2080,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3591/C300-CTFDDAC128MAG"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDCR60GB-DX",
    "brand": "Mushkin",
    "model": "Chronos Deluxe 60GB",
    "rank": 859,
    "benchmark": 52.9,
    "samples": 90,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5641/MKNSSDCR60GB-DX"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F120GBLS",
    "brand": "Corsair",
    "model": "Force LS 120GB",
    "rank": 860,
    "benchmark": 52.8,
    "samples": 8991,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5526/Corsair-Force-LS-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Adata",
    "model": "XM11 128GB",
    "rank": 861,
    "benchmark": 52.7,
    "samples": 136,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6599/ADATA-XM11-128GB"
  },
  {
    "type": "SSD",
    "part_number": "AGT3-25SAT3-240G",
    "brand": "OCZ",
    "model": "Agility 3 240GB",
    "rank": 862,
    "benchmark": 52.6,
    "samples": 8961,
    "url": "https://ssd.userbenchmark.com/OCZ-Agility-3-240GB/Rating/369"
  },
  {
    "type": "SSD",
    "part_number": "SV300S37A/480G",
    "brand": "Kingston",
    "model": "SSDNow V300 480GB",
    "rank": 863,
    "benchmark": 52.4,
    "samples": 12669,
    "url": "https://ssd.userbenchmark.com/Kingston-SSDNow-V300-480GB/Rating/3480"
  },
  {
    "type": "SSD",
    "part_number": "SD6SF1M-064G-1022",
    "brand": "SanDisk",
    "model": "X110 mSATA 64GB",
    "rank": 864,
    "benchmark": 52.3,
    "samples": 24,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15608/SanDisk-SD6SF1M064G1022"
  },
  {
    "type": "SSD",
    "part_number": "WDS240G1G0B",
    "brand": "WD",
    "model": "Green SATA M.2 240GB",
    "rank": 865,
    "benchmark": 51.8,
    "samples": 4682,
    "url": "https://ssd.userbenchmark.com/SpeedTest/211712/WDC-WDS240G1G0B-00RC30"
  },
  {
    "type": "SSD",
    "part_number": "SSD9SC240GMDA-RB",
    "brand": "PNY",
    "model": "XLR8 240GB",
    "rank": 866,
    "benchmark": 51.8,
    "samples": 505,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4356/SSD2SC240GC2DH16T-T"
  },
  {
    "type": "SSD",
    "part_number": "SSD2SC240GC2DH16T",
    "brand": "PNY",
    "model": "XLR8 240GB",
    "rank": 866,
    "benchmark": 51.8,
    "samples": 505,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4356/SSD2SC240GC2DH16T-T"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZNTD128HAGM-00000 128GB",
    "rank": 867,
    "benchmark": 51.8,
    "samples": 733,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4106/SAMSUNG-MZNTD128HAGM-00000"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F240GB3-BK",
    "brand": "Corsair",
    "model": "Force 3 240GB",
    "rank": 868,
    "benchmark": 51.8,
    "samples": 5469,
    "url": "https://ssd.userbenchmark.com/Corsair-Force-3-240GB/Rating/1454"
  },
  {
    "type": "SSD",
    "part_number": "MTFDDAT256MAM-1K2",
    "brand": "Micron",
    "model": "C400 RealSSD mSATA 256GB",
    "rank": 869,
    "benchmark": 51.7,
    "samples": 438,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4639/MTFDDAT256MAM-1K2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMS-32L6M mSATA 32GB",
    "rank": 870,
    "benchmark": 51.6,
    "samples": 259,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5079/LITEONIT-LMS-32L6M-mSATA-32GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC120G3LC726B104-370P 120GB",
    "rank": 871,
    "benchmark": 51.1,
    "samples": 61,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8341/SSD2SC120G3LC726B104-370P"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Adata",
    "model": "XM11 128GB",
    "rank": 872,
    "benchmark": 50.7,
    "samples": 158,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8415/ADATA-XM11-128GB"
  },
  {
    "type": "SSD",
    "part_number": "TS64GSSD340",
    "brand": "Transcend",
    "model": "SSD340 64GB",
    "rank": 873,
    "benchmark": 50.6,
    "samples": 189,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10576/TS64GSSD-340"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM830 mSATA 64GB",
    "rank": 874,
    "benchmark": 50.5,
    "samples": 239,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4586/SAMSUNG-SSD-PM830-mSATA-64GB"
  },
  {
    "type": "SSD",
    "part_number": "SV300S37A/60G",
    "brand": "Kingston",
    "model": "SSDNow V300 60GB",
    "rank": 875,
    "benchmark": 49.7,
    "samples": 22173,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1905/KINGSTON-SV300S37A60G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LAT-256M2S 256GB",
    "rank": 876,
    "benchmark": 49.4,
    "samples": 486,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8201/LITEONIT-LAT-256M2S"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDCR480GB",
    "brand": "Mushkin",
    "model": "Chronos 480GB",
    "rank": 877,
    "benchmark": 49.3,
    "samples": 214,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2434/MKNSSDCR480GB"
  },
  {
    "type": "SSD",
    "part_number": "MTFDDAT128MAM-1J2",
    "brand": "Micron",
    "model": "C400 RealSSD mSATA 128GB",
    "rank": 878,
    "benchmark": 49.2,
    "samples": 594,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6355/MTFDDAT128MAM-1J2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMPC064HBDR-000L1 64GB",
    "rank": 879,
    "benchmark": 48.8,
    "samples": 99,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5687/SAMSUNG-MZMPC064HBDR-000L1"
  },
  {
    "type": "SSD",
    "part_number": "PB120GS25SSDR",
    "brand": "Patriot",
    "model": "Blaze 120GB",
    "rank": 880,
    "benchmark": 48.8,
    "samples": 2073,
    "url": "https://ssd.userbenchmark.com/SpeedTest/16087/Patriot-Blaze-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "OCTANE 128GB",
    "rank": 881,
    "benchmark": 48.7,
    "samples": 307,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5496/OCZ-OCTANE"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMTD128HAFV-000L1 128GB",
    "rank": 882,
    "benchmark": 48.5,
    "samples": 1824,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3377/SAMSUNG-MZMTD128HAFV-000L1"
  },
  {
    "type": "SSD",
    "part_number": "AGT3-25SAT3-120G",
    "brand": "OCZ",
    "model": "Agility 3 120GB",
    "rank": 883,
    "benchmark": 48.2,
    "samples": 33790,
    "url": "https://ssd.userbenchmark.com/OCZ-Agility-3-120GB/Rating/2262"
  },
  {
    "type": "SSD",
    "part_number": "AS511S3-60GM-C",
    "brand": "Adata",
    "model": "S511 60GB",
    "rank": 884,
    "benchmark": 47.9,
    "samples": 21,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5776/ADATA-SS-D-S511-60GB"
  },
  {
    "type": "SSD",
    "part_number": "PT60GS25SSDR",
    "brand": "Patriot",
    "model": "Torch 60GB",
    "rank": 885,
    "benchmark": 47.5,
    "samples": 131,
    "url": "https://ssd.userbenchmark.com/SpeedTest/24101/Patriot-Torch"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F120GB3-BK",
    "brand": "Corsair",
    "model": "Force 3 120GB",
    "rank": 886,
    "benchmark": 47.4,
    "samples": 17765,
    "url": "https://ssd.userbenchmark.com/Corsair-Force-3-120GB/Rating/2243"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "SOLID3 120GB",
    "rank": 887,
    "benchmark": 47.3,
    "samples": 1386,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1435/OCZ-SOLID3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Crucial",
    "model": "C300-CTFDDAC128M 128GB",
    "rank": 888,
    "benchmark": 47.2,
    "samples": 284,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2610/C300-CTFDDAC128M"
  },
  {
    "type": "SSD",
    "part_number": "SSDSA2BZ300G3",
    "brand": "Intel",
    "model": "710 Series 300GB",
    "rank": 889,
    "benchmark": 47.1,
    "samples": 47,
    "url": "https://ssd.userbenchmark.com/SpeedTest/17911/INTEL-SSDSA2BZ300G3S"
  },
  {
    "type": "SSD",
    "part_number": "TS128GSSD320",
    "brand": "Transcend",
    "model": "SSD320 128GB",
    "rank": 890,
    "benchmark": 46.9,
    "samples": 1435,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5322/TS128GSSD320"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Plextor",
    "model": "PX-128M2S 128GB",
    "rank": 891,
    "benchmark": 46.8,
    "samples": 179,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5774/PLEXTOR--PX-128M2S"
  },
  {
    "type": "SSD",
    "part_number": "TS64GMSA720",
    "brand": "Transcend",
    "model": "MSA720 mSATA 64GB",
    "rank": 892,
    "benchmark": 46.6,
    "samples": 7,
    "url": "https://ssd.userbenchmark.com/SpeedTest/16849/TS64GMSA720"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Intel",
    "model": "SSDSCIHF120A4H 120GB",
    "rank": 893,
    "benchmark": 46.2,
    "samples": 189,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12016/INTEL-SSDSCIHF120A4H"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F180GB3-BK",
    "brand": "Corsair",
    "model": "Force 3 180GB",
    "rank": 894,
    "benchmark": 46.2,
    "samples": 1148,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3275/Corsair-Force-3-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Crucial",
    "model": "C300-CTFDDAC064MAG 64GB",
    "rank": 895,
    "benchmark": 46,
    "samples": 1323,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3513/C300-CTFDDAC064MAG"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LSS-24L6G 24GB",
    "rank": 896,
    "benchmark": 46,
    "samples": 194,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1985/LITEONIT-LSS-24L6G"
  },
  {
    "type": "SSD",
    "part_number": "SSDSA2CW300G3",
    "brand": "Intel",
    "model": "320 Series 300GB",
    "rank": 897,
    "benchmark": 45.9,
    "samples": 1641,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3362/INTEL-SSDSA2CW300G3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LMT-32L3M 32GB",
    "rank": 898,
    "benchmark": 45.9,
    "samples": 249,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2902/LITEONIT-LMT-32L3M"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC120G726A104-475-27796 120GB",
    "rank": 899,
    "benchmark": 45.8,
    "samples": 228,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5173/SSD2SC120G726A104-475-27796"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "AGILITY3 128GB",
    "rank": 900,
    "benchmark": 45.6,
    "samples": 482,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5791/OCZ-AGILITY3"
  },
  {
    "type": "SSD",
    "part_number": "WDS240G2G0A",
    "brand": "WD",
    "model": "Green 240GB (2018)",
    "rank": 901,
    "benchmark": 45.4,
    "samples": 116459,
    "url": "https://ssd.userbenchmark.com/SpeedTest/377351/WDC-WDS240G2G0A-00JH30"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F90GB3-BK",
    "brand": "Corsair",
    "model": "Force 3 90GB",
    "rank": 902,
    "benchmark": 45.3,
    "samples": 1719,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4312/Corsair-Force-3-SSD"
  },
  {
    "type": "SSD",
    "part_number": "PB60GS25SSDR",
    "brand": "Patriot",
    "model": "Blaze 60GB",
    "rank": 903,
    "benchmark": 45.2,
    "samples": 596,
    "url": "https://ssd.userbenchmark.com/SpeedTest/18273/Patriot-Blaze"
  },
  {
    "type": "SSD",
    "part_number": "PT120GS25SSDR",
    "brand": "Patriot",
    "model": "Torch 120GB",
    "rank": 904,
    "benchmark": 44.9,
    "samples": 125,
    "url": "https://ssd.userbenchmark.com/SpeedTest/24105/Patriot-Torch"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Liteonit",
    "model": "LAT-128M2S 128GB",
    "rank": 905,
    "benchmark": 44.7,
    "samples": 408,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3797/LITEONIT-LAT-128M2S"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "AGILITY4 64GB",
    "rank": 906,
    "benchmark": 44.5,
    "samples": 350,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5686/OCZ-AGILITY4"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "SiImage 50GB",
    "rank": 907,
    "benchmark": 44.2,
    "samples": 43,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5297/SiImage"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "AGILITY3 90GB",
    "rank": 908,
    "benchmark": 44.1,
    "samples": 1138,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2120/OCZ-AGILITY3"
  },
  {
    "type": "SSD",
    "part_number": "C400-MTFDDAT064MAM",
    "brand": "Micron",
    "model": "C400 RealSSD mSATA 64GB",
    "rank": 909,
    "benchmark": 44,
    "samples": 196,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6723/C400-MTFDDAT064MAM"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDCL120GB-DX",
    "brand": "Mushkin",
    "model": "Callisto Deluxe 120GB",
    "rank": 910,
    "benchmark": 43.9,
    "samples": 99,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4237/MKNSSDCL120GB-DX"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "FM-25S3-120GBP3 120GB",
    "rank": 911,
    "benchmark": 43.9,
    "samples": 394,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8614/FM-25S3-120GBP3"
  },
  {
    "type": "SSD",
    "part_number": "SSDSA2BZ200G3",
    "brand": "Intel",
    "model": "710 Series 200GB",
    "rank": 912,
    "benchmark": 43.7,
    "samples": 76,
    "url": "https://ssd.userbenchmark.com/SpeedTest/25022/INTEL-SSDSA2BZ200G3"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F120GB2",
    "brand": "Corsair",
    "model": "Force 120GB",
    "rank": 913,
    "benchmark": 43.6,
    "samples": 1775,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1321/Corsair-CSSD-F120GB2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Ocz-vertex2",
    "model": "3.5 120GB",
    "rank": 914,
    "benchmark": 43.2,
    "samples": 3200,
    "url": "https://ssd.userbenchmark.com/SpeedTest/736/OCZ-VERTEX2-35"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F60GB3-BK",
    "brand": "Corsair",
    "model": "Force 3 60GB",
    "rank": 915,
    "benchmark": 43,
    "samples": 3710,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2139/Corsair-Force-3-SSD"
  },
  {
    "type": "SSD",
    "part_number": "SV200S3256G",
    "brand": "Kingston",
    "model": "SSDNow V Series 256GB",
    "rank": 916,
    "benchmark": 43,
    "samples": 46,
    "url": "https://ssd.userbenchmark.com/SpeedTest/110/KINGSTON-SV200S3256G"
  },
  {
    "type": "SSD",
    "part_number": "WDS120G2G0A",
    "brand": "WD",
    "model": "Green 120GB (2018)",
    "rank": 917,
    "benchmark": 42.9,
    "samples": 53256,
    "url": "https://ssd.userbenchmark.com/SpeedTest/411798/WDC-WDS120G2G0A-00JH"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "AGILITY3 180GB",
    "rank": 918,
    "benchmark": 42.8,
    "samples": 379,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1341/OCZ-AGILITY3"
  },
  {
    "type": "SSD",
    "part_number": "PI240GS25SSDR",
    "brand": "Patriot",
    "model": "Inferno 240GB",
    "rank": 919,
    "benchmark": 42.8,
    "samples": 21,
    "url": "https://ssd.userbenchmark.com/SpeedTest/21776/Patriot-Inferno-240GB-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Adata",
    "model": "SX300 64GB",
    "rank": 920,
    "benchmark": 42.8,
    "samples": 63,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3295/ADATA-SX300"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "470 Series SSD 128GB",
    "rank": 921,
    "benchmark": 41.7,
    "samples": 782,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4655/SAMSUNG-470-Series-SSD"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDP-256G-G25",
    "brand": "SanDisk",
    "model": "SSD 256GB",
    "rank": 922,
    "benchmark": 41.4,
    "samples": 1856,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1151/SanDisk-SDSSDP256G"
  },
  {
    "type": "SSD",
    "part_number": "SSDSA2BZ100G3",
    "brand": "Intel",
    "model": "710 Series 100GB",
    "rank": 923,
    "benchmark": 41.1,
    "samples": 245,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9161/INTEL-SSDSA2BZ100G3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM830 mSATA 32GB",
    "rank": 924,
    "benchmark": 41,
    "samples": 800,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2575/SAMSUNG-SSD-PM830-mSATA-32GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "AGILITY3 60GB",
    "rank": 925,
    "benchmark": 40.9,
    "samples": 11740,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1654/OCZ-AGILITY3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "SOLID3 60GB",
    "rank": 926,
    "benchmark": 40.9,
    "samples": 1032,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3568/OCZ-SOLID3"
  },
  {
    "type": "SSD",
    "part_number": "SSDSA2CW160G3",
    "brand": "Intel",
    "model": "320 Series 160GB",
    "rank": 927,
    "benchmark": 40.8,
    "samples": 12771,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1192/INTEL-SSDSA2CW160G3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Intel",
    "model": "SSDSA2VP020G2 20GB",
    "rank": 928,
    "benchmark": 40.6,
    "samples": 31,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12923/INTEL-SSDSA2VP020G2"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDP-128G-G25",
    "brand": "SanDisk",
    "model": "SSD 128GB",
    "rank": 929,
    "benchmark": 40.6,
    "samples": 7423,
    "url": "https://ssd.userbenchmark.com/SpeedTest/330/SanDisk-SDSSDP128G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "SandForce[290900] 240GB",
    "rank": 930,
    "benchmark": 40.4,
    "samples": 10,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3886/SandForce-290900-"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Ocz-vertex2",
    "model": "3.5 240GB",
    "rank": 931,
    "benchmark": 40.4,
    "samples": 118,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5514/OCZ-VERTEX2-35"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC240G3LC709B121-460P 240GB",
    "rank": 932,
    "benchmark": 40.3,
    "samples": 397,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10292/SSD2SC240G3LC709B121-460P"
  },
  {
    "type": "SSD",
    "part_number": "SSDSA2CW120G3",
    "brand": "Intel",
    "model": "320 Series 120GB",
    "rank": 933,
    "benchmark": 40.3,
    "samples": 8039,
    "url": "https://ssd.userbenchmark.com/Intel-320-Series-120GB/Rating/1936"
  },
  {
    "type": "SSD",
    "part_number": "SVP200S390G",
    "brand": "Kingston",
    "model": "SSDNow V+200 Series 90GB",
    "rank": 934,
    "benchmark": 40.2,
    "samples": 619,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3742/KINGSTON-SVP200S390G"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F60GB2",
    "brand": "Corsair",
    "model": "Force 60GB",
    "rank": 935,
    "benchmark": 39.8,
    "samples": 1273,
    "url": "https://ssd.userbenchmark.com/SpeedTest/301/Corsair-CSSD-F60GB2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZ7PA128HMCD-010 128GB",
    "rank": 936,
    "benchmark": 39.6,
    "samples": 2772,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3873/SAMSUNG-MZ7PA128HMCD-010"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM810 2.5\" 7mm 128GB",
    "rank": 937,
    "benchmark": 39.1,
    "samples": 3503,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6796/SAMSUNG-SSD-PM810-25--7mm-128GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMPC032HBCD-000L1 32GB",
    "rank": 938,
    "benchmark": 39,
    "samples": 512,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1737/SAMSUNG-MZMPC032HBCD-000L1"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC240G3LC709B104-495 240GB",
    "rank": 939,
    "benchmark": 38.9,
    "samples": 24,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10642/SSD2SC240G3LC709B104-495"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Ocz-vertex2",
    "model": "3.5 115GB",
    "rank": 940,
    "benchmark": 38.8,
    "samples": 2225,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3209/OCZ-VERTEX2-35"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "FM-25S2S-120GBP2 120GB",
    "rank": 941,
    "benchmark": 38.8,
    "samples": 293,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3396/FM-25S2S-120GBP2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Adata",
    "model": "S510 60GB",
    "rank": 942,
    "benchmark": 38.6,
    "samples": 449,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5619/ADATA-SSD-S510-60GB"
  },
  {
    "type": "SSD",
    "part_number": "SSDSA2CW080G3",
    "brand": "Intel",
    "model": "320 Series 80GB",
    "rank": 943,
    "benchmark": 38.3,
    "samples": 4042,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2723/INTEL-SSDSA2CW080G3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Crucial",
    "model": "MTFDBAK128MAG-1G1 128GB",
    "rank": 944,
    "benchmark": 38.2,
    "samples": 903,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1244/MTFDBAK128MAG-1G1"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Kingston",
    "model": "SVP100S2128G 128GB",
    "rank": 945,
    "benchmark": 38,
    "samples": 534,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2509/KINGSTON-SVP100S2128G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Corsair",
    "model": "Performance3 SSD 64GB",
    "rank": 946,
    "benchmark": 38,
    "samples": 16,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5387/Corsair-Performance3-SSD"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDP-064G-G25",
    "brand": "SanDisk",
    "model": "SSD 64GB",
    "rank": 947,
    "benchmark": 37.9,
    "samples": 2793,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1471/SanDisk-SDSSDP064G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Apple",
    "model": "TS256C 251GB",
    "rank": 948,
    "benchmark": 37.7,
    "samples": 522,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1701/APPLE-SSD-TS256C"
  },
  {
    "type": "SSD",
    "part_number": "PP60GS25SSDR",
    "brand": "Patriot",
    "model": "Pyro 60GB",
    "rank": 949,
    "benchmark": 37.4,
    "samples": 573,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3406/Patriot-Pyro"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Kingston",
    "model": "SVP100S264G 64GB",
    "rank": 950,
    "benchmark": 37.3,
    "samples": 258,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3007/KINGSTON-SVP100S264G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "FM-25S2S-60GBP2 60GB",
    "rank": 951,
    "benchmark": 37.2,
    "samples": 189,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6020/FM-25S2S-60GBP2"
  },
  {
    "type": "SSD",
    "part_number": "SDSA6GM-128G-1122",
    "brand": "SanDisk",
    "model": "U110 128GB",
    "rank": 952,
    "benchmark": 37.1,
    "samples": 1004,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11039/SanDisk-SSD-U110-128GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Team",
    "model": "XS2 SSD 60GB",
    "rank": 953,
    "benchmark": 37,
    "samples": 58,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9202/TEAM-XS2-SSD"
  },
  {
    "type": "SSD",
    "part_number": "SDSSDH120GG25",
    "brand": "SanDisk",
    "model": "Ultra 120GB",
    "rank": 954,
    "benchmark": 37,
    "samples": 528,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2141/SanDisk-SDSSDH120GG25"
  },
  {
    "type": "SSD",
    "part_number": "MKNSSDCL60GB-DX",
    "brand": "Mushkin",
    "model": "Callisto Deluxe 60GB",
    "rank": 955,
    "benchmark": 36.8,
    "samples": 226,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9311/Mushkin-MKNSSDCL60GB-DX"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM81 128GB",
    "rank": 956,
    "benchmark": 36.5,
    "samples": 60,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1277/SAMSUNG-SSD-PM81"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX2 100GB",
    "rank": 957,
    "benchmark": 36.4,
    "samples": 607,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2400/OCZ-VERTEX2"
  },
  {
    "type": "SSD",
    "part_number": "SSDSA2M160G2GC",
    "brand": "Intel",
    "model": "X25-M 160GB",
    "rank": 958,
    "benchmark": 36.4,
    "samples": 7074,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2803/INTEL-SSDSA2M160G2GC"
  },
  {
    "type": "SSD",
    "part_number": "SSDMCEAC030B301",
    "brand": "Intel",
    "model": "525 Series mSATA 30GB",
    "rank": 959,
    "benchmark": 36.3,
    "samples": 46,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1644/INTEL-SSDMCEAC030B3"
  },
  {
    "type": "SSD",
    "part_number": "SSDSA2M120G2GC",
    "brand": "Intel",
    "model": "X25-M 120GB",
    "rank": 960,
    "benchmark": 36.1,
    "samples": 1253,
    "url": "https://ssd.userbenchmark.com/SpeedTest/993/INTEL-SSDSA2M120G2GC"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "SC032G 32GB",
    "rank": 961,
    "benchmark": 36,
    "samples": 486,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9220/SanDisk-SDSSDRC032G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "U100 256GB",
    "rank": 962,
    "benchmark": 36,
    "samples": 404,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6688/SanDisk-SSD-U100-256GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "U100 128GB",
    "rank": 963,
    "benchmark": 35.9,
    "samples": 2018,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2827/SanDisk-SSD-U100-128GB"
  },
  {
    "type": "SSD",
    "part_number": "PI100GS25SSDR",
    "brand": "Patriot",
    "model": "Inferno 100GB",
    "rank": 964,
    "benchmark": 35.8,
    "samples": 15,
    "url": "https://ssd.userbenchmark.com/SpeedTest/22519/Patriot-Inferno-100GB-SSD"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F115GB2",
    "brand": "Corsair",
    "model": "Force 115GB",
    "rank": 965,
    "benchmark": 35.8,
    "samples": 209,
    "url": "https://ssd.userbenchmark.com/SpeedTest/455/Corsair-CSSD-F115GB2-A"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Corsair",
    "model": "CSSD-V128GB2 128GB",
    "rank": 966,
    "benchmark": 35.7,
    "samples": 198,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6077/Corsair-CSSD-V128GB2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "PNY",
    "model": "SSD2SC120G3LC709B121-460P 120GB",
    "rank": 967,
    "benchmark": 35.7,
    "samples": 483,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9690/SSD2SC120G3LC709B121-460P"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "AGILITY2 115GB",
    "rank": 968,
    "benchmark": 35.7,
    "samples": 209,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4561/OCZ-AGILITY2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX2 60GB",
    "rank": 969,
    "benchmark": 35.6,
    "samples": 4545,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1338/OCZ-VERTEX2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNS512GG8BBAA 512GB",
    "rank": 970,
    "benchmark": 35.3,
    "samples": 83,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5630/TOSHIBA-THNS512GG8BBAA"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "U100 64GB",
    "rank": 971,
    "benchmark": 35.2,
    "samples": 330,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1019/SanDisk-SSD-U100-64GB"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F480GB3-BK",
    "brand": "Corsair",
    "model": "Force 3 480GB",
    "rank": 972,
    "benchmark": 35.2,
    "samples": 160,
    "url": "https://ssd.userbenchmark.com/SpeedTest/16050/Corsair-Force-3-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "CRUCIAL-CT28M225 128GB",
    "rank": 973,
    "benchmark": 35.1,
    "samples": 10,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6964/CRUCIAL-CT28M225"
  },
  {
    "type": "SSD",
    "part_number": "PI60GS25SSDR",
    "brand": "Patriot",
    "model": "Inferno 60GB",
    "rank": 974,
    "benchmark": 35.1,
    "samples": 148,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2811/Patriot-Inferno-60GB-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Ocz-vertex2",
    "model": "3.5 180GB",
    "rank": 975,
    "benchmark": 34.8,
    "samples": 129,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2608/OCZ-VERTEX2-35"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Ocz-vertex2",
    "model": "3.5 90GB",
    "rank": 976,
    "benchmark": 34.7,
    "samples": 589,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2397/OCZ-VERTEX2-35"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "U100 252GB",
    "rank": 977,
    "benchmark": 34.6,
    "samples": 163,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7207/SanDisk-SSD-U100-252GB"
  },
  {
    "type": "SSD",
    "part_number": "SSDSA2M080G2GC",
    "brand": "Intel",
    "model": "X25-M 80GB",
    "rank": 978,
    "benchmark": 34.4,
    "samples": 9413,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1145/INTEL-SSDSA2M080G2GC"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "AGILITY3 480GB",
    "rank": 979,
    "benchmark": 34.2,
    "samples": 683,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5217/OCZ-AGILITY3"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM810 mSATA 128GB",
    "rank": 980,
    "benchmark": 34.2,
    "samples": 325,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10016/SAMSUNG-SSD-PM810-mSATA-128GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX2 160GB",
    "rank": 981,
    "benchmark": 34.1,
    "samples": 94,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8902/OCZ-VERTEX2"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-F40GB2",
    "brand": "Corsair",
    "model": "Force 40GB",
    "rank": 982,
    "benchmark": 34,
    "samples": 331,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7389/Corsair-CSSD-F40GB2-A"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "470 Series SSD 64GB",
    "rank": 983,
    "benchmark": 33.6,
    "samples": 730,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7582/SAMSUNG-470-Series-SSD"
  },
  {
    "type": "SSD",
    "part_number": "SNV325S2",
    "brand": "Kingston",
    "model": "SSDNow V+ Series 128GB",
    "rank": 984,
    "benchmark": 33.4,
    "samples": 551,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7304/KINGSTON-SNV325S2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX2 50GB",
    "rank": 985,
    "benchmark": 33.3,
    "samples": 281,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3237/OCZ-VERTEX2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "U100 124GB",
    "rank": 986,
    "benchmark": 32.8,
    "samples": 230,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6235/SanDisk-SSD-U100-124GB"
  },
  {
    "type": "SSD",
    "part_number": "SNVP325S264GB",
    "brand": "Kingston",
    "model": "SSDNow V+ Series 64GB",
    "rank": 987,
    "benchmark": 32.6,
    "samples": 500,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2589/KINGSTON-SNVP325S264GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Corsair",
    "model": "CSSD-F80GBP2 90GB",
    "rank": 988,
    "benchmark": 32.4,
    "samples": 141,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7896/Corsair-CSSD-F80GBP2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMPA128HMFU-000H1 128GB",
    "rank": 989,
    "benchmark": 31.9,
    "samples": 820,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4995/SAMSUNG-MZMPA128HMFU-000H1"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "U100 SMG2 126GB",
    "rank": 990,
    "benchmark": 31.7,
    "samples": 291,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2375/SanDisk-SSD-U100-SMG2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNS128GG4BBAA 128GB",
    "rank": 991,
    "benchmark": 31.5,
    "samples": 388,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3481/TOSHIBA-THNS128GG4BBAA"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX PLUS 120GB",
    "rank": 992,
    "benchmark": 31.3,
    "samples": 704,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5805/OCZ-VERTEX-PLUS"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX 128GB",
    "rank": 993,
    "benchmark": 31.1,
    "samples": 455,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2560/OCZ-VERTEX"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "U100 24GB",
    "rank": 994,
    "benchmark": 31,
    "samples": 1188,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3926/SanDisk-SSD-U100-24GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Intel",
    "model": "SSDSA2CT040G3 40GB",
    "rank": 995,
    "benchmark": 31,
    "samples": 1502,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5899/INTEL-SSDSA2CT040G3"
  },
  {
    "type": "SSD",
    "part_number": "NOC-MSATA-60G",
    "brand": "OCZ",
    "model": "Nocti Series mSATA 60GB",
    "rank": 996,
    "benchmark": 30.9,
    "samples": 57,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4546/OCZ-NOCTI"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "U110 24GB",
    "rank": 997,
    "benchmark": 30.6,
    "samples": 3,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11223/SanDisk-SSD-U110-24GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX-PLUS 120GB",
    "rank": 998,
    "benchmark": 30.6,
    "samples": 261,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4685/OCZ-VERTEX-PLUS"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-V60GB2A",
    "brand": "Corsair",
    "model": "Nova 2 60GB",
    "rank": 999,
    "benchmark": 30.5,
    "samples": 149,
    "url": "https://ssd.userbenchmark.com/SpeedTest/8360/Corsair-Nova-2-SSD"
  },
  {
    "type": "SSD",
    "part_number": "SSDSA1M160G2HP",
    "brand": "Intel",
    "model": "X18-M 160GB",
    "rank": 1000,
    "benchmark": 30.3,
    "samples": 406,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3864/INTEL-SSDSA1M160G2HP"
  },
  {
    "type": "SSD",
    "part_number": "SV200S3128G",
    "brand": "Kingston",
    "model": "SSDNow V Series 128GB",
    "rank": 1001,
    "benchmark": 30.1,
    "samples": 195,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2473/KINGSTON-SV200S3128G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNS064GG2BNAA 64GB",
    "rank": 1002,
    "benchmark": 30,
    "samples": 34,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6726/TOSHIBA-THNS064GG2BNAA"
  },
  {
    "type": "SSD",
    "part_number": "SSDSA2M040G2GC",
    "brand": "Intel",
    "model": "X25-M 40GB",
    "rank": 1003,
    "benchmark": 29.8,
    "samples": 1668,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5085/INTEL-SSDSA2M040G2GC"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMPA064HMDR-000 64GB",
    "rank": 1004,
    "benchmark": 29.2,
    "samples": 25,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5090/SAMSUNG-MZMPA064HMDR-000"
  },
  {
    "type": "SSD",
    "part_number": "SV200S364G",
    "brand": "Kingston",
    "model": "SSDNow V Series 64GB",
    "rank": 1005,
    "benchmark": 29,
    "samples": 1109,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3816/KINGSTON-SV200S364G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Patriot",
    "model": "Torqx 2 64GB SSD",
    "rank": 1006,
    "benchmark": 28.8,
    "samples": 305,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5143/Patriot-Torqx-2-64GB-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX2 80GB",
    "rank": 1007,
    "benchmark": 28.6,
    "samples": 207,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4175/OCZ-VERTEX2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Corsair",
    "model": "CSSD-V64GB2 64GB",
    "rank": 1008,
    "benchmark": 28.5,
    "samples": 203,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5429/Corsair-CSSD-V64GB2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNS128GG4BAAA-NonFDE 128GB",
    "rank": 1009,
    "benchmark": 28.1,
    "samples": 346,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5893/TOSHIBA-THNS128GG4BAAA-NonFDE"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "i100 24GB",
    "rank": 1010,
    "benchmark": 27.9,
    "samples": 800,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2946/SanDisk-SSD-i100-24GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSNW128GMCP 128GB",
    "rank": 1011,
    "benchmark": 27.8,
    "samples": 91,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5430/Toshiba-THNSNW128GMCP"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "AGILITY3 360GB",
    "rank": 1012,
    "benchmark": 27.6,
    "samples": 187,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3757/OCZ-AGILITY3"
  },
  {
    "type": "SSD",
    "part_number": "V4-CT256V4SSD2",
    "brand": "Crucial",
    "model": "V4 256GB",
    "rank": 1013,
    "benchmark": 27.5,
    "samples": 193,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4100/V4-CT256V4SSD2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Patriot",
    "model": "Torqx 2 32GB SSD",
    "rank": 1014,
    "benchmark": 27.2,
    "samples": 158,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4330/Patriot-Torqx-2-32GB-SSD"
  },
  {
    "type": "SSD",
    "part_number": "NOC-MSATA-120G",
    "brand": "OCZ",
    "model": "Nocti Series mSATA 120GB",
    "rank": 1015,
    "benchmark": 26.9,
    "samples": 166,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2316/OCZ-NOCTI"
  },
  {
    "type": "SSD",
    "part_number": "V4-CT128V4SSD2",
    "brand": "Crucial",
    "model": "V4 128GB",
    "rank": 1016,
    "benchmark": 26.8,
    "samples": 195,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5400/V4-CT128V4SSD2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MMDOE56G5MXP-0VB 256GB",
    "rank": 1017,
    "benchmark": 26.7,
    "samples": 120,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2430/SAMSUNG-MMDOE56G5MXP-0VB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMPA032HMCD-000 32GB",
    "rank": 1018,
    "benchmark": 26.6,
    "samples": 18,
    "url": "https://ssd.userbenchmark.com/SpeedTest/13406/SAMSUNG-MZMPA032HMCD-000"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX-PLUS 60GB",
    "rank": 1019,
    "benchmark": 26.4,
    "samples": 700,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5101/OCZ-VERTEX-PLUS"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX-TURBO 32GB",
    "rank": 1020,
    "benchmark": 26.3,
    "samples": 60,
    "url": "https://ssd.userbenchmark.com/SpeedTest/10536/OCZ-VERTEX-TURBO"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "NOCTI 30GB",
    "rank": 1021,
    "benchmark": 26.1,
    "samples": 70,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6687/OCZ-NOCTI"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "VERTEX 64GB",
    "rank": 1022,
    "benchmark": 25.9,
    "samples": 514,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2798/OCZ-VERTEX"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Corsair",
    "model": "CMFSSD-64GBG2D 64GB",
    "rank": 1023,
    "benchmark": 25.6,
    "samples": 220,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1848/CORSAIR-CMFSSD-64GBG2D"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Corsair",
    "model": "CMFSSD-256GBG2D 256GB",
    "rank": 1024,
    "benchmark": 25.3,
    "samples": 158,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4873/CORSAIR-CMFSSD-256GBG2D"
  },
  {
    "type": "SSD",
    "part_number": "CSSD-V30GB2A",
    "brand": "Corsair",
    "model": "Nova 2 30GB",
    "rank": 1025,
    "benchmark": 25.2,
    "samples": 115,
    "url": "https://ssd.userbenchmark.com/SpeedTest/15718/Corsair-Nova-2-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "SUMMIT 128GB",
    "rank": 1026,
    "benchmark": 25.1,
    "samples": 59,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4737/OCZ-SUMMIT"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Kingston",
    "model": "SV100S2128G 128GB",
    "rank": 1027,
    "benchmark": 24.3,
    "samples": 970,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2099/KINGSTON-SV100S2128G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM800 Series 2.5\" 256GB",
    "rank": 1028,
    "benchmark": 24.2,
    "samples": 1053,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5330/SAMSUNG-SSD-PM800-Series-25--256GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MZMPA024HMCD-000L1 24GB",
    "rank": 1029,
    "benchmark": 23.8,
    "samples": 144,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12709/SAMSUNG-MZMPA024HMCD-000L1"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM800 2.5\" 128GB",
    "rank": 1030,
    "benchmark": 23.8,
    "samples": 1021,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4482/SAMSUNG-SSD-PM800-25--128GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "OCZ",
    "model": "PETROL 64GB",
    "rank": 1031,
    "benchmark": 23.8,
    "samples": 56,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9027/OCZ-PETROL"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "CSSD-V60GB2 60GB",
    "rank": 1032,
    "benchmark": 23.6,
    "samples": 135,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2886/CSSD-V60GB2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PB22-JS3 FDE 2.5\" 128GB",
    "rank": 1033,
    "benchmark": 23.4,
    "samples": 759,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4180/SAMSUNG-SSD-PB22-JS3-FDE-25--128GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PB22-JS3 FDE 2.5\" 256GB",
    "rank": 1034,
    "benchmark": 23.3,
    "samples": 211,
    "url": "https://ssd.userbenchmark.com/SpeedTest/4863/SAMSUNG-SSD-PB22-JS3-FDE-25--256GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Kingston",
    "model": "SV100S2 256GB",
    "rank": 1035,
    "benchmark": 22.9,
    "samples": 130,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3014/KINGSTON-SV100S2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Kingston",
    "model": "SMS100S232G 32GB",
    "rank": 1036,
    "benchmark": 22.6,
    "samples": 31,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7090/KINGSTON-SMS100S232G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Corsair",
    "model": "CMFSSD-128D1 128GB",
    "rank": 1037,
    "benchmark": 22.6,
    "samples": 83,
    "url": "https://ssd.userbenchmark.com/SpeedTest/1549/Corsair-CMFSSD-128D1"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Corsair",
    "model": "CSSD-V32GB2 32GB",
    "rank": 1038,
    "benchmark": 22.6,
    "samples": 113,
    "url": "https://ssd.userbenchmark.com/SpeedTest/13318/Corsair-CSSD-V32GB2"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "U100 16GB",
    "rank": 1039,
    "benchmark": 22.5,
    "samples": 402,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9035/SanDisk-SSD-U100-16GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MMCRE28G8MXP-0VBL1 128GB",
    "rank": 1040,
    "benchmark": 22.2,
    "samples": 508,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3630/SAMSUNG-MMCRE28G8MXP-0VBL1"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM800 TH 64GB",
    "rank": 1041,
    "benchmark": 22.1,
    "samples": 389,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7563/SAMSUNG-SSD-PM800-TH-64GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "i100 16GB",
    "rank": 1042,
    "benchmark": 21.6,
    "samples": 151,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6521/SanDisk-SSD-i100-16GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Kingston",
    "model": "SV100S264G 64GB",
    "rank": 1043,
    "benchmark": 21.2,
    "samples": 1711,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5192/KINGSTON-SV100S264G"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Transcend",
    "model": "TS128GSSD25S-M 128GB",
    "rank": 1044,
    "benchmark": 21,
    "samples": 318,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5489/TS128GSSD25S-M"
  },
  {
    "type": "SSD",
    "part_number": "SNV425S2128GB",
    "brand": "Kingston",
    "model": "SSDNow SNV Series 128GB",
    "rank": 1045,
    "benchmark": 20.3,
    "samples": 972,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3487/KINGSTON-SNV425S2128GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "PM800 mSATA 64GB",
    "rank": 1046,
    "benchmark": 19.4,
    "samples": 6,
    "url": "https://ssd.userbenchmark.com/SpeedTest/9744/SAMSUNG-SSD-PM800-mSATA"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MCG8GC 63GB",
    "rank": 1047,
    "benchmark": 18.7,
    "samples": 390,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2089/Samsung-MCG8GC"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Transcend",
    "model": "TS64GSSD25S-M 64GB",
    "rank": 1048,
    "benchmark": 18.4,
    "samples": 130,
    "url": "https://ssd.userbenchmark.com/SpeedTest/5160/TS64GSSD25S-M"
  },
  {
    "type": "SSD",
    "part_number": "SNV425S264GB",
    "brand": "Kingston",
    "model": "SSDNow SNV Series 64GB",
    "rank": 1049,
    "benchmark": 17.9,
    "samples": 1496,
    "url": "https://ssd.userbenchmark.com/SpeedTest/2043/KINGSTON-SNV425S264GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Patriot",
    "model": "Warp V2 64GB SSD",
    "rank": 1050,
    "benchmark": 17.5,
    "samples": 7,
    "url": "https://ssd.userbenchmark.com/SpeedTest/11678/Patriot-Warp-V2-64GB-SSD"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNSNB128GMCJ 128GB",
    "rank": 1051,
    "benchmark": 16.1,
    "samples": 529,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3691/TOSHIBA-THNSNB128GMCJ"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "RBX Series 128GB M",
    "rank": 1052,
    "benchmark": 15.9,
    "samples": 300,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6409/SAMSUNG-SSD-RBX-Series-128GB-M"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MMCQE28G8MUP-0VA 128GB",
    "rank": 1053,
    "benchmark": 14.4,
    "samples": 143,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6149/SAMSUNG-MMCQE28G8MUP-0VA"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Sandisk",
    "model": "iSSD P4 8GB",
    "rank": 1054,
    "benchmark": 13.2,
    "samples": 269,
    "url": "https://ssd.userbenchmark.com/SpeedTest/3309/SanDisk-iSSD-P4-8GB"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "OS 500GB",
    "rank": 1055,
    "benchmark": 9.75,
    "samples": 9,
    "url": "https://ssd.userbenchmark.com/SpeedTest/12673/OS"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "",
    "model": "HTS545050A7E380 500GB",
    "rank": 1056,
    "benchmark": 8.8,
    "samples": 154,
    "url": "https://ssd.userbenchmark.com/SpeedTest/7371/HTS545050A7E380"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Toshiba",
    "model": "THNS128GE8BBDC 128GB",
    "rank": 1057,
    "benchmark": 8.73,
    "samples": 54,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6170/TOSHIBA-THNS128GE8BBDC"
  },
  {
    "type": "SSD",
    "part_number": "",
    "brand": "Samsung",
    "model": "MBG4GC 31GB",
    "rank": 1058,
    "benchmark": 0,
    "samples": 0,
    "url": "https://ssd.userbenchmark.com/SpeedTest/6544/Samsung-MBG4GC"
  }
]

  const seedSsd = () => Ssd.bulkCreate(ssdData);

  module.exports = seedSsd;