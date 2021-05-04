const Gpu = require('../models');

const gpuData = [
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 3090",
      "Rank": 1,
      "Benchmark": 230,
      "Samples": 44733,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-3090/Rating/4081"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro RTX A6000",
      "Rank": 2,
      "Benchmark": 207,
      "Samples": 1,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1300600/NVIDIA-Quadro-RTX-A6000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 3080",
      "Rank": 3,
      "Benchmark": 202,
      "Samples": 112860,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-3080/Rating/4080"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 6900-XT",
      "Rank": 4,
      "Benchmark": 191,
      "Samples": 7105,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-6900-XT/Rating/4091"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Titan RTX",
      "Rank": 5,
      "Benchmark": 189,
      "Samples": 1607,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/664199/NVIDIA-TITAN-RTX"
    },
    {
      "Type": "GPU",
      "Part Number": "900-1G150-2500-000",
      "Brand": "Nvidia",
      "Model": "NVidia Titan RTX 24GB",
      "Rank": 5,
      "Benchmark": 189,
      "Samples": 1607,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/664199/NVIDIA-TITAN-RTX"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro RTX 8000",
      "Rank": 6,
      "Benchmark": 177,
      "Samples": 214,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/762332/NVIDIA-Quadro-RTX-8000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2080-Ti",
      "Rank": 7,
      "Benchmark": 174,
      "Samples": 268922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-T20810D-10P",
      "Brand": "Zotac",
      "Model": "Zotac RTX 2080 Ti 11GB GAMING AMP SPECTRA RGB",
      "Rank": 7,
      "Benchmark": 174,
      "Samples": 268922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "Type": "GPU",
      "Part Number": "DUAL-RTX2080TI-O11G",
      "Brand": "Asus",
      "Model": "Asus RTX 2080 Ti 11GB Dual-fan OC",
      "Rank": 7,
      "Benchmark": 174,
      "Samples": 268922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2080 Ti GAMING X TRIO",
      "Brand": "MSI",
      "Model": "MSI RTX 2080 Ti 11GB Gaming",
      "Rank": 7,
      "Benchmark": 174,
      "Samples": 268922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N208TGAMING OC-11GC",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2080 Ti 11GB Gaming OC",
      "Rank": 7,
      "Benchmark": 174,
      "Samples": 268922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-RTX2080TI-O11G-GAMING",
      "Brand": "Asus",
      "Model": "Asus RTX 2080 Ti 11GB ROG Strix",
      "Rank": 7,
      "Benchmark": 174,
      "Samples": 268922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "Type": "GPU",
      "Part Number": "11G-P4-2487-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2080 Ti 11GB FTW3 Ultra Gaming",
      "Rank": 7,
      "Benchmark": 174,
      "Samples": 268922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "Type": "GPU",
      "Part Number": "11G-P4-2281-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2080 Ti 11GB Black",
      "Rank": 7,
      "Benchmark": 174,
      "Samples": 268922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N208TAORUS X-11GC",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2080 Ti 11GB Xtreme",
      "Rank": 7,
      "Benchmark": 174,
      "Samples": 268922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080-Ti/Rating/4027"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro RTX 6000",
      "Rank": 8,
      "Benchmark": 173,
      "Samples": 576,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/736712/NVIDIA-Quadro-RTX-6000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Titan V",
      "Rank": 9,
      "Benchmark": 161,
      "Samples": 736,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/395529/NVIDIA-TITAN-V"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 6800-XT",
      "Rank": 10,
      "Benchmark": 160,
      "Samples": 9588,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-6800-XT/Rating/4089"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 3070",
      "Rank": 11,
      "Benchmark": 153,
      "Samples": 177678,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-3070/Rating/4083"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Titan Xp",
      "Rank": 12,
      "Benchmark": 143,
      "Samples": 5506,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/265423/NVIDIA-TITAN-Xp"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2080S (Super)",
      "Rank": 13,
      "Benchmark": 137,
      "Samples": 174059,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N208SGAMING OC-8GC",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2080 Super 8GB Gaming",
      "Rank": 13,
      "Benchmark": 137,
      "Samples": 174059,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "Type": "GPU",
      "Part Number": "08GP43183KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2080 Super 8GB XC Ultra",
      "Rank": 13,
      "Benchmark": 137,
      "Samples": 174059,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2080 Super Gaming X Trio",
      "Brand": "MSI",
      "Model": "MSI RTX 2080 Super 8GB Gaming X",
      "Rank": 13,
      "Benchmark": 137,
      "Samples": 174059,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-RTX2080S-A8G-Gaming",
      "Brand": "Asus",
      "Model": "Asus RTX 2080 Super 8GB ROG Strix A8G",
      "Rank": 13,
      "Benchmark": 137,
      "Samples": 174059,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-RTX2080S-O8G-Gaming",
      "Brand": "Asus",
      "Model": "Asus RTX 2080 Super 8GB ROG Strix O8G",
      "Rank": 13,
      "Benchmark": 137,
      "Samples": 174059,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2080 Super Ventus XS OC",
      "Brand": "MSI",
      "Model": "MSI RTX 2080 Super 8GB Ventus XS OC",
      "Rank": 13,
      "Benchmark": 137,
      "Samples": 174059,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2080 SUPER VENTUS OC",
      "Brand": "MSI",
      "Model": "MSI RTX 2080 Super 8GB Ventus OC",
      "Rank": 13,
      "Benchmark": 137,
      "Samples": 174059,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "Type": "GPU",
      "Part Number": "Gv-N208SWF3OC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2080 Super 8GB Windforce",
      "Rank": 13,
      "Benchmark": 137,
      "Samples": 174059,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-3081-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2080 Super 8GB Black Gaming",
      "Rank": 13,
      "Benchmark": 137,
      "Samples": 174059,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N208SAORUS-8GC",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2080 Super 8GB Aorus Windforce",
      "Rank": 13,
      "Benchmark": 137,
      "Samples": 174059,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-2083-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2080 Super 8GB KO Dual",
      "Rank": 13,
      "Benchmark": 137,
      "Samples": 174059,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080S-Super/Rating/4050"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1080-Ti",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "11G-P4-6390-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1080 Ti 11GB Founders Edition",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N108TD5X-B",
      "Brand": "Nvidia",
      "Model": "Gigabyte GTX 1080 Ti 11GB Founders Edition",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1080 Ti Founders Edition",
      "Brand": "Nvidia",
      "Model": "MSI GTX 1080 Ti 11GB Founders Edition",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-P10810A-10P",
      "Brand": "Nvidia",
      "Model": "Zotac GTX 1080 Ti 11GB Founders Edition",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX1080TI-FE",
      "Brand": "Asus",
      "Model": "Asus GTX 1080 Ti 11GB Founders Edition",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-GTX1080TI-O11G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1080 Ti 11GB Gaming OC",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1080 TI GAMING X",
      "Brand": "MSI",
      "Model": "MSI GTX 1080 TI 11GB Gaming X",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N108TAORUS-11GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1080 Ti 11GB AORUS",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "11G-P4-6696-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1080 Ti 11GB FTW3 Gaming",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-GTX1080TI-O11G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1080 Ti 11GB ROG Strix OC",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "11G-P4-6393-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1080 Ti 11GB SC Black",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-GTX1080TI-11G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1080 Ti 11GB ROG Strix",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "11G-P4-6593-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1080 Ti 11GB SC2 Gaming",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N108TAORUS X-11GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1080 Ti 11GB AORUS Xtreme",
      "Rank": 14,
      "Benchmark": 136,
      "Samples": 637025,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080-Ti/Rating/3918"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro RTX 5000",
      "Rank": 15,
      "Benchmark": 134,
      "Samples": 1097,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/712800/NVIDIA-Quadro-RTX-5000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 6800",
      "Rank": 16,
      "Benchmark": 134,
      "Samples": 6037,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-6800/Rating/4088"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Titan X Pascal",
      "Rank": 17,
      "Benchmark": 134,
      "Samples": 6823,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/158352/NVIDIA-TITAN-X-Pascal"
    },
    {
      "Type": "GPU",
      "Part Number": "900-1G611-2500-000",
      "Brand": "Nvidia",
      "Model": "NVidia Titan X Pascal 12GB",
      "Rank": 17,
      "Benchmark": 134,
      "Samples": 6823,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/158352/NVIDIA-TITAN-X-Pascal"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 3060-Ti",
      "Rank": 18,
      "Benchmark": 131,
      "Samples": 50983,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-3060-Ti/Rating/4090"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro P6000",
      "Rank": 19,
      "Benchmark": 130,
      "Samples": 570,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/187394/NVIDIA-Quadro-P6000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2080",
      "Rank": 20,
      "Benchmark": 127,
      "Samples": 243002,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2080 GAMING X TRIO",
      "Brand": "MSI",
      "Model": "MSI RTX 2080 8GB Gaming X Trio",
      "Rank": 20,
      "Benchmark": 127,
      "Samples": 243002,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N2080WF3OC-8GC",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2080 8GB Windforce OC",
      "Rank": 20,
      "Benchmark": 127,
      "Samples": 243002,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "Type": "GPU",
      "Part Number": "DUAL-RTX2080-O8G",
      "Brand": "Asus",
      "Model": "Asus RTX 2080 8GB Dual OC",
      "Rank": 20,
      "Benchmark": 127,
      "Samples": 243002,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N2080GAMING OC-8GC",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2080 8GB Gaming OC",
      "Rank": 20,
      "Benchmark": 127,
      "Samples": 243002,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-2183-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2080 8GB XC Ultra Gaming",
      "Rank": 20,
      "Benchmark": 127,
      "Samples": 243002,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-RTX2080-O8G-GAMING",
      "Brand": "Asus",
      "Model": "Asus RTX 2080 8GB ROG STRIX",
      "Rank": 20,
      "Benchmark": 127,
      "Samples": 243002,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-2182-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2080 8GB XC Gaming",
      "Rank": 20,
      "Benchmark": 127,
      "Samples": 243002,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2080/Rating/4026"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 3080 (Laptop)",
      "Rank": 21,
      "Benchmark": 126,
      "Samples": 697,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1443565/NVIDIA-GeForce-RTX-3080-Laptop-GPU"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2080S (Super Mobile)",
      "Rank": 22,
      "Benchmark": 121,
      "Samples": 890,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1188513/NVIDIA-GeForce-RTX-2080-Super"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 6700-XT",
      "Rank": 23,
      "Benchmark": 119,
      "Samples": 4415,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-6700-XT/Rating/4109"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2070S (Super)",
      "Rank": 24,
      "Benchmark": 118,
      "Samples": 445922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-3173-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2070 Super 8GB SC XC Ultra Gaming",
      "Rank": 24,
      "Benchmark": 118,
      "Samples": 445922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N207SGAMING OC-8GC",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2070 Super 8GB Gaming",
      "Rank": 24,
      "Benchmark": 118,
      "Samples": 445922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2070 SUPER VENTUS OC",
      "Brand": "MSI",
      "Model": "MSI RTX 2070 Super 8GB Ventus",
      "Rank": 24,
      "Benchmark": 118,
      "Samples": 445922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N207SWF3OC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2070 Super 8GB 3X Windforce",
      "Rank": 24,
      "Benchmark": 118,
      "Samples": 445922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N207SGAMING OC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2070 Super 8GB 3X Gaming",
      "Rank": 24,
      "Benchmark": 118,
      "Samples": 445922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2070 Super GAMING X",
      "Brand": "MSI",
      "Model": "MSI RTX 2070 Super 8GB Gaming X",
      "Rank": 24,
      "Benchmark": 118,
      "Samples": 445922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-3071-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2070 Super 8GB Super Black Gaming",
      "Rank": 24,
      "Benchmark": 118,
      "Samples": 445922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "Type": "GPU",
      "Part Number": "DUAL-RTX-2070S-O8G-EVO",
      "Brand": "Asus",
      "Model": "Asus RTX 2070 Super 8GB Dual Evo",
      "Rank": 24,
      "Benchmark": 118,
      "Samples": 445922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-T20710E-10M",
      "Brand": "Zotac",
      "Model": "Zotac RTX 2070 Super 8GB Mini",
      "Rank": 24,
      "Benchmark": 118,
      "Samples": 445922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-2072-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2070 Super 8GB KO Gaming",
      "Rank": 24,
      "Benchmark": 118,
      "Samples": 445922,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070S-Super/Rating/4048"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2080 (Mobile)",
      "Rank": 25,
      "Benchmark": 114,
      "Samples": 2265,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/700275/NVIDIA-GeForce-RTX-2080"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon-VII",
      "Rank": 26,
      "Benchmark": 112,
      "Samples": 10400,
      "URL": "https://gpu.userbenchmark.com/AMD-Radeon-VII/Rating/4035"
    },
    {
      "Type": "GPU",
      "Part Number": "21291-01-40G",
      "Brand": "AMD",
      "Model": "Sapphire Radeon VII 16GB",
      "Rank": 26,
      "Benchmark": 112,
      "Samples": 10400,
      "URL": "https://gpu.userbenchmark.com/AMD-Radeon-VII/Rating/4035"
    },
    {
      "Type": "GPU",
      "Part Number": "RADEONVII-16G",
      "Brand": "AMD",
      "Model": "Asus Radeon VII 16GB",
      "Rank": 26,
      "Benchmark": 112,
      "Samples": 10400,
      "URL": "https://gpu.userbenchmark.com/AMD-Radeon-VII/Rating/4035"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 3070 (Laptop)",
      "Rank": 27,
      "Benchmark": 110,
      "Samples": 2501,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1445007/NVIDIA-GeForce-RTX-3070-Laptop-GPU"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro GP100",
      "Rank": 28,
      "Benchmark": 107,
      "Samples": 104,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/279788/NVIDIA-Quadro-GP100"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1080",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-6180-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1080 8GB Founders Edition",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX1080-8G",
      "Brand": "Asus",
      "Model": "ASUS GTX 1080 8GB Founders Edition",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "GEFORCE GTX 1080 Founders Edition",
      "Brand": "Nvidia",
      "Model": "MSI GTX 1080 8GB Founders Edition",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-P10800A-10P",
      "Brand": "Nvidia",
      "Model": "Zotac GTX 1080 8GB Founders Edition",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1080D5X-8GD-B",
      "Brand": "Nvidia",
      "Model": "Gigabyte GTX 1080 8GB Founders Edition",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-6183-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1080 8GB SC GAMING ACX 3.0",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1080 GAMING X 8G",
      "Brand": "MSI",
      "Model": "MSI GTX 1080 8GB GAMING X",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1080G1 GAMING-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1080 8GB G1 Gaming",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-6286-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1080 8GB FTW ACX 3.0",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-GTX1080-A8G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1080 8GB ROG STRIX",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-GTX1080-8G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1080 8GB ROG STRIX",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-P10800C-10P",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1080 8GB AMP",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-P10800B-10P",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1080 8GB AMP Extreme",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1080XTREME-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1080 8GB Xtreme",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1080XTREME-8GD Premium Pack",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1080 8GB Xtreme Pack",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1080XTREME W-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1080 8GB Xtreme Water",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-6686-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1080 8GB FTW2",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1080TTOC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1080 8GB Turbo",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1080WF3OC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1080 8GB Windforce",
      "Rank": 29,
      "Benchmark": 106,
      "Samples": 803577,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1080/Rating/3603"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2070",
      "Rank": 30,
      "Benchmark": 106,
      "Samples": 341979,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N2070GAMING OC-8GC",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2070 8GB Gaming OC",
      "Rank": 30,
      "Benchmark": 106,
      "Samples": 341979,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-2172-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2070 8GB XC Gaming Dual HDB",
      "Rank": 30,
      "Benchmark": 106,
      "Samples": 341979,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2070 GAMING Z 8G",
      "Brand": "MSI",
      "Model": "MSI RTX 2070 8GB Gaming Z",
      "Rank": 30,
      "Benchmark": 106,
      "Samples": 341979,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-2173-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2070 8GB XC Ultra Gaming",
      "Rank": 30,
      "Benchmark": 106,
      "Samples": 341979,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-RTX2070-O8G-GAMING",
      "Brand": "Asus",
      "Model": "Asus RTX 2070 8GB ROG STRIX",
      "Rank": 30,
      "Benchmark": 106,
      "Samples": 341979,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2070 ARMOR 8G OC",
      "Brand": "MSI",
      "Model": "MSI RTX 2070 8GB Armor OC",
      "Rank": 30,
      "Benchmark": 106,
      "Samples": 341979,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N2070WF3-8GC",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2070 8GB Windforce",
      "Rank": 30,
      "Benchmark": 106,
      "Samples": 341979,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-1071-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2070 8GB Black Gaming",
      "Rank": 30,
      "Benchmark": 106,
      "Samples": 341979,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-T20700E-10P",
      "Brand": "Zotac",
      "Model": "Zotac RTX 2070 8GB Mini",
      "Rank": 30,
      "Benchmark": 106,
      "Samples": 341979,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "Type": "GPU",
      "Part Number": "DUAL-RTX-2070-8G",
      "Brand": "Asus",
      "Model": "Asus RTX 2070 8GB Dual",
      "Rank": 30,
      "Benchmark": 106,
      "Samples": 341979,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "Type": "GPU",
      "Part Number": "GeForce RTX 2070 TRI FROZR",
      "Brand": "MSI",
      "Model": "MSI RTX 2070 8GB Tri Frozr",
      "Rank": 30,
      "Benchmark": 106,
      "Samples": 341979,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2070/Rating/4029"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 5700XT 50th Anniversary",
      "Rank": 31,
      "Benchmark": 106,
      "Samples": 3450,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/845537/AMD-Radeon-RX-5700-XT-50th-Anniversary"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 5700-XT",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX 5700XT 8GBD6-M3DH",
      "Brand": "AMD",
      "Model": "PowerColor RX 5700 XT 8GB",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "21293-01-40G",
      "Brand": "AMD",
      "Model": "Sapphire RX 5700 XT 8GB",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-57XT8MFD6",
      "Brand": "AMD",
      "Model": "XFX RX 5700 XT 8GB",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "Radeon RX 5700 XT 8G",
      "Brand": "AMD",
      "Model": "MSI RX 5700 XT 8GB Gaming",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "RX5700XT-8G",
      "Brand": "AMD",
      "Model": "Asus RX 5700 XT 8GB",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R57XT-8GD-B",
      "Brand": "AMD",
      "Model": "Gigabyte RX 5700 XT 8GB",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "11293-01-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 5700 XT 8GB Pulse",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX 5700XT 8GBD6-3DHE/OC",
      "Brand": "PowerColor",
      "Model": "PowerColor RX 5700 XT 8GB Red Devil",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX 5700XT 8GBD6-3DHR/OC",
      "Brand": "PowerColor",
      "Model": "PowerColor RX 5700 XT 8GB Red Dragon",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "11293-03-40G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 5700 XT 8GB Nitro+",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "11293-01-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 5700 XT 8GB Pulse",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R57XTGAMING OC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 5700 XT 8GB Gaming OC",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "Rx-57XT8TBD8",
      "Brand": "XFX",
      "Model": "XFX RX 5700 XT 8GB Thicc III Ultra",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-57XT8TFD8",
      "Brand": "XFX",
      "Model": "XFX RX 5700 XT 8GB Thicc III",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "TUF-3-RX5700XT-O8G-EVO-GAMING",
      "Brand": "Asus",
      "Model": "Asus RX 5700 XT 8GB TUF Gaming 3",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-RX5700XT-O8G-GAMING",
      "Brand": "Asus",
      "Model": "Asus RX 5700 XT 8GB ROG Strix",
      "Rank": 32,
      "Benchmark": 104,
      "Samples": 329015,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700-XT/Rating/4045"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX Vega-64LC (Liquid Cooled)",
      "Rank": 33,
      "Benchmark": 99.6,
      "Samples": 3278,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/353890/Radeon-RX-Vega"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RXVEGA64X W-8GD-B",
      "Brand": "AMD",
      "Model": "Gigabyte RX Vega 64 8GB LC",
      "Rank": 33,
      "Benchmark": 99.6,
      "Samples": 3278,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/353890/Radeon-RX-Vega"
    },
    {
      "Type": "GPU",
      "Part Number": "21275-00-40G",
      "Brand": "AMD",
      "Model": "Sapphire RX Vega 64 8GB LC",
      "Rank": 33,
      "Benchmark": 99.6,
      "Samples": 3278,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/353890/Radeon-RX-Vega"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-VEGMXWFXW",
      "Brand": "AMD",
      "Model": "XFX RX Vega 64 8GB LC",
      "Rank": 33,
      "Benchmark": 99.6,
      "Samples": 3278,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/353890/Radeon-RX-Vega"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2060S (Super)",
      "Rank": 34,
      "Benchmark": 99.2,
      "Samples": 218858,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N206SGAMING OC-8GC",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2060 Super 8GB Gaming",
      "Rank": 34,
      "Benchmark": 99.2,
      "Samples": 218858,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-3163-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2060 Super 8GB SC XC Ultra Gaming",
      "Rank": 34,
      "Benchmark": 99.2,
      "Samples": 218858,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2060 Super Gaming X",
      "Brand": "MSI",
      "Model": "MSI RTX 2060 Super 8GB Gaming X",
      "Rank": 34,
      "Benchmark": 99.2,
      "Samples": 218858,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N206SWF2OC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2060 Super 8GB Windforce OC",
      "Rank": 34,
      "Benchmark": 99.2,
      "Samples": 218858,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N206SAORUS-8GC",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2060 Super 8GB Aorus",
      "Rank": 34,
      "Benchmark": 99.2,
      "Samples": 218858,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-3062-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2060 8GB Super SC Black",
      "Rank": 34,
      "Benchmark": 99.2,
      "Samples": 218858,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-3067",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2060 Super 8GB SC Ultra Gaming",
      "Rank": 34,
      "Benchmark": 99.2,
      "Samples": 218858,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-T20610E-10M",
      "Brand": "Zotac",
      "Model": "Zotac RTX 2060 Super 8GB Mini Gaming",
      "Rank": 34,
      "Benchmark": 99.2,
      "Samples": 218858,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060S-Super/Rating/4049"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 3060",
      "Rank": 35,
      "Benchmark": 97.1,
      "Samples": 15592,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-3060/Rating/4105"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1070-Ti",
      "Rank": 36,
      "Benchmark": 96.6,
      "Samples": 307115,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-GTX1070TI-A8G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1070 Ti 8GB STRIX",
      "Rank": 36,
      "Benchmark": 96.6,
      "Samples": 307115,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1070 TI GAMING 8G",
      "Brand": "MSI",
      "Model": "MSI GTX 1070 Ti 8GB Gaming",
      "Rank": 36,
      "Benchmark": 96.6,
      "Samples": 307115,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-5671-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1070 Ti 8GB SC GAMING",
      "Rank": 36,
      "Benchmark": 96.6,
      "Samples": 307115,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N107TGAMING OC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1070 Ti 8GB Gaming OC",
      "Rank": 36,
      "Benchmark": 96.6,
      "Samples": 307115,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1070 TI AERO 8G",
      "Brand": "MSI",
      "Model": "MSI GTX 1070 Ti 8GB Aero",
      "Rank": 36,
      "Benchmark": 96.6,
      "Samples": 307115,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-GTX1070TI-8G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1070 Ti 8GB ROG Strix Gaming",
      "Rank": 36,
      "Benchmark": 96.6,
      "Samples": 307115,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-6775-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1070 Ti 8GB FTW2 GAMING",
      "Rank": 36,
      "Benchmark": 96.6,
      "Samples": 307115,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N107TGAMING-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1070 Ti 8GB Gaming",
      "Rank": 36,
      "Benchmark": 96.6,
      "Samples": 307115,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-6678-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1070 Ti 8GB FTW ULTRA SILENT GAMING",
      "Rank": 36,
      "Benchmark": 96.6,
      "Samples": 307115,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1070 TI TITANIUM 8G",
      "Brand": "MSI",
      "Model": "MSI GTX 1070 Ti 8GB TITANIUM",
      "Rank": 36,
      "Benchmark": 96.6,
      "Samples": 307115,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070-Ti/Rating/3943"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1080 (Mobile)",
      "Rank": 37,
      "Benchmark": 96.4,
      "Samples": 9941,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/165564/NVIDIA-GeForce-GTX-1080"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2070S (Super Mobile)",
      "Rank": 38,
      "Benchmark": 96.1,
      "Samples": 3216,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1164515/NVIDIA-GeForce-RTX-2070-Super"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro RTX 4000",
      "Rank": 39,
      "Benchmark": 95.1,
      "Samples": 4060,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/716215/NVIDIA-Quadro-RTX-4000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2080S (Super Mobile Max-Q)",
      "Rank": 40,
      "Benchmark": 94.2,
      "Samples": 1727,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1114823/NVIDIA-GeForce-RTX-2080-Super-with-Max-Q-Design"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX Vega-64",
      "Rank": 41,
      "Benchmark": 93.8,
      "Samples": 69590,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RXVEGA64-8GD-B",
      "Brand": "AMD",
      "Model": "Gigabyte RX Vega 64 8GB",
      "Rank": 41,
      "Benchmark": 93.8,
      "Samples": 69590,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-VEGMTBFX6",
      "Brand": "AMD",
      "Model": "XFX RX Vega 64 8GB",
      "Rank": 41,
      "Benchmark": 93.8,
      "Samples": 69590,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "Type": "GPU",
      "Part Number": "21275-02-20G",
      "Brand": "AMD",
      "Model": "Sapphire RX Vega 64 8GB",
      "Rank": 41,
      "Benchmark": 93.8,
      "Samples": 69590,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-RXVEGA64-O8G-GAMING",
      "Brand": "Asus",
      "Model": "Asus RX Vega 64 8GB ROG Strix Gaming",
      "Rank": 41,
      "Benchmark": 93.8,
      "Samples": 69590,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RXVEGA64GAMING OC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX Vega 64 8GB Gaming OC",
      "Rank": 41,
      "Benchmark": 93.8,
      "Samples": 69590,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "Type": "GPU",
      "Part Number": "RX VEGA 64 AIR BOOST 8G OC",
      "Brand": "MSI",
      "Model": "MSI RX Vega 64 8GB Gaming Air Boost",
      "Rank": 41,
      "Benchmark": 93.8,
      "Samples": 69590,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-64/Rating/3933"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro P5000",
      "Rank": 42,
      "Benchmark": 91.1,
      "Samples": 5941,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/197331/NVIDIA-Quadro-P5000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Vega Frontier Edition",
      "Rank": 43,
      "Benchmark": 91.1,
      "Samples": 1569,
      "URL": "https://gpu.userbenchmark.com/AMD-Vega-Frontier-Edition/Rating/3929"
    },
    {
      "Type": "GPU",
      "Part Number": "100-506061",
      "Brand": "AMD",
      "Model": "Radeon Vega Frontier Edition Air",
      "Rank": 43,
      "Benchmark": 91.1,
      "Samples": 1569,
      "URL": "https://gpu.userbenchmark.com/AMD-Vega-Frontier-Edition/Rating/3929"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2070 (Mobile)",
      "Rank": 44,
      "Benchmark": 90.2,
      "Samples": 12147,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/694798/NVIDIA-GeForce-RTX-2070"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2080 (Mobile Max-Q)",
      "Rank": 45,
      "Benchmark": 89.4,
      "Samples": 5212,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/704710/NVIDIA-GeForce-RTX-2080-with-Max-Q-Design"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2060",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2060 VENTUS 6G OC",
      "Brand": "MSI",
      "Model": "MSI RTX 2060 6GB Ventus",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-T20600F-10M",
      "Brand": "Zotac",
      "Model": "Zotac RTX 2060 6GB Twin",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N2060GAMING OC-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2060 6GB Gaming OC",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-2167-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2060 6GB XC Ultra Gaming",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N2060WF2OC-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2060 6GB Windforce OC",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2060 Gaming Z 6G",
      "Brand": "MSI",
      "Model": "MSI RTX 2060 6GB Gaming Z",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-RTX2060-O6G-GAMING",
      "Brand": "Asus",
      "Model": "Asus RTX 2060 6GB ROG STRIX",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N2060GAMINGOC PRO-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RTX 2060 6GB Gaming OC Pro",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-2060-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2060 6GB Gaming",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-2068-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2060 KO 6GB Ultra Gaming",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-2066-KR",
      "Brand": "EVGA",
      "Model": "EVGA RTX 2060 KO 6GB Gaming",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "RTX 2060 VENTUS XS 6G OC",
      "Brand": "MSI",
      "Model": "MSI RTX 2060 6GB Ventus XS",
      "Rank": 46,
      "Benchmark": 88.6,
      "Samples": 423509,
      "URL": "https://gpu.userbenchmark.com/Nvidia-RTX-2060/Rating/4034"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 5700",
      "Rank": 47,
      "Benchmark": 87.7,
      "Samples": 51634,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX 5700 8GBD6-M3DH",
      "Brand": "AMD",
      "Model": "PowerColor RX 5700 8GB",
      "Rank": 47,
      "Benchmark": 87.7,
      "Samples": 51634,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "Type": "GPU",
      "Part Number": "21294-01-20G",
      "Brand": "AMD",
      "Model": "Sapphire RX 5700 8GB",
      "Rank": 47,
      "Benchmark": 87.7,
      "Samples": 51634,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-57XL8MFG6",
      "Brand": "AMD",
      "Model": "XFX RX 5700 8GB",
      "Rank": 47,
      "Benchmark": 87.7,
      "Samples": 51634,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "Type": "GPU",
      "Part Number": "R5700XT8",
      "Brand": "AMD",
      "Model": "MSI RX 5700 8GB",
      "Rank": 47,
      "Benchmark": 87.7,
      "Samples": 51634,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "Type": "GPU",
      "Part Number": "11294-01-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 5700 8GB Pulse",
      "Rank": 47,
      "Benchmark": 87.7,
      "Samples": 51634,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "Type": "GPU",
      "Part Number": "R5700MHC",
      "Brand": "MSI",
      "Model": "MSI RX 5700 8GB Mech",
      "Rank": 47,
      "Benchmark": 87.7,
      "Samples": 51634,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "Type": "GPU",
      "Part Number": "11294-01-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 5700 8GB Pulse",
      "Rank": 47,
      "Benchmark": 87.7,
      "Samples": 51634,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX 5700 8GBD6-3DHE/OC",
      "Brand": "PowerColor",
      "Model": "PowerColor RX 5700 8GB Red Devil",
      "Rank": 47,
      "Benchmark": 87.7,
      "Samples": 51634,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-57XL8LBD6",
      "Brand": "XFX",
      "Model": "XFX RX 5700 8GB DD Ultra",
      "Rank": 47,
      "Benchmark": 87.7,
      "Samples": 51634,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R57GAMING OC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 5700 8GB Gaming OC",
      "Rank": 47,
      "Benchmark": 87.7,
      "Samples": 51634,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "Type": "GPU",
      "Part Number": "RX 5700 Evoke OC",
      "Brand": "MSI",
      "Model": "MSI RX 5700 8GB Evoke OC",
      "Rank": 47,
      "Benchmark": 87.7,
      "Samples": 51634,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5700/Rating/4046"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 5600-XT",
      "Rank": 48,
      "Benchmark": 87.3,
      "Samples": 73461,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "Type": "GPU",
      "Part Number": "11296-01-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 5600 XT 6GB Pulse",
      "Rank": 48,
      "Benchmark": 87.3,
      "Samples": 73461,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX 5600XT 6GBD6-3DHE/OC",
      "Brand": "PowerColor",
      "Model": "PowerColor RX 5600 XT 6GB Red Devil",
      "Rank": 48,
      "Benchmark": 87.3,
      "Samples": 73461,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-56XT6DFD6",
      "Brand": "XFX",
      "Model": "XFX RX 5600 XT 6GB Thicc II PRO",
      "Rank": 48,
      "Benchmark": 87.3,
      "Samples": 73461,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-56XT6DF46",
      "Brand": "XFX",
      "Model": "XFX RX 5600 XT 6GB Thicc II PRO",
      "Rank": 48,
      "Benchmark": 87.3,
      "Samples": 73461,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R56XTGAMING OC-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 5600 XT 6GB Gaming OC",
      "Rank": 48,
      "Benchmark": 87.3,
      "Samples": 73461,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R56XTWF2OC-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 5600 XT 6GB Windforce OC",
      "Rank": 48,
      "Benchmark": 87.3,
      "Samples": 73461,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "Type": "GPU",
      "Part Number": "Radeon RX 5600 XT GAMING MX",
      "Brand": "MSI",
      "Model": "MSI RX 5600 XT 6GB Gaming MX",
      "Rank": 48,
      "Benchmark": 87.3,
      "Samples": 73461,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5600-XT/Rating/4062"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2070S (Super Mobile Max-Q)",
      "Rank": 49,
      "Benchmark": 85.9,
      "Samples": 1691,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1168355/NVIDIA-GeForce-RTX-2070-Super-with-Max-Q-Design"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 3060 (Laptop)",
      "Rank": 50,
      "Benchmark": 84.3,
      "Samples": 2326,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1452971/NVIDIA-GeForce-RTX-3060-Laptop-GPU"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX Vega-56",
      "Rank": 51,
      "Benchmark": 83.1,
      "Samples": 65018,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "Type": "GPU",
      "Part Number": "21276-00-20G",
      "Brand": "AMD",
      "Model": "Sapphire RX Vega 56 8GB",
      "Rank": 51,
      "Benchmark": 83.1,
      "Samples": 65018,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-VEGMLBFX6",
      "Brand": "AMD",
      "Model": "XFX RX Vega 56 8GB",
      "Rank": 51,
      "Benchmark": 83.1,
      "Samples": 65018,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RXVEGA56-8GD-B",
      "Brand": "AMD",
      "Model": "Gigabyte RX Vega 56 8GB",
      "Rank": 51,
      "Benchmark": 83.1,
      "Samples": 65018,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "Type": "GPU",
      "Part Number": "RX Vega 56 Air Boost 8G OC",
      "Brand": "MSI",
      "Model": "MSI RX Vega 56 8GB Gaming Air Boost",
      "Rank": 51,
      "Benchmark": 83.1,
      "Samples": 65018,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RXVEGA56GAMING OC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX Vega 56 8GB OC",
      "Rank": 51,
      "Benchmark": 83.1,
      "Samples": 65018,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "Type": "GPU",
      "Part Number": "11276-02-40G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX Vega 56 8GB Pulse",
      "Rank": 51,
      "Benchmark": 83.1,
      "Samples": 65018,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "Type": "GPU",
      "Part Number": "90-GA0900-00UANF",
      "Brand": "ASRock",
      "Model": "ASRock RX Vega 56 8GB Phantom Gaming X",
      "Rank": 51,
      "Benchmark": 83.1,
      "Samples": 65018,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-Vega-56/Rating/3938"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1070",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX1070-8G",
      "Brand": "Asus",
      "Model": "ASUS GTX 1070 8GB Founders Edition",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-P10700A-10P",
      "Brand": "Nvidia",
      "Model": "ZOTAC GTX 1070 8GB Founders Edition",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "VCGGTX10708PB-CG",
      "Brand": "Nvidia",
      "Model": "PNY GTX 1070 8GB Founders Edition",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1070D5-8GD-B",
      "Brand": "Nvidia",
      "Model": "Gigabyte GTX 1070 8GB Founders Edition",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "MSI GeForce GTX 1070 Founders Edition",
      "Brand": "Nvidia",
      "Model": "MSI GTX 1070 Founders Edition",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-6170-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1070 8GB Founders Edition",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "GeForce GTX 1070 GAMING X 8G",
      "Brand": "MSI",
      "Model": "MSI GTX 1070 8GB GAMING X",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1070 GAMING X 8G",
      "Brand": "MSI",
      "Model": "MSI GTX 1070 8GB GAMING X",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1070G1 GAMING-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1070 8GB G1 Gaming",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "GeForce GTX 1070 ARMOR 8G OC",
      "Brand": "MSI",
      "Model": "MSI GTX 1070 8GB ARMOR OC",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-6173-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1070 8GB SC GAMING",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-GTX1070-O8G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1070 8GB STRIX OC",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-6276-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1070 8GB FTW Gaming",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-GTX1070-8G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1070 8GB STRIX",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-P10700B-10P",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1070 8GB AMP! Extreme",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1070WF2OC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1070 8GB Windforce OC",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "GeForce GTX 1070 GAMING 8G",
      "Brand": "MSI",
      "Model": "MSI GTX 1070 8GB Gaming",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "DUAL-GTX1070-O8G",
      "Brand": "Asus",
      "Model": "Asus GTX 1070 8GB Dual OC",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-5173-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1070 8GB SC Gaming ACX 3.0",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-6171-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1070 8GB Gaming ACX 3.0",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-6274-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1070 8GB FTW DT Gaming",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "426018336-3682",
      "Brand": "Gainward",
      "Model": "Gainward GTX 1070 8GB Phoenix GS",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1070XTREME-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1070 8GB XTREME",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "TURBO-GTX1070-8G",
      "Brand": "Asus",
      "Model": "Asus GTX 1070 8GB Turbo",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "GeForce GTX 1070 SEA HAWK X",
      "Brand": "MSI",
      "Model": "MSI GTX 1070 8GB SEA HAWK X",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1070IXOC-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1070 8GB Mini ITX OC",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "08G-P4-6676-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1070 8GB FTW2",
      "Rank": 52,
      "Benchmark": 80.5,
      "Samples": 1080629,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1070/Rating/3609"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 980-Ti",
      "Rank": 53,
      "Benchmark": 80.2,
      "Samples": 169627,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-4995-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 980 Ti 6GB ACX SC+ ACX 2.0+ w/BP",
      "Rank": 53,
      "Benchmark": 80.2,
      "Samples": 169627,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-4992-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 980 Ti 6GB SC",
      "Rank": 53,
      "Benchmark": 80.2,
      "Samples": 169627,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX980TI-6GD5",
      "Brand": "Asus",
      "Model": "ASUS GTX 980 Ti 6GB",
      "Rank": 53,
      "Benchmark": 80.2,
      "Samples": 169627,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 980TI GAMING 6G",
      "Brand": "MSI",
      "Model": "MSI GTX 980 Ti 6GB Gaming",
      "Rank": 53,
      "Benchmark": 80.2,
      "Samples": 169627,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N98TG1 GAMING-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 980 Ti 6GB GV-N98TG1",
      "Rank": 53,
      "Benchmark": 80.2,
      "Samples": 169627,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N98TWF3OC-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 980 Ti 6GB Windforce 3X OC",
      "Rank": 53,
      "Benchmark": 80.2,
      "Samples": 169627,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 980Ti GAMING 6G GOLDEN EDITION",
      "Brand": "MSI",
      "Model": "MSI GTX 980 TI 6GB OC GOLDEN LE",
      "Rank": 53,
      "Benchmark": 80.2,
      "Samples": 169627,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-0998-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 980 Ti 6GB Classified Gaming ACX 2.0+",
      "Rank": 53,
      "Benchmark": 80.2,
      "Samples": 169627,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980-Ti/Rating/3439"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2070 (Mobile Max-Q)",
      "Rank": 54,
      "Benchmark": 79.6,
      "Samples": 7117,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/703511/NVIDIA-GeForce-RTX-2070-with-Max-Q-Design"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1080 (Mobile Max-Q)",
      "Rank": 55,
      "Benchmark": 77.9,
      "Samples": 2697,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/308045/NVIDIA-GeForce-GTX-1080-with-Max-Q-Design"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX Titan X",
      "Rank": 56,
      "Benchmark": 77,
      "Samples": 13739,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-Titan-X/Rating/3282"
    },
    {
      "Type": "GPU",
      "Part Number": "12G-P4-2992-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX TITAN X 12GB SC",
      "Rank": 56,
      "Benchmark": 77,
      "Samples": 13739,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-Titan-X/Rating/3282"
    },
    {
      "Type": "GPU",
      "Part Number": "GTXTITANX-12GD5",
      "Brand": "Asus",
      "Model": "ASUS GTX TITAN X 12GB",
      "Rank": 56,
      "Benchmark": 77,
      "Samples": 13739,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-Titan-X/Rating/3282"
    },
    {
      "Type": "GPU",
      "Part Number": "12G-P4-2990-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX TITAN X 12GB",
      "Rank": 56,
      "Benchmark": 77,
      "Samples": 13739,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-Titan-X/Rating/3282"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1660-Ti",
      "Rank": 57,
      "Benchmark": 76.2,
      "Samples": 223171,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1660 TI VENTUS XS 6G OC",
      "Brand": "MSI",
      "Model": "MSI GTX 1660 Ti 6GB Ventus XS OC",
      "Rank": 57,
      "Benchmark": 76.2,
      "Samples": 223171,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-1261-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1660 Ti 6GB Black Gaming",
      "Rank": 57,
      "Benchmark": 76.2,
      "Samples": 223171,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1660 TI GAMING X 6G",
      "Brand": "MSI",
      "Model": "MSI GTX 1660 Ti 6GB Gaming X",
      "Rank": 57,
      "Benchmark": 76.2,
      "Samples": 223171,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "Type": "GPU",
      "Part Number": "DUAL-GTX1660TI-O6G",
      "Brand": "Asus",
      "Model": "Asus GTX 1660 Ti 6GB Dual",
      "Rank": 57,
      "Benchmark": 76.2,
      "Samples": 223171,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-1263-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1660 Ti 6GB XC Gaming",
      "Rank": 57,
      "Benchmark": 76.2,
      "Samples": 223171,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N166TWF2OC-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1660 Ti 6GB Windforce OC",
      "Rank": 57,
      "Benchmark": 76.2,
      "Samples": 223171,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N166TOC-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1660 Ti 6GB OC",
      "Rank": 57,
      "Benchmark": 76.2,
      "Samples": 223171,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "Type": "GPU",
      "Part Number": "PH-GTX1660TI-O6G",
      "Brand": "Asus",
      "Model": "Asus GTX 1660 Ti 6GB Phoenix",
      "Rank": 57,
      "Benchmark": 76.2,
      "Samples": 223171,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660-Ti/Rating/4037"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro M6000 24GB",
      "Rank": 58,
      "Benchmark": 75.3,
      "Samples": 241,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/145751/NVIDIA-Quadro-M6000-24GB"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro M6000",
      "Rank": 59,
      "Benchmark": 74.5,
      "Samples": 418,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/36278/NVIDIA-Quadro-M6000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1660S (Super)",
      "Rank": 60,
      "Benchmark": 70.7,
      "Samples": 230235,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1660 Super Ventus XS OC",
      "Brand": "MSI",
      "Model": "MSI GTX 1660 Super 6GB Ventus XS OC",
      "Rank": 60,
      "Benchmark": 70.7,
      "Samples": 230235,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N166SOC-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1660 Super 6GB OC",
      "Rank": 60,
      "Benchmark": 70.7,
      "Samples": 230235,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-1068-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1660 Super 6GB SC Ultra Gaming",
      "Rank": 60,
      "Benchmark": 70.7,
      "Samples": 230235,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-T16620F-10L",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1660 Super 6GB Compact",
      "Rank": 60,
      "Benchmark": 70.7,
      "Samples": 230235,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1660 Super Gaming X",
      "Brand": "MSI",
      "Model": "MSI GTX 1660 Super 6GB Gaming X",
      "Rank": 60,
      "Benchmark": 70.7,
      "Samples": 230235,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "Type": "GPU",
      "Part Number": "DUAL-GTX1660S-O6G-EVO",
      "Brand": "Asus",
      "Model": "Asus GTX 1660 Super 6GB Dual Evo",
      "Rank": 60,
      "Benchmark": 70.7,
      "Samples": 230235,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "Type": "GPU",
      "Part Number": "TUF-GTX1660S-O6G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1660 Super 6GB TUF Gaming",
      "Rank": 60,
      "Benchmark": 70.7,
      "Samples": 230235,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660S-Super/Rating/4056"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1070 (Mobile)",
      "Rank": 61,
      "Benchmark": 70.7,
      "Samples": 62644,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/164129/NVIDIA-GeForce-GTX-1070"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "RTX 2060 (Mobile)",
      "Rank": 62,
      "Benchmark": 70.6,
      "Samples": 63289,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/701609/NVIDIA-GeForce-RTX-2060"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1660",
      "Rank": 63,
      "Benchmark": 69,
      "Samples": 148379,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1660OC-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1660 6GB OC",
      "Rank": 63,
      "Benchmark": 69,
      "Samples": 148379,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-1167-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1660 6GB XC Ultra Gaming",
      "Rank": 63,
      "Benchmark": 69,
      "Samples": 148379,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1660 Ventus XS 6G OC",
      "Brand": "MSI",
      "Model": "MSI GTX 1660 6GB Ventus XS OC",
      "Rank": 63,
      "Benchmark": 69,
      "Samples": 148379,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1660 Gaming X 6G",
      "Brand": "MSI",
      "Model": "MSI GTX 1660 6GB Gaming X",
      "Rank": 63,
      "Benchmark": 69,
      "Samples": 148379,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-1161-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1660 6GB XC Black",
      "Rank": 63,
      "Benchmark": 69,
      "Samples": 148379,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "Type": "GPU",
      "Part Number": "PH-GTX1660-O6G",
      "Brand": "Asus",
      "Model": "Asus GTX 1660 6GB Phoenix",
      "Rank": 63,
      "Benchmark": 69,
      "Samples": 148379,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1660GAMING OC-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1660 6GB Gaming OC",
      "Rank": 63,
      "Benchmark": 69,
      "Samples": 148379,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-T16600F-10L",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1660 6GB Compact",
      "Rank": 63,
      "Benchmark": 69,
      "Samples": 148379,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-T16600K-10M",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1660 6GB Gaming Compact",
      "Rank": 63,
      "Benchmark": 69,
      "Samples": 148379,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1660/Rating/4038"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 Fury-X",
      "Rank": 64,
      "Benchmark": 67.4,
      "Samples": 6301,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-Fury-X/Rating/3498"
    },
    {
      "Type": "GPU",
      "Part Number": "R9-FURY-4QFA",
      "Brand": "AMD",
      "Model": "XFX R9 FURY X 4GB",
      "Rank": 64,
      "Benchmark": 67.4,
      "Samples": 6301,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-Fury-X/Rating/3498"
    },
    {
      "Type": "GPU",
      "Part Number": "21246-00-40G",
      "Brand": "AMD",
      "Model": "Sapphire R9 Fury X 4GB",
      "Rank": 64,
      "Benchmark": 67.4,
      "Samples": 6301,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-Fury-X/Rating/3498"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R9FURYX-4GD-B",
      "Brand": "AMD",
      "Model": "Gigabyte R9 Fury X 4GB",
      "Rank": 64,
      "Benchmark": 67.4,
      "Samples": 6301,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-Fury-X/Rating/3498"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro P4000",
      "Rank": 65,
      "Benchmark": 67,
      "Samples": 8757,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/250990/NVIDIA-Quadro-P4000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro P5000-M (Mobile)",
      "Rank": 66,
      "Benchmark": 66.6,
      "Samples": 524,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/249248/NVIDIA-Quadro-P5000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1660-Ti (Mobile)",
      "Rank": 67,
      "Benchmark": 65.3,
      "Samples": 50773,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/776281/NVIDIA-GeForce-GTX-1660-Ti"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 Fury",
      "Rank": 68,
      "Benchmark": 63.7,
      "Samples": 12264,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-Fury/Rating/3509"
    },
    {
      "Type": "GPU",
      "Part Number": "11247-00-40G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 Fury 4GB TRI-X OC",
      "Rank": 68,
      "Benchmark": 63.7,
      "Samples": 12264,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-Fury/Rating/3509"
    },
    {
      "Type": "GPU",
      "Part Number": "100379NTOC+SR",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 Fury 4GB TRI-X OC",
      "Rank": 68,
      "Benchmark": 63.7,
      "Samples": 12264,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-Fury/Rating/3509"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-R9FURY-DC3-4G-GAMING",
      "Brand": "Asus",
      "Model": "Asus R9 Fury 4GB Gaming",
      "Rank": 68,
      "Benchmark": 63.7,
      "Samples": 12264,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-Fury/Rating/3509"
    },
    {
      "Type": "GPU",
      "Part Number": "R9-FURY-4TF9",
      "Brand": "XFX",
      "Model": "XFX R9 Fury 4GB",
      "Rank": 68,
      "Benchmark": 63.7,
      "Samples": 12264,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-Fury/Rating/3509"
    },
    {
      "Type": "GPU",
      "Part Number": "11247-03-40G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 Fury 4GB NITRO",
      "Rank": 68,
      "Benchmark": 63.7,
      "Samples": 12264,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-Fury/Rating/3509"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 980",
      "Rank": 69,
      "Benchmark": 60.5,
      "Samples": 134202,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980/Rating/2576"
    },
    {
      "Type": "GPU",
      "Part Number": "04G-P4-2983-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 980 4GB SC ACX 2.0",
      "Rank": 69,
      "Benchmark": 60.5,
      "Samples": 134202,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980/Rating/2576"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 980 GAMING 4G",
      "Brand": "MSI",
      "Model": "MSI GTX 980 4GB GAMING",
      "Rank": 69,
      "Benchmark": 60.5,
      "Samples": 134202,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980/Rating/2576"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-GTX980-DC2OC-4GD5",
      "Brand": "Asus",
      "Model": "ASUS GTX 980 4GB STRIX OC",
      "Rank": 69,
      "Benchmark": 60.5,
      "Samples": 134202,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-980/Rating/2576"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1070 (Mobile Max-Q)",
      "Rank": 70,
      "Benchmark": 60.3,
      "Samples": 7075,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/301524/NVIDIA-GeForce-GTX-1070-with-Max-Q-Design"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1650S (Super)",
      "Rank": 71,
      "Benchmark": 60.1,
      "Samples": 84730,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-T16510F-10L",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1650 Super 4GB Gaming",
      "Rank": 71,
      "Benchmark": 60.1,
      "Samples": 84730,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "Type": "GPU",
      "Part Number": "TUF-GTX1650S-O4G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1650 Super 4GB TUF Gaming",
      "Rank": 71,
      "Benchmark": 60.1,
      "Samples": 84730,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "Type": "GPU",
      "Part Number": "04G-P4-1357-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1650 Super 4GB SC Ultra",
      "Rank": 71,
      "Benchmark": 60.1,
      "Samples": 84730,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1650 Super Ventus XS OC",
      "Brand": "MSI",
      "Model": "MSI GTX 1650 Super 4GB Ventus XS",
      "Rank": 71,
      "Benchmark": 60.1,
      "Samples": 84730,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N165SWF2OC-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1650 Super 4GB 2x Windforce",
      "Rank": 71,
      "Benchmark": 60.1,
      "Samples": 84730,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1650 Super Gaming X",
      "Brand": "MSI",
      "Model": "MSI GTX 1650 Super 4GB Gaming X",
      "Rank": 71,
      "Benchmark": 60.1,
      "Samples": 84730,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "Type": "GPU",
      "Part Number": "PH-GTX1650S-O4G",
      "Brand": "Asus",
      "Model": "Asus GTX 1650 Super 4GB Phoenix",
      "Rank": 71,
      "Benchmark": 60.1,
      "Samples": 84730,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650S-Super/Rating/4058"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 590",
      "Rank": 72,
      "Benchmark": 59.8,
      "Samples": 87982,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-590P8DFD6",
      "Brand": "XFX",
      "Model": "XFX RX 590 8GB Fatboy OC+",
      "Rank": 72,
      "Benchmark": 59.8,
      "Samples": 87982,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "Type": "GPU",
      "Part Number": "11289-01-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 590 8GB Nitro+",
      "Rank": 72,
      "Benchmark": 59.8,
      "Samples": 87982,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX 590 8GBD5-DHD",
      "Brand": "PowerColor",
      "Model": "PowerColor RX 590 8GB Red Dragon",
      "Rank": 72,
      "Benchmark": 59.8,
      "Samples": 87982,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX 590 8GBD5-3DH/OC",
      "Brand": "PowerColor",
      "Model": "PowerColor RX 590 8GB Red Devil",
      "Rank": 72,
      "Benchmark": 59.8,
      "Samples": 87982,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "Type": "GPU",
      "Part Number": "RADEON RX 590 ARMOR 8G OC",
      "Brand": "MSI",
      "Model": "MSI RX 590 8GB Armor OC",
      "Rank": 72,
      "Benchmark": 59.8,
      "Samples": 87982,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RX590GAMING-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 590 8GB Gaming",
      "Rank": 72,
      "Benchmark": 59.8,
      "Samples": 87982,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "Type": "GPU",
      "Part Number": "11289-06-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 590 8GB Pulse",
      "Rank": 72,
      "Benchmark": 59.8,
      "Samples": 87982,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-590/Rating/4033"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX Titan Z (SLI Disabled)",
      "Rank": 73,
      "Benchmark": 58.2,
      "Samples": 564,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/17751/NVIDIA-GeForce-GTX-TITAN-Z"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 5500",
      "Rank": 74,
      "Benchmark": 57.4,
      "Samples": 210,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5500/Rating/4059"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1660-Ti (Mobile Max-Q)",
      "Rank": 75,
      "Benchmark": 57.3,
      "Samples": 8820,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/789578/NVIDIA-GeForce-GTX-1660-Ti-with-Max-Q-Design"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 5500-XT",
      "Rank": 76,
      "Benchmark": 57.1,
      "Samples": 35608,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5500-XT/Rating/4060"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-55XT8DFD6",
      "Brand": "XFX",
      "Model": "XFX RX 5600 XT 8GB Thicc II PRO",
      "Rank": 76,
      "Benchmark": 57.1,
      "Samples": 35608,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-5500-XT/Rating/4060"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1060-6GB",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-6161-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1060 6GB Gaming",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-6163-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1060 6GB Gaming SC",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1060G1GAMING-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1060 6GB G1 Gaming",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-P10600B-10M",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1060 6GB AMP",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-P10600A-10L",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1060 6GB Mini",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "GeForce GTX 1060 GAMING X 6G",
      "Brand": "MSI",
      "Model": "MSI GTX 1060 6GB Gaming X",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "DUAL-GTX1060-O6G",
      "Brand": "Asus",
      "Model": "Asus GTX 1060 6GB Dual OC",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1060WF2OC-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1060 6GB Windforce OC",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-GTX1060-O6G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1060 6GB ROG STRIX OC",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "TURBO-GTX1060-6G",
      "Brand": "Asus",
      "Model": "Asus GTX 1060 6GB TURBO",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "426018336-3736",
      "Brand": "Gainward",
      "Model": "Gainward GTX 1060 6GB Pheonix GS",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "GeForce GTX 1060 ARMOR 6G OC",
      "Brand": "MSI",
      "Model": "MSI GTX 1060 6G Armor OC",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1060 ARMOR 6G OCV1",
      "Brand": "MSI",
      "Model": "MSI GTX 1060 6G Armor OCV1",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-GTX1060-6G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1060 6GB ROG STRIX",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "VCGGTX10606PB",
      "Brand": "PNY",
      "Model": "PNY GTX 1060 6GB",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "VCGGTX10606XGPB-OC",
      "Brand": "PNY",
      "Model": "PNY GTX 1060 6GB OC",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1060XTREME-6GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1060 6GB Xtreme Gaming",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "06G-P4-6267-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1060 6GB Gaming SSC",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1060G1GAM-6GD R2",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1060 6GB G1 Gaming R2",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "GeForce GTX 1060 6GT",
      "Brand": "MSI",
      "Model": "MSI GTX 1060 6GB 6GT OCV1",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1060 GAMING 6G",
      "Brand": "MSI",
      "Model": "MSI GTX 1060 6GB Gaming",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "DUAL-GTX1060-O6G",
      "Brand": "Asus",
      "Model": "Asus GTX 1060 6GB Dual OC",
      "Rank": 77,
      "Benchmark": 57,
      "Samples": 1033053,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-6GB/Rating/3639"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 780-Ti",
      "Rank": 78,
      "Benchmark": 55.6,
      "Samples": 27995,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-780-Ti/Rating/2165"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 390X",
      "Rank": 79,
      "Benchmark": 55.4,
      "Samples": 21747,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390X/Rating/3497"
    },
    {
      "Type": "GPU",
      "Part Number": "R9 390X GAMING 8G",
      "Brand": "MSI",
      "Model": "MSI R9 390X 8GB Gaming",
      "Rank": 79,
      "Benchmark": 55.4,
      "Samples": 21747,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390X/Rating/3497"
    },
    {
      "Type": "GPU",
      "Part Number": "11241-00-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 390X 8GB TRIPLE Tri-X OC",
      "Rank": 79,
      "Benchmark": 55.4,
      "Samples": 21747,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390X/Rating/3497"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R939XG1 GAMING-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte R9 390X 8GB G1 Gaming",
      "Rank": 79,
      "Benchmark": 55.4,
      "Samples": 21747,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390X/Rating/3497"
    },
    {
      "Type": "GPU",
      "Part Number": "R9-390X-F28M",
      "Brand": "XFX",
      "Model": "XFX R9 390X 8GB Double Dissipation",
      "Rank": 79,
      "Benchmark": 55.4,
      "Samples": 21747,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390X/Rating/3497"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 Nano",
      "Rank": 80,
      "Benchmark": 55,
      "Samples": 467,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/58413/AMD-Radeon-TM-R9-Fury"
    },
    {
      "Type": "GPU",
      "Part Number": "R9NANO-4GB",
      "Brand": "Asus",
      "Model": "Asus R9 Nano 4GB",
      "Rank": 80,
      "Benchmark": 55,
      "Samples": 467,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/58413/AMD-Radeon-TM-R9-Fury"
    },
    {
      "Type": "GPU",
      "Part Number": "R9NANO-4G-WHITE",
      "Brand": "Asus",
      "Model": "Asus R9 Nano 4GB White",
      "Rank": 80,
      "Benchmark": 55,
      "Samples": 467,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/58413/AMD-Radeon-TM-R9-Fury"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R9NANO-4GD-B",
      "Brand": "Gigabyte",
      "Model": "Gigabyte R9 Nano 4GB",
      "Rank": 80,
      "Benchmark": 55,
      "Samples": 467,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/58413/AMD-Radeon-TM-R9-Fury"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 580",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "RX 580 GAMING X 8G",
      "Brand": "MSI",
      "Model": "MSI RX 580 8GB Gaming X",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "RX 580 GAMING X 4G",
      "Brand": "MSI",
      "Model": "MSI RX 580 4GB Gaming X",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RX580XTRAORUS-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 580 8GB AORUS XTR",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "RX 580 ARMOR 8G OC",
      "Brand": "MSI",
      "Model": "MSI RX 580  8GB Armor OC",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "RX 580 ARMOR 4G OC",
      "Brand": "MSI",
      "Model": "MSI RX 580  4GB Armor OC",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-RX580-O8G-GAMING",
      "Brand": "Asus",
      "Model": "Asus RX 580 8GB ROG Strix",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RX580GAMING-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 580 8GB Gaming",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RX580AORUS-8GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 580 8GB AORUS",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "11265-05-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 580 8GB Pulse",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-580P4DFD6",
      "Brand": "XFX",
      "Model": "XFX RX 580 4GB OC+",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-580P8DFD6",
      "Brand": "XFX",
      "Model": "XFX RX 580 8GB OC+",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-580P8DBD6",
      "Brand": "XFX",
      "Model": "XFX RX 580 8GB Black OC+",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-580P8DFD6",
      "Brand": "XFX",
      "Model": "XFX RX 580 8GB GTS XXX",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX 580 8GBD5-3DHDV2/OC",
      "Brand": "PowerColor",
      "Model": "PowerColor RX 580 8GB Red Dragon V2",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "11265-01-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 580 8GB Pulse Nitro+ RX",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "DUAL RX 580 4GB OC",
      "Brand": "Asus",
      "Model": "Asus RX 580 4GB Dual OC",
      "Rank": 81,
      "Benchmark": 54.4,
      "Samples": 674318,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-580/Rating/3923"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1060-3GB",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "DUAL-GTX1060-O3G",
      "Brand": "Asus",
      "Model": "Asus GTX 1060 3GB Dual OC",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-P10610A-10L",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1060 3GB Mini",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "03G-P4-6160-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1060 3GB Gaming",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "03G-P4-6162-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1060 3GB SC Gaming",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "GeForce GTX 1060 GAMING X 3G",
      "Brand": "MSI",
      "Model": "MSI GTX 1060 3GB Gaming X",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1060 GAMING X 3G",
      "Brand": "MSI",
      "Model": "MSI GTX 1060 3GB Gaming X",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1060WF2OC-3GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1060 3GB Windforce OC",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1060G1GAMING-3GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1060 3GB G1 Gaming",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1060IXOC-3GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1060 3GB Mini ITX OC",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1060 3GT OC",
      "Brand": "MSI",
      "Model": "MSI GTX 1060 3GB 3GT OC",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1060 ARMOR 3G OCV1",
      "Brand": "MSI",
      "Model": "MSI GTX 1060 3GB ARMOR 3G OCV1",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1060G1GAM-3GD R2",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1060 3GB G1 Gaming R2",
      "Rank": 82,
      "Benchmark": 52.7,
      "Samples": 459419,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1060-3GB/Rating/3646"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX Titan Black",
      "Rank": 83,
      "Benchmark": 52.6,
      "Samples": 3033,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-Titan-Black/Rating/3158"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 290X",
      "Rank": 84,
      "Benchmark": 52.6,
      "Samples": 23081,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-290X/Rating/2166"
    },
    {
      "Type": "GPU",
      "Part Number": "11226-00-40G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 290X 4GB TRI-X OC",
      "Rank": 84,
      "Benchmark": 52.6,
      "Samples": 23081,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-290X/Rating/2166"
    },
    {
      "Type": "GPU",
      "Part Number": "R9290X-DC2OC-4GD5",
      "Brand": "Asus",
      "Model": "Asus R9 290X 4GB DirectCU II",
      "Rank": 84,
      "Benchmark": 52.6,
      "Samples": 23081,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-290X/Rating/2166"
    },
    {
      "Type": "GPU",
      "Part Number": "R9290XEDFD",
      "Brand": "XFX",
      "Model": "XFX R9 290X 4GB Double Dissipation",
      "Rank": 84,
      "Benchmark": 52.6,
      "Samples": 23081,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-290X/Rating/2166"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 390",
      "Rank": 85,
      "Benchmark": 50.7,
      "Samples": 74744,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "Type": "GPU",
      "Part Number": "R9 390 GAMING 8G",
      "Brand": "MSI",
      "Model": "MSI R9 390 8GB Gaming",
      "Rank": 85,
      "Benchmark": 50.7,
      "Samples": 74744,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "Type": "GPU",
      "Part Number": "R9-390P-D28M",
      "Brand": "XFX",
      "Model": "XFX R9 390 8GB Black",
      "Rank": 85,
      "Benchmark": 50.7,
      "Samples": 74744,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "Type": "GPU",
      "Part Number": "R9-390P-8256",
      "Brand": "XFX",
      "Model": "XFX R9 390 8GB Double Dissipation",
      "Rank": 85,
      "Benchmark": 50.7,
      "Samples": 74744,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "Type": "GPU",
      "Part Number": "R9-390P-F28M",
      "Brand": "XFX",
      "Model": "XFX R9 390 8GB Double Dissipation",
      "Rank": 85,
      "Benchmark": 50.7,
      "Samples": 74744,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "Type": "GPU",
      "Part Number": "R9-390P-8DF6",
      "Brand": "XFX",
      "Model": "XFX R9 390 8GB Black Nero",
      "Rank": 85,
      "Benchmark": 50.7,
      "Samples": 74744,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "Type": "GPU",
      "Part Number": "11244-01-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 390 8GB Nitro Tri-X OC +BP",
      "Rank": 85,
      "Benchmark": 50.7,
      "Samples": 74744,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "Type": "GPU",
      "Part Number": "11244-00-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 390 8GB Nitro Tri-X OC",
      "Rank": 85,
      "Benchmark": 50.7,
      "Samples": 74744,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-R9390-DC3OC-8GD5-GAMING",
      "Brand": "Asus",
      "Model": "Asus R9 390 8GB STRIX",
      "Rank": 85,
      "Benchmark": 50.7,
      "Samples": 74744,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-390/Rating/3481"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 295X2 (CrossFire Disabled)",
      "Rank": 86,
      "Benchmark": 50.6,
      "Samples": 2285,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11791/AMD-Radeon-R9-200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 970",
      "Rank": 87,
      "Benchmark": 50.5,
      "Samples": 687132,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 970 GAMING 4G",
      "Brand": "MSI",
      "Model": "MSI GTX 970 4GB Gaming",
      "Rank": 87,
      "Benchmark": 50.5,
      "Samples": 687132,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-GTX970-DC20C-4GD5",
      "Brand": "Asus",
      "Model": "ASUS GTX 970 4GB STRIX OC",
      "Rank": 87,
      "Benchmark": 50.5,
      "Samples": 687132,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "Type": "GPU",
      "Part Number": "04G-P4-2974-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 970 4GB Super Clocked ACX 2.0",
      "Rank": 87,
      "Benchmark": 50.5,
      "Samples": 687132,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N970G1 GAMING-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 970 4GB G1 Gaming",
      "Rank": 87,
      "Benchmark": 50.5,
      "Samples": 687132,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N970WF3OC-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 970 4GB OC Windforce",
      "Rank": 87,
      "Benchmark": 50.5,
      "Samples": 687132,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "Type": "GPU",
      "Part Number": "04G-P4-3975-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 970 4GB SSC ACX 2.0+",
      "Rank": 87,
      "Benchmark": 50.5,
      "Samples": 687132,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "Type": "GPU",
      "Part Number": "TURBO-GTX970-OC-4GD5",
      "Brand": "Asus",
      "Model": "Asus GTX 970 4GB Turbo OC",
      "Rank": 87,
      "Benchmark": 50.5,
      "Samples": 687132,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "Type": "GPU",
      "Part Number": "04G-P4-3978-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 970 4GB FTW+ GAMING ACX 2.0+ w/BP",
      "Rank": 87,
      "Benchmark": 50.5,
      "Samples": 687132,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-90101-10P",
      "Brand": "Zotac",
      "Model": "Zotac GTX 970 4GB Graphics Card",
      "Rank": 87,
      "Benchmark": 50.5,
      "Samples": 687132,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-970/Rating/2577"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 480",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "21260-00-20G",
      "Brand": "AMD",
      "Model": "Sapphire RX 480 8GB",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-480M4BFA6",
      "Brand": "AMD",
      "Model": "XFX RX 480 4GB 1266 MHz",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "21260-01-20G",
      "Brand": "AMD",
      "Model": "Sapphire RX 480 4GB",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "Radeon RX 480 8G",
      "Brand": "AMD",
      "Model": "MSI RX 480 8GB",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-480M8BBA6",
      "Brand": "XFX",
      "Model": "XFX RX 480 8GB 1328 MHz",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "RX480M8BFA6",
      "Brand": "XFX",
      "Model": "XFX RX 480 8GB 1288 MHz",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-480P8DFA6",
      "Brand": "XFX",
      "Model": "XFX RX 480 8GB LED 1288 MHz",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-480P836BM",
      "Brand": "XFX",
      "Model": "XFX RX 480 8GB XXX 1288 MHz",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-480P8DBA6",
      "Brand": "XFX",
      "Model": "XFX RX 480 8GB Black 1338 MHz",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-480P4JFC6",
      "Brand": "XFX",
      "Model": "XFX RX 480 4GB RS",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-480P8LFB6",
      "Brand": "XFX",
      "Model": "XFX RX 480 8GB RS XXX 1288 MHz",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "RX480-8G",
      "Brand": "Asus",
      "Model": "Asus RX 480 8GB",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "11260-07-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 480 8GB NITRO+",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "11260-02-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 480 4GB NITRO+",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "100406NT+4GOCL",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 480 4GB NITRO+",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "11260-01-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 480 8GB NITRO+",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX480 8GBD5-3DH/OC",
      "Brand": "PowerColor",
      "Model": "PowerColor RX 480 8GB Red Devil",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "Radeon RX 480 GAMING X 8G",
      "Brand": "MSI",
      "Model": "MSI RX 480 8GB Gaming X",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "Radeon RX 480 GAMING X 4G",
      "Brand": "MSI",
      "Model": "MSI RX 480 4GB Gaming X",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "RX 480 ARMOR 8G OC",
      "Brand": "MSI",
      "Model": "MSI RX 480 8GB Armor OC",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "RX 480 ARMOR 4G OC",
      "Brand": "MSI",
      "Model": "MSI RX 480 4GB Armor OC",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-RX480-O8G-GAMING",
      "Brand": "Asus",
      "Model": "Asus RX 480 8GB ROG STRIX OC",
      "Rank": 88,
      "Benchmark": 48.3,
      "Samples": 206605,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-480/Rating/3634"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 780",
      "Rank": 89,
      "Benchmark": 47.5,
      "Samples": 48452,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-780/Rating/2164"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX Titan",
      "Rank": 90,
      "Benchmark": 47.4,
      "Samples": 5310,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-Titan/Rating/2191"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 290",
      "Rank": 91,
      "Benchmark": 47.2,
      "Samples": 57476,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-290/Rating/2171"
    },
    {
      "Type": "GPU",
      "Part Number": "11227-13-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 290 4GB TRI-X OC",
      "Rank": 91,
      "Benchmark": 47.2,
      "Samples": 57476,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-290/Rating/2171"
    },
    {
      "Type": "GPU",
      "Part Number": "R9290AEDFD",
      "Brand": "XFX",
      "Model": "XFX R9 290 4GB Double Dissipation",
      "Rank": 91,
      "Benchmark": 47.2,
      "Samples": 57476,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-290/Rating/2171"
    },
    {
      "Type": "GPU",
      "Part Number": "R9290AEDBD",
      "Brand": "XFX",
      "Model": "XFX R9 290 4GB Black Double Dissipation",
      "Rank": 91,
      "Benchmark": 47.2,
      "Samples": 57476,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-290/Rating/2171"
    },
    {
      "Type": "GPU",
      "Part Number": "R9 290 GAMING 4G",
      "Brand": "MSI",
      "Model": "MSI R9 290 4GB GAMING",
      "Rank": 91,
      "Benchmark": 47.2,
      "Samples": 57476,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-290/Rating/2171"
    },
    {
      "Type": "GPU",
      "Part Number": "11227-04-40G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 290 4GB VAPOR-X TRI-X OC",
      "Rank": 91,
      "Benchmark": 47.2,
      "Samples": 57476,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-290/Rating/2171"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 780 4GB",
      "Rank": 92,
      "Benchmark": 47.1,
      "Samples": 818,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11282/NVIDIA-GeForce-GTX-780"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1060 (Mobile)",
      "Rank": 93,
      "Benchmark": 46.7,
      "Samples": 131502,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/164336/NVIDIA-GeForce-GTX-1060"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 570",
      "Rank": 94,
      "Benchmark": 46.5,
      "Samples": 339569,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "Type": "GPU",
      "Part Number": "RX 570 ARMOR 4G OC",
      "Brand": "MSI",
      "Model": "MSI RX 570 4G Armor OC",
      "Rank": 94,
      "Benchmark": 46.5,
      "Samples": 339569,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "Type": "GPU",
      "Part Number": "RX 570 GAMING X 4G",
      "Brand": "MSI",
      "Model": "MSI RX 570 4GB Gaming X",
      "Rank": 94,
      "Benchmark": 46.5,
      "Samples": 339569,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RX570GAMING-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 570 4GB Gaming",
      "Rank": 94,
      "Benchmark": 46.5,
      "Samples": 339569,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RX570AORUS-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 570 4GB AORUS",
      "Rank": 94,
      "Benchmark": 46.5,
      "Samples": 339569,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "Type": "GPU",
      "Part Number": "RX 570 ARMOR 8G OC",
      "Brand": "MSI",
      "Model": "MSI RX 570 8G Armor OC",
      "Rank": 94,
      "Benchmark": 46.5,
      "Samples": 339569,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "Type": "GPU",
      "Part Number": "ROG-STRIX-RX570-O4G-GAMING",
      "Brand": "Asus",
      "Model": "Asus RX 570 4GB ROG Strix",
      "Rank": 94,
      "Benchmark": 46.5,
      "Samples": 339569,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX 570 4GBD5-3DHD/OC",
      "Brand": "PowerColor",
      "Model": "PowerColor RX 570 4GB Red Dragon",
      "Rank": 94,
      "Benchmark": 46.5,
      "Samples": 339569,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-570P4DFD6",
      "Brand": "XFX",
      "Model": "XFX RX 570 4GB Twin",
      "Rank": 94,
      "Benchmark": 46.5,
      "Samples": 339569,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-570P427D6",
      "Brand": "XFX",
      "Model": "XFX RX 570 4GB Twin",
      "Rank": 94,
      "Benchmark": 46.5,
      "Samples": 339569,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-570P4DFDR",
      "Brand": "XFX",
      "Model": "XFX RX 570 4GB Twin",
      "Rank": 94,
      "Benchmark": 46.5,
      "Samples": 339569,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-570P8DFD6",
      "Brand": "XFX",
      "Model": "XFX RX 570 4GB Twin XXX",
      "Rank": 94,
      "Benchmark": 46.5,
      "Samples": 339569,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-570/Rating/3924"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K6000",
      "Rank": 95,
      "Benchmark": 46,
      "Samples": 740,
      "URL": "https://gpu.userbenchmark.com/Nvidia-Quadro-K6000/Rating/2837"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1060 (Mobile Max-Q)",
      "Rank": 96,
      "Benchmark": 43.1,
      "Samples": 28581,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/325746/NVIDIA-GeForce-GTX-1060-with-Max-Q-Design"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1650",
      "Rank": 97,
      "Benchmark": 43,
      "Samples": 105422,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "Type": "GPU",
      "Part Number": "G1650VXS4C",
      "Brand": "MSI",
      "Model": "MSI GTX 1650 4GB Ventus XS OC",
      "Rank": 97,
      "Benchmark": 43,
      "Samples": 105422,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-T16500F-10L",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1650 4GB OC Compact",
      "Rank": 97,
      "Benchmark": 43,
      "Samples": 105422,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "Type": "GPU",
      "Part Number": "PH-GTX1650-O4G",
      "Brand": "Asus",
      "Model": "Asus GTX 1650 4GB Phoenix",
      "Rank": 97,
      "Benchmark": 43,
      "Samples": 105422,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1650OC-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1650 4GB OC",
      "Rank": 97,
      "Benchmark": 43,
      "Samples": 105422,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1650IXOC-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1650 4GB Mini ITX OC",
      "Rank": 97,
      "Benchmark": 43,
      "Samples": 105422,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "Type": "GPU",
      "Part Number": "04G-P4-1153-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1650 4GB XC Gaming",
      "Rank": 97,
      "Benchmark": 43,
      "Samples": 105422,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1650 Gaming X 4G",
      "Brand": "MSI",
      "Model": "MSI GTX 1650 4GB Gaming X",
      "Rank": 97,
      "Benchmark": 43,
      "Samples": 105422,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1650/Rating/4039"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon Pro 5500M",
      "Rank": 98,
      "Benchmark": 43,
      "Samples": 1313,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/960765/AMD-Radeon-Pro-5500M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1650-Ti (Mobile)",
      "Rank": 99,
      "Benchmark": 41.9,
      "Samples": 12755,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1091296/NVIDIA-GeForce-GTX-1650-Ti"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1650 (Mobile)",
      "Rank": 100,
      "Benchmark": 41.5,
      "Samples": 51264,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/775280/NVIDIA-GeForce-GTX-1650"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 470",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "Radeon RX 470 GAMING X 4G",
      "Brand": "MSI",
      "Model": "MSI RX 470 4GB Gaming X",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "Radeon RX 470 GAMING X 8G",
      "Brand": "MSI",
      "Model": "MSI RX 470 8GB Gaming X",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "11256-02-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 470 8GB NITRO+",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "11256-01-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 470 4GB NITRO+",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "11256-00-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 470 4GB",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "100407-4GOCL",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 470 4GB",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-RX470-O4G-GAMING",
      "Brand": "Asus",
      "Model": "Asus RX 470 4GB ROG STRIX OC",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RX470G1 GAMING-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 470 4GB G1 Gaming",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX 470 4GBD5-3DH/OC",
      "Brand": "PowerColor",
      "Model": "PowerColor RX 470 4GB Red Devil/Dragon",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "HS-470R4LCNR/HS-470R4LTNR",
      "Brand": "PwrHis",
      "Model": "HIS RX 470 4GB IceQ X² OC",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-470P4SFD5",
      "Brand": "XFX",
      "Model": "XFX RX 470 4GB Single Fan",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-470P4LFB6",
      "Brand": "XFX",
      "Model": "XFX RX 470 4GB Black",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "Radeon RX 470 ARMOR 4G OC",
      "Brand": "MSI",
      "Model": "MSI RX 470 4GB ARMOR OC",
      "Rank": 101,
      "Benchmark": 41.4,
      "Samples": 75507,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-470/Rating/3640"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Vmware",
      "Model": "SVGA 3D",
      "Rank": 102,
      "Benchmark": 41.4,
      "Samples": 4759,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7772/VMware-SVGA-3D"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro P2000",
      "Rank": 103,
      "Benchmark": 40.6,
      "Samples": 9911,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/257811/NVIDIA-Quadro-P2000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 980M",
      "Rank": 104,
      "Benchmark": 40.5,
      "Samples": 10585,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/15596/NVIDIA-GeForce-GTX-980M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 690 (SLI Disabled)",
      "Rank": 105,
      "Benchmark": 40.1,
      "Samples": 4988,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8241/NVIDIA-GeForce-GTX-690"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 7970",
      "Rank": 106,
      "Benchmark": 39.8,
      "Samples": 6140,
      "URL": "https://gpu.userbenchmark.com/AMD-HD-7970/Rating/2163"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 380X",
      "Rank": 107,
      "Benchmark": 39.6,
      "Samples": 16146,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380X/Rating/3532"
    },
    {
      "Type": "GPU",
      "Part Number": "R9-380X-F24M",
      "Brand": "XFX",
      "Model": "XFX R9 380X 4GB Black DD XXX OC",
      "Rank": 107,
      "Benchmark": 39.6,
      "Samples": 16146,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380X/Rating/3532"
    },
    {
      "Type": "GPU",
      "Part Number": "11250-01-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 380X 4GB Nitro Dual-X OC",
      "Rank": 107,
      "Benchmark": 39.6,
      "Samples": 16146,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380X/Rating/3532"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R938XG1 GAMING-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte R9 380X 4GB Gaming",
      "Rank": 107,
      "Benchmark": 39.6,
      "Samples": 16146,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380X/Rating/3532"
    },
    {
      "Type": "GPU",
      "Part Number": "AXR9 280X 3GBD5-T2DHE/OC",
      "Brand": "PowerColor",
      "Model": "PowerColor R9 280X 3GB OC",
      "Rank": 107,
      "Benchmark": 39.6,
      "Samples": 16146,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380X/Rating/3532"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 280X",
      "Rank": 108,
      "Benchmark": 39,
      "Samples": 77614,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-280X/Rating/2192"
    },
    {
      "Type": "GPU",
      "Part Number": "11221-00-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 280X 3GB Dual-X OC",
      "Rank": 108,
      "Benchmark": 39,
      "Samples": 77614,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-280X/Rating/2192"
    },
    {
      "Type": "GPU",
      "Part Number": "11221-20-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 280X 3GB VAPOR-X",
      "Rank": 108,
      "Benchmark": 39,
      "Samples": 77614,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-280X/Rating/2192"
    },
    {
      "Type": "GPU",
      "Part Number": "11221-01-40G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 280X 3GB TOXIC",
      "Rank": 108,
      "Benchmark": 39,
      "Samples": 77614,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-280X/Rating/2192"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R928XOC-3GD REV3",
      "Brand": "Gigabyte",
      "Model": "Gigabyte R9 280X 3GB WINDFORCE OC REV3",
      "Rank": 108,
      "Benchmark": 39,
      "Samples": 77614,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-280X/Rating/2192"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro P3000",
      "Rank": 109,
      "Benchmark": 38.8,
      "Samples": 800,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/264483/NVIDIA-Quadro-P3000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FirePro W9000",
      "Rank": 110,
      "Benchmark": 36.6,
      "Samples": 68,
      "URL": "https://gpu.userbenchmark.com/AMD-FirePro-W9000/Rating/2841"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1650 (Mobile Max-Q)",
      "Rank": 111,
      "Benchmark": 36.5,
      "Samples": 4658,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/790279/NVIDIA-GeForce-GTX-1650-with-Max-Q-Design"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon RX Vega M GH",
      "Rank": 112,
      "Benchmark": 36.4,
      "Samples": 2634,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/422266/Radeon-RX-Vega-M-GH-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 770",
      "Rank": 113,
      "Benchmark": 36.3,
      "Samples": 105642,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-770/Rating/2174"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon Pro 5300M",
      "Rank": 114,
      "Benchmark": 36.2,
      "Samples": 604,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/965657/AMD-Radeon-Pro-5300M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 7990 (CrossFire Disabled)",
      "Rank": 115,
      "Benchmark": 36,
      "Samples": 1016,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7985/AMD-Radeon-HD-7900"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 380",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "R9 380 GAMING 4G",
      "Brand": "MSI",
      "Model": "MSI R9 380 GAMING 4GB",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "11242-13-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 380 4GB NITRO",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "11242-02-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 380 2GB Dual-X OC",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "11242-00-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 380 2GB Dual-X OC",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R938G1 GAMING-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte R9 380 4GB G1",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R938WF2-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte R9 380 4GB G1 Windforce",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "R9-380P-2DF5",
      "Brand": "XFX",
      "Model": "XFX R9 380 2GB DD Edition 2DF5",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "R9-380P-F22M",
      "Brand": "XFX",
      "Model": "XFX R9 380 2GB DD Edition F22M",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "R9-380P-4255",
      "Brand": "XFX",
      "Model": "XFX R9 380 4GB DD Edition 4255",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "R9-380P-4DF5",
      "Brand": "XFX",
      "Model": "XFX R9 380 4GB 4DF5",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-R9380-DC2OC-2GD5-GAMING",
      "Brand": "Asus",
      "Model": "Asus R9 380 2GB STRIX",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-R9380-DC2OC-4GD5-GAMING",
      "Brand": "Asus",
      "Model": "Asus R9 380  4GB STRIX GAMING",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "AXR9 380 4GBD5-PPDHE",
      "Brand": "PowerColor",
      "Model": "PowerColor R9 380 4GB PCS+",
      "Rank": 116,
      "Benchmark": 34.3,
      "Samples": 62321,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-380/Rating/3482"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 960",
      "Rank": 117,
      "Benchmark": 33.7,
      "Samples": 349595,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "Type": "GPU",
      "Part Number": "02G-P4-2966-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 960 2GB SuperSC ACX 2.0+",
      "Rank": 117,
      "Benchmark": 33.7,
      "Samples": 349595,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-GTX960-DC2OC-2GD5",
      "Brand": "Asus",
      "Model": "ASUS GTX 960 2GB STRIX",
      "Rank": 117,
      "Benchmark": 33.7,
      "Samples": 349595,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 960 GAMING 2G",
      "Brand": "MSI",
      "Model": "MSI GTX 960 2GB Gaming",
      "Rank": 117,
      "Benchmark": 33.7,
      "Samples": 349595,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 960 GAMING 4G",
      "Brand": "MSI",
      "Model": "MSI GTX 960 4GB Gaming",
      "Rank": 117,
      "Benchmark": 33.7,
      "Samples": 349595,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "Type": "GPU",
      "Part Number": "04G-P4-3967-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 960 4GB SuperSC ACX 2.0 Backplate",
      "Rank": 117,
      "Benchmark": 33.7,
      "Samples": 349595,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N960WF2OC-2GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 960 2GB Windforce 2X",
      "Rank": 117,
      "Benchmark": 33.7,
      "Samples": 349595,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N960OC-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 960 2GB OC",
      "Rank": 117,
      "Benchmark": 33.7,
      "Samples": 349595,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-GTX960-DC2OC-4GD5",
      "Brand": "Asus",
      "Model": "ASUS GTX 960 4GB STRIX",
      "Rank": 117,
      "Benchmark": 33.7,
      "Samples": 349595,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "Type": "GPU",
      "Part Number": "04G-P4-3969-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 960 4GB FTW GAMING ACX 2.0+",
      "Rank": 117,
      "Benchmark": 33.7,
      "Samples": 349595,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-960/Rating/3165"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 680",
      "Rank": 118,
      "Benchmark": 33.7,
      "Samples": 29785,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-680/Rating/3148"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 285",
      "Rank": 119,
      "Benchmark": 33.2,
      "Samples": 4186,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-285/Rating/3174"
    },
    {
      "Type": "GPU",
      "Part Number": "R9 285 GAMING 2G",
      "Brand": "MSI",
      "Model": "MSI R9 285 2GB GAMING",
      "Rank": 119,
      "Benchmark": 33.2,
      "Samples": 4186,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-285/Rating/3174"
    },
    {
      "Type": "GPU",
      "Part Number": "11235-03-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 285 2GB Dual-X OC",
      "Rank": 119,
      "Benchmark": 33.2,
      "Samples": 4186,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-285/Rating/3174"
    },
    {
      "Type": "GPU",
      "Part Number": "AXR9 285 2GBD5-TDHE",
      "Brand": "PowerColor",
      "Model": "PowerColor R9 285 2GB Turbo Duo",
      "Rank": 119,
      "Benchmark": 33.2,
      "Samples": 4186,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-285/Rating/3174"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 280",
      "Rank": 120,
      "Benchmark": 32.8,
      "Samples": 36161,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-280/Rating/2241"
    },
    {
      "Type": "GPU",
      "Part Number": "11230-00-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 280 3GB Dual-X",
      "Rank": 120,
      "Benchmark": 32.8,
      "Samples": 36161,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-280/Rating/2241"
    },
    {
      "Type": "GPU",
      "Part Number": "R9280ATDFD",
      "Brand": "XFX",
      "Model": "XFX R9 280 3GB Double Dissipation",
      "Rank": 120,
      "Benchmark": 32.8,
      "Samples": 36161,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-280/Rating/2241"
    },
    {
      "Type": "GPU",
      "Part Number": "R9280ATDBD",
      "Brand": "XFX",
      "Model": "XFX R9 280 3GB Double Dissipation Black",
      "Rank": 120,
      "Benchmark": 32.8,
      "Samples": 36161,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-280/Rating/2241"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K5200",
      "Rank": 121,
      "Benchmark": 32.2,
      "Samples": 1183,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/20811/NVIDIA-Quadro-K5200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro M4000",
      "Rank": 122,
      "Benchmark": 31.7,
      "Samples": 6280,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/37687/NVIDIA-Quadro-M4000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 970M",
      "Rank": 123,
      "Benchmark": 31.5,
      "Samples": 20155,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/17319/NVIDIA-GeForce-GTX-970M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 7950",
      "Rank": 124,
      "Benchmark": 31.1,
      "Samples": 31839,
      "URL": "https://gpu.userbenchmark.com/AMD-HD-7950/Rating/2160"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1050-Ti",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "04G-P4-6253-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1050 Ti 4GB SC Single Fan",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "04G-P4-6251-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1050 Ti 4GB Gaming Single Fan",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "04G-P4-6255-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1050 Ti 4GB SSC GAMING ACX 3.0",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1050 TI 4G OC",
      "Brand": "MSI",
      "Model": "MSI GTX 1050 Ti 4GB OC",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1050 TI 4GT OC",
      "Brand": "MSI",
      "Model": "MSI GTX 1050 Ti 4GB OC Twin",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N105TOC-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1050 Ti 4GB OC",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-P10510A-10L",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1050 Ti 4GB Mini",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-P10510B-10L",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1050 Ti 4GB Twin",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N105TWF2OC-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1050 Ti 4GB Twin",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "GeForce GTX 1050 TI GAMING X 4G",
      "Brand": "MSI",
      "Model": "MSI GTX 1050 Ti 4GB GAMING X",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "EX-GTX1050TI-4G",
      "Brand": "Asus",
      "Model": "Asus GTX 1050 Ti 4GB Expedition",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-GTX1050TI-O4G-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 1050 Ti 4GB ROG STRIX",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "04G-P4-6258-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1050 Ti 4GB FTW GAMING ACX 3.0",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N105TD5-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1050 Ti 4GB 1430 MHz",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N105TG1GAMING-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1050 Ti 4GB G1 GAMING",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "VCGGTX1050T4PB",
      "Brand": "PNY",
      "Model": "PNY GTX 1050 Ti 4GB Single",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "Cerberus-GTX1050Ti-O4G",
      "Brand": "Asus",
      "Model": "Asus GTX 1050 Ti 4GB Cerberus OC",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N105TOC-4GL",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1050 Ti 4GB OC Low Profile",
      "Rank": 125,
      "Benchmark": 31,
      "Samples": 771156,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050-Ti/Rating/3649"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1050-Ti (Mobile)",
      "Rank": 126,
      "Benchmark": 31,
      "Samples": 97492,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/223242/NVIDIA-GeForce-GTX-1050-Ti"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 670",
      "Rank": 127,
      "Benchmark": 29.3,
      "Samples": 40249,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-670/Rating/2181"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 880M",
      "Rank": 128,
      "Benchmark": 28.5,
      "Samples": 2611,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8540/NVIDIA-GeForce-GTX-880M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 270X",
      "Rank": 129,
      "Benchmark": 27.9,
      "Samples": 66254,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-270X/Rating/2188"
    },
    {
      "Type": "GPU",
      "Part Number": "11217-01-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 270X 2GB Dual-X Boost OC",
      "Rank": 129,
      "Benchmark": 27.9,
      "Samples": 66254,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-270X/Rating/2188"
    },
    {
      "Type": "GPU",
      "Part Number": "11217-04-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 270X 4GB Dual-X Boost OC",
      "Rank": 129,
      "Benchmark": 27.9,
      "Samples": 66254,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-270X/Rating/2188"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R927XOC-2GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte R9 270X 2GB WINDFORCE",
      "Rank": 129,
      "Benchmark": 27.9,
      "Samples": 66254,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-270X/Rating/2188"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R927XOC-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte R9 270X 4GB WINDFORCE",
      "Rank": 129,
      "Benchmark": 27.9,
      "Samples": 66254,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-270X/Rating/2188"
    },
    {
      "Type": "GPU",
      "Part Number": "R9270X-DC2T-2GD5",
      "Brand": "Asus",
      "Model": "Asus R9 270X 2GB DirectCU II",
      "Rank": 129,
      "Benchmark": 27.9,
      "Samples": 66254,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-270X/Rating/2188"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 660-Ti",
      "Rank": 130,
      "Benchmark": 27.9,
      "Samples": 29199,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-660-Ti/Rating/2183"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 760",
      "Rank": 131,
      "Benchmark": 27.7,
      "Samples": 138082,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-760/Rating/2159"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 760 Ti OEM",
      "Rank": 132,
      "Benchmark": 27.5,
      "Samples": 1564,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10856/NVIDIA-GeForce-GTX-760-Ti-OEM"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 7870",
      "Rank": 133,
      "Benchmark": 27.1,
      "Samples": 35350,
      "URL": "https://gpu.userbenchmark.com/AMD-HD-7870/Rating/2161"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1050",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-P10500A-10L",
      "Brand": "Zotac",
      "Model": "Zotac GTX 1050 2GB Mini",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1050 2G OC",
      "Brand": "MSI",
      "Model": "MSI GTX 1050 2GB OC",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1050 2GT OC",
      "Brand": "MSI",
      "Model": "MSI GTX 1050 2GB TWIN OC",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 1050 GAMING X 2G",
      "Brand": "MSI",
      "Model": "MSI GTX 1050 2GB GAMING X",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1050OC-2GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1050 2GB OC",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "02G-P4-6152-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1050 2GB SC GAMING",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1050D5-2GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1050 2GB OC Single",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N1050WF2OC-2GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 1050 2GB Windforce",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "EX-GTX1050-2G",
      "Brand": "Asus",
      "Model": "Asus GTX 1050 2GB Expedition",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "02G-P4-6154-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1050 2GB SSC GAMING",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "VCGGTX10502PB",
      "Brand": "PNY",
      "Model": "PNY GTX 1050 2GB",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "02G-P4-6150-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 1050 2GB GAMING",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "PH-GTX1050-2G",
      "Brand": "Asus",
      "Model": "Asus GTX 1050 2GB Phoenix",
      "Rank": 134,
      "Benchmark": 27,
      "Samples": 220159,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-1050/Rating/3650"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1050-Ti (Mobile Max-Q)",
      "Rank": 135,
      "Benchmark": 26.5,
      "Samples": 7729,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/419871/NVIDIA-GeForce-GTX-1050-Ti-with-Max-Q-Design"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 950",
      "Rank": 136,
      "Benchmark": 26,
      "Samples": 97224,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-90601-10L",
      "Brand": "Zotac",
      "Model": "Zotac GTX 950 2GB",
      "Rank": 136,
      "Benchmark": 26,
      "Samples": 97224,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-90602-10M",
      "Brand": "Zotac",
      "Model": "Zotac GTX 950 2GB OC",
      "Rank": 136,
      "Benchmark": 26,
      "Samples": 97224,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "Type": "GPU",
      "Part Number": "ZT-90603-10M",
      "Brand": "Zotac",
      "Model": "Zotac GTX 950 2GB AMP!",
      "Rank": 136,
      "Benchmark": 26,
      "Samples": 97224,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "Type": "GPU",
      "Part Number": "02G-P4-2951-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 950 2GB SC",
      "Rank": 136,
      "Benchmark": 26,
      "Samples": 97224,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "Type": "GPU",
      "Part Number": "02G-P4-2958-KR",
      "Brand": "EVGA",
      "Model": "EVGA GeForce GTX 950 2GB ACX 2.0",
      "Rank": 136,
      "Benchmark": 26,
      "Samples": 97224,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "Type": "GPU",
      "Part Number": "02G-P4-2957-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 950 2GB SSC ACX",
      "Rank": 136,
      "Benchmark": 26,
      "Samples": 97224,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-GTX950-DC2OC-2GD5-GAMING",
      "Brand": "Asus",
      "Model": "Asus GTX 950 2GB STRIX GAMING",
      "Rank": 136,
      "Benchmark": 26,
      "Samples": 97224,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N950WF2OC-2GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 950 2GB Windforce",
      "Rank": 136,
      "Benchmark": 26,
      "Samples": 97224,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 950 GAMING 2G",
      "Brand": "MSI",
      "Model": "MSI GTX 950 2GB GAMING",
      "Rank": 136,
      "Benchmark": 26,
      "Samples": 97224,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX 950 2GD5 OC",
      "Brand": "MSI",
      "Model": "MSI GTX 950 2GB OC",
      "Rank": 136,
      "Benchmark": 26,
      "Samples": 97224,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N950XTREME-2GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 950 2GB XTREME",
      "Rank": 136,
      "Benchmark": 26,
      "Samples": 97224,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-950/Rating/3510"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 780M",
      "Rank": 137,
      "Benchmark": 25.5,
      "Samples": 3803,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7760/NVIDIA-GeForce-GTX-780M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon RX Vega M GL",
      "Rank": 138,
      "Benchmark": 25.4,
      "Samples": 1143,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/453719/Radeon-RX-Vega-M-GL-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 1050 (Mobile)",
      "Rank": 139,
      "Benchmark": 25,
      "Samples": 124520,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/211022/NVIDIA-GeForce-GTX-1050"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 590 (SLI Disabled)",
      "Rank": 140,
      "Benchmark": 24.7,
      "Samples": 1060,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8041/NVIDIA-GeForce-GTX-590"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro P1000",
      "Rank": 141,
      "Benchmark": 24.6,
      "Samples": 4096,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/271840/NVIDIA-Quadro-P1000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 270",
      "Rank": 142,
      "Benchmark": 24.6,
      "Samples": 40765,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-270/Rating/3149"
    },
    {
      "Type": "GPU",
      "Part Number": "R9270-DC2OC-2GD5",
      "Brand": "Asus",
      "Model": "ASUS R9 270 2GB Direct CU II OC",
      "Rank": 142,
      "Benchmark": 24.6,
      "Samples": 40765,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-270/Rating/3149"
    },
    {
      "Type": "GPU",
      "Part Number": "11220-00-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R9 270 2GB Dual-X Boost OC",
      "Rank": 142,
      "Benchmark": 24.6,
      "Samples": 40765,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-270/Rating/3149"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R927OC-2GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte R9 270 2GB OC",
      "Rank": 142,
      "Benchmark": 24.6,
      "Samples": 40765,
      "URL": "https://gpu.userbenchmark.com/AMD-R9-270/Rating/3149"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 965M",
      "Rank": 143,
      "Benchmark": 23.9,
      "Samples": 3393,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/24481/NVIDIA-GeForce-GTX-965M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 870M",
      "Rank": 144,
      "Benchmark": 23.7,
      "Samples": 2914,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10421/NVIDIA-GeForce-GTX-870M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 560",
      "Rank": 145,
      "Benchmark": 22.9,
      "Samples": 44512,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-560/Rating/3926"
    },
    {
      "Type": "GPU",
      "Part Number": "RX 560 AERO ITX 4G OC",
      "Brand": "MSI",
      "Model": "MSI RX 560 4GB Aero ITX",
      "Rank": 145,
      "Benchmark": 22.9,
      "Samples": 44512,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-560/Rating/3926"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FirePro W7000",
      "Rank": 146,
      "Benchmark": 22.9,
      "Samples": 67,
      "URL": "https://gpu.userbenchmark.com/AMD-FirePro-W7000/Rating/2842"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 680MX",
      "Rank": 147,
      "Benchmark": 22.5,
      "Samples": 247,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8956/NVIDIA-GeForce-GTX-680MX"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K5100M",
      "Rank": 148,
      "Benchmark": 22.2,
      "Samples": 510,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11274/NVIDIA-Quadro-K5100M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K5000",
      "Rank": 149,
      "Benchmark": 22.1,
      "Samples": 2299,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9098/NVIDIA-Quadro-K5000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K4200",
      "Rank": 150,
      "Benchmark": 21.9,
      "Samples": 4478,
      "URL": "https://gpu.userbenchmark.com/Nvidia-Quadro-K4200/Rating/2838"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 775M",
      "Rank": 151,
      "Benchmark": 21.8,
      "Samples": 383,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/13797/NVIDIA-GeForce-GTX-775M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro M2000",
      "Rank": 152,
      "Benchmark": 21.8,
      "Samples": 3732,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/135005/NVIDIA-Quadro-M2000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R7 370",
      "Rank": 153,
      "Benchmark": 21.4,
      "Samples": 31603,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "Type": "GPU",
      "Part Number": "R7 370 GAMING 4G",
      "Brand": "MSI",
      "Model": "MSI R7 370 4GB Gaming",
      "Rank": 153,
      "Benchmark": 21.4,
      "Samples": 31603,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "Type": "GPU",
      "Part Number": "R7 370 GAMING 2G",
      "Brand": "MSI",
      "Model": "MSI R7 370 2GB Gaming",
      "Rank": 153,
      "Benchmark": 21.4,
      "Samples": 31603,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R737WF2OC-2GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte AMD R7 370 2GB",
      "Rank": 153,
      "Benchmark": 21.4,
      "Samples": 31603,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "Type": "GPU",
      "Part Number": "11240-06-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R7 370 2GB Dual-X OC",
      "Rank": 153,
      "Benchmark": 21.4,
      "Samples": 31603,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "Type": "GPU",
      "Part Number": "11240-04-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R7 370 4GB NITRO Dual-X OC",
      "Rank": 153,
      "Benchmark": 21.4,
      "Samples": 31603,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-R7370-DC2OC-2GD5-GAMING",
      "Brand": "Asus",
      "Model": "ASUS R7 370 2GB STRIX OC",
      "Rank": 153,
      "Benchmark": 21.4,
      "Samples": 31603,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-R7370-DC2OC-4GD5-GAMING",
      "Brand": "Asus",
      "Model": "ASUS R7 370 4GB STRIX OC",
      "Rank": 153,
      "Benchmark": 21.4,
      "Samples": 31603,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "Type": "GPU",
      "Part Number": "R7-370P-2SF5",
      "Brand": "XFX",
      "Model": "XFX R7 370 2GB 2SF5",
      "Rank": 153,
      "Benchmark": 21.4,
      "Samples": 31603,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-370/Rating/3571"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 580",
      "Rank": 154,
      "Benchmark": 21.3,
      "Samples": 14689,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-580/Rating/3150"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 660",
      "Rank": 155,
      "Benchmark": 21.2,
      "Samples": 103363,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-660/Rating/2162"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 M290X",
      "Rank": 156,
      "Benchmark": 21.1,
      "Samples": 1247,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11722/AMD-Radeon-R9-M290X"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 6970",
      "Rank": 157,
      "Benchmark": 20.9,
      "Samples": 7683,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7712/AMD-Radeon-HD-6900"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7970M",
      "Rank": 158,
      "Benchmark": 20.9,
      "Samples": 865,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9441/AMD-Radeon-HD-7970M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 6990 (Crossfire Disabled)",
      "Rank": 159,
      "Benchmark": 20.7,
      "Samples": 1044,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7713/AMD-Radeon-HD-6900"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 760 (192-bit)",
      "Rank": 160,
      "Benchmark": 20.7,
      "Samples": 8897,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11047/NVIDIA-GeForce-GTX-760-192-bit"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce MX350",
      "Rank": 161,
      "Benchmark": 20.5,
      "Samples": 1115,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1069350/NVIDIA-GeForce-MX350"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 M290",
      "Rank": 162,
      "Benchmark": 20.2,
      "Samples": 77,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/31120/AMD-RADEON-R9-M290"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Microsoft",
      "Model": "RemoteFX Graphics Device - WDDM",
      "Rank": 163,
      "Benchmark": 20.1,
      "Samples": 121,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/13438/Microsoft-RemoteFX-Graphics-Device---WDDM"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 7790",
      "Rank": 164,
      "Benchmark": 20.1,
      "Samples": 8243,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8622/AMD-Radeon-HD-7700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R7 265",
      "Rank": 165,
      "Benchmark": 20.1,
      "Samples": 7348,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-265/Rating/3296"
    },
    {
      "Type": "GPU",
      "Part Number": "11232-00-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R7 265 2GB Dual-X",
      "Rank": 165,
      "Benchmark": 20.1,
      "Samples": 7348,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-265/Rating/3296"
    },
    {
      "Type": "GPU",
      "Part Number": "R7 265 2GD5 OC",
      "Brand": "MSI",
      "Model": "MSI R7 265 2GB OC",
      "Rank": 165,
      "Benchmark": 20.1,
      "Samples": 7348,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-265/Rating/3296"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R7 260X",
      "Rank": 166,
      "Benchmark": 20,
      "Samples": 32905,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-260X/Rating/3151"
    },
    {
      "Type": "GPU",
      "Part Number": "11222-22-20G",
      "Brand": "Sapphire",
      "Model": "SAPPHIRE R7 260X 2GB OC 2x DVI",
      "Rank": 166,
      "Benchmark": 20,
      "Samples": 32905,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-260X/Rating/3151"
    },
    {
      "Type": "GPU",
      "Part Number": "11222-06-20G",
      "Brand": "Sapphire",
      "Model": "SAPPHIRE R7 260X 2GB OC",
      "Rank": 166,
      "Benchmark": 20,
      "Samples": 32905,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-260X/Rating/3151"
    },
    {
      "Type": "GPU",
      "Part Number": "R7260XCNF4",
      "Brand": "XFX",
      "Model": "XFX 260X 2GB",
      "Rank": 166,
      "Benchmark": 20,
      "Samples": 32905,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-260X/Rating/3151"
    },
    {
      "Type": "GPU",
      "Part Number": "R7 260X 2GD5 OC",
      "Brand": "MSI",
      "Model": "MSI R7 260X 2GB OC",
      "Rank": 166,
      "Benchmark": 20,
      "Samples": 32905,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-260X/Rating/3151"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 680M",
      "Rank": 167,
      "Benchmark": 20,
      "Samples": 1103,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8687/NVIDIA-GeForce-GTX-680M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon RX 560-B",
      "Rank": 168,
      "Benchmark": 19.9,
      "Samples": 42135,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/330029/Radeon-RX-560"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 460",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RX460WF2OC-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 460 4GB Windforce OC",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RX460WF2OC-2GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 460 2GB Windforce OC",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "STRIX-RX460-O4G-GAMING",
      "Brand": "Asus",
      "Model": "Asus RX 460 4GB ROG STRIX OC",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RX460WF2OC-2GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 460 2GB Windforce OC",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "AXRX 460 2GBD5-DH/OC",
      "Brand": "PowerColor",
      "Model": "PowerColor RX 460 2GB Red Dragon",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "11257-02-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 460 4GB Nitro",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "100409-2GOCL",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 460 2GB 1210 MHz",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "11257-00-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire RX 460 2GB 1090 MHz",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-460P4DFG5",
      "Brand": "XFX",
      "Model": "XFX RX 460 2GB",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-460P2SFG5",
      "Brand": "XFX",
      "Model": "XFX RX 460 2GB",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "RX-460P4SFG5",
      "Brand": "XFX",
      "Model": "XFX RX 460 4GB SF",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-RX460WF2OC-4GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte RX 460 4GB Windforce 2x",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "DUAL-RX460-O2G",
      "Brand": "Asus",
      "Model": "Asus RX 460 2GB Dual Fan OC",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "Radeon RX 460 2G OC",
      "Brand": "MSI",
      "Model": "MSI RX 460 2GB 2G OC",
      "Rank": 169,
      "Benchmark": 19.8,
      "Samples": 52305,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-460/Rating/3641"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 5870",
      "Rank": 170,
      "Benchmark": 19.6,
      "Samples": 9510,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7681/AMD-Radeon-HD-5800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX Vega 8 5000 (iGPU)",
      "Rank": 171,
      "Benchmark": 19.6,
      "Samples": 2801,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1415260/AMD-RadeonTM-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 7850",
      "Rank": 172,
      "Benchmark": 19.4,
      "Samples": 44098,
      "URL": "https://gpu.userbenchmark.com/AMD-HD-7850/Rating/2182"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 6950",
      "Rank": 173,
      "Benchmark": 19.2,
      "Samples": 22099,
      "URL": "https://gpu.userbenchmark.com/AMD-HD-6950/Rating/3152"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 570",
      "Rank": 174,
      "Benchmark": 19.2,
      "Samples": 21486,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-570/Rating/3156"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris Xe",
      "Rank": 175,
      "Benchmark": 19,
      "Samples": 16439,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1268515/IntelR-IrisR-Xe-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 480",
      "Rank": 176,
      "Benchmark": 18.8,
      "Samples": 3733,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-480/Rating/3157"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Parallels",
      "Model": "Display Adapter (WDDM)",
      "Rank": 177,
      "Benchmark": 18.5,
      "Samples": 2479,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7878/Parallels-Display-Adapter-WDDM"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 560 Ti (448 Core LE)",
      "Rank": 178,
      "Benchmark": 18.3,
      "Samples": 1992,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8215/NVIDIA-GeForce-GTX-560-Ti"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 750-Ti",
      "Rank": 179,
      "Benchmark": 18.3,
      "Samples": 263486,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "Type": "GPU",
      "Part Number": "02G-P4-3753-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 750 Ti 2GB SC",
      "Rank": 179,
      "Benchmark": 18.3,
      "Samples": 263486,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "Type": "GPU",
      "Part Number": "GTX750TI-OC-2GD5",
      "Brand": "Asus",
      "Model": "ASUS GTX 750 Ti 2GB OC",
      "Rank": 179,
      "Benchmark": 18.3,
      "Samples": 263486,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "Type": "GPU",
      "Part Number": "N750TI-2GD5TLP",
      "Brand": "MSI",
      "Model": "MSI GTX 750 Ti 2GB",
      "Rank": 179,
      "Benchmark": 18.3,
      "Samples": 263486,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "Type": "GPU",
      "Part Number": "N750TI TF 2GD5/OC",
      "Brand": "MSI",
      "Model": "MSI GTX 750 Ti 2GB Gaming",
      "Rank": 179,
      "Benchmark": 18.3,
      "Samples": 263486,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "Type": "GPU",
      "Part Number": "02G-P4-3751-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 750 Ti 2GB",
      "Rank": 179,
      "Benchmark": 18.3,
      "Samples": 263486,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "Type": "GPU",
      "Part Number": "02G-P4-3757-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 750 Ti 2GB FTW",
      "Rank": 179,
      "Benchmark": 18.3,
      "Samples": 263486,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N75TOC2-2GI",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 750 Ti 2GB OC 2",
      "Rank": 179,
      "Benchmark": 18.3,
      "Samples": 263486,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-N75TOC-1GI",
      "Brand": "Gigabyte",
      "Model": "Gigabyte GTX 750 Ti 2GB",
      "Rank": 179,
      "Benchmark": 18.3,
      "Samples": 263486,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-750-Ti/Rating/2187"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 650 Ti Boost",
      "Rank": 180,
      "Benchmark": 18,
      "Samples": 11823,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-650-Ti-Boost/Rating/2190"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 960M",
      "Rank": 181,
      "Benchmark": 17.6,
      "Samples": 67034,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/27242/NVIDIA-GeForce-GTX-960M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R7 360",
      "Rank": 182,
      "Benchmark": 17.4,
      "Samples": 22059,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "Type": "GPU",
      "Part Number": "R7 360 2GD5 OC",
      "Brand": "MSI",
      "Model": "MSI R7 360 2G OC",
      "Rank": 182,
      "Benchmark": 17.4,
      "Samples": 22059,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "Type": "GPU",
      "Part Number": "11243-00-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R7 360 2GB OC",
      "Rank": 182,
      "Benchmark": 17.4,
      "Samples": 22059,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "Type": "GPU",
      "Part Number": "11243-05-20G",
      "Brand": "Sapphire",
      "Model": "Sapphire R7 360 2GB NITRO",
      "Rank": 182,
      "Benchmark": 17.4,
      "Samples": 22059,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R736OC-2GD",
      "Brand": "Gigabyte",
      "Model": "Gigabyte R7 360 2GB",
      "Rank": 182,
      "Benchmark": 17.4,
      "Samples": 22059,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "Type": "GPU",
      "Part Number": "GV-R736OC-2GD REV2.0",
      "Brand": "Gigabyte",
      "Model": "Gigabyte R7 360 2GB V2",
      "Rank": 182,
      "Benchmark": 17.4,
      "Samples": 22059,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "Type": "GPU",
      "Part Number": "R7-360P-2SF5",
      "Brand": "XFX",
      "Model": "XFX R7 360 2GB 360P",
      "Rank": 182,
      "Benchmark": 17.4,
      "Samples": 22059,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "Type": "GPU",
      "Part Number": "R7360-OC-2GD5-V2",
      "Brand": "Asus",
      "Model": "Asus R7 360 2GB OC V2",
      "Rank": 182,
      "Benchmark": 17.4,
      "Samples": 22059,
      "URL": "https://gpu.userbenchmark.com/AMD-R7-360/Rating/3572"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K2200",
      "Rank": 183,
      "Benchmark": 17.3,
      "Samples": 11381,
      "URL": "https://gpu.userbenchmark.com/Nvidia-Quadro-K2200/Rating/2839"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 770M",
      "Rank": 184,
      "Benchmark": 17.3,
      "Samples": 5033,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7724/NVIDIA-GeForce-GTX-770M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 560 Ti",
      "Rank": 185,
      "Benchmark": 16.9,
      "Samples": 34142,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-560-Ti/Rating/2180"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8950",
      "Rank": 186,
      "Benchmark": 16.8,
      "Samples": 488,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8897/AMD-Radeon-HD-8950"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FirePro M6100 (FireGL V)",
      "Rank": 187,
      "Benchmark": 16.5,
      "Samples": 227,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10287/AMD-FirePro-M6100-FireGL-V"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K5000M",
      "Rank": 188,
      "Benchmark": 16.4,
      "Samples": 312,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11324/NVIDIA-Quadro-K5000M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 5970 (Crossfire Disabled)",
      "Rank": 189,
      "Benchmark": 16.4,
      "Samples": 1322,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7906/AMD-Radeon-HD-5900"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX Vega 11 (Ryzen iGPU)",
      "Rank": 190,
      "Benchmark": 16.3,
      "Samples": 38911,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/401440/AMD-RadeonTM-RX-Vega-11-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 860M",
      "Rank": 191,
      "Benchmark": 16.3,
      "Samples": 15538,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8647/NVIDIA-GeForce-GTX-860M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 675MX",
      "Rank": 192,
      "Benchmark": 15.7,
      "Samples": 490,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10174/NVIDIA-GeForce-GTX-675MX"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 5850",
      "Rank": 193,
      "Benchmark": 15.5,
      "Samples": 10961,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7680/AMD-Radeon-HD-5800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 650-Ti",
      "Rank": 194,
      "Benchmark": 15.5,
      "Samples": 31257,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-650-Ti/Rating/2189"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 750",
      "Rank": 195,
      "Benchmark": 15.3,
      "Samples": 59143,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-750/Rating/3162"
    },
    {
      "Type": "GPU",
      "Part Number": "01G-P4-2751-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 750 1GB Dual-Link",
      "Rank": 195,
      "Benchmark": 15.3,
      "Samples": 59143,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-750/Rating/3162"
    },
    {
      "Type": "GPU",
      "Part Number": "01G-P4-2753-KR",
      "Brand": "EVGA",
      "Model": "EVGA GTX 750 1GB Dual-Link SC",
      "Rank": 195,
      "Benchmark": 15.3,
      "Samples": 59143,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-750/Rating/3162"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 850M",
      "Rank": 196,
      "Benchmark": 15.3,
      "Samples": 9588,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9138/NVIDIA-GeForce-GTX-850M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 6870",
      "Rank": 197,
      "Benchmark": 15.2,
      "Samples": 22392,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7744/AMD-Radeon-HD-6800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 470",
      "Rank": 198,
      "Benchmark": 15,
      "Samples": 5311,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7820/NVIDIA-GeForce-GTX-470"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 950M",
      "Rank": 199,
      "Benchmark": 14.9,
      "Samples": 34906,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/27713/NVIDIA-GeForce-GTX-950M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "MX150-0",
      "Rank": 200,
      "Benchmark": 14.8,
      "Samples": 25477,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/332822/NVIDIA-GeForce-MX150"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GT 1030",
      "Rank": 201,
      "Benchmark": 14.7,
      "Samples": 122529,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/283726/NVIDIA-GeForce-GT-1030"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce MX250",
      "Rank": 202,
      "Benchmark": 14.6,
      "Samples": 7468,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/762458/NVIDIA-GeForce-MX250"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 560 Ti-OEM",
      "Rank": 203,
      "Benchmark": 14.4,
      "Samples": 1240,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9203/NVIDIA-GeForce-GTX-560-Ti"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 460 v2",
      "Rank": 204,
      "Benchmark": 14.3,
      "Samples": 601,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9101/NVIDIA-GeForce-GTX-460-v2"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 580M",
      "Rank": 205,
      "Benchmark": 14.3,
      "Samples": 306,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7757/NVIDIA-GeForce-GTX-580M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 560",
      "Rank": 206,
      "Benchmark": 14.2,
      "Samples": 20742,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-560/Rating/3155"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 765M",
      "Rank": 207,
      "Benchmark": 14.1,
      "Samples": 7070,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7742/NVIDIA-GeForce-GTX-765M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro 6000",
      "Rank": 208,
      "Benchmark": 13.8,
      "Samples": 1223,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7657/NVIDIA-Quadro-6000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 675M",
      "Rank": 209,
      "Benchmark": 13.5,
      "Samples": 854,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8829/NVIDIA-GeForce-GTX-675M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K1200",
      "Rank": 210,
      "Benchmark": 13.5,
      "Samples": 2892,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/28490/NVIDIA-Quadro-K1200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K4000",
      "Rank": 211,
      "Benchmark": 13,
      "Samples": 8066,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7730/NVIDIA-Quadro-K4000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX 550",
      "Rank": 212,
      "Benchmark": 12.9,
      "Samples": 15460,
      "URL": "https://gpu.userbenchmark.com/AMD-RX-550/Rating/3925"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 5830",
      "Rank": 213,
      "Benchmark": 12.9,
      "Samples": 2241,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8247/AMD-Radeon-HD-5800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FirePro V7900 (FireGL V)",
      "Rank": 214,
      "Benchmark": 12.8,
      "Samples": 454,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9001/AMD-FirePro-V7900-FireGL-V"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 460",
      "Rank": 215,
      "Benchmark": 12.7,
      "Samples": 20743,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-460/Rating/2167"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX Vega 8 4000 (iGPU)",
      "Rank": 216,
      "Benchmark": 12.7,
      "Samples": 68754,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1005641/AMD-RadeonTM-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 7770",
      "Rank": 217,
      "Benchmark": 12.6,
      "Samples": 35763,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7710/AMD-Radeon-HD-7700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8760",
      "Rank": 218,
      "Benchmark": 12.4,
      "Samples": 186,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12506/AMD-Radeon-HD-8760"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K4000M",
      "Rank": 219,
      "Benchmark": 12.3,
      "Samples": 669,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8941/NVIDIA-Quadro-K4000M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris Pro 580 (Mobile Skylake)",
      "Rank": 220,
      "Benchmark": 12.3,
      "Samples": 765,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/132950/IntelR-IrisTM-Pro-Graphics-580"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 670MX",
      "Rank": 221,
      "Benchmark": 12.1,
      "Samples": 1909,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7874/NVIDIA-GeForce-GTX-670MX"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 465",
      "Rank": 222,
      "Benchmark": 12,
      "Samples": 1285,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8000/NVIDIA-GeForce-GTX-465"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R7 250X",
      "Rank": 223,
      "Benchmark": 12,
      "Samples": 10145,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8719/AMD-Radeon-R7-200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 555",
      "Rank": 224,
      "Benchmark": 12,
      "Samples": 659,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10555/NVIDIA-GeForce--GTX-555"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 560 SE",
      "Rank": 225,
      "Benchmark": 11.7,
      "Samples": 1461,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10488/NVIDIA-GeForce-GTX-560-SE"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 6850",
      "Rank": 226,
      "Benchmark": 11.7,
      "Samples": 25002,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7743/AMD-Radeon-HD-6800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 760M",
      "Rank": 227,
      "Benchmark": 11.6,
      "Samples": 1506,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9587/NVIDIA-GeForce-GTX-760M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 485M",
      "Rank": 228,
      "Benchmark": 11.5,
      "Samples": 52,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10025/NVIDIA-GeForce-GTX-485M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K3100M",
      "Rank": 229,
      "Benchmark": 11.3,
      "Samples": 2440,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8639/NVIDIA-Quadro-K3100M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris Plus G7",
      "Rank": 230,
      "Benchmark": 11.3,
      "Samples": 29225,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/888370/IntelR-IrisR-Plus-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "MX150-2",
      "Rank": 231,
      "Benchmark": 11.1,
      "Samples": 4384,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/309890/NVIDIA-GeForce-MX150"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 295 (SLI Disabled)",
      "Rank": 232,
      "Benchmark": 11.1,
      "Samples": 986,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7987/NVIDIA-GeForce-GTX-295"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX Vega 10 (Ryzen iGPU)",
      "Rank": 233,
      "Benchmark": 11,
      "Samples": 461,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/432559/AMD-RadeonTM-Vega-10-Mobile-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 5700",
      "Rank": 234,
      "Benchmark": 10.8,
      "Samples": 21,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/15646/ATI-Radeon-HD-5700-Series"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K620",
      "Rank": 235,
      "Benchmark": 10.8,
      "Samples": 12869,
      "URL": "https://gpu.userbenchmark.com/Nvidia-Quadro-K620/Rating/2840"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce MX230",
      "Rank": 236,
      "Benchmark": 10.6,
      "Samples": 3648,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/746237/NVIDIA-GeForce-MX230"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 5770",
      "Rank": 237,
      "Benchmark": 10.5,
      "Samples": 34293,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7752/AMD-Radeon-HD-5700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX Vega 8 (Ryzen iGPU)",
      "Rank": 238,
      "Benchmark": 10.5,
      "Samples": 70500,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/441833/AMD-RadeonTM-Vega-8-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R9 M370X",
      "Rank": 239,
      "Benchmark": 10.5,
      "Samples": 915,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/30774/AMD-Radeon-R9-M370X"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 670M",
      "Rank": 240,
      "Benchmark": 10.5,
      "Samples": 2630,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7956/NVIDIA-GeForce-GTX-670M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 460 SE",
      "Rank": 241,
      "Benchmark": 10.4,
      "Samples": 2965,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7703/NVIDIA-GeForce-GTX-460-SE"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 6790",
      "Rank": 242,
      "Benchmark": 10.4,
      "Samples": 3434,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8056/AMD-Radeon-HD-6700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6770",
      "Rank": 243,
      "Benchmark": 10.2,
      "Samples": 13997,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7704/AMD-Radeon-HD-6700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 6970M",
      "Rank": 244,
      "Benchmark": 10.1,
      "Samples": 1359,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8552/AMD-Radeon-HD-6900M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "HD 4890",
      "Rank": 245,
      "Benchmark": 10.1,
      "Samples": 127,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7789/ATI-Radeon-HD-4800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FirePro M6000",
      "Rank": 246,
      "Benchmark": 10.1,
      "Samples": 226,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7770/AMD-ATI-FirePro-M6000-FireGL-V-Mobility-Pro-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "MX130",
      "Rank": 247,
      "Benchmark": 10.1,
      "Samples": 9950,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/439531/NVIDIA-GeForce-MX130"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Asus",
      "Model": "EAH6770",
      "Rank": 248,
      "Benchmark": 10,
      "Samples": 97,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7880/ASUS-EAH6770"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro 5000",
      "Rank": 249,
      "Benchmark": 10,
      "Samples": 2420,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9708/NVIDIA-Quadro-5000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 645",
      "Rank": 250,
      "Benchmark": 9.98,
      "Samples": 3919,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8982/NVIDIA-GeForce-GTX-645"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 745 (OEM)",
      "Rank": 251,
      "Benchmark": 9.97,
      "Samples": 22514,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-745-OEM/Rating/2638"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon 540",
      "Rank": 252,
      "Benchmark": 9.81,
      "Samples": 139,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/316090/RadeonTM-540-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 940M",
      "Rank": 253,
      "Benchmark": 9.81,
      "Samples": 12070,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/28796/NVIDIA-GeForce-940M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 755M",
      "Rank": 254,
      "Benchmark": 9.76,
      "Samples": 3028,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7727/NVIDIA-GeForce-GT-755M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 570M",
      "Rank": 255,
      "Benchmark": 9.73,
      "Samples": 576,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10161/NVIDIA-GeForce-GTX-570M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "940MX",
      "Rank": 256,
      "Benchmark": 9.69,
      "Samples": 27742,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/88506/NVIDIA-GeForce-940MX"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 285",
      "Rank": 257,
      "Benchmark": 9.66,
      "Samples": 2440,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7733/NVIDIA-GeForce-GTX-285"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FirePro M5100 (FireGL V)",
      "Rank": 258,
      "Benchmark": 9.64,
      "Samples": 293,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12267/AMD-FirePro-M5100-FireGL-V"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris Pro HD 6200 (Desktop)",
      "Rank": 259,
      "Benchmark": 9.57,
      "Samples": 1048,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/30277/IntelR-IrisTM-Pro-Graphics-6200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FirePro M8900",
      "Rank": 260,
      "Benchmark": 9.53,
      "Samples": 180,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9032/AMD-ATI-FirePro-M8900-FireGL-Mobility-Pro-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 840M",
      "Rank": 261,
      "Benchmark": 9.37,
      "Samples": 15949,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8643/NVIDIA-GeForce-840M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 275",
      "Rank": 262,
      "Benchmark": 9.3,
      "Samples": 2602,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-275/Rating/3261"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris Plus 650 (Mobile Kaby Lake)",
      "Rank": 263,
      "Benchmark": 9.2,
      "Samples": 1508,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/367939/IntelR-IrisR-Plus-Graphics-650"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7800M",
      "Rank": 264,
      "Benchmark": 9.08,
      "Samples": 424,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10077/AMD-Radeon-HD-7800M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 550-Ti",
      "Rank": 265,
      "Benchmark": 8.97,
      "Samples": 38429,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-550-Ti/Rating/3161"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "HD 4870",
      "Rank": 266,
      "Benchmark": 8.75,
      "Samples": 17196,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7788/ATI-Radeon-HD-4800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 650",
      "Rank": 267,
      "Benchmark": 8.68,
      "Samples": 66473,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-650/Rating/3154"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 280",
      "Rank": 268,
      "Benchmark": 8.67,
      "Samples": 1255,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8413/NVIDIA-GeForce-GTX-280"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "FirePro V5800 (FireGL V)",
      "Rank": 269,
      "Benchmark": 8.66,
      "Samples": 371,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12336/ATI-FirePro-V5800-FireGL-V"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Mobility Radeon HD 5870",
      "Rank": 270,
      "Benchmark": 8.6,
      "Samples": 2777,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8764/AMD-Mobility-Radeon-HD-5800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris 550 (Mobile Skylake)",
      "Rank": 271,
      "Benchmark": 8.57,
      "Samples": 674,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/129148/IntelR-IrisTM-Graphics-550"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "930MX",
      "Rank": 272,
      "Benchmark": 8.53,
      "Samples": 5182,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/155423/NVIDIA-GeForce-930MX"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 750M",
      "Rank": 273,
      "Benchmark": 8.43,
      "Samples": 12785,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7928/NVIDIA-GeForce-GT-750M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 5800",
      "Rank": 274,
      "Benchmark": 8.41,
      "Samples": 629,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10447/NVIDIA-Quadro-FX-5800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 480M",
      "Rank": 275,
      "Benchmark": 8.38,
      "Samples": 27,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/20276/NVIDIA-GeForce-GTX-480M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R7 250",
      "Rank": 276,
      "Benchmark": 8.31,
      "Samples": 21799,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8217/AMD-Radeon-R7-200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro 4000M",
      "Rank": 277,
      "Benchmark": 8.24,
      "Samples": 1008,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11532/NVIDIA-Quadro-4000M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 5750",
      "Rank": 278,
      "Benchmark": 8.14,
      "Samples": 11240,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7753/AMD-Radeon-HD-5700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K3000M",
      "Rank": 279,
      "Benchmark": 8.06,
      "Samples": 2209,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8326/NVIDIA-Quadro-K3000M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 740",
      "Rank": 280,
      "Benchmark": 8,
      "Samples": 24848,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/13294/NVIDIA-GeForce-GT-740"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6700",
      "Rank": 281,
      "Benchmark": 8,
      "Samples": 3435,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9272/AMD-Radeon-HD-6700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R7 250E",
      "Rank": 282,
      "Benchmark": 7.92,
      "Samples": 9096,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8884/AMD-Radeon-R7-200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 4850",
      "Rank": 283,
      "Benchmark": 7.92,
      "Samples": 968,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7790/ATI-Radeon-HD-4800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris Plus 640 (Mobile Kaby Lake)",
      "Rank": 284,
      "Benchmark": 7.91,
      "Samples": 6670,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/262015/IntelR-IrisTM-Plus-Graphics-640"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "UHD Graphics 750",
      "Rank": 285,
      "Benchmark": 7.89,
      "Samples": 417,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1498842/IntelR-UHD-Graphics-750"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 4850-X2",
      "Rank": 286,
      "Benchmark": 7.84,
      "Samples": 90,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11246/ATI-Radeon-HD-4850-X2"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 7750",
      "Rank": 287,
      "Benchmark": 7.79,
      "Samples": 20003,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7709/AMD-Radeon-HD-7700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9800 GTX",
      "Rank": 288,
      "Benchmark": 7.72,
      "Samples": 3481,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8342/NVIDIA-GeForce-9800-GTX9800-GTX-"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTS 450",
      "Rank": 289,
      "Benchmark": 7.71,
      "Samples": 24368,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7762/NVIDIA-GeForce-GTS-450"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 745M",
      "Rank": 290,
      "Benchmark": 7.66,
      "Samples": 478,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8211/NVIDIA-GeForce-GT-745M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 260",
      "Rank": 291,
      "Benchmark": 7.63,
      "Samples": 11102,
      "URL": "https://gpu.userbenchmark.com/Nvidia-GTX-260/Rating/3160"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris Plus G4",
      "Rank": 292,
      "Benchmark": 7.58,
      "Samples": 6941,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/921079/IntelR-IrisR-Plus-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K2000",
      "Rank": 293,
      "Benchmark": 7.56,
      "Samples": 8926,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8356/NVIDIA-Quadro-K2000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GTX 660M",
      "Rank": 294,
      "Benchmark": 7.56,
      "Samples": 6831,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7749/NVIDIA-GeForce-GTX-660M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 560M",
      "Rank": 295,
      "Benchmark": 7.5,
      "Samples": 5071,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7964/NVIDIA-GeForce-GTX-560M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K2100M",
      "Rank": 296,
      "Benchmark": 7.48,
      "Samples": 5479,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7811/NVIDIA-Quadro-K2100M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX Vega 6 (Ryzen iGPU)",
      "Rank": 297,
      "Benchmark": 7.4,
      "Samples": 2031,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/511817/AMD-RadeonTM-Vega-6-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 4800",
      "Rank": 298,
      "Benchmark": 7.31,
      "Samples": 113,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8124/ATI-Radeon-HD-4800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7700M",
      "Rank": 299,
      "Benchmark": 7.2,
      "Samples": 543,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11261/AMD-Radeon-HD-7700M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 4770",
      "Rank": 300,
      "Benchmark": 7.16,
      "Samples": 1429,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8796/ATI-Radeon-HD-4770"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTS 250",
      "Rank": 301,
      "Benchmark": 7.16,
      "Samples": 12056,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7741/NVIDIA-GeForce-GTS-250"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris 540 (Mobile Skylake)",
      "Rank": 302,
      "Benchmark": 7.15,
      "Samples": 4614,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/37386/IntelR-IrisTM-Graphics-540"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8800 GTS-512",
      "Rank": 303,
      "Benchmark": 7.1,
      "Samples": 1162,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8016/NVIDIA-GeForce-8800-GTS-512"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 460M",
      "Rank": 304,
      "Benchmark": 7.06,
      "Samples": 2829,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8234/NVIDIA-GeForce-GTX-460M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FirePro M4000",
      "Rank": 305,
      "Benchmark": 7.04,
      "Samples": 1283,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8394/AMD-FirePro-M4000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 640",
      "Rank": 306,
      "Benchmark": 6.97,
      "Samples": 28037,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7731/NVIDIA-GeForce-GT-640"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 650M",
      "Rank": 307,
      "Benchmark": 6.94,
      "Samples": 11697,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7754/NVIDIA-GeForce-GT-650M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 3800M",
      "Rank": 308,
      "Benchmark": 6.91,
      "Samples": 334,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9394/NVIDIA-Quadro-FX-3800M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Mobility Radeon HD 5850",
      "Rank": 309,
      "Benchmark": 6.88,
      "Samples": 1267,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8789/AMD-Mobility-Radeon-HD-5800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 830M",
      "Rank": 310,
      "Benchmark": 6.83,
      "Samples": 1065,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/25102/NVIDIA-GeForce-830M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro 4000",
      "Rank": 311,
      "Benchmark": 6.76,
      "Samples": 11436,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7693/NVIDIA-Quadro-4000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon R7 Graphics",
      "Rank": 312,
      "Benchmark": 6.62,
      "Samples": 21778,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8791/AMD-RadeonTM-R7-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 3800",
      "Rank": 313,
      "Benchmark": 6.59,
      "Samples": 2610,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7804/NVIDIA-Quadro-FX-3800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon  530",
      "Rank": 314,
      "Benchmark": 6.59,
      "Samples": 2534,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/375394/Radeon-TM-530"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 7730",
      "Rank": 315,
      "Benchmark": 6.54,
      "Samples": 2725,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8038/AMD-Radeon-HD-7700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTS 240",
      "Rank": 316,
      "Benchmark": 6.52,
      "Samples": 921,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8940/NVIDIA-GeForce-GTS-240"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "FirePro M7740",
      "Rank": 317,
      "Benchmark": 6.52,
      "Samples": 183,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8759/ATI-FirePro-M7740"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 285M",
      "Rank": 318,
      "Benchmark": 6.51,
      "Samples": 113,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10715/NVIDIA-GeForce-GTX-285M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8570",
      "Rank": 319,
      "Benchmark": 6.47,
      "Samples": 3232,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9843/AMD-Radeon-HD-8570"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FirePro V4900",
      "Rank": 320,
      "Benchmark": 6.45,
      "Samples": 1744,
      "URL": "https://gpu.userbenchmark.com/AMD-FirePro-V4900/Rating/2843"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 280M",
      "Rank": 321,
      "Benchmark": 6.4,
      "Samples": 148,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/13363/NVIDIA-GeForce-GTX-280M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "MX110",
      "Rank": 322,
      "Benchmark": 6.3,
      "Samples": 4201,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/499472/NVIDIA-GeForce-MX110"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris Pro HD 6100 (Mobile)",
      "Rank": 323,
      "Benchmark": 6.29,
      "Samples": 4508,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/25925/IntelR-IrisTM-Pro-Graphics-6100"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FirePro V5900 (FireGL V)",
      "Rank": 324,
      "Benchmark": 6.27,
      "Samples": 1291,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10203/AMD-FirePro-V5900-FireGL-V"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8800 Ultra",
      "Rank": 325,
      "Benchmark": 6.27,
      "Samples": 108,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/14944/NVIDIA-GeForce-8800-Ultra"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8800 GT",
      "Rank": 326,
      "Benchmark": 6.18,
      "Samples": 5038,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7722/NVIDIA-GeForce-8800-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro 2000",
      "Rank": 327,
      "Benchmark": 6.16,
      "Samples": 13235,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7708/NVIDIA-Quadro-2000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "UHD Graphics 730",
      "Rank": 328,
      "Benchmark": 6.14,
      "Samples": 147,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/1500304/IntelR-UHD-Graphics-730"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 6000 (Mobile)",
      "Rank": 329,
      "Benchmark": 6.05,
      "Samples": 3954,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/24946/IntelR-HD-Graphics-6000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 740M",
      "Rank": 330,
      "Benchmark": 5.99,
      "Samples": 14674,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7671/NVIDIA-GeForce-GT-740M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 635",
      "Rank": 331,
      "Benchmark": 5.96,
      "Samples": 2695,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8246/NVIDIA-GeForce-GT-635"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K2000M",
      "Rank": 332,
      "Benchmark": 5.94,
      "Samples": 3639,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8574/NVIDIA-Quadro-K2000M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 545",
      "Rank": 333,
      "Benchmark": 5.89,
      "Samples": 2539,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9908/NVIDIA-GeForce-GT-545"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "920MX",
      "Rank": 334,
      "Benchmark": 5.89,
      "Samples": 7851,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/167104/NVIDIA-GeForce-920MX"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6670",
      "Rank": 335,
      "Benchmark": 5.88,
      "Samples": 29047,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7738/AMD-Radeon-HD-6670"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro 3000M",
      "Rank": 336,
      "Benchmark": 5.76,
      "Samples": 1962,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8172/NVIDIA-Quadro-3000M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8800 GTX",
      "Rank": 337,
      "Benchmark": 5.76,
      "Samples": 1367,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9271/NVIDIA-GeForce-8800-GTX"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "UHD G1",
      "Rank": 338,
      "Benchmark": 5.69,
      "Samples": 31018,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/895409/IntelR-UHD-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K1100M",
      "Rank": 339,
      "Benchmark": 5.68,
      "Samples": 3564,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10244/NVIDIA-Quadro-K1100M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 3700M",
      "Rank": 340,
      "Benchmark": 5.63,
      "Samples": 355,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10184/NVIDIA-Quadro-FX-3700M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9800 GT",
      "Rank": 341,
      "Benchmark": 5.6,
      "Samples": 14267,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7716/NVIDIA-GeForce-9800-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6730M",
      "Rank": 342,
      "Benchmark": 5.52,
      "Samples": 112,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9168/AMD-Radeon-HD-6730M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "R7 240",
      "Rank": 343,
      "Benchmark": 5.48,
      "Samples": 32195,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8608/AMD-Radeon-R7-200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6700M",
      "Rank": 344,
      "Benchmark": 5.47,
      "Samples": 1553,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7769/AMD-Radeon-HD-6700M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon  HD 6770M",
      "Rank": 345,
      "Benchmark": 5.45,
      "Samples": 692,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7746/Radeon-TM-HD-6770M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris Pro HD 5200 (V1 Mobile 1.15 GHz)",
      "Rank": 346,
      "Benchmark": 5.43,
      "Samples": 1025,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8009/IntelR-IrisTM-Pro-Graphics-5200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 640M",
      "Rank": 347,
      "Benchmark": 5.39,
      "Samples": 2967,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8030/NVIDIA-GeForce-GT-640M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7670",
      "Rank": 348,
      "Benchmark": 5.38,
      "Samples": 2468,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8206/AMD-Radeon-HD-7670"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "FirePro V4800 (FireGL V)",
      "Rank": 349,
      "Benchmark": 5.29,
      "Samples": 2014,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9332/ATI-FirePro-V4800-FireGL-V"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro 2000M",
      "Rank": 350,
      "Benchmark": 5.27,
      "Samples": 2673,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7776/NVIDIA-Quadro-2000M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "UHD Graphics 630 (Desktop Coffee Lake i5 i7)",
      "Rank": 351,
      "Benchmark": 5.19,
      "Samples": 101867,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/356797/IntelR-UHD-Graphics-630"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 5670",
      "Rank": 352,
      "Benchmark": 5.16,
      "Samples": 14606,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8110/AMD-Radeon-HD-5670"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris Pro HD 5200 (V2 Mobile 1.2 GHz)",
      "Rank": 353,
      "Benchmark": 5.13,
      "Samples": 4203,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8190/IntelR-IrisTM-Pro-Graphics-5200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8670D",
      "Rank": 354,
      "Benchmark": 5.09,
      "Samples": 5640,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8025/AMD-Radeon-HD-8670D"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 3870",
      "Rank": 355,
      "Benchmark": 5.08,
      "Samples": 1563,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7879/ATI-Radeon-HD-3870"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 630 (Desktop Kaby Lake)",
      "Rank": 356,
      "Benchmark": 5.07,
      "Samples": 103553,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/178724/IntelR-HD-Graphics-630"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "UHD Graphics 630 (Desktop Coffee Lake i3)",
      "Rank": 357,
      "Benchmark": 5.05,
      "Samples": 23471,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/359294/IntelR-UHD-Graphics-630"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7660D",
      "Rank": 358,
      "Benchmark": 5.04,
      "Samples": 6620,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7929/AMD-Radeon-HD-7660D"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 3700",
      "Rank": 359,
      "Benchmark": 5.04,
      "Samples": 997,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10901/NVIDIA-Quadro-FX-3700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7570",
      "Rank": 360,
      "Benchmark": 5.04,
      "Samples": 10320,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9639/AMD-Radeon-HD-7570"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 2800M",
      "Rank": 361,
      "Benchmark": 5.03,
      "Samples": 975,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8137/NVIDIA-Quadro-FX-2800M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "UHD Graphics 620 (Mobile Kaby Lake R)",
      "Rank": 362,
      "Benchmark": 5,
      "Samples": 305322,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/320744/IntelR-UHD-Graphics-620"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD P530 (Server Skylake)",
      "Rank": 363,
      "Benchmark": 4.97,
      "Samples": 4023,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/41039/IntelR-HD-Graphics-P530"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 730",
      "Rank": 364,
      "Benchmark": 4.96,
      "Samples": 126660,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12582/NVIDIA-GeForce-GT-730"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8800 GS",
      "Rank": 365,
      "Benchmark": 4.94,
      "Samples": 322,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7976/NVIDIA-GeForce-8800-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6750M",
      "Rank": 366,
      "Benchmark": 4.85,
      "Samples": 458,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7834/AMD-Radeon-HD-6750M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon 520",
      "Rank": 367,
      "Benchmark": 4.84,
      "Samples": 158,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/329613/RadeonTM-520"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTX 260M",
      "Rank": 368,
      "Benchmark": 4.77,
      "Samples": 973,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7979/NVIDIA-GeForce-GTX-260M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 530 (Desktop Skylake)",
      "Rank": 369,
      "Benchmark": 4.74,
      "Samples": 133796,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/33102/IntelR-HD-Graphics-530"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8650G",
      "Rank": 370,
      "Benchmark": 4.72,
      "Samples": 6887,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7910/AMD-Radeon-HD-8650G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6570",
      "Rank": 371,
      "Benchmark": 4.71,
      "Samples": 18650,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8207/AMD-Radeon-HD-6570"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 620 (Mobile Kaby Lake)",
      "Rank": 372,
      "Benchmark": 4.65,
      "Samples": 275589,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/153579/IntelR-HD-Graphics-620"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 445M",
      "Rank": 373,
      "Benchmark": 4.6,
      "Samples": 311,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/17578/NVIDIA-GeForce-GT-445M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6630M",
      "Rank": 374,
      "Benchmark": 4.52,
      "Samples": 2095,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9654/AMD-RadeonTM-HD-6630M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 555M",
      "Rank": 375,
      "Benchmark": 4.5,
      "Samples": 3834,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8224/NVIDIA-GeForce-GT-555M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 530 (Mobile Skylake)",
      "Rank": 376,
      "Benchmark": 4.5,
      "Samples": 158708,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/34955/IntelR-HD-Graphics-530"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "RX Vega 3 (Ryzen iGPU)",
      "Rank": 377,
      "Benchmark": 4.35,
      "Samples": 14608,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/511366/AMD-RadeonTM-Vega-3-Mobile-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 520 (Mobile Skylake)",
      "Rank": 378,
      "Benchmark": 4.31,
      "Samples": 256743,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/36797/IntelR-HD-Graphics-520"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7660G",
      "Rank": 379,
      "Benchmark": 4.29,
      "Samples": 3446,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8022/AMD-Radeon-HD-7660G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 3800",
      "Rank": 380,
      "Benchmark": 4.27,
      "Samples": 2736,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8529/ATI-Radeon-HD-3800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTS 360M",
      "Rank": 381,
      "Benchmark": 4.25,
      "Samples": 1004,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9128/NVIDIA-GeForce-GTS-360M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8800 GTS",
      "Rank": 382,
      "Benchmark": 4.18,
      "Samples": 2816,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7808/NVIDIA-GeForce-8800-GTS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 240",
      "Rank": 383,
      "Benchmark": 4.16,
      "Samples": 7488,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7947/NVIDIA-GeForce-GT-240"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 3870-X2 (Crossfire Disabled)",
      "Rank": 384,
      "Benchmark": 4.13,
      "Samples": 132,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10185/ATI-Mobility-Radeon-HD-3870-X2"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Mobility Radeon HD 5730",
      "Rank": 385,
      "Benchmark": 4.12,
      "Samples": 2206,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9994/ATI-Mobility-Radeon-HD-5730"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 5570",
      "Rank": 386,
      "Benchmark": 4.12,
      "Samples": 9950,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7686/AMD-Radeon-HD-5570"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7670M",
      "Rank": 387,
      "Benchmark": 4.1,
      "Samples": 841,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7810/AMD-Radeon-HD-7670M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 440",
      "Rank": 388,
      "Benchmark": 3.98,
      "Samples": 12229,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7783/NVIDIA-GeForce-GT-440"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7600M",
      "Rank": 389,
      "Benchmark": 3.98,
      "Samples": 6299,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9552/AMD-Radeon-HD-7600M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 4600",
      "Rank": 390,
      "Benchmark": 3.97,
      "Samples": 1091,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8232/NVIDIA-Quadro-FX-4600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 820M",
      "Rank": 391,
      "Benchmark": 3.94,
      "Samples": 7544,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9527/NVIDIA-GeForce-820M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 230",
      "Rank": 392,
      "Benchmark": 3.93,
      "Samples": 1260,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8245/NVIDIA-GeForce-GT-230"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9600 GT",
      "Rank": 393,
      "Benchmark": 3.93,
      "Samples": 15774,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7677/NVIDIA-GeForce-9600-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 720",
      "Rank": 394,
      "Benchmark": 3.9,
      "Samples": 12768,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12696/NVIDIA-GeForce-GT-720"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "NVS 5400M",
      "Rank": 395,
      "Benchmark": 3.83,
      "Samples": 1386,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7907/NVIDIA-NVS-5400M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Iris Pro HD 5100 (Mobile 1.1 GHz)",
      "Rank": 396,
      "Benchmark": 3.81,
      "Samples": 3666,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8813/IntelR-IrisTM-Graphics-5100"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 630",
      "Rank": 397,
      "Benchmark": 3.78,
      "Samples": 49885,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7766/NVIDIA-GeForce-GT-630"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 5500 (Mobile 0.95 GHz)",
      "Rank": 398,
      "Benchmark": 3.72,
      "Samples": 186274,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/16570/IntelR-HD-Graphics-5500"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9800M GTS",
      "Rank": 399,
      "Benchmark": 3.71,
      "Samples": 321,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12939/NVIDIA-GeForce-9800M-GTS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 4670",
      "Rank": 400,
      "Benchmark": 3.71,
      "Samples": 2041,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7888/ATI-Mobility-Radeon-HD-4670"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8610G",
      "Rank": 401,
      "Benchmark": 3.71,
      "Samples": 4169,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8531/AMD-Radeon-HD-8610G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8570D",
      "Rank": 402,
      "Benchmark": 3.68,
      "Samples": 6081,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9112/AMD-Radeon-HD-8570D"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT620M",
      "Rank": 403,
      "Benchmark": 3.67,
      "Samples": 761,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/13398/NVIDIA-GeForce-GT620M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 720M",
      "Rank": 404,
      "Benchmark": 3.66,
      "Samples": 3706,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7921/NVIDIA-GeForce-GT-720M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 710M",
      "Rank": 405,
      "Benchmark": 3.66,
      "Samples": 1973,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10751/NVIDIA-GeForce-710M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 550M",
      "Rank": 406,
      "Benchmark": 3.62,
      "Samples": 896,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8663/NVIDIA-GeForce-GT-550M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 635M",
      "Rank": 407,
      "Benchmark": 3.58,
      "Samples": 2812,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8120/NVIDIA-GeForce-GT-635M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 615 (Mobile Kaby Lake)",
      "Rank": 408,
      "Benchmark": 3.58,
      "Samples": 8936,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/193629/IntelR-HD-Graphics-615"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7650M",
      "Rank": 409,
      "Benchmark": 3.56,
      "Samples": 483,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10887/AMD-Radeon-HD-7650M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7500M",
      "Rank": 410,
      "Benchmark": 3.54,
      "Samples": 11619,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8602/AMD-Radeon-HD-7500M7600M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6550D",
      "Rank": 411,
      "Benchmark": 3.52,
      "Samples": 3191,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9223/AMD-Radeon-HD-6550D"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K1000M",
      "Rank": 412,
      "Benchmark": 3.52,
      "Samples": 4166,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7800/NVIDIA-Quadro-K1000M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7560D",
      "Rank": 413,
      "Benchmark": 3.49,
      "Samples": 7637,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8826/AMD-Radeon-HD-7560D"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro K600",
      "Rank": 414,
      "Benchmark": 3.48,
      "Samples": 7035,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8080/NVIDIA-Quadro-K600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 1800",
      "Rank": 415,
      "Benchmark": 3.46,
      "Samples": 5761,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7957/NVIDIA-Quadro-FX-1800"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GTS 250M",
      "Rank": 416,
      "Benchmark": 3.46,
      "Samples": 253,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8494/NVIDIA-GeForce-GTS-250M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 530",
      "Rank": 417,
      "Benchmark": 3.43,
      "Samples": 4043,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8407/NVIDIA-GeForce-GT-530"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 710",
      "Rank": 418,
      "Benchmark": 3.4,
      "Samples": 126601,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/77649/NVIDIA-GeForce-GT-710"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro 1000M",
      "Rank": 419,
      "Benchmark": 3.39,
      "Samples": 5309,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7836/NVIDIA-Quadro-1000M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 630M",
      "Rank": 420,
      "Benchmark": 3.39,
      "Samples": 6576,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7814/NVIDIA-GeForce-GT-630M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT625M",
      "Rank": 421,
      "Benchmark": 3.37,
      "Samples": 33,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/25295/NVIDIA-GeForce-GT625M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 320",
      "Rank": 422,
      "Benchmark": 3.36,
      "Samples": 1835,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11866/NVIDIA-GeForce-GT-320"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "NVS 5200M",
      "Rank": 423,
      "Benchmark": 3.35,
      "Samples": 2265,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7691/NVIDIA-NVS-5200M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9800M-GS",
      "Rank": 424,
      "Benchmark": 3.31,
      "Samples": 203,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9719/NVIDIA-GeForce-9800M-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 4670",
      "Rank": 425,
      "Benchmark": 3.28,
      "Samples": 14954,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8077/ATI-Radeon-HD-4600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 430",
      "Rank": 426,
      "Benchmark": 3.28,
      "Samples": 19056,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7745/NVIDIA-GeForce-GT-430"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "NVS 510",
      "Rank": 427,
      "Benchmark": 3.27,
      "Samples": 1701,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10074/NVIDIA-NVS-510"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8550G",
      "Rank": 428,
      "Benchmark": 3.22,
      "Samples": 2344,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7799/AMD-Radeon-HD-8550G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 435M",
      "Rank": 429,
      "Benchmark": 3.21,
      "Samples": 543,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8260/NVIDIA-GeForce-GT-435M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro 600",
      "Rank": 430,
      "Benchmark": 3.18,
      "Samples": 12711,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8084/NVIDIA-Quadro-600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 515 (Mobile Skylake)",
      "Rank": 431,
      "Benchmark": 3.18,
      "Samples": 7654,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/38173/IntelR-HD-Graphics-515"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD P4000 (Server 1.25 GHz)",
      "Rank": 432,
      "Benchmark": 3.14,
      "Samples": 594,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8592/IntelR-HD-Graphics-P4000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 5000 (Mobile 1.0/1.1 GHz)",
      "Rank": 433,
      "Benchmark": 3.14,
      "Samples": 6003,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8536/IntelR-HD-Graphics-5000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 540M",
      "Rank": 434,
      "Benchmark": 3.12,
      "Samples": 12526,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8006/NVIDIA-GeForce-GT-540M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 3600M",
      "Rank": 435,
      "Benchmark": 3.09,
      "Samples": 107,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9773/NVIDIA-Quadro-FX-3600M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6500M",
      "Rank": 436,
      "Benchmark": 3.09,
      "Samples": 9636,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7936/AMD-Radeon-HD-6500M56005700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8510G",
      "Rank": 437,
      "Benchmark": 3.08,
      "Samples": 2049,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9309/AMD-Radeon-HD-8510G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 5500",
      "Rank": 438,
      "Benchmark": 3.08,
      "Samples": 4600,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8853/AMD-Radeon-HD-5500"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7610M",
      "Rank": 439,
      "Benchmark": 3.05,
      "Samples": 293,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11031/AMD-Radeon-HD-7610M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD Graphics P4600",
      "Rank": 440,
      "Benchmark": 3.02,
      "Samples": 1920,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/18483/IntelR-HD-Graphics-P4600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7640G",
      "Rank": 441,
      "Benchmark": 2.97,
      "Samples": 6533,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7903/AMD-Radeon-HD-7640G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 4650",
      "Rank": 442,
      "Benchmark": 2.89,
      "Samples": 1571,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7844/ATI-Radeon-HD-4650"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 4650",
      "Rank": 443,
      "Benchmark": 2.86,
      "Samples": 4914,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7667/ATI-Mobility-Radeon-HD-4650"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 4000 (Desktop 1.15 GHz)",
      "Rank": 444,
      "Benchmark": 2.83,
      "Samples": 43041,
      "URL": "https://gpu.userbenchmark.com/Intel-HD-4000-Desktop-115-GHz/Rating/2169"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 1800M",
      "Rank": 445,
      "Benchmark": 2.83,
      "Samples": 1029,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7771/NVIDIA-Quadro-FX-1800M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6620G",
      "Rank": 446,
      "Benchmark": 2.81,
      "Samples": 2827,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8118/AMD-Radeon-HD-6620G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8470D",
      "Rank": 447,
      "Benchmark": 2.8,
      "Samples": 6752,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9693/AMD-Radeon-HD-8470D"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7600G",
      "Rank": 448,
      "Benchmark": 2.79,
      "Samples": 1391,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12867/AMD-Radeon-HD-7600G---7500M7600M-Dual-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 4600 (Desktop 1.25 GHz)",
      "Rank": 449,
      "Benchmark": 2.76,
      "Samples": 200687,
      "URL": "https://gpu.userbenchmark.com/Intel-HD-4600-Desktop-125-GHz/Rating/2168"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 335M",
      "Rank": 450,
      "Benchmark": 2.75,
      "Samples": 733,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10735/NVIDIA-GeForce-GT-335M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7540D",
      "Rank": 451,
      "Benchmark": 2.74,
      "Samples": 3413,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7756/AMD-Radeon-HD-7540D"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 425M",
      "Rank": 452,
      "Benchmark": 2.71,
      "Samples": 2487,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7792/NVIDIA-GeForce-GT-425M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 4600 (Mobile 1.15 GHz)",
      "Rank": 453,
      "Benchmark": 2.7,
      "Samples": 213141,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7676/IntelR-HD-Graphics-4600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 2700M",
      "Rank": 454,
      "Benchmark": 2.65,
      "Samples": 712,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7747/NVIDIA-Quadro-FX-2700M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 610 (Desktop Kaby Lake)",
      "Rank": 455,
      "Benchmark": 2.6,
      "Samples": 10543,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/225196/IntelR-HD-Graphics-610"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 4000 (Mobile 1.25 GHz)",
      "Rank": 456,
      "Benchmark": 2.59,
      "Samples": 367069,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7653/IntelR-HD-Graphics-4000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 130",
      "Rank": 457,
      "Benchmark": 2.55,
      "Samples": 212,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12240/NVIDIA-GeForce-GT-130"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 525M",
      "Rank": 458,
      "Benchmark": 2.5,
      "Samples": 7943,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8869/NVIDIA-GeForce-GT-525M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 420M",
      "Rank": 459,
      "Benchmark": 2.48,
      "Samples": 1623,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8926/NVIDIA-GeForce-GT-420M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Core M HD 5300",
      "Rank": 460,
      "Benchmark": 2.44,
      "Samples": 6836,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/16575/IntelR-HD-Graphics-5300"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 4400 (Desktop 1.15 GHz)",
      "Rank": 461,
      "Benchmark": 2.4,
      "Samples": 50555,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8064/IntelR-HD-Graphics-4400"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7520G",
      "Rank": 462,
      "Benchmark": 2.38,
      "Samples": 4185,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8569/AMD-Radeon-HD-7520G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6530D",
      "Rank": 463,
      "Benchmark": 2.36,
      "Samples": 3773,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7795/AMD-Radeon-HD-6530D"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 510 (Desktop Skylake)",
      "Rank": 464,
      "Benchmark": 2.28,
      "Samples": 11757,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/38088/IntelR-HD-Graphics-510"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "UHD Graphics 605",
      "Rank": 465,
      "Benchmark": 2.26,
      "Samples": 8759,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/487064/IntelR-UHD-Graphics-605"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "NVS 5100M",
      "Rank": 466,
      "Benchmark": 2.26,
      "Samples": 1663,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8318/NVIDIA-NVS-5100M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 220",
      "Rank": 467,
      "Benchmark": 2.25,
      "Samples": 14978,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7737/NVIDIA-GeForce-GT-220"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 4400 (Mobile 1.0/1.1 GHz)",
      "Rank": 468,
      "Benchmark": 2.24,
      "Samples": 221590,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7668/IntelR-HD-Graphics-Family"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 620",
      "Rank": 469,
      "Benchmark": 2.22,
      "Samples": 13035,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8899/NVIDIA-GeForce-GT-620"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 240M",
      "Rank": 470,
      "Benchmark": 2.22,
      "Samples": 2216,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8596/NVIDIA-GeForce-GT-240M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 880M",
      "Rank": 471,
      "Benchmark": 2.21,
      "Samples": 4246,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7780/NVIDIA-Quadro-FX-880M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 330M",
      "Rank": 472,
      "Benchmark": 2.17,
      "Samples": 6715,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7739/NVIDIA-GeForce-GT-330M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6520G",
      "Rank": 473,
      "Benchmark": 2.12,
      "Samples": 7076,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7806/AMD-Radeon-HD-6520G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 520MX",
      "Rank": 474,
      "Benchmark": 2.1,
      "Samples": 1465,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8048/NVIDIA-GeForce-GT-520MX"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9700M GT",
      "Rank": 475,
      "Benchmark": 2.09,
      "Samples": 259,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12102/NVIDIA-GeForce-9700M-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7500G",
      "Rank": 476,
      "Benchmark": 2.05,
      "Samples": 1100,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9442/AMD-Radeon-HD-7500G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 705",
      "Rank": 477,
      "Benchmark": 2.03,
      "Samples": 3765,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/13024/NVIDIA-GeForce-GT-705"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 230M",
      "Rank": 478,
      "Benchmark": 2.02,
      "Samples": 2599,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8017/NVIDIA-GeForce-GT-230M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon  HD 6490M",
      "Rank": 479,
      "Benchmark": 2,
      "Samples": 389,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7775/Radeon-TM-HD-6490M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8600 GTS",
      "Rank": 480,
      "Benchmark": 1.99,
      "Samples": 2357,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8311/NVIDIA-GeForce-8600-GTS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 130M",
      "Rank": 481,
      "Benchmark": 1.99,
      "Samples": 606,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9306/NVIDIA-GeForce-GT-130M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7800 GT",
      "Rank": 482,
      "Benchmark": 1.99,
      "Samples": 224,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8420/NVIDIA-GeForce-7800-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 610M",
      "Rank": 483,
      "Benchmark": 1.98,
      "Samples": 4274,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8250/NVIDIA-GeForce-610M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7470M",
      "Rank": 484,
      "Benchmark": 1.98,
      "Samples": 414,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9296/AMD-Radeon-HD-7470M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 7470",
      "Rank": 485,
      "Benchmark": 1.97,
      "Samples": 10322,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8681/AMD-Radeon-HD-7000-series"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8370D",
      "Rank": 486,
      "Benchmark": 1.94,
      "Samples": 4641,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10640/AMD-Radeon-HD-8370D"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 3000 (Desktop V2 1.35 GHz)",
      "Rank": 487,
      "Benchmark": 1.92,
      "Samples": 4990,
      "URL": "https://gpu.userbenchmark.com/Intel-HD-3000-Desktop-V2-135-GHz/Rating/2170"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon R5",
      "Rank": 488,
      "Benchmark": 1.91,
      "Samples": 36325,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12264/AMD-RadeonTM-R5-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7400M",
      "Rank": 489,
      "Benchmark": 1.88,
      "Samples": 4174,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7817/AMD-Radeon-HD-7400M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro 400",
      "Rank": 490,
      "Benchmark": 1.88,
      "Samples": 916,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9363/NVIDIA-Quadro-400"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6470M",
      "Rank": 491,
      "Benchmark": 1.88,
      "Samples": 4257,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7679/AMD-Radeon-HD-6470M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9500 GS",
      "Rank": 492,
      "Benchmark": 1.86,
      "Samples": 1244,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11103/NVIDIA-GeForce-9500-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7480D",
      "Rank": 493,
      "Benchmark": 1.86,
      "Samples": 6709,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7856/AMD-Radeon-HD-7480D"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 520",
      "Rank": 494,
      "Benchmark": 1.83,
      "Samples": 14623,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7768/NVIDIA-GeForce-GT-520"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 2600-XT",
      "Rank": 495,
      "Benchmark": 1.81,
      "Samples": 1717,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7897/ATI-Radeon-HD-2600-XT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "NVS 4200M",
      "Rank": 496,
      "Benchmark": 1.8,
      "Samples": 5876,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7966/NVIDIA-NVS-4200M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 610",
      "Rank": 497,
      "Benchmark": 1.8,
      "Samples": 46028,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7736/NVIDIA-GeForce-GT-610"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 770M",
      "Rank": 498,
      "Benchmark": 1.79,
      "Samples": 781,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7999/NVIDIA-Quadro-FX-770M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 3000 (Mobile V2 1.3 GHz)",
      "Rank": 499,
      "Benchmark": 1.77,
      "Samples": 91694,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7647/IntelR-HD-Graphics-3000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 4200 (Mobile 0.85 GHz)",
      "Rank": 500,
      "Benchmark": 1.76,
      "Samples": 3015,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8662/IntelR-HD-Graphics-Family"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9650M-GT",
      "Rank": 501,
      "Benchmark": 1.76,
      "Samples": 313,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9295/NVIDIA-GeForce-9650M-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 520M",
      "Rank": 502,
      "Benchmark": 1.75,
      "Samples": 4661,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8308/NVIDIA-GeForce-GT-520M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 420",
      "Rank": 503,
      "Benchmark": 1.74,
      "Samples": 7342,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10183/NVIDIA-GeForce-GT-420"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 2600",
      "Rank": 504,
      "Benchmark": 1.73,
      "Samples": 6,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11511/ATI-Radeon-HD-26003600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 320M",
      "Rank": 505,
      "Benchmark": 1.73,
      "Samples": 485,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9153/NVIDIA-GeForce-320M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 220M",
      "Rank": 506,
      "Benchmark": 1.72,
      "Samples": 860,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11828/NVIDIA-GeForce-GT-220M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6480G",
      "Rank": 507,
      "Benchmark": 1.7,
      "Samples": 4076,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8221/AMD-RadeonTM-HD-6480G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7450",
      "Rank": 508,
      "Benchmark": 1.68,
      "Samples": 8710,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8053/AMD-RadeonTM-HD-7450"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 1600M",
      "Rank": 509,
      "Benchmark": 1.67,
      "Samples": 385,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8782/NVIDIA-Quadro-FX-1600M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6450",
      "Rank": 510,
      "Benchmark": 1.66,
      "Samples": 24214,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7821/AMD-Radeon-HD-6450"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9500 GT",
      "Rank": 511,
      "Benchmark": 1.61,
      "Samples": 23165,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7816/NVIDIA-GeForce-9500-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 3000 (Desktop V1 1.1 GHz)",
      "Rank": 512,
      "Benchmark": 1.61,
      "Samples": 7074,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7649/IntelR-HD-Graphics-3000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 3000 (Mobile V1 1.1/1.2 GHz)",
      "Rank": 513,
      "Benchmark": 1.57,
      "Samples": 171652,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7646/IntelR-HD-Graphics-3000"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon R3 Graphics",
      "Rank": 514,
      "Benchmark": 1.57,
      "Samples": 5415,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12440/AMD-RadeonTM-R3-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 3670",
      "Rank": 515,
      "Benchmark": 1.56,
      "Samples": 366,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10736/ATI-Mobility-Radeon-HD-3670"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7400G",
      "Rank": 516,
      "Benchmark": 1.55,
      "Samples": 333,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10815/AMD-Radeon-HD-7400G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "UHD Graphics 600",
      "Rank": 517,
      "Benchmark": 1.55,
      "Samples": 17981,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/407837/IntelR-UHD-Graphics-600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7900 GTX",
      "Rank": 518,
      "Benchmark": 1.54,
      "Samples": 182,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10625/NVIDIA-GeForce-7900-GTX"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9600M-GT",
      "Rank": 519,
      "Benchmark": 1.54,
      "Samples": 3634,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7707/NVIDIA-GeForce-9600M-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8400-R3",
      "Rank": 520,
      "Benchmark": 1.53,
      "Samples": 10035,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11160/AMD-Radeon-HD-8400--R3"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro NVS 320M",
      "Rank": 521,
      "Benchmark": 1.52,
      "Samples": 155,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8310/NVIDIA-Quadro-NVS-320M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "HD 3650",
      "Rank": 522,
      "Benchmark": 1.52,
      "Samples": 3726,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7982/ATI-Radeon-HD-3600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6410D",
      "Rank": 523,
      "Benchmark": 1.51,
      "Samples": 2528,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8199/AMD-Radeon-HD-6410D"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 580",
      "Rank": 524,
      "Benchmark": 1.51,
      "Samples": 4741,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7761/NVIDIA-Quadro-FX-580"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 2600-XT",
      "Rank": 525,
      "Benchmark": 1.5,
      "Samples": 254,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9915/ATI-Mobility-Radeon-HD-2600-XT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9600M-GS",
      "Rank": 526,
      "Benchmark": 1.5,
      "Samples": 942,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9821/NVIDIA-GeForce-9600M-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD Graphics (G4 Pentium/Celeron 1.05/1.15 GHz)",
      "Rank": 527,
      "Benchmark": 1.46,
      "Samples": 32646,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7701/IntelR-HD-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 410M",
      "Rank": 528,
      "Benchmark": 1.42,
      "Samples": 3873,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9169/NVIDIA-GeForce-410M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 8330",
      "Rank": 529,
      "Benchmark": 1.38,
      "Samples": 7406,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8155/AMD-Radeon-HD-8330"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8600 GT",
      "Rank": 530,
      "Benchmark": 1.37,
      "Samples": 8029,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7659/NVIDIA-GeForce-8600-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility FireGL V5700",
      "Rank": 531,
      "Benchmark": 1.37,
      "Samples": 170,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10460/ATI-Mobility-FireGL-V5700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 570M",
      "Rank": 532,
      "Benchmark": 1.35,
      "Samples": 408,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9414/NVIDIA-Quadro-FX-570M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "NVS 310",
      "Rank": 533,
      "Benchmark": 1.32,
      "Samples": 3757,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10691/NVIDIA-NVS-310"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 2600-PRO",
      "Rank": 534,
      "Benchmark": 1.29,
      "Samples": 1604,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8524/ATI-Radeon-HD-2600-PRO"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 415M",
      "Rank": 535,
      "Benchmark": 1.28,
      "Samples": 75,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/16834/NVIDIA-GeForce-GT-415M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 2500 (Desktop 1.05 GHz)",
      "Rank": 536,
      "Benchmark": 1.24,
      "Samples": 113047,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7696/IntelR-HD-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 545v",
      "Rank": 537,
      "Benchmark": 1.23,
      "Samples": 610,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8734/ATI-Mobility-Radeon-HD-545v"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 1700",
      "Rank": 538,
      "Benchmark": 1.23,
      "Samples": 2282,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9158/NVIDIA-Quadro-FX-1700"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 3650",
      "Rank": 539,
      "Benchmark": 1.23,
      "Samples": 2492,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7902/ATI-Mobility-Radeon-HD-3650"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8600M GT",
      "Rank": 540,
      "Benchmark": 1.21,
      "Samples": 1941,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8081/NVIDIA-GeForce-8600M-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD Graphics (G3 Pentium/Celeron 1.0/1.1 GHz)",
      "Rank": 541,
      "Benchmark": 1.17,
      "Samples": 24659,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7695/IntelR-HD-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 4570",
      "Rank": 542,
      "Benchmark": 1.14,
      "Samples": 371,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7827/ATI-Mobility-Radeon-HD-4570"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 2600",
      "Rank": 543,
      "Benchmark": 1.13,
      "Samples": 896,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10285/ATI-Mobility-Radeon-HD-2600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6370M",
      "Rank": 544,
      "Benchmark": 1.11,
      "Samples": 683,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10005/AMD-Radeon-HD-6370M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 8240",
      "Rank": 545,
      "Benchmark": 1.1,
      "Samples": 3340,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9779/AMD-Radeon-HD-8240"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 6370",
      "Rank": 546,
      "Benchmark": 1.1,
      "Samples": 314,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11239/ATI-Mobility-Radeon-HD-6370"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 4550",
      "Rank": 547,
      "Benchmark": 1.07,
      "Samples": 3137,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8944/ATI-Radeon-HD-4550"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7800 GTX",
      "Rank": 548,
      "Benchmark": 1.06,
      "Samples": 198,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12348/NVIDIA-GeForce-7800-GTX"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 4500",
      "Rank": 549,
      "Benchmark": 1.05,
      "Samples": 8346,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7949/ATI-Mobility-Radeon-HD-45005100"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce GT 320M",
      "Rank": 550,
      "Benchmark": 1.02,
      "Samples": 1334,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7796/NVIDIA-GeForce-GT-320M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 4200",
      "Rank": 551,
      "Benchmark": 1.01,
      "Samples": 9257,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8091/ATI-Radeon-HD-4200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 4500",
      "Rank": 552,
      "Benchmark": 1.01,
      "Samples": 295,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8032/NVIDIA-Quadro-FX-4500"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7900 GS",
      "Rank": 553,
      "Benchmark": 1,
      "Samples": 553,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8541/NVIDIA-GeForce-7900-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6300M",
      "Rank": 554,
      "Benchmark": 0.98,
      "Samples": 2586,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9894/AMD-Radeon-HD-6300M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 310M",
      "Rank": 555,
      "Benchmark": 0.96,
      "Samples": 7196,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8049/NVIDIA-GeForce-310M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7350",
      "Rank": 556,
      "Benchmark": 0.95,
      "Samples": 1371,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12157/AMD-Radeon-HD-7350"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce G210M",
      "Rank": 557,
      "Benchmark": 0.95,
      "Samples": 1256,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8875/NVIDIA-GeForce-G210M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 315M",
      "Rank": 558,
      "Benchmark": 0.95,
      "Samples": 2624,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10068/NVIDIA-GeForce-315M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 3500",
      "Rank": 559,
      "Benchmark": 0.95,
      "Samples": 559,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10152/NVIDIA-Quadro-FX-3500"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6350",
      "Rank": 560,
      "Benchmark": 0.93,
      "Samples": 2568,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10261/AMD-Radeon-HD-6350"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 310",
      "Rank": 561,
      "Benchmark": 0.92,
      "Samples": 3362,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9197/NVIDIA-GeForce-310"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 5470",
      "Rank": 562,
      "Benchmark": 0.92,
      "Samples": 13606,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7794/ATI-Mobility-Radeon-HD-5470"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 380",
      "Rank": 563,
      "Benchmark": 0.89,
      "Samples": 1064,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8914/NVIDIA-Quadro-FX-380"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 4300",
      "Rank": 564,
      "Benchmark": 0.88,
      "Samples": 12202,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7860/ATI-Radeon-HD-43004500"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 4350",
      "Rank": 565,
      "Benchmark": 0.88,
      "Samples": 1626,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9335/ATI-Mobility-Radeon-HD-43004500"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "FirePro 2270",
      "Rank": 566,
      "Benchmark": 0.88,
      "Samples": 417,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7813/AMD-FirePro-2270"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9400 GT",
      "Rank": 567,
      "Benchmark": 0.88,
      "Samples": 11125,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7963/NVIDIA-GeForce-9400-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "NVS 300",
      "Rank": 568,
      "Benchmark": 0.86,
      "Samples": 2150,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8966/NVIDIA-NVS-300"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce G210",
      "Rank": 569,
      "Benchmark": 0.85,
      "Samples": 3445,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11784/NVIDIA-GeForce-G210"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 530v",
      "Rank": 570,
      "Benchmark": 0.85,
      "Samples": 228,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10176/ATI-Mobility-Radeon-HD-530v"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "NVS 3100M",
      "Rank": 571,
      "Benchmark": 0.84,
      "Samples": 8516,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7837/NVIDIA-NVS-3100M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7340",
      "Rank": 572,
      "Benchmark": 0.84,
      "Samples": 3572,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8996/AMD-Radeon-HD-7340-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8400 GS",
      "Rank": 573,
      "Benchmark": 0.83,
      "Samples": 16961,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7917/NVIDIA-GeForce-8400-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 305M",
      "Rank": 574,
      "Benchmark": 0.82,
      "Samples": 41,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10705/NVIDIA-GeForce-305M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 5450",
      "Rank": 575,
      "Benchmark": 0.82,
      "Samples": 49294,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7719/AMD-Radeon-HD-5450"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 5400",
      "Rank": 576,
      "Benchmark": 0.81,
      "Samples": 8393,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8063/ATI-Radeon-HD-5400"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 4300",
      "Rank": 577,
      "Benchmark": 0.81,
      "Samples": 2540,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8572/ATI-Mobility-Radeon-HD-4300"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "HD 8210",
      "Rank": 578,
      "Benchmark": 0.79,
      "Samples": 4077,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7831/AMD-Radeon-HD-8210"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 210",
      "Rank": 579,
      "Benchmark": 0.77,
      "Samples": 63766,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7740/NVIDIA-GeForce-210"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce Go 7900",
      "Rank": 580,
      "Benchmark": 0.77,
      "Samples": 104,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9175/NVIDIA-GeForce-Go-7900-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 3200",
      "Rank": 581,
      "Benchmark": 0.77,
      "Samples": 4679,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8532/ATI-Radeon-HD-3200-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6320",
      "Rank": 582,
      "Benchmark": 0.77,
      "Samples": 6546,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8103/AMD-Radeon-HD-6320-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8600M GS",
      "Rank": 583,
      "Benchmark": 0.74,
      "Samples": 858,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8192/NVIDIA-GeForce-8600M-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 4250",
      "Rank": 584,
      "Benchmark": 0.73,
      "Samples": 9459,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8680/ATI-Mobility-Radeon-HD-4250"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9400M",
      "Rank": 585,
      "Benchmark": 0.73,
      "Samples": 531,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7998/NVIDIA-GeForce-9400M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7600 GT",
      "Rank": 586,
      "Benchmark": 0.72,
      "Samples": 1157,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8028/NVIDIA-GeForce-7600-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 4250",
      "Rank": 587,
      "Benchmark": 0.71,
      "Samples": 5510,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7965/ATI-Radeon-HD-4250"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon 3000 Graphics",
      "Rank": 588,
      "Benchmark": 0.71,
      "Samples": 17832,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7853/ATI-Radeon-3000-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8500 GT",
      "Rank": 589,
      "Benchmark": 0.7,
      "Samples": 4865,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7777/NVIDIA-GeForce-8500-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "ION",
      "Rank": 590,
      "Benchmark": 0.67,
      "Samples": 1543,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7884/NVIDIA-ION"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7800 GS",
      "Rank": 591,
      "Benchmark": 0.66,
      "Samples": 38,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11875/NVIDIA-GeForce-7800-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 570",
      "Rank": 592,
      "Benchmark": 0.66,
      "Samples": 1255,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8189/NVIDIA-Quadro-FX-570"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 7310",
      "Rank": 593,
      "Benchmark": 0.66,
      "Samples": 6396,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9174/AMD-Radeon-HD-7310-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD Graphics (G2 Pentium/Celeron 1.1/1.15 GHz)",
      "Rank": 594,
      "Benchmark": 0.66,
      "Samples": 40163,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7699/IntelR-HD-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6310",
      "Rank": 595,
      "Benchmark": 0.65,
      "Samples": 11240,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7807/AMD-Radeon-HD-6310-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8400M GT",
      "Rank": 596,
      "Benchmark": 0.65,
      "Samples": 348,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10523/NVIDIA-GeForce-8400M-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce G105M",
      "Rank": 597,
      "Benchmark": 0.65,
      "Samples": 2198,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8400/NVIDIA-GeForce-G105M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD Graphics (Clarkdale 0.733/0.9 GHz)",
      "Rank": 598,
      "Benchmark": 0.64,
      "Samples": 21564,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7702/IntelR-HD-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 3400",
      "Rank": 599,
      "Benchmark": 0.64,
      "Samples": 6030,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8480/ATI-Mobility-Radeon-HD-3400"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD 2000 (Desktop 1.1 GHz)",
      "Rank": 600,
      "Benchmark": 0.64,
      "Samples": 123895,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7697/IntelR-HD-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD Graphics (Bay Trail 0.667 - 0.854 GHz)",
      "Rank": 601,
      "Benchmark": 0.63,
      "Samples": 64568,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7698/IntelR-HD-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Q45/Q43 Express Chipset",
      "Rank": 602,
      "Benchmark": 0.62,
      "Samples": 12531,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8195/IntelR-Q45Q43-Express-Chipset"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "G41 Express Chipset",
      "Rank": 603,
      "Benchmark": 0.6,
      "Samples": 24177,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7732/IntelR-G41-Express-Chipset"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 3450",
      "Rank": 604,
      "Benchmark": 0.59,
      "Samples": 3890,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7779/ATI-Radeon-HD-3450---Dell-Optiplex"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "G45/G43 Express Chipset",
      "Rank": 605,
      "Benchmark": 0.58,
      "Samples": 5970,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7728/IntelR-G45G43-Express-Chipset"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro NVS 290",
      "Rank": 606,
      "Benchmark": 0.58,
      "Samples": 1650,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8083/NVIDIA-Quadro-NVS-290"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 4290",
      "Rank": 607,
      "Benchmark": 0.58,
      "Samples": 981,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7847/ATI-Radeon-HD-4290"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 3300",
      "Rank": 608,
      "Benchmark": 0.57,
      "Samples": 830,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7899/ATI-Radeon-HD-3300-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 1500",
      "Rank": 609,
      "Benchmark": 0.57,
      "Samples": 461,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11831/NVIDIA-Quadro-FX-1500"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro NVS 140M",
      "Rank": 610,
      "Benchmark": 0.55,
      "Samples": 853,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7946/NVIDIA-Quadro-NVS-140M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9300M GS",
      "Rank": 611,
      "Benchmark": 0.54,
      "Samples": 2411,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7759/NVIDIA-GeForce-9300M-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro NVS 160M",
      "Rank": 612,
      "Benchmark": 0.54,
      "Samples": 1517,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8249/NVIDIA-Quadro-NVS-160M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7600 GS",
      "Rank": 613,
      "Benchmark": 0.52,
      "Samples": 1156,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11979/NVIDIA-GeForce-7600-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro NVS 295",
      "Rank": 614,
      "Benchmark": 0.52,
      "Samples": 1548,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/12626/NVIDIA-Quadro-NVS-295"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6290",
      "Rank": 615,
      "Benchmark": 0.52,
      "Samples": 2138,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7803/AMD-Radeon-HD-6290-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6250M",
      "Rank": 616,
      "Benchmark": 0.51,
      "Samples": 41,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/13446/AMD-Radeon-HD-6250M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "HD Graphics (Arrandale 0.667/0.766 GHz)",
      "Rank": 617,
      "Benchmark": 0.51,
      "Samples": 81512,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7694/IntelR-HD-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8400M GS",
      "Rank": 618,
      "Benchmark": 0.51,
      "Samples": 2213,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8560/NVIDIA-GeForce-8400M-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "4 Series Internal Chipset",
      "Rank": 619,
      "Benchmark": 0.5,
      "Samples": 1248,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9993/IntelR-4-Series-Internal-Chipset"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9200M GS",
      "Rank": 620,
      "Benchmark": 0.49,
      "Samples": 1004,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9090/NVIDIA-GeForce-9200M-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro NVS 450",
      "Rank": 621,
      "Benchmark": 0.49,
      "Samples": 559,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7791/NVIDIA-Quadro-NVS-450"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon X1650",
      "Rank": 622,
      "Benchmark": 0.48,
      "Samples": 693,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10866/Radeon-X1650"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 9300 GS",
      "Rank": 623,
      "Benchmark": 0.48,
      "Samples": 405,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10867/NVIDIA-GeForce-9300-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon HD 2400-PRO",
      "Rank": 624,
      "Benchmark": 0.46,
      "Samples": 2613,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8931/ATI-Radeon-HD-2400-PRO"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon HD 6250",
      "Rank": 625,
      "Benchmark": 0.45,
      "Samples": 1522,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8472/AMD-Radeon-HD-6250-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Mobile Series 4 Express Chipset Family",
      "Rank": 626,
      "Benchmark": 0.44,
      "Samples": 22874,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7651/Mobile-IntelR-4-Series-Express-Chipset-Family"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "FirePro 2260",
      "Rank": 627,
      "Benchmark": 0.43,
      "Samples": 322,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9852/ATI-FirePro-2260"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon HD 2400",
      "Rank": 628,
      "Benchmark": 0.41,
      "Samples": 573,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8548/ATI-Mobility-Radeon-HD-2400"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon X1600",
      "Rank": 629,
      "Benchmark": 0.41,
      "Samples": 932,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9407/Radeon-X1600-Series"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8200",
      "Rank": 630,
      "Benchmark": 0.41,
      "Samples": 1015,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11915/NVIDIA-GeForce-8200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro FX 3450/4000 SDI",
      "Rank": 631,
      "Benchmark": 0.37,
      "Samples": 403,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/13072/NVIDIA-Quadro-FX-34504000-SDI"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce Go 7600",
      "Rank": 632,
      "Benchmark": 0.36,
      "Samples": 369,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7872/NVIDIA-GeForce-Go-7600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Radeon 3100 Graphics",
      "Rank": 633,
      "Benchmark": 0.35,
      "Samples": 1095,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9910/ATI-Radeon-3100-Graphics"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7300 GT",
      "Rank": 634,
      "Benchmark": 0.35,
      "Samples": 1453,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8156/NVIDIA-GeForce-7300-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon X1600",
      "Rank": 635,
      "Benchmark": 0.34,
      "Samples": 403,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8748/ATI-Mobility-Radeon-X1600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "MOBILITY FireGL V5250",
      "Rank": 636,
      "Benchmark": 0.32,
      "Samples": 39,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8385/ATI-MOBILITY-FireGL-V5250"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 6600 GT",
      "Rank": 637,
      "Benchmark": 0.31,
      "Samples": 547,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8656/NVIDIA-GeForce-6600-GT"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8400M G",
      "Rank": 638,
      "Benchmark": 0.3,
      "Samples": 291,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9009/NVIDIA-GeForce-8400M-G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro NVS 135M",
      "Rank": 639,
      "Benchmark": 0.3,
      "Samples": 574,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7758/NVIDIA-Quadro-NVS-135M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 8200M G",
      "Rank": 640,
      "Benchmark": 0.29,
      "Samples": 1318,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7912/NVIDIA-GeForce-8200M-G"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 6600",
      "Rank": 641,
      "Benchmark": 0.24,
      "Samples": 831,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8606/NVIDIA-GeForce-6600"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7300 GS",
      "Rank": 642,
      "Benchmark": 0.18,
      "Samples": 882,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7782/NVIDIA-GeForce-7300-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce Go 7400",
      "Rank": 643,
      "Benchmark": 0.17,
      "Samples": 381,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8618/NVIDIA-GeForce-Go-7400"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon X1300",
      "Rank": 644,
      "Benchmark": 0.17,
      "Samples": 1427,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9011/Radeon-X1300X1550-Series"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "AMD",
      "Model": "Radeon X1550",
      "Rank": 645,
      "Benchmark": 0.17,
      "Samples": 705,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11538/Radeon-X1550-64-bit"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon X2300",
      "Rank": 646,
      "Benchmark": 0.15,
      "Samples": 361,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8306/ATI-Mobility-Radeon-X2300"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7300 LE",
      "Rank": 647,
      "Benchmark": 0.15,
      "Samples": 1436,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7971/NVIDIA-GeForce-7300-LE"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon X1400",
      "Rank": 648,
      "Benchmark": 0.13,
      "Samples": 441,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7829/ATI-Mobility-Radeon-X1400"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce Go 7300",
      "Rank": 649,
      "Benchmark": 0.13,
      "Samples": 569,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7778/NVIDIA-GeForce-Go-7300"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "ATI",
      "Model": "Mobility Radeon X1300",
      "Rank": 650,
      "Benchmark": 0.12,
      "Samples": 343,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11505/ATI-Mobility-Radeon-X1300"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "Quadro NVS 440",
      "Rank": 651,
      "Benchmark": 0.11,
      "Samples": 102,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10103/NVIDIA-Quadro-NVS-440"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7300 SE",
      "Rank": 652,
      "Benchmark": 0.08,
      "Samples": 1923,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8767/NVIDIA-GeForce-7300-SE7200-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7100 GS",
      "Rank": 653,
      "Benchmark": 0.08,
      "Samples": 623,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/11594/NVIDIA-GeForce-7100-GS"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7100 / nForce 630i",
      "Rank": 654,
      "Benchmark": 0.07,
      "Samples": 1152,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/8642/NVIDIA-GeForce-7100--NVIDIA-nForce-630i"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 6200",
      "Rank": 655,
      "Benchmark": 0.07,
      "Samples": 1651,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9463/NVIDIA-GeForce-6200"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 6150",
      "Rank": 656,
      "Benchmark": 0.06,
      "Samples": 1030,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10968/NVIDIA-GeForce-6150"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 6100",
      "Rank": 657,
      "Benchmark": 0.06,
      "Samples": 845,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9213/NVIDIA-GeForce-6100"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7025 / nForce 630a",
      "Rank": 658,
      "Benchmark": 0.06,
      "Samples": 6927,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/9258/NVIDIA-GeForce-7025--NVIDIA-nForce-630a"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 6150SE nForce 430",
      "Rank": 659,
      "Benchmark": 0.05,
      "Samples": 7059,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7763/NVIDIA-GeForce-6150SE-nForce-430"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Nvidia",
      "Model": "GeForce 7150M / nForce 630M",
      "Rank": 660,
      "Benchmark": 0.05,
      "Samples": 352,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/10312/NVIDIA-GeForce-7150M--nForce-630M"
    },
    {
      "Type": "GPU",
      "Part Number": "",
      "Brand": "Intel",
      "Model": "Graphics Media Accelerator 3150",
      "Rank": 661,
      "Benchmark": 0,
      "Samples": 0,
      "URL": "https://gpu.userbenchmark.com/SpeedTest/7678/IntelR-Graphics-Media-Accelerator-3150"
    }
  ]

  const seedGallery = () => Gpu.bulkCreate(gpuData);

  module.exports = seedGallery;