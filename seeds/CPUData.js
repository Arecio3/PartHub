const { CPU } = require('../models');
const cpudata = [
  {
    "type": "CPU",
    "part_number": "BX8070811900K",
    "brand": "Intel",
    "model": "Core i9-11900K",
    "rank": 1,
    "benchmark": 109,
    "samples": 1029,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i9-11900K/Rating/4110"
  },
  {
    "type": "CPU",
    "part_number": "BX8070811700K",
    "brand": "Intel",
    "model": "Core i7-11700K",
    "rank": 2,
    "benchmark": 108,
    "samples": 2099,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-11700K/Rating/4107"
  },
  {
    "type": "CPU",
    "part_number": "BX8070811900",
    "brand": "Intel",
    "model": "Core i9-11900",
    "rank": 3,
    "benchmark": 106,
    "samples": 104,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1515871/11th-Gen-IntelR-CoreTM-i9-11900---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070811900KF",
    "brand": "Intel",
    "model": "Core i9-11900KF",
    "rank": 4,
    "benchmark": 105,
    "samples": 139,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1515781/11th-Gen-IntelR-CoreTM-i9-11900KF---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070811700KF",
    "brand": "Intel",
    "model": "Core i7-11700KF",
    "rank": 5,
    "benchmark": 105,
    "samples": 368,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1514594/11th-Gen-IntelR-CoreTM-i7-11700KF---360GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070811900F",
    "brand": "Intel",
    "model": "Core i9-11900F",
    "rank": 6,
    "benchmark": 105,
    "samples": 88,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1492552/11th-Gen-IntelR-CoreTM-i9-11900F---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070811600KF",
    "brand": "Intel",
    "model": "Core i5-11600KF",
    "rank": 7,
    "benchmark": 105,
    "samples": 240,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1512279/11th-Gen-IntelR-CoreTM-i5-11600KF---390GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070811600K",
    "brand": "Intel",
    "model": "Core i5-11600K",
    "rank": 8,
    "benchmark": 104,
    "samples": 873,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-11600K/Rating/4113"
  },
  {
    "type": "CPU",
    "part_number": "BX8070811700",
    "brand": "Intel",
    "model": "Core i7-11700",
    "rank": 9,
    "benchmark": 103,
    "samples": 360,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1450761/11th-Gen-IntelR-CoreTM-i7-11700---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070811500",
    "brand": "Intel",
    "model": "Core i5-11500",
    "rank": 10,
    "benchmark": 102,
    "samples": 223,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1496869/11th-Gen-IntelR-CoreTM-i5-11500---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110900K",
    "brand": "Intel",
    "model": "Core i9-10900K",
    "rank": 11,
    "benchmark": 102,
    "samples": 47621,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i9-10900K/Rating/4071"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I99900KS",
    "brand": "Intel",
    "model": "Core i9-9900KS",
    "rank": 12,
    "benchmark": 101,
    "samples": 7616,
    "url": "https://cpu.userbenchmark.com/SpeedTest/929964/IntelR-CoreTM-i9-9900KS-CPU---400GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110900KF",
    "brand": "Intel",
    "model": "Core i9-10900KF",
    "rank": 13,
    "benchmark": 101,
    "samples": 9857,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1174369/IntelR-CoreTM-i9-10900KF-CPU---370GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-100000059WOF",
    "brand": "AMD",
    "model": "Ryzen 9 5950X",
    "rank": 14,
    "benchmark": 101,
    "samples": 15401,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-9-5950X/Rating/4086"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110850K",
    "brand": "Intel",
    "model": "Core i9-10850K",
    "rank": 15,
    "benchmark": 101,
    "samples": 33421,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1255865/IntelR-CoreTM-i9-10850K-CPU---360GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-100000061WOF",
    "brand": "AMD",
    "model": "Ryzen 9 5900X",
    "rank": 16,
    "benchmark": 100,
    "samples": 35362,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-9-5900X/Rating/4087"
  },
  {
    "type": "CPU",
    "part_number": "BX8070811700F",
    "brand": "Intel",
    "model": "Core i7-11700F",
    "rank": 17,
    "benchmark": 100,
    "samples": 219,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1522100/11th-Gen-IntelR-CoreTM-i7-11700F---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-100000063WOF",
    "brand": "AMD",
    "model": "Ryzen 7 5800X",
    "rank": 18,
    "benchmark": 99.4,
    "samples": 67223,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-7-5800X/Rating/4085"
  },
  {
    "type": "CPU",
    "part_number": "BX8070811400",
    "brand": "Intel",
    "model": "Core i5-11400",
    "rank": 19,
    "benchmark": 99.3,
    "samples": 574,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-11400/Rating/4112"
  },
  {
    "type": "CPU",
    "part_number": "BX8070811400F",
    "brand": "Intel",
    "model": "Core i5-11400F",
    "rank": 20,
    "benchmark": 99.2,
    "samples": 703,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-11400F/Rating/4111"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110700K",
    "brand": "Intel",
    "model": "Core i7-10700K",
    "rank": 21,
    "benchmark": 99.1,
    "samples": 94908,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-10700K/Rating/4070"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 9 5900",
    "rank": 22,
    "benchmark": 98.7,
    "samples": 38,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1528736/AMD-Ryzen-9-5900-12-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 7 5800",
    "rank": 23,
    "benchmark": 98.5,
    "samples": 68,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1496609/AMD-Ryzen-7-5800-8-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110700KF",
    "brand": "Intel",
    "model": "Core i7-10700KF",
    "rank": 24,
    "benchmark": 98.3,
    "samples": 12031,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1171560/IntelR-CoreTM-i7-10700KF-CPU---380GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110900F",
    "brand": "Intel",
    "model": "Core i9-10900F",
    "rank": 25,
    "benchmark": 97.8,
    "samples": 2947,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1196789/IntelR-CoreTM-i9-10900F-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I99900KF",
    "brand": "Intel",
    "model": "Core i9-9900KF",
    "rank": 26,
    "benchmark": 97.6,
    "samples": 13197,
    "url": "https://cpu.userbenchmark.com/SpeedTest/764533/IntelR-CoreTM-i9-9900KF-CPU---360GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I79700K",
    "brand": "Intel",
    "model": "Core i7-9700K",
    "rank": 27,
    "benchmark": 97.5,
    "samples": 379144,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-9700K/Rating/4030"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I99900K",
    "brand": "Intel",
    "model": "Core i9-9900K",
    "rank": 28,
    "benchmark": 97.5,
    "samples": 352580,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i9-9900K/Rating/4028"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i9-10900",
    "rank": 29,
    "benchmark": 97.1,
    "samples": 5339,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1169242/IntelR-CoreTM-i9-10900-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I79700KF",
    "brand": "Intel",
    "model": "Core i7-9700KF",
    "rank": 30,
    "benchmark": 97,
    "samples": 18496,
    "url": "https://cpu.userbenchmark.com/SpeedTest/710154/IntelR-CoreTM-i7-9700KF-CPU---360GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-100000065BOX",
    "brand": "AMD",
    "model": "Ryzen 5 5600X",
    "rank": 31,
    "benchmark": 96.8,
    "samples": 96323,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-5-5600X/Rating/4084"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110600KF",
    "brand": "Intel",
    "model": "Core i5-10600KF",
    "rank": 32,
    "benchmark": 95.8,
    "samples": 6393,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1225152/IntelR-CoreTM-i5-10600KF-CPU---410GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110600K",
    "brand": "Intel",
    "model": "Core i5-10600K",
    "rank": 33,
    "benchmark": 95.1,
    "samples": 31866,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-10600K/Rating/4072"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110700F",
    "brand": "Intel",
    "model": "Core i7-10700F",
    "rank": 34,
    "benchmark": 95.1,
    "samples": 17317,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1183814/IntelR-CoreTM-i7-10700F-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110700",
    "brand": "Intel",
    "model": "Core i7-10700",
    "rank": 35,
    "benchmark": 94.8,
    "samples": 30227,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-10700/Rating/4077"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I99900",
    "brand": "Intel",
    "model": "Core i9-9900",
    "rank": 36,
    "benchmark": 94.2,
    "samples": 7180,
    "url": "https://cpu.userbenchmark.com/SpeedTest/816115/IntelR-CoreTM-i9-9900-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I59600KF",
    "brand": "Intel",
    "model": "Core i5-9600KF",
    "rank": 37,
    "benchmark": 94.1,
    "samples": 50965,
    "url": "https://cpu.userbenchmark.com/SpeedTest/772658/IntelR-CoreTM-i5-9600KF-CPU---370GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I59600K",
    "brand": "Intel",
    "model": "Core i5-9600K",
    "rank": 38,
    "benchmark": 94.1,
    "samples": 280673,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-9600K/Rating/4031"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I78086K",
    "brand": "Intel",
    "model": "Core i7-8086K",
    "rank": 39,
    "benchmark": 93.6,
    "samples": 34129,
    "url": "https://cpu.userbenchmark.com/SpeedTest/516988/IntelR-CoreTM-i7-8086K-CPU---400GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110600",
    "brand": "Intel",
    "model": "Core i5-10600",
    "rank": 40,
    "benchmark": 93.6,
    "samples": 3848,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-10600/Rating/4069"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I79700F",
    "brand": "Intel",
    "model": "Core i7-9700F",
    "rank": 41,
    "benchmark": 92.9,
    "samples": 29659,
    "url": "https://cpu.userbenchmark.com/SpeedTest/816132/IntelR-CoreTM-i7-9700F-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I79700",
    "brand": "Intel",
    "model": "Core i7-9700",
    "rank": 42,
    "benchmark": 92.9,
    "samples": 50285,
    "url": "https://cpu.userbenchmark.com/SpeedTest/816180/IntelR-CoreTM-i7-9700-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I78700K",
    "brand": "Intel",
    "model": "Core i7-8700K",
    "rank": 43,
    "benchmark": 92.4,
    "samples": 622414,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-8700K/Rating/3937"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I59600",
    "brand": "Intel",
    "model": "Core i5-9600",
    "rank": 44,
    "benchmark": 91.8,
    "samples": 499,
    "url": "https://cpu.userbenchmark.com/SpeedTest/853186/IntelR-CoreTM-i5-9600-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I58600K",
    "brand": "Intel",
    "model": "Core i5-8600K",
    "rank": 45,
    "benchmark": 91.5,
    "samples": 214916,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-8600K/Rating/3941"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 9 5900HS",
    "rank": 46,
    "benchmark": 91.3,
    "samples": 1717,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1452199/AMD-Ryzen-9-5900HS-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 9 5900HX",
    "rank": 47,
    "benchmark": 91.2,
    "samples": 1031,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1449683/AMD-Ryzen-9-5900HX-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110500",
    "brand": "Intel",
    "model": "Core i5-10500",
    "rank": 48,
    "benchmark": 91,
    "samples": 3801,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-10500/Rating/4078"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i9-10980HK",
    "rank": 49,
    "benchmark": 89.7,
    "samples": 3204,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1065893/IntelR-CoreTM-i9-10980HK-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-10320",
    "rank": 50,
    "benchmark": 89.2,
    "samples": 240,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1180543/IntelR-CoreTM-i3-10320-CPU---380GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I59500",
    "brand": "Intel",
    "model": "Core i5-9500",
    "rank": 51,
    "benchmark": 88.9,
    "samples": 5332,
    "url": "https://cpu.userbenchmark.com/SpeedTest/825467/IntelR-CoreTM-i5-9500-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I78700",
    "brand": "Intel",
    "model": "Core i7-8700",
    "rank": 52,
    "benchmark": 88.8,
    "samples": 243372,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-8700/Rating/3940"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110400",
    "brand": "Intel",
    "model": "Core i5-10400",
    "rank": 53,
    "benchmark": 88.8,
    "samples": 29022,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-10400/Rating/4073"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I39350KF",
    "brand": "Intel",
    "model": "Core i3-9350KF",
    "rank": 54,
    "benchmark": 88.5,
    "samples": 834,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-9350KF/Rating/4055"
  },
  {
    "type": "CPU",
    "part_number": "100-100000279WOF",
    "brand": "AMD",
    "model": "Ryzen 7 3800XT",
    "rank": 55,
    "benchmark": 88.5,
    "samples": 10329,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1218139/AMD-Ryzen-7-3800XT-8-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "100-100000277WOF",
    "brand": "AMD",
    "model": "Ryzen 9 3900XT",
    "rank": 56,
    "benchmark": 88.4,
    "samples": 13072,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1202614/AMD-Ryzen-9-3900XT-12-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I58600",
    "brand": "Intel",
    "model": "Core i5-8600",
    "rank": 57,
    "benchmark": 88.3,
    "samples": 15328,
    "url": "https://cpu.userbenchmark.com/SpeedTest/477251/IntelR-CoreTM-i5-8600-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-100000023BOX",
    "brand": "AMD",
    "model": "Ryzen 9 3900X",
    "rank": 58,
    "benchmark": 88.3,
    "samples": 214715,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-9-3900X/Rating/4044"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 7 4700G",
    "rank": 59,
    "benchmark": 88.2,
    "samples": 358,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1135003/AMD-Ryzen-7-4700G-8-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110400F",
    "brand": "Intel",
    "model": "Core i5-10400F",
    "rank": 60,
    "benchmark": 88,
    "samples": 46000,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-10400F/Rating/4079"
  },
  {
    "type": "CPU",
    "part_number": "100-100000051WOF",
    "brand": "AMD",
    "model": "Ryzen 9 3950X",
    "rank": 61,
    "benchmark": 87.7,
    "samples": 37879,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-9-3950X/Rating/4057"
  },
  {
    "type": "CPU",
    "part_number": "100-100000025BOX",
    "brand": "AMD",
    "model": "Ryzen 7 3800X",
    "rank": 62,
    "benchmark": 87.6,
    "samples": 132661,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-7-3800X/Rating/4047"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I77740X",
    "brand": "Intel",
    "model": "Core i7-7740X",
    "rank": 63,
    "benchmark": 87.6,
    "samples": 3965,
    "url": "https://cpu.userbenchmark.com/SpeedTest/304932/IntelR-CoreTM-i7-7740X-CPU---430GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8069510940X",
    "brand": "Intel",
    "model": "Core i9-10940X",
    "rank": 64,
    "benchmark": 87.5,
    "samples": 1081,
    "url": "https://cpu.userbenchmark.com/SpeedTest/932085/IntelR-CoreTM-i9-10940X-CPU---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-10500H",
    "rank": 65,
    "benchmark": 87.2,
    "samples": 203,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1449890/IntelR-CoreTM-i5-10500H-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80671I76900K",
    "brand": "Intel",
    "model": "Core i7-6900K",
    "rank": 66,
    "benchmark": 87.2,
    "samples": 6037,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-6900K/Rating/3605"
  },
  {
    "type": "CPU",
    "part_number": "100-100000071BOX",
    "brand": "AMD",
    "model": "Ryzen 7 3700X",
    "rank": 67,
    "benchmark": 87,
    "samples": 557213,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-7-3700X/Rating/4043"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110300",
    "brand": "Intel",
    "model": "Core i3-10300",
    "rank": 68,
    "benchmark": 86.9,
    "samples": 187,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-10300/Rating/4074"
  },
  {
    "type": "CPU",
    "part_number": "BX8069510920X",
    "brand": "Intel",
    "model": "Core i9-10920X",
    "rank": 69,
    "benchmark": 86.9,
    "samples": 1442,
    "url": "https://cpu.userbenchmark.com/SpeedTest/931866/IntelR-CoreTM-i9-10920X-CPU---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I77700K",
    "brand": "Intel",
    "model": "Core i7-7700K",
    "rank": 70,
    "benchmark": 86.9,
    "samples": 529883,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-7700K/Rating/3647"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 7 5800HS",
    "rank": 71,
    "benchmark": 86.8,
    "samples": 224,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1463823/AMD-Ryzen-7-5800HS-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i9-10900T",
    "rank": 72,
    "benchmark": 86.7,
    "samples": 67,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1238258/IntelR-CoreTM-i9-10900T-CPU---190GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 7 5800H",
    "rank": 73,
    "benchmark": 86.7,
    "samples": 2383,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1442974/AMD-Ryzen-7-5800H-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-10870H",
    "rank": 74,
    "benchmark": 86.5,
    "samples": 5246,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1322918/IntelR-CoreTM-i7-10870H-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-10700T",
    "rank": 75,
    "benchmark": 86.5,
    "samples": 404,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1218230/IntelR-CoreTM-i7-10700T-CPU---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8069510900X",
    "brand": "Intel",
    "model": "Core i9-10900X",
    "rank": 76,
    "benchmark": 86.5,
    "samples": 2620,
    "url": "https://cpu.userbenchmark.com/SpeedTest/969950/IntelR-CoreTM-i9-10900X-CPU---370GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I99920X",
    "brand": "Intel",
    "model": "Core i9-9920X",
    "rank": 77,
    "benchmark": 86.4,
    "samples": 850,
    "url": "https://cpu.userbenchmark.com/SpeedTest/656219/IntelR-CoreTM-i9-9920X-CPU---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 9 5980HS",
    "rank": 78,
    "benchmark": 86.3,
    "samples": 14,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1493102/AMD-Ryzen-9-5980HS-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110105F",
    "brand": "Intel",
    "model": "Core i3-10105F",
    "rank": 79,
    "benchmark": 86.2,
    "samples": 175,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1482345/IntelR-CoreTM-i3-10105F-CPU---370GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I58500",
    "brand": "Intel",
    "model": "Core i5-8500",
    "rank": 80,
    "benchmark": 86.2,
    "samples": 30224,
    "url": "https://cpu.userbenchmark.com/SpeedTest/447884/IntelR-CoreTM-i5-8500-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I99940X",
    "brand": "Intel",
    "model": "Core i9-9940X",
    "rank": 81,
    "benchmark": 86,
    "samples": 1141,
    "url": "https://cpu.userbenchmark.com/SpeedTest/641326/IntelR-CoreTM-i9-9940X-CPU---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-100000281BOX",
    "brand": "AMD",
    "model": "Ryzen 5 3600XT",
    "rank": 82,
    "benchmark": 85.9,
    "samples": 22384,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1211585/AMD-Ryzen-5-3600XT-6-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I59400F",
    "brand": "Intel",
    "model": "Core i5-9400F",
    "rank": 83,
    "benchmark": 85.9,
    "samples": 204349,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-9400F/Rating/4051"
  },
  {
    "type": "CPU",
    "part_number": "BX80671I76950X",
    "brand": "Intel",
    "model": "Core i7-6950X",
    "rank": 84,
    "benchmark": 85.8,
    "samples": 3802,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-6950X/Rating/3604"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I59400",
    "brand": "Intel",
    "model": "Core i5-9400",
    "rank": 85,
    "benchmark": 85.7,
    "samples": 19896,
    "url": "https://cpu.userbenchmark.com/SpeedTest/735306/IntelR-CoreTM-i5-9400-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I99960X",
    "brand": "Intel",
    "model": "Core i9-9960X",
    "rank": 86,
    "benchmark": 85.6,
    "samples": 616,
    "url": "https://cpu.userbenchmark.com/SpeedTest/653060/IntelR-CoreTM-i9-9960X-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-10875H",
    "rank": 87,
    "benchmark": 85.5,
    "samples": 15567,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1111393/IntelR-CoreTM-i7-10875H-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i9-10885H",
    "rank": 88,
    "benchmark": 85.3,
    "samples": 2431,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1174414/IntelR-CoreTM-i9-10885H-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 9 4900HS",
    "rank": 89,
    "benchmark": 85,
    "samples": 7563,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1084184/AMD-Ryzen-9-4900HS-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "BX80671I76850K",
    "brand": "Intel",
    "model": "Core i7-6850K",
    "rank": 90,
    "benchmark": 85,
    "samples": 18780,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-6850K/Rating/3606"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-10600T",
    "rank": 91,
    "benchmark": 84.9,
    "samples": 26,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1250930/IntelR-CoreTM-i5-10600T-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I57640X",
    "brand": "Intel",
    "model": "Core i5-7640X",
    "rank": 92,
    "benchmark": 84.8,
    "samples": 2423,
    "url": "https://cpu.userbenchmark.com/SpeedTest/310543/IntelR-CoreTM-i5-7640X-CPU---400GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-1000000158",
    "brand": "AMD",
    "model": "Ryzen 5 3500X",
    "rank": 93,
    "benchmark": 84.8,
    "samples": 28161,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-5-3500X/Rating/4052"
  },
  {
    "type": "CPU",
    "part_number": "100-100000022BOX",
    "brand": "AMD",
    "model": "Ryzen 5 3600X",
    "rank": 94,
    "benchmark": 84.5,
    "samples": 241310,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-5-3600X/Rating/4041"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 9 4900H",
    "rank": 95,
    "benchmark": 84.4,
    "samples": 2243,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1185620/AMD-Ryzen-9-4900H-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "100-000000098",
    "brand": "AMD",
    "model": "Ryzen 7 4800H",
    "rank": 96,
    "benchmark": 84.4,
    "samples": 28955,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1032976/AMD-Ryzen-7-4800H-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I97960X",
    "brand": "Intel",
    "model": "Core i9-7960X",
    "rank": 97,
    "benchmark": 84.2,
    "samples": 1741,
    "url": "https://cpu.userbenchmark.com/SpeedTest/357952/IntelR-CoreTM-i9-7960X-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I58400",
    "brand": "Intel",
    "model": "Core i5-8400",
    "rank": 98,
    "benchmark": 84.2,
    "samples": 234432,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-8400/Rating/3939"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110100F",
    "brand": "Intel",
    "model": "Core i3-10100F",
    "rank": 99,
    "benchmark": 84.2,
    "samples": 8857,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-10100F/Rating/4082"
  },
  {
    "type": "CPU",
    "part_number": "100-100000010WOF",
    "brand": "AMD",
    "model": "Ryzen TR 3960X",
    "rank": 100,
    "benchmark": 84.2,
    "samples": 3814,
    "url": "https://cpu.userbenchmark.com/SpeedTest/969111/AMD-Ryzen-Threadripper-3960X-24-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "100-1000000050",
    "brand": "AMD",
    "model": "Ryzen 5 3500",
    "rank": 101,
    "benchmark": 84.1,
    "samples": 12483,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-5-3500/Rating/4053"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-10850H",
    "rank": 102,
    "benchmark": 84.1,
    "samples": 1986,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1160496/IntelR-CoreTM-i7-10850H-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8069510980XE",
    "brand": "Intel",
    "model": "Core i9-10980XE",
    "rank": 103,
    "benchmark": 84,
    "samples": 1760,
    "url": "https://cpu.userbenchmark.com/SpeedTest/935899/IntelR-CoreTM-i9-10980XE-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX8070110100",
    "brand": "Intel",
    "model": "Core i3-10100",
    "rank": 104,
    "benchmark": 83.9,
    "samples": 13332,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-10100/Rating/4075"
  },
  {
    "type": "CPU",
    "part_number": "100-100000031BOX",
    "brand": "AMD",
    "model": "Ryzen 5 3600",
    "rank": 105,
    "benchmark": 83.9,
    "samples": 814966,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-5-3600/Rating/4040"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I99900X",
    "brand": "Intel",
    "model": "Core i9-9900X",
    "rank": 106,
    "benchmark": 83.8,
    "samples": 2230,
    "url": "https://cpu.userbenchmark.com/SpeedTest/639130/IntelR-CoreTM-i9-9900X-CPU---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-100000011WOF",
    "brand": "AMD",
    "model": "Ryzen TR 3970X",
    "rank": 107,
    "benchmark": 83.8,
    "samples": 3390,
    "url": "https://cpu.userbenchmark.com/SpeedTest/970030/AMD-Ryzen-Threadripper-3970X-32-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-10500T",
    "rank": 108,
    "benchmark": 83.6,
    "samples": 225,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1204939/IntelR-CoreTM-i5-10500T-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 7 4800HS",
    "rank": 109,
    "benchmark": 83.4,
    "samples": 4938,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1064059/AMD-Ryzen-7-4800HS-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i9-9980HK",
    "rank": 110,
    "benchmark": 83.3,
    "samples": 5019,
    "url": "https://cpu.userbenchmark.com/SpeedTest/797907/IntelR-CoreTM-i9-9980HK-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I38350K",
    "brand": "Intel",
    "model": "Core i3-8350K",
    "rank": 111,
    "benchmark": 83.3,
    "samples": 23770,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-8350K/Rating/3935"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-10750H",
    "rank": 112,
    "benchmark": 83.3,
    "samples": 91000,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1053158/IntelR-CoreTM-i7-10750H-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I97940X",
    "brand": "Intel",
    "model": "Core i9-7940X",
    "rank": 113,
    "benchmark": 83.3,
    "samples": 3579,
    "url": "https://cpu.userbenchmark.com/SpeedTest/353078/IntelR-CoreTM-i9-7940X-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80662I76700K",
    "brand": "Intel",
    "model": "Core i7-6700K",
    "rank": 114,
    "benchmark": 83.1,
    "samples": 553688,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-6700K/Rating/3502"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I97900X",
    "brand": "Intel",
    "model": "Core i9-7900X",
    "rank": 115,
    "benchmark": 83.1,
    "samples": 15075,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i9-7900X/Rating/3936"
  },
  {
    "type": "CPU",
    "part_number": "BX80658i75775C",
    "brand": "Intel",
    "model": "Core i7-5775C",
    "rank": 116,
    "benchmark": 83.1,
    "samples": 1754,
    "url": "https://cpu.userbenchmark.com/SpeedTest/30276/IntelR-CoreTM-i7-5775C-CPU---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I74790K",
    "brand": "Intel",
    "model": "Core i7-4790K",
    "rank": 117,
    "benchmark": 83,
    "samples": 361946,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-4790K/Rating/2384"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I79800X",
    "brand": "Intel",
    "model": "Core i7-9800X",
    "rank": 118,
    "benchmark": 83,
    "samples": 2721,
    "url": "https://cpu.userbenchmark.com/SpeedTest/651256/IntelR-CoreTM-i7-9800X-CPU---380GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80648I75960X",
    "brand": "Intel",
    "model": "Core i7-5960X",
    "rank": 119,
    "benchmark": 83,
    "samples": 14806,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-5960X/Rating/2580"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I99820X",
    "brand": "Intel",
    "model": "Core i9-9820X",
    "rank": 120,
    "benchmark": 82.8,
    "samples": 1685,
    "url": "https://cpu.userbenchmark.com/SpeedTest/651318/IntelR-CoreTM-i9-9820X-CPU---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80671I76800K",
    "brand": "Intel",
    "model": "Core i7-6800K",
    "rank": 121,
    "benchmark": 82.7,
    "samples": 38035,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-6800K/Rating/3607"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I99980X",
    "brand": "Intel",
    "model": "Core i9-9980XE",
    "rank": 122,
    "benchmark": 82.7,
    "samples": 1511,
    "url": "https://cpu.userbenchmark.com/SpeedTest/652504/IntelR-CoreTM-i9-9980XE-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I57600K",
    "brand": "Intel",
    "model": "Core i5-7600K",
    "rank": 123,
    "benchmark": 82.6,
    "samples": 169292,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-7600K/Rating/3885"
  },
  {
    "type": "CPU",
    "part_number": "BX80648I75930K",
    "brand": "Intel",
    "model": "Core i7-5930K",
    "rank": 124,
    "benchmark": 82.3,
    "samples": 33392,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-5930K/Rating/2578"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-11370H",
    "rank": 125,
    "benchmark": 82.2,
    "samples": 1438,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1444990/11th-Gen-IntelR-CoreTM-i7-11370H---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "CM8068403358413",
    "brand": "Intel",
    "model": "Core i7-8700T",
    "rank": 126,
    "benchmark": 82.1,
    "samples": 3559,
    "url": "https://cpu.userbenchmark.com/SpeedTest/480804/IntelR-CoreTM-i7-8700T-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-000000163",
    "brand": "AMD",
    "model": "Ryzen TR 3990X",
    "rank": 127,
    "benchmark": 82.1,
    "samples": 746,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1035665/AMD-Ryzen-Threadripper-3990X-64-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "CM8068403358708",
    "brand": "Intel",
    "model": "Core i5-8600T",
    "rank": 128,
    "benchmark": 82,
    "samples": 215,
    "url": "https://cpu.userbenchmark.com/SpeedTest/506080/IntelR-CoreTM-i5-8600T-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I97920X",
    "brand": "Intel",
    "model": "Core i9-7920X",
    "rank": 129,
    "benchmark": 81.7,
    "samples": 4317,
    "url": "https://cpu.userbenchmark.com/SpeedTest/278103/IntelR-CoreTM-i9-7920X-CPU---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-100000159BOX",
    "brand": "AMD",
    "model": "Ryzen 3 3300X",
    "rank": 130,
    "benchmark": 81.6,
    "samples": 8018,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-3-3300X/Rating/4076"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I77820X",
    "brand": "Intel",
    "model": "Core i7-7820X",
    "rank": 131,
    "benchmark": 81.5,
    "samples": 25799,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-7820X/Rating/3928"
  },
  {
    "type": "CPU",
    "part_number": "YD270XBGAFBOX",
    "brand": "AMD",
    "model": "Ryzen 7 2700X",
    "rank": 132,
    "benchmark": 81.4,
    "samples": 429200,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-7-2700X/Rating/3958"
  },
  {
    "type": "CPU",
    "part_number": "BX80658i55675C",
    "brand": "Intel",
    "model": "Core i5-5675C",
    "rank": 133,
    "benchmark": 81.2,
    "samples": 847,
    "url": "https://cpu.userbenchmark.com/SpeedTest/31828/IntelR-CoreTM-i5-5675C-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "CL8068404069006",
    "brand": "Intel",
    "model": "Core i9-9880H",
    "rank": 134,
    "benchmark": 81.1,
    "samples": 7433,
    "url": "https://cpu.userbenchmark.com/SpeedTest/750169/IntelR-CoreTM-i9-9880H-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80648I75820K",
    "brand": "Intel",
    "model": "Core i7-5820K",
    "rank": 135,
    "benchmark": 81.1,
    "samples": 92958,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-5820K/Rating/2579"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1245 v6",
    "rank": 136,
    "benchmark": 80.7,
    "samples": 415,
    "url": "https://cpu.userbenchmark.com/SpeedTest/299743/IntelR-XeonR-CPU-E3-1245-v6---370GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-8809G",
    "rank": 137,
    "benchmark": 80.7,
    "samples": 3119,
    "url": "https://cpu.userbenchmark.com/SpeedTest/422264/IntelR-CoreTM-i7-8809G-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80633I74960X",
    "brand": "Intel",
    "model": "Core i7-4960X",
    "rank": 138,
    "benchmark": 80.7,
    "samples": 3681,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-4960X/Rating/1977"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I39100",
    "brand": "Intel",
    "model": "Core i3-9100",
    "rank": 139,
    "benchmark": 80.5,
    "samples": 7231,
    "url": "https://cpu.userbenchmark.com/SpeedTest/806339/IntelR-CoreTM-i3-9100-CPU---360GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD292XA8AFWOF",
    "brand": "AMD",
    "model": "Ryzen TR 2920X",
    "rank": 140,
    "benchmark": 80.5,
    "samples": 2537,
    "url": "https://cpu.userbenchmark.com/SpeedTest/625966/AMD-Ryzen-Threadripper-2920X-12-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1270 v6",
    "rank": 141,
    "benchmark": 80.4,
    "samples": 469,
    "url": "https://cpu.userbenchmark.com/SpeedTest/278175/IntelR-XeonR-CPU-E3-1270-v6---380GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I77800X",
    "brand": "Intel",
    "model": "Core i7-7800X",
    "rank": 142,
    "benchmark": 80.3,
    "samples": 17317,
    "url": "https://cpu.userbenchmark.com/SpeedTest/304816/IntelR-CoreTM-i7-7800X-CPU---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-10200H",
    "rank": 143,
    "benchmark": 80.3,
    "samples": 831,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1303113/IntelR-CoreTM-i5-10200H-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1286 v3",
    "rank": 144,
    "benchmark": 80.3,
    "samples": 20,
    "url": "https://cpu.userbenchmark.com/SpeedTest/33047/IntelR-XeonR-CPU-E3-1286-v3---370GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80673I97980X",
    "brand": "Intel",
    "model": "Core i9-7980XE",
    "rank": 145,
    "benchmark": 80.2,
    "samples": 3692,
    "url": "https://cpu.userbenchmark.com/SpeedTest/352013/IntelR-CoreTM-i9-7980XE-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 5 4600HS",
    "rank": 146,
    "benchmark": 80.1,
    "samples": 766,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1134526/AMD-Ryzen-5-4600HS-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-1650 v3",
    "rank": 147,
    "benchmark": 80,
    "samples": 5041,
    "url": "https://cpu.userbenchmark.com/SpeedTest/16320/IntelR-XeonR-CPU-E5-1650-v3---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "CL8068404121817",
    "brand": "Intel",
    "model": "Core i7-9750H",
    "rank": 148,
    "benchmark": 79.9,
    "samples": 219576,
    "url": "https://cpu.userbenchmark.com/SpeedTest/766364/IntelR-CoreTM-i7-9750H-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-10400T",
    "rank": 149,
    "benchmark": 79.9,
    "samples": 320,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1189479/IntelR-CoreTM-i5-10400T-CPU---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-9850H",
    "rank": 150,
    "benchmark": 79.8,
    "samples": 6320,
    "url": "https://cpu.userbenchmark.com/SpeedTest/826055/IntelR-CoreTM-i7-9850H-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD260XBCAFBOX",
    "brand": "AMD",
    "model": "Ryzen 5 2600X",
    "rank": 151,
    "benchmark": 79.7,
    "samples": 280647,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-5-2600X/Rating/3956"
  },
  {
    "type": "CPU",
    "part_number": "BX80662I56600K",
    "brand": "Intel",
    "model": "Core i5-6600K",
    "rank": 152,
    "benchmark": 79.7,
    "samples": 276441,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-6600K/Rating/3503"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I39100F",
    "brand": "Intel",
    "model": "Core i3-9100F",
    "rank": 153,
    "benchmark": 79.6,
    "samples": 66888,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-9100F/Rating/4054"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I77700",
    "brand": "Intel",
    "model": "Core i7-7700",
    "rank": 154,
    "benchmark": 79.5,
    "samples": 208782,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-7700/Rating/3887"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-10400H",
    "rank": 155,
    "benchmark": 79.4,
    "samples": 248,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1084904/IntelR-CoreTM-i5-10400H-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3970X",
    "rank": 156,
    "benchmark": 79.4,
    "samples": 2443,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6794/IntelR-CoreTM-i7-3970X-CPU---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 X 990",
    "rank": 157,
    "benchmark": 79.4,
    "samples": 1699,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2590/IntelR-CoreTM-i7-CPU-------X-990----347GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD295XA8UGAAF",
    "brand": "AMD",
    "model": "Ryzen TR 2950X",
    "rank": 158,
    "benchmark": 79.3,
    "samples": 7331,
    "url": "https://cpu.userbenchmark.com/SpeedTest/569025/AMD-Ryzen-Threadripper-2950X-16-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-11375H",
    "rank": 159,
    "benchmark": 79.2,
    "samples": 78,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1462657/11th-Gen-IntelR-CoreTM-i7-11375H---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80619I73960X",
    "brand": "Intel",
    "model": "Core i7-3960X",
    "rank": 160,
    "benchmark": 79.2,
    "samples": 1912,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-3960X/Rating/1973"
  },
  {
    "type": "CPU",
    "part_number": "BX80633I74930K",
    "brand": "Intel",
    "model": "Core i7-4930K",
    "rank": 161,
    "benchmark": 79.2,
    "samples": 20065,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-4930K/Rating/1976"
  },
  {
    "type": "CPU",
    "part_number": "FH8068403419332",
    "brand": "Intel",
    "model": "Core i7-8559U",
    "rank": 162,
    "benchmark": 79.2,
    "samples": 2058,
    "url": "https://cpu.userbenchmark.com/SpeedTest/543591/IntelR-CoreTM-i7-8559U-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I54690K",
    "brand": "Intel",
    "model": "Core i5-4690K",
    "rank": 163,
    "benchmark": 79,
    "samples": 192324,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-4690K/Rating/2432"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-10300H",
    "rank": 164,
    "benchmark": 79,
    "samples": 28817,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1027882/IntelR-CoreTM-i5-10300H-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I38300",
    "brand": "Intel",
    "model": "Core i3-8300",
    "rank": 165,
    "benchmark": 79,
    "samples": 1696,
    "url": "https://cpu.userbenchmark.com/SpeedTest/484077/IntelR-CoreTM-i3-8300-CPU---370GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-9400H",
    "rank": 166,
    "benchmark": 79,
    "samples": 489,
    "url": "https://cpu.userbenchmark.com/SpeedTest/843530/IntelR-CoreTM-i5-9400H-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-11300H",
    "rank": 167,
    "benchmark": 78.8,
    "samples": 160,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1504890/11th-Gen-IntelR-CoreTM-i5-11300H---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-000000100",
    "brand": "AMD",
    "model": "Ryzen 5 4600H",
    "rank": 168,
    "benchmark": 78.7,
    "samples": 22273,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1110331/AMD-Ryzen-5-4600H-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "YD297XAZAFWOF",
    "brand": "AMD",
    "model": "Ryzen TR 2970WX",
    "rank": 169,
    "benchmark": 78.5,
    "samples": 849,
    "url": "https://cpu.userbenchmark.com/SpeedTest/626249/AMD-Ryzen-Threadripper-2970WX-24-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-5775R",
    "rank": 170,
    "benchmark": 78.4,
    "samples": 142,
    "url": "https://cpu.userbenchmark.com/SpeedTest/39919/IntelR-CoreTM-i7-5775R-CPU---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-5950HQ",
    "rank": 171,
    "benchmark": 78.3,
    "samples": 153,
    "url": "https://cpu.userbenchmark.com/SpeedTest/29765/IntelR-CoreTM-i7-5950HQ-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-1650 v2",
    "rank": 172,
    "benchmark": 78.3,
    "samples": 7075,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7574/IntelR-XeonR-CPU-E5-1650-v2---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-10100T",
    "rank": 173,
    "benchmark": 78.2,
    "samples": 123,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1260090/IntelR-CoreTM-i3-10100T-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1230 v6",
    "rank": 174,
    "benchmark": 78.1,
    "samples": 387,
    "url": "https://cpu.userbenchmark.com/SpeedTest/268848/IntelR-XeonR-CPU-E3-1230-v6---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I54670K",
    "brand": "Intel",
    "model": "Core i5-4670K",
    "rank": 175,
    "benchmark": 78.1,
    "samples": 112215,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-4670K/Rating/1538"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I74770K",
    "brand": "Intel",
    "model": "Core i7-4770K",
    "rank": 176,
    "benchmark": 78,
    "samples": 150123,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-4770K/Rating/1537"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I57600",
    "brand": "Intel",
    "model": "Core i5-7600",
    "rank": 177,
    "benchmark": 78,
    "samples": 34633,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-7600/Rating/3890"
  },
  {
    "type": "CPU",
    "part_number": "CL8068403805708",
    "brand": "Intel",
    "model": "Core i9-8950HK",
    "rank": 178,
    "benchmark": 77.9,
    "samples": 10898,
    "url": "https://cpu.userbenchmark.com/SpeedTest/486215/IntelR-CoreTM-i9-8950HK-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon W3690",
    "rank": 179,
    "benchmark": 77.8,
    "samples": 3557,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9677/IntelR-XeonR-CPU-----------W3690----347GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646E31276V3",
    "brand": "Intel",
    "model": "Xeon E3-1276 v3",
    "rank": 180,
    "benchmark": 77.5,
    "samples": 238,
    "url": "https://cpu.userbenchmark.com/SpeedTest/25180/IntelR-XeonR-CPU-E3-1276-v3---360GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1271 v3",
    "rank": 181,
    "benchmark": 77.3,
    "samples": 1081,
    "url": "https://cpu.userbenchmark.com/SpeedTest/17463/IntelR-XeonR-CPU-E3-1271-v3---360GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-000000083",
    "brand": "AMD",
    "model": "Ryzen 7 4700U",
    "rank": 182,
    "benchmark": 77.1,
    "samples": 9060,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1105478/AMD-Ryzen-7-4700U-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1275 v3",
    "rank": 183,
    "benchmark": 77.1,
    "samples": 291,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5652/IntelR-XeonR-CPU-E3-1275-v3---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "CM8068403362509",
    "brand": "Intel",
    "model": "Core i5-8500T",
    "rank": 184,
    "benchmark": 76.9,
    "samples": 2813,
    "url": "https://cpu.userbenchmark.com/SpeedTest/532888/IntelR-CoreTM-i5-8500T-CPU---210GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80637I73770K",
    "brand": "Intel",
    "model": "Core i7-3770K",
    "rank": 185,
    "benchmark": 76.9,
    "samples": 143641,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-3770K/Rating/1317"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1230 v5",
    "rank": 186,
    "benchmark": 76.8,
    "samples": 1570,
    "url": "https://cpu.userbenchmark.com/SpeedTest/72554/IntelR-XeonR-CPU-E3-1230-v5---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I74790",
    "brand": "Intel",
    "model": "Core i7-4790",
    "rank": 187,
    "benchmark": 76.6,
    "samples": 184979,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-4790/Rating/2293"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 X 980",
    "rank": 188,
    "benchmark": 76.6,
    "samples": 5991,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1822/IntelR-CoreTM-i7-CPU-------X-980----333GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD2600BBAFBOX",
    "brand": "AMD",
    "model": "Ryzen 5 2600",
    "rank": 189,
    "benchmark": 76.5,
    "samples": 601586,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-5-2600/Rating/3955"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I74771",
    "brand": "Intel",
    "model": "Core i7-4771",
    "rank": 190,
    "benchmark": 76.4,
    "samples": 9207,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-4771/Rating/2008"
  },
  {
    "type": "CPU",
    "part_number": "BX80637I53570K",
    "brand": "Intel",
    "model": "Core i5-3570K",
    "rank": 191,
    "benchmark": 76.4,
    "samples": 176375,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-3570K/Rating/1316"
  },
  {
    "type": "CPU",
    "part_number": "CL8068403373614",
    "brand": "Intel",
    "model": "Core i5-8400H",
    "rank": 192,
    "benchmark": 76.4,
    "samples": 906,
    "url": "https://cpu.userbenchmark.com/SpeedTest/524256/IntelR-CoreTM-i5-8400H-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-100000284BOX",
    "brand": "AMD",
    "model": "Ryzen 3 3100",
    "rank": 193,
    "benchmark": 76.3,
    "samples": 29508,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1148404/AMD-Ryzen-3-3100-4-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "FH8067703417418",
    "brand": "Intel",
    "model": "Core i7-8706G",
    "rank": 194,
    "benchmark": 76.3,
    "samples": 169,
    "url": "https://cpu.userbenchmark.com/SpeedTest/518066/IntelR-CoreTM-i7-8706G-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684I38100",
    "brand": "Intel",
    "model": "Core i3-8100",
    "rank": 195,
    "benchmark": 76.3,
    "samples": 91901,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-8100/Rating/3942"
  },
  {
    "type": "CPU",
    "part_number": "CL8068403359725",
    "brand": "Intel",
    "model": "Core i7-8850H",
    "rank": 196,
    "benchmark": 76.2,
    "samples": 15497,
    "url": "https://cpu.userbenchmark.com/SpeedTest/485626/IntelR-CoreTM-i7-8850H-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon W3680",
    "rank": 197,
    "benchmark": 76.2,
    "samples": 3079,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12335/IntelR-XeonR-CPU-----------W3680----333GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I54690",
    "brand": "Intel",
    "model": "Core i5-4690",
    "rank": 198,
    "benchmark": 76.2,
    "samples": 65922,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-4690/Rating/2311"
  },
  {
    "type": "CPU",
    "part_number": "YD192XA8AEWOF",
    "brand": "AMD",
    "model": "Ryzen TR 1920X",
    "rank": 199,
    "benchmark": 76.1,
    "samples": 6620,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-TR-1920X/Rating/3934"
  },
  {
    "type": "CPU",
    "part_number": "BX80619I73930K",
    "brand": "Intel",
    "model": "Core i7-3930K",
    "rank": 200,
    "benchmark": 76.1,
    "samples": 30951,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-3930K/Rating/1487"
  },
  {
    "type": "CPU",
    "part_number": "YD299XAZAFWOF",
    "brand": "AMD",
    "model": "Ryzen TR 2990WX",
    "rank": 201,
    "benchmark": 76,
    "samples": 2288,
    "url": "https://cpu.userbenchmark.com/SpeedTest/560423/AMD-Ryzen-Threadripper-2990WX-32-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1270 v3",
    "rank": 202,
    "benchmark": 76,
    "samples": 584,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11395/IntelR-XeonR-CPU-E3-1270-v3---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-5850HQ",
    "rank": 203,
    "benchmark": 76,
    "samples": 46,
    "url": "https://cpu.userbenchmark.com/SpeedTest/35099/IntelR-CoreTM-i7-5850HQ-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X5690",
    "rank": 204,
    "benchmark": 75.9,
    "samples": 3336,
    "url": "https://cpu.userbenchmark.com/SpeedTest/16752/IntelR-XeonR-CPU-----------X5690----347GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-1145G7",
    "rank": 205,
    "benchmark": 75.9,
    "samples": 158,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1345527/11th-Gen-IntelR-CoreTM-i5-1145G7---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "CL8068403359524",
    "brand": "Intel",
    "model": "Core i7-8750H",
    "rank": 206,
    "benchmark": 75.9,
    "samples": 318931,
    "url": "https://cpu.userbenchmark.com/SpeedTest/470418/IntelR-CoreTM-i7-8750H-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 980",
    "rank": 207,
    "benchmark": 75.9,
    "samples": 1994,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3336/IntelR-CoreTM-i7-CPU---------980----333GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD190XA8AEWOF",
    "brand": "AMD",
    "model": "Ryzen TR 1900X",
    "rank": 208,
    "benchmark": 75.9,
    "samples": 4373,
    "url": "https://cpu.userbenchmark.com/SpeedTest/340638/AMD-Ryzen-Threadripper-1900X-8-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 7 4800U",
    "rank": 209,
    "benchmark": 75.9,
    "samples": 952,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1005639/AMD-Ryzen-7-4800U-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "YD180XBCAEWOF",
    "brand": "AMD",
    "model": "Ryzen 7 1800X",
    "rank": 210,
    "benchmark": 75.8,
    "samples": 71145,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-7-1800X/Rating/3916"
  },
  {
    "type": "CPU",
    "part_number": "BX80623I72600K",
    "brand": "Intel",
    "model": "Core i7-2600K",
    "rank": 211,
    "benchmark": 75.8,
    "samples": 127584,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-2600K/Rating/621"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I57600T",
    "brand": "Intel",
    "model": "Core i5-7600T",
    "rank": 212,
    "benchmark": 75.7,
    "samples": 322,
    "url": "https://cpu.userbenchmark.com/SpeedTest/246226/IntelR-CoreTM-i5-7600T-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646E31241V3",
    "brand": "Intel",
    "model": "Xeon E3-1241 v3",
    "rank": 213,
    "benchmark": 75.6,
    "samples": 3059,
    "url": "https://cpu.userbenchmark.com/SpeedTest/15164/IntelR-XeonR-CPU-E3-1241-v3---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "CM8068403358913",
    "brand": "Intel",
    "model": "Core i5-8400T",
    "rank": 214,
    "benchmark": 75.5,
    "samples": 2870,
    "url": "https://cpu.userbenchmark.com/SpeedTest/475176/IntelR-CoreTM-i5-8400T-CPU---170GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-000000084",
    "brand": "AMD",
    "model": "Ryzen 5 4500U",
    "rank": 215,
    "benchmark": 75.5,
    "samples": 14114,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1052299/AMD-Ryzen-5-4500U-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "BX80646E31246V3",
    "brand": "Intel",
    "model": "Xeon E3-1246 v3",
    "rank": 216,
    "benchmark": 75.5,
    "samples": 2149,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11023/IntelR-XeonR-CPU-E3-1246-v3---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80662I76700",
    "brand": "Intel",
    "model": "Core i7-6700",
    "rank": 217,
    "benchmark": 75.5,
    "samples": 235118,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-6700/Rating/3515"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-1185G7",
    "rank": 218,
    "benchmark": 75.4,
    "samples": 1194,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1268967/11th-Gen-IntelR-CoreTM-i7-1185G7---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-1650 0",
    "rank": 219,
    "benchmark": 75.4,
    "samples": 7430,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7093/IntelR-XeonR-CPU-E5-1650-0---320GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I74770",
    "brand": "Intel",
    "model": "Core i7-4770",
    "rank": 220,
    "benchmark": 75.3,
    "samples": 140353,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-4770/Rating/1978"
  },
  {
    "type": "CPU",
    "part_number": "BX80646E31231V3",
    "brand": "Intel",
    "model": "Xeon E3-1231 v3",
    "rank": 221,
    "benchmark": 75.3,
    "samples": 15179,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11040/IntelR-XeonR-CPU-E3-1231-v3---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4670",
    "rank": 222,
    "benchmark": 75.2,
    "samples": 46082,
    "url": "https://cpu.userbenchmark.com/SpeedTest/630/IntelR-CoreTM-i5-4670-CPU---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2550K",
    "rank": 223,
    "benchmark": 75.1,
    "samples": 2327,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5474/IntelR-CoreTM-i5-2550K-CPU---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 5 5600U",
    "rank": 224,
    "benchmark": 75.1,
    "samples": 6,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1461589/AMD-Ryzen-5-5600U-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "YD195XA8AEWOF",
    "brand": "AMD",
    "model": "Ryzen TR 1950X",
    "rank": 225,
    "benchmark": 75.1,
    "samples": 19053,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-TR-1950X/Rating/3932"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 7 5700U",
    "rank": 226,
    "benchmark": 75,
    "samples": 140,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1482042/AMD-Ryzen-7-5700U-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "YD2700BBAFBOX",
    "brand": "AMD",
    "model": "Ryzen 7 2700",
    "rank": 227,
    "benchmark": 75,
    "samples": 128148,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-7-2700/Rating/3957"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-2687W 0",
    "rank": 228,
    "benchmark": 75,
    "samples": 689,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8860/IntelR-XeonR-CPU-E5-2687W-0---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80623I72700K",
    "brand": "Intel",
    "model": "Core i7-2700K",
    "rank": 229,
    "benchmark": 75,
    "samples": 20737,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-2700K/Rating/1985"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4790S",
    "rank": 230,
    "benchmark": 74.9,
    "samples": 11626,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13424/IntelR-CoreTM-i7-4790S-CPU---320GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD160XBCAEWOF",
    "brand": "AMD",
    "model": "Ryzen 5 1600X",
    "rank": 231,
    "benchmark": 74.9,
    "samples": 121379,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-5-1600X/Rating/3920"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-10300T",
    "rank": 232,
    "benchmark": 74.8,
    "samples": 3,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1290166/IntelR-CoreTM-i3-10300T-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD1600BBAFBOX",
    "brand": "AMD",
    "model": "Ryzen 5 1600AF",
    "rank": 233,
    "benchmark": 74.6,
    "samples": 56162,
    "url": "https://cpu.userbenchmark.com/SpeedTest/563877/AMD-Ryzen-5-1600-Six-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "FH8068403419522",
    "brand": "Intel",
    "model": "Core i5-8259U",
    "rank": 234,
    "benchmark": 74.5,
    "samples": 2524,
    "url": "https://cpu.userbenchmark.com/SpeedTest/543736/IntelR-CoreTM-i5-8259U-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1275 V2",
    "rank": 235,
    "benchmark": 74.5,
    "samples": 307,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4507/IntelR-XeonR-CPU-E3-1275-V2---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4670S",
    "rank": 236,
    "benchmark": 74.5,
    "samples": 1199,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5523/IntelR-CoreTM-i5-4670S-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1240 v3",
    "rank": 237,
    "benchmark": 74.4,
    "samples": 2067,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4602/IntelR-XeonR-CPU-E3-1240-v3---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1270 V2",
    "rank": 238,
    "benchmark": 74.4,
    "samples": 2236,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11264/IntelR-XeonR-CPU-E3-1270-V2---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I57500",
    "brand": "Intel",
    "model": "Core i5-7500",
    "rank": 239,
    "benchmark": 74.3,
    "samples": 114549,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-7500/Rating/3648"
  },
  {
    "type": "CPU",
    "part_number": "BX80662I56600",
    "brand": "Intel",
    "model": "Core i5-6600",
    "rank": 240,
    "benchmark": 74.3,
    "samples": 68381,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-6600/Rating/3514"
  },
  {
    "type": "CPU",
    "part_number": "BX80646E31230V3",
    "brand": "Intel",
    "model": "Xeon E3-1230 v3",
    "rank": 241,
    "benchmark": 74.3,
    "samples": 6359,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2171/IntelR-XeonR-CPU-E3-1230-v3---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80633I74820K",
    "brand": "Intel",
    "model": "Core i7-4820K",
    "rank": 242,
    "benchmark": 74.2,
    "samples": 17150,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-4820K/Rating/1675"
  },
  {
    "type": "CPU",
    "part_number": "YD170XBCAEWOF",
    "brand": "AMD",
    "model": "Ryzen 7 1700X",
    "rank": 243,
    "benchmark": 74.1,
    "samples": 101510,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-7-1700X/Rating/3915"
  },
  {
    "type": "CPU",
    "part_number": "BX80637I73770",
    "brand": "Intel",
    "model": "Core i7-3770",
    "rank": 244,
    "benchmark": 74.1,
    "samples": 214048,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-3770/Rating/1979"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-1165G7",
    "rank": 245,
    "benchmark": 74.1,
    "samples": 9335,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1195374/11th-Gen-IntelR-CoreTM-i7-1165G7---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4770S",
    "rank": 246,
    "benchmark": 73.9,
    "samples": 10782,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2123/IntelR-CoreTM-i7-4770S-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "CL8068403373522",
    "brand": "Intel",
    "model": "Core i5-8300H",
    "rank": 247,
    "benchmark": 73.8,
    "samples": 117885,
    "url": "https://cpu.userbenchmark.com/SpeedTest/425634/IntelR-CoreTM-i5-8300H-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80623I52500K",
    "brand": "Intel",
    "model": "Core i5-2500K",
    "rank": 248,
    "benchmark": 73.7,
    "samples": 148104,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-2500K/Rating/619"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3570",
    "rank": 249,
    "benchmark": 73.7,
    "samples": 75908,
    "url": "https://cpu.userbenchmark.com/SpeedTest/793/IntelR-CoreTM-i5-3570-CPU---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 970",
    "rank": 250,
    "benchmark": 73.6,
    "samples": 3174,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8374/IntelR-CoreTM-i7-CPU---------970----320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-2690 v2",
    "rank": 251,
    "benchmark": 73.5,
    "samples": 592,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13436/IntelR-XeonR-CPU-E5-2690-v2---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80701G6600",
    "brand": "Intel",
    "model": "Pentium Gold G6600",
    "rank": 252,
    "benchmark": 73.4,
    "samples": 17,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1454523/IntelR-PentiumR-Gold-G6600-CPU---420GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-000000105",
    "brand": "AMD",
    "model": "Ryzen 5 4600U",
    "rank": 253,
    "benchmark": 73.3,
    "samples": 294,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1152158/AMD-Ryzen-5-4600U-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1226 v3",
    "rank": 254,
    "benchmark": 73.3,
    "samples": 1610,
    "url": "https://cpu.userbenchmark.com/SpeedTest/18482/IntelR-XeonR-CPU-E3-1226-v3---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1245 v3",
    "rank": 255,
    "benchmark": 73.3,
    "samples": 2223,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4697/IntelR-XeonR-CPU-E3-1245-v3---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1245 V2",
    "rank": 256,
    "benchmark": 73.2,
    "samples": 1694,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5622/IntelR-XeonR-CPU-E3-1245-V2---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-6600T",
    "rank": 257,
    "benchmark": 73.2,
    "samples": 813,
    "url": "https://cpu.userbenchmark.com/SpeedTest/37851/IntelR-CoreTM-i5-6600T-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1240 V2",
    "rank": 258,
    "benchmark": 73.2,
    "samples": 3402,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5484/IntelR-XeonR-CPU-E3-1240-V2---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-1620 v2",
    "rank": 259,
    "benchmark": 73.2,
    "samples": 7526,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8354/IntelR-XeonR-CPU-E5-1620-v2---370GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-8705G",
    "rank": 260,
    "benchmark": 73.1,
    "samples": 4468,
    "url": "https://cpu.userbenchmark.com/SpeedTest/453718/IntelR-CoreTM-i7-8705G-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-1135G7",
    "rank": 261,
    "benchmark": 73.1,
    "samples": 7367,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1286124/11th-Gen-IntelR-CoreTM-i5-1135G7---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3820",
    "rank": 262,
    "benchmark": 73.1,
    "samples": 36771,
    "url": "https://cpu.userbenchmark.com/SpeedTest/739/IntelR-CoreTM-i7-3820-CPU---360GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1220 v5",
    "rank": 263,
    "benchmark": 73,
    "samples": 895,
    "url": "https://cpu.userbenchmark.com/SpeedTest/139116/IntelR-XeonR-CPU-E3-1220-v5---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1265L v3",
    "rank": 264,
    "benchmark": 73,
    "samples": 117,
    "url": "https://cpu.userbenchmark.com/SpeedTest/20266/IntelR-XeonR-CPU-E3-1265L-v3---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I77700T",
    "brand": "Intel",
    "model": "Core i7-7700T",
    "rank": 265,
    "benchmark": 73,
    "samples": 5295,
    "url": "https://cpu.userbenchmark.com/SpeedTest/232624/IntelR-CoreTM-i7-7700T-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1230 V2",
    "rank": 266,
    "benchmark": 73,
    "samples": 6553,
    "url": "https://cpu.userbenchmark.com/SpeedTest/652/IntelR-XeonR-CPU-E3-1230-V2---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X5660",
    "rank": 267,
    "benchmark": 72.9,
    "samples": 5355,
    "url": "https://cpu.userbenchmark.com/SpeedTest/17750/IntelR-XeonR-CPU-----------X5660----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-7820HK",
    "rank": 268,
    "benchmark": 72.9,
    "samples": 13723,
    "url": "https://cpu.userbenchmark.com/SpeedTest/224965/IntelR-CoreTM-i7-7820HK-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-9300H",
    "rank": 269,
    "benchmark": 72.9,
    "samples": 81972,
    "url": "https://cpu.userbenchmark.com/SpeedTest/744904/IntelR-CoreTM-i5-9300H-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I54590",
    "brand": "Intel",
    "model": "Core i5-4590",
    "rank": 270,
    "benchmark": 72.9,
    "samples": 114237,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-4590/Rating/2604"
  },
  {
    "type": "CPU",
    "part_number": "YD3400C5FHBOX",
    "brand": "AMD",
    "model": "Ryzen 5 3400G",
    "rank": 271,
    "benchmark": 72.3,
    "samples": 62048,
    "url": "https://cpu.userbenchmark.com/SpeedTest/825156/AMD-Ryzen-5-3400G-with-Radeon-Vega-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I54570",
    "brand": "Intel",
    "model": "Core i5-4570",
    "rank": 272,
    "benchmark": 72.3,
    "samples": 107383,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-4570/Rating/2770"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3550",
    "rank": 273,
    "benchmark": 72.2,
    "samples": 17698,
    "url": "https://cpu.userbenchmark.com/SpeedTest/846/IntelR-CoreTM-i5-3550-CPU---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E31270",
    "rank": 274,
    "benchmark": 72.2,
    "samples": 2291,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5604/IntelR-XeonR-CPU-E31270---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I37320",
    "brand": "Intel",
    "model": "Core i3-7320",
    "rank": 275,
    "benchmark": 72.2,
    "samples": 355,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-7320/Rating/3888"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 7 5800U",
    "rank": 276,
    "benchmark": 72.2,
    "samples": 7,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1433044/AMD-Ryzen-7-5800U-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon W3570",
    "rank": 277,
    "benchmark": 72.1,
    "samples": 367,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12630/IntelR-XeonR-CPU-----------W3570----320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-10710U",
    "rank": 278,
    "benchmark": 72,
    "samples": 4716,
    "url": "https://cpu.userbenchmark.com/SpeedTest/900004/IntelR-CoreTM-i7-10710U-CPU---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3770S",
    "rank": 279,
    "benchmark": 71.9,
    "samples": 7318,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2218/IntelR-CoreTM-i7-3770S-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-8305G",
    "rank": 280,
    "benchmark": 71.8,
    "samples": 307,
    "url": "https://cpu.userbenchmark.com/SpeedTest/483074/IntelR-CoreTM-i5-8305G-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "CM8068403377415",
    "brand": "Intel",
    "model": "Core i3-8100T",
    "rank": 281,
    "benchmark": 71.8,
    "samples": 1225,
    "url": "https://cpu.userbenchmark.com/SpeedTest/509371/IntelR-CoreTM-i3-8100T-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1225 v3",
    "rank": 282,
    "benchmark": 71.7,
    "samples": 3909,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12983/IntelR-XeonR-CPU-E3-1225-v3---320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4590S",
    "rank": 283,
    "benchmark": 71.7,
    "samples": 9691,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13459/IntelR-CoreTM-i5-4590S-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD250XBBM4KAF",
    "brand": "AMD",
    "model": "Ryzen 5 2500X",
    "rank": 284,
    "benchmark": 71.6,
    "samples": 1442,
    "url": "https://cpu.userbenchmark.com/SpeedTest/567224/AMD-Ryzen-5-2500X-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "BX80623I72600",
    "brand": "Intel",
    "model": "Core i7-2600",
    "rank": 285,
    "benchmark": 71.5,
    "samples": 138405,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-2600/Rating/620"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 975",
    "rank": 286,
    "benchmark": 71.4,
    "samples": 2396,
    "url": "https://cpu.userbenchmark.com/SpeedTest/941/IntelR-CoreTM-i7-CPU---------975----333GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4940MX",
    "rank": 287,
    "benchmark": 71.4,
    "samples": 1810,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9756/IntelR-CoreTM-i7-4940MX-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-8279U",
    "rank": 288,
    "benchmark": 71.4,
    "samples": 189,
    "url": "https://cpu.userbenchmark.com/SpeedTest/807756/IntelR-CoreTM-i5-8279U-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1220 v3",
    "rank": 289,
    "benchmark": 71.3,
    "samples": 3210,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5983/IntelR-XeonR-CPU-E3-1220-v3---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD1600BBAEBOX",
    "brand": "AMD",
    "model": "Ryzen 5 1600",
    "rank": 290,
    "benchmark": 71.3,
    "samples": 308377,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-5-1600/Rating/3919"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1225 V2",
    "rank": 291,
    "benchmark": 71.2,
    "samples": 2127,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5015/IntelR-XeonR-CPU-E3-1225-V2---320GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD1700BBAEBOX",
    "brand": "AMD",
    "model": "Ryzen 7 1700",
    "rank": 292,
    "benchmark": 71.2,
    "samples": 181358,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-7-1700/Rating/3917"
  },
  {
    "type": "CPU",
    "part_number": "CM8066201920202",
    "brand": "Intel",
    "model": "Core i7-6700T",
    "rank": 293,
    "benchmark": 71.2,
    "samples": 7455,
    "url": "https://cpu.userbenchmark.com/SpeedTest/36439/IntelR-CoreTM-i7-6700T-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I57400",
    "brand": "Intel",
    "model": "Core i5-7400",
    "rank": 294,
    "benchmark": 71.2,
    "samples": 187614,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-7400/Rating/3886"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-1620 0",
    "rank": 295,
    "benchmark": 71.1,
    "samples": 12965,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2930/IntelR-XeonR-CPU-E5-1620-0---360GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1240",
    "rank": 296,
    "benchmark": 71.1,
    "samples": 1779,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5243/IntelR-XeonR-CPU-E31240---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4790T",
    "rank": 297,
    "benchmark": 71.1,
    "samples": 789,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13586/IntelR-CoreTM-i7-4790T-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80662I56500",
    "brand": "Intel",
    "model": "Core i5-6500",
    "rank": 298,
    "benchmark": 71.1,
    "samples": 193829,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-6500/Rating/3513"
  },
  {
    "type": "CPU",
    "part_number": "BX80637I53470",
    "brand": "Intel",
    "model": "Core i5-3470",
    "rank": 299,
    "benchmark": 71,
    "samples": 174887,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-3470/Rating/2771"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2500",
    "rank": 300,
    "benchmark": 71,
    "samples": 60332,
    "url": "https://cpu.userbenchmark.com/SpeedTest/517/IntelR-CoreTM-i5-2500-CPU---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1220 V2",
    "rank": 301,
    "benchmark": 71,
    "samples": 2725,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3482/IntelR-XeonR-CPU-E3-1220-V2---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2450P",
    "rank": 302,
    "benchmark": 71,
    "samples": 188,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2795/IntelR-CoreTM-i5-2450P-CPU---320GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80701G6400",
    "brand": "Intel",
    "model": "Pentium Gold G6400",
    "rank": 303,
    "benchmark": 71,
    "samples": 1034,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1221579/IntelR-PentiumR-Gold-G6400-CPU---400GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD3200C5FHBOX",
    "brand": "AMD",
    "model": "Ryzen 3 3200G",
    "rank": 304,
    "benchmark": 70.9,
    "samples": 69039,
    "url": "https://cpu.userbenchmark.com/SpeedTest/824486/AMD-Ryzen-3-3200G-with-Radeon-Vega-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X5650",
    "rank": 305,
    "benchmark": 70.8,
    "samples": 12902,
    "url": "https://cpu.userbenchmark.com/SpeedTest/355/IntelR-XeonR-CPU-----------X5650----267GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I54460",
    "brand": "Intel",
    "model": "Core i5-4460",
    "rank": 306,
    "benchmark": 70.6,
    "samples": 207096,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-4460/Rating/2310"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3940XM",
    "rank": 307,
    "benchmark": 70.6,
    "samples": 1580,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7092/IntelR-CoreTM-i7-3940XM-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "100-000000085",
    "brand": "AMD",
    "model": "Ryzen 3 4300U",
    "rank": 308,
    "benchmark": 70.6,
    "samples": 1756,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1135301/AMD-Ryzen-3-4300U-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4930MX",
    "rank": 309,
    "benchmark": 70.5,
    "samples": 1160,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2453/IntelR-CoreTM-i7-4930MX-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80701G6500",
    "brand": "Intel",
    "model": "Pentium Gold G6500",
    "rank": 310,
    "benchmark": 70.5,
    "samples": 33,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1323006/IntelR-PentiumR-Gold-G6500-CPU---410GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I37350K",
    "brand": "Intel",
    "model": "Core i3-7350K",
    "rank": 311,
    "benchmark": 70.4,
    "samples": 3196,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-7350K/Rating/3889"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3450",
    "rank": 312,
    "benchmark": 70.4,
    "samples": 27588,
    "url": "https://cpu.userbenchmark.com/SpeedTest/161/IntelR-CoreTM-i5-3450-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X5667",
    "rank": 313,
    "benchmark": 70.3,
    "samples": 294,
    "url": "https://cpu.userbenchmark.com/SpeedTest/21709/IntelR-XeonR-CPU-----------X5667----307GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 880",
    "rank": 314,
    "benchmark": 70.3,
    "samples": 680,
    "url": "https://cpu.userbenchmark.com/SpeedTest/15321/IntelR-CoreTM-i7-CPU---------880----307GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4570S",
    "rank": 315,
    "benchmark": 70.2,
    "samples": 8239,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5965/IntelR-CoreTM-i5-4570S-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4770T",
    "rank": 316,
    "benchmark": 70.2,
    "samples": 500,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4415/IntelR-CoreTM-i7-4770T-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-2630 v3",
    "rank": 317,
    "benchmark": 70.1,
    "samples": 1096,
    "url": "https://cpu.userbenchmark.com/SpeedTest/22651/IntelR-XeonR-CPU-E5-2630-v3---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E31230",
    "rank": 318,
    "benchmark": 70,
    "samples": 1376,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6750/IntelR-XeonR-CPU-E31230---320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-7920HQ",
    "rank": 319,
    "benchmark": 69.8,
    "samples": 990,
    "url": "https://cpu.userbenchmark.com/SpeedTest/243546/IntelR-CoreTM-i7-7920HQ-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I37300",
    "brand": "Intel",
    "model": "Core i3-7300",
    "rank": 320,
    "benchmark": 69.8,
    "samples": 1389,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-7300/Rating/3893"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E31220",
    "rank": 321,
    "benchmark": 69.8,
    "samples": 2141,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6171/IntelR-XeonR-CPU-E31220---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-5700HQ",
    "rank": 322,
    "benchmark": 69.7,
    "samples": 11803,
    "url": "https://cpu.userbenchmark.com/SpeedTest/30103/IntelR-CoreTM-i7-5700HQ-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-6920HQ",
    "rank": 323,
    "benchmark": 69.7,
    "samples": 2171,
    "url": "https://cpu.userbenchmark.com/SpeedTest/56225/IntelR-CoreTM-i7-6920HQ-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I54440",
    "brand": "Intel",
    "model": "Core i5-4440",
    "rank": 324,
    "benchmark": 69.6,
    "samples": 59862,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-4440/Rating/1993"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I57500T",
    "brand": "Intel",
    "model": "Core i5-7500T",
    "rank": 325,
    "benchmark": 69.6,
    "samples": 3806,
    "url": "https://cpu.userbenchmark.com/SpeedTest/218898/IntelR-CoreTM-i5-7500T-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-2643 0",
    "rank": 326,
    "benchmark": 69.5,
    "samples": 786,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3389/IntelR-XeonR-CPU-E5-2643-0---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 K 875",
    "rank": 327,
    "benchmark": 69.5,
    "samples": 1702,
    "url": "https://cpu.userbenchmark.com/SpeedTest/476/IntelR-CoreTM-i7-CPU-------K-875----293GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3475S",
    "rank": 328,
    "benchmark": 69.4,
    "samples": 1089,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10117/IntelR-CoreTM-i5-3475S-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E31225",
    "rank": 329,
    "benchmark": 69.4,
    "samples": 2698,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4210/IntelR-XeonR-CPU-E31225---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-6820HK",
    "rank": 330,
    "benchmark": 69.3,
    "samples": 15187,
    "url": "https://cpu.userbenchmark.com/SpeedTest/36404/IntelR-CoreTM-i7-6820HK-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4910MQ",
    "rank": 331,
    "benchmark": 69.2,
    "samples": 4030,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9700/IntelR-CoreTM-i7-4910MQ-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80637I53450S",
    "brand": "Intel",
    "model": "Core i5-3450S",
    "rank": 332,
    "benchmark": 69.2,
    "samples": 1354,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2071/IntelR-CoreTM-i5-3450S-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684G5600",
    "brand": "Intel",
    "model": "Pentium Gold G5600",
    "rank": 333,
    "benchmark": 69.2,
    "samples": 585,
    "url": "https://cpu.userbenchmark.com/SpeedTest/469126/IntelR-PentiumR-Gold-G5600-CPU---390GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3-1505M v6",
    "rank": 334,
    "benchmark": 69.1,
    "samples": 2697,
    "url": "https://cpu.userbenchmark.com/SpeedTest/233404/IntelR-XeonR-CPU-E3-1505M-v6---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-7101E",
    "rank": 335,
    "benchmark": 69.1,
    "samples": 10,
    "url": "https://cpu.userbenchmark.com/SpeedTest/325269/IntelR-CoreTM-i3-7101E-CPU---390GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4430",
    "rank": 336,
    "benchmark": 69.1,
    "samples": 20530,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1920/IntelR-CoreTM-i5-4430-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80662I36320",
    "brand": "Intel",
    "model": "Core i3-6320",
    "rank": 337,
    "benchmark": 69.1,
    "samples": 1600,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-6320/Rating/3535"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3470S",
    "rank": 338,
    "benchmark": 69,
    "samples": 11227,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6387/IntelR-CoreTM-i5-3470S-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X3470",
    "rank": 339,
    "benchmark": 69,
    "samples": 6592,
    "url": "https://cpu.userbenchmark.com/SpeedTest/24530/IntelR-XeonR-CPU-----------X3470----293GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80623I52400",
    "brand": "Intel",
    "model": "Core i5-2400",
    "rank": 340,
    "benchmark": 69,
    "samples": 135970,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-2400/Rating/803"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X5570",
    "rank": 341,
    "benchmark": 68.8,
    "samples": 1188,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12230/IntelR-XeonR-CPU-----------X5570----293GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3350P",
    "rank": 342,
    "benchmark": 68.7,
    "samples": 18233,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3018/IntelR-CoreTM-i5-3350P-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-7820HQ",
    "rank": 343,
    "benchmark": 68.7,
    "samples": 10400,
    "url": "https://cpu.userbenchmark.com/SpeedTest/185229/IntelR-CoreTM-i7-7820HQ-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD150XBBAEBOX",
    "brand": "AMD",
    "model": "Ryzen 5 1500X",
    "rank": 344,
    "benchmark": 68.6,
    "samples": 57386,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-5-1500X/Rating/3921"
  },
  {
    "type": "CPU",
    "part_number": "BX80662I56400",
    "brand": "Intel",
    "model": "Core i5-6400",
    "rank": 345,
    "benchmark": 68.6,
    "samples": 144868,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-6400/Rating/3512"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3920XM",
    "rank": 346,
    "benchmark": 68.5,
    "samples": 633,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5061/IntelR-CoreTM-i7-3920XM-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-7700HQ",
    "rank": 347,
    "benchmark": 68.5,
    "samples": 404686,
    "url": "https://cpu.userbenchmark.com/SpeedTest/211019/IntelR-CoreTM-i7-7700HQ-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684G5500",
    "brand": "Intel",
    "model": "Pentium Gold G5500",
    "rank": 348,
    "benchmark": 68.4,
    "samples": 710,
    "url": "https://cpu.userbenchmark.com/SpeedTest/484140/IntelR-PentiumR-Gold-G5500-CPU---380GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80621E52670",
    "brand": "Intel",
    "model": "Xeon E5-2670",
    "rank": 349,
    "benchmark": 68.4,
    "samples": 3583,
    "url": "https://cpu.userbenchmark.com/SpeedTest/18501/IntelR-XeonR-CPU-E5-2670-0---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 960",
    "rank": 350,
    "benchmark": 68.4,
    "samples": 13148,
    "url": "https://cpu.userbenchmark.com/SpeedTest/778/IntelR-CoreTM-i7-CPU---------960----320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2320",
    "rank": 351,
    "benchmark": 68.4,
    "samples": 26698,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1735/IntelR-CoreTM-i5-2320-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-1160G7",
    "rank": 352,
    "benchmark": 68.3,
    "samples": 44,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1300243/11th-Gen-IntelR-CoreTM-i7-1160G7---120GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4460S",
    "rank": 353,
    "benchmark": 68.2,
    "samples": 8605,
    "url": "https://cpu.userbenchmark.com/SpeedTest/14679/IntelR-CoreTM-i5-4460S-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "FD9590FHHKWOF",
    "brand": "AMD",
    "model": "FX-9590",
    "rank": 354,
    "benchmark": 68,
    "samples": 20352,
    "url": "https://cpu.userbenchmark.com/AMD-FX-9590/Rating/1812"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X3460",
    "rank": 355,
    "benchmark": 68,
    "samples": 719,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3739/IntelR-XeonR-CPU-----------X3460----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3340",
    "rank": 356,
    "benchmark": 67.8,
    "samples": 6400,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2710/IntelR-CoreTM-i5-3340-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4810MQ",
    "rank": 357,
    "benchmark": 67.8,
    "samples": 22345,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7168/IntelR-CoreTM-i7-4810MQ-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4720HQ",
    "rank": 358,
    "benchmark": 67.7,
    "samples": 64754,
    "url": "https://cpu.userbenchmark.com/SpeedTest/20045/IntelR-CoreTM-i7-4720HQ-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon L5639",
    "rank": 359,
    "benchmark": 67.7,
    "samples": 76,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5958/IntelR-XeonR-CPU-----------L5639----213GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD2200C5FBBOX",
    "brand": "AMD",
    "model": "Ryzen 3 2200G",
    "rank": 360,
    "benchmark": 67.7,
    "samples": 140555,
    "url": "https://cpu.userbenchmark.com/SpeedTest/441832/AMD-Ryzen-3-2200G-with-Radeon-Vega-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4960HQ",
    "rank": 361,
    "benchmark": 67.7,
    "samples": 256,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9629/IntelR-CoreTM-i7-4960HQ-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 870",
    "rank": 362,
    "benchmark": 67.7,
    "samples": 29750,
    "url": "https://cpu.userbenchmark.com/SpeedTest/961/IntelR-CoreTM-i7-CPU---------870----293GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon W3565",
    "rank": 363,
    "benchmark": 67.6,
    "samples": 5911,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6324/IntelR-XeonR-CPU-----------W3565----320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2600S",
    "rank": 364,
    "benchmark": 67.5,
    "samples": 2432,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6489/IntelR-CoreTM-i7-2600S-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3330",
    "rank": 365,
    "benchmark": 67.4,
    "samples": 47129,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10/IntelR-CoreTM-i5-3330-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X5560",
    "rank": 366,
    "benchmark": 67.3,
    "samples": 457,
    "url": "https://cpu.userbenchmark.com/SpeedTest/16614/IntelR-XeonR-CPU-----------X5560----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I34370",
    "brand": "Intel",
    "model": "Core i3-4370",
    "rank": 367,
    "benchmark": 67.2,
    "samples": 1468,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-4370/Rating/2817"
  },
  {
    "type": "CPU",
    "part_number": "YD130XBBAEBOX",
    "brand": "AMD",
    "model": "Ryzen 3 1300X",
    "rank": 368,
    "benchmark": 67.2,
    "samples": 32323,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-3-1300X/Rating/3930"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3840QM",
    "rank": 369,
    "benchmark": 67.1,
    "samples": 3712,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2451/IntelR-CoreTM-i7-3840QM-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-10310U",
    "rank": 370,
    "benchmark": 67.1,
    "samples": 1675,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1150155/IntelR-CoreTM-i5-10310U-CPU---170GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80647I74900MQ",
    "brand": "Intel",
    "model": "Core i7-4900MQ",
    "rank": 371,
    "benchmark": 67.1,
    "samples": 4716,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-4900MQ/Rating/1994"
  },
  {
    "type": "CPU",
    "part_number": "BX80662I36300",
    "brand": "Intel",
    "model": "Core i3-6300",
    "rank": 372,
    "benchmark": 67.1,
    "samples": 3262,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-6300/Rating/3536"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-6820HQ",
    "rank": 373,
    "benchmark": 66.9,
    "samples": 23246,
    "url": "https://cpu.userbenchmark.com/SpeedTest/43500/IntelR-CoreTM-i7-6820HQ-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3820QM",
    "rank": 374,
    "benchmark": 66.9,
    "samples": 2536,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4339/IntelR-CoreTM-i7-3820QM-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-7300HQ",
    "rank": 375,
    "benchmark": 66.9,
    "samples": 137405,
    "url": "https://cpu.userbenchmark.com/SpeedTest/223877/IntelR-CoreTM-i5-7300HQ-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-1130G7",
    "rank": 376,
    "benchmark": 66.8,
    "samples": 37,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1418235/11th-Gen-IntelR-CoreTM-i5-1130G7---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4700HQ",
    "rank": 377,
    "benchmark": 66.8,
    "samples": 37782,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-4700HQ/Rating/2728"
  },
  {
    "type": "CPU",
    "part_number": "BX80601950",
    "brand": "Intel",
    "model": "Core i7-950",
    "rank": 378,
    "benchmark": 66.7,
    "samples": 31095,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-950/Rating/617"
  },
  {
    "type": "CPU",
    "part_number": "BX80677G4620",
    "brand": "Intel",
    "model": "Pentium G4620",
    "rank": 379,
    "benchmark": 66.6,
    "samples": 2643,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G4620/Rating/3895"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4570R",
    "rank": 380,
    "benchmark": 66.5,
    "samples": 862,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6445/IntelR-CoreTM-i5-4570R-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I37300T",
    "brand": "Intel",
    "model": "Core i3-7300T",
    "rank": 381,
    "benchmark": 66.5,
    "samples": 64,
    "url": "https://cpu.userbenchmark.com/SpeedTest/230231/IntelR-CoreTM-i3-7300T-CPU---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I57400T",
    "brand": "Intel",
    "model": "Core i5-7400T",
    "rank": 382,
    "benchmark": 66.4,
    "samples": 2947,
    "url": "https://cpu.userbenchmark.com/SpeedTest/244917/IntelR-CoreTM-i5-7400T-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4800MQ",
    "rank": 383,
    "benchmark": 66.4,
    "samples": 17367,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3437/IntelR-CoreTM-i7-4800MQ-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2310",
    "rank": 384,
    "benchmark": 66.4,
    "samples": 14599,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2055/IntelR-CoreTM-i5-2310-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2300",
    "rank": 385,
    "benchmark": 66.3,
    "samples": 15617,
    "url": "https://cpu.userbenchmark.com/SpeedTest/291/IntelR-CoreTM-i5-2300-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon W3550",
    "rank": 386,
    "benchmark": 66.3,
    "samples": 5813,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3628/IntelR-XeonR-CPU-----------W3550----307GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4722HQ",
    "rank": 387,
    "benchmark": 66.2,
    "samples": 190,
    "url": "https://cpu.userbenchmark.com/SpeedTest/32895/IntelR-CoreTM-i7-4722HQ-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "FD9370FHHKWOF",
    "brand": "AMD",
    "model": "FX-9370",
    "rank": 388,
    "benchmark": 66.2,
    "samples": 6996,
    "url": "https://cpu.userbenchmark.com/AMD-FX-9370/Rating/2005"
  },
  {
    "type": "CPU",
    "part_number": "YD2400C5FBBOX",
    "brand": "AMD",
    "model": "Ryzen 5 2400G",
    "rank": 389,
    "benchmark": 66.1,
    "samples": 101471,
    "url": "https://cpu.userbenchmark.com/SpeedTest/433194/AMD-Ryzen-5-2400G-with-Radeon-Vega-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4710MQ",
    "rank": 390,
    "benchmark": 66.1,
    "samples": 21458,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9397/IntelR-CoreTM-i7-4710MQ-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 940",
    "rank": 391,
    "benchmark": 66,
    "samples": 2031,
    "url": "https://cpu.userbenchmark.com/SpeedTest/606/IntelR-CoreTM-i7-CPU---------940----293GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X3440",
    "rank": 392,
    "benchmark": 65.9,
    "samples": 5731,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6655/IntelR-XeonR-CPU-----------X3440----253GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X3450",
    "rank": 393,
    "benchmark": 65.9,
    "samples": 2797,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10439/IntelR-XeonR-CPU-----------X3450----267GHz"
  },
  {
    "type": "CPU",
    "part_number": "CW8064701470702",
    "brand": "Intel",
    "model": "Core i7-4700MQ",
    "rank": 394,
    "benchmark": 65.9,
    "samples": 55530,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-4700MQ/Rating/2727"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I34350",
    "brand": "Intel",
    "model": "Core i3-4350",
    "rank": 395,
    "benchmark": 65.8,
    "samples": 430,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-4350/Rating/2433"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3740QM",
    "rank": 396,
    "benchmark": 65.8,
    "samples": 11640,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2919/IntelR-CoreTM-i7-3740QM-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "FD8370FRHKBOX",
    "brand": "AMD",
    "model": "FX-8370",
    "rank": 397,
    "benchmark": 65.8,
    "samples": 26837,
    "url": "https://cpu.userbenchmark.com/AMD-FX-8370/Rating/2983"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-1035G1",
    "rank": 398,
    "benchmark": 65.8,
    "samples": 26461,
    "url": "https://cpu.userbenchmark.com/SpeedTest/895407/IntelR-CoreTM-i5-1035G1-CPU---100GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I34360",
    "brand": "Intel",
    "model": "Core i3-4360",
    "rank": 399,
    "benchmark": 65.8,
    "samples": 1507,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-4360/Rating/2819"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 860",
    "rank": 400,
    "benchmark": 65.8,
    "samples": 36496,
    "url": "https://cpu.userbenchmark.com/SpeedTest/841/IntelR-CoreTM-i7-CPU---------860----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-6700HQ",
    "rank": 401,
    "benchmark": 65.8,
    "samples": 262538,
    "url": "https://cpu.userbenchmark.com/SpeedTest/34954/IntelR-CoreTM-i7-6700HQ-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3720QM",
    "rank": 402,
    "benchmark": 65.7,
    "samples": 8839,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1619/IntelR-CoreTM-i7-3720QM-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "FD8350FRHKBOX",
    "brand": "AMD",
    "model": "FX-8350",
    "rank": 403,
    "benchmark": 65.7,
    "samples": 291137,
    "url": "https://cpu.userbenchmark.com/AMD-FX-8350/Rating/1489"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-10510U",
    "rank": 404,
    "benchmark": 65.7,
    "samples": 31542,
    "url": "https://cpu.userbenchmark.com/SpeedTest/891469/IntelR-CoreTM-i7-10510U-CPU---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4710HQ",
    "rank": 405,
    "benchmark": 65.5,
    "samples": 58230,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11499/IntelR-CoreTM-i7-4710HQ-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 760",
    "rank": 406,
    "benchmark": 65.5,
    "samples": 29893,
    "url": "https://cpu.userbenchmark.com/SpeedTest/717/IntelR-CoreTM-i5-CPU---------760----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-10210U",
    "rank": 407,
    "benchmark": 65.5,
    "samples": 28547,
    "url": "https://cpu.userbenchmark.com/SpeedTest/819403/IntelR-CoreTM-i5-10210U-CPU---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-2670 v2",
    "rank": 408,
    "benchmark": 65.4,
    "samples": 270,
    "url": "https://cpu.userbenchmark.com/SpeedTest/18414/IntelR-XeonR-CPU-E5-2670-v2---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4850HQ",
    "rank": 409,
    "benchmark": 65.3,
    "samples": 725,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7877/IntelR-CoreTM-i7-4850HQ-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2500S",
    "rank": 410,
    "benchmark": 65.3,
    "samples": 2439,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1699/IntelR-CoreTM-i5-2500S-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I37100",
    "brand": "Intel",
    "model": "Core i3-7100",
    "rank": 411,
    "benchmark": 65.3,
    "samples": 66722,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-7100/Rating/3891"
  },
  {
    "type": "CPU",
    "part_number": "BX80684G5400",
    "brand": "Intel",
    "model": "Pentium Gold G5400",
    "rank": 412,
    "benchmark": 65.3,
    "samples": 11936,
    "url": "https://cpu.userbenchmark.com/SpeedTest/484278/IntelR-PentiumR-Gold-G5400-CPU---370GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-1065G7",
    "rank": 413,
    "benchmark": 65.2,
    "samples": 34687,
    "url": "https://cpu.userbenchmark.com/SpeedTest/888368/IntelR-CoreTM-i7-1065G7-CPU---130GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 930",
    "rank": 414,
    "benchmark": 65.2,
    "samples": 20132,
    "url": "https://cpu.userbenchmark.com/SpeedTest/79/IntelR-CoreTM-i7-CPU---------930----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "FH8068403419422",
    "brand": "Intel",
    "model": "Core i3-8109U",
    "rank": 415,
    "benchmark": 65.1,
    "samples": 1354,
    "url": "https://cpu.userbenchmark.com/SpeedTest/609620/IntelR-CoreTM-i3-8109U-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "AW8063801106200",
    "brand": "Intel",
    "model": "Core i7-3630QM",
    "rank": 416,
    "benchmark": 65.1,
    "samples": 58132,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-3630QM/Rating/626"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3330S",
    "rank": 417,
    "benchmark": 65.1,
    "samples": 3516,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4366/IntelR-CoreTM-i5-3330S-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2960XM",
    "rank": 418,
    "benchmark": 64.9,
    "samples": 736,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2390/IntelR-CoreTM-i7-2960XM-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "AW8063801013511",
    "brand": "Intel",
    "model": "Core i7-3610QM",
    "rank": 419,
    "benchmark": 64.9,
    "samples": 31362,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-3610QM/Rating/2730"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon W3530",
    "rank": 420,
    "benchmark": 64.8,
    "samples": 4495,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3000/IntelR-XeonR-CPU-----------W3530----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 5 2600H",
    "rank": 421,
    "benchmark": 64.7,
    "samples": 161,
    "url": "https://cpu.userbenchmark.com/SpeedTest/617618/AMD-Ryzen-5-2600H-with-Radeon-Vega-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I34340",
    "brand": "Intel",
    "model": "Core i3-4340",
    "rank": 422,
    "benchmark": 64.5,
    "samples": 766,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-4340/Rating/2877"
  },
  {
    "type": "CPU",
    "part_number": "BX80662I36300T",
    "brand": "Intel",
    "model": "Core i3-6300T",
    "rank": 423,
    "benchmark": 64.5,
    "samples": 118,
    "url": "https://cpu.userbenchmark.com/SpeedTest/75733/IntelR-CoreTM-i3-6300T-CPU---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80605I5750",
    "brand": "Intel",
    "model": "Core i5-750",
    "rank": 424,
    "benchmark": 64.5,
    "samples": 45333,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-750/Rating/2773"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2405S",
    "rank": 425,
    "benchmark": 64.4,
    "samples": 159,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10048/IntelR-CoreTM-i5-2405S-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 9 4900U",
    "rank": 426,
    "benchmark": 64.1,
    "samples": 1,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1097507/AMD-Ryzen-9-4900U-with-Radeon-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "BX80601920",
    "brand": "Intel",
    "model": "Core i7-920",
    "rank": 427,
    "benchmark": 64.1,
    "samples": 48588,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-920/Rating/1981"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-1115G4",
    "rank": 428,
    "benchmark": 64.1,
    "samples": 740,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1333512/11th-Gen-IntelR-CoreTM-i3-1115G4---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4770HQ",
    "rank": 429,
    "benchmark": 64,
    "samples": 1368,
    "url": "https://cpu.userbenchmark.com/SpeedTest/18784/IntelR-CoreTM-i7-4770HQ-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 7 2800H",
    "rank": 430,
    "benchmark": 63.7,
    "samples": 50,
    "url": "https://cpu.userbenchmark.com/SpeedTest/667422/AMD-Ryzen-7-2800H-with-Radeon-Vega-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4750HQ",
    "rank": 431,
    "benchmark": 63.7,
    "samples": 4421,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3709/IntelR-CoreTM-i7-4750HQ-CPU---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-8665U",
    "rank": 432,
    "benchmark": 63.6,
    "samples": 6406,
    "url": "https://cpu.userbenchmark.com/SpeedTest/740553/IntelR-CoreTM-i7-8665U-CPU---190GHz"
  },
  {
    "type": "CPU",
    "part_number": "CM8068403360212",
    "brand": "Intel",
    "model": "Pentium G5400T",
    "rank": 433,
    "benchmark": 63.6,
    "samples": 126,
    "url": "https://cpu.userbenchmark.com/SpeedTest/528812/IntelR-PentiumR-Gold-G5400T-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677G4600",
    "brand": "Intel",
    "model": "Pentium G4600",
    "rank": 434,
    "benchmark": 63.6,
    "samples": 13427,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G4600/Rating/3894"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-7567U",
    "rank": 435,
    "benchmark": 63.5,
    "samples": 1696,
    "url": "https://cpu.userbenchmark.com/SpeedTest/219709/IntelR-CoreTM-i7-7567U-CPU---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "FJ8068404064604",
    "brand": "Intel",
    "model": "Core i5-8265U",
    "rank": 436,
    "benchmark": 63.5,
    "samples": 63275,
    "url": "https://cpu.userbenchmark.com/SpeedTest/566107/IntelR-CoreTM-i5-8265U-CPU---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "FX-6350 Six-Core",
    "rank": 437,
    "benchmark": 63.4,
    "samples": 24586,
    "url": "https://cpu.userbenchmark.com/SpeedTest/713/AMD-FXtm-6350-Six-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "YD1400BBAEBOX",
    "brand": "AMD",
    "model": "Ryzen 5 1400",
    "rank": 438,
    "benchmark": 63.4,
    "samples": 57158,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-5-1400/Rating/3922"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-6300HQ",
    "rank": 439,
    "benchmark": 63.4,
    "samples": 45251,
    "url": "https://cpu.userbenchmark.com/SpeedTest/38166/IntelR-CoreTM-i5-6300HQ-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2400S",
    "rank": 440,
    "benchmark": 63.3,
    "samples": 7587,
    "url": "https://cpu.userbenchmark.com/SpeedTest/304/IntelR-CoreTM-i5-2400S-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I34330",
    "brand": "Intel",
    "model": "Core i3-4330",
    "rank": 441,
    "benchmark": 63.3,
    "samples": 5308,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-4330/Rating/2876"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4702MQ",
    "rank": 442,
    "benchmark": 63.2,
    "samples": 18492,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2674/IntelR-CoreTM-i7-4702MQ-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-8350U",
    "rank": 443,
    "benchmark": 63.1,
    "samples": 13100,
    "url": "https://cpu.userbenchmark.com/SpeedTest/388461/IntelR-CoreTM-i5-8350U-CPU---170GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80662I36100",
    "brand": "Intel",
    "model": "Core i3-6100",
    "rank": 444,
    "benchmark": 63.1,
    "samples": 95249,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-6100/Rating/3511"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 980",
    "rank": 445,
    "benchmark": 63.1,
    "samples": 1026,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5445/AMD-Phenomtm-II-X4-980-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3632QM",
    "rank": 446,
    "benchmark": 63,
    "samples": 21646,
    "url": "https://cpu.userbenchmark.com/SpeedTest/36/IntelR-CoreTM-i7-3632QM-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "FJ8068404064405",
    "brand": "Intel",
    "model": "Core i7-8565U",
    "rank": 447,
    "benchmark": 63,
    "samples": 60789,
    "url": "https://cpu.userbenchmark.com/SpeedTest/591977/IntelR-CoreTM-i7-8565U-CPU---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon W3520",
    "rank": 448,
    "benchmark": 63,
    "samples": 5737,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3585/IntelR-XeonR-CPU-----------W3520----267GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD1200BBAEBOX",
    "brand": "AMD",
    "model": "Ryzen 3 1200",
    "rank": 449,
    "benchmark": 63,
    "samples": 70738,
    "url": "https://cpu.userbenchmark.com/AMD-Ryzen-3-1200/Rating/3931"
  },
  {
    "type": "CPU",
    "part_number": "FD8320FRHKBOX",
    "brand": "AMD",
    "model": "FX-8320",
    "rank": 450,
    "benchmark": 63,
    "samples": 105980,
    "url": "https://cpu.userbenchmark.com/AMD-FX-8320/Rating/1983"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-8250U",
    "rank": 451,
    "benchmark": 62.9,
    "samples": 202132,
    "url": "https://cpu.userbenchmark.com/SpeedTest/338266/IntelR-CoreTM-i5-8250U-CPU---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3615QM",
    "rank": 452,
    "benchmark": 62.9,
    "samples": 2289,
    "url": "https://cpu.userbenchmark.com/SpeedTest/806/IntelR-CoreTM-i7-3615QM-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "HDE00ZFBGRBOX",
    "brand": "AMD",
    "model": "Phenom II X6 1100T",
    "rank": 453,
    "benchmark": 62.8,
    "samples": 10724,
    "url": "https://cpu.userbenchmark.com/AMD-Phenom-II-X6-1100T/Rating/2004"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5540",
    "rank": 454,
    "benchmark": 62.8,
    "samples": 408,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13822/IntelR-XeonR-CPU-----------E5540----253GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2920XM",
    "rank": 455,
    "benchmark": 62.7,
    "samples": 811,
    "url": "https://cpu.userbenchmark.com/SpeedTest/459/IntelR-CoreTM-i7-2920XM-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-6098P",
    "rank": 456,
    "benchmark": 62.7,
    "samples": 4887,
    "url": "https://cpu.userbenchmark.com/SpeedTest/80177/IntelR-CoreTM-i3-6098P-CPU---360GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-7260U",
    "rank": 457,
    "benchmark": 62.6,
    "samples": 2154,
    "url": "https://cpu.userbenchmark.com/SpeedTest/269906/IntelR-CoreTM-i5-7260U-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4702HQ",
    "rank": 458,
    "benchmark": 62.6,
    "samples": 2936,
    "url": "https://cpu.userbenchmark.com/SpeedTest/297/IntelR-CoreTM-i7-4702HQ-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I34170",
    "brand": "Intel",
    "model": "Core i3-4170",
    "rank": 459,
    "benchmark": 62.4,
    "samples": 35946,
    "url": "https://cpu.userbenchmark.com/SpeedTest/28214/IntelR-CoreTM-i3-4170-CPU---370GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "FX-8310",
    "rank": 460,
    "benchmark": 62.4,
    "samples": 1509,
    "url": "https://cpu.userbenchmark.com/SpeedTest/18534/AMD-FXtm-8310-Eight-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 B65",
    "rank": 461,
    "benchmark": 62.4,
    "samples": 191,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6054/AMD-Phenomtm-II-X4-B65-Processor"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I34160",
    "brand": "Intel",
    "model": "Core i3-4160",
    "rank": 462,
    "benchmark": 62.3,
    "samples": 37287,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-4160/Rating/2816"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3635QM",
    "rank": 463,
    "benchmark": 62.3,
    "samples": 2524,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2465/IntelR-CoreTM-i7-3635QM-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X3430",
    "rank": 464,
    "benchmark": 62.3,
    "samples": 3208,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5225/IntelR-XeonR-CPU-----------X3430----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-8365U",
    "rank": 465,
    "benchmark": 62.3,
    "samples": 4712,
    "url": "https://cpu.userbenchmark.com/SpeedTest/774761/IntelR-CoreTM-i5-8365U-CPU---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2860QM",
    "rank": 466,
    "benchmark": 62.2,
    "samples": 3380,
    "url": "https://cpu.userbenchmark.com/SpeedTest/103/IntelR-CoreTM-i7-2860QM-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "FD8150FRGUBOX",
    "brand": "AMD",
    "model": "FX-8150",
    "rank": 467,
    "benchmark": 62.2,
    "samples": 19074,
    "url": "https://cpu.userbenchmark.com/AMD-FX-8150/Rating/2006"
  },
  {
    "type": "CPU",
    "part_number": "FD837EWMHKBOX",
    "brand": "AMD",
    "model": "FX-8370E",
    "rank": 468,
    "benchmark": 62.2,
    "samples": 4764,
    "url": "https://cpu.userbenchmark.com/AMD-FX-8370E/Rating/2984"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "FX-8300",
    "rank": 469,
    "benchmark": 62.2,
    "samples": 42309,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7163/AMD-FXtm-8300-Eight-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3612QM",
    "rank": 470,
    "benchmark": 62,
    "samples": 9779,
    "url": "https://cpu.userbenchmark.com/SpeedTest/329/IntelR-CoreTM-i7-3612QM-CPU---210GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677I37100T",
    "brand": "Intel",
    "model": "Core i3-7100T",
    "rank": 471,
    "benchmark": 62,
    "samples": 2066,
    "url": "https://cpu.userbenchmark.com/SpeedTest/230301/IntelR-CoreTM-i3-7100T-CPU---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-8550U",
    "rank": 472,
    "benchmark": 61.9,
    "samples": 146761,
    "url": "https://cpu.userbenchmark.com/SpeedTest/320742/IntelR-CoreTM-i7-8550U-CPU---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677G4560",
    "brand": "Intel",
    "model": "Pentium G4560",
    "rank": 473,
    "benchmark": 61.8,
    "samples": 64521,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G4560/Rating/3892"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 975",
    "rank": 474,
    "benchmark": 61.8,
    "samples": 1057,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3020/AMD-Phenomtm-II-X4-975-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-8650U",
    "rank": 475,
    "benchmark": 61.7,
    "samples": 33690,
    "url": "https://cpu.userbenchmark.com/SpeedTest/353957/IntelR-CoreTM-i7-8650U-CPU---190GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X6 1090T",
    "rank": 476,
    "benchmark": 61.7,
    "samples": 24774,
    "url": "https://cpu.userbenchmark.com/SpeedTest/417/AMD-Phenomtm-II-X6-1090T-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-1035G4",
    "rank": 477,
    "benchmark": 61.6,
    "samples": 8353,
    "url": "https://cpu.userbenchmark.com/SpeedTest/921077/IntelR-CoreTM-i5-1035G4-CPU---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2760QM",
    "rank": 478,
    "benchmark": 61.6,
    "samples": 8443,
    "url": "https://cpu.userbenchmark.com/SpeedTest/949/IntelR-CoreTM-i7-2760QM-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4712HQ",
    "rank": 479,
    "benchmark": 61.6,
    "samples": 4483,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10973/IntelR-CoreTM-i7-4712HQ-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I34150",
    "brand": "Intel",
    "model": "Core i3-4150",
    "rank": 480,
    "benchmark": 61.6,
    "samples": 31186,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-4150/Rating/2309"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-2620 v2",
    "rank": 481,
    "benchmark": 61.4,
    "samples": 1686,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4718/IntelR-XeonR-CPU-E5-2620-v2---210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X4 555",
    "rank": 482,
    "benchmark": 61.3,
    "samples": 113,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12528/AMD-Athlontm-II-X4-555-Processor"
  },
  {
    "type": "CPU",
    "part_number": "FD832EWMHKBOX",
    "brand": "AMD",
    "model": "FX-8320E",
    "rank": 483,
    "benchmark": 61.2,
    "samples": 25389,
    "url": "https://cpu.userbenchmark.com/AMD-FX-8320E/Rating/2985"
  },
  {
    "type": "CPU",
    "part_number": "CM8068403377713",
    "brand": "Intel",
    "model": "Pentium G5500T",
    "rank": 484,
    "benchmark": 61.2,
    "samples": 46,
    "url": "https://cpu.userbenchmark.com/SpeedTest/519437/IntelR-PentiumR-Gold-G5500T-CPU---320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-1035G7",
    "rank": 485,
    "benchmark": 61.1,
    "samples": 2893,
    "url": "https://cpu.userbenchmark.com/SpeedTest/920409/IntelR-CoreTM-i5-1035G7-CPU---120GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Extreme X9770",
    "rank": 486,
    "benchmark": 61,
    "samples": 408,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10543/IntelR-CoreTM2-Extreme-CPU-X9770----320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-1603 0",
    "rank": 487,
    "benchmark": 60.9,
    "samples": 2473,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9880/IntelR-XeonR-CPU-E5-1603-0---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 970",
    "rank": 488,
    "benchmark": 60.9,
    "samples": 2091,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2231/AMD-Phenomtm-II-X4-970-Processor"
  },
  {
    "type": "CPU",
    "part_number": "BX80646I34130",
    "brand": "Intel",
    "model": "Core i3-4130",
    "rank": 489,
    "benchmark": 60.8,
    "samples": 41674,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-4130/Rating/1621"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5530",
    "rank": 490,
    "benchmark": 60.7,
    "samples": 542,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4018/IntelR-XeonR-CPU-----------E5530----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "FX-6200 Six-Core",
    "rank": 491,
    "benchmark": 60.7,
    "samples": 4648,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2658/AMD-FXtm-6200-Six-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X6 1075T",
    "rank": 492,
    "benchmark": 60.7,
    "samples": 3997,
    "url": "https://cpu.userbenchmark.com/SpeedTest/913/AMD-Phenomtm-II-X6-1075T-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2125",
    "rank": 493,
    "benchmark": 60.7,
    "samples": 554,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3545/IntelR-CoreTM-i3-2125-CPU---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-3250",
    "rank": 494,
    "benchmark": 60.4,
    "samples": 3189,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4950/IntelR-CoreTM-i3-3250-CPU---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "FD6300WMHKBOX",
    "brand": "AMD",
    "model": "FX-6300",
    "rank": 495,
    "benchmark": 60.4,
    "samples": 239196,
    "url": "https://cpu.userbenchmark.com/AMD-FX-6300/Rating/1555"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2820QM",
    "rank": 496,
    "benchmark": 60.3,
    "samples": 4547,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3145/IntelR-CoreTM-i7-2820QM-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80637I33225",
    "brand": "Intel",
    "model": "Core i3-3225",
    "rank": 497,
    "benchmark": 60.3,
    "samples": 2686,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i3-3225/Rating/1488"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-5557U",
    "rank": 498,
    "benchmark": 60.3,
    "samples": 1361,
    "url": "https://cpu.userbenchmark.com/SpeedTest/27386/IntelR-CoreTM-i7-5557U-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5620",
    "rank": 499,
    "benchmark": 60.2,
    "samples": 2544,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6971/IntelR-XeonR-CPU-----------E5620----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4570T",
    "rank": 500,
    "benchmark": 60.2,
    "samples": 5229,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6853/IntelR-CoreTM-i5-4570T-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "CM8067703016117",
    "brand": "Intel",
    "model": "Pentium G4560T",
    "rank": 501,
    "benchmark": 60.2,
    "samples": 346,
    "url": "https://cpu.userbenchmark.com/SpeedTest/467086/IntelR-PentiumR-CPU-G4560T---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 X 940",
    "rank": 502,
    "benchmark": 60,
    "samples": 496,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2801/IntelR-CoreTM-i7-CPU-------X-940----213GHz"
  },
  {
    "type": "CPU",
    "part_number": "FD4350FRHKBOX",
    "brand": "AMD",
    "model": "FX-4350",
    "rank": 503,
    "benchmark": 60,
    "samples": 10182,
    "url": "https://cpu.userbenchmark.com/AMD-FX-4350/Rating/2880"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-7167U",
    "rank": 504,
    "benchmark": 59.9,
    "samples": 33,
    "url": "https://cpu.userbenchmark.com/SpeedTest/357115/IntelR-CoreTM-i3-7167U-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4610M",
    "rank": 505,
    "benchmark": 59.9,
    "samples": 3691,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11649/IntelR-CoreTM-i7-4610M-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 B60",
    "rank": 506,
    "benchmark": 59.8,
    "samples": 1286,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8154/AMD-Phenomtm-II-X4-B60-Processor"
  },
  {
    "type": "CPU",
    "part_number": "BX80662G4520",
    "brand": "Intel",
    "model": "Pentium G4520",
    "rank": 507,
    "benchmark": 59.8,
    "samples": 323,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G4520/Rating/3537"
  },
  {
    "type": "CPU",
    "part_number": "BX80662I36100T",
    "brand": "Intel",
    "model": "Core i3-6100T",
    "rank": 508,
    "benchmark": 59.8,
    "samples": 4386,
    "url": "https://cpu.userbenchmark.com/SpeedTest/40317/IntelR-CoreTM-i3-6100T-CPU---320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2720QM",
    "rank": 509,
    "benchmark": 59.4,
    "samples": 7230,
    "url": "https://cpu.userbenchmark.com/SpeedTest/532/IntelR-CoreTM-i7-2720QM-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD240GC6FBBOX",
    "brand": "AMD",
    "model": "Athlon 240GE",
    "rank": 510,
    "benchmark": 59.4,
    "samples": 393,
    "url": "https://cpu.userbenchmark.com/SpeedTest/705151/AMD-Athlon-240GE-with-Radeon-Vega-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-2630 0",
    "rank": 511,
    "benchmark": 59.3,
    "samples": 1532,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6512/IntelR-XeonR-CPU-E5-2630-0---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-2620 0",
    "rank": 512,
    "benchmark": 59.3,
    "samples": 2614,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5895/IntelR-XeonR-CPU-E5-2620-0---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G3470",
    "rank": 513,
    "benchmark": 59.3,
    "samples": 122,
    "url": "https://cpu.userbenchmark.com/SpeedTest/28614/IntelR-PentiumR-CPU-G3470---360GHz"
  },
  {
    "type": "CPU",
    "part_number": "HDZ965FBGMBOX",
    "brand": "AMD",
    "model": "Phenom II X4 965",
    "rank": 514,
    "benchmark": 59.3,
    "samples": 45507,
    "url": "https://cpu.userbenchmark.com/AMD-Phenom-II-X4-965/Rating/606"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 7 3750H",
    "rank": 515,
    "benchmark": 59.2,
    "samples": 25744,
    "url": "https://cpu.userbenchmark.com/SpeedTest/786211/AMD-Ryzen-7-3750H-with-Radeon-Vega-Mobile-Gfx"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5520",
    "rank": 516,
    "benchmark": 59.1,
    "samples": 1240,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5884/IntelR-XeonR-CPU-----------E5520----227GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-1005G1",
    "rank": 517,
    "benchmark": 59,
    "samples": 10671,
    "url": "https://cpu.userbenchmark.com/SpeedTest/906918/IntelR-CoreTM-i3-1005G1-CPU---120GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "FX-8120",
    "rank": 518,
    "benchmark": 59,
    "samples": 22840,
    "url": "https://cpu.userbenchmark.com/SpeedTest/173/AMD-FXtm-8120-Eight-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-3240",
    "rank": 519,
    "benchmark": 59,
    "samples": 24276,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2133/IntelR-CoreTM-i3-3240-CPU---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2105",
    "rank": 520,
    "benchmark": 58.9,
    "samples": 934,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2747/IntelR-CoreTM-i3-2105-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 5 3550H",
    "rank": 521,
    "benchmark": 58.9,
    "samples": 39793,
    "url": "https://cpu.userbenchmark.com/SpeedTest/718601/AMD-Ryzen-5-3550H-with-Radeon-Vega-Mobile-Gfx"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon L5520",
    "rank": 522,
    "benchmark": 58.8,
    "samples": 150,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6285/IntelR-XeonR-CPU-----------L5520----227GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2670QM",
    "rank": 523,
    "benchmark": 58.8,
    "samples": 41405,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-2670QM/Rating/1982"
  },
  {
    "type": "CPU",
    "part_number": "YD3000C6FHBOX",
    "brand": "AMD",
    "model": "Athlon 3000G",
    "rank": 524,
    "benchmark": 58.7,
    "samples": 5904,
    "url": "https://cpu.userbenchmark.com/SpeedTest/968952/AMD-Athlon-3000G-with-Radeon-Vega-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-3210",
    "rank": 525,
    "benchmark": 58.6,
    "samples": 5434,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3090/IntelR-CoreTM-i3-3210-CPU---320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2130",
    "rank": 526,
    "benchmark": 58.6,
    "samples": 6608,
    "url": "https://cpu.userbenchmark.com/SpeedTest/424/IntelR-CoreTM-i3-2130-CPU---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-3220",
    "rank": 527,
    "benchmark": 58.6,
    "samples": 56953,
    "url": "https://cpu.userbenchmark.com/SpeedTest/272/IntelR-CoreTM-i3-3220-CPU---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "FX-4170 Quad-Core",
    "rank": 528,
    "benchmark": 58.6,
    "samples": 4271,
    "url": "https://cpu.userbenchmark.com/SpeedTest/114/AMD-FXtm-4170-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "HDT55TFBGRBOX",
    "brand": "AMD",
    "model": "Phenom II X6 1055T",
    "rank": 529,
    "benchmark": 58.6,
    "samples": 22739,
    "url": "https://cpu.userbenchmark.com/AMD-Phenom-II-X6-1055T/Rating/2003"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-5550U",
    "rank": 530,
    "benchmark": 58.5,
    "samples": 95,
    "url": "https://cpu.userbenchmark.com/SpeedTest/203876/IntelR-CoreTM-i7-5550U-CPU---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2120",
    "rank": 531,
    "benchmark": 58.4,
    "samples": 65151,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2227/IntelR-CoreTM-i3-2120-CPU---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G3460",
    "rank": 532,
    "benchmark": 58.4,
    "samples": 1061,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G3460/Rating/2818"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-10110U",
    "rank": 533,
    "benchmark": 58.4,
    "samples": 3849,
    "url": "https://cpu.userbenchmark.com/SpeedTest/915083/IntelR-CoreTM-i3-10110U-CPU---210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3470T",
    "rank": 534,
    "benchmark": 58.3,
    "samples": 2708,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2220/IntelR-CoreTM-i5-3470T-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4200H",
    "rank": 535,
    "benchmark": 58.3,
    "samples": 9340,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8854/IntelR-CoreTM-i5-4200H-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD220GC6FBBOX",
    "brand": "AMD",
    "model": "Athlon 220GE",
    "rank": 536,
    "benchmark": 58.2,
    "samples": 445,
    "url": "https://cpu.userbenchmark.com/SpeedTest/700311/AMD-Athlon-220GE-with-Radeon-Vega-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-6790K APU (2013 D.Ri)",
    "rank": 537,
    "benchmark": 58.2,
    "samples": 1897,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13499/AMD-A10-6790K-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X5470",
    "rank": 538,
    "benchmark": 58.2,
    "samples": 1417,
    "url": "https://cpu.userbenchmark.com/SpeedTest/14102/IntelR-XeonR-CPU-----------X5470----333GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4600M",
    "rank": 539,
    "benchmark": 58.2,
    "samples": 5383,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4429/IntelR-CoreTM-i7-4600M-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 960T",
    "rank": 540,
    "benchmark": 57.9,
    "samples": 3562,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1813/AMD-Phenomtm-II-X4-960T-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-7500U",
    "rank": 541,
    "benchmark": 57.8,
    "samples": 123592,
    "url": "https://cpu.userbenchmark.com/SpeedTest/171274/IntelR-CoreTM-i7-7500U-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core X 920",
    "rank": 542,
    "benchmark": 57.8,
    "samples": 69,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7179/IntelR-CoreTM-CPU----------X-920----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2675QM",
    "rank": 543,
    "benchmark": 57.7,
    "samples": 918,
    "url": "https://cpu.userbenchmark.com/SpeedTest/597/IntelR-CoreTM-i7-2675QM-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "HDZ955FBGMBOX",
    "brand": "AMD",
    "model": "Phenom II X4 955",
    "rank": 544,
    "benchmark": 57.7,
    "samples": 35084,
    "url": "https://cpu.userbenchmark.com/AMD-Phenom-II-X4-955/Rating/2935"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "FX-6120 Six-Core",
    "rank": 545,
    "benchmark": 57.7,
    "samples": 1581,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7026/AMD-FXtm-6120-Six-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "FD4300WMHKBOX",
    "brand": "AMD",
    "model": "FX-4300",
    "rank": 546,
    "benchmark": 57.7,
    "samples": 44906,
    "url": "https://cpu.userbenchmark.com/AMD-FX-4300/Rating/2879"
  },
  {
    "type": "CPU",
    "part_number": "BX80646G3440",
    "brand": "Intel",
    "model": "Pentium G3440",
    "rank": 547,
    "benchmark": 57.7,
    "samples": 473,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G3440/Rating/2435"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-7600U",
    "rank": 548,
    "benchmark": 57.7,
    "samples": 10071,
    "url": "https://cpu.userbenchmark.com/SpeedTest/220838/IntelR-CoreTM-i7-7600U-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2635QM",
    "rank": 549,
    "benchmark": 57.6,
    "samples": 303,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12770/IntelR-CoreTM-i7-2635QM-CPU---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 20",
    "rank": 550,
    "benchmark": 57.5,
    "samples": 632,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4534/AMD-Phenomtm-II-X4-20-Processor"
  },
  {
    "type": "CPU",
    "part_number": "FF8062700837005",
    "brand": "Intel",
    "model": "Core i7-2630QM",
    "rank": 551,
    "benchmark": 57.5,
    "samples": 34670,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-2630QM/Rating/2729"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4558U",
    "rank": 552,
    "benchmark": 57.4,
    "samples": 680,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4092/IntelR-CoreTM-i7-4558U-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 B55",
    "rank": 553,
    "benchmark": 57.4,
    "samples": 3657,
    "url": "https://cpu.userbenchmark.com/SpeedTest/878/AMD-Phenomtm-II-X4-B55-Processor"
  },
  {
    "type": "CPU",
    "part_number": "FJ8067703282227",
    "brand": "Intel",
    "model": "Core i3-8130U",
    "rank": 554,
    "benchmark": 57.3,
    "samples": 20698,
    "url": "https://cpu.userbenchmark.com/SpeedTest/468020/IntelR-CoreTM-i3-8130U-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-8145U",
    "rank": 555,
    "benchmark": 57.2,
    "samples": 8290,
    "url": "https://cpu.userbenchmark.com/SpeedTest/616038/IntelR-CoreTM-i3-8145U-CPU---210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Extreme X9650",
    "rank": 556,
    "benchmark": 57.2,
    "samples": 1647,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2662/IntelR-CoreTM2-Extreme-CPU-X9650----300GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80662G4500",
    "brand": "Intel",
    "model": "Pentium G4500",
    "rank": 557,
    "benchmark": 57.2,
    "samples": 2993,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G4500/Rating/3538"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-5287U",
    "rank": 558,
    "benchmark": 57.1,
    "samples": 354,
    "url": "https://cpu.userbenchmark.com/SpeedTest/25610/IntelR-CoreTM-i5-5287U-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "FD6100WMGUSBX",
    "brand": "AMD",
    "model": "FX-6100",
    "rank": 559,
    "benchmark": 57.1,
    "samples": 33387,
    "url": "https://cpu.userbenchmark.com/AMD-FX-6100/Rating/1984"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X6 1045T",
    "rank": 560,
    "benchmark": 57.1,
    "samples": 4593,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1873/AMD-Phenomtm-II-X6-1045T-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3540M",
    "rank": 561,
    "benchmark": 57.1,
    "samples": 5098,
    "url": "https://cpu.userbenchmark.com/SpeedTest/921/IntelR-CoreTM-i7-3540M-CPU---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646G3430",
    "brand": "Intel",
    "model": "Pentium G3430",
    "rank": 562,
    "benchmark": 57,
    "samples": 220,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G3430/Rating/1969"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4258U",
    "rank": 563,
    "benchmark": 57,
    "samples": 1141,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5904/IntelR-CoreTM-i5-4258U-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2100",
    "rank": 564,
    "benchmark": 56.9,
    "samples": 49089,
    "url": "https://cpu.userbenchmark.com/SpeedTest/41/IntelR-CoreTM-i3-2100-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-4130T",
    "rank": 565,
    "benchmark": 56.9,
    "samples": 4122,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13080/IntelR-CoreTM-i3-4130T-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-7200U",
    "rank": 566,
    "benchmark": 56.9,
    "samples": 178324,
    "url": "https://cpu.userbenchmark.com/SpeedTest/153577/IntelR-CoreTM-i5-7200U-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3380M",
    "rank": 567,
    "benchmark": 56.8,
    "samples": 2329,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5308/IntelR-CoreTM-i5-3380M-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G3450",
    "rank": 568,
    "benchmark": 56.8,
    "samples": 1058,
    "url": "https://cpu.userbenchmark.com/SpeedTest/24201/IntelR-PentiumR-CPU-G3450---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3520M",
    "rank": 569,
    "benchmark": 56.7,
    "samples": 17547,
    "url": "https://cpu.userbenchmark.com/SpeedTest/50/IntelR-CoreTM-i7-3520M-CPU---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X6 1035T",
    "rank": 570,
    "benchmark": 56.7,
    "samples": 2065,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1603/AMD-Phenomtm-II-X6-1035T-Processor"
  },
  {
    "type": "CPU",
    "part_number": "BX80701G5900",
    "brand": "Intel",
    "model": "Celeron G5900",
    "rank": 571,
    "benchmark": 56.7,
    "samples": 164,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1187562/IntelR-CeleronR-G5900-CPU---340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-2609 0",
    "rank": 572,
    "benchmark": 56.6,
    "samples": 573,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2762/IntelR-XeonR-CPU-E5-2609-0---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-3220T",
    "rank": 573,
    "benchmark": 56.6,
    "samples": 1689,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2602/IntelR-CoreTM-i3-3220T-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 840T",
    "rank": 574,
    "benchmark": 56.5,
    "samples": 1002,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8545/AMD-Phenomtm-II-X4-840T-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 B50",
    "rank": 575,
    "benchmark": 56.3,
    "samples": 3037,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5205/AMD-Phenomtm-II-X4-B50-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 830",
    "rank": 576,
    "benchmark": 56.3,
    "samples": 1288,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2164/AMD-Phenomtm-II-X4-830-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 945",
    "rank": 577,
    "benchmark": 56.3,
    "samples": 12168,
    "url": "https://cpu.userbenchmark.com/SpeedTest/101/AMD-Phenomtm-II-X4-945-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3360M",
    "rank": 578,
    "benchmark": 56.2,
    "samples": 4914,
    "url": "https://cpu.userbenchmark.com/SpeedTest/701/IntelR-CoreTM-i5-3360M-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-6567U",
    "rank": 579,
    "benchmark": 56.1,
    "samples": 392,
    "url": "https://cpu.userbenchmark.com/SpeedTest/150864/IntelR-CoreTM-i7-6567U-CPU---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-6260U",
    "rank": 580,
    "benchmark": 56.1,
    "samples": 1600,
    "url": "https://cpu.userbenchmark.com/SpeedTest/37385/IntelR-CoreTM-i5-6260U-CPU---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-5257U",
    "rank": 581,
    "benchmark": 56.1,
    "samples": 2656,
    "url": "https://cpu.userbenchmark.com/SpeedTest/25441/IntelR-CoreTM-i5-5257U-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677G3950",
    "brand": "Intel",
    "model": "Celeron G3950",
    "rank": 582,
    "benchmark": 56,
    "samples": 199,
    "url": "https://cpu.userbenchmark.com/SpeedTest/242877/IntelR-CeleronR-CPU-G3950---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-6600K APU",
    "rank": 583,
    "benchmark": 56,
    "samples": 18591,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3344/AMD-A8-6600K-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 Q 840",
    "rank": 584,
    "benchmark": 55.9,
    "samples": 1078,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2642/IntelR-CoreTM-i7-CPU-------Q-840----187GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-5800B APU (2012 D.Tr)",
    "rank": 585,
    "benchmark": 55.9,
    "samples": 841,
    "url": "https://cpu.userbenchmark.com/SpeedTest/14080/AMD-A10-5800B-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-10210Y",
    "rank": 586,
    "benchmark": 55.8,
    "samples": 47,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1005724/IntelR-CoreTM-i5-10210Y-CPU---100GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4210M",
    "rank": 587,
    "benchmark": 55.8,
    "samples": 12619,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12839/IntelR-CoreTM-i5-4210M-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4300M",
    "rank": 588,
    "benchmark": 55.8,
    "samples": 9783,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5215/IntelR-CoreTM-i5-4300M-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD680KWOHLBOX",
    "brand": "AMD",
    "model": "A10-6800K APU (2013 D.Ri)",
    "rank": 589,
    "benchmark": 55.6,
    "samples": 11396,
    "url": "https://cpu.userbenchmark.com/AMD-A10-6800K-APU-2013-DRi/Rating/2936"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 X 920",
    "rank": 590,
    "benchmark": 55.6,
    "samples": 895,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4179/IntelR-CoreTM-i7-CPU-------X-920----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-7300U",
    "rank": 591,
    "benchmark": 55.6,
    "samples": 17060,
    "url": "https://cpu.userbenchmark.com/SpeedTest/223355/IntelR-CoreTM-i5-7300U-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646G3420",
    "brand": "Intel",
    "model": "Pentium G3420",
    "rank": 592,
    "benchmark": 55.6,
    "samples": 3755,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G3420/Rating/1968"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-6157U",
    "rank": 593,
    "benchmark": 55.5,
    "samples": 343,
    "url": "https://cpu.userbenchmark.com/SpeedTest/187565/IntelR-CoreTM-i3-6157U-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "YD200GC6FBBOX",
    "brand": "AMD",
    "model": "Athlon 200GE",
    "rank": 594,
    "benchmark": 55.5,
    "samples": 8566,
    "url": "https://cpu.userbenchmark.com/SpeedTest/592714/AMD-Athlon-200GE-with-Radeon-Vega-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-6167U",
    "rank": 595,
    "benchmark": 55.5,
    "samples": 22,
    "url": "https://cpu.userbenchmark.com/SpeedTest/175469/IntelR-CoreTM-i3-6167U-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-7130U",
    "rank": 596,
    "benchmark": 55.5,
    "samples": 3436,
    "url": "https://cpu.userbenchmark.com/SpeedTest/376899/IntelR-CoreTM-i3-7130U-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X4 760K (2013 D.Ri)",
    "rank": 597,
    "benchmark": 55.5,
    "samples": 5009,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9072/AMD-Athlontm-X4-760K-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3340M",
    "rank": 598,
    "benchmark": 55.5,
    "samples": 10583,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1915/IntelR-CoreTM-i5-3340M-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "FX-4100",
    "rank": 599,
    "benchmark": 55.5,
    "samples": 25262,
    "url": "https://cpu.userbenchmark.com/AMD-FX-4100/Rating/2878"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2640M",
    "rank": 600,
    "benchmark": 55.5,
    "samples": 10864,
    "url": "https://cpu.userbenchmark.com/SpeedTest/791/IntelR-CoreTM-i7-2640M-CPU---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-5650U",
    "rank": 601,
    "benchmark": 55.4,
    "samples": 201,
    "url": "https://cpu.userbenchmark.com/SpeedTest/26818/IntelR-CoreTM-i7-5650U-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "FX-4130 Quad-Core",
    "rank": 602,
    "benchmark": 55.4,
    "samples": 7953,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2420/AMD-FXtm-4130-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-7660U",
    "rank": 603,
    "benchmark": 55.3,
    "samples": 3207,
    "url": "https://cpu.userbenchmark.com/SpeedTest/274151/IntelR-CoreTM-i7-7660U-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 910e",
    "rank": 604,
    "benchmark": 55.2,
    "samples": 189,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10427/AMD-Phenomtm-II-X4-910e-Processor"
  },
  {
    "type": "CPU",
    "part_number": "BX80646G3258",
    "brand": "Intel",
    "model": "Pentium G3258",
    "rank": 605,
    "benchmark": 55.1,
    "samples": 18496,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G3258/Rating/2434"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 B45",
    "rank": 606,
    "benchmark": 55.1,
    "samples": 963,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4111/AMD-Phenomtm-II-X4-B45-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 3 3300U",
    "rank": 607,
    "benchmark": 55.1,
    "samples": 1687,
    "url": "https://cpu.userbenchmark.com/SpeedTest/827713/AMD-Ryzen-3-3300U-with-Radeon-Vega-Mobile-Gfx"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5507",
    "rank": 608,
    "benchmark": 55.1,
    "samples": 205,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13794/IntelR-XeonR-CPU-----------E5507----227GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4200M",
    "rank": 609,
    "benchmark": 55,
    "samples": 28548,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2341/IntelR-CoreTM-i5-4200M-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-10510Y",
    "rank": 610,
    "benchmark": 55,
    "samples": 14,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1048467/IntelR-CoreTM-i7-10510Y-CPU---120GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 925",
    "rank": 611,
    "benchmark": 55,
    "samples": 4592,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2581/AMD-Phenomtm-II-X4-925-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4510U",
    "rank": 612,
    "benchmark": 55,
    "samples": 51908,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10660/IntelR-CoreTM-i7-4510U-CPU---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-5500U",
    "rank": 613,
    "benchmark": 55,
    "samples": 68839,
    "url": "https://cpu.userbenchmark.com/SpeedTest/22316/IntelR-CoreTM-i7-5500U-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD580KWOHJBOX",
    "brand": "AMD",
    "model": "A10-5800K APU (2012 D.Tr)",
    "rank": 614,
    "benchmark": 54.9,
    "samples": 16873,
    "url": "https://cpu.userbenchmark.com/AMD-A10-5800K-APU-2012-DTr/Rating/2007"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-2680 v2",
    "rank": 615,
    "benchmark": 54.9,
    "samples": 39,
    "url": "https://cpu.userbenchmark.com/SpeedTest/17083/IntelR-XeonR-CPU-E5-2680-v2---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-6500U",
    "rank": 616,
    "benchmark": 54.8,
    "samples": 92435,
    "url": "https://cpu.userbenchmark.com/SpeedTest/36930/IntelR-CoreTM-i7-6500U-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-7560U",
    "rank": 617,
    "benchmark": 54.8,
    "samples": 1306,
    "url": "https://cpu.userbenchmark.com/SpeedTest/262014/IntelR-CoreTM-i7-7560U-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2620M",
    "rank": 618,
    "benchmark": 54.7,
    "samples": 13436,
    "url": "https://cpu.userbenchmark.com/SpeedTest/643/IntelR-CoreTM-i7-2620M-CPU---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD750KWOHJBOX",
    "brand": "AMD",
    "model": "Athlon II X4 750K",
    "rank": 619,
    "benchmark": 54.7,
    "samples": 4529,
    "url": "https://cpu.userbenchmark.com/AMD-Athlon-II-X4-750K/Rating/1548"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G2120",
    "rank": 620,
    "benchmark": 54.6,
    "samples": 1496,
    "url": "https://cpu.userbenchmark.com/SpeedTest/448/IntelR-PentiumR-CPU-G2120---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G2130",
    "rank": 621,
    "benchmark": 54.6,
    "samples": 1653,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9126/IntelR-PentiumR-CPU-G2130---320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2120T",
    "rank": 622,
    "benchmark": 54.5,
    "samples": 921,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2686/IntelR-CoreTM-i3-2120T-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 B40",
    "rank": 623,
    "benchmark": 54.5,
    "samples": 432,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9803/AMD-Phenomtm-II-X4-B40-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X5472",
    "rank": 624,
    "benchmark": 54.5,
    "samples": 302,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3914/IntelR-XeonR-CPU-----------X5472----300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad Q9650",
    "rank": 625,
    "benchmark": 54.4,
    "samples": 13828,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1706/IntelR-CoreTM2-Quad-CPU----Q9650----300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-5600U",
    "rank": 626,
    "benchmark": 54.4,
    "samples": 16155,
    "url": "https://cpu.userbenchmark.com/SpeedTest/22612/IntelR-CoreTM-i7-5600U-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 940",
    "rank": 627,
    "benchmark": 54.4,
    "samples": 3047,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2203/AMD-Phenomtm-II-X4-940-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X5460",
    "rank": 628,
    "benchmark": 54.3,
    "samples": 8210,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5754/IntelR-XeonR-CPU-----------X5460----316GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80701G5920",
    "brand": "Intel",
    "model": "Celeron G5920",
    "rank": 629,
    "benchmark": 54.3,
    "samples": 21,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1197531/IntelR-CeleronR-G5920-CPU---350GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4500U",
    "rank": 630,
    "benchmark": 54.2,
    "samples": 34287,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i7-4500U/Rating/2743"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 905e",
    "rank": 631,
    "benchmark": 54.2,
    "samples": 311,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3420/AMD-Phenomtm-II-X4-905e-Processor"
  },
  {
    "type": "CPU",
    "part_number": "AD6700OKHLBOX",
    "brand": "AMD",
    "model": "A10-6700 APU (2013 D.Ri)",
    "rank": 632,
    "benchmark": 54.2,
    "samples": 8934,
    "url": "https://cpu.userbenchmark.com/AMD-A10-6700-APU-2013-DRi/Rating/2938"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5450",
    "rank": 633,
    "benchmark": 54.2,
    "samples": 9853,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5890/IntelR-XeonR-CPU-----------E5450----300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4600U",
    "rank": 634,
    "benchmark": 54.2,
    "samples": 20275,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2752/IntelR-CoreTM-i7-4600U-CPU---210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5472",
    "rank": 635,
    "benchmark": 54.2,
    "samples": 684,
    "url": "https://cpu.userbenchmark.com/SpeedTest/20269/IntelR-XeonR-CPU-----------E5472----300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 850",
    "rank": 636,
    "benchmark": 54.1,
    "samples": 1232,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3577/AMD-Phenomtm-II-X4-850-Processor"
  },
  {
    "type": "CPU",
    "part_number": "AW8063801208001",
    "brand": "Intel",
    "model": "Core i5-3230M",
    "rank": 637,
    "benchmark": 54.1,
    "samples": 54118,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-3230M/Rating/2772"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-6600U",
    "rank": 638,
    "benchmark": 54,
    "samples": 25153,
    "url": "https://cpu.userbenchmark.com/SpeedTest/36828/IntelR-CoreTM-i7-6600U-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5506",
    "rank": 639,
    "benchmark": 53.9,
    "samples": 612,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11152/IntelR-XeonR-CPU-----------E5506----213GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2540M",
    "rank": 640,
    "benchmark": 53.9,
    "samples": 14729,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1616/IntelR-CoreTM-i5-2540M-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80662G4400",
    "brand": "Intel",
    "model": "Pentium G4400",
    "rank": 641,
    "benchmark": 53.9,
    "samples": 28977,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G4400/Rating/3539"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3687U",
    "rank": 642,
    "benchmark": 53.9,
    "samples": 2540,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2934/IntelR-CoreTM-i7-3687U-CPU---210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 920",
    "rank": 643,
    "benchmark": 53.8,
    "samples": 927,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1945/AMD-Phenomtm-II-X4-920-Processor"
  },
  {
    "type": "CPU",
    "part_number": "AW8063801032301",
    "brand": "Intel",
    "model": "Core i5-3210M",
    "rank": 644,
    "benchmark": 53.8,
    "samples": 68529,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-3210M/Rating/2719"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-5600K APU",
    "rank": 645,
    "benchmark": 53.8,
    "samples": 13565,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1766/AMD-A8-5600K-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G3260",
    "rank": 646,
    "benchmark": 53.8,
    "samples": 8357,
    "url": "https://cpu.userbenchmark.com/SpeedTest/31434/IntelR-PentiumR-CPU-G3260---330GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X4 651",
    "rank": 647,
    "benchmark": 53.8,
    "samples": 889,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3526/AMD-Athlontm-II-X4-651-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3320M",
    "rank": 648,
    "benchmark": 53.8,
    "samples": 38139,
    "url": "https://cpu.userbenchmark.com/SpeedTest/402/IntelR-CoreTM-i5-3320M-CPU---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80684G4900",
    "brand": "Intel",
    "model": "Celeron G4900",
    "rank": 649,
    "benchmark": 53.8,
    "samples": 1559,
    "url": "https://cpu.userbenchmark.com/SpeedTest/482751/IntelR-CeleronR-G4900-CPU---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 5 3500U",
    "rank": 650,
    "benchmark": 53.7,
    "samples": 52043,
    "url": "https://cpu.userbenchmark.com/SpeedTest/760067/AMD-Ryzen-5-3500U-with-Radeon-Vega-Mobile-Gfx"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2435M",
    "rank": 651,
    "benchmark": 53.5,
    "samples": 459,
    "url": "https://cpu.userbenchmark.com/SpeedTest/968/IntelR-CoreTM-i5-2435M-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 7 3700U",
    "rank": 652,
    "benchmark": 53.4,
    "samples": 14590,
    "url": "https://cpu.userbenchmark.com/SpeedTest/765724/AMD-Ryzen-7-3700U-with-Radeon-Vega-Mobile-Gfx"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X5450",
    "rank": 653,
    "benchmark": 53.4,
    "samples": 4788,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5169/IntelR-XeonR-CPU-----------X5450----300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 Q 740",
    "rank": 654,
    "benchmark": 53.3,
    "samples": 9975,
    "url": "https://cpu.userbenchmark.com/SpeedTest/415/IntelR-CoreTM-i7-CPU-------Q-740----173GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 810",
    "rank": 655,
    "benchmark": 53.2,
    "samples": 1941,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4242/AMD-Phenomtm-II-X4-810-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3537U",
    "rank": 656,
    "benchmark": 53.2,
    "samples": 14137,
    "url": "https://cpu.userbenchmark.com/SpeedTest/504/IntelR-CoreTM-i7-3537U-CPU---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646G1830",
    "brand": "Intel",
    "model": "Celeron G1830",
    "rank": 657,
    "benchmark": 53.1,
    "samples": 166,
    "url": "https://cpu.userbenchmark.com/Intel-Celeron-G1830/Rating/2848"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G3250",
    "rank": 658,
    "benchmark": 53.1,
    "samples": 9141,
    "url": "https://cpu.userbenchmark.com/SpeedTest/18077/IntelR-PentiumR-CPU-G3250---320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-6500 APU",
    "rank": 659,
    "benchmark": 53.1,
    "samples": 5908,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5272/AMD-A8-6500-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "BX80646G3240",
    "brand": "Intel",
    "model": "Pentium G3240",
    "rank": 660,
    "benchmark": 53,
    "samples": 8328,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G3240/Rating/2820"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-6650U",
    "rank": 661,
    "benchmark": 53,
    "samples": 4713,
    "url": "https://cpu.userbenchmark.com/SpeedTest/40238/IntelR-CoreTM-i7-6650U-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G870",
    "rank": 662,
    "benchmark": 52.9,
    "samples": 1357,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9348/IntelR-PentiumR-CPU-G870---310GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-6300U",
    "rank": 663,
    "benchmark": 52.8,
    "samples": 41530,
    "url": "https://cpu.userbenchmark.com/SpeedTest/27864/IntelR-CoreTM-i5-6300U-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 7 2700U",
    "rank": 664,
    "benchmark": 52.8,
    "samples": 6096,
    "url": "https://cpu.userbenchmark.com/SpeedTest/432558/AMD-Ryzen-7-2700U-with-Radeon-Vega-Mobile-Gfx"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 5 2500U",
    "rank": 665,
    "benchmark": 52.8,
    "samples": 50159,
    "url": "https://cpu.userbenchmark.com/SpeedTest/378273/AMD-Ryzen-5-2500U-with-Radeon-Vega-Mobile-Gfx"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 3 2300U",
    "rank": 666,
    "benchmark": 52.8,
    "samples": 2768,
    "url": "https://cpu.userbenchmark.com/SpeedTest/511816/AMD-Ryzen-3-2300U-with-Radeon-Vega-Mobile-Gfx"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-6200U",
    "rank": 667,
    "benchmark": 52.8,
    "samples": 124101,
    "url": "https://cpu.userbenchmark.com/SpeedTest/36796/IntelR-CoreTM-i5-6200U-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646G1850",
    "brand": "Intel",
    "model": "Celeron G1850",
    "rank": 668,
    "benchmark": 52.8,
    "samples": 314,
    "url": "https://cpu.userbenchmark.com/Intel-Celeron-G1850/Rating/2850"
  },
  {
    "type": "CPU",
    "part_number": "BX80646G3220",
    "brand": "Intel",
    "model": "Pentium G3220",
    "rank": 669,
    "benchmark": 52.7,
    "samples": 16389,
    "url": "https://cpu.userbenchmark.com/Intel-Pentium-G3220/Rating/1967"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2520M",
    "rank": 670,
    "benchmark": 52.7,
    "samples": 40639,
    "url": "https://cpu.userbenchmark.com/SpeedTest/29/IntelR-CoreTM-i5-2520M-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 Q 820",
    "rank": 671,
    "benchmark": 52.7,
    "samples": 1855,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3571/IntelR-CoreTM-i7-CPU-------Q-820----173GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-4000M",
    "rank": 672,
    "benchmark": 52.7,
    "samples": 6171,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6476/IntelR-CoreTM-i3-4000M-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G860",
    "rank": 673,
    "benchmark": 52.7,
    "samples": 3010,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2650/IntelR-PentiumR-CPU-G860---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD789KXDJCHBX",
    "brand": "AMD",
    "model": "A10-7890K APU (2014 D.Ka)",
    "rank": 674,
    "benchmark": 52.6,
    "samples": 5859,
    "url": "https://cpu.userbenchmark.com/SpeedTest/118648/AMD-A10-7890K-Radeon-R7-12-Compute-Cores-4C-8G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad Q9550",
    "rank": 675,
    "benchmark": 52.6,
    "samples": 30401,
    "url": "https://cpu.userbenchmark.com/SpeedTest/334/IntelR-CoreTM2-Quad-CPU----Q9550----283GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3517U",
    "rank": 676,
    "benchmark": 52.6,
    "samples": 7534,
    "url": "https://cpu.userbenchmark.com/SpeedTest/663/IntelR-CoreTM-i7-3517U-CPU---190GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2450M",
    "rank": 677,
    "benchmark": 52.5,
    "samples": 38941,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-2450M/Rating/2815"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-3120M",
    "rank": 678,
    "benchmark": 52.4,
    "samples": 12760,
    "url": "https://cpu.userbenchmark.com/SpeedTest/923/IntelR-CoreTM-i3-3120M-CPU---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G840",
    "rank": 679,
    "benchmark": 52.4,
    "samples": 2249,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3067/IntelR-PentiumR-CPU-G840---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G850",
    "rank": 680,
    "benchmark": 52.3,
    "samples": 2306,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2522/IntelR-PentiumR-CPU-G850---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 Q 720",
    "rank": 681,
    "benchmark": 52.3,
    "samples": 14611,
    "url": "https://cpu.userbenchmark.com/SpeedTest/140/IntelR-CoreTM-i7-CPU-------Q-720----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4310U",
    "rank": 682,
    "benchmark": 52.3,
    "samples": 11289,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12941/IntelR-CoreTM-i5-4310U-CPU---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad Q9450",
    "rank": 683,
    "benchmark": 52.2,
    "samples": 5219,
    "url": "https://cpu.userbenchmark.com/SpeedTest/765/IntelR-CoreTM2-Quad--CPU---Q9450----266GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-7100U",
    "rank": 684,
    "benchmark": 52.2,
    "samples": 31539,
    "url": "https://cpu.userbenchmark.com/SpeedTest/176913/IntelR-CoreTM-i3-7100U-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5504",
    "rank": 685,
    "benchmark": 52.2,
    "samples": 427,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6261/IntelR-XeonR-CPU-----------E5504----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-7670K APU (2014 D.Ka)",
    "rank": 686,
    "benchmark": 52.1,
    "samples": 1545,
    "url": "https://cpu.userbenchmark.com/SpeedTest/37178/AMD-A8-7670K-Radeon-R7-10-Compute-Cores-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4650U",
    "rank": 687,
    "benchmark": 52.1,
    "samples": 3731,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6364/IntelR-CoreTM-i7-4650U-CPU---170GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4300U",
    "rank": 688,
    "benchmark": 52,
    "samples": 30998,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4996/IntelR-CoreTM-i5-4300U-CPU---190GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5440",
    "rank": 689,
    "benchmark": 52,
    "samples": 2706,
    "url": "https://cpu.userbenchmark.com/SpeedTest/18165/IntelR-XeonR-CPU-----------E5440----283GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-6100U",
    "rank": 690,
    "benchmark": 51.9,
    "samples": 23171,
    "url": "https://cpu.userbenchmark.com/SpeedTest/37381/IntelR-CoreTM-i3-6100U-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G2030",
    "rank": 691,
    "benchmark": 51.9,
    "samples": 15167,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3273/IntelR-PentiumR-CPU-G2030---300GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD5700OKHJBOX",
    "brand": "AMD",
    "model": "A10-5700 APU (2012 D.Tr)",
    "rank": 692,
    "benchmark": 51.9,
    "samples": 5432,
    "url": "https://cpu.userbenchmark.com/AMD-A10-5700-APU-2012-DTr/Rating/2939"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X4 641",
    "rank": 693,
    "benchmark": 51.8,
    "samples": 930,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1698/AMD-Athlontm-II-X4-641-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "AD787KXDJCBOX",
    "brand": "AMD",
    "model": "A10-7870K APU (2014 D.Ka)",
    "rank": 694,
    "benchmark": 51.8,
    "samples": 9688,
    "url": "https://cpu.userbenchmark.com/SpeedTest/29728/AMD-A10-7870K-Radeon-R7-12-Compute-Cores-4C-8G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G645",
    "rank": 695,
    "benchmark": 51.7,
    "samples": 4598,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3264/IntelR-PentiumR-CPU-G645---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X4 645",
    "rank": 696,
    "benchmark": 51.7,
    "samples": 4544,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2408/AMD-Athlontm-II-X4-645-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X4 740K",
    "rank": 697,
    "benchmark": 51.6,
    "samples": 3811,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4559/AMD-Athlontm-X4-740-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 680",
    "rank": 698,
    "benchmark": 51.6,
    "samples": 672,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3693/IntelR-CoreTM-i5-CPU---------680----360GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2415M",
    "rank": 699,
    "benchmark": 51.5,
    "samples": 553,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4223/IntelR-CoreTM-i5-2415M-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2637M",
    "rank": 700,
    "benchmark": 51.5,
    "samples": 530,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5436/IntelR-CoreTM-i7-2637M-CPU---170GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4250U",
    "rank": 701,
    "benchmark": 51.5,
    "samples": 1482,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1787/IntelR-CoreTM-i5-4250U-CPU---130GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-2677M",
    "rank": 702,
    "benchmark": 51.5,
    "samples": 622,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4939/IntelR-CoreTM-i7-2677M-CPU---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD785KXBJABOX",
    "brand": "AMD",
    "model": "A10-7850K APU (2014 D.Ka)",
    "rank": 703,
    "benchmark": 51.4,
    "samples": 17018,
    "url": "https://cpu.userbenchmark.com/AMD-A10-7850K-APU-2014-DKa/Rating/2937"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4210U",
    "rank": 704,
    "benchmark": 51.4,
    "samples": 69381,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12662/IntelR-CoreTM-i5-4210U-CPU---170GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-3110M",
    "rank": 705,
    "benchmark": 51.3,
    "samples": 29833,
    "url": "https://cpu.userbenchmark.com/SpeedTest/844/IntelR-CoreTM-i3-3110M-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2430M",
    "rank": 706,
    "benchmark": 51.3,
    "samples": 32107,
    "url": "https://cpu.userbenchmark.com/SpeedTest/429/IntelR-CoreTM-i5-2430M-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80662G3900",
    "brand": "Intel",
    "model": "Celeron G3900",
    "rank": 707,
    "benchmark": 51.3,
    "samples": 5345,
    "url": "https://cpu.userbenchmark.com/SpeedTest/86156/IntelR-CeleronR-CPU-G3900---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD880KXBJCSBX",
    "brand": "AMD",
    "model": "Athlon X4 880K",
    "rank": 708,
    "benchmark": 51.3,
    "samples": 7911,
    "url": "https://cpu.userbenchmark.com/SpeedTest/121029/AMD-Athlontm-X4-880K-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "AD5500OKHJBOX",
    "brand": "AMD",
    "model": "A8-5500 APU",
    "rank": 709,
    "benchmark": 51.2,
    "samples": 9093,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3432/AMD-A8-5500-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-4550U",
    "rank": 710,
    "benchmark": 51.2,
    "samples": 273,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6199/IntelR-CoreTM-i7-4550U-CPU---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5430",
    "rank": 711,
    "benchmark": 51.2,
    "samples": 2011,
    "url": "https://cpu.userbenchmark.com/SpeedTest/16038/IntelR-XeonR-CPU-----------E5430----266GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3667U",
    "rank": 712,
    "benchmark": 51.2,
    "samples": 2906,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2815/IntelR-CoreTM-i7-3667U-CPU---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G2020",
    "rank": 713,
    "benchmark": 51.1,
    "samples": 12488,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3604/IntelR-PentiumR-CPU-G2020---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X4 840",
    "rank": 714,
    "benchmark": 51.1,
    "samples": 5608,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3302/AMD-Phenomtm-II-X4-840-Processor"
  },
  {
    "type": "CPU",
    "part_number": "AD870KXBJCSBX",
    "brand": "AMD",
    "model": "Athlon II X4 870K",
    "rank": 715,
    "benchmark": 51.1,
    "samples": 1536,
    "url": "https://cpu.userbenchmark.com/SpeedTest/83847/AMD-Athlontm-X4-870K-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-5300U",
    "rank": 716,
    "benchmark": 51,
    "samples": 22527,
    "url": "https://cpu.userbenchmark.com/SpeedTest/16790/IntelR-CoreTM-i5-5300U-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2410M",
    "rank": 717,
    "benchmark": 51,
    "samples": 38902,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-2410M/Rating/2769"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4200U",
    "rank": 718,
    "benchmark": 51,
    "samples": 45657,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-4200U/Rating/2742"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad Q9505",
    "rank": 719,
    "benchmark": 51,
    "samples": 1893,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3041/IntelR-CoreTM2-Quad-CPU----Q9505----283GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G2010",
    "rank": 720,
    "benchmark": 50.9,
    "samples": 2333,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8691/IntelR-PentiumR-CPU-G2010---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5462",
    "rank": 721,
    "benchmark": 50.9,
    "samples": 575,
    "url": "https://cpu.userbenchmark.com/SpeedTest/16556/IntelR-XeonR-CPU-----------E5462----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X3 720",
    "rank": 722,
    "benchmark": 50.9,
    "samples": 2326,
    "url": "https://cpu.userbenchmark.com/SpeedTest/326/AMD-Phenomtm-II-X3-720-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-3870 APU",
    "rank": 723,
    "benchmark": 50.8,
    "samples": 5073,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3870/AMD-A8-3870-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-5200U",
    "rank": 724,
    "benchmark": 50.8,
    "samples": 97812,
    "url": "https://cpu.userbenchmark.com/SpeedTest/22169/IntelR-CoreTM-i5-5200U-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron G1620",
    "rank": 725,
    "benchmark": 50.8,
    "samples": 2277,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6930/IntelR-CeleronR-CPU-G1620---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80677G3930",
    "brand": "Intel",
    "model": "Celeron G3930",
    "rank": 726,
    "benchmark": 50.8,
    "samples": 6877,
    "url": "https://cpu.userbenchmark.com/SpeedTest/235058/IntelR-CeleronR-CPU-G3930---290GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD860KXBJASBX",
    "brand": "AMD",
    "model": "Athlon II X4 860K",
    "rank": 727,
    "benchmark": 50.8,
    "samples": 19245,
    "url": "https://cpu.userbenchmark.com/AMD-Athlon-II-X4-860K/Rating/3265"
  },
  {
    "type": "CPU",
    "part_number": "BX80646G1820",
    "brand": "Intel",
    "model": "Celeron G1820",
    "rank": 728,
    "benchmark": 50.7,
    "samples": 3265,
    "url": "https://cpu.userbenchmark.com/Intel-Celeron-G1820/Rating/1992"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3337U",
    "rank": 729,
    "benchmark": 50.7,
    "samples": 27516,
    "url": "https://cpu.userbenchmark.com/SpeedTest/737/IntelR-CoreTM-i5-3337U-CPU---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80646G1840",
    "brand": "Intel",
    "model": "Celeron G1840",
    "rank": 730,
    "benchmark": 50.7,
    "samples": 6007,
    "url": "https://cpu.userbenchmark.com/Intel-Celeron-G1840/Rating/2849"
  },
  {
    "type": "CPU",
    "part_number": "FJ8067702739932",
    "brand": "Intel",
    "model": "Pentium 4415U",
    "rank": 731,
    "benchmark": 50.7,
    "samples": 4833,
    "url": "https://cpu.userbenchmark.com/SpeedTest/267685/IntelR-PentiumR-CPU-4415U---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-3850 APU",
    "rank": 732,
    "benchmark": 50.6,
    "samples": 2718,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4311/AMD-A8-3850-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Extreme Q6850",
    "rank": 733,
    "benchmark": 50.6,
    "samples": 969,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7118/IntelR-CoreTM2-Extreme-CPU-Q6850----300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 K 655",
    "rank": 734,
    "benchmark": 50.6,
    "samples": 336,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9077/IntelR-CoreTM-i5-CPU-------K-655----320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad Q9500",
    "rank": 735,
    "benchmark": 50.6,
    "samples": 3699,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1778/IntelR-CoreTM2-Quad-CPU----Q9500----283GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon W3505",
    "rank": 736,
    "benchmark": 50.5,
    "samples": 614,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12714/IntelR-XeonR-CPU-----------W3505----253GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 5405U",
    "rank": 737,
    "benchmark": 50.5,
    "samples": 667,
    "url": "https://cpu.userbenchmark.com/SpeedTest/767922/IntelR-PentiumR-CPU-5405U---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X4 631",
    "rank": 738,
    "benchmark": 50.4,
    "samples": 1174,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2944/AMD-Athlontm-II-X4-631-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-3670 APU",
    "rank": 739,
    "benchmark": 50.3,
    "samples": 2132,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4657/AMD-A6-3670-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "AD9800AUABBOX",
    "brand": "AMD",
    "model": "A12-9800 APU (2016 M.BR)",
    "rank": 740,
    "benchmark": 50.3,
    "samples": 3135,
    "url": "https://cpu.userbenchmark.com/SpeedTest/283761/AMD-A12-9800-RADEON-R7-12-COMPUTE-CORES-4C-8G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-5250U",
    "rank": 741,
    "benchmark": 50.3,
    "samples": 3867,
    "url": "https://cpu.userbenchmark.com/SpeedTest/24945/IntelR-CoreTM-i5-5250U-CPU---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-7020U",
    "rank": 742,
    "benchmark": 50.3,
    "samples": 19702,
    "url": "https://cpu.userbenchmark.com/SpeedTest/576199/IntelR-CoreTM-i3-7020U-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-2603 0",
    "rank": 743,
    "benchmark": 50.2,
    "samples": 197,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4629/IntelR-XeonR-CPU-E5-2603-0---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2370M",
    "rank": 744,
    "benchmark": 50.2,
    "samples": 8115,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1959/IntelR-CoreTM-i3-2370M-CPU---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3437U",
    "rank": 745,
    "benchmark": 50.2,
    "samples": 3027,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4219/IntelR-CoreTM-i5-3437U-CPU---190GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom 9950",
    "rank": 746,
    "benchmark": 50.1,
    "samples": 1902,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2758/AMD-Phenomtm-9950-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon L5420",
    "rank": 747,
    "benchmark": 50.1,
    "samples": 1067,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10433/IntelR-XeonR-CPU-----------L5420----250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X4 635",
    "rank": 748,
    "benchmark": 50.1,
    "samples": 4349,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3369/AMD-Athlontm-II-X4-635-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E7- 4870",
    "rank": 749,
    "benchmark": 50.1,
    "samples": 27,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8256/IntelR-XeonR-CPU-E7--4870----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-7500 APU (2014 M.Ka)",
    "rank": 750,
    "benchmark": 50.1,
    "samples": 233,
    "url": "https://cpu.userbenchmark.com/SpeedTest/60388/AMD-A8-7500-Radeon-R7-10-Compute-Cores-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3317U",
    "rank": 751,
    "benchmark": 50.1,
    "samples": 22921,
    "url": "https://cpu.userbenchmark.com/Intel-Core-i5-3317U/Rating/2744"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X2 565",
    "rank": 752,
    "benchmark": 50,
    "samples": 312,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2173/AMD-Phenomtm-II-X2-565-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X4 640",
    "rank": 753,
    "benchmark": 50,
    "samples": 15902,
    "url": "https://cpu.userbenchmark.com/SpeedTest/225/AMD-Athlontm-II-X4-640-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X3 460",
    "rank": 754,
    "benchmark": 49.9,
    "samples": 970,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6695/AMD-Athlontm-II-X3-460-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 661",
    "rank": 755,
    "benchmark": 49.9,
    "samples": 1988,
    "url": "https://cpu.userbenchmark.com/SpeedTest/548/IntelR-CoreTM-i5-CPU---------661----333GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD765KXBJABOX",
    "brand": "AMD",
    "model": "A8-7650K APU (2014 D.Ka)",
    "rank": 756,
    "benchmark": 49.9,
    "samples": 9523,
    "url": "https://cpu.userbenchmark.com/SpeedTest/27184/AMD-A8-7650K-Radeon-R7-10-Compute-Cores-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 3550M",
    "rank": 757,
    "benchmark": 49.9,
    "samples": 544,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9225/IntelR-PentiumR-CPU-3550M---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 4417U",
    "rank": 758,
    "benchmark": 49.8,
    "samples": 1866,
    "url": "https://cpu.userbenchmark.com/SpeedTest/747524/IntelR-PentiumR-CPU-4417U---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-7700K APU (2014 D.Ka)",
    "rank": 759,
    "benchmark": 49.7,
    "samples": 9546,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9888/AMD-A10-7700K-APU-with-RadeonTM-R7-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "AD845XACKASBX",
    "brand": "AMD",
    "model": "Athlon X4 845",
    "rank": 760,
    "benchmark": 49.7,
    "samples": 5726,
    "url": "https://cpu.userbenchmark.com/SpeedTest/84491/AMD-Athlontm-X4-845-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2557M",
    "rank": 761,
    "benchmark": 49.7,
    "samples": 565,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5422/IntelR-CoreTM-i5-2557M-CPU---170GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2348M",
    "rank": 762,
    "benchmark": 49.7,
    "samples": 4193,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2278/IntelR-CoreTM-i3-2348M-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-5010U",
    "rank": 763,
    "benchmark": 49.6,
    "samples": 8635,
    "url": "https://cpu.userbenchmark.com/SpeedTest/23565/IntelR-CoreTM-i3-5010U-CPU---210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3427U",
    "rank": 764,
    "benchmark": 49.6,
    "samples": 3509,
    "url": "https://cpu.userbenchmark.com/SpeedTest/909/IntelR-CoreTM-i5-3427U-CPU---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-3689Y",
    "rank": 765,
    "benchmark": 49.6,
    "samples": 39,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4592/IntelR-CoreTM-i7-3689Y-CPU---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom 9850",
    "rank": 766,
    "benchmark": 49.6,
    "samples": 1962,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2967/AMD-Phenomtm-9850-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X3 710",
    "rank": 767,
    "benchmark": 49.6,
    "samples": 814,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2275/AMD-Phenomtm-II-X3-710-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon W3503",
    "rank": 768,
    "benchmark": 49.5,
    "samples": 1421,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3723/IntelR-XeonR-CPU-----------W3503----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-8500Y",
    "rank": 769,
    "benchmark": 49.2,
    "samples": 463,
    "url": "https://cpu.userbenchmark.com/SpeedTest/590466/IntelR-CoreTM-i7-8500Y-CPU---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Extreme Q9300",
    "rank": 770,
    "benchmark": 49.2,
    "samples": 587,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4063/IntelR-CoreTM2-Extreme-CPU-Q9300----253GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad Q9400",
    "rank": 771,
    "benchmark": 49.2,
    "samples": 20172,
    "url": "https://cpu.userbenchmark.com/SpeedTest/244/IntelR-CoreTM2-Quad-CPU----Q9400----266GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD786KYBJCSBX",
    "brand": "AMD",
    "model": "A10-7860K APU (2014 D.Ka)",
    "rank": 772,
    "benchmark": 49.2,
    "samples": 9293,
    "url": "https://cpu.userbenchmark.com/SpeedTest/83781/AMD-A10-7860K-Radeon-R7-12-Compute-Cores-4C-8G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G640",
    "rank": 773,
    "benchmark": 49.1,
    "samples": 2234,
    "url": "https://cpu.userbenchmark.com/SpeedTest/618/IntelR-PentiumR-CPU-G640---280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X4 630",
    "rank": 774,
    "benchmark": 49,
    "samples": 6729,
    "url": "https://cpu.userbenchmark.com/SpeedTest/471/AMD-Athlontm-II-X4-630-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2350M",
    "rank": 775,
    "benchmark": 49,
    "samples": 20192,
    "url": "https://cpu.userbenchmark.com/SpeedTest/934/IntelR-CoreTM-i3-2350M-CPU---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X3 455",
    "rank": 776,
    "benchmark": 48.9,
    "samples": 3010,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1884/AMD-Athlontm-II-X3-455-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2330M",
    "rank": 777,
    "benchmark": 48.9,
    "samples": 15971,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1853/IntelR-CoreTM-i3-2330M-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron G1610",
    "rank": 778,
    "benchmark": 48.9,
    "samples": 4387,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3109/IntelR-CeleronR-CPU-G1610---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "FX-770K (2014 D.Ka)",
    "rank": 779,
    "benchmark": 48.8,
    "samples": 1184,
    "url": "https://cpu.userbenchmark.com/SpeedTest/18603/AMD-FXtm-770K-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X2 560",
    "rank": 780,
    "benchmark": 48.8,
    "samples": 1598,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5408/AMD-Phenomtm-II-X2-560-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 660",
    "rank": 781,
    "benchmark": 48.8,
    "samples": 4834,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2846/IntelR-CoreTM-i5-CPU---------660----333GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core m3-8100Y",
    "rank": 782,
    "benchmark": 48.8,
    "samples": 685,
    "url": "https://cpu.userbenchmark.com/SpeedTest/648336/IntelR-CoreTM-m3-8100Y-CPU---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2328M",
    "rank": 783,
    "benchmark": 48.8,
    "samples": 7124,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2488/IntelR-CoreTM-i3-2328M-CPU---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "FJ8066201930905",
    "brand": "Intel",
    "model": "Pentium 4405U",
    "rank": 784,
    "benchmark": 48.8,
    "samples": 2839,
    "url": "https://cpu.userbenchmark.com/SpeedTest/54474/IntelR-PentiumR-CPU-4405U---210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-5005U",
    "rank": 785,
    "benchmark": 48.7,
    "samples": 43866,
    "url": "https://cpu.userbenchmark.com/SpeedTest/24957/IntelR-CoreTM-i3-5005U-CPU---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD9700AHABBOX",
    "brand": "AMD",
    "model": "A10-9700E APU (2016 D.BR)",
    "rank": 786,
    "benchmark": 48.6,
    "samples": 246,
    "url": "https://cpu.userbenchmark.com/SpeedTest/348934/AMD-A10-9700E-RADEON-R7-10-COMPUTE-CORES-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-3650 APU",
    "rank": 787,
    "benchmark": 48.6,
    "samples": 2604,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1954/AMD-A6-3650-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron G550",
    "rank": 788,
    "benchmark": 48.5,
    "samples": 1641,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5014/IntelR-CeleronR-CPU-G550---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-7600 APU (2014 D.Ka)",
    "rank": 789,
    "benchmark": 48.4,
    "samples": 22666,
    "url": "https://cpu.userbenchmark.com/SpeedTest/14050/AMD-A8-7600-Radeon-R7-10-Compute-Cores-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G630",
    "rank": 790,
    "benchmark": 48.4,
    "samples": 9678,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3112/IntelR-PentiumR-CPU-G630---270GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 2020M",
    "rank": 791,
    "benchmark": 48.4,
    "samples": 8201,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1723/IntelR-PentiumR-CPU-2020M---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X2 555",
    "rank": 792,
    "benchmark": 48.4,
    "samples": 3493,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2917/AMD-Phenomtm-II-X2-555-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5420",
    "rank": 793,
    "benchmark": 48.4,
    "samples": 1256,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11278/IntelR-XeonR-CPU-----------E5420----250GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD9700AGABBOX",
    "brand": "AMD",
    "model": "A10-9700 APU (2016 M.BR)",
    "rank": 794,
    "benchmark": 48.3,
    "samples": 7726,
    "url": "https://cpu.userbenchmark.com/SpeedTest/262171/AMD-A10-9700-RADEON-R7-10-COMPUTE-CORES-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad Q8400",
    "rank": 795,
    "benchmark": 48.2,
    "samples": 15409,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1663/IntelR-CoreTM2-Quad-CPU----Q8400----266GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-6006U",
    "rank": 796,
    "benchmark": 48.2,
    "samples": 38354,
    "url": "https://cpu.userbenchmark.com/SpeedTest/214467/IntelR-CoreTM-i3-6006U-CPU---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G620",
    "rank": 797,
    "benchmark": 48.1,
    "samples": 10933,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2636/IntelR-PentiumR-CPU-G620---260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-4030U",
    "rank": 798,
    "benchmark": 48.1,
    "samples": 19205,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13661/IntelR-CoreTM-i3-4030U-CPU---190GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 650",
    "rank": 799,
    "benchmark": 48,
    "samples": 39091,
    "url": "https://cpu.userbenchmark.com/SpeedTest/340/IntelR-CoreTM-i5-CPU---------650----320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-6700T APU (2013 D.Ri)",
    "rank": 800,
    "benchmark": 48,
    "samples": 64,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5691/AMD-A10-6700T-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron G540",
    "rank": 801,
    "benchmark": 48,
    "samples": 1419,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5981/IntelR-CeleronR-CPU-G540---250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X4 620",
    "rank": 802,
    "benchmark": 47.9,
    "samples": 4917,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3430/AMD-Athlontm-II-X4-620-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad Q6700",
    "rank": 803,
    "benchmark": 47.9,
    "samples": 5360,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3748/IntelR-CoreTM2-Quad-CPU----Q6700----266GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3 550",
    "rank": 804,
    "benchmark": 47.9,
    "samples": 15032,
    "url": "https://cpu.userbenchmark.com/SpeedTest/632/IntelR-CoreTM-i3-CPU---------550----320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-5015U",
    "rank": 805,
    "benchmark": 47.8,
    "samples": 3191,
    "url": "https://cpu.userbenchmark.com/SpeedTest/32615/IntelR-CoreTM-i3-5015U-CPU---210GHz"
  },
  {
    "type": "CPU",
    "part_number": "AM973PAEY44AB",
    "brand": "AMD",
    "model": "A12-9730P APU (2016 M.BR)",
    "rank": 806,
    "benchmark": 47.8,
    "samples": 294,
    "url": "https://cpu.userbenchmark.com/SpeedTest/236011/AMD-A12-9730P-RADEON-R7-10-COMPUTE-CORES-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom 9750",
    "rank": 807,
    "benchmark": 47.7,
    "samples": 1783,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2439/AMD-Phenomtm-9750-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad Q9300",
    "rank": 808,
    "benchmark": 47.6,
    "samples": 9412,
    "url": "https://cpu.userbenchmark.com/SpeedTest/832/IntelR-CoreTM2-Quad--CPU---Q9300----250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5-2660 v2",
    "rank": 809,
    "benchmark": 47.6,
    "samples": 22,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13068/IntelR-XeonR-CPU-E5-2660-v2---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core m3-7Y32",
    "rank": 810,
    "benchmark": 47.6,
    "samples": 41,
    "url": "https://cpu.userbenchmark.com/SpeedTest/513740/IntelR-CoreTM-m3-7Y32-CPU---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X2 550",
    "rank": 811,
    "benchmark": 47.5,
    "samples": 3285,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2418/AMD-Phenomtm-II-X2-550-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2310M",
    "rank": 812,
    "benchmark": 47.5,
    "samples": 20458,
    "url": "https://cpu.userbenchmark.com/SpeedTest/159/IntelR-CoreTM-i3-2310M-CPU---210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X2 265",
    "rank": 813,
    "benchmark": 47.5,
    "samples": 570,
    "url": "https://cpu.userbenchmark.com/SpeedTest/986/AMD-Athlontm-II-X2-265-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-7Y54",
    "rank": 814,
    "benchmark": 47.4,
    "samples": 1214,
    "url": "https://cpu.userbenchmark.com/SpeedTest/193628/IntelR-CoreTM-i5-7Y54-CPU---120GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron G530",
    "rank": 815,
    "benchmark": 47.2,
    "samples": 3223,
    "url": "https://cpu.userbenchmark.com/SpeedTest/229/IntelR-CeleronR-CPU-G530---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X3 450",
    "rank": 816,
    "benchmark": 47.2,
    "samples": 3946,
    "url": "https://cpu.userbenchmark.com/SpeedTest/91/AMD-Athlontm-II-X3-450-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-3800 APU",
    "rank": 817,
    "benchmark": 47.1,
    "samples": 1326,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7059/AMD-A8-3800-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-8210Y",
    "rank": 818,
    "benchmark": 47.1,
    "samples": 286,
    "url": "https://cpu.userbenchmark.com/SpeedTest/651922/IntelR-CoreTM-i5-8210Y-CPU---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium B980",
    "rank": 819,
    "benchmark": 47,
    "samples": 3369,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6036/IntelR-PentiumR-CPU-B980---240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3 540",
    "rank": 820,
    "benchmark": 46.9,
    "samples": 20967,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2936/IntelR-CoreTM-i3-CPU---------540----307GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II X2 545",
    "rank": 821,
    "benchmark": 46.8,
    "samples": 977,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8398/AMD-Phenomtm-II-X2-545-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X3 435",
    "rank": 822,
    "benchmark": 46.7,
    "samples": 1671,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2024/AMD-Athlontm-II-X3-435-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X3 440",
    "rank": 823,
    "benchmark": 46.7,
    "samples": 1750,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5315/AMD-Athlontm-II-X3-440-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X3 445",
    "rank": 824,
    "benchmark": 46.6,
    "samples": 2475,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1775/AMD-Athlontm-II-X3-445-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon X3220",
    "rank": 825,
    "benchmark": 46.6,
    "samples": 686,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4801/IntelR-XeonR-CPU-----------X3220----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad Q8300",
    "rank": 826,
    "benchmark": 46.6,
    "samples": 15576,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1930/IntelR-CoreTM2-Quad-CPU----Q8300----250GHz"
  },
  {
    "type": "CPU",
    "part_number": "AM963PAEY44AB",
    "brand": "AMD",
    "model": "A10-9630P APU (2016 M.BR)",
    "rank": 827,
    "benchmark": 46.6,
    "samples": 476,
    "url": "https://cpu.userbenchmark.com/SpeedTest/192670/AMD-A10-9630P-RADEON-R5-10-COMPUTE-CORES-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-3227U",
    "rank": 828,
    "benchmark": 46.6,
    "samples": 6064,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5042/IntelR-CoreTM-i3-3227U-CPU---190GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium B970",
    "rank": 829,
    "benchmark": 46.5,
    "samples": 2681,
    "url": "https://cpu.userbenchmark.com/SpeedTest/559/IntelR-PentiumR-CPU-B970---230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core m3-7Y30",
    "rank": 830,
    "benchmark": 46.4,
    "samples": 3545,
    "url": "https://cpu.userbenchmark.com/SpeedTest/196956/IntelR-CoreTM-m3-7Y30-CPU---100GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3 530",
    "rank": 831,
    "benchmark": 46.4,
    "samples": 15009,
    "url": "https://cpu.userbenchmark.com/SpeedTest/132/IntelR-CoreTM-i3-CPU---------530----293GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-4010U",
    "rank": 832,
    "benchmark": 46.4,
    "samples": 10490,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4821/IntelR-CoreTM-i3-4010U-CPU---170GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-7800 APU (2014 D.Ka)",
    "rank": 833,
    "benchmark": 46.3,
    "samples": 13321,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13491/AMD-A10-7800-Radeon-R7-12-Compute-Cores-4C-8G"
  },
  {
    "type": "CPU",
    "part_number": "AD9600AGABBOX",
    "brand": "AMD",
    "model": "A8-9600 APU (2016 D.BR)",
    "rank": 834,
    "benchmark": 46.2,
    "samples": 9561,
    "url": "https://cpu.userbenchmark.com/SpeedTest/339630/AMD-A8-9600-RADEON-R7-10-COMPUTE-CORES-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "BX80562Q6600",
    "brand": "Intel",
    "model": "Core2 Quad Q6600",
    "rank": 835,
    "benchmark": 46.2,
    "samples": 54151,
    "url": "https://cpu.userbenchmark.com/Intel-Core2-Quad-Q6600/Rating/1980"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 6400+",
    "rank": 836,
    "benchmark": 46.1,
    "samples": 809,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5653/AMD-Athlontm-64-X2-Dual-Core-Processor-6400-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 3 2200U",
    "rank": 837,
    "benchmark": 46.1,
    "samples": 13287,
    "url": "https://cpu.userbenchmark.com/SpeedTest/480281/AMD-Ryzen-3-2200U-with-Radeon-Vega-Mobile-Gfx"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core M-5Y10",
    "rank": 838,
    "benchmark": 46.1,
    "samples": 427,
    "url": "https://cpu.userbenchmark.com/SpeedTest/17561/IntelR-Processor-5Y10-CPU---080GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom 9650",
    "rank": 839,
    "benchmark": 46,
    "samples": 3046,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5238/AMD-Phenomtm-9650-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-3217U",
    "rank": 840,
    "benchmark": 46,
    "samples": 24242,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1643/IntelR-CoreTM-i3-3217U-CPU---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "YM300UC4T2OFG",
    "brand": "AMD",
    "model": "Athlon 300U",
    "rank": 841,
    "benchmark": 45.9,
    "samples": 1090,
    "url": "https://cpu.userbenchmark.com/SpeedTest/852003/AMD-Athlon-300U-with-Radeon-Vega-Mobile-Gfx"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2467M",
    "rank": 842,
    "benchmark": 45.9,
    "samples": 3471,
    "url": "https://cpu.userbenchmark.com/SpeedTest/854/IntelR-CoreTM-i5-2467M-CPU---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "FM983PAEY44AB",
    "brand": "AMD",
    "model": "FX-9830P APU (2016 M.BR)",
    "rank": 843,
    "benchmark": 45.8,
    "samples": 3440,
    "url": "https://cpu.userbenchmark.com/SpeedTest/215072/AMD-FX-9830P-RADEON-R7-12-COMPUTE-CORES-4C-8G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-5757M APU",
    "rank": 844,
    "benchmark": 45.8,
    "samples": 1131,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7160/AMD-A10-5757M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-6320 APU",
    "rank": 845,
    "benchmark": 45.6,
    "samples": 496,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12932/AMD-A4-6320-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad",
    "rank": 846,
    "benchmark": 45.6,
    "samples": 4726,
    "url": "https://cpu.userbenchmark.com/SpeedTest/374/IntelR-CoreTM2-Quad-CPU-------------240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-5750M APU",
    "rank": 847,
    "benchmark": 45.6,
    "samples": 7828,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3779/AMD-A10-5750M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E8600",
    "rank": 848,
    "benchmark": 45.5,
    "samples": 5137,
    "url": "https://cpu.userbenchmark.com/SpeedTest/124/IntelR-CoreTM2-Duo-CPU-----E8600----333GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core M-5Y70",
    "rank": 849,
    "benchmark": 45.4,
    "samples": 657,
    "url": "https://cpu.userbenchmark.com/SpeedTest/16573/IntelR-Processor-5Y70-CPU---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad Q8200",
    "rank": 850,
    "benchmark": 45.4,
    "samples": 16707,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3754/IntelR-CoreTM2-Quad--CPU---Q8200----233GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom 9550",
    "rank": 851,
    "benchmark": 45.3,
    "samples": 2566,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2319/AMD-Phenomtm-9550-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium B960",
    "rank": 852,
    "benchmark": 45.2,
    "samples": 10374,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1038/IntelR-PentiumR-CPU-B960---220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Ryzen 3 3200U",
    "rank": 853,
    "benchmark": 45.2,
    "samples": 14680,
    "url": "https://cpu.userbenchmark.com/SpeedTest/771805/AMD-Ryzen-3-3200U-with-Radeon-Vega-Mobile-Gfx"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4300Y",
    "rank": 854,
    "benchmark": 45.2,
    "samples": 692,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8659/IntelR-CoreTM-i5-4300Y-CPU---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-4005U",
    "rank": 855,
    "benchmark": 45.2,
    "samples": 30739,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7028/IntelR-CoreTM-i3-4005U-CPU---170GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 1005M",
    "rank": 856,
    "benchmark": 45.1,
    "samples": 2840,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5234/IntelR-CeleronR-CPU-1005M---190GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 2127U",
    "rank": 857,
    "benchmark": 45.1,
    "samples": 1201,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3354/IntelR-PentiumR-CPU-2127U---190GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4210Y",
    "rank": 858,
    "benchmark": 45,
    "samples": 521,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6358/IntelR-CoreTM-i5-4210Y-CPU---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X2 260",
    "rank": 859,
    "benchmark": 44.9,
    "samples": 4338,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4651/AMD-Athlontm-II-X2-260-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X3 425",
    "rank": 860,
    "benchmark": 44.9,
    "samples": 1196,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2178/AMD-Athlontm-II-X3-425-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X2 270",
    "rank": 861,
    "benchmark": 44.8,
    "samples": 5562,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1939/AMD-Athlontm-II-X2-270-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-4600M APU",
    "rank": 862,
    "benchmark": 44.8,
    "samples": 4879,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1051/AMD-A10-4600M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 3805U",
    "rank": 863,
    "benchmark": 44.8,
    "samples": 782,
    "url": "https://cpu.userbenchmark.com/SpeedTest/34360/IntelR-PentiumR-3805U---190GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-3339Y",
    "rank": 864,
    "benchmark": 44.8,
    "samples": 223,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3454/IntelR-CoreTM-i5-3339Y-CPU---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-8200Y",
    "rank": 865,
    "benchmark": 44.7,
    "samples": 134,
    "url": "https://cpu.userbenchmark.com/SpeedTest/623840/IntelR-CoreTM-i5-8200Y-CPU---130GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core M-5Y71",
    "rank": 866,
    "benchmark": 44.7,
    "samples": 2230,
    "url": "https://cpu.userbenchmark.com/SpeedTest/24191/IntelR-CoreTM-M-5Y71-CPU---120GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X2 B24",
    "rank": 867,
    "benchmark": 44.6,
    "samples": 1719,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6359/AMD-Athlontm-II-X2-B24-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X2 255",
    "rank": 868,
    "benchmark": 44.6,
    "samples": 3420,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6225/AMD-Athlontm-II-X2-255-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core M-5Y10a",
    "rank": 869,
    "benchmark": 44.6,
    "samples": 8,
    "url": "https://cpu.userbenchmark.com/SpeedTest/26061/IntelR-Processor-5Y10a-CPU---080GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium B950",
    "rank": 870,
    "benchmark": 44.5,
    "samples": 5811,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1968/IntelR-PentiumR-CPU-B950---210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-3620 APU",
    "rank": 871,
    "benchmark": 44.4,
    "samples": 2407,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8057/AMD-A6-3620-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core m3-6Y30",
    "rank": 872,
    "benchmark": 44.4,
    "samples": 4666,
    "url": "https://cpu.userbenchmark.com/SpeedTest/38171/IntelR-CoreTM-m3-6Y30-CPU---090GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core M-5Y10c",
    "rank": 873,
    "benchmark": 44.4,
    "samples": 2595,
    "url": "https://cpu.userbenchmark.com/SpeedTest/23759/IntelR-CoreTM-M-5Y10c-CPU---080GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-2537M",
    "rank": 874,
    "benchmark": 44.3,
    "samples": 421,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3186/IntelR-CoreTM-i5-2537M-CPU---140GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 1037U",
    "rank": 875,
    "benchmark": 44.3,
    "samples": 1954,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3597/IntelR-CeleronR-CPU-1037U---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5405",
    "rank": 876,
    "benchmark": 44.3,
    "samples": 623,
    "url": "https://cpu.userbenchmark.com/SpeedTest/25434/IntelR-XeonR-CPU-----------E5405----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7-7Y75",
    "rank": 877,
    "benchmark": 44.3,
    "samples": 2126,
    "url": "https://cpu.userbenchmark.com/SpeedTest/211988/IntelR-CoreTM-i7-7Y75-CPU---130GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core m5-6Y54",
    "rank": 878,
    "benchmark": 44.3,
    "samples": 1347,
    "url": "https://cpu.userbenchmark.com/SpeedTest/40602/IntelR-CoreTM-m5-6Y54-CPU---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-5550M APU",
    "rank": 879,
    "benchmark": 44.3,
    "samples": 2827,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5035/AMD-A8-5550M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium B940",
    "rank": 880,
    "benchmark": 44.3,
    "samples": 3272,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2724/IntelR-PentiumR-CPU-B940---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E3110",
    "rank": 881,
    "benchmark": 44.2,
    "samples": 307,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4226/IntelR-XeonR-CPU-----------E3110----300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core m5-6Y57",
    "rank": 882,
    "benchmark": 44.2,
    "samples": 1278,
    "url": "https://cpu.userbenchmark.com/SpeedTest/42768/IntelR-CoreTM-m5-6Y57-CPU---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5345",
    "rank": 883,
    "benchmark": 44.1,
    "samples": 257,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10151/IntelR-XeonR-CPU-----------E5345----233GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E8500",
    "rank": 884,
    "benchmark": 44.1,
    "samples": 18008,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13/IntelR-CoreTM2-Duo-CPU-----E8500----316GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 2117U",
    "rank": 885,
    "benchmark": 44,
    "samples": 3953,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6356/IntelR-PentiumR-CPU-2117U---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Quad Q9000",
    "rank": 886,
    "benchmark": 44,
    "samples": 779,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5898/IntelR-CoreTM2-Quad--CPU---Q9000----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD9800AHABBOX",
    "brand": "AMD",
    "model": "A12-9800E APU (2016 M.BR)",
    "rank": 887,
    "benchmark": 44,
    "samples": 153,
    "url": "https://cpu.userbenchmark.com/SpeedTest/345210/AMD-A12-9800E-RADEON-R7-12-COMPUTE-CORES-4C-8G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 1000M",
    "rank": 888,
    "benchmark": 43.8,
    "samples": 2890,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5059/IntelR-CeleronR-CPU-1000M---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 M 640",
    "rank": 889,
    "benchmark": 43.7,
    "samples": 4472,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4397/IntelR-CoreTM-i7-CPU-------M-640----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2375M",
    "rank": 890,
    "benchmark": 43.7,
    "samples": 1277,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5058/IntelR-CoreTM-i3-2375M-CPU---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core M-5Y51",
    "rank": 891,
    "benchmark": 43.6,
    "samples": 408,
    "url": "https://cpu.userbenchmark.com/SpeedTest/24458/IntelR-CoreTM-M-5Y51-CPU---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-6300 APU",
    "rank": 892,
    "benchmark": 43.6,
    "samples": 10287,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10639/AMD-A4-6300-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II N660",
    "rank": 893,
    "benchmark": 43.5,
    "samples": 339,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9034/AMD-Phenomtm-II-N660-Dual-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E8400",
    "rank": 894,
    "benchmark": 43.5,
    "samples": 62163,
    "url": "https://cpu.userbenchmark.com/Intel-Core2-Duo-E8400/Rating/2720"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core m7-6Y75",
    "rank": 895,
    "benchmark": 43.3,
    "samples": 1574,
    "url": "https://cpu.userbenchmark.com/SpeedTest/55308/IntelR-CoreTM-m7-6Y75-CPU---120GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom X3 8650",
    "rank": 896,
    "benchmark": 43.3,
    "samples": 1311,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4548/AMD-Phenomtm-8650-Triple-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II N950",
    "rank": 897,
    "benchmark": 43.3,
    "samples": 231,
    "url": "https://cpu.userbenchmark.com/SpeedTest/213/AMD-Phenomtm-II-N950-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 M 580",
    "rank": 898,
    "benchmark": 43.2,
    "samples": 1197,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6113/IntelR-CoreTM-i5-CPU-------M-580----267GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-3530MX APU",
    "rank": 899,
    "benchmark": 43.2,
    "samples": 391,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1796/AMD-A8-3530MX-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron B830",
    "rank": 900,
    "benchmark": 43.1,
    "samples": 2903,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8441/IntelR-CeleronR-CPU-B830---180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Extreme X9100",
    "rank": 901,
    "benchmark": 43.1,
    "samples": 504,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6202/IntelR-CoreTM2-Extreme-CPU-X9100----306GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-5400K APU",
    "rank": 902,
    "benchmark": 43.1,
    "samples": 6819,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4113/AMD-A6-5400K-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-6400K APU",
    "rank": 903,
    "benchmark": 42.9,
    "samples": 11138,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3048/AMD-A6-6400K-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E8300",
    "rank": 904,
    "benchmark": 42.9,
    "samples": 1293,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1068/IntelR-CoreTM2-Duo-CPU-----E8300----283GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron B820",
    "rank": 905,
    "benchmark": 42.9,
    "samples": 2874,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7064/IntelR-CeleronR-CPU-B820---170GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-4012Y",
    "rank": 906,
    "benchmark": 42.8,
    "samples": 465,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12259/IntelR-CoreTM-i3-4012Y-CPU---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X2 245",
    "rank": 907,
    "benchmark": 42.8,
    "samples": 5404,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2018/AMD-Athlontm-II-X2-245-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-3510MX APU",
    "rank": 908,
    "benchmark": 42.8,
    "samples": 451,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5873/AMD-A8-3510MX-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5-4202Y",
    "rank": 909,
    "benchmark": 42.8,
    "samples": 572,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6438/IntelR-CoreTM-i5-4202Y-CPU---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2367M",
    "rank": 910,
    "benchmark": 42.8,
    "samples": 1829,
    "url": "https://cpu.userbenchmark.com/SpeedTest/526/IntelR-CoreTM-i3-2367M-CPU---140GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 M 620",
    "rank": 911,
    "benchmark": 42.8,
    "samples": 7605,
    "url": "https://cpu.userbenchmark.com/SpeedTest/870/IntelR-CoreTM-i7-CPU-------M-620----267GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X2 250 (2013 D.Ri)",
    "rank": 912,
    "benchmark": 42.7,
    "samples": 14552,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1064/AMD-Athlontm-II-X2-250-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium E6800",
    "rank": 913,
    "benchmark": 42.7,
    "samples": 717,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4231/PentiumR-Dual-Core--CPU------E6800----333GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom 9150e",
    "rank": 914,
    "benchmark": 42.6,
    "samples": 861,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7599/AMD-Phenomtm-9150e-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon X2 240",
    "rank": 915,
    "benchmark": 42.6,
    "samples": 259,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8553/AMD-Athlontm-X2-240-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X2 240",
    "rank": 916,
    "benchmark": 42.5,
    "samples": 6166,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4133/AMD-Athlontm-II-X2-240-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-4500M APU",
    "rank": 917,
    "benchmark": 42.5,
    "samples": 8163,
    "url": "https://cpu.userbenchmark.com/SpeedTest/758/AMD-A8-4500M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-5300 APU",
    "rank": 918,
    "benchmark": 42.5,
    "samples": 5563,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3554/AMD-A4-5300-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T9900",
    "rank": 919,
    "benchmark": 42.4,
    "samples": 924,
    "url": "https://cpu.userbenchmark.com/SpeedTest/972/IntelR-CoreTM2-Duo-CPU-----T9900----306GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2365M",
    "rank": 920,
    "benchmark": 42.4,
    "samples": 1662,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2519/IntelR-CoreTM-i3-2365M-CPU---140GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T9800",
    "rank": 921,
    "benchmark": 42.3,
    "samples": 476,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7044/IntelR-CoreTM2-Duo-CPU-----T9800----293GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II N930",
    "rank": 922,
    "benchmark": 42.2,
    "samples": 466,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6654/AMD-Phenomtm-II-N930-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5335",
    "rank": 923,
    "benchmark": 42.2,
    "samples": 154,
    "url": "https://cpu.userbenchmark.com/SpeedTest/24658/IntelR-XeonR-CPU-----------E5335----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 1017U",
    "rank": 924,
    "benchmark": 42.1,
    "samples": 1394,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3839/IntelR-CeleronR-CPU-1017U---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron B815",
    "rank": 925,
    "benchmark": 42.1,
    "samples": 2342,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3210/IntelR-CeleronR-CPU-B815---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 7850",
    "rank": 926,
    "benchmark": 42.1,
    "samples": 480,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2660/AMD-Athlontm-7850-Dual-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-3500 APU",
    "rank": 927,
    "benchmark": 42.1,
    "samples": 2393,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4150/AMD-A6-3500-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II N850",
    "rank": 928,
    "benchmark": 42,
    "samples": 276,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6473/AMD-Phenomtm-II-N850-Triple-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3 M 390",
    "rank": 929,
    "benchmark": 42,
    "samples": 869,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8797/IntelR-CoreTM-i3-CPU-------M-390----267GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-7470K APU (2014 D.Ka)",
    "rank": 930,
    "benchmark": 41.9,
    "samples": 189,
    "url": "https://cpu.userbenchmark.com/SpeedTest/129200/AMD-A6-7470K-Radeon-R5-6-Compute-Cores-2C-4G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 887",
    "rank": 931,
    "benchmark": 41.9,
    "samples": 495,
    "url": "https://cpu.userbenchmark.com/SpeedTest/24/IntelR-CeleronR-CPU-887---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P9700",
    "rank": 932,
    "benchmark": 41.9,
    "samples": 432,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3330/IntelR-CoreTM2-Duo-CPU-----P9700----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 M 560",
    "rank": 933,
    "benchmark": 41.9,
    "samples": 10487,
    "url": "https://cpu.userbenchmark.com/SpeedTest/623/IntelR-CoreTM-i5-CPU-------M-560----267GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E8200",
    "rank": 934,
    "benchmark": 41.9,
    "samples": 3768,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3200/IntelR-CoreTM2-Duo-CPU-----E8200----266GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 6000+",
    "rank": 935,
    "benchmark": 41.9,
    "samples": 4700,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5708/AMD-Athlontm-64-X2-Dual-Core-Processor-6000-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-4000 APU",
    "rank": 936,
    "benchmark": 41.8,
    "samples": 4695,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8144/AMD-A4-4000-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "FX-7600P APU (2014 M.Ka)",
    "rank": 937,
    "benchmark": 41.7,
    "samples": 988,
    "url": "https://cpu.userbenchmark.com/SpeedTest/23736/AMD-FX-7600P-Radeon-R7-12-Compute-Cores-4C-8G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E7600",
    "rank": 938,
    "benchmark": 41.6,
    "samples": 3423,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4924/IntelR-CoreTM2-Duo-CPU-----E7600----306GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 X6800",
    "rank": 939,
    "benchmark": 41.5,
    "samples": 248,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8640/IntelR-CoreTM2-CPU---------X6800----293GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 M 540",
    "rank": 940,
    "benchmark": 41.5,
    "samples": 7548,
    "url": "https://cpu.userbenchmark.com/SpeedTest/882/IntelR-CoreTM-i5-CPU-------M-540----253GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 M 480",
    "rank": 941,
    "benchmark": 41.5,
    "samples": 12437,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3496/IntelR-CoreTM-i5-CPU-------M-480----267GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium E6700",
    "rank": 942,
    "benchmark": 41.5,
    "samples": 3884,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2030/PentiumR-Dual-Core--CPU------E6700----320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom X3 8450",
    "rank": 943,
    "benchmark": 41.3,
    "samples": 1595,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3789/AMD-Phenomtm-8450-Triple-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E7500",
    "rank": 944,
    "benchmark": 41.2,
    "samples": 34188,
    "url": "https://cpu.userbenchmark.com/SpeedTest/987/IntelR-CoreTM2-Duo-CPU-----E7500----293GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E6850",
    "rank": 945,
    "benchmark": 41.2,
    "samples": 3948,
    "url": "https://cpu.userbenchmark.com/SpeedTest/681/IntelR-CoreTM2-Duo-CPU-----E6850----300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 M 520",
    "rank": 946,
    "benchmark": 41.1,
    "samples": 20770,
    "url": "https://cpu.userbenchmark.com/SpeedTest/812/IntelR-CoreTM-i5-CPU-------M-520----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 M 460",
    "rank": 947,
    "benchmark": 41.1,
    "samples": 15338,
    "url": "https://cpu.userbenchmark.com/SpeedTest/126/IntelR-CoreTM-i5-CPU-------M-460----253GHz"
  },
  {
    "type": "CPU",
    "part_number": "FH8068003067415",
    "brand": "Intel",
    "model": "Pentium Silver J5005",
    "rank": 948,
    "benchmark": 41.1,
    "samples": 1438,
    "url": "https://cpu.userbenchmark.com/SpeedTest/487063/IntelR-PentiumR-Silver-J5005-CPU---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T9500",
    "rank": 949,
    "benchmark": 41.1,
    "samples": 846,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4254/IntelR-CoreTM2-Duo-CPU-----T9500----260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 L 640",
    "rank": 950,
    "benchmark": 41,
    "samples": 1853,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4880/IntelR-CoreTM-i7-CPU-------L-640----213GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 877",
    "rank": 951,
    "benchmark": 40.9,
    "samples": 561,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6414/IntelR-CeleronR-CPU-877---140GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium E6600",
    "rank": 952,
    "benchmark": 40.8,
    "samples": 4208,
    "url": "https://cpu.userbenchmark.com/SpeedTest/988/PentiumR-Dual-Core--CPU------E6600----306GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 M 450",
    "rank": 953,
    "benchmark": 40.8,
    "samples": 7111,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2006/IntelR-CoreTM-i5-CPU-------M-450----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 7750",
    "rank": 954,
    "benchmark": 40.8,
    "samples": 2005,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3774/AMD-Athlontm-7750-Dual-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium G6950",
    "rank": 955,
    "benchmark": 40.8,
    "samples": 955,
    "url": "https://cpu.userbenchmark.com/SpeedTest/638/IntelR-PentiumR-CPU--------G6950----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X2 220",
    "rank": 956,
    "benchmark": 40.7,
    "samples": 4222,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5455/AMD-Athlontm-II-X2-220-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T9600",
    "rank": 957,
    "benchmark": 40.7,
    "samples": 3576,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1795/IntelR-CoreTM2-Duo-CPU-----T9600----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 6700",
    "rank": 958,
    "benchmark": 40.6,
    "samples": 2131,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3850/IntelR-CoreTM2-CPU----------6700----266GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 3205U",
    "rank": 959,
    "benchmark": 40.6,
    "samples": 718,
    "url": "https://cpu.userbenchmark.com/SpeedTest/28911/IntelR-CeleronR-3205U---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron B800",
    "rank": 960,
    "benchmark": 40.6,
    "samples": 2015,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6775/IntelR-CeleronR-CPU-B800---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-3520M APU",
    "rank": 961,
    "benchmark": 40.6,
    "samples": 1147,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6369/AMD-A8-3520M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "FM980PADY44AB",
    "brand": "AMD",
    "model": "FX-9800P APU (2016 M.BR)",
    "rank": 962,
    "benchmark": 40.5,
    "samples": 2370,
    "url": "https://cpu.userbenchmark.com/SpeedTest/141405/AMD-FX-9800P-RADEON-R7-12-COMPUTE-CORES-4C-8G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 987",
    "rank": 963,
    "benchmark": 40.5,
    "samples": 1281,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4947/IntelR-PentiumR-CPU-987---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II N830",
    "rank": 964,
    "benchmark": 40.5,
    "samples": 598,
    "url": "https://cpu.userbenchmark.com/SpeedTest/690/AMD-Phenomtm-II-N830-Triple-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-3410MX APU",
    "rank": 965,
    "benchmark": 40.5,
    "samples": 950,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5327/AMD-A6-3410MX-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P9500",
    "rank": 966,
    "benchmark": 40.4,
    "samples": 274,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5851/IntelR-CoreTM2-Duo-CPU-----P9500----253GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 5600+",
    "rank": 967,
    "benchmark": 40.3,
    "samples": 3255,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2183/AMD-Athlontm-64-X2-Dual-Core-Processor-5600-"
  },
  {
    "type": "CPU",
    "part_number": "HE8067702740049",
    "brand": "Intel",
    "model": "Pentium Gold 4425Y",
    "rank": 968,
    "benchmark": 40.3,
    "samples": 208,
    "url": "https://cpu.userbenchmark.com/SpeedTest/786431/IntelR-PentiumR-CPU-4425Y---170GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A12-9720P APU (2016 M.BR)",
    "rank": 969,
    "benchmark": 40.2,
    "samples": 13949,
    "url": "https://cpu.userbenchmark.com/SpeedTest/308530/AMD-A12-9720P-RADEON-R7-12-COMPUTE-CORES-4C-8G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3 M 380",
    "rank": 970,
    "benchmark": 40.2,
    "samples": 16826,
    "url": "https://cpu.userbenchmark.com/SpeedTest/919/IntelR-CoreTM-i3-CPU-------M-380----253GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 M 430",
    "rank": 971,
    "benchmark": 40.2,
    "samples": 11978,
    "url": "https://cpu.userbenchmark.com/SpeedTest/34/IntelR-CoreTM-i5-CPU-------M-430----227GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T9550",
    "rank": 972,
    "benchmark": 40.2,
    "samples": 1235,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6301/IntelR-CoreTM2-Duo-CPU-----T9550----266GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T9400",
    "rank": 973,
    "benchmark": 40.1,
    "samples": 2750,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3645/IntelR-CoreTM2-Duo-CPU-----T9400----253GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3-2357M",
    "rank": 974,
    "benchmark": 40.1,
    "samples": 113,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6916/IntelR-CoreTM-i3-2357M-CPU---130GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P9600",
    "rank": 975,
    "benchmark": 40.1,
    "samples": 451,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8493/IntelR-CoreTM2-Duo-CPU-----P9600----266GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 1007U",
    "rank": 976,
    "benchmark": 40,
    "samples": 4512,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3995/IntelR-CeleronR-CPU-1007U---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 2957U",
    "rank": 977,
    "benchmark": 40,
    "samples": 2360,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12071/IntelR-CeleronR-2957U---140GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II X2 215",
    "rank": 978,
    "benchmark": 40,
    "samples": 4081,
    "url": "https://cpu.userbenchmark.com/SpeedTest/885/AMD-Athlontm-II-X2-215-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-3500M APU",
    "rank": 979,
    "benchmark": 39.8,
    "samples": 1190,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5434/AMD-A8-3500M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 5400+",
    "rank": 980,
    "benchmark": 39.8,
    "samples": 858,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4069/AMD-Athlontm-64-X2-Dual-Core-Processor-5400-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E6750",
    "rank": 981,
    "benchmark": 39.7,
    "samples": 8446,
    "url": "https://cpu.userbenchmark.com/SpeedTest/729/IntelR-CoreTM2-Duo-CPU-----E6750----266GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium D 3.73GHz",
    "rank": 982,
    "benchmark": 39.7,
    "samples": 42,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10162/IntelR-PentiumR-D-CPU-373GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-7200P APU (2014 M.Ka)",
    "rank": 983,
    "benchmark": 39.7,
    "samples": 118,
    "url": "https://cpu.userbenchmark.com/SpeedTest/64755/AMD-A8-7200P-Radeon-R5-8-Compute-Cores-4C-4G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E7300",
    "rank": 984,
    "benchmark": 39.6,
    "samples": 6269,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2080/IntelR-CoreTM2-Duo-CPU-----E7300----266GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 6600",
    "rank": 985,
    "benchmark": 39.6,
    "samples": 6565,
    "url": "https://cpu.userbenchmark.com/SpeedTest/984/IntelR-CoreTM2-CPU----------6600----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E7400",
    "rank": 986,
    "benchmark": 39.6,
    "samples": 12514,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2077/IntelR-CoreTM2-Duo-CPU-----E7400----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "AD9500AHABBOX",
    "brand": "AMD",
    "model": "A6-9500E APU (2016 D.BR)",
    "rank": 987,
    "benchmark": 39.6,
    "samples": 165,
    "url": "https://cpu.userbenchmark.com/SpeedTest/340618/AMD-A6-9500E-RADEON-R5-6-COMPUTE-CORES-2C-4G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium E6500",
    "rank": 988,
    "benchmark": 39.6,
    "samples": 5032,
    "url": "https://cpu.userbenchmark.com/SpeedTest/720/PentiumR-Dual-Core--CPU------E6500----293GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium E6300",
    "rank": 989,
    "benchmark": 39.6,
    "samples": 2342,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3310/PentiumR-Dual-Core--CPU------E6300----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T9300",
    "rank": 990,
    "benchmark": 39.5,
    "samples": 2803,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2444/IntelR-CoreTM2-Duo-CPU-----T9300----250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3 M 370",
    "rank": 991,
    "benchmark": 39.4,
    "samples": 20026,
    "url": "https://cpu.userbenchmark.com/SpeedTest/259/IntelR-CoreTM-i3-CPU-------M-370----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i7 L 620",
    "rank": 992,
    "benchmark": 39.4,
    "samples": 328,
    "url": "https://cpu.userbenchmark.com/SpeedTest/952/IntelR-CoreTM-i7-CPU-------L-620----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Turion II Ultra Mobile M600",
    "rank": 993,
    "benchmark": 39.3,
    "samples": 212,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5449/AMD-Turiontm-II-Ultra-Dual-Core-Mobile-M600"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P8800",
    "rank": 994,
    "benchmark": 39.2,
    "samples": 843,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2429/IntelR-CoreTM2-Duo-CPU-----P8800----266GHz"
  },
  {
    "type": "CPU",
    "part_number": "AM970PADY44AB",
    "brand": "AMD",
    "model": "A12-9700P APU (2016 M.BR)",
    "rank": 995,
    "benchmark": 39.2,
    "samples": 4906,
    "url": "https://cpu.userbenchmark.com/SpeedTest/148571/AMD-A12-9700P-RADEON-R7-10-COMPUTE-CORES-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3 M 350",
    "rank": 996,
    "benchmark": 39.1,
    "samples": 12324,
    "url": "https://cpu.userbenchmark.com/SpeedTest/572/IntelR-CoreTM-i3-CPU-------M-350----227GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Opteron 4171 HE",
    "rank": 997,
    "benchmark": 39.1,
    "samples": 16,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5977/AMD-Opterontm-Processor-4171-HE"
  },
  {
    "type": "CPU",
    "part_number": "HE8067702740018",
    "brand": "Intel",
    "model": "Pentium Gold 4415Y",
    "rank": 998,
    "benchmark": 39,
    "samples": 2040,
    "url": "https://cpu.userbenchmark.com/SpeedTest/549016/IntelR-PentiumR-CPU-4415Y---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium E5800",
    "rank": 999,
    "benchmark": 38.9,
    "samples": 7577,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3092/PentiumR-Dual-Core--CPU------E5800----320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P9400",
    "rank": 1000,
    "benchmark": 38.9,
    "samples": 592,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5017/IntelR-CoreTM2-Duo-CPU-----P9400----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E7200",
    "rank": 1001,
    "benchmark": 38.9,
    "samples": 5385,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1876/IntelR-CoreTM2-Duo-CPU-----E7200----253GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-9620P APU (2016 M.BR)",
    "rank": 1002,
    "benchmark": 38.9,
    "samples": 4374,
    "url": "https://cpu.userbenchmark.com/SpeedTest/300068/AMD-A10-9620P-RADEON-R5-10-COMPUTE-CORES-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-7400K APU (2014 D.Ka)",
    "rank": 1003,
    "benchmark": 38.9,
    "samples": 7102,
    "url": "https://cpu.userbenchmark.com/SpeedTest/16549/AMD-A6-7400K-Radeon-R5-6-Compute-Cores-2C-4G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II P960",
    "rank": 1004,
    "benchmark": 38.8,
    "samples": 987,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1991/AMD-Phenomtm-II-P960-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-7400P APU (2014 M.Ka)",
    "rank": 1005,
    "benchmark": 38.8,
    "samples": 1168,
    "url": "https://cpu.userbenchmark.com/SpeedTest/26875/AMD-A10-7400P-Radeon-R6-10-Compute-Cores-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "FH8068003067403",
    "brand": "Intel",
    "model": "Celeron J4105",
    "rank": 1006,
    "benchmark": 38.7,
    "samples": 819,
    "url": "https://cpu.userbenchmark.com/SpeedTest/444211/IntelR-CeleronR-J4105-CPU---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-5545M APU",
    "rank": 1007,
    "benchmark": 38.7,
    "samples": 2398,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9308/AMD-A8-5545M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-4655M APU",
    "rank": 1008,
    "benchmark": 38.6,
    "samples": 1705,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6343/AMD-A10-4655M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P8700",
    "rank": 1009,
    "benchmark": 38.6,
    "samples": 6436,
    "url": "https://cpu.userbenchmark.com/SpeedTest/581/IntelR-CoreTM2-Duo-CPU-----P8700----253GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 5200+",
    "rank": 1010,
    "benchmark": 38.6,
    "samples": 4605,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1721/AMD-Athlontm-64-X2-Dual-Core-Processor-5200-"
  },
  {
    "type": "CPU",
    "part_number": "HE8067702740013",
    "brand": "Intel",
    "model": "Pentium 4410Y",
    "rank": 1011,
    "benchmark": 38.5,
    "samples": 56,
    "url": "https://cpu.userbenchmark.com/SpeedTest/315867/IntelR-PentiumR-CPU-4410Y---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P9300",
    "rank": 1012,
    "benchmark": 38.5,
    "samples": 250,
    "url": "https://cpu.userbenchmark.com/SpeedTest/602/IntelR-CoreTM2-Duo-CPU-----P9300----226GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T8300",
    "rank": 1013,
    "benchmark": 38.5,
    "samples": 2231,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1921/IntelR-CoreTM2-Duo-CPU-----T8300----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-3420M APU",
    "rank": 1014,
    "benchmark": 38.4,
    "samples": 3874,
    "url": "https://cpu.userbenchmark.com/SpeedTest/649/AMD-A6-3420M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "FH8068003067406",
    "brand": "Intel",
    "model": "Pentium Silver N5000",
    "rank": 1015,
    "benchmark": 38.4,
    "samples": 8028,
    "url": "https://cpu.userbenchmark.com/SpeedTest/499477/IntelR-PentiumR-Silver-N5000-CPU---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5320",
    "rank": 1016,
    "benchmark": 38.4,
    "samples": 109,
    "url": "https://cpu.userbenchmark.com/SpeedTest/24377/IntelR-XeonR-CPU-----------E5320----186GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium J2900",
    "rank": 1017,
    "benchmark": 38.3,
    "samples": 3620,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12727/IntelR-PentiumR-CPU--J2900----241GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium E5700",
    "rank": 1018,
    "benchmark": 38.3,
    "samples": 16396,
    "url": "https://cpu.userbenchmark.com/SpeedTest/976/PentiumR-Dual-Core--CPU------E5700----300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon Dual Core 4850e",
    "rank": 1019,
    "benchmark": 38.2,
    "samples": 548,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3970/AMD-Athlontm-Dual-Core-Processor-4850e"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3 M 330",
    "rank": 1020,
    "benchmark": 38.1,
    "samples": 10021,
    "url": "https://cpu.userbenchmark.com/SpeedTest/484/IntelR-CoreTM-i3-CPU-------M-330----213GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 6420",
    "rank": 1021,
    "benchmark": 38.1,
    "samples": 1805,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1967/IntelR-CoreTM2-CPU----------6420----213GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 967",
    "rank": 1022,
    "benchmark": 38.1,
    "samples": 257,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4152/IntelR-PentiumR-CPU-967---130GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T7700",
    "rank": 1023,
    "benchmark": 38.1,
    "samples": 1735,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2770/IntelR-CoreTM2-Duo-CPU-----T7700----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P7570",
    "rank": 1024,
    "benchmark": 38.1,
    "samples": 239,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7581/IntelR-CoreTM2-Duo-CPU-----P7570----226GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-5745M APU",
    "rank": 1025,
    "benchmark": 38,
    "samples": 5197,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4194/AMD-A10-5745M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P8600",
    "rank": 1026,
    "benchmark": 38,
    "samples": 7269,
    "url": "https://cpu.userbenchmark.com/SpeedTest/753/IntelR-CoreTM2-Duo-CPU-----P8600----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium E5400",
    "rank": 1027,
    "benchmark": 37.9,
    "samples": 12841,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4475/PentiumR-Dual-Core--CPU------E5400----270GHz"
  },
  {
    "type": "CPU",
    "part_number": "BX80557E6550",
    "brand": "Intel",
    "model": "Core2 Duo E6550",
    "rank": 1028,
    "benchmark": 37.9,
    "samples": 10033,
    "url": "https://cpu.userbenchmark.com/Intel-Core2-Duo-E6550/Rating/568"
  },
  {
    "type": "CPU",
    "part_number": "AD9500AGABBOX",
    "brand": "AMD",
    "model": "A6-9500 APU (2016 D.BR)",
    "rank": 1029,
    "benchmark": 37.9,
    "samples": 1972,
    "url": "https://cpu.userbenchmark.com/SpeedTest/302063/AMD-A6-9500-RADEON-R5-8-COMPUTE-CORES-2C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II P360",
    "rank": 1030,
    "benchmark": 37.9,
    "samples": 1305,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3956/AMD-Athlontm-II-P360-Dual-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-4300M APU",
    "rank": 1031,
    "benchmark": 37.9,
    "samples": 1975,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2001/AMD-A4-4300M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo L9600",
    "rank": 1032,
    "benchmark": 37.8,
    "samples": 93,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1700/IntelR-CoreTM2-Duo-CPU-----L9600----213GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom II P940",
    "rank": 1033,
    "benchmark": 37.8,
    "samples": 78,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12706/AMD-Phenomtm-II-P940-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium N3540",
    "rank": 1034,
    "benchmark": 37.8,
    "samples": 14084,
    "url": "https://cpu.userbenchmark.com/SpeedTest/15842/IntelR-PentiumR-CPU--N3540----216GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-4400M APU",
    "rank": 1035,
    "benchmark": 37.8,
    "samples": 5219,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1745/AMD-A6-4400M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium N3530",
    "rank": 1036,
    "benchmark": 37.7,
    "samples": 4274,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11468/IntelR-PentiumR-CPU--N3530----216GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P8400",
    "rank": 1037,
    "benchmark": 37.6,
    "samples": 5659,
    "url": "https://cpu.userbenchmark.com/SpeedTest/307/IntelR-CoreTM2-Duo-CPU-----P8400----226GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo L9400",
    "rank": 1038,
    "benchmark": 37.6,
    "samples": 547,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5525/IntelR-CoreTM2-Duo-CPU-----L9400----186GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron E3300",
    "rank": 1039,
    "benchmark": 37.6,
    "samples": 2075,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5787/IntelR-CeleronR-CPU--------E3300----250GHz"
  },
  {
    "type": "CPU",
    "part_number": "AM960PADY44AB",
    "brand": "AMD",
    "model": "A10-9600P APU (2016 M.BR)",
    "rank": 1040,
    "benchmark": 37.6,
    "samples": 9867,
    "url": "https://cpu.userbenchmark.com/SpeedTest/136279/AMD-A10-9600P-RADEON-R5-10-COMPUTE-CORES-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium E5500",
    "rank": 1041,
    "benchmark": 37.5,
    "samples": 6260,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2012/PentiumR-Dual-Core--CPU------E5500----280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-3400M APU",
    "rank": 1042,
    "benchmark": 37.5,
    "samples": 3309,
    "url": "https://cpu.userbenchmark.com/SpeedTest/491/AMD-A6-3400M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core M-5Y31",
    "rank": 1043,
    "benchmark": 37.5,
    "samples": 93,
    "url": "https://cpu.userbenchmark.com/SpeedTest/33034/IntelR-CoreTM-M-5Y31-CPU---090GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-3400 APU",
    "rank": 1044,
    "benchmark": 37.5,
    "samples": 2209,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6076/AMD-A4-3400-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron E3200",
    "rank": 1045,
    "benchmark": 37.3,
    "samples": 863,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6422/IntelR-CeleronR-CPU--------E3200----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E4700",
    "rank": 1046,
    "benchmark": 37.2,
    "samples": 1045,
    "url": "https://cpu.userbenchmark.com/SpeedTest/669/IntelR-CoreTM2-Duo-CPU-----E4700----260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-3300 APU",
    "rank": 1047,
    "benchmark": 37.2,
    "samples": 1724,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4728/AMD-A4-3300-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A9-9430 APU (2016 M.SR)",
    "rank": 1048,
    "benchmark": 37.2,
    "samples": 729,
    "url": "https://cpu.userbenchmark.com/SpeedTest/303175/AMD-A9-9430-RADEON-R5-5-COMPUTE-CORES-2C-3G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 4600+",
    "rank": 1049,
    "benchmark": 37.2,
    "samples": 1936,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8715/AMD-Athlontm-64-X2-Dual-Core-Processor-4600-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 6400",
    "rank": 1050,
    "benchmark": 37.1,
    "samples": 4279,
    "url": "https://cpu.userbenchmark.com/SpeedTest/106/IntelR-CoreTM2-CPU----------6400----213GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron J1900",
    "rank": 1051,
    "benchmark": 37.1,
    "samples": 5087,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10898/IntelR-CeleronR-CPU--J1900----199GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom Z3740D",
    "rank": 1052,
    "benchmark": 37.1,
    "samples": 182,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3287/IntelR-AtomTM-CPU--Z3740D---133GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium N3520",
    "rank": 1053,
    "benchmark": 37.1,
    "samples": 1729,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7431/IntelR-PentiumR-CPU--N3520----216GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium E5300",
    "rank": 1054,
    "benchmark": 37.1,
    "samples": 15377,
    "url": "https://cpu.userbenchmark.com/SpeedTest/38/PentiumR-Dual-Core--CPU------E5300----260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P7550",
    "rank": 1055,
    "benchmark": 37,
    "samples": 730,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3099/IntelR-CoreTM2-Duo-CPU-----P7550----226GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 5000+",
    "rank": 1056,
    "benchmark": 37,
    "samples": 5103,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2324/AMD-Athlontm-64-X2-Dual-Core-Processor-5000-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon X2 Dual Core BE-2400",
    "rank": 1057,
    "benchmark": 37,
    "samples": 60,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10300/AMD-Athlontm-X2-Dual-Core-Processor-BE-2400"
  },
  {
    "type": "CPU",
    "part_number": "HE8066201931229",
    "brand": "Intel",
    "model": "Pentium 4405Y",
    "rank": 1058,
    "benchmark": 37,
    "samples": 125,
    "url": "https://cpu.userbenchmark.com/SpeedTest/144619/IntelR-PentiumR-CPU-4405Y---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Turion II Neo N54L",
    "rank": 1059,
    "benchmark": 36.9,
    "samples": 157,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7165/AMD-Turiontm-II-Neo-N54L-Dual-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium E5200",
    "rank": 1060,
    "benchmark": 36.8,
    "samples": 12019,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1599/PentiumR-Dual-Core--CPU------E5200----250GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P7450",
    "rank": 1061,
    "benchmark": 36.8,
    "samples": 2436,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1597/IntelR-CoreTM2-Duo-CPU-----P7450----213GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II P340",
    "rank": 1062,
    "benchmark": 36.8,
    "samples": 2265,
    "url": "https://cpu.userbenchmark.com/SpeedTest/380/AMD-Athlontm-II-P340-Dual-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T8100",
    "rank": 1063,
    "benchmark": 36.6,
    "samples": 2322,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2334/IntelR-CoreTM2-Duo-CPU-----T8100----210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo P7350",
    "rank": 1064,
    "benchmark": 36.5,
    "samples": 2360,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1998/IntelR-CoreTM2-Duo-CPU-----P7350----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 4800+",
    "rank": 1065,
    "benchmark": 36.4,
    "samples": 1848,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2246/AMD-Athlontm-64-X2-Dual-Core-Processor-4800-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Sempron 145",
    "rank": 1066,
    "benchmark": 36.4,
    "samples": 3086,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6487/AMD-Semprontm-145-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon Dual Core 4450e",
    "rank": 1067,
    "benchmark": 36.4,
    "samples": 459,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9437/AMD-Athlontm-Dual-Core-Processor-4450e"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-4555M APU",
    "rank": 1068,
    "benchmark": 36.3,
    "samples": 1858,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3647/AMD-A8-4555M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T7500",
    "rank": 1069,
    "benchmark": 36.3,
    "samples": 3520,
    "url": "https://cpu.userbenchmark.com/SpeedTest/867/IntelR-CoreTM2-Duo-CPU-----T7500----220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N2930",
    "rank": 1070,
    "benchmark": 36.3,
    "samples": 1599,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13386/IntelR-CeleronR-CPU--N2930----183GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium P6200",
    "rank": 1071,
    "benchmark": 36.2,
    "samples": 6948,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4539/IntelR-PentiumR-CPU--------P6200----213GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon Dual Core 4450B",
    "rank": 1072,
    "benchmark": 36.2,
    "samples": 465,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3166/AMD-Athlontm-Dual-Core-Processor-4450B"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 5350 APU R3",
    "rank": 1073,
    "benchmark": 36.2,
    "samples": 3107,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10020/AMD-Athlontm-5350-APU-with-Radeontm-R3"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 6320",
    "rank": 1074,
    "benchmark": 36.1,
    "samples": 1282,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4501/IntelR-CoreTM2-CPU----------6320----186GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Sempron 140",
    "rank": 1075,
    "benchmark": 36.1,
    "samples": 2299,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3248/AMD-Semprontm-140-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron E3400",
    "rank": 1076,
    "benchmark": 36.1,
    "samples": 3287,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5119/IntelR-CeleronR-CPU--------E3400----260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium P6100",
    "rank": 1077,
    "benchmark": 36,
    "samples": 5326,
    "url": "https://cpu.userbenchmark.com/SpeedTest/756/IntelR-PentiumR-CPU--------P6100----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron Dual Core T3300",
    "rank": 1078,
    "benchmark": 36,
    "samples": 534,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8823/CeleronR-Dual-Core-CPU-------T3300----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T6670",
    "rank": 1079,
    "benchmark": 36,
    "samples": 1782,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2964/IntelR-CoreTM2-Duo-CPU-----T6670----220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 4400+",
    "rank": 1080,
    "benchmark": 35.9,
    "samples": 2608,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2330/AMD-Athlontm-64-X2-Dual-Core-Processor-4400-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "FX-7500 APU (2014 M.Ka)",
    "rank": 1081,
    "benchmark": 35.9,
    "samples": 3024,
    "url": "https://cpu.userbenchmark.com/SpeedTest/16010/AMD-FX-7500-Radeon-R7-10-Compute-Cores-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Xeon E5310",
    "rank": 1082,
    "benchmark": 35.8,
    "samples": 25,
    "url": "https://cpu.userbenchmark.com/SpeedTest/21579/IntelR-XeonR-CPU-----------E5310----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-7310 APU (2015 M.Ca)",
    "rank": 1083,
    "benchmark": 35.8,
    "samples": 9893,
    "url": "https://cpu.userbenchmark.com/SpeedTest/42196/AMD-A6-7310-APU-with-AMD-Radeon-R4-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T6400",
    "rank": 1084,
    "benchmark": 35.8,
    "samples": 4182,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2405/IntelR-CoreTM2-Duo-CPU-----T6400----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-7210 APU (2015 M.Ca)",
    "rank": 1085,
    "benchmark": 35.8,
    "samples": 1777,
    "url": "https://cpu.userbenchmark.com/SpeedTest/42376/AMD-A4-7210-APU-with-AMD-Radeon-R3-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T7300",
    "rank": 1086,
    "benchmark": 35.8,
    "samples": 2473,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2508/IntelR-CoreTM2-Duo-CPU-----T7300----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T6500",
    "rank": 1087,
    "benchmark": 35.7,
    "samples": 2993,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3474/IntelR-CoreTM2-Duo-CPU-----T6500----210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T6600",
    "rank": 1088,
    "benchmark": 35.7,
    "samples": 7191,
    "url": "https://cpu.userbenchmark.com/SpeedTest/242/IntelR-CoreTM2-Duo-CPU-----T6600----220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 4200+",
    "rank": 1089,
    "benchmark": 35.7,
    "samples": 3420,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3258/AMD-Athlontm-64-X2-Dual-Core-Processor-4200-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-3330MX APU",
    "rank": 1090,
    "benchmark": 35.6,
    "samples": 1047,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6834/AMD-A4-3330MX-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T5870",
    "rank": 1091,
    "benchmark": 35.5,
    "samples": 1849,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5377/IntelR-CoreTM2-Duo-CPU-----T5870----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 3800+",
    "rank": 1092,
    "benchmark": 35.5,
    "samples": 2828,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2362/AMD-Athlontm-64-X2-Dual-Core-Processor-3800-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-6410 APU R5 Graphics",
    "rank": 1093,
    "benchmark": 35.4,
    "samples": 17745,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12263/AMD-A8-6410-APU-with-AMD-Radeon-R5-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 T7600",
    "rank": 1094,
    "benchmark": 35.4,
    "samples": 509,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2765/IntelR-CoreTM2-CPU---------T7600----233GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon LE-1640",
    "rank": 1095,
    "benchmark": 35.4,
    "samples": 380,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7308/AMD-Athlontm-Processor-LE-1640"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-7410 APU (2015 M.Ca)",
    "rank": 1096,
    "benchmark": 35.4,
    "samples": 23928,
    "url": "https://cpu.userbenchmark.com/SpeedTest/33754/AMD-A8-7410-APU-with-AMD-Radeon-R5-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II P320",
    "rank": 1097,
    "benchmark": 35.3,
    "samples": 2820,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1942/AMD-Athlontm-II-P320-Dual-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Turion II Mobile M500",
    "rank": 1098,
    "benchmark": 35.3,
    "samples": 530,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2912/AMD-Turiontm-II-Dual-Core-Mobile-M500"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T5900",
    "rank": 1099,
    "benchmark": 35.3,
    "samples": 283,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2376/IntelR-CoreTM2-Duo-CPU-----T5900----220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T5670",
    "rank": 1100,
    "benchmark": 35.3,
    "samples": 637,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3564/IntelR-CoreTM2-Duo-CPU-----T5670----180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T6570",
    "rank": 1101,
    "benchmark": 35.3,
    "samples": 2441,
    "url": "https://cpu.userbenchmark.com/SpeedTest/438/IntelR-CoreTM2-Duo-CPU-----T6570----210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron Dual Core T3100",
    "rank": 1102,
    "benchmark": 35.3,
    "samples": 870,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1715/CeleronR-Dual-Core-CPU-------T3100----190GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium T4400",
    "rank": 1103,
    "benchmark": 35.2,
    "samples": 5656,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1886/PentiumR-Dual-Core-CPU-------T4400----220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 6300",
    "rank": 1104,
    "benchmark": 35.2,
    "samples": 5065,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2521/IntelR-CoreTM2-CPU----------6300----186GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E4600",
    "rank": 1105,
    "benchmark": 35.2,
    "samples": 5474,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2191/IntelR-CoreTM2-Duo-CPU-----E4600----240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium T4500",
    "rank": 1106,
    "benchmark": 35.1,
    "samples": 7356,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2148/PentiumR-Dual-Core-CPU-------T4500----230GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T5800",
    "rank": 1107,
    "benchmark": 35,
    "samples": 2740,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2272/IntelR-CoreTM2-Duo-CPU-----T5800----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-3300M APU",
    "rank": 1108,
    "benchmark": 35,
    "samples": 1777,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12812/AMD-A4-3300M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium T4300",
    "rank": 1109,
    "benchmark": 34.9,
    "samples": 5774,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2938/PentiumR-Dual-Core-CPU-------T4300----210GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E4500",
    "rank": 1110,
    "benchmark": 34.8,
    "samples": 8198,
    "url": "https://cpu.userbenchmark.com/SpeedTest/65/IntelR-CoreTM2-Duo-CPU-----E4500----220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo E4400",
    "rank": 1111,
    "benchmark": 34.8,
    "samples": 1278,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3549/IntelR-CoreTM2-Duo-CPU-----E4400----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium Dual E2200",
    "rank": 1112,
    "benchmark": 34.8,
    "samples": 6986,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1712/IntelR-PentiumR-Dual--CPU--E2200----220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T7250",
    "rank": 1113,
    "benchmark": 34.8,
    "samples": 3101,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1781/IntelR-CoreTM2-Duo-CPU-----T7250----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II M320",
    "rank": 1114,
    "benchmark": 34.7,
    "samples": 800,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4506/AMD-Athlontm-II-Dual-Core-M320"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 847",
    "rank": 1115,
    "benchmark": 34.7,
    "samples": 3947,
    "url": "https://cpu.userbenchmark.com/SpeedTest/457/IntelR-CeleronR-CPU-847---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "V140",
    "rank": 1116,
    "benchmark": 34.7,
    "samples": 700,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1003/AMD-V140-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium J4205",
    "rank": 1117,
    "benchmark": 34.6,
    "samples": 837,
    "url": "https://cpu.userbenchmark.com/SpeedTest/221469/IntelR-PentiumR-CPU-J4205---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium T4200",
    "rank": 1118,
    "benchmark": 34.5,
    "samples": 4672,
    "url": "https://cpu.userbenchmark.com/SpeedTest/451/PentiumR-Dual-Core-CPU-------T4200----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A8-7100 APU (2014 M.Ka)",
    "rank": 1119,
    "benchmark": 34.5,
    "samples": 912,
    "url": "https://cpu.userbenchmark.com/SpeedTest/20429/AMD-A8-7100-Radeon-R5-8-Compute-Cores-4C-4G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 T7400",
    "rank": 1120,
    "benchmark": 34.5,
    "samples": 574,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5780/IntelR-CoreTM2-CPU---------T7400----216GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 4400",
    "rank": 1121,
    "benchmark": 34.5,
    "samples": 1795,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5093/IntelR-CoreTM2-CPU----------4400----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium N3510",
    "rank": 1122,
    "benchmark": 34.3,
    "samples": 337,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11120/IntelR-PentiumR-CPU--N3510----199GHz"
  },
  {
    "type": "CPU",
    "part_number": "FH8068003067408",
    "brand": "Intel",
    "model": "Celeron N4100",
    "rank": 1123,
    "benchmark": 34.3,
    "samples": 3731,
    "url": "https://cpu.userbenchmark.com/SpeedTest/407836/IntelR-CeleronR-N4100-CPU---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "V120",
    "rank": 1124,
    "benchmark": 34.2,
    "samples": 515,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5365/AMD-V120-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo L9300",
    "rank": 1125,
    "benchmark": 34.2,
    "samples": 112,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5639/IntelR-CoreTM2-Duo-CPU-----L9300----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom Z3775",
    "rank": 1126,
    "benchmark": 34.1,
    "samples": 831,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12464/IntelR-AtomTM-CPU--Z3775----146GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo L7500",
    "rank": 1127,
    "benchmark": 34.1,
    "samples": 183,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6265/IntelR-CoreTM2-Duo-CPU-----L7500----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T7100",
    "rank": 1128,
    "benchmark": 34.1,
    "samples": 1201,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2268/IntelR-CoreTM2-Duo-CPU-----T7100----180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 3400+",
    "rank": 1129,
    "benchmark": 34,
    "samples": 27,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1056/AMD-Athlontm-64-Processor-3400-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Turion X2 Ultra Mobile ZM-82",
    "rank": 1130,
    "benchmark": 33.9,
    "samples": 195,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2211/AMD-Turiontm-X2-Ultra-Dual-Core-Mobile-ZM-82"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium Dual T3400",
    "rank": 1131,
    "benchmark": 33.9,
    "samples": 2368,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5174/IntelR-PentiumR-Dual--CPU--T3400----216GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo U9600",
    "rank": 1132,
    "benchmark": 33.9,
    "samples": 295,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4270/IntelR-CoreTM2-Duo-CPU-----U9600----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium Dual E2180",
    "rank": 1133,
    "benchmark": 33.8,
    "samples": 6496,
    "url": "https://cpu.userbenchmark.com/SpeedTest/814/IntelR-PentiumR-Dual--CPU--E2180----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Turion 64 X2 Mobile Technology TL-60",
    "rank": 1134,
    "benchmark": 33.8,
    "samples": 997,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2315/AMD-Turiontm-64-X2-Mobile-Technology-TL-60"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium N4200",
    "rank": 1135,
    "benchmark": 33.7,
    "samples": 10533,
    "url": "https://cpu.userbenchmark.com/SpeedTest/196248/IntelR-PentiumR-CPU-N4200---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 4300",
    "rank": 1136,
    "benchmark": 33.7,
    "samples": 2245,
    "url": "https://cpu.userbenchmark.com/SpeedTest/977/IntelR-CoreTM2-CPU----------4300----180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 3000+",
    "rank": 1137,
    "benchmark": 33.6,
    "samples": 285,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5460/AMD-Athlontm-64-Processor-3000-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T5850",
    "rank": 1138,
    "benchmark": 33.6,
    "samples": 411,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6522/IntelR-CoreTM2-Duo-CPU-----T5850----216GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 3500+",
    "rank": 1139,
    "benchmark": 33.5,
    "samples": 436,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2498/AMD-Athlontm-64-Processor-3500-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 T7200",
    "rank": 1140,
    "benchmark": 33.5,
    "samples": 2119,
    "url": "https://cpu.userbenchmark.com/SpeedTest/248/IntelR-CoreTM2-CPU---------T7200----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo U9400",
    "rank": 1141,
    "benchmark": 33.5,
    "samples": 486,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12007/IntelR-CoreTM2-Duo-CPU-----U9400----140GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-3305M APU",
    "rank": 1142,
    "benchmark": 33.5,
    "samples": 1285,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6638/AMD-A4-3305M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium Dual T3200",
    "rank": 1143,
    "benchmark": 33.4,
    "samples": 1773,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2235/IntelR-PentiumR-Dual--CPU--T3200----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "T2600",
    "rank": 1144,
    "benchmark": 33.4,
    "samples": 135,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4124/Genuine-IntelR-CPU-----------T2600----216GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A10-7300 APU (2014 M.Ka)",
    "rank": 1145,
    "benchmark": 33.3,
    "samples": 4977,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11662/AMD-A10-7300-Radeon-R6-10-Compute-Cores-4C-6G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 3600+",
    "rank": 1146,
    "benchmark": 33.3,
    "samples": 604,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5235/AMD-Athlontm-64-X2-Dual-Core-Processor-3600-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T5750",
    "rank": 1147,
    "benchmark": 33.2,
    "samples": 1763,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6581/IntelR-CoreTM2-Duo-CPU-----T5750----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "T2500",
    "rank": 1148,
    "benchmark": 33.2,
    "samples": 363,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1958/Genuine-IntelR-CPU-----------T2500----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 3800+",
    "rank": 1149,
    "benchmark": 33.1,
    "samples": 264,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2391/AMD-Athlontm-64-Processor-3800-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium Dual E2160",
    "rank": 1150,
    "benchmark": 33,
    "samples": 4072,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2113/IntelR-PentiumR-Dual--CPU--E2160----180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-4455M APU",
    "rank": 1151,
    "benchmark": 33,
    "samples": 1430,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5941/AMD-A6-4455M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N2920",
    "rank": 1152,
    "benchmark": 33,
    "samples": 1279,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8725/IntelR-CeleronR-CPU--N2920----186GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon II M300",
    "rank": 1153,
    "benchmark": 32.8,
    "samples": 1099,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5992/AMD-Athlontm-II-Dual-Core-M300"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-4355M APU",
    "rank": 1154,
    "benchmark": 32.8,
    "samples": 368,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10814/AMD-A4-4355M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "T2400",
    "rank": 1155,
    "benchmark": 32.7,
    "samples": 616,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6584/Genuine-IntelR-CPU-----------T2400----183GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A9-9420 APU (2016 M.SR)",
    "rank": 1156,
    "benchmark": 32.7,
    "samples": 11904,
    "url": "https://cpu.userbenchmark.com/SpeedTest/297050/AMD-A9-9420-RADEON-R5-5-COMPUTE-CORES-2C-3G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T5550",
    "rank": 1157,
    "benchmark": 32.7,
    "samples": 1268,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1673/IntelR-CoreTM2-Duo-CPU-----T5550----183GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium D 3.40GHz",
    "rank": 1158,
    "benchmark": 32.7,
    "samples": 3256,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5820/IntelR-PentiumR-D-CPU-340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 4 3.80GHz",
    "rank": 1159,
    "benchmark": 32.6,
    "samples": 107,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11003/--------------IntelR-PentiumR-4-CPU-380GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A9-9400 APU (2016 M.SR)",
    "rank": 1160,
    "benchmark": 32.6,
    "samples": 1530,
    "url": "https://cpu.userbenchmark.com/SpeedTest/188753/AMD-A9-9400-RADEON-R5-5-COMPUTE-CORES-2C-3G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 T5600",
    "rank": 1161,
    "benchmark": 32.6,
    "samples": 1152,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6306/IntelR-CoreTM2-CPU---------T5600----183GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom Z3770",
    "rank": 1162,
    "benchmark": 32.6,
    "samples": 157,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5592/IntelR-AtomTM-CPU--Z3770----146GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 4000+",
    "rank": 1163,
    "benchmark": 32.6,
    "samples": 57,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10241/AMD-Athlontm-64-Processor-4000-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 T5500",
    "rank": 1164,
    "benchmark": 32.5,
    "samples": 1436,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2561/IntelR-CoreTM2-CPU---------T5500----166GHz"
  },
  {
    "type": "CPU",
    "part_number": "AM9210AVY23AC",
    "brand": "AMD",
    "model": "A6-9210 APU (2016 M.SR)",
    "rank": 1165,
    "benchmark": 32.5,
    "samples": 836,
    "url": "https://cpu.userbenchmark.com/SpeedTest/180033/AMD-A6-9210-RADEON-R4-5-COMPUTE-CORES-2C-3G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Turion 64 X2 Mobile Technology TL-58",
    "rank": 1166,
    "benchmark": 32.5,
    "samples": 482,
    "url": "https://cpu.userbenchmark.com/SpeedTest/817/AMD-Turiontm-64-X2-Mobile-Technology-TL-58"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Turion 64 Mobile Technology ML-32",
    "rank": 1167,
    "benchmark": 32.5,
    "samples": 18,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10530/AMD-Turiontm-64-Mobile-Technology-ML-32"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "T2300",
    "rank": 1168,
    "benchmark": 32.5,
    "samples": 867,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2474/Genuine-IntelR-CPU-----------T2300----166GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core 4000+",
    "rank": 1169,
    "benchmark": 32.4,
    "samples": 2557,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2436/AMD-Athlontm-64-X2-Dual-Core-Processor-4000-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A9-9410 APU (2016 M.SR)",
    "rank": 1170,
    "benchmark": 32.3,
    "samples": 5250,
    "url": "https://cpu.userbenchmark.com/SpeedTest/137162/AMD-A9-9410-RADEON-R5-5-COMPUTE-CORES-2C-3G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T5450",
    "rank": 1171,
    "benchmark": 32.3,
    "samples": 1165,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5075/IntelR-CoreTM2-Duo-CPU-----T5450----166GHz"
  },
  {
    "type": "CPU",
    "part_number": "AM9220AYN23AC",
    "brand": "AMD",
    "model": "A6-9220 APU (2016 M.SR)",
    "rank": 1172,
    "benchmark": 32.2,
    "samples": 4248,
    "url": "https://cpu.userbenchmark.com/SpeedTest/300155/AMD-A6-9220-RADEON-R4-5-COMPUTE-CORES-2C-3G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 3200+",
    "rank": 1173,
    "benchmark": 32.1,
    "samples": 830,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7063/AMD-Athlontm-64-Processor-3200-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-5200 APU",
    "rank": 1174,
    "benchmark": 32.1,
    "samples": 8921,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4574/AMD-A6-5200-APU-with-RadeonTM-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": 2140,
    "rank": 1175,
    "benchmark": 32,
    "samples": 1211,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6453/Genuine-IntelR-CPU------------2140----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N2840",
    "rank": 1176,
    "benchmark": 31.8,
    "samples": 18693,
    "url": "https://cpu.userbenchmark.com/SpeedTest/16086/IntelR-CeleronR-CPU--N2840----216GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium Dual E2140",
    "rank": 1177,
    "benchmark": 31.7,
    "samples": 2154,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4944/IntelR-PentiumR-Dual--CPU--E2140----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium D 3.20GHz",
    "rank": 1178,
    "benchmark": 31.7,
    "samples": 877,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1730/--------------IntelR-PentiumR-D-CPU-320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo T5250",
    "rank": 1179,
    "benchmark": 31.7,
    "samples": 829,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5189/IntelR-CoreTM2-Duo-CPU-----T5250----150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-9120 APU (2016 M.SR)",
    "rank": 1180,
    "benchmark": 31.7,
    "samples": 1312,
    "url": "https://cpu.userbenchmark.com/SpeedTest/308751/AMD-A4-9120-RADEON-R3-4-COMPUTE-CORES-2C-2G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A9-9425 APU (2016 M.SR)",
    "rank": 1181,
    "benchmark": 31.7,
    "samples": 11365,
    "url": "https://cpu.userbenchmark.com/SpeedTest/496441/AMD-A9-9425-RADEON-R5-5-COMPUTE-CORES-2C-3G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-6210 APU R3 Graphics",
    "rank": 1182,
    "benchmark": 31.7,
    "samples": 4495,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12438/AMD-A4-6210-APU-with-AMD-Radeon-R3-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "T2080",
    "rank": 1183,
    "benchmark": 31.7,
    "samples": 432,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4748/Genuine-IntelR-CPU-----------T2080----173GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron J3455",
    "rank": 1184,
    "benchmark": 31.6,
    "samples": 2706,
    "url": "https://cpu.userbenchmark.com/SpeedTest/200485/IntelR-CeleronR-CPU-J3455---150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 4 3.40GHz",
    "rank": 1185,
    "benchmark": 31.6,
    "samples": 982,
    "url": "https://cpu.userbenchmark.com/SpeedTest/293/--------------IntelR-PentiumR-4-CPU-340GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E2-3000M APU",
    "rank": 1186,
    "benchmark": 31.6,
    "samples": 896,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6063/AMD-E2-3000M-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "U7300",
    "rank": 1187,
    "benchmark": 31.5,
    "samples": 1452,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4246/Genuine-IntelR-CPU-----------U7300----130GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N2830",
    "rank": 1188,
    "benchmark": 31.5,
    "samples": 7711,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12104/IntelR-CeleronR-CPU--N2830----216GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom Z3740",
    "rank": 1189,
    "benchmark": 31.5,
    "samples": 1287,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3256/IntelR-AtomTM-CPU--Z3740----133GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Turion 64 X2 Mobile Technology TL-56",
    "rank": 1190,
    "benchmark": 31.4,
    "samples": 321,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2456/AMD-Turiontm-64-X2-Mobile-Technology-TL-56"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 Duo L7100",
    "rank": 1191,
    "benchmark": 31.3,
    "samples": 51,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5778/IntelR-CoreTM2-Duo-CPU-----L7100----120GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 900",
    "rank": 1192,
    "benchmark": 31.3,
    "samples": 2668,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4381/IntelR-CeleronR-CPU----------900----220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E2-7110 APU (2015 M.Ca)",
    "rank": 1193,
    "benchmark": 31.2,
    "samples": 3976,
    "url": "https://cpu.userbenchmark.com/SpeedTest/150118/AMD-E2-7110-APU-with-AMD-Radeon-R2-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "AM9200AKN23AC",
    "brand": "AMD",
    "model": "A6-9200 APU (2016 M.SR)",
    "rank": 1194,
    "benchmark": 31.1,
    "samples": 939,
    "url": "https://cpu.userbenchmark.com/SpeedTest/252093/AMD-A6-9200-RADEON-R4-5-COMPUTE-CORES-2C-3G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron E1500",
    "rank": 1195,
    "benchmark": 31,
    "samples": 280,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8605/IntelR-CeleronR-CPU--------E1500----220GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron E1400",
    "rank": 1196,
    "benchmark": 30.9,
    "samples": 374,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2849/IntelR-CeleronR-CPU--------E1400----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 T5300",
    "rank": 1197,
    "benchmark": 30.9,
    "samples": 266,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2288/IntelR-CoreTM2-CPU---------T5300----173GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "T2250",
    "rank": 1198,
    "benchmark": 30.9,
    "samples": 434,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5955/Genuine-IntelR-CPU-----------T2250----173GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3 U 380",
    "rank": 1199,
    "benchmark": 30.9,
    "samples": 496,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8152/IntelR-CoreTM-i3-CPU-------U-380----133GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core Duo T2350",
    "rank": 1200,
    "benchmark": 30.9,
    "samples": 213,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3830/IntelR-CoreTM-Duo-CPU------T2350----186GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "U2300",
    "rank": 1201,
    "benchmark": 30.8,
    "samples": 245,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2326/Genuine-IntelR-CPU-----------U2300----120GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Turion X2 Dual-Core Mobile RM-70",
    "rank": 1202,
    "benchmark": 30.8,
    "samples": 439,
    "url": "https://cpu.userbenchmark.com/SpeedTest/199/AMD-Turiontm-X2-Dual-Core-Mobile-RM-70"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Turion 64 X2 Mobile Technology TL-52",
    "rank": 1203,
    "benchmark": 30.7,
    "samples": 175,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1892/AMD-Turiontm-64-X2-Mobile-Technology-TL-52"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i5 U 470",
    "rank": 1204,
    "benchmark": 30.7,
    "samples": 306,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6244/IntelR-CoreTM-i5-CPU-------U-470----133GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium D 3.00GHz",
    "rank": 1205,
    "benchmark": 30.7,
    "samples": 3849,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3363/IntelR-PentiumR-D-CPU-300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Turion II Neo N40L",
    "rank": 1206,
    "benchmark": 30.6,
    "samples": 140,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7/AMD-Turiontm-II-Neo-N40L-Dual-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N3450",
    "rank": 1207,
    "benchmark": 30.4,
    "samples": 5632,
    "url": "https://cpu.userbenchmark.com/SpeedTest/208922/IntelR-CeleronR-CPU-N3450---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N4020",
    "rank": 1208,
    "benchmark": 30.4,
    "samples": 970,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1134763/IntelR-CeleronR-N4020-CPU---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "U4100",
    "rank": 1209,
    "benchmark": 30.4,
    "samples": 940,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10746/Genuine-IntelR-CPU-----------U4100----130GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium Dual T2370",
    "rank": 1210,
    "benchmark": 30.3,
    "samples": 484,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4795/IntelR-PentiumR-Dual--CPU--T2370----173GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 4 3.20GHz",
    "rank": 1211,
    "benchmark": 30.3,
    "samples": 2573,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7095/--------------IntelR-PentiumR-4-CPU-320GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core2 T5200",
    "rank": 1212,
    "benchmark": 30.2,
    "samples": 278,
    "url": "https://cpu.userbenchmark.com/SpeedTest/11616/IntelR-CoreTM2-CPU---------T5200----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium D 2.80GHz",
    "rank": 1213,
    "benchmark": 30.2,
    "samples": 3432,
    "url": "https://cpu.userbenchmark.com/SpeedTest/267/--------------IntelR-PentiumR-D-CPU-280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": 575,
    "rank": 1214,
    "benchmark": 30.2,
    "samples": 381,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4105/Genuine-IntelR-CPU-------------575----200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium Dual T2330",
    "rank": 1215,
    "benchmark": 30.2,
    "samples": 738,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6733/IntelR-PentiumR-Dual--CPU--T2330----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N3160",
    "rank": 1216,
    "benchmark": 30.1,
    "samples": 1451,
    "url": "https://cpu.userbenchmark.com/SpeedTest/166661/IntelR-CeleronR-CPU--N3160----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon X2 Dual-Core QL-65",
    "rank": 1217,
    "benchmark": 30.1,
    "samples": 454,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4672/AMD-Athlontm-X2-Dual-Core-QL-65"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium Dual T2390",
    "rank": 1218,
    "benchmark": 30.1,
    "samples": 1033,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2090/IntelR-PentiumR-Dual--CPU--T2390----186GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium Dual T2310",
    "rank": 1219,
    "benchmark": 30,
    "samples": 395,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2719/IntelR-PentiumR-Dual--CPU--T2310----146GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Core i3 U 330",
    "rank": 1220,
    "benchmark": 30,
    "samples": 305,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1602/IntelR-CoreTM-i3-CPU-------U-330----120GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom x7-Z8700",
    "rank": 1221,
    "benchmark": 29.9,
    "samples": 1968,
    "url": "https://cpu.userbenchmark.com/SpeedTest/27122/IntelR-AtomTM-x7-Z8700--CPU---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "FH8068003067416",
    "brand": "Intel",
    "model": "Celeron J4005",
    "rank": 1222,
    "benchmark": 29.8,
    "samples": 1010,
    "url": "https://cpu.userbenchmark.com/SpeedTest/473105/IntelR-CeleronR-J4005-CPU---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E2-9000 APU (2016 M.SR)",
    "rank": 1223,
    "benchmark": 29.8,
    "samples": 1268,
    "url": "https://cpu.userbenchmark.com/SpeedTest/339888/AMD-E2-9000-RADEON-R2-4-COMPUTE-CORES-2C-2G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Sempron 3400+",
    "rank": 1224,
    "benchmark": 29.7,
    "samples": 217,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8329/AMD-Semprontm-Processor-3400-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E2-9010 APU (2016 M.SR)",
    "rank": 1225,
    "benchmark": 29.6,
    "samples": 212,
    "url": "https://cpu.userbenchmark.com/SpeedTest/175091/AMD-E2-9010-RADEON-R2-4-COMPUTE-CORES-2C-2G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 4 3.00GHz",
    "rank": 1226,
    "benchmark": 29.6,
    "samples": 6295,
    "url": "https://cpu.userbenchmark.com/SpeedTest/440/--------------IntelR-PentiumR-4-CPU-300GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium N3710",
    "rank": 1227,
    "benchmark": 29.2,
    "samples": 9822,
    "url": "https://cpu.userbenchmark.com/SpeedTest/141841/IntelR-PentiumR-CPU--N3710----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom x7-Z8750",
    "rank": 1228,
    "benchmark": 29,
    "samples": 337,
    "url": "https://cpu.userbenchmark.com/SpeedTest/177483/IntelR-AtomTM-x7-Z8750--CPU---160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium N3700",
    "rank": 1229,
    "benchmark": 29,
    "samples": 9129,
    "url": "https://cpu.userbenchmark.com/SpeedTest/33474/IntelR-PentiumR-CPU--N3700----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Sempron 3600+",
    "rank": 1230,
    "benchmark": 28.9,
    "samples": 117,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1005/Mobile-AMD-Semprontm-Processor-3600-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "AthlonX2 DualCore QL-60",
    "rank": 1231,
    "benchmark": 28.9,
    "samples": 21,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6294/AMD-AthlontmX2-DualCore-QL-60"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core TK-55",
    "rank": 1232,
    "benchmark": 28.8,
    "samples": 276,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1927/AMD-Athlontm-64-X2-Dual-Core-Processor-TK-55"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N2820",
    "rank": 1233,
    "benchmark": 28.8,
    "samples": 1742,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5994/IntelR-CeleronR-CPU--N2820----213GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium M processor 1.86GHz",
    "rank": 1234,
    "benchmark": 28.8,
    "samples": 171,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4587/--------IntelR-PentiumR-M-processor-186GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N2815",
    "rank": 1235,
    "benchmark": 28.7,
    "samples": 908,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9736/IntelR-CeleronR-CPU--N2815----186GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 4 2.80GHz",
    "rank": 1236,
    "benchmark": 28.7,
    "samples": 1445,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3163/--------------IntelR-PentiumR-4-CPU-280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-5000 APU",
    "rank": 1237,
    "benchmark": 28.7,
    "samples": 8425,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5321/AMD-A4-5000-APU-with-RadeonTM-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon X2 Dual-Core QL-64",
    "rank": 1238,
    "benchmark": 28.6,
    "samples": 374,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3720/AMD-Athlontm-X2-Dual-Core-QL-64"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N3150",
    "rank": 1239,
    "benchmark": 28.6,
    "samples": 2328,
    "url": "https://cpu.userbenchmark.com/SpeedTest/28103/IntelR-CeleronR-CPU--N3150----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom x5-Z8550",
    "rank": 1240,
    "benchmark": 28.5,
    "samples": 543,
    "url": "https://cpu.userbenchmark.com/SpeedTest/195658/IntelR-AtomTM-x5-Z8550--CPU---144GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A6-7000 APU (2014 M.Ka)",
    "rank": 1241,
    "benchmark": 28.4,
    "samples": 199,
    "url": "https://cpu.userbenchmark.com/SpeedTest/27400/AMD-A6-7000-Radeon-R4-5-Compute-Cores-2C-3G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium M processor 1.73GHz",
    "rank": 1242,
    "benchmark": 28.3,
    "samples": 280,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7488/--------IntelR-PentiumR-M-processor-173GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E-350D APU",
    "rank": 1243,
    "benchmark": 28.2,
    "samples": 233,
    "url": "https://cpu.userbenchmark.com/SpeedTest/6589/AMD-E-350D-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon Neo X2 Dual Core L335",
    "rank": 1244,
    "benchmark": 28.1,
    "samples": 161,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4043/AMD-Athlontm-Neo-X2-Dual-Core-Processor-L335"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom x5-Z8330",
    "rank": 1245,
    "benchmark": 28.1,
    "samples": 255,
    "url": "https://cpu.userbenchmark.com/SpeedTest/153094/IntelR-AtomTM-x5-Z8330--CPU---144GHz"
  },
  {
    "type": "CPU",
    "part_number": "FH8068003067417",
    "brand": "Intel",
    "model": "Celeron N4000",
    "rank": 1246,
    "benchmark": 27.9,
    "samples": 11720,
    "url": "https://cpu.userbenchmark.com/SpeedTest/503050/IntelR-CeleronR-N4000-CPU---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E2-2000 APU (2012 M.Za)",
    "rank": 1247,
    "benchmark": 27.8,
    "samples": 785,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10908/AMD-E2-2000-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom x5-Z8500",
    "rank": 1248,
    "benchmark": 27.8,
    "samples": 730,
    "url": "https://cpu.userbenchmark.com/SpeedTest/38612/IntelR-AtomTM-x5-Z8500--CPU---144GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E2-9000e APU (2016 M.SR)",
    "rank": 1249,
    "benchmark": 27.8,
    "samples": 2750,
    "url": "https://cpu.userbenchmark.com/SpeedTest/321458/AMD-E2-9000e-RADEON-R2-4-COMPUTE-CORES-2C-2G"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom D2700",
    "rank": 1250,
    "benchmark": 27.6,
    "samples": 209,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7623/IntelR-AtomTM-CPU-D2700-----213GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 64 X2 Dual Core TK-53",
    "rank": 1251,
    "benchmark": 27.5,
    "samples": 129,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9182/AMD-Athlontm-64-X2-Dual-Core-Processor-TK-53"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 723",
    "rank": 1252,
    "benchmark": 27.4,
    "samples": 44,
    "url": "https://cpu.userbenchmark.com/SpeedTest/10153/IntelR-CeleronR-CPU----------723----120GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon X2 Dual Core BE-2300",
    "rank": 1253,
    "benchmark": 27.3,
    "samples": 37,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12410/AMD-Athlontm-X2-Dual-Core-Processor-BE-2300"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E-450 APU",
    "rank": 1254,
    "benchmark": 27.2,
    "samples": 7386,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2189/AMD-E-450-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Sempron 2800+",
    "rank": 1255,
    "benchmark": 27.1,
    "samples": 147,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4755/AMD-Semprontm-Processor-2800-"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom N2800",
    "rank": 1256,
    "benchmark": 27.1,
    "samples": 373,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8985/IntelR-AtomTM-CPU-N2800-----186GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Sempron 3000+",
    "rank": 1257,
    "benchmark": 27.1,
    "samples": 244,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3648/AMD-Semprontm-Processor-3000-"
  },
  {
    "type": "CPU",
    "part_number": "EM1800GBB22GV",
    "brand": "AMD",
    "model": "E2-1800 APU (2012 M.Za)",
    "rank": 1258,
    "benchmark": 26.8,
    "samples": 3838,
    "url": "https://cpu.userbenchmark.com/SpeedTest/839/AMD-E2-1800-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium D 2.66GHz",
    "rank": 1259,
    "benchmark": 26.8,
    "samples": 362,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4781/-------------IntelR-PentiumR-D--CPU-266GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E-350",
    "rank": 1260,
    "benchmark": 26.4,
    "samples": 5327,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5356/AMD-E-350-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron J3355",
    "rank": 1261,
    "benchmark": 26.3,
    "samples": 733,
    "url": "https://cpu.userbenchmark.com/SpeedTest/247225/IntelR-CeleronR-CPU-J3355---200GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon Neo MV-40",
    "rank": 1262,
    "benchmark": 26.2,
    "samples": 175,
    "url": "https://cpu.userbenchmark.com/SpeedTest/12003/AMD-Athlontm-Neo-Processor-MV-40"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 4 2.60GHz",
    "rank": 1263,
    "benchmark": 26,
    "samples": 76,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5254/--------------IntelR-PentiumR-4-CPU-260GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Athlon 2650e",
    "rank": 1264,
    "benchmark": 26,
    "samples": 136,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4742/AMD-Athlontm-Processor-2650e"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 4 2.93GHz",
    "rank": 1265,
    "benchmark": 25.9,
    "samples": 125,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4199/--------------IntelR-PentiumR-4-CPU-293GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N3010",
    "rank": 1266,
    "benchmark": 25.8,
    "samples": 280,
    "url": "https://cpu.userbenchmark.com/SpeedTest/195388/IntelR-CeleronR-CPU--N3010----104GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium M processor 1.60GHz",
    "rank": 1267,
    "benchmark": 25.7,
    "samples": 145,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4076/--------IntelR-PentiumR-M-processor-160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 4 3.06GHz",
    "rank": 1268,
    "benchmark": 25.5,
    "samples": 774,
    "url": "https://cpu.userbenchmark.com/SpeedTest/614/--------------IntelR-PentiumR-4-CPU-306GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron M 430",
    "rank": 1269,
    "benchmark": 25.5,
    "samples": 143,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4999/IntelR-CeleronR-M-CPU--------430----173GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom x5-Z8300",
    "rank": 1270,
    "benchmark": 25.3,
    "samples": 2939,
    "url": "https://cpu.userbenchmark.com/SpeedTest/37765/IntelR-AtomTM-x5-Z8300--CPU---144GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N3000",
    "rank": 1271,
    "benchmark": 24.1,
    "samples": 162,
    "url": "https://cpu.userbenchmark.com/SpeedTest/34511/IntelR-CeleronR-CPU--N3000----104GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom x5-Z8350",
    "rank": 1272,
    "benchmark": 24.1,
    "samples": 8286,
    "url": "https://cpu.userbenchmark.com/SpeedTest/143924/IntelR-AtomTM-x5-Z8350--CPU---144GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "C-60 APU",
    "rank": 1273,
    "benchmark": 24,
    "samples": 1943,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3147/AMD-C-60-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom D525",
    "rank": 1274,
    "benchmark": 24,
    "samples": 1965,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5666/IntelR-AtomTM-CPU-D525-----180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E1-1200 APU",
    "rank": 1275,
    "benchmark": 23.9,
    "samples": 5543,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2118/AMD-E1-1200-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 4 2.40GHz",
    "rank": 1276,
    "benchmark": 23.9,
    "samples": 197,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5589/--------------IntelR-PentiumR-4-CPU-240GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N3350",
    "rank": 1277,
    "benchmark": 23.7,
    "samples": 11967,
    "url": "https://cpu.userbenchmark.com/SpeedTest/197164/IntelR-CeleronR-CPU-N3350---110GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E-300 APU",
    "rank": 1278,
    "benchmark": 23.6,
    "samples": 6626,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2468/AMD-E-300-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Pentium 4 2.66GHz",
    "rank": 1279,
    "benchmark": 23.5,
    "samples": 205,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4462/--------------IntelR-PentiumR-4-CPU-266GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E1-7010 APU (2015 M.Ca)",
    "rank": 1280,
    "benchmark": 23.1,
    "samples": 1352,
    "url": "https://cpu.userbenchmark.com/SpeedTest/167591/AMD-E1-7010-APU-with-AMD-Radeon-R2-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom N570",
    "rank": 1281,
    "benchmark": 22.6,
    "samples": 1125,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3881/IntelR-AtomTM-CPU-N570-----166GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom N2600",
    "rank": 1282,
    "benchmark": 22.5,
    "samples": 1932,
    "url": "https://cpu.userbenchmark.com/SpeedTest/704/IntelR-AtomTM-CPU-N2600-----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N3060",
    "rank": 1283,
    "benchmark": 21.8,
    "samples": 16525,
    "url": "https://cpu.userbenchmark.com/SpeedTest/130019/IntelR-CeleronR-CPU--N3060----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron 2.80GHz",
    "rank": 1284,
    "benchmark": 21.6,
    "samples": 42,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8814/IntelR-CeleronR-CPU-280GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron M processor 1.50GHz",
    "rank": 1285,
    "benchmark": 21.6,
    "samples": 59,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5383/IntelR-CeleronR-M-processor---------150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E1-2500 APU",
    "rank": 1286,
    "benchmark": 21.5,
    "samples": 2774,
    "url": "https://cpu.userbenchmark.com/SpeedTest/9778/AMD-E1-2500-APU-with-RadeonTM-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom 330",
    "rank": 1287,
    "benchmark": 21.4,
    "samples": 900,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1917/IntelR-AtomTM-CPU--330-----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom N550",
    "rank": 1288,
    "benchmark": 21.4,
    "samples": 723,
    "url": "https://cpu.userbenchmark.com/SpeedTest/182/IntelR-AtomTM-CPU-N550-----150GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "C-50",
    "rank": 1289,
    "benchmark": 21.3,
    "samples": 1648,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3082/AMD-C-50-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom N455",
    "rank": 1290,
    "benchmark": 21.2,
    "samples": 2312,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2394/IntelR-AtomTM-CPU-N455-----166GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron N3050",
    "rank": 1291,
    "benchmark": 21.1,
    "samples": 11566,
    "url": "https://cpu.userbenchmark.com/SpeedTest/31154/IntelR-CeleronR-CPU--N3050----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom N450",
    "rank": 1292,
    "benchmark": 21,
    "samples": 2160,
    "url": "https://cpu.userbenchmark.com/SpeedTest/3190/IntelR-AtomTM-CPU-N450-----166GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom D510",
    "rank": 1293,
    "benchmark": 20.9,
    "samples": 406,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5452/IntelR-AtomTM-CPU-D510-----166GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom N280",
    "rank": 1294,
    "benchmark": 20.9,
    "samples": 512,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4556/---------IntelR-AtomTM-CPU-N280-----166GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom D410",
    "rank": 1295,
    "benchmark": 20.8,
    "samples": 206,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13305/---------IntelR-AtomTM-CPU-D410-----166GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Celeron D 3.06GHz",
    "rank": 1296,
    "benchmark": 20.8,
    "samples": 269,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13158/IntelR-CeleronR-D-CPU-306GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom N435",
    "rank": 1297,
    "benchmark": 20.7,
    "samples": 37,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13319/IntelR-AtomTM-CPU-N435-----133GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Z-60 APU",
    "rank": 1298,
    "benchmark": 20.4,
    "samples": 4,
    "url": "https://cpu.userbenchmark.com/SpeedTest/13444/AMD-Z-60-APU-with-Radeontm-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom N270",
    "rank": 1299,
    "benchmark": 20.1,
    "samples": 2702,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2697/IntelR-AtomTM-CPU-N270-----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom 230",
    "rank": 1300,
    "benchmark": 19.5,
    "samples": 246,
    "url": "https://cpu.userbenchmark.com/SpeedTest/5251/IntelR-AtomTM-CPU--230-----160GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom 9600",
    "rank": 1301,
    "benchmark": 18.7,
    "samples": 604,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7248/AMD-Phenomtm-9600-Quad-Core-Processor"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom Z2760",
    "rank": 1302,
    "benchmark": 18,
    "samples": 639,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2088/IntelR-AtomTM-CPU-Z2760----180GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "E1-2100 APU",
    "rank": 1303,
    "benchmark": 17.8,
    "samples": 3701,
    "url": "https://cpu.userbenchmark.com/SpeedTest/7613/AMD-E1-2100-APU-with-RadeonTM-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-1250 APU",
    "rank": 1304,
    "benchmark": 17.7,
    "samples": 655,
    "url": "https://cpu.userbenchmark.com/SpeedTest/8678/AMD-A4-1250-APU-with-RadeonTM-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "Intel",
    "model": "Atom Z520",
    "rank": 1305,
    "benchmark": 17.7,
    "samples": 242,
    "url": "https://cpu.userbenchmark.com/SpeedTest/4161/---------IntelR-AtomTM-CPU-Z520-----133GHz"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "A4-1200 APU",
    "rank": 1306,
    "benchmark": 17.4,
    "samples": 433,
    "url": "https://cpu.userbenchmark.com/SpeedTest/2520/AMD-A4-1200-APU-with-RadeonTM-HD-Graphics"
  },
  {
    "type": "CPU",
    "part_number": "",
    "brand": "AMD",
    "model": "Phenom 9500",
    "rank": 1307,
    "benchmark": 17,
    "samples": 1085,
    "url": "https://cpu.userbenchmark.com/SpeedTest/1692/AMD-Phenomtm-9500-Quad-Core-Processor"
  }
];
    

  const seedCPU = () => CPU.bulkCreate(cpudata);

module.exports = seedCPU;