const Hdd = require('../models');

const hddData = [
    {
      "type": "RAM",
      "part_number": "F4-2400C14Q2-128GRK",
      "brand": "G.SKILL",
      "model": "Ripjaws 4 DDR4 2400 C14 8x16GB",
      "rank": 1,
      "benchmark": 122,
      "samples": 51,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-4-DDR4-2400-C14-8x16GB/Rating/3567"
    },
    {
      "type": "RAM",
      "part_number": "F4-3200C14Q-64GTZ",
      "brand": "G.SKILL",
      "model": "Trident Z DDR4 3200 C14 4x16GB",
      "rank": 2,
      "benchmark": 110,
      "samples": 1003,
      "url": "https://ram.userbenchmark.com/GSKILL-Trident-Z-DDR4-3200-C14-4x16GB/Rating/3612"
    },
    {
      "type": "RAM",
      "part_number": "BLS4K8G4D240FSA",
      "brand": "Crucial",
      "model": "Ballistix Sport DDR4 2400 C16 8x4GB",
      "rank": 3,
      "benchmark": 110,
      "samples": 112,
      "url": "https://ram.userbenchmark.com/SpeedTest/93395/Crucial-BLS4G4D240FSAM8FAD-8x4GB"
    },
    {
      "type": "RAM",
      "part_number": "BLE4K8G4D36BEEAK",
      "brand": "Crucial",
      "model": "Ballistix Elite DDR4 3600 C16 4x8GB",
      "rank": 4,
      "benchmark": 107,
      "samples": 944,
      "url": "https://ram.userbenchmark.com/SpeedTest/811381/Crucial-BLE8G4D36BEEAKM8FE1-4x8GB"
    },
    {
      "type": "RAM",
      "part_number": "F4-3200C14Q-32GFX",
      "brand": "G.SKILL",
      "model": "Flare X DDR4 3200 C14 4x8GB",
      "rank": 5,
      "benchmark": 107,
      "samples": 5385,
      "url": "https://ram.userbenchmark.com/SpeedTest/270794/GSKILL-F4-3200C14-8GFX-4x8GB"
    },
    {
      "type": "RAM",
      "part_number": "F4-3200C15Q-64GTZ",
      "brand": "G.SKILL",
      "model": "Trident Z DDR4 3200 C15 4x16GB",
      "rank": 6,
      "benchmark": 104,
      "samples": 187,
      "url": "https://ram.userbenchmark.com/GSKILL-Trident-Z-DDR4-3200-C15-4x16GB/Rating/3613"
    },
    {
      "type": "RAM",
      "part_number": "CMD64GX4M4B3000C15",
      "brand": "Corsair",
      "model": "Dominator DDR4 3000 C15 4x16GB",
      "rank": 7,
      "benchmark": 101,
      "samples": 115,
      "url": "https://ram.userbenchmark.com/Corsair-Dominator-DDR4-3000-C15-4x16GB/Rating/3565"
    },
    {
      "type": "RAM",
      "part_number": "F4-3600C16D-16GTZ",
      "brand": "G.SKILL",
      "model": "Trident Z DDR4 3600 C16 2x8GB",
      "rank": 8,
      "benchmark": 99.1,
      "samples": 2854,
      "url": "https://ram.userbenchmark.com/GSKILL-Trident-Z-DDR4-3600-C16-2x8GB/Rating/3562"
    },
    {
      "type": "RAM",
      "part_number": "F4-3200C14D-16GFX",
      "brand": "G.SKILL",
      "model": "Flare X DDR4 3200 C14 2x8GB",
      "rank": 9,
      "benchmark": 97.5,
      "samples": 41714,
      "url": "https://ram.userbenchmark.com/SpeedTest/255366/GSKILL-F4-3200C14-8GFX-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "BLS4K4G4D240FSA",
      "brand": "Crucial",
      "model": "Ballistix Sport DDR4 2400 C16 4x4GB",
      "rank": 10,
      "benchmark": 97.2,
      "samples": 1759,
      "url": "https://ram.userbenchmark.com/Crucial-Ballistix-Sport-DDR4-2400-C16-4x4GB/Rating/3561"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M2Z3600C18",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3600 C18 2x16GB",
      "rank": 11,
      "benchmark": 95.2,
      "samples": 4530,
      "url": "https://ram.userbenchmark.com/SpeedTest/998434/Corsair-Vengeance-LPX-CMK32GX4M2Z3600C18-2x16GB"
    },
    {
      "type": "RAM",
      "part_number": "BLE2K8G4D36BEEAK",
      "brand": "Crucial",
      "model": "Ballistix Elite DDR4 3600 C16 2x8GB",
      "rank": 12,
      "benchmark": 95.2,
      "samples": 2002,
      "url": "https://ram.userbenchmark.com/SpeedTest/786050/Crucial-BLE8G4D36BEEAKM8FE1-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "F4-3600C17D-16GTZ",
      "brand": "G.SKILL",
      "model": "Trident Z DDR4 3600 C17 2x8GB",
      "rank": 13,
      "benchmark": 95.1,
      "samples": 1348,
      "url": "https://ram.userbenchmark.com/GSKILL-Trident-Z-DDR4-3600-C17-2x8GB/Rating/3563"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M4A2666C15",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2666 C15 4x8GB",
      "rank": 14,
      "benchmark": 94.9,
      "samples": 723,
      "url": "https://ram.userbenchmark.com/SpeedTest/89347/Corsair-Vengeance-LPX-CMK32GX4M4A2666C15-4x8GB"
    },
    {
      "type": "RAM",
      "part_number": "F4-3000C15Q-16GRR",
      "brand": "G.SKILL",
      "model": "Ripjaws 4 DDR4 3000 C15 4x4GB",
      "rank": 15,
      "benchmark": 94.3,
      "samples": 2761,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-4-DDR4-3000-C15-4x4GB/Rating/3540"
    },
    {
      "type": "RAM",
      "part_number": "F4-3000C15Q-16GRB",
      "brand": "G.SKILL",
      "model": "Ripjaws 4 DDR4 3000 C15 4x4GB",
      "rank": 15,
      "benchmark": 94.3,
      "samples": 2761,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-4-DDR4-3000-C15-4x4GB/Rating/3540"
    },
    {
      "type": "RAM",
      "part_number": "F4-3000C15Q-16GRK",
      "brand": "G.SKILL",
      "model": "Ripjaws 4 DDR4 3000 C15 4x4GB",
      "rank": 15,
      "benchmark": 94.3,
      "samples": 2761,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-4-DDR4-3000-C15-4x4GB/Rating/3540"
    },
    {
      "type": "RAM",
      "part_number": "HX426C15FBK4/32",
      "brand": "HyperX",
      "model": "Fury DDR4 2666 C15 4x8GB",
      "rank": 16,
      "benchmark": 92.8,
      "samples": 5488,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR4-2666-C15-4x8GB/Rating/3570"
    },
    {
      "type": "RAM",
      "part_number": "F4-3200C16Q-64GVK",
      "brand": "G.SKILL",
      "model": "Ripjaws V DDR4 3200 C16 4x16GB",
      "rank": 17,
      "benchmark": 92.6,
      "samples": 10535,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-V-DDR4-3200-C16-4x16GB/Rating/3564"
    },
    {
      "type": "RAM",
      "part_number": "F4-3600C17D-8GTZ",
      "brand": "G.SKILL",
      "model": "Trident Z DDR4 3600 C17 2x4GB",
      "rank": 18,
      "benchmark": 91.4,
      "samples": 145,
      "url": "https://ram.userbenchmark.com/GSKILL-Trident-Z-DDR4-3600-C17-2x4GB/Rating/3566"
    },
    {
      "type": "RAM",
      "part_number": "CMR16GX4M2C3466C16",
      "brand": "Corsair",
      "model": "Vengeance RGB DDR4 3466 C16 2x8GB",
      "rank": 19,
      "benchmark": 91.2,
      "samples": 3925,
      "url": "https://ram.userbenchmark.com/SpeedTest/287318/Corsair-CMR16GX4M2C3466C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "F4-2800C16Q-16GRR",
      "brand": "G.SKILL",
      "model": "Ripjaws 4 DDR4 2800 C16 4x4GB",
      "rank": 20,
      "benchmark": 91,
      "samples": 1357,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-4-DDR4-2800-C16-4x4GB/Rating/3608"
    },
    {
      "type": "RAM",
      "part_number": "F4-2800C16Q-16GRB",
      "brand": "G.SKILL",
      "model": "Ripjaws 4 DDR4 2800 C16 4x4GB",
      "rank": 20,
      "benchmark": 91,
      "samples": 1357,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-4-DDR4-2800-C16-4x4GB/Rating/3608"
    },
    {
      "type": "RAM",
      "part_number": "F4-2800C16Q-16GRK",
      "brand": "G.SKILL",
      "model": "Ripjaws 4 DDR4 2800 C16 4x4GB",
      "rank": 20,
      "benchmark": 91,
      "samples": 1357,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-4-DDR4-2800-C16-4x4GB/Rating/3608"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4B3000C15",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C15 4x4GB",
      "rank": 21,
      "benchmark": 90.7,
      "samples": 5486,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-3000-C15-4x4GB/Rating/3558"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4B3000C15B",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C15 4x4GB",
      "rank": 21,
      "benchmark": 90.7,
      "samples": 5486,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-3000-C15-4x4GB/Rating/3558"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4B3000C15R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C15 4x4GB",
      "rank": 21,
      "benchmark": 90.7,
      "samples": 5486,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-3000-C15-4x4GB/Rating/3558"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M2B3200C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3200 C16 2x16GB",
      "rank": 22,
      "benchmark": 89,
      "samples": 75572,
      "url": "https://ram.userbenchmark.com/SpeedTest/97244/Corsair-Vengeance-LPX-CMK32GX4M2B3200C16-2x16GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4A2800C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2800 C16 4x4GB",
      "rank": 23,
      "benchmark": 88.8,
      "samples": 3420,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2800-C16-4x4GB/Rating/3541"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4A2800C16B",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2800 C16 4x4GB",
      "rank": 23,
      "benchmark": 88.8,
      "samples": 3420,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2800-C16-4x4GB/Rating/3541"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4A2800C16R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2800 C16 4x4GB",
      "rank": 23,
      "benchmark": 88.8,
      "samples": 3420,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2800-C16-4x4GB/Rating/3541"
    },
    {
      "type": "RAM",
      "part_number": "CMR16GX4M2C3600C18",
      "brand": "Corsair",
      "model": "Vengeance RGB DDR4 3600 C18 2x8GB",
      "rank": 24,
      "benchmark": 88.7,
      "samples": 4158,
      "url": "https://ram.userbenchmark.com/SpeedTest/315553/Corsair-CMR16GX4M2C3600C18-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMW32GX4M2C3200C16",
      "brand": "Corsair",
      "model": "Vengeance RGB PRO DDR4 3200 C16 2x16GB",
      "rank": 25,
      "benchmark": 88.5,
      "samples": 87430,
      "url": "https://ram.userbenchmark.com/SpeedTest/587593/Corsair-CMW32GX4M2C3200C16-2x16GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4A2666C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2666 C16 4x4GB",
      "rank": 26,
      "benchmark": 88.3,
      "samples": 5358,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2666-C16-4x4GB/Rating/3557"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4A2666C16B",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2666 C16 4x4GB",
      "rank": 26,
      "benchmark": 88.3,
      "samples": 5358,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2666-C16-4x4GB/Rating/3557"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4A2666C16R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2666 C16 4x4GB",
      "rank": 26,
      "benchmark": 88.3,
      "samples": 5358,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2666-C16-4x4GB/Rating/3557"
    },
    {
      "type": "RAM",
      "part_number": "CMR32GX4M2C3000C15",
      "brand": "Corsair",
      "model": "Vengeance RGB DDR4 3000 C15 2x16GB",
      "rank": 27,
      "benchmark": 88.1,
      "samples": 787,
      "url": "https://ram.userbenchmark.com/SpeedTest/335632/Corsair-CMR32GX4M2C3000C15-2x16GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2D3600C18",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3600 C18 2x8GB",
      "rank": 28,
      "benchmark": 87.5,
      "samples": 42617,
      "url": "https://ram.userbenchmark.com/SpeedTest/808862/Corsair-Vengeance-LPX-CMK16GX4M2D3600C18-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "F4-3200C16D-16GTZB",
      "brand": "G.SKILL",
      "model": "Trident Z DDR4 3200 C16 2x8GB",
      "rank": 29,
      "benchmark": 87.4,
      "samples": 23023,
      "url": "https://ram.userbenchmark.com/GSKILL-Trident-Z-DDR4-3200-C16-2x8GB/Rating/3550"
    },
    {
      "type": "RAM",
      "part_number": "CMR16GX4M2C3200C16",
      "brand": "Corsair",
      "model": "Vengeance RGB DDR4 3200 C16 2x8GB",
      "rank": 30,
      "benchmark": 86.8,
      "samples": 11763,
      "url": "https://ram.userbenchmark.com/SpeedTest/298180/Corsair-CMR16GX4M2C3200C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "F4-3200C16D-16GTZR",
      "brand": "G.SKILL",
      "model": "Trident Z RGB DDR4 3200 C16 2x8GB",
      "rank": 31,
      "benchmark": 86.4,
      "samples": 180954,
      "url": "https://ram.userbenchmark.com/SpeedTest/231020/GSKILL-F4-3200C16-8GTZR-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M4A2666C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2666 C16 4x8GB",
      "rank": 32,
      "benchmark": 86.4,
      "samples": 6656,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2666-C16-4x8GB/Rating/3586"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M4A2666C16B",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2666 C16 4x8GB",
      "rank": 32,
      "benchmark": 86.4,
      "samples": 6656,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2666-C16-4x8GB/Rating/3586"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M4A2666C16R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2666 C16 4x8GB",
      "rank": 32,
      "benchmark": 86.4,
      "samples": 6656,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2666-C16-4x8GB/Rating/3586"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M4A2400C14",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C14 4x8GB",
      "rank": 33,
      "benchmark": 86.2,
      "samples": 3914,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2400-C14-4x8GB/Rating/3542"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M4A2400C14B",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C14 4x8GB",
      "rank": 33,
      "benchmark": 86.2,
      "samples": 3914,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2400-C14-4x8GB/Rating/3542"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M4A2400C14R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C14 4x8GB",
      "rank": 33,
      "benchmark": 86.2,
      "samples": 3914,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2400-C14-4x8GB/Rating/3542"
    },
    {
      "type": "RAM",
      "part_number": "F4-3200C16D-16GVKB",
      "brand": "G.SKILL",
      "model": "Ripjaws V DDR4 3200 C16 2x8GB",
      "rank": 34,
      "benchmark": 85.7,
      "samples": 223128,
      "url": "https://ram.userbenchmark.com/SpeedTest/89324/GSKILL-F4-3200C16-8GVKB-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M2B3000C15",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C15 2x16GB",
      "rank": 35,
      "benchmark": 85.4,
      "samples": 25564,
      "url": "https://ram.userbenchmark.com/SpeedTest/92054/Corsair-Vengeance-LPX-CMK32GX4M2B3000C15-2x16GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M4A2400C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C16 4x8GB",
      "rank": 36,
      "benchmark": 85.3,
      "samples": 1238,
      "url": "https://ram.userbenchmark.com/SpeedTest/108268/Corsair-Vengeance-LPX-CMK32GX4M4A2400C16-4x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMU16GX4M2C3200C16",
      "brand": "Corsair",
      "model": "Vengeance LED DDR4 3200 C16 2x8GB",
      "rank": 37,
      "benchmark": 85,
      "samples": 28633,
      "url": "https://ram.userbenchmark.com/SpeedTest/155727/Corsair-CMU16GX4M2C3200C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMU16GX4M2C3200C16B",
      "brand": "Corsair",
      "model": "Vengeance LED DDR4 3200 C16 2x8GB",
      "rank": 37,
      "benchmark": 85,
      "samples": 28633,
      "url": "https://ram.userbenchmark.com/SpeedTest/155727/Corsair-CMU16GX4M2C3200C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMU16GX4M2C3200C16R",
      "brand": "Corsair",
      "model": "Vengeance LED DDR4 3200 C16 2x8GB",
      "rank": 37,
      "benchmark": 85,
      "samples": 28633,
      "url": "https://ram.userbenchmark.com/SpeedTest/155727/Corsair-CMU16GX4M2C3200C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX426C15FBK2/16",
      "brand": "HyperX",
      "model": "Fury DDR4 2666 C15 2x8GB",
      "rank": 38,
      "benchmark": 84.8,
      "samples": 27908,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR4-2666-C15-2x8GB/Rating/3553"
    },
    {
      "type": "RAM",
      "part_number": "F4-3000C15D-16GTZB",
      "brand": "G.SKILL",
      "model": "Trident Z DDR4 3000 C15 2x8GB",
      "rank": 39,
      "benchmark": 84.8,
      "samples": 5395,
      "url": "https://ram.userbenchmark.com/GSKILL-Trident-Z-DDR4-3000-C15-2x8GB/Rating/3548"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2B3200C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3200 C16 2x8GB",
      "rank": 40,
      "benchmark": 84.7,
      "samples": 428794,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-3200-C16-2x8GB/Rating/3547"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2B3200C16R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3200 C16 2x8GB",
      "rank": 40,
      "benchmark": 84.7,
      "samples": 428794,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-3200-C16-2x8GB/Rating/3547"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4A2400C14",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C14 4x4GB",
      "rank": 41,
      "benchmark": 84.5,
      "samples": 3471,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2400-C14-4x4GB/Rating/3533"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4A2400C14B",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C14 4x4GB",
      "rank": 41,
      "benchmark": 84.5,
      "samples": 3471,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2400-C14-4x4GB/Rating/3533"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4A2400C14R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C14 4x4GB",
      "rank": 41,
      "benchmark": 84.5,
      "samples": 3471,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2400-C14-4x4GB/Rating/3533"
    },
    {
      "type": "RAM",
      "part_number": "CMD16GX4M2B3000C15",
      "brand": "Corsair",
      "model": "Dominator DDR4 3000 C15 2x8GB",
      "rank": 42,
      "benchmark": 83.3,
      "samples": 11225,
      "url": "https://ram.userbenchmark.com/Corsair-Dominator-DDR4-3000-C15-2x8GB/Rating/3597"
    },
    {
      "type": "RAM",
      "part_number": "HX426C15FBK2/8",
      "brand": "HyperX",
      "model": "Fury DDR4 2666 C15 2x4GB",
      "rank": 43,
      "benchmark": 83.2,
      "samples": 26384,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR4-2666-C15-2x4GB/Rating/3556"
    },
    {
      "type": "RAM",
      "part_number": "HX426C13PB3K2/16",
      "brand": "HyperX",
      "model": "Predator 2666 C13 2x8GB",
      "rank": 44,
      "benchmark": 82.7,
      "samples": 5439,
      "url": "https://ram.userbenchmark.com/SpeedTest/318273/Kingston-KHX2666C138GX-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMR16GX4M2C3000C15",
      "brand": "Corsair",
      "model": "Vengeance RGB DDR4 3000 C15 2x8GB",
      "rank": 45,
      "benchmark": 82.6,
      "samples": 30986,
      "url": "https://ram.userbenchmark.com/SpeedTest/258851/Corsair-CMR16GX4M2C3000C15-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2B3000C15",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C15 2x8GB",
      "rank": 46,
      "benchmark": 82.5,
      "samples": 477663,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-3000-C15-2x8GB/Rating/3546"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2B3000C15B",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C15 2x8GB",
      "rank": 46,
      "benchmark": 82.5,
      "samples": 477663,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-3000-C15-2x8GB/Rating/3546"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2B3000C15R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C15 2x8GB",
      "rank": 46,
      "benchmark": 82.5,
      "samples": 477663,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-3000-C15-2x8GB/Rating/3546"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2B3000C15W",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C15 2x8GB",
      "rank": 46,
      "benchmark": 82.5,
      "samples": 477663,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-3000-C15-2x8GB/Rating/3546"
    },
    {
      "type": "RAM",
      "part_number": "CMR16GX4M2D3000C16",
      "brand": "Corsair",
      "model": "Vengeance RGB DDR4 3000 C16 2x8GB",
      "rank": 47,
      "benchmark": 82.1,
      "samples": 6486,
      "url": "https://ram.userbenchmark.com/SpeedTest/465040/Corsair-CMR16GX4M2D3000C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMZ64GX3M8A1600C9",
      "brand": "Corsair",
      "model": "Vengeance DDR3 1600 C9 8x8GB",
      "rank": 48,
      "benchmark": 82,
      "samples": 84,
      "url": "https://ram.userbenchmark.com/SpeedTest/100478/Corsair-Vengeance-CMZ64GX3M8A1600C9-8x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX424C15FBK4/16",
      "brand": "HyperX",
      "model": "Fury DDR4 2400 C15 4x4GB",
      "rank": 49,
      "benchmark": 81.7,
      "samples": 10202,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR4-2400-C15-4x4GB/Rating/3585"
    },
    {
      "type": "RAM",
      "part_number": "CMW16GX4M2C3000C15",
      "brand": "Corsair",
      "model": "Vengeance RGB PRO DDR4 3200 C15 2x8GB",
      "rank": 50,
      "benchmark": 81.7,
      "samples": 72759,
      "url": "https://ram.userbenchmark.com/SpeedTest/523893/Corsair-CMW16GX4M2C3000C15-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX421C14FBK4/32",
      "brand": "HyperX",
      "model": "Fury DDR4 2133 C14 4x8GB",
      "rank": 51,
      "benchmark": 81.5,
      "samples": 4654,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR4-2133-C14-4x8GB/Rating/3569"
    },
    {
      "type": "RAM",
      "part_number": "F4-3000C16D-16GTZR",
      "brand": "G.SKILL",
      "model": "Trident Z RGB DDR4 3000 C16 2x8GB",
      "rank": 52,
      "benchmark": 81.3,
      "samples": 63909,
      "url": "https://ram.userbenchmark.com/SpeedTest/236585/GSKILL-F4-3000C16-8GTZR-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMU16GX4M2C3000C15",
      "brand": "Corsair",
      "model": "Vengeance LED DDR4 3000 C15 2x8GB",
      "rank": 53,
      "benchmark": 81.1,
      "samples": 39211,
      "url": "https://ram.userbenchmark.com/SpeedTest/156965/Corsair-CMU16GX4M2C3000C15-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMU16GX4M2C3000C15B",
      "brand": "Corsair",
      "model": "Vengeance LED DDR4 3000 C15 2x8GB",
      "rank": 53,
      "benchmark": 81.1,
      "samples": 39211,
      "url": "https://ram.userbenchmark.com/SpeedTest/156965/Corsair-CMU16GX4M2C3000C15-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMU16GX4M2C3000C15R",
      "brand": "Corsair",
      "model": "Vengeance LED DDR4 3000 C15 2x8GB",
      "rank": 53,
      "benchmark": 81.1,
      "samples": 39211,
      "url": "https://ram.userbenchmark.com/SpeedTest/156965/Corsair-CMU16GX4M2C3000C15-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK8GX4M2B3000C15",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C15 2x4GB",
      "rank": 54,
      "benchmark": 81,
      "samples": 21590,
      "url": "https://ram.userbenchmark.com/SpeedTest/90523/Corsair-Vengeance-LPX-CMK8GX4M2B3000C15-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M4A2400C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C16 4x4GB",
      "rank": 55,
      "benchmark": 80.7,
      "samples": 441,
      "url": "https://ram.userbenchmark.com/SpeedTest/89553/Corsair-Vengeance-LPX-CMK16GX4M4A2400C16-4x4GB"
    },
    {
      "type": "RAM",
      "part_number": "HX426C16FB2K2/16",
      "brand": "HyperX",
      "model": "Fury 2666 C16 2x8GB",
      "rank": 56,
      "benchmark": 80.6,
      "samples": 105574,
      "url": "https://ram.userbenchmark.com/SpeedTest/272118/Kingston-KHX2666C168G-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX426C16FW2K2/16",
      "brand": "HyperX",
      "model": "Fury 2666 C16 2x8GB",
      "rank": 56,
      "benchmark": 80.6,
      "samples": 105574,
      "url": "https://ram.userbenchmark.com/SpeedTest/272118/Kingston-KHX2666C168G-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX426C16FR2K2/16",
      "brand": "HyperX",
      "model": "Fury 2666 C16 2x8GB",
      "rank": 56,
      "benchmark": 80.6,
      "samples": 105574,
      "url": "https://ram.userbenchmark.com/SpeedTest/272118/Kingston-KHX2666C168G-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2C3000C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C16 2x8GB",
      "rank": 57,
      "benchmark": 80.4,
      "samples": 4010,
      "url": "https://ram.userbenchmark.com/SpeedTest/337520/Corsair-Vengeance-LPX-CMK16GX4M2C3000C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2C3000C16B",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C16 2x8GB",
      "rank": 57,
      "benchmark": 80.4,
      "samples": 4010,
      "url": "https://ram.userbenchmark.com/SpeedTest/337520/Corsair-Vengeance-LPX-CMK16GX4M2C3000C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2C3000C16R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C16 2x8GB",
      "rank": 57,
      "benchmark": 80.4,
      "samples": 4010,
      "url": "https://ram.userbenchmark.com/SpeedTest/337520/Corsair-Vengeance-LPX-CMK16GX4M2C3000C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2C3000C16W",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 3000 C16 2x8GB",
      "rank": 57,
      "benchmark": 80.4,
      "samples": 4010,
      "url": "https://ram.userbenchmark.com/SpeedTest/337520/Corsair-Vengeance-LPX-CMK16GX4M2C3000C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "BLS4K8G4D240FSB",
      "brand": "Crucial",
      "model": "Ballistix Sport LT DDR4 2400 C16 4x8GB",
      "rank": 58,
      "benchmark": 79.6,
      "samples": 571,
      "url": "https://ram.userbenchmark.com/Crucial-Ballistix-Sport-LT-DDR4-2400-C16-4x8GB/Rating/3637"
    },
    {
      "type": "RAM",
      "part_number": "BLS4K8G4D240FSC",
      "brand": "Crucial",
      "model": "Ballistix Sport LT DDR4 2400 C16 4x8GB",
      "rank": 58,
      "benchmark": 79.6,
      "samples": 571,
      "url": "https://ram.userbenchmark.com/Crucial-Ballistix-Sport-LT-DDR4-2400-C16-4x8GB/Rating/3637"
    },
    {
      "type": "RAM",
      "part_number": "BLS4K8G4D240FSE",
      "brand": "Crucial",
      "model": "Ballistix Sport LT DDR4 2400 C16 4x8GB",
      "rank": 58,
      "benchmark": 79.6,
      "samples": 571,
      "url": "https://ram.userbenchmark.com/Crucial-Ballistix-Sport-LT-DDR4-2400-C16-4x8GB/Rating/3637"
    },
    {
      "type": "RAM",
      "part_number": "HX424C15FBK2/16",
      "brand": "HyperX",
      "model": "Fury DDR4 2400 C15 2x8GB",
      "rank": 59,
      "benchmark": 78,
      "samples": 17559,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR4-2400-C15-2x8GB/Rating/3587"
    },
    {
      "type": "RAM",
      "part_number": "F4-2400C15Q-32GVR",
      "brand": "G.SKILL",
      "model": "Ripjaws V DDR4 2400 C15 4x8GB",
      "rank": 60,
      "benchmark": 77.2,
      "samples": 5376,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-V-DDR4-2400-C15-4x8GB/Rating/3568"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2A2666C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2666 C16 2x8GB",
      "rank": 61,
      "benchmark": 77,
      "samples": 96273,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2666-C16-2x8GB/Rating/3545"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2A2666C16R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2666 C16 2x8GB",
      "rank": 61,
      "benchmark": 77,
      "samples": 96273,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2666-C16-2x8GB/Rating/3545"
    },
    {
      "type": "RAM",
      "part_number": "CMK8GX4M2A2666C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2666 C16 2x4GB",
      "rank": 62,
      "benchmark": 76.9,
      "samples": 14656,
      "url": "https://ram.userbenchmark.com/SpeedTest/90467/Corsair-Vengeance-LPX-CMK8GX4M2A2666C16-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "BLS2K8G4D240FSB",
      "brand": "Crucial",
      "model": "Ballistix Sport LT DDR4 2400 C16 2x8GB",
      "rank": 63,
      "benchmark": 76.5,
      "samples": 7132,
      "url": "https://ram.userbenchmark.com/Crucial-Ballistix-Sport-LT-DDR4-2400-C16-2x8GB/Rating/3638"
    },
    {
      "type": "RAM",
      "part_number": "BLS2K8G4D240FSC",
      "brand": "Crucial",
      "model": "Ballistix Sport LT DDR4 2400 C16 2x8GB",
      "rank": 63,
      "benchmark": 76.5,
      "samples": 7132,
      "url": "https://ram.userbenchmark.com/Crucial-Ballistix-Sport-LT-DDR4-2400-C16-2x8GB/Rating/3638"
    },
    {
      "type": "RAM",
      "part_number": "BLS2K8G4D240FSE",
      "brand": "Crucial",
      "model": "Ballistix Sport LT DDR4 2400 C16 2x8GB",
      "rank": 63,
      "benchmark": 76.5,
      "samples": 7132,
      "url": "https://ram.userbenchmark.com/Crucial-Ballistix-Sport-LT-DDR4-2400-C16-2x8GB/Rating/3638"
    },
    {
      "type": "RAM",
      "part_number": "BLS2K8G4D240FSA",
      "brand": "Crucial",
      "model": "Ballistix Sport DDR4 2400 C16 2x8GB",
      "rank": 64,
      "benchmark": 76,
      "samples": 3292,
      "url": "https://ram.userbenchmark.com/Crucial-Ballistix-Sport-DDR4-2400-C16-2x8GB/Rating/3611"
    },
    {
      "type": "RAM",
      "part_number": "CMR16GX4M2A2666C16",
      "brand": "Corsair",
      "model": "Vengeance RGB DDR4 2666 C16 2x8GB",
      "rank": 65,
      "benchmark": 75.8,
      "samples": 8125,
      "url": "https://ram.userbenchmark.com/SpeedTest/282283/Corsair-CMR16GX4M2A2666C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M2A2400C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C16 2x16GB",
      "rank": 66,
      "benchmark": 75.7,
      "samples": 6329,
      "url": "https://ram.userbenchmark.com/SpeedTest/131225/Corsair-Vengeance-LPX-CMK32GX4M2A2400C16-2x16GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK32GX4M2A2666C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2666 C16 2x16GB",
      "rank": 67,
      "benchmark": 75.5,
      "samples": 19129,
      "url": "https://ram.userbenchmark.com/SpeedTest/92488/Corsair-Vengeance-LPX-CMK32GX4M2A2666C16-2x16GB"
    },
    {
      "type": "RAM",
      "part_number": "CMU16GX4M2A2666C16",
      "brand": "Corsair",
      "model": "Vengeance LED DDR4 2666 C16 2x8GB",
      "rank": 68,
      "benchmark": 74.9,
      "samples": 11570,
      "url": "https://ram.userbenchmark.com/SpeedTest/152975/Corsair-CMU16GX4M2A2666C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMU16GX4M2A2666C16B",
      "brand": "Corsair",
      "model": "Vengeance LED DDR4 2666 C16 2x8GB",
      "rank": 68,
      "benchmark": 74.9,
      "samples": 11570,
      "url": "https://ram.userbenchmark.com/SpeedTest/152975/Corsair-CMU16GX4M2A2666C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMU16GX4M2A2666C16R",
      "brand": "Corsair",
      "model": "Vengeance LED DDR4 2666 C16 2x8GB",
      "rank": 68,
      "benchmark": 74.9,
      "samples": 11570,
      "url": "https://ram.userbenchmark.com/SpeedTest/152975/Corsair-CMU16GX4M2A2666C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2A2400C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C16 2x8GB",
      "rank": 69,
      "benchmark": 74.8,
      "samples": 86008,
      "url": "https://ram.userbenchmark.com/SpeedTest/92730/Corsair-Vengeance-LPX-CMK16GX4M2A2400C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK8GX4M2A2400C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C16 2x4GB",
      "rank": 70,
      "benchmark": 74.2,
      "samples": 7181,
      "url": "https://ram.userbenchmark.com/SpeedTest/105361/Corsair-Vengeance-LPX-CMK8GX4M2A2400C16-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "CMU16GX4M2A2400C16",
      "brand": "Corsair",
      "model": "Vengeance LED DDR4 2400 C16 2x8GB",
      "rank": 71,
      "benchmark": 73.3,
      "samples": 2590,
      "url": "https://ram.userbenchmark.com/SpeedTest/293029/Corsair-CMU16GX4M2A2400C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMU16GX4M2A2400C16B",
      "brand": "Corsair",
      "model": "Vengeance LED DDR4 2400 C16 2x8GB",
      "rank": 71,
      "benchmark": 73.3,
      "samples": 2590,
      "url": "https://ram.userbenchmark.com/SpeedTest/293029/Corsair-CMU16GX4M2A2400C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMU16GX4M2A2400C16R",
      "brand": "Corsair",
      "model": "Vengeance LED DDR4 2400 C16 2x8GB",
      "rank": 71,
      "benchmark": 73.3,
      "samples": 2590,
      "url": "https://ram.userbenchmark.com/SpeedTest/293029/Corsair-CMU16GX4M2A2400C16-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "F4-2400C15D-8GVR",
      "brand": "G.SKILL",
      "model": "Ripjaws V DDR4 2400 C15 2x4GB",
      "rank": 72,
      "benchmark": 72.9,
      "samples": 15969,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-V-DDR4-2400-C15-2x4GB/Rating/3559"
    },
    {
      "type": "RAM",
      "part_number": "F4-2400C15D-16GRR",
      "brand": "G.SKILL",
      "model": "Ripjaws 4 DDR4 2400 C15 2x8GB",
      "rank": 73,
      "benchmark": 72.5,
      "samples": 5003,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-4-DDR4-2400-C15-2x8GB/Rating/3551"
    },
    {
      "type": "RAM",
      "part_number": "F3-2400C10Q-32GTX",
      "brand": "G.SKILL",
      "model": "TridentX DDR3 2400 C10 4x8GB",
      "rank": 74,
      "benchmark": 72.4,
      "samples": 4606,
      "url": "https://ram.userbenchmark.com/SpeedTest/89345/GSKILL-F3-2400C10-8GTX-4x8GB"
    },
    {
      "type": "RAM",
      "part_number": "F4-2400C15D-16GVR",
      "brand": "G.SKILL",
      "model": "Ripjaws V DDR4 2400 C15 2x8GB",
      "rank": 75,
      "benchmark": 72.3,
      "samples": 81633,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-V-DDR4-2400-C15-2x8GB/Rating/3549"
    },
    {
      "type": "RAM",
      "part_number": "F4-2400C15D-16GVB",
      "brand": "G.SKILL",
      "model": "Ripjaws V DDR4 2400 C15 2x8GB",
      "rank": 75,
      "benchmark": 72.3,
      "samples": 81633,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-V-DDR4-2400-C15-2x8GB/Rating/3549"
    },
    {
      "type": "RAM",
      "part_number": "F4-2400C15D-16GVK",
      "brand": "G.SKILL",
      "model": "Ripjaws V DDR4 2400 C15 2x8GB",
      "rank": 75,
      "benchmark": 72.3,
      "samples": 81633,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-V-DDR4-2400-C15-2x8GB/Rating/3549"
    },
    {
      "type": "RAM",
      "part_number": "F4-2400C15D-16GVS",
      "brand": "G.SKILL",
      "model": "Ripjaws V DDR4 2400 C15 2x8GB",
      "rank": 75,
      "benchmark": 72.3,
      "samples": 81633,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-V-DDR4-2400-C15-2x8GB/Rating/3549"
    },
    {
      "type": "RAM",
      "part_number": "F4-2400C15D-16GVG",
      "brand": "G.SKILL",
      "model": "Ripjaws V DDR4 2400 C15 2x8GB",
      "rank": 75,
      "benchmark": 72.3,
      "samples": 81633,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-V-DDR4-2400-C15-2x8GB/Rating/3549"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2A2400C14",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C14 2x8GB",
      "rank": 76,
      "benchmark": 72,
      "samples": 54372,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2400-C14-2x8GB/Rating/3544"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2A2400C14R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C14 2x8GB",
      "rank": 76,
      "benchmark": 72,
      "samples": 54372,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2400-C14-2x8GB/Rating/3544"
    },
    {
      "type": "RAM",
      "part_number": "HX421C14FBK2/16",
      "brand": "HyperX",
      "model": "Fury DDR4 2133 C14 2x8GB",
      "rank": 77,
      "benchmark": 71.7,
      "samples": 53907,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR4-2133-C14-2x8GB/Rating/3552"
    },
    {
      "type": "RAM",
      "part_number": "HX421C14FB2K2/16",
      "brand": "HyperX",
      "model": "Fury DDR4 2133 C14 2x8GB",
      "rank": 77,
      "benchmark": 71.7,
      "samples": 53907,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR4-2133-C14-2x8GB/Rating/3552"
    },
    {
      "type": "RAM",
      "part_number": "CMK8GX4M2A2400C14",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C14 2x4GB",
      "rank": 78,
      "benchmark": 70.9,
      "samples": 14250,
      "url": "https://ram.userbenchmark.com/SpeedTest/89740/Corsair-Vengeance-LPX-CMK8GX4M2A2400C14-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "F4-2133C15D-32GVR",
      "brand": "G.SKILL",
      "model": "Ripjaws V DDR4 2133 C15 2x16GB",
      "rank": 79,
      "benchmark": 70.7,
      "samples": 2130,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-V-DDR4-2133-C15-2x16GB/Rating/3633"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2A2133C13",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2133 C13 2x8GB",
      "rank": 80,
      "benchmark": 69.9,
      "samples": 40287,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2133-C13-2x8GB/Rating/3543"
    },
    {
      "type": "RAM",
      "part_number": "CMK16GX4M2A2133C13R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2133 C13 2x8GB",
      "rank": 80,
      "benchmark": 69.9,
      "samples": 40287,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2133-C13-2x8GB/Rating/3543"
    },
    {
      "type": "RAM",
      "part_number": "HX421C14FBK2/8",
      "brand": "HyperX",
      "model": "Fury DDR4 2133 C14 2x4GB",
      "rank": 81,
      "benchmark": 69.4,
      "samples": 40549,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR4-2133-C14-2x4GB/Rating/3554"
    },
    {
      "type": "RAM",
      "part_number": "F4-2133C15D-8GVR",
      "brand": "G.SKILL",
      "model": "Ripjaws V DDR4 2133 C15 2x4GB",
      "rank": 82,
      "benchmark": 69.2,
      "samples": 6908,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-V-DDR4-2133-C15-2x4GB/Rating/3560"
    },
    {
      "type": "RAM",
      "part_number": "F4-2133C15D-16GVB",
      "brand": "G.SKILL",
      "model": "Ripjaws V DDR4 2133 C15 2x8GB",
      "rank": 83,
      "benchmark": 68,
      "samples": 14079,
      "url": "https://ram.userbenchmark.com/GSKILL-Ripjaws-V-DDR4-2133-C15-2x8GB/Rating/3632"
    },
    {
      "type": "RAM",
      "part_number": "BLS2K4G4D240FSA",
      "brand": "Crucial",
      "model": "Ballistix Sport DDR4 2400 C16 2x4GB",
      "rank": 84,
      "benchmark": 67.8,
      "samples": 780,
      "url": "https://ram.userbenchmark.com/Crucial-Ballistix-Sport-DDR4-2400-C16-2x4GB/Rating/3601"
    },
    {
      "type": "RAM",
      "part_number": "F3-2400C10D-16GTX",
      "brand": "G.SKILL",
      "model": "TridentX DDR3 2400 C10 2x8GB",
      "rank": 85,
      "benchmark": 65.9,
      "samples": 20385,
      "url": "https://ram.userbenchmark.com/SpeedTest/89322/GSKILL-F3-2400C10-8GTX-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX324C11SRK2/16",
      "brand": "HyperX",
      "model": "Savage DDR3 2400 C11 2x8GB",
      "rank": 86,
      "benchmark": 64.4,
      "samples": 16678,
      "url": "https://ram.userbenchmark.com/SpeedTest/43621/Kingston-KHX2400C11D38GX-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMY16GX3M2A2400C11",
      "brand": "Corsair",
      "model": "Vengeance Pro DDR3 2400 C11 2x8GB",
      "rank": 87,
      "benchmark": 60.7,
      "samples": 36821,
      "url": "https://ram.userbenchmark.com/SpeedTest/89568/Corsair-Vengeance-Pro-CMY16GX3M2A2400C11-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX318C10FK2/16",
      "brand": "HyperX",
      "model": "Fury DDR3 1866 C10 2x8GB",
      "rank": 88,
      "benchmark": 58.8,
      "samples": 89078,
      "url": "https://ram.userbenchmark.com/SpeedTest/42962/Kingston-KHX1866C10D38G-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX318C10FBK2/16",
      "brand": "HyperX",
      "model": "Fury DDR3 1866 C10 2x8GB",
      "rank": 88,
      "benchmark": 58.8,
      "samples": 89078,
      "url": "https://ram.userbenchmark.com/SpeedTest/42962/Kingston-KHX1866C10D38G-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX318C10FRK2/16",
      "brand": "HyperX",
      "model": "Fury DDR3 1866 C10 2x8GB",
      "rank": 88,
      "benchmark": 58.8,
      "samples": 89078,
      "url": "https://ram.userbenchmark.com/SpeedTest/42962/Kingston-KHX1866C10D38G-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX318C10FWK2/16",
      "brand": "HyperX",
      "model": "Fury DDR3 1866 C10 2x8GB",
      "rank": 88,
      "benchmark": 58.8,
      "samples": 89078,
      "url": "https://ram.userbenchmark.com/SpeedTest/42962/Kingston-KHX1866C10D38G-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "BLS2KIT4G3D1609DS1S00",
      "brand": "Crucial",
      "model": "Ballistix Sport DDR3 1600 C9 2x4GB",
      "rank": 89,
      "benchmark": 55.6,
      "samples": 42805,
      "url": "https://ram.userbenchmark.com/SpeedTest/50785/Crucial-BLS4G3D1609DS1S00-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "BLS2CP4G3D1609DS1S00CEU",
      "brand": "Crucial",
      "model": "Ballistix Sport DDR3 1600 C9 2x4GB",
      "rank": 89,
      "benchmark": 55.6,
      "samples": 42805,
      "url": "https://ram.userbenchmark.com/SpeedTest/50785/Crucial-BLS4G3D1609DS1S00-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "HX316C10FK2/16",
      "brand": "HyperX",
      "model": "Fury DDR3 1600 C10 2x8GB",
      "rank": 90,
      "benchmark": 54.7,
      "samples": 68596,
      "url": "https://ram.userbenchmark.com/SpeedTest/42910/Kingston-KHX1600C10D38G-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX316C10FBK2/16",
      "brand": "HyperX",
      "model": "Fury DDR3 1600 C10 2x8GB",
      "rank": 90,
      "benchmark": 54.7,
      "samples": 68596,
      "url": "https://ram.userbenchmark.com/SpeedTest/42910/Kingston-KHX1600C10D38G-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX316C10FRK2/16",
      "brand": "HyperX",
      "model": "Fury DDR3 1600 C10 2x8GB",
      "rank": 90,
      "benchmark": 54.7,
      "samples": 68596,
      "url": "https://ram.userbenchmark.com/SpeedTest/42910/Kingston-KHX1600C10D38G-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX316C10FWK2/16",
      "brand": "HyperX",
      "model": "Fury DDR3 1600 C10 2x8GB",
      "rank": 90,
      "benchmark": 54.7,
      "samples": 68596,
      "url": "https://ram.userbenchmark.com/SpeedTest/42910/Kingston-KHX1600C10D38G-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "F3-14900CL10D-16GBXL",
      "brand": "G.SKILL",
      "model": "RipjawsX DDR3 1866 C10 2x8GB",
      "rank": 91,
      "benchmark": 52.7,
      "samples": 8064,
      "url": "https://ram.userbenchmark.com/SpeedTest/89210/GSKILL-F3-14900CL10-8GBXL-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "F3-12800CL9D-8GBXL",
      "brand": "G.SKILL",
      "model": "RipjawsX DDR3 1600 C9 2x4GB",
      "rank": 92,
      "benchmark": 52.5,
      "samples": 43848,
      "url": "https://ram.userbenchmark.com/SpeedTest/89321/GSKILL-F3-12800CL9-4GBXL-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "HX316C10FK2/8",
      "brand": "HyperX",
      "model": "Fury DDR3 1600 C10 2x4GB",
      "rank": 93,
      "benchmark": 52.1,
      "samples": 21281,
      "url": "https://ram.userbenchmark.com/SpeedTest/42917/Kingston-KHX1600C10D38G-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "HX316C10FBK2/8",
      "brand": "HyperX",
      "model": "Fury DDR3 1600 C10 2x4GB",
      "rank": 93,
      "benchmark": 52.1,
      "samples": 21281,
      "url": "https://ram.userbenchmark.com/SpeedTest/42917/Kingston-KHX1600C10D38G-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "HX316C10FRK2/8",
      "brand": "HyperX",
      "model": "Fury DDR3 1600 C10 2x4GB",
      "rank": 93,
      "benchmark": 52.1,
      "samples": 21281,
      "url": "https://ram.userbenchmark.com/SpeedTest/42917/Kingston-KHX1600C10D38G-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "HX316C10FWK2/8",
      "brand": "HyperX",
      "model": "Fury DDR3 1600 C10 2x4GB",
      "rank": 93,
      "benchmark": 52.1,
      "samples": 21281,
      "url": "https://ram.userbenchmark.com/SpeedTest/42917/Kingston-KHX1600C10D38G-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "F3-12800CL10Q-32GBXL",
      "brand": "G.SKILL",
      "model": "RipjawsX DDR3 1600 C10 4x8GB",
      "rank": 94,
      "benchmark": 52,
      "samples": 3248,
      "url": "https://ram.userbenchmark.com/SpeedTest/90320/GSKILL-F3-12800CL10-8GBXL-4x8GB"
    },
    {
      "type": "RAM",
      "part_number": "HX316C9SRK2/8",
      "brand": "HyperX",
      "model": "Savage DDR3 1600 C9 2x4GB",
      "rank": 95,
      "benchmark": 50.8,
      "samples": 69070,
      "url": "https://ram.userbenchmark.com/SpeedTest/43139/Kingston-KHX1600C9D34GX-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "HX318C10FK2/8",
      "brand": "HyperX",
      "model": "Fury DDR3 1866 C10 2x4GB",
      "rank": 96,
      "benchmark": 50.2,
      "samples": 34339,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR3-1866-C10-2x4GB/Rating/3588"
    },
    {
      "type": "RAM",
      "part_number": "HX318C10FBK2/8",
      "brand": "HyperX",
      "model": "Fury DDR3 1866 C10 2x4GB",
      "rank": 96,
      "benchmark": 50.2,
      "samples": 34339,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR3-1866-C10-2x4GB/Rating/3588"
    },
    {
      "type": "RAM",
      "part_number": "HX318C10FRK2/8",
      "brand": "HyperX",
      "model": "Fury DDR3 1866 C10 2x4GB",
      "rank": 96,
      "benchmark": 50.2,
      "samples": 34339,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR3-1866-C10-2x4GB/Rating/3588"
    },
    {
      "type": "RAM",
      "part_number": "HX318C10FWK2/8",
      "brand": "HyperX",
      "model": "Fury DDR3 1866 C10 2x4GB",
      "rank": 96,
      "benchmark": 50.2,
      "samples": 34339,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR3-1866-C10-2x4GB/Rating/3588"
    },
    {
      "type": "RAM",
      "part_number": "CMX8GX3M2A1600C9",
      "brand": "Corsair",
      "model": "XMS3 DDR3 1600 C9 2x4GB",
      "rank": 97,
      "benchmark": 49.8,
      "samples": 8883,
      "url": "https://ram.userbenchmark.com/SpeedTest/89663/Corsair-XMS3-CMX8GX3M2A1600C9-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "F3-12800CL10D-16GBXL",
      "brand": "G.SKILL",
      "model": "RipjawsX DDR3 1600 C10 2x8GB",
      "rank": 98,
      "benchmark": 49,
      "samples": 23098,
      "url": "https://ram.userbenchmark.com/SpeedTest/89329/GSKILL-F3-12800CL10-8GBXL-2x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CMZ8GX3M2A1600C9",
      "brand": "Corsair",
      "model": "Vengeance DDR3 1600 C9 2x4GB",
      "rank": 99,
      "benchmark": 47.8,
      "samples": 63678,
      "url": "https://ram.userbenchmark.com/SpeedTest/89203/Corsair-Vengeance-CMZ8GX3M2A1600C9-2x4GB"
    },
    {
      "type": "RAM",
      "part_number": "BLS8G4D26BFSB",
      "brand": "Crucial",
      "model": "Ballistix Sport LT DDR4 2666 C16 1x8GB",
      "rank": 100,
      "benchmark": 46.7,
      "samples": 1309,
      "url": "https://ram.userbenchmark.com/SpeedTest/321149/Crucial-BLS8G4D26BFSC16FBD2-1x8GB"
    },
    {
      "type": "RAM",
      "part_number": "BLS8G4D26BFSC",
      "brand": "Crucial",
      "model": "Ballistix Sport LT DDR4 2666 C16 1x8GB",
      "rank": 100,
      "benchmark": 46.7,
      "samples": 1309,
      "url": "https://ram.userbenchmark.com/SpeedTest/321149/Crucial-BLS8G4D26BFSC16FBD2-1x8GB"
    },
    {
      "type": "RAM",
      "part_number": "BLS8G4D26BFSE",
      "brand": "Crucial",
      "model": "Ballistix Sport LT DDR4 2666 C16 1x8GB",
      "rank": 100,
      "benchmark": 46.7,
      "samples": 1309,
      "url": "https://ram.userbenchmark.com/SpeedTest/321149/Crucial-BLS8G4D26BFSC16FBD2-1x8GB"
    },
    {
      "type": "RAM",
      "part_number": "BLS8G4D240FSB",
      "brand": "Crucial",
      "model": "Ballistix Sport LT DDR4 2400 C16 1x8GB",
      "rank": 101,
      "benchmark": 42.7,
      "samples": 17722,
      "url": "https://ram.userbenchmark.com/SpeedTest/142440/Crucial-BLS8G4D240FSB16FBD-1x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CT8G4DFD824A",
      "brand": "Crucial",
      "model": "UDIMM DDR4 2400 C16 1x8GB",
      "rank": 102,
      "benchmark": 41.8,
      "samples": 3257,
      "url": "https://ram.userbenchmark.com/SpeedTest/358525/Crucial-CT8G4DFD824AC16FHP-1x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CT16G4DFD824A",
      "brand": "Crucial",
      "model": "UDIMM DDR4 2400 C16 1x16GB",
      "rank": 103,
      "benchmark": 41.2,
      "samples": 1990,
      "url": "https://ram.userbenchmark.com/SpeedTest/228105/Crucial-CT16G4DFD824AC16FAD-1x16GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK8GX4M1A2400C16",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C16 1x8GB",
      "rank": 104,
      "benchmark": 41.2,
      "samples": 43238,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2400-C16-1x8GB/Rating/3610"
    },
    {
      "type": "RAM",
      "part_number": "CMK8GX4M1A2400C16R",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C16 1x8GB",
      "rank": 104,
      "benchmark": 41.2,
      "samples": 43238,
      "url": "https://ram.userbenchmark.com/Corsair-Vengeance-LPX-DDR4-2400-C16-1x8GB/Rating/3610"
    },
    {
      "type": "RAM",
      "part_number": "HX421C14FB/8",
      "brand": "HyperX",
      "model": "Fury DDR4 2133 C14 1x8GB",
      "rank": 105,
      "benchmark": 39.8,
      "samples": 13270,
      "url": "https://ram.userbenchmark.com/HyperX-Fury-DDR4-2133-C14-1x8GB/Rating/3555"
    },
    {
      "type": "RAM",
      "part_number": "CMK4GX4M1A2400C14",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C14 1x4GB",
      "rank": 106,
      "benchmark": 38.8,
      "samples": 786,
      "url": "https://ram.userbenchmark.com/SpeedTest/97522/Corsair-Vengeance-LPX-CMK4GX4M1A2400C14-1x4GB"
    },
    {
      "type": "RAM",
      "part_number": "CMK8GX4M1A2400C14",
      "brand": "Corsair",
      "model": "Vengeance LPX DDR4 2400 C14 1x8GB",
      "rank": 107,
      "benchmark": 38.7,
      "samples": 15814,
      "url": "https://ram.userbenchmark.com/SpeedTest/89446/Corsair-Vengeance-LPX-CMK8GX4M1A2400C14-1x8GB"
    },
    {
      "type": "RAM",
      "part_number": "CT4G4DFS824A",
      "brand": "Crucial",
      "model": "UDIMM DDR4 2400 C17 1x4GB",
      "rank": 108,
      "benchmark": 38.3,
      "samples": 4352,
      "url": "https://ram.userbenchmark.com/SpeedTest/372497/Crucial-CT4G4DFS824AC8FHP-1x4GB"
    },
    {
      "type": "RAM",
      "part_number": "F4-2133C15S-4GNT",
      "brand": "G.SKILL",
      "model": "Value DDR4 2133 C15 1x4GB",
      "rank": 109,
      "benchmark": 37.6,
      "samples": 520,
      "url": "https://ram.userbenchmark.com/SpeedTest/109263/GSKILL-F4-2133C15-4GNT-1x4GB"
    },
    {
      "type": "RAM",
      "part_number": "CMV4GX4M1A2133C15",
      "brand": "Corsair",
      "model": "ValueSelect DDR4 2133 C15 1x4GB",
      "rank": 110,
      "benchmark": 37.3,
      "samples": 1137,
      "url": "https://ram.userbenchmark.com/SpeedTest/96727/Corsair-ValueSelect-CMV4GX4M1A2133C15-1x4GB"
    },
    {
      "type": "RAM",
      "part_number": "CMZ8GX3M1A1600C10",
      "brand": "Corsair",
      "model": "Vengeance DDR3 1600 C10 1x8GB",
      "rank": 111,
      "benchmark": 30.6,
      "samples": 9696,
      "url": "https://ram.userbenchmark.com/SpeedTest/89201/Corsair-Vengeance-CMZ8GX3M1A1600C10-1x8GB"
    },
    {
      "type": "RAM",
      "part_number": "F3-12800CL9S-4GBRL",
      "brand": "G.SKILL",
      "model": "Ripjaws DDR3 1600 C9 1x4GB",
      "rank": 112,
      "benchmark": 29.3,
      "samples": 742,
      "url": "https://ram.userbenchmark.com/SpeedTest/90810/GSKILL-F3-12800CL9-4GBRL-1x4GB"
    },
    {
      "type": "RAM",
      "part_number": "F3-12800CL10S-8GBXL",
      "brand": "G.SKILL",
      "model": "RipjawsX DDR3 1600 C10 1x8GB",
      "rank": 113,
      "benchmark": 27.9,
      "samples": 4115,
      "url": "https://ram.userbenchmark.com/SpeedTest/89412/GSKILL-F3-12800CL10-8GBXL-1x8GB"
    }
  ]