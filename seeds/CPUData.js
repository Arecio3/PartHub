const { CPU } = require('../models');
const cpudata = [
    {
      "Type": "CPU",
      "Part Number": "BX8070811900K",
      "Brand": "Intel",
      "Model": "Core i9-11900K",
      "Rank": 1,
      "Benchmark": 109,
      "Samples": 1029,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i9-11900K/Rating/4110"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070811700K",
      "Brand": "Intel",
      "Model": "Core i7-11700K",
      "Rank": 2,
      "Benchmark": 108,
      "Samples": 2099,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-11700K/Rating/4107"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070811900",
      "Brand": "Intel",
      "Model": "Core i9-11900",
      "Rank": 3,
      "Benchmark": 106,
      "Samples": 104,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1515871/11th-Gen-IntelR-CoreTM-i9-11900---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070811900KF",
      "Brand": "Intel",
      "Model": "Core i9-11900KF",
      "Rank": 4,
      "Benchmark": 105,
      "Samples": 139,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1515781/11th-Gen-IntelR-CoreTM-i9-11900KF---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070811700KF",
      "Brand": "Intel",
      "Model": "Core i7-11700KF",
      "Rank": 5,
      "Benchmark": 105,
      "Samples": 368,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1514594/11th-Gen-IntelR-CoreTM-i7-11700KF---360GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070811900F",
      "Brand": "Intel",
      "Model": "Core i9-11900F",
      "Rank": 6,
      "Benchmark": 105,
      "Samples": 88,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1492552/11th-Gen-IntelR-CoreTM-i9-11900F---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070811600KF",
      "Brand": "Intel",
      "Model": "Core i5-11600KF",
      "Rank": 7,
      "Benchmark": 105,
      "Samples": 240,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1512279/11th-Gen-IntelR-CoreTM-i5-11600KF---390GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070811600K",
      "Brand": "Intel",
      "Model": "Core i5-11600K",
      "Rank": 8,
      "Benchmark": 104,
      "Samples": 873,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-11600K/Rating/4113"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070811700",
      "Brand": "Intel",
      "Model": "Core i7-11700",
      "Rank": 9,
      "Benchmark": 103,
      "Samples": 360,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1450761/11th-Gen-IntelR-CoreTM-i7-11700---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070811500",
      "Brand": "Intel",
      "Model": "Core i5-11500",
      "Rank": 10,
      "Benchmark": 102,
      "Samples": 223,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1496869/11th-Gen-IntelR-CoreTM-i5-11500---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110900K",
      "Brand": "Intel",
      "Model": "Core i9-10900K",
      "Rank": 11,
      "Benchmark": 102,
      "Samples": 47621,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i9-10900K/Rating/4071"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I99900KS",
      "Brand": "Intel",
      "Model": "Core i9-9900KS",
      "Rank": 12,
      "Benchmark": 101,
      "Samples": 7616,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/929964/IntelR-CoreTM-i9-9900KS-CPU---400GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110900KF",
      "Brand": "Intel",
      "Model": "Core i9-10900KF",
      "Rank": 13,
      "Benchmark": 101,
      "Samples": 9857,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1174369/IntelR-CoreTM-i9-10900KF-CPU---370GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000059WOF",
      "Brand": "AMD",
      "Model": "Ryzen 9 5950X",
      "Rank": 14,
      "Benchmark": 101,
      "Samples": 15401,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-9-5950X/Rating/4086"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110850K",
      "Brand": "Intel",
      "Model": "Core i9-10850K",
      "Rank": 15,
      "Benchmark": 101,
      "Samples": 33421,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1255865/IntelR-CoreTM-i9-10850K-CPU---360GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000061WOF",
      "Brand": "AMD",
      "Model": "Ryzen 9 5900X",
      "Rank": 16,
      "Benchmark": 100,
      "Samples": 35362,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-9-5900X/Rating/4087"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070811700F",
      "Brand": "Intel",
      "Model": "Core i7-11700F",
      "Rank": 17,
      "Benchmark": 100,
      "Samples": 219,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1522100/11th-Gen-IntelR-CoreTM-i7-11700F---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000063WOF",
      "Brand": "AMD",
      "Model": "Ryzen 7 5800X",
      "Rank": 18,
      "Benchmark": 99.4,
      "Samples": 67223,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-7-5800X/Rating/4085"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070811400",
      "Brand": "Intel",
      "Model": "Core i5-11400",
      "Rank": 19,
      "Benchmark": 99.3,
      "Samples": 574,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-11400/Rating/4112"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070811400F",
      "Brand": "Intel",
      "Model": "Core i5-11400F",
      "Rank": 20,
      "Benchmark": 99.2,
      "Samples": 703,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-11400F/Rating/4111"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110700K",
      "Brand": "Intel",
      "Model": "Core i7-10700K",
      "Rank": 21,
      "Benchmark": 99.1,
      "Samples": 94908,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-10700K/Rating/4070"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 9 5900",
      "Rank": 22,
      "Benchmark": 98.7,
      "Samples": 38,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1528736/AMD-Ryzen-9-5900-12-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 7 5800",
      "Rank": 23,
      "Benchmark": 98.5,
      "Samples": 68,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1496609/AMD-Ryzen-7-5800-8-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110700KF",
      "Brand": "Intel",
      "Model": "Core i7-10700KF",
      "Rank": 24,
      "Benchmark": 98.3,
      "Samples": 12031,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1171560/IntelR-CoreTM-i7-10700KF-CPU---380GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110900F",
      "Brand": "Intel",
      "Model": "Core i9-10900F",
      "Rank": 25,
      "Benchmark": 97.8,
      "Samples": 2947,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1196789/IntelR-CoreTM-i9-10900F-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I99900KF",
      "Brand": "Intel",
      "Model": "Core i9-9900KF",
      "Rank": 26,
      "Benchmark": 97.6,
      "Samples": 13197,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/764533/IntelR-CoreTM-i9-9900KF-CPU---360GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I79700K",
      "Brand": "Intel",
      "Model": "Core i7-9700K",
      "Rank": 27,
      "Benchmark": 97.5,
      "Samples": 379144,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-9700K/Rating/4030"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I99900K",
      "Brand": "Intel",
      "Model": "Core i9-9900K",
      "Rank": 28,
      "Benchmark": 97.5,
      "Samples": 352580,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i9-9900K/Rating/4028"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i9-10900",
      "Rank": 29,
      "Benchmark": 97.1,
      "Samples": 5339,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1169242/IntelR-CoreTM-i9-10900-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I79700KF",
      "Brand": "Intel",
      "Model": "Core i7-9700KF",
      "Rank": 30,
      "Benchmark": 97,
      "Samples": 18496,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/710154/IntelR-CoreTM-i7-9700KF-CPU---360GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000065BOX",
      "Brand": "AMD",
      "Model": "Ryzen 5 5600X",
      "Rank": 31,
      "Benchmark": 96.8,
      "Samples": 96323,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-5-5600X/Rating/4084"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110600KF",
      "Brand": "Intel",
      "Model": "Core i5-10600KF",
      "Rank": 32,
      "Benchmark": 95.8,
      "Samples": 6393,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1225152/IntelR-CoreTM-i5-10600KF-CPU---410GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110600K",
      "Brand": "Intel",
      "Model": "Core i5-10600K",
      "Rank": 33,
      "Benchmark": 95.1,
      "Samples": 31866,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-10600K/Rating/4072"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110700F",
      "Brand": "Intel",
      "Model": "Core i7-10700F",
      "Rank": 34,
      "Benchmark": 95.1,
      "Samples": 17317,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1183814/IntelR-CoreTM-i7-10700F-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110700",
      "Brand": "Intel",
      "Model": "Core i7-10700",
      "Rank": 35,
      "Benchmark": 94.8,
      "Samples": 30227,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-10700/Rating/4077"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I99900",
      "Brand": "Intel",
      "Model": "Core i9-9900",
      "Rank": 36,
      "Benchmark": 94.2,
      "Samples": 7180,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/816115/IntelR-CoreTM-i9-9900-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I59600KF",
      "Brand": "Intel",
      "Model": "Core i5-9600KF",
      "Rank": 37,
      "Benchmark": 94.1,
      "Samples": 50965,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/772658/IntelR-CoreTM-i5-9600KF-CPU---370GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I59600K",
      "Brand": "Intel",
      "Model": "Core i5-9600K",
      "Rank": 38,
      "Benchmark": 94.1,
      "Samples": 280673,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-9600K/Rating/4031"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I78086K",
      "Brand": "Intel",
      "Model": "Core i7-8086K",
      "Rank": 39,
      "Benchmark": 93.6,
      "Samples": 34129,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/516988/IntelR-CoreTM-i7-8086K-CPU---400GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110600",
      "Brand": "Intel",
      "Model": "Core i5-10600",
      "Rank": 40,
      "Benchmark": 93.6,
      "Samples": 3848,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-10600/Rating/4069"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I79700F",
      "Brand": "Intel",
      "Model": "Core i7-9700F",
      "Rank": 41,
      "Benchmark": 92.9,
      "Samples": 29659,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/816132/IntelR-CoreTM-i7-9700F-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I79700",
      "Brand": "Intel",
      "Model": "Core i7-9700",
      "Rank": 42,
      "Benchmark": 92.9,
      "Samples": 50285,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/816180/IntelR-CoreTM-i7-9700-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I78700K",
      "Brand": "Intel",
      "Model": "Core i7-8700K",
      "Rank": 43,
      "Benchmark": 92.4,
      "Samples": 622414,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-8700K/Rating/3937"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I59600",
      "Brand": "Intel",
      "Model": "Core i5-9600",
      "Rank": 44,
      "Benchmark": 91.8,
      "Samples": 499,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/853186/IntelR-CoreTM-i5-9600-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I58600K",
      "Brand": "Intel",
      "Model": "Core i5-8600K",
      "Rank": 45,
      "Benchmark": 91.5,
      "Samples": 214916,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-8600K/Rating/3941"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 9 5900HS",
      "Rank": 46,
      "Benchmark": 91.3,
      "Samples": 1717,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1452199/AMD-Ryzen-9-5900HS-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 9 5900HX",
      "Rank": 47,
      "Benchmark": 91.2,
      "Samples": 1031,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1449683/AMD-Ryzen-9-5900HX-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110500",
      "Brand": "Intel",
      "Model": "Core i5-10500",
      "Rank": 48,
      "Benchmark": 91,
      "Samples": 3801,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-10500/Rating/4078"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i9-10980HK",
      "Rank": 49,
      "Benchmark": 89.7,
      "Samples": 3204,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1065893/IntelR-CoreTM-i9-10980HK-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-10320",
      "Rank": 50,
      "Benchmark": 89.2,
      "Samples": 240,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1180543/IntelR-CoreTM-i3-10320-CPU---380GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I59500",
      "Brand": "Intel",
      "Model": "Core i5-9500",
      "Rank": 51,
      "Benchmark": 88.9,
      "Samples": 5332,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/825467/IntelR-CoreTM-i5-9500-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I78700",
      "Brand": "Intel",
      "Model": "Core i7-8700",
      "Rank": 52,
      "Benchmark": 88.8,
      "Samples": 243372,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-8700/Rating/3940"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110400",
      "Brand": "Intel",
      "Model": "Core i5-10400",
      "Rank": 53,
      "Benchmark": 88.8,
      "Samples": 29022,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-10400/Rating/4073"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I39350KF",
      "Brand": "Intel",
      "Model": "Core i3-9350KF",
      "Rank": 54,
      "Benchmark": 88.5,
      "Samples": 834,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-9350KF/Rating/4055"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000279WOF",
      "Brand": "AMD",
      "Model": "Ryzen 7 3800XT",
      "Rank": 55,
      "Benchmark": 88.5,
      "Samples": 10329,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1218139/AMD-Ryzen-7-3800XT-8-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000277WOF",
      "Brand": "AMD",
      "Model": "Ryzen 9 3900XT",
      "Rank": 56,
      "Benchmark": 88.4,
      "Samples": 13072,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1202614/AMD-Ryzen-9-3900XT-12-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I58600",
      "Brand": "Intel",
      "Model": "Core i5-8600",
      "Rank": 57,
      "Benchmark": 88.3,
      "Samples": 15328,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/477251/IntelR-CoreTM-i5-8600-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000023BOX",
      "Brand": "AMD",
      "Model": "Ryzen 9 3900X",
      "Rank": 58,
      "Benchmark": 88.3,
      "Samples": 214715,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-9-3900X/Rating/4044"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 7 4700G",
      "Rank": 59,
      "Benchmark": 88.2,
      "Samples": 358,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1135003/AMD-Ryzen-7-4700G-8-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110400F",
      "Brand": "Intel",
      "Model": "Core i5-10400F",
      "Rank": 60,
      "Benchmark": 88,
      "Samples": 46000,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-10400F/Rating/4079"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000051WOF",
      "Brand": "AMD",
      "Model": "Ryzen 9 3950X",
      "Rank": 61,
      "Benchmark": 87.7,
      "Samples": 37879,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-9-3950X/Rating/4057"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000025BOX",
      "Brand": "AMD",
      "Model": "Ryzen 7 3800X",
      "Rank": 62,
      "Benchmark": 87.6,
      "Samples": 132661,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-7-3800X/Rating/4047"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I77740X",
      "Brand": "Intel",
      "Model": "Core i7-7740X",
      "Rank": 63,
      "Benchmark": 87.6,
      "Samples": 3965,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/304932/IntelR-CoreTM-i7-7740X-CPU---430GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8069510940X",
      "Brand": "Intel",
      "Model": "Core i9-10940X",
      "Rank": 64,
      "Benchmark": 87.5,
      "Samples": 1081,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/932085/IntelR-CoreTM-i9-10940X-CPU---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-10500H",
      "Rank": 65,
      "Benchmark": 87.2,
      "Samples": 203,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1449890/IntelR-CoreTM-i5-10500H-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80671I76900K",
      "Brand": "Intel",
      "Model": "Core i7-6900K",
      "Rank": 66,
      "Benchmark": 87.2,
      "Samples": 6037,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-6900K/Rating/3605"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000071BOX",
      "Brand": "AMD",
      "Model": "Ryzen 7 3700X",
      "Rank": 67,
      "Benchmark": 87,
      "Samples": 557213,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-7-3700X/Rating/4043"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110300",
      "Brand": "Intel",
      "Model": "Core i3-10300",
      "Rank": 68,
      "Benchmark": 86.9,
      "Samples": 187,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-10300/Rating/4074"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8069510920X",
      "Brand": "Intel",
      "Model": "Core i9-10920X",
      "Rank": 69,
      "Benchmark": 86.9,
      "Samples": 1442,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/931866/IntelR-CoreTM-i9-10920X-CPU---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I77700K",
      "Brand": "Intel",
      "Model": "Core i7-7700K",
      "Rank": 70,
      "Benchmark": 86.9,
      "Samples": 529883,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-7700K/Rating/3647"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 7 5800HS",
      "Rank": 71,
      "Benchmark": 86.8,
      "Samples": 224,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1463823/AMD-Ryzen-7-5800HS-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i9-10900T",
      "Rank": 72,
      "Benchmark": 86.7,
      "Samples": 67,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1238258/IntelR-CoreTM-i9-10900T-CPU---190GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 7 5800H",
      "Rank": 73,
      "Benchmark": 86.7,
      "Samples": 2383,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1442974/AMD-Ryzen-7-5800H-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-10870H",
      "Rank": 74,
      "Benchmark": 86.5,
      "Samples": 5246,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1322918/IntelR-CoreTM-i7-10870H-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-10700T",
      "Rank": 75,
      "Benchmark": 86.5,
      "Samples": 404,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1218230/IntelR-CoreTM-i7-10700T-CPU---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8069510900X",
      "Brand": "Intel",
      "Model": "Core i9-10900X",
      "Rank": 76,
      "Benchmark": 86.5,
      "Samples": 2620,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/969950/IntelR-CoreTM-i9-10900X-CPU---370GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I99920X",
      "Brand": "Intel",
      "Model": "Core i9-9920X",
      "Rank": 77,
      "Benchmark": 86.4,
      "Samples": 850,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/656219/IntelR-CoreTM-i9-9920X-CPU---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 9 5980HS",
      "Rank": 78,
      "Benchmark": 86.3,
      "Samples": 14,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1493102/AMD-Ryzen-9-5980HS-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110105F",
      "Brand": "Intel",
      "Model": "Core i3-10105F",
      "Rank": 79,
      "Benchmark": 86.2,
      "Samples": 175,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1482345/IntelR-CoreTM-i3-10105F-CPU---370GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I58500",
      "Brand": "Intel",
      "Model": "Core i5-8500",
      "Rank": 80,
      "Benchmark": 86.2,
      "Samples": 30224,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/447884/IntelR-CoreTM-i5-8500-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I99940X",
      "Brand": "Intel",
      "Model": "Core i9-9940X",
      "Rank": 81,
      "Benchmark": 86,
      "Samples": 1141,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/641326/IntelR-CoreTM-i9-9940X-CPU---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000281BOX",
      "Brand": "AMD",
      "Model": "Ryzen 5 3600XT",
      "Rank": 82,
      "Benchmark": 85.9,
      "Samples": 22384,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1211585/AMD-Ryzen-5-3600XT-6-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I59400F",
      "Brand": "Intel",
      "Model": "Core i5-9400F",
      "Rank": 83,
      "Benchmark": 85.9,
      "Samples": 204349,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-9400F/Rating/4051"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80671I76950X",
      "Brand": "Intel",
      "Model": "Core i7-6950X",
      "Rank": 84,
      "Benchmark": 85.8,
      "Samples": 3802,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-6950X/Rating/3604"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I59400",
      "Brand": "Intel",
      "Model": "Core i5-9400",
      "Rank": 85,
      "Benchmark": 85.7,
      "Samples": 19896,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/735306/IntelR-CoreTM-i5-9400-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I99960X",
      "Brand": "Intel",
      "Model": "Core i9-9960X",
      "Rank": 86,
      "Benchmark": 85.6,
      "Samples": 616,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/653060/IntelR-CoreTM-i9-9960X-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-10875H",
      "Rank": 87,
      "Benchmark": 85.5,
      "Samples": 15567,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1111393/IntelR-CoreTM-i7-10875H-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i9-10885H",
      "Rank": 88,
      "Benchmark": 85.3,
      "Samples": 2431,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1174414/IntelR-CoreTM-i9-10885H-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 9 4900HS",
      "Rank": 89,
      "Benchmark": 85,
      "Samples": 7563,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1084184/AMD-Ryzen-9-4900HS-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80671I76850K",
      "Brand": "Intel",
      "Model": "Core i7-6850K",
      "Rank": 90,
      "Benchmark": 85,
      "Samples": 18780,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-6850K/Rating/3606"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-10600T",
      "Rank": 91,
      "Benchmark": 84.9,
      "Samples": 26,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1250930/IntelR-CoreTM-i5-10600T-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I57640X",
      "Brand": "Intel",
      "Model": "Core i5-7640X",
      "Rank": 92,
      "Benchmark": 84.8,
      "Samples": 2423,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/310543/IntelR-CoreTM-i5-7640X-CPU---400GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-1000000158",
      "Brand": "AMD",
      "Model": "Ryzen 5 3500X",
      "Rank": 93,
      "Benchmark": 84.8,
      "Samples": 28161,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-5-3500X/Rating/4052"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000022BOX",
      "Brand": "AMD",
      "Model": "Ryzen 5 3600X",
      "Rank": 94,
      "Benchmark": 84.5,
      "Samples": 241310,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-5-3600X/Rating/4041"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 9 4900H",
      "Rank": 95,
      "Benchmark": 84.4,
      "Samples": 2243,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1185620/AMD-Ryzen-9-4900H-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "100-000000098",
      "Brand": "AMD",
      "Model": "Ryzen 7 4800H",
      "Rank": 96,
      "Benchmark": 84.4,
      "Samples": 28955,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1032976/AMD-Ryzen-7-4800H-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I97960X",
      "Brand": "Intel",
      "Model": "Core i9-7960X",
      "Rank": 97,
      "Benchmark": 84.2,
      "Samples": 1741,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/357952/IntelR-CoreTM-i9-7960X-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I58400",
      "Brand": "Intel",
      "Model": "Core i5-8400",
      "Rank": 98,
      "Benchmark": 84.2,
      "Samples": 234432,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-8400/Rating/3939"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110100F",
      "Brand": "Intel",
      "Model": "Core i3-10100F",
      "Rank": 99,
      "Benchmark": 84.2,
      "Samples": 8857,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-10100F/Rating/4082"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000010WOF",
      "Brand": "AMD",
      "Model": "Ryzen TR 3960X",
      "Rank": 100,
      "Benchmark": 84.2,
      "Samples": 3814,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/969111/AMD-Ryzen-Threadripper-3960X-24-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "100-1000000050",
      "Brand": "AMD",
      "Model": "Ryzen 5 3500",
      "Rank": 101,
      "Benchmark": 84.1,
      "Samples": 12483,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-5-3500/Rating/4053"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-10850H",
      "Rank": 102,
      "Benchmark": 84.1,
      "Samples": 1986,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1160496/IntelR-CoreTM-i7-10850H-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8069510980XE",
      "Brand": "Intel",
      "Model": "Core i9-10980XE",
      "Rank": 103,
      "Benchmark": 84,
      "Samples": 1760,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/935899/IntelR-CoreTM-i9-10980XE-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX8070110100",
      "Brand": "Intel",
      "Model": "Core i3-10100",
      "Rank": 104,
      "Benchmark": 83.9,
      "Samples": 13332,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-10100/Rating/4075"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000031BOX",
      "Brand": "AMD",
      "Model": "Ryzen 5 3600",
      "Rank": 105,
      "Benchmark": 83.9,
      "Samples": 814966,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-5-3600/Rating/4040"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I99900X",
      "Brand": "Intel",
      "Model": "Core i9-9900X",
      "Rank": 106,
      "Benchmark": 83.8,
      "Samples": 2230,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/639130/IntelR-CoreTM-i9-9900X-CPU---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000011WOF",
      "Brand": "AMD",
      "Model": "Ryzen TR 3970X",
      "Rank": 107,
      "Benchmark": 83.8,
      "Samples": 3390,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/970030/AMD-Ryzen-Threadripper-3970X-32-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-10500T",
      "Rank": 108,
      "Benchmark": 83.6,
      "Samples": 225,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1204939/IntelR-CoreTM-i5-10500T-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 7 4800HS",
      "Rank": 109,
      "Benchmark": 83.4,
      "Samples": 4938,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1064059/AMD-Ryzen-7-4800HS-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i9-9980HK",
      "Rank": 110,
      "Benchmark": 83.3,
      "Samples": 5019,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/797907/IntelR-CoreTM-i9-9980HK-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I38350K",
      "Brand": "Intel",
      "Model": "Core i3-8350K",
      "Rank": 111,
      "Benchmark": 83.3,
      "Samples": 23770,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-8350K/Rating/3935"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-10750H",
      "Rank": 112,
      "Benchmark": 83.3,
      "Samples": 91000,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1053158/IntelR-CoreTM-i7-10750H-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I97940X",
      "Brand": "Intel",
      "Model": "Core i9-7940X",
      "Rank": 113,
      "Benchmark": 83.3,
      "Samples": 3579,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/353078/IntelR-CoreTM-i9-7940X-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662I76700K",
      "Brand": "Intel",
      "Model": "Core i7-6700K",
      "Rank": 114,
      "Benchmark": 83.1,
      "Samples": 553688,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-6700K/Rating/3502"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I97900X",
      "Brand": "Intel",
      "Model": "Core i9-7900X",
      "Rank": 115,
      "Benchmark": 83.1,
      "Samples": 15075,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i9-7900X/Rating/3936"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80658i75775C",
      "Brand": "Intel",
      "Model": "Core i7-5775C",
      "Rank": 116,
      "Benchmark": 83.1,
      "Samples": 1754,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/30276/IntelR-CoreTM-i7-5775C-CPU---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I74790K",
      "Brand": "Intel",
      "Model": "Core i7-4790K",
      "Rank": 117,
      "Benchmark": 83,
      "Samples": 361946,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-4790K/Rating/2384"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I79800X",
      "Brand": "Intel",
      "Model": "Core i7-9800X",
      "Rank": 118,
      "Benchmark": 83,
      "Samples": 2721,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/651256/IntelR-CoreTM-i7-9800X-CPU---380GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80648I75960X",
      "Brand": "Intel",
      "Model": "Core i7-5960X",
      "Rank": 119,
      "Benchmark": 83,
      "Samples": 14806,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-5960X/Rating/2580"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I99820X",
      "Brand": "Intel",
      "Model": "Core i9-9820X",
      "Rank": 120,
      "Benchmark": 82.8,
      "Samples": 1685,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/651318/IntelR-CoreTM-i9-9820X-CPU---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80671I76800K",
      "Brand": "Intel",
      "Model": "Core i7-6800K",
      "Rank": 121,
      "Benchmark": 82.7,
      "Samples": 38035,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-6800K/Rating/3607"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I99980X",
      "Brand": "Intel",
      "Model": "Core i9-9980XE",
      "Rank": 122,
      "Benchmark": 82.7,
      "Samples": 1511,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/652504/IntelR-CoreTM-i9-9980XE-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I57600K",
      "Brand": "Intel",
      "Model": "Core i5-7600K",
      "Rank": 123,
      "Benchmark": 82.6,
      "Samples": 169292,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-7600K/Rating/3885"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80648I75930K",
      "Brand": "Intel",
      "Model": "Core i7-5930K",
      "Rank": 124,
      "Benchmark": 82.3,
      "Samples": 33392,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-5930K/Rating/2578"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-11370H",
      "Rank": 125,
      "Benchmark": 82.2,
      "Samples": 1438,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1444990/11th-Gen-IntelR-CoreTM-i7-11370H---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "CM8068403358413",
      "Brand": "Intel",
      "Model": "Core i7-8700T",
      "Rank": 126,
      "Benchmark": 82.1,
      "Samples": 3559,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/480804/IntelR-CoreTM-i7-8700T-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-000000163",
      "Brand": "AMD",
      "Model": "Ryzen TR 3990X",
      "Rank": 127,
      "Benchmark": 82.1,
      "Samples": 746,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1035665/AMD-Ryzen-Threadripper-3990X-64-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "CM8068403358708",
      "Brand": "Intel",
      "Model": "Core i5-8600T",
      "Rank": 128,
      "Benchmark": 82,
      "Samples": 215,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/506080/IntelR-CoreTM-i5-8600T-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I97920X",
      "Brand": "Intel",
      "Model": "Core i9-7920X",
      "Rank": 129,
      "Benchmark": 81.7,
      "Samples": 4317,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/278103/IntelR-CoreTM-i9-7920X-CPU---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000159BOX",
      "Brand": "AMD",
      "Model": "Ryzen 3 3300X",
      "Rank": 130,
      "Benchmark": 81.6,
      "Samples": 8018,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-3-3300X/Rating/4076"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I77820X",
      "Brand": "Intel",
      "Model": "Core i7-7820X",
      "Rank": 131,
      "Benchmark": 81.5,
      "Samples": 25799,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-7820X/Rating/3928"
    },
    {
      "Type": "CPU",
      "Part Number": "YD270XBGAFBOX",
      "Brand": "AMD",
      "Model": "Ryzen 7 2700X",
      "Rank": 132,
      "Benchmark": 81.4,
      "Samples": 429200,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-7-2700X/Rating/3958"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80658i55675C",
      "Brand": "Intel",
      "Model": "Core i5-5675C",
      "Rank": 133,
      "Benchmark": 81.2,
      "Samples": 847,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/31828/IntelR-CoreTM-i5-5675C-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "CL8068404069006",
      "Brand": "Intel",
      "Model": "Core i9-9880H",
      "Rank": 134,
      "Benchmark": 81.1,
      "Samples": 7433,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/750169/IntelR-CoreTM-i9-9880H-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80648I75820K",
      "Brand": "Intel",
      "Model": "Core i7-5820K",
      "Rank": 135,
      "Benchmark": 81.1,
      "Samples": 92958,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-5820K/Rating/2579"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1245 v6",
      "Rank": 136,
      "Benchmark": 80.7,
      "Samples": 415,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/299743/IntelR-XeonR-CPU-E3-1245-v6---370GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-8809G",
      "Rank": 137,
      "Benchmark": 80.7,
      "Samples": 3119,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/422264/IntelR-CoreTM-i7-8809G-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80633I74960X",
      "Brand": "Intel",
      "Model": "Core i7-4960X",
      "Rank": 138,
      "Benchmark": 80.7,
      "Samples": 3681,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-4960X/Rating/1977"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I39100",
      "Brand": "Intel",
      "Model": "Core i3-9100",
      "Rank": 139,
      "Benchmark": 80.5,
      "Samples": 7231,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/806339/IntelR-CoreTM-i3-9100-CPU---360GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD292XA8AFWOF",
      "Brand": "AMD",
      "Model": "Ryzen TR 2920X",
      "Rank": 140,
      "Benchmark": 80.5,
      "Samples": 2537,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/625966/AMD-Ryzen-Threadripper-2920X-12-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1270 v6",
      "Rank": 141,
      "Benchmark": 80.4,
      "Samples": 469,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/278175/IntelR-XeonR-CPU-E3-1270-v6---380GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I77800X",
      "Brand": "Intel",
      "Model": "Core i7-7800X",
      "Rank": 142,
      "Benchmark": 80.3,
      "Samples": 17317,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/304816/IntelR-CoreTM-i7-7800X-CPU---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-10200H",
      "Rank": 143,
      "Benchmark": 80.3,
      "Samples": 831,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1303113/IntelR-CoreTM-i5-10200H-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1286 v3",
      "Rank": 144,
      "Benchmark": 80.3,
      "Samples": 20,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/33047/IntelR-XeonR-CPU-E3-1286-v3---370GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80673I97980X",
      "Brand": "Intel",
      "Model": "Core i9-7980XE",
      "Rank": 145,
      "Benchmark": 80.2,
      "Samples": 3692,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/352013/IntelR-CoreTM-i9-7980XE-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 5 4600HS",
      "Rank": 146,
      "Benchmark": 80.1,
      "Samples": 766,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1134526/AMD-Ryzen-5-4600HS-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-1650 v3",
      "Rank": 147,
      "Benchmark": 80,
      "Samples": 5041,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/16320/IntelR-XeonR-CPU-E5-1650-v3---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "CL8068404121817",
      "Brand": "Intel",
      "Model": "Core i7-9750H",
      "Rank": 148,
      "Benchmark": 79.9,
      "Samples": 219576,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/766364/IntelR-CoreTM-i7-9750H-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-10400T",
      "Rank": 149,
      "Benchmark": 79.9,
      "Samples": 320,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1189479/IntelR-CoreTM-i5-10400T-CPU---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-9850H",
      "Rank": 150,
      "Benchmark": 79.8,
      "Samples": 6320,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/826055/IntelR-CoreTM-i7-9850H-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD260XBCAFBOX",
      "Brand": "AMD",
      "Model": "Ryzen 5 2600X",
      "Rank": 151,
      "Benchmark": 79.7,
      "Samples": 280647,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-5-2600X/Rating/3956"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662I56600K",
      "Brand": "Intel",
      "Model": "Core i5-6600K",
      "Rank": 152,
      "Benchmark": 79.7,
      "Samples": 276441,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-6600K/Rating/3503"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I39100F",
      "Brand": "Intel",
      "Model": "Core i3-9100F",
      "Rank": 153,
      "Benchmark": 79.6,
      "Samples": 66888,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-9100F/Rating/4054"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I77700",
      "Brand": "Intel",
      "Model": "Core i7-7700",
      "Rank": 154,
      "Benchmark": 79.5,
      "Samples": 208782,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-7700/Rating/3887"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-10400H",
      "Rank": 155,
      "Benchmark": 79.4,
      "Samples": 248,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1084904/IntelR-CoreTM-i5-10400H-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3970X",
      "Rank": 156,
      "Benchmark": 79.4,
      "Samples": 2443,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6794/IntelR-CoreTM-i7-3970X-CPU---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 X 990",
      "Rank": 157,
      "Benchmark": 79.4,
      "Samples": 1699,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2590/IntelR-CoreTM-i7-CPU-------X-990----347GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD295XA8UGAAF",
      "Brand": "AMD",
      "Model": "Ryzen TR 2950X",
      "Rank": 158,
      "Benchmark": 79.3,
      "Samples": 7331,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/569025/AMD-Ryzen-Threadripper-2950X-16-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-11375H",
      "Rank": 159,
      "Benchmark": 79.2,
      "Samples": 78,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1462657/11th-Gen-IntelR-CoreTM-i7-11375H---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80619I73960X",
      "Brand": "Intel",
      "Model": "Core i7-3960X",
      "Rank": 160,
      "Benchmark": 79.2,
      "Samples": 1912,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-3960X/Rating/1973"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80633I74930K",
      "Brand": "Intel",
      "Model": "Core i7-4930K",
      "Rank": 161,
      "Benchmark": 79.2,
      "Samples": 20065,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-4930K/Rating/1976"
    },
    {
      "Type": "CPU",
      "Part Number": "FH8068403419332",
      "Brand": "Intel",
      "Model": "Core i7-8559U",
      "Rank": 162,
      "Benchmark": 79.2,
      "Samples": 2058,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/543591/IntelR-CoreTM-i7-8559U-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I54690K",
      "Brand": "Intel",
      "Model": "Core i5-4690K",
      "Rank": 163,
      "Benchmark": 79,
      "Samples": 192324,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-4690K/Rating/2432"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-10300H",
      "Rank": 164,
      "Benchmark": 79,
      "Samples": 28817,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1027882/IntelR-CoreTM-i5-10300H-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I38300",
      "Brand": "Intel",
      "Model": "Core i3-8300",
      "Rank": 165,
      "Benchmark": 79,
      "Samples": 1696,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/484077/IntelR-CoreTM-i3-8300-CPU---370GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-9400H",
      "Rank": 166,
      "Benchmark": 79,
      "Samples": 489,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/843530/IntelR-CoreTM-i5-9400H-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-11300H",
      "Rank": 167,
      "Benchmark": 78.8,
      "Samples": 160,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1504890/11th-Gen-IntelR-CoreTM-i5-11300H---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-000000100",
      "Brand": "AMD",
      "Model": "Ryzen 5 4600H",
      "Rank": 168,
      "Benchmark": 78.7,
      "Samples": 22273,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1110331/AMD-Ryzen-5-4600H-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "YD297XAZAFWOF",
      "Brand": "AMD",
      "Model": "Ryzen TR 2970WX",
      "Rank": 169,
      "Benchmark": 78.5,
      "Samples": 849,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/626249/AMD-Ryzen-Threadripper-2970WX-24-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-5775R",
      "Rank": 170,
      "Benchmark": 78.4,
      "Samples": 142,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/39919/IntelR-CoreTM-i7-5775R-CPU---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-5950HQ",
      "Rank": 171,
      "Benchmark": 78.3,
      "Samples": 153,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/29765/IntelR-CoreTM-i7-5950HQ-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-1650 v2",
      "Rank": 172,
      "Benchmark": 78.3,
      "Samples": 7075,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7574/IntelR-XeonR-CPU-E5-1650-v2---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-10100T",
      "Rank": 173,
      "Benchmark": 78.2,
      "Samples": 123,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1260090/IntelR-CoreTM-i3-10100T-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1230 v6",
      "Rank": 174,
      "Benchmark": 78.1,
      "Samples": 387,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/268848/IntelR-XeonR-CPU-E3-1230-v6---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I54670K",
      "Brand": "Intel",
      "Model": "Core i5-4670K",
      "Rank": 175,
      "Benchmark": 78.1,
      "Samples": 112215,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-4670K/Rating/1538"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I74770K",
      "Brand": "Intel",
      "Model": "Core i7-4770K",
      "Rank": 176,
      "Benchmark": 78,
      "Samples": 150123,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-4770K/Rating/1537"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I57600",
      "Brand": "Intel",
      "Model": "Core i5-7600",
      "Rank": 177,
      "Benchmark": 78,
      "Samples": 34633,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-7600/Rating/3890"
    },
    {
      "Type": "CPU",
      "Part Number": "CL8068403805708",
      "Brand": "Intel",
      "Model": "Core i9-8950HK",
      "Rank": 178,
      "Benchmark": 77.9,
      "Samples": 10898,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/486215/IntelR-CoreTM-i9-8950HK-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon W3690",
      "Rank": 179,
      "Benchmark": 77.8,
      "Samples": 3557,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9677/IntelR-XeonR-CPU-----------W3690----347GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646E31276V3",
      "Brand": "Intel",
      "Model": "Xeon E3-1276 v3",
      "Rank": 180,
      "Benchmark": 77.5,
      "Samples": 238,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/25180/IntelR-XeonR-CPU-E3-1276-v3---360GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1271 v3",
      "Rank": 181,
      "Benchmark": 77.3,
      "Samples": 1081,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/17463/IntelR-XeonR-CPU-E3-1271-v3---360GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-000000083",
      "Brand": "AMD",
      "Model": "Ryzen 7 4700U",
      "Rank": 182,
      "Benchmark": 77.1,
      "Samples": 9060,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1105478/AMD-Ryzen-7-4700U-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1275 v3",
      "Rank": 183,
      "Benchmark": 77.1,
      "Samples": 291,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5652/IntelR-XeonR-CPU-E3-1275-v3---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "CM8068403362509",
      "Brand": "Intel",
      "Model": "Core i5-8500T",
      "Rank": 184,
      "Benchmark": 76.9,
      "Samples": 2813,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/532888/IntelR-CoreTM-i5-8500T-CPU---210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80637I73770K",
      "Brand": "Intel",
      "Model": "Core i7-3770K",
      "Rank": 185,
      "Benchmark": 76.9,
      "Samples": 143641,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-3770K/Rating/1317"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1230 v5",
      "Rank": 186,
      "Benchmark": 76.8,
      "Samples": 1570,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/72554/IntelR-XeonR-CPU-E3-1230-v5---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I74790",
      "Brand": "Intel",
      "Model": "Core i7-4790",
      "Rank": 187,
      "Benchmark": 76.6,
      "Samples": 184979,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-4790/Rating/2293"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 X 980",
      "Rank": 188,
      "Benchmark": 76.6,
      "Samples": 5991,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1822/IntelR-CoreTM-i7-CPU-------X-980----333GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD2600BBAFBOX",
      "Brand": "AMD",
      "Model": "Ryzen 5 2600",
      "Rank": 189,
      "Benchmark": 76.5,
      "Samples": 601586,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-5-2600/Rating/3955"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I74771",
      "Brand": "Intel",
      "Model": "Core i7-4771",
      "Rank": 190,
      "Benchmark": 76.4,
      "Samples": 9207,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-4771/Rating/2008"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80637I53570K",
      "Brand": "Intel",
      "Model": "Core i5-3570K",
      "Rank": 191,
      "Benchmark": 76.4,
      "Samples": 176375,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-3570K/Rating/1316"
    },
    {
      "Type": "CPU",
      "Part Number": "CL8068403373614",
      "Brand": "Intel",
      "Model": "Core i5-8400H",
      "Rank": 192,
      "Benchmark": 76.4,
      "Samples": 906,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/524256/IntelR-CoreTM-i5-8400H-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-100000284BOX",
      "Brand": "AMD",
      "Model": "Ryzen 3 3100",
      "Rank": 193,
      "Benchmark": 76.3,
      "Samples": 29508,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1148404/AMD-Ryzen-3-3100-4-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "FH8067703417418",
      "Brand": "Intel",
      "Model": "Core i7-8706G",
      "Rank": 194,
      "Benchmark": 76.3,
      "Samples": 169,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/518066/IntelR-CoreTM-i7-8706G-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684I38100",
      "Brand": "Intel",
      "Model": "Core i3-8100",
      "Rank": 195,
      "Benchmark": 76.3,
      "Samples": 91901,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-8100/Rating/3942"
    },
    {
      "Type": "CPU",
      "Part Number": "CL8068403359725",
      "Brand": "Intel",
      "Model": "Core i7-8850H",
      "Rank": 196,
      "Benchmark": 76.2,
      "Samples": 15497,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/485626/IntelR-CoreTM-i7-8850H-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon W3680",
      "Rank": 197,
      "Benchmark": 76.2,
      "Samples": 3079,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12335/IntelR-XeonR-CPU-----------W3680----333GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I54690",
      "Brand": "Intel",
      "Model": "Core i5-4690",
      "Rank": 198,
      "Benchmark": 76.2,
      "Samples": 65922,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-4690/Rating/2311"
    },
    {
      "Type": "CPU",
      "Part Number": "YD192XA8AEWOF",
      "Brand": "AMD",
      "Model": "Ryzen TR 1920X",
      "Rank": 199,
      "Benchmark": 76.1,
      "Samples": 6620,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-TR-1920X/Rating/3934"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80619I73930K",
      "Brand": "Intel",
      "Model": "Core i7-3930K",
      "Rank": 200,
      "Benchmark": 76.1,
      "Samples": 30951,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-3930K/Rating/1487"
    },
    {
      "Type": "CPU",
      "Part Number": "YD299XAZAFWOF",
      "Brand": "AMD",
      "Model": "Ryzen TR 2990WX",
      "Rank": 201,
      "Benchmark": 76,
      "Samples": 2288,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/560423/AMD-Ryzen-Threadripper-2990WX-32-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1270 v3",
      "Rank": 202,
      "Benchmark": 76,
      "Samples": 584,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11395/IntelR-XeonR-CPU-E3-1270-v3---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-5850HQ",
      "Rank": 203,
      "Benchmark": 76,
      "Samples": 46,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/35099/IntelR-CoreTM-i7-5850HQ-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X5690",
      "Rank": 204,
      "Benchmark": 75.9,
      "Samples": 3336,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/16752/IntelR-XeonR-CPU-----------X5690----347GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-1145G7",
      "Rank": 205,
      "Benchmark": 75.9,
      "Samples": 158,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1345527/11th-Gen-IntelR-CoreTM-i5-1145G7---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "CL8068403359524",
      "Brand": "Intel",
      "Model": "Core i7-8750H",
      "Rank": 206,
      "Benchmark": 75.9,
      "Samples": 318931,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/470418/IntelR-CoreTM-i7-8750H-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 980",
      "Rank": 207,
      "Benchmark": 75.9,
      "Samples": 1994,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3336/IntelR-CoreTM-i7-CPU---------980----333GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD190XA8AEWOF",
      "Brand": "AMD",
      "Model": "Ryzen TR 1900X",
      "Rank": 208,
      "Benchmark": 75.9,
      "Samples": 4373,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/340638/AMD-Ryzen-Threadripper-1900X-8-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 7 4800U",
      "Rank": 209,
      "Benchmark": 75.9,
      "Samples": 952,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1005639/AMD-Ryzen-7-4800U-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "YD180XBCAEWOF",
      "Brand": "AMD",
      "Model": "Ryzen 7 1800X",
      "Rank": 210,
      "Benchmark": 75.8,
      "Samples": 71145,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-7-1800X/Rating/3916"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80623I72600K",
      "Brand": "Intel",
      "Model": "Core i7-2600K",
      "Rank": 211,
      "Benchmark": 75.8,
      "Samples": 127584,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-2600K/Rating/621"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I57600T",
      "Brand": "Intel",
      "Model": "Core i5-7600T",
      "Rank": 212,
      "Benchmark": 75.7,
      "Samples": 322,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/246226/IntelR-CoreTM-i5-7600T-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646E31241V3",
      "Brand": "Intel",
      "Model": "Xeon E3-1241 v3",
      "Rank": 213,
      "Benchmark": 75.6,
      "Samples": 3059,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/15164/IntelR-XeonR-CPU-E3-1241-v3---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "CM8068403358913",
      "Brand": "Intel",
      "Model": "Core i5-8400T",
      "Rank": 214,
      "Benchmark": 75.5,
      "Samples": 2870,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/475176/IntelR-CoreTM-i5-8400T-CPU---170GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-000000084",
      "Brand": "AMD",
      "Model": "Ryzen 5 4500U",
      "Rank": 215,
      "Benchmark": 75.5,
      "Samples": 14114,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1052299/AMD-Ryzen-5-4500U-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646E31246V3",
      "Brand": "Intel",
      "Model": "Xeon E3-1246 v3",
      "Rank": 216,
      "Benchmark": 75.5,
      "Samples": 2149,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11023/IntelR-XeonR-CPU-E3-1246-v3---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662I76700",
      "Brand": "Intel",
      "Model": "Core i7-6700",
      "Rank": 217,
      "Benchmark": 75.5,
      "Samples": 235118,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-6700/Rating/3515"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-1185G7",
      "Rank": 218,
      "Benchmark": 75.4,
      "Samples": 1194,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1268967/11th-Gen-IntelR-CoreTM-i7-1185G7---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-1650 0",
      "Rank": 219,
      "Benchmark": 75.4,
      "Samples": 7430,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7093/IntelR-XeonR-CPU-E5-1650-0---320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I74770",
      "Brand": "Intel",
      "Model": "Core i7-4770",
      "Rank": 220,
      "Benchmark": 75.3,
      "Samples": 140353,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-4770/Rating/1978"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646E31231V3",
      "Brand": "Intel",
      "Model": "Xeon E3-1231 v3",
      "Rank": 221,
      "Benchmark": 75.3,
      "Samples": 15179,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11040/IntelR-XeonR-CPU-E3-1231-v3---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4670",
      "Rank": 222,
      "Benchmark": 75.2,
      "Samples": 46082,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/630/IntelR-CoreTM-i5-4670-CPU---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2550K",
      "Rank": 223,
      "Benchmark": 75.1,
      "Samples": 2327,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5474/IntelR-CoreTM-i5-2550K-CPU---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 5 5600U",
      "Rank": 224,
      "Benchmark": 75.1,
      "Samples": 6,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1461589/AMD-Ryzen-5-5600U-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "YD195XA8AEWOF",
      "Brand": "AMD",
      "Model": "Ryzen TR 1950X",
      "Rank": 225,
      "Benchmark": 75.1,
      "Samples": 19053,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-TR-1950X/Rating/3932"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 7 5700U",
      "Rank": 226,
      "Benchmark": 75,
      "Samples": 140,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1482042/AMD-Ryzen-7-5700U-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "YD2700BBAFBOX",
      "Brand": "AMD",
      "Model": "Ryzen 7 2700",
      "Rank": 227,
      "Benchmark": 75,
      "Samples": 128148,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-7-2700/Rating/3957"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-2687W 0",
      "Rank": 228,
      "Benchmark": 75,
      "Samples": 689,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8860/IntelR-XeonR-CPU-E5-2687W-0---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80623I72700K",
      "Brand": "Intel",
      "Model": "Core i7-2700K",
      "Rank": 229,
      "Benchmark": 75,
      "Samples": 20737,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-2700K/Rating/1985"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4790S",
      "Rank": 230,
      "Benchmark": 74.9,
      "Samples": 11626,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13424/IntelR-CoreTM-i7-4790S-CPU---320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD160XBCAEWOF",
      "Brand": "AMD",
      "Model": "Ryzen 5 1600X",
      "Rank": 231,
      "Benchmark": 74.9,
      "Samples": 121379,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-5-1600X/Rating/3920"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-10300T",
      "Rank": 232,
      "Benchmark": 74.8,
      "Samples": 3,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1290166/IntelR-CoreTM-i3-10300T-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD1600BBAFBOX",
      "Brand": "AMD",
      "Model": "Ryzen 5 1600AF",
      "Rank": 233,
      "Benchmark": 74.6,
      "Samples": 56162,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/563877/AMD-Ryzen-5-1600-Six-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "FH8068403419522",
      "Brand": "Intel",
      "Model": "Core i5-8259U",
      "Rank": 234,
      "Benchmark": 74.5,
      "Samples": 2524,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/543736/IntelR-CoreTM-i5-8259U-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1275 V2",
      "Rank": 235,
      "Benchmark": 74.5,
      "Samples": 307,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4507/IntelR-XeonR-CPU-E3-1275-V2---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4670S",
      "Rank": 236,
      "Benchmark": 74.5,
      "Samples": 1199,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5523/IntelR-CoreTM-i5-4670S-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1240 v3",
      "Rank": 237,
      "Benchmark": 74.4,
      "Samples": 2067,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4602/IntelR-XeonR-CPU-E3-1240-v3---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1270 V2",
      "Rank": 238,
      "Benchmark": 74.4,
      "Samples": 2236,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11264/IntelR-XeonR-CPU-E3-1270-V2---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I57500",
      "Brand": "Intel",
      "Model": "Core i5-7500",
      "Rank": 239,
      "Benchmark": 74.3,
      "Samples": 114549,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-7500/Rating/3648"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662I56600",
      "Brand": "Intel",
      "Model": "Core i5-6600",
      "Rank": 240,
      "Benchmark": 74.3,
      "Samples": 68381,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-6600/Rating/3514"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646E31230V3",
      "Brand": "Intel",
      "Model": "Xeon E3-1230 v3",
      "Rank": 241,
      "Benchmark": 74.3,
      "Samples": 6359,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2171/IntelR-XeonR-CPU-E3-1230-v3---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80633I74820K",
      "Brand": "Intel",
      "Model": "Core i7-4820K",
      "Rank": 242,
      "Benchmark": 74.2,
      "Samples": 17150,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-4820K/Rating/1675"
    },
    {
      "Type": "CPU",
      "Part Number": "YD170XBCAEWOF",
      "Brand": "AMD",
      "Model": "Ryzen 7 1700X",
      "Rank": 243,
      "Benchmark": 74.1,
      "Samples": 101510,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-7-1700X/Rating/3915"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80637I73770",
      "Brand": "Intel",
      "Model": "Core i7-3770",
      "Rank": 244,
      "Benchmark": 74.1,
      "Samples": 214048,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-3770/Rating/1979"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-1165G7",
      "Rank": 245,
      "Benchmark": 74.1,
      "Samples": 9335,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1195374/11th-Gen-IntelR-CoreTM-i7-1165G7---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4770S",
      "Rank": 246,
      "Benchmark": 73.9,
      "Samples": 10782,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2123/IntelR-CoreTM-i7-4770S-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "CL8068403373522",
      "Brand": "Intel",
      "Model": "Core i5-8300H",
      "Rank": 247,
      "Benchmark": 73.8,
      "Samples": 117885,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/425634/IntelR-CoreTM-i5-8300H-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80623I52500K",
      "Brand": "Intel",
      "Model": "Core i5-2500K",
      "Rank": 248,
      "Benchmark": 73.7,
      "Samples": 148104,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-2500K/Rating/619"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3570",
      "Rank": 249,
      "Benchmark": 73.7,
      "Samples": 75908,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/793/IntelR-CoreTM-i5-3570-CPU---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 970",
      "Rank": 250,
      "Benchmark": 73.6,
      "Samples": 3174,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8374/IntelR-CoreTM-i7-CPU---------970----320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-2690 v2",
      "Rank": 251,
      "Benchmark": 73.5,
      "Samples": 592,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13436/IntelR-XeonR-CPU-E5-2690-v2---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80701G6600",
      "Brand": "Intel",
      "Model": "Pentium Gold G6600",
      "Rank": 252,
      "Benchmark": 73.4,
      "Samples": 17,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1454523/IntelR-PentiumR-Gold-G6600-CPU---420GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-000000105",
      "Brand": "AMD",
      "Model": "Ryzen 5 4600U",
      "Rank": 253,
      "Benchmark": 73.3,
      "Samples": 294,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1152158/AMD-Ryzen-5-4600U-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1226 v3",
      "Rank": 254,
      "Benchmark": 73.3,
      "Samples": 1610,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/18482/IntelR-XeonR-CPU-E3-1226-v3---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1245 v3",
      "Rank": 255,
      "Benchmark": 73.3,
      "Samples": 2223,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4697/IntelR-XeonR-CPU-E3-1245-v3---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1245 V2",
      "Rank": 256,
      "Benchmark": 73.2,
      "Samples": 1694,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5622/IntelR-XeonR-CPU-E3-1245-V2---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-6600T",
      "Rank": 257,
      "Benchmark": 73.2,
      "Samples": 813,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/37851/IntelR-CoreTM-i5-6600T-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1240 V2",
      "Rank": 258,
      "Benchmark": 73.2,
      "Samples": 3402,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5484/IntelR-XeonR-CPU-E3-1240-V2---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-1620 v2",
      "Rank": 259,
      "Benchmark": 73.2,
      "Samples": 7526,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8354/IntelR-XeonR-CPU-E5-1620-v2---370GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-8705G",
      "Rank": 260,
      "Benchmark": 73.1,
      "Samples": 4468,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/453718/IntelR-CoreTM-i7-8705G-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-1135G7",
      "Rank": 261,
      "Benchmark": 73.1,
      "Samples": 7367,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1286124/11th-Gen-IntelR-CoreTM-i5-1135G7---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3820",
      "Rank": 262,
      "Benchmark": 73.1,
      "Samples": 36771,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/739/IntelR-CoreTM-i7-3820-CPU---360GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1220 v5",
      "Rank": 263,
      "Benchmark": 73,
      "Samples": 895,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/139116/IntelR-XeonR-CPU-E3-1220-v5---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1265L v3",
      "Rank": 264,
      "Benchmark": 73,
      "Samples": 117,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/20266/IntelR-XeonR-CPU-E3-1265L-v3---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I77700T",
      "Brand": "Intel",
      "Model": "Core i7-7700T",
      "Rank": 265,
      "Benchmark": 73,
      "Samples": 5295,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/232624/IntelR-CoreTM-i7-7700T-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1230 V2",
      "Rank": 266,
      "Benchmark": 73,
      "Samples": 6553,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/652/IntelR-XeonR-CPU-E3-1230-V2---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X5660",
      "Rank": 267,
      "Benchmark": 72.9,
      "Samples": 5355,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/17750/IntelR-XeonR-CPU-----------X5660----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-7820HK",
      "Rank": 268,
      "Benchmark": 72.9,
      "Samples": 13723,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/224965/IntelR-CoreTM-i7-7820HK-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-9300H",
      "Rank": 269,
      "Benchmark": 72.9,
      "Samples": 81972,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/744904/IntelR-CoreTM-i5-9300H-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I54590",
      "Brand": "Intel",
      "Model": "Core i5-4590",
      "Rank": 270,
      "Benchmark": 72.9,
      "Samples": 114237,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-4590/Rating/2604"
    },
    {
      "Type": "CPU",
      "Part Number": "YD3400C5FHBOX",
      "Brand": "AMD",
      "Model": "Ryzen 5 3400G",
      "Rank": 271,
      "Benchmark": 72.3,
      "Samples": 62048,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/825156/AMD-Ryzen-5-3400G-with-Radeon-Vega-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I54570",
      "Brand": "Intel",
      "Model": "Core i5-4570",
      "Rank": 272,
      "Benchmark": 72.3,
      "Samples": 107383,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-4570/Rating/2770"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3550",
      "Rank": 273,
      "Benchmark": 72.2,
      "Samples": 17698,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/846/IntelR-CoreTM-i5-3550-CPU---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E31270",
      "Rank": 274,
      "Benchmark": 72.2,
      "Samples": 2291,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5604/IntelR-XeonR-CPU-E31270---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I37320",
      "Brand": "Intel",
      "Model": "Core i3-7320",
      "Rank": 275,
      "Benchmark": 72.2,
      "Samples": 355,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-7320/Rating/3888"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 7 5800U",
      "Rank": 276,
      "Benchmark": 72.2,
      "Samples": 7,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1433044/AMD-Ryzen-7-5800U-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon W3570",
      "Rank": 277,
      "Benchmark": 72.1,
      "Samples": 367,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12630/IntelR-XeonR-CPU-----------W3570----320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-10710U",
      "Rank": 278,
      "Benchmark": 72,
      "Samples": 4716,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/900004/IntelR-CoreTM-i7-10710U-CPU---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3770S",
      "Rank": 279,
      "Benchmark": 71.9,
      "Samples": 7318,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2218/IntelR-CoreTM-i7-3770S-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-8305G",
      "Rank": 280,
      "Benchmark": 71.8,
      "Samples": 307,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/483074/IntelR-CoreTM-i5-8305G-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "CM8068403377415",
      "Brand": "Intel",
      "Model": "Core i3-8100T",
      "Rank": 281,
      "Benchmark": 71.8,
      "Samples": 1225,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/509371/IntelR-CoreTM-i3-8100T-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1225 v3",
      "Rank": 282,
      "Benchmark": 71.7,
      "Samples": 3909,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12983/IntelR-XeonR-CPU-E3-1225-v3---320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4590S",
      "Rank": 283,
      "Benchmark": 71.7,
      "Samples": 9691,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13459/IntelR-CoreTM-i5-4590S-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD250XBBM4KAF",
      "Brand": "AMD",
      "Model": "Ryzen 5 2500X",
      "Rank": 284,
      "Benchmark": 71.6,
      "Samples": 1442,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/567224/AMD-Ryzen-5-2500X-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80623I72600",
      "Brand": "Intel",
      "Model": "Core i7-2600",
      "Rank": 285,
      "Benchmark": 71.5,
      "Samples": 138405,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-2600/Rating/620"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 975",
      "Rank": 286,
      "Benchmark": 71.4,
      "Samples": 2396,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/941/IntelR-CoreTM-i7-CPU---------975----333GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4940MX",
      "Rank": 287,
      "Benchmark": 71.4,
      "Samples": 1810,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9756/IntelR-CoreTM-i7-4940MX-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-8279U",
      "Rank": 288,
      "Benchmark": 71.4,
      "Samples": 189,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/807756/IntelR-CoreTM-i5-8279U-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1220 v3",
      "Rank": 289,
      "Benchmark": 71.3,
      "Samples": 3210,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5983/IntelR-XeonR-CPU-E3-1220-v3---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD1600BBAEBOX",
      "Brand": "AMD",
      "Model": "Ryzen 5 1600",
      "Rank": 290,
      "Benchmark": 71.3,
      "Samples": 308377,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-5-1600/Rating/3919"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1225 V2",
      "Rank": 291,
      "Benchmark": 71.2,
      "Samples": 2127,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5015/IntelR-XeonR-CPU-E3-1225-V2---320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD1700BBAEBOX",
      "Brand": "AMD",
      "Model": "Ryzen 7 1700",
      "Rank": 292,
      "Benchmark": 71.2,
      "Samples": 181358,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-7-1700/Rating/3917"
    },
    {
      "Type": "CPU",
      "Part Number": "CM8066201920202",
      "Brand": "Intel",
      "Model": "Core i7-6700T",
      "Rank": 293,
      "Benchmark": 71.2,
      "Samples": 7455,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/36439/IntelR-CoreTM-i7-6700T-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I57400",
      "Brand": "Intel",
      "Model": "Core i5-7400",
      "Rank": 294,
      "Benchmark": 71.2,
      "Samples": 187614,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-7400/Rating/3886"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-1620 0",
      "Rank": 295,
      "Benchmark": 71.1,
      "Samples": 12965,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2930/IntelR-XeonR-CPU-E5-1620-0---360GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1240",
      "Rank": 296,
      "Benchmark": 71.1,
      "Samples": 1779,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5243/IntelR-XeonR-CPU-E31240---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4790T",
      "Rank": 297,
      "Benchmark": 71.1,
      "Samples": 789,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13586/IntelR-CoreTM-i7-4790T-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662I56500",
      "Brand": "Intel",
      "Model": "Core i5-6500",
      "Rank": 298,
      "Benchmark": 71.1,
      "Samples": 193829,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-6500/Rating/3513"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80637I53470",
      "Brand": "Intel",
      "Model": "Core i5-3470",
      "Rank": 299,
      "Benchmark": 71,
      "Samples": 174887,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-3470/Rating/2771"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2500",
      "Rank": 300,
      "Benchmark": 71,
      "Samples": 60332,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/517/IntelR-CoreTM-i5-2500-CPU---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1220 V2",
      "Rank": 301,
      "Benchmark": 71,
      "Samples": 2725,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3482/IntelR-XeonR-CPU-E3-1220-V2---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2450P",
      "Rank": 302,
      "Benchmark": 71,
      "Samples": 188,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2795/IntelR-CoreTM-i5-2450P-CPU---320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80701G6400",
      "Brand": "Intel",
      "Model": "Pentium Gold G6400",
      "Rank": 303,
      "Benchmark": 71,
      "Samples": 1034,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1221579/IntelR-PentiumR-Gold-G6400-CPU---400GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD3200C5FHBOX",
      "Brand": "AMD",
      "Model": "Ryzen 3 3200G",
      "Rank": 304,
      "Benchmark": 70.9,
      "Samples": 69039,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/824486/AMD-Ryzen-3-3200G-with-Radeon-Vega-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X5650",
      "Rank": 305,
      "Benchmark": 70.8,
      "Samples": 12902,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/355/IntelR-XeonR-CPU-----------X5650----267GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I54460",
      "Brand": "Intel",
      "Model": "Core i5-4460",
      "Rank": 306,
      "Benchmark": 70.6,
      "Samples": 207096,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-4460/Rating/2310"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3940XM",
      "Rank": 307,
      "Benchmark": 70.6,
      "Samples": 1580,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7092/IntelR-CoreTM-i7-3940XM-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "100-000000085",
      "Brand": "AMD",
      "Model": "Ryzen 3 4300U",
      "Rank": 308,
      "Benchmark": 70.6,
      "Samples": 1756,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1135301/AMD-Ryzen-3-4300U-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4930MX",
      "Rank": 309,
      "Benchmark": 70.5,
      "Samples": 1160,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2453/IntelR-CoreTM-i7-4930MX-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80701G6500",
      "Brand": "Intel",
      "Model": "Pentium Gold G6500",
      "Rank": 310,
      "Benchmark": 70.5,
      "Samples": 33,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1323006/IntelR-PentiumR-Gold-G6500-CPU---410GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I37350K",
      "Brand": "Intel",
      "Model": "Core i3-7350K",
      "Rank": 311,
      "Benchmark": 70.4,
      "Samples": 3196,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-7350K/Rating/3889"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3450",
      "Rank": 312,
      "Benchmark": 70.4,
      "Samples": 27588,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/161/IntelR-CoreTM-i5-3450-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X5667",
      "Rank": 313,
      "Benchmark": 70.3,
      "Samples": 294,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/21709/IntelR-XeonR-CPU-----------X5667----307GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 880",
      "Rank": 314,
      "Benchmark": 70.3,
      "Samples": 680,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/15321/IntelR-CoreTM-i7-CPU---------880----307GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4570S",
      "Rank": 315,
      "Benchmark": 70.2,
      "Samples": 8239,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5965/IntelR-CoreTM-i5-4570S-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4770T",
      "Rank": 316,
      "Benchmark": 70.2,
      "Samples": 500,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4415/IntelR-CoreTM-i7-4770T-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-2630 v3",
      "Rank": 317,
      "Benchmark": 70.1,
      "Samples": 1096,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/22651/IntelR-XeonR-CPU-E5-2630-v3---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E31230",
      "Rank": 318,
      "Benchmark": 70,
      "Samples": 1376,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6750/IntelR-XeonR-CPU-E31230---320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-7920HQ",
      "Rank": 319,
      "Benchmark": 69.8,
      "Samples": 990,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/243546/IntelR-CoreTM-i7-7920HQ-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I37300",
      "Brand": "Intel",
      "Model": "Core i3-7300",
      "Rank": 320,
      "Benchmark": 69.8,
      "Samples": 1389,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-7300/Rating/3893"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E31220",
      "Rank": 321,
      "Benchmark": 69.8,
      "Samples": 2141,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6171/IntelR-XeonR-CPU-E31220---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-5700HQ",
      "Rank": 322,
      "Benchmark": 69.7,
      "Samples": 11803,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/30103/IntelR-CoreTM-i7-5700HQ-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-6920HQ",
      "Rank": 323,
      "Benchmark": 69.7,
      "Samples": 2171,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/56225/IntelR-CoreTM-i7-6920HQ-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I54440",
      "Brand": "Intel",
      "Model": "Core i5-4440",
      "Rank": 324,
      "Benchmark": 69.6,
      "Samples": 59862,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-4440/Rating/1993"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I57500T",
      "Brand": "Intel",
      "Model": "Core i5-7500T",
      "Rank": 325,
      "Benchmark": 69.6,
      "Samples": 3806,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/218898/IntelR-CoreTM-i5-7500T-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-2643 0",
      "Rank": 326,
      "Benchmark": 69.5,
      "Samples": 786,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3389/IntelR-XeonR-CPU-E5-2643-0---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 K 875",
      "Rank": 327,
      "Benchmark": 69.5,
      "Samples": 1702,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/476/IntelR-CoreTM-i7-CPU-------K-875----293GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3475S",
      "Rank": 328,
      "Benchmark": 69.4,
      "Samples": 1089,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10117/IntelR-CoreTM-i5-3475S-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E31225",
      "Rank": 329,
      "Benchmark": 69.4,
      "Samples": 2698,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4210/IntelR-XeonR-CPU-E31225---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-6820HK",
      "Rank": 330,
      "Benchmark": 69.3,
      "Samples": 15187,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/36404/IntelR-CoreTM-i7-6820HK-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4910MQ",
      "Rank": 331,
      "Benchmark": 69.2,
      "Samples": 4030,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9700/IntelR-CoreTM-i7-4910MQ-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80637I53450S",
      "Brand": "Intel",
      "Model": "Core i5-3450S",
      "Rank": 332,
      "Benchmark": 69.2,
      "Samples": 1354,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2071/IntelR-CoreTM-i5-3450S-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684G5600",
      "Brand": "Intel",
      "Model": "Pentium Gold G5600",
      "Rank": 333,
      "Benchmark": 69.2,
      "Samples": 585,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/469126/IntelR-PentiumR-Gold-G5600-CPU---390GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3-1505M v6",
      "Rank": 334,
      "Benchmark": 69.1,
      "Samples": 2697,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/233404/IntelR-XeonR-CPU-E3-1505M-v6---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-7101E",
      "Rank": 335,
      "Benchmark": 69.1,
      "Samples": 10,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/325269/IntelR-CoreTM-i3-7101E-CPU---390GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4430",
      "Rank": 336,
      "Benchmark": 69.1,
      "Samples": 20530,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1920/IntelR-CoreTM-i5-4430-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662I36320",
      "Brand": "Intel",
      "Model": "Core i3-6320",
      "Rank": 337,
      "Benchmark": 69.1,
      "Samples": 1600,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-6320/Rating/3535"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3470S",
      "Rank": 338,
      "Benchmark": 69,
      "Samples": 11227,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6387/IntelR-CoreTM-i5-3470S-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X3470",
      "Rank": 339,
      "Benchmark": 69,
      "Samples": 6592,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/24530/IntelR-XeonR-CPU-----------X3470----293GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80623I52400",
      "Brand": "Intel",
      "Model": "Core i5-2400",
      "Rank": 340,
      "Benchmark": 69,
      "Samples": 135970,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-2400/Rating/803"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X5570",
      "Rank": 341,
      "Benchmark": 68.8,
      "Samples": 1188,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12230/IntelR-XeonR-CPU-----------X5570----293GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3350P",
      "Rank": 342,
      "Benchmark": 68.7,
      "Samples": 18233,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3018/IntelR-CoreTM-i5-3350P-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-7820HQ",
      "Rank": 343,
      "Benchmark": 68.7,
      "Samples": 10400,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/185229/IntelR-CoreTM-i7-7820HQ-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD150XBBAEBOX",
      "Brand": "AMD",
      "Model": "Ryzen 5 1500X",
      "Rank": 344,
      "Benchmark": 68.6,
      "Samples": 57386,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-5-1500X/Rating/3921"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662I56400",
      "Brand": "Intel",
      "Model": "Core i5-6400",
      "Rank": 345,
      "Benchmark": 68.6,
      "Samples": 144868,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-6400/Rating/3512"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3920XM",
      "Rank": 346,
      "Benchmark": 68.5,
      "Samples": 633,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5061/IntelR-CoreTM-i7-3920XM-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-7700HQ",
      "Rank": 347,
      "Benchmark": 68.5,
      "Samples": 404686,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/211019/IntelR-CoreTM-i7-7700HQ-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684G5500",
      "Brand": "Intel",
      "Model": "Pentium Gold G5500",
      "Rank": 348,
      "Benchmark": 68.4,
      "Samples": 710,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/484140/IntelR-PentiumR-Gold-G5500-CPU---380GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80621E52670",
      "Brand": "Intel",
      "Model": "Xeon E5-2670",
      "Rank": 349,
      "Benchmark": 68.4,
      "Samples": 3583,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/18501/IntelR-XeonR-CPU-E5-2670-0---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 960",
      "Rank": 350,
      "Benchmark": 68.4,
      "Samples": 13148,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/778/IntelR-CoreTM-i7-CPU---------960----320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2320",
      "Rank": 351,
      "Benchmark": 68.4,
      "Samples": 26698,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1735/IntelR-CoreTM-i5-2320-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-1160G7",
      "Rank": 352,
      "Benchmark": 68.3,
      "Samples": 44,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1300243/11th-Gen-IntelR-CoreTM-i7-1160G7---120GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4460S",
      "Rank": 353,
      "Benchmark": 68.2,
      "Samples": 8605,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/14679/IntelR-CoreTM-i5-4460S-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FD9590FHHKWOF",
      "Brand": "AMD",
      "Model": "FX-9590",
      "Rank": 354,
      "Benchmark": 68,
      "Samples": 20352,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-9590/Rating/1812"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X3460",
      "Rank": 355,
      "Benchmark": 68,
      "Samples": 719,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3739/IntelR-XeonR-CPU-----------X3460----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3340",
      "Rank": 356,
      "Benchmark": 67.8,
      "Samples": 6400,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2710/IntelR-CoreTM-i5-3340-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4810MQ",
      "Rank": 357,
      "Benchmark": 67.8,
      "Samples": 22345,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7168/IntelR-CoreTM-i7-4810MQ-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4720HQ",
      "Rank": 358,
      "Benchmark": 67.7,
      "Samples": 64754,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/20045/IntelR-CoreTM-i7-4720HQ-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon L5639",
      "Rank": 359,
      "Benchmark": 67.7,
      "Samples": 76,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5958/IntelR-XeonR-CPU-----------L5639----213GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD2200C5FBBOX",
      "Brand": "AMD",
      "Model": "Ryzen 3 2200G",
      "Rank": 360,
      "Benchmark": 67.7,
      "Samples": 140555,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/441832/AMD-Ryzen-3-2200G-with-Radeon-Vega-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4960HQ",
      "Rank": 361,
      "Benchmark": 67.7,
      "Samples": 256,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9629/IntelR-CoreTM-i7-4960HQ-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 870",
      "Rank": 362,
      "Benchmark": 67.7,
      "Samples": 29750,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/961/IntelR-CoreTM-i7-CPU---------870----293GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon W3565",
      "Rank": 363,
      "Benchmark": 67.6,
      "Samples": 5911,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6324/IntelR-XeonR-CPU-----------W3565----320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2600S",
      "Rank": 364,
      "Benchmark": 67.5,
      "Samples": 2432,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6489/IntelR-CoreTM-i7-2600S-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3330",
      "Rank": 365,
      "Benchmark": 67.4,
      "Samples": 47129,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10/IntelR-CoreTM-i5-3330-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X5560",
      "Rank": 366,
      "Benchmark": 67.3,
      "Samples": 457,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/16614/IntelR-XeonR-CPU-----------X5560----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I34370",
      "Brand": "Intel",
      "Model": "Core i3-4370",
      "Rank": 367,
      "Benchmark": 67.2,
      "Samples": 1468,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-4370/Rating/2817"
    },
    {
      "Type": "CPU",
      "Part Number": "YD130XBBAEBOX",
      "Brand": "AMD",
      "Model": "Ryzen 3 1300X",
      "Rank": 368,
      "Benchmark": 67.2,
      "Samples": 32323,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-3-1300X/Rating/3930"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3840QM",
      "Rank": 369,
      "Benchmark": 67.1,
      "Samples": 3712,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2451/IntelR-CoreTM-i7-3840QM-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-10310U",
      "Rank": 370,
      "Benchmark": 67.1,
      "Samples": 1675,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1150155/IntelR-CoreTM-i5-10310U-CPU---170GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80647I74900MQ",
      "Brand": "Intel",
      "Model": "Core i7-4900MQ",
      "Rank": 371,
      "Benchmark": 67.1,
      "Samples": 4716,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-4900MQ/Rating/1994"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662I36300",
      "Brand": "Intel",
      "Model": "Core i3-6300",
      "Rank": 372,
      "Benchmark": 67.1,
      "Samples": 3262,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-6300/Rating/3536"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-6820HQ",
      "Rank": 373,
      "Benchmark": 66.9,
      "Samples": 23246,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/43500/IntelR-CoreTM-i7-6820HQ-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3820QM",
      "Rank": 374,
      "Benchmark": 66.9,
      "Samples": 2536,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4339/IntelR-CoreTM-i7-3820QM-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-7300HQ",
      "Rank": 375,
      "Benchmark": 66.9,
      "Samples": 137405,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/223877/IntelR-CoreTM-i5-7300HQ-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-1130G7",
      "Rank": 376,
      "Benchmark": 66.8,
      "Samples": 37,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1418235/11th-Gen-IntelR-CoreTM-i5-1130G7---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4700HQ",
      "Rank": 377,
      "Benchmark": 66.8,
      "Samples": 37782,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-4700HQ/Rating/2728"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80601950",
      "Brand": "Intel",
      "Model": "Core i7-950",
      "Rank": 378,
      "Benchmark": 66.7,
      "Samples": 31095,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-950/Rating/617"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677G4620",
      "Brand": "Intel",
      "Model": "Pentium G4620",
      "Rank": 379,
      "Benchmark": 66.6,
      "Samples": 2643,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G4620/Rating/3895"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4570R",
      "Rank": 380,
      "Benchmark": 66.5,
      "Samples": 862,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6445/IntelR-CoreTM-i5-4570R-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I37300T",
      "Brand": "Intel",
      "Model": "Core i3-7300T",
      "Rank": 381,
      "Benchmark": 66.5,
      "Samples": 64,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/230231/IntelR-CoreTM-i3-7300T-CPU---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I57400T",
      "Brand": "Intel",
      "Model": "Core i5-7400T",
      "Rank": 382,
      "Benchmark": 66.4,
      "Samples": 2947,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/244917/IntelR-CoreTM-i5-7400T-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4800MQ",
      "Rank": 383,
      "Benchmark": 66.4,
      "Samples": 17367,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3437/IntelR-CoreTM-i7-4800MQ-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2310",
      "Rank": 384,
      "Benchmark": 66.4,
      "Samples": 14599,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2055/IntelR-CoreTM-i5-2310-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2300",
      "Rank": 385,
      "Benchmark": 66.3,
      "Samples": 15617,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/291/IntelR-CoreTM-i5-2300-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon W3550",
      "Rank": 386,
      "Benchmark": 66.3,
      "Samples": 5813,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3628/IntelR-XeonR-CPU-----------W3550----307GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4722HQ",
      "Rank": 387,
      "Benchmark": 66.2,
      "Samples": 190,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/32895/IntelR-CoreTM-i7-4722HQ-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FD9370FHHKWOF",
      "Brand": "AMD",
      "Model": "FX-9370",
      "Rank": 388,
      "Benchmark": 66.2,
      "Samples": 6996,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-9370/Rating/2005"
    },
    {
      "Type": "CPU",
      "Part Number": "YD2400C5FBBOX",
      "Brand": "AMD",
      "Model": "Ryzen 5 2400G",
      "Rank": 389,
      "Benchmark": 66.1,
      "Samples": 101471,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/433194/AMD-Ryzen-5-2400G-with-Radeon-Vega-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4710MQ",
      "Rank": 390,
      "Benchmark": 66.1,
      "Samples": 21458,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9397/IntelR-CoreTM-i7-4710MQ-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 940",
      "Rank": 391,
      "Benchmark": 66,
      "Samples": 2031,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/606/IntelR-CoreTM-i7-CPU---------940----293GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X3440",
      "Rank": 392,
      "Benchmark": 65.9,
      "Samples": 5731,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6655/IntelR-XeonR-CPU-----------X3440----253GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X3450",
      "Rank": 393,
      "Benchmark": 65.9,
      "Samples": 2797,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10439/IntelR-XeonR-CPU-----------X3450----267GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "CW8064701470702",
      "Brand": "Intel",
      "Model": "Core i7-4700MQ",
      "Rank": 394,
      "Benchmark": 65.9,
      "Samples": 55530,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-4700MQ/Rating/2727"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I34350",
      "Brand": "Intel",
      "Model": "Core i3-4350",
      "Rank": 395,
      "Benchmark": 65.8,
      "Samples": 430,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-4350/Rating/2433"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3740QM",
      "Rank": 396,
      "Benchmark": 65.8,
      "Samples": 11640,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2919/IntelR-CoreTM-i7-3740QM-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FD8370FRHKBOX",
      "Brand": "AMD",
      "Model": "FX-8370",
      "Rank": 397,
      "Benchmark": 65.8,
      "Samples": 26837,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-8370/Rating/2983"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-1035G1",
      "Rank": 398,
      "Benchmark": 65.8,
      "Samples": 26461,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/895407/IntelR-CoreTM-i5-1035G1-CPU---100GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I34360",
      "Brand": "Intel",
      "Model": "Core i3-4360",
      "Rank": 399,
      "Benchmark": 65.8,
      "Samples": 1507,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-4360/Rating/2819"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 860",
      "Rank": 400,
      "Benchmark": 65.8,
      "Samples": 36496,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/841/IntelR-CoreTM-i7-CPU---------860----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-6700HQ",
      "Rank": 401,
      "Benchmark": 65.8,
      "Samples": 262538,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/34954/IntelR-CoreTM-i7-6700HQ-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3720QM",
      "Rank": 402,
      "Benchmark": 65.7,
      "Samples": 8839,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1619/IntelR-CoreTM-i7-3720QM-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FD8350FRHKBOX",
      "Brand": "AMD",
      "Model": "FX-8350",
      "Rank": 403,
      "Benchmark": 65.7,
      "Samples": 291137,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-8350/Rating/1489"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-10510U",
      "Rank": 404,
      "Benchmark": 65.7,
      "Samples": 31542,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/891469/IntelR-CoreTM-i7-10510U-CPU---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4710HQ",
      "Rank": 405,
      "Benchmark": 65.5,
      "Samples": 58230,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11499/IntelR-CoreTM-i7-4710HQ-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 760",
      "Rank": 406,
      "Benchmark": 65.5,
      "Samples": 29893,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/717/IntelR-CoreTM-i5-CPU---------760----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-10210U",
      "Rank": 407,
      "Benchmark": 65.5,
      "Samples": 28547,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/819403/IntelR-CoreTM-i5-10210U-CPU---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-2670 v2",
      "Rank": 408,
      "Benchmark": 65.4,
      "Samples": 270,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/18414/IntelR-XeonR-CPU-E5-2670-v2---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4850HQ",
      "Rank": 409,
      "Benchmark": 65.3,
      "Samples": 725,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7877/IntelR-CoreTM-i7-4850HQ-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2500S",
      "Rank": 410,
      "Benchmark": 65.3,
      "Samples": 2439,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1699/IntelR-CoreTM-i5-2500S-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I37100",
      "Brand": "Intel",
      "Model": "Core i3-7100",
      "Rank": 411,
      "Benchmark": 65.3,
      "Samples": 66722,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-7100/Rating/3891"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684G5400",
      "Brand": "Intel",
      "Model": "Pentium Gold G5400",
      "Rank": 412,
      "Benchmark": 65.3,
      "Samples": 11936,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/484278/IntelR-PentiumR-Gold-G5400-CPU---370GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-1065G7",
      "Rank": 413,
      "Benchmark": 65.2,
      "Samples": 34687,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/888368/IntelR-CoreTM-i7-1065G7-CPU---130GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 930",
      "Rank": 414,
      "Benchmark": 65.2,
      "Samples": 20132,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/79/IntelR-CoreTM-i7-CPU---------930----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FH8068403419422",
      "Brand": "Intel",
      "Model": "Core i3-8109U",
      "Rank": 415,
      "Benchmark": 65.1,
      "Samples": 1354,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/609620/IntelR-CoreTM-i3-8109U-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AW8063801106200",
      "Brand": "Intel",
      "Model": "Core i7-3630QM",
      "Rank": 416,
      "Benchmark": 65.1,
      "Samples": 58132,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-3630QM/Rating/626"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3330S",
      "Rank": 417,
      "Benchmark": 65.1,
      "Samples": 3516,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4366/IntelR-CoreTM-i5-3330S-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2960XM",
      "Rank": 418,
      "Benchmark": 64.9,
      "Samples": 736,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2390/IntelR-CoreTM-i7-2960XM-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AW8063801013511",
      "Brand": "Intel",
      "Model": "Core i7-3610QM",
      "Rank": 419,
      "Benchmark": 64.9,
      "Samples": 31362,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-3610QM/Rating/2730"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon W3530",
      "Rank": 420,
      "Benchmark": 64.8,
      "Samples": 4495,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3000/IntelR-XeonR-CPU-----------W3530----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 5 2600H",
      "Rank": 421,
      "Benchmark": 64.7,
      "Samples": 161,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/617618/AMD-Ryzen-5-2600H-with-Radeon-Vega-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I34340",
      "Brand": "Intel",
      "Model": "Core i3-4340",
      "Rank": 422,
      "Benchmark": 64.5,
      "Samples": 766,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-4340/Rating/2877"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662I36300T",
      "Brand": "Intel",
      "Model": "Core i3-6300T",
      "Rank": 423,
      "Benchmark": 64.5,
      "Samples": 118,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/75733/IntelR-CoreTM-i3-6300T-CPU---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80605I5750",
      "Brand": "Intel",
      "Model": "Core i5-750",
      "Rank": 424,
      "Benchmark": 64.5,
      "Samples": 45333,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-750/Rating/2773"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2405S",
      "Rank": 425,
      "Benchmark": 64.4,
      "Samples": 159,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10048/IntelR-CoreTM-i5-2405S-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 9 4900U",
      "Rank": 426,
      "Benchmark": 64.1,
      "Samples": 1,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1097507/AMD-Ryzen-9-4900U-with-Radeon-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80601920",
      "Brand": "Intel",
      "Model": "Core i7-920",
      "Rank": 427,
      "Benchmark": 64.1,
      "Samples": 48588,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-920/Rating/1981"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-1115G4",
      "Rank": 428,
      "Benchmark": 64.1,
      "Samples": 740,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1333512/11th-Gen-IntelR-CoreTM-i3-1115G4---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4770HQ",
      "Rank": 429,
      "Benchmark": 64,
      "Samples": 1368,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/18784/IntelR-CoreTM-i7-4770HQ-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 7 2800H",
      "Rank": 430,
      "Benchmark": 63.7,
      "Samples": 50,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/667422/AMD-Ryzen-7-2800H-with-Radeon-Vega-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4750HQ",
      "Rank": 431,
      "Benchmark": 63.7,
      "Samples": 4421,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3709/IntelR-CoreTM-i7-4750HQ-CPU---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-8665U",
      "Rank": 432,
      "Benchmark": 63.6,
      "Samples": 6406,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/740553/IntelR-CoreTM-i7-8665U-CPU---190GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "CM8068403360212",
      "Brand": "Intel",
      "Model": "Pentium G5400T",
      "Rank": 433,
      "Benchmark": 63.6,
      "Samples": 126,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/528812/IntelR-PentiumR-Gold-G5400T-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677G4600",
      "Brand": "Intel",
      "Model": "Pentium G4600",
      "Rank": 434,
      "Benchmark": 63.6,
      "Samples": 13427,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G4600/Rating/3894"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-7567U",
      "Rank": 435,
      "Benchmark": 63.5,
      "Samples": 1696,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/219709/IntelR-CoreTM-i7-7567U-CPU---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FJ8068404064604",
      "Brand": "Intel",
      "Model": "Core i5-8265U",
      "Rank": 436,
      "Benchmark": 63.5,
      "Samples": 63275,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/566107/IntelR-CoreTM-i5-8265U-CPU---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FX-6350 Six-Core",
      "Rank": 437,
      "Benchmark": 63.4,
      "Samples": 24586,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/713/AMD-FXtm-6350-Six-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "YD1400BBAEBOX",
      "Brand": "AMD",
      "Model": "Ryzen 5 1400",
      "Rank": 438,
      "Benchmark": 63.4,
      "Samples": 57158,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-5-1400/Rating/3922"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-6300HQ",
      "Rank": 439,
      "Benchmark": 63.4,
      "Samples": 45251,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/38166/IntelR-CoreTM-i5-6300HQ-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2400S",
      "Rank": 440,
      "Benchmark": 63.3,
      "Samples": 7587,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/304/IntelR-CoreTM-i5-2400S-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I34330",
      "Brand": "Intel",
      "Model": "Core i3-4330",
      "Rank": 441,
      "Benchmark": 63.3,
      "Samples": 5308,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-4330/Rating/2876"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4702MQ",
      "Rank": 442,
      "Benchmark": 63.2,
      "Samples": 18492,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2674/IntelR-CoreTM-i7-4702MQ-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-8350U",
      "Rank": 443,
      "Benchmark": 63.1,
      "Samples": 13100,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/388461/IntelR-CoreTM-i5-8350U-CPU---170GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662I36100",
      "Brand": "Intel",
      "Model": "Core i3-6100",
      "Rank": 444,
      "Benchmark": 63.1,
      "Samples": 95249,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-6100/Rating/3511"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 980",
      "Rank": 445,
      "Benchmark": 63.1,
      "Samples": 1026,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5445/AMD-Phenomtm-II-X4-980-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3632QM",
      "Rank": 446,
      "Benchmark": 63,
      "Samples": 21646,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/36/IntelR-CoreTM-i7-3632QM-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FJ8068404064405",
      "Brand": "Intel",
      "Model": "Core i7-8565U",
      "Rank": 447,
      "Benchmark": 63,
      "Samples": 60789,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/591977/IntelR-CoreTM-i7-8565U-CPU---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon W3520",
      "Rank": 448,
      "Benchmark": 63,
      "Samples": 5737,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3585/IntelR-XeonR-CPU-----------W3520----267GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD1200BBAEBOX",
      "Brand": "AMD",
      "Model": "Ryzen 3 1200",
      "Rank": 449,
      "Benchmark": 63,
      "Samples": 70738,
      "URL": "https://cpu.userbenchmark.com/AMD-Ryzen-3-1200/Rating/3931"
    },
    {
      "Type": "CPU",
      "Part Number": "FD8320FRHKBOX",
      "Brand": "AMD",
      "Model": "FX-8320",
      "Rank": 450,
      "Benchmark": 63,
      "Samples": 105980,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-8320/Rating/1983"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-8250U",
      "Rank": 451,
      "Benchmark": 62.9,
      "Samples": 202132,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/338266/IntelR-CoreTM-i5-8250U-CPU---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3615QM",
      "Rank": 452,
      "Benchmark": 62.9,
      "Samples": 2289,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/806/IntelR-CoreTM-i7-3615QM-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "HDE00ZFBGRBOX",
      "Brand": "AMD",
      "Model": "Phenom II X6 1100T",
      "Rank": 453,
      "Benchmark": 62.8,
      "Samples": 10724,
      "URL": "https://cpu.userbenchmark.com/AMD-Phenom-II-X6-1100T/Rating/2004"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5540",
      "Rank": 454,
      "Benchmark": 62.8,
      "Samples": 408,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13822/IntelR-XeonR-CPU-----------E5540----253GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2920XM",
      "Rank": 455,
      "Benchmark": 62.7,
      "Samples": 811,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/459/IntelR-CoreTM-i7-2920XM-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-6098P",
      "Rank": 456,
      "Benchmark": 62.7,
      "Samples": 4887,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/80177/IntelR-CoreTM-i3-6098P-CPU---360GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-7260U",
      "Rank": 457,
      "Benchmark": 62.6,
      "Samples": 2154,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/269906/IntelR-CoreTM-i5-7260U-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4702HQ",
      "Rank": 458,
      "Benchmark": 62.6,
      "Samples": 2936,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/297/IntelR-CoreTM-i7-4702HQ-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I34170",
      "Brand": "Intel",
      "Model": "Core i3-4170",
      "Rank": 459,
      "Benchmark": 62.4,
      "Samples": 35946,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/28214/IntelR-CoreTM-i3-4170-CPU---370GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FX-8310",
      "Rank": 460,
      "Benchmark": 62.4,
      "Samples": 1509,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/18534/AMD-FXtm-8310-Eight-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 B65",
      "Rank": 461,
      "Benchmark": 62.4,
      "Samples": 191,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6054/AMD-Phenomtm-II-X4-B65-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I34160",
      "Brand": "Intel",
      "Model": "Core i3-4160",
      "Rank": 462,
      "Benchmark": 62.3,
      "Samples": 37287,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-4160/Rating/2816"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3635QM",
      "Rank": 463,
      "Benchmark": 62.3,
      "Samples": 2524,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2465/IntelR-CoreTM-i7-3635QM-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X3430",
      "Rank": 464,
      "Benchmark": 62.3,
      "Samples": 3208,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5225/IntelR-XeonR-CPU-----------X3430----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-8365U",
      "Rank": 465,
      "Benchmark": 62.3,
      "Samples": 4712,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/774761/IntelR-CoreTM-i5-8365U-CPU---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2860QM",
      "Rank": 466,
      "Benchmark": 62.2,
      "Samples": 3380,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/103/IntelR-CoreTM-i7-2860QM-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FD8150FRGUBOX",
      "Brand": "AMD",
      "Model": "FX-8150",
      "Rank": 467,
      "Benchmark": 62.2,
      "Samples": 19074,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-8150/Rating/2006"
    },
    {
      "Type": "CPU",
      "Part Number": "FD837EWMHKBOX",
      "Brand": "AMD",
      "Model": "FX-8370E",
      "Rank": 468,
      "Benchmark": 62.2,
      "Samples": 4764,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-8370E/Rating/2984"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FX-8300",
      "Rank": 469,
      "Benchmark": 62.2,
      "Samples": 42309,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7163/AMD-FXtm-8300-Eight-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3612QM",
      "Rank": 470,
      "Benchmark": 62,
      "Samples": 9779,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/329/IntelR-CoreTM-i7-3612QM-CPU---210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677I37100T",
      "Brand": "Intel",
      "Model": "Core i3-7100T",
      "Rank": 471,
      "Benchmark": 62,
      "Samples": 2066,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/230301/IntelR-CoreTM-i3-7100T-CPU---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-8550U",
      "Rank": 472,
      "Benchmark": 61.9,
      "Samples": 146761,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/320742/IntelR-CoreTM-i7-8550U-CPU---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677G4560",
      "Brand": "Intel",
      "Model": "Pentium G4560",
      "Rank": 473,
      "Benchmark": 61.8,
      "Samples": 64521,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G4560/Rating/3892"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 975",
      "Rank": 474,
      "Benchmark": 61.8,
      "Samples": 1057,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3020/AMD-Phenomtm-II-X4-975-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-8650U",
      "Rank": 475,
      "Benchmark": 61.7,
      "Samples": 33690,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/353957/IntelR-CoreTM-i7-8650U-CPU---190GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X6 1090T",
      "Rank": 476,
      "Benchmark": 61.7,
      "Samples": 24774,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/417/AMD-Phenomtm-II-X6-1090T-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-1035G4",
      "Rank": 477,
      "Benchmark": 61.6,
      "Samples": 8353,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/921077/IntelR-CoreTM-i5-1035G4-CPU---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2760QM",
      "Rank": 478,
      "Benchmark": 61.6,
      "Samples": 8443,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/949/IntelR-CoreTM-i7-2760QM-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4712HQ",
      "Rank": 479,
      "Benchmark": 61.6,
      "Samples": 4483,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10973/IntelR-CoreTM-i7-4712HQ-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I34150",
      "Brand": "Intel",
      "Model": "Core i3-4150",
      "Rank": 480,
      "Benchmark": 61.6,
      "Samples": 31186,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-4150/Rating/2309"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-2620 v2",
      "Rank": 481,
      "Benchmark": 61.4,
      "Samples": 1686,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4718/IntelR-XeonR-CPU-E5-2620-v2---210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X4 555",
      "Rank": 482,
      "Benchmark": 61.3,
      "Samples": 113,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12528/AMD-Athlontm-II-X4-555-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "FD832EWMHKBOX",
      "Brand": "AMD",
      "Model": "FX-8320E",
      "Rank": 483,
      "Benchmark": 61.2,
      "Samples": 25389,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-8320E/Rating/2985"
    },
    {
      "Type": "CPU",
      "Part Number": "CM8068403377713",
      "Brand": "Intel",
      "Model": "Pentium G5500T",
      "Rank": 484,
      "Benchmark": 61.2,
      "Samples": 46,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/519437/IntelR-PentiumR-Gold-G5500T-CPU---320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-1035G7",
      "Rank": 485,
      "Benchmark": 61.1,
      "Samples": 2893,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/920409/IntelR-CoreTM-i5-1035G7-CPU---120GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Extreme X9770",
      "Rank": 486,
      "Benchmark": 61,
      "Samples": 408,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10543/IntelR-CoreTM2-Extreme-CPU-X9770----320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-1603 0",
      "Rank": 487,
      "Benchmark": 60.9,
      "Samples": 2473,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9880/IntelR-XeonR-CPU-E5-1603-0---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 970",
      "Rank": 488,
      "Benchmark": 60.9,
      "Samples": 2091,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2231/AMD-Phenomtm-II-X4-970-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646I34130",
      "Brand": "Intel",
      "Model": "Core i3-4130",
      "Rank": 489,
      "Benchmark": 60.8,
      "Samples": 41674,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-4130/Rating/1621"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5530",
      "Rank": 490,
      "Benchmark": 60.7,
      "Samples": 542,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4018/IntelR-XeonR-CPU-----------E5530----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FX-6200 Six-Core",
      "Rank": 491,
      "Benchmark": 60.7,
      "Samples": 4648,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2658/AMD-FXtm-6200-Six-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X6 1075T",
      "Rank": 492,
      "Benchmark": 60.7,
      "Samples": 3997,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/913/AMD-Phenomtm-II-X6-1075T-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2125",
      "Rank": 493,
      "Benchmark": 60.7,
      "Samples": 554,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3545/IntelR-CoreTM-i3-2125-CPU---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-3250",
      "Rank": 494,
      "Benchmark": 60.4,
      "Samples": 3189,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4950/IntelR-CoreTM-i3-3250-CPU---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FD6300WMHKBOX",
      "Brand": "AMD",
      "Model": "FX-6300",
      "Rank": 495,
      "Benchmark": 60.4,
      "Samples": 239196,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-6300/Rating/1555"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2820QM",
      "Rank": 496,
      "Benchmark": 60.3,
      "Samples": 4547,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3145/IntelR-CoreTM-i7-2820QM-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80637I33225",
      "Brand": "Intel",
      "Model": "Core i3-3225",
      "Rank": 497,
      "Benchmark": 60.3,
      "Samples": 2686,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i3-3225/Rating/1488"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-5557U",
      "Rank": 498,
      "Benchmark": 60.3,
      "Samples": 1361,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/27386/IntelR-CoreTM-i7-5557U-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5620",
      "Rank": 499,
      "Benchmark": 60.2,
      "Samples": 2544,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6971/IntelR-XeonR-CPU-----------E5620----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4570T",
      "Rank": 500,
      "Benchmark": 60.2,
      "Samples": 5229,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6853/IntelR-CoreTM-i5-4570T-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "CM8067703016117",
      "Brand": "Intel",
      "Model": "Pentium G4560T",
      "Rank": 501,
      "Benchmark": 60.2,
      "Samples": 346,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/467086/IntelR-PentiumR-CPU-G4560T---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 X 940",
      "Rank": 502,
      "Benchmark": 60,
      "Samples": 496,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2801/IntelR-CoreTM-i7-CPU-------X-940----213GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FD4350FRHKBOX",
      "Brand": "AMD",
      "Model": "FX-4350",
      "Rank": 503,
      "Benchmark": 60,
      "Samples": 10182,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-4350/Rating/2880"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-7167U",
      "Rank": 504,
      "Benchmark": 59.9,
      "Samples": 33,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/357115/IntelR-CoreTM-i3-7167U-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4610M",
      "Rank": 505,
      "Benchmark": 59.9,
      "Samples": 3691,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11649/IntelR-CoreTM-i7-4610M-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 B60",
      "Rank": 506,
      "Benchmark": 59.8,
      "Samples": 1286,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8154/AMD-Phenomtm-II-X4-B60-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662G4520",
      "Brand": "Intel",
      "Model": "Pentium G4520",
      "Rank": 507,
      "Benchmark": 59.8,
      "Samples": 323,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G4520/Rating/3537"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662I36100T",
      "Brand": "Intel",
      "Model": "Core i3-6100T",
      "Rank": 508,
      "Benchmark": 59.8,
      "Samples": 4386,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/40317/IntelR-CoreTM-i3-6100T-CPU---320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2720QM",
      "Rank": 509,
      "Benchmark": 59.4,
      "Samples": 7230,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/532/IntelR-CoreTM-i7-2720QM-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD240GC6FBBOX",
      "Brand": "AMD",
      "Model": "Athlon 240GE",
      "Rank": 510,
      "Benchmark": 59.4,
      "Samples": 393,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/705151/AMD-Athlon-240GE-with-Radeon-Vega-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-2630 0",
      "Rank": 511,
      "Benchmark": 59.3,
      "Samples": 1532,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6512/IntelR-XeonR-CPU-E5-2630-0---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-2620 0",
      "Rank": 512,
      "Benchmark": 59.3,
      "Samples": 2614,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5895/IntelR-XeonR-CPU-E5-2620-0---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G3470",
      "Rank": 513,
      "Benchmark": 59.3,
      "Samples": 122,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/28614/IntelR-PentiumR-CPU-G3470---360GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "HDZ965FBGMBOX",
      "Brand": "AMD",
      "Model": "Phenom II X4 965",
      "Rank": 514,
      "Benchmark": 59.3,
      "Samples": 45507,
      "URL": "https://cpu.userbenchmark.com/AMD-Phenom-II-X4-965/Rating/606"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 7 3750H",
      "Rank": 515,
      "Benchmark": 59.2,
      "Samples": 25744,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/786211/AMD-Ryzen-7-3750H-with-Radeon-Vega-Mobile-Gfx"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5520",
      "Rank": 516,
      "Benchmark": 59.1,
      "Samples": 1240,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5884/IntelR-XeonR-CPU-----------E5520----227GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-1005G1",
      "Rank": 517,
      "Benchmark": 59,
      "Samples": 10671,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/906918/IntelR-CoreTM-i3-1005G1-CPU---120GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FX-8120",
      "Rank": 518,
      "Benchmark": 59,
      "Samples": 22840,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/173/AMD-FXtm-8120-Eight-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-3240",
      "Rank": 519,
      "Benchmark": 59,
      "Samples": 24276,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2133/IntelR-CoreTM-i3-3240-CPU---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2105",
      "Rank": 520,
      "Benchmark": 58.9,
      "Samples": 934,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2747/IntelR-CoreTM-i3-2105-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 5 3550H",
      "Rank": 521,
      "Benchmark": 58.9,
      "Samples": 39793,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/718601/AMD-Ryzen-5-3550H-with-Radeon-Vega-Mobile-Gfx"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon L5520",
      "Rank": 522,
      "Benchmark": 58.8,
      "Samples": 150,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6285/IntelR-XeonR-CPU-----------L5520----227GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2670QM",
      "Rank": 523,
      "Benchmark": 58.8,
      "Samples": 41405,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-2670QM/Rating/1982"
    },
    {
      "Type": "CPU",
      "Part Number": "YD3000C6FHBOX",
      "Brand": "AMD",
      "Model": "Athlon 3000G",
      "Rank": 524,
      "Benchmark": 58.7,
      "Samples": 5904,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/968952/AMD-Athlon-3000G-with-Radeon-Vega-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-3210",
      "Rank": 525,
      "Benchmark": 58.6,
      "Samples": 5434,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3090/IntelR-CoreTM-i3-3210-CPU---320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2130",
      "Rank": 526,
      "Benchmark": 58.6,
      "Samples": 6608,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/424/IntelR-CoreTM-i3-2130-CPU---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-3220",
      "Rank": 527,
      "Benchmark": 58.6,
      "Samples": 56953,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/272/IntelR-CoreTM-i3-3220-CPU---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FX-4170 Quad-Core",
      "Rank": 528,
      "Benchmark": 58.6,
      "Samples": 4271,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/114/AMD-FXtm-4170-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "HDT55TFBGRBOX",
      "Brand": "AMD",
      "Model": "Phenom II X6 1055T",
      "Rank": 529,
      "Benchmark": 58.6,
      "Samples": 22739,
      "URL": "https://cpu.userbenchmark.com/AMD-Phenom-II-X6-1055T/Rating/2003"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-5550U",
      "Rank": 530,
      "Benchmark": 58.5,
      "Samples": 95,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/203876/IntelR-CoreTM-i7-5550U-CPU---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2120",
      "Rank": 531,
      "Benchmark": 58.4,
      "Samples": 65151,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2227/IntelR-CoreTM-i3-2120-CPU---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G3460",
      "Rank": 532,
      "Benchmark": 58.4,
      "Samples": 1061,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G3460/Rating/2818"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-10110U",
      "Rank": 533,
      "Benchmark": 58.4,
      "Samples": 3849,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/915083/IntelR-CoreTM-i3-10110U-CPU---210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3470T",
      "Rank": 534,
      "Benchmark": 58.3,
      "Samples": 2708,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2220/IntelR-CoreTM-i5-3470T-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4200H",
      "Rank": 535,
      "Benchmark": 58.3,
      "Samples": 9340,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8854/IntelR-CoreTM-i5-4200H-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD220GC6FBBOX",
      "Brand": "AMD",
      "Model": "Athlon 220GE",
      "Rank": 536,
      "Benchmark": 58.2,
      "Samples": 445,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/700311/AMD-Athlon-220GE-with-Radeon-Vega-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-6790K APU (2013 D.Ri)",
      "Rank": 537,
      "Benchmark": 58.2,
      "Samples": 1897,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13499/AMD-A10-6790K-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X5470",
      "Rank": 538,
      "Benchmark": 58.2,
      "Samples": 1417,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/14102/IntelR-XeonR-CPU-----------X5470----333GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4600M",
      "Rank": 539,
      "Benchmark": 58.2,
      "Samples": 5383,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4429/IntelR-CoreTM-i7-4600M-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 960T",
      "Rank": 540,
      "Benchmark": 57.9,
      "Samples": 3562,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1813/AMD-Phenomtm-II-X4-960T-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-7500U",
      "Rank": 541,
      "Benchmark": 57.8,
      "Samples": 123592,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/171274/IntelR-CoreTM-i7-7500U-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core X 920",
      "Rank": 542,
      "Benchmark": 57.8,
      "Samples": 69,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7179/IntelR-CoreTM-CPU----------X-920----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2675QM",
      "Rank": 543,
      "Benchmark": 57.7,
      "Samples": 918,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/597/IntelR-CoreTM-i7-2675QM-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "HDZ955FBGMBOX",
      "Brand": "AMD",
      "Model": "Phenom II X4 955",
      "Rank": 544,
      "Benchmark": 57.7,
      "Samples": 35084,
      "URL": "https://cpu.userbenchmark.com/AMD-Phenom-II-X4-955/Rating/2935"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FX-6120 Six-Core",
      "Rank": 545,
      "Benchmark": 57.7,
      "Samples": 1581,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7026/AMD-FXtm-6120-Six-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "FD4300WMHKBOX",
      "Brand": "AMD",
      "Model": "FX-4300",
      "Rank": 546,
      "Benchmark": 57.7,
      "Samples": 44906,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-4300/Rating/2879"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646G3440",
      "Brand": "Intel",
      "Model": "Pentium G3440",
      "Rank": 547,
      "Benchmark": 57.7,
      "Samples": 473,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G3440/Rating/2435"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-7600U",
      "Rank": 548,
      "Benchmark": 57.7,
      "Samples": 10071,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/220838/IntelR-CoreTM-i7-7600U-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2635QM",
      "Rank": 549,
      "Benchmark": 57.6,
      "Samples": 303,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12770/IntelR-CoreTM-i7-2635QM-CPU---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 20",
      "Rank": 550,
      "Benchmark": 57.5,
      "Samples": 632,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4534/AMD-Phenomtm-II-X4-20-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "FF8062700837005",
      "Brand": "Intel",
      "Model": "Core i7-2630QM",
      "Rank": 551,
      "Benchmark": 57.5,
      "Samples": 34670,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-2630QM/Rating/2729"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4558U",
      "Rank": 552,
      "Benchmark": 57.4,
      "Samples": 680,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4092/IntelR-CoreTM-i7-4558U-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 B55",
      "Rank": 553,
      "Benchmark": 57.4,
      "Samples": 3657,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/878/AMD-Phenomtm-II-X4-B55-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "FJ8067703282227",
      "Brand": "Intel",
      "Model": "Core i3-8130U",
      "Rank": 554,
      "Benchmark": 57.3,
      "Samples": 20698,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/468020/IntelR-CoreTM-i3-8130U-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-8145U",
      "Rank": 555,
      "Benchmark": 57.2,
      "Samples": 8290,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/616038/IntelR-CoreTM-i3-8145U-CPU---210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Extreme X9650",
      "Rank": 556,
      "Benchmark": 57.2,
      "Samples": 1647,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2662/IntelR-CoreTM2-Extreme-CPU-X9650----300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662G4500",
      "Brand": "Intel",
      "Model": "Pentium G4500",
      "Rank": 557,
      "Benchmark": 57.2,
      "Samples": 2993,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G4500/Rating/3538"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-5287U",
      "Rank": 558,
      "Benchmark": 57.1,
      "Samples": 354,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/25610/IntelR-CoreTM-i5-5287U-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FD6100WMGUSBX",
      "Brand": "AMD",
      "Model": "FX-6100",
      "Rank": 559,
      "Benchmark": 57.1,
      "Samples": 33387,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-6100/Rating/1984"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X6 1045T",
      "Rank": 560,
      "Benchmark": 57.1,
      "Samples": 4593,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1873/AMD-Phenomtm-II-X6-1045T-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3540M",
      "Rank": 561,
      "Benchmark": 57.1,
      "Samples": 5098,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/921/IntelR-CoreTM-i7-3540M-CPU---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646G3430",
      "Brand": "Intel",
      "Model": "Pentium G3430",
      "Rank": 562,
      "Benchmark": 57,
      "Samples": 220,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G3430/Rating/1969"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4258U",
      "Rank": 563,
      "Benchmark": 57,
      "Samples": 1141,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5904/IntelR-CoreTM-i5-4258U-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2100",
      "Rank": 564,
      "Benchmark": 56.9,
      "Samples": 49089,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/41/IntelR-CoreTM-i3-2100-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-4130T",
      "Rank": 565,
      "Benchmark": 56.9,
      "Samples": 4122,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13080/IntelR-CoreTM-i3-4130T-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-7200U",
      "Rank": 566,
      "Benchmark": 56.9,
      "Samples": 178324,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/153577/IntelR-CoreTM-i5-7200U-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3380M",
      "Rank": 567,
      "Benchmark": 56.8,
      "Samples": 2329,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5308/IntelR-CoreTM-i5-3380M-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G3450",
      "Rank": 568,
      "Benchmark": 56.8,
      "Samples": 1058,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/24201/IntelR-PentiumR-CPU-G3450---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3520M",
      "Rank": 569,
      "Benchmark": 56.7,
      "Samples": 17547,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/50/IntelR-CoreTM-i7-3520M-CPU---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X6 1035T",
      "Rank": 570,
      "Benchmark": 56.7,
      "Samples": 2065,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1603/AMD-Phenomtm-II-X6-1035T-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80701G5900",
      "Brand": "Intel",
      "Model": "Celeron G5900",
      "Rank": 571,
      "Benchmark": 56.7,
      "Samples": 164,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1187562/IntelR-CeleronR-G5900-CPU---340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-2609 0",
      "Rank": 572,
      "Benchmark": 56.6,
      "Samples": 573,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2762/IntelR-XeonR-CPU-E5-2609-0---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-3220T",
      "Rank": 573,
      "Benchmark": 56.6,
      "Samples": 1689,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2602/IntelR-CoreTM-i3-3220T-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 840T",
      "Rank": 574,
      "Benchmark": 56.5,
      "Samples": 1002,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8545/AMD-Phenomtm-II-X4-840T-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 B50",
      "Rank": 575,
      "Benchmark": 56.3,
      "Samples": 3037,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5205/AMD-Phenomtm-II-X4-B50-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 830",
      "Rank": 576,
      "Benchmark": 56.3,
      "Samples": 1288,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2164/AMD-Phenomtm-II-X4-830-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 945",
      "Rank": 577,
      "Benchmark": 56.3,
      "Samples": 12168,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/101/AMD-Phenomtm-II-X4-945-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3360M",
      "Rank": 578,
      "Benchmark": 56.2,
      "Samples": 4914,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/701/IntelR-CoreTM-i5-3360M-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-6567U",
      "Rank": 579,
      "Benchmark": 56.1,
      "Samples": 392,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/150864/IntelR-CoreTM-i7-6567U-CPU---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-6260U",
      "Rank": 580,
      "Benchmark": 56.1,
      "Samples": 1600,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/37385/IntelR-CoreTM-i5-6260U-CPU---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-5257U",
      "Rank": 581,
      "Benchmark": 56.1,
      "Samples": 2656,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/25441/IntelR-CoreTM-i5-5257U-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677G3950",
      "Brand": "Intel",
      "Model": "Celeron G3950",
      "Rank": 582,
      "Benchmark": 56,
      "Samples": 199,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/242877/IntelR-CeleronR-CPU-G3950---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-6600K APU",
      "Rank": 583,
      "Benchmark": 56,
      "Samples": 18591,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3344/AMD-A8-6600K-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 Q 840",
      "Rank": 584,
      "Benchmark": 55.9,
      "Samples": 1078,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2642/IntelR-CoreTM-i7-CPU-------Q-840----187GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-5800B APU (2012 D.Tr)",
      "Rank": 585,
      "Benchmark": 55.9,
      "Samples": 841,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/14080/AMD-A10-5800B-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-10210Y",
      "Rank": 586,
      "Benchmark": 55.8,
      "Samples": 47,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1005724/IntelR-CoreTM-i5-10210Y-CPU---100GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4210M",
      "Rank": 587,
      "Benchmark": 55.8,
      "Samples": 12619,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12839/IntelR-CoreTM-i5-4210M-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4300M",
      "Rank": 588,
      "Benchmark": 55.8,
      "Samples": 9783,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5215/IntelR-CoreTM-i5-4300M-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD680KWOHLBOX",
      "Brand": "AMD",
      "Model": "A10-6800K APU (2013 D.Ri)",
      "Rank": 589,
      "Benchmark": 55.6,
      "Samples": 11396,
      "URL": "https://cpu.userbenchmark.com/AMD-A10-6800K-APU-2013-DRi/Rating/2936"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 X 920",
      "Rank": 590,
      "Benchmark": 55.6,
      "Samples": 895,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4179/IntelR-CoreTM-i7-CPU-------X-920----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-7300U",
      "Rank": 591,
      "Benchmark": 55.6,
      "Samples": 17060,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/223355/IntelR-CoreTM-i5-7300U-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646G3420",
      "Brand": "Intel",
      "Model": "Pentium G3420",
      "Rank": 592,
      "Benchmark": 55.6,
      "Samples": 3755,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G3420/Rating/1968"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-6157U",
      "Rank": 593,
      "Benchmark": 55.5,
      "Samples": 343,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/187565/IntelR-CoreTM-i3-6157U-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YD200GC6FBBOX",
      "Brand": "AMD",
      "Model": "Athlon 200GE",
      "Rank": 594,
      "Benchmark": 55.5,
      "Samples": 8566,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/592714/AMD-Athlon-200GE-with-Radeon-Vega-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-6167U",
      "Rank": 595,
      "Benchmark": 55.5,
      "Samples": 22,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/175469/IntelR-CoreTM-i3-6167U-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-7130U",
      "Rank": 596,
      "Benchmark": 55.5,
      "Samples": 3436,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/376899/IntelR-CoreTM-i3-7130U-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X4 760K (2013 D.Ri)",
      "Rank": 597,
      "Benchmark": 55.5,
      "Samples": 5009,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9072/AMD-Athlontm-X4-760K-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3340M",
      "Rank": 598,
      "Benchmark": 55.5,
      "Samples": 10583,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1915/IntelR-CoreTM-i5-3340M-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FX-4100",
      "Rank": 599,
      "Benchmark": 55.5,
      "Samples": 25262,
      "URL": "https://cpu.userbenchmark.com/AMD-FX-4100/Rating/2878"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2640M",
      "Rank": 600,
      "Benchmark": 55.5,
      "Samples": 10864,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/791/IntelR-CoreTM-i7-2640M-CPU---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-5650U",
      "Rank": 601,
      "Benchmark": 55.4,
      "Samples": 201,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/26818/IntelR-CoreTM-i7-5650U-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FX-4130 Quad-Core",
      "Rank": 602,
      "Benchmark": 55.4,
      "Samples": 7953,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2420/AMD-FXtm-4130-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-7660U",
      "Rank": 603,
      "Benchmark": 55.3,
      "Samples": 3207,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/274151/IntelR-CoreTM-i7-7660U-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 910e",
      "Rank": 604,
      "Benchmark": 55.2,
      "Samples": 189,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10427/AMD-Phenomtm-II-X4-910e-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646G3258",
      "Brand": "Intel",
      "Model": "Pentium G3258",
      "Rank": 605,
      "Benchmark": 55.1,
      "Samples": 18496,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G3258/Rating/2434"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 B45",
      "Rank": 606,
      "Benchmark": 55.1,
      "Samples": 963,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4111/AMD-Phenomtm-II-X4-B45-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 3 3300U",
      "Rank": 607,
      "Benchmark": 55.1,
      "Samples": 1687,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/827713/AMD-Ryzen-3-3300U-with-Radeon-Vega-Mobile-Gfx"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5507",
      "Rank": 608,
      "Benchmark": 55.1,
      "Samples": 205,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13794/IntelR-XeonR-CPU-----------E5507----227GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4200M",
      "Rank": 609,
      "Benchmark": 55,
      "Samples": 28548,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2341/IntelR-CoreTM-i5-4200M-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-10510Y",
      "Rank": 610,
      "Benchmark": 55,
      "Samples": 14,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1048467/IntelR-CoreTM-i7-10510Y-CPU---120GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 925",
      "Rank": 611,
      "Benchmark": 55,
      "Samples": 4592,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2581/AMD-Phenomtm-II-X4-925-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4510U",
      "Rank": 612,
      "Benchmark": 55,
      "Samples": 51908,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10660/IntelR-CoreTM-i7-4510U-CPU---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-5500U",
      "Rank": 613,
      "Benchmark": 55,
      "Samples": 68839,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/22316/IntelR-CoreTM-i7-5500U-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD580KWOHJBOX",
      "Brand": "AMD",
      "Model": "A10-5800K APU (2012 D.Tr)",
      "Rank": 614,
      "Benchmark": 54.9,
      "Samples": 16873,
      "URL": "https://cpu.userbenchmark.com/AMD-A10-5800K-APU-2012-DTr/Rating/2007"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-2680 v2",
      "Rank": 615,
      "Benchmark": 54.9,
      "Samples": 39,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/17083/IntelR-XeonR-CPU-E5-2680-v2---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-6500U",
      "Rank": 616,
      "Benchmark": 54.8,
      "Samples": 92435,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/36930/IntelR-CoreTM-i7-6500U-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-7560U",
      "Rank": 617,
      "Benchmark": 54.8,
      "Samples": 1306,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/262014/IntelR-CoreTM-i7-7560U-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2620M",
      "Rank": 618,
      "Benchmark": 54.7,
      "Samples": 13436,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/643/IntelR-CoreTM-i7-2620M-CPU---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD750KWOHJBOX",
      "Brand": "AMD",
      "Model": "Athlon II X4 750K",
      "Rank": 619,
      "Benchmark": 54.7,
      "Samples": 4529,
      "URL": "https://cpu.userbenchmark.com/AMD-Athlon-II-X4-750K/Rating/1548"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G2120",
      "Rank": 620,
      "Benchmark": 54.6,
      "Samples": 1496,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/448/IntelR-PentiumR-CPU-G2120---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G2130",
      "Rank": 621,
      "Benchmark": 54.6,
      "Samples": 1653,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9126/IntelR-PentiumR-CPU-G2130---320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2120T",
      "Rank": 622,
      "Benchmark": 54.5,
      "Samples": 921,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2686/IntelR-CoreTM-i3-2120T-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 B40",
      "Rank": 623,
      "Benchmark": 54.5,
      "Samples": 432,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9803/AMD-Phenomtm-II-X4-B40-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X5472",
      "Rank": 624,
      "Benchmark": 54.5,
      "Samples": 302,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3914/IntelR-XeonR-CPU-----------X5472----300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad Q9650",
      "Rank": 625,
      "Benchmark": 54.4,
      "Samples": 13828,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1706/IntelR-CoreTM2-Quad-CPU----Q9650----300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-5600U",
      "Rank": 626,
      "Benchmark": 54.4,
      "Samples": 16155,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/22612/IntelR-CoreTM-i7-5600U-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 940",
      "Rank": 627,
      "Benchmark": 54.4,
      "Samples": 3047,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2203/AMD-Phenomtm-II-X4-940-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X5460",
      "Rank": 628,
      "Benchmark": 54.3,
      "Samples": 8210,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5754/IntelR-XeonR-CPU-----------X5460----316GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80701G5920",
      "Brand": "Intel",
      "Model": "Celeron G5920",
      "Rank": 629,
      "Benchmark": 54.3,
      "Samples": 21,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1197531/IntelR-CeleronR-G5920-CPU---350GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4500U",
      "Rank": 630,
      "Benchmark": 54.2,
      "Samples": 34287,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i7-4500U/Rating/2743"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 905e",
      "Rank": 631,
      "Benchmark": 54.2,
      "Samples": 311,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3420/AMD-Phenomtm-II-X4-905e-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "AD6700OKHLBOX",
      "Brand": "AMD",
      "Model": "A10-6700 APU (2013 D.Ri)",
      "Rank": 632,
      "Benchmark": 54.2,
      "Samples": 8934,
      "URL": "https://cpu.userbenchmark.com/AMD-A10-6700-APU-2013-DRi/Rating/2938"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5450",
      "Rank": 633,
      "Benchmark": 54.2,
      "Samples": 9853,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5890/IntelR-XeonR-CPU-----------E5450----300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4600U",
      "Rank": 634,
      "Benchmark": 54.2,
      "Samples": 20275,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2752/IntelR-CoreTM-i7-4600U-CPU---210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5472",
      "Rank": 635,
      "Benchmark": 54.2,
      "Samples": 684,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/20269/IntelR-XeonR-CPU-----------E5472----300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 850",
      "Rank": 636,
      "Benchmark": 54.1,
      "Samples": 1232,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3577/AMD-Phenomtm-II-X4-850-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "AW8063801208001",
      "Brand": "Intel",
      "Model": "Core i5-3230M",
      "Rank": 637,
      "Benchmark": 54.1,
      "Samples": 54118,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-3230M/Rating/2772"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-6600U",
      "Rank": 638,
      "Benchmark": 54,
      "Samples": 25153,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/36828/IntelR-CoreTM-i7-6600U-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5506",
      "Rank": 639,
      "Benchmark": 53.9,
      "Samples": 612,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11152/IntelR-XeonR-CPU-----------E5506----213GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2540M",
      "Rank": 640,
      "Benchmark": 53.9,
      "Samples": 14729,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1616/IntelR-CoreTM-i5-2540M-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662G4400",
      "Brand": "Intel",
      "Model": "Pentium G4400",
      "Rank": 641,
      "Benchmark": 53.9,
      "Samples": 28977,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G4400/Rating/3539"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3687U",
      "Rank": 642,
      "Benchmark": 53.9,
      "Samples": 2540,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2934/IntelR-CoreTM-i7-3687U-CPU---210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 920",
      "Rank": 643,
      "Benchmark": 53.8,
      "Samples": 927,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1945/AMD-Phenomtm-II-X4-920-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "AW8063801032301",
      "Brand": "Intel",
      "Model": "Core i5-3210M",
      "Rank": 644,
      "Benchmark": 53.8,
      "Samples": 68529,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-3210M/Rating/2719"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-5600K APU",
      "Rank": 645,
      "Benchmark": 53.8,
      "Samples": 13565,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1766/AMD-A8-5600K-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G3260",
      "Rank": 646,
      "Benchmark": 53.8,
      "Samples": 8357,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/31434/IntelR-PentiumR-CPU-G3260---330GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X4 651",
      "Rank": 647,
      "Benchmark": 53.8,
      "Samples": 889,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3526/AMD-Athlontm-II-X4-651-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3320M",
      "Rank": 648,
      "Benchmark": 53.8,
      "Samples": 38139,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/402/IntelR-CoreTM-i5-3320M-CPU---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80684G4900",
      "Brand": "Intel",
      "Model": "Celeron G4900",
      "Rank": 649,
      "Benchmark": 53.8,
      "Samples": 1559,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/482751/IntelR-CeleronR-G4900-CPU---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 5 3500U",
      "Rank": 650,
      "Benchmark": 53.7,
      "Samples": 52043,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/760067/AMD-Ryzen-5-3500U-with-Radeon-Vega-Mobile-Gfx"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2435M",
      "Rank": 651,
      "Benchmark": 53.5,
      "Samples": 459,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/968/IntelR-CoreTM-i5-2435M-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 7 3700U",
      "Rank": 652,
      "Benchmark": 53.4,
      "Samples": 14590,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/765724/AMD-Ryzen-7-3700U-with-Radeon-Vega-Mobile-Gfx"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X5450",
      "Rank": 653,
      "Benchmark": 53.4,
      "Samples": 4788,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5169/IntelR-XeonR-CPU-----------X5450----300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 Q 740",
      "Rank": 654,
      "Benchmark": 53.3,
      "Samples": 9975,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/415/IntelR-CoreTM-i7-CPU-------Q-740----173GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 810",
      "Rank": 655,
      "Benchmark": 53.2,
      "Samples": 1941,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4242/AMD-Phenomtm-II-X4-810-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3537U",
      "Rank": 656,
      "Benchmark": 53.2,
      "Samples": 14137,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/504/IntelR-CoreTM-i7-3537U-CPU---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646G1830",
      "Brand": "Intel",
      "Model": "Celeron G1830",
      "Rank": 657,
      "Benchmark": 53.1,
      "Samples": 166,
      "URL": "https://cpu.userbenchmark.com/Intel-Celeron-G1830/Rating/2848"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G3250",
      "Rank": 658,
      "Benchmark": 53.1,
      "Samples": 9141,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/18077/IntelR-PentiumR-CPU-G3250---320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-6500 APU",
      "Rank": 659,
      "Benchmark": 53.1,
      "Samples": 5908,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5272/AMD-A8-6500-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646G3240",
      "Brand": "Intel",
      "Model": "Pentium G3240",
      "Rank": 660,
      "Benchmark": 53,
      "Samples": 8328,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G3240/Rating/2820"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-6650U",
      "Rank": 661,
      "Benchmark": 53,
      "Samples": 4713,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/40238/IntelR-CoreTM-i7-6650U-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G870",
      "Rank": 662,
      "Benchmark": 52.9,
      "Samples": 1357,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9348/IntelR-PentiumR-CPU-G870---310GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-6300U",
      "Rank": 663,
      "Benchmark": 52.8,
      "Samples": 41530,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/27864/IntelR-CoreTM-i5-6300U-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 7 2700U",
      "Rank": 664,
      "Benchmark": 52.8,
      "Samples": 6096,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/432558/AMD-Ryzen-7-2700U-with-Radeon-Vega-Mobile-Gfx"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 5 2500U",
      "Rank": 665,
      "Benchmark": 52.8,
      "Samples": 50159,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/378273/AMD-Ryzen-5-2500U-with-Radeon-Vega-Mobile-Gfx"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 3 2300U",
      "Rank": 666,
      "Benchmark": 52.8,
      "Samples": 2768,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/511816/AMD-Ryzen-3-2300U-with-Radeon-Vega-Mobile-Gfx"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-6200U",
      "Rank": 667,
      "Benchmark": 52.8,
      "Samples": 124101,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/36796/IntelR-CoreTM-i5-6200U-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646G1850",
      "Brand": "Intel",
      "Model": "Celeron G1850",
      "Rank": 668,
      "Benchmark": 52.8,
      "Samples": 314,
      "URL": "https://cpu.userbenchmark.com/Intel-Celeron-G1850/Rating/2850"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646G3220",
      "Brand": "Intel",
      "Model": "Pentium G3220",
      "Rank": 669,
      "Benchmark": 52.7,
      "Samples": 16389,
      "URL": "https://cpu.userbenchmark.com/Intel-Pentium-G3220/Rating/1967"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2520M",
      "Rank": 670,
      "Benchmark": 52.7,
      "Samples": 40639,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/29/IntelR-CoreTM-i5-2520M-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 Q 820",
      "Rank": 671,
      "Benchmark": 52.7,
      "Samples": 1855,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3571/IntelR-CoreTM-i7-CPU-------Q-820----173GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-4000M",
      "Rank": 672,
      "Benchmark": 52.7,
      "Samples": 6171,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6476/IntelR-CoreTM-i3-4000M-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G860",
      "Rank": 673,
      "Benchmark": 52.7,
      "Samples": 3010,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2650/IntelR-PentiumR-CPU-G860---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD789KXDJCHBX",
      "Brand": "AMD",
      "Model": "A10-7890K APU (2014 D.Ka)",
      "Rank": 674,
      "Benchmark": 52.6,
      "Samples": 5859,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/118648/AMD-A10-7890K-Radeon-R7-12-Compute-Cores-4C-8G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad Q9550",
      "Rank": 675,
      "Benchmark": 52.6,
      "Samples": 30401,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/334/IntelR-CoreTM2-Quad-CPU----Q9550----283GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3517U",
      "Rank": 676,
      "Benchmark": 52.6,
      "Samples": 7534,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/663/IntelR-CoreTM-i7-3517U-CPU---190GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2450M",
      "Rank": 677,
      "Benchmark": 52.5,
      "Samples": 38941,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-2450M/Rating/2815"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-3120M",
      "Rank": 678,
      "Benchmark": 52.4,
      "Samples": 12760,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/923/IntelR-CoreTM-i3-3120M-CPU---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G840",
      "Rank": 679,
      "Benchmark": 52.4,
      "Samples": 2249,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3067/IntelR-PentiumR-CPU-G840---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G850",
      "Rank": 680,
      "Benchmark": 52.3,
      "Samples": 2306,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2522/IntelR-PentiumR-CPU-G850---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 Q 720",
      "Rank": 681,
      "Benchmark": 52.3,
      "Samples": 14611,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/140/IntelR-CoreTM-i7-CPU-------Q-720----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4310U",
      "Rank": 682,
      "Benchmark": 52.3,
      "Samples": 11289,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12941/IntelR-CoreTM-i5-4310U-CPU---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad Q9450",
      "Rank": 683,
      "Benchmark": 52.2,
      "Samples": 5219,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/765/IntelR-CoreTM2-Quad--CPU---Q9450----266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-7100U",
      "Rank": 684,
      "Benchmark": 52.2,
      "Samples": 31539,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/176913/IntelR-CoreTM-i3-7100U-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5504",
      "Rank": 685,
      "Benchmark": 52.2,
      "Samples": 427,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6261/IntelR-XeonR-CPU-----------E5504----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-7670K APU (2014 D.Ka)",
      "Rank": 686,
      "Benchmark": 52.1,
      "Samples": 1545,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/37178/AMD-A8-7670K-Radeon-R7-10-Compute-Cores-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4650U",
      "Rank": 687,
      "Benchmark": 52.1,
      "Samples": 3731,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6364/IntelR-CoreTM-i7-4650U-CPU---170GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4300U",
      "Rank": 688,
      "Benchmark": 52,
      "Samples": 30998,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4996/IntelR-CoreTM-i5-4300U-CPU---190GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5440",
      "Rank": 689,
      "Benchmark": 52,
      "Samples": 2706,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/18165/IntelR-XeonR-CPU-----------E5440----283GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-6100U",
      "Rank": 690,
      "Benchmark": 51.9,
      "Samples": 23171,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/37381/IntelR-CoreTM-i3-6100U-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G2030",
      "Rank": 691,
      "Benchmark": 51.9,
      "Samples": 15167,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3273/IntelR-PentiumR-CPU-G2030---300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD5700OKHJBOX",
      "Brand": "AMD",
      "Model": "A10-5700 APU (2012 D.Tr)",
      "Rank": 692,
      "Benchmark": 51.9,
      "Samples": 5432,
      "URL": "https://cpu.userbenchmark.com/AMD-A10-5700-APU-2012-DTr/Rating/2939"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X4 641",
      "Rank": 693,
      "Benchmark": 51.8,
      "Samples": 930,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1698/AMD-Athlontm-II-X4-641-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "AD787KXDJCBOX",
      "Brand": "AMD",
      "Model": "A10-7870K APU (2014 D.Ka)",
      "Rank": 694,
      "Benchmark": 51.8,
      "Samples": 9688,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/29728/AMD-A10-7870K-Radeon-R7-12-Compute-Cores-4C-8G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G645",
      "Rank": 695,
      "Benchmark": 51.7,
      "Samples": 4598,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3264/IntelR-PentiumR-CPU-G645---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X4 645",
      "Rank": 696,
      "Benchmark": 51.7,
      "Samples": 4544,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2408/AMD-Athlontm-II-X4-645-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X4 740K",
      "Rank": 697,
      "Benchmark": 51.6,
      "Samples": 3811,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4559/AMD-Athlontm-X4-740-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 680",
      "Rank": 698,
      "Benchmark": 51.6,
      "Samples": 672,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3693/IntelR-CoreTM-i5-CPU---------680----360GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2415M",
      "Rank": 699,
      "Benchmark": 51.5,
      "Samples": 553,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4223/IntelR-CoreTM-i5-2415M-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2637M",
      "Rank": 700,
      "Benchmark": 51.5,
      "Samples": 530,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5436/IntelR-CoreTM-i7-2637M-CPU---170GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4250U",
      "Rank": 701,
      "Benchmark": 51.5,
      "Samples": 1482,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1787/IntelR-CoreTM-i5-4250U-CPU---130GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-2677M",
      "Rank": 702,
      "Benchmark": 51.5,
      "Samples": 622,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4939/IntelR-CoreTM-i7-2677M-CPU---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD785KXBJABOX",
      "Brand": "AMD",
      "Model": "A10-7850K APU (2014 D.Ka)",
      "Rank": 703,
      "Benchmark": 51.4,
      "Samples": 17018,
      "URL": "https://cpu.userbenchmark.com/AMD-A10-7850K-APU-2014-DKa/Rating/2937"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4210U",
      "Rank": 704,
      "Benchmark": 51.4,
      "Samples": 69381,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12662/IntelR-CoreTM-i5-4210U-CPU---170GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-3110M",
      "Rank": 705,
      "Benchmark": 51.3,
      "Samples": 29833,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/844/IntelR-CoreTM-i3-3110M-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2430M",
      "Rank": 706,
      "Benchmark": 51.3,
      "Samples": 32107,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/429/IntelR-CoreTM-i5-2430M-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80662G3900",
      "Brand": "Intel",
      "Model": "Celeron G3900",
      "Rank": 707,
      "Benchmark": 51.3,
      "Samples": 5345,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/86156/IntelR-CeleronR-CPU-G3900---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD880KXBJCSBX",
      "Brand": "AMD",
      "Model": "Athlon X4 880K",
      "Rank": 708,
      "Benchmark": 51.3,
      "Samples": 7911,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/121029/AMD-Athlontm-X4-880K-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "AD5500OKHJBOX",
      "Brand": "AMD",
      "Model": "A8-5500 APU",
      "Rank": 709,
      "Benchmark": 51.2,
      "Samples": 9093,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3432/AMD-A8-5500-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-4550U",
      "Rank": 710,
      "Benchmark": 51.2,
      "Samples": 273,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6199/IntelR-CoreTM-i7-4550U-CPU---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5430",
      "Rank": 711,
      "Benchmark": 51.2,
      "Samples": 2011,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/16038/IntelR-XeonR-CPU-----------E5430----266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3667U",
      "Rank": 712,
      "Benchmark": 51.2,
      "Samples": 2906,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2815/IntelR-CoreTM-i7-3667U-CPU---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G2020",
      "Rank": 713,
      "Benchmark": 51.1,
      "Samples": 12488,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3604/IntelR-PentiumR-CPU-G2020---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X4 840",
      "Rank": 714,
      "Benchmark": 51.1,
      "Samples": 5608,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3302/AMD-Phenomtm-II-X4-840-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "AD870KXBJCSBX",
      "Brand": "AMD",
      "Model": "Athlon II X4 870K",
      "Rank": 715,
      "Benchmark": 51.1,
      "Samples": 1536,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/83847/AMD-Athlontm-X4-870K-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-5300U",
      "Rank": 716,
      "Benchmark": 51,
      "Samples": 22527,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/16790/IntelR-CoreTM-i5-5300U-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2410M",
      "Rank": 717,
      "Benchmark": 51,
      "Samples": 38902,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-2410M/Rating/2769"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4200U",
      "Rank": 718,
      "Benchmark": 51,
      "Samples": 45657,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-4200U/Rating/2742"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad Q9505",
      "Rank": 719,
      "Benchmark": 51,
      "Samples": 1893,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3041/IntelR-CoreTM2-Quad-CPU----Q9505----283GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G2010",
      "Rank": 720,
      "Benchmark": 50.9,
      "Samples": 2333,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8691/IntelR-PentiumR-CPU-G2010---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5462",
      "Rank": 721,
      "Benchmark": 50.9,
      "Samples": 575,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/16556/IntelR-XeonR-CPU-----------E5462----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X3 720",
      "Rank": 722,
      "Benchmark": 50.9,
      "Samples": 2326,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/326/AMD-Phenomtm-II-X3-720-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-3870 APU",
      "Rank": 723,
      "Benchmark": 50.8,
      "Samples": 5073,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3870/AMD-A8-3870-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-5200U",
      "Rank": 724,
      "Benchmark": 50.8,
      "Samples": 97812,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/22169/IntelR-CoreTM-i5-5200U-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron G1620",
      "Rank": 725,
      "Benchmark": 50.8,
      "Samples": 2277,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6930/IntelR-CeleronR-CPU-G1620---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80677G3930",
      "Brand": "Intel",
      "Model": "Celeron G3930",
      "Rank": 726,
      "Benchmark": 50.8,
      "Samples": 6877,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/235058/IntelR-CeleronR-CPU-G3930---290GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD860KXBJASBX",
      "Brand": "AMD",
      "Model": "Athlon II X4 860K",
      "Rank": 727,
      "Benchmark": 50.8,
      "Samples": 19245,
      "URL": "https://cpu.userbenchmark.com/AMD-Athlon-II-X4-860K/Rating/3265"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646G1820",
      "Brand": "Intel",
      "Model": "Celeron G1820",
      "Rank": 728,
      "Benchmark": 50.7,
      "Samples": 3265,
      "URL": "https://cpu.userbenchmark.com/Intel-Celeron-G1820/Rating/1992"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3337U",
      "Rank": 729,
      "Benchmark": 50.7,
      "Samples": 27516,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/737/IntelR-CoreTM-i5-3337U-CPU---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80646G1840",
      "Brand": "Intel",
      "Model": "Celeron G1840",
      "Rank": 730,
      "Benchmark": 50.7,
      "Samples": 6007,
      "URL": "https://cpu.userbenchmark.com/Intel-Celeron-G1840/Rating/2849"
    },
    {
      "Type": "CPU",
      "Part Number": "FJ8067702739932",
      "Brand": "Intel",
      "Model": "Pentium 4415U",
      "Rank": 731,
      "Benchmark": 50.7,
      "Samples": 4833,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/267685/IntelR-PentiumR-CPU-4415U---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-3850 APU",
      "Rank": 732,
      "Benchmark": 50.6,
      "Samples": 2718,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4311/AMD-A8-3850-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Extreme Q6850",
      "Rank": 733,
      "Benchmark": 50.6,
      "Samples": 969,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7118/IntelR-CoreTM2-Extreme-CPU-Q6850----300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 K 655",
      "Rank": 734,
      "Benchmark": 50.6,
      "Samples": 336,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9077/IntelR-CoreTM-i5-CPU-------K-655----320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad Q9500",
      "Rank": 735,
      "Benchmark": 50.6,
      "Samples": 3699,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1778/IntelR-CoreTM2-Quad-CPU----Q9500----283GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon W3505",
      "Rank": 736,
      "Benchmark": 50.5,
      "Samples": 614,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12714/IntelR-XeonR-CPU-----------W3505----253GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 5405U",
      "Rank": 737,
      "Benchmark": 50.5,
      "Samples": 667,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/767922/IntelR-PentiumR-CPU-5405U---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X4 631",
      "Rank": 738,
      "Benchmark": 50.4,
      "Samples": 1174,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2944/AMD-Athlontm-II-X4-631-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-3670 APU",
      "Rank": 739,
      "Benchmark": 50.3,
      "Samples": 2132,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4657/AMD-A6-3670-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "AD9800AUABBOX",
      "Brand": "AMD",
      "Model": "A12-9800 APU (2016 M.BR)",
      "Rank": 740,
      "Benchmark": 50.3,
      "Samples": 3135,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/283761/AMD-A12-9800-RADEON-R7-12-COMPUTE-CORES-4C-8G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-5250U",
      "Rank": 741,
      "Benchmark": 50.3,
      "Samples": 3867,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/24945/IntelR-CoreTM-i5-5250U-CPU---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-7020U",
      "Rank": 742,
      "Benchmark": 50.3,
      "Samples": 19702,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/576199/IntelR-CoreTM-i3-7020U-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-2603 0",
      "Rank": 743,
      "Benchmark": 50.2,
      "Samples": 197,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4629/IntelR-XeonR-CPU-E5-2603-0---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2370M",
      "Rank": 744,
      "Benchmark": 50.2,
      "Samples": 8115,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1959/IntelR-CoreTM-i3-2370M-CPU---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3437U",
      "Rank": 745,
      "Benchmark": 50.2,
      "Samples": 3027,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4219/IntelR-CoreTM-i5-3437U-CPU---190GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom 9950",
      "Rank": 746,
      "Benchmark": 50.1,
      "Samples": 1902,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2758/AMD-Phenomtm-9950-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon L5420",
      "Rank": 747,
      "Benchmark": 50.1,
      "Samples": 1067,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10433/IntelR-XeonR-CPU-----------L5420----250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X4 635",
      "Rank": 748,
      "Benchmark": 50.1,
      "Samples": 4349,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3369/AMD-Athlontm-II-X4-635-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E7- 4870",
      "Rank": 749,
      "Benchmark": 50.1,
      "Samples": 27,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8256/IntelR-XeonR-CPU-E7--4870----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-7500 APU (2014 M.Ka)",
      "Rank": 750,
      "Benchmark": 50.1,
      "Samples": 233,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/60388/AMD-A8-7500-Radeon-R7-10-Compute-Cores-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3317U",
      "Rank": 751,
      "Benchmark": 50.1,
      "Samples": 22921,
      "URL": "https://cpu.userbenchmark.com/Intel-Core-i5-3317U/Rating/2744"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X2 565",
      "Rank": 752,
      "Benchmark": 50,
      "Samples": 312,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2173/AMD-Phenomtm-II-X2-565-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X4 640",
      "Rank": 753,
      "Benchmark": 50,
      "Samples": 15902,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/225/AMD-Athlontm-II-X4-640-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X3 460",
      "Rank": 754,
      "Benchmark": 49.9,
      "Samples": 970,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6695/AMD-Athlontm-II-X3-460-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 661",
      "Rank": 755,
      "Benchmark": 49.9,
      "Samples": 1988,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/548/IntelR-CoreTM-i5-CPU---------661----333GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD765KXBJABOX",
      "Brand": "AMD",
      "Model": "A8-7650K APU (2014 D.Ka)",
      "Rank": 756,
      "Benchmark": 49.9,
      "Samples": 9523,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/27184/AMD-A8-7650K-Radeon-R7-10-Compute-Cores-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 3550M",
      "Rank": 757,
      "Benchmark": 49.9,
      "Samples": 544,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9225/IntelR-PentiumR-CPU-3550M---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 4417U",
      "Rank": 758,
      "Benchmark": 49.8,
      "Samples": 1866,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/747524/IntelR-PentiumR-CPU-4417U---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-7700K APU (2014 D.Ka)",
      "Rank": 759,
      "Benchmark": 49.7,
      "Samples": 9546,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9888/AMD-A10-7700K-APU-with-RadeonTM-R7-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "AD845XACKASBX",
      "Brand": "AMD",
      "Model": "Athlon X4 845",
      "Rank": 760,
      "Benchmark": 49.7,
      "Samples": 5726,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/84491/AMD-Athlontm-X4-845-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2557M",
      "Rank": 761,
      "Benchmark": 49.7,
      "Samples": 565,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5422/IntelR-CoreTM-i5-2557M-CPU---170GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2348M",
      "Rank": 762,
      "Benchmark": 49.7,
      "Samples": 4193,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2278/IntelR-CoreTM-i3-2348M-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-5010U",
      "Rank": 763,
      "Benchmark": 49.6,
      "Samples": 8635,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/23565/IntelR-CoreTM-i3-5010U-CPU---210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3427U",
      "Rank": 764,
      "Benchmark": 49.6,
      "Samples": 3509,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/909/IntelR-CoreTM-i5-3427U-CPU---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-3689Y",
      "Rank": 765,
      "Benchmark": 49.6,
      "Samples": 39,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4592/IntelR-CoreTM-i7-3689Y-CPU---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom 9850",
      "Rank": 766,
      "Benchmark": 49.6,
      "Samples": 1962,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2967/AMD-Phenomtm-9850-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X3 710",
      "Rank": 767,
      "Benchmark": 49.6,
      "Samples": 814,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2275/AMD-Phenomtm-II-X3-710-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon W3503",
      "Rank": 768,
      "Benchmark": 49.5,
      "Samples": 1421,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3723/IntelR-XeonR-CPU-----------W3503----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-8500Y",
      "Rank": 769,
      "Benchmark": 49.2,
      "Samples": 463,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/590466/IntelR-CoreTM-i7-8500Y-CPU---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Extreme Q9300",
      "Rank": 770,
      "Benchmark": 49.2,
      "Samples": 587,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4063/IntelR-CoreTM2-Extreme-CPU-Q9300----253GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad Q9400",
      "Rank": 771,
      "Benchmark": 49.2,
      "Samples": 20172,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/244/IntelR-CoreTM2-Quad-CPU----Q9400----266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD786KYBJCSBX",
      "Brand": "AMD",
      "Model": "A10-7860K APU (2014 D.Ka)",
      "Rank": 772,
      "Benchmark": 49.2,
      "Samples": 9293,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/83781/AMD-A10-7860K-Radeon-R7-12-Compute-Cores-4C-8G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G640",
      "Rank": 773,
      "Benchmark": 49.1,
      "Samples": 2234,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/618/IntelR-PentiumR-CPU-G640---280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X4 630",
      "Rank": 774,
      "Benchmark": 49,
      "Samples": 6729,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/471/AMD-Athlontm-II-X4-630-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2350M",
      "Rank": 775,
      "Benchmark": 49,
      "Samples": 20192,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/934/IntelR-CoreTM-i3-2350M-CPU---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X3 455",
      "Rank": 776,
      "Benchmark": 48.9,
      "Samples": 3010,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1884/AMD-Athlontm-II-X3-455-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2330M",
      "Rank": 777,
      "Benchmark": 48.9,
      "Samples": 15971,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1853/IntelR-CoreTM-i3-2330M-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron G1610",
      "Rank": 778,
      "Benchmark": 48.9,
      "Samples": 4387,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3109/IntelR-CeleronR-CPU-G1610---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FX-770K (2014 D.Ka)",
      "Rank": 779,
      "Benchmark": 48.8,
      "Samples": 1184,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/18603/AMD-FXtm-770K-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X2 560",
      "Rank": 780,
      "Benchmark": 48.8,
      "Samples": 1598,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5408/AMD-Phenomtm-II-X2-560-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 660",
      "Rank": 781,
      "Benchmark": 48.8,
      "Samples": 4834,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2846/IntelR-CoreTM-i5-CPU---------660----333GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core m3-8100Y",
      "Rank": 782,
      "Benchmark": 48.8,
      "Samples": 685,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/648336/IntelR-CoreTM-m3-8100Y-CPU---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2328M",
      "Rank": 783,
      "Benchmark": 48.8,
      "Samples": 7124,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2488/IntelR-CoreTM-i3-2328M-CPU---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FJ8066201930905",
      "Brand": "Intel",
      "Model": "Pentium 4405U",
      "Rank": 784,
      "Benchmark": 48.8,
      "Samples": 2839,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/54474/IntelR-PentiumR-CPU-4405U---210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-5005U",
      "Rank": 785,
      "Benchmark": 48.7,
      "Samples": 43866,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/24957/IntelR-CoreTM-i3-5005U-CPU---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD9700AHABBOX",
      "Brand": "AMD",
      "Model": "A10-9700E APU (2016 D.BR)",
      "Rank": 786,
      "Benchmark": 48.6,
      "Samples": 246,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/348934/AMD-A10-9700E-RADEON-R7-10-COMPUTE-CORES-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-3650 APU",
      "Rank": 787,
      "Benchmark": 48.6,
      "Samples": 2604,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1954/AMD-A6-3650-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron G550",
      "Rank": 788,
      "Benchmark": 48.5,
      "Samples": 1641,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5014/IntelR-CeleronR-CPU-G550---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-7600 APU (2014 D.Ka)",
      "Rank": 789,
      "Benchmark": 48.4,
      "Samples": 22666,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/14050/AMD-A8-7600-Radeon-R7-10-Compute-Cores-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G630",
      "Rank": 790,
      "Benchmark": 48.4,
      "Samples": 9678,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3112/IntelR-PentiumR-CPU-G630---270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 2020M",
      "Rank": 791,
      "Benchmark": 48.4,
      "Samples": 8201,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1723/IntelR-PentiumR-CPU-2020M---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X2 555",
      "Rank": 792,
      "Benchmark": 48.4,
      "Samples": 3493,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2917/AMD-Phenomtm-II-X2-555-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5420",
      "Rank": 793,
      "Benchmark": 48.4,
      "Samples": 1256,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11278/IntelR-XeonR-CPU-----------E5420----250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD9700AGABBOX",
      "Brand": "AMD",
      "Model": "A10-9700 APU (2016 M.BR)",
      "Rank": 794,
      "Benchmark": 48.3,
      "Samples": 7726,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/262171/AMD-A10-9700-RADEON-R7-10-COMPUTE-CORES-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad Q8400",
      "Rank": 795,
      "Benchmark": 48.2,
      "Samples": 15409,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1663/IntelR-CoreTM2-Quad-CPU----Q8400----266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-6006U",
      "Rank": 796,
      "Benchmark": 48.2,
      "Samples": 38354,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/214467/IntelR-CoreTM-i3-6006U-CPU---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G620",
      "Rank": 797,
      "Benchmark": 48.1,
      "Samples": 10933,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2636/IntelR-PentiumR-CPU-G620---260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-4030U",
      "Rank": 798,
      "Benchmark": 48.1,
      "Samples": 19205,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13661/IntelR-CoreTM-i3-4030U-CPU---190GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 650",
      "Rank": 799,
      "Benchmark": 48,
      "Samples": 39091,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/340/IntelR-CoreTM-i5-CPU---------650----320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-6700T APU (2013 D.Ri)",
      "Rank": 800,
      "Benchmark": 48,
      "Samples": 64,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5691/AMD-A10-6700T-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron G540",
      "Rank": 801,
      "Benchmark": 48,
      "Samples": 1419,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5981/IntelR-CeleronR-CPU-G540---250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X4 620",
      "Rank": 802,
      "Benchmark": 47.9,
      "Samples": 4917,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3430/AMD-Athlontm-II-X4-620-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad Q6700",
      "Rank": 803,
      "Benchmark": 47.9,
      "Samples": 5360,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3748/IntelR-CoreTM2-Quad-CPU----Q6700----266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3 550",
      "Rank": 804,
      "Benchmark": 47.9,
      "Samples": 15032,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/632/IntelR-CoreTM-i3-CPU---------550----320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-5015U",
      "Rank": 805,
      "Benchmark": 47.8,
      "Samples": 3191,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/32615/IntelR-CoreTM-i3-5015U-CPU---210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AM973PAEY44AB",
      "Brand": "AMD",
      "Model": "A12-9730P APU (2016 M.BR)",
      "Rank": 806,
      "Benchmark": 47.8,
      "Samples": 294,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/236011/AMD-A12-9730P-RADEON-R7-10-COMPUTE-CORES-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom 9750",
      "Rank": 807,
      "Benchmark": 47.7,
      "Samples": 1783,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2439/AMD-Phenomtm-9750-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad Q9300",
      "Rank": 808,
      "Benchmark": 47.6,
      "Samples": 9412,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/832/IntelR-CoreTM2-Quad--CPU---Q9300----250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5-2660 v2",
      "Rank": 809,
      "Benchmark": 47.6,
      "Samples": 22,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13068/IntelR-XeonR-CPU-E5-2660-v2---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core m3-7Y32",
      "Rank": 810,
      "Benchmark": 47.6,
      "Samples": 41,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/513740/IntelR-CoreTM-m3-7Y32-CPU---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X2 550",
      "Rank": 811,
      "Benchmark": 47.5,
      "Samples": 3285,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2418/AMD-Phenomtm-II-X2-550-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2310M",
      "Rank": 812,
      "Benchmark": 47.5,
      "Samples": 20458,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/159/IntelR-CoreTM-i3-2310M-CPU---210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X2 265",
      "Rank": 813,
      "Benchmark": 47.5,
      "Samples": 570,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/986/AMD-Athlontm-II-X2-265-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-7Y54",
      "Rank": 814,
      "Benchmark": 47.4,
      "Samples": 1214,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/193628/IntelR-CoreTM-i5-7Y54-CPU---120GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron G530",
      "Rank": 815,
      "Benchmark": 47.2,
      "Samples": 3223,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/229/IntelR-CeleronR-CPU-G530---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X3 450",
      "Rank": 816,
      "Benchmark": 47.2,
      "Samples": 3946,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/91/AMD-Athlontm-II-X3-450-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-3800 APU",
      "Rank": 817,
      "Benchmark": 47.1,
      "Samples": 1326,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7059/AMD-A8-3800-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-8210Y",
      "Rank": 818,
      "Benchmark": 47.1,
      "Samples": 286,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/651922/IntelR-CoreTM-i5-8210Y-CPU---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium B980",
      "Rank": 819,
      "Benchmark": 47,
      "Samples": 3369,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6036/IntelR-PentiumR-CPU-B980---240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3 540",
      "Rank": 820,
      "Benchmark": 46.9,
      "Samples": 20967,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2936/IntelR-CoreTM-i3-CPU---------540----307GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II X2 545",
      "Rank": 821,
      "Benchmark": 46.8,
      "Samples": 977,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8398/AMD-Phenomtm-II-X2-545-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X3 435",
      "Rank": 822,
      "Benchmark": 46.7,
      "Samples": 1671,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2024/AMD-Athlontm-II-X3-435-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X3 440",
      "Rank": 823,
      "Benchmark": 46.7,
      "Samples": 1750,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5315/AMD-Athlontm-II-X3-440-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X3 445",
      "Rank": 824,
      "Benchmark": 46.6,
      "Samples": 2475,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1775/AMD-Athlontm-II-X3-445-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon X3220",
      "Rank": 825,
      "Benchmark": 46.6,
      "Samples": 686,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4801/IntelR-XeonR-CPU-----------X3220----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad Q8300",
      "Rank": 826,
      "Benchmark": 46.6,
      "Samples": 15576,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1930/IntelR-CoreTM2-Quad-CPU----Q8300----250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AM963PAEY44AB",
      "Brand": "AMD",
      "Model": "A10-9630P APU (2016 M.BR)",
      "Rank": 827,
      "Benchmark": 46.6,
      "Samples": 476,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/192670/AMD-A10-9630P-RADEON-R5-10-COMPUTE-CORES-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-3227U",
      "Rank": 828,
      "Benchmark": 46.6,
      "Samples": 6064,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5042/IntelR-CoreTM-i3-3227U-CPU---190GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium B970",
      "Rank": 829,
      "Benchmark": 46.5,
      "Samples": 2681,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/559/IntelR-PentiumR-CPU-B970---230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core m3-7Y30",
      "Rank": 830,
      "Benchmark": 46.4,
      "Samples": 3545,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/196956/IntelR-CoreTM-m3-7Y30-CPU---100GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3 530",
      "Rank": 831,
      "Benchmark": 46.4,
      "Samples": 15009,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/132/IntelR-CoreTM-i3-CPU---------530----293GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-4010U",
      "Rank": 832,
      "Benchmark": 46.4,
      "Samples": 10490,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4821/IntelR-CoreTM-i3-4010U-CPU---170GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-7800 APU (2014 D.Ka)",
      "Rank": 833,
      "Benchmark": 46.3,
      "Samples": 13321,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13491/AMD-A10-7800-Radeon-R7-12-Compute-Cores-4C-8G"
    },
    {
      "Type": "CPU",
      "Part Number": "AD9600AGABBOX",
      "Brand": "AMD",
      "Model": "A8-9600 APU (2016 D.BR)",
      "Rank": 834,
      "Benchmark": 46.2,
      "Samples": 9561,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/339630/AMD-A8-9600-RADEON-R7-10-COMPUTE-CORES-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80562Q6600",
      "Brand": "Intel",
      "Model": "Core2 Quad Q6600",
      "Rank": 835,
      "Benchmark": 46.2,
      "Samples": 54151,
      "URL": "https://cpu.userbenchmark.com/Intel-Core2-Quad-Q6600/Rating/1980"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 6400+",
      "Rank": 836,
      "Benchmark": 46.1,
      "Samples": 809,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5653/AMD-Athlontm-64-X2-Dual-Core-Processor-6400-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 3 2200U",
      "Rank": 837,
      "Benchmark": 46.1,
      "Samples": 13287,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/480281/AMD-Ryzen-3-2200U-with-Radeon-Vega-Mobile-Gfx"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core M-5Y10",
      "Rank": 838,
      "Benchmark": 46.1,
      "Samples": 427,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/17561/IntelR-Processor-5Y10-CPU---080GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom 9650",
      "Rank": 839,
      "Benchmark": 46,
      "Samples": 3046,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5238/AMD-Phenomtm-9650-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-3217U",
      "Rank": 840,
      "Benchmark": 46,
      "Samples": 24242,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1643/IntelR-CoreTM-i3-3217U-CPU---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "YM300UC4T2OFG",
      "Brand": "AMD",
      "Model": "Athlon 300U",
      "Rank": 841,
      "Benchmark": 45.9,
      "Samples": 1090,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/852003/AMD-Athlon-300U-with-Radeon-Vega-Mobile-Gfx"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2467M",
      "Rank": 842,
      "Benchmark": 45.9,
      "Samples": 3471,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/854/IntelR-CoreTM-i5-2467M-CPU---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FM983PAEY44AB",
      "Brand": "AMD",
      "Model": "FX-9830P APU (2016 M.BR)",
      "Rank": 843,
      "Benchmark": 45.8,
      "Samples": 3440,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/215072/AMD-FX-9830P-RADEON-R7-12-COMPUTE-CORES-4C-8G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-5757M APU",
      "Rank": 844,
      "Benchmark": 45.8,
      "Samples": 1131,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7160/AMD-A10-5757M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-6320 APU",
      "Rank": 845,
      "Benchmark": 45.6,
      "Samples": 496,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12932/AMD-A4-6320-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad",
      "Rank": 846,
      "Benchmark": 45.6,
      "Samples": 4726,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/374/IntelR-CoreTM2-Quad-CPU-------------240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-5750M APU",
      "Rank": 847,
      "Benchmark": 45.6,
      "Samples": 7828,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3779/AMD-A10-5750M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E8600",
      "Rank": 848,
      "Benchmark": 45.5,
      "Samples": 5137,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/124/IntelR-CoreTM2-Duo-CPU-----E8600----333GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core M-5Y70",
      "Rank": 849,
      "Benchmark": 45.4,
      "Samples": 657,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/16573/IntelR-Processor-5Y70-CPU---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad Q8200",
      "Rank": 850,
      "Benchmark": 45.4,
      "Samples": 16707,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3754/IntelR-CoreTM2-Quad--CPU---Q8200----233GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom 9550",
      "Rank": 851,
      "Benchmark": 45.3,
      "Samples": 2566,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2319/AMD-Phenomtm-9550-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium B960",
      "Rank": 852,
      "Benchmark": 45.2,
      "Samples": 10374,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1038/IntelR-PentiumR-CPU-B960---220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Ryzen 3 3200U",
      "Rank": 853,
      "Benchmark": 45.2,
      "Samples": 14680,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/771805/AMD-Ryzen-3-3200U-with-Radeon-Vega-Mobile-Gfx"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4300Y",
      "Rank": 854,
      "Benchmark": 45.2,
      "Samples": 692,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8659/IntelR-CoreTM-i5-4300Y-CPU---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-4005U",
      "Rank": 855,
      "Benchmark": 45.2,
      "Samples": 30739,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7028/IntelR-CoreTM-i3-4005U-CPU---170GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 1005M",
      "Rank": 856,
      "Benchmark": 45.1,
      "Samples": 2840,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5234/IntelR-CeleronR-CPU-1005M---190GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 2127U",
      "Rank": 857,
      "Benchmark": 45.1,
      "Samples": 1201,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3354/IntelR-PentiumR-CPU-2127U---190GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4210Y",
      "Rank": 858,
      "Benchmark": 45,
      "Samples": 521,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6358/IntelR-CoreTM-i5-4210Y-CPU---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X2 260",
      "Rank": 859,
      "Benchmark": 44.9,
      "Samples": 4338,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4651/AMD-Athlontm-II-X2-260-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X3 425",
      "Rank": 860,
      "Benchmark": 44.9,
      "Samples": 1196,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2178/AMD-Athlontm-II-X3-425-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X2 270",
      "Rank": 861,
      "Benchmark": 44.8,
      "Samples": 5562,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1939/AMD-Athlontm-II-X2-270-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-4600M APU",
      "Rank": 862,
      "Benchmark": 44.8,
      "Samples": 4879,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1051/AMD-A10-4600M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 3805U",
      "Rank": 863,
      "Benchmark": 44.8,
      "Samples": 782,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/34360/IntelR-PentiumR-3805U---190GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-3339Y",
      "Rank": 864,
      "Benchmark": 44.8,
      "Samples": 223,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3454/IntelR-CoreTM-i5-3339Y-CPU---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-8200Y",
      "Rank": 865,
      "Benchmark": 44.7,
      "Samples": 134,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/623840/IntelR-CoreTM-i5-8200Y-CPU---130GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core M-5Y71",
      "Rank": 866,
      "Benchmark": 44.7,
      "Samples": 2230,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/24191/IntelR-CoreTM-M-5Y71-CPU---120GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X2 B24",
      "Rank": 867,
      "Benchmark": 44.6,
      "Samples": 1719,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6359/AMD-Athlontm-II-X2-B24-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X2 255",
      "Rank": 868,
      "Benchmark": 44.6,
      "Samples": 3420,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6225/AMD-Athlontm-II-X2-255-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core M-5Y10a",
      "Rank": 869,
      "Benchmark": 44.6,
      "Samples": 8,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/26061/IntelR-Processor-5Y10a-CPU---080GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium B950",
      "Rank": 870,
      "Benchmark": 44.5,
      "Samples": 5811,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1968/IntelR-PentiumR-CPU-B950---210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-3620 APU",
      "Rank": 871,
      "Benchmark": 44.4,
      "Samples": 2407,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8057/AMD-A6-3620-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core m3-6Y30",
      "Rank": 872,
      "Benchmark": 44.4,
      "Samples": 4666,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/38171/IntelR-CoreTM-m3-6Y30-CPU---090GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core M-5Y10c",
      "Rank": 873,
      "Benchmark": 44.4,
      "Samples": 2595,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/23759/IntelR-CoreTM-M-5Y10c-CPU---080GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-2537M",
      "Rank": 874,
      "Benchmark": 44.3,
      "Samples": 421,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3186/IntelR-CoreTM-i5-2537M-CPU---140GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 1037U",
      "Rank": 875,
      "Benchmark": 44.3,
      "Samples": 1954,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3597/IntelR-CeleronR-CPU-1037U---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5405",
      "Rank": 876,
      "Benchmark": 44.3,
      "Samples": 623,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/25434/IntelR-XeonR-CPU-----------E5405----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7-7Y75",
      "Rank": 877,
      "Benchmark": 44.3,
      "Samples": 2126,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/211988/IntelR-CoreTM-i7-7Y75-CPU---130GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core m5-6Y54",
      "Rank": 878,
      "Benchmark": 44.3,
      "Samples": 1347,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/40602/IntelR-CoreTM-m5-6Y54-CPU---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-5550M APU",
      "Rank": 879,
      "Benchmark": 44.3,
      "Samples": 2827,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5035/AMD-A8-5550M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium B940",
      "Rank": 880,
      "Benchmark": 44.3,
      "Samples": 3272,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2724/IntelR-PentiumR-CPU-B940---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E3110",
      "Rank": 881,
      "Benchmark": 44.2,
      "Samples": 307,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4226/IntelR-XeonR-CPU-----------E3110----300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core m5-6Y57",
      "Rank": 882,
      "Benchmark": 44.2,
      "Samples": 1278,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/42768/IntelR-CoreTM-m5-6Y57-CPU---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5345",
      "Rank": 883,
      "Benchmark": 44.1,
      "Samples": 257,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10151/IntelR-XeonR-CPU-----------E5345----233GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E8500",
      "Rank": 884,
      "Benchmark": 44.1,
      "Samples": 18008,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13/IntelR-CoreTM2-Duo-CPU-----E8500----316GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 2117U",
      "Rank": 885,
      "Benchmark": 44,
      "Samples": 3953,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6356/IntelR-PentiumR-CPU-2117U---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Quad Q9000",
      "Rank": 886,
      "Benchmark": 44,
      "Samples": 779,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5898/IntelR-CoreTM2-Quad--CPU---Q9000----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD9800AHABBOX",
      "Brand": "AMD",
      "Model": "A12-9800E APU (2016 M.BR)",
      "Rank": 887,
      "Benchmark": 44,
      "Samples": 153,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/345210/AMD-A12-9800E-RADEON-R7-12-COMPUTE-CORES-4C-8G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 1000M",
      "Rank": 888,
      "Benchmark": 43.8,
      "Samples": 2890,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5059/IntelR-CeleronR-CPU-1000M---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 M 640",
      "Rank": 889,
      "Benchmark": 43.7,
      "Samples": 4472,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4397/IntelR-CoreTM-i7-CPU-------M-640----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2375M",
      "Rank": 890,
      "Benchmark": 43.7,
      "Samples": 1277,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5058/IntelR-CoreTM-i3-2375M-CPU---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core M-5Y51",
      "Rank": 891,
      "Benchmark": 43.6,
      "Samples": 408,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/24458/IntelR-CoreTM-M-5Y51-CPU---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-6300 APU",
      "Rank": 892,
      "Benchmark": 43.6,
      "Samples": 10287,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10639/AMD-A4-6300-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II N660",
      "Rank": 893,
      "Benchmark": 43.5,
      "Samples": 339,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9034/AMD-Phenomtm-II-N660-Dual-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E8400",
      "Rank": 894,
      "Benchmark": 43.5,
      "Samples": 62163,
      "URL": "https://cpu.userbenchmark.com/Intel-Core2-Duo-E8400/Rating/2720"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core m7-6Y75",
      "Rank": 895,
      "Benchmark": 43.3,
      "Samples": 1574,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/55308/IntelR-CoreTM-m7-6Y75-CPU---120GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom X3 8650",
      "Rank": 896,
      "Benchmark": 43.3,
      "Samples": 1311,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4548/AMD-Phenomtm-8650-Triple-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II N950",
      "Rank": 897,
      "Benchmark": 43.3,
      "Samples": 231,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/213/AMD-Phenomtm-II-N950-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 M 580",
      "Rank": 898,
      "Benchmark": 43.2,
      "Samples": 1197,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6113/IntelR-CoreTM-i5-CPU-------M-580----267GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-3530MX APU",
      "Rank": 899,
      "Benchmark": 43.2,
      "Samples": 391,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1796/AMD-A8-3530MX-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron B830",
      "Rank": 900,
      "Benchmark": 43.1,
      "Samples": 2903,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8441/IntelR-CeleronR-CPU-B830---180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Extreme X9100",
      "Rank": 901,
      "Benchmark": 43.1,
      "Samples": 504,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6202/IntelR-CoreTM2-Extreme-CPU-X9100----306GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-5400K APU",
      "Rank": 902,
      "Benchmark": 43.1,
      "Samples": 6819,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4113/AMD-A6-5400K-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-6400K APU",
      "Rank": 903,
      "Benchmark": 42.9,
      "Samples": 11138,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3048/AMD-A6-6400K-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E8300",
      "Rank": 904,
      "Benchmark": 42.9,
      "Samples": 1293,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1068/IntelR-CoreTM2-Duo-CPU-----E8300----283GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron B820",
      "Rank": 905,
      "Benchmark": 42.9,
      "Samples": 2874,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7064/IntelR-CeleronR-CPU-B820---170GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-4012Y",
      "Rank": 906,
      "Benchmark": 42.8,
      "Samples": 465,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12259/IntelR-CoreTM-i3-4012Y-CPU---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X2 245",
      "Rank": 907,
      "Benchmark": 42.8,
      "Samples": 5404,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2018/AMD-Athlontm-II-X2-245-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-3510MX APU",
      "Rank": 908,
      "Benchmark": 42.8,
      "Samples": 451,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5873/AMD-A8-3510MX-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5-4202Y",
      "Rank": 909,
      "Benchmark": 42.8,
      "Samples": 572,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6438/IntelR-CoreTM-i5-4202Y-CPU---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2367M",
      "Rank": 910,
      "Benchmark": 42.8,
      "Samples": 1829,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/526/IntelR-CoreTM-i3-2367M-CPU---140GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 M 620",
      "Rank": 911,
      "Benchmark": 42.8,
      "Samples": 7605,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/870/IntelR-CoreTM-i7-CPU-------M-620----267GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X2 250 (2013 D.Ri)",
      "Rank": 912,
      "Benchmark": 42.7,
      "Samples": 14552,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1064/AMD-Athlontm-II-X2-250-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium E6800",
      "Rank": 913,
      "Benchmark": 42.7,
      "Samples": 717,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4231/PentiumR-Dual-Core--CPU------E6800----333GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom 9150e",
      "Rank": 914,
      "Benchmark": 42.6,
      "Samples": 861,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7599/AMD-Phenomtm-9150e-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon X2 240",
      "Rank": 915,
      "Benchmark": 42.6,
      "Samples": 259,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8553/AMD-Athlontm-X2-240-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X2 240",
      "Rank": 916,
      "Benchmark": 42.5,
      "Samples": 6166,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4133/AMD-Athlontm-II-X2-240-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-4500M APU",
      "Rank": 917,
      "Benchmark": 42.5,
      "Samples": 8163,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/758/AMD-A8-4500M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-5300 APU",
      "Rank": 918,
      "Benchmark": 42.5,
      "Samples": 5563,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3554/AMD-A4-5300-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T9900",
      "Rank": 919,
      "Benchmark": 42.4,
      "Samples": 924,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/972/IntelR-CoreTM2-Duo-CPU-----T9900----306GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2365M",
      "Rank": 920,
      "Benchmark": 42.4,
      "Samples": 1662,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2519/IntelR-CoreTM-i3-2365M-CPU---140GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T9800",
      "Rank": 921,
      "Benchmark": 42.3,
      "Samples": 476,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7044/IntelR-CoreTM2-Duo-CPU-----T9800----293GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II N930",
      "Rank": 922,
      "Benchmark": 42.2,
      "Samples": 466,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6654/AMD-Phenomtm-II-N930-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5335",
      "Rank": 923,
      "Benchmark": 42.2,
      "Samples": 154,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/24658/IntelR-XeonR-CPU-----------E5335----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 1017U",
      "Rank": 924,
      "Benchmark": 42.1,
      "Samples": 1394,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3839/IntelR-CeleronR-CPU-1017U---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron B815",
      "Rank": 925,
      "Benchmark": 42.1,
      "Samples": 2342,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3210/IntelR-CeleronR-CPU-B815---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 7850",
      "Rank": 926,
      "Benchmark": 42.1,
      "Samples": 480,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2660/AMD-Athlontm-7850-Dual-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-3500 APU",
      "Rank": 927,
      "Benchmark": 42.1,
      "Samples": 2393,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4150/AMD-A6-3500-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II N850",
      "Rank": 928,
      "Benchmark": 42,
      "Samples": 276,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6473/AMD-Phenomtm-II-N850-Triple-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3 M 390",
      "Rank": 929,
      "Benchmark": 42,
      "Samples": 869,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8797/IntelR-CoreTM-i3-CPU-------M-390----267GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-7470K APU (2014 D.Ka)",
      "Rank": 930,
      "Benchmark": 41.9,
      "Samples": 189,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/129200/AMD-A6-7470K-Radeon-R5-6-Compute-Cores-2C-4G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 887",
      "Rank": 931,
      "Benchmark": 41.9,
      "Samples": 495,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/24/IntelR-CeleronR-CPU-887---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P9700",
      "Rank": 932,
      "Benchmark": 41.9,
      "Samples": 432,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3330/IntelR-CoreTM2-Duo-CPU-----P9700----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 M 560",
      "Rank": 933,
      "Benchmark": 41.9,
      "Samples": 10487,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/623/IntelR-CoreTM-i5-CPU-------M-560----267GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E8200",
      "Rank": 934,
      "Benchmark": 41.9,
      "Samples": 3768,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3200/IntelR-CoreTM2-Duo-CPU-----E8200----266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 6000+",
      "Rank": 935,
      "Benchmark": 41.9,
      "Samples": 4700,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5708/AMD-Athlontm-64-X2-Dual-Core-Processor-6000-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-4000 APU",
      "Rank": 936,
      "Benchmark": 41.8,
      "Samples": 4695,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8144/AMD-A4-4000-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FX-7600P APU (2014 M.Ka)",
      "Rank": 937,
      "Benchmark": 41.7,
      "Samples": 988,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/23736/AMD-FX-7600P-Radeon-R7-12-Compute-Cores-4C-8G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E7600",
      "Rank": 938,
      "Benchmark": 41.6,
      "Samples": 3423,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4924/IntelR-CoreTM2-Duo-CPU-----E7600----306GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 X6800",
      "Rank": 939,
      "Benchmark": 41.5,
      "Samples": 248,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8640/IntelR-CoreTM2-CPU---------X6800----293GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 M 540",
      "Rank": 940,
      "Benchmark": 41.5,
      "Samples": 7548,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/882/IntelR-CoreTM-i5-CPU-------M-540----253GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 M 480",
      "Rank": 941,
      "Benchmark": 41.5,
      "Samples": 12437,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3496/IntelR-CoreTM-i5-CPU-------M-480----267GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium E6700",
      "Rank": 942,
      "Benchmark": 41.5,
      "Samples": 3884,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2030/PentiumR-Dual-Core--CPU------E6700----320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom X3 8450",
      "Rank": 943,
      "Benchmark": 41.3,
      "Samples": 1595,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3789/AMD-Phenomtm-8450-Triple-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E7500",
      "Rank": 944,
      "Benchmark": 41.2,
      "Samples": 34188,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/987/IntelR-CoreTM2-Duo-CPU-----E7500----293GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E6850",
      "Rank": 945,
      "Benchmark": 41.2,
      "Samples": 3948,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/681/IntelR-CoreTM2-Duo-CPU-----E6850----300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 M 520",
      "Rank": 946,
      "Benchmark": 41.1,
      "Samples": 20770,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/812/IntelR-CoreTM-i5-CPU-------M-520----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 M 460",
      "Rank": 947,
      "Benchmark": 41.1,
      "Samples": 15338,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/126/IntelR-CoreTM-i5-CPU-------M-460----253GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FH8068003067415",
      "Brand": "Intel",
      "Model": "Pentium Silver J5005",
      "Rank": 948,
      "Benchmark": 41.1,
      "Samples": 1438,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/487063/IntelR-PentiumR-Silver-J5005-CPU---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T9500",
      "Rank": 949,
      "Benchmark": 41.1,
      "Samples": 846,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4254/IntelR-CoreTM2-Duo-CPU-----T9500----260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 L 640",
      "Rank": 950,
      "Benchmark": 41,
      "Samples": 1853,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4880/IntelR-CoreTM-i7-CPU-------L-640----213GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 877",
      "Rank": 951,
      "Benchmark": 40.9,
      "Samples": 561,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6414/IntelR-CeleronR-CPU-877---140GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium E6600",
      "Rank": 952,
      "Benchmark": 40.8,
      "Samples": 4208,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/988/PentiumR-Dual-Core--CPU------E6600----306GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 M 450",
      "Rank": 953,
      "Benchmark": 40.8,
      "Samples": 7111,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2006/IntelR-CoreTM-i5-CPU-------M-450----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 7750",
      "Rank": 954,
      "Benchmark": 40.8,
      "Samples": 2005,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3774/AMD-Athlontm-7750-Dual-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium G6950",
      "Rank": 955,
      "Benchmark": 40.8,
      "Samples": 955,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/638/IntelR-PentiumR-CPU--------G6950----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X2 220",
      "Rank": 956,
      "Benchmark": 40.7,
      "Samples": 4222,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5455/AMD-Athlontm-II-X2-220-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T9600",
      "Rank": 957,
      "Benchmark": 40.7,
      "Samples": 3576,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1795/IntelR-CoreTM2-Duo-CPU-----T9600----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 6700",
      "Rank": 958,
      "Benchmark": 40.6,
      "Samples": 2131,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3850/IntelR-CoreTM2-CPU----------6700----266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 3205U",
      "Rank": 959,
      "Benchmark": 40.6,
      "Samples": 718,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/28911/IntelR-CeleronR-3205U---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron B800",
      "Rank": 960,
      "Benchmark": 40.6,
      "Samples": 2015,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6775/IntelR-CeleronR-CPU-B800---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-3520M APU",
      "Rank": 961,
      "Benchmark": 40.6,
      "Samples": 1147,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6369/AMD-A8-3520M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "FM980PADY44AB",
      "Brand": "AMD",
      "Model": "FX-9800P APU (2016 M.BR)",
      "Rank": 962,
      "Benchmark": 40.5,
      "Samples": 2370,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/141405/AMD-FX-9800P-RADEON-R7-12-COMPUTE-CORES-4C-8G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 987",
      "Rank": 963,
      "Benchmark": 40.5,
      "Samples": 1281,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4947/IntelR-PentiumR-CPU-987---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II N830",
      "Rank": 964,
      "Benchmark": 40.5,
      "Samples": 598,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/690/AMD-Phenomtm-II-N830-Triple-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-3410MX APU",
      "Rank": 965,
      "Benchmark": 40.5,
      "Samples": 950,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5327/AMD-A6-3410MX-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P9500",
      "Rank": 966,
      "Benchmark": 40.4,
      "Samples": 274,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5851/IntelR-CoreTM2-Duo-CPU-----P9500----253GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 5600+",
      "Rank": 967,
      "Benchmark": 40.3,
      "Samples": 3255,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2183/AMD-Athlontm-64-X2-Dual-Core-Processor-5600-"
    },
    {
      "Type": "CPU",
      "Part Number": "HE8067702740049",
      "Brand": "Intel",
      "Model": "Pentium Gold 4425Y",
      "Rank": 968,
      "Benchmark": 40.3,
      "Samples": 208,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/786431/IntelR-PentiumR-CPU-4425Y---170GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A12-9720P APU (2016 M.BR)",
      "Rank": 969,
      "Benchmark": 40.2,
      "Samples": 13949,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/308530/AMD-A12-9720P-RADEON-R7-12-COMPUTE-CORES-4C-8G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3 M 380",
      "Rank": 970,
      "Benchmark": 40.2,
      "Samples": 16826,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/919/IntelR-CoreTM-i3-CPU-------M-380----253GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 M 430",
      "Rank": 971,
      "Benchmark": 40.2,
      "Samples": 11978,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/34/IntelR-CoreTM-i5-CPU-------M-430----227GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T9550",
      "Rank": 972,
      "Benchmark": 40.2,
      "Samples": 1235,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6301/IntelR-CoreTM2-Duo-CPU-----T9550----266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T9400",
      "Rank": 973,
      "Benchmark": 40.1,
      "Samples": 2750,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3645/IntelR-CoreTM2-Duo-CPU-----T9400----253GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3-2357M",
      "Rank": 974,
      "Benchmark": 40.1,
      "Samples": 113,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6916/IntelR-CoreTM-i3-2357M-CPU---130GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P9600",
      "Rank": 975,
      "Benchmark": 40.1,
      "Samples": 451,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8493/IntelR-CoreTM2-Duo-CPU-----P9600----266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 1007U",
      "Rank": 976,
      "Benchmark": 40,
      "Samples": 4512,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3995/IntelR-CeleronR-CPU-1007U---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 2957U",
      "Rank": 977,
      "Benchmark": 40,
      "Samples": 2360,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12071/IntelR-CeleronR-2957U---140GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II X2 215",
      "Rank": 978,
      "Benchmark": 40,
      "Samples": 4081,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/885/AMD-Athlontm-II-X2-215-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-3500M APU",
      "Rank": 979,
      "Benchmark": 39.8,
      "Samples": 1190,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5434/AMD-A8-3500M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 5400+",
      "Rank": 980,
      "Benchmark": 39.8,
      "Samples": 858,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4069/AMD-Athlontm-64-X2-Dual-Core-Processor-5400-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E6750",
      "Rank": 981,
      "Benchmark": 39.7,
      "Samples": 8446,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/729/IntelR-CoreTM2-Duo-CPU-----E6750----266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium D 3.73GHz",
      "Rank": 982,
      "Benchmark": 39.7,
      "Samples": 42,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10162/IntelR-PentiumR-D-CPU-373GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-7200P APU (2014 M.Ka)",
      "Rank": 983,
      "Benchmark": 39.7,
      "Samples": 118,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/64755/AMD-A8-7200P-Radeon-R5-8-Compute-Cores-4C-4G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E7300",
      "Rank": 984,
      "Benchmark": 39.6,
      "Samples": 6269,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2080/IntelR-CoreTM2-Duo-CPU-----E7300----266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 6600",
      "Rank": 985,
      "Benchmark": 39.6,
      "Samples": 6565,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/984/IntelR-CoreTM2-CPU----------6600----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E7400",
      "Rank": 986,
      "Benchmark": 39.6,
      "Samples": 12514,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2077/IntelR-CoreTM2-Duo-CPU-----E7400----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AD9500AHABBOX",
      "Brand": "AMD",
      "Model": "A6-9500E APU (2016 D.BR)",
      "Rank": 987,
      "Benchmark": 39.6,
      "Samples": 165,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/340618/AMD-A6-9500E-RADEON-R5-6-COMPUTE-CORES-2C-4G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium E6500",
      "Rank": 988,
      "Benchmark": 39.6,
      "Samples": 5032,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/720/PentiumR-Dual-Core--CPU------E6500----293GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium E6300",
      "Rank": 989,
      "Benchmark": 39.6,
      "Samples": 2342,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3310/PentiumR-Dual-Core--CPU------E6300----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T9300",
      "Rank": 990,
      "Benchmark": 39.5,
      "Samples": 2803,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2444/IntelR-CoreTM2-Duo-CPU-----T9300----250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3 M 370",
      "Rank": 991,
      "Benchmark": 39.4,
      "Samples": 20026,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/259/IntelR-CoreTM-i3-CPU-------M-370----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i7 L 620",
      "Rank": 992,
      "Benchmark": 39.4,
      "Samples": 328,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/952/IntelR-CoreTM-i7-CPU-------L-620----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Turion II Ultra Mobile M600",
      "Rank": 993,
      "Benchmark": 39.3,
      "Samples": 212,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5449/AMD-Turiontm-II-Ultra-Dual-Core-Mobile-M600"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P8800",
      "Rank": 994,
      "Benchmark": 39.2,
      "Samples": 843,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2429/IntelR-CoreTM2-Duo-CPU-----P8800----266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AM970PADY44AB",
      "Brand": "AMD",
      "Model": "A12-9700P APU (2016 M.BR)",
      "Rank": 995,
      "Benchmark": 39.2,
      "Samples": 4906,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/148571/AMD-A12-9700P-RADEON-R7-10-COMPUTE-CORES-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3 M 350",
      "Rank": 996,
      "Benchmark": 39.1,
      "Samples": 12324,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/572/IntelR-CoreTM-i3-CPU-------M-350----227GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Opteron 4171 HE",
      "Rank": 997,
      "Benchmark": 39.1,
      "Samples": 16,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5977/AMD-Opterontm-Processor-4171-HE"
    },
    {
      "Type": "CPU",
      "Part Number": "HE8067702740018",
      "Brand": "Intel",
      "Model": "Pentium Gold 4415Y",
      "Rank": 998,
      "Benchmark": 39,
      "Samples": 2040,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/549016/IntelR-PentiumR-CPU-4415Y---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium E5800",
      "Rank": 999,
      "Benchmark": 38.9,
      "Samples": 7577,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3092/PentiumR-Dual-Core--CPU------E5800----320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P9400",
      "Rank": 1000,
      "Benchmark": 38.9,
      "Samples": 592,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5017/IntelR-CoreTM2-Duo-CPU-----P9400----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E7200",
      "Rank": 1001,
      "Benchmark": 38.9,
      "Samples": 5385,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1876/IntelR-CoreTM2-Duo-CPU-----E7200----253GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-9620P APU (2016 M.BR)",
      "Rank": 1002,
      "Benchmark": 38.9,
      "Samples": 4374,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/300068/AMD-A10-9620P-RADEON-R5-10-COMPUTE-CORES-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-7400K APU (2014 D.Ka)",
      "Rank": 1003,
      "Benchmark": 38.9,
      "Samples": 7102,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/16549/AMD-A6-7400K-Radeon-R5-6-Compute-Cores-2C-4G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II P960",
      "Rank": 1004,
      "Benchmark": 38.8,
      "Samples": 987,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1991/AMD-Phenomtm-II-P960-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-7400P APU (2014 M.Ka)",
      "Rank": 1005,
      "Benchmark": 38.8,
      "Samples": 1168,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/26875/AMD-A10-7400P-Radeon-R6-10-Compute-Cores-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "FH8068003067403",
      "Brand": "Intel",
      "Model": "Celeron J4105",
      "Rank": 1006,
      "Benchmark": 38.7,
      "Samples": 819,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/444211/IntelR-CeleronR-J4105-CPU---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-5545M APU",
      "Rank": 1007,
      "Benchmark": 38.7,
      "Samples": 2398,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9308/AMD-A8-5545M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-4655M APU",
      "Rank": 1008,
      "Benchmark": 38.6,
      "Samples": 1705,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6343/AMD-A10-4655M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P8700",
      "Rank": 1009,
      "Benchmark": 38.6,
      "Samples": 6436,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/581/IntelR-CoreTM2-Duo-CPU-----P8700----253GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 5200+",
      "Rank": 1010,
      "Benchmark": 38.6,
      "Samples": 4605,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1721/AMD-Athlontm-64-X2-Dual-Core-Processor-5200-"
    },
    {
      "Type": "CPU",
      "Part Number": "HE8067702740013",
      "Brand": "Intel",
      "Model": "Pentium 4410Y",
      "Rank": 1011,
      "Benchmark": 38.5,
      "Samples": 56,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/315867/IntelR-PentiumR-CPU-4410Y---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P9300",
      "Rank": 1012,
      "Benchmark": 38.5,
      "Samples": 250,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/602/IntelR-CoreTM2-Duo-CPU-----P9300----226GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T8300",
      "Rank": 1013,
      "Benchmark": 38.5,
      "Samples": 2231,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1921/IntelR-CoreTM2-Duo-CPU-----T8300----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-3420M APU",
      "Rank": 1014,
      "Benchmark": 38.4,
      "Samples": 3874,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/649/AMD-A6-3420M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "FH8068003067406",
      "Brand": "Intel",
      "Model": "Pentium Silver N5000",
      "Rank": 1015,
      "Benchmark": 38.4,
      "Samples": 8028,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/499477/IntelR-PentiumR-Silver-N5000-CPU---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5320",
      "Rank": 1016,
      "Benchmark": 38.4,
      "Samples": 109,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/24377/IntelR-XeonR-CPU-----------E5320----186GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium J2900",
      "Rank": 1017,
      "Benchmark": 38.3,
      "Samples": 3620,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12727/IntelR-PentiumR-CPU--J2900----241GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium E5700",
      "Rank": 1018,
      "Benchmark": 38.3,
      "Samples": 16396,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/976/PentiumR-Dual-Core--CPU------E5700----300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon Dual Core 4850e",
      "Rank": 1019,
      "Benchmark": 38.2,
      "Samples": 548,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3970/AMD-Athlontm-Dual-Core-Processor-4850e"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3 M 330",
      "Rank": 1020,
      "Benchmark": 38.1,
      "Samples": 10021,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/484/IntelR-CoreTM-i3-CPU-------M-330----213GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 6420",
      "Rank": 1021,
      "Benchmark": 38.1,
      "Samples": 1805,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1967/IntelR-CoreTM2-CPU----------6420----213GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 967",
      "Rank": 1022,
      "Benchmark": 38.1,
      "Samples": 257,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4152/IntelR-PentiumR-CPU-967---130GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T7700",
      "Rank": 1023,
      "Benchmark": 38.1,
      "Samples": 1735,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2770/IntelR-CoreTM2-Duo-CPU-----T7700----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P7570",
      "Rank": 1024,
      "Benchmark": 38.1,
      "Samples": 239,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7581/IntelR-CoreTM2-Duo-CPU-----P7570----226GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-5745M APU",
      "Rank": 1025,
      "Benchmark": 38,
      "Samples": 5197,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4194/AMD-A10-5745M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P8600",
      "Rank": 1026,
      "Benchmark": 38,
      "Samples": 7269,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/753/IntelR-CoreTM2-Duo-CPU-----P8600----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium E5400",
      "Rank": 1027,
      "Benchmark": 37.9,
      "Samples": 12841,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4475/PentiumR-Dual-Core--CPU------E5400----270GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "BX80557E6550",
      "Brand": "Intel",
      "Model": "Core2 Duo E6550",
      "Rank": 1028,
      "Benchmark": 37.9,
      "Samples": 10033,
      "URL": "https://cpu.userbenchmark.com/Intel-Core2-Duo-E6550/Rating/568"
    },
    {
      "Type": "CPU",
      "Part Number": "AD9500AGABBOX",
      "Brand": "AMD",
      "Model": "A6-9500 APU (2016 D.BR)",
      "Rank": 1029,
      "Benchmark": 37.9,
      "Samples": 1972,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/302063/AMD-A6-9500-RADEON-R5-8-COMPUTE-CORES-2C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II P360",
      "Rank": 1030,
      "Benchmark": 37.9,
      "Samples": 1305,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3956/AMD-Athlontm-II-P360-Dual-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-4300M APU",
      "Rank": 1031,
      "Benchmark": 37.9,
      "Samples": 1975,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2001/AMD-A4-4300M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo L9600",
      "Rank": 1032,
      "Benchmark": 37.8,
      "Samples": 93,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1700/IntelR-CoreTM2-Duo-CPU-----L9600----213GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom II P940",
      "Rank": 1033,
      "Benchmark": 37.8,
      "Samples": 78,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12706/AMD-Phenomtm-II-P940-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium N3540",
      "Rank": 1034,
      "Benchmark": 37.8,
      "Samples": 14084,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/15842/IntelR-PentiumR-CPU--N3540----216GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-4400M APU",
      "Rank": 1035,
      "Benchmark": 37.8,
      "Samples": 5219,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1745/AMD-A6-4400M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium N3530",
      "Rank": 1036,
      "Benchmark": 37.7,
      "Samples": 4274,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11468/IntelR-PentiumR-CPU--N3530----216GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P8400",
      "Rank": 1037,
      "Benchmark": 37.6,
      "Samples": 5659,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/307/IntelR-CoreTM2-Duo-CPU-----P8400----226GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo L9400",
      "Rank": 1038,
      "Benchmark": 37.6,
      "Samples": 547,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5525/IntelR-CoreTM2-Duo-CPU-----L9400----186GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron E3300",
      "Rank": 1039,
      "Benchmark": 37.6,
      "Samples": 2075,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5787/IntelR-CeleronR-CPU--------E3300----250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AM960PADY44AB",
      "Brand": "AMD",
      "Model": "A10-9600P APU (2016 M.BR)",
      "Rank": 1040,
      "Benchmark": 37.6,
      "Samples": 9867,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/136279/AMD-A10-9600P-RADEON-R5-10-COMPUTE-CORES-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium E5500",
      "Rank": 1041,
      "Benchmark": 37.5,
      "Samples": 6260,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2012/PentiumR-Dual-Core--CPU------E5500----280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-3400M APU",
      "Rank": 1042,
      "Benchmark": 37.5,
      "Samples": 3309,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/491/AMD-A6-3400M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core M-5Y31",
      "Rank": 1043,
      "Benchmark": 37.5,
      "Samples": 93,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/33034/IntelR-CoreTM-M-5Y31-CPU---090GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-3400 APU",
      "Rank": 1044,
      "Benchmark": 37.5,
      "Samples": 2209,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6076/AMD-A4-3400-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron E3200",
      "Rank": 1045,
      "Benchmark": 37.3,
      "Samples": 863,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6422/IntelR-CeleronR-CPU--------E3200----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E4700",
      "Rank": 1046,
      "Benchmark": 37.2,
      "Samples": 1045,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/669/IntelR-CoreTM2-Duo-CPU-----E4700----260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-3300 APU",
      "Rank": 1047,
      "Benchmark": 37.2,
      "Samples": 1724,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4728/AMD-A4-3300-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A9-9430 APU (2016 M.SR)",
      "Rank": 1048,
      "Benchmark": 37.2,
      "Samples": 729,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/303175/AMD-A9-9430-RADEON-R5-5-COMPUTE-CORES-2C-3G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 4600+",
      "Rank": 1049,
      "Benchmark": 37.2,
      "Samples": 1936,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8715/AMD-Athlontm-64-X2-Dual-Core-Processor-4600-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 6400",
      "Rank": 1050,
      "Benchmark": 37.1,
      "Samples": 4279,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/106/IntelR-CoreTM2-CPU----------6400----213GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron J1900",
      "Rank": 1051,
      "Benchmark": 37.1,
      "Samples": 5087,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10898/IntelR-CeleronR-CPU--J1900----199GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom Z3740D",
      "Rank": 1052,
      "Benchmark": 37.1,
      "Samples": 182,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3287/IntelR-AtomTM-CPU--Z3740D---133GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium N3520",
      "Rank": 1053,
      "Benchmark": 37.1,
      "Samples": 1729,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7431/IntelR-PentiumR-CPU--N3520----216GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium E5300",
      "Rank": 1054,
      "Benchmark": 37.1,
      "Samples": 15377,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/38/PentiumR-Dual-Core--CPU------E5300----260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P7550",
      "Rank": 1055,
      "Benchmark": 37,
      "Samples": 730,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3099/IntelR-CoreTM2-Duo-CPU-----P7550----226GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 5000+",
      "Rank": 1056,
      "Benchmark": 37,
      "Samples": 5103,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2324/AMD-Athlontm-64-X2-Dual-Core-Processor-5000-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon X2 Dual Core BE-2400",
      "Rank": 1057,
      "Benchmark": 37,
      "Samples": 60,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10300/AMD-Athlontm-X2-Dual-Core-Processor-BE-2400"
    },
    {
      "Type": "CPU",
      "Part Number": "HE8066201931229",
      "Brand": "Intel",
      "Model": "Pentium 4405Y",
      "Rank": 1058,
      "Benchmark": 37,
      "Samples": 125,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/144619/IntelR-PentiumR-CPU-4405Y---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Turion II Neo N54L",
      "Rank": 1059,
      "Benchmark": 36.9,
      "Samples": 157,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7165/AMD-Turiontm-II-Neo-N54L-Dual-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium E5200",
      "Rank": 1060,
      "Benchmark": 36.8,
      "Samples": 12019,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1599/PentiumR-Dual-Core--CPU------E5200----250GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P7450",
      "Rank": 1061,
      "Benchmark": 36.8,
      "Samples": 2436,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1597/IntelR-CoreTM2-Duo-CPU-----P7450----213GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II P340",
      "Rank": 1062,
      "Benchmark": 36.8,
      "Samples": 2265,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/380/AMD-Athlontm-II-P340-Dual-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T8100",
      "Rank": 1063,
      "Benchmark": 36.6,
      "Samples": 2322,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2334/IntelR-CoreTM2-Duo-CPU-----T8100----210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo P7350",
      "Rank": 1064,
      "Benchmark": 36.5,
      "Samples": 2360,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1998/IntelR-CoreTM2-Duo-CPU-----P7350----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 4800+",
      "Rank": 1065,
      "Benchmark": 36.4,
      "Samples": 1848,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2246/AMD-Athlontm-64-X2-Dual-Core-Processor-4800-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Sempron 145",
      "Rank": 1066,
      "Benchmark": 36.4,
      "Samples": 3086,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6487/AMD-Semprontm-145-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon Dual Core 4450e",
      "Rank": 1067,
      "Benchmark": 36.4,
      "Samples": 459,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9437/AMD-Athlontm-Dual-Core-Processor-4450e"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-4555M APU",
      "Rank": 1068,
      "Benchmark": 36.3,
      "Samples": 1858,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3647/AMD-A8-4555M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T7500",
      "Rank": 1069,
      "Benchmark": 36.3,
      "Samples": 3520,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/867/IntelR-CoreTM2-Duo-CPU-----T7500----220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N2930",
      "Rank": 1070,
      "Benchmark": 36.3,
      "Samples": 1599,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13386/IntelR-CeleronR-CPU--N2930----183GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium P6200",
      "Rank": 1071,
      "Benchmark": 36.2,
      "Samples": 6948,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4539/IntelR-PentiumR-CPU--------P6200----213GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon Dual Core 4450B",
      "Rank": 1072,
      "Benchmark": 36.2,
      "Samples": 465,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3166/AMD-Athlontm-Dual-Core-Processor-4450B"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 5350 APU R3",
      "Rank": 1073,
      "Benchmark": 36.2,
      "Samples": 3107,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10020/AMD-Athlontm-5350-APU-with-Radeontm-R3"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 6320",
      "Rank": 1074,
      "Benchmark": 36.1,
      "Samples": 1282,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4501/IntelR-CoreTM2-CPU----------6320----186GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Sempron 140",
      "Rank": 1075,
      "Benchmark": 36.1,
      "Samples": 2299,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3248/AMD-Semprontm-140-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron E3400",
      "Rank": 1076,
      "Benchmark": 36.1,
      "Samples": 3287,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5119/IntelR-CeleronR-CPU--------E3400----260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium P6100",
      "Rank": 1077,
      "Benchmark": 36,
      "Samples": 5326,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/756/IntelR-PentiumR-CPU--------P6100----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron Dual Core T3300",
      "Rank": 1078,
      "Benchmark": 36,
      "Samples": 534,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8823/CeleronR-Dual-Core-CPU-------T3300----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T6670",
      "Rank": 1079,
      "Benchmark": 36,
      "Samples": 1782,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2964/IntelR-CoreTM2-Duo-CPU-----T6670----220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 4400+",
      "Rank": 1080,
      "Benchmark": 35.9,
      "Samples": 2608,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2330/AMD-Athlontm-64-X2-Dual-Core-Processor-4400-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FX-7500 APU (2014 M.Ka)",
      "Rank": 1081,
      "Benchmark": 35.9,
      "Samples": 3024,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/16010/AMD-FX-7500-Radeon-R7-10-Compute-Cores-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Xeon E5310",
      "Rank": 1082,
      "Benchmark": 35.8,
      "Samples": 25,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/21579/IntelR-XeonR-CPU-----------E5310----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-7310 APU (2015 M.Ca)",
      "Rank": 1083,
      "Benchmark": 35.8,
      "Samples": 9893,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/42196/AMD-A6-7310-APU-with-AMD-Radeon-R4-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T6400",
      "Rank": 1084,
      "Benchmark": 35.8,
      "Samples": 4182,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2405/IntelR-CoreTM2-Duo-CPU-----T6400----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-7210 APU (2015 M.Ca)",
      "Rank": 1085,
      "Benchmark": 35.8,
      "Samples": 1777,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/42376/AMD-A4-7210-APU-with-AMD-Radeon-R3-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T7300",
      "Rank": 1086,
      "Benchmark": 35.8,
      "Samples": 2473,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2508/IntelR-CoreTM2-Duo-CPU-----T7300----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T6500",
      "Rank": 1087,
      "Benchmark": 35.7,
      "Samples": 2993,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3474/IntelR-CoreTM2-Duo-CPU-----T6500----210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T6600",
      "Rank": 1088,
      "Benchmark": 35.7,
      "Samples": 7191,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/242/IntelR-CoreTM2-Duo-CPU-----T6600----220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 4200+",
      "Rank": 1089,
      "Benchmark": 35.7,
      "Samples": 3420,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3258/AMD-Athlontm-64-X2-Dual-Core-Processor-4200-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-3330MX APU",
      "Rank": 1090,
      "Benchmark": 35.6,
      "Samples": 1047,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6834/AMD-A4-3330MX-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T5870",
      "Rank": 1091,
      "Benchmark": 35.5,
      "Samples": 1849,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5377/IntelR-CoreTM2-Duo-CPU-----T5870----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 3800+",
      "Rank": 1092,
      "Benchmark": 35.5,
      "Samples": 2828,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2362/AMD-Athlontm-64-X2-Dual-Core-Processor-3800-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-6410 APU R5 Graphics",
      "Rank": 1093,
      "Benchmark": 35.4,
      "Samples": 17745,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12263/AMD-A8-6410-APU-with-AMD-Radeon-R5-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 T7600",
      "Rank": 1094,
      "Benchmark": 35.4,
      "Samples": 509,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2765/IntelR-CoreTM2-CPU---------T7600----233GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon LE-1640",
      "Rank": 1095,
      "Benchmark": 35.4,
      "Samples": 380,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7308/AMD-Athlontm-Processor-LE-1640"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-7410 APU (2015 M.Ca)",
      "Rank": 1096,
      "Benchmark": 35.4,
      "Samples": 23928,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/33754/AMD-A8-7410-APU-with-AMD-Radeon-R5-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II P320",
      "Rank": 1097,
      "Benchmark": 35.3,
      "Samples": 2820,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1942/AMD-Athlontm-II-P320-Dual-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Turion II Mobile M500",
      "Rank": 1098,
      "Benchmark": 35.3,
      "Samples": 530,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2912/AMD-Turiontm-II-Dual-Core-Mobile-M500"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T5900",
      "Rank": 1099,
      "Benchmark": 35.3,
      "Samples": 283,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2376/IntelR-CoreTM2-Duo-CPU-----T5900----220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T5670",
      "Rank": 1100,
      "Benchmark": 35.3,
      "Samples": 637,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3564/IntelR-CoreTM2-Duo-CPU-----T5670----180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T6570",
      "Rank": 1101,
      "Benchmark": 35.3,
      "Samples": 2441,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/438/IntelR-CoreTM2-Duo-CPU-----T6570----210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron Dual Core T3100",
      "Rank": 1102,
      "Benchmark": 35.3,
      "Samples": 870,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1715/CeleronR-Dual-Core-CPU-------T3100----190GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium T4400",
      "Rank": 1103,
      "Benchmark": 35.2,
      "Samples": 5656,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1886/PentiumR-Dual-Core-CPU-------T4400----220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 6300",
      "Rank": 1104,
      "Benchmark": 35.2,
      "Samples": 5065,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2521/IntelR-CoreTM2-CPU----------6300----186GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E4600",
      "Rank": 1105,
      "Benchmark": 35.2,
      "Samples": 5474,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2191/IntelR-CoreTM2-Duo-CPU-----E4600----240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium T4500",
      "Rank": 1106,
      "Benchmark": 35.1,
      "Samples": 7356,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2148/PentiumR-Dual-Core-CPU-------T4500----230GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T5800",
      "Rank": 1107,
      "Benchmark": 35,
      "Samples": 2740,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2272/IntelR-CoreTM2-Duo-CPU-----T5800----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-3300M APU",
      "Rank": 1108,
      "Benchmark": 35,
      "Samples": 1777,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12812/AMD-A4-3300M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium T4300",
      "Rank": 1109,
      "Benchmark": 34.9,
      "Samples": 5774,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2938/PentiumR-Dual-Core-CPU-------T4300----210GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E4500",
      "Rank": 1110,
      "Benchmark": 34.8,
      "Samples": 8198,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/65/IntelR-CoreTM2-Duo-CPU-----E4500----220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo E4400",
      "Rank": 1111,
      "Benchmark": 34.8,
      "Samples": 1278,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3549/IntelR-CoreTM2-Duo-CPU-----E4400----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium Dual E2200",
      "Rank": 1112,
      "Benchmark": 34.8,
      "Samples": 6986,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1712/IntelR-PentiumR-Dual--CPU--E2200----220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T7250",
      "Rank": 1113,
      "Benchmark": 34.8,
      "Samples": 3101,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1781/IntelR-CoreTM2-Duo-CPU-----T7250----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II M320",
      "Rank": 1114,
      "Benchmark": 34.7,
      "Samples": 800,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4506/AMD-Athlontm-II-Dual-Core-M320"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 847",
      "Rank": 1115,
      "Benchmark": 34.7,
      "Samples": 3947,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/457/IntelR-CeleronR-CPU-847---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "V140",
      "Rank": 1116,
      "Benchmark": 34.7,
      "Samples": 700,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1003/AMD-V140-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium J4205",
      "Rank": 1117,
      "Benchmark": 34.6,
      "Samples": 837,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/221469/IntelR-PentiumR-CPU-J4205---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium T4200",
      "Rank": 1118,
      "Benchmark": 34.5,
      "Samples": 4672,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/451/PentiumR-Dual-Core-CPU-------T4200----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A8-7100 APU (2014 M.Ka)",
      "Rank": 1119,
      "Benchmark": 34.5,
      "Samples": 912,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/20429/AMD-A8-7100-Radeon-R5-8-Compute-Cores-4C-4G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 T7400",
      "Rank": 1120,
      "Benchmark": 34.5,
      "Samples": 574,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5780/IntelR-CoreTM2-CPU---------T7400----216GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 4400",
      "Rank": 1121,
      "Benchmark": 34.5,
      "Samples": 1795,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5093/IntelR-CoreTM2-CPU----------4400----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium N3510",
      "Rank": 1122,
      "Benchmark": 34.3,
      "Samples": 337,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11120/IntelR-PentiumR-CPU--N3510----199GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FH8068003067408",
      "Brand": "Intel",
      "Model": "Celeron N4100",
      "Rank": 1123,
      "Benchmark": 34.3,
      "Samples": 3731,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/407836/IntelR-CeleronR-N4100-CPU---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "V120",
      "Rank": 1124,
      "Benchmark": 34.2,
      "Samples": 515,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5365/AMD-V120-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo L9300",
      "Rank": 1125,
      "Benchmark": 34.2,
      "Samples": 112,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5639/IntelR-CoreTM2-Duo-CPU-----L9300----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom Z3775",
      "Rank": 1126,
      "Benchmark": 34.1,
      "Samples": 831,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12464/IntelR-AtomTM-CPU--Z3775----146GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo L7500",
      "Rank": 1127,
      "Benchmark": 34.1,
      "Samples": 183,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6265/IntelR-CoreTM2-Duo-CPU-----L7500----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T7100",
      "Rank": 1128,
      "Benchmark": 34.1,
      "Samples": 1201,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2268/IntelR-CoreTM2-Duo-CPU-----T7100----180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 3400+",
      "Rank": 1129,
      "Benchmark": 34,
      "Samples": 27,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1056/AMD-Athlontm-64-Processor-3400-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Turion X2 Ultra Mobile ZM-82",
      "Rank": 1130,
      "Benchmark": 33.9,
      "Samples": 195,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2211/AMD-Turiontm-X2-Ultra-Dual-Core-Mobile-ZM-82"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium Dual T3400",
      "Rank": 1131,
      "Benchmark": 33.9,
      "Samples": 2368,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5174/IntelR-PentiumR-Dual--CPU--T3400----216GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo U9600",
      "Rank": 1132,
      "Benchmark": 33.9,
      "Samples": 295,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4270/IntelR-CoreTM2-Duo-CPU-----U9600----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium Dual E2180",
      "Rank": 1133,
      "Benchmark": 33.8,
      "Samples": 6496,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/814/IntelR-PentiumR-Dual--CPU--E2180----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Turion 64 X2 Mobile Technology TL-60",
      "Rank": 1134,
      "Benchmark": 33.8,
      "Samples": 997,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2315/AMD-Turiontm-64-X2-Mobile-Technology-TL-60"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium N4200",
      "Rank": 1135,
      "Benchmark": 33.7,
      "Samples": 10533,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/196248/IntelR-PentiumR-CPU-N4200---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 4300",
      "Rank": 1136,
      "Benchmark": 33.7,
      "Samples": 2245,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/977/IntelR-CoreTM2-CPU----------4300----180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 3000+",
      "Rank": 1137,
      "Benchmark": 33.6,
      "Samples": 285,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5460/AMD-Athlontm-64-Processor-3000-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T5850",
      "Rank": 1138,
      "Benchmark": 33.6,
      "Samples": 411,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6522/IntelR-CoreTM2-Duo-CPU-----T5850----216GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 3500+",
      "Rank": 1139,
      "Benchmark": 33.5,
      "Samples": 436,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2498/AMD-Athlontm-64-Processor-3500-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 T7200",
      "Rank": 1140,
      "Benchmark": 33.5,
      "Samples": 2119,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/248/IntelR-CoreTM2-CPU---------T7200----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo U9400",
      "Rank": 1141,
      "Benchmark": 33.5,
      "Samples": 486,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12007/IntelR-CoreTM2-Duo-CPU-----U9400----140GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-3305M APU",
      "Rank": 1142,
      "Benchmark": 33.5,
      "Samples": 1285,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6638/AMD-A4-3305M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium Dual T3200",
      "Rank": 1143,
      "Benchmark": 33.4,
      "Samples": 1773,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2235/IntelR-PentiumR-Dual--CPU--T3200----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "T2600",
      "Rank": 1144,
      "Benchmark": 33.4,
      "Samples": 135,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4124/Genuine-IntelR-CPU-----------T2600----216GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A10-7300 APU (2014 M.Ka)",
      "Rank": 1145,
      "Benchmark": 33.3,
      "Samples": 4977,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11662/AMD-A10-7300-Radeon-R6-10-Compute-Cores-4C-6G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 3600+",
      "Rank": 1146,
      "Benchmark": 33.3,
      "Samples": 604,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5235/AMD-Athlontm-64-X2-Dual-Core-Processor-3600-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T5750",
      "Rank": 1147,
      "Benchmark": 33.2,
      "Samples": 1763,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6581/IntelR-CoreTM2-Duo-CPU-----T5750----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "T2500",
      "Rank": 1148,
      "Benchmark": 33.2,
      "Samples": 363,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1958/Genuine-IntelR-CPU-----------T2500----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 3800+",
      "Rank": 1149,
      "Benchmark": 33.1,
      "Samples": 264,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2391/AMD-Athlontm-64-Processor-3800-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium Dual E2160",
      "Rank": 1150,
      "Benchmark": 33,
      "Samples": 4072,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2113/IntelR-PentiumR-Dual--CPU--E2160----180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-4455M APU",
      "Rank": 1151,
      "Benchmark": 33,
      "Samples": 1430,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5941/AMD-A6-4455M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N2920",
      "Rank": 1152,
      "Benchmark": 33,
      "Samples": 1279,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8725/IntelR-CeleronR-CPU--N2920----186GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon II M300",
      "Rank": 1153,
      "Benchmark": 32.8,
      "Samples": 1099,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5992/AMD-Athlontm-II-Dual-Core-M300"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-4355M APU",
      "Rank": 1154,
      "Benchmark": 32.8,
      "Samples": 368,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10814/AMD-A4-4355M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "T2400",
      "Rank": 1155,
      "Benchmark": 32.7,
      "Samples": 616,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6584/Genuine-IntelR-CPU-----------T2400----183GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A9-9420 APU (2016 M.SR)",
      "Rank": 1156,
      "Benchmark": 32.7,
      "Samples": 11904,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/297050/AMD-A9-9420-RADEON-R5-5-COMPUTE-CORES-2C-3G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T5550",
      "Rank": 1157,
      "Benchmark": 32.7,
      "Samples": 1268,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1673/IntelR-CoreTM2-Duo-CPU-----T5550----183GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium D 3.40GHz",
      "Rank": 1158,
      "Benchmark": 32.7,
      "Samples": 3256,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5820/IntelR-PentiumR-D-CPU-340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 4 3.80GHz",
      "Rank": 1159,
      "Benchmark": 32.6,
      "Samples": 107,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11003/--------------IntelR-PentiumR-4-CPU-380GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A9-9400 APU (2016 M.SR)",
      "Rank": 1160,
      "Benchmark": 32.6,
      "Samples": 1530,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/188753/AMD-A9-9400-RADEON-R5-5-COMPUTE-CORES-2C-3G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 T5600",
      "Rank": 1161,
      "Benchmark": 32.6,
      "Samples": 1152,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6306/IntelR-CoreTM2-CPU---------T5600----183GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom Z3770",
      "Rank": 1162,
      "Benchmark": 32.6,
      "Samples": 157,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5592/IntelR-AtomTM-CPU--Z3770----146GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 4000+",
      "Rank": 1163,
      "Benchmark": 32.6,
      "Samples": 57,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10241/AMD-Athlontm-64-Processor-4000-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 T5500",
      "Rank": 1164,
      "Benchmark": 32.5,
      "Samples": 1436,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2561/IntelR-CoreTM2-CPU---------T5500----166GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AM9210AVY23AC",
      "Brand": "AMD",
      "Model": "A6-9210 APU (2016 M.SR)",
      "Rank": 1165,
      "Benchmark": 32.5,
      "Samples": 836,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/180033/AMD-A6-9210-RADEON-R4-5-COMPUTE-CORES-2C-3G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Turion 64 X2 Mobile Technology TL-58",
      "Rank": 1166,
      "Benchmark": 32.5,
      "Samples": 482,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/817/AMD-Turiontm-64-X2-Mobile-Technology-TL-58"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Turion 64 Mobile Technology ML-32",
      "Rank": 1167,
      "Benchmark": 32.5,
      "Samples": 18,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10530/AMD-Turiontm-64-Mobile-Technology-ML-32"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "T2300",
      "Rank": 1168,
      "Benchmark": 32.5,
      "Samples": 867,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2474/Genuine-IntelR-CPU-----------T2300----166GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core 4000+",
      "Rank": 1169,
      "Benchmark": 32.4,
      "Samples": 2557,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2436/AMD-Athlontm-64-X2-Dual-Core-Processor-4000-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A9-9410 APU (2016 M.SR)",
      "Rank": 1170,
      "Benchmark": 32.3,
      "Samples": 5250,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/137162/AMD-A9-9410-RADEON-R5-5-COMPUTE-CORES-2C-3G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T5450",
      "Rank": 1171,
      "Benchmark": 32.3,
      "Samples": 1165,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5075/IntelR-CoreTM2-Duo-CPU-----T5450----166GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "AM9220AYN23AC",
      "Brand": "AMD",
      "Model": "A6-9220 APU (2016 M.SR)",
      "Rank": 1172,
      "Benchmark": 32.2,
      "Samples": 4248,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/300155/AMD-A6-9220-RADEON-R4-5-COMPUTE-CORES-2C-3G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 3200+",
      "Rank": 1173,
      "Benchmark": 32.1,
      "Samples": 830,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7063/AMD-Athlontm-64-Processor-3200-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-5200 APU",
      "Rank": 1174,
      "Benchmark": 32.1,
      "Samples": 8921,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4574/AMD-A6-5200-APU-with-RadeonTM-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": 2140,
      "Rank": 1175,
      "Benchmark": 32,
      "Samples": 1211,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6453/Genuine-IntelR-CPU------------2140----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N2840",
      "Rank": 1176,
      "Benchmark": 31.8,
      "Samples": 18693,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/16086/IntelR-CeleronR-CPU--N2840----216GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium Dual E2140",
      "Rank": 1177,
      "Benchmark": 31.7,
      "Samples": 2154,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4944/IntelR-PentiumR-Dual--CPU--E2140----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium D 3.20GHz",
      "Rank": 1178,
      "Benchmark": 31.7,
      "Samples": 877,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1730/--------------IntelR-PentiumR-D-CPU-320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo T5250",
      "Rank": 1179,
      "Benchmark": 31.7,
      "Samples": 829,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5189/IntelR-CoreTM2-Duo-CPU-----T5250----150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-9120 APU (2016 M.SR)",
      "Rank": 1180,
      "Benchmark": 31.7,
      "Samples": 1312,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/308751/AMD-A4-9120-RADEON-R3-4-COMPUTE-CORES-2C-2G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A9-9425 APU (2016 M.SR)",
      "Rank": 1181,
      "Benchmark": 31.7,
      "Samples": 11365,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/496441/AMD-A9-9425-RADEON-R5-5-COMPUTE-CORES-2C-3G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-6210 APU R3 Graphics",
      "Rank": 1182,
      "Benchmark": 31.7,
      "Samples": 4495,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12438/AMD-A4-6210-APU-with-AMD-Radeon-R3-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "T2080",
      "Rank": 1183,
      "Benchmark": 31.7,
      "Samples": 432,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4748/Genuine-IntelR-CPU-----------T2080----173GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron J3455",
      "Rank": 1184,
      "Benchmark": 31.6,
      "Samples": 2706,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/200485/IntelR-CeleronR-CPU-J3455---150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 4 3.40GHz",
      "Rank": 1185,
      "Benchmark": 31.6,
      "Samples": 982,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/293/--------------IntelR-PentiumR-4-CPU-340GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E2-3000M APU",
      "Rank": 1186,
      "Benchmark": 31.6,
      "Samples": 896,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6063/AMD-E2-3000M-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "U7300",
      "Rank": 1187,
      "Benchmark": 31.5,
      "Samples": 1452,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4246/Genuine-IntelR-CPU-----------U7300----130GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N2830",
      "Rank": 1188,
      "Benchmark": 31.5,
      "Samples": 7711,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12104/IntelR-CeleronR-CPU--N2830----216GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom Z3740",
      "Rank": 1189,
      "Benchmark": 31.5,
      "Samples": 1287,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3256/IntelR-AtomTM-CPU--Z3740----133GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Turion 64 X2 Mobile Technology TL-56",
      "Rank": 1190,
      "Benchmark": 31.4,
      "Samples": 321,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2456/AMD-Turiontm-64-X2-Mobile-Technology-TL-56"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 Duo L7100",
      "Rank": 1191,
      "Benchmark": 31.3,
      "Samples": 51,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5778/IntelR-CoreTM2-Duo-CPU-----L7100----120GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 900",
      "Rank": 1192,
      "Benchmark": 31.3,
      "Samples": 2668,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4381/IntelR-CeleronR-CPU----------900----220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E2-7110 APU (2015 M.Ca)",
      "Rank": 1193,
      "Benchmark": 31.2,
      "Samples": 3976,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/150118/AMD-E2-7110-APU-with-AMD-Radeon-R2-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "AM9200AKN23AC",
      "Brand": "AMD",
      "Model": "A6-9200 APU (2016 M.SR)",
      "Rank": 1194,
      "Benchmark": 31.1,
      "Samples": 939,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/252093/AMD-A6-9200-RADEON-R4-5-COMPUTE-CORES-2C-3G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron E1500",
      "Rank": 1195,
      "Benchmark": 31,
      "Samples": 280,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8605/IntelR-CeleronR-CPU--------E1500----220GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron E1400",
      "Rank": 1196,
      "Benchmark": 30.9,
      "Samples": 374,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2849/IntelR-CeleronR-CPU--------E1400----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 T5300",
      "Rank": 1197,
      "Benchmark": 30.9,
      "Samples": 266,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2288/IntelR-CoreTM2-CPU---------T5300----173GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "T2250",
      "Rank": 1198,
      "Benchmark": 30.9,
      "Samples": 434,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5955/Genuine-IntelR-CPU-----------T2250----173GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3 U 380",
      "Rank": 1199,
      "Benchmark": 30.9,
      "Samples": 496,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8152/IntelR-CoreTM-i3-CPU-------U-380----133GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core Duo T2350",
      "Rank": 1200,
      "Benchmark": 30.9,
      "Samples": 213,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3830/IntelR-CoreTM-Duo-CPU------T2350----186GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "U2300",
      "Rank": 1201,
      "Benchmark": 30.8,
      "Samples": 245,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2326/Genuine-IntelR-CPU-----------U2300----120GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Turion X2 Dual-Core Mobile RM-70",
      "Rank": 1202,
      "Benchmark": 30.8,
      "Samples": 439,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/199/AMD-Turiontm-X2-Dual-Core-Mobile-RM-70"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Turion 64 X2 Mobile Technology TL-52",
      "Rank": 1203,
      "Benchmark": 30.7,
      "Samples": 175,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1892/AMD-Turiontm-64-X2-Mobile-Technology-TL-52"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i5 U 470",
      "Rank": 1204,
      "Benchmark": 30.7,
      "Samples": 306,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6244/IntelR-CoreTM-i5-CPU-------U-470----133GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium D 3.00GHz",
      "Rank": 1205,
      "Benchmark": 30.7,
      "Samples": 3849,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3363/IntelR-PentiumR-D-CPU-300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Turion II Neo N40L",
      "Rank": 1206,
      "Benchmark": 30.6,
      "Samples": 140,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7/AMD-Turiontm-II-Neo-N40L-Dual-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N3450",
      "Rank": 1207,
      "Benchmark": 30.4,
      "Samples": 5632,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/208922/IntelR-CeleronR-CPU-N3450---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N4020",
      "Rank": 1208,
      "Benchmark": 30.4,
      "Samples": 970,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1134763/IntelR-CeleronR-N4020-CPU---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "U4100",
      "Rank": 1209,
      "Benchmark": 30.4,
      "Samples": 940,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10746/Genuine-IntelR-CPU-----------U4100----130GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium Dual T2370",
      "Rank": 1210,
      "Benchmark": 30.3,
      "Samples": 484,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4795/IntelR-PentiumR-Dual--CPU--T2370----173GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 4 3.20GHz",
      "Rank": 1211,
      "Benchmark": 30.3,
      "Samples": 2573,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7095/--------------IntelR-PentiumR-4-CPU-320GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core2 T5200",
      "Rank": 1212,
      "Benchmark": 30.2,
      "Samples": 278,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/11616/IntelR-CoreTM2-CPU---------T5200----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium D 2.80GHz",
      "Rank": 1213,
      "Benchmark": 30.2,
      "Samples": 3432,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/267/--------------IntelR-PentiumR-D-CPU-280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": 575,
      "Rank": 1214,
      "Benchmark": 30.2,
      "Samples": 381,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4105/Genuine-IntelR-CPU-------------575----200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium Dual T2330",
      "Rank": 1215,
      "Benchmark": 30.2,
      "Samples": 738,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6733/IntelR-PentiumR-Dual--CPU--T2330----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N3160",
      "Rank": 1216,
      "Benchmark": 30.1,
      "Samples": 1451,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/166661/IntelR-CeleronR-CPU--N3160----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon X2 Dual-Core QL-65",
      "Rank": 1217,
      "Benchmark": 30.1,
      "Samples": 454,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4672/AMD-Athlontm-X2-Dual-Core-QL-65"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium Dual T2390",
      "Rank": 1218,
      "Benchmark": 30.1,
      "Samples": 1033,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2090/IntelR-PentiumR-Dual--CPU--T2390----186GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium Dual T2310",
      "Rank": 1219,
      "Benchmark": 30,
      "Samples": 395,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2719/IntelR-PentiumR-Dual--CPU--T2310----146GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core i3 U 330",
      "Rank": 1220,
      "Benchmark": 30,
      "Samples": 305,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1602/IntelR-CoreTM-i3-CPU-------U-330----120GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom x7-Z8700",
      "Rank": 1221,
      "Benchmark": 29.9,
      "Samples": 1968,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/27122/IntelR-AtomTM-x7-Z8700--CPU---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FH8068003067416",
      "Brand": "Intel",
      "Model": "Celeron J4005",
      "Rank": 1222,
      "Benchmark": 29.8,
      "Samples": 1010,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/473105/IntelR-CeleronR-J4005-CPU---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E2-9000 APU (2016 M.SR)",
      "Rank": 1223,
      "Benchmark": 29.8,
      "Samples": 1268,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/339888/AMD-E2-9000-RADEON-R2-4-COMPUTE-CORES-2C-2G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Sempron 3400+",
      "Rank": 1224,
      "Benchmark": 29.7,
      "Samples": 217,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8329/AMD-Semprontm-Processor-3400-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E2-9010 APU (2016 M.SR)",
      "Rank": 1225,
      "Benchmark": 29.6,
      "Samples": 212,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/175091/AMD-E2-9010-RADEON-R2-4-COMPUTE-CORES-2C-2G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 4 3.00GHz",
      "Rank": 1226,
      "Benchmark": 29.6,
      "Samples": 6295,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/440/--------------IntelR-PentiumR-4-CPU-300GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium N3710",
      "Rank": 1227,
      "Benchmark": 29.2,
      "Samples": 9822,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/141841/IntelR-PentiumR-CPU--N3710----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom x7-Z8750",
      "Rank": 1228,
      "Benchmark": 29,
      "Samples": 337,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/177483/IntelR-AtomTM-x7-Z8750--CPU---160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium N3700",
      "Rank": 1229,
      "Benchmark": 29,
      "Samples": 9129,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/33474/IntelR-PentiumR-CPU--N3700----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Sempron 3600+",
      "Rank": 1230,
      "Benchmark": 28.9,
      "Samples": 117,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1005/Mobile-AMD-Semprontm-Processor-3600-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "AthlonX2 DualCore QL-60",
      "Rank": 1231,
      "Benchmark": 28.9,
      "Samples": 21,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6294/AMD-AthlontmX2-DualCore-QL-60"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core TK-55",
      "Rank": 1232,
      "Benchmark": 28.8,
      "Samples": 276,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1927/AMD-Athlontm-64-X2-Dual-Core-Processor-TK-55"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N2820",
      "Rank": 1233,
      "Benchmark": 28.8,
      "Samples": 1742,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5994/IntelR-CeleronR-CPU--N2820----213GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium M processor 1.86GHz",
      "Rank": 1234,
      "Benchmark": 28.8,
      "Samples": 171,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4587/--------IntelR-PentiumR-M-processor-186GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N2815",
      "Rank": 1235,
      "Benchmark": 28.7,
      "Samples": 908,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9736/IntelR-CeleronR-CPU--N2815----186GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 4 2.80GHz",
      "Rank": 1236,
      "Benchmark": 28.7,
      "Samples": 1445,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3163/--------------IntelR-PentiumR-4-CPU-280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-5000 APU",
      "Rank": 1237,
      "Benchmark": 28.7,
      "Samples": 8425,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5321/AMD-A4-5000-APU-with-RadeonTM-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon X2 Dual-Core QL-64",
      "Rank": 1238,
      "Benchmark": 28.6,
      "Samples": 374,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3720/AMD-Athlontm-X2-Dual-Core-QL-64"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N3150",
      "Rank": 1239,
      "Benchmark": 28.6,
      "Samples": 2328,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/28103/IntelR-CeleronR-CPU--N3150----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom x5-Z8550",
      "Rank": 1240,
      "Benchmark": 28.5,
      "Samples": 543,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/195658/IntelR-AtomTM-x5-Z8550--CPU---144GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A6-7000 APU (2014 M.Ka)",
      "Rank": 1241,
      "Benchmark": 28.4,
      "Samples": 199,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/27400/AMD-A6-7000-Radeon-R4-5-Compute-Cores-2C-3G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium M processor 1.73GHz",
      "Rank": 1242,
      "Benchmark": 28.3,
      "Samples": 280,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7488/--------IntelR-PentiumR-M-processor-173GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E-350D APU",
      "Rank": 1243,
      "Benchmark": 28.2,
      "Samples": 233,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/6589/AMD-E-350D-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon Neo X2 Dual Core L335",
      "Rank": 1244,
      "Benchmark": 28.1,
      "Samples": 161,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4043/AMD-Athlontm-Neo-X2-Dual-Core-Processor-L335"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom x5-Z8330",
      "Rank": 1245,
      "Benchmark": 28.1,
      "Samples": 255,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/153094/IntelR-AtomTM-x5-Z8330--CPU---144GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "FH8068003067417",
      "Brand": "Intel",
      "Model": "Celeron N4000",
      "Rank": 1246,
      "Benchmark": 27.9,
      "Samples": 11720,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/503050/IntelR-CeleronR-N4000-CPU---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E2-2000 APU (2012 M.Za)",
      "Rank": 1247,
      "Benchmark": 27.8,
      "Samples": 785,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10908/AMD-E2-2000-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom x5-Z8500",
      "Rank": 1248,
      "Benchmark": 27.8,
      "Samples": 730,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/38612/IntelR-AtomTM-x5-Z8500--CPU---144GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E2-9000e APU (2016 M.SR)",
      "Rank": 1249,
      "Benchmark": 27.8,
      "Samples": 2750,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/321458/AMD-E2-9000e-RADEON-R2-4-COMPUTE-CORES-2C-2G"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom D2700",
      "Rank": 1250,
      "Benchmark": 27.6,
      "Samples": 209,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7623/IntelR-AtomTM-CPU-D2700-----213GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 64 X2 Dual Core TK-53",
      "Rank": 1251,
      "Benchmark": 27.5,
      "Samples": 129,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9182/AMD-Athlontm-64-X2-Dual-Core-Processor-TK-53"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 723",
      "Rank": 1252,
      "Benchmark": 27.4,
      "Samples": 44,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/10153/IntelR-CeleronR-CPU----------723----120GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon X2 Dual Core BE-2300",
      "Rank": 1253,
      "Benchmark": 27.3,
      "Samples": 37,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12410/AMD-Athlontm-X2-Dual-Core-Processor-BE-2300"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E-450 APU",
      "Rank": 1254,
      "Benchmark": 27.2,
      "Samples": 7386,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2189/AMD-E-450-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Sempron 2800+",
      "Rank": 1255,
      "Benchmark": 27.1,
      "Samples": 147,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4755/AMD-Semprontm-Processor-2800-"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom N2800",
      "Rank": 1256,
      "Benchmark": 27.1,
      "Samples": 373,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8985/IntelR-AtomTM-CPU-N2800-----186GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Sempron 3000+",
      "Rank": 1257,
      "Benchmark": 27.1,
      "Samples": 244,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3648/AMD-Semprontm-Processor-3000-"
    },
    {
      "Type": "CPU",
      "Part Number": "EM1800GBB22GV",
      "Brand": "AMD",
      "Model": "E2-1800 APU (2012 M.Za)",
      "Rank": 1258,
      "Benchmark": 26.8,
      "Samples": 3838,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/839/AMD-E2-1800-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium D 2.66GHz",
      "Rank": 1259,
      "Benchmark": 26.8,
      "Samples": 362,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4781/-------------IntelR-PentiumR-D--CPU-266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E-350",
      "Rank": 1260,
      "Benchmark": 26.4,
      "Samples": 5327,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5356/AMD-E-350-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron J3355",
      "Rank": 1261,
      "Benchmark": 26.3,
      "Samples": 733,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/247225/IntelR-CeleronR-CPU-J3355---200GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon Neo MV-40",
      "Rank": 1262,
      "Benchmark": 26.2,
      "Samples": 175,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/12003/AMD-Athlontm-Neo-Processor-MV-40"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 4 2.60GHz",
      "Rank": 1263,
      "Benchmark": 26,
      "Samples": 76,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5254/--------------IntelR-PentiumR-4-CPU-260GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Athlon 2650e",
      "Rank": 1264,
      "Benchmark": 26,
      "Samples": 136,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4742/AMD-Athlontm-Processor-2650e"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 4 2.93GHz",
      "Rank": 1265,
      "Benchmark": 25.9,
      "Samples": 125,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4199/--------------IntelR-PentiumR-4-CPU-293GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N3010",
      "Rank": 1266,
      "Benchmark": 25.8,
      "Samples": 280,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/195388/IntelR-CeleronR-CPU--N3010----104GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium M processor 1.60GHz",
      "Rank": 1267,
      "Benchmark": 25.7,
      "Samples": 145,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4076/--------IntelR-PentiumR-M-processor-160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 4 3.06GHz",
      "Rank": 1268,
      "Benchmark": 25.5,
      "Samples": 774,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/614/--------------IntelR-PentiumR-4-CPU-306GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron M 430",
      "Rank": 1269,
      "Benchmark": 25.5,
      "Samples": 143,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4999/IntelR-CeleronR-M-CPU--------430----173GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom x5-Z8300",
      "Rank": 1270,
      "Benchmark": 25.3,
      "Samples": 2939,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/37765/IntelR-AtomTM-x5-Z8300--CPU---144GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N3000",
      "Rank": 1271,
      "Benchmark": 24.1,
      "Samples": 162,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/34511/IntelR-CeleronR-CPU--N3000----104GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom x5-Z8350",
      "Rank": 1272,
      "Benchmark": 24.1,
      "Samples": 8286,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/143924/IntelR-AtomTM-x5-Z8350--CPU---144GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "C-60 APU",
      "Rank": 1273,
      "Benchmark": 24,
      "Samples": 1943,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3147/AMD-C-60-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom D525",
      "Rank": 1274,
      "Benchmark": 24,
      "Samples": 1965,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5666/IntelR-AtomTM-CPU-D525-----180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E1-1200 APU",
      "Rank": 1275,
      "Benchmark": 23.9,
      "Samples": 5543,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2118/AMD-E1-1200-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 4 2.40GHz",
      "Rank": 1276,
      "Benchmark": 23.9,
      "Samples": 197,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5589/--------------IntelR-PentiumR-4-CPU-240GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N3350",
      "Rank": 1277,
      "Benchmark": 23.7,
      "Samples": 11967,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/197164/IntelR-CeleronR-CPU-N3350---110GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E-300 APU",
      "Rank": 1278,
      "Benchmark": 23.6,
      "Samples": 6626,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2468/AMD-E-300-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Pentium 4 2.66GHz",
      "Rank": 1279,
      "Benchmark": 23.5,
      "Samples": 205,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4462/--------------IntelR-PentiumR-4-CPU-266GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E1-7010 APU (2015 M.Ca)",
      "Rank": 1280,
      "Benchmark": 23.1,
      "Samples": 1352,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/167591/AMD-E1-7010-APU-with-AMD-Radeon-R2-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom N570",
      "Rank": 1281,
      "Benchmark": 22.6,
      "Samples": 1125,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3881/IntelR-AtomTM-CPU-N570-----166GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom N2600",
      "Rank": 1282,
      "Benchmark": 22.5,
      "Samples": 1932,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/704/IntelR-AtomTM-CPU-N2600-----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N3060",
      "Rank": 1283,
      "Benchmark": 21.8,
      "Samples": 16525,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/130019/IntelR-CeleronR-CPU--N3060----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron 2.80GHz",
      "Rank": 1284,
      "Benchmark": 21.6,
      "Samples": 42,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8814/IntelR-CeleronR-CPU-280GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron M processor 1.50GHz",
      "Rank": 1285,
      "Benchmark": 21.6,
      "Samples": 59,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5383/IntelR-CeleronR-M-processor---------150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E1-2500 APU",
      "Rank": 1286,
      "Benchmark": 21.5,
      "Samples": 2774,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/9778/AMD-E1-2500-APU-with-RadeonTM-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom 330",
      "Rank": 1287,
      "Benchmark": 21.4,
      "Samples": 900,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1917/IntelR-AtomTM-CPU--330-----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom N550",
      "Rank": 1288,
      "Benchmark": 21.4,
      "Samples": 723,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/182/IntelR-AtomTM-CPU-N550-----150GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "C-50",
      "Rank": 1289,
      "Benchmark": 21.3,
      "Samples": 1648,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3082/AMD-C-50-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom N455",
      "Rank": 1290,
      "Benchmark": 21.2,
      "Samples": 2312,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2394/IntelR-AtomTM-CPU-N455-----166GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron N3050",
      "Rank": 1291,
      "Benchmark": 21.1,
      "Samples": 11566,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/31154/IntelR-CeleronR-CPU--N3050----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom N450",
      "Rank": 1292,
      "Benchmark": 21,
      "Samples": 2160,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/3190/IntelR-AtomTM-CPU-N450-----166GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom D510",
      "Rank": 1293,
      "Benchmark": 20.9,
      "Samples": 406,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5452/IntelR-AtomTM-CPU-D510-----166GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom N280",
      "Rank": 1294,
      "Benchmark": 20.9,
      "Samples": 512,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4556/---------IntelR-AtomTM-CPU-N280-----166GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom D410",
      "Rank": 1295,
      "Benchmark": 20.8,
      "Samples": 206,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13305/---------IntelR-AtomTM-CPU-D410-----166GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Celeron D 3.06GHz",
      "Rank": 1296,
      "Benchmark": 20.8,
      "Samples": 269,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13158/IntelR-CeleronR-D-CPU-306GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom N435",
      "Rank": 1297,
      "Benchmark": 20.7,
      "Samples": 37,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13319/IntelR-AtomTM-CPU-N435-----133GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Z-60 APU",
      "Rank": 1298,
      "Benchmark": 20.4,
      "Samples": 4,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/13444/AMD-Z-60-APU-with-Radeontm-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom N270",
      "Rank": 1299,
      "Benchmark": 20.1,
      "Samples": 2702,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2697/IntelR-AtomTM-CPU-N270-----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom 230",
      "Rank": 1300,
      "Benchmark": 19.5,
      "Samples": 246,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/5251/IntelR-AtomTM-CPU--230-----160GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom 9600",
      "Rank": 1301,
      "Benchmark": 18.7,
      "Samples": 604,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7248/AMD-Phenomtm-9600-Quad-Core-Processor"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom Z2760",
      "Rank": 1302,
      "Benchmark": 18,
      "Samples": 639,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2088/IntelR-AtomTM-CPU-Z2760----180GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "E1-2100 APU",
      "Rank": 1303,
      "Benchmark": 17.8,
      "Samples": 3701,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/7613/AMD-E1-2100-APU-with-RadeonTM-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-1250 APU",
      "Rank": 1304,
      "Benchmark": 17.7,
      "Samples": 655,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/8678/AMD-A4-1250-APU-with-RadeonTM-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Atom Z520",
      "Rank": 1305,
      "Benchmark": 17.7,
      "Samples": 242,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/4161/---------IntelR-AtomTM-CPU-Z520-----133GHz"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "A4-1200 APU",
      "Rank": 1306,
      "Benchmark": 17.4,
      "Samples": 433,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/2520/AMD-A4-1200-APU-with-RadeonTM-HD-Graphics"
    },
    {
      "Type": "CPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Phenom 9500",
      "Rank": 1307,
      "Benchmark": 17,
      "Samples": 1085,
      "URL": "https://cpu.userbenchmark.com/SpeedTest/1692/AMD-Phenomtm-9500-Quad-Core-Processor"
    }
  ]

  const seedCPU = () => CPU.bulkCreate(cpudata);

module.exports = seedCPU;