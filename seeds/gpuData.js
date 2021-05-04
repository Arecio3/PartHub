const Gpu = require('../models');

const gpuData = [
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 3090",
      "rank": 1,
      "benchmark": 230,
      "samples": 44733,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-3090/Rating/4081"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro RTX A6000",
      "rank": 2,
      "benchmark": 207,
      "samples": 1,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1300600/NVIDIA-Quadro-RTX-A6000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 3080",
      "rank": 3,
      "benchmark": 202,
      "samples": 112860,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-3080/Rating/4080"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 6900-XT",
      "rank": 4,
      "benchmark": 191,
      "samples": 7105,
      "url": "https://gpu.userbenchmark.com/AMD-RX-6900-XT/Rating/4091"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Titan RTX",
      "rank": 5,
      "benchmark": 189,
      "samples": 1607,
      "url": "https://gpu.userbenchmark.com/SpeedTest/664199/NVIDIA-TITAN-RTX"
    },
    {
      "type": "GPU",
      "part number": "900-1G150-2500-000",
      "brand": "Nvidia",
      "model": "NVidia Titan RTX 24GB",
      "rank": 5,
      "benchmark": 189,
      "samples": 1607,
      "url": "https://gpu.userbenchmark.com/SpeedTest/664199/NVIDIA-TITAN-RTX"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro RTX 8000",
      "rank": 6,
      "benchmark": 177,
      "samples": 214,
      "url": "https://gpu.userbenchmark.com/SpeedTest/762332/NVIDIA-Quadro-RTX-8000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2080-Ti",
      "rank": 7,
      "benchmark": 174,
      "samples": 268922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "type": "GPU",
      "part number": "ZT-T20810D-10P",
      "brand": "Zotac",
      "model": "Zotac RTX 2080 Ti 11GB GAMING AMP SPECTRA RGB",
      "rank": 7,
      "benchmark": 174,
      "samples": 268922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "type": "GPU",
      "part number": "DUAL-RTX2080TI-O11G",
      "brand": "Asus",
      "model": "Asus RTX 2080 Ti 11GB Dual-fan OC",
      "rank": 7,
      "benchmark": 174,
      "samples": 268922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "type": "GPU",
      "part number": "RTX 2080 Ti GAMING X TRIO",
      "brand": "MSI",
      "model": "MSI RTX 2080 Ti 11GB Gaming",
      "rank": 7,
      "benchmark": 174,
      "samples": 268922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "type": "GPU",
      "part number": "GV-N208TGAMING OC-11GC",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2080 Ti 11GB Gaming OC",
      "rank": 7,
      "benchmark": 174,
      "samples": 268922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-RTX2080TI-O11G-GAMING",
      "brand": "Asus",
      "model": "Asus RTX 2080 Ti 11GB ROG Strix",
      "rank": 7,
      "benchmark": 174,
      "samples": 268922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "type": "GPU",
      "part number": "11G-P4-2487-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2080 Ti 11GB FTW3 Ultra Gaming",
      "rank": 7,
      "benchmark": 174,
      "samples": 268922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "type": "GPU",
      "part number": "11G-P4-2281-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2080 Ti 11GB Black",
      "rank": 7,
      "benchmark": 174,
      "samples": 268922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "type": "GPU",
      "part number": "GV-N208TAORUS X-11GC",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2080 Ti 11GB Xtreme",
      "rank": 7,
      "benchmark": 174,
      "samples": 268922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro RTX 6000",
      "rank": 8,
      "benchmark": 173,
      "samples": 576,
      "url": "https://gpu.userbenchmark.com/SpeedTest/736712/NVIDIA-Quadro-RTX-6000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Titan V",
      "rank": 9,
      "benchmark": 161,
      "samples": 736,
      "url": "https://gpu.userbenchmark.com/SpeedTest/395529/NVIDIA-TITAN-V"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 6800-XT",
      "rank": 10,
      "benchmark": 160,
      "samples": 9588,
      "url": "https://gpu.userbenchmark.com/AMD-RX-6800-XT/Rating/4089"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 3070",
      "rank": 11,
      "benchmark": 153,
      "samples": 177678,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-3070/Rating/4083"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Titan Xp",
      "rank": 12,
      "benchmark": 143,
      "samples": 5506,
      "url": "https://gpu.userbenchmark.com/SpeedTest/265423/NVIDIA-TITAN-Xp"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2080S (Super)",
      "rank": 13,
      "benchmark": 137,
      "samples": 174059,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "type": "GPU",
      "part number": "GV-N208SGAMING OC-8GC",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2080 Super 8GB Gaming",
      "rank": 13,
      "benchmark": 137,
      "samples": 174059,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "type": "GPU",
      "part number": "08GP43183KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2080 Super 8GB XC Ultra",
      "rank": 13,
      "benchmark": 137,
      "samples": 174059,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "type": "GPU",
      "part number": "RTX 2080 Super Gaming X Trio",
      "brand": "MSI",
      "model": "MSI RTX 2080 Super 8GB Gaming X",
      "rank": 13,
      "benchmark": 137,
      "samples": 174059,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-RTX2080S-A8G-Gaming",
      "brand": "Asus",
      "model": "Asus RTX 2080 Super 8GB ROG Strix A8G",
      "rank": 13,
      "benchmark": 137,
      "samples": 174059,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-RTX2080S-O8G-Gaming",
      "brand": "Asus",
      "model": "Asus RTX 2080 Super 8GB ROG Strix O8G",
      "rank": 13,
      "benchmark": 137,
      "samples": 174059,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "type": "GPU",
      "part number": "RTX 2080 Super Ventus XS OC",
      "brand": "MSI",
      "model": "MSI RTX 2080 Super 8GB Ventus XS OC",
      "rank": 13,
      "benchmark": 137,
      "samples": 174059,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "type": "GPU",
      "part number": "RTX 2080 SUPER VENTUS OC",
      "brand": "MSI",
      "model": "MSI RTX 2080 Super 8GB Ventus OC",
      "rank": 13,
      "benchmark": 137,
      "samples": 174059,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "type": "GPU",
      "part number": "Gv-N208SWF3OC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2080 Super 8GB Windforce",
      "rank": 13,
      "benchmark": 137,
      "samples": 174059,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-3081-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2080 Super 8GB Black Gaming",
      "rank": 13,
      "benchmark": 137,
      "samples": 174059,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "type": "GPU",
      "part number": "GV-N208SAORUS-8GC",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2080 Super 8GB Aorus Windforce",
      "rank": 13,
      "benchmark": 137,
      "samples": 174059,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-2083-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2080 Super 8GB KO Dual",
      "rank": 13,
      "benchmark": 137,
      "samples": 174059,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1080-Ti",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "11G-P4-6390-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1080 Ti 11GB Founders Edition",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "GV-N108TD5X-B",
      "brand": "Nvidia",
      "model": "Gigabyte GTX 1080 Ti 11GB Founders Edition",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "GTX 1080 Ti Founders Edition",
      "brand": "Nvidia",
      "model": "MSI GTX 1080 Ti 11GB Founders Edition",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "ZT-P10810A-10P",
      "brand": "Nvidia",
      "model": "Zotac GTX 1080 Ti 11GB Founders Edition",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "GTX1080TI-FE",
      "brand": "Asus",
      "model": "Asus GTX 1080 Ti 11GB Founders Edition",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-GTX1080TI-O11G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1080 Ti 11GB Gaming OC",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "GTX 1080 TI GAMING X",
      "brand": "MSI",
      "model": "MSI GTX 1080 TI 11GB Gaming X",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "GV-N108TAORUS-11GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1080 Ti 11GB AORUS",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "11G-P4-6696-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1080 Ti 11GB FTW3 Gaming",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-GTX1080TI-O11G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1080 Ti 11GB ROG Strix OC",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "11G-P4-6393-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1080 Ti 11GB SC Black",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-GTX1080TI-11G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1080 Ti 11GB ROG Strix",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "11G-P4-6593-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1080 Ti 11GB SC2 Gaming",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "GV-N108TAORUS X-11GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1080 Ti 11GB AORUS Xtreme",
      "rank": 14,
      "benchmark": 136,
      "samples": 637025,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro RTX 5000",
      "rank": 15,
      "benchmark": 134,
      "samples": 1097,
      "url": "https://gpu.userbenchmark.com/SpeedTest/712800/NVIDIA-Quadro-RTX-5000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 6800",
      "rank": 16,
      "benchmark": 134,
      "samples": 6037,
      "url": "https://gpu.userbenchmark.com/AMD-RX-6800/Rating/4088"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Titan X Pascal",
      "rank": 17,
      "benchmark": 134,
      "samples": 6823,
      "url": "https://gpu.userbenchmark.com/SpeedTest/158352/NVIDIA-TITAN-X-Pascal"
    },
    {
      "type": "GPU",
      "part number": "900-1G611-2500-000",
      "brand": "Nvidia",
      "model": "NVidia Titan X Pascal 12GB",
      "rank": 17,
      "benchmark": 134,
      "samples": 6823,
      "url": "https://gpu.userbenchmark.com/SpeedTest/158352/NVIDIA-TITAN-X-Pascal"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 3060-Ti",
      "rank": 18,
      "benchmark": 131,
      "samples": 50983,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-3060-Ti/Rating/4090"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro P6000",
      "rank": 19,
      "benchmark": 130,
      "samples": 570,
      "url": "https://gpu.userbenchmark.com/SpeedTest/187394/NVIDIA-Quadro-P6000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2080",
      "rank": 20,
      "benchmark": 127,
      "samples": 243002,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "type": "GPU",
      "part number": "RTX 2080 GAMING X TRIO",
      "brand": "MSI",
      "model": "MSI RTX 2080 8GB Gaming X Trio",
      "rank": 20,
      "benchmark": 127,
      "samples": 243002,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "type": "GPU",
      "part number": "GV-N2080WF3OC-8GC",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2080 8GB Windforce OC",
      "rank": 20,
      "benchmark": 127,
      "samples": 243002,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "type": "GPU",
      "part number": "DUAL-RTX2080-O8G",
      "brand": "Asus",
      "model": "Asus RTX 2080 8GB Dual OC",
      "rank": 20,
      "benchmark": 127,
      "samples": 243002,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "type": "GPU",
      "part number": "GV-N2080GAMING OC-8GC",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2080 8GB Gaming OC",
      "rank": 20,
      "benchmark": 127,
      "samples": 243002,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-2183-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2080 8GB XC Ultra Gaming",
      "rank": 20,
      "benchmark": 127,
      "samples": 243002,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-RTX2080-O8G-GAMING",
      "brand": "Asus",
      "model": "Asus RTX 2080 8GB ROG STRIX",
      "rank": 20,
      "benchmark": 127,
      "samples": 243002,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-2182-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2080 8GB XC Gaming",
      "rank": 20,
      "benchmark": 127,
      "samples": 243002,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 3080 (Laptop)",
      "rank": 21,
      "benchmark": 126,
      "samples": 697,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1443565/NVIDIA-GeForce-RTX-3080-Laptop-GPU"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2080S (Super Mobile)",
      "rank": 22,
      "benchmark": 121,
      "samples": 890,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1188513/NVIDIA-GeForce-RTX-2080-Super"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 6700-XT",
      "rank": 23,
      "benchmark": 119,
      "samples": 4415,
      "url": "https://gpu.userbenchmark.com/AMD-RX-6700-XT/Rating/4109"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2070S (Super)",
      "rank": 24,
      "benchmark": 118,
      "samples": 445922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-3173-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2070 Super 8GB SC XC Ultra Gaming",
      "rank": 24,
      "benchmark": 118,
      "samples": 445922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "type": "GPU",
      "part number": "GV-N207SGAMING OC-8GC",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2070 Super 8GB Gaming",
      "rank": 24,
      "benchmark": 118,
      "samples": 445922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "type": "GPU",
      "part number": "RTX 2070 SUPER VENTUS OC",
      "brand": "MSI",
      "model": "MSI RTX 2070 Super 8GB Ventus",
      "rank": 24,
      "benchmark": 118,
      "samples": 445922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "type": "GPU",
      "part number": "GV-N207SWF3OC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2070 Super 8GB 3X Windforce",
      "rank": 24,
      "benchmark": 118,
      "samples": 445922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "type": "GPU",
      "part number": "GV-N207SGAMING OC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2070 Super 8GB 3X Gaming",
      "rank": 24,
      "benchmark": 118,
      "samples": 445922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "type": "GPU",
      "part number": "RTX 2070 Super GAMING X",
      "brand": "MSI",
      "model": "MSI RTX 2070 Super 8GB Gaming X",
      "rank": 24,
      "benchmark": 118,
      "samples": 445922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-3071-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2070 Super 8GB Super Black Gaming",
      "rank": 24,
      "benchmark": 118,
      "samples": 445922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "type": "GPU",
      "part number": "DUAL-RTX-2070S-O8G-EVO",
      "brand": "Asus",
      "model": "Asus RTX 2070 Super 8GB Dual Evo",
      "rank": 24,
      "benchmark": 118,
      "samples": 445922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "type": "GPU",
      "part number": "ZT-T20710E-10M",
      "brand": "Zotac",
      "model": "Zotac RTX 2070 Super 8GB Mini",
      "rank": 24,
      "benchmark": 118,
      "samples": 445922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-2072-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2070 Super 8GB KO Gaming",
      "rank": 24,
      "benchmark": 118,
      "samples": 445922,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2080 (Mobile)",
      "rank": 25,
      "benchmark": 114,
      "samples": 2265,
      "url": "https://gpu.userbenchmark.com/SpeedTest/700275/NVIDIA-GeForce-RTX-2080"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon-VII",
      "rank": 26,
      "benchmark": 112,
      "samples": 10400,
      "url": "https://gpu.userbenchmark.com/AMD-Radeon-VII/Rating/4035"
    },
    {
      "type": "GPU",
      "part number": "21291-01-40G",
      "brand": "AMD",
      "model": "Sapphire Radeon VII 16GB",
      "rank": 26,
      "benchmark": 112,
      "samples": 10400,
      "url": "https://gpu.userbenchmark.com/AMD-Radeon-VII/Rating/4035"
    },
    {
      "type": "GPU",
      "part number": "RADEONVII-16G",
      "brand": "AMD",
      "model": "Asus Radeon VII 16GB",
      "rank": 26,
      "benchmark": 112,
      "samples": 10400,
      "url": "https://gpu.userbenchmark.com/AMD-Radeon-VII/Rating/4035"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 3070 (Laptop)",
      "rank": 27,
      "benchmark": 110,
      "samples": 2501,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1445007/NVIDIA-GeForce-RTX-3070-Laptop-GPU"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro GP100",
      "rank": 28,
      "benchmark": 107,
      "samples": 104,
      "url": "https://gpu.userbenchmark.com/SpeedTest/279788/NVIDIA-Quadro-GP100"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1080",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-6180-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1080 8GB Founders Edition",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "GTX1080-8G",
      "brand": "Asus",
      "model": "ASUS GTX 1080 8GB Founders Edition",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "GEFORCE GTX 1080 Founders Edition",
      "brand": "Nvidia",
      "model": "MSI GTX 1080 8GB Founders Edition",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "ZT-P10800A-10P",
      "brand": "Nvidia",
      "model": "Zotac GTX 1080 8GB Founders Edition",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "GV-N1080D5X-8GD-B",
      "brand": "Nvidia",
      "model": "Gigabyte GTX 1080 8GB Founders Edition",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-6183-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1080 8GB SC GAMING ACX 3.0",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "GTX 1080 GAMING X 8G",
      "brand": "MSI",
      "model": "MSI GTX 1080 8GB GAMING X",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "GV-N1080G1 GAMING-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1080 8GB G1 Gaming",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-6286-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1080 8GB FTW ACX 3.0",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "STRIX-GTX1080-A8G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1080 8GB ROG STRIX",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "STRIX-GTX1080-8G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1080 8GB ROG STRIX",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "ZT-P10800C-10P",
      "brand": "Zotac",
      "model": "Zotac GTX 1080 8GB AMP",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "ZT-P10800B-10P",
      "brand": "Zotac",
      "model": "Zotac GTX 1080 8GB AMP Extreme",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "GV-N1080XTREME-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1080 8GB Xtreme",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "GV-N1080XTREME-8GD Premium Pack",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1080 8GB Xtreme Pack",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "GV-N1080XTREME W-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1080 8GB Xtreme Water",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-6686-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1080 8GB FTW2",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "GV-N1080TTOC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1080 8GB Turbo",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "GV-N1080WF3OC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1080 8GB Windforce",
      "rank": 29,
      "benchmark": 106,
      "samples": 803577,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2070",
      "rank": 30,
      "benchmark": 106,
      "samples": 341979,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "type": "GPU",
      "part number": "GV-N2070GAMING OC-8GC",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2070 8GB Gaming OC",
      "rank": 30,
      "benchmark": 106,
      "samples": 341979,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-2172-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2070 8GB XC Gaming Dual HDB",
      "rank": 30,
      "benchmark": 106,
      "samples": 341979,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "type": "GPU",
      "part number": "RTX 2070 GAMING Z 8G",
      "brand": "MSI",
      "model": "MSI RTX 2070 8GB Gaming Z",
      "rank": 30,
      "benchmark": 106,
      "samples": 341979,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-2173-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2070 8GB XC Ultra Gaming",
      "rank": 30,
      "benchmark": 106,
      "samples": 341979,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-RTX2070-O8G-GAMING",
      "brand": "Asus",
      "model": "Asus RTX 2070 8GB ROG STRIX",
      "rank": 30,
      "benchmark": 106,
      "samples": 341979,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "type": "GPU",
      "part number": "RTX 2070 ARMOR 8G OC",
      "brand": "MSI",
      "model": "MSI RTX 2070 8GB Armor OC",
      "rank": 30,
      "benchmark": 106,
      "samples": 341979,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "type": "GPU",
      "part number": "GV-N2070WF3-8GC",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2070 8GB Windforce",
      "rank": 30,
      "benchmark": 106,
      "samples": 341979,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-1071-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2070 8GB Black Gaming",
      "rank": 30,
      "benchmark": 106,
      "samples": 341979,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "type": "GPU",
      "part number": "ZT-T20700E-10P",
      "brand": "Zotac",
      "model": "Zotac RTX 2070 8GB Mini",
      "rank": 30,
      "benchmark": 106,
      "samples": 341979,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "type": "GPU",
      "part number": "DUAL-RTX-2070-8G",
      "brand": "Asus",
      "model": "Asus RTX 2070 8GB Dual",
      "rank": 30,
      "benchmark": 106,
      "samples": 341979,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "type": "GPU",
      "part number": "GeForce RTX 2070 TRI FROZR",
      "brand": "MSI",
      "model": "MSI RTX 2070 8GB Tri Frozr",
      "rank": 30,
      "benchmark": 106,
      "samples": 341979,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 5700XT 50th Anniversary",
      "rank": 31,
      "benchmark": 106,
      "samples": 3450,
      "url": "https://gpu.userbenchmark.com/SpeedTest/845537/AMD-Radeon-RX-5700-XT-50th-Anniversary"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 5700-XT",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "AXRX 5700XT 8GBD6-M3DH",
      "brand": "AMD",
      "model": "PowerColor RX 5700 XT 8GB",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "21293-01-40G",
      "brand": "AMD",
      "model": "Sapphire RX 5700 XT 8GB",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "RX-57XT8MFD6",
      "brand": "AMD",
      "model": "XFX RX 5700 XT 8GB",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "Radeon RX 5700 XT 8G",
      "brand": "AMD",
      "model": "MSI RX 5700 XT 8GB Gaming",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "RX5700XT-8G",
      "brand": "AMD",
      "model": "Asus RX 5700 XT 8GB",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "GV-R57XT-8GD-B",
      "brand": "AMD",
      "model": "Gigabyte RX 5700 XT 8GB",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "11293-01-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 5700 XT 8GB Pulse",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "AXRX 5700XT 8GBD6-3DHE/OC",
      "brand": "PowerColor",
      "model": "PowerColor RX 5700 XT 8GB Red Devil",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "AXRX 5700XT 8GBD6-3DHR/OC",
      "brand": "PowerColor",
      "model": "PowerColor RX 5700 XT 8GB Red Dragon",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "11293-03-40G",
      "brand": "Sapphire",
      "model": "Sapphire RX 5700 XT 8GB Nitro+",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "11293-01-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 5700 XT 8GB Pulse",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "GV-R57XTGAMING OC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 5700 XT 8GB Gaming OC",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "Rx-57XT8TBD8",
      "brand": "XFX",
      "model": "XFX RX 5700 XT 8GB Thicc III Ultra",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "RX-57XT8TFD8",
      "brand": "XFX",
      "model": "XFX RX 5700 XT 8GB Thicc III",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "TUF-3-RX5700XT-O8G-EVO-GAMING",
      "brand": "Asus",
      "model": "Asus RX 5700 XT 8GB TUF Gaming 3",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-RX5700XT-O8G-GAMING",
      "brand": "Asus",
      "model": "Asus RX 5700 XT 8GB ROG Strix",
      "rank": 32,
      "benchmark": 104,
      "samples": 329015,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX Vega-64LC (Liquid Cooled)",
      "rank": 33,
      "benchmark": 99.6,
      "samples": 3278,
      "url": "https://gpu.userbenchmark.com/SpeedTest/353890/Radeon-RX-Vega"
    },
    {
      "type": "GPU",
      "part number": "GV-RXVEGA64X W-8GD-B",
      "brand": "AMD",
      "model": "Gigabyte RX Vega 64 8GB LC",
      "rank": 33,
      "benchmark": 99.6,
      "samples": 3278,
      "url": "https://gpu.userbenchmark.com/SpeedTest/353890/Radeon-RX-Vega"
    },
    {
      "type": "GPU",
      "part number": "21275-00-40G",
      "brand": "AMD",
      "model": "Sapphire RX Vega 64 8GB LC",
      "rank": 33,
      "benchmark": 99.6,
      "samples": 3278,
      "url": "https://gpu.userbenchmark.com/SpeedTest/353890/Radeon-RX-Vega"
    },
    {
      "type": "GPU",
      "part number": "RX-VEGMXWFXW",
      "brand": "AMD",
      "model": "XFX RX Vega 64 8GB LC",
      "rank": 33,
      "benchmark": 99.6,
      "samples": 3278,
      "url": "https://gpu.userbenchmark.com/SpeedTest/353890/Radeon-RX-Vega"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2060S (Super)",
      "rank": 34,
      "benchmark": 99.2,
      "samples": 218858,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "type": "GPU",
      "part number": "GV-N206SGAMING OC-8GC",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2060 Super 8GB Gaming",
      "rank": 34,
      "benchmark": 99.2,
      "samples": 218858,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-3163-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2060 Super 8GB SC XC Ultra Gaming",
      "rank": 34,
      "benchmark": 99.2,
      "samples": 218858,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "type": "GPU",
      "part number": "RTX 2060 Super Gaming X",
      "brand": "MSI",
      "model": "MSI RTX 2060 Super 8GB Gaming X",
      "rank": 34,
      "benchmark": 99.2,
      "samples": 218858,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "type": "GPU",
      "part number": "GV-N206SWF2OC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2060 Super 8GB Windforce OC",
      "rank": 34,
      "benchmark": 99.2,
      "samples": 218858,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "type": "GPU",
      "part number": "GV-N206SAORUS-8GC",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2060 Super 8GB Aorus",
      "rank": 34,
      "benchmark": 99.2,
      "samples": 218858,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-3062-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2060 8GB Super SC Black",
      "rank": 34,
      "benchmark": 99.2,
      "samples": 218858,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-3067",
      "brand": "EVGA",
      "model": "EVGA RTX 2060 Super 8GB SC Ultra Gaming",
      "rank": 34,
      "benchmark": 99.2,
      "samples": 218858,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "type": "GPU",
      "part number": "ZT-T20610E-10M",
      "brand": "Zotac",
      "model": "Zotac RTX 2060 Super 8GB Mini Gaming",
      "rank": 34,
      "benchmark": 99.2,
      "samples": 218858,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 3060",
      "rank": 35,
      "benchmark": 97.1,
      "samples": 15592,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-3060/Rating/4105"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1070-Ti",
      "rank": 36,
      "benchmark": 96.6,
      "samples": 307115,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-GTX1070TI-A8G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1070 Ti 8GB STRIX",
      "rank": 36,
      "benchmark": 96.6,
      "samples": 307115,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "type": "GPU",
      "part number": "GTX 1070 TI GAMING 8G",
      "brand": "MSI",
      "model": "MSI GTX 1070 Ti 8GB Gaming",
      "rank": 36,
      "benchmark": 96.6,
      "samples": 307115,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-5671-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1070 Ti 8GB SC GAMING",
      "rank": 36,
      "benchmark": 96.6,
      "samples": 307115,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "type": "GPU",
      "part number": "GV-N107TGAMING OC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1070 Ti 8GB Gaming OC",
      "rank": 36,
      "benchmark": 96.6,
      "samples": 307115,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "type": "GPU",
      "part number": "GTX 1070 TI AERO 8G",
      "brand": "MSI",
      "model": "MSI GTX 1070 Ti 8GB Aero",
      "rank": 36,
      "benchmark": 96.6,
      "samples": 307115,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-GTX1070TI-8G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1070 Ti 8GB ROG Strix Gaming",
      "rank": 36,
      "benchmark": 96.6,
      "samples": 307115,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-6775-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1070 Ti 8GB FTW2 GAMING",
      "rank": 36,
      "benchmark": 96.6,
      "samples": 307115,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "type": "GPU",
      "part number": "GV-N107TGAMING-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1070 Ti 8GB Gaming",
      "rank": 36,
      "benchmark": 96.6,
      "samples": 307115,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-6678-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1070 Ti 8GB FTW ULTRA SILENT GAMING",
      "rank": 36,
      "benchmark": 96.6,
      "samples": 307115,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "type": "GPU",
      "part number": "GTX 1070 TI TITANIUM 8G",
      "brand": "MSI",
      "model": "MSI GTX 1070 Ti 8GB TITANIUM",
      "rank": 36,
      "benchmark": 96.6,
      "samples": 307115,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1080 (Mobile)",
      "rank": 37,
      "benchmark": 96.4,
      "samples": 9941,
      "url": "https://gpu.userbenchmark.com/SpeedTest/165564/NVIDIA-GeForce-GTX-1080"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2070S (Super Mobile)",
      "rank": 38,
      "benchmark": 96.1,
      "samples": 3216,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1164515/NVIDIA-GeForce-RTX-2070-Super"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro RTX 4000",
      "rank": 39,
      "benchmark": 95.1,
      "samples": 4060,
      "url": "https://gpu.userbenchmark.com/SpeedTest/716215/NVIDIA-Quadro-RTX-4000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2080S (Super Mobile Max-Q)",
      "rank": 40,
      "benchmark": 94.2,
      "samples": 1727,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1114823/NVIDIA-GeForce-RTX-2080-Super-with-Max-Q-Design"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX Vega-64",
      "rank": 41,
      "benchmark": 93.8,
      "samples": 69590,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "type": "GPU",
      "part number": "GV-RXVEGA64-8GD-B",
      "brand": "AMD",
      "model": "Gigabyte RX Vega 64 8GB",
      "rank": 41,
      "benchmark": 93.8,
      "samples": 69590,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "type": "GPU",
      "part number": "RX-VEGMTBFX6",
      "brand": "AMD",
      "model": "XFX RX Vega 64 8GB",
      "rank": 41,
      "benchmark": 93.8,
      "samples": 69590,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "type": "GPU",
      "part number": "21275-02-20G",
      "brand": "AMD",
      "model": "Sapphire RX Vega 64 8GB",
      "rank": 41,
      "benchmark": 93.8,
      "samples": 69590,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-RXVEGA64-O8G-GAMING",
      "brand": "Asus",
      "model": "Asus RX Vega 64 8GB ROG Strix Gaming",
      "rank": 41,
      "benchmark": 93.8,
      "samples": 69590,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "type": "GPU",
      "part number": "GV-RXVEGA64GAMING OC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX Vega 64 8GB Gaming OC",
      "rank": 41,
      "benchmark": 93.8,
      "samples": 69590,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "type": "GPU",
      "part number": "RX VEGA 64 AIR BOOST 8G OC",
      "brand": "MSI",
      "model": "MSI RX Vega 64 8GB Gaming Air Boost",
      "rank": 41,
      "benchmark": 93.8,
      "samples": 69590,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro P5000",
      "rank": 42,
      "benchmark": 91.1,
      "samples": 5941,
      "url": "https://gpu.userbenchmark.com/SpeedTest/197331/NVIDIA-Quadro-P5000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Vega Frontier Edition",
      "rank": 43,
      "benchmark": 91.1,
      "samples": 1569,
      "url": "https://gpu.userbenchmark.com/AMD-Vega-Frontier-Edition/Rating/3929"
    },
    {
      "type": "GPU",
      "part number": "100-506061",
      "brand": "AMD",
      "model": "Radeon Vega Frontier Edition Air",
      "rank": 43,
      "benchmark": 91.1,
      "samples": 1569,
      "url": "https://gpu.userbenchmark.com/AMD-Vega-Frontier-Edition/Rating/3929"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2070 (Mobile)",
      "rank": 44,
      "benchmark": 90.2,
      "samples": 12147,
      "url": "https://gpu.userbenchmark.com/SpeedTest/694798/NVIDIA-GeForce-RTX-2070"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2080 (Mobile Max-Q)",
      "rank": 45,
      "benchmark": 89.4,
      "samples": 5212,
      "url": "https://gpu.userbenchmark.com/SpeedTest/704710/NVIDIA-GeForce-RTX-2080-with-Max-Q-Design"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2060",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "RTX 2060 VENTUS 6G OC",
      "brand": "MSI",
      "model": "MSI RTX 2060 6GB Ventus",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "ZT-T20600F-10M",
      "brand": "Zotac",
      "model": "Zotac RTX 2060 6GB Twin",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "GV-N2060GAMING OC-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2060 6GB Gaming OC",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-2167-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2060 6GB XC Ultra Gaming",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "GV-N2060WF2OC-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2060 6GB Windforce OC",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "RTX 2060 Gaming Z 6G",
      "brand": "MSI",
      "model": "MSI RTX 2060 6GB Gaming Z",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-RTX2060-O6G-GAMING",
      "brand": "Asus",
      "model": "Asus RTX 2060 6GB ROG STRIX",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "GV-N2060GAMINGOC PRO-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RTX 2060 6GB Gaming OC Pro",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-2060-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2060 6GB Gaming",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-2068-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2060 KO 6GB Ultra Gaming",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-2066-KR",
      "brand": "EVGA",
      "model": "EVGA RTX 2060 KO 6GB Gaming",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "RTX 2060 VENTUS XS 6G OC",
      "brand": "MSI",
      "model": "MSI RTX 2060 6GB Ventus XS",
      "rank": 46,
      "benchmark": 88.6,
      "samples": 423509,
      "url": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 5700",
      "rank": 47,
      "benchmark": 87.7,
      "samples": 51634,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "type": "GPU",
      "part number": "AXRX 5700 8GBD6-M3DH",
      "brand": "AMD",
      "model": "PowerColor RX 5700 8GB",
      "rank": 47,
      "benchmark": 87.7,
      "samples": 51634,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "type": "GPU",
      "part number": "21294-01-20G",
      "brand": "AMD",
      "model": "Sapphire RX 5700 8GB",
      "rank": 47,
      "benchmark": 87.7,
      "samples": 51634,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "type": "GPU",
      "part number": "RX-57XL8MFG6",
      "brand": "AMD",
      "model": "XFX RX 5700 8GB",
      "rank": 47,
      "benchmark": 87.7,
      "samples": 51634,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "type": "GPU",
      "part number": "R5700XT8",
      "brand": "AMD",
      "model": "MSI RX 5700 8GB",
      "rank": 47,
      "benchmark": 87.7,
      "samples": 51634,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "type": "GPU",
      "part number": "11294-01-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 5700 8GB Pulse",
      "rank": 47,
      "benchmark": 87.7,
      "samples": 51634,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "type": "GPU",
      "part number": "R5700MHC",
      "brand": "MSI",
      "model": "MSI RX 5700 8GB Mech",
      "rank": 47,
      "benchmark": 87.7,
      "samples": 51634,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "type": "GPU",
      "part number": "11294-01-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 5700 8GB Pulse",
      "rank": 47,
      "benchmark": 87.7,
      "samples": 51634,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "type": "GPU",
      "part number": "AXRX 5700 8GBD6-3DHE/OC",
      "brand": "PowerColor",
      "model": "PowerColor RX 5700 8GB Red Devil",
      "rank": 47,
      "benchmark": 87.7,
      "samples": 51634,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "type": "GPU",
      "part number": "RX-57XL8LBD6",
      "brand": "XFX",
      "model": "XFX RX 5700 8GB DD Ultra",
      "rank": 47,
      "benchmark": 87.7,
      "samples": 51634,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "type": "GPU",
      "part number": "GV-R57GAMING OC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 5700 8GB Gaming OC",
      "rank": 47,
      "benchmark": 87.7,
      "samples": 51634,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "type": "GPU",
      "part number": "RX 5700 Evoke OC",
      "brand": "MSI",
      "model": "MSI RX 5700 8GB Evoke OC",
      "rank": 47,
      "benchmark": 87.7,
      "samples": 51634,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 5600-XT",
      "rank": 48,
      "benchmark": 87.3,
      "samples": 73461,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "type": "GPU",
      "part number": "11296-01-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 5600 XT 6GB Pulse",
      "rank": 48,
      "benchmark": 87.3,
      "samples": 73461,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "type": "GPU",
      "part number": "AXRX 5600XT 6GBD6-3DHE/OC",
      "brand": "PowerColor",
      "model": "PowerColor RX 5600 XT 6GB Red Devil",
      "rank": 48,
      "benchmark": 87.3,
      "samples": 73461,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "type": "GPU",
      "part number": "RX-56XT6DFD6",
      "brand": "XFX",
      "model": "XFX RX 5600 XT 6GB Thicc II PRO",
      "rank": 48,
      "benchmark": 87.3,
      "samples": 73461,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "type": "GPU",
      "part number": "RX-56XT6DF46",
      "brand": "XFX",
      "model": "XFX RX 5600 XT 6GB Thicc II PRO",
      "rank": 48,
      "benchmark": 87.3,
      "samples": 73461,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "type": "GPU",
      "part number": "GV-R56XTGAMING OC-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 5600 XT 6GB Gaming OC",
      "rank": 48,
      "benchmark": 87.3,
      "samples": 73461,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "type": "GPU",
      "part number": "GV-R56XTWF2OC-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 5600 XT 6GB Windforce OC",
      "rank": 48,
      "benchmark": 87.3,
      "samples": 73461,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "type": "GPU",
      "part number": "Radeon RX 5600 XT GAMING MX",
      "brand": "MSI",
      "model": "MSI RX 5600 XT 6GB Gaming MX",
      "rank": 48,
      "benchmark": 87.3,
      "samples": 73461,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2070S (Super Mobile Max-Q)",
      "rank": 49,
      "benchmark": 85.9,
      "samples": 1691,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1168355/NVIDIA-GeForce-RTX-2070-Super-with-Max-Q-Design"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 3060 (Laptop)",
      "rank": 50,
      "benchmark": 84.3,
      "samples": 2326,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1452971/NVIDIA-GeForce-RTX-3060-Laptop-GPU"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX Vega-56",
      "rank": 51,
      "benchmark": 83.1,
      "samples": 65018,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "type": "GPU",
      "part number": "21276-00-20G",
      "brand": "AMD",
      "model": "Sapphire RX Vega 56 8GB",
      "rank": 51,
      "benchmark": 83.1,
      "samples": 65018,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "type": "GPU",
      "part number": "RX-VEGMLBFX6",
      "brand": "AMD",
      "model": "XFX RX Vega 56 8GB",
      "rank": 51,
      "benchmark": 83.1,
      "samples": 65018,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "type": "GPU",
      "part number": "GV-RXVEGA56-8GD-B",
      "brand": "AMD",
      "model": "Gigabyte RX Vega 56 8GB",
      "rank": 51,
      "benchmark": 83.1,
      "samples": 65018,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "type": "GPU",
      "part number": "RX Vega 56 Air Boost 8G OC",
      "brand": "MSI",
      "model": "MSI RX Vega 56 8GB Gaming Air Boost",
      "rank": 51,
      "benchmark": 83.1,
      "samples": 65018,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "type": "GPU",
      "part number": "GV-RXVEGA56GAMING OC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX Vega 56 8GB OC",
      "rank": 51,
      "benchmark": 83.1,
      "samples": 65018,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "type": "GPU",
      "part number": "11276-02-40G",
      "brand": "Sapphire",
      "model": "Sapphire RX Vega 56 8GB Pulse",
      "rank": 51,
      "benchmark": 83.1,
      "samples": 65018,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "type": "GPU",
      "part number": "90-GA0900-00UANF",
      "brand": "ASRock",
      "model": "ASRock RX Vega 56 8GB Phantom Gaming X",
      "rank": 51,
      "benchmark": 83.1,
      "samples": 65018,
      "url": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1070",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "GTX1070-8G",
      "brand": "Asus",
      "model": "ASUS GTX 1070 8GB Founders Edition",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "ZT-P10700A-10P",
      "brand": "Nvidia",
      "model": "ZOTAC GTX 1070 8GB Founders Edition",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "VCGGTX10708PB-CG",
      "brand": "Nvidia",
      "model": "PNY GTX 1070 8GB Founders Edition",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "GV-N1070D5-8GD-B",
      "brand": "Nvidia",
      "model": "Gigabyte GTX 1070 8GB Founders Edition",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "MSI GeForce GTX 1070 Founders Edition",
      "brand": "Nvidia",
      "model": "MSI GTX 1070 Founders Edition",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-6170-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1070 8GB Founders Edition",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "GeForce GTX 1070 GAMING X 8G",
      "brand": "MSI",
      "model": "MSI GTX 1070 8GB GAMING X",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "GTX 1070 GAMING X 8G",
      "brand": "MSI",
      "model": "MSI GTX 1070 8GB GAMING X",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "GV-N1070G1 GAMING-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1070 8GB G1 Gaming",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "GeForce GTX 1070 ARMOR 8G OC",
      "brand": "MSI",
      "model": "MSI GTX 1070 8GB ARMOR OC",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-6173-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1070 8GB SC GAMING",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "STRIX-GTX1070-O8G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1070 8GB STRIX OC",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-6276-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1070 8GB FTW Gaming",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "STRIX-GTX1070-8G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1070 8GB STRIX",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "ZT-P10700B-10P",
      "brand": "Zotac",
      "model": "Zotac GTX 1070 8GB AMP! Extreme",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "GV-N1070WF2OC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1070 8GB Windforce OC",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "GeForce GTX 1070 GAMING 8G",
      "brand": "MSI",
      "model": "MSI GTX 1070 8GB Gaming",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "DUAL-GTX1070-O8G",
      "brand": "Asus",
      "model": "Asus GTX 1070 8GB Dual OC",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-5173-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1070 8GB SC Gaming ACX 3.0",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-6171-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1070 8GB Gaming ACX 3.0",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-6274-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1070 8GB FTW DT Gaming",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "426018336-3682",
      "brand": "Gainward",
      "model": "Gainward GTX 1070 8GB Phoenix GS",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "GV-N1070XTREME-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1070 8GB XTREME",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "TURBO-GTX1070-8G",
      "brand": "Asus",
      "model": "Asus GTX 1070 8GB Turbo",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "GeForce GTX 1070 SEA HAWK X",
      "brand": "MSI",
      "model": "MSI GTX 1070 8GB SEA HAWK X",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "GV-N1070IXOC-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1070 8GB Mini ITX OC",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "08G-P4-6676-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1070 8GB FTW2",
      "rank": 52,
      "benchmark": 80.5,
      "samples": 1080629,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 980-Ti",
      "rank": 53,
      "benchmark": 80.2,
      "samples": 169627,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-4995-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 980 Ti 6GB ACX SC+ ACX 2.0+ w/BP",
      "rank": 53,
      "benchmark": 80.2,
      "samples": 169627,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-4992-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 980 Ti 6GB SC",
      "rank": 53,
      "benchmark": 80.2,
      "samples": 169627,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "type": "GPU",
      "part number": "GTX980TI-6GD5",
      "brand": "Asus",
      "model": "ASUS GTX 980 Ti 6GB",
      "rank": 53,
      "benchmark": 80.2,
      "samples": 169627,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "type": "GPU",
      "part number": "GTX 980TI GAMING 6G",
      "brand": "MSI",
      "model": "MSI GTX 980 Ti 6GB Gaming",
      "rank": 53,
      "benchmark": 80.2,
      "samples": 169627,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "type": "GPU",
      "part number": "GV-N98TG1 GAMING-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 980 Ti 6GB GV-N98TG1",
      "rank": 53,
      "benchmark": 80.2,
      "samples": 169627,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "type": "GPU",
      "part number": "GV-N98TWF3OC-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 980 Ti 6GB Windforce 3X OC",
      "rank": 53,
      "benchmark": 80.2,
      "samples": 169627,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "type": "GPU",
      "part number": "GTX 980Ti GAMING 6G GOLDEN EDITION",
      "brand": "MSI",
      "model": "MSI GTX 980 TI 6GB OC GOLDEN LE",
      "rank": 53,
      "benchmark": 80.2,
      "samples": 169627,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-0998-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 980 Ti 6GB Classified Gaming ACX 2.0+",
      "rank": 53,
      "benchmark": 80.2,
      "samples": 169627,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2070 (Mobile Max-Q)",
      "rank": 54,
      "benchmark": 79.6,
      "samples": 7117,
      "url": "https://gpu.userbenchmark.com/SpeedTest/703511/NVIDIA-GeForce-RTX-2070-with-Max-Q-Design"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1080 (Mobile Max-Q)",
      "rank": 55,
      "benchmark": 77.9,
      "samples": 2697,
      "url": "https://gpu.userbenchmark.com/SpeedTest/308045/NVIDIA-GeForce-GTX-1080-with-Max-Q-Design"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX Titan X",
      "rank": 56,
      "benchmark": 77,
      "samples": 13739,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-Titan-X/Rating/3282"
    },
    {
      "type": "GPU",
      "part number": "12G-P4-2992-KR",
      "brand": "EVGA",
      "model": "EVGA GTX TITAN X 12GB SC",
      "rank": 56,
      "benchmark": 77,
      "samples": 13739,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-Titan-X/Rating/3282"
    },
    {
      "type": "GPU",
      "part number": "GTXTITANX-12GD5",
      "brand": "Asus",
      "model": "ASUS GTX TITAN X 12GB",
      "rank": 56,
      "benchmark": 77,
      "samples": 13739,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-Titan-X/Rating/3282"
    },
    {
      "type": "GPU",
      "part number": "12G-P4-2990-KR",
      "brand": "EVGA",
      "model": "EVGA GTX TITAN X 12GB",
      "rank": 56,
      "benchmark": 77,
      "samples": 13739,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-Titan-X/Rating/3282"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1660-Ti",
      "rank": 57,
      "benchmark": 76.2,
      "samples": 223171,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "type": "GPU",
      "part number": "GTX 1660 TI VENTUS XS 6G OC",
      "brand": "MSI",
      "model": "MSI GTX 1660 Ti 6GB Ventus XS OC",
      "rank": 57,
      "benchmark": 76.2,
      "samples": 223171,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-1261-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1660 Ti 6GB Black Gaming",
      "rank": 57,
      "benchmark": 76.2,
      "samples": 223171,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "type": "GPU",
      "part number": "GTX 1660 TI GAMING X 6G",
      "brand": "MSI",
      "model": "MSI GTX 1660 Ti 6GB Gaming X",
      "rank": 57,
      "benchmark": 76.2,
      "samples": 223171,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "type": "GPU",
      "part number": "DUAL-GTX1660TI-O6G",
      "brand": "Asus",
      "model": "Asus GTX 1660 Ti 6GB Dual",
      "rank": 57,
      "benchmark": 76.2,
      "samples": 223171,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-1263-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1660 Ti 6GB XC Gaming",
      "rank": 57,
      "benchmark": 76.2,
      "samples": 223171,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "type": "GPU",
      "part number": "GV-N166TWF2OC-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1660 Ti 6GB Windforce OC",
      "rank": 57,
      "benchmark": 76.2,
      "samples": 223171,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "type": "GPU",
      "part number": "GV-N166TOC-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1660 Ti 6GB OC",
      "rank": 57,
      "benchmark": 76.2,
      "samples": 223171,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "type": "GPU",
      "part number": "PH-GTX1660TI-O6G",
      "brand": "Asus",
      "model": "Asus GTX 1660 Ti 6GB Phoenix",
      "rank": 57,
      "benchmark": 76.2,
      "samples": 223171,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro M6000 24GB",
      "rank": 58,
      "benchmark": 75.3,
      "samples": 241,
      "url": "https://gpu.userbenchmark.com/SpeedTest/145751/NVIDIA-Quadro-M6000-24GB"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro M6000",
      "rank": 59,
      "benchmark": 74.5,
      "samples": 418,
      "url": "https://gpu.userbenchmark.com/SpeedTest/36278/NVIDIA-Quadro-M6000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1660S (Super)",
      "rank": 60,
      "benchmark": 70.7,
      "samples": 230235,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "type": "GPU",
      "part number": "GTX 1660 Super Ventus XS OC",
      "brand": "MSI",
      "model": "MSI GTX 1660 Super 6GB Ventus XS OC",
      "rank": 60,
      "benchmark": 70.7,
      "samples": 230235,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "type": "GPU",
      "part number": "GV-N166SOC-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1660 Super 6GB OC",
      "rank": 60,
      "benchmark": 70.7,
      "samples": 230235,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-1068-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1660 Super 6GB SC Ultra Gaming",
      "rank": 60,
      "benchmark": 70.7,
      "samples": 230235,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "type": "GPU",
      "part number": "ZT-T16620F-10L",
      "brand": "Zotac",
      "model": "Zotac GTX 1660 Super 6GB Compact",
      "rank": 60,
      "benchmark": 70.7,
      "samples": 230235,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "type": "GPU",
      "part number": "GTX 1660 Super Gaming X",
      "brand": "MSI",
      "model": "MSI GTX 1660 Super 6GB Gaming X",
      "rank": 60,
      "benchmark": 70.7,
      "samples": 230235,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "type": "GPU",
      "part number": "DUAL-GTX1660S-O6G-EVO",
      "brand": "Asus",
      "model": "Asus GTX 1660 Super 6GB Dual Evo",
      "rank": 60,
      "benchmark": 70.7,
      "samples": 230235,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "type": "GPU",
      "part number": "TUF-GTX1660S-O6G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1660 Super 6GB TUF Gaming",
      "rank": 60,
      "benchmark": 70.7,
      "samples": 230235,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1070 (Mobile)",
      "rank": 61,
      "benchmark": 70.7,
      "samples": 62644,
      "url": "https://gpu.userbenchmark.com/SpeedTest/164129/NVIDIA-GeForce-GTX-1070"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "RTX 2060 (Mobile)",
      "rank": 62,
      "benchmark": 70.6,
      "samples": 63289,
      "url": "https://gpu.userbenchmark.com/SpeedTest/701609/NVIDIA-GeForce-RTX-2060"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1660",
      "rank": 63,
      "benchmark": 69,
      "samples": 148379,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "type": "GPU",
      "part number": "GV-N1660OC-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1660 6GB OC",
      "rank": 63,
      "benchmark": 69,
      "samples": 148379,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-1167-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1660 6GB XC Ultra Gaming",
      "rank": 63,
      "benchmark": 69,
      "samples": 148379,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "type": "GPU",
      "part number": "GTX 1660 Ventus XS 6G OC",
      "brand": "MSI",
      "model": "MSI GTX 1660 6GB Ventus XS OC",
      "rank": 63,
      "benchmark": 69,
      "samples": 148379,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "type": "GPU",
      "part number": "GTX 1660 Gaming X 6G",
      "brand": "MSI",
      "model": "MSI GTX 1660 6GB Gaming X",
      "rank": 63,
      "benchmark": 69,
      "samples": 148379,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-1161-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1660 6GB XC Black",
      "rank": 63,
      "benchmark": 69,
      "samples": 148379,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "type": "GPU",
      "part number": "PH-GTX1660-O6G",
      "brand": "Asus",
      "model": "Asus GTX 1660 6GB Phoenix",
      "rank": 63,
      "benchmark": 69,
      "samples": 148379,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "type": "GPU",
      "part number": "GV-N1660GAMING OC-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1660 6GB Gaming OC",
      "rank": 63,
      "benchmark": 69,
      "samples": 148379,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "type": "GPU",
      "part number": "ZT-T16600F-10L",
      "brand": "Zotac",
      "model": "Zotac GTX 1660 6GB Compact",
      "rank": 63,
      "benchmark": 69,
      "samples": 148379,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "type": "GPU",
      "part number": "ZT-T16600K-10M",
      "brand": "Zotac",
      "model": "Zotac GTX 1660 6GB Gaming Compact",
      "rank": 63,
      "benchmark": 69,
      "samples": 148379,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 Fury-X",
      "rank": 64,
      "benchmark": 67.4,
      "samples": 6301,
      "url": "https://gpu.userbenchmark.com/AMD-R9-Fury-X/Rating/3498"
    },
    {
      "type": "GPU",
      "part number": "R9-FURY-4QFA",
      "brand": "AMD",
      "model": "XFX R9 FURY X 4GB",
      "rank": 64,
      "benchmark": 67.4,
      "samples": 6301,
      "url": "https://gpu.userbenchmark.com/AMD-R9-Fury-X/Rating/3498"
    },
    {
      "type": "GPU",
      "part number": "21246-00-40G",
      "brand": "AMD",
      "model": "Sapphire R9 Fury X 4GB",
      "rank": 64,
      "benchmark": 67.4,
      "samples": 6301,
      "url": "https://gpu.userbenchmark.com/AMD-R9-Fury-X/Rating/3498"
    },
    {
      "type": "GPU",
      "part number": "GV-R9FURYX-4GD-B",
      "brand": "AMD",
      "model": "Gigabyte R9 Fury X 4GB",
      "rank": 64,
      "benchmark": 67.4,
      "samples": 6301,
      "url": "https://gpu.userbenchmark.com/AMD-R9-Fury-X/Rating/3498"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro P4000",
      "rank": 65,
      "benchmark": 67,
      "samples": 8757,
      "url": "https://gpu.userbenchmark.com/SpeedTest/250990/NVIDIA-Quadro-P4000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro P5000-M (Mobile)",
      "rank": 66,
      "benchmark": 66.6,
      "samples": 524,
      "url": "https://gpu.userbenchmark.com/SpeedTest/249248/NVIDIA-Quadro-P5000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1660-Ti (Mobile)",
      "rank": 67,
      "benchmark": 65.3,
      "samples": 50773,
      "url": "https://gpu.userbenchmark.com/SpeedTest/776281/NVIDIA-GeForce-GTX-1660-Ti"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 Fury",
      "rank": 68,
      "benchmark": 63.7,
      "samples": 12264,
      "url": "https://gpu.userbenchmark.com/AMD-R9-Fury/Rating/3509"
    },
    {
      "type": "GPU",
      "part number": "11247-00-40G",
      "brand": "Sapphire",
      "model": "Sapphire R9 Fury 4GB TRI-X OC",
      "rank": 68,
      "benchmark": 63.7,
      "samples": 12264,
      "url": "https://gpu.userbenchmark.com/AMD-R9-Fury/Rating/3509"
    },
    {
      "type": "GPU",
      "part number": "100379NTOC+SR",
      "brand": "Sapphire",
      "model": "Sapphire R9 Fury 4GB TRI-X OC",
      "rank": 68,
      "benchmark": 63.7,
      "samples": 12264,
      "url": "https://gpu.userbenchmark.com/AMD-R9-Fury/Rating/3509"
    },
    {
      "type": "GPU",
      "part number": "STRIX-R9FURY-DC3-4G-GAMING",
      "brand": "Asus",
      "model": "Asus R9 Fury 4GB Gaming",
      "rank": 68,
      "benchmark": 63.7,
      "samples": 12264,
      "url": "https://gpu.userbenchmark.com/AMD-R9-Fury/Rating/3509"
    },
    {
      "type": "GPU",
      "part number": "R9-FURY-4TF9",
      "brand": "XFX",
      "model": "XFX R9 Fury 4GB",
      "rank": 68,
      "benchmark": 63.7,
      "samples": 12264,
      "url": "https://gpu.userbenchmark.com/AMD-R9-Fury/Rating/3509"
    },
    {
      "type": "GPU",
      "part number": "11247-03-40G",
      "brand": "Sapphire",
      "model": "Sapphire R9 Fury 4GB NITRO",
      "rank": 68,
      "benchmark": 63.7,
      "samples": 12264,
      "url": "https://gpu.userbenchmark.com/AMD-R9-Fury/Rating/3509"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 980",
      "rank": 69,
      "benchmark": 60.5,
      "samples": 134202,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980/Rating/2576"
    },
    {
      "type": "GPU",
      "part number": "04G-P4-2983-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 980 4GB SC ACX 2.0",
      "rank": 69,
      "benchmark": 60.5,
      "samples": 134202,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980/Rating/2576"
    },
    {
      "type": "GPU",
      "part number": "GTX 980 GAMING 4G",
      "brand": "MSI",
      "model": "MSI GTX 980 4GB GAMING",
      "rank": 69,
      "benchmark": 60.5,
      "samples": 134202,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980/Rating/2576"
    },
    {
      "type": "GPU",
      "part number": "STRIX-GTX980-DC2OC-4GD5",
      "brand": "Asus",
      "model": "ASUS GTX 980 4GB STRIX OC",
      "rank": 69,
      "benchmark": 60.5,
      "samples": 134202,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-980/Rating/2576"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1070 (Mobile Max-Q)",
      "rank": 70,
      "benchmark": 60.3,
      "samples": 7075,
      "url": "https://gpu.userbenchmark.com/SpeedTest/301524/NVIDIA-GeForce-GTX-1070-with-Max-Q-Design"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1650S (Super)",
      "rank": 71,
      "benchmark": 60.1,
      "samples": 84730,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "type": "GPU",
      "part number": "ZT-T16510F-10L",
      "brand": "Zotac",
      "model": "Zotac GTX 1650 Super 4GB Gaming",
      "rank": 71,
      "benchmark": 60.1,
      "samples": 84730,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "type": "GPU",
      "part number": "TUF-GTX1650S-O4G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1650 Super 4GB TUF Gaming",
      "rank": 71,
      "benchmark": 60.1,
      "samples": 84730,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "type": "GPU",
      "part number": "04G-P4-1357-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1650 Super 4GB SC Ultra",
      "rank": 71,
      "benchmark": 60.1,
      "samples": 84730,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "type": "GPU",
      "part number": "GTX 1650 Super Ventus XS OC",
      "brand": "MSI",
      "model": "MSI GTX 1650 Super 4GB Ventus XS",
      "rank": 71,
      "benchmark": 60.1,
      "samples": 84730,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "type": "GPU",
      "part number": "GV-N165SWF2OC-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1650 Super 4GB 2x Windforce",
      "rank": 71,
      "benchmark": 60.1,
      "samples": 84730,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "type": "GPU",
      "part number": "GTX 1650 Super Gaming X",
      "brand": "MSI",
      "model": "MSI GTX 1650 Super 4GB Gaming X",
      "rank": 71,
      "benchmark": 60.1,
      "samples": 84730,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "type": "GPU",
      "part number": "PH-GTX1650S-O4G",
      "brand": "Asus",
      "model": "Asus GTX 1650 Super 4GB Phoenix",
      "rank": 71,
      "benchmark": 60.1,
      "samples": 84730,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 590",
      "rank": 72,
      "benchmark": 59.8,
      "samples": 87982,
      "url": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "type": "GPU",
      "part number": "RX-590P8DFD6",
      "brand": "XFX",
      "model": "XFX RX 590 8GB Fatboy OC+",
      "rank": 72,
      "benchmark": 59.8,
      "samples": 87982,
      "url": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "type": "GPU",
      "part number": "11289-01-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 590 8GB Nitro+",
      "rank": 72,
      "benchmark": 59.8,
      "samples": 87982,
      "url": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "type": "GPU",
      "part number": "AXRX 590 8GBD5-DHD",
      "brand": "PowerColor",
      "model": "PowerColor RX 590 8GB Red Dragon",
      "rank": 72,
      "benchmark": 59.8,
      "samples": 87982,
      "url": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "type": "GPU",
      "part number": "AXRX 590 8GBD5-3DH/OC",
      "brand": "PowerColor",
      "model": "PowerColor RX 590 8GB Red Devil",
      "rank": 72,
      "benchmark": 59.8,
      "samples": 87982,
      "url": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "type": "GPU",
      "part number": "RADEON RX 590 ARMOR 8G OC",
      "brand": "MSI",
      "model": "MSI RX 590 8GB Armor OC",
      "rank": 72,
      "benchmark": 59.8,
      "samples": 87982,
      "url": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "type": "GPU",
      "part number": "GV-RX590GAMING-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 590 8GB Gaming",
      "rank": 72,
      "benchmark": 59.8,
      "samples": 87982,
      "url": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "type": "GPU",
      "part number": "11289-06-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 590 8GB Pulse",
      "rank": 72,
      "benchmark": 59.8,
      "samples": 87982,
      "url": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX Titan Z (SLI Disabled)",
      "rank": 73,
      "benchmark": 58.2,
      "samples": 564,
      "url": "https://gpu.userbenchmark.com/SpeedTest/17751/NVIDIA-GeForce-GTX-TITAN-Z"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 5500",
      "rank": 74,
      "benchmark": 57.4,
      "samples": 210,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5500/Rating/4059"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1660-Ti (Mobile Max-Q)",
      "rank": 75,
      "benchmark": 57.3,
      "samples": 8820,
      "url": "https://gpu.userbenchmark.com/SpeedTest/789578/NVIDIA-GeForce-GTX-1660-Ti-with-Max-Q-Design"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 5500-XT",
      "rank": 76,
      "benchmark": 57.1,
      "samples": 35608,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5500-XT/Rating/4060"
    },
    {
      "type": "GPU",
      "part number": "RX-55XT8DFD6",
      "brand": "XFX",
      "model": "XFX RX 5600 XT 8GB Thicc II PRO",
      "rank": 76,
      "benchmark": 57.1,
      "samples": 35608,
      "url": "https://gpu.userbenchmark.com/AMD-RX-5500-XT/Rating/4060"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1060-6GB",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-6161-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1060 6GB Gaming",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-6163-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1060 6GB Gaming SC",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "GV-N1060G1GAMING-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1060 6GB G1 Gaming",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "ZT-P10600B-10M",
      "brand": "Zotac",
      "model": "Zotac GTX 1060 6GB AMP",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "ZT-P10600A-10L",
      "brand": "Zotac",
      "model": "Zotac GTX 1060 6GB Mini",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "GeForce GTX 1060 GAMING X 6G",
      "brand": "MSI",
      "model": "MSI GTX 1060 6GB Gaming X",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "DUAL-GTX1060-O6G",
      "brand": "Asus",
      "model": "Asus GTX 1060 6GB Dual OC",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "GV-N1060WF2OC-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1060 6GB Windforce OC",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "STRIX-GTX1060-O6G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1060 6GB ROG STRIX OC",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "TURBO-GTX1060-6G",
      "brand": "Asus",
      "model": "Asus GTX 1060 6GB TURBO",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "426018336-3736",
      "brand": "Gainward",
      "model": "Gainward GTX 1060 6GB Pheonix GS",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "GeForce GTX 1060 ARMOR 6G OC",
      "brand": "MSI",
      "model": "MSI GTX 1060 6G Armor OC",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "GTX 1060 ARMOR 6G OCV1",
      "brand": "MSI",
      "model": "MSI GTX 1060 6G Armor OCV1",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "STRIX-GTX1060-6G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1060 6GB ROG STRIX",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "VCGGTX10606PB",
      "brand": "PNY",
      "model": "PNY GTX 1060 6GB",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "VCGGTX10606XGPB-OC",
      "brand": "PNY",
      "model": "PNY GTX 1060 6GB OC",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "GV-N1060XTREME-6GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1060 6GB Xtreme Gaming",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "06G-P4-6267-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1060 6GB Gaming SSC",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "GV-N1060G1GAM-6GD R2",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1060 6GB G1 Gaming R2",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "GeForce GTX 1060 6GT",
      "brand": "MSI",
      "model": "MSI GTX 1060 6GB 6GT OCV1",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "GTX 1060 GAMING 6G",
      "brand": "MSI",
      "model": "MSI GTX 1060 6GB Gaming",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "DUAL-GTX1060-O6G",
      "brand": "Asus",
      "model": "Asus GTX 1060 6GB Dual OC",
      "rank": 77,
      "benchmark": 57,
      "samples": 1033053,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 780-Ti",
      "rank": 78,
      "benchmark": 55.6,
      "samples": 27995,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-780-Ti/Rating/2165"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 390X",
      "rank": 79,
      "benchmark": 55.4,
      "samples": 21747,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390X/Rating/3497"
    },
    {
      "type": "GPU",
      "part number": "R9 390X GAMING 8G",
      "brand": "MSI",
      "model": "MSI R9 390X 8GB Gaming",
      "rank": 79,
      "benchmark": 55.4,
      "samples": 21747,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390X/Rating/3497"
    },
    {
      "type": "GPU",
      "part number": "11241-00-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 390X 8GB TRIPLE Tri-X OC",
      "rank": 79,
      "benchmark": 55.4,
      "samples": 21747,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390X/Rating/3497"
    },
    {
      "type": "GPU",
      "part number": "GV-R939XG1 GAMING-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte R9 390X 8GB G1 Gaming",
      "rank": 79,
      "benchmark": 55.4,
      "samples": 21747,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390X/Rating/3497"
    },
    {
      "type": "GPU",
      "part number": "R9-390X-F28M",
      "brand": "XFX",
      "model": "XFX R9 390X 8GB Double Dissipation",
      "rank": 79,
      "benchmark": 55.4,
      "samples": 21747,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390X/Rating/3497"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 Nano",
      "rank": 80,
      "benchmark": 55,
      "samples": 467,
      "url": "https://gpu.userbenchmark.com/SpeedTest/58413/AMD-Radeon-TM-R9-Fury"
    },
    {
      "type": "GPU",
      "part number": "R9NANO-4GB",
      "brand": "Asus",
      "model": "Asus R9 Nano 4GB",
      "rank": 80,
      "benchmark": 55,
      "samples": 467,
      "url": "https://gpu.userbenchmark.com/SpeedTest/58413/AMD-Radeon-TM-R9-Fury"
    },
    {
      "type": "GPU",
      "part number": "R9NANO-4G-WHITE",
      "brand": "Asus",
      "model": "Asus R9 Nano 4GB White",
      "rank": 80,
      "benchmark": 55,
      "samples": 467,
      "url": "https://gpu.userbenchmark.com/SpeedTest/58413/AMD-Radeon-TM-R9-Fury"
    },
    {
      "type": "GPU",
      "part number": "GV-R9NANO-4GD-B",
      "brand": "Gigabyte",
      "model": "Gigabyte R9 Nano 4GB",
      "rank": 80,
      "benchmark": 55,
      "samples": 467,
      "url": "https://gpu.userbenchmark.com/SpeedTest/58413/AMD-Radeon-TM-R9-Fury"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 580",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "RX 580 GAMING X 8G",
      "brand": "MSI",
      "model": "MSI RX 580 8GB Gaming X",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "RX 580 GAMING X 4G",
      "brand": "MSI",
      "model": "MSI RX 580 4GB Gaming X",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "GV-RX580XTRAORUS-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 580 8GB AORUS XTR",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "RX 580 ARMOR 8G OC",
      "brand": "MSI",
      "model": "MSI RX 580  8GB Armor OC",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "RX 580 ARMOR 4G OC",
      "brand": "MSI",
      "model": "MSI RX 580  4GB Armor OC",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-RX580-O8G-GAMING",
      "brand": "Asus",
      "model": "Asus RX 580 8GB ROG Strix",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "GV-RX580GAMING-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 580 8GB Gaming",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "GV-RX580AORUS-8GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 580 8GB AORUS",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "11265-05-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 580 8GB Pulse",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "RX-580P4DFD6",
      "brand": "XFX",
      "model": "XFX RX 580 4GB OC+",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "RX-580P8DFD6",
      "brand": "XFX",
      "model": "XFX RX 580 8GB OC+",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "RX-580P8DBD6",
      "brand": "XFX",
      "model": "XFX RX 580 8GB Black OC+",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "RX-580P8DFD6",
      "brand": "XFX",
      "model": "XFX RX 580 8GB GTS XXX",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "AXRX 580 8GBD5-3DHDV2/OC",
      "brand": "PowerColor",
      "model": "PowerColor RX 580 8GB Red Dragon V2",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "11265-01-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 580 8GB Pulse Nitro+ RX",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "DUAL RX 580 4GB OC",
      "brand": "Asus",
      "model": "Asus RX 580 4GB Dual OC",
      "rank": 81,
      "benchmark": 54.4,
      "samples": 674318,
      "url": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1060-3GB",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "DUAL-GTX1060-O3G",
      "brand": "Asus",
      "model": "Asus GTX 1060 3GB Dual OC",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "ZT-P10610A-10L",
      "brand": "Zotac",
      "model": "Zotac GTX 1060 3GB Mini",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "03G-P4-6160-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1060 3GB Gaming",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "03G-P4-6162-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1060 3GB SC Gaming",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "GeForce GTX 1060 GAMING X 3G",
      "brand": "MSI",
      "model": "MSI GTX 1060 3GB Gaming X",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "GTX 1060 GAMING X 3G",
      "brand": "MSI",
      "model": "MSI GTX 1060 3GB Gaming X",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "GV-N1060WF2OC-3GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1060 3GB Windforce OC",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "GV-N1060G1GAMING-3GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1060 3GB G1 Gaming",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "GV-N1060IXOC-3GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1060 3GB Mini ITX OC",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "GTX 1060 3GT OC",
      "brand": "MSI",
      "model": "MSI GTX 1060 3GB 3GT OC",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "GTX 1060 ARMOR 3G OCV1",
      "brand": "MSI",
      "model": "MSI GTX 1060 3GB ARMOR 3G OCV1",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "GV-N1060G1GAM-3GD R2",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1060 3GB G1 Gaming R2",
      "rank": 82,
      "benchmark": 52.7,
      "samples": 459419,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX Titan Black",
      "rank": 83,
      "benchmark": 52.6,
      "samples": 3033,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-Titan-Black/Rating/3158"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 290X",
      "rank": 84,
      "benchmark": 52.6,
      "samples": 23081,
      "url": "https://gpu.userbenchmark.com/AMD-R9-290X/Rating/2166"
    },
    {
      "type": "GPU",
      "part number": "11226-00-40G",
      "brand": "Sapphire",
      "model": "Sapphire R9 290X 4GB TRI-X OC",
      "rank": 84,
      "benchmark": 52.6,
      "samples": 23081,
      "url": "https://gpu.userbenchmark.com/AMD-R9-290X/Rating/2166"
    },
    {
      "type": "GPU",
      "part number": "R9290X-DC2OC-4GD5",
      "brand": "Asus",
      "model": "Asus R9 290X 4GB DirectCU II",
      "rank": 84,
      "benchmark": 52.6,
      "samples": 23081,
      "url": "https://gpu.userbenchmark.com/AMD-R9-290X/Rating/2166"
    },
    {
      "type": "GPU",
      "part number": "R9290XEDFD",
      "brand": "XFX",
      "model": "XFX R9 290X 4GB Double Dissipation",
      "rank": 84,
      "benchmark": 52.6,
      "samples": 23081,
      "url": "https://gpu.userbenchmark.com/AMD-R9-290X/Rating/2166"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 390",
      "rank": 85,
      "benchmark": 50.7,
      "samples": 74744,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "type": "GPU",
      "part number": "R9 390 GAMING 8G",
      "brand": "MSI",
      "model": "MSI R9 390 8GB Gaming",
      "rank": 85,
      "benchmark": 50.7,
      "samples": 74744,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "type": "GPU",
      "part number": "R9-390P-D28M",
      "brand": "XFX",
      "model": "XFX R9 390 8GB Black",
      "rank": 85,
      "benchmark": 50.7,
      "samples": 74744,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "type": "GPU",
      "part number": "R9-390P-8256",
      "brand": "XFX",
      "model": "XFX R9 390 8GB Double Dissipation",
      "rank": 85,
      "benchmark": 50.7,
      "samples": 74744,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "type": "GPU",
      "part number": "R9-390P-F28M",
      "brand": "XFX",
      "model": "XFX R9 390 8GB Double Dissipation",
      "rank": 85,
      "benchmark": 50.7,
      "samples": 74744,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "type": "GPU",
      "part number": "R9-390P-8DF6",
      "brand": "XFX",
      "model": "XFX R9 390 8GB Black Nero",
      "rank": 85,
      "benchmark": 50.7,
      "samples": 74744,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "type": "GPU",
      "part number": "11244-01-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 390 8GB Nitro Tri-X OC +BP",
      "rank": 85,
      "benchmark": 50.7,
      "samples": 74744,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "type": "GPU",
      "part number": "11244-00-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 390 8GB Nitro Tri-X OC",
      "rank": 85,
      "benchmark": 50.7,
      "samples": 74744,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "type": "GPU",
      "part number": "STRIX-R9390-DC3OC-8GD5-GAMING",
      "brand": "Asus",
      "model": "Asus R9 390 8GB STRIX",
      "rank": 85,
      "benchmark": 50.7,
      "samples": 74744,
      "url": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 295X2 (CrossFire Disabled)",
      "rank": 86,
      "benchmark": 50.6,
      "samples": 2285,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11791/AMD-Radeon-R9-200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 970",
      "rank": 87,
      "benchmark": 50.5,
      "samples": 687132,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "type": "GPU",
      "part number": "GTX 970 GAMING 4G",
      "brand": "MSI",
      "model": "MSI GTX 970 4GB Gaming",
      "rank": 87,
      "benchmark": 50.5,
      "samples": 687132,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "type": "GPU",
      "part number": "STRIX-GTX970-DC20C-4GD5",
      "brand": "Asus",
      "model": "ASUS GTX 970 4GB STRIX OC",
      "rank": 87,
      "benchmark": 50.5,
      "samples": 687132,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "type": "GPU",
      "part number": "04G-P4-2974-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 970 4GB Super Clocked ACX 2.0",
      "rank": 87,
      "benchmark": 50.5,
      "samples": 687132,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "type": "GPU",
      "part number": "GV-N970G1 GAMING-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 970 4GB G1 Gaming",
      "rank": 87,
      "benchmark": 50.5,
      "samples": 687132,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "type": "GPU",
      "part number": "GV-N970WF3OC-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 970 4GB OC Windforce",
      "rank": 87,
      "benchmark": 50.5,
      "samples": 687132,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "type": "GPU",
      "part number": "04G-P4-3975-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 970 4GB SSC ACX 2.0+",
      "rank": 87,
      "benchmark": 50.5,
      "samples": 687132,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "type": "GPU",
      "part number": "TURBO-GTX970-OC-4GD5",
      "brand": "Asus",
      "model": "Asus GTX 970 4GB Turbo OC",
      "rank": 87,
      "benchmark": 50.5,
      "samples": 687132,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "type": "GPU",
      "part number": "04G-P4-3978-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 970 4GB FTW+ GAMING ACX 2.0+ w/BP",
      "rank": 87,
      "benchmark": 50.5,
      "samples": 687132,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "type": "GPU",
      "part number": "ZT-90101-10P",
      "brand": "Zotac",
      "model": "Zotac GTX 970 4GB Graphics Card",
      "rank": 87,
      "benchmark": 50.5,
      "samples": 687132,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 480",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "21260-00-20G",
      "brand": "AMD",
      "model": "Sapphire RX 480 8GB",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "RX-480M4BFA6",
      "brand": "AMD",
      "model": "XFX RX 480 4GB 1266 MHz",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "21260-01-20G",
      "brand": "AMD",
      "model": "Sapphire RX 480 4GB",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "Radeon RX 480 8G",
      "brand": "AMD",
      "model": "MSI RX 480 8GB",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "RX-480M8BBA6",
      "brand": "XFX",
      "model": "XFX RX 480 8GB 1328 MHz",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "RX480M8BFA6",
      "brand": "XFX",
      "model": "XFX RX 480 8GB 1288 MHz",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "RX-480P8DFA6",
      "brand": "XFX",
      "model": "XFX RX 480 8GB LED 1288 MHz",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "RX-480P836BM",
      "brand": "XFX",
      "model": "XFX RX 480 8GB XXX 1288 MHz",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "RX-480P8DBA6",
      "brand": "XFX",
      "model": "XFX RX 480 8GB Black 1338 MHz",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "RX-480P4JFC6",
      "brand": "XFX",
      "model": "XFX RX 480 4GB RS",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "RX-480P8LFB6",
      "brand": "XFX",
      "model": "XFX RX 480 8GB RS XXX 1288 MHz",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "RX480-8G",
      "brand": "Asus",
      "model": "Asus RX 480 8GB",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "11260-07-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 480 8GB NITRO+",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "11260-02-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 480 4GB NITRO+",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "100406NT+4GOCL",
      "brand": "Sapphire",
      "model": "Sapphire RX 480 4GB NITRO+",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "11260-01-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 480 8GB NITRO+",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "AXRX480 8GBD5-3DH/OC",
      "brand": "PowerColor",
      "model": "PowerColor RX 480 8GB Red Devil",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "Radeon RX 480 GAMING X 8G",
      "brand": "MSI",
      "model": "MSI RX 480 8GB Gaming X",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "Radeon RX 480 GAMING X 4G",
      "brand": "MSI",
      "model": "MSI RX 480 4GB Gaming X",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "RX 480 ARMOR 8G OC",
      "brand": "MSI",
      "model": "MSI RX 480 8GB Armor OC",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "RX 480 ARMOR 4G OC",
      "brand": "MSI",
      "model": "MSI RX 480 4GB Armor OC",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "STRIX-RX480-O8G-GAMING",
      "brand": "Asus",
      "model": "Asus RX 480 8GB ROG STRIX OC",
      "rank": 88,
      "benchmark": 48.3,
      "samples": 206605,
      "url": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 780",
      "rank": 89,
      "benchmark": 47.5,
      "samples": 48452,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-780/Rating/2164"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX Titan",
      "rank": 90,
      "benchmark": 47.4,
      "samples": 5310,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-Titan/Rating/2191"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 290",
      "rank": 91,
      "benchmark": 47.2,
      "samples": 57476,
      "url": "https://gpu.userbenchmark.com/AMD-R9-290/Rating/2171"
    },
    {
      "type": "GPU",
      "part number": "11227-13-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 290 4GB TRI-X OC",
      "rank": 91,
      "benchmark": 47.2,
      "samples": 57476,
      "url": "https://gpu.userbenchmark.com/AMD-R9-290/Rating/2171"
    },
    {
      "type": "GPU",
      "part number": "R9290AEDFD",
      "brand": "XFX",
      "model": "XFX R9 290 4GB Double Dissipation",
      "rank": 91,
      "benchmark": 47.2,
      "samples": 57476,
      "url": "https://gpu.userbenchmark.com/AMD-R9-290/Rating/2171"
    },
    {
      "type": "GPU",
      "part number": "R9290AEDBD",
      "brand": "XFX",
      "model": "XFX R9 290 4GB Black Double Dissipation",
      "rank": 91,
      "benchmark": 47.2,
      "samples": 57476,
      "url": "https://gpu.userbenchmark.com/AMD-R9-290/Rating/2171"
    },
    {
      "type": "GPU",
      "part number": "R9 290 GAMING 4G",
      "brand": "MSI",
      "model": "MSI R9 290 4GB GAMING",
      "rank": 91,
      "benchmark": 47.2,
      "samples": 57476,
      "url": "https://gpu.userbenchmark.com/AMD-R9-290/Rating/2171"
    },
    {
      "type": "GPU",
      "part number": "11227-04-40G",
      "brand": "Sapphire",
      "model": "Sapphire R9 290 4GB VAPOR-X TRI-X OC",
      "rank": 91,
      "benchmark": 47.2,
      "samples": 57476,
      "url": "https://gpu.userbenchmark.com/AMD-R9-290/Rating/2171"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 780 4GB",
      "rank": 92,
      "benchmark": 47.1,
      "samples": 818,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11282/NVIDIA-GeForce-GTX-780"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1060 (Mobile)",
      "rank": 93,
      "benchmark": 46.7,
      "samples": 131502,
      "url": "https://gpu.userbenchmark.com/SpeedTest/164336/NVIDIA-GeForce-GTX-1060"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 570",
      "rank": 94,
      "benchmark": 46.5,
      "samples": 339569,
      "url": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "type": "GPU",
      "part number": "RX 570 ARMOR 4G OC",
      "brand": "MSI",
      "model": "MSI RX 570 4G Armor OC",
      "rank": 94,
      "benchmark": 46.5,
      "samples": 339569,
      "url": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "type": "GPU",
      "part number": "RX 570 GAMING X 4G",
      "brand": "MSI",
      "model": "MSI RX 570 4GB Gaming X",
      "rank": 94,
      "benchmark": 46.5,
      "samples": 339569,
      "url": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "type": "GPU",
      "part number": "GV-RX570GAMING-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 570 4GB Gaming",
      "rank": 94,
      "benchmark": 46.5,
      "samples": 339569,
      "url": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "type": "GPU",
      "part number": "GV-RX570AORUS-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 570 4GB AORUS",
      "rank": 94,
      "benchmark": 46.5,
      "samples": 339569,
      "url": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "type": "GPU",
      "part number": "RX 570 ARMOR 8G OC",
      "brand": "MSI",
      "model": "MSI RX 570 8G Armor OC",
      "rank": 94,
      "benchmark": 46.5,
      "samples": 339569,
      "url": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "type": "GPU",
      "part number": "ROG-STRIX-RX570-O4G-GAMING",
      "brand": "Asus",
      "model": "Asus RX 570 4GB ROG Strix",
      "rank": 94,
      "benchmark": 46.5,
      "samples": 339569,
      "url": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "type": "GPU",
      "part number": "AXRX 570 4GBD5-3DHD/OC",
      "brand": "PowerColor",
      "model": "PowerColor RX 570 4GB Red Dragon",
      "rank": 94,
      "benchmark": 46.5,
      "samples": 339569,
      "url": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "type": "GPU",
      "part number": "RX-570P4DFD6",
      "brand": "XFX",
      "model": "XFX RX 570 4GB Twin",
      "rank": 94,
      "benchmark": 46.5,
      "samples": 339569,
      "url": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "type": "GPU",
      "part number": "RX-570P427D6",
      "brand": "XFX",
      "model": "XFX RX 570 4GB Twin",
      "rank": 94,
      "benchmark": 46.5,
      "samples": 339569,
      "url": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "type": "GPU",
      "part number": "RX-570P4DFDR",
      "brand": "XFX",
      "model": "XFX RX 570 4GB Twin",
      "rank": 94,
      "benchmark": 46.5,
      "samples": 339569,
      "url": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "type": "GPU",
      "part number": "RX-570P8DFD6",
      "brand": "XFX",
      "model": "XFX RX 570 4GB Twin XXX",
      "rank": 94,
      "benchmark": 46.5,
      "samples": 339569,
      "url": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K6000",
      "rank": 95,
      "benchmark": 46,
      "samples": 740,
      "url": "https://gpu.userbenchmark.com/Nvidia-Quadro-K6000/Rating/2837"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1060 (Mobile Max-Q)",
      "rank": 96,
      "benchmark": 43.1,
      "samples": 28581,
      "url": "https://gpu.userbenchmark.com/SpeedTest/325746/NVIDIA-GeForce-GTX-1060-with-Max-Q-Design"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1650",
      "rank": 97,
      "benchmark": 43,
      "samples": 105422,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "type": "GPU",
      "part number": "G1650VXS4C",
      "brand": "MSI",
      "model": "MSI GTX 1650 4GB Ventus XS OC",
      "rank": 97,
      "benchmark": 43,
      "samples": 105422,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "type": "GPU",
      "part number": "ZT-T16500F-10L",
      "brand": "Zotac",
      "model": "Zotac GTX 1650 4GB OC Compact",
      "rank": 97,
      "benchmark": 43,
      "samples": 105422,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "type": "GPU",
      "part number": "PH-GTX1650-O4G",
      "brand": "Asus",
      "model": "Asus GTX 1650 4GB Phoenix",
      "rank": 97,
      "benchmark": 43,
      "samples": 105422,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "type": "GPU",
      "part number": "GV-N1650OC-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1650 4GB OC",
      "rank": 97,
      "benchmark": 43,
      "samples": 105422,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "type": "GPU",
      "part number": "GV-N1650IXOC-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1650 4GB Mini ITX OC",
      "rank": 97,
      "benchmark": 43,
      "samples": 105422,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "type": "GPU",
      "part number": "04G-P4-1153-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1650 4GB XC Gaming",
      "rank": 97,
      "benchmark": 43,
      "samples": 105422,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "type": "GPU",
      "part number": "GTX 1650 Gaming X 4G",
      "brand": "MSI",
      "model": "MSI GTX 1650 4GB Gaming X",
      "rank": 97,
      "benchmark": 43,
      "samples": 105422,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon Pro 5500M",
      "rank": 98,
      "benchmark": 43,
      "samples": 1313,
      "url": "https://gpu.userbenchmark.com/SpeedTest/960765/AMD-Radeon-Pro-5500M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1650-Ti (Mobile)",
      "rank": 99,
      "benchmark": 41.9,
      "samples": 12755,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1091296/NVIDIA-GeForce-GTX-1650-Ti"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1650 (Mobile)",
      "rank": 100,
      "benchmark": 41.5,
      "samples": 51264,
      "url": "https://gpu.userbenchmark.com/SpeedTest/775280/NVIDIA-GeForce-GTX-1650"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 470",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "Radeon RX 470 GAMING X 4G",
      "brand": "MSI",
      "model": "MSI RX 470 4GB Gaming X",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "Radeon RX 470 GAMING X 8G",
      "brand": "MSI",
      "model": "MSI RX 470 8GB Gaming X",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "11256-02-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 470 8GB NITRO+",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "11256-01-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 470 4GB NITRO+",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "11256-00-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 470 4GB",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "100407-4GOCL",
      "brand": "Sapphire",
      "model": "Sapphire RX 470 4GB",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "STRIX-RX470-O4G-GAMING",
      "brand": "Asus",
      "model": "Asus RX 470 4GB ROG STRIX OC",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "GV-RX470G1 GAMING-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 470 4GB G1 Gaming",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "AXRX 470 4GBD5-3DH/OC",
      "brand": "PowerColor",
      "model": "PowerColor RX 470 4GB Red Devil/Dragon",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "HS-470R4LCNR/HS-470R4LTNR",
      "brand": "PwrHis",
      "model": "HIS RX 470 4GB IceQ X² OC",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "RX-470P4SFD5",
      "brand": "XFX",
      "model": "XFX RX 470 4GB Single Fan",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "RX-470P4LFB6",
      "brand": "XFX",
      "model": "XFX RX 470 4GB Black",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "Radeon RX 470 ARMOR 4G OC",
      "brand": "MSI",
      "model": "MSI RX 470 4GB ARMOR OC",
      "rank": 101,
      "benchmark": 41.4,
      "samples": 75507,
      "url": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Vmware",
      "model": "SVGA 3D",
      "rank": 102,
      "benchmark": 41.4,
      "samples": 4759,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7772/VMware-SVGA-3D"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro P2000",
      "rank": 103,
      "benchmark": 40.6,
      "samples": 9911,
      "url": "https://gpu.userbenchmark.com/SpeedTest/257811/NVIDIA-Quadro-P2000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 980M",
      "rank": 104,
      "benchmark": 40.5,
      "samples": 10585,
      "url": "https://gpu.userbenchmark.com/SpeedTest/15596/NVIDIA-GeForce-GTX-980M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 690 (SLI Disabled)",
      "rank": 105,
      "benchmark": 40.1,
      "samples": 4988,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8241/NVIDIA-GeForce-GTX-690"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 7970",
      "rank": 106,
      "benchmark": 39.8,
      "samples": 6140,
      "url": "https://gpu.userbenchmark.com/AMD-HD-7970/Rating/2163"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 380X",
      "rank": 107,
      "benchmark": 39.6,
      "samples": 16146,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380X/Rating/3532"
    },
    {
      "type": "GPU",
      "part number": "R9-380X-F24M",
      "brand": "XFX",
      "model": "XFX R9 380X 4GB Black DD XXX OC",
      "rank": 107,
      "benchmark": 39.6,
      "samples": 16146,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380X/Rating/3532"
    },
    {
      "type": "GPU",
      "part number": "11250-01-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 380X 4GB Nitro Dual-X OC",
      "rank": 107,
      "benchmark": 39.6,
      "samples": 16146,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380X/Rating/3532"
    },
    {
      "type": "GPU",
      "part number": "GV-R938XG1 GAMING-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte R9 380X 4GB Gaming",
      "rank": 107,
      "benchmark": 39.6,
      "samples": 16146,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380X/Rating/3532"
    },
    {
      "type": "GPU",
      "part number": "AXR9 280X 3GBD5-T2DHE/OC",
      "brand": "PowerColor",
      "model": "PowerColor R9 280X 3GB OC",
      "rank": 107,
      "benchmark": 39.6,
      "samples": 16146,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380X/Rating/3532"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 280X",
      "rank": 108,
      "benchmark": 39,
      "samples": 77614,
      "url": "https://gpu.userbenchmark.com/AMD-R9-280X/Rating/2192"
    },
    {
      "type": "GPU",
      "part number": "11221-00-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 280X 3GB Dual-X OC",
      "rank": 108,
      "benchmark": 39,
      "samples": 77614,
      "url": "https://gpu.userbenchmark.com/AMD-R9-280X/Rating/2192"
    },
    {
      "type": "GPU",
      "part number": "11221-20-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 280X 3GB VAPOR-X",
      "rank": 108,
      "benchmark": 39,
      "samples": 77614,
      "url": "https://gpu.userbenchmark.com/AMD-R9-280X/Rating/2192"
    },
    {
      "type": "GPU",
      "part number": "11221-01-40G",
      "brand": "Sapphire",
      "model": "Sapphire R9 280X 3GB TOXIC",
      "rank": 108,
      "benchmark": 39,
      "samples": 77614,
      "url": "https://gpu.userbenchmark.com/AMD-R9-280X/Rating/2192"
    },
    {
      "type": "GPU",
      "part number": "GV-R928XOC-3GD REV3",
      "brand": "Gigabyte",
      "model": "Gigabyte R9 280X 3GB WINDFORCE OC REV3",
      "rank": 108,
      "benchmark": 39,
      "samples": 77614,
      "url": "https://gpu.userbenchmark.com/AMD-R9-280X/Rating/2192"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro P3000",
      "rank": 109,
      "benchmark": 38.8,
      "samples": 800,
      "url": "https://gpu.userbenchmark.com/SpeedTest/264483/NVIDIA-Quadro-P3000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "FirePro W9000",
      "rank": 110,
      "benchmark": 36.6,
      "samples": 68,
      "url": "https://gpu.userbenchmark.com/AMD-FirePro-W9000/Rating/2841"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1650 (Mobile Max-Q)",
      "rank": 111,
      "benchmark": 36.5,
      "samples": 4658,
      "url": "https://gpu.userbenchmark.com/SpeedTest/790279/NVIDIA-GeForce-GTX-1650-with-Max-Q-Design"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon RX Vega M GH",
      "rank": 112,
      "benchmark": 36.4,
      "samples": 2634,
      "url": "https://gpu.userbenchmark.com/SpeedTest/422266/Radeon-RX-Vega-M-GH-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 770",
      "rank": 113,
      "benchmark": 36.3,
      "samples": 105642,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-770/Rating/2174"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon Pro 5300M",
      "rank": 114,
      "benchmark": 36.2,
      "samples": 604,
      "url": "https://gpu.userbenchmark.com/SpeedTest/965657/AMD-Radeon-Pro-5300M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 7990 (CrossFire Disabled)",
      "rank": 115,
      "benchmark": 36,
      "samples": 1016,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7985/AMD-Radeon-HD-7900"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 380",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "R9 380 GAMING 4G",
      "brand": "MSI",
      "model": "MSI R9 380 GAMING 4GB",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "11242-13-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 380 4GB NITRO",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "11242-02-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 380 2GB Dual-X OC",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "11242-00-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 380 2GB Dual-X OC",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "GV-R938G1 GAMING-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte R9 380 4GB G1",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "GV-R938WF2-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte R9 380 4GB G1 Windforce",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "R9-380P-2DF5",
      "brand": "XFX",
      "model": "XFX R9 380 2GB DD Edition 2DF5",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "R9-380P-F22M",
      "brand": "XFX",
      "model": "XFX R9 380 2GB DD Edition F22M",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "R9-380P-4255",
      "brand": "XFX",
      "model": "XFX R9 380 4GB DD Edition 4255",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "R9-380P-4DF5",
      "brand": "XFX",
      "model": "XFX R9 380 4GB 4DF5",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "STRIX-R9380-DC2OC-2GD5-GAMING",
      "brand": "Asus",
      "model": "Asus R9 380 2GB STRIX",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "STRIX-R9380-DC2OC-4GD5-GAMING",
      "brand": "Asus",
      "model": "Asus R9 380  4GB STRIX GAMING",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "AXR9 380 4GBD5-PPDHE",
      "brand": "PowerColor",
      "model": "PowerColor R9 380 4GB PCS+",
      "rank": 116,
      "benchmark": 34.3,
      "samples": 62321,
      "url": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 960",
      "rank": 117,
      "benchmark": 33.7,
      "samples": 349595,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "type": "GPU",
      "part number": "02G-P4-2966-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 960 2GB SuperSC ACX 2.0+",
      "rank": 117,
      "benchmark": 33.7,
      "samples": 349595,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "type": "GPU",
      "part number": "STRIX-GTX960-DC2OC-2GD5",
      "brand": "Asus",
      "model": "ASUS GTX 960 2GB STRIX",
      "rank": 117,
      "benchmark": 33.7,
      "samples": 349595,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "type": "GPU",
      "part number": "GTX 960 GAMING 2G",
      "brand": "MSI",
      "model": "MSI GTX 960 2GB Gaming",
      "rank": 117,
      "benchmark": 33.7,
      "samples": 349595,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "type": "GPU",
      "part number": "GTX 960 GAMING 4G",
      "brand": "MSI",
      "model": "MSI GTX 960 4GB Gaming",
      "rank": 117,
      "benchmark": 33.7,
      "samples": 349595,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "type": "GPU",
      "part number": "04G-P4-3967-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 960 4GB SuperSC ACX 2.0 Backplate",
      "rank": 117,
      "benchmark": 33.7,
      "samples": 349595,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "type": "GPU",
      "part number": "GV-N960WF2OC-2GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 960 2GB Windforce 2X",
      "rank": 117,
      "benchmark": 33.7,
      "samples": 349595,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "type": "GPU",
      "part number": "GV-N960OC-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 960 2GB OC",
      "rank": 117,
      "benchmark": 33.7,
      "samples": 349595,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "type": "GPU",
      "part number": "STRIX-GTX960-DC2OC-4GD5",
      "brand": "Asus",
      "model": "ASUS GTX 960 4GB STRIX",
      "rank": 117,
      "benchmark": 33.7,
      "samples": 349595,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "type": "GPU",
      "part number": "04G-P4-3969-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 960 4GB FTW GAMING ACX 2.0+",
      "rank": 117,
      "benchmark": 33.7,
      "samples": 349595,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 680",
      "rank": 118,
      "benchmark": 33.7,
      "samples": 29785,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-680/Rating/3148"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 285",
      "rank": 119,
      "benchmark": 33.2,
      "samples": 4186,
      "url": "https://gpu.userbenchmark.com/AMD-R9-285/Rating/3174"
    },
    {
      "type": "GPU",
      "part number": "R9 285 GAMING 2G",
      "brand": "MSI",
      "model": "MSI R9 285 2GB GAMING",
      "rank": 119,
      "benchmark": 33.2,
      "samples": 4186,
      "url": "https://gpu.userbenchmark.com/AMD-R9-285/Rating/3174"
    },
    {
      "type": "GPU",
      "part number": "11235-03-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 285 2GB Dual-X OC",
      "rank": 119,
      "benchmark": 33.2,
      "samples": 4186,
      "url": "https://gpu.userbenchmark.com/AMD-R9-285/Rating/3174"
    },
    {
      "type": "GPU",
      "part number": "AXR9 285 2GBD5-TDHE",
      "brand": "PowerColor",
      "model": "PowerColor R9 285 2GB Turbo Duo",
      "rank": 119,
      "benchmark": 33.2,
      "samples": 4186,
      "url": "https://gpu.userbenchmark.com/AMD-R9-285/Rating/3174"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 280",
      "rank": 120,
      "benchmark": 32.8,
      "samples": 36161,
      "url": "https://gpu.userbenchmark.com/AMD-R9-280/Rating/2241"
    },
    {
      "type": "GPU",
      "part number": "11230-00-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 280 3GB Dual-X",
      "rank": 120,
      "benchmark": 32.8,
      "samples": 36161,
      "url": "https://gpu.userbenchmark.com/AMD-R9-280/Rating/2241"
    },
    {
      "type": "GPU",
      "part number": "R9280ATDFD",
      "brand": "XFX",
      "model": "XFX R9 280 3GB Double Dissipation",
      "rank": 120,
      "benchmark": 32.8,
      "samples": 36161,
      "url": "https://gpu.userbenchmark.com/AMD-R9-280/Rating/2241"
    },
    {
      "type": "GPU",
      "part number": "R9280ATDBD",
      "brand": "XFX",
      "model": "XFX R9 280 3GB Double Dissipation Black",
      "rank": 120,
      "benchmark": 32.8,
      "samples": 36161,
      "url": "https://gpu.userbenchmark.com/AMD-R9-280/Rating/2241"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K5200",
      "rank": 121,
      "benchmark": 32.2,
      "samples": 1183,
      "url": "https://gpu.userbenchmark.com/SpeedTest/20811/NVIDIA-Quadro-K5200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro M4000",
      "rank": 122,
      "benchmark": 31.7,
      "samples": 6280,
      "url": "https://gpu.userbenchmark.com/SpeedTest/37687/NVIDIA-Quadro-M4000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 970M",
      "rank": 123,
      "benchmark": 31.5,
      "samples": 20155,
      "url": "https://gpu.userbenchmark.com/SpeedTest/17319/NVIDIA-GeForce-GTX-970M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 7950",
      "rank": 124,
      "benchmark": 31.1,
      "samples": 31839,
      "url": "https://gpu.userbenchmark.com/AMD-HD-7950/Rating/2160"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1050-Ti",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "04G-P4-6253-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1050 Ti 4GB SC Single Fan",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "04G-P4-6251-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1050 Ti 4GB Gaming Single Fan",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "04G-P4-6255-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1050 Ti 4GB SSC GAMING ACX 3.0",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "GTX 1050 TI 4G OC",
      "brand": "MSI",
      "model": "MSI GTX 1050 Ti 4GB OC",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "GTX 1050 TI 4GT OC",
      "brand": "MSI",
      "model": "MSI GTX 1050 Ti 4GB OC Twin",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "GV-N105TOC-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1050 Ti 4GB OC",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "ZT-P10510A-10L",
      "brand": "Zotac",
      "model": "Zotac GTX 1050 Ti 4GB Mini",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "ZT-P10510B-10L",
      "brand": "Zotac",
      "model": "Zotac GTX 1050 Ti 4GB Twin",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "GV-N105TWF2OC-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1050 Ti 4GB Twin",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "GeForce GTX 1050 TI GAMING X 4G",
      "brand": "MSI",
      "model": "MSI GTX 1050 Ti 4GB GAMING X",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "EX-GTX1050TI-4G",
      "brand": "Asus",
      "model": "Asus GTX 1050 Ti 4GB Expedition",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "STRIX-GTX1050TI-O4G-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 1050 Ti 4GB ROG STRIX",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "04G-P4-6258-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1050 Ti 4GB FTW GAMING ACX 3.0",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "GV-N105TD5-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1050 Ti 4GB 1430 MHz",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "GV-N105TG1GAMING-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1050 Ti 4GB G1 GAMING",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "VCGGTX1050T4PB",
      "brand": "PNY",
      "model": "PNY GTX 1050 Ti 4GB Single",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "Cerberus-GTX1050Ti-O4G",
      "brand": "Asus",
      "model": "Asus GTX 1050 Ti 4GB Cerberus OC",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "GV-N105TOC-4GL",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1050 Ti 4GB OC Low Profile",
      "rank": 125,
      "benchmark": 31,
      "samples": 771156,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1050-Ti (Mobile)",
      "rank": 126,
      "benchmark": 31,
      "samples": 97492,
      "url": "https://gpu.userbenchmark.com/SpeedTest/223242/NVIDIA-GeForce-GTX-1050-Ti"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 670",
      "rank": 127,
      "benchmark": 29.3,
      "samples": 40249,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-670/Rating/2181"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 880M",
      "rank": 128,
      "benchmark": 28.5,
      "samples": 2611,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8540/NVIDIA-GeForce-GTX-880M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 270X",
      "rank": 129,
      "benchmark": 27.9,
      "samples": 66254,
      "url": "https://gpu.userbenchmark.com/AMD-R9-270X/Rating/2188"
    },
    {
      "type": "GPU",
      "part number": "11217-01-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 270X 2GB Dual-X Boost OC",
      "rank": 129,
      "benchmark": 27.9,
      "samples": 66254,
      "url": "https://gpu.userbenchmark.com/AMD-R9-270X/Rating/2188"
    },
    {
      "type": "GPU",
      "part number": "11217-04-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 270X 4GB Dual-X Boost OC",
      "rank": 129,
      "benchmark": 27.9,
      "samples": 66254,
      "url": "https://gpu.userbenchmark.com/AMD-R9-270X/Rating/2188"
    },
    {
      "type": "GPU",
      "part number": "GV-R927XOC-2GD",
      "brand": "Gigabyte",
      "model": "Gigabyte R9 270X 2GB WINDFORCE",
      "rank": 129,
      "benchmark": 27.9,
      "samples": 66254,
      "url": "https://gpu.userbenchmark.com/AMD-R9-270X/Rating/2188"
    },
    {
      "type": "GPU",
      "part number": "GV-R927XOC-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte R9 270X 4GB WINDFORCE",
      "rank": 129,
      "benchmark": 27.9,
      "samples": 66254,
      "url": "https://gpu.userbenchmark.com/AMD-R9-270X/Rating/2188"
    },
    {
      "type": "GPU",
      "part number": "R9270X-DC2T-2GD5",
      "brand": "Asus",
      "model": "Asus R9 270X 2GB DirectCU II",
      "rank": 129,
      "benchmark": 27.9,
      "samples": 66254,
      "url": "https://gpu.userbenchmark.com/AMD-R9-270X/Rating/2188"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 660-Ti",
      "rank": 130,
      "benchmark": 27.9,
      "samples": 29199,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-660-Ti/Rating/2183"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 760",
      "rank": 131,
      "benchmark": 27.7,
      "samples": 138082,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-760/Rating/2159"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 760 Ti OEM",
      "rank": 132,
      "benchmark": 27.5,
      "samples": 1564,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10856/NVIDIA-GeForce-GTX-760-Ti-OEM"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 7870",
      "rank": 133,
      "benchmark": 27.1,
      "samples": 35350,
      "url": "https://gpu.userbenchmark.com/AMD-HD-7870/Rating/2161"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1050",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "ZT-P10500A-10L",
      "brand": "Zotac",
      "model": "Zotac GTX 1050 2GB Mini",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "GTX 1050 2G OC",
      "brand": "MSI",
      "model": "MSI GTX 1050 2GB OC",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "GTX 1050 2GT OC",
      "brand": "MSI",
      "model": "MSI GTX 1050 2GB TWIN OC",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "GTX 1050 GAMING X 2G",
      "brand": "MSI",
      "model": "MSI GTX 1050 2GB GAMING X",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "GV-N1050OC-2GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1050 2GB OC",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "02G-P4-6152-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1050 2GB SC GAMING",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "GV-N1050D5-2GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1050 2GB OC Single",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "GV-N1050WF2OC-2GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 1050 2GB Windforce",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "EX-GTX1050-2G",
      "brand": "Asus",
      "model": "Asus GTX 1050 2GB Expedition",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "02G-P4-6154-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1050 2GB SSC GAMING",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "VCGGTX10502PB",
      "brand": "PNY",
      "model": "PNY GTX 1050 2GB",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "02G-P4-6150-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 1050 2GB GAMING",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "PH-GTX1050-2G",
      "brand": "Asus",
      "model": "Asus GTX 1050 2GB Phoenix",
      "rank": 134,
      "benchmark": 27,
      "samples": 220159,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1050-Ti (Mobile Max-Q)",
      "rank": 135,
      "benchmark": 26.5,
      "samples": 7729,
      "url": "https://gpu.userbenchmark.com/SpeedTest/419871/NVIDIA-GeForce-GTX-1050-Ti-with-Max-Q-Design"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 950",
      "rank": 136,
      "benchmark": 26,
      "samples": 97224,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "type": "GPU",
      "part number": "ZT-90601-10L",
      "brand": "Zotac",
      "model": "Zotac GTX 950 2GB",
      "rank": 136,
      "benchmark": 26,
      "samples": 97224,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "type": "GPU",
      "part number": "ZT-90602-10M",
      "brand": "Zotac",
      "model": "Zotac GTX 950 2GB OC",
      "rank": 136,
      "benchmark": 26,
      "samples": 97224,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "type": "GPU",
      "part number": "ZT-90603-10M",
      "brand": "Zotac",
      "model": "Zotac GTX 950 2GB AMP!",
      "rank": 136,
      "benchmark": 26,
      "samples": 97224,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "type": "GPU",
      "part number": "02G-P4-2951-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 950 2GB SC",
      "rank": 136,
      "benchmark": 26,
      "samples": 97224,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "type": "GPU",
      "part number": "02G-P4-2958-KR",
      "brand": "EVGA",
      "model": "EVGA GeForce GTX 950 2GB ACX 2.0",
      "rank": 136,
      "benchmark": 26,
      "samples": 97224,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "type": "GPU",
      "part number": "02G-P4-2957-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 950 2GB SSC ACX",
      "rank": 136,
      "benchmark": 26,
      "samples": 97224,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "type": "GPU",
      "part number": "STRIX-GTX950-DC2OC-2GD5-GAMING",
      "brand": "Asus",
      "model": "Asus GTX 950 2GB STRIX GAMING",
      "rank": 136,
      "benchmark": 26,
      "samples": 97224,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "type": "GPU",
      "part number": "GV-N950WF2OC-2GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 950 2GB Windforce",
      "rank": 136,
      "benchmark": 26,
      "samples": 97224,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "type": "GPU",
      "part number": "GTX 950 GAMING 2G",
      "brand": "MSI",
      "model": "MSI GTX 950 2GB GAMING",
      "rank": 136,
      "benchmark": 26,
      "samples": 97224,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "type": "GPU",
      "part number": "GTX 950 2GD5 OC",
      "brand": "MSI",
      "model": "MSI GTX 950 2GB OC",
      "rank": 136,
      "benchmark": 26,
      "samples": 97224,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "type": "GPU",
      "part number": "GV-N950XTREME-2GD",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 950 2GB XTREME",
      "rank": 136,
      "benchmark": 26,
      "samples": 97224,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 780M",
      "rank": 137,
      "benchmark": 25.5,
      "samples": 3803,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7760/NVIDIA-GeForce-GTX-780M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon RX Vega M GL",
      "rank": 138,
      "benchmark": 25.4,
      "samples": 1143,
      "url": "https://gpu.userbenchmark.com/SpeedTest/453719/Radeon-RX-Vega-M-GL-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 1050 (Mobile)",
      "rank": 139,
      "benchmark": 25,
      "samples": 124520,
      "url": "https://gpu.userbenchmark.com/SpeedTest/211022/NVIDIA-GeForce-GTX-1050"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 590 (SLI Disabled)",
      "rank": 140,
      "benchmark": 24.7,
      "samples": 1060,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8041/NVIDIA-GeForce-GTX-590"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro P1000",
      "rank": 141,
      "benchmark": 24.6,
      "samples": 4096,
      "url": "https://gpu.userbenchmark.com/SpeedTest/271840/NVIDIA-Quadro-P1000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 270",
      "rank": 142,
      "benchmark": 24.6,
      "samples": 40765,
      "url": "https://gpu.userbenchmark.com/AMD-R9-270/Rating/3149"
    },
    {
      "type": "GPU",
      "part number": "R9270-DC2OC-2GD5",
      "brand": "Asus",
      "model": "ASUS R9 270 2GB Direct CU II OC",
      "rank": 142,
      "benchmark": 24.6,
      "samples": 40765,
      "url": "https://gpu.userbenchmark.com/AMD-R9-270/Rating/3149"
    },
    {
      "type": "GPU",
      "part number": "11220-00-20G",
      "brand": "Sapphire",
      "model": "Sapphire R9 270 2GB Dual-X Boost OC",
      "rank": 142,
      "benchmark": 24.6,
      "samples": 40765,
      "url": "https://gpu.userbenchmark.com/AMD-R9-270/Rating/3149"
    },
    {
      "type": "GPU",
      "part number": "GV-R927OC-2GD",
      "brand": "Gigabyte",
      "model": "Gigabyte R9 270 2GB OC",
      "rank": 142,
      "benchmark": 24.6,
      "samples": 40765,
      "url": "https://gpu.userbenchmark.com/AMD-R9-270/Rating/3149"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 965M",
      "rank": 143,
      "benchmark": 23.9,
      "samples": 3393,
      "url": "https://gpu.userbenchmark.com/SpeedTest/24481/NVIDIA-GeForce-GTX-965M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 870M",
      "rank": 144,
      "benchmark": 23.7,
      "samples": 2914,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10421/NVIDIA-GeForce-GTX-870M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 560",
      "rank": 145,
      "benchmark": 22.9,
      "samples": 44512,
      "url": "https://gpu.userbenchmark.com/AMD-RX-560/Rating/3926"
    },
    {
      "type": "GPU",
      "part number": "RX 560 AERO ITX 4G OC",
      "brand": "MSI",
      "model": "MSI RX 560 4GB Aero ITX",
      "rank": 145,
      "benchmark": 22.9,
      "samples": 44512,
      "url": "https://gpu.userbenchmark.com/AMD-RX-560/Rating/3926"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "FirePro W7000",
      "rank": 146,
      "benchmark": 22.9,
      "samples": 67,
      "url": "https://gpu.userbenchmark.com/AMD-FirePro-W7000/Rating/2842"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 680MX",
      "rank": 147,
      "benchmark": 22.5,
      "samples": 247,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8956/NVIDIA-GeForce-GTX-680MX"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K5100M",
      "rank": 148,
      "benchmark": 22.2,
      "samples": 510,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11274/NVIDIA-Quadro-K5100M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K5000",
      "rank": 149,
      "benchmark": 22.1,
      "samples": 2299,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9098/NVIDIA-Quadro-K5000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K4200",
      "rank": 150,
      "benchmark": 21.9,
      "samples": 4478,
      "url": "https://gpu.userbenchmark.com/Nvidia-Quadro-K4200/Rating/2838"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 775M",
      "rank": 151,
      "benchmark": 21.8,
      "samples": 383,
      "url": "https://gpu.userbenchmark.com/SpeedTest/13797/NVIDIA-GeForce-GTX-775M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro M2000",
      "rank": 152,
      "benchmark": 21.8,
      "samples": 3732,
      "url": "https://gpu.userbenchmark.com/SpeedTest/135005/NVIDIA-Quadro-M2000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R7 370",
      "rank": 153,
      "benchmark": 21.4,
      "samples": 31603,
      "url": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "type": "GPU",
      "part number": "R7 370 GAMING 4G",
      "brand": "MSI",
      "model": "MSI R7 370 4GB Gaming",
      "rank": 153,
      "benchmark": 21.4,
      "samples": 31603,
      "url": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "type": "GPU",
      "part number": "R7 370 GAMING 2G",
      "brand": "MSI",
      "model": "MSI R7 370 2GB Gaming",
      "rank": 153,
      "benchmark": 21.4,
      "samples": 31603,
      "url": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "type": "GPU",
      "part number": "GV-R737WF2OC-2GD",
      "brand": "Gigabyte",
      "model": "Gigabyte AMD R7 370 2GB",
      "rank": 153,
      "benchmark": 21.4,
      "samples": 31603,
      "url": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "type": "GPU",
      "part number": "11240-06-20G",
      "brand": "Sapphire",
      "model": "Sapphire R7 370 2GB Dual-X OC",
      "rank": 153,
      "benchmark": 21.4,
      "samples": 31603,
      "url": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "type": "GPU",
      "part number": "11240-04-20G",
      "brand": "Sapphire",
      "model": "Sapphire R7 370 4GB NITRO Dual-X OC",
      "rank": 153,
      "benchmark": 21.4,
      "samples": 31603,
      "url": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "type": "GPU",
      "part number": "STRIX-R7370-DC2OC-2GD5-GAMING",
      "brand": "Asus",
      "model": "ASUS R7 370 2GB STRIX OC",
      "rank": 153,
      "benchmark": 21.4,
      "samples": 31603,
      "url": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "type": "GPU",
      "part number": "STRIX-R7370-DC2OC-4GD5-GAMING",
      "brand": "Asus",
      "model": "ASUS R7 370 4GB STRIX OC",
      "rank": 153,
      "benchmark": 21.4,
      "samples": 31603,
      "url": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "type": "GPU",
      "part number": "R7-370P-2SF5",
      "brand": "XFX",
      "model": "XFX R7 370 2GB 2SF5",
      "rank": 153,
      "benchmark": 21.4,
      "samples": 31603,
      "url": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 580",
      "rank": 154,
      "benchmark": 21.3,
      "samples": 14689,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-580/Rating/3150"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 660",
      "rank": 155,
      "benchmark": 21.2,
      "samples": 103363,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-660/Rating/2162"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 M290X",
      "rank": 156,
      "benchmark": 21.1,
      "samples": 1247,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11722/AMD-Radeon-R9-M290X"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 6970",
      "rank": 157,
      "benchmark": 20.9,
      "samples": 7683,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7712/AMD-Radeon-HD-6900"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7970M",
      "rank": 158,
      "benchmark": 20.9,
      "samples": 865,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9441/AMD-Radeon-HD-7970M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 6990 (Crossfire Disabled)",
      "rank": 159,
      "benchmark": 20.7,
      "samples": 1044,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7713/AMD-Radeon-HD-6900"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 760 (192-bit)",
      "rank": 160,
      "benchmark": 20.7,
      "samples": 8897,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11047/NVIDIA-GeForce-GTX-760-192-bit"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce MX350",
      "rank": 161,
      "benchmark": 20.5,
      "samples": 1115,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1069350/NVIDIA-GeForce-MX350"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 M290",
      "rank": 162,
      "benchmark": 20.2,
      "samples": 77,
      "url": "https://gpu.userbenchmark.com/SpeedTest/31120/AMD-RADEON-R9-M290"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Microsoft",
      "model": "RemoteFX Graphics Device - WDDM",
      "rank": 163,
      "benchmark": 20.1,
      "samples": 121,
      "url": "https://gpu.userbenchmark.com/SpeedTest/13438/Microsoft-RemoteFX-Graphics-Device---WDDM"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 7790",
      "rank": 164,
      "benchmark": 20.1,
      "samples": 8243,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8622/AMD-Radeon-HD-7700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R7 265",
      "rank": 165,
      "benchmark": 20.1,
      "samples": 7348,
      "url": "https://gpu.userbenchmark.com/AMD-R7-265/Rating/3296"
    },
    {
      "type": "GPU",
      "part number": "11232-00-20G",
      "brand": "Sapphire",
      "model": "Sapphire R7 265 2GB Dual-X",
      "rank": 165,
      "benchmark": 20.1,
      "samples": 7348,
      "url": "https://gpu.userbenchmark.com/AMD-R7-265/Rating/3296"
    },
    {
      "type": "GPU",
      "part number": "R7 265 2GD5 OC",
      "brand": "MSI",
      "model": "MSI R7 265 2GB OC",
      "rank": 165,
      "benchmark": 20.1,
      "samples": 7348,
      "url": "https://gpu.userbenchmark.com/AMD-R7-265/Rating/3296"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R7 260X",
      "rank": 166,
      "benchmark": 20,
      "samples": 32905,
      "url": "https://gpu.userbenchmark.com/AMD-R7-260X/Rating/3151"
    },
    {
      "type": "GPU",
      "part number": "11222-22-20G",
      "brand": "Sapphire",
      "model": "SAPPHIRE R7 260X 2GB OC 2x DVI",
      "rank": 166,
      "benchmark": 20,
      "samples": 32905,
      "url": "https://gpu.userbenchmark.com/AMD-R7-260X/Rating/3151"
    },
    {
      "type": "GPU",
      "part number": "11222-06-20G",
      "brand": "Sapphire",
      "model": "SAPPHIRE R7 260X 2GB OC",
      "rank": 166,
      "benchmark": 20,
      "samples": 32905,
      "url": "https://gpu.userbenchmark.com/AMD-R7-260X/Rating/3151"
    },
    {
      "type": "GPU",
      "part number": "R7260XCNF4",
      "brand": "XFX",
      "model": "XFX 260X 2GB",
      "rank": 166,
      "benchmark": 20,
      "samples": 32905,
      "url": "https://gpu.userbenchmark.com/AMD-R7-260X/Rating/3151"
    },
    {
      "type": "GPU",
      "part number": "R7 260X 2GD5 OC",
      "brand": "MSI",
      "model": "MSI R7 260X 2GB OC",
      "rank": 166,
      "benchmark": 20,
      "samples": 32905,
      "url": "https://gpu.userbenchmark.com/AMD-R7-260X/Rating/3151"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 680M",
      "rank": 167,
      "benchmark": 20,
      "samples": 1103,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8687/NVIDIA-GeForce-GTX-680M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon RX 560-B",
      "rank": 168,
      "benchmark": 19.9,
      "samples": 42135,
      "url": "https://gpu.userbenchmark.com/SpeedTest/330029/Radeon-RX-560"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 460",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "GV-RX460WF2OC-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 460 4GB Windforce OC",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "GV-RX460WF2OC-2GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 460 2GB Windforce OC",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "STRIX-RX460-O4G-GAMING",
      "brand": "Asus",
      "model": "Asus RX 460 4GB ROG STRIX OC",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "GV-RX460WF2OC-2GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 460 2GB Windforce OC",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "AXRX 460 2GBD5-DH/OC",
      "brand": "PowerColor",
      "model": "PowerColor RX 460 2GB Red Dragon",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "11257-02-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 460 4GB Nitro",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "100409-2GOCL",
      "brand": "Sapphire",
      "model": "Sapphire RX 460 2GB 1210 MHz",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "11257-00-20G",
      "brand": "Sapphire",
      "model": "Sapphire RX 460 2GB 1090 MHz",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "RX-460P4DFG5",
      "brand": "XFX",
      "model": "XFX RX 460 2GB",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "RX-460P2SFG5",
      "brand": "XFX",
      "model": "XFX RX 460 2GB",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "RX-460P4SFG5",
      "brand": "XFX",
      "model": "XFX RX 460 4GB SF",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "GV-RX460WF2OC-4GD",
      "brand": "Gigabyte",
      "model": "Gigabyte RX 460 4GB Windforce 2x",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "DUAL-RX460-O2G",
      "brand": "Asus",
      "model": "Asus RX 460 2GB Dual Fan OC",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "Radeon RX 460 2G OC",
      "brand": "MSI",
      "model": "MSI RX 460 2GB 2G OC",
      "rank": 169,
      "benchmark": 19.8,
      "samples": 52305,
      "url": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 5870",
      "rank": 170,
      "benchmark": 19.6,
      "samples": 9510,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7681/AMD-Radeon-HD-5800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX Vega 8 5000 (iGPU)",
      "rank": 171,
      "benchmark": 19.6,
      "samples": 2801,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1415260/AMD-RadeonTM-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 7850",
      "rank": 172,
      "benchmark": 19.4,
      "samples": 44098,
      "url": "https://gpu.userbenchmark.com/AMD-HD-7850/Rating/2182"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 6950",
      "rank": 173,
      "benchmark": 19.2,
      "samples": 22099,
      "url": "https://gpu.userbenchmark.com/AMD-HD-6950/Rating/3152"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 570",
      "rank": 174,
      "benchmark": 19.2,
      "samples": 21486,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-570/Rating/3156"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris Xe",
      "rank": 175,
      "benchmark": 19,
      "samples": 16439,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1268515/IntelR-IrisR-Xe-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 480",
      "rank": 176,
      "benchmark": 18.8,
      "samples": 3733,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-480/Rating/3157"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Parallels",
      "model": "Display Adapter (WDDM)",
      "rank": 177,
      "benchmark": 18.5,
      "samples": 2479,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7878/Parallels-Display-Adapter-WDDM"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 560 Ti (448 Core LE)",
      "rank": 178,
      "benchmark": 18.3,
      "samples": 1992,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8215/NVIDIA-GeForce-GTX-560-Ti"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 750-Ti",
      "rank": 179,
      "benchmark": 18.3,
      "samples": 263486,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "type": "GPU",
      "part number": "02G-P4-3753-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 750 Ti 2GB SC",
      "rank": 179,
      "benchmark": 18.3,
      "samples": 263486,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "type": "GPU",
      "part number": "GTX750TI-OC-2GD5",
      "brand": "Asus",
      "model": "ASUS GTX 750 Ti 2GB OC",
      "rank": 179,
      "benchmark": 18.3,
      "samples": 263486,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "type": "GPU",
      "part number": "N750TI-2GD5TLP",
      "brand": "MSI",
      "model": "MSI GTX 750 Ti 2GB",
      "rank": 179,
      "benchmark": 18.3,
      "samples": 263486,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "type": "GPU",
      "part number": "N750TI TF 2GD5/OC",
      "brand": "MSI",
      "model": "MSI GTX 750 Ti 2GB Gaming",
      "rank": 179,
      "benchmark": 18.3,
      "samples": 263486,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "type": "GPU",
      "part number": "02G-P4-3751-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 750 Ti 2GB",
      "rank": 179,
      "benchmark": 18.3,
      "samples": 263486,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "type": "GPU",
      "part number": "02G-P4-3757-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 750 Ti 2GB FTW",
      "rank": 179,
      "benchmark": 18.3,
      "samples": 263486,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "type": "GPU",
      "part number": "GV-N75TOC2-2GI",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 750 Ti 2GB OC 2",
      "rank": 179,
      "benchmark": 18.3,
      "samples": 263486,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "type": "GPU",
      "part number": "GV-N75TOC-1GI",
      "brand": "Gigabyte",
      "model": "Gigabyte GTX 750 Ti 2GB",
      "rank": 179,
      "benchmark": 18.3,
      "samples": 263486,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 650 Ti Boost",
      "rank": 180,
      "benchmark": 18,
      "samples": 11823,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-650-Ti-Boost/Rating/2190"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 960M",
      "rank": 181,
      "benchmark": 17.6,
      "samples": 67034,
      "url": "https://gpu.userbenchmark.com/SpeedTest/27242/NVIDIA-GeForce-GTX-960M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R7 360",
      "rank": 182,
      "benchmark": 17.4,
      "samples": 22059,
      "url": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "type": "GPU",
      "part number": "R7 360 2GD5 OC",
      "brand": "MSI",
      "model": "MSI R7 360 2G OC",
      "rank": 182,
      "benchmark": 17.4,
      "samples": 22059,
      "url": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "type": "GPU",
      "part number": "11243-00-20G",
      "brand": "Sapphire",
      "model": "Sapphire R7 360 2GB OC",
      "rank": 182,
      "benchmark": 17.4,
      "samples": 22059,
      "url": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "type": "GPU",
      "part number": "11243-05-20G",
      "brand": "Sapphire",
      "model": "Sapphire R7 360 2GB NITRO",
      "rank": 182,
      "benchmark": 17.4,
      "samples": 22059,
      "url": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "type": "GPU",
      "part number": "GV-R736OC-2GD",
      "brand": "Gigabyte",
      "model": "Gigabyte R7 360 2GB",
      "rank": 182,
      "benchmark": 17.4,
      "samples": 22059,
      "url": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "type": "GPU",
      "part number": "GV-R736OC-2GD REV2.0",
      "brand": "Gigabyte",
      "model": "Gigabyte R7 360 2GB V2",
      "rank": 182,
      "benchmark": 17.4,
      "samples": 22059,
      "url": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "type": "GPU",
      "part number": "R7-360P-2SF5",
      "brand": "XFX",
      "model": "XFX R7 360 2GB 360P",
      "rank": 182,
      "benchmark": 17.4,
      "samples": 22059,
      "url": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "type": "GPU",
      "part number": "R7360-OC-2GD5-V2",
      "brand": "Asus",
      "model": "Asus R7 360 2GB OC V2",
      "rank": 182,
      "benchmark": 17.4,
      "samples": 22059,
      "url": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K2200",
      "rank": 183,
      "benchmark": 17.3,
      "samples": 11381,
      "url": "https://gpu.userbenchmark.com/Nvidia-Quadro-K2200/Rating/2839"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 770M",
      "rank": 184,
      "benchmark": 17.3,
      "samples": 5033,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7724/NVIDIA-GeForce-GTX-770M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 560 Ti",
      "rank": 185,
      "benchmark": 16.9,
      "samples": 34142,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-560-Ti/Rating/2180"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8950",
      "rank": 186,
      "benchmark": 16.8,
      "samples": 488,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8897/AMD-Radeon-HD-8950"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "FirePro M6100 (FireGL V)",
      "rank": 187,
      "benchmark": 16.5,
      "samples": 227,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10287/AMD-FirePro-M6100-FireGL-V"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K5000M",
      "rank": 188,
      "benchmark": 16.4,
      "samples": 312,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11324/NVIDIA-Quadro-K5000M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 5970 (Crossfire Disabled)",
      "rank": 189,
      "benchmark": 16.4,
      "samples": 1322,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7906/AMD-Radeon-HD-5900"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX Vega 11 (Ryzen iGPU)",
      "rank": 190,
      "benchmark": 16.3,
      "samples": 38911,
      "url": "https://gpu.userbenchmark.com/SpeedTest/401440/AMD-RadeonTM-RX-Vega-11-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 860M",
      "rank": 191,
      "benchmark": 16.3,
      "samples": 15538,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8647/NVIDIA-GeForce-GTX-860M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 675MX",
      "rank": 192,
      "benchmark": 15.7,
      "samples": 490,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10174/NVIDIA-GeForce-GTX-675MX"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 5850",
      "rank": 193,
      "benchmark": 15.5,
      "samples": 10961,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7680/AMD-Radeon-HD-5800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 650-Ti",
      "rank": 194,
      "benchmark": 15.5,
      "samples": 31257,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-650-Ti/Rating/2189"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 750",
      "rank": 195,
      "benchmark": 15.3,
      "samples": 59143,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-750/Rating/3162"
    },
    {
      "type": "GPU",
      "part number": "01G-P4-2751-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 750 1GB Dual-Link",
      "rank": 195,
      "benchmark": 15.3,
      "samples": 59143,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-750/Rating/3162"
    },
    {
      "type": "GPU",
      "part number": "01G-P4-2753-KR",
      "brand": "EVGA",
      "model": "EVGA GTX 750 1GB Dual-Link SC",
      "rank": 195,
      "benchmark": 15.3,
      "samples": 59143,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-750/Rating/3162"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 850M",
      "rank": 196,
      "benchmark": 15.3,
      "samples": 9588,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9138/NVIDIA-GeForce-GTX-850M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 6870",
      "rank": 197,
      "benchmark": 15.2,
      "samples": 22392,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7744/AMD-Radeon-HD-6800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 470",
      "rank": 198,
      "benchmark": 15,
      "samples": 5311,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7820/NVIDIA-GeForce-GTX-470"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 950M",
      "rank": 199,
      "benchmark": 14.9,
      "samples": 34906,
      "url": "https://gpu.userbenchmark.com/SpeedTest/27713/NVIDIA-GeForce-GTX-950M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "MX150-0",
      "rank": 200,
      "benchmark": 14.8,
      "samples": 25477,
      "url": "https://gpu.userbenchmark.com/SpeedTest/332822/NVIDIA-GeForce-MX150"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GT 1030",
      "rank": 201,
      "benchmark": 14.7,
      "samples": 122529,
      "url": "https://gpu.userbenchmark.com/SpeedTest/283726/NVIDIA-GeForce-GT-1030"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce MX250",
      "rank": 202,
      "benchmark": 14.6,
      "samples": 7468,
      "url": "https://gpu.userbenchmark.com/SpeedTest/762458/NVIDIA-GeForce-MX250"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 560 Ti-OEM",
      "rank": 203,
      "benchmark": 14.4,
      "samples": 1240,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9203/NVIDIA-GeForce-GTX-560-Ti"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 460 v2",
      "rank": 204,
      "benchmark": 14.3,
      "samples": 601,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9101/NVIDIA-GeForce-GTX-460-v2"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 580M",
      "rank": 205,
      "benchmark": 14.3,
      "samples": 306,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7757/NVIDIA-GeForce-GTX-580M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 560",
      "rank": 206,
      "benchmark": 14.2,
      "samples": 20742,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-560/Rating/3155"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 765M",
      "rank": 207,
      "benchmark": 14.1,
      "samples": 7070,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7742/NVIDIA-GeForce-GTX-765M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro 6000",
      "rank": 208,
      "benchmark": 13.8,
      "samples": 1223,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7657/NVIDIA-Quadro-6000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 675M",
      "rank": 209,
      "benchmark": 13.5,
      "samples": 854,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8829/NVIDIA-GeForce-GTX-675M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K1200",
      "rank": 210,
      "benchmark": 13.5,
      "samples": 2892,
      "url": "https://gpu.userbenchmark.com/SpeedTest/28490/NVIDIA-Quadro-K1200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K4000",
      "rank": 211,
      "benchmark": 13,
      "samples": 8066,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7730/NVIDIA-Quadro-K4000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX 550",
      "rank": 212,
      "benchmark": 12.9,
      "samples": 15460,
      "url": "https://gpu.userbenchmark.com/AMD-RX-550/Rating/3925"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 5830",
      "rank": 213,
      "benchmark": 12.9,
      "samples": 2241,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8247/AMD-Radeon-HD-5800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "FirePro V7900 (FireGL V)",
      "rank": 214,
      "benchmark": 12.8,
      "samples": 454,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9001/AMD-FirePro-V7900-FireGL-V"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 460",
      "rank": 215,
      "benchmark": 12.7,
      "samples": 20743,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-460/Rating/2167"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX Vega 8 4000 (iGPU)",
      "rank": 216,
      "benchmark": 12.7,
      "samples": 68754,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1005641/AMD-RadeonTM-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 7770",
      "rank": 217,
      "benchmark": 12.6,
      "samples": 35763,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7710/AMD-Radeon-HD-7700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8760",
      "rank": 218,
      "benchmark": 12.4,
      "samples": 186,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12506/AMD-Radeon-HD-8760"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K4000M",
      "rank": 219,
      "benchmark": 12.3,
      "samples": 669,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8941/NVIDIA-Quadro-K4000M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris Pro 580 (Mobile Skylake)",
      "rank": 220,
      "benchmark": 12.3,
      "samples": 765,
      "url": "https://gpu.userbenchmark.com/SpeedTest/132950/IntelR-IrisTM-Pro-Graphics-580"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 670MX",
      "rank": 221,
      "benchmark": 12.1,
      "samples": 1909,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7874/NVIDIA-GeForce-GTX-670MX"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 465",
      "rank": 222,
      "benchmark": 12,
      "samples": 1285,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8000/NVIDIA-GeForce-GTX-465"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R7 250X",
      "rank": 223,
      "benchmark": 12,
      "samples": 10145,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8719/AMD-Radeon-R7-200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 555",
      "rank": 224,
      "benchmark": 12,
      "samples": 659,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10555/NVIDIA-GeForce--GTX-555"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 560 SE",
      "rank": 225,
      "benchmark": 11.7,
      "samples": 1461,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10488/NVIDIA-GeForce-GTX-560-SE"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 6850",
      "rank": 226,
      "benchmark": 11.7,
      "samples": 25002,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7743/AMD-Radeon-HD-6800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 760M",
      "rank": 227,
      "benchmark": 11.6,
      "samples": 1506,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9587/NVIDIA-GeForce-GTX-760M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 485M",
      "rank": 228,
      "benchmark": 11.5,
      "samples": 52,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10025/NVIDIA-GeForce-GTX-485M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K3100M",
      "rank": 229,
      "benchmark": 11.3,
      "samples": 2440,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8639/NVIDIA-Quadro-K3100M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris Plus G7",
      "rank": 230,
      "benchmark": 11.3,
      "samples": 29225,
      "url": "https://gpu.userbenchmark.com/SpeedTest/888370/IntelR-IrisR-Plus-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "MX150-2",
      "rank": 231,
      "benchmark": 11.1,
      "samples": 4384,
      "url": "https://gpu.userbenchmark.com/SpeedTest/309890/NVIDIA-GeForce-MX150"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 295 (SLI Disabled)",
      "rank": 232,
      "benchmark": 11.1,
      "samples": 986,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7987/NVIDIA-GeForce-GTX-295"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX Vega 10 (Ryzen iGPU)",
      "rank": 233,
      "benchmark": 11,
      "samples": 461,
      "url": "https://gpu.userbenchmark.com/SpeedTest/432559/AMD-RadeonTM-Vega-10-Mobile-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 5700",
      "rank": 234,
      "benchmark": 10.8,
      "samples": 21,
      "url": "https://gpu.userbenchmark.com/SpeedTest/15646/ATI-Radeon-HD-5700-Series"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K620",
      "rank": 235,
      "benchmark": 10.8,
      "samples": 12869,
      "url": "https://gpu.userbenchmark.com/Nvidia-Quadro-K620/Rating/2840"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce MX230",
      "rank": 236,
      "benchmark": 10.6,
      "samples": 3648,
      "url": "https://gpu.userbenchmark.com/SpeedTest/746237/NVIDIA-GeForce-MX230"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 5770",
      "rank": 237,
      "benchmark": 10.5,
      "samples": 34293,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7752/AMD-Radeon-HD-5700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX Vega 8 (Ryzen iGPU)",
      "rank": 238,
      "benchmark": 10.5,
      "samples": 70500,
      "url": "https://gpu.userbenchmark.com/SpeedTest/441833/AMD-RadeonTM-Vega-8-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R9 M370X",
      "rank": 239,
      "benchmark": 10.5,
      "samples": 915,
      "url": "https://gpu.userbenchmark.com/SpeedTest/30774/AMD-Radeon-R9-M370X"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 670M",
      "rank": 240,
      "benchmark": 10.5,
      "samples": 2630,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7956/NVIDIA-GeForce-GTX-670M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 460 SE",
      "rank": 241,
      "benchmark": 10.4,
      "samples": 2965,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7703/NVIDIA-GeForce-GTX-460-SE"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 6790",
      "rank": 242,
      "benchmark": 10.4,
      "samples": 3434,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8056/AMD-Radeon-HD-6700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6770",
      "rank": 243,
      "benchmark": 10.2,
      "samples": 13997,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7704/AMD-Radeon-HD-6700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 6970M",
      "rank": 244,
      "benchmark": 10.1,
      "samples": 1359,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8552/AMD-Radeon-HD-6900M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "HD 4890",
      "rank": 245,
      "benchmark": 10.1,
      "samples": 127,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7789/ATI-Radeon-HD-4800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "FirePro M6000",
      "rank": 246,
      "benchmark": 10.1,
      "samples": 226,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7770/AMD-ATI-FirePro-M6000-FireGL-V-Mobility-Pro-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "MX130",
      "rank": 247,
      "benchmark": 10.1,
      "samples": 9950,
      "url": "https://gpu.userbenchmark.com/SpeedTest/439531/NVIDIA-GeForce-MX130"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Asus",
      "model": "EAH6770",
      "rank": 248,
      "benchmark": 10,
      "samples": 97,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7880/ASUS-EAH6770"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro 5000",
      "rank": 249,
      "benchmark": 10,
      "samples": 2420,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9708/NVIDIA-Quadro-5000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 645",
      "rank": 250,
      "benchmark": 9.98,
      "samples": 3919,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8982/NVIDIA-GeForce-GTX-645"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 745 (OEM)",
      "rank": 251,
      "benchmark": 9.97,
      "samples": 22514,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-745-OEM/Rating/2638"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon 540",
      "rank": 252,
      "benchmark": 9.81,
      "samples": 139,
      "url": "https://gpu.userbenchmark.com/SpeedTest/316090/RadeonTM-540-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 940M",
      "rank": 253,
      "benchmark": 9.81,
      "samples": 12070,
      "url": "https://gpu.userbenchmark.com/SpeedTest/28796/NVIDIA-GeForce-940M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 755M",
      "rank": 254,
      "benchmark": 9.76,
      "samples": 3028,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7727/NVIDIA-GeForce-GT-755M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 570M",
      "rank": 255,
      "benchmark": 9.73,
      "samples": 576,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10161/NVIDIA-GeForce-GTX-570M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "940MX",
      "rank": 256,
      "benchmark": 9.69,
      "samples": 27742,
      "url": "https://gpu.userbenchmark.com/SpeedTest/88506/NVIDIA-GeForce-940MX"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 285",
      "rank": 257,
      "benchmark": 9.66,
      "samples": 2440,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7733/NVIDIA-GeForce-GTX-285"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "FirePro M5100 (FireGL V)",
      "rank": 258,
      "benchmark": 9.64,
      "samples": 293,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12267/AMD-FirePro-M5100-FireGL-V"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris Pro HD 6200 (Desktop)",
      "rank": 259,
      "benchmark": 9.57,
      "samples": 1048,
      "url": "https://gpu.userbenchmark.com/SpeedTest/30277/IntelR-IrisTM-Pro-Graphics-6200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "FirePro M8900",
      "rank": 260,
      "benchmark": 9.53,
      "samples": 180,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9032/AMD-ATI-FirePro-M8900-FireGL-Mobility-Pro-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 840M",
      "rank": 261,
      "benchmark": 9.37,
      "samples": 15949,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8643/NVIDIA-GeForce-840M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 275",
      "rank": 262,
      "benchmark": 9.3,
      "samples": 2602,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-275/Rating/3261"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris Plus 650 (Mobile Kaby Lake)",
      "rank": 263,
      "benchmark": 9.2,
      "samples": 1508,
      "url": "https://gpu.userbenchmark.com/SpeedTest/367939/IntelR-IrisR-Plus-Graphics-650"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7800M",
      "rank": 264,
      "benchmark": 9.08,
      "samples": 424,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10077/AMD-Radeon-HD-7800M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 550-Ti",
      "rank": 265,
      "benchmark": 8.97,
      "samples": 38429,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-550-Ti/Rating/3161"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "HD 4870",
      "rank": 266,
      "benchmark": 8.75,
      "samples": 17196,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7788/ATI-Radeon-HD-4800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 650",
      "rank": 267,
      "benchmark": 8.68,
      "samples": 66473,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-650/Rating/3154"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 280",
      "rank": 268,
      "benchmark": 8.67,
      "samples": 1255,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8413/NVIDIA-GeForce-GTX-280"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "FirePro V5800 (FireGL V)",
      "rank": 269,
      "benchmark": 8.66,
      "samples": 371,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12336/ATI-FirePro-V5800-FireGL-V"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Mobility Radeon HD 5870",
      "rank": 270,
      "benchmark": 8.6,
      "samples": 2777,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8764/AMD-Mobility-Radeon-HD-5800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris 550 (Mobile Skylake)",
      "rank": 271,
      "benchmark": 8.57,
      "samples": 674,
      "url": "https://gpu.userbenchmark.com/SpeedTest/129148/IntelR-IrisTM-Graphics-550"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "930MX",
      "rank": 272,
      "benchmark": 8.53,
      "samples": 5182,
      "url": "https://gpu.userbenchmark.com/SpeedTest/155423/NVIDIA-GeForce-930MX"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 750M",
      "rank": 273,
      "benchmark": 8.43,
      "samples": 12785,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7928/NVIDIA-GeForce-GT-750M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 5800",
      "rank": 274,
      "benchmark": 8.41,
      "samples": 629,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10447/NVIDIA-Quadro-FX-5800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 480M",
      "rank": 275,
      "benchmark": 8.38,
      "samples": 27,
      "url": "https://gpu.userbenchmark.com/SpeedTest/20276/NVIDIA-GeForce-GTX-480M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R7 250",
      "rank": 276,
      "benchmark": 8.31,
      "samples": 21799,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8217/AMD-Radeon-R7-200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro 4000M",
      "rank": 277,
      "benchmark": 8.24,
      "samples": 1008,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11532/NVIDIA-Quadro-4000M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 5750",
      "rank": 278,
      "benchmark": 8.14,
      "samples": 11240,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7753/AMD-Radeon-HD-5700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K3000M",
      "rank": 279,
      "benchmark": 8.06,
      "samples": 2209,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8326/NVIDIA-Quadro-K3000M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 740",
      "rank": 280,
      "benchmark": 8,
      "samples": 24848,
      "url": "https://gpu.userbenchmark.com/SpeedTest/13294/NVIDIA-GeForce-GT-740"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6700",
      "rank": 281,
      "benchmark": 8,
      "samples": 3435,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9272/AMD-Radeon-HD-6700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R7 250E",
      "rank": 282,
      "benchmark": 7.92,
      "samples": 9096,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8884/AMD-Radeon-R7-200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 4850",
      "rank": 283,
      "benchmark": 7.92,
      "samples": 968,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7790/ATI-Radeon-HD-4800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris Plus 640 (Mobile Kaby Lake)",
      "rank": 284,
      "benchmark": 7.91,
      "samples": 6670,
      "url": "https://gpu.userbenchmark.com/SpeedTest/262015/IntelR-IrisTM-Plus-Graphics-640"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "UHD Graphics 750",
      "rank": 285,
      "benchmark": 7.89,
      "samples": 417,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1498842/IntelR-UHD-Graphics-750"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 4850-X2",
      "rank": 286,
      "benchmark": 7.84,
      "samples": 90,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11246/ATI-Radeon-HD-4850-X2"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 7750",
      "rank": 287,
      "benchmark": 7.79,
      "samples": 20003,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7709/AMD-Radeon-HD-7700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9800 GTX",
      "rank": 288,
      "benchmark": 7.72,
      "samples": 3481,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8342/NVIDIA-GeForce-9800-GTX9800-GTX-"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTS 450",
      "rank": 289,
      "benchmark": 7.71,
      "samples": 24368,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7762/NVIDIA-GeForce-GTS-450"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 745M",
      "rank": 290,
      "benchmark": 7.66,
      "samples": 478,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8211/NVIDIA-GeForce-GT-745M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 260",
      "rank": 291,
      "benchmark": 7.63,
      "samples": 11102,
      "url": "https://gpu.userbenchmark.com/Nvidia-GTX-260/Rating/3160"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris Plus G4",
      "rank": 292,
      "benchmark": 7.58,
      "samples": 6941,
      "url": "https://gpu.userbenchmark.com/SpeedTest/921079/IntelR-IrisR-Plus-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K2000",
      "rank": 293,
      "benchmark": 7.56,
      "samples": 8926,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8356/NVIDIA-Quadro-K2000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GTX 660M",
      "rank": 294,
      "benchmark": 7.56,
      "samples": 6831,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7749/NVIDIA-GeForce-GTX-660M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 560M",
      "rank": 295,
      "benchmark": 7.5,
      "samples": 5071,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7964/NVIDIA-GeForce-GTX-560M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K2100M",
      "rank": 296,
      "benchmark": 7.48,
      "samples": 5479,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7811/NVIDIA-Quadro-K2100M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX Vega 6 (Ryzen iGPU)",
      "rank": 297,
      "benchmark": 7.4,
      "samples": 2031,
      "url": "https://gpu.userbenchmark.com/SpeedTest/511817/AMD-RadeonTM-Vega-6-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 4800",
      "rank": 298,
      "benchmark": 7.31,
      "samples": 113,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8124/ATI-Radeon-HD-4800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7700M",
      "rank": 299,
      "benchmark": 7.2,
      "samples": 543,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11261/AMD-Radeon-HD-7700M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 4770",
      "rank": 300,
      "benchmark": 7.16,
      "samples": 1429,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8796/ATI-Radeon-HD-4770"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTS 250",
      "rank": 301,
      "benchmark": 7.16,
      "samples": 12056,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7741/NVIDIA-GeForce-GTS-250"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris 540 (Mobile Skylake)",
      "rank": 302,
      "benchmark": 7.15,
      "samples": 4614,
      "url": "https://gpu.userbenchmark.com/SpeedTest/37386/IntelR-IrisTM-Graphics-540"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8800 GTS-512",
      "rank": 303,
      "benchmark": 7.1,
      "samples": 1162,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8016/NVIDIA-GeForce-8800-GTS-512"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 460M",
      "rank": 304,
      "benchmark": 7.06,
      "samples": 2829,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8234/NVIDIA-GeForce-GTX-460M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "FirePro M4000",
      "rank": 305,
      "benchmark": 7.04,
      "samples": 1283,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8394/AMD-FirePro-M4000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 640",
      "rank": 306,
      "benchmark": 6.97,
      "samples": 28037,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7731/NVIDIA-GeForce-GT-640"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 650M",
      "rank": 307,
      "benchmark": 6.94,
      "samples": 11697,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7754/NVIDIA-GeForce-GT-650M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 3800M",
      "rank": 308,
      "benchmark": 6.91,
      "samples": 334,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9394/NVIDIA-Quadro-FX-3800M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Mobility Radeon HD 5850",
      "rank": 309,
      "benchmark": 6.88,
      "samples": 1267,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8789/AMD-Mobility-Radeon-HD-5800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 830M",
      "rank": 310,
      "benchmark": 6.83,
      "samples": 1065,
      "url": "https://gpu.userbenchmark.com/SpeedTest/25102/NVIDIA-GeForce-830M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro 4000",
      "rank": 311,
      "benchmark": 6.76,
      "samples": 11436,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7693/NVIDIA-Quadro-4000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon R7 Graphics",
      "rank": 312,
      "benchmark": 6.62,
      "samples": 21778,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8791/AMD-RadeonTM-R7-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 3800",
      "rank": 313,
      "benchmark": 6.59,
      "samples": 2610,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7804/NVIDIA-Quadro-FX-3800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon  530",
      "rank": 314,
      "benchmark": 6.59,
      "samples": 2534,
      "url": "https://gpu.userbenchmark.com/SpeedTest/375394/Radeon-TM-530"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 7730",
      "rank": 315,
      "benchmark": 6.54,
      "samples": 2725,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8038/AMD-Radeon-HD-7700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTS 240",
      "rank": 316,
      "benchmark": 6.52,
      "samples": 921,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8940/NVIDIA-GeForce-GTS-240"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "FirePro M7740",
      "rank": 317,
      "benchmark": 6.52,
      "samples": 183,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8759/ATI-FirePro-M7740"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 285M",
      "rank": 318,
      "benchmark": 6.51,
      "samples": 113,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10715/NVIDIA-GeForce-GTX-285M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8570",
      "rank": 319,
      "benchmark": 6.47,
      "samples": 3232,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9843/AMD-Radeon-HD-8570"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "FirePro V4900",
      "rank": 320,
      "benchmark": 6.45,
      "samples": 1744,
      "url": "https://gpu.userbenchmark.com/AMD-FirePro-V4900/Rating/2843"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 280M",
      "rank": 321,
      "benchmark": 6.4,
      "samples": 148,
      "url": "https://gpu.userbenchmark.com/SpeedTest/13363/NVIDIA-GeForce-GTX-280M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "MX110",
      "rank": 322,
      "benchmark": 6.3,
      "samples": 4201,
      "url": "https://gpu.userbenchmark.com/SpeedTest/499472/NVIDIA-GeForce-MX110"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris Pro HD 6100 (Mobile)",
      "rank": 323,
      "benchmark": 6.29,
      "samples": 4508,
      "url": "https://gpu.userbenchmark.com/SpeedTest/25925/IntelR-IrisTM-Pro-Graphics-6100"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "FirePro V5900 (FireGL V)",
      "rank": 324,
      "benchmark": 6.27,
      "samples": 1291,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10203/AMD-FirePro-V5900-FireGL-V"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8800 Ultra",
      "rank": 325,
      "benchmark": 6.27,
      "samples": 108,
      "url": "https://gpu.userbenchmark.com/SpeedTest/14944/NVIDIA-GeForce-8800-Ultra"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8800 GT",
      "rank": 326,
      "benchmark": 6.18,
      "samples": 5038,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7722/NVIDIA-GeForce-8800-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro 2000",
      "rank": 327,
      "benchmark": 6.16,
      "samples": 13235,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7708/NVIDIA-Quadro-2000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "UHD Graphics 730",
      "rank": 328,
      "benchmark": 6.14,
      "samples": 147,
      "url": "https://gpu.userbenchmark.com/SpeedTest/1500304/IntelR-UHD-Graphics-730"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 6000 (Mobile)",
      "rank": 329,
      "benchmark": 6.05,
      "samples": 3954,
      "url": "https://gpu.userbenchmark.com/SpeedTest/24946/IntelR-HD-Graphics-6000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 740M",
      "rank": 330,
      "benchmark": 5.99,
      "samples": 14674,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7671/NVIDIA-GeForce-GT-740M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 635",
      "rank": 331,
      "benchmark": 5.96,
      "samples": 2695,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8246/NVIDIA-GeForce-GT-635"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K2000M",
      "rank": 332,
      "benchmark": 5.94,
      "samples": 3639,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8574/NVIDIA-Quadro-K2000M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 545",
      "rank": 333,
      "benchmark": 5.89,
      "samples": 2539,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9908/NVIDIA-GeForce-GT-545"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "920MX",
      "rank": 334,
      "benchmark": 5.89,
      "samples": 7851,
      "url": "https://gpu.userbenchmark.com/SpeedTest/167104/NVIDIA-GeForce-920MX"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6670",
      "rank": 335,
      "benchmark": 5.88,
      "samples": 29047,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7738/AMD-Radeon-HD-6670"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro 3000M",
      "rank": 336,
      "benchmark": 5.76,
      "samples": 1962,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8172/NVIDIA-Quadro-3000M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8800 GTX",
      "rank": 337,
      "benchmark": 5.76,
      "samples": 1367,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9271/NVIDIA-GeForce-8800-GTX"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "UHD G1",
      "rank": 338,
      "benchmark": 5.69,
      "samples": 31018,
      "url": "https://gpu.userbenchmark.com/SpeedTest/895409/IntelR-UHD-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K1100M",
      "rank": 339,
      "benchmark": 5.68,
      "samples": 3564,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10244/NVIDIA-Quadro-K1100M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 3700M",
      "rank": 340,
      "benchmark": 5.63,
      "samples": 355,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10184/NVIDIA-Quadro-FX-3700M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9800 GT",
      "rank": 341,
      "benchmark": 5.6,
      "samples": 14267,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7716/NVIDIA-GeForce-9800-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6730M",
      "rank": 342,
      "benchmark": 5.52,
      "samples": 112,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9168/AMD-Radeon-HD-6730M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "R7 240",
      "rank": 343,
      "benchmark": 5.48,
      "samples": 32195,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8608/AMD-Radeon-R7-200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6700M",
      "rank": 344,
      "benchmark": 5.47,
      "samples": 1553,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7769/AMD-Radeon-HD-6700M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon  HD 6770M",
      "rank": 345,
      "benchmark": 5.45,
      "samples": 692,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7746/Radeon-TM-HD-6770M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris Pro HD 5200 (V1 Mobile 1.15 GHz)",
      "rank": 346,
      "benchmark": 5.43,
      "samples": 1025,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8009/IntelR-IrisTM-Pro-Graphics-5200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 640M",
      "rank": 347,
      "benchmark": 5.39,
      "samples": 2967,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8030/NVIDIA-GeForce-GT-640M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7670",
      "rank": 348,
      "benchmark": 5.38,
      "samples": 2468,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8206/AMD-Radeon-HD-7670"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "FirePro V4800 (FireGL V)",
      "rank": 349,
      "benchmark": 5.29,
      "samples": 2014,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9332/ATI-FirePro-V4800-FireGL-V"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro 2000M",
      "rank": 350,
      "benchmark": 5.27,
      "samples": 2673,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7776/NVIDIA-Quadro-2000M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "UHD Graphics 630 (Desktop Coffee Lake i5 i7)",
      "rank": 351,
      "benchmark": 5.19,
      "samples": 101867,
      "url": "https://gpu.userbenchmark.com/SpeedTest/356797/IntelR-UHD-Graphics-630"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 5670",
      "rank": 352,
      "benchmark": 5.16,
      "samples": 14606,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8110/AMD-Radeon-HD-5670"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris Pro HD 5200 (V2 Mobile 1.2 GHz)",
      "rank": 353,
      "benchmark": 5.13,
      "samples": 4203,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8190/IntelR-IrisTM-Pro-Graphics-5200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8670D",
      "rank": 354,
      "benchmark": 5.09,
      "samples": 5640,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8025/AMD-Radeon-HD-8670D"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 3870",
      "rank": 355,
      "benchmark": 5.08,
      "samples": 1563,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7879/ATI-Radeon-HD-3870"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 630 (Desktop Kaby Lake)",
      "rank": 356,
      "benchmark": 5.07,
      "samples": 103553,
      "url": "https://gpu.userbenchmark.com/SpeedTest/178724/IntelR-HD-Graphics-630"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "UHD Graphics 630 (Desktop Coffee Lake i3)",
      "rank": 357,
      "benchmark": 5.05,
      "samples": 23471,
      "url": "https://gpu.userbenchmark.com/SpeedTest/359294/IntelR-UHD-Graphics-630"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7660D",
      "rank": 358,
      "benchmark": 5.04,
      "samples": 6620,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7929/AMD-Radeon-HD-7660D"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 3700",
      "rank": 359,
      "benchmark": 5.04,
      "samples": 997,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10901/NVIDIA-Quadro-FX-3700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7570",
      "rank": 360,
      "benchmark": 5.04,
      "samples": 10320,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9639/AMD-Radeon-HD-7570"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 2800M",
      "rank": 361,
      "benchmark": 5.03,
      "samples": 975,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8137/NVIDIA-Quadro-FX-2800M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "UHD Graphics 620 (Mobile Kaby Lake R)",
      "rank": 362,
      "benchmark": 5,
      "samples": 305322,
      "url": "https://gpu.userbenchmark.com/SpeedTest/320744/IntelR-UHD-Graphics-620"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD P530 (Server Skylake)",
      "rank": 363,
      "benchmark": 4.97,
      "samples": 4023,
      "url": "https://gpu.userbenchmark.com/SpeedTest/41039/IntelR-HD-Graphics-P530"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 730",
      "rank": 364,
      "benchmark": 4.96,
      "samples": 126660,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12582/NVIDIA-GeForce-GT-730"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8800 GS",
      "rank": 365,
      "benchmark": 4.94,
      "samples": 322,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7976/NVIDIA-GeForce-8800-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6750M",
      "rank": 366,
      "benchmark": 4.85,
      "samples": 458,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7834/AMD-Radeon-HD-6750M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon 520",
      "rank": 367,
      "benchmark": 4.84,
      "samples": 158,
      "url": "https://gpu.userbenchmark.com/SpeedTest/329613/RadeonTM-520"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTX 260M",
      "rank": 368,
      "benchmark": 4.77,
      "samples": 973,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7979/NVIDIA-GeForce-GTX-260M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 530 (Desktop Skylake)",
      "rank": 369,
      "benchmark": 4.74,
      "samples": 133796,
      "url": "https://gpu.userbenchmark.com/SpeedTest/33102/IntelR-HD-Graphics-530"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8650G",
      "rank": 370,
      "benchmark": 4.72,
      "samples": 6887,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7910/AMD-Radeon-HD-8650G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6570",
      "rank": 371,
      "benchmark": 4.71,
      "samples": 18650,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8207/AMD-Radeon-HD-6570"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 620 (Mobile Kaby Lake)",
      "rank": 372,
      "benchmark": 4.65,
      "samples": 275589,
      "url": "https://gpu.userbenchmark.com/SpeedTest/153579/IntelR-HD-Graphics-620"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 445M",
      "rank": 373,
      "benchmark": 4.6,
      "samples": 311,
      "url": "https://gpu.userbenchmark.com/SpeedTest/17578/NVIDIA-GeForce-GT-445M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6630M",
      "rank": 374,
      "benchmark": 4.52,
      "samples": 2095,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9654/AMD-RadeonTM-HD-6630M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 555M",
      "rank": 375,
      "benchmark": 4.5,
      "samples": 3834,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8224/NVIDIA-GeForce-GT-555M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 530 (Mobile Skylake)",
      "rank": 376,
      "benchmark": 4.5,
      "samples": 158708,
      "url": "https://gpu.userbenchmark.com/SpeedTest/34955/IntelR-HD-Graphics-530"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "RX Vega 3 (Ryzen iGPU)",
      "rank": 377,
      "benchmark": 4.35,
      "samples": 14608,
      "url": "https://gpu.userbenchmark.com/SpeedTest/511366/AMD-RadeonTM-Vega-3-Mobile-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 520 (Mobile Skylake)",
      "rank": 378,
      "benchmark": 4.31,
      "samples": 256743,
      "url": "https://gpu.userbenchmark.com/SpeedTest/36797/IntelR-HD-Graphics-520"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7660G",
      "rank": 379,
      "benchmark": 4.29,
      "samples": 3446,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8022/AMD-Radeon-HD-7660G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 3800",
      "rank": 380,
      "benchmark": 4.27,
      "samples": 2736,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8529/ATI-Radeon-HD-3800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTS 360M",
      "rank": 381,
      "benchmark": 4.25,
      "samples": 1004,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9128/NVIDIA-GeForce-GTS-360M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8800 GTS",
      "rank": 382,
      "benchmark": 4.18,
      "samples": 2816,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7808/NVIDIA-GeForce-8800-GTS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 240",
      "rank": 383,
      "benchmark": 4.16,
      "samples": 7488,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7947/NVIDIA-GeForce-GT-240"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 3870-X2 (Crossfire Disabled)",
      "rank": 384,
      "benchmark": 4.13,
      "samples": 132,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10185/ATI-Mobility-Radeon-HD-3870-X2"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Mobility Radeon HD 5730",
      "rank": 385,
      "benchmark": 4.12,
      "samples": 2206,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9994/ATI-Mobility-Radeon-HD-5730"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 5570",
      "rank": 386,
      "benchmark": 4.12,
      "samples": 9950,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7686/AMD-Radeon-HD-5570"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7670M",
      "rank": 387,
      "benchmark": 4.1,
      "samples": 841,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7810/AMD-Radeon-HD-7670M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 440",
      "rank": 388,
      "benchmark": 3.98,
      "samples": 12229,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7783/NVIDIA-GeForce-GT-440"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7600M",
      "rank": 389,
      "benchmark": 3.98,
      "samples": 6299,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9552/AMD-Radeon-HD-7600M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 4600",
      "rank": 390,
      "benchmark": 3.97,
      "samples": 1091,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8232/NVIDIA-Quadro-FX-4600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 820M",
      "rank": 391,
      "benchmark": 3.94,
      "samples": 7544,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9527/NVIDIA-GeForce-820M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 230",
      "rank": 392,
      "benchmark": 3.93,
      "samples": 1260,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8245/NVIDIA-GeForce-GT-230"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9600 GT",
      "rank": 393,
      "benchmark": 3.93,
      "samples": 15774,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7677/NVIDIA-GeForce-9600-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 720",
      "rank": 394,
      "benchmark": 3.9,
      "samples": 12768,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12696/NVIDIA-GeForce-GT-720"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "NVS 5400M",
      "rank": 395,
      "benchmark": 3.83,
      "samples": 1386,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7907/NVIDIA-NVS-5400M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Iris Pro HD 5100 (Mobile 1.1 GHz)",
      "rank": 396,
      "benchmark": 3.81,
      "samples": 3666,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8813/IntelR-IrisTM-Graphics-5100"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 630",
      "rank": 397,
      "benchmark": 3.78,
      "samples": 49885,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7766/NVIDIA-GeForce-GT-630"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 5500 (Mobile 0.95 GHz)",
      "rank": 398,
      "benchmark": 3.72,
      "samples": 186274,
      "url": "https://gpu.userbenchmark.com/SpeedTest/16570/IntelR-HD-Graphics-5500"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9800M GTS",
      "rank": 399,
      "benchmark": 3.71,
      "samples": 321,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12939/NVIDIA-GeForce-9800M-GTS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 4670",
      "rank": 400,
      "benchmark": 3.71,
      "samples": 2041,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7888/ATI-Mobility-Radeon-HD-4670"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8610G",
      "rank": 401,
      "benchmark": 3.71,
      "samples": 4169,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8531/AMD-Radeon-HD-8610G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8570D",
      "rank": 402,
      "benchmark": 3.68,
      "samples": 6081,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9112/AMD-Radeon-HD-8570D"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT620M",
      "rank": 403,
      "benchmark": 3.67,
      "samples": 761,
      "url": "https://gpu.userbenchmark.com/SpeedTest/13398/NVIDIA-GeForce-GT620M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 720M",
      "rank": 404,
      "benchmark": 3.66,
      "samples": 3706,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7921/NVIDIA-GeForce-GT-720M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 710M",
      "rank": 405,
      "benchmark": 3.66,
      "samples": 1973,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10751/NVIDIA-GeForce-710M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 550M",
      "rank": 406,
      "benchmark": 3.62,
      "samples": 896,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8663/NVIDIA-GeForce-GT-550M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 635M",
      "rank": 407,
      "benchmark": 3.58,
      "samples": 2812,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8120/NVIDIA-GeForce-GT-635M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 615 (Mobile Kaby Lake)",
      "rank": 408,
      "benchmark": 3.58,
      "samples": 8936,
      "url": "https://gpu.userbenchmark.com/SpeedTest/193629/IntelR-HD-Graphics-615"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7650M",
      "rank": 409,
      "benchmark": 3.56,
      "samples": 483,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10887/AMD-Radeon-HD-7650M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7500M",
      "rank": 410,
      "benchmark": 3.54,
      "samples": 11619,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8602/AMD-Radeon-HD-7500M7600M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6550D",
      "rank": 411,
      "benchmark": 3.52,
      "samples": 3191,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9223/AMD-Radeon-HD-6550D"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K1000M",
      "rank": 412,
      "benchmark": 3.52,
      "samples": 4166,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7800/NVIDIA-Quadro-K1000M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7560D",
      "rank": 413,
      "benchmark": 3.49,
      "samples": 7637,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8826/AMD-Radeon-HD-7560D"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro K600",
      "rank": 414,
      "benchmark": 3.48,
      "samples": 7035,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8080/NVIDIA-Quadro-K600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 1800",
      "rank": 415,
      "benchmark": 3.46,
      "samples": 5761,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7957/NVIDIA-Quadro-FX-1800"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GTS 250M",
      "rank": 416,
      "benchmark": 3.46,
      "samples": 253,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8494/NVIDIA-GeForce-GTS-250M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 530",
      "rank": 417,
      "benchmark": 3.43,
      "samples": 4043,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8407/NVIDIA-GeForce-GT-530"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 710",
      "rank": 418,
      "benchmark": 3.4,
      "samples": 126601,
      "url": "https://gpu.userbenchmark.com/SpeedTest/77649/NVIDIA-GeForce-GT-710"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro 1000M",
      "rank": 419,
      "benchmark": 3.39,
      "samples": 5309,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7836/NVIDIA-Quadro-1000M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 630M",
      "rank": 420,
      "benchmark": 3.39,
      "samples": 6576,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7814/NVIDIA-GeForce-GT-630M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT625M",
      "rank": 421,
      "benchmark": 3.37,
      "samples": 33,
      "url": "https://gpu.userbenchmark.com/SpeedTest/25295/NVIDIA-GeForce-GT625M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 320",
      "rank": 422,
      "benchmark": 3.36,
      "samples": 1835,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11866/NVIDIA-GeForce-GT-320"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "NVS 5200M",
      "rank": 423,
      "benchmark": 3.35,
      "samples": 2265,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7691/NVIDIA-NVS-5200M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9800M-GS",
      "rank": 424,
      "benchmark": 3.31,
      "samples": 203,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9719/NVIDIA-GeForce-9800M-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 4670",
      "rank": 425,
      "benchmark": 3.28,
      "samples": 14954,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8077/ATI-Radeon-HD-4600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 430",
      "rank": 426,
      "benchmark": 3.28,
      "samples": 19056,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7745/NVIDIA-GeForce-GT-430"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "NVS 510",
      "rank": 427,
      "benchmark": 3.27,
      "samples": 1701,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10074/NVIDIA-NVS-510"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8550G",
      "rank": 428,
      "benchmark": 3.22,
      "samples": 2344,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7799/AMD-Radeon-HD-8550G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 435M",
      "rank": 429,
      "benchmark": 3.21,
      "samples": 543,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8260/NVIDIA-GeForce-GT-435M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro 600",
      "rank": 430,
      "benchmark": 3.18,
      "samples": 12711,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8084/NVIDIA-Quadro-600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 515 (Mobile Skylake)",
      "rank": 431,
      "benchmark": 3.18,
      "samples": 7654,
      "url": "https://gpu.userbenchmark.com/SpeedTest/38173/IntelR-HD-Graphics-515"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD P4000 (Server 1.25 GHz)",
      "rank": 432,
      "benchmark": 3.14,
      "samples": 594,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8592/IntelR-HD-Graphics-P4000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 5000 (Mobile 1.0/1.1 GHz)",
      "rank": 433,
      "benchmark": 3.14,
      "samples": 6003,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8536/IntelR-HD-Graphics-5000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 540M",
      "rank": 434,
      "benchmark": 3.12,
      "samples": 12526,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8006/NVIDIA-GeForce-GT-540M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 3600M",
      "rank": 435,
      "benchmark": 3.09,
      "samples": 107,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9773/NVIDIA-Quadro-FX-3600M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6500M",
      "rank": 436,
      "benchmark": 3.09,
      "samples": 9636,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7936/AMD-Radeon-HD-6500M56005700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8510G",
      "rank": 437,
      "benchmark": 3.08,
      "samples": 2049,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9309/AMD-Radeon-HD-8510G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 5500",
      "rank": 438,
      "benchmark": 3.08,
      "samples": 4600,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8853/AMD-Radeon-HD-5500"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7610M",
      "rank": 439,
      "benchmark": 3.05,
      "samples": 293,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11031/AMD-Radeon-HD-7610M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD Graphics P4600",
      "rank": 440,
      "benchmark": 3.02,
      "samples": 1920,
      "url": "https://gpu.userbenchmark.com/SpeedTest/18483/IntelR-HD-Graphics-P4600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7640G",
      "rank": 441,
      "benchmark": 2.97,
      "samples": 6533,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7903/AMD-Radeon-HD-7640G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 4650",
      "rank": 442,
      "benchmark": 2.89,
      "samples": 1571,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7844/ATI-Radeon-HD-4650"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 4650",
      "rank": 443,
      "benchmark": 2.86,
      "samples": 4914,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7667/ATI-Mobility-Radeon-HD-4650"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 4000 (Desktop 1.15 GHz)",
      "rank": 444,
      "benchmark": 2.83,
      "samples": 43041,
      "url": "https://gpu.userbenchmark.com/Intel-HD-4000-Desktop-115-GHz/Rating/2169"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 1800M",
      "rank": 445,
      "benchmark": 2.83,
      "samples": 1029,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7771/NVIDIA-Quadro-FX-1800M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6620G",
      "rank": 446,
      "benchmark": 2.81,
      "samples": 2827,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8118/AMD-Radeon-HD-6620G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8470D",
      "rank": 447,
      "benchmark": 2.8,
      "samples": 6752,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9693/AMD-Radeon-HD-8470D"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7600G",
      "rank": 448,
      "benchmark": 2.79,
      "samples": 1391,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12867/AMD-Radeon-HD-7600G---7500M7600M-Dual-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 4600 (Desktop 1.25 GHz)",
      "rank": 449,
      "benchmark": 2.76,
      "samples": 200687,
      "url": "https://gpu.userbenchmark.com/Intel-HD-4600-Desktop-125-GHz/Rating/2168"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 335M",
      "rank": 450,
      "benchmark": 2.75,
      "samples": 733,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10735/NVIDIA-GeForce-GT-335M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7540D",
      "rank": 451,
      "benchmark": 2.74,
      "samples": 3413,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7756/AMD-Radeon-HD-7540D"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 425M",
      "rank": 452,
      "benchmark": 2.71,
      "samples": 2487,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7792/NVIDIA-GeForce-GT-425M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 4600 (Mobile 1.15 GHz)",
      "rank": 453,
      "benchmark": 2.7,
      "samples": 213141,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7676/IntelR-HD-Graphics-4600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 2700M",
      "rank": 454,
      "benchmark": 2.65,
      "samples": 712,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7747/NVIDIA-Quadro-FX-2700M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 610 (Desktop Kaby Lake)",
      "rank": 455,
      "benchmark": 2.6,
      "samples": 10543,
      "url": "https://gpu.userbenchmark.com/SpeedTest/225196/IntelR-HD-Graphics-610"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 4000 (Mobile 1.25 GHz)",
      "rank": 456,
      "benchmark": 2.59,
      "samples": 367069,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7653/IntelR-HD-Graphics-4000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 130",
      "rank": 457,
      "benchmark": 2.55,
      "samples": 212,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12240/NVIDIA-GeForce-GT-130"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 525M",
      "rank": 458,
      "benchmark": 2.5,
      "samples": 7943,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8869/NVIDIA-GeForce-GT-525M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 420M",
      "rank": 459,
      "benchmark": 2.48,
      "samples": 1623,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8926/NVIDIA-GeForce-GT-420M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Core M HD 5300",
      "rank": 460,
      "benchmark": 2.44,
      "samples": 6836,
      "url": "https://gpu.userbenchmark.com/SpeedTest/16575/IntelR-HD-Graphics-5300"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 4400 (Desktop 1.15 GHz)",
      "rank": 461,
      "benchmark": 2.4,
      "samples": 50555,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8064/IntelR-HD-Graphics-4400"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7520G",
      "rank": 462,
      "benchmark": 2.38,
      "samples": 4185,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8569/AMD-Radeon-HD-7520G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6530D",
      "rank": 463,
      "benchmark": 2.36,
      "samples": 3773,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7795/AMD-Radeon-HD-6530D"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 510 (Desktop Skylake)",
      "rank": 464,
      "benchmark": 2.28,
      "samples": 11757,
      "url": "https://gpu.userbenchmark.com/SpeedTest/38088/IntelR-HD-Graphics-510"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "UHD Graphics 605",
      "rank": 465,
      "benchmark": 2.26,
      "samples": 8759,
      "url": "https://gpu.userbenchmark.com/SpeedTest/487064/IntelR-UHD-Graphics-605"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "NVS 5100M",
      "rank": 466,
      "benchmark": 2.26,
      "samples": 1663,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8318/NVIDIA-NVS-5100M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 220",
      "rank": 467,
      "benchmark": 2.25,
      "samples": 14978,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7737/NVIDIA-GeForce-GT-220"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 4400 (Mobile 1.0/1.1 GHz)",
      "rank": 468,
      "benchmark": 2.24,
      "samples": 221590,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7668/IntelR-HD-Graphics-Family"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 620",
      "rank": 469,
      "benchmark": 2.22,
      "samples": 13035,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8899/NVIDIA-GeForce-GT-620"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 240M",
      "rank": 470,
      "benchmark": 2.22,
      "samples": 2216,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8596/NVIDIA-GeForce-GT-240M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 880M",
      "rank": 471,
      "benchmark": 2.21,
      "samples": 4246,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7780/NVIDIA-Quadro-FX-880M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 330M",
      "rank": 472,
      "benchmark": 2.17,
      "samples": 6715,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7739/NVIDIA-GeForce-GT-330M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6520G",
      "rank": 473,
      "benchmark": 2.12,
      "samples": 7076,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7806/AMD-Radeon-HD-6520G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 520MX",
      "rank": 474,
      "benchmark": 2.1,
      "samples": 1465,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8048/NVIDIA-GeForce-GT-520MX"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9700M GT",
      "rank": 475,
      "benchmark": 2.09,
      "samples": 259,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12102/NVIDIA-GeForce-9700M-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7500G",
      "rank": 476,
      "benchmark": 2.05,
      "samples": 1100,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9442/AMD-Radeon-HD-7500G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 705",
      "rank": 477,
      "benchmark": 2.03,
      "samples": 3765,
      "url": "https://gpu.userbenchmark.com/SpeedTest/13024/NVIDIA-GeForce-GT-705"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 230M",
      "rank": 478,
      "benchmark": 2.02,
      "samples": 2599,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8017/NVIDIA-GeForce-GT-230M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon  HD 6490M",
      "rank": 479,
      "benchmark": 2,
      "samples": 389,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7775/Radeon-TM-HD-6490M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8600 GTS",
      "rank": 480,
      "benchmark": 1.99,
      "samples": 2357,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8311/NVIDIA-GeForce-8600-GTS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 130M",
      "rank": 481,
      "benchmark": 1.99,
      "samples": 606,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9306/NVIDIA-GeForce-GT-130M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7800 GT",
      "rank": 482,
      "benchmark": 1.99,
      "samples": 224,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8420/NVIDIA-GeForce-7800-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 610M",
      "rank": 483,
      "benchmark": 1.98,
      "samples": 4274,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8250/NVIDIA-GeForce-610M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7470M",
      "rank": 484,
      "benchmark": 1.98,
      "samples": 414,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9296/AMD-Radeon-HD-7470M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 7470",
      "rank": 485,
      "benchmark": 1.97,
      "samples": 10322,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8681/AMD-Radeon-HD-7000-series"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8370D",
      "rank": 486,
      "benchmark": 1.94,
      "samples": 4641,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10640/AMD-Radeon-HD-8370D"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 3000 (Desktop V2 1.35 GHz)",
      "rank": 487,
      "benchmark": 1.92,
      "samples": 4990,
      "url": "https://gpu.userbenchmark.com/Intel-HD-3000-Desktop-V2-135-GHz/Rating/2170"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon R5",
      "rank": 488,
      "benchmark": 1.91,
      "samples": 36325,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12264/AMD-RadeonTM-R5-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7400M",
      "rank": 489,
      "benchmark": 1.88,
      "samples": 4174,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7817/AMD-Radeon-HD-7400M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro 400",
      "rank": 490,
      "benchmark": 1.88,
      "samples": 916,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9363/NVIDIA-Quadro-400"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6470M",
      "rank": 491,
      "benchmark": 1.88,
      "samples": 4257,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7679/AMD-Radeon-HD-6470M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9500 GS",
      "rank": 492,
      "benchmark": 1.86,
      "samples": 1244,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11103/NVIDIA-GeForce-9500-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7480D",
      "rank": 493,
      "benchmark": 1.86,
      "samples": 6709,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7856/AMD-Radeon-HD-7480D"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 520",
      "rank": 494,
      "benchmark": 1.83,
      "samples": 14623,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7768/NVIDIA-GeForce-GT-520"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 2600-XT",
      "rank": 495,
      "benchmark": 1.81,
      "samples": 1717,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7897/ATI-Radeon-HD-2600-XT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "NVS 4200M",
      "rank": 496,
      "benchmark": 1.8,
      "samples": 5876,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7966/NVIDIA-NVS-4200M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 610",
      "rank": 497,
      "benchmark": 1.8,
      "samples": 46028,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7736/NVIDIA-GeForce-GT-610"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 770M",
      "rank": 498,
      "benchmark": 1.79,
      "samples": 781,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7999/NVIDIA-Quadro-FX-770M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 3000 (Mobile V2 1.3 GHz)",
      "rank": 499,
      "benchmark": 1.77,
      "samples": 91694,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7647/IntelR-HD-Graphics-3000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 4200 (Mobile 0.85 GHz)",
      "rank": 500,
      "benchmark": 1.76,
      "samples": 3015,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8662/IntelR-HD-Graphics-Family"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9650M-GT",
      "rank": 501,
      "benchmark": 1.76,
      "samples": 313,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9295/NVIDIA-GeForce-9650M-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 520M",
      "rank": 502,
      "benchmark": 1.75,
      "samples": 4661,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8308/NVIDIA-GeForce-GT-520M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 420",
      "rank": 503,
      "benchmark": 1.74,
      "samples": 7342,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10183/NVIDIA-GeForce-GT-420"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 2600",
      "rank": 504,
      "benchmark": 1.73,
      "samples": 6,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11511/ATI-Radeon-HD-26003600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 320M",
      "rank": 505,
      "benchmark": 1.73,
      "samples": 485,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9153/NVIDIA-GeForce-320M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 220M",
      "rank": 506,
      "benchmark": 1.72,
      "samples": 860,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11828/NVIDIA-GeForce-GT-220M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6480G",
      "rank": 507,
      "benchmark": 1.7,
      "samples": 4076,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8221/AMD-RadeonTM-HD-6480G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7450",
      "rank": 508,
      "benchmark": 1.68,
      "samples": 8710,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8053/AMD-RadeonTM-HD-7450"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 1600M",
      "rank": 509,
      "benchmark": 1.67,
      "samples": 385,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8782/NVIDIA-Quadro-FX-1600M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6450",
      "rank": 510,
      "benchmark": 1.66,
      "samples": 24214,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7821/AMD-Radeon-HD-6450"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9500 GT",
      "rank": 511,
      "benchmark": 1.61,
      "samples": 23165,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7816/NVIDIA-GeForce-9500-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 3000 (Desktop V1 1.1 GHz)",
      "rank": 512,
      "benchmark": 1.61,
      "samples": 7074,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7649/IntelR-HD-Graphics-3000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 3000 (Mobile V1 1.1/1.2 GHz)",
      "rank": 513,
      "benchmark": 1.57,
      "samples": 171652,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7646/IntelR-HD-Graphics-3000"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon R3 Graphics",
      "rank": 514,
      "benchmark": 1.57,
      "samples": 5415,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12440/AMD-RadeonTM-R3-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 3670",
      "rank": 515,
      "benchmark": 1.56,
      "samples": 366,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10736/ATI-Mobility-Radeon-HD-3670"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7400G",
      "rank": 516,
      "benchmark": 1.55,
      "samples": 333,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10815/AMD-Radeon-HD-7400G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "UHD Graphics 600",
      "rank": 517,
      "benchmark": 1.55,
      "samples": 17981,
      "url": "https://gpu.userbenchmark.com/SpeedTest/407837/IntelR-UHD-Graphics-600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7900 GTX",
      "rank": 518,
      "benchmark": 1.54,
      "samples": 182,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10625/NVIDIA-GeForce-7900-GTX"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9600M-GT",
      "rank": 519,
      "benchmark": 1.54,
      "samples": 3634,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7707/NVIDIA-GeForce-9600M-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8400-R3",
      "rank": 520,
      "benchmark": 1.53,
      "samples": 10035,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11160/AMD-Radeon-HD-8400--R3"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro NVS 320M",
      "rank": 521,
      "benchmark": 1.52,
      "samples": 155,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8310/NVIDIA-Quadro-NVS-320M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "HD 3650",
      "rank": 522,
      "benchmark": 1.52,
      "samples": 3726,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7982/ATI-Radeon-HD-3600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6410D",
      "rank": 523,
      "benchmark": 1.51,
      "samples": 2528,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8199/AMD-Radeon-HD-6410D"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 580",
      "rank": 524,
      "benchmark": 1.51,
      "samples": 4741,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7761/NVIDIA-Quadro-FX-580"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 2600-XT",
      "rank": 525,
      "benchmark": 1.5,
      "samples": 254,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9915/ATI-Mobility-Radeon-HD-2600-XT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9600M-GS",
      "rank": 526,
      "benchmark": 1.5,
      "samples": 942,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9821/NVIDIA-GeForce-9600M-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD Graphics (G4 Pentium/Celeron 1.05/1.15 GHz)",
      "rank": 527,
      "benchmark": 1.46,
      "samples": 32646,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7701/IntelR-HD-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 410M",
      "rank": 528,
      "benchmark": 1.42,
      "samples": 3873,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9169/NVIDIA-GeForce-410M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 8330",
      "rank": 529,
      "benchmark": 1.38,
      "samples": 7406,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8155/AMD-Radeon-HD-8330"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8600 GT",
      "rank": 530,
      "benchmark": 1.37,
      "samples": 8029,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7659/NVIDIA-GeForce-8600-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility FireGL V5700",
      "rank": 531,
      "benchmark": 1.37,
      "samples": 170,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10460/ATI-Mobility-FireGL-V5700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 570M",
      "rank": 532,
      "benchmark": 1.35,
      "samples": 408,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9414/NVIDIA-Quadro-FX-570M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "NVS 310",
      "rank": 533,
      "benchmark": 1.32,
      "samples": 3757,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10691/NVIDIA-NVS-310"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 2600-PRO",
      "rank": 534,
      "benchmark": 1.29,
      "samples": 1604,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8524/ATI-Radeon-HD-2600-PRO"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 415M",
      "rank": 535,
      "benchmark": 1.28,
      "samples": 75,
      "url": "https://gpu.userbenchmark.com/SpeedTest/16834/NVIDIA-GeForce-GT-415M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 2500 (Desktop 1.05 GHz)",
      "rank": 536,
      "benchmark": 1.24,
      "samples": 113047,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7696/IntelR-HD-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 545v",
      "rank": 537,
      "benchmark": 1.23,
      "samples": 610,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8734/ATI-Mobility-Radeon-HD-545v"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 1700",
      "rank": 538,
      "benchmark": 1.23,
      "samples": 2282,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9158/NVIDIA-Quadro-FX-1700"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 3650",
      "rank": 539,
      "benchmark": 1.23,
      "samples": 2492,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7902/ATI-Mobility-Radeon-HD-3650"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8600M GT",
      "rank": 540,
      "benchmark": 1.21,
      "samples": 1941,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8081/NVIDIA-GeForce-8600M-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD Graphics (G3 Pentium/Celeron 1.0/1.1 GHz)",
      "rank": 541,
      "benchmark": 1.17,
      "samples": 24659,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7695/IntelR-HD-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 4570",
      "rank": 542,
      "benchmark": 1.14,
      "samples": 371,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7827/ATI-Mobility-Radeon-HD-4570"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 2600",
      "rank": 543,
      "benchmark": 1.13,
      "samples": 896,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10285/ATI-Mobility-Radeon-HD-2600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6370M",
      "rank": 544,
      "benchmark": 1.11,
      "samples": 683,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10005/AMD-Radeon-HD-6370M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 8240",
      "rank": 545,
      "benchmark": 1.1,
      "samples": 3340,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9779/AMD-Radeon-HD-8240"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 6370",
      "rank": 546,
      "benchmark": 1.1,
      "samples": 314,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11239/ATI-Mobility-Radeon-HD-6370"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 4550",
      "rank": 547,
      "benchmark": 1.07,
      "samples": 3137,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8944/ATI-Radeon-HD-4550"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7800 GTX",
      "rank": 548,
      "benchmark": 1.06,
      "samples": 198,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12348/NVIDIA-GeForce-7800-GTX"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 4500",
      "rank": 549,
      "benchmark": 1.05,
      "samples": 8346,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7949/ATI-Mobility-Radeon-HD-45005100"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce GT 320M",
      "rank": 550,
      "benchmark": 1.02,
      "samples": 1334,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7796/NVIDIA-GeForce-GT-320M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 4200",
      "rank": 551,
      "benchmark": 1.01,
      "samples": 9257,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8091/ATI-Radeon-HD-4200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 4500",
      "rank": 552,
      "benchmark": 1.01,
      "samples": 295,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8032/NVIDIA-Quadro-FX-4500"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7900 GS",
      "rank": 553,
      "benchmark": 1,
      "samples": 553,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8541/NVIDIA-GeForce-7900-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6300M",
      "rank": 554,
      "benchmark": 0.98,
      "samples": 2586,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9894/AMD-Radeon-HD-6300M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 310M",
      "rank": 555,
      "benchmark": 0.96,
      "samples": 7196,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8049/NVIDIA-GeForce-310M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7350",
      "rank": 556,
      "benchmark": 0.95,
      "samples": 1371,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12157/AMD-Radeon-HD-7350"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce G210M",
      "rank": 557,
      "benchmark": 0.95,
      "samples": 1256,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8875/NVIDIA-GeForce-G210M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 315M",
      "rank": 558,
      "benchmark": 0.95,
      "samples": 2624,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10068/NVIDIA-GeForce-315M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 3500",
      "rank": 559,
      "benchmark": 0.95,
      "samples": 559,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10152/NVIDIA-Quadro-FX-3500"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6350",
      "rank": 560,
      "benchmark": 0.93,
      "samples": 2568,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10261/AMD-Radeon-HD-6350"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 310",
      "rank": 561,
      "benchmark": 0.92,
      "samples": 3362,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9197/NVIDIA-GeForce-310"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 5470",
      "rank": 562,
      "benchmark": 0.92,
      "samples": 13606,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7794/ATI-Mobility-Radeon-HD-5470"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 380",
      "rank": 563,
      "benchmark": 0.89,
      "samples": 1064,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8914/NVIDIA-Quadro-FX-380"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 4300",
      "rank": 564,
      "benchmark": 0.88,
      "samples": 12202,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7860/ATI-Radeon-HD-43004500"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 4350",
      "rank": 565,
      "benchmark": 0.88,
      "samples": 1626,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9335/ATI-Mobility-Radeon-HD-43004500"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "FirePro 2270",
      "rank": 566,
      "benchmark": 0.88,
      "samples": 417,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7813/AMD-FirePro-2270"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9400 GT",
      "rank": 567,
      "benchmark": 0.88,
      "samples": 11125,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7963/NVIDIA-GeForce-9400-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "NVS 300",
      "rank": 568,
      "benchmark": 0.86,
      "samples": 2150,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8966/NVIDIA-NVS-300"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce G210",
      "rank": 569,
      "benchmark": 0.85,
      "samples": 3445,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11784/NVIDIA-GeForce-G210"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 530v",
      "rank": 570,
      "benchmark": 0.85,
      "samples": 228,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10176/ATI-Mobility-Radeon-HD-530v"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "NVS 3100M",
      "rank": 571,
      "benchmark": 0.84,
      "samples": 8516,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7837/NVIDIA-NVS-3100M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7340",
      "rank": 572,
      "benchmark": 0.84,
      "samples": 3572,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8996/AMD-Radeon-HD-7340-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8400 GS",
      "rank": 573,
      "benchmark": 0.83,
      "samples": 16961,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7917/NVIDIA-GeForce-8400-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 305M",
      "rank": 574,
      "benchmark": 0.82,
      "samples": 41,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10705/NVIDIA-GeForce-305M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 5450",
      "rank": 575,
      "benchmark": 0.82,
      "samples": 49294,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7719/AMD-Radeon-HD-5450"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 5400",
      "rank": 576,
      "benchmark": 0.81,
      "samples": 8393,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8063/ATI-Radeon-HD-5400"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 4300",
      "rank": 577,
      "benchmark": 0.81,
      "samples": 2540,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8572/ATI-Mobility-Radeon-HD-4300"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "HD 8210",
      "rank": 578,
      "benchmark": 0.79,
      "samples": 4077,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7831/AMD-Radeon-HD-8210"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 210",
      "rank": 579,
      "benchmark": 0.77,
      "samples": 63766,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7740/NVIDIA-GeForce-210"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce Go 7900",
      "rank": 580,
      "benchmark": 0.77,
      "samples": 104,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9175/NVIDIA-GeForce-Go-7900-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 3200",
      "rank": 581,
      "benchmark": 0.77,
      "samples": 4679,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8532/ATI-Radeon-HD-3200-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6320",
      "rank": 582,
      "benchmark": 0.77,
      "samples": 6546,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8103/AMD-Radeon-HD-6320-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8600M GS",
      "rank": 583,
      "benchmark": 0.74,
      "samples": 858,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8192/NVIDIA-GeForce-8600M-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 4250",
      "rank": 584,
      "benchmark": 0.73,
      "samples": 9459,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8680/ATI-Mobility-Radeon-HD-4250"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9400M",
      "rank": 585,
      "benchmark": 0.73,
      "samples": 531,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7998/NVIDIA-GeForce-9400M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7600 GT",
      "rank": 586,
      "benchmark": 0.72,
      "samples": 1157,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8028/NVIDIA-GeForce-7600-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 4250",
      "rank": 587,
      "benchmark": 0.71,
      "samples": 5510,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7965/ATI-Radeon-HD-4250"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon 3000 Graphics",
      "rank": 588,
      "benchmark": 0.71,
      "samples": 17832,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7853/ATI-Radeon-3000-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8500 GT",
      "rank": 589,
      "benchmark": 0.7,
      "samples": 4865,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7777/NVIDIA-GeForce-8500-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "ION",
      "rank": 590,
      "benchmark": 0.67,
      "samples": 1543,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7884/NVIDIA-ION"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7800 GS",
      "rank": 591,
      "benchmark": 0.66,
      "samples": 38,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11875/NVIDIA-GeForce-7800-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 570",
      "rank": 592,
      "benchmark": 0.66,
      "samples": 1255,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8189/NVIDIA-Quadro-FX-570"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 7310",
      "rank": 593,
      "benchmark": 0.66,
      "samples": 6396,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9174/AMD-Radeon-HD-7310-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD Graphics (G2 Pentium/Celeron 1.1/1.15 GHz)",
      "rank": 594,
      "benchmark": 0.66,
      "samples": 40163,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7699/IntelR-HD-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6310",
      "rank": 595,
      "benchmark": 0.65,
      "samples": 11240,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7807/AMD-Radeon-HD-6310-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8400M GT",
      "rank": 596,
      "benchmark": 0.65,
      "samples": 348,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10523/NVIDIA-GeForce-8400M-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce G105M",
      "rank": 597,
      "benchmark": 0.65,
      "samples": 2198,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8400/NVIDIA-GeForce-G105M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD Graphics (Clarkdale 0.733/0.9 GHz)",
      "rank": 598,
      "benchmark": 0.64,
      "samples": 21564,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7702/IntelR-HD-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 3400",
      "rank": 599,
      "benchmark": 0.64,
      "samples": 6030,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8480/ATI-Mobility-Radeon-HD-3400"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD 2000 (Desktop 1.1 GHz)",
      "rank": 600,
      "benchmark": 0.64,
      "samples": 123895,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7697/IntelR-HD-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD Graphics (Bay Trail 0.667 - 0.854 GHz)",
      "rank": 601,
      "benchmark": 0.63,
      "samples": 64568,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7698/IntelR-HD-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Q45/Q43 Express Chipset",
      "rank": 602,
      "benchmark": 0.62,
      "samples": 12531,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8195/IntelR-Q45Q43-Express-Chipset"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "G41 Express Chipset",
      "rank": 603,
      "benchmark": 0.6,
      "samples": 24177,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7732/IntelR-G41-Express-Chipset"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 3450",
      "rank": 604,
      "benchmark": 0.59,
      "samples": 3890,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7779/ATI-Radeon-HD-3450---Dell-Optiplex"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "G45/G43 Express Chipset",
      "rank": 605,
      "benchmark": 0.58,
      "samples": 5970,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7728/IntelR-G45G43-Express-Chipset"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro NVS 290",
      "rank": 606,
      "benchmark": 0.58,
      "samples": 1650,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8083/NVIDIA-Quadro-NVS-290"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 4290",
      "rank": 607,
      "benchmark": 0.58,
      "samples": 981,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7847/ATI-Radeon-HD-4290"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 3300",
      "rank": 608,
      "benchmark": 0.57,
      "samples": 830,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7899/ATI-Radeon-HD-3300-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 1500",
      "rank": 609,
      "benchmark": 0.57,
      "samples": 461,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11831/NVIDIA-Quadro-FX-1500"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro NVS 140M",
      "rank": 610,
      "benchmark": 0.55,
      "samples": 853,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7946/NVIDIA-Quadro-NVS-140M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9300M GS",
      "rank": 611,
      "benchmark": 0.54,
      "samples": 2411,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7759/NVIDIA-GeForce-9300M-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro NVS 160M",
      "rank": 612,
      "benchmark": 0.54,
      "samples": 1517,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8249/NVIDIA-Quadro-NVS-160M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7600 GS",
      "rank": 613,
      "benchmark": 0.52,
      "samples": 1156,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11979/NVIDIA-GeForce-7600-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro NVS 295",
      "rank": 614,
      "benchmark": 0.52,
      "samples": 1548,
      "url": "https://gpu.userbenchmark.com/SpeedTest/12626/NVIDIA-Quadro-NVS-295"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6290",
      "rank": 615,
      "benchmark": 0.52,
      "samples": 2138,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7803/AMD-Radeon-HD-6290-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6250M",
      "rank": 616,
      "benchmark": 0.51,
      "samples": 41,
      "url": "https://gpu.userbenchmark.com/SpeedTest/13446/AMD-Radeon-HD-6250M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "HD Graphics (Arrandale 0.667/0.766 GHz)",
      "rank": 617,
      "benchmark": 0.51,
      "samples": 81512,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7694/IntelR-HD-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8400M GS",
      "rank": 618,
      "benchmark": 0.51,
      "samples": 2213,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8560/NVIDIA-GeForce-8400M-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "4 Series Internal Chipset",
      "rank": 619,
      "benchmark": 0.5,
      "samples": 1248,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9993/IntelR-4-Series-Internal-Chipset"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9200M GS",
      "rank": 620,
      "benchmark": 0.49,
      "samples": 1004,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9090/NVIDIA-GeForce-9200M-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro NVS 450",
      "rank": 621,
      "benchmark": 0.49,
      "samples": 559,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7791/NVIDIA-Quadro-NVS-450"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon X1650",
      "rank": 622,
      "benchmark": 0.48,
      "samples": 693,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10866/Radeon-X1650"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 9300 GS",
      "rank": 623,
      "benchmark": 0.48,
      "samples": 405,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10867/NVIDIA-GeForce-9300-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon HD 2400-PRO",
      "rank": 624,
      "benchmark": 0.46,
      "samples": 2613,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8931/ATI-Radeon-HD-2400-PRO"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon HD 6250",
      "rank": 625,
      "benchmark": 0.45,
      "samples": 1522,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8472/AMD-Radeon-HD-6250-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Mobile Series 4 Express Chipset Family",
      "rank": 626,
      "benchmark": 0.44,
      "samples": 22874,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7651/Mobile-IntelR-4-Series-Express-Chipset-Family"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "FirePro 2260",
      "rank": 627,
      "benchmark": 0.43,
      "samples": 322,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9852/ATI-FirePro-2260"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon HD 2400",
      "rank": 628,
      "benchmark": 0.41,
      "samples": 573,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8548/ATI-Mobility-Radeon-HD-2400"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon X1600",
      "rank": 629,
      "benchmark": 0.41,
      "samples": 932,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9407/Radeon-X1600-Series"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8200",
      "rank": 630,
      "benchmark": 0.41,
      "samples": 1015,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11915/NVIDIA-GeForce-8200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro FX 3450/4000 SDI",
      "rank": 631,
      "benchmark": 0.37,
      "samples": 403,
      "url": "https://gpu.userbenchmark.com/SpeedTest/13072/NVIDIA-Quadro-FX-34504000-SDI"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce Go 7600",
      "rank": 632,
      "benchmark": 0.36,
      "samples": 369,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7872/NVIDIA-GeForce-Go-7600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Radeon 3100 Graphics",
      "rank": 633,
      "benchmark": 0.35,
      "samples": 1095,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9910/ATI-Radeon-3100-Graphics"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7300 GT",
      "rank": 634,
      "benchmark": 0.35,
      "samples": 1453,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8156/NVIDIA-GeForce-7300-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon X1600",
      "rank": 635,
      "benchmark": 0.34,
      "samples": 403,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8748/ATI-Mobility-Radeon-X1600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "MOBILITY FireGL V5250",
      "rank": 636,
      "benchmark": 0.32,
      "samples": 39,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8385/ATI-MOBILITY-FireGL-V5250"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 6600 GT",
      "rank": 637,
      "benchmark": 0.31,
      "samples": 547,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8656/NVIDIA-GeForce-6600-GT"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8400M G",
      "rank": 638,
      "benchmark": 0.3,
      "samples": 291,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9009/NVIDIA-GeForce-8400M-G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro NVS 135M",
      "rank": 639,
      "benchmark": 0.3,
      "samples": 574,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7758/NVIDIA-Quadro-NVS-135M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 8200M G",
      "rank": 640,
      "benchmark": 0.29,
      "samples": 1318,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7912/NVIDIA-GeForce-8200M-G"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 6600",
      "rank": 641,
      "benchmark": 0.24,
      "samples": 831,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8606/NVIDIA-GeForce-6600"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7300 GS",
      "rank": 642,
      "benchmark": 0.18,
      "samples": 882,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7782/NVIDIA-GeForce-7300-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce Go 7400",
      "rank": 643,
      "benchmark": 0.17,
      "samples": 381,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8618/NVIDIA-GeForce-Go-7400"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon X1300",
      "rank": 644,
      "benchmark": 0.17,
      "samples": 1427,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9011/Radeon-X1300X1550-Series"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "AMD",
      "model": "Radeon X1550",
      "rank": 645,
      "benchmark": 0.17,
      "samples": 705,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11538/Radeon-X1550-64-bit"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon X2300",
      "rank": 646,
      "benchmark": 0.15,
      "samples": 361,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8306/ATI-Mobility-Radeon-X2300"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7300 LE",
      "rank": 647,
      "benchmark": 0.15,
      "samples": 1436,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7971/NVIDIA-GeForce-7300-LE"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon X1400",
      "rank": 648,
      "benchmark": 0.13,
      "samples": 441,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7829/ATI-Mobility-Radeon-X1400"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce Go 7300",
      "rank": 649,
      "benchmark": 0.13,
      "samples": 569,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7778/NVIDIA-GeForce-Go-7300"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "ATI",
      "model": "Mobility Radeon X1300",
      "rank": 650,
      "benchmark": 0.12,
      "samples": 343,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11505/ATI-Mobility-Radeon-X1300"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "Quadro NVS 440",
      "rank": 651,
      "benchmark": 0.11,
      "samples": 102,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10103/NVIDIA-Quadro-NVS-440"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7300 SE",
      "rank": 652,
      "benchmark": 0.08,
      "samples": 1923,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8767/NVIDIA-GeForce-7300-SE7200-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7100 GS",
      "rank": 653,
      "benchmark": 0.08,
      "samples": 623,
      "url": "https://gpu.userbenchmark.com/SpeedTest/11594/NVIDIA-GeForce-7100-GS"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7100 / nForce 630i",
      "rank": 654,
      "benchmark": 0.07,
      "samples": 1152,
      "url": "https://gpu.userbenchmark.com/SpeedTest/8642/NVIDIA-GeForce-7100--NVIDIA-nForce-630i"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 6200",
      "rank": 655,
      "benchmark": 0.07,
      "samples": 1651,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9463/NVIDIA-GeForce-6200"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 6150",
      "rank": 656,
      "benchmark": 0.06,
      "samples": 1030,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10968/NVIDIA-GeForce-6150"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 6100",
      "rank": 657,
      "benchmark": 0.06,
      "samples": 845,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9213/NVIDIA-GeForce-6100"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7025 / nForce 630a",
      "rank": 658,
      "benchmark": 0.06,
      "samples": 6927,
      "url": "https://gpu.userbenchmark.com/SpeedTest/9258/NVIDIA-GeForce-7025--NVIDIA-nForce-630a"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 6150SE nForce 430",
      "rank": 659,
      "benchmark": 0.05,
      "samples": 7059,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7763/NVIDIA-GeForce-6150SE-nForce-430"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Nvidia",
      "model": "GeForce 7150M / nForce 630M",
      "rank": 660,
      "benchmark": 0.05,
      "samples": 352,
      "url": "https://gpu.userbenchmark.com/SpeedTest/10312/NVIDIA-GeForce-7150M--nForce-630M"
    },
    {
      "type": "GPU",
      "part number": "",
      "brand": "Intel",
      "model": "Graphics Media Accelerator 3150",
      "rank": 661,
      "benchmark": 0,
      "samples": 0,
      "url": "https://gpu.userbenchmark.com/SpeedTest/7678/IntelR-Graphics-Media-Accelerator-3150"
    }
  ]
  
  const seedGallery = () => Gpu.bulkCreate(gpuData);

  module.exports = seedGallery;