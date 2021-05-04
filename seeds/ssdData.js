const Ssd = require('../models');

const ssdData = [
    {
      "Type": "SSD",
      "Part Number": "WDS200T1X0E",
      "Brand": "WD",
      "Model": "Black SN850 NVMe PCIe M.2 2TB",
      "Rank": 1,
      "Benchmark": 481,
      "Samples": 129,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1363185/WD-BLACK-SN850-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS100T1X0E",
      "Brand": "WD",
      "Model": "Black SN850 NVMe PCIe M.2 1TB",
      "Rank": 2,
      "Benchmark": 439,
      "Samples": 1260,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1348947/WD-BLACK-SN850-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPED1D280GASX",
      "Brand": "Intel",
      "Model": "900P Optane NVMe PCIe 280GB",
      "Rank": 3,
      "Benchmark": 436,
      "Samples": 2323,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/315555/INTEL-SSDPED1D280GA"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPE21D280GASX",
      "Brand": "Intel",
      "Model": "900P Optane NVMe PCIe 280GB",
      "Rank": 3,
      "Benchmark": 436,
      "Samples": 2323,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/315555/INTEL-SSDPED1D280GA"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPED1D960GAX1",
      "Brand": "Intel",
      "Model": "905P Optane NVMe PCIe 960GB",
      "Rank": 4,
      "Benchmark": 433,
      "Samples": 461,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/498903/INTEL-SSDPED1D960GAY"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V8P2T0B",
      "Brand": "Samsung",
      "Model": "980 Pro NVMe PCIe M.2 2TB",
      "Rank": 5,
      "Benchmark": 428,
      "Samples": 1830,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1454302/Samsung-SSD-980-PRO-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPED1D480GASX",
      "Brand": "Intel",
      "Model": "900P Optane NVMe PCIe 480GB",
      "Rank": 6,
      "Benchmark": 420,
      "Samples": 1439,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/375784/INTEL-SSDPED1D480GA"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPE21D480GASX",
      "Brand": "Intel",
      "Model": "900P Optane NVMe PCIe 480GB",
      "Rank": 6,
      "Benchmark": 420,
      "Samples": 1439,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/375784/INTEL-SSDPED1D480GA"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS500G1X0E",
      "Brand": "WD",
      "Model": "Black SN850 NVMe PCIe M.2 500GB",
      "Rank": 7,
      "Benchmark": 398,
      "Samples": 113,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1366573/WD-BLACK-SN850-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V8P1T0B",
      "Brand": "Samsung",
      "Model": "980 Pro NVMe PCIe M.2 1TB",
      "Rank": 8,
      "Benchmark": 395,
      "Samples": 25381,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1302577/Samsung-SSD-980-PRO-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "SB-ROCKET-NVMe4-2TB",
      "Brand": "Sabrent",
      "Model": "Rocket 4 NVMe PCIe M.2 2TB",
      "Rank": 9,
      "Benchmark": 380,
      "Samples": 4145,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/847932/Sabrent-ROCKET-40-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKNU020TZX1",
      "Brand": "Intel",
      "Model": "670p NVMe PCIe M.2 2TB",
      "Rank": 10,
      "Benchmark": 374,
      "Samples": 1,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1393067/INTEL-SSDPEKNU020TZ"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F2000GBMP600",
      "Brand": "Corsair",
      "Model": "Force MP600 NVMe PCIe M.2 2TB",
      "Rank": 11,
      "Benchmark": 362,
      "Samples": 5000,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/841469/Force-MP600"
    },
    {
      "Type": "SSD",
      "Part Number": "GP-ASM2NE6200TTTD",
      "Brand": "Gigabyte",
      "Model": "Aorus NVMe PCIe M.2 2TB",
      "Rank": 12,
      "Benchmark": 357,
      "Samples": 2758,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/844144/GIGABYTE-GP-ASM2NE6200TTTD"
    },
    {
      "Type": "SSD",
      "Part Number": "SB-ROCKET-NVMe4-1TB",
      "Brand": "Sabrent",
      "Model": "Rocket 4 NVMe PCIe M.2 1TB",
      "Rank": 13,
      "Benchmark": 340,
      "Samples": 33779,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/844208/Sabrent-ROCKET-40-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V8P500B",
      "Brand": "Samsung",
      "Model": "980 Pro NVMe PCIe M.2 500GB",
      "Rank": 14,
      "Benchmark": 337,
      "Samples": 12167,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1307906/Samsung-SSD-980-PRO-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "GP-ASM2NE6100TTTD",
      "Brand": "Gigabyte",
      "Model": "Aorus NVMe PCIe M.2 1TB",
      "Rank": 15,
      "Benchmark": 333,
      "Samples": 10078,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/842989/GIGABYTE-GP-ASM2NE6100TTTD"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7S2T0BW",
      "Brand": "Samsung",
      "Model": "970 Evo Plus NVMe PCIe M.2 2TB",
      "Rank": 16,
      "Benchmark": 332,
      "Samples": 30296,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/798635/Samsung-SSD-970-EVO-Plus-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7S2T0B/AM",
      "Brand": "Samsung",
      "Model": "970 Evo Plus NVMe PCIe M.2 2TB",
      "Rank": 16,
      "Benchmark": 332,
      "Samples": 30296,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/798635/Samsung-SSD-970-EVO-Plus-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F1000GBMP600",
      "Brand": "Corsair",
      "Model": "Force MP600 NVMe PCIe M.2 1TB",
      "Rank": 17,
      "Benchmark": 331,
      "Samples": 32826,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/843047/Force-MP600"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7P1T0BW",
      "Brand": "Samsung",
      "Model": "970 Pro NVMe PCIe M.2 1TB",
      "Rank": 18,
      "Benchmark": 329,
      "Samples": 33264,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/497261/Samsung-SSD-970-PRO-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7P512BW",
      "Brand": "Samsung",
      "Model": "970 Pro NVMe PCIe M.2 512GB",
      "Rank": 19,
      "Benchmark": 325,
      "Samples": 78696,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/498971/Samsung-SSD-970-PRO-512GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7S1T0BW",
      "Brand": "Samsung",
      "Model": "970 Evo Plus NVMe PCIe M.2 1TB",
      "Rank": 20,
      "Benchmark": 322,
      "Samples": 220277,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/693540/Samsung-SSD-970-EVO-Plus-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7S1T0B/AM",
      "Brand": "Samsung",
      "Model": "970 Evo Plus NVMe PCIe M.2 1TB",
      "Rank": 20,
      "Benchmark": 322,
      "Samples": 220277,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/693540/Samsung-SSD-970-EVO-Plus-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKNU010TZX1",
      "Brand": "Intel",
      "Model": "670p NVMe PCIe M.2 1TB",
      "Rank": 21,
      "Benchmark": 317,
      "Samples": 41,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1493432/INTEL-SSDPEKNU010TZ"
    },
    {
      "Type": "SSD",
      "Part Number": "5MS24AA#ABC",
      "Brand": "HP",
      "Model": "EX950 NVMe PCIe M.2 2TB",
      "Rank": 22,
      "Benchmark": 307,
      "Samples": 1763,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/710813/HP-SSD-EX950-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "CT2000P5SSD8",
      "Brand": "Crucial",
      "Model": "P5 3D NVMe PCIe M.2 2TB",
      "Rank": 23,
      "Benchmark": 304,
      "Samples": 799,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1232397/CT2000P5SSD8"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7E1T0BW",
      "Brand": "Samsung",
      "Model": "970 Evo NVMe PCIe M.2 1TB",
      "Rank": 24,
      "Benchmark": 301,
      "Samples": 242176,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/494791/Samsung-SSD-970-EVO-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "CT1000P5SSD8",
      "Brand": "Crucial",
      "Model": "P5 3D NVMe PCIe M.2 1TB",
      "Rank": 25,
      "Benchmark": 298,
      "Samples": 6334,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1217319/CT1000P5SSD8"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V8V1T0B",
      "Brand": "Samsung",
      "Model": "980 NVMe PCIe M.2 1TB",
      "Rank": 26,
      "Benchmark": 296,
      "Samples": 2026,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1488476/Samsung-SSD-980-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V8P250BW",
      "Brand": "Samsung",
      "Model": "980 Pro NVMe PCIe M.2 250GB",
      "Rank": 27,
      "Benchmark": 292,
      "Samples": 2399,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1311638/Samsung-SSD-980-PRO-250GB"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS100T3X0C",
      "Brand": "WD",
      "Model": "Black SN750 NVMe PCIe M.2 1TB (2019)",
      "Rank": 28,
      "Benchmark": 289,
      "Samples": 62781,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/703216/WDS100T3X0C-00SJG0"
    },
    {
      "Type": "SSD",
      "Part Number": "SB-ROCKET-NVMe4-500",
      "Brand": "Sabrent",
      "Model": "Rocket 4 NVMe PCIe M.2 500GB",
      "Rank": 29,
      "Benchmark": 289,
      "Samples": 7111,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/905105/Sabrent-Rocket-40-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7S500BW",
      "Brand": "Samsung",
      "Model": "970 Evo Plus NVMe PCIe M.2 500GB",
      "Rank": 30,
      "Benchmark": 288,
      "Samples": 289635,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/700020/Samsung-SSD-970-EVO-Plus-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7S500B/AM",
      "Brand": "Samsung",
      "Model": "970 Evo Plus NVMe PCIe M.2 500GB",
      "Rank": 30,
      "Benchmark": 288,
      "Samples": 289635,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/700020/Samsung-SSD-970-EVO-Plus-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "5MS23AA#ABC",
      "Brand": "HP",
      "Model": "EX950 NVMe PCIe M.2 1TB",
      "Rank": 31,
      "Benchmark": 285,
      "Samples": 3085,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/706053/HP-SSD-EX950-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7E2T0BW",
      "Brand": "Samsung",
      "Model": "970 Evo NVMe PCIe M.2 2TB",
      "Rank": 32,
      "Benchmark": 280,
      "Samples": 7986,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/501128/Samsung-SSD-970-EVO-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "2YY47AA#ABC",
      "Brand": "HP",
      "Model": "EX920 NVMe PCIe M.2 1TB",
      "Rank": 33,
      "Benchmark": 280,
      "Samples": 11394,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/488611/HP-SSD-EX920-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX8200PNP-1TT-C",
      "Brand": "Adata",
      "Model": "XPG SX8200 Pro NVMe PCIe M.2 1TB",
      "Rank": 34,
      "Benchmark": 279,
      "Samples": 60301,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/638791/ADATA-SX8200PNP"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V6P2T0BW",
      "Brand": "Samsung",
      "Model": "960 Pro NVMe PCIe M.2 2TB",
      "Rank": 35,
      "Benchmark": 277,
      "Samples": 3063,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/215493/Samsung-SSD-960-PRO-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDXPM2-1T00-G25",
      "Brand": "SanDisk",
      "Model": "Extreme Pro NVMe PCIe M.2 1TB (2018)",
      "Rank": 36,
      "Benchmark": 276,
      "Samples": 1907,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/493695/SanDisk-Extreme-Pro-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX8200PNP-2TT-C",
      "Brand": "Adata",
      "Model": "XPG SX8200 Pro NVMe PCIe M.2 2TB",
      "Rank": 37,
      "Benchmark": 276,
      "Samples": 290,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/892867/NVMe-ADATA-SX8200PNP"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V6P512BW",
      "Brand": "Samsung",
      "Model": "960 Pro NVMe PCIe M.2 512GB",
      "Rank": 38,
      "Benchmark": 275,
      "Samples": 56450,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/182182/Samsung-SSD-960-PRO-512GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V6P1T0BW",
      "Brand": "Samsung",
      "Model": "960 Pro NVMe PCIe M.2 1TB",
      "Rank": 39,
      "Benchmark": 273,
      "Samples": 14843,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/200815/Samsung-SSD-960-PRO-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEK1W120GA01",
      "Brand": "Intel",
      "Model": "800p NVMe PCIe M.2 118GB",
      "Rank": 40,
      "Benchmark": 273,
      "Samples": 107,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/489136/NVMe-INTEL-SSDPEK1W12"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS200T3X0C",
      "Brand": "WD",
      "Model": "Black SN750 NVMe PCIe M.2 2TB (2019)",
      "Rank": 41,
      "Benchmark": 271,
      "Samples": 2131,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/764887/WDS200T3X0C-00SJG0"
    },
    {
      "Type": "SSD",
      "Part Number": "CT500P5SSD8",
      "Brand": "Crucial",
      "Model": "P5 3D NVMe PCIe M.2 500GB",
      "Rank": 42,
      "Benchmark": 270,
      "Samples": 4435,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1213080/CT500P5SSD8"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7E500BW",
      "Brand": "Samsung",
      "Model": "970 Evo NVMe PCIe M.2 500GB",
      "Rank": 43,
      "Benchmark": 270,
      "Samples": 322036,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/493995/Samsung-SSD-970-EVO-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEK1W060GA01",
      "Brand": "Intel",
      "Model": "800p NVMe PCIe M.2 58GB",
      "Rank": 44,
      "Benchmark": 266,
      "Samples": 45,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/483445/NVMe-INTEL-SSDPEK1W06"
    },
    {
      "Type": "SSD",
      "Part Number": "5MS22AA#ABC",
      "Brand": "HP",
      "Model": "EX950 NVMe PCIe M.2 512GB",
      "Rank": 45,
      "Benchmark": 263,
      "Samples": 2037,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/705098/HP-SSD-EX950-512GB"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX8200NP-960GT-C",
      "Brand": "Adata",
      "Model": "XPG SX8200 NVMe PCIe M.2 960GB",
      "Rank": 46,
      "Benchmark": 262,
      "Samples": 2954,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/504709/ADATA-SX8200NP"
    },
    {
      "Type": "SSD",
      "Part Number": "ZP1000GM300",
      "Brand": "Seagate",
      "Model": "FireCuda 510 NVMe PCIe M.2 1TB",
      "Rank": 47,
      "Benchmark": 261,
      "Samples": 2021,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/819569/Seagate-FireCuda-510-SSD-ZP1000GM30001"
    },
    {
      "Type": "SSD",
      "Part Number": "CT2000P2SSD8",
      "Brand": "Crucial",
      "Model": "P2 3D NVMe PCIe M.2 2TB",
      "Rank": 48,
      "Benchmark": 251,
      "Samples": 489,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1332635/CT2000P2SSD8"
    },
    {
      "Type": "SSD",
      "Part Number": "ZP2000GM300",
      "Brand": "Seagate",
      "Model": "FireCuda 510 NVMe PCIe M.2 2TB",
      "Rank": 49,
      "Benchmark": 251,
      "Samples": 932,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/827002/Seagate-FireCuda-510-SSD-ZP2000GM30001"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS100T2X0C",
      "Brand": "WD",
      "Model": "Black NVMe PCIe M.2 1TB (2018)",
      "Rank": 50,
      "Benchmark": 248,
      "Samples": 5761,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/486281/WDS100T2X0C-00L350"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS500G3X0C",
      "Brand": "WD",
      "Model": "Black SN750 NVMe PCIe M.2 500GB (2019)",
      "Rank": 51,
      "Benchmark": 247,
      "Samples": 71307,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/701228/WDS500G3X0C-00SJG0"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V8V500B",
      "Brand": "Samsung",
      "Model": "980 NVMe PCIe M.2 500GB",
      "Rank": 52,
      "Benchmark": 246,
      "Samples": 665,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1488477/Samsung-SSD-980-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SB-ROCKET-4TB",
      "Brand": "Sabrent",
      "Model": "Rocket NVMe PCIe M.2 4TB",
      "Rank": 53,
      "Benchmark": 245,
      "Samples": 256,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/953820/Sabrent"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX8200PNP-512GT-C",
      "Brand": "Adata",
      "Model": "XPG SX8200 Pro NVMe PCIe M.2 512GB",
      "Rank": 54,
      "Benchmark": 244,
      "Samples": 57628,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/634807/ADATA-SX8200PNP"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V6E1T0BW",
      "Brand": "Samsung",
      "Model": "960 Evo NVMe PCIe M.2 1TB",
      "Rank": 55,
      "Benchmark": 243,
      "Samples": 34513,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/211052/Samsung-SSD-960-EVO-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7S250BW",
      "Brand": "Samsung",
      "Model": "970 Evo Plus NVMe PCIe M.2 250GB",
      "Rank": 56,
      "Benchmark": 242,
      "Samples": 68970,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/711305/Samsung-SSD-970-EVO-Plus-250GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7S250B/AM",
      "Brand": "Samsung",
      "Model": "970 Evo Plus NVMe PCIe M.2 250GB",
      "Rank": 56,
      "Benchmark": 242,
      "Samples": 68970,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/711305/Samsung-SSD-970-EVO-Plus-250GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDXPM2-500G-G25",
      "Brand": "SanDisk",
      "Model": "Extreme Pro NVMe PCIe M.2 500GB (2018)",
      "Rank": 57,
      "Benchmark": 240,
      "Samples": 3485,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/513270/SanDisk-Extreme-Pro-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "2YY46AA#ABC",
      "Brand": "HP",
      "Model": "EX920 NVMe PCIe M.2 512GB",
      "Rank": 58,
      "Benchmark": 240,
      "Samples": 6296,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/486240/HP-SSD-EX920-512GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SB-ROCKET-2TB",
      "Brand": "Sabrent",
      "Model": "Rocket NVMe PCIe M.2 2TB",
      "Rank": 59,
      "Benchmark": 239,
      "Samples": 6669,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/847986/NVMe-Sabrent"
    },
    {
      "Type": "SSD",
      "Part Number": "MZVLB1T0HALR",
      "Brand": "Samsung",
      "Model": "PM981 NVMe PCIe M.2 1TB",
      "Rank": 60,
      "Benchmark": 239,
      "Samples": 23339,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/413203/PM981-NVMe-Samsung-1024GB"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS100T2B0C",
      "Brand": "WD",
      "Model": "Blue SN550 NVMe PCIe M.2 1TB",
      "Rank": 61,
      "Benchmark": 237,
      "Samples": 79002,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/994217/WDC-WDS100T2B0C-00PXH0"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDPL500GB-D8",
      "Brand": "Mushkin",
      "Model": "Pilot NVMe PCIe M.2 500GB",
      "Rank": 62,
      "Benchmark": 237,
      "Samples": 2473,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/517228/MKNSSDPL500GB-D8"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F1920GBMP510",
      "Brand": "Corsair",
      "Model": "Force NVMe PCIe M.2 2TB",
      "Rank": 63,
      "Benchmark": 236,
      "Samples": 2308,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/633975/Force-MP510"
    },
    {
      "Type": "SSD",
      "Part Number": "MZVKW512HMJP-00000",
      "Brand": "Samsung",
      "Model": "SM961 NVMe PCIe M.2 512GB",
      "Rank": 64,
      "Benchmark": 235,
      "Samples": 16018,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/147864/NVMe-SAMSUNG-MZVKW512"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F960GBMP510",
      "Brand": "Corsair",
      "Model": "Force NVMe PCIe M.2 960GB",
      "Rank": 65,
      "Benchmark": 233,
      "Samples": 22885,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/609454/Force-MP510"
    },
    {
      "Type": "SSD",
      "Part Number": "CT250P5SSD8",
      "Brand": "Crucial",
      "Model": "P5 3D NVMe PCIe M.2 250GB",
      "Rank": 66,
      "Benchmark": 231,
      "Samples": 452,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1239408/CT250P5SSD8"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX8200NP-480GT-C",
      "Brand": "Adata",
      "Model": "XPG SX8200 NVMe PCIe M.2 480GB",
      "Rank": 67,
      "Benchmark": 231,
      "Samples": 13377,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/482768/ADATA-SX8200NP"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM961 NVMe PCIe M.2 1TB",
      "Rank": 68,
      "Benchmark": 231,
      "Samples": 5169,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/165378/NVMe-SAMSUNG-MZVLW1T0"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS500G2X0C",
      "Brand": "WD",
      "Model": "Black NVMe PCIe M.2 500GB (2018)",
      "Rank": 69,
      "Benchmark": 230,
      "Samples": 19255,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/485459/WDS500G2X0C-00L350"
    },
    {
      "Type": "SSD",
      "Part Number": "CT1000P1SSD8",
      "Brand": "Crucial",
      "Model": "P1 3D NVMe PCIe M.2 1TB",
      "Rank": 70,
      "Benchmark": 230,
      "Samples": 112087,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/607339/CT1000P1SSD8"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V7E250BW",
      "Brand": "Samsung",
      "Model": "970 Evo NVMe PCIe M.2 250GB",
      "Rank": 71,
      "Benchmark": 229,
      "Samples": 133384,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/494033/Samsung-SSD-970-EVO-250GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SB-ROCKET-1TB",
      "Brand": "Sabrent",
      "Model": "Rocket NVMe PCIe M.2 1TB",
      "Rank": 72,
      "Benchmark": 226,
      "Samples": 846,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/764240/NVMe-Sabrent"
    },
    {
      "Type": "SSD",
      "Part Number": "AGAMMIXS11-480GT-C",
      "Brand": "XPG",
      "Model": "Gammix S11 NVMe PCIe M.2 480GB",
      "Rank": 73,
      "Benchmark": 225,
      "Samples": 1955,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/506229/XPG-GAMMIX-S11"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKKW512G8XT",
      "Brand": "Intel",
      "Model": "760p Series NVMe PCIe M.2 512GB",
      "Rank": 74,
      "Benchmark": 223,
      "Samples": 7363,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/433786/INTEL-SSDPEKKW512G8"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V5P512BW",
      "Brand": "Samsung",
      "Model": "950 NVMe PCIe M.2 512GB",
      "Rank": 75,
      "Benchmark": 222,
      "Samples": 47099,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/38554/NVMe-Samsung-SSD-950"
    },
    {
      "Type": "SSD",
      "Part Number": "CT1000P2SSD8",
      "Brand": "Crucial",
      "Model": "P2 3D NVMe PCIe M.2 1TB",
      "Rank": 76,
      "Benchmark": 222,
      "Samples": 6649,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1312497/CT1000P2SSD8"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKNW020T8X1",
      "Brand": "Intel",
      "Model": "660p NVMe PCIe M.2 2TB",
      "Rank": 77,
      "Benchmark": 219,
      "Samples": 26418,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/610546/INTEL-SSDPEKNW020T8"
    },
    {
      "Type": "SSD",
      "Part Number": "MZVLB512HAJQ",
      "Brand": "Samsung",
      "Model": "PM981 NVMe PCIe M.2 512GB",
      "Rank": 78,
      "Benchmark": 216,
      "Samples": 57963,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/401452/SAMSUNG-MZVLB512HAJQ-000L2"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX8200PNP-256GT-C",
      "Brand": "Adata",
      "Model": "XPG SX8200 Pro NVMe PCIe M.2 256GB",
      "Rank": 79,
      "Benchmark": 215,
      "Samples": 27046,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/636955/ADATA-SX8200PNP"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V6E500BW",
      "Brand": "Samsung",
      "Model": "960 Evo NVMe PCIe M.2 500GB",
      "Rank": 80,
      "Benchmark": 213,
      "Samples": 138264,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/204072/Samsung-SSD-960-EVO-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPE2MD400G401",
      "Brand": "Intel",
      "Model": "DC P3700 Series NVMe PCIe 400GB",
      "Rank": 81,
      "Benchmark": 208,
      "Samples": 56,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/16595/NVMe-INTEL-SSDPEDMD40"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS500G2B0C",
      "Brand": "WD",
      "Model": "Blue SN550 NVMe PCIe M.2 500GB",
      "Rank": 82,
      "Benchmark": 207,
      "Samples": 50416,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/998114/WDC-WDS500G2B0C-00PXH0"
    },
    {
      "Type": "SSD",
      "Part Number": "2YY45AA#ABC",
      "Brand": "HP",
      "Model": "EX920 NVMe PCIe M.2 256GB",
      "Rank": 83,
      "Benchmark": 204,
      "Samples": 1840,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/537061/HP-SSD-EX920-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V8V250B",
      "Brand": "Samsung",
      "Model": "980 NVMe PCIe M.2 250GB",
      "Rank": 84,
      "Benchmark": 204,
      "Samples": 144,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1501500/Samsung-SSD-980-250GB"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS250G3X0C",
      "Brand": "WD",
      "Model": "Black SN750 NVMe PCIe M.2 250GB (2019)",
      "Rank": 85,
      "Benchmark": 201,
      "Samples": 10099,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/716792/WDS250G3X0C-00SJG0"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKNW010T8X1",
      "Brand": "Intel",
      "Model": "660p NVMe PCIe M.2 1TB",
      "Rank": 86,
      "Benchmark": 200,
      "Samples": 131677,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/602553/INTEL-SSDPEKNW010T8"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V5P256BW",
      "Brand": "Samsung",
      "Model": "950 NVMe PCIe M.2 256GB",
      "Rank": 87,
      "Benchmark": 200,
      "Samples": 37853,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/38570/NVMe-Samsung-SSD-950"
    },
    {
      "Type": "SSD",
      "Part Number": "MZVPV512HDGL-00000",
      "Brand": "Samsung",
      "Model": "SM951 NVMe PCIe M.2 512GB",
      "Rank": 88,
      "Benchmark": 200,
      "Samples": 8398,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/30300/NVMe-SAMSUNG-MZVKV512"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM961 NVMe PCIe M.2 512GB",
      "Rank": 89,
      "Benchmark": 199,
      "Samples": 31897,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/181300/NVMe-SAMSUNG-MZVLW512"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX6000PNP-512GT-C",
      "Brand": "Adata",
      "Model": "XPG SX6000 Pro NVMe PCIe M.2 512GB",
      "Rank": 90,
      "Benchmark": 196,
      "Samples": 7627,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/594216/ADATA-SX6000PNP"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-512M8PeG",
      "Brand": "Plextor",
      "Model": "M8Pe NVMe PCIe M.2 512GB",
      "Rank": 91,
      "Benchmark": 196,
      "Samples": 2442,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/169863/PLEXTOR-PX-512M8PeG"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F480GBMP510",
      "Brand": "Corsair",
      "Model": "Force NVMe PCIe M.2 480GB",
      "Rank": 92,
      "Benchmark": 195,
      "Samples": 25164,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/626885/Force-MP510"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-1TM8PeG",
      "Brand": "Plextor",
      "Model": "M8Pe NVMe PCIe M.2 1TB",
      "Rank": 93,
      "Benchmark": 194,
      "Samples": 353,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/175630/PLEXTOR-PX-1TM8PeG"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-V6E250BW",
      "Brand": "Samsung",
      "Model": "960 Evo NVMe PCIe M.2 250GB",
      "Rank": 94,
      "Benchmark": 194,
      "Samples": 224761,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/200373/Samsung-SSD-960-EVO-250GB"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-N800GBNX500",
      "Brand": "Corsair",
      "Model": "Neutron NX500 NVMe PCIe 800GB",
      "Rank": 95,
      "Benchmark": 191,
      "Samples": 95,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/369784/Neutron-NX500"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX6000PNP-1TT-C",
      "Brand": "Adata",
      "Model": "XPG SX6000 Pro NVMe PCIe M.2 1TB",
      "Rank": 96,
      "Benchmark": 191,
      "Samples": 5166,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/664077/ADATA-SX6000PNP"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEDMW400G4X1",
      "Brand": "Intel",
      "Model": "750 Series NVMe PCIe 400GB",
      "Rank": 97,
      "Benchmark": 190,
      "Samples": 8102,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/26870/NVMe-INTEL-SSDPEDMW40"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEDMW400G4R5",
      "Brand": "Intel",
      "Model": "750 Series NVMe PCIe 400GB",
      "Rank": 97,
      "Benchmark": 190,
      "Samples": 8102,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/26870/NVMe-INTEL-SSDPEDMW40"
    },
    {
      "Type": "SSD",
      "Part Number": "SB-ROCKET-512",
      "Brand": "Nvme",
      "Model": "Rocket NVMe PCIe M.2 512GB",
      "Rank": 98,
      "Benchmark": 190,
      "Samples": 14088,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/801884/NVMe-Sabrent"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS500G1B0C",
      "Brand": "WD",
      "Model": "Blue SN500 NVMe PCIe M.2 500GB",
      "Rank": 99,
      "Benchmark": 189,
      "Samples": 11494,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/759521/WDC-WDS500G1B0C-00S6U0"
    },
    {
      "Type": "SSD",
      "Part Number": "CT500P2SSD8",
      "Brand": "Crucial",
      "Model": "P2 3D NVMe PCIe M.2 500GB",
      "Rank": 100,
      "Benchmark": 189,
      "Samples": 15608,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1110621/CT500P2SSD8"
    },
    {
      "Type": "SSD",
      "Part Number": "ZTSSD-PG3-480G-GE",
      "Brand": "Zotac",
      "Model": "Sonix NVMe PCIe 480GB",
      "Rank": 101,
      "Benchmark": 188,
      "Samples": 217,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/131041/NVMe-ZTSSDPG3-480G-GE"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS250G2X0C",
      "Brand": "WD",
      "Model": "Black NVMe PCIe M.2 250GB (2018)",
      "Rank": 102,
      "Benchmark": 188,
      "Samples": 7982,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/482421/WDS250G2X0C-00L350"
    },
    {
      "Type": "SSD",
      "Part Number": "2YY44AA#ABC",
      "Brand": "HP",
      "Model": "EX900 NVMe PCIe M.2 500GB",
      "Rank": 103,
      "Benchmark": 187,
      "Samples": 6879,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/532017/HP-SSD-EX900-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Optane+ NVMe PCIe 500GB",
      "Rank": 104,
      "Benchmark": 187,
      "Samples": 1390,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/268688/Intel-Optane-466GBSSD"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKKW256G8XT",
      "Brand": "Intel",
      "Model": "760p Series NVMe PCIe M.2 256GB",
      "Rank": 105,
      "Benchmark": 186,
      "Samples": 16990,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/434656/INTEL-SSDPEKKW256G8"
    },
    {
      "Type": "SSD",
      "Part Number": "CT500P1SSD8",
      "Brand": "Crucial",
      "Model": "P1 3D NVMe PCIe M.2 500GB",
      "Rank": 106,
      "Benchmark": 184,
      "Samples": 62615,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/614152/CT500P1SSD8"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDPL250GB-D8",
      "Brand": "Mushkin",
      "Model": "Pilot NVMe PCIe M.2 250GB",
      "Rank": 107,
      "Benchmark": 184,
      "Samples": 881,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/515464/MKNSSDPL250GB-D8"
    },
    {
      "Type": "SSD",
      "Part Number": "MZVPV256HDGL-00000",
      "Brand": "Samsung",
      "Model": "SM951 NVMe PCIe M.2 256GB",
      "Rank": 108,
      "Benchmark": 183,
      "Samples": 6858,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/30950/NVMe-SAMSUNG-MZVPV256"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-N400GBNX500",
      "Brand": "Corsair",
      "Model": "Neutron NX500 NVMe PCIe 400GB",
      "Rank": 109,
      "Benchmark": 183,
      "Samples": 417,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/331636/Neutron-NX500"
    },
    {
      "Type": "SSD",
      "Part Number": "MZHPV512HDGL-00000",
      "Brand": "Samsung",
      "Model": "SM951 AHCI PCIe M.2 512GB",
      "Rank": 110,
      "Benchmark": 183,
      "Samples": 5086,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/24647/SAMSUNG-MZHPV512HDGL-00000"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Optane+ NVMe PCIe 128GB",
      "Rank": 111,
      "Benchmark": 183,
      "Samples": 200,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/278104/Intel-Optane-119GBSSD"
    },
    {
      "Type": "SSD",
      "Part Number": "5XM46AA#ABC",
      "Brand": "HP",
      "Model": "EX900 NVMe PCIe M.2 1TB",
      "Rank": 112,
      "Benchmark": 183,
      "Samples": 105,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/695989/HP-SSD-EX900-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZVLW256HEHP",
      "Brand": "Samsung",
      "Model": "PM961 NVMe PCIe M.2 256GB",
      "Rank": 113,
      "Benchmark": 181,
      "Samples": 72225,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/174249/SAMSUNG-MZVLW256HEHP-00000"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-256M8PeG",
      "Brand": "Plextor",
      "Model": "M8Pe NVMe PCIe M.2 256GB",
      "Rank": 114,
      "Benchmark": 175,
      "Samples": 2245,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/171701/PLEXTOR-PX-256M8PeG"
    },
    {
      "Type": "SSD",
      "Part Number": "RVD400-M22280-256G",
      "Brand": "Toshiba",
      "Model": "OCZ RD400 NVMe PCIe M.2 256GB",
      "Rank": 115,
      "Benchmark": 175,
      "Samples": 3114,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/142093/NVMe-TOSHIBA-RD400"
    },
    {
      "Type": "SSD",
      "Part Number": "CT250P2SSD8",
      "Brand": "Crucial",
      "Model": "P2 3D NVMe PCIe M.2 250GB",
      "Rank": 116,
      "Benchmark": 173,
      "Samples": 1854,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1121042/CT250P2SSD8"
    },
    {
      "Type": "SSD",
      "Part Number": "SKC1000/960G",
      "Brand": "Kingston",
      "Model": "KC1000 NVMe PCIe M.2 960GB",
      "Rank": 117,
      "Benchmark": 172,
      "Samples": 266,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/320126/KINGSTON-SKC1000960G"
    },
    {
      "Type": "SSD",
      "Part Number": "MZVLW128",
      "Brand": "Samsung",
      "Model": "PM961 NVMe PCIe M.2 128GB",
      "Rank": 118,
      "Benchmark": 172,
      "Samples": 8200,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/194898/NVMe-SAMSUNG-MZVLW128"
    },
    {
      "Type": "SSD",
      "Part Number": "MZHPV256HDGL-00000",
      "Brand": "Samsung",
      "Model": "SM951 AHCI PCIe M.2 256GB",
      "Rank": 119,
      "Benchmark": 172,
      "Samples": 6448,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/24782/SAMSUNG-MZHPV256HDGL-00000"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX6000PNP-256GT-C",
      "Brand": "Adata",
      "Model": "XPG SX6000 Pro NVMe PCIe M.2 256GB",
      "Rank": 120,
      "Benchmark": 172,
      "Samples": 10345,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/607866/ADATA-SX6000PNP"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS250G2B0C",
      "Brand": "WD",
      "Model": "Blue SN550 NVMe PCIe M.2 250GB",
      "Rank": 121,
      "Benchmark": 171,
      "Samples": 7793,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/991678/WDC-WDS250G2B0C-00PXH0"
    },
    {
      "Type": "SSD",
      "Part Number": "MZVPV128HDGM-00000",
      "Brand": "Samsung",
      "Model": "SM951 NVMe PCIe M.2 128GB",
      "Rank": 122,
      "Benchmark": 167,
      "Samples": 1518,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/34737/NVMe-SAMSUNG-MZVPV128"
    },
    {
      "Type": "SSD",
      "Part Number": "AGAMMIXS11-240GT-C",
      "Brand": "XPG",
      "Model": "Gammix S11 NVMe PCIe M.2 240GB",
      "Rank": 123,
      "Benchmark": 166,
      "Samples": 1942,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/497242/XPG-GAMMIX-S11"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX8200NP-240GT-C",
      "Brand": "Adata",
      "Model": "XPG SX8200 NVMe PCIe M.2 240GB",
      "Rank": 124,
      "Benchmark": 166,
      "Samples": 9680,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/480586/ADATA-SX8200NP"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS250G1B0C",
      "Brand": "WD",
      "Model": "Blue SN500 NVMe PCIe M.2 250GB",
      "Rank": 125,
      "Benchmark": 165,
      "Samples": 2493,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/756076/WDC-WDS250G1B0C-00S6U0"
    },
    {
      "Type": "SSD",
      "Part Number": "SKC1000/480G",
      "Brand": "Kingston",
      "Model": "KC1000 NVMe PCIe M.2 480GB",
      "Rank": 126,
      "Benchmark": 163,
      "Samples": 895,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/316248/KINGSTON-SKC1000480G"
    },
    {
      "Type": "SSD",
      "Part Number": "2YY43AA#ABC",
      "Brand": "HP",
      "Model": "EX900 NVMe PCIe M.2 250GB",
      "Rank": 127,
      "Benchmark": 163,
      "Samples": 8437,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/455743/HP-SSD-EX900-250GB"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F480GBMP500",
      "Brand": "Corsair",
      "Model": "Force MP500 NVMe PCIe M.2 480GB",
      "Rank": 128,
      "Benchmark": 162,
      "Samples": 3253,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/223982/Force-MP500"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "SM0512G PCIe 500GB",
      "Rank": 129,
      "Benchmark": 161,
      "Samples": 1067,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/25611/APPLE-SSD-SM0512G"
    },
    {
      "Type": "SSD",
      "Part Number": "MZHPV128HDGM-00000",
      "Brand": "Samsung",
      "Model": "SM951 AHCI PCIe M.2 128GB",
      "Rank": 130,
      "Benchmark": 160,
      "Samples": 1946,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/26719/SAMSUNG-MZHPV128HDGM-00000"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F240GBMP510",
      "Brand": "Corsair",
      "Model": "Force NVMe PCIe M.2 240GB",
      "Rank": 131,
      "Benchmark": 160,
      "Samples": 22099,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/612603/Force-MP510"
    },
    {
      "Type": "SSD",
      "Part Number": "RVD350-FHPX28-960G",
      "Brand": "OCZ",
      "Model": "RevoDrive 350 PCIe 960GB",
      "Rank": 132,
      "Benchmark": 159,
      "Samples": 148,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15245/OCZ-REVODRIVE350"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSN5512GPU7 NVMe PCIe M.2 512GB",
      "Rank": 133,
      "Benchmark": 158,
      "Samples": 10745,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/120558/NVMe-THNSN5512GPU7-NV"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEDME400G401",
      "Brand": "Intel",
      "Model": "DC P3600 Series NVMe PCIe 400GB",
      "Rank": 134,
      "Benchmark": 158,
      "Samples": 40,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/22744/NVMe-INTEL-SSDPEDME40"
    },
    {
      "Type": "SSD",
      "Part Number": "MDNVME80-BPX-0512",
      "Brand": "MyDigitalSSD",
      "Model": "BPX NVMe PCIe M.2 480GB",
      "Rank": 135,
      "Benchmark": 157,
      "Samples": 1415,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/206552/BPX"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKNW512G8X1",
      "Brand": "Intel",
      "Model": "660p NVMe PCIe M.2 512GB",
      "Rank": 136,
      "Benchmark": 157,
      "Samples": 119484,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/557263/INTEL-SSDPEKNW512G8"
    },
    {
      "Type": "SSD",
      "Part Number": "KXG50ZNV1T02",
      "Brand": "Toshiba",
      "Model": "XG5 NVMe PCIe M.2 1TB",
      "Rank": 137,
      "Benchmark": 157,
      "Samples": 6782,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/359586/KXG50ZNV1T02-NVMe-TOSHIBA-1024GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM951 NVMe PCIe M.2 512GB 1TB",
      "Rank": 138,
      "Benchmark": 156,
      "Samples": 2114,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/39907/NVMe-PM951-NVMe-SAMSU"
    },
    {
      "Type": "SSD",
      "Part Number": "SB-ROCKET-256",
      "Brand": "Sabrent",
      "Model": "Rocket NVMe PCIe M.2 256GB",
      "Rank": 139,
      "Benchmark": 156,
      "Samples": 8201,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/759740/NVMe-Sabrent"
    },
    {
      "Type": "SSD",
      "Part Number": "PH480GPM280SSDR",
      "Brand": "Patriot",
      "Model": "Hellfire NVMe PCIe M.2 480GB",
      "Rank": 140,
      "Benchmark": 153,
      "Samples": 750,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/184918/Patriot-Hellfire-M2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSN5128GPU7 NVMe PCIe M.2 128GB",
      "Rank": 141,
      "Benchmark": 152,
      "Samples": 2212,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/38688/NVMe-THNSN5128GPU7-TO"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX8000NP-512GM-C",
      "Brand": "Adata",
      "Model": "XPG SX8000 NVMe PCIe M.2 512GB",
      "Rank": 142,
      "Benchmark": 152,
      "Samples": 1387,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/218488/NVMe-ADATA-SX8000NP"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F240GBMP500",
      "Brand": "Corsair",
      "Model": "Force MP500 NVMe PCIe M.2 240GB",
      "Rank": 143,
      "Benchmark": 151,
      "Samples": 9873,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/213562/Force-MP500"
    },
    {
      "Type": "SSD",
      "Part Number": "MDNVME80-BPX-0256",
      "Brand": "MyDigitalSSD",
      "Model": "BPX NVMe PCIe M.2 240GB",
      "Rank": 144,
      "Benchmark": 151,
      "Samples": 1128,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/211350/BPX"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDPL120GB-D8",
      "Brand": "Mushkin",
      "Model": "Pilot NVMe PCIe M.2 120GB",
      "Rank": 145,
      "Benchmark": 149,
      "Samples": 149,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/533910/MKNSSDPL120GB-D8"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "SM0256G PCIe 251GB",
      "Rank": 146,
      "Benchmark": 148,
      "Samples": 757,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/25442/APPLE-SSD-SM0256G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSN5256GPU7 NVMe PCIe M.2 256GB",
      "Rank": 147,
      "Benchmark": 148,
      "Samples": 10597,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/36660/NVMe-THNSN5256GPU7-TO"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-512M8SeY",
      "Brand": "Plextor",
      "Model": "M8Se NVMe PCIe M.2 512GB",
      "Rank": 148,
      "Benchmark": 146,
      "Samples": 168,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/341666/PLEXTOR-PX-512M8SeG"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-512M8SeG",
      "Brand": "Plextor",
      "Model": "M8Se NVMe PCIe M.2 512GB",
      "Rank": 148,
      "Benchmark": 146,
      "Samples": 168,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/341666/PLEXTOR-PX-512M8SeG"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-512M8SeGN",
      "Brand": "Plextor",
      "Model": "M8Se NVMe PCIe M.2 512GB",
      "Rank": 148,
      "Benchmark": 146,
      "Samples": 168,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/341666/PLEXTOR-PX-512M8SeG"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-1TM8SeY",
      "Brand": "Plextor",
      "Model": "M8Se NVMe PCIe M.2 1TB",
      "Rank": 149,
      "Benchmark": 143,
      "Samples": 134,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/331208/PLEXTOR-PX-1TM8SeG"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-1TM8SeG",
      "Brand": "Plextor",
      "Model": "M8Se NVMe PCIe M.2 1TB",
      "Rank": 149,
      "Benchmark": 143,
      "Samples": 134,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/331208/PLEXTOR-PX-1TM8SeG"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-1TM8SeGN",
      "Brand": "Plextor",
      "Model": "M8Se NVMe PCIe M.2 1TB",
      "Rank": 149,
      "Benchmark": 143,
      "Samples": 134,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/331208/PLEXTOR-PX-1TM8SeG"
    },
    {
      "Type": "SSD",
      "Part Number": "2YY42AA#ABC",
      "Brand": "HP",
      "Model": "EX900 NVMe PCIe M.2 120GB",
      "Rank": 150,
      "Benchmark": 143,
      "Samples": 1705,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/489362/HP-SSD-EX900-120GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SHPM2280P2/480G",
      "Brand": "Kingston",
      "Model": "HyperX Predator AHCI PCIe M.2 480GB",
      "Rank": 151,
      "Benchmark": 143,
      "Samples": 1721,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/27251/Kingston-SHPM2280P2480G"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-128M8PeG",
      "Brand": "Plextor",
      "Model": "M8Pe NVMe PCIe M.2 128GB",
      "Rank": 152,
      "Benchmark": 143,
      "Samples": 486,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/171560/PLEXTOR-PX-128M8PeG"
    },
    {
      "Type": "SSD",
      "Part Number": "RVD350-FHPX28-480G",
      "Brand": "OCZ",
      "Model": "RevoDrive 350 PCIe 480GB",
      "Rank": 153,
      "Benchmark": 142,
      "Samples": 487,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/13514/OCZ-REVODRIVE350"
    },
    {
      "Type": "SSD",
      "Part Number": "PH240GPM280SSDR",
      "Brand": "Patriot",
      "Model": "Hellfire NVMe PCIe M.2 240GB",
      "Rank": 154,
      "Benchmark": 142,
      "Samples": 1864,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/179778/Patriot-Hellfire-M2"
    },
    {
      "Type": "SSD",
      "Part Number": "SKC1000/240G",
      "Brand": "Kingston",
      "Model": "KC1000 NVMe PCIe M.2 240GB",
      "Rank": 155,
      "Benchmark": 140,
      "Samples": 1442,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/312458/KINGSTON-SKC1000240G"
    },
    {
      "Type": "SSD",
      "Part Number": "MDNVME80-BPX-0128",
      "Brand": "MyDigitalSSD",
      "Model": "BPX NVMe PCIe M.2 120GB",
      "Rank": 156,
      "Benchmark": 139,
      "Samples": 656,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/217777/BPX"
    },
    {
      "Type": "SSD",
      "Part Number": "KXG50ZNV512G",
      "Brand": "Toshiba",
      "Model": "XG5 NVMe PCIe M.2 512GB",
      "Rank": 157,
      "Benchmark": 137,
      "Samples": 27891,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/359770/KXG50ZNV512G-NVMe-TOSHIBA-512GB"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-256M8SeY",
      "Brand": "Plextor",
      "Model": "M8Se NVMe PCIe M.2 256GB",
      "Rank": 158,
      "Benchmark": 137,
      "Samples": 322,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/327270/PLEXTOR-PX-256M8SeG"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-256M8SeG",
      "Brand": "Plextor",
      "Model": "M8Se NVMe PCIe M.2 256GB",
      "Rank": 158,
      "Benchmark": 137,
      "Samples": 322,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/327270/PLEXTOR-PX-256M8SeG"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-256M8SeGN",
      "Brand": "Plextor",
      "Model": "M8Se NVMe PCIe M.2 256GB",
      "Rank": 158,
      "Benchmark": 137,
      "Samples": 322,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/327270/PLEXTOR-PX-256M8SeG"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM951 NVMe PCIe M.2 512GB",
      "Rank": 159,
      "Benchmark": 137,
      "Samples": 6277,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/37633/NVMe-PM951-NVMe-SAMSU"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX8000NP-256GM-C",
      "Brand": "Adata",
      "Model": "XPG SX8000 NVMe PCIe M.2 256GB",
      "Rank": 160,
      "Benchmark": 137,
      "Samples": 2212,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/209005/NVMe-ADATA-SX8000NP"
    },
    {
      "Type": "SSD",
      "Part Number": "SA1000M8/960G",
      "Brand": "Kingston",
      "Model": "A1000 NVMe PCIe M.2 960GB",
      "Rank": 161,
      "Benchmark": 135,
      "Samples": 1631,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/495225/KINGSTON-SA1000M8960G"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F120GBMP500",
      "Brand": "Corsair",
      "Model": "Force MP500 NVMe PCIe M.2 120GB",
      "Rank": 162,
      "Benchmark": 132,
      "Samples": 6699,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/221057/Force-MP500"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKKW512G7X1",
      "Brand": "Intel",
      "Model": "600p Series NVMe PCIe M.2 512GB",
      "Rank": 163,
      "Benchmark": 130,
      "Samples": 20672,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/168978/INTEL-SSDPEKKW512G7"
    },
    {
      "Type": "SSD",
      "Part Number": "SA1000M8/480G",
      "Brand": "Kingston",
      "Model": "A1000 NVMe PCIe M.2 480GB",
      "Rank": 164,
      "Benchmark": 130,
      "Samples": 10289,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/492906/KINGSTON-SA1000M8480G"
    },
    {
      "Type": "SSD",
      "Part Number": "MZHPU256HCGL",
      "Brand": "Samsung",
      "Model": "XP941 PCIe M.2 256GB",
      "Rank": 165,
      "Benchmark": 130,
      "Samples": 2639,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4625/SAMSUNG-MZHPU256HCGL-00000"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS512G1X0C",
      "Brand": "WD",
      "Model": "Black NVMe PCIe M.2 512GB (2017)",
      "Rank": 166,
      "Benchmark": 129,
      "Samples": 10694,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/251339/WDC-WDS512G1X0C-00ENX0"
    },
    {
      "Type": "SSD",
      "Part Number": "MDNVME80-SBX-0512",
      "Brand": "MyDigitalSSD",
      "Model": "SBX NVMe PCIe M.2 512GB",
      "Rank": 167,
      "Benchmark": 128,
      "Samples": 178,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/438137/SBX"
    },
    {
      "Type": "SSD",
      "Part Number": "SHPM2280P2/240G",
      "Brand": "Kingston",
      "Model": "HyperX Predator AHCI PCIe M.2 240GB",
      "Rank": 168,
      "Benchmark": 128,
      "Samples": 5629,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/26065/Kingston-SHPM2280P2240G"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX7000NP-512GT-C",
      "Brand": "Adata",
      "Model": "XPG SX7000 NVMe PCIe M.2 512GB",
      "Rank": 169,
      "Benchmark": 128,
      "Samples": 2299,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/318275/NVMe-ADATA-SX7000NP"
    },
    {
      "Type": "SSD",
      "Part Number": "MZHPU512HCGL",
      "Brand": "Samsung",
      "Model": "XP941 PCIe M.2 512GB",
      "Rank": 170,
      "Benchmark": 126,
      "Samples": 1239,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4874/SAMSUNG-MZHPU512HCGL-00000"
    },
    {
      "Type": "SSD",
      "Part Number": "KXG50ZNV256G",
      "Brand": "Toshiba",
      "Model": "XG5 NVMe PCIe M.2 256GB",
      "Rank": 171,
      "Benchmark": 126,
      "Samples": 34693,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/358656/KXG50ZNV256G-NVMe-TOSHIBA-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX6000NP-512GT-C",
      "Brand": "Adata",
      "Model": "XPG SX6000 NVMe PCIe M.2 512GB",
      "Rank": 172,
      "Benchmark": 126,
      "Samples": 2837,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/410831/ADATA-SX6000NP"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX6000NP-1TT-C",
      "Brand": "Adata",
      "Model": "XPG SX6000 NVMe PCIe M.2 1TB",
      "Rank": 173,
      "Benchmark": 125,
      "Samples": 163,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/471014/ADATA-SX6000NP"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKKW128G8XT",
      "Brand": "Intel",
      "Model": "760p Series NVMe PCIe M.2 128GB",
      "Rank": 174,
      "Benchmark": 124,
      "Samples": 747,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/446913/INTEL-SSDPEKKW128G8"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-AG512M6e",
      "Brand": "Plextor",
      "Model": "M6e PCIe 512GB",
      "Rank": 175,
      "Benchmark": 121,
      "Samples": 126,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/14616/PLEXTOR-PX-AG512M6e"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS256G1X0C",
      "Brand": "WD",
      "Model": "Black NVMe PCIe M.2 256GB (2017)",
      "Rank": 176,
      "Benchmark": 120,
      "Samples": 21757,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/237667/WDC-WDS256G1X0C-00ENX0"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKKW256G7X1",
      "Brand": "Intel",
      "Model": "600p Series NVMe PCIe M.2 256GB",
      "Rank": 177,
      "Benchmark": 120,
      "Samples": 47650,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/169054/INTEL-SSDPEKKW256G7"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSN5512GPUK NVMe PCIe M.2 512GB",
      "Rank": 178,
      "Benchmark": 119,
      "Samples": 17061,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/160272/NVMe-THNSN5512GPUK-NV"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKKF512G7X1",
      "Brand": "Intel",
      "Model": "Pro 6000p NVMe PCIe M.2 512GB",
      "Rank": 179,
      "Benchmark": 119,
      "Samples": 1845,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/289714/INTEL-SSDPEKKF512G7H"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77E2T0B",
      "Brand": "Samsung",
      "Model": "870 EVO 2TB",
      "Rank": 180,
      "Benchmark": 119,
      "Samples": 785,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1463967/Samsung-SSD-870-EVO-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM951 NVMe PCIe M.2 256GB",
      "Rank": 181,
      "Benchmark": 119,
      "Samples": 10763,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/37673/NVMe-PM951-NVMe-SAMSU"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX6000NP-256GT-C",
      "Brand": "Adata",
      "Model": "XPG SX6000 NVMe PCIe M.2 256GB",
      "Rank": 182,
      "Benchmark": 119,
      "Samples": 7558,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/387986/ADATA-SX6000NP"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77E1T0B",
      "Brand": "Samsung",
      "Model": "870 EVO 1TB",
      "Rank": 183,
      "Benchmark": 119,
      "Samples": 3291,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1445454/Samsung-SSD-870-EVO-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-G256M6e",
      "Brand": "Plextor",
      "Model": "M6e  PCIe M.2 256GB",
      "Rank": 184,
      "Benchmark": 118,
      "Samples": 1269,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12059/PLEXTOR-PX-G256M6e"
    },
    {
      "Type": "SSD",
      "Part Number": "MDNVME80-SBX-1T",
      "Brand": "MyDigitalSSD",
      "Model": "SBX NVMe PCIe M.2 1TB",
      "Rank": 185,
      "Benchmark": 118,
      "Samples": 37,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/455228/SBX"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX8000NP-128GM-C",
      "Brand": "Adata",
      "Model": "XPG SX8000 NVMe PCIe M.2 128GB",
      "Rank": 186,
      "Benchmark": 116,
      "Samples": 121,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/214181/NVMe-ADATA-SX8000NP"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-128M8SeY",
      "Brand": "Plextor",
      "Model": "M8Se NVMe PCIe M.2 128GB",
      "Rank": 187,
      "Benchmark": 116,
      "Samples": 208,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/345013/PLEXTOR-PX-128M8SeG"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-128M8SeG",
      "Brand": "Plextor",
      "Model": "M8Se NVMe PCIe M.2 128GB",
      "Rank": 187,
      "Benchmark": 116,
      "Samples": 208,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/345013/PLEXTOR-PX-128M8SeG"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-128M8SeGN",
      "Brand": "Plextor",
      "Model": "M8Se NVMe PCIe M.2 128GB",
      "Rank": 187,
      "Benchmark": 116,
      "Samples": 208,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/345013/PLEXTOR-PX-128M8SeG"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77E4T0B",
      "Brand": "Samsung",
      "Model": "870 EVO 4TB",
      "Rank": 188,
      "Benchmark": 116,
      "Samples": 112,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1465671/Samsung-SSD-870-EVO-4TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76E4T0B",
      "Brand": "Samsung",
      "Model": "860 Evo 4TB",
      "Rank": 189,
      "Benchmark": 114,
      "Samples": 4290,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/440150/Samsung-SSD-860-EVO-4TB"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-AG256M6e",
      "Brand": "Plextor",
      "Model": "M6e PCIe 256GB",
      "Rank": 190,
      "Benchmark": 114,
      "Samples": 647,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7265/PLEXTOR-PX-AG256M6e"
    },
    {
      "Type": "SSD",
      "Part Number": "MZHPU128HCGM",
      "Brand": "Samsung",
      "Model": "XP941 PCIe M.2 128GB",
      "Rank": 191,
      "Benchmark": 114,
      "Samples": 689,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6251/SAMSUNG-MZHPU128HCGM-00000"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76E2T0B",
      "Brand": "Samsung",
      "Model": "860 Evo 2TB",
      "Rank": 192,
      "Benchmark": 114,
      "Samples": 28654,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/430706/Samsung-SSD-860-EVO-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX6000NP-128GT-C",
      "Brand": "Adata",
      "Model": "XPG SX6000 NVMe PCIe M.2 128GB",
      "Rank": 193,
      "Benchmark": 114,
      "Samples": 4629,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/391493/ADATA-SX6000NP"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSN5256GPUK NVMe PCIe M.2 256GB",
      "Rank": 194,
      "Benchmark": 113,
      "Samples": 19382,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/202063/THNSN5256GPUK-TOSHIBA"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76E1T0B",
      "Brand": "Samsung",
      "Model": "860 Evo 1TB",
      "Rank": 195,
      "Benchmark": 113,
      "Samples": 399884,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/423831/Samsung-SSD-860-EVO-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-75E2T0B",
      "Brand": "Samsung",
      "Model": "850 Evo 2TB",
      "Rank": 196,
      "Benchmark": 112,
      "Samples": 6414,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/32539/Samsung-SSD-850-EVO-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F240GBMP300",
      "Brand": "Corsair",
      "Model": "Force MP300 NVMe PCIe M.2 240GB",
      "Rank": 197,
      "Benchmark": 112,
      "Samples": 3062,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/538791/NVMe-Force-MP300"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-75E1T0B",
      "Brand": "Samsung",
      "Model": "850 Evo 1TB",
      "Rank": 198,
      "Benchmark": 112,
      "Samples": 106772,
      "URL": "https://ssd.userbenchmark.com/Samsung-850-Evo-1TB/Rating/3576"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-75E4T0B",
      "Brand": "Samsung",
      "Model": "850 Evo 4TB",
      "Rank": 199,
      "Benchmark": 112,
      "Samples": 605,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/169156/Samsung-SSD-850-EVO-4TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76P4T0B",
      "Brand": "Samsung",
      "Model": "860 Pro 4TB",
      "Rank": 200,
      "Benchmark": 111,
      "Samples": 346,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/552119/Samsung-SSD-860-PRO-4TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MDNVME80-SBX-0256",
      "Brand": "MyDigitalSSD",
      "Model": "SBX NVMe PCIe M.2 256GB",
      "Rank": 201,
      "Benchmark": 111,
      "Samples": 251,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/456332/SBX"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76P1T0B",
      "Brand": "Samsung",
      "Model": "860 Pro 1TB",
      "Rank": 202,
      "Benchmark": 111,
      "Samples": 5241,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/434505/Samsung-SSD-860-PRO-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX7000NP-256GT-C",
      "Brand": "Adata",
      "Model": "XPG SX7000 NVMe PCIe M.2 256GB",
      "Rank": 203,
      "Benchmark": 110,
      "Samples": 1543,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/304438/NVMe-ADATA-SX7000NP"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNP44SC240GB",
      "Brand": "Mushkin",
      "Model": "Scorpion Deluxe PCIe 240GB",
      "Rank": 204,
      "Benchmark": 110,
      "Samples": 50,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/18266/Mushkin-Scorpion-Deluxe"
    },
    {
      "Type": "SSD",
      "Part Number": "SA1000M8/240G",
      "Brand": "Kingston",
      "Model": "A1000 NVMe PCIe M.2 240GB",
      "Rank": 205,
      "Benchmark": 110,
      "Samples": 23485,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/497453/KINGSTON-SA1000M8240G"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-75E500B",
      "Brand": "Samsung",
      "Model": "850 Evo 500GB",
      "Rank": 206,
      "Benchmark": 110,
      "Samples": 638238,
      "URL": "https://ssd.userbenchmark.com/Samsung-850-Evo-500GB/Rating/3477"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7KE2T0BW",
      "Brand": "Samsung",
      "Model": "850 Pro 2TB",
      "Rank": 207,
      "Benchmark": 109,
      "Samples": 1825,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/38860/Samsung-SSD-850-PRO-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76P256BW",
      "Brand": "Samsung",
      "Model": "860 Pro 256GB",
      "Rank": 208,
      "Benchmark": 109,
      "Samples": 7628,
      "URL": "https://ssd.userbenchmark.com/Samsung-860-Pro-256GB/Rating/3950"
    },
    {
      "Type": "SSD",
      "Part Number": "ASU800SS-2TT-C",
      "Brand": "Adata",
      "Model": "Ultimate SU800 2TB",
      "Rank": 209,
      "Benchmark": 109,
      "Samples": 1829,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/584479/ADATA-SU800"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76P512B",
      "Brand": "Samsung",
      "Model": "860 Pro 512GB",
      "Rank": 210,
      "Benchmark": 109,
      "Samples": 10158,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/431483/Samsung-SSD-860-PRO-512GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77Q2T0BW",
      "Brand": "Samsung",
      "Model": "870 QVO 2TB",
      "Rank": 211,
      "Benchmark": 108,
      "Samples": 5481,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1260265/Samsung-SSD-870-QVO-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77Q2T0B/AM",
      "Brand": "Samsung",
      "Model": "870 QVO 2TB",
      "Rank": 211,
      "Benchmark": 108,
      "Samples": 5481,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1260265/Samsung-SSD-870-QVO-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77Q4T0BW",
      "Brand": "Samsung",
      "Model": "870 QVO 4TB",
      "Rank": 212,
      "Benchmark": 108,
      "Samples": 1065,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1243154/Samsung-SSD-870-QVO-4TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77Q4T0B/AM",
      "Brand": "Samsung",
      "Model": "870 QVO 4TB",
      "Rank": 212,
      "Benchmark": 108,
      "Samples": 1065,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1243154/Samsung-SSD-870-QVO-4TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77E500B",
      "Brand": "Samsung",
      "Model": "870 EVO 500GB",
      "Rank": 213,
      "Benchmark": 108,
      "Samples": 3134,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/972228/Samsung-SSD-870-EVO-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "CT2000MX500SSD1",
      "Brand": "Crucial",
      "Model": "MX500 2TB",
      "Rank": 214,
      "Benchmark": 108,
      "Samples": 23888,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/421719/CT2000MX500SSD1"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZFLV512 NVMe PCIe M.2 512GB",
      "Rank": 215,
      "Benchmark": 108,
      "Samples": 1305,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/36829/NVMe-SAMSUNG-MZFLV512"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77Q8T0BW",
      "Brand": "Samsung",
      "Model": "870 QVO 8TB",
      "Rank": 216,
      "Benchmark": 107,
      "Samples": 205,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1280660/Samsung-SSD-870-QVO-8TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77Q8T0B/AM",
      "Brand": "Samsung",
      "Model": "870 QVO 8TB",
      "Rank": 216,
      "Benchmark": 107,
      "Samples": 205,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1280660/Samsung-SSD-870-QVO-8TB"
    },
    {
      "Type": "SSD",
      "Part Number": "CT1000MX500SSD1",
      "Brand": "Crucial",
      "Model": "MX500 1TB",
      "Rank": 217,
      "Benchmark": 107,
      "Samples": 126202,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/406099/CT1000MX500SSD1"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76E500B",
      "Brand": "Samsung",
      "Model": "860 Evo 500GB",
      "Rank": 218,
      "Benchmark": 107,
      "Samples": 576489,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/428560/Samsung-SSD-860-EVO-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2KW512G8",
      "Brand": "Intel",
      "Model": "545s Series 512GB",
      "Rank": 219,
      "Benchmark": 106,
      "Samples": 9149,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/302752/INTEL-SSDSC2KW512G8"
    },
    {
      "Type": "SSD",
      "Part Number": "CT500MX500SSD1",
      "Brand": "Crucial",
      "Model": "MX500 500GB",
      "Rank": 220,
      "Benchmark": 106,
      "Samples": 177709,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/418385/CT500MX500SSD1"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-G128M6e",
      "Brand": "Plextor",
      "Model": "M6e PCIe M.2 128GB",
      "Rank": 221,
      "Benchmark": 106,
      "Samples": 568,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15095/PLEXTOR-PX-G128M6e"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77Q1T0BW",
      "Brand": "Samsung",
      "Model": "870 QVO 1TB",
      "Rank": 222,
      "Benchmark": 105,
      "Samples": 14159,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1218310/Samsung-SSD-870-QVO-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77Q1T0B/AM",
      "Brand": "Samsung",
      "Model": "870 QVO 1TB",
      "Rank": 222,
      "Benchmark": 105,
      "Samples": 14159,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1218310/Samsung-SSD-870-QVO-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKKF256G7X1",
      "Brand": "Intel",
      "Model": "Pro 6000p NVMe PCIe M.2 256GB",
      "Rank": 223,
      "Benchmark": 105,
      "Samples": 7195,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/304420/INTEL-SSDPEKKF256G7H"
    },
    {
      "Type": "SSD",
      "Part Number": "ASU800SS-1TT-C",
      "Brand": "Adata",
      "Model": "Ultimate SU800 1TB",
      "Rank": 224,
      "Benchmark": 105,
      "Samples": 15645,
      "URL": "https://ssd.userbenchmark.com/Adata-Ultimate-SU800-1TB/Rating/3914"
    },
    {
      "Type": "SSD",
      "Part Number": "GP-GSM2NE8256GNTD",
      "Brand": "Gigabyte",
      "Model": "NVMe PCIe M.2 256GB",
      "Rank": 225,
      "Benchmark": 105,
      "Samples": 2482,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/599447/GIGABYTE-GP-GSM2NE8256GNTD"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-77E250B",
      "Brand": "Samsung",
      "Model": "870 Evo 250GB",
      "Rank": 226,
      "Benchmark": 105,
      "Samples": 1415,
      "URL": "https://ssd.userbenchmark.com/Samsung-870-Evo-250GB/Rating/4094"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7KE1T0BW",
      "Brand": "Samsung",
      "Model": "850 Pro 1TB",
      "Rank": 227,
      "Benchmark": 104,
      "Samples": 20307,
      "URL": "https://ssd.userbenchmark.com/Samsung-850-Pro-1TB/Rating/3577"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7TE1T0BW",
      "Brand": "Samsung",
      "Model": "840 Evo 1TB",
      "Rank": 228,
      "Benchmark": 104,
      "Samples": 22088,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1436/Samsung-SSD-840-EVO"
    },
    {
      "Type": "SSD",
      "Part Number": "TS256GMTE820",
      "Brand": "Transcend",
      "Model": "MTE820 NVMe PCIe M.2 256GB",
      "Rank": 229,
      "Benchmark": 104,
      "Samples": 146,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/437614/TS256GMTE820"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7TE750BW",
      "Brand": "Samsung",
      "Model": "840 Evo 750GB",
      "Rank": 230,
      "Benchmark": 104,
      "Samples": 2810,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2175/Samsung-SSD-840-EVO-750GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7TE500BW",
      "Brand": "Samsung",
      "Model": "840 Evo 500GB",
      "Rank": 231,
      "Benchmark": 103,
      "Samples": 52707,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1519/Samsung-SSD-840-EVO-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76E250B",
      "Brand": "Samsung",
      "Model": "860 Evo 250GB",
      "Rank": 232,
      "Benchmark": 103,
      "Samples": 223759,
      "URL": "https://ssd.userbenchmark.com/Samsung-860-Evo-250GB/Rating/3949"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7KE512BW",
      "Brand": "Samsung",
      "Model": "850 Pro 512GB",
      "Rank": 233,
      "Benchmark": 103,
      "Samples": 55640,
      "URL": "https://ssd.userbenchmark.com/Samsung-850-Pro-512GB/Rating/3478"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-75E250B",
      "Brand": "Samsung",
      "Model": "850 Evo 250GB",
      "Rank": 234,
      "Benchmark": 103,
      "Samples": 723278,
      "URL": "https://ssd.userbenchmark.com/Samsung-850-Evo-250GB/Rating/2977"
    },
    {
      "Type": "SSD",
      "Part Number": "CT250MX500SSD1",
      "Brand": "Crucial",
      "Model": "MX500 250GB",
      "Rank": 235,
      "Benchmark": 103,
      "Samples": 60324,
      "URL": "https://ssd.userbenchmark.com/Crucial-MX500-250GB/Rating/3951"
    },
    {
      "Type": "SSD",
      "Part Number": "ASU800SS-512GT-C",
      "Brand": "Adata",
      "Model": "Ultimate SU800 512GB",
      "Rank": 236,
      "Benchmark": 102,
      "Samples": 20258,
      "URL": "https://ssd.userbenchmark.com/Adata-Ultimate-SU800-512GB/Rating/3913"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76Q4T0BW",
      "Brand": "Samsung",
      "Model": "860 QVO 4TB",
      "Rank": 237,
      "Benchmark": 102,
      "Samples": 1970,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/743794/Samsung-SSD-860-QVO-4TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76Q4T0B/AM",
      "Brand": "Samsung",
      "Model": "860 QVO 4TB",
      "Rank": 237,
      "Benchmark": 102,
      "Samples": 1970,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/743794/Samsung-SSD-860-QVO-4TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7KE256BW",
      "Brand": "Samsung",
      "Model": "850 Pro 256GB",
      "Rank": 238,
      "Benchmark": 102,
      "Samples": 105833,
      "URL": "https://ssd.userbenchmark.com/Samsung-850-Pro-256GB/Rating/2385"
    },
    {
      "Type": "SSD",
      "Part Number": "CT480BX300SSD1",
      "Brand": "Crucial",
      "Model": "BX300 480GB",
      "Rank": 239,
      "Benchmark": 101,
      "Samples": 3384,
      "URL": "https://ssd.userbenchmark.com/Crucial-BX300-480GB/Rating/3947"
    },
    {
      "Type": "SSD",
      "Part Number": "2AP99AA#ABL",
      "Brand": "HP",
      "Model": "S700 Pro 512GB",
      "Rank": 240,
      "Benchmark": 101,
      "Samples": 755,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/370902/HP-SSD-S700-Pro"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-750500BW",
      "Brand": "Samsung",
      "Model": "750 EVO 500GB",
      "Rank": 241,
      "Benchmark": 99.9,
      "Samples": 26371,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/143302/Samsung-SSD-750-EVO-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76Q2T0BW",
      "Brand": "Samsung",
      "Model": "860 QVO 2TB",
      "Rank": 242,
      "Benchmark": 99.8,
      "Samples": 20002,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/719017/Samsung-SSD-860-QVO-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76Q2T0B/AM",
      "Brand": "Samsung",
      "Model": "860 QVO 2TB",
      "Rank": 242,
      "Benchmark": 99.8,
      "Samples": 20002,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/719017/Samsung-SSD-860-QVO-2TB"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS100T2B0A",
      "Brand": "WD",
      "Model": "Blue 3D 1TB",
      "Rank": 243,
      "Benchmark": 99.3,
      "Samples": 13187,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/352978/WDC-WDS100T2B0A-00SM50"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDH3-2T00-G25",
      "Brand": "SanDisk",
      "Model": "Ultra 3D 2TB",
      "Rank": 244,
      "Benchmark": 99.1,
      "Samples": 2650,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/351750/SanDisk-SDSSDH32000G"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKKF360G7X1",
      "Brand": "Intel",
      "Model": "Pro 6000p NVMe PCIe M.2 360GB",
      "Rank": 245,
      "Benchmark": 98.8,
      "Samples": 884,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/296966/INTEL-SSDPEKKF360G7H"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS100T2B0B",
      "Brand": "WD",
      "Model": "Blue 3D SATA M.2 1TB",
      "Rank": 246,
      "Benchmark": 98.7,
      "Samples": 8629,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/342470/WDC-WDS100T2B0B-00YS70"
    },
    {
      "Type": "SSD",
      "Part Number": "CT500MX200SSD4",
      "Brand": "Crucial",
      "Model": "MX200 SATA M.2 500GB",
      "Rank": 247,
      "Benchmark": 98.6,
      "Samples": 1043,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/23836/Crucial-CT500MX200SSD4"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKKW128G7X1",
      "Brand": "Intel",
      "Model": "600p Series NVMe PCIe M.2 128GB",
      "Rank": 248,
      "Benchmark": 98.4,
      "Samples": 9810,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/170119/INTEL-SSDPEKKW128G7"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDH3-500G-G25",
      "Brand": "SanDisk",
      "Model": "Ultra 3D 500GB",
      "Rank": 249,
      "Benchmark": 97.8,
      "Samples": 10938,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/322712/SanDisk-SDSSDH3500G"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDH3-1T00-G25",
      "Brand": "SanDisk",
      "Model": "Ultra 3D 1TB",
      "Rank": 250,
      "Benchmark": 97.8,
      "Samples": 4345,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/316514/SanDisk-SDSSDH31000G"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR180-25SAT3-960G",
      "Brand": "Toshiba",
      "Model": "OCZ VT180 960GB",
      "Rank": 251,
      "Benchmark": 97.3,
      "Samples": 80,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/171904/TOSHIBA-VT180"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7PD512BW",
      "Brand": "Samsung",
      "Model": "840 Pro 512GB",
      "Rank": 252,
      "Benchmark": 97,
      "Samples": 12516,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2708/Samsung-SSD-840-PRO-Series"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS200T2B0A",
      "Brand": "WD",
      "Model": "Blue 3D 2TB",
      "Rank": 253,
      "Benchmark": 96.8,
      "Samples": 1053,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/373739/WDC-WDS200T2B0A-00SM50"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7KE128BW",
      "Brand": "Samsung",
      "Model": "850 Pro 128GB",
      "Rank": 254,
      "Benchmark": 96.7,
      "Samples": 15365,
      "URL": "https://ssd.userbenchmark.com/Samsung-850-Pro-128GB/Rating/3483"
    },
    {
      "Type": "SSD",
      "Part Number": "2LU81AA#ABL",
      "Brand": "HP",
      "Model": "S700 Pro 1TB",
      "Rank": 255,
      "Benchmark": 96.7,
      "Samples": 71,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/387205/HP-SSD-S700-Pro-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDXPS-960G-G25",
      "Brand": "SanDisk",
      "Model": "Extreme Pro 960GB",
      "Rank": 256,
      "Benchmark": 96.5,
      "Samples": 2265,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Extreme-Pro-960GB/Rating/3581"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS500G2B0B",
      "Brand": "WD",
      "Model": "Blue 3D SATA M.2 500GB",
      "Rank": 257,
      "Benchmark": 96.4,
      "Samples": 19674,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/325788/WDC-WDS500G2B0B-00YS70"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F120GBMP300",
      "Brand": "Corsair",
      "Model": "Force MP300 NVMe PCIe M.2 120GB",
      "Rank": 258,
      "Benchmark": 96.3,
      "Samples": 2736,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/534036/NVMe-Force-MP300"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS500G2B0A",
      "Brand": "WD",
      "Model": "Blue 3D 500GB",
      "Rank": 259,
      "Benchmark": 95.9,
      "Samples": 33211,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/337874/WDC-WDS500G2B0A-00SM50"
    },
    {
      "Type": "SSD",
      "Part Number": "CT240BX300SSD1",
      "Brand": "Crucial",
      "Model": "BX300 240GB",
      "Rank": 260,
      "Benchmark": 95.4,
      "Samples": 5565,
      "URL": "https://ssd.userbenchmark.com/Crucial-BX300-240GB/Rating/3946"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-750250BW",
      "Brand": "Samsung",
      "Model": "750 EVO 250GB",
      "Rank": 261,
      "Benchmark": 95.4,
      "Samples": 57125,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/71929/Samsung-SSD-750-EVO-250GB"
    },
    {
      "Type": "SSD",
      "Part Number": "CT250MX200SSD4",
      "Brand": "Crucial",
      "Model": "MX200 SATA M.2 250GB",
      "Rank": 262,
      "Benchmark": 95.3,
      "Samples": 1885,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/23955/Crucial-CT250MX200SSD4"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BP480G410",
      "Brand": "Intel",
      "Model": "730 Series 480GB",
      "Rank": 263,
      "Benchmark": 95.3,
      "Samples": 4324,
      "URL": "https://ssd.userbenchmark.com/Intel-730-Series-480GB/Rating/3479"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-MTE1T0BW",
      "Brand": "Samsung",
      "Model": "840 Evo mSATA 1TB",
      "Rank": 264,
      "Benchmark": 95.2,
      "Samples": 536,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10394/Samsung-SSD-840-EVO-1TB-mSATA"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-75E120B",
      "Brand": "Samsung",
      "Model": "850 Evo 120GB",
      "Rank": 265,
      "Benchmark": 95.1,
      "Samples": 55309,
      "URL": "https://ssd.userbenchmark.com/Samsung-850-Evo-120GB/Rating/3484"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7TE250BW",
      "Brand": "Samsung",
      "Model": "840 Evo 250GB",
      "Rank": 266,
      "Benchmark": 95.1,
      "Samples": 185457,
      "URL": "https://ssd.userbenchmark.com/Samsung-840-Evo-250GB/Rating/1594"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNP44SC480GB",
      "Brand": "Mushkin",
      "Model": "Scorpion Deluxe PCIe 480GB",
      "Rank": 267,
      "Benchmark": 94.9,
      "Samples": 109,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11924/Mushkin-Scorpion-Deluxe"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR150-25SAT3-480G",
      "Brand": "OCZ",
      "Model": "Vector 150 480GB",
      "Rank": 268,
      "Benchmark": 94.8,
      "Samples": 348,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7037/OCZ-VECTOR150"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSN5128GPUK NVMe PCIe M.2 128GB",
      "Rank": 269,
      "Benchmark": 94.7,
      "Samples": 996,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/335393/NVMe-THNSN5128GPUK-TO"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2KW256G8",
      "Brand": "Intel",
      "Model": "545s Series 256GB",
      "Rank": 270,
      "Benchmark": 94.7,
      "Samples": 11964,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/299881/INTEL-SSDSC2KW256G8"
    },
    {
      "Type": "SSD",
      "Part Number": "MDNVME80-SBX-0128",
      "Brand": "MyDigitalSSD",
      "Model": "SBX NVMe PCIe M.2 128GB",
      "Rank": 271,
      "Benchmark": 94.6,
      "Samples": 112,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/431053/SBX"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-512M6Pro",
      "Brand": "Plextor",
      "Model": "M6 Pro 512GB",
      "Rank": 272,
      "Benchmark": 94.3,
      "Samples": 184,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15117/PLEXTOR-PX-512M6Pro"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-256M6Pro",
      "Brand": "Plextor",
      "Model": "M6 Pro 256GB",
      "Rank": 273,
      "Benchmark": 94.2,
      "Samples": 819,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/14560/PLEXTOR-PX-256M6Pro"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDST960GB",
      "Brand": "Mushkin",
      "Model": "Striker 960GB",
      "Rank": 274,
      "Benchmark": 94.2,
      "Samples": 22,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/25597/MKNSSDST960GB"
    },
    {
      "Type": "SSD",
      "Part Number": "2AP98AA#ABL",
      "Brand": "HP",
      "Model": "S700 Pro 256GB",
      "Rank": 275,
      "Benchmark": 94,
      "Samples": 980,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/366058/HP-SSD-S700-Pro"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDXPS-480G-G25",
      "Brand": "SanDisk",
      "Model": "Extreme Pro 480GB",
      "Rank": 276,
      "Benchmark": 94,
      "Samples": 8233,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Extreme-Pro-480GB/Rating/3476"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR1-25SAT3-512G",
      "Brand": "OCZ",
      "Model": "Vector 512GB",
      "Rank": 277,
      "Benchmark": 93.8,
      "Samples": 305,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1810/OCZ-VECTOR"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7PD256BW",
      "Brand": "Samsung",
      "Model": "840 Pro 256GB",
      "Rank": 278,
      "Benchmark": 93.6,
      "Samples": 53393,
      "URL": "https://ssd.userbenchmark.com/Samsung-840-Pro-256GB/Rating/1408"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR1-25SAT3-256G",
      "Brand": "OCZ",
      "Model": "Vector 256GB",
      "Rank": 279,
      "Benchmark": 93.3,
      "Samples": 1813,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vector-256GB/Rating/1424"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR180-25SAT3-240G",
      "Brand": "Toshiba",
      "Model": "OCZ VT180 240GB",
      "Rank": 280,
      "Benchmark": 93,
      "Samples": 125,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/171243/TOSHIBA-VT180"
    },
    {
      "Type": "SSD",
      "Part Number": "CT1000BX100SSD1",
      "Brand": "Crucial",
      "Model": "BX100 1TB",
      "Rank": 281,
      "Benchmark": 93,
      "Samples": 1198,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/22670/CT1000BX100SSD1"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76Q1T0BW",
      "Brand": "Samsung",
      "Model": "860 QVO 1TB",
      "Rank": 282,
      "Benchmark": 92.9,
      "Samples": 126777,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/667965/Samsung-SSD-860-QVO-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-76Q1T0B/AM",
      "Brand": "Samsung",
      "Model": "860 QVO 1TB",
      "Rank": 282,
      "Benchmark": 92.9,
      "Samples": 126777,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/667965/Samsung-SSD-860-QVO-1TB"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX460A-25SAT3-240G",
      "Brand": "OCZ",
      "Model": "Vertex 460A 240GB",
      "Rank": 283,
      "Benchmark": 92.8,
      "Samples": 1022,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vertex-460A-240GB/Rating/3147"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-N960GBXT",
      "Brand": "Corsair",
      "Model": "Neutron XT 960GB",
      "Rank": 284,
      "Benchmark": 92.8,
      "Samples": 172,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/23267/Corsair-Neutron-XT-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "CT250MX200SSD1",
      "Brand": "Crucial",
      "Model": "MX200 250GB",
      "Rank": 285,
      "Benchmark": 92.8,
      "Samples": 18806,
      "URL": "https://ssd.userbenchmark.com/Crucial-MX200-250GB/Rating/3196"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-MTE500BW",
      "Brand": "Samsung",
      "Model": "840 Evo mSATA 500GB",
      "Rank": 286,
      "Benchmark": 92.5,
      "Samples": 643,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10255/Samsung-SSD-840-EVO-500GB-mSATA"
    },
    {
      "Type": "SSD",
      "Part Number": "CT256M550SSD4",
      "Brand": "Crucial",
      "Model": "M550 SATA M.2 256GB",
      "Rank": 287,
      "Benchmark": 92.5,
      "Samples": 128,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12143/Crucial-CT256M550SSD4"
    },
    {
      "Type": "SSD",
      "Part Number": "CT512M550SSD4",
      "Brand": "Crucial",
      "Model": "M550 SATA M.2 512GB",
      "Rank": 288,
      "Benchmark": 92.3,
      "Samples": 161,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15375/Crucial-CT512M550SSD4"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR180-25SAT3-960G",
      "Brand": "OCZ",
      "Model": "Vector 180 960GB",
      "Rank": 289,
      "Benchmark": 92.3,
      "Samples": 305,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/30972/OCZ-VECTOR180"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDXPS-240G",
      "Brand": "SanDisk",
      "Model": "Extreme Pro 240GB",
      "Rank": 290,
      "Benchmark": 92.3,
      "Samples": 8858,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Extreme-Pro-240GB/Rating/2356"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR180-25SAT3-480G",
      "Brand": "Toshiba",
      "Model": "OCZ VT180 480GB",
      "Rank": 291,
      "Benchmark": 92.2,
      "Samples": 101,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/146334/TOSHIBA-VT180"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDXP-480G-G25",
      "Brand": "SanDisk",
      "Model": "Extreme II 480GB",
      "Rank": 292,
      "Benchmark": 92.1,
      "Samples": 1233,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2135/SanDisk-SDSSDXP480G"
    },
    {
      "Type": "SSD",
      "Part Number": "RADEON-R7SSD-480G",
      "Brand": "OCZ",
      "Model": "AMD Radeon R7 480GB",
      "Rank": 293,
      "Benchmark": 92.1,
      "Samples": 703,
      "URL": "https://ssd.userbenchmark.com/OCZ-AMD-Radeon-R7-480GB/Rating/3507"
    },
    {
      "Type": "SSD",
      "Part Number": "CT1024M550SSD1",
      "Brand": "Crucial",
      "Model": "M550 1TB",
      "Rank": 294,
      "Benchmark": 92.1,
      "Samples": 1375,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7108/Crucial-CT1024M550SSD1"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-512M6V",
      "Brand": "Plextor",
      "Model": "M6V 512GB",
      "Rank": 295,
      "Benchmark": 91.8,
      "Samples": 46,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/31388/PLEXTOR-PX-512M6V"
    },
    {
      "Type": "SSD",
      "Part Number": "PI480GS25SSDR",
      "Brand": "Patriot",
      "Model": "Ignite 480GB",
      "Rank": 296,
      "Benchmark": 91.5,
      "Samples": 2146,
      "URL": "https://ssd.userbenchmark.com/Patriot-Ignite-480GB/Rating/3574"
    },
    {
      "Type": "SSD",
      "Part Number": "CT512M550SSD1",
      "Brand": "Crucial",
      "Model": "M550 512GB",
      "Rank": 297,
      "Benchmark": 91.4,
      "Samples": 4298,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7172/Crucial-CT512M550SSD1"
    },
    {
      "Type": "SSD",
      "Part Number": "SHSS37A/240G",
      "Brand": "HyperX",
      "Model": "Savage 240GB",
      "Rank": 298,
      "Benchmark": 91.3,
      "Samples": 31639,
      "URL": "https://ssd.userbenchmark.com/HyperX-Savage-240GB/Rating/3494"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS1311-960-RB",
      "Brand": "PNY",
      "Model": "CS1311 960GB",
      "Rank": 299,
      "Benchmark": 91.3,
      "Samples": 2852,
      "URL": "https://ssd.userbenchmark.com/PNY-CS1311-960GB/Rating/3617"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR180-25SAT3-480G",
      "Brand": "OCZ",
      "Model": "Vector 180 480GB",
      "Rank": 300,
      "Benchmark": 91.3,
      "Samples": 907,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vector-180-480GB/Rating/3508"
    },
    {
      "Type": "SSD",
      "Part Number": "RVD3X2-FHPX4-480G",
      "Brand": "OCZ",
      "Model": "RevoDrive 3 X2 PCIe 480GB",
      "Rank": 301,
      "Benchmark": 91.2,
      "Samples": 231,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8804/OCZ-REVODRIVE3-X2"
    },
    {
      "Type": "SSD",
      "Part Number": "SHSS37A/960G",
      "Brand": "HyperX",
      "Model": "Savage 960GB",
      "Rank": 302,
      "Benchmark": 91.2,
      "Samples": 1274,
      "URL": "https://ssd.userbenchmark.com/HyperX-Savage-960GB/Rating/3580"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX460A-25SAT3-480G",
      "Brand": "OCZ",
      "Model": "Vertex 460A 480GB",
      "Rank": 303,
      "Benchmark": 91.1,
      "Samples": 431,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/21677/OCZ-VERTEX460A"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS2211-480-RB",
      "Brand": "PNY",
      "Model": "CS2211 480GB",
      "Rank": 304,
      "Benchmark": 91.1,
      "Samples": 1608,
      "URL": "https://ssd.userbenchmark.com/PNY-CS2211-480GB/Rating/3630"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS2211-480-PB",
      "Brand": "PNY",
      "Model": "CS2211 480GB",
      "Rank": 304,
      "Benchmark": 91.1,
      "Samples": 1608,
      "URL": "https://ssd.userbenchmark.com/PNY-CS2211-480GB/Rating/3630"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-750120BW",
      "Brand": "Samsung",
      "Model": "750 EVO 120GB",
      "Rank": 305,
      "Benchmark": 91,
      "Samples": 16496,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/42465/Samsung-SSD-750-EVO-120GB"
    },
    {
      "Type": "SSD",
      "Part Number": "ASU800SS-256GT-C",
      "Brand": "Adata",
      "Model": "Ultimate SU800 256GB",
      "Rank": 306,
      "Benchmark": 91,
      "Samples": 28828,
      "URL": "https://ssd.userbenchmark.com/Adata-Ultimate-SU800-256GB/Rating/3912"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-N240GBXT",
      "Brand": "Corsair",
      "Model": "Neutron XT 240GB",
      "Rank": 307,
      "Benchmark": 90.9,
      "Samples": 1359,
      "URL": "https://ssd.userbenchmark.com/Corsair-Neutron-XT-240GB/Rating/3277"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX4-25SAT3-512G",
      "Brand": "OCZ",
      "Model": "Vertex 4 512GB",
      "Rank": 308,
      "Benchmark": 90.9,
      "Samples": 1264,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4340/OCZ-VERTEX4"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7TE120BW",
      "Brand": "Samsung",
      "Model": "840 Evo 120GB",
      "Rank": 309,
      "Benchmark": 90.8,
      "Samples": 86163,
      "URL": "https://ssd.userbenchmark.com/Samsung-840-Evo-120GB/Rating/1886"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZFLV256 NVMe PCIe M.2 256GB",
      "Rank": 310,
      "Benchmark": 90.8,
      "Samples": 3799,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/37597/NVMe-SAMSUNG-MZFLV256"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR180-25SAT3-240G",
      "Brand": "OCZ",
      "Model": "Vector 180 240GB",
      "Rank": 311,
      "Benchmark": 90.7,
      "Samples": 955,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vector-180-240GB/Rating/3493"
    },
    {
      "Type": "SSD",
      "Part Number": "CT256M550SSD1",
      "Brand": "Crucial",
      "Model": "M550 256GB",
      "Rank": 312,
      "Benchmark": 90.6,
      "Samples": 5832,
      "URL": "https://ssd.userbenchmark.com/Crucial-M550-256GB/Rating/2000"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Micron",
      "Model": "M600 256GB",
      "Rank": 313,
      "Benchmark": 90.4,
      "Samples": 833,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/24442/Micron-M600-MTFDDAK256MBF"
    },
    {
      "Type": "SSD",
      "Part Number": "CT500BX100SSD1",
      "Brand": "Crucial",
      "Model": "BX100 500GB",
      "Rank": 314,
      "Benchmark": 90.4,
      "Samples": 12053,
      "URL": "https://ssd.userbenchmark.com/Crucial-BX100-500GB/Rating/3474"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS2211-960-RB",
      "Brand": "PNY",
      "Model": "CS2211 960GB",
      "Rank": 315,
      "Benchmark": 90.4,
      "Samples": 194,
      "URL": "https://ssd.userbenchmark.com/PNY-CS2211-960GB/Rating/3631"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS2211-960-PB",
      "Brand": "PNY",
      "Model": "CS2211 960GB",
      "Rank": 315,
      "Benchmark": 90.4,
      "Samples": 194,
      "URL": "https://ssd.userbenchmark.com/PNY-CS2211-960GB/Rating/3631"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDRE512GB",
      "Brand": "Mushkin",
      "Model": "Reactor 512GB",
      "Rank": 316,
      "Benchmark": 90.3,
      "Samples": 789,
      "URL": "https://ssd.userbenchmark.com/Mushkin-Reactor-512GB/Rating/3584"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS451XZSTA",
      "Brand": "Toshiba",
      "Model": "Q300 Pro 512GB",
      "Rank": 317,
      "Benchmark": 90.3,
      "Samples": 117,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/57809/TOSHIBA-Q300-Pro"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F512GBLX",
      "Brand": "Corsair",
      "Model": "Force LX 512GB",
      "Rank": 318,
      "Benchmark": 90.2,
      "Samples": 385,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/16265/CORSAIR-FORCE-LX-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7PD128BW",
      "Brand": "Samsung",
      "Model": "840 Pro 128GB",
      "Rank": 319,
      "Benchmark": 90.1,
      "Samples": 28715,
      "URL": "https://ssd.userbenchmark.com/Samsung-840-Pro-128GB/Rating/1890"
    },
    {
      "Type": "SSD",
      "Part Number": "CT1050MX300SSD1",
      "Brand": "Crucial",
      "Model": "MX300 1TB",
      "Rank": 320,
      "Benchmark": 90,
      "Samples": 13262,
      "URL": "https://ssd.userbenchmark.com/Crucial-MX300-1TB/Rating/3645"
    },
    {
      "Type": "SSD",
      "Part Number": "CT120BX300SSD1",
      "Brand": "Crucial",
      "Model": "BX300 120GB",
      "Rank": 321,
      "Benchmark": 89.9,
      "Samples": 5284,
      "URL": "https://ssd.userbenchmark.com/Crucial-BX300-120GB/Rating/3945"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX4-25SAT3-256G",
      "Brand": "OCZ",
      "Model": "Vertex 4 256GB",
      "Rank": 322,
      "Benchmark": 89.8,
      "Samples": 9218,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vertex-4-256GB/Rating/1315"
    },
    {
      "Type": "SSD",
      "Part Number": "VX500-25SAT3-512G",
      "Brand": "Toshiba",
      "Model": "OCZ VX500 512GB",
      "Rank": 323,
      "Benchmark": 89.6,
      "Samples": 133,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/190983/TOSHIBA-VX500"
    },
    {
      "Type": "SSD",
      "Part Number": "CT1050MX300SSD4",
      "Brand": "Crucial",
      "Model": "MX300 SATA M.2 1TB",
      "Rank": 324,
      "Benchmark": 89.5,
      "Samples": 5390,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/182535/Crucial-CT1050MX300SSD4"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-256M6S",
      "Brand": "Plextor",
      "Model": "M6S 256GB",
      "Rank": 325,
      "Benchmark": 89.5,
      "Samples": 1287,
      "URL": "https://ssd.userbenchmark.com/Plextor-M6S-256GB/Rating/3505"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDPEKKF128GX1",
      "Brand": "Intel",
      "Model": "Pro 6000p NVMe PCIe M.2 128GB",
      "Rank": 326,
      "Benchmark": 89.5,
      "Samples": 69,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/275754/INTEL-SSDPEKKF128G7"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR150-25SAT3-240G",
      "Brand": "OCZ",
      "Model": "Vector 150 240GB",
      "Rank": 327,
      "Benchmark": 89.4,
      "Samples": 1429,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vector-150-240GB/Rating/1748"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-256M5P",
      "Brand": "Plextor",
      "Model": "M5 Pro 256GB",
      "Rank": 328,
      "Benchmark": 89.4,
      "Samples": 2102,
      "URL": "https://ssd.userbenchmark.com/Plextor-M5-Pro-256GB/Rating/1410"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX460-25SAT3-240G",
      "Brand": "OCZ",
      "Model": "Vertex 460 240GB",
      "Rank": 329,
      "Benchmark": 89.3,
      "Samples": 1552,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vertex-460-240GB/Rating/2043"
    },
    {
      "Type": "SSD",
      "Part Number": "ZTSSD-A5P-480G-PE",
      "Brand": "Zotac",
      "Model": "Premium Edition 480GB",
      "Rank": 330,
      "Benchmark": 89.2,
      "Samples": 252,
      "URL": "https://ssd.userbenchmark.com/Zotac-Premium-Edition-480GB/Rating/3599"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-MTE250BW",
      "Brand": "Samsung",
      "Model": "840 Evo mSATA 250GB",
      "Rank": 331,
      "Benchmark": 89.1,
      "Samples": 1313,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5250/Samsung-SSD-840-EVO-250GB-mSATA"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDXP-240G-G25",
      "Brand": "SanDisk",
      "Model": "Extreme II 240GB",
      "Rank": 332,
      "Benchmark": 89,
      "Samples": 2040,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Extreme-II-240GB/Rating/1545"
    },
    {
      "Type": "SSD",
      "Part Number": "RADEON-R7SSD-240G",
      "Brand": "OCZ",
      "Model": "AMD Radeon R7 240GB",
      "Rank": 333,
      "Benchmark": 89,
      "Samples": 2061,
      "URL": "https://ssd.userbenchmark.com/OCZ-AMD-Radeon-R7-240GB/Rating/2492"
    },
    {
      "Type": "SSD",
      "Part Number": "CT750MX300SSD1",
      "Brand": "Crucial",
      "Model": "MX300 750GB",
      "Rank": 334,
      "Benchmark": 88.9,
      "Samples": 17214,
      "URL": "https://ssd.userbenchmark.com/Crucial-MX300-750GB/Rating/3644"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDRE1TB",
      "Brand": "Mushkin",
      "Model": "Reactor 1TB",
      "Rank": 335,
      "Benchmark": 88.9,
      "Samples": 8442,
      "URL": "https://ssd.userbenchmark.com/Mushkin-Reactor-1TB/Rating/3583"
    },
    {
      "Type": "SSD",
      "Part Number": "CT512M550SSD3",
      "Brand": "Crucial",
      "Model": "M550 mSATA 512GB",
      "Rank": 336,
      "Benchmark": 88.8,
      "Samples": 380,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8510/Crucial-CT512M550SSD3"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-N240GBXTI",
      "Brand": "Corsair",
      "Model": "Neutron XTi 240GB",
      "Rank": 337,
      "Benchmark": 88.7,
      "Samples": 715,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/159221/Corsair-Neutron-XTI-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP610SS3-1TM-C",
      "Brand": "Adata",
      "Model": "Premier SP610 1TB",
      "Rank": 338,
      "Benchmark": 88.6,
      "Samples": 136,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/19263/ADATA-SP610"
    },
    {
      "Type": "SSD",
      "Part Number": "SB1CSK31MT560-0240",
      "Brand": "OCZ",
      "Model": "Saber 1000 240GB",
      "Rank": 339,
      "Benchmark": 88.6,
      "Samples": 89,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/36693/OCZ-SABER1000"
    },
    {
      "Type": "SSD",
      "Part Number": "PI240GS325SSDR",
      "Brand": "Patriot",
      "Model": "Ignite 240GB",
      "Rank": 340,
      "Benchmark": 88.6,
      "Samples": 1645,
      "URL": "https://ssd.userbenchmark.com/Patriot-Ignite-240GB/Rating/3573"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC240G5SA754D117-511 240GB",
      "Rank": 341,
      "Benchmark": 88.2,
      "Samples": 440,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11704/SSD2SC240G5SA754D117-511"
    },
    {
      "Type": "SSD",
      "Part Number": "SKC400S37/1T",
      "Brand": "Kingston",
      "Model": "SSDNow KC400 1TB",
      "Rank": 342,
      "Benchmark": 88.2,
      "Samples": 582,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/127752/KINGSTON-SKC400S371T"
    },
    {
      "Type": "SSD",
      "Part Number": "CT250MX200SSD3",
      "Brand": "Crucial",
      "Model": "MX200 mSATA 250GB",
      "Rank": 343,
      "Benchmark": 88.1,
      "Samples": 878,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/29438/Crucial--CT250MX200SSD3"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS100T1B0A",
      "Brand": "WD",
      "Model": "Blue 1TB",
      "Rank": 344,
      "Benchmark": 88,
      "Samples": 5000,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/186717/WDC-WDS100T1B0A-00H9H0"
    },
    {
      "Type": "SSD",
      "Part Number": "GP-GSM2NE8128GNTD",
      "Brand": "Gigabyte",
      "Model": "NVMe PCIe M.2 128GB",
      "Rank": 345,
      "Benchmark": 88,
      "Samples": 1235,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/602706/GIGABYTE-GP-GSM2NE8128GNTD"
    },
    {
      "Type": "SSD",
      "Part Number": "TRN150-25SAT3-960G",
      "Brand": "OCZ",
      "Model": "Trion 150 960GB",
      "Rank": 346,
      "Benchmark": 87.8,
      "Samples": 2281,
      "URL": "https://ssd.userbenchmark.com/OCZ-Trion-150-960GB/Rating/3621"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX930SS3-120GM-C",
      "Brand": "Adata",
      "Model": "XPG SX930 120GB",
      "Rank": 347,
      "Benchmark": 87.7,
      "Samples": 1009,
      "URL": "https://ssd.userbenchmark.com/Adata-XPG-SX930-120GB/Rating/3635"
    },
    {
      "Type": "SSD",
      "Part Number": "TS256GSSD370S",
      "Brand": "Transcend",
      "Model": "SSD370S 256GB",
      "Rank": 348,
      "Benchmark": 87.7,
      "Samples": 8296,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/26718/TS256GSSD370S"
    },
    {
      "Type": "SSD",
      "Part Number": "2AP97AA#ABL",
      "Brand": "HP",
      "Model": "S700 Pro 128GB",
      "Rank": 349,
      "Benchmark": 87.7,
      "Samples": 495,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/300937/HP-SSD-S700-Pro"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX4-25SAT3-128G",
      "Brand": "OCZ",
      "Model": "Vertex 4 128GB",
      "Rank": 350,
      "Benchmark": 87.4,
      "Samples": 17049,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vertex-4-128GB/Rating/1895"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BB800G4",
      "Brand": "Intel",
      "Model": "S3500 Series 800GB",
      "Rank": 351,
      "Benchmark": 87.4,
      "Samples": 261,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/30895/INTEL-SSDSC2BB800G4"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-256M6V",
      "Brand": "Plextor",
      "Model": "M6V 256GB",
      "Rank": 352,
      "Benchmark": 87.1,
      "Samples": 378,
      "URL": "https://ssd.userbenchmark.com/Plextor-M6V-256GB/Rating/3499"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-512M5P",
      "Brand": "Plextor",
      "Model": "M5 Pro 512GB",
      "Rank": 353,
      "Benchmark": 87,
      "Samples": 493,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1262/PLEXTOR-PX-512M5Pro"
    },
    {
      "Type": "SSD",
      "Part Number": "RADEON-R7SSD-120G",
      "Brand": "OCZ",
      "Model": "AMD Radeon R7 120GB",
      "Rank": 354,
      "Benchmark": 87,
      "Samples": 1010,
      "URL": "https://ssd.userbenchmark.com/OCZ-AMD-Radeon-R7-120GB/Rating/3492"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS2211-240-RB",
      "Brand": "PNY",
      "Model": "CS2211 240GB",
      "Rank": 355,
      "Benchmark": 86.9,
      "Samples": 1531,
      "URL": "https://ssd.userbenchmark.com/PNY-CS2211-240GB/Rating/3629"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS2211-240-PB",
      "Brand": "PNY",
      "Model": "CS2211 240GB",
      "Rank": 355,
      "Benchmark": 86.9,
      "Samples": 1531,
      "URL": "https://ssd.userbenchmark.com/PNY-CS2211-240GB/Rating/3629"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDHII-480G-G25",
      "Brand": "SanDisk",
      "Model": "Ultra II 480GB",
      "Rank": 356,
      "Benchmark": 86.9,
      "Samples": 47943,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Ultra-II-480GB/Rating/3473"
    },
    {
      "Type": "SSD",
      "Part Number": "TS1TSSD370",
      "Brand": "Transcend",
      "Model": "SSD370 1TB",
      "Rank": 357,
      "Benchmark": 86.9,
      "Samples": 207,
      "URL": "https://ssd.userbenchmark.com/Transcend-SSD370-1TB/Rating/3579"
    },
    {
      "Type": "SSD",
      "Part Number": "CT256M550SSD3",
      "Brand": "Crucial",
      "Model": "M550 mSATA 256GB",
      "Rank": 358,
      "Benchmark": 86.8,
      "Samples": 621,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8589/Crucial-CT256M550SSD3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "AGILITY3 256GB",
      "Rank": 359,
      "Benchmark": 86.8,
      "Samples": 5,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9551/OCZ-AGILITY3"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP610SS3-512GM-C",
      "Brand": "Adata",
      "Model": "Premier SP610 512GB",
      "Rank": 360,
      "Benchmark": 86.7,
      "Samples": 213,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15096/ADATA-SP610"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX450-25SAT3-256G",
      "Brand": "OCZ",
      "Model": "Vertex 450 256GB",
      "Rank": 361,
      "Benchmark": 86.6,
      "Samples": 367,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vertex-450-256GB/Rating/1605"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX460-25SAT3-480G",
      "Brand": "OCZ",
      "Model": "Vertex 460 480GB",
      "Rank": 362,
      "Benchmark": 86.6,
      "Samples": 346,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11920/OCZ-VERTEX460"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNJ256GCSU",
      "Brand": "Toshiba",
      "Model": "HG6 256GB",
      "Rank": 363,
      "Benchmark": 86.5,
      "Samples": 3732,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11911/TOSHIBA-THNSNJ256GCSU"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-512M6S",
      "Brand": "Plextor",
      "Model": "M6S 512GB",
      "Rank": 364,
      "Benchmark": 86.5,
      "Samples": 79,
      "URL": "https://ssd.userbenchmark.com/Plextor-M6S-512GB/Rating/3506"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX930SS3-240GM-C",
      "Brand": "Adata",
      "Model": "XPG SX930 240GB",
      "Rank": 365,
      "Benchmark": 86.5,
      "Samples": 1270,
      "URL": "https://ssd.userbenchmark.com/Adata-XPG-SX930-240GB/Rating/3636"
    },
    {
      "Type": "SSD",
      "Part Number": "PI960GS25SSDR",
      "Brand": "Patriot",
      "Model": "Ignite 960GB",
      "Rank": 366,
      "Benchmark": 86.4,
      "Samples": 159,
      "URL": "https://ssd.userbenchmark.com/Patriot-Ignite-960GB/Rating/3575"
    },
    {
      "Type": "SSD",
      "Part Number": "CT525MX300SSD1",
      "Brand": "Crucial",
      "Model": "MX300 525GB",
      "Rank": 367,
      "Benchmark": 86.3,
      "Samples": 81500,
      "URL": "https://ssd.userbenchmark.com/Crucial-MX300-525GB/Rating/3643"
    },
    {
      "Type": "SSD",
      "Part Number": "CT512MX100SSD1",
      "Brand": "Crucial",
      "Model": "MX100 512GB",
      "Rank": 368,
      "Benchmark": 86.1,
      "Samples": 26293,
      "URL": "https://ssd.userbenchmark.com/Crucial-MX100-512GB/Rating/3475"
    },
    {
      "Type": "SSD",
      "Part Number": "CT525MX300SSD4",
      "Brand": "Crucial",
      "Model": "MX300 SATA M.2 525GB",
      "Rank": 369,
      "Benchmark": 86.1,
      "Samples": 16393,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/174014/Crucial-CT525MX300SSD4"
    },
    {
      "Type": "SSD",
      "Part Number": "ARC100-25SAT3-240G",
      "Brand": "OCZ",
      "Model": "ARC 100 240GB",
      "Rank": 370,
      "Benchmark": 86,
      "Samples": 10150,
      "URL": "https://ssd.userbenchmark.com/OCZ-ARC-100-240GB/Rating/2603"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX460A-25SAT3-120G",
      "Brand": "OCZ",
      "Model": "Vertex 460A 120GB",
      "Rank": 371,
      "Benchmark": 85.9,
      "Samples": 724,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vertex-460A-120GB/Rating/3490"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR180-25SAT3-120G",
      "Brand": "Toshiba",
      "Model": "OCZ VT180 120GB",
      "Rank": 372,
      "Benchmark": 85.8,
      "Samples": 38,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/172941/TOSHIBA-VT180"
    },
    {
      "Type": "SSD",
      "Part Number": "CT128M550SSD1",
      "Brand": "Crucial",
      "Model": "M550 128GB",
      "Rank": 373,
      "Benchmark": 85.8,
      "Samples": 2256,
      "URL": "https://ssd.userbenchmark.com/Crucial-M550-128GB/Rating/3485"
    },
    {
      "Type": "SSD",
      "Part Number": "CT500MX200SSD3",
      "Brand": "Crucial",
      "Model": "MX200 mSATA 500GB",
      "Rank": 374,
      "Benchmark": 85.8,
      "Samples": 477,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/24060/Crucial-CT500MX200SSD3"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS1311-480-RB",
      "Brand": "PNY",
      "Model": "CS1311 480GB",
      "Rank": 375,
      "Benchmark": 85.7,
      "Samples": 10711,
      "URL": "https://ssd.userbenchmark.com/PNY-CS1311-480GB/Rating/3616"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Micron",
      "Model": "M600 SATA M.2 256GB",
      "Rank": 376,
      "Benchmark": 85.6,
      "Samples": 2202,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/22043/Micron-M600-MTFDDAV256MBF"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-128M6Pro",
      "Brand": "Plextor",
      "Model": "M6 Pro 128GB",
      "Rank": 377,
      "Benchmark": 85.6,
      "Samples": 644,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/14853/PLEXTOR-PX-128M6Pro"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR180-25SAT3-120G",
      "Brand": "OCZ",
      "Model": "Vector 180 120GB",
      "Rank": 378,
      "Benchmark": 85.6,
      "Samples": 334,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vector-180-120GB/Rating/3495"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDH3-250G-G25",
      "Brand": "SanDisk",
      "Model": "Ultra 3D 250GB",
      "Rank": 379,
      "Benchmark": 85.6,
      "Samples": 4348,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Ultra-3D-250GB/Rating/3952"
    },
    {
      "Type": "SSD",
      "Part Number": "CT128M550SSD4",
      "Brand": "Crucial",
      "Model": "M550 SATA M.2 128GB",
      "Rank": 380,
      "Benchmark": 85.6,
      "Samples": 149,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15846/Crucial-CT128M550SSD4"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS250G2B0A",
      "Brand": "WD",
      "Model": "Blue 3D 250GB",
      "Rank": 381,
      "Benchmark": 85.6,
      "Samples": 13721,
      "URL": "https://ssd.userbenchmark.com/WD-Blue-3D-250GB/Rating/3948"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS900-960-RB",
      "Brand": "PNY",
      "Model": "CS900 960GB",
      "Rank": 382,
      "Benchmark": 85.5,
      "Samples": 4053,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/443150/PNY-CS900-960GB-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "SKC400S37/512G",
      "Brand": "Kingston",
      "Model": "SSDNow KC400 512GB",
      "Rank": 383,
      "Benchmark": 85.5,
      "Samples": 1959,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/72936/KINGSTON-SKC400S37512G"
    },
    {
      "Type": "SSD",
      "Part Number": "CT250BX100SSD1",
      "Brand": "Crucial",
      "Model": "BX100 250GB",
      "Rank": 384,
      "Benchmark": 85.5,
      "Samples": 30870,
      "URL": "https://ssd.userbenchmark.com/Crucial-BX100-250GB/Rating/3145"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-128M6S",
      "Brand": "Plextor",
      "Model": "M6S 128GB",
      "Rank": 385,
      "Benchmark": 85.5,
      "Samples": 2467,
      "URL": "https://ssd.userbenchmark.com/Plextor-M6S-128GB/Rating/2225"
    },
    {
      "Type": "SSD",
      "Part Number": "SHSS37A/120G",
      "Brand": "HyperX",
      "Model": "Savage 120GB",
      "Rank": 386,
      "Benchmark": 85.5,
      "Samples": 5773,
      "URL": "https://ssd.userbenchmark.com/HyperX-Savage-120GB/Rating/3496"
    },
    {
      "Type": "SSD",
      "Part Number": "ST480HM000",
      "Brand": "Seagate",
      "Model": "600 480GB",
      "Rank": 387,
      "Benchmark": 85.2,
      "Samples": 1073,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2966/ST480HM000-1G5162"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-MTE120BW",
      "Brand": "Samsung",
      "Model": "840 Evo mSATA 120GB",
      "Rank": 388,
      "Benchmark": 85.2,
      "Samples": 577,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5728/Samsung-SSD-840-EVO-120GB-mSATA"
    },
    {
      "Type": "SSD",
      "Part Number": "ARC100-25SAT3-480G",
      "Brand": "OCZ",
      "Model": "ARC 100 480GB",
      "Rank": 389,
      "Benchmark": 85.2,
      "Samples": 1583,
      "URL": "https://ssd.userbenchmark.com/OCZ-ARC-100-480GB/Rating/3471"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS250G2B0B",
      "Brand": "WD",
      "Model": "Blue 3D SATA M.2 250GB",
      "Rank": 390,
      "Benchmark": 85.2,
      "Samples": 9861,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/341807/WDC-WDS250G2B0B-00YS70"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZ7PD256HAFV-000H7 256GB",
      "Rank": 391,
      "Benchmark": 85.1,
      "Samples": 2880,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4570/SAMSUNG-MZ7PD256HAFV-000H7"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS500G1B0A",
      "Brand": "WD",
      "Model": "Blue 500GB",
      "Rank": 392,
      "Benchmark": 85,
      "Samples": 12572,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/192687/WDC-WDS500G1B0A-00H9H0"
    },
    {
      "Type": "SSD",
      "Part Number": "VX500-25SAT3-256G",
      "Brand": "Toshiba",
      "Model": "OCZ VX500 256GB",
      "Rank": 393,
      "Benchmark": 84.9,
      "Samples": 168,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/193061/TOSHIBA-VX500"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS325XZSTA",
      "Brand": "Toshiba",
      "Model": "Q Series Pro 256GB",
      "Rank": 394,
      "Benchmark": 84.9,
      "Samples": 1419,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7204/TOSHIBA-THNSNJ25"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS325EZSTA",
      "Brand": "Toshiba",
      "Model": "Q Series Pro 256GB",
      "Rank": 394,
      "Benchmark": 84.9,
      "Samples": 1419,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7204/TOSHIBA-THNSNJ25"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNJ256GCST",
      "Brand": "Toshiba",
      "Model": "Q Series Pro 256GB",
      "Rank": 394,
      "Benchmark": 84.9,
      "Samples": 1419,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7204/TOSHIBA-THNSNJ25"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS500G1B0B",
      "Brand": "WD",
      "Model": "Blue SATA M.2 500GB",
      "Rank": 395,
      "Benchmark": 84.9,
      "Samples": 5060,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/209713/WDC-WDS500G1B0B-00AS40"
    },
    {
      "Type": "SSD",
      "Part Number": "ZTSSD-A5P-240G-PE",
      "Brand": "Zotac",
      "Model": "Premium Edition 240GB",
      "Rank": 396,
      "Benchmark": 84.8,
      "Samples": 1040,
      "URL": "https://ssd.userbenchmark.com/Zotac-Premium-Edition-240GB/Rating/3598"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BB480G4",
      "Brand": "Intel",
      "Model": "S3500 Series 480GB",
      "Rank": 397,
      "Benchmark": 84.8,
      "Samples": 776,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/16864/INTEL-SSDSC2BB480G4"
    },
    {
      "Type": "SSD",
      "Part Number": "TS512GSSD370",
      "Brand": "Transcend",
      "Model": "SSD370 512GB",
      "Rank": 398,
      "Benchmark": 84.6,
      "Samples": 1268,
      "URL": "https://ssd.userbenchmark.com/Transcend-SSD370-512GB/Rating/3472"
    },
    {
      "Type": "SSD",
      "Part Number": "TS512GMTS800",
      "Brand": "Transcend",
      "Model": "MTS800 M.2 512GB",
      "Rank": 399,
      "Benchmark": 84.6,
      "Samples": 511,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/22251/TS512GMTS800"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LCS-256L9S-11 2.5 7mm 256GB",
      "Rank": 400,
      "Benchmark": 84.6,
      "Samples": 3548,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11259/LITEONIT-LCS-256L9S-11-25-7mm-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SD8SB8U-1T00-1122",
      "Brand": "SanDisk",
      "Model": "X400 1TB",
      "Rank": 401,
      "Benchmark": 84.5,
      "Samples": 1765,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/66487/SanDisk-SD8SB8U1T001122"
    },
    {
      "Type": "SSD",
      "Part Number": "SKC400S37/256G",
      "Brand": "Kingston",
      "Model": "SSDNow KC400 256GB",
      "Rank": 402,
      "Benchmark": 84.5,
      "Samples": 2326,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/79042/KINGSTON-SKC400S37256G"
    },
    {
      "Type": "SSD",
      "Part Number": "GP-GSTFS30512GTTD",
      "Brand": "Gigabyte",
      "Model": "UD PRO 512GB",
      "Rank": 403,
      "Benchmark": 84.3,
      "Samples": 2369,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/522549/GIGABYTE-GP-GSTFS30512GTTD"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX460-25SAT3-120G",
      "Brand": "OCZ",
      "Model": "Vertex 460 120GB",
      "Rank": 404,
      "Benchmark": 84.3,
      "Samples": 1037,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vertex-460-120GB/Rating/3488"
    },
    {
      "Type": "SSD",
      "Part Number": "TRN150-25SAT3-480G",
      "Brand": "OCZ",
      "Model": "Trion 150 480GB",
      "Rank": 405,
      "Benchmark": 84.3,
      "Samples": 11455,
      "URL": "https://ssd.userbenchmark.com/OCZ-Trion-150-480GB/Rating/3620"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS100T1B0B",
      "Brand": "WD",
      "Model": "Blue SATA M.2 1TB",
      "Rank": 406,
      "Benchmark": 84.2,
      "Samples": 2089,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/199326/WDC-WDS100T1B0B-00AS40"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDXP-120G-G25",
      "Brand": "SanDisk",
      "Model": "Extreme II 120GB",
      "Rank": 407,
      "Benchmark": 84.2,
      "Samples": 1984,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Extreme-II-120GB/Rating/1889"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LCS-256M6S 2.5 7mm 256GB",
      "Rank": 408,
      "Benchmark": 84.1,
      "Samples": 7972,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2535/LITEONIT-LCS-256M6S-25-7mm-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "SM0256F 251GB",
      "Rank": 409,
      "Benchmark": 84,
      "Samples": 222,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3466/APPLE-SSD-SM0256F"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDHII-960G-G25",
      "Brand": "SanDisk",
      "Model": "Ultra II 960GB",
      "Rank": 410,
      "Benchmark": 83.9,
      "Samples": 22467,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Ultra-II-960GB/Rating/3582"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BP240G410",
      "Brand": "Intel",
      "Model": "730 Series 240GB",
      "Rank": 411,
      "Benchmark": 83.9,
      "Samples": 6698,
      "URL": "https://ssd.userbenchmark.com/Intel-730-Series-240GB/Rating/2031"
    },
    {
      "Type": "SSD",
      "Part Number": "GP-GSTFS30256GTTD",
      "Brand": "Gigabyte",
      "Model": "UD PRO 256GB",
      "Rank": 412,
      "Benchmark": 83.9,
      "Samples": 1777,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/514244/GIGABYTE-GP-GSTFS30256GTTD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SM841N 2.5 7mm 256GB",
      "Rank": 413,
      "Benchmark": 83.8,
      "Samples": 1670,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12586/SAMSUNG-SSD-SM841N-25-7mm-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "SM0512F 500GB",
      "Rank": 414,
      "Benchmark": 83.8,
      "Samples": 240,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9630/APPLE-SSD-SM0512F"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS251EZSTA",
      "Brand": "Toshiba",
      "Model": "HG5d Q Series 512GB",
      "Rank": 415,
      "Benchmark": 83.6,
      "Samples": 453,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5182/TOSHIBA-THNSNH512GBST"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS251XZSTA",
      "Brand": "Toshiba",
      "Model": "HG5d Q Series 512GB",
      "Rank": 415,
      "Benchmark": 83.6,
      "Samples": 453,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5182/TOSHIBA-THNSNH512GBST"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNH512GBST",
      "Brand": "Toshiba",
      "Model": "HG5d Q Series 512GB",
      "Rank": 415,
      "Benchmark": 83.6,
      "Samples": 453,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5182/TOSHIBA-THNSNH512GBST"
    },
    {
      "Type": "SSD",
      "Part Number": "SD8SB8U-512G-1122",
      "Brand": "SanDisk",
      "Model": "X400 512GB",
      "Rank": 416,
      "Benchmark": 83.6,
      "Samples": 6144,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/74118/SanDisk-SD8SB8U512G1122"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDST480GB",
      "Brand": "Mushkin",
      "Model": "Striker 480GB",
      "Rank": 417,
      "Benchmark": 83.6,
      "Samples": 207,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/24686/MKNSSDST480GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDE3480GB",
      "Brand": "Mushkin",
      "Model": "ECO3 480GB",
      "Rank": 418,
      "Benchmark": 83.5,
      "Samples": 2069,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/82715/MKNSSDE3480GB"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR1-25SAT3-128G",
      "Brand": "OCZ",
      "Model": "Vector 128GB",
      "Rank": 419,
      "Benchmark": 83.4,
      "Samples": 1202,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4023/OCZ-VECTOR"
    },
    {
      "Type": "SSD",
      "Part Number": "SD6SB2M-512G-1022I",
      "Brand": "SanDisk",
      "Model": "X210 512GB",
      "Rank": 420,
      "Benchmark": 83.3,
      "Samples": 1309,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/16627/SanDisk-SD6SB2M512G1022I"
    },
    {
      "Type": "SSD",
      "Part Number": "CT960BX200SSD1",
      "Brand": "Crucial",
      "Model": "BX200 960GB",
      "Rank": 421,
      "Benchmark": 83.2,
      "Samples": 963,
      "URL": "https://ssd.userbenchmark.com/Crucial-BX200-960GB/Rating/3628"
    },
    {
      "Type": "SSD",
      "Part Number": "VTR150-25SAT3-120G",
      "Brand": "OCZ",
      "Model": "Vector 150 120GB",
      "Rank": 422,
      "Benchmark": 83.2,
      "Samples": 1217,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vector-150-120GB/Rating/2242"
    },
    {
      "Type": "SSD",
      "Part Number": "CT1000MX200SSD1",
      "Brand": "Crucial",
      "Model": "MX200 1TB",
      "Rank": 423,
      "Benchmark": 83.2,
      "Samples": 3067,
      "URL": "https://ssd.userbenchmark.com/Crucial-MX200-1TB/Rating/3578"
    },
    {
      "Type": "SSD",
      "Part Number": "TS512GMTS600",
      "Brand": "Transcend",
      "Model": "MTS600 M.2 512GB",
      "Rank": 424,
      "Benchmark": 83.2,
      "Samples": 114,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/13460/TS512GMTS600"
    },
    {
      "Type": "SSD",
      "Part Number": "VX500-25SAT3-128G",
      "Brand": "Toshiba",
      "Model": "OCZ VX500 128GB",
      "Rank": 425,
      "Benchmark": 83,
      "Samples": 84,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/194663/TOSHIBA-VX500"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F256GBLX",
      "Brand": "Corsair",
      "Model": "Force LX 256GB",
      "Rank": 426,
      "Benchmark": 83,
      "Samples": 1956,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/13556/CORSAIR-FORCE-LX-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "ST240HM000",
      "Brand": "Seagate",
      "Model": "600 240GB",
      "Rank": 427,
      "Benchmark": 82.9,
      "Samples": 2636,
      "URL": "https://ssd.userbenchmark.com/Seagate-600-240GB/Rating/1601"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-128M5P",
      "Brand": "Plextor",
      "Model": "M5 Pro 128GB",
      "Rank": 428,
      "Benchmark": 82.9,
      "Samples": 3464,
      "URL": "https://ssd.userbenchmark.com/Plextor-M5-Pro-128GB/Rating/1893"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDHII-240G-G25",
      "Brand": "SanDisk",
      "Model": "Ultra II 240GB",
      "Rank": 429,
      "Benchmark": 82.9,
      "Samples": 45730,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Ultra-II-240GB/Rating/2548"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Plextor",
      "Model": "PX-256M5S 256GB",
      "Rank": 430,
      "Benchmark": 82.8,
      "Samples": 1876,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1304/PLEXTOR-PX-256M5S"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-N480GBGTXB-BK",
      "Brand": "Corsair",
      "Model": "Neutron GTX 480GB",
      "Rank": 431,
      "Benchmark": 82.8,
      "Samples": 444,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9137/Corsair-Neutron-GTX-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNS240GBSP",
      "Brand": "Toshiba",
      "Model": "THNSNS Series 240GB",
      "Rank": 432,
      "Benchmark": 82.6,
      "Samples": 88,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4786/TOSHIBA-THNSNS240GBSP"
    },
    {
      "Type": "SSD",
      "Part Number": "CT480M500SSD1",
      "Brand": "Crucial",
      "Model": "M500 480GB",
      "Rank": 433,
      "Benchmark": 82.5,
      "Samples": 7272,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2643/Crucial-CT480M500SSD1"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZ7PD128HAFV-000 128GB",
      "Rank": 434,
      "Benchmark": 82.4,
      "Samples": 1291,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9510/SAMSUNG-MZ7PD128HAFV-000"
    },
    {
      "Type": "SSD",
      "Part Number": "CT500MX200SSD1",
      "Brand": "Crucial",
      "Model": "MX200 500GB",
      "Rank": 435,
      "Benchmark": 82.3,
      "Samples": 13093,
      "URL": "https://ssd.userbenchmark.com/Crucial-MX200-500GB/Rating/3504"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDTR480GB",
      "Brand": "Mushkin",
      "Model": "Triactor 480GB",
      "Rank": 436,
      "Benchmark": 82.3,
      "Samples": 1519,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/80762/MKNSSDTR480GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LCS-512M6S 2.5 7mm 512GB",
      "Rank": 437,
      "Benchmark": 82.2,
      "Samples": 907,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4103/LITEONIT-LCS-512M6S-25-7mm-512GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2KW480H6",
      "Brand": "Intel",
      "Model": "540s Series 480GB",
      "Rank": 438,
      "Benchmark": 82.2,
      "Samples": 3431,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/128513/INTEL-SSDSC2KW480H6"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS250G1B0A",
      "Brand": "WD",
      "Model": "Blue 250GB",
      "Rank": 439,
      "Benchmark": 82.1,
      "Samples": 21094,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/191455/WDC-WDS250G1B0A-00H9H0"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-P256GBP-BK",
      "Brand": "Corsair",
      "Model": "Performance Pro 256GB",
      "Rank": 440,
      "Benchmark": 81.9,
      "Samples": 272,
      "URL": "https://ssd.userbenchmark.com/Corsair-Performance-Pro-256GB/Rating/45"
    },
    {
      "Type": "SSD",
      "Part Number": "SD7SB3Q-128G-1002",
      "Brand": "SanDisk",
      "Model": "X300s Non-Secure 256GB",
      "Rank": 441,
      "Benchmark": 81.8,
      "Samples": 2091,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/20604/SanDisk-SD7SB3Q256G1002"
    },
    {
      "Type": "SSD",
      "Part Number": "CT960M500SSD1",
      "Brand": "Crucial",
      "Model": "M500 960GB",
      "Rank": 442,
      "Benchmark": 81.8,
      "Samples": 3199,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2379/Crucial-CT960M500SSD1"
    },
    {
      "Type": "SSD",
      "Part Number": "CT256MX100SSD1",
      "Brand": "Crucial",
      "Model": "MX100 256GB",
      "Rank": 443,
      "Benchmark": 81.7,
      "Samples": 48938,
      "URL": "https://ssd.userbenchmark.com/Crucial-MX100-256GB/Rating/2317"
    },
    {
      "Type": "SSD",
      "Part Number": "SD6SB2M-256G-1022I",
      "Brand": "SanDisk",
      "Model": "X210 256GB",
      "Rank": 444,
      "Benchmark": 81.7,
      "Samples": 199,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2244/SanDisk-SD6SB2M256G1022I"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP610SS3-256GM-C",
      "Brand": "Adata",
      "Model": "Premier SP610 256GB",
      "Rank": 445,
      "Benchmark": 81.7,
      "Samples": 1717,
      "URL": "https://ssd.userbenchmark.com/Adata-Premier-SP610-256GB/Rating/3281"
    },
    {
      "Type": "SSD",
      "Part Number": "SKC400S37/128G",
      "Brand": "Kingston",
      "Model": "SSDNow KC400 128GB",
      "Rank": 446,
      "Benchmark": 81.7,
      "Samples": 627,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/78104/KINGSTON-SKC400S37128G"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDHP-256G-G25",
      "Brand": "SanDisk",
      "Model": "Ultra Plus 256GB",
      "Rank": 447,
      "Benchmark": 81.5,
      "Samples": 15443,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Ultra-Plus-256GB/Rating/1511"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP550SS3-960GM-C",
      "Brand": "Adata",
      "Model": "Premier SP550 960GB",
      "Rank": 448,
      "Benchmark": 81.5,
      "Samples": 898,
      "URL": "https://ssd.userbenchmark.com/Adata-Premier-SP550-960GB/Rating/3625"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS212EZSTA",
      "Brand": "Toshiba",
      "Model": "HG5d Q Series 128GB",
      "Rank": 449,
      "Benchmark": 81.4,
      "Samples": 2135,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2325/TOSHIBA-THNSNH128GBST"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS212XZSTA",
      "Brand": "Toshiba",
      "Model": "HG5d Q Series 128GB",
      "Rank": 449,
      "Benchmark": 81.4,
      "Samples": 2135,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2325/TOSHIBA-THNSNH128GBST"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNH128GBST",
      "Brand": "Toshiba",
      "Model": "HG5d Q Series 128GB",
      "Rank": 449,
      "Benchmark": 81.4,
      "Samples": 2135,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2325/TOSHIBA-THNSNH128GBST"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Plextor",
      "Model": "PX-256M6M 256GB",
      "Rank": 450,
      "Benchmark": 81.4,
      "Samples": 247,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9887/PLEXTOR-PX-256M6M"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSNH512GCST 512GB",
      "Rank": 451,
      "Benchmark": 81.4,
      "Samples": 269,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12185/TOSHIBA-THNSNH512GCST"
    },
    {
      "Type": "SSD",
      "Part Number": "ARC100-25SAT3-120G",
      "Brand": "OCZ",
      "Model": "ARC 100 120GB",
      "Rank": 452,
      "Benchmark": 81.3,
      "Samples": 3313,
      "URL": "https://ssd.userbenchmark.com/OCZ-ARC-100-120GB/Rating/3487"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDRE256GB",
      "Brand": "Mushkin",
      "Model": "Reactor 256GB",
      "Rank": 453,
      "Benchmark": 81.3,
      "Samples": 848,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/30195/MKNSSDRE256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS412XZSTA",
      "Brand": "Toshiba",
      "Model": "Q300 Pro 128GB",
      "Rank": 454,
      "Benchmark": 81.1,
      "Samples": 207,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/41261/TOSHIBA-Q300-Pro"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDE3240GB",
      "Brand": "Mushkin",
      "Model": "ECO3 240GB",
      "Rank": 455,
      "Benchmark": 81,
      "Samples": 697,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/82991/MKNSSDE3240GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SHSS37A/480G",
      "Brand": "HyperX",
      "Model": "Savage 480GB",
      "Rank": 456,
      "Benchmark": 81,
      "Samples": 151,
      "URL": "https://ssd.userbenchmark.com/HyperX-Savage-480GB/Rating/3602"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F240GBLEB",
      "Brand": "Corsair",
      "Model": "Force LE 240GB",
      "Rank": 457,
      "Benchmark": 81,
      "Samples": 12071,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/42143/Corsair-Force-LE-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS312EZSTA",
      "Brand": "Toshiba",
      "Model": "Q Series Pro 128GB",
      "Rank": 458,
      "Benchmark": 80.9,
      "Samples": 2285,
      "URL": "https://ssd.userbenchmark.com/Toshiba-Q-Series-Pro-128GB/Rating/1943"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS312XZSTA",
      "Brand": "Toshiba",
      "Model": "Q Series Pro 128GB",
      "Rank": 458,
      "Benchmark": 80.9,
      "Samples": 2285,
      "URL": "https://ssd.userbenchmark.com/Toshiba-Q-Series-Pro-128GB/Rating/1943"
    },
    {
      "Type": "SSD",
      "Part Number": "TS256GSSD370",
      "Brand": "Transcend",
      "Model": "SSD370 256GB",
      "Rank": 459,
      "Benchmark": 80.9,
      "Samples": 4299,
      "URL": "https://ssd.userbenchmark.com/Transcend-SSD370-256GB/Rating/2701"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SM841 2.5\" 7mm 256GB",
      "Rank": 460,
      "Benchmark": 80.8,
      "Samples": 1982,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4650/SAMSUNG-SSD-SM841-25--7mm-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2KW010X6",
      "Brand": "Intel",
      "Model": "540s Series 1TB",
      "Rank": 461,
      "Benchmark": 80.8,
      "Samples": 1413,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/123180/INTEL-SSDSC2KW010X6"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Plextor",
      "Model": "PX-256M3P 256GB",
      "Rank": 462,
      "Benchmark": 80.7,
      "Samples": 127,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3332/PLEXTOR-PX-256M3P"
    },
    {
      "Type": "SSD",
      "Part Number": "SD7SB6S-256G-1122",
      "Brand": "SanDisk",
      "Model": "X300 256GB",
      "Rank": 463,
      "Benchmark": 80.6,
      "Samples": 1842,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/19618/SanDisk-SD7SB6S256G1122"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SM841 mSATA 256GB",
      "Rank": 464,
      "Benchmark": 80.6,
      "Samples": 836,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4244/SAMSUNG-SSD-SM841-mSATA-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-N240GBGTXB-BK",
      "Brand": "Corsair",
      "Model": "Neutron GTX 240GB",
      "Rank": 465,
      "Benchmark": 80.5,
      "Samples": 2921,
      "URL": "https://ssd.userbenchmark.com/Corsair-Neutron-GTX-240GB/Rating/1404"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SM841 2.5\" 7mm 512GB",
      "Rank": 466,
      "Benchmark": 80.5,
      "Samples": 486,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6119/SAMSUNG-SSD-SM841-25--7mm-512GB"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP920SS3-512GM-C",
      "Brand": "Adata",
      "Model": "Premier Pro SP920 512GB",
      "Rank": 467,
      "Benchmark": 80.4,
      "Samples": 269,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/26813/ADATA-SP920SS"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS1311-240-RB",
      "Brand": "PNY",
      "Model": "CS1311 240GB",
      "Rank": 468,
      "Benchmark": 80.4,
      "Samples": 19804,
      "URL": "https://ssd.userbenchmark.com/PNY-CS1311-240GB/Rating/3615"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS425XZSTA",
      "Brand": "Toshiba",
      "Model": "Q300 Pro 256GB",
      "Rank": 469,
      "Benchmark": 80.4,
      "Samples": 1264,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/35467/TOSHIBA-Q300-Pro"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP920SS3-256GM-C",
      "Brand": "Adata",
      "Model": "Premier Pro SP920 256GB",
      "Rank": 470,
      "Benchmark": 80.3,
      "Samples": 2391,
      "URL": "https://ssd.userbenchmark.com/Adata-Premier-Pro-SP920-256GB/Rating/3454"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP550SS3-480GM-C",
      "Brand": "Adata",
      "Model": "Premier SP550 480GB",
      "Rank": 471,
      "Benchmark": 80.2,
      "Samples": 6796,
      "URL": "https://ssd.userbenchmark.com/Adata-Premier-SP550-480GB/Rating/3624"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7SC240GOPT-RB",
      "Brand": "PNY",
      "Model": "Optima 240GB",
      "Rank": 472,
      "Benchmark": 80.2,
      "Samples": 673,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7567/SSD2SC240G1SA754D117-443"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD2SC240G1SA754D117",
      "Brand": "PNY",
      "Model": "Optima 240GB",
      "Rank": 472,
      "Benchmark": 80.2,
      "Samples": 673,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7567/SSD2SC240G1SA754D117-443"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS900-480-RB",
      "Brand": "PNY",
      "Model": "CS900 480GB",
      "Rank": 473,
      "Benchmark": 79.7,
      "Samples": 10388,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/195106/PNY-CS900-480GB-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "TS256GMTS400",
      "Brand": "Transcend",
      "Model": "MTS400 M.2 256GB",
      "Rank": 474,
      "Benchmark": 79.7,
      "Samples": 874,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/18101/TS256GMTS400"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS250G1B0B",
      "Brand": "WD",
      "Model": "Blue SATA M.2 250GB",
      "Rank": 475,
      "Benchmark": 79.7,
      "Samples": 6950,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/190515/WDC-WDS250G1B0B-00AS40"
    },
    {
      "Type": "SSD",
      "Part Number": "TS256GMTS600",
      "Brand": "Transcend",
      "Model": "MTS600 M.2 256GB",
      "Rank": 476,
      "Benchmark": 79.6,
      "Samples": 184,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15991/TS256GMTS600"
    },
    {
      "Type": "SSD",
      "Part Number": "ASU635SS-960GQ-R",
      "Brand": "Adata",
      "Model": "SU635 960GB",
      "Rank": 477,
      "Benchmark": 79.4,
      "Samples": 891,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/802076/ADATA-SU635"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Adata",
      "Model": "SP600 256GB",
      "Rank": 478,
      "Benchmark": 79.4,
      "Samples": 3824,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8707/ADATA-SP600"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-N256GB3-BK",
      "Brand": "Corsair",
      "Model": "Neutron 256GB",
      "Rank": 479,
      "Benchmark": 79.4,
      "Samples": 976,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2557/Corsair-Neutron-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "SD6SB1M-256G-1022I",
      "Brand": "SanDisk",
      "Model": "X110 256GB",
      "Rank": 480,
      "Benchmark": 79.4,
      "Samples": 4685,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6828/SanDisk-SD6SB1M256G1022I"
    },
    {
      "Type": "SSD",
      "Part Number": "TS256GMTS800",
      "Brand": "Transcend",
      "Model": "MTS800 M.2 256GB",
      "Rank": 481,
      "Benchmark": 79.4,
      "Samples": 1789,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/20255/TS256GMTS800"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC120G709A104-432278 120GB",
      "Rank": 482,
      "Benchmark": 79.3,
      "Samples": 104,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7030/SSD2SC120G709A104-432278"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS225EZSTA",
      "Brand": "Toshiba",
      "Model": "HG5d Q Series 256GB",
      "Rank": 483,
      "Benchmark": 79.3,
      "Samples": 2290,
      "URL": "https://ssd.userbenchmark.com/Toshiba-HG5d-Q-Series-256GB/Rating/1624"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS225XZSTA",
      "Brand": "Toshiba",
      "Model": "HG5d Q Series 256GB",
      "Rank": 483,
      "Benchmark": 79.3,
      "Samples": 2290,
      "URL": "https://ssd.userbenchmark.com/Toshiba-HG5d-Q-Series-256GB/Rating/1624"
    },
    {
      "Type": "SSD",
      "Part Number": "CT275MX300SSD4",
      "Brand": "Crucial",
      "Model": "MX300 SATA M.2 275GB",
      "Rank": 484,
      "Benchmark": 79.3,
      "Samples": 14847,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/159989/Crucial-CT275MX300SSD4"
    },
    {
      "Type": "SSD",
      "Part Number": "SH103S3/240G",
      "Brand": "Kingston",
      "Model": "HyperX 3K 240GB",
      "Rank": 485,
      "Benchmark": 79.3,
      "Samples": 21981,
      "URL": "https://ssd.userbenchmark.com/Kingston-HyperX-3K-240GB/Rating/1818"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-256 256GB",
      "Rank": 486,
      "Benchmark": 79.2,
      "Samples": 156,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6096/LITEONIT-LITEONIT-LMT-256"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F240GBGT-BK",
      "Brand": "Corsair",
      "Model": "Force GT 240GB",
      "Rank": 487,
      "Benchmark": 79.1,
      "Samples": 2983,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1132/Corsair-Force-GT"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2CW240A3",
      "Brand": "Intel",
      "Model": "520 Series 240GB",
      "Rank": 488,
      "Benchmark": 79.1,
      "Samples": 13220,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3641/INTEL-SSDSC2CW240A3"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BB300G4",
      "Brand": "Intel",
      "Model": "S3500 Series 300GB",
      "Rank": 489,
      "Benchmark": 79,
      "Samples": 388,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9352/INTEL-SSDSC2BB300G4"
    },
    {
      "Type": "SSD",
      "Part Number": "MTFDDAK480MBB",
      "Brand": "Micron",
      "Model": "M500DC 480GB",
      "Rank": 490,
      "Benchmark": 78.8,
      "Samples": 152,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/21867/Micron-M500DC-MT"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-256M5M",
      "Brand": "Plextor",
      "Model": "M5M mSATA 256GB",
      "Rank": 491,
      "Benchmark": 78.8,
      "Samples": 382,
      "URL": "https://ssd.userbenchmark.com/Plextor-M5M-mSATA-256GB/Rating/1626"
    },
    {
      "Type": "SSD",
      "Part Number": "SD7UB2Q-512G-1022",
      "Brand": "SanDisk",
      "Model": "X300s SATA 512GB",
      "Rank": 492,
      "Benchmark": 78.7,
      "Samples": 69,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/16017/SanDisk-SD7UB2Q512G1122"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS748XZSTA",
      "Brand": "Toshiba",
      "Model": "Q300 480GB",
      "Rank": 493,
      "Benchmark": 78.7,
      "Samples": 4068,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/38603/TOSHIBA-Q300"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS748EZSTA",
      "Brand": "Toshiba",
      "Model": "Q300 480GB",
      "Rank": 493,
      "Benchmark": 78.7,
      "Samples": 4068,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/38603/TOSHIBA-Q300"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2CT240A4K5",
      "Brand": "Intel",
      "Model": "335 Series 240GB",
      "Rank": 494,
      "Benchmark": 78.6,
      "Samples": 3669,
      "URL": "https://ssd.userbenchmark.com/Intel-335-Series-240GB/Rating/1942"
    },
    {
      "Type": "SSD",
      "Part Number": "SD5SB2-512G",
      "Brand": "SanDisk",
      "Model": "X100 512GB",
      "Rank": 495,
      "Benchmark": 78.5,
      "Samples": 73,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/21973/SanDisk-SD5SB2512G"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-256M3",
      "Brand": "Plextor",
      "Model": "M3 256GB",
      "Rank": 496,
      "Benchmark": 78.5,
      "Samples": 218,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3752/PLEXTOR-PX-256M3"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-N120GBGTXB-BK",
      "Brand": "Corsair",
      "Model": "Neutron GTX 120GB",
      "Rank": 497,
      "Benchmark": 78.5,
      "Samples": 1994,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1081/Corsair-Neutron-GTX-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Plextor",
      "Model": "PX-128M5 128GB",
      "Rank": 498,
      "Benchmark": 78.3,
      "Samples": 170,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4068/PLEXTOR-PX-128M5"
    },
    {
      "Type": "SSD",
      "Part Number": "TRN150-25SAT3-240G",
      "Brand": "OCZ",
      "Model": "Trion 150 240GB",
      "Rank": 499,
      "Benchmark": 78.3,
      "Samples": 12497,
      "URL": "https://ssd.userbenchmark.com/OCZ-Trion-150-240GB/Rating/3619"
    },
    {
      "Type": "SSD",
      "Part Number": "CT275MX300SSD1",
      "Brand": "Crucial",
      "Model": "MX300 275GB",
      "Rank": 500,
      "Benchmark": 78.2,
      "Samples": 54306,
      "URL": "https://ssd.userbenchmark.com/Crucial-MX300-275GB/Rating/3642"
    },
    {
      "Type": "SSD",
      "Part Number": "ST240FP0021",
      "Brand": "Seagate",
      "Model": "600 Pro 240GB",
      "Rank": 501,
      "Benchmark": 78.2,
      "Samples": 307,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7447/ST240FP0021"
    },
    {
      "Type": "SSD",
      "Part Number": "SD6SN1M-256G",
      "Brand": "SanDisk",
      "Model": "X110 SATA M.2 256GB",
      "Rank": 502,
      "Benchmark": 78.2,
      "Samples": 1709,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10522/SanDisk-SD6SN1M-256G-1006"
    },
    {
      "Type": "SSD",
      "Part Number": "CT480BX200SSD1",
      "Brand": "Crucial",
      "Model": "BX200 480GB",
      "Rank": 503,
      "Benchmark": 78,
      "Samples": 9092,
      "URL": "https://ssd.userbenchmark.com/Crucial-BX200-480GB/Rating/3627"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BW240H601",
      "Brand": "Intel",
      "Model": "535 Series 240GB",
      "Rank": 504,
      "Benchmark": 78,
      "Samples": 6921,
      "URL": "https://ssd.userbenchmark.com/Intel-535-Series-240GB/Rating/3500"
    },
    {
      "Type": "SSD",
      "Part Number": "SH100S3/240G",
      "Brand": "Kingston",
      "Model": "HyperX 240GB",
      "Rank": 505,
      "Benchmark": 78,
      "Samples": 335,
      "URL": "https://ssd.userbenchmark.com/Kingston-HyperX-240GB/Rating/1327"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDST240GB",
      "Brand": "Mushkin",
      "Model": "Striker 240GB",
      "Rank": 506,
      "Benchmark": 77.8,
      "Samples": 99,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/36396/MKNSSDST240GB"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-N240GB3-BK",
      "Brand": "Corsair",
      "Model": "Neutron (v0) 240GB",
      "Rank": 507,
      "Benchmark": 77.7,
      "Samples": 332,
      "URL": "https://ssd.userbenchmark.com/Corsair-Neutron-v0-240GB/Rating/1405"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP550SS3-240GM-C",
      "Brand": "Adata",
      "Model": "Premier SP550 240GB",
      "Rank": 508,
      "Benchmark": 77.7,
      "Samples": 25052,
      "URL": "https://ssd.userbenchmark.com/Adata-Premier-SP550-240GB/Rating/3623"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F240GBGS-BK",
      "Brand": "Corsair",
      "Model": "Force GS 240GB",
      "Rank": 509,
      "Benchmark": 77.6,
      "Samples": 3895,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2047/Corsair-Force-GS"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-256L9M-11 MSATA 256GB",
      "Rank": 510,
      "Benchmark": 77.6,
      "Samples": 1839,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12690/LITEONIT-LMT-256L9M-11-MSATA-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSNH128GCST 128GB",
      "Rank": 511,
      "Benchmark": 77.6,
      "Samples": 1551,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5795/TOSHIBA-THNSNH128GCST"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNJ128GCSU",
      "Brand": "Toshiba",
      "Model": "HG6 128GB",
      "Rank": 512,
      "Benchmark": 77.6,
      "Samples": 3444,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12239/TOSHIBA-THNSNJ128GCSU"
    },
    {
      "Type": "SSD",
      "Part Number": "TS256GSSD340",
      "Brand": "Transcend",
      "Model": "SSD340 256GB",
      "Rank": 513,
      "Benchmark": 77.6,
      "Samples": 1607,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3495/TS256GSSD340"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDHII-120G-G25",
      "Brand": "SanDisk",
      "Model": "Ultra II 120GB",
      "Rank": 514,
      "Benchmark": 77.6,
      "Samples": 9161,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Ultra-II-120GB/Rating/3486"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Geil",
      "Model": "Zenith A3 240GB",
      "Rank": 515,
      "Benchmark": 77.5,
      "Samples": 61,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/22706/GeIL-ZENITH-A3-240GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Plextor",
      "Model": "PX-128M3P 128GB",
      "Rank": 516,
      "Benchmark": 77.4,
      "Samples": 208,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3527/PLEXTOR-PX-128M3P"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2KW240H6",
      "Brand": "Intel",
      "Model": "540s Series 240GB",
      "Rank": 517,
      "Benchmark": 77.3,
      "Samples": 6549,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/125849/INTEL-SSDSC2KW240H6"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-256M6M 256GB",
      "Rank": 518,
      "Benchmark": 77.2,
      "Samples": 488,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5242/LITEONIT-LMT-256M6M"
    },
    {
      "Type": "SSD",
      "Part Number": "SD7SB6S-128G-1122",
      "Brand": "SanDisk",
      "Model": "X300 128GB",
      "Rank": 519,
      "Benchmark": 77.2,
      "Samples": 1918,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/20791/SanDisk-SD7SB6S128G1122"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "SD0256F 251GB",
      "Rank": 520,
      "Benchmark": 77.2,
      "Samples": 258,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6365/APPLE-SSD-SD0256F"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LCT-256M3S 2.5 7mm 256GB",
      "Rank": 521,
      "Benchmark": 77,
      "Samples": 1569,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2666/LITEONIT-LCT-256M3S-25-7mm-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SD8SB8U-256G-1122",
      "Brand": "SanDisk",
      "Model": "X400 256GB",
      "Rank": 522,
      "Benchmark": 77,
      "Samples": 1580,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/81834/SanDisk-SD8SB8U256G1122"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LCS-128L9S-11 2.5 7mm 128GB",
      "Rank": 523,
      "Benchmark": 77,
      "Samples": 435,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8908/LITEON-IT-LCS-128L9S-11-25-7mm-128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC240GD4DH08B-T 240GB",
      "Rank": 524,
      "Benchmark": 76.9,
      "Samples": 107,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7546/SSD2SC240GD4DH08B-T"
    },
    {
      "Type": "SSD",
      "Part Number": "CT480M500SSD3",
      "Brand": "Crucial",
      "Model": "M500 mSATA 480GB",
      "Rank": 525,
      "Benchmark": 76.9,
      "Samples": 348,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5698/Crucial-CT480M500SSD3"
    },
    {
      "Type": "SSD",
      "Part Number": "CT240BX200SSD1",
      "Brand": "Crucial",
      "Model": "BX200 240GB",
      "Rank": 526,
      "Benchmark": 76.9,
      "Samples": 24782,
      "URL": "https://ssd.userbenchmark.com/Crucial-BX200-240GB/Rating/3626"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SM841 mSATA 128GB",
      "Rank": 527,
      "Benchmark": 76.8,
      "Samples": 782,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6657/SAMSUNG-SSD-SM841-mSATA-128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "ASU800SS-128GT-C",
      "Brand": "Adata",
      "Model": "Ultimate SU800 128GB",
      "Rank": 528,
      "Benchmark": 76.8,
      "Samples": 24778,
      "URL": "https://ssd.userbenchmark.com/Adata-Ultimate-SU800-128GB/Rating/3911"
    },
    {
      "Type": "SSD",
      "Part Number": "SKC300S37A/240G",
      "Brand": "Kingston",
      "Model": "SSDNow KC300 240GB",
      "Rank": 529,
      "Benchmark": 76.7,
      "Samples": 1674,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8366/KINGSTON-SKC300S37A240G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SM841 2.5\" 7mm 128GB",
      "Rank": 530,
      "Benchmark": 76.6,
      "Samples": 3666,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5663/SAMSUNG-SSD-SM841-25--7mm-128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "TS256GMSA370",
      "Brand": "Transcend",
      "Model": "MSA370 mSATA 256GB",
      "Rank": 531,
      "Benchmark": 76.5,
      "Samples": 182,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/16272/TS256GMSA370"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX3-25SAT3-240G",
      "Brand": "OCZ",
      "Model": "Vertex 3 240GB",
      "Rank": 532,
      "Benchmark": 76.3,
      "Samples": 3135,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2653/OCZ-VERTEX3"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDHP-128G-G25",
      "Brand": "SanDisk",
      "Model": "Ultra Plus 128GB",
      "Rank": 533,
      "Benchmark": 76.3,
      "Samples": 12884,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Ultra-Plus-128GB/Rating/1887"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BB240G4",
      "Brand": "Intel",
      "Model": "S3500 Series 240GB",
      "Rank": 534,
      "Benchmark": 76,
      "Samples": 542,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/14275/INTEL-SSDSC2BB240G4"
    },
    {
      "Type": "SSD",
      "Part Number": "R3SL240G",
      "Brand": "AMD",
      "Model": "Radeon R3 240GB",
      "Rank": 535,
      "Benchmark": 76,
      "Samples": 3764,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/134613/R3SL240G"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNJ128G8NU",
      "Brand": "Toshiba",
      "Model": "HG6 SATA M.2 128GB",
      "Rank": 536,
      "Benchmark": 76,
      "Samples": 5159,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/14053/TOSHIBA-THNSNJ128G8NU"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX900S3-256GM-C",
      "Brand": "Adata",
      "Model": "XPG SX900 256GB",
      "Rank": 537,
      "Benchmark": 75.8,
      "Samples": 5253,
      "URL": "https://ssd.userbenchmark.com/Adata-XPG-SX900-256GB/Rating/1819"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Patriot",
      "Model": "Blast 240GB",
      "Rank": 538,
      "Benchmark": 75.8,
      "Samples": 3694,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/33423/Patriot-Blast"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZNTE512HMJH-000SO 512GB",
      "Rank": 539,
      "Benchmark": 75.7,
      "Samples": 309,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7215/SAMSUNG-MZNTE512HMJH-000SO"
    },
    {
      "Type": "SSD",
      "Part Number": "SA400S37/480G",
      "Brand": "Kingston",
      "Model": "A400 480GB",
      "Rank": 540,
      "Benchmark": 75.7,
      "Samples": 143460,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/296710/KINGSTON-SA400S37480G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SM841N mSATA 256GB",
      "Rank": 541,
      "Benchmark": 75.7,
      "Samples": 468,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/17959/SAMSUNG-SSD-SM841N-mSATA"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BW240A4",
      "Brand": "Intel",
      "Model": "530 Series 240GB",
      "Rank": 542,
      "Benchmark": 75.7,
      "Samples": 15454,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3104/INTEL-SSDSC2BW240A4"
    },
    {
      "Type": "SSD",
      "Part Number": "CT120BX100SSD1",
      "Brand": "Crucial",
      "Model": "BX100 120GB",
      "Rank": 543,
      "Benchmark": 75.7,
      "Samples": 4408,
      "URL": "https://ssd.userbenchmark.com/Crucial-BX100-120GB/Rating/3489"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP550SS3-120GM-C",
      "Brand": "Adata",
      "Model": "Premier SP550 120GB",
      "Rank": 544,
      "Benchmark": 75.6,
      "Samples": 19236,
      "URL": "https://ssd.userbenchmark.com/Adata-Premier-SP550-120GB/Rating/3622"
    },
    {
      "Type": "SSD",
      "Part Number": "RVD3X2-FHPX4-240G",
      "Brand": "OCZ",
      "Model": "RevoDrive 3 X2 PCIe 240GB",
      "Rank": 545,
      "Benchmark": 75.6,
      "Samples": 941,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6546/OCZ-REVODRIVE3-X2"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS1311-120-RB",
      "Brand": "PNY",
      "Model": "CS1311 120GB",
      "Rank": 546,
      "Benchmark": 75.5,
      "Samples": 9773,
      "URL": "https://ssd.userbenchmark.com/PNY-CS1311-120GB/Rating/3614"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX3MI-25SAT3-240G",
      "Brand": "OCZ",
      "Model": "Vertex 3 MAX IOPS 240GB",
      "Rank": 547,
      "Benchmark": 75.5,
      "Samples": 1259,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vertex-3-MAX-IOPS-240GB/Rating/376"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSNS120GBSP 120GB",
      "Rank": 548,
      "Benchmark": 75.4,
      "Samples": 84,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7190/TOSHIBA-THNSNS120GBSP"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2KW128G8",
      "Brand": "Intel",
      "Model": "545s Series 128GB",
      "Rank": 549,
      "Benchmark": 75.4,
      "Samples": 2268,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/372338/INTEL-SSDSC2KW128G8"
    },
    {
      "Type": "SSD",
      "Part Number": "CT128MX100SSD1",
      "Brand": "Crucial",
      "Model": "MX100 128GB",
      "Rank": 550,
      "Benchmark": 75.3,
      "Samples": 8349,
      "URL": "https://ssd.userbenchmark.com/Crucial-MX100-128GB/Rating/2618"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-128L9M-11 MSATA 128GB",
      "Rank": 551,
      "Benchmark": 75.3,
      "Samples": 474,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12669/LITEONIT-LMT-128L9M-11-MSATA-128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX450-25SAT3-128G",
      "Brand": "OCZ",
      "Model": "Vertex 450 128GB",
      "Rank": 552,
      "Benchmark": 75.3,
      "Samples": 966,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vertex-450-128GB/Rating/1896"
    },
    {
      "Type": "SSD",
      "Part Number": "CT240M500SSD1",
      "Brand": "Crucial",
      "Model": "M500 240GB",
      "Rank": 553,
      "Benchmark": 75.2,
      "Samples": 26300,
      "URL": "https://ssd.userbenchmark.com/Crucial-M500-240GB/Rating/1551"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDX-240G-G25",
      "Brand": "SanDisk",
      "Model": "Extreme 240GB",
      "Rank": 554,
      "Benchmark": 75.2,
      "Samples": 6191,
      "URL": "https://ssd.userbenchmark.com/SanDisk-Extreme-240GB/Rating/1328"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LCM-256M3S 256GB",
      "Rank": 555,
      "Benchmark": 75.2,
      "Samples": 700,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5988/LITEONIT-LCM-256M3S"
    },
    {
      "Type": "SSD",
      "Part Number": "SD7SB3Q-128G-1002",
      "Brand": "SanDisk",
      "Model": "X300s Non-Secure 128GB",
      "Rank": 556,
      "Benchmark": 75.1,
      "Samples": 1300,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/21087/SanDisk-SD7SB3Q128G1002"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Adata",
      "Model": "SP600 128GB",
      "Rank": 557,
      "Benchmark": 75.1,
      "Samples": 6589,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7306/ADATA-SP600"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZ7TE512HMHP-000 512GB",
      "Rank": 558,
      "Benchmark": 75,
      "Samples": 2514,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10608/SAMSUNG-MZ7TE512HMHP-000"
    },
    {
      "Type": "SSD",
      "Part Number": "PPSE240GS25SSDR",
      "Brand": "Patriot",
      "Model": "Pyro SE 240GB",
      "Rank": 559,
      "Benchmark": 75,
      "Samples": 44,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15337/Patriot-Pyro-SE"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LAT-256M3S 256GB",
      "Rank": 560,
      "Benchmark": 74.9,
      "Samples": 511,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9087/LITEONIT-LAT-256M3S"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS724XZSTA",
      "Brand": "Toshiba",
      "Model": "Q300 240GB",
      "Rank": 561,
      "Benchmark": 74.9,
      "Samples": 3720,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/35974/TOSHIBA-Q300"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS724EZSTA",
      "Brand": "Toshiba",
      "Model": "Q300 240GB",
      "Rank": 561,
      "Benchmark": 74.9,
      "Samples": 3720,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/35974/TOSHIBA-Q300"
    },
    {
      "Type": "SSD",
      "Part Number": "SD7SN3Q-256G-1002",
      "Brand": "SanDisk",
      "Model": "X300s SATA M.2 256GB",
      "Rank": 562,
      "Benchmark": 74.9,
      "Samples": 660,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/25276/SanDisk-SD7SN3Q256G1002"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX3-25SAT3-256G",
      "Brand": "OCZ",
      "Model": "Vertex 3 256GB",
      "Rank": 563,
      "Benchmark": 74.8,
      "Samples": 58,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5486/OCZ-VERTEX3"
    },
    {
      "Type": "SSD",
      "Part Number": "ST120HM000",
      "Brand": "Seagate",
      "Model": "600 120GB",
      "Rank": 564,
      "Benchmark": 74.8,
      "Samples": 582,
      "URL": "https://ssd.userbenchmark.com/Seagate-600-120GB/Rating/1891"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-P128GBP-BK",
      "Brand": "Corsair",
      "Model": "Performance Pro 128GB",
      "Rank": 565,
      "Benchmark": 74.8,
      "Samples": 242,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5273/Corsair-Performance-Pro"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDTR240GB",
      "Brand": "Mushkin",
      "Model": "Triactor 240GB",
      "Rank": 566,
      "Benchmark": 74.6,
      "Samples": 422,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/76610/MKNSSDTR240GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2CT240A3",
      "Brand": "Intel",
      "Model": "330 Series 240GB",
      "Rank": 567,
      "Benchmark": 74.5,
      "Samples": 1552,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3643/INTEL-SSDSC2CT240A3"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-128M6V",
      "Brand": "Plextor",
      "Model": "M6V 128GB",
      "Rank": 568,
      "Benchmark": 74.5,
      "Samples": 335,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/31385/PLEXTOR-PX-128M6V"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-128M5M",
      "Brand": "Plextor",
      "Model": "M5M mSATA 128GB",
      "Rank": 569,
      "Benchmark": 74.5,
      "Samples": 540,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5214/PLEXTOR-PX-128M5M"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNJ128GMCU",
      "Brand": "Toshiba",
      "Model": "HG6 mSATA 128GB",
      "Rank": 570,
      "Benchmark": 74.4,
      "Samples": 2433,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10610/TOSHIBA-THNSNJ128GMCU"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "SK",
      "Model": "hynix SH920 2.5 256GB",
      "Rank": 571,
      "Benchmark": 74.4,
      "Samples": 1877,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6594/SK--hynix-SH920-25"
    },
    {
      "Type": "SSD",
      "Part Number": "TRN150-25SAT3-120G",
      "Brand": "OCZ",
      "Model": "Trion 150 120GB",
      "Rank": 572,
      "Benchmark": 74.3,
      "Samples": 3210,
      "URL": "https://ssd.userbenchmark.com/OCZ-Trion-150-120GB/Rating/3618"
    },
    {
      "Type": "SSD",
      "Part Number": "SD5SB2-128G-1006E",
      "Brand": "SanDisk",
      "Model": "X100 128GB",
      "Rank": 573,
      "Benchmark": 74.2,
      "Samples": 1520,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3767/SanDisk-SD5SB2-128G-1006E"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDCR240GB-DX",
      "Brand": "Mushkin",
      "Model": "Chronos Deluxe 240GB",
      "Rank": 574,
      "Benchmark": 74.1,
      "Samples": 1476,
      "URL": "https://ssd.userbenchmark.com/Mushkin-Chronos-Deluxe-240GB/Rating/1820"
    },
    {
      "Type": "SSD",
      "Part Number": "TS256GSSD720",
      "Brand": "Transcend",
      "Model": "SD720 256GB",
      "Rank": 575,
      "Benchmark": 74,
      "Samples": 271,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11778/TS256GSS-TS256GSSD720"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LCT-256M3S-41 7mm 256GB FDE",
      "Rank": 576,
      "Benchmark": 73.7,
      "Samples": 258,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5825/LITEONIT-LCT-256M3S-41-7mm-256GB-FDE"
    },
    {
      "Type": "SSD",
      "Part Number": "TS256GSSD320",
      "Brand": "Transcend",
      "Model": "SSD320 256GB",
      "Rank": 577,
      "Benchmark": 73.7,
      "Samples": 100,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3357/TS256GSSD320"
    },
    {
      "Type": "SSD",
      "Part Number": "SD7UB3Q-128G-1122",
      "Brand": "SanDisk",
      "Model": "X300s SATA 128GB",
      "Rank": 578,
      "Benchmark": 73.7,
      "Samples": 155,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/17035/SanDisk-SD7UB3Q128G1122"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "L8T-128L6G-HP 128GB",
      "Rank": 579,
      "Benchmark": 73.7,
      "Samples": 375,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4986/LITEONIT-L8T-128L6G-HP"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNJ256GMCU",
      "Brand": "Toshiba",
      "Model": "HG6 mSATA 256GB",
      "Rank": 580,
      "Benchmark": 73.6,
      "Samples": 1415,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10622/TOSHIBA-THNSNJ256GMCU"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP900S3-256GM-C",
      "Brand": "Adata",
      "Model": "SP900 256GB",
      "Rank": 581,
      "Benchmark": 73.6,
      "Samples": 7314,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3534/ADATA-SP900"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNH128GMCT",
      "Brand": "Toshiba",
      "Model": "HG5d Q Series mSATA 128GB",
      "Rank": 582,
      "Benchmark": 73.5,
      "Samples": 1161,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3134/TOSHIBA-THNSNH128GMCT"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2CW120A3",
      "Brand": "Intel",
      "Model": "520 Series 120GB",
      "Rank": 583,
      "Benchmark": 73.3,
      "Samples": 14845,
      "URL": "https://ssd.userbenchmark.com/Intel-520-Series-120GB/Rating/1935"
    },
    {
      "Type": "SSD",
      "Part Number": "AS511S3-240GM-C",
      "Brand": "Adata",
      "Model": "S511 240GB",
      "Rank": 584,
      "Benchmark": 73.3,
      "Samples": 54,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2462/ADATA-SS-D-S511-240GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SUV400S37/480G",
      "Brand": "Kingston",
      "Model": "SSDNow UV400 480GB",
      "Rank": 585,
      "Benchmark": 73.3,
      "Samples": 19024,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/138433/KINGSTON-SUV400S37480G"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS900-240-RB",
      "Brand": "PNY",
      "Model": "CS900 240GB",
      "Rank": 586,
      "Benchmark": 73.3,
      "Samples": 41039,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/180142/PNY-CS900-240GB-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Geil",
      "Model": "Zenith S3 240GB",
      "Rank": 587,
      "Benchmark": 73.3,
      "Samples": 69,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15208/GeIL-ZENITH-S3-240GB"
    },
    {
      "Type": "SSD",
      "Part Number": "2DP99AA#ABC",
      "Brand": "HP",
      "Model": "S700 500GB",
      "Rank": 588,
      "Benchmark": 73.2,
      "Samples": 9010,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/337629/HP-SSD-S700-500GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SD6SB1M-128G-1022I",
      "Brand": "SanDisk",
      "Model": "X110 128GB",
      "Rank": 589,
      "Benchmark": 73.1,
      "Samples": 8068,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8226/SanDisk-SD6SB1M128G1022I"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-128M3",
      "Brand": "Plextor",
      "Model": "M3 128GB",
      "Rank": 590,
      "Benchmark": 73.1,
      "Samples": 671,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1301/PLEXTOR-PX-128M3"
    },
    {
      "Type": "SSD",
      "Part Number": "SH103S3/120G",
      "Brand": "Kingston",
      "Model": "HyperX 3K 120GB",
      "Rank": 591,
      "Benchmark": 73.1,
      "Samples": 42591,
      "URL": "https://ssd.userbenchmark.com/Kingston-HyperX-3K-120GB/Rating/1894"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD2SC240GE2DA16B-T",
      "Brand": "PNY",
      "Model": "XLR8 Pro 240GB",
      "Rank": 592,
      "Benchmark": 73,
      "Samples": 54,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/19864/SSD2SC240GE2DA16B-T"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BW120H601",
      "Brand": "Intel",
      "Model": "535 Series 120GB",
      "Rank": 593,
      "Benchmark": 73,
      "Samples": 5064,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/28259/INTEL-SSDSC2BW120H6"
    },
    {
      "Type": "SSD",
      "Part Number": "SD6SN1M-128G",
      "Brand": "SanDisk",
      "Model": "X110 SATA M.2 128GB",
      "Rank": 594,
      "Benchmark": 72.9,
      "Samples": 614,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9934/SanDisk-SD6SN1M128G1002"
    },
    {
      "Type": "SSD",
      "Part Number": "R3SL480G",
      "Brand": "AMD",
      "Model": "Radeon R3 480GB",
      "Rank": 595,
      "Benchmark": 72.9,
      "Samples": 460,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/134345/R3SL480G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "SK",
      "Model": "hynix SH920 2.5 128GB",
      "Rank": 596,
      "Benchmark": 72.9,
      "Samples": 607,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12032/SK--hynix-SH920-25"
    },
    {
      "Type": "SSD",
      "Part Number": "SD6SF1M-256G-1022",
      "Brand": "SanDisk",
      "Model": "X110 mSATA 256GB",
      "Rank": 597,
      "Benchmark": 72.8,
      "Samples": 276,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10872/SanDisk-SD6SF1M256G1022"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F180GBGS-BK",
      "Brand": "Corsair",
      "Model": "Force GS 180GB",
      "Rank": 598,
      "Benchmark": 72.8,
      "Samples": 524,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1010/Corsair-Force-GS"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-128M5S",
      "Brand": "Plextor",
      "Model": "M5S 128GB",
      "Rank": 599,
      "Benchmark": 72.6,
      "Samples": 5073,
      "URL": "https://ssd.userbenchmark.com/Plextor-M5S-128GB/Rating/2261"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SM841N mSATA 512GB",
      "Rank": 600,
      "Benchmark": 72.6,
      "Samples": 329,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11367/SAMSUNG-SSD-SM841N-mSATA"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2CT180A4K5",
      "Brand": "Intel",
      "Model": "335 Series 180GB",
      "Rank": 601,
      "Benchmark": 72.6,
      "Samples": 2276,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1641/INTEL-SSDSC2CT180A4"
    },
    {
      "Type": "SSD",
      "Part Number": "SD8SB8U-128G-1122",
      "Brand": "SanDisk",
      "Model": "X400 128GB",
      "Rank": 602,
      "Benchmark": 72.4,
      "Samples": 813,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/68942/SanDisk-SD8SB8U128G1122"
    },
    {
      "Type": "SSD",
      "Part Number": "SD6SP1M-128G-1012",
      "Brand": "SanDisk",
      "Model": "X110 SATA M.2 128GB",
      "Rank": 603,
      "Benchmark": 72.4,
      "Samples": 1275,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/20731/SanDisk-SD6SP1M128G1012"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7PC512B/WW",
      "Brand": "Samsung",
      "Model": "830 512GB",
      "Rank": 604,
      "Benchmark": 72.4,
      "Samples": 1497,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1612/SAMSUNG-SSD-830-Series"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F128GBGS-BK",
      "Brand": "Corsair",
      "Model": "Force GS 128GB",
      "Rank": 605,
      "Benchmark": 72.4,
      "Samples": 5385,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3191/Corsair-Force-GS"
    },
    {
      "Type": "SSD",
      "Part Number": "SKC300S37A/120G",
      "Brand": "Kingston",
      "Model": "SSDNow KC300 120GB",
      "Rank": 606,
      "Benchmark": 72.4,
      "Samples": 1834,
      "URL": "https://ssd.userbenchmark.com/Kingston-SSDNow-KC300-120GB/Rating/2264"
    },
    {
      "Type": "SSD",
      "Part Number": "SVP200S37A120G",
      "Brand": "Kingston",
      "Model": "SSDNow V+200 Series 120GB",
      "Rank": 607,
      "Benchmark": 72.3,
      "Samples": 713,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1218/KINGSTON-SVP200S3120G"
    },
    {
      "Type": "SSD",
      "Part Number": "R3SL120G",
      "Brand": "AMD",
      "Model": "Radeon R3 120GB",
      "Rank": 608,
      "Benchmark": 72.3,
      "Samples": 2724,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/124132/R3SL120G"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F180GBGT-BK",
      "Brand": "Corsair",
      "Model": "Force GT 180GB",
      "Rank": 609,
      "Benchmark": 72.3,
      "Samples": 810,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1126/Corsair-Force-GT"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-256M6M mSATA 256GB",
      "Rank": 610,
      "Benchmark": 72.3,
      "Samples": 3022,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2486/LITEONIT-LMT-256M6M-mSATA-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX3MI-25SAT3-120G",
      "Brand": "OCZ",
      "Model": "Vertex 3 MAX IOPS 120GB",
      "Rank": 611,
      "Benchmark": 72.2,
      "Samples": 2915,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1201/OCZ-VERTEX3-MI"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BF240A4L",
      "Brand": "Intel",
      "Model": "SSD Pro 1500 Series 240GB",
      "Rank": 612,
      "Benchmark": 72.2,
      "Samples": 3675,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6255/INTEL-SS-DSC2BF240A4L"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BF240A401",
      "Brand": "Intel",
      "Model": "SSD Pro 1500 Series 240GB",
      "Rank": 612,
      "Benchmark": 72.2,
      "Samples": 3675,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6255/INTEL-SS-DSC2BF240A4L"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Plextor",
      "Model": "PX-128M2P 128GB",
      "Rank": 613,
      "Benchmark": 72.2,
      "Samples": 69,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6634/PLEXTOR--PX-128M2P"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SM841N mSATA 128GB",
      "Rank": 614,
      "Benchmark": 72.1,
      "Samples": 74,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/13601/SAMSUNG-SSD-SM841N-mSATA"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-128M6M mSATA 128GB",
      "Rank": 615,
      "Benchmark": 72.1,
      "Samples": 1385,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5385/LITEONIT-LMT-128M6M-mSATA-128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDMCEAC240B301",
      "Brand": "Intel",
      "Model": "525 Series mSATA 240GB",
      "Rank": 616,
      "Benchmark": 72.1,
      "Samples": 112,
      "URL": "https://ssd.userbenchmark.com/Intel-525-Series-mSATA-240GB/Rating/1509"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F128GBLX",
      "Brand": "Corsair",
      "Model": "Force LX 128GB",
      "Rank": 617,
      "Benchmark": 72,
      "Samples": 1675,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12531/CORSAIR-FORCE-LX-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Team",
      "Model": "XS3 SSD 240GB",
      "Rank": 618,
      "Benchmark": 71.9,
      "Samples": 20,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8108/TEAM-XS3-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "SM841 mSATA 512GB",
      "Rank": 619,
      "Benchmark": 71.8,
      "Samples": 489,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4000/SAMSUNG-SSD-SM841-mSATA-512GB"
    },
    {
      "Type": "SSD",
      "Part Number": "GP-GSTFS31240GNTD",
      "Brand": "Gigabyte",
      "Model": "SSD 240GB",
      "Rank": 620,
      "Benchmark": 71.7,
      "Samples": 14346,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/554572/GIGABYTE-GP-GSTFS31240GNTD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSNH256G8NT 256GB",
      "Rank": 621,
      "Benchmark": 71.7,
      "Samples": 310,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12184/TOSHIBA-THNSNH256G8NT"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-19nmBGA-256G-DS 256GB",
      "Rank": 622,
      "Benchmark": 71.6,
      "Samples": 62,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4373/LITEONIT-LMT-19nmBGA-256G-DS"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMTE512HMHP-00000 512GB",
      "Rank": 623,
      "Benchmark": 71.6,
      "Samples": 317,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5246/SAMSUNG-MZMTE512HMHP-00000"
    },
    {
      "Type": "SSD",
      "Part Number": "SD8SBAT-256G-1122",
      "Brand": "SanDisk",
      "Model": "Z400s 256GB",
      "Rank": 624,
      "Benchmark": 71.5,
      "Samples": 9395,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/34116/SanDisk-SD8SBAT256G1122"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BW180H601",
      "Brand": "Intel",
      "Model": "535 Series 180GB",
      "Rank": 625,
      "Benchmark": 71.4,
      "Samples": 380,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/27834/INTEL-SSDSC2BW180H6"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS712XZSTA",
      "Brand": "Toshiba",
      "Model": "Q300 120GB",
      "Rank": 626,
      "Benchmark": 71.2,
      "Samples": 1618,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/35283/TOSHIBA-Q300"
    },
    {
      "Type": "SSD",
      "Part Number": "HDTS712EZSTA",
      "Brand": "Toshiba",
      "Model": "Q300 120GB",
      "Rank": 626,
      "Benchmark": 71.2,
      "Samples": 1618,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/35283/TOSHIBA-Q300"
    },
    {
      "Type": "SSD",
      "Part Number": "AGT4-25SAT3-256G",
      "Brand": "OCZ",
      "Model": "Agility 4 256GB",
      "Rank": 627,
      "Benchmark": 71.2,
      "Samples": 1259,
      "URL": "https://ssd.userbenchmark.com/OCZ-Agility-4-256GB/Rating/1606"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP610SS3-128GM-C",
      "Brand": "Adata",
      "Model": "Premier SP610 128GB",
      "Rank": 628,
      "Benchmark": 71.1,
      "Samples": 693,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/13709/ADATA-SP610"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-256M6M-HP 256GB",
      "Rank": 629,
      "Benchmark": 71.1,
      "Samples": 296,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7110/LITEONIT-LMT-256M6M-HP"
    },
    {
      "Type": "SSD",
      "Part Number": "SUV400S37/240G",
      "Brand": "Kingston",
      "Model": "SSDNow UV400 240GB",
      "Rank": 630,
      "Benchmark": 71,
      "Samples": 100500,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/137815/KINGSTON-SUV400S37240G"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNH256GMCT",
      "Brand": "Toshiba",
      "Model": "HG5d Q Series mSATA 256GB",
      "Rank": 631,
      "Benchmark": 70.9,
      "Samples": 1082,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5507/TOSHIBA-THNSNH256GMCT"
    },
    {
      "Type": "SSD",
      "Part Number": "CT960BX500SSD1",
      "Brand": "Crucial",
      "Model": "BX500 960GB",
      "Rank": 632,
      "Benchmark": 70.9,
      "Samples": 8686,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/666214/CT960BX500SSD1"
    },
    {
      "Type": "SSD",
      "Part Number": "TS240GSSD220S",
      "Brand": "Transcend",
      "Model": "SSD220 240GB",
      "Rank": 633,
      "Benchmark": 70.9,
      "Samples": 10711,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/129705/TS240GSSD220S"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDEC240GB",
      "Brand": "Mushkin",
      "Model": "ECO2 240GB",
      "Rank": 634,
      "Benchmark": 70.6,
      "Samples": 298,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/24676/MKNSSDEC240GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SD6SP1M-256G-1012",
      "Brand": "SanDisk",
      "Model": "X110 SATA M.2 256GB",
      "Rank": 635,
      "Benchmark": 70.6,
      "Samples": 341,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8660/SanDisk-SD6SP1M256G1012"
    },
    {
      "Type": "SSD",
      "Part Number": "SHFS37A/240G",
      "Brand": "HyperX",
      "Model": "Fury 240GB",
      "Rank": 636,
      "Benchmark": 70.5,
      "Samples": 25520,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/13145/KINGSTON-SHFS37A240G"
    },
    {
      "Type": "SSD",
      "Part Number": "TRN100-25SAT3-960G",
      "Brand": "OCZ",
      "Model": "Trion 100 960GB",
      "Rank": 637,
      "Benchmark": 70.5,
      "Samples": 912,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/34219/OCZ-TRION100"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7PC256B/WW",
      "Brand": "Samsung",
      "Model": "830 256GB",
      "Rank": 638,
      "Benchmark": 70.4,
      "Samples": 20514,
      "URL": "https://ssd.userbenchmark.com/Samsung-830-256GB/Rating/1387"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LCT-512M3S 512GB",
      "Rank": 639,
      "Benchmark": 70.3,
      "Samples": 136,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5388/LITEONIT-LCT-512M3S"
    },
    {
      "Type": "SSD",
      "Part Number": "SD6SF1M-128G-1022",
      "Brand": "SanDisk",
      "Model": "X110 mSATA 128GB",
      "Rank": 640,
      "Benchmark": 70.3,
      "Samples": 1024,
      "URL": "https://ssd.userbenchmark.com/SanDisk-X110-mSATA-128GB/Rating/2213"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BW180A4",
      "Brand": "Intel",
      "Model": "530 Series 180GB",
      "Rank": 641,
      "Benchmark": 70.3,
      "Samples": 2892,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4282/INTEL-SSDSC2BW180A4"
    },
    {
      "Type": "SSD",
      "Part Number": "SD7SN3Q-128G-1002",
      "Brand": "SanDisk",
      "Model": "X300s SATA M.2 128GB",
      "Rank": 642,
      "Benchmark": 70.2,
      "Samples": 571,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/25335/SanDisk-SD7SN3Q-128G-1006"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2CW180A3",
      "Brand": "Intel",
      "Model": "520 Series 180GB",
      "Rank": 643,
      "Benchmark": 70.2,
      "Samples": 11591,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4086/INTEL-SSDSC2CW180A3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "SanDisk",
      "Model": "mSATA SD5SE2256G1002E 256GB",
      "Rank": 644,
      "Benchmark": 70.1,
      "Samples": 788,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3945/SanDisk-SD5SE2256G1002E"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZFLV128 NVMe PCIe M.2 128GB",
      "Rank": 645,
      "Benchmark": 70.1,
      "Samples": 1869,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/36806/NVMe-SAMSUNG-MZFLV128"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-N128GB3-BK",
      "Brand": "Corsair",
      "Model": "Neutron 128GB",
      "Rank": 646,
      "Benchmark": 69.9,
      "Samples": 575,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5914/Corsair-Neutron-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "TS128GMTS800",
      "Brand": "Transcend",
      "Model": "MTS800 M.2 128GB",
      "Rank": 647,
      "Benchmark": 69.9,
      "Samples": 4338,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/22385/TS128GMTS800"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-128M6M 128GB",
      "Rank": 648,
      "Benchmark": 69.8,
      "Samples": 604,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4933/LITEONIT-LMT-128M6M"
    },
    {
      "Type": "SSD",
      "Part Number": "TS128GSSD370",
      "Brand": "Transcend",
      "Model": "SSD370 128GB",
      "Rank": 649,
      "Benchmark": 69.8,
      "Samples": 3807,
      "URL": "https://ssd.userbenchmark.com/Transcend-SSD370-128GB/Rating/2699"
    },
    {
      "Type": "SSD",
      "Part Number": "CT240M500SSD3",
      "Brand": "Crucial",
      "Model": "M500 mSATA 240GB",
      "Rank": 650,
      "Benchmark": 69.6,
      "Samples": 1106,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4823/Crucial--CT240M500SSD3"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7SC120GOPT-RB",
      "Brand": "PNY",
      "Model": "Optima 120GB",
      "Rank": 651,
      "Benchmark": 69.6,
      "Samples": 149,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15456/SSD2SC120G1SA754D117-443"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD2SC120G1SA754D117",
      "Brand": "PNY",
      "Model": "Optima 120GB",
      "Rank": 651,
      "Benchmark": 69.6,
      "Samples": 149,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15456/SSD2SC120G1SA754D117-443"
    },
    {
      "Type": "SSD",
      "Part Number": "SVP200S3/240G",
      "Brand": "Kingston",
      "Model": "SSDNow V+200 240GB",
      "Rank": 652,
      "Benchmark": 69.6,
      "Samples": 568,
      "URL": "https://ssd.userbenchmark.com/Kingston-SSDNow-V-200-240GB/Rating/1445"
    },
    {
      "Type": "SSD",
      "Part Number": "SKC300S37A/180G",
      "Brand": "Kingston",
      "Model": "SSDNow KC300 180GB",
      "Rank": 653,
      "Benchmark": 69.6,
      "Samples": 397,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5528/KINGSTON-SKC300S37A180G"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX4-25SAT3-64G",
      "Brand": "OCZ",
      "Model": "Vertex 4 64GB",
      "Rank": 654,
      "Benchmark": 69.6,
      "Samples": 478,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1650/OCZ-VERT-OCZ-VERTEX4"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7TD250BW",
      "Brand": "Samsung",
      "Model": "840 250GB",
      "Rank": 655,
      "Benchmark": 69.6,
      "Samples": 30132,
      "URL": "https://ssd.userbenchmark.com/Samsung-840-250GB/Rating/1510"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "AGILITY4 128GB",
      "Rank": 656,
      "Benchmark": 69.5,
      "Samples": 863,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/557/OCZ-AGILITY4"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDCR240GB",
      "Brand": "Mushkin",
      "Model": "Chronos 240GB",
      "Rank": 657,
      "Benchmark": 69.5,
      "Samples": 573,
      "URL": "https://ssd.userbenchmark.com/Mushkin-Chronos-240GB/Rating/1622"
    },
    {
      "Type": "SSD",
      "Part Number": "ASU635SS-480GQ-R",
      "Brand": "Adata",
      "Model": "SU635 480GB",
      "Rank": 658,
      "Benchmark": 69.4,
      "Samples": 3389,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/764320/ADATA-SU635"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2KW120H6",
      "Brand": "Intel",
      "Model": "540s Series 120GB",
      "Rank": 659,
      "Benchmark": 69.4,
      "Samples": 2762,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/127931/INTEL-SSDSC2KW120H6"
    },
    {
      "Type": "SSD",
      "Part Number": "TRN100-25SAT3-480G",
      "Brand": "OCZ",
      "Model": "Trion 100 480GB",
      "Rank": 660,
      "Benchmark": 69.4,
      "Samples": 1376,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/32318/OCZ-TRION100"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Team",
      "Model": "L3 SSD 240GB",
      "Rank": 661,
      "Benchmark": 69.4,
      "Samples": 404,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6481/TEAM-L3-SSD-240GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "INTENSO 256GB",
      "Rank": 662,
      "Benchmark": 69.4,
      "Samples": 2242,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6851/INTENSO"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM810 2.5\" 7mm 256GB",
      "Rank": 663,
      "Benchmark": 69.3,
      "Samples": 9,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1708/SAMSUNG-SSD-PM810-25--7mm-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "GP-GSTFS31120GNTD",
      "Brand": "Gigabyte",
      "Model": "SSD 120GB",
      "Rank": 664,
      "Benchmark": 69.3,
      "Samples": 10195,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/547719/GIGABYTE-GP-GSTFS31120GNTD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "SK",
      "Model": "hynix SH920 mSATA 256GB",
      "Rank": 665,
      "Benchmark": 69.1,
      "Samples": 696,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5328/SK-hynix-SH920-mSATA-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Adata",
      "Model": "S510 120GB",
      "Rank": 666,
      "Benchmark": 69.1,
      "Samples": 498,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1908/ADATA-SSD-S510-120GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSNF128GCSS 128GB",
      "Rank": 667,
      "Benchmark": 69,
      "Samples": 1331,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5540/TOSHIBA-THNSNF128GCSS"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC240G3LC726B104-327 240GB",
      "Rank": 668,
      "Benchmark": 68.8,
      "Samples": 92,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5640/SSD2SC240G3LC726B104-327"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2CT180A3",
      "Brand": "Intel",
      "Model": "330 Series 180GB",
      "Rank": 669,
      "Benchmark": 68.8,
      "Samples": 4332,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/261/INTEL-SSDSC2CT180A3"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDHP-064-G25",
      "Brand": "SanDisk",
      "Model": "Ultra Plus 64GB",
      "Rank": 670,
      "Benchmark": 68.8,
      "Samples": 958,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6401/SanDisk-SDSSDHP064G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Geil",
      "Model": "Zenith A3 120GB",
      "Rank": 671,
      "Benchmark": 68.7,
      "Samples": 89,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/16792/GeIL-ZENITH-A3-120GB"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F120GBGT-BK",
      "Brand": "Corsair",
      "Model": "Force GT 120GB",
      "Rank": 672,
      "Benchmark": 68.7,
      "Samples": 10100,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1263/Corsair-Force-GT"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX900S3-128GM-C",
      "Brand": "Adata",
      "Model": "XPG SX900 128GB",
      "Rank": 673,
      "Benchmark": 68.5,
      "Samples": 5617,
      "URL": "https://ssd.userbenchmark.com/Adata-XPG-SX900-128GB/Rating/3491"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP920SS3-128GM-C",
      "Brand": "Adata",
      "Model": "Premier Pro SP920 128GB",
      "Rank": 674,
      "Benchmark": 68.5,
      "Samples": 2561,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10618/ADATA-SP920SS"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD7CS900-120-RB",
      "Brand": "PNY",
      "Model": "CS900 120GB",
      "Rank": 675,
      "Benchmark": 68.4,
      "Samples": 32191,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/175702/PNY-CS900-120GB-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM851 mSATA 512GB",
      "Rank": 676,
      "Benchmark": 68.4,
      "Samples": 824,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8717/SAMSUNG-SSD-PM851-mSATA-512GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-19nmBGA-128G 128GB",
      "Rank": 677,
      "Benchmark": 68.4,
      "Samples": 353,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4185/LITEONIT-LMT-19nmBGA-128G"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F240GBLS",
      "Brand": "Corsair",
      "Model": "Force LS 240GB",
      "Rank": 678,
      "Benchmark": 68.4,
      "Samples": 3824,
      "URL": "https://ssd.userbenchmark.com/Corsair-Force-LS-240GB/Rating/3340"
    },
    {
      "Type": "SSD",
      "Part Number": "HG5D",
      "Brand": "Toshiba",
      "Model": "HG5d SATA M.2 128GB",
      "Rank": 679,
      "Benchmark": 68.2,
      "Samples": 371,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6450/TOSHIBA-THNSNH128G8NT"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNH128G8NT",
      "Brand": "Toshiba",
      "Model": "HG5d SATA M.2 128GB",
      "Rank": 679,
      "Benchmark": 68.2,
      "Samples": 371,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6450/TOSHIBA-THNSNH128G8NT"
    },
    {
      "Type": "SSD",
      "Part Number": "ASU635SS-240GQ-R",
      "Brand": "Adata",
      "Model": "SU635 240GB",
      "Rank": 680,
      "Benchmark": 68.1,
      "Samples": 7215,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/722603/ADATA-SU635"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LCT-128M3S 128GB",
      "Rank": 681,
      "Benchmark": 68,
      "Samples": 1760,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4678/LITEONIT-LCT-128M3S"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM830 512GB",
      "Rank": 682,
      "Benchmark": 67.9,
      "Samples": 507,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2045/SAMSUNG-SSD-PM830-25--7"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX3-25SAT3-120G",
      "Brand": "OCZ",
      "Model": "Vertex 3 120GB",
      "Rank": 683,
      "Benchmark": 67.9,
      "Samples": 16983,
      "URL": "https://ssd.userbenchmark.com/OCZ-Vertex-3-120GB/Rating/1927"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC240G5LC726B104-298 240GB",
      "Rank": 684,
      "Benchmark": 67.8,
      "Samples": 145,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10419/SSD2SC240G5LC726B104-298"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BF180A4L",
      "Brand": "Intel",
      "Model": "SSD Pro 1500 Series 180GB",
      "Rank": 685,
      "Benchmark": 67.6,
      "Samples": 7821,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2904/INTEL-SSDSC2BF180A4L"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BF180A401",
      "Brand": "Intel",
      "Model": "SSD Pro 1500 Series 180GB",
      "Rank": 685,
      "Benchmark": 67.6,
      "Samples": 7821,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2904/INTEL-SSDSC2BF180A4L"
    },
    {
      "Type": "SSD",
      "Part Number": "ASU650SS-240GT-C",
      "Brand": "Adata",
      "Model": "SU650 240GB",
      "Rank": 686,
      "Benchmark": 67.4,
      "Samples": 31449,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/351933/ADATA-SU650"
    },
    {
      "Type": "SSD",
      "Part Number": "RVD3-FHPX4-240G",
      "Brand": "OCZ",
      "Model": "RevoDrive 3 PCIe 240GB",
      "Rank": 687,
      "Benchmark": 67.3,
      "Samples": 278,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1346/OCZ-REVODRIVE3"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2CT120A3",
      "Brand": "Intel",
      "Model": "330 Series 120GB",
      "Rank": 688,
      "Benchmark": 67.3,
      "Samples": 10462,
      "URL": "https://ssd.userbenchmark.com/Intel-330-Series-120GB/Rating/1933"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BW120A401",
      "Brand": "Intel",
      "Model": "530 Series 120GB",
      "Rank": 689,
      "Benchmark": 67.2,
      "Samples": 7469,
      "URL": "https://ssd.userbenchmark.com/Intel-530-Series-120GB/Rating/1934"
    },
    {
      "Type": "SSD",
      "Part Number": "SMS200S3/120G",
      "Brand": "Kingston",
      "Model": "SSDNow mS200 mSATA 120GB",
      "Rank": 690,
      "Benchmark": 67.2,
      "Samples": 756,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/536/KINGSTON-SMS200S3120G"
    },
    {
      "Type": "SSD",
      "Part Number": "TS128GSSD340",
      "Brand": "Transcend",
      "Model": "SSD340 128GB",
      "Rank": 691,
      "Benchmark": 67.1,
      "Samples": 1741,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5472/TS128GSSD340"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "HFS128G3AMNB-2200A 128GB",
      "Rank": 692,
      "Benchmark": 67.1,
      "Samples": 1596,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5987/HFS128G3AMNB-2200A"
    },
    {
      "Type": "SSD",
      "Part Number": "CT512M4SSD2",
      "Brand": "Crucial",
      "Model": "M4 512GB",
      "Rank": 693,
      "Benchmark": 67.1,
      "Samples": 3648,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/144/M4-CT512M4SSD2"
    },
    {
      "Type": "SSD",
      "Part Number": "SUV400S37/120G",
      "Brand": "Kingston",
      "Model": "SSDNow UV400 120GB",
      "Rank": 694,
      "Benchmark": 67,
      "Samples": 67928,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/137022/KINGSTON-SUV400S37120G"
    },
    {
      "Type": "SSD",
      "Part Number": "SD6SB1M-064G",
      "Brand": "SanDisk",
      "Model": "X110 64GB",
      "Rank": 695,
      "Benchmark": 67,
      "Samples": 594,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8361/SanDisk-SD6SB1M064G"
    },
    {
      "Type": "SSD",
      "Part Number": "PW120GS25SSDR",
      "Brand": "Patriot",
      "Model": "Wildfire 120GB",
      "Rank": 696,
      "Benchmark": 66.9,
      "Samples": 252,
      "URL": "https://ssd.userbenchmark.com/Patriot-Wildfire-120GB/Rating/2235"
    },
    {
      "Type": "SSD",
      "Part Number": "AS511S3-120GM-C",
      "Brand": "Adata",
      "Model": "S511 120GB",
      "Rank": 697,
      "Benchmark": 66.9,
      "Samples": 563,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4509/ADATA-SSD-S511-120GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SVP200S37A60G",
      "Brand": "Kingston",
      "Model": "SSDNow V+200 Series 60GB",
      "Rank": 698,
      "Benchmark": 66.9,
      "Samples": 173,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10560/KINGSTON-SVP200S37A60G"
    },
    {
      "Type": "SSD",
      "Part Number": "SH100S3/120G",
      "Brand": "Kingston",
      "Model": "HyperX 120GB",
      "Rank": 699,
      "Benchmark": 66.8,
      "Samples": 2907,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1716/KINGSTON-SH100S3120G"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDCR120GB-DX",
      "Brand": "Mushkin",
      "Model": "Chronos Deluxe 120GB",
      "Rank": 700,
      "Benchmark": 66.8,
      "Samples": 337,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4583/MKNSSDCR120GB-DX"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "AGILITY4 512GB",
      "Rank": 701,
      "Benchmark": 66.8,
      "Samples": 135,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11959/OCZ-AGILITY4"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ7PC256HAFU",
      "Brand": "Samsung",
      "Model": "PM830 256GB",
      "Rank": 702,
      "Benchmark": 66.7,
      "Samples": 1838,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5924/SAMSUNG-MZ7PC256HAFU-000H1"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDX-120G-G25",
      "Brand": "SanDisk",
      "Model": "Extreme 120GB",
      "Rank": 703,
      "Benchmark": 66.7,
      "Samples": 9660,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1102/SanDisk-SDSSDX120GG25"
    },
    {
      "Type": "SSD",
      "Part Number": "TRN100-25SAT3-240G",
      "Brand": "OCZ",
      "Model": "Trion 100 240GB",
      "Rank": 704,
      "Benchmark": 66.4,
      "Samples": 7957,
      "URL": "https://ssd.userbenchmark.com/OCZ-Trion-100-240GB/Rating/3501"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDMCEAC180B301",
      "Brand": "Intel",
      "Model": "525 Series mSATA 180GB",
      "Rank": 705,
      "Benchmark": 66.3,
      "Samples": 52,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/14110/INTEL-SSDMCEAC180B3"
    },
    {
      "Type": "SSD",
      "Part Number": "TS128GMTS400",
      "Brand": "Transcend",
      "Model": "MTS400 M.2 128GB",
      "Rank": 706,
      "Benchmark": 66.2,
      "Samples": 604,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12551/TS128GMTS400"
    },
    {
      "Type": "SSD",
      "Part Number": "SKC300S37A/60G",
      "Brand": "Kingston",
      "Model": "SSDNow KC300 60GB",
      "Rank": 707,
      "Benchmark": 66.1,
      "Samples": 579,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8566/KINGSTON-SKC300S37A60G"
    },
    {
      "Type": "SSD",
      "Part Number": "SA400S37/240G",
      "Brand": "Kingston",
      "Model": "A400 240GB",
      "Rank": 708,
      "Benchmark": 66,
      "Samples": 271349,
      "URL": "https://ssd.userbenchmark.com/Kingston-A400-240GB/Rating/3953"
    },
    {
      "Type": "SSD",
      "Part Number": "2DP98AA#ABC",
      "Brand": "HP",
      "Model": "S700 250GB",
      "Rank": 709,
      "Benchmark": 65.9,
      "Samples": 6871,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/332066/HP-SSD-S700-250GB"
    },
    {
      "Type": "SSD",
      "Part Number": "ASU650SS-480GT-C",
      "Brand": "Adata",
      "Model": "SU650 480GB",
      "Rank": 710,
      "Benchmark": 65.9,
      "Samples": 13822,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/434166/ADATA-SU650"
    },
    {
      "Type": "SSD",
      "Part Number": "CT480BX500SSD1",
      "Brand": "Crucial",
      "Model": "BX500 480GB",
      "Rank": 711,
      "Benchmark": 65.9,
      "Samples": 49386,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/579817/CT480BX500SSD1"
    },
    {
      "Type": "SSD",
      "Part Number": "THNSNS128GMCP",
      "Brand": "Toshiba",
      "Model": "THNSNS Series mSATA PCI-E 128GB",
      "Rank": 712,
      "Benchmark": 65.9,
      "Samples": 577,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3823/TOSHIBA-THNSNS128GMCP"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "SM256E 251GB",
      "Rank": 713,
      "Benchmark": 65.8,
      "Samples": 688,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1438/APPLE-SSD-SM256E"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP900S3-128GM-C",
      "Brand": "Adata",
      "Model": "Premier Pro SP900 128GB",
      "Rank": 714,
      "Benchmark": 65.7,
      "Samples": 2715,
      "URL": "https://ssd.userbenchmark.com/Adata-Premier-Pro-SP900-128GB/Rating/1930"
    },
    {
      "Type": "SSD",
      "Part Number": "OCZSSDPX-1RVD0240",
      "Brand": "OCZ",
      "Model": "RevoDrive PCIe 240GB",
      "Rank": 715,
      "Benchmark": 65.7,
      "Samples": 99,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3328/OCZ-REVODRIV"
    },
    {
      "Type": "SSD",
      "Part Number": "CT120M500SSD1",
      "Brand": "Crucial",
      "Model": "M500 120GB",
      "Rank": 716,
      "Benchmark": 65.7,
      "Samples": 14545,
      "URL": "https://ssd.userbenchmark.com/Crucial-M500-120GB/Rating/1888"
    },
    {
      "Type": "SSD",
      "Part Number": "TS128GSSD720",
      "Brand": "Transcend",
      "Model": "SSD720 128GB",
      "Rank": 717,
      "Benchmark": 65.6,
      "Samples": 437,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8724/TS128GSSD720"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BF240A5L",
      "Brand": "Intel",
      "Model": "SSD Pro 2500 Series 240GB",
      "Rank": 718,
      "Benchmark": 65.5,
      "Samples": 1806,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/21454/INTEL-SSDSC2BF240A5L"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BF240H501",
      "Brand": "Intel",
      "Model": "SSD Pro 2500 Series 240GB",
      "Rank": 718,
      "Benchmark": 65.5,
      "Samples": 1806,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/21454/INTEL-SSDSC2BF240A5L"
    },
    {
      "Type": "SSD",
      "Part Number": "PX-64M5M",
      "Brand": "Plextor",
      "Model": "M5M mSATA 64GB",
      "Rank": 719,
      "Benchmark": 65.5,
      "Samples": 105,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1638/PLEXTOR-PX-64M5M"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Geil",
      "Model": "Zenith S3 120GB",
      "Rank": 720,
      "Benchmark": 65.5,
      "Samples": 196,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/18730/GeIL-ZENITH-S3-120GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SM2280S3/120G",
      "Brand": "Kingston",
      "Model": "SM2280S3 SATA M.2 120GB",
      "Rank": 721,
      "Benchmark": 65.5,
      "Samples": 1522,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/14411/KINGSTON-SM2280S3120G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "SM512E 500GB",
      "Rank": 722,
      "Benchmark": 65.4,
      "Samples": 454,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2941/APPLE-SSD-SM512E"
    },
    {
      "Type": "SSD",
      "Part Number": "PP240GS25SSDR",
      "Brand": "Patriot",
      "Model": "Pyro 240GB",
      "Rank": 723,
      "Benchmark": 65.4,
      "Samples": 341,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9501/Patriot-Pyro-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM851 mSATA 256GB",
      "Rank": 724,
      "Benchmark": 65.4,
      "Samples": 5199,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8695/SAMSUNG-SSD-PM851-mSATA-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SD5SF2-128G",
      "Brand": "SanDisk",
      "Model": "X100 mSATA 128GB",
      "Rank": 725,
      "Benchmark": 65.4,
      "Samples": 164,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7539/SanDisk-SD5SF2128G"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BB120G4",
      "Brand": "Intel",
      "Model": "S3500 Series 120GB",
      "Rank": 726,
      "Benchmark": 65.3,
      "Samples": 314,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10755/INTEL-SSDSC2BB120G4"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDCR120GB",
      "Brand": "Mushkin",
      "Model": "Chronos 120GB",
      "Rank": 727,
      "Benchmark": 65.3,
      "Samples": 785,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3690/MKNSSDCR120GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX2 240GB",
      "Rank": 728,
      "Benchmark": 65.1,
      "Samples": 10,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/127/OCZ-VERTEX2"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F90GBGT-BK",
      "Brand": "Corsair",
      "Model": "Force GT 90GB",
      "Rank": 729,
      "Benchmark": 64.8,
      "Samples": 696,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2377/Corsair-Force-GT"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC120GE2DA08B-T 120GB",
      "Rank": 730,
      "Benchmark": 64.7,
      "Samples": 87,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6740/SSD2SC120GE2DA08B-T"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSNF128GMCS 128GB",
      "Rank": 731,
      "Benchmark": 64.7,
      "Samples": 1068,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1596/TOSHIBA-THNSNF128GMCS"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX3 90GB",
      "Rank": 732,
      "Benchmark": 64.5,
      "Samples": 921,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1586/OCZ-VERTEX3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMTE256HMHP-000L1 256GB",
      "Rank": 733,
      "Benchmark": 64.4,
      "Samples": 1005,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12653/SAMSUNG-MZMTE256HMHP-000L1"
    },
    {
      "Type": "SSD",
      "Part Number": "SHFS37A/120G",
      "Brand": "HyperX",
      "Model": "Fury 120GB",
      "Rank": 734,
      "Benchmark": 64.4,
      "Samples": 7193,
      "URL": "https://ssd.userbenchmark.com/HyperX-Fury-120GB/Rating/2586"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Goodram",
      "Model": "C50 240GB",
      "Rank": 735,
      "Benchmark": 64.3,
      "Samples": 31,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7031/GOODRAM-C50"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Adata",
      "Model": "SX910 128GB",
      "Rank": 736,
      "Benchmark": 64.3,
      "Samples": 317,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/444/ADATA-SX910"
    },
    {
      "Type": "SSD",
      "Part Number": "PPSE120GS25SSDR",
      "Brand": "Patriot",
      "Model": "Pyro SE 120GB",
      "Rank": 737,
      "Benchmark": 64.2,
      "Samples": 334,
      "URL": "https://ssd.userbenchmark.com/Patriot-Pyro-SE-120GB/Rating/2233"
    },
    {
      "Type": "SSD",
      "Part Number": "2DP97AA#ABC",
      "Brand": "HP",
      "Model": "S700 120GB",
      "Rank": 738,
      "Benchmark": 64.2,
      "Samples": 3685,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/307263/HP-SSD-S700-120GB"
    },
    {
      "Type": "SSD",
      "Part Number": "RVD3-FHPX4-120G",
      "Brand": "OCZ",
      "Model": "RevoDrive 3 PCIe 120GB",
      "Rank": 739,
      "Benchmark": 64.1,
      "Samples": 551,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3116/OCZ-REVODRIVE3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-128M3M 128GB",
      "Rank": 740,
      "Benchmark": 64.1,
      "Samples": 494,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3187/LITEONIT-LMT-128M3M"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Mushkin",
      "Model": "MKNSSDCR120GB-MX 120GB",
      "Rank": 741,
      "Benchmark": 64.1,
      "Samples": 201,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1448/MKNSSDCR120GB-MX"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "MXSSD3MDSF-120G 120GB",
      "Rank": 742,
      "Benchmark": 64,
      "Samples": 8,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10325/MXSSD3MDSF-120G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "HFS256G3AMNB-2200A 256GB",
      "Rank": 743,
      "Benchmark": 63.9,
      "Samples": 1219,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4739/HFS256G3AMNB-2200A"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZ7TE128HMGR-000L1 128GB",
      "Rank": 744,
      "Benchmark": 63.8,
      "Samples": 4194,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9061/SAMSUNG-MZ7TE128HMGR-000L1"
    },
    {
      "Type": "SSD",
      "Part Number": "TL100-25SAT3-240G",
      "Brand": "Toshiba",
      "Model": "OCZ TL100 240GB",
      "Rank": 745,
      "Benchmark": 63.7,
      "Samples": 6739,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/182236/TOSHIBA-TL100"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZNTD512HAGL-000L1 512GB",
      "Rank": 746,
      "Benchmark": 63.7,
      "Samples": 208,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6200/SAMSUNG-MZNTD512HAGL-000L1"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Kingston",
      "Model": "SVP100S296G 96GB",
      "Rank": 747,
      "Benchmark": 63.5,
      "Samples": 6,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2336/KINGSTON-SVP100S296G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSNF256GMCS 256GB",
      "Rank": 748,
      "Benchmark": 63.5,
      "Samples": 742,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5493/TOSHIBA-THNSNF256GMCS"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Goodram",
      "Model": "C100 120GB",
      "Rank": 749,
      "Benchmark": 63.4,
      "Samples": 312,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5675/GOODRAM-C100"
    },
    {
      "Type": "SSD",
      "Part Number": "ASU650SS-120GT-C",
      "Brand": "Adata",
      "Model": "SU650 120GB",
      "Rank": 750,
      "Benchmark": 63.3,
      "Samples": 35349,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/359434/ADATA-SU650"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM830 mSATA 256GB",
      "Rank": 751,
      "Benchmark": 63.2,
      "Samples": 6770,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3903/SAMSUNG-SSD-PM830-mSATA-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "SD5SG2256G1052E 256GB",
      "Rank": 752,
      "Benchmark": 63.1,
      "Samples": 573,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2816/SanDisk-SD5SG2256G1052E"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZ7TD512HAGM-000L1 512GB",
      "Rank": 753,
      "Benchmark": 63,
      "Samples": 500,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3479/SAMSUNG-MZ7TD512HAGM-000L1"
    },
    {
      "Type": "SSD",
      "Part Number": "TRN100-25SAT3-120G",
      "Brand": "OCZ",
      "Model": "Trion 100 120GB",
      "Rank": 754,
      "Benchmark": 62.8,
      "Samples": 3565,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/32000/OCZ-TRION100"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM841 2.5\" 256GB",
      "Rank": 755,
      "Benchmark": 62.8,
      "Samples": 1082,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5077/SAMSUNG-SSD-PM841-25--7"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Adata",
      "Model": "SX300 256GB",
      "Rank": 756,
      "Benchmark": 62.7,
      "Samples": 92,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3900/ADATA-SX300"
    },
    {
      "Type": "SSD",
      "Part Number": "PP120GS25SSDR",
      "Brand": "Patriot",
      "Model": "Pyro 120GB",
      "Rank": 757,
      "Benchmark": 62.7,
      "Samples": 120,
      "URL": "https://ssd.userbenchmark.com/Patriot-Pyro-120GB/Rating/2234"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7PC128B/WW",
      "Brand": "Samsung",
      "Model": "830 128GB",
      "Rank": 758,
      "Benchmark": 62.6,
      "Samples": 28570,
      "URL": "https://ssd.userbenchmark.com/Samsung-830-128GB/Rating/1926"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSCKGF180A4L",
      "Brand": "Intel",
      "Model": "SSD Pro 1500 Series 180GB",
      "Rank": 759,
      "Benchmark": 62.5,
      "Samples": 179,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6511/INTEL-SSDSCKGF180A4L"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZ7TD256HAFV-000L7 256GB",
      "Rank": 760,
      "Benchmark": 62.5,
      "Samples": 5388,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2342/SAMSUNG-MZ7TD256HAFV-000L7"
    },
    {
      "Type": "SSD",
      "Part Number": "SV300S37A/240G",
      "Brand": "Kingston",
      "Model": "SSDNow V300 240GB",
      "Rank": 761,
      "Benchmark": 62.4,
      "Samples": 136195,
      "URL": "https://ssd.userbenchmark.com/Kingston-SSDNow-V300-240GB/Rating/1817"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "SD512E 500GB",
      "Rank": 762,
      "Benchmark": 62.4,
      "Samples": 220,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6934/APPLE-SSD-SD512E"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Kingston",
      "Model": "SKC100S3120G 120GB",
      "Rank": 763,
      "Benchmark": 62.3,
      "Samples": 244,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5074/KINGSTON-SKC100S3120G"
    },
    {
      "Type": "SSD",
      "Part Number": "PT240GS25SSDR",
      "Brand": "Patriot",
      "Model": "Torch 240GB",
      "Rank": 764,
      "Benchmark": 62.1,
      "Samples": 43,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/18783/Patriot-Torch"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "SS DSC2BW180A3H 180GB",
      "Rank": 765,
      "Benchmark": 61.9,
      "Samples": 46,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9583/INTEL-SS-DSC2BW180A3H"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZNTD256HAGL-00000 256GB",
      "Rank": 766,
      "Benchmark": 61.8,
      "Samples": 1085,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/396/SAMSUNG-MZNTD256HAGL-00000"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2CW480A3",
      "Brand": "Intel",
      "Model": "520 Series 480GB",
      "Rank": 767,
      "Benchmark": 61.8,
      "Samples": 1485,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9939/INTEL-SSDSC2CW480A3"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2CW060A3",
      "Brand": "Intel",
      "Model": "520 Series 60GB",
      "Rank": 768,
      "Benchmark": 61.7,
      "Samples": 979,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7251/INTEL-SSDSC2CW060A3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMTE256HMHP-000MV 256GB",
      "Rank": 769,
      "Benchmark": 61.6,
      "Samples": 2490,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12210/SAMSUNG-MZMTE256HMHP-000MV"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "SM768E 751GB",
      "Rank": 770,
      "Benchmark": 61.6,
      "Samples": 154,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4350/APPLE-SSD-SM768E"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDMCEAC120B301",
      "Brand": "Intel",
      "Model": "525 Series mSATA 120GB",
      "Rank": 771,
      "Benchmark": 61.5,
      "Samples": 603,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5314/INTEL-SSDMCEAC120B3"
    },
    {
      "Type": "SSD",
      "Part Number": "PB240GS25SSDR",
      "Brand": "Patriot",
      "Model": "Blaze 240GB",
      "Rank": 772,
      "Benchmark": 61.5,
      "Samples": 1200,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/19971/Patriot-Blaze"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F480GBGS-BK",
      "Brand": "Corsair",
      "Model": "Force GS 480GB",
      "Rank": 773,
      "Benchmark": 61,
      "Samples": 532,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7580/Corsair-Force-GS"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDEC120GB",
      "Brand": "Mushkin",
      "Model": "ECO2 120GB",
      "Rank": 774,
      "Benchmark": 61,
      "Samples": 266,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/24915/MKNSSDEC120GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Goodram",
      "Model": "C40 240GB",
      "Rank": 775,
      "Benchmark": 61,
      "Samples": 416,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/13085/GOODRAM-C40"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "SM128E 121GB",
      "Rank": 776,
      "Benchmark": 60.7,
      "Samples": 254,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8955/APPLE-SSD-SM128E"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ7PC128HAFU",
      "Brand": "Samsung",
      "Model": "PM830 128GB",
      "Rank": 777,
      "Benchmark": 60.7,
      "Samples": 9611,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3368/SAMSUNG-MZ7PC128HAFU-000H1"
    },
    {
      "Type": "SSD",
      "Part Number": "SD8SBAT-128G-1122",
      "Brand": "SanDisk",
      "Model": "Z400s 128GB",
      "Rank": 778,
      "Benchmark": 60.6,
      "Samples": 7980,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/34216/SanDisk-SD8SBAT128G1122"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7TD120BW",
      "Brand": "Samsung",
      "Model": "840 120GB",
      "Rank": 779,
      "Benchmark": 60.4,
      "Samples": 46360,
      "URL": "https://ssd.userbenchmark.com/Samsung-840-120GB/Rating/2263"
    },
    {
      "Type": "SSD",
      "Part Number": "CT256M4SSD2",
      "Brand": "Crucial",
      "Model": "M4 256GB",
      "Rank": 780,
      "Benchmark": 60.4,
      "Samples": 15578,
      "URL": "https://ssd.userbenchmark.com/Crucial-M4-256GB/Rating/372"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Mushkin",
      "Model": "MKNSSDAT240GB-DX 240GB",
      "Rank": 781,
      "Benchmark": 60.4,
      "Samples": 124,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/85/MKNSSDAT240GB-DX"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDA-240G-G25",
      "Brand": "SanDisk",
      "Model": "SSD Plus 240GB",
      "Rank": 782,
      "Benchmark": 60.3,
      "Samples": 103291,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/25612/SanDisk-SDSSDA240G"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDA-240G-G26",
      "Brand": "SanDisk",
      "Model": "SSD Plus 240GB",
      "Rank": 782,
      "Benchmark": 60.3,
      "Samples": 103291,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/25612/SanDisk-SDSSDA240G"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BF120A5",
      "Brand": "Intel",
      "Model": "SSD Pro 2500 Series 120GB",
      "Rank": 783,
      "Benchmark": 60.1,
      "Samples": 204,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/23404/INTEL-SSDSC2BF120A5"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BF120H501",
      "Brand": "Intel",
      "Model": "SSD Pro 2500 Series 120GB",
      "Rank": 783,
      "Benchmark": 60.1,
      "Samples": 204,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/23404/INTEL-SSDSC2BF120A5"
    },
    {
      "Type": "SSD",
      "Part Number": "SA400S37/120G",
      "Brand": "Kingston",
      "Model": "A400 120GB",
      "Rank": 784,
      "Benchmark": 60.1,
      "Samples": 119683,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/229920/KINGSTON-SA400S37120G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "DMT-80 11GB",
      "Rank": 785,
      "Benchmark": 60,
      "Samples": 70,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5740/LITEONIT-DMT-80"
    },
    {
      "Type": "SSD",
      "Part Number": "CT128M4SSD2",
      "Brand": "Crucial",
      "Model": "M4 128GB",
      "Rank": 786,
      "Benchmark": 59.8,
      "Samples": 31475,
      "URL": "https://ssd.userbenchmark.com/Crucial-M4-128GB/Rating/1929"
    },
    {
      "Type": "SSD",
      "Part Number": "SH103S3/90G",
      "Brand": "Kingston",
      "Model": "HyperX 3K 90GB",
      "Rank": 787,
      "Benchmark": 59.7,
      "Samples": 400,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3217/KINGSTON-SH103S390G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMTD512HAGL-00000 512GB",
      "Rank": 788,
      "Benchmark": 59.7,
      "Samples": 414,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/298/SAMSUNG-MZMTD512HAGL-00000"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDA-960G-G25",
      "Brand": "SanDisk",
      "Model": "SSD Plus 960GB",
      "Rank": 789,
      "Benchmark": 59.7,
      "Samples": 2197,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/206516/SanDisk-SDSSDA960G"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDA-960G-G26",
      "Brand": "SanDisk",
      "Model": "SSD Plus 960GB",
      "Rank": 789,
      "Benchmark": 59.7,
      "Samples": 2197,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/206516/SanDisk-SDSSDA960G"
    },
    {
      "Type": "SSD",
      "Part Number": "SH103S3/480G",
      "Brand": "Kingston",
      "Model": "HyperX 3K 480GB",
      "Rank": 790,
      "Benchmark": 59.6,
      "Samples": 1369,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8665/KINGSTON-KINGSTON-SH103S3"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F60GBGT-BK",
      "Brand": "Corsair",
      "Model": "Force GT 60GB",
      "Rank": 791,
      "Benchmark": 59.6,
      "Samples": 1300,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1231/Corsair-Force-GT"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2BW480H601",
      "Brand": "Intel",
      "Model": "535 Series 480GB",
      "Rank": 792,
      "Benchmark": 59.4,
      "Samples": 2578,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/29709/INTEL-SSDSC2BW480H6"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Mushkin",
      "Model": "MKNSSDAT120GB-DX 120GB",
      "Rank": 793,
      "Benchmark": 59.4,
      "Samples": 208,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6436/MKNSSDAT120GB-DX"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX3 60GB",
      "Rank": 794,
      "Benchmark": 59.3,
      "Samples": 3824,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1912/OCZ-VERTEX3"
    },
    {
      "Type": "SSD",
      "Part Number": "SD8SNAT-128G",
      "Brand": "SanDisk",
      "Model": "X400s SATA M.2 128GB",
      "Rank": 795,
      "Benchmark": 59.1,
      "Samples": 45,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/33396/SanDisk-SD8SNAT128G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "XLR8 Pro 480GB",
      "Rank": 796,
      "Benchmark": 59.1,
      "Samples": 18,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/23219/SSD2SC480GC4DA16T-T"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMTE256HMHP-000SO 256GB",
      "Rank": 797,
      "Benchmark": 59.1,
      "Samples": 23,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12855/SAMSUNG-MZMTE256HMHP-000SO"
    },
    {
      "Type": "SSD",
      "Part Number": "CT120M500SSD3",
      "Brand": "Crucial",
      "Model": "M500 mSATA 120GB",
      "Rank": 798,
      "Benchmark": 58.9,
      "Samples": 824,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6146/Crucial-CT120M500SSD3"
    },
    {
      "Type": "SSD",
      "Part Number": "CT256M4SSD3",
      "Brand": "Crucial",
      "Model": "M4 256GB mSATA",
      "Rank": 799,
      "Benchmark": 58.7,
      "Samples": 20,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5098/M4-CT256-M4-CT256M4SSD3"
    },
    {
      "Type": "SSD",
      "Part Number": "VTX3-25SAT3-480G",
      "Brand": "OCZ",
      "Model": "Vertex 3 480GB",
      "Rank": 800,
      "Benchmark": 58.5,
      "Samples": 158,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4908/OCZ-VERTEX3"
    },
    {
      "Type": "SSD",
      "Part Number": "TL100-25SAT3-120G",
      "Brand": "Toshiba",
      "Model": "OCZ TL100 120GB",
      "Rank": 801,
      "Benchmark": 58.4,
      "Samples": 1641,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/184159/TOSHIBA-TL100"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Spcc",
      "Model": "Solid State Disk 120GB",
      "Rank": 802,
      "Benchmark": 58.3,
      "Samples": 14650,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12061/SPCC-Solid-State-Disk"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "510 Series 250GB",
      "Rank": 803,
      "Benchmark": 58.2,
      "Samples": 682,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2447/INTEL-SSDSC2MH250A2"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX900S3-512GM-C",
      "Brand": "Adata",
      "Model": "XPG SX900 512GB",
      "Rank": 804,
      "Benchmark": 58.1,
      "Samples": 1370,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5993/ADATA-SX900"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDA-120G-G25",
      "Brand": "SanDisk",
      "Model": "SSD Plus 120GB",
      "Rank": 805,
      "Benchmark": 58,
      "Samples": 70658,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/24452/SanDisk-SDSSDA120G"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDA-120G-G26",
      "Brand": "SanDisk",
      "Model": "SSD Plus 120GB",
      "Rank": 805,
      "Benchmark": 58,
      "Samples": 70658,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/24452/SanDisk-SDSSDA120G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC120G5LC709B121-510 120GB",
      "Rank": 806,
      "Benchmark": 58,
      "Samples": 268,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11896/SSD2SC120G5LC709B121-510"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "SSDSC2CT080A4 80GB",
      "Rank": 807,
      "Benchmark": 57.9,
      "Samples": 323,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6435/INTEL-SSDSC2CT080A4"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDX-480G-G25",
      "Brand": "SanDisk",
      "Model": "Extreme 480GB",
      "Rank": 808,
      "Benchmark": 57.8,
      "Samples": 1075,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9517/SanDisk-SDSSDX48"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Adata",
      "Model": "SP600 64GB",
      "Rank": 809,
      "Benchmark": 57.8,
      "Samples": 479,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6806/ADATA-SP600"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMTD256HAGM-000L1 256GB",
      "Rank": 810,
      "Benchmark": 57.7,
      "Samples": 898,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/505/SAMSUNG-MZMTD256HAGM-000L1"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSCMMW240A3L",
      "Brand": "Intel",
      "Model": "521 Series 240GB",
      "Rank": 811,
      "Benchmark": 57.7,
      "Samples": 463,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6283/INTEL-SSDSCMMW240A3L"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "SSDMCEAW120A4 120GB",
      "Rank": 812,
      "Benchmark": 57.6,
      "Samples": 158,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8790/INTEL-SSDMCEAW120A4"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Team",
      "Model": "XS3 SSD 120GB",
      "Rank": 813,
      "Benchmark": 57.4,
      "Samples": 208,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7195/TEAM-XS3--SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDCR60GB",
      "Brand": "Mushkin",
      "Model": "Chronos 60GB",
      "Rank": 814,
      "Benchmark": 57.3,
      "Samples": 75,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1564/MKNSSDCR60GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SKC300S37A/480G",
      "Brand": "Kingston",
      "Model": "SSDNow KC300 480GB",
      "Rank": 815,
      "Benchmark": 57.3,
      "Samples": 545,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/13063/KINGSTON-SKC300S37A480G"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2CT060A3",
      "Brand": "Intel",
      "Model": "330 Series 60GB",
      "Rank": 816,
      "Benchmark": 56.9,
      "Samples": 1968,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2796/INTEL-SSDSC2CT060A3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Kingston",
      "Model": "RBU-SMS100S3128GA 128GB",
      "Rank": 817,
      "Benchmark": 56.8,
      "Samples": 284,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10832/KINGSTON-RBU-SMS100S3128GA"
    },
    {
      "Type": "SSD",
      "Part Number": "TS128GMSA340",
      "Brand": "Transcend",
      "Model": "MSA340 mSATA 128GB",
      "Rank": 818,
      "Benchmark": 56.8,
      "Samples": 22,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/20186/TS128GMSA340"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F480GBGT-BK",
      "Brand": "Corsair",
      "Model": "Force GT 480GB",
      "Rank": 819,
      "Benchmark": 56.7,
      "Samples": 216,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12025/Corsair-Force-GT"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMPC256HBGJ-000H1 256GB",
      "Rank": 820,
      "Benchmark": 56.6,
      "Samples": 464,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2935/SAMSUNG-MZMPC256HBGJ-000H1"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-19nmBGA-64G 64GB",
      "Rank": 821,
      "Benchmark": 56.5,
      "Samples": 118,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7220/LITEONIT-LMT-19nmBGA-64G"
    },
    {
      "Type": "SSD",
      "Part Number": "CTFDDAC256MAG",
      "Brand": "Crucial",
      "Model": "RealSSD C300 256GB",
      "Rank": 822,
      "Benchmark": 56.4,
      "Samples": 639,
      "URL": "https://ssd.userbenchmark.com/Crucial-RealSSD-C300-256GB/Rating/370"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-N64GB3-BK",
      "Brand": "Corsair",
      "Model": "Neutron 64GB",
      "Rank": 823,
      "Benchmark": 56.4,
      "Samples": 190,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4447/Corsair-Neutron-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSNS064GMCP 64GB",
      "Rank": 824,
      "Benchmark": 56.3,
      "Samples": 65,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11198/TOSHIBA-THNSNS064GMCP"
    },
    {
      "Type": "SSD",
      "Part Number": "ASX900S3-64GM-C",
      "Brand": "Adata",
      "Model": "XPG SX900 64GB",
      "Rank": 825,
      "Benchmark": 56.1,
      "Samples": 567,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3799/ADATA-SX900"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM830 64GB",
      "Rank": 826,
      "Benchmark": 56,
      "Samples": 23,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3969/SAMSUNG-SSD-PM83"
    },
    {
      "Type": "SSD",
      "Part Number": "CT240BX500SSD1",
      "Brand": "Crucial",
      "Model": "BX500 240GB",
      "Rank": 827,
      "Benchmark": 55.9,
      "Samples": 94333,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/578496/CT240BX500SSD1"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F360GBGS-BK",
      "Brand": "Corsair",
      "Model": "Force GS 360GB",
      "Rank": 828,
      "Benchmark": 55.9,
      "Samples": 461,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6890/Corsair-Force-GS"
    },
    {
      "Type": "SSD",
      "Part Number": "SMS200S3/60G",
      "Brand": "Kingston",
      "Model": "SSDNow mS200 mSATA 60GB",
      "Rank": 829,
      "Benchmark": 55.8,
      "Samples": 197,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5751/KINGSTON-SMS200S360G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Adata",
      "Model": "SX300 128GB",
      "Rank": 830,
      "Benchmark": 55.8,
      "Samples": 220,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4472/ADATA-SX300"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMPC128HBFU-000L1 128GB",
      "Rank": 831,
      "Benchmark": 55.6,
      "Samples": 1123,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/157/SAMSUNG-MZMPC128HBFU-000L1"
    },
    {
      "Type": "SSD",
      "Part Number": "ASP900S3-064GM-C",
      "Brand": "Adata",
      "Model": "SP900 64GB",
      "Rank": 832,
      "Benchmark": 55.5,
      "Samples": 419,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1593/ADATA-SP900"
    },
    {
      "Type": "SSD",
      "Part Number": "C400-MTFDDAK128MAM",
      "Brand": "Micron",
      "Model": "C400 RealSSD 128GB",
      "Rank": 833,
      "Benchmark": 55.4,
      "Samples": 8490,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4661/C400-MTFDDAK128MAM"
    },
    {
      "Type": "SSD",
      "Part Number": "MZMTE128HMGR-00000",
      "Brand": "Samsung",
      "Model": "PM851 mSATA 128GB",
      "Rank": 834,
      "Benchmark": 55.3,
      "Samples": 1961,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/13404/SAMSUNG-MZMTE128HMGR-000"
    },
    {
      "Type": "SSD",
      "Part Number": "TS64GMSA370",
      "Brand": "Transcend",
      "Model": "MSA370 mSATA 64GB",
      "Rank": 835,
      "Benchmark": 55.2,
      "Samples": 106,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/23905/TS64GMSA370"
    },
    {
      "Type": "SSD",
      "Part Number": "C400-MTFDDAK256MAM",
      "Brand": "Micron",
      "Model": "C400 RealSSD 256GB",
      "Rank": 836,
      "Benchmark": 55.1,
      "Samples": 8920,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5949/C400-MTFDDAK256MAM"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC240G726A104-474-27753 240GB",
      "Rank": 837,
      "Benchmark": 55.1,
      "Samples": 75,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5288/SSD2SC240G726A104-474-27753"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDCR480GB-DX",
      "Brand": "Mushkin",
      "Model": "Chronos Deluxe 480GB",
      "Rank": 838,
      "Benchmark": 55.1,
      "Samples": 96,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7111/MKNSSDCR480GB-DX"
    },
    {
      "Type": "SSD",
      "Part Number": "TS64GSSD370",
      "Brand": "Transcend",
      "Model": "SSD370 64GB",
      "Rank": 839,
      "Benchmark": 54.8,
      "Samples": 341,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/17734/TS64GSSD370"
    },
    {
      "Type": "SSD",
      "Part Number": "MZ-7PC064B/WW",
      "Brand": "Samsung",
      "Model": "830 64GB",
      "Rank": 840,
      "Benchmark": 54.6,
      "Samples": 3163,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1525/SAMSUNG-SSD-830-Series"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZ7TD128HAFV-000L1 128GB",
      "Rank": 841,
      "Benchmark": 54.6,
      "Samples": 3358,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2753/SAMSUNG-MZ7TD128HAFV-000L1"
    },
    {
      "Type": "SSD",
      "Part Number": "SV310S37A/960G",
      "Brand": "Kingston",
      "Model": "SSDNow V310 960GB",
      "Rank": 842,
      "Benchmark": 54.6,
      "Samples": 164,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15065/KINGSTON-SV310S37A960G"
    },
    {
      "Type": "SSD",
      "Part Number": "CT120BX500SSD1",
      "Brand": "Crucial",
      "Model": "BX500 120GB",
      "Rank": 843,
      "Benchmark": 54.5,
      "Samples": 27291,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/576784/CT120BX500SSD1"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM830 mSATA 128GB",
      "Rank": 844,
      "Benchmark": 54.3,
      "Samples": 586,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5211/SAMSUNG-SSD-PM830-mSATA-128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS120G1G0A",
      "Brand": "WD",
      "Model": "Green 120GB (2016)",
      "Rank": 845,
      "Benchmark": 54.2,
      "Samples": 19298,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/201586/WDC-WDS120G1G0A-00SS50"
    },
    {
      "Type": "SSD",
      "Part Number": "TS128GMSA720",
      "Brand": "Transcend",
      "Model": "MSA720 mSATA 128GB",
      "Rank": 846,
      "Benchmark": 54.1,
      "Samples": 121,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/18688/TS128GMSA720"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Kingston",
      "Model": "SS200S330G 30GB",
      "Rank": 847,
      "Benchmark": 54.1,
      "Samples": 147,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8275/KINGSTON-SS200S330G"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F60GBLS",
      "Brand": "Corsair",
      "Model": "Force LS 60GB",
      "Rank": 848,
      "Benchmark": 54.1,
      "Samples": 2805,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4499/Corsair-Force-LS-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "CT128M4SSD3",
      "Brand": "Crucial",
      "Model": "M4 128GB mSATA",
      "Rank": 849,
      "Benchmark": 53.9,
      "Samples": 356,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6566/M4-CT128M4SSD3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Team",
      "Model": "L3 SSD 120GB",
      "Rank": 850,
      "Benchmark": 53.8,
      "Samples": 779,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9314/TEAM-L3-SSD-120GB"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS120G1G0B",
      "Brand": "WD",
      "Model": "Green SATA M.2 120GB",
      "Rank": 851,
      "Benchmark": 53.7,
      "Samples": 5792,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/203345/WDC-WDS120G1G0B-00RC30"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS240G1G0A",
      "Brand": "WD",
      "Model": "Green 240GB (2016)",
      "Rank": 852,
      "Benchmark": 53.6,
      "Samples": 18369,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/204096/WDC-WDS240G1G0A-00SS50"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSCMMW180A3L",
      "Brand": "Intel",
      "Model": "521 Series 180GB",
      "Rank": 853,
      "Benchmark": 53.4,
      "Samples": 270,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11361/INTEL-SSDSCMMW180A3L"
    },
    {
      "Type": "SSD",
      "Part Number": "CT064M4SSD2",
      "Brand": "Crucial",
      "Model": "M4 64GB",
      "Rank": 854,
      "Benchmark": 53.3,
      "Samples": 6019,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1215/M4-CT064M4SSD2"
    },
    {
      "Type": "SSD",
      "Part Number": "SV300S37A/120G",
      "Brand": "Kingston",
      "Model": "SSDNow V300 120GB",
      "Rank": 855,
      "Benchmark": 53.3,
      "Samples": 306888,
      "URL": "https://ssd.userbenchmark.com/Kingston-SSDNow-V300-120GB/Rating/1892"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSC2MH120A2",
      "Brand": "Intel",
      "Model": "510 Series 120GB",
      "Rank": 856,
      "Benchmark": 53.1,
      "Samples": 1689,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1357/INTEL-SSDSC2MH120A2"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDA-480G-G25",
      "Brand": "SanDisk",
      "Model": "SSD Plus 480GB",
      "Rank": 857,
      "Benchmark": 53,
      "Samples": 14314,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/131770/SanDisk-SDSSDA480G"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDA-480G-G26",
      "Brand": "SanDisk",
      "Model": "SSD Plus 480GB",
      "Rank": 857,
      "Benchmark": 53,
      "Samples": 14314,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/131770/SanDisk-SDSSDA480G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Crucial",
      "Model": "C300-CTFDDAC128MAG 128GB",
      "Rank": 858,
      "Benchmark": 53,
      "Samples": 2080,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3591/C300-CTFDDAC128MAG"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDCR60GB-DX",
      "Brand": "Mushkin",
      "Model": "Chronos Deluxe 60GB",
      "Rank": 859,
      "Benchmark": 52.9,
      "Samples": 90,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5641/MKNSSDCR60GB-DX"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F120GBLS",
      "Brand": "Corsair",
      "Model": "Force LS 120GB",
      "Rank": 860,
      "Benchmark": 52.8,
      "Samples": 8991,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5526/Corsair-Force-LS-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Adata",
      "Model": "XM11 128GB",
      "Rank": 861,
      "Benchmark": 52.7,
      "Samples": 136,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6599/ADATA-XM11-128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "AGT3-25SAT3-240G",
      "Brand": "OCZ",
      "Model": "Agility 3 240GB",
      "Rank": 862,
      "Benchmark": 52.6,
      "Samples": 8961,
      "URL": "https://ssd.userbenchmark.com/OCZ-Agility-3-240GB/Rating/369"
    },
    {
      "Type": "SSD",
      "Part Number": "SV300S37A/480G",
      "Brand": "Kingston",
      "Model": "SSDNow V300 480GB",
      "Rank": 863,
      "Benchmark": 52.4,
      "Samples": 12669,
      "URL": "https://ssd.userbenchmark.com/Kingston-SSDNow-V300-480GB/Rating/3480"
    },
    {
      "Type": "SSD",
      "Part Number": "SD6SF1M-064G-1022",
      "Brand": "SanDisk",
      "Model": "X110 mSATA 64GB",
      "Rank": 864,
      "Benchmark": 52.3,
      "Samples": 24,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15608/SanDisk-SD6SF1M064G1022"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS240G1G0B",
      "Brand": "WD",
      "Model": "Green SATA M.2 240GB",
      "Rank": 865,
      "Benchmark": 51.8,
      "Samples": 4682,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/211712/WDC-WDS240G1G0B-00RC30"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD9SC240GMDA-RB",
      "Brand": "PNY",
      "Model": "XLR8 240GB",
      "Rank": 866,
      "Benchmark": 51.8,
      "Samples": 505,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4356/SSD2SC240GC2DH16T-T"
    },
    {
      "Type": "SSD",
      "Part Number": "SSD2SC240GC2DH16T",
      "Brand": "PNY",
      "Model": "XLR8 240GB",
      "Rank": 866,
      "Benchmark": 51.8,
      "Samples": 505,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4356/SSD2SC240GC2DH16T-T"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZNTD128HAGM-00000 128GB",
      "Rank": 867,
      "Benchmark": 51.8,
      "Samples": 733,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4106/SAMSUNG-MZNTD128HAGM-00000"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F240GB3-BK",
      "Brand": "Corsair",
      "Model": "Force 3 240GB",
      "Rank": 868,
      "Benchmark": 51.8,
      "Samples": 5469,
      "URL": "https://ssd.userbenchmark.com/Corsair-Force-3-240GB/Rating/1454"
    },
    {
      "Type": "SSD",
      "Part Number": "MTFDDAT256MAM-1K2",
      "Brand": "Micron",
      "Model": "C400 RealSSD mSATA 256GB",
      "Rank": 869,
      "Benchmark": 51.7,
      "Samples": 438,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4639/MTFDDAT256MAM-1K2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMS-32L6M mSATA 32GB",
      "Rank": 870,
      "Benchmark": 51.6,
      "Samples": 259,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5079/LITEONIT-LMS-32L6M-mSATA-32GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC120G3LC726B104-370P 120GB",
      "Rank": 871,
      "Benchmark": 51.1,
      "Samples": 61,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8341/SSD2SC120G3LC726B104-370P"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Adata",
      "Model": "XM11 128GB",
      "Rank": 872,
      "Benchmark": 50.7,
      "Samples": 158,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8415/ADATA-XM11-128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "TS64GSSD340",
      "Brand": "Transcend",
      "Model": "SSD340 64GB",
      "Rank": 873,
      "Benchmark": 50.6,
      "Samples": 189,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10576/TS64GSSD-340"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM830 mSATA 64GB",
      "Rank": 874,
      "Benchmark": 50.5,
      "Samples": 239,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4586/SAMSUNG-SSD-PM830-mSATA-64GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SV300S37A/60G",
      "Brand": "Kingston",
      "Model": "SSDNow V300 60GB",
      "Rank": 875,
      "Benchmark": 49.7,
      "Samples": 22173,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1905/KINGSTON-SV300S37A60G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LAT-256M2S 256GB",
      "Rank": 876,
      "Benchmark": 49.4,
      "Samples": 486,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8201/LITEONIT-LAT-256M2S"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDCR480GB",
      "Brand": "Mushkin",
      "Model": "Chronos 480GB",
      "Rank": 877,
      "Benchmark": 49.3,
      "Samples": 214,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2434/MKNSSDCR480GB"
    },
    {
      "Type": "SSD",
      "Part Number": "MTFDDAT128MAM-1J2",
      "Brand": "Micron",
      "Model": "C400 RealSSD mSATA 128GB",
      "Rank": 878,
      "Benchmark": 49.2,
      "Samples": 594,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6355/MTFDDAT128MAM-1J2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMPC064HBDR-000L1 64GB",
      "Rank": 879,
      "Benchmark": 48.8,
      "Samples": 99,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5687/SAMSUNG-MZMPC064HBDR-000L1"
    },
    {
      "Type": "SSD",
      "Part Number": "PB120GS25SSDR",
      "Brand": "Patriot",
      "Model": "Blaze 120GB",
      "Rank": 880,
      "Benchmark": 48.8,
      "Samples": 2073,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/16087/Patriot-Blaze-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "OCTANE 128GB",
      "Rank": 881,
      "Benchmark": 48.7,
      "Samples": 307,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5496/OCZ-OCTANE"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMTD128HAFV-000L1 128GB",
      "Rank": 882,
      "Benchmark": 48.5,
      "Samples": 1824,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3377/SAMSUNG-MZMTD128HAFV-000L1"
    },
    {
      "Type": "SSD",
      "Part Number": "AGT3-25SAT3-120G",
      "Brand": "OCZ",
      "Model": "Agility 3 120GB",
      "Rank": 883,
      "Benchmark": 48.2,
      "Samples": 33790,
      "URL": "https://ssd.userbenchmark.com/OCZ-Agility-3-120GB/Rating/2262"
    },
    {
      "Type": "SSD",
      "Part Number": "AS511S3-60GM-C",
      "Brand": "Adata",
      "Model": "S511 60GB",
      "Rank": 884,
      "Benchmark": 47.9,
      "Samples": 21,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5776/ADATA-SS-D-S511-60GB"
    },
    {
      "Type": "SSD",
      "Part Number": "PT60GS25SSDR",
      "Brand": "Patriot",
      "Model": "Torch 60GB",
      "Rank": 885,
      "Benchmark": 47.5,
      "Samples": 131,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/24101/Patriot-Torch"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F120GB3-BK",
      "Brand": "Corsair",
      "Model": "Force 3 120GB",
      "Rank": 886,
      "Benchmark": 47.4,
      "Samples": 17765,
      "URL": "https://ssd.userbenchmark.com/Corsair-Force-3-120GB/Rating/2243"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "SOLID3 120GB",
      "Rank": 887,
      "Benchmark": 47.3,
      "Samples": 1386,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1435/OCZ-SOLID3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Crucial",
      "Model": "C300-CTFDDAC128M 128GB",
      "Rank": 888,
      "Benchmark": 47.2,
      "Samples": 284,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2610/C300-CTFDDAC128M"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSA2BZ300G3",
      "Brand": "Intel",
      "Model": "710 Series 300GB",
      "Rank": 889,
      "Benchmark": 47.1,
      "Samples": 47,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/17911/INTEL-SSDSA2BZ300G3S"
    },
    {
      "Type": "SSD",
      "Part Number": "TS128GSSD320",
      "Brand": "Transcend",
      "Model": "SSD320 128GB",
      "Rank": 890,
      "Benchmark": 46.9,
      "Samples": 1435,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5322/TS128GSSD320"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Plextor",
      "Model": "PX-128M2S 128GB",
      "Rank": 891,
      "Benchmark": 46.8,
      "Samples": 179,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5774/PLEXTOR--PX-128M2S"
    },
    {
      "Type": "SSD",
      "Part Number": "TS64GMSA720",
      "Brand": "Transcend",
      "Model": "MSA720 mSATA 64GB",
      "Rank": 892,
      "Benchmark": 46.6,
      "Samples": 7,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/16849/TS64GMSA720"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "SSDSCIHF120A4H 120GB",
      "Rank": 893,
      "Benchmark": 46.2,
      "Samples": 189,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12016/INTEL-SSDSCIHF120A4H"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F180GB3-BK",
      "Brand": "Corsair",
      "Model": "Force 3 180GB",
      "Rank": 894,
      "Benchmark": 46.2,
      "Samples": 1148,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3275/Corsair-Force-3-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Crucial",
      "Model": "C300-CTFDDAC064MAG 64GB",
      "Rank": 895,
      "Benchmark": 46,
      "Samples": 1323,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3513/C300-CTFDDAC064MAG"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LSS-24L6G 24GB",
      "Rank": 896,
      "Benchmark": 46,
      "Samples": 194,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1985/LITEONIT-LSS-24L6G"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSA2CW300G3",
      "Brand": "Intel",
      "Model": "320 Series 300GB",
      "Rank": 897,
      "Benchmark": 45.9,
      "Samples": 1641,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3362/INTEL-SSDSA2CW300G3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LMT-32L3M 32GB",
      "Rank": 898,
      "Benchmark": 45.9,
      "Samples": 249,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2902/LITEONIT-LMT-32L3M"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC120G726A104-475-27796 120GB",
      "Rank": 899,
      "Benchmark": 45.8,
      "Samples": 228,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5173/SSD2SC120G726A104-475-27796"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "AGILITY3 128GB",
      "Rank": 900,
      "Benchmark": 45.6,
      "Samples": 482,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5791/OCZ-AGILITY3"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS240G2G0A",
      "Brand": "WD",
      "Model": "Green 240GB (2018)",
      "Rank": 901,
      "Benchmark": 45.4,
      "Samples": 116459,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/377351/WDC-WDS240G2G0A-00JH30"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F90GB3-BK",
      "Brand": "Corsair",
      "Model": "Force 3 90GB",
      "Rank": 902,
      "Benchmark": 45.3,
      "Samples": 1719,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4312/Corsair-Force-3-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "PB60GS25SSDR",
      "Brand": "Patriot",
      "Model": "Blaze 60GB",
      "Rank": 903,
      "Benchmark": 45.2,
      "Samples": 596,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/18273/Patriot-Blaze"
    },
    {
      "Type": "SSD",
      "Part Number": "PT120GS25SSDR",
      "Brand": "Patriot",
      "Model": "Torch 120GB",
      "Rank": 904,
      "Benchmark": 44.9,
      "Samples": 125,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/24105/Patriot-Torch"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Liteonit",
      "Model": "LAT-128M2S 128GB",
      "Rank": 905,
      "Benchmark": 44.7,
      "Samples": 408,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3797/LITEONIT-LAT-128M2S"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "AGILITY4 64GB",
      "Rank": 906,
      "Benchmark": 44.5,
      "Samples": 350,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5686/OCZ-AGILITY4"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "SiImage 50GB",
      "Rank": 907,
      "Benchmark": 44.2,
      "Samples": 43,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5297/SiImage"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "AGILITY3 90GB",
      "Rank": 908,
      "Benchmark": 44.1,
      "Samples": 1138,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2120/OCZ-AGILITY3"
    },
    {
      "Type": "SSD",
      "Part Number": "C400-MTFDDAT064MAM",
      "Brand": "Micron",
      "Model": "C400 RealSSD mSATA 64GB",
      "Rank": 909,
      "Benchmark": 44,
      "Samples": 196,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6723/C400-MTFDDAT064MAM"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDCL120GB-DX",
      "Brand": "Mushkin",
      "Model": "Callisto Deluxe 120GB",
      "Rank": 910,
      "Benchmark": 43.9,
      "Samples": 99,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4237/MKNSSDCL120GB-DX"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "FM-25S3-120GBP3 120GB",
      "Rank": 911,
      "Benchmark": 43.9,
      "Samples": 394,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8614/FM-25S3-120GBP3"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSA2BZ200G3",
      "Brand": "Intel",
      "Model": "710 Series 200GB",
      "Rank": 912,
      "Benchmark": 43.7,
      "Samples": 76,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/25022/INTEL-SSDSA2BZ200G3"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F120GB2",
      "Brand": "Corsair",
      "Model": "Force 120GB",
      "Rank": 913,
      "Benchmark": 43.6,
      "Samples": 1775,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1321/Corsair-CSSD-F120GB2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Ocz-vertex2",
      "Model": "3.5 120GB",
      "Rank": 914,
      "Benchmark": 43.2,
      "Samples": 3200,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/736/OCZ-VERTEX2-35"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F60GB3-BK",
      "Brand": "Corsair",
      "Model": "Force 3 60GB",
      "Rank": 915,
      "Benchmark": 43,
      "Samples": 3710,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2139/Corsair-Force-3-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "SV200S3256G",
      "Brand": "Kingston",
      "Model": "SSDNow V Series 256GB",
      "Rank": 916,
      "Benchmark": 43,
      "Samples": 46,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/110/KINGSTON-SV200S3256G"
    },
    {
      "Type": "SSD",
      "Part Number": "WDS120G2G0A",
      "Brand": "WD",
      "Model": "Green 120GB (2018)",
      "Rank": 917,
      "Benchmark": 42.9,
      "Samples": 53256,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/411798/WDC-WDS120G2G0A-00JH"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "AGILITY3 180GB",
      "Rank": 918,
      "Benchmark": 42.8,
      "Samples": 379,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1341/OCZ-AGILITY3"
    },
    {
      "Type": "SSD",
      "Part Number": "PI240GS25SSDR",
      "Brand": "Patriot",
      "Model": "Inferno 240GB",
      "Rank": 919,
      "Benchmark": 42.8,
      "Samples": 21,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/21776/Patriot-Inferno-240GB-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Adata",
      "Model": "SX300 64GB",
      "Rank": 920,
      "Benchmark": 42.8,
      "Samples": 63,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3295/ADATA-SX300"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "470 Series SSD 128GB",
      "Rank": 921,
      "Benchmark": 41.7,
      "Samples": 782,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4655/SAMSUNG-470-Series-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDP-256G-G25",
      "Brand": "SanDisk",
      "Model": "SSD 256GB",
      "Rank": 922,
      "Benchmark": 41.4,
      "Samples": 1856,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1151/SanDisk-SDSSDP256G"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSA2BZ100G3",
      "Brand": "Intel",
      "Model": "710 Series 100GB",
      "Rank": 923,
      "Benchmark": 41.1,
      "Samples": 245,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9161/INTEL-SSDSA2BZ100G3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM830 mSATA 32GB",
      "Rank": 924,
      "Benchmark": 41,
      "Samples": 800,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2575/SAMSUNG-SSD-PM830-mSATA-32GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "AGILITY3 60GB",
      "Rank": 925,
      "Benchmark": 40.9,
      "Samples": 11740,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1654/OCZ-AGILITY3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "SOLID3 60GB",
      "Rank": 926,
      "Benchmark": 40.9,
      "Samples": 1032,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3568/OCZ-SOLID3"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSA2CW160G3",
      "Brand": "Intel",
      "Model": "320 Series 160GB",
      "Rank": 927,
      "Benchmark": 40.8,
      "Samples": 12771,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1192/INTEL-SSDSA2CW160G3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "SSDSA2VP020G2 20GB",
      "Rank": 928,
      "Benchmark": 40.6,
      "Samples": 31,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12923/INTEL-SSDSA2VP020G2"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDP-128G-G25",
      "Brand": "SanDisk",
      "Model": "SSD 128GB",
      "Rank": 929,
      "Benchmark": 40.6,
      "Samples": 7423,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/330/SanDisk-SDSSDP128G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "SandForce[290900] 240GB",
      "Rank": 930,
      "Benchmark": 40.4,
      "Samples": 10,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3886/SandForce-290900-"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Ocz-vertex2",
      "Model": "3.5 240GB",
      "Rank": 931,
      "Benchmark": 40.4,
      "Samples": 118,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5514/OCZ-VERTEX2-35"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC240G3LC709B121-460P 240GB",
      "Rank": 932,
      "Benchmark": 40.3,
      "Samples": 397,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10292/SSD2SC240G3LC709B121-460P"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSA2CW120G3",
      "Brand": "Intel",
      "Model": "320 Series 120GB",
      "Rank": 933,
      "Benchmark": 40.3,
      "Samples": 8039,
      "URL": "https://ssd.userbenchmark.com/Intel-320-Series-120GB/Rating/1936"
    },
    {
      "Type": "SSD",
      "Part Number": "SVP200S390G",
      "Brand": "Kingston",
      "Model": "SSDNow V+200 Series 90GB",
      "Rank": 934,
      "Benchmark": 40.2,
      "Samples": 619,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3742/KINGSTON-SVP200S390G"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F60GB2",
      "Brand": "Corsair",
      "Model": "Force 60GB",
      "Rank": 935,
      "Benchmark": 39.8,
      "Samples": 1273,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/301/Corsair-CSSD-F60GB2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZ7PA128HMCD-010 128GB",
      "Rank": 936,
      "Benchmark": 39.6,
      "Samples": 2772,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3873/SAMSUNG-MZ7PA128HMCD-010"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM810 2.5\" 7mm 128GB",
      "Rank": 937,
      "Benchmark": 39.1,
      "Samples": 3503,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6796/SAMSUNG-SSD-PM810-25--7mm-128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMPC032HBCD-000L1 32GB",
      "Rank": 938,
      "Benchmark": 39,
      "Samples": 512,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1737/SAMSUNG-MZMPC032HBCD-000L1"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC240G3LC709B104-495 240GB",
      "Rank": 939,
      "Benchmark": 38.9,
      "Samples": 24,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10642/SSD2SC240G3LC709B104-495"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Ocz-vertex2",
      "Model": "3.5 115GB",
      "Rank": 940,
      "Benchmark": 38.8,
      "Samples": 2225,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3209/OCZ-VERTEX2-35"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "FM-25S2S-120GBP2 120GB",
      "Rank": 941,
      "Benchmark": 38.8,
      "Samples": 293,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3396/FM-25S2S-120GBP2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Adata",
      "Model": "S510 60GB",
      "Rank": 942,
      "Benchmark": 38.6,
      "Samples": 449,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5619/ADATA-SSD-S510-60GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSA2CW080G3",
      "Brand": "Intel",
      "Model": "320 Series 80GB",
      "Rank": 943,
      "Benchmark": 38.3,
      "Samples": 4042,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2723/INTEL-SSDSA2CW080G3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Crucial",
      "Model": "MTFDBAK128MAG-1G1 128GB",
      "Rank": 944,
      "Benchmark": 38.2,
      "Samples": 903,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1244/MTFDBAK128MAG-1G1"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Kingston",
      "Model": "SVP100S2128G 128GB",
      "Rank": 945,
      "Benchmark": 38,
      "Samples": 534,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2509/KINGSTON-SVP100S2128G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Corsair",
      "Model": "Performance3 SSD 64GB",
      "Rank": 946,
      "Benchmark": 38,
      "Samples": 16,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5387/Corsair-Performance3-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDP-064G-G25",
      "Brand": "SanDisk",
      "Model": "SSD 64GB",
      "Rank": 947,
      "Benchmark": 37.9,
      "Samples": 2793,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1471/SanDisk-SDSSDP064G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Apple",
      "Model": "TS256C 251GB",
      "Rank": 948,
      "Benchmark": 37.7,
      "Samples": 522,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1701/APPLE-SSD-TS256C"
    },
    {
      "Type": "SSD",
      "Part Number": "PP60GS25SSDR",
      "Brand": "Patriot",
      "Model": "Pyro 60GB",
      "Rank": 949,
      "Benchmark": 37.4,
      "Samples": 573,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3406/Patriot-Pyro"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Kingston",
      "Model": "SVP100S264G 64GB",
      "Rank": 950,
      "Benchmark": 37.3,
      "Samples": 258,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3007/KINGSTON-SVP100S264G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "FM-25S2S-60GBP2 60GB",
      "Rank": 951,
      "Benchmark": 37.2,
      "Samples": 189,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6020/FM-25S2S-60GBP2"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSA6GM-128G-1122",
      "Brand": "SanDisk",
      "Model": "U110 128GB",
      "Rank": 952,
      "Benchmark": 37.1,
      "Samples": 1004,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11039/SanDisk-SSD-U110-128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Team",
      "Model": "XS2 SSD 60GB",
      "Rank": 953,
      "Benchmark": 37,
      "Samples": 58,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9202/TEAM-XS2-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "SDSSDH120GG25",
      "Brand": "SanDisk",
      "Model": "Ultra 120GB",
      "Rank": 954,
      "Benchmark": 37,
      "Samples": 528,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2141/SanDisk-SDSSDH120GG25"
    },
    {
      "Type": "SSD",
      "Part Number": "MKNSSDCL60GB-DX",
      "Brand": "Mushkin",
      "Model": "Callisto Deluxe 60GB",
      "Rank": 955,
      "Benchmark": 36.8,
      "Samples": 226,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9311/Mushkin-MKNSSDCL60GB-DX"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM81 128GB",
      "Rank": 956,
      "Benchmark": 36.5,
      "Samples": 60,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1277/SAMSUNG-SSD-PM81"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX2 100GB",
      "Rank": 957,
      "Benchmark": 36.4,
      "Samples": 607,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2400/OCZ-VERTEX2"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSA2M160G2GC",
      "Brand": "Intel",
      "Model": "X25-M 160GB",
      "Rank": 958,
      "Benchmark": 36.4,
      "Samples": 7074,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2803/INTEL-SSDSA2M160G2GC"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDMCEAC030B301",
      "Brand": "Intel",
      "Model": "525 Series mSATA 30GB",
      "Rank": 959,
      "Benchmark": 36.3,
      "Samples": 46,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1644/INTEL-SSDMCEAC030B3"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSA2M120G2GC",
      "Brand": "Intel",
      "Model": "X25-M 120GB",
      "Rank": 960,
      "Benchmark": 36.1,
      "Samples": 1253,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/993/INTEL-SSDSA2M120G2GC"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "SC032G 32GB",
      "Rank": 961,
      "Benchmark": 36,
      "Samples": 486,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9220/SanDisk-SDSSDRC032G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "U100 256GB",
      "Rank": 962,
      "Benchmark": 36,
      "Samples": 404,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6688/SanDisk-SSD-U100-256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "U100 128GB",
      "Rank": 963,
      "Benchmark": 35.9,
      "Samples": 2018,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2827/SanDisk-SSD-U100-128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "PI100GS25SSDR",
      "Brand": "Patriot",
      "Model": "Inferno 100GB",
      "Rank": 964,
      "Benchmark": 35.8,
      "Samples": 15,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/22519/Patriot-Inferno-100GB-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F115GB2",
      "Brand": "Corsair",
      "Model": "Force 115GB",
      "Rank": 965,
      "Benchmark": 35.8,
      "Samples": 209,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/455/Corsair-CSSD-F115GB2-A"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Corsair",
      "Model": "CSSD-V128GB2 128GB",
      "Rank": 966,
      "Benchmark": 35.7,
      "Samples": 198,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6077/Corsair-CSSD-V128GB2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "PNY",
      "Model": "SSD2SC120G3LC709B121-460P 120GB",
      "Rank": 967,
      "Benchmark": 35.7,
      "Samples": 483,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9690/SSD2SC120G3LC709B121-460P"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "AGILITY2 115GB",
      "Rank": 968,
      "Benchmark": 35.7,
      "Samples": 209,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4561/OCZ-AGILITY2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX2 60GB",
      "Rank": 969,
      "Benchmark": 35.6,
      "Samples": 4545,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1338/OCZ-VERTEX2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNS512GG8BBAA 512GB",
      "Rank": 970,
      "Benchmark": 35.3,
      "Samples": 83,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5630/TOSHIBA-THNS512GG8BBAA"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "U100 64GB",
      "Rank": 971,
      "Benchmark": 35.2,
      "Samples": 330,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1019/SanDisk-SSD-U100-64GB"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F480GB3-BK",
      "Brand": "Corsair",
      "Model": "Force 3 480GB",
      "Rank": 972,
      "Benchmark": 35.2,
      "Samples": 160,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/16050/Corsair-Force-3-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "CRUCIAL-CT28M225 128GB",
      "Rank": 973,
      "Benchmark": 35.1,
      "Samples": 10,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6964/CRUCIAL-CT28M225"
    },
    {
      "Type": "SSD",
      "Part Number": "PI60GS25SSDR",
      "Brand": "Patriot",
      "Model": "Inferno 60GB",
      "Rank": 974,
      "Benchmark": 35.1,
      "Samples": 148,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2811/Patriot-Inferno-60GB-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Ocz-vertex2",
      "Model": "3.5 180GB",
      "Rank": 975,
      "Benchmark": 34.8,
      "Samples": 129,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2608/OCZ-VERTEX2-35"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Ocz-vertex2",
      "Model": "3.5 90GB",
      "Rank": 976,
      "Benchmark": 34.7,
      "Samples": 589,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2397/OCZ-VERTEX2-35"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "U100 252GB",
      "Rank": 977,
      "Benchmark": 34.6,
      "Samples": 163,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7207/SanDisk-SSD-U100-252GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSA2M080G2GC",
      "Brand": "Intel",
      "Model": "X25-M 80GB",
      "Rank": 978,
      "Benchmark": 34.4,
      "Samples": 9413,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1145/INTEL-SSDSA2M080G2GC"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "AGILITY3 480GB",
      "Rank": 979,
      "Benchmark": 34.2,
      "Samples": 683,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5217/OCZ-AGILITY3"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM810 mSATA 128GB",
      "Rank": 980,
      "Benchmark": 34.2,
      "Samples": 325,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10016/SAMSUNG-SSD-PM810-mSATA-128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX2 160GB",
      "Rank": 981,
      "Benchmark": 34.1,
      "Samples": 94,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8902/OCZ-VERTEX2"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-F40GB2",
      "Brand": "Corsair",
      "Model": "Force 40GB",
      "Rank": 982,
      "Benchmark": 34,
      "Samples": 331,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7389/Corsair-CSSD-F40GB2-A"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "470 Series SSD 64GB",
      "Rank": 983,
      "Benchmark": 33.6,
      "Samples": 730,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7582/SAMSUNG-470-Series-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "SNV325S2",
      "Brand": "Kingston",
      "Model": "SSDNow V+ Series 128GB",
      "Rank": 984,
      "Benchmark": 33.4,
      "Samples": 551,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7304/KINGSTON-SNV325S2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX2 50GB",
      "Rank": 985,
      "Benchmark": 33.3,
      "Samples": 281,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3237/OCZ-VERTEX2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "U100 124GB",
      "Rank": 986,
      "Benchmark": 32.8,
      "Samples": 230,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6235/SanDisk-SSD-U100-124GB"
    },
    {
      "Type": "SSD",
      "Part Number": "SNVP325S264GB",
      "Brand": "Kingston",
      "Model": "SSDNow V+ Series 64GB",
      "Rank": 987,
      "Benchmark": 32.6,
      "Samples": 500,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2589/KINGSTON-SNVP325S264GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Corsair",
      "Model": "CSSD-F80GBP2 90GB",
      "Rank": 988,
      "Benchmark": 32.4,
      "Samples": 141,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7896/Corsair-CSSD-F80GBP2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMPA128HMFU-000H1 128GB",
      "Rank": 989,
      "Benchmark": 31.9,
      "Samples": 820,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4995/SAMSUNG-MZMPA128HMFU-000H1"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "U100 SMG2 126GB",
      "Rank": 990,
      "Benchmark": 31.7,
      "Samples": 291,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2375/SanDisk-SSD-U100-SMG2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNS128GG4BBAA 128GB",
      "Rank": 991,
      "Benchmark": 31.5,
      "Samples": 388,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3481/TOSHIBA-THNS128GG4BBAA"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX PLUS 120GB",
      "Rank": 992,
      "Benchmark": 31.3,
      "Samples": 704,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5805/OCZ-VERTEX-PLUS"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX 128GB",
      "Rank": 993,
      "Benchmark": 31.1,
      "Samples": 455,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2560/OCZ-VERTEX"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "U100 24GB",
      "Rank": 994,
      "Benchmark": 31,
      "Samples": 1188,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3926/SanDisk-SSD-U100-24GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "SSDSA2CT040G3 40GB",
      "Rank": 995,
      "Benchmark": 31,
      "Samples": 1502,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5899/INTEL-SSDSA2CT040G3"
    },
    {
      "Type": "SSD",
      "Part Number": "NOC-MSATA-60G",
      "Brand": "OCZ",
      "Model": "Nocti Series mSATA 60GB",
      "Rank": 996,
      "Benchmark": 30.9,
      "Samples": 57,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4546/OCZ-NOCTI"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "U110 24GB",
      "Rank": 997,
      "Benchmark": 30.6,
      "Samples": 3,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11223/SanDisk-SSD-U110-24GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX-PLUS 120GB",
      "Rank": 998,
      "Benchmark": 30.6,
      "Samples": 261,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4685/OCZ-VERTEX-PLUS"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-V60GB2A",
      "Brand": "Corsair",
      "Model": "Nova 2 60GB",
      "Rank": 999,
      "Benchmark": 30.5,
      "Samples": 149,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/8360/Corsair-Nova-2-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSA1M160G2HP",
      "Brand": "Intel",
      "Model": "X18-M 160GB",
      "Rank": 1000,
      "Benchmark": 30.3,
      "Samples": 406,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3864/INTEL-SSDSA1M160G2HP"
    },
    {
      "Type": "SSD",
      "Part Number": "SV200S3128G",
      "Brand": "Kingston",
      "Model": "SSDNow V Series 128GB",
      "Rank": 1001,
      "Benchmark": 30.1,
      "Samples": 195,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2473/KINGSTON-SV200S3128G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNS064GG2BNAA 64GB",
      "Rank": 1002,
      "Benchmark": 30,
      "Samples": 34,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6726/TOSHIBA-THNS064GG2BNAA"
    },
    {
      "Type": "SSD",
      "Part Number": "SSDSA2M040G2GC",
      "Brand": "Intel",
      "Model": "X25-M 40GB",
      "Rank": 1003,
      "Benchmark": 29.8,
      "Samples": 1668,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5085/INTEL-SSDSA2M040G2GC"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMPA064HMDR-000 64GB",
      "Rank": 1004,
      "Benchmark": 29.2,
      "Samples": 25,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5090/SAMSUNG-MZMPA064HMDR-000"
    },
    {
      "Type": "SSD",
      "Part Number": "SV200S364G",
      "Brand": "Kingston",
      "Model": "SSDNow V Series 64GB",
      "Rank": 1005,
      "Benchmark": 29,
      "Samples": 1109,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3816/KINGSTON-SV200S364G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Patriot",
      "Model": "Torqx 2 64GB SSD",
      "Rank": 1006,
      "Benchmark": 28.8,
      "Samples": 305,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5143/Patriot-Torqx-2-64GB-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX2 80GB",
      "Rank": 1007,
      "Benchmark": 28.6,
      "Samples": 207,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4175/OCZ-VERTEX2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Corsair",
      "Model": "CSSD-V64GB2 64GB",
      "Rank": 1008,
      "Benchmark": 28.5,
      "Samples": 203,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5429/Corsair-CSSD-V64GB2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNS128GG4BAAA-NonFDE 128GB",
      "Rank": 1009,
      "Benchmark": 28.1,
      "Samples": 346,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5893/TOSHIBA-THNS128GG4BAAA-NonFDE"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "i100 24GB",
      "Rank": 1010,
      "Benchmark": 27.9,
      "Samples": 800,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2946/SanDisk-SSD-i100-24GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSNW128GMCP 128GB",
      "Rank": 1011,
      "Benchmark": 27.8,
      "Samples": 91,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5430/Toshiba-THNSNW128GMCP"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "AGILITY3 360GB",
      "Rank": 1012,
      "Benchmark": 27.6,
      "Samples": 187,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3757/OCZ-AGILITY3"
    },
    {
      "Type": "SSD",
      "Part Number": "V4-CT256V4SSD2",
      "Brand": "Crucial",
      "Model": "V4 256GB",
      "Rank": 1013,
      "Benchmark": 27.5,
      "Samples": 193,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4100/V4-CT256V4SSD2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Patriot",
      "Model": "Torqx 2 32GB SSD",
      "Rank": 1014,
      "Benchmark": 27.2,
      "Samples": 158,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4330/Patriot-Torqx-2-32GB-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "NOC-MSATA-120G",
      "Brand": "OCZ",
      "Model": "Nocti Series mSATA 120GB",
      "Rank": 1015,
      "Benchmark": 26.9,
      "Samples": 166,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2316/OCZ-NOCTI"
    },
    {
      "Type": "SSD",
      "Part Number": "V4-CT128V4SSD2",
      "Brand": "Crucial",
      "Model": "V4 128GB",
      "Rank": 1016,
      "Benchmark": 26.8,
      "Samples": 195,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5400/V4-CT128V4SSD2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MMDOE56G5MXP-0VB 256GB",
      "Rank": 1017,
      "Benchmark": 26.7,
      "Samples": 120,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2430/SAMSUNG-MMDOE56G5MXP-0VB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMPA032HMCD-000 32GB",
      "Rank": 1018,
      "Benchmark": 26.6,
      "Samples": 18,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/13406/SAMSUNG-MZMPA032HMCD-000"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX-PLUS 60GB",
      "Rank": 1019,
      "Benchmark": 26.4,
      "Samples": 700,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5101/OCZ-VERTEX-PLUS"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX-TURBO 32GB",
      "Rank": 1020,
      "Benchmark": 26.3,
      "Samples": 60,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/10536/OCZ-VERTEX-TURBO"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "NOCTI 30GB",
      "Rank": 1021,
      "Benchmark": 26.1,
      "Samples": 70,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6687/OCZ-NOCTI"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "VERTEX 64GB",
      "Rank": 1022,
      "Benchmark": 25.9,
      "Samples": 514,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2798/OCZ-VERTEX"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Corsair",
      "Model": "CMFSSD-64GBG2D 64GB",
      "Rank": 1023,
      "Benchmark": 25.6,
      "Samples": 220,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1848/CORSAIR-CMFSSD-64GBG2D"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Corsair",
      "Model": "CMFSSD-256GBG2D 256GB",
      "Rank": 1024,
      "Benchmark": 25.3,
      "Samples": 158,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4873/CORSAIR-CMFSSD-256GBG2D"
    },
    {
      "Type": "SSD",
      "Part Number": "CSSD-V30GB2A",
      "Brand": "Corsair",
      "Model": "Nova 2 30GB",
      "Rank": 1025,
      "Benchmark": 25.2,
      "Samples": 115,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/15718/Corsair-Nova-2-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "SUMMIT 128GB",
      "Rank": 1026,
      "Benchmark": 25.1,
      "Samples": 59,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4737/OCZ-SUMMIT"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Kingston",
      "Model": "SV100S2128G 128GB",
      "Rank": 1027,
      "Benchmark": 24.3,
      "Samples": 970,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2099/KINGSTON-SV100S2128G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM800 Series 2.5\" 256GB",
      "Rank": 1028,
      "Benchmark": 24.2,
      "Samples": 1053,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5330/SAMSUNG-SSD-PM800-Series-25--256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MZMPA024HMCD-000L1 24GB",
      "Rank": 1029,
      "Benchmark": 23.8,
      "Samples": 144,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12709/SAMSUNG-MZMPA024HMCD-000L1"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM800 2.5\" 128GB",
      "Rank": 1030,
      "Benchmark": 23.8,
      "Samples": 1021,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4482/SAMSUNG-SSD-PM800-25--128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "OCZ",
      "Model": "PETROL 64GB",
      "Rank": 1031,
      "Benchmark": 23.8,
      "Samples": 56,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9027/OCZ-PETROL"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "CSSD-V60GB2 60GB",
      "Rank": 1032,
      "Benchmark": 23.6,
      "Samples": 135,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2886/CSSD-V60GB2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PB22-JS3 FDE 2.5\" 128GB",
      "Rank": 1033,
      "Benchmark": 23.4,
      "Samples": 759,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4180/SAMSUNG-SSD-PB22-JS3-FDE-25--128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PB22-JS3 FDE 2.5\" 256GB",
      "Rank": 1034,
      "Benchmark": 23.3,
      "Samples": 211,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/4863/SAMSUNG-SSD-PB22-JS3-FDE-25--256GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Kingston",
      "Model": "SV100S2 256GB",
      "Rank": 1035,
      "Benchmark": 22.9,
      "Samples": 130,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3014/KINGSTON-SV100S2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Kingston",
      "Model": "SMS100S232G 32GB",
      "Rank": 1036,
      "Benchmark": 22.6,
      "Samples": 31,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7090/KINGSTON-SMS100S232G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Corsair",
      "Model": "CMFSSD-128D1 128GB",
      "Rank": 1037,
      "Benchmark": 22.6,
      "Samples": 83,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/1549/Corsair-CMFSSD-128D1"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Corsair",
      "Model": "CSSD-V32GB2 32GB",
      "Rank": 1038,
      "Benchmark": 22.6,
      "Samples": 113,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/13318/Corsair-CSSD-V32GB2"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "U100 16GB",
      "Rank": 1039,
      "Benchmark": 22.5,
      "Samples": 402,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9035/SanDisk-SSD-U100-16GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MMCRE28G8MXP-0VBL1 128GB",
      "Rank": 1040,
      "Benchmark": 22.2,
      "Samples": 508,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3630/SAMSUNG-MMCRE28G8MXP-0VBL1"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM800 TH 64GB",
      "Rank": 1041,
      "Benchmark": 22.1,
      "Samples": 389,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7563/SAMSUNG-SSD-PM800-TH-64GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "i100 16GB",
      "Rank": 1042,
      "Benchmark": 21.6,
      "Samples": 151,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6521/SanDisk-SSD-i100-16GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Kingston",
      "Model": "SV100S264G 64GB",
      "Rank": 1043,
      "Benchmark": 21.2,
      "Samples": 1711,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5192/KINGSTON-SV100S264G"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Transcend",
      "Model": "TS128GSSD25S-M 128GB",
      "Rank": 1044,
      "Benchmark": 21,
      "Samples": 318,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5489/TS128GSSD25S-M"
    },
    {
      "Type": "SSD",
      "Part Number": "SNV425S2128GB",
      "Brand": "Kingston",
      "Model": "SSDNow SNV Series 128GB",
      "Rank": 1045,
      "Benchmark": 20.3,
      "Samples": 972,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3487/KINGSTON-SNV425S2128GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "PM800 mSATA 64GB",
      "Rank": 1046,
      "Benchmark": 19.4,
      "Samples": 6,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/9744/SAMSUNG-SSD-PM800-mSATA"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MCG8GC 63GB",
      "Rank": 1047,
      "Benchmark": 18.7,
      "Samples": 390,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2089/Samsung-MCG8GC"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Transcend",
      "Model": "TS64GSSD25S-M 64GB",
      "Rank": 1048,
      "Benchmark": 18.4,
      "Samples": 130,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/5160/TS64GSSD25S-M"
    },
    {
      "Type": "SSD",
      "Part Number": "SNV425S264GB",
      "Brand": "Kingston",
      "Model": "SSDNow SNV Series 64GB",
      "Rank": 1049,
      "Benchmark": 17.9,
      "Samples": 1496,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/2043/KINGSTON-SNV425S264GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Patriot",
      "Model": "Warp V2 64GB SSD",
      "Rank": 1050,
      "Benchmark": 17.5,
      "Samples": 7,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/11678/Patriot-Warp-V2-64GB-SSD"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNSNB128GMCJ 128GB",
      "Rank": 1051,
      "Benchmark": 16.1,
      "Samples": 529,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3691/TOSHIBA-THNSNB128GMCJ"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "RBX Series 128GB M",
      "Rank": 1052,
      "Benchmark": 15.9,
      "Samples": 300,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6409/SAMSUNG-SSD-RBX-Series-128GB-M"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MMCQE28G8MUP-0VA 128GB",
      "Rank": 1053,
      "Benchmark": 14.4,
      "Samples": 143,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6149/SAMSUNG-MMCQE28G8MUP-0VA"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Sandisk",
      "Model": "iSSD P4 8GB",
      "Rank": 1054,
      "Benchmark": 13.2,
      "Samples": 269,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/3309/SanDisk-iSSD-P4-8GB"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "OS 500GB",
      "Rank": 1055,
      "Benchmark": 9.75,
      "Samples": 9,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/12673/OS"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "",
      "Model": "HTS545050A7E380 500GB",
      "Rank": 1056,
      "Benchmark": 8.8,
      "Samples": 154,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/7371/HTS545050A7E380"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Toshiba",
      "Model": "THNS128GE8BBDC 128GB",
      "Rank": 1057,
      "Benchmark": 8.73,
      "Samples": 54,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6170/TOSHIBA-THNS128GE8BBDC"
    },
    {
      "Type": "SSD",
      "Part Number": "",
      "Brand": "Samsung",
      "Model": "MBG4GC 31GB",
      "Rank": 1058,
      "Benchmark": 0,
      "Samples": 0,
      "URL": "https://ssd.userbenchmark.com/SpeedTest/6544/Samsung-MBG4GC"
    }
  ]

  const seedGallery = () => Ssd.bulkCreate(ssdData);

  module.exports = seedGallery;