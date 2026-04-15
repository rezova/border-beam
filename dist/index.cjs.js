"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const M=require("react/jsx-runtime"),u=require("react"),q={sm:{borderRadius:18,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1}},G={sm:{dark:{strokeOpacity:.48,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.33,innerOpacity:.46,bloomOpacity:.54,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:.96}},md:{dark:{strokeOpacity:.48,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.33,innerOpacity:.46,bloomOpacity:.54,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:.96}},line:{dark:{strokeOpacity:.72,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.72,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.2}}},ae={dark:{...G.md.dark},light:{...G.md.light}},T={colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}},gold:{border:[{color:"rgb(255, 215, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(230, 170, 30)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 230, 130)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(200, 150, 20)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 200, 60)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(235, 180, 50)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(180, 120, 20)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(250, 210, 90)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(215, 160, 40)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 215, 60)",secondary:"rgba(200, 150, 30, 0.98)"},spikeLt:{primary:"rgb(180, 130, 20)",secondary:"rgb(200, 150, 40)"}}},Q={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]},gold:{border:[{color:"rgb(255, 215, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(230, 170, 30)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(200, 150, 20)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(250, 210, 90)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(180, 120, 20)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(235, 180, 50)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 230, 130)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(215, 160, 40)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 215, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(230, 170, 30, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(200, 150, 20, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(250, 210, 90, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(180, 120, 20, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(235, 180, 50, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 230, 130, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(215, 160, 40, 0.3)",pos:"100% 27%",size:"11px 12px"}]}};function te(a){return Q[a].border.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function se(a){return Q[a].inner.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function ie(a){return T[a].border.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function ne(a){const e=T[a],r=a==="mono"?.225:.45;return e.border.map(o=>{const s=o.color.replace("rgb(","rgba(").replace(")",`, ${r})`);return`radial-gradient(ellipse ${o.size.split(" ").map(g=>{const l=parseInt(g);return`${Math.round(l*.9)}px`}).join(" ")} at ${o.pos}, ${s}, transparent)`}).join(`,
    `)}function ce(a,e){const r=T[a];return e?r.spike:r.spikeLt}const be={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},gold:{dark:[{color:"rgb(255, 215, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 170, 30)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 230, 130)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(200, 150, 20)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(250, 210, 90)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 120, 20)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(235, 180, 50)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(215, 160, 40)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 200, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(200, 150, 20)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(180, 130, 10)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(220, 170, 30)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(160, 110, 10)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(210, 160, 20)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(150, 100, 10)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(190, 140, 20)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(170, 120, 10)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(140, 90, 10)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}};function pe(a,e,r){return be[a][e?"dark":"light"].map(s=>{const i=s.offsetX===0?"":s.offsetX>0?` + ${s.offsetX}px`:` - ${Math.abs(s.offsetX)}px`,g=s.offsetY===0?"":s.offsetY>0?` + ${s.offsetY}px`:` - ${Math.abs(s.offsetY)}px`;return`radial-gradient(ellipse calc(${s.sizeW}px * var(--beam-w-${r})) calc(${s.sizeH}px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%${i}) calc(100%${g}), ${s.color}, transparent)`}).join(`,
       `)}const le={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],gold:[{color:"rgba(255, 215, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(230, 170, 30, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 230, 130, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(200, 150, 20, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(250, 210, 90, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 120, 20, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(235, 180, 50, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(215, 160, 40, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 200, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]};function fe(a,e){return le[a].map(o=>{const s=o.offsetX===0?"":o.offsetX>0?` + ${o.offsetX}px`:` - ${Math.abs(o.offsetX)}px`,i=o.offsetY===0?"":` - ${Math.abs(o.offsetY)}px`;return`radial-gradient(ellipse calc(${o.sizeW}px * var(--beam-w-${e})) calc(${o.sizeH}px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%${s}) calc(100%${i}), ${o.color}, transparent)`}).join(`,
    `)}const ge={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}},gold:{dark:{spikes:[{color1:"rgb(255, 215, 60)",color2:"rgb(255, 215, 60)"},{color1:"rgba(230, 170, 30, 0.59)",color2:"rgba(230, 170, 30, 0.29)"},{color1:"rgb(255, 230, 130)",color2:"rgb(255, 230, 130)"},{color1:"rgba(200, 150, 20, 0.91)",color2:"rgba(200, 150, 20, 0.45)"},{color1:"rgb(235, 180, 50)",color2:"rgb(235, 180, 50)"}]},light:{spikes:[{color1:"rgb(180, 130, 20)",color2:"rgba(180, 130, 20, 0.8)"},{color1:"rgba(200, 150, 30, 0.7)",color2:"rgba(200, 150, 30, 0.46)"},{color1:"rgb(160, 110, 10)",color2:"rgba(160, 110, 10, 0.82)"},{color1:"rgb(190, 140, 20)",color2:"rgba(190, 140, 20, 0.7)"},{color1:"rgb(150, 100, 10)",color2:"rgba(150, 100, 10, 0.78)"}]}}};function R(a,e){const r=a.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${e})`;const o=a.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return o?`rgba(${o[1]}, ${o[2]}, ${o[3]}, ${e})`:a}function O(a,e){const r=a.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${(parseFloat(r[4])*e).toFixed(2)})`;const o=a.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return o?`rgba(${o[1]}, ${o[2]}, ${o[3]}, ${e.toFixed(2)})`:a}function de(a,e,r){const o=ce(a,e),s=ge[a][e?"dark":"light"],i=a==="mono",g=i?.14:1,l=i?O(o.primary,.14):o.primary,k=i?O(o.primary,.09):o.primary,p=i?O(o.secondary,.12):o.secondary,x=i?R(o.secondary,.06):R(o.secondary,.49),t=s.spikes.map(z=>i?{color1:O(z.color1,g),color2:O(z.color2,g*.7)}:z),n=i?"12px":"0.8px",c=i?"14px":"2px",X=i?"12px":"1.2px",f=i?"10px":"0.6px",b=i?"42px":"92px",m=i?"38px":"72px",H=i?"40px":"85px",d=i?"32px":"60px",y=i?"12px":"1px",v=i?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 1)",W=i?"rgba(255, 255, 255, 0.45)":"rgba(255, 255, 255, 0.9)",Y=i?"rgba(255, 255, 255, 0.25)":"rgba(255, 255, 255, 0.5)",h=i?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.3)",w=i?"rgba(255, 255, 255, 0.06)":"rgba(255, 255, 255, 0.12)",$=i?"rgba(255, 255, 255, 0.015)":"rgba(255, 255, 255, 0.03)";if(e)return`radial-gradient(ellipse calc(${n} * var(--beam-spike-${r})) calc(${b} * var(--beam-h-${r})) at 8% calc(100% - 2px), ${l}, ${k} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r})) calc(35px * var(--beam-h-${r})) at 22% calc(100% - 4px), ${p}, ${x} 50%, transparent 95%),
       radial-gradient(ellipse calc(${c} * (2 - var(--beam-spike-${r}))) calc(${m} * var(--beam-h-${r})) at 36% calc(100% - 3px), ${t[0].color1}, ${t[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r})) calc(28px * var(--beam-h-${r})) at 50% calc(100% - 2px), ${t[1].color1}, ${t[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${X} * (2 - var(--beam-spike2-${r}))) calc(${H} * var(--beam-h-${r})) at 64% calc(100% - 4px), ${t[2].color1}, ${t[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r})) calc(45px * var(--beam-h-${r})) at 78% calc(100% - 2px), ${t[3].color1}, ${t[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${f} * (2 - var(--beam-spike-${r}))) calc(${d} * var(--beam-h-${r})) at 92% calc(100% - 3px), ${t[4].color1}, ${t[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${r})) calc(15px * var(--beam-spike2-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100% + 1px), ${v} 0%, ${W} 20%, ${Y} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${r})) calc(40px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%, ${h} 0%, ${w} 25%, ${$} 55%, transparent 80%)`;{const z=i?O(o.primary,.11):R(o.primary,.85),B=i?O(o.secondary,.09):R(o.secondary,.7);return`radial-gradient(ellipse calc(${n} * var(--beam-spike-${r})) calc(${b} * var(--beam-h-${r})) at 8% calc(100% - 2px), ${l}, ${z} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r})) calc(35px * var(--beam-h-${r})) at 22% calc(100% - 4px), ${p}, ${B} 50%, transparent 95%),
       radial-gradient(ellipse calc(${c} * (2 - var(--beam-spike-${r}))) calc(${m} * var(--beam-h-${r})) at 36% calc(100% - 3px), ${t[0].color1}, ${t[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r})) calc(28px * var(--beam-h-${r})) at 50% calc(100% - 2px), ${t[1].color1}, ${t[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${X} * (2 - var(--beam-spike2-${r}))) calc(${H} * var(--beam-h-${r})) at 64% calc(100% - 4px), ${t[2].color1}, ${t[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r})) calc(45px * var(--beam-h-${r})) at 78% calc(100% - 2px), ${t[3].color1}, ${t[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${y} * (2 - var(--beam-spike-${r}))) calc(${d} * var(--beam-h-${r})) at 92% calc(100% - 3px), ${t[4].color1}, ${t[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${r})) calc(32px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}function xe(a){const{size:e}=a;return e==="line"?ze(a):e==="sm"?me(a):$e(a)}function me(a){const{id:e,borderRadius:r,borderWidth:o,duration:s,strokeOpacity:i,innerOpacity:g,bloomOpacity:l,innerShadow:k,colorVariant:p,staticColors:x,brightness:t,saturation:n,hueRange:c,theme:X}=a,f=Math.max(0,r-o),b=p==="mono"?.5:1,m=i*b,H=g*b,d=l*b,y=x?"":`animation: beam-hue-shift-${e} 12s ease-in-out infinite;`,v=x?"":`
@keyframes beam-hue-shift-${e} {
  0% { filter: hue-rotate(-${c}deg) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)}); }
  50% { filter: hue-rotate(${c}deg) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)}); }
  100% { filter: hue-rotate(-${c}deg) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)}); }
}`,W=X==="dark",Y=W?`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,h=te(p),w=se(p),$=W?`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`,z=`conic-gradient(
    from var(--beam-angle-${e}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;return`
@property --beam-angle-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${e}"][data-active] {
  animation:
    beam-spin-${e} ${s}s linear infinite,
    beam-fade-in-${e} 0.6s ease forwards;
}

[data-beam="${e}"][data-fading] {
  animation:
    beam-spin-${e} ${s}s linear infinite,
    beam-fade-out-${e} 0.5s ease forwards;
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${f}px;
  padding: ${o}px;
  clip-path: inset(0 round ${r}px);
  background: ${Y},${h};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${e}) * ${m.toFixed(2)} * var(--beam-strength, 1));
  ${y}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${w};
  box-shadow: inset 0 0 5px 1px ${k};
  -webkit-mask-image: ${z};
  -webkit-mask-composite: source-over;
  mask-image: ${z};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${e}) * ${H.toFixed(2)} * var(--beam-strength, 1));
  ${y}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${f}px;
  clip-path: inset(0 round ${r}px);
  background: ${$};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${o}px;
  filter: blur(8px) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${d.toFixed(2)} * var(--beam-strength, 1));
}

@keyframes beam-spin-${e} {
  to { --beam-angle-${e}: 360deg; }
}

@keyframes beam-fade-in-${e} {
  to { --beam-opacity-${e}: 1; }
}

@keyframes beam-fade-out-${e} {
  from { --beam-opacity-${e}: 1; }
  to { --beam-opacity-${e}: 0; }
}
${v}
`}function $e(a){const{id:e,borderRadius:r,borderWidth:o,duration:s,strokeOpacity:i,innerOpacity:g,bloomOpacity:l,innerShadow:k,colorVariant:p,staticColors:x,brightness:t,saturation:n,hueRange:c,theme:X}=a,f=Math.max(0,r-o),b=p==="mono"?.5:1,m=i*b,H=g*b,d=l*b,y=x?"":`animation: beam-hue-shift-${e} 12s ease-in-out infinite;`,v=x?"":`
@keyframes beam-hue-shift-${e} {
  0% { filter: hue-rotate(-${c}deg) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)}); }
  50% { filter: hue-rotate(${c}deg) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)}); }
  100% { filter: hue-rotate(-${c}deg) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)}); }
}`,W=X==="dark",Y=W?`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,h=ie(p),w=ne(p),$=W?`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;return`
@property --beam-angle-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${e}"][data-active] {
  animation:
    beam-spin-${e} ${s}s linear infinite,
    beam-fade-in-${e} 0.6s ease forwards;
}

[data-beam="${e}"][data-fading] {
  animation:
    beam-spin-${e} ${s}s linear infinite,
    beam-fade-out-${e} 0.5s ease forwards;
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${f}px;
  padding: ${o}px;
  clip-path: inset(0 round ${r}px);
  background: ${Y},${h};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${e}) * ${m.toFixed(2)} * var(--beam-strength, 1));
  ${y}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${w};
  box-shadow: inset 0 0 9px 1px ${k};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${e}) * ${H.toFixed(2)} * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${y}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${f}px;
  clip-path: inset(0 round ${r}px);
  background: ${$};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${o}px;
  filter: blur(8px) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${d.toFixed(2)} * var(--beam-strength, 1));
}

@keyframes beam-spin-${e} {
  to { --beam-angle-${e}: 360deg; }
}

@keyframes beam-fade-in-${e} {
  to { --beam-opacity-${e}: 1; }
}

@keyframes beam-fade-out-${e} {
  from { --beam-opacity-${e}: 1; }
  to { --beam-opacity-${e}: 0; }
}
${v}
`}function ze(a){const{id:e,borderRadius:r,borderWidth:o,duration:s,strokeOpacity:i,innerOpacity:g,bloomOpacity:l,innerShadow:k,colorVariant:p,staticColors:x,brightness:t,saturation:n,hueRange:c,theme:X}=a,f=Math.max(0,r-o),b=X==="dark",m=i,H=g,d=l,y=x?"":`animation: beam-hue-shift-${e} 12s ease-in-out infinite;`,v=x?"":`animation: beam-hue-shift-bloom-${e} 8s ease-in-out infinite;`,W=x?"":`
@keyframes beam-hue-shift-${e} {
  0% { filter: hue-rotate(-${c}deg) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)}); }
  50% { filter: hue-rotate(${c}deg) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)}); }
  100% { filter: hue-rotate(-${c}deg) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${e} {
  0% { filter: blur(8px) hue-rotate(-${c+10}deg) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)}); }
  50% { filter: blur(8px) hue-rotate(${c+10}deg) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)}); }
  100% { filter: blur(8px) hue-rotate(-${c+10}deg) brightness(${t.toFixed(2)}) saturate(${n.toFixed(2)}); }
}`,Y=b?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${e})) calc(28px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${e})) calc(28px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,h=pe(p,b,e),w=fe(p,e),$=de(p,b,e),z=p==="mono"?"filter: blur(6px);":"";return`
@property --beam-x-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${e}"][data-active] {
  animation:
    beam-travel-${e} ${s}s linear infinite,
    beam-edge-fade-${e} ${s}s linear infinite,
    beam-breathe-${e} ${(s*1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${e} ${(s*1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${e} ${(s*1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${e} 0.6s ease forwards;
}

[data-beam="${e}"][data-fading] {
  animation:
    beam-travel-${e} ${s}s linear infinite,
    beam-edge-fade-${e} ${s}s linear infinite,
    beam-breathe-${e} ${(s*1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${e} ${(s*1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${e} ${(s*1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${e} 0.5s ease forwards;
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${f}px;
  padding: ${o}px;
  clip-path: inset(0 round ${r}px);
  background: ${Y}, ${h};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${e}) * var(--beam-edge-${e}) * ${m.toFixed(2)} * var(--beam-strength, 1));
  ${y}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${w};
  box-shadow: inset 0 0 9px 1px ${k};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${e}) * var(--beam-edge-${e}) * ${H.toFixed(2)} * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${y}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${f}px;
  clip-path: inset(0 round ${r}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${e})) calc(110px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${e})) calc(110px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${$};
  ${z}
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * var(--beam-edge-${e}) * ${d.toFixed(2)} * var(--beam-strength, 1));
  ${v}
}

@keyframes beam-travel-${e} {
  0%   { --beam-x-${e}: 0.06;  --beam-w-${e}: 0.5; }
  10%  { --beam-x-${e}: 0.15;  --beam-w-${e}: 0.8; }
  20%  { --beam-x-${e}: 0.25;  --beam-w-${e}: 1.1; }
  30%  { --beam-x-${e}: 0.35;  --beam-w-${e}: 1.3; }
  40%  { --beam-x-${e}: 0.44;  --beam-w-${e}: 1.45; }
  50%  { --beam-x-${e}: 0.5;   --beam-w-${e}: 1.5; }
  60%  { --beam-x-${e}: 0.56;  --beam-w-${e}: 1.45; }
  70%  { --beam-x-${e}: 0.65;  --beam-w-${e}: 1.3; }
  80%  { --beam-x-${e}: 0.75;  --beam-w-${e}: 1.1; }
  90%  { --beam-x-${e}: 0.85;  --beam-w-${e}: 0.8; }
  100% { --beam-x-${e}: 0.94;  --beam-w-${e}: 0.5; }
}

@keyframes beam-edge-fade-${e} {
  0%    { --beam-edge-${e}: 0; }
  12.5% { --beam-edge-${e}: 0; }
  32.5% { --beam-edge-${e}: 1; }
  67.5% { --beam-edge-${e}: 1; }
  87.5% { --beam-edge-${e}: 0; }
  100%  { --beam-edge-${e}: 0; }
}

@keyframes beam-breathe-${e} {
  0%, 100% { --beam-h-${e}: 0.8; }
  25%      { --beam-h-${e}: 1.25; }
  55%      { --beam-h-${e}: 0.85; }
  80%      { --beam-h-${e}: 1.3; }
}

@keyframes beam-spike-${e} {
  0%   { --beam-spike-${e}: 0.8; }
  25%  { --beam-spike-${e}: 1.3; }
  50%  { --beam-spike-${e}: 0.9; }
  75%  { --beam-spike-${e}: 1.4; }
  100% { --beam-spike-${e}: 0.8; }
}

@keyframes beam-spike2-${e} {
  0%   { --beam-spike2-${e}: 1.2; }
  25%  { --beam-spike2-${e}: 0.7; }
  50%  { --beam-spike2-${e}: 1.4; }
  75%  { --beam-spike2-${e}: 0.8; }
  100% { --beam-spike2-${e}: 1.2; }
}

@keyframes beam-fade-in-${e} {
  to { --beam-opacity-${e}: 1; }
}

@keyframes beam-fade-out-${e} {
  from { --beam-opacity-${e}: 1; }
  to { --beam-opacity-${e}: 0; }
}
${W}
`}function ue(){const[a,e]=u.useState(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return u.useEffect(()=>{if(typeof window>"u")return;const r=window.matchMedia("(prefers-color-scheme: dark)"),o=s=>{e(s.matches?"dark":"light")};return r.addEventListener("change",o),()=>r.removeEventListener("change",o)},[]),a}function he(a,e){return a==="auto"?e:a}const V=u.forwardRef(function({children:e,size:r="md",colorVariant:o="colorful",theme:s="dark",staticColors:i=!1,duration:g,active:l=!0,borderRadius:k,brightness:p=1.3,saturation:x,hueRange:t=30,strength:n=1,className:c,style:X,onActivate:f,onDeactivate:b,onAnimationEnd:m,...H},d){const v=u.useId().replace(/:/g,"-"),W=ue(),Y=u.useRef(null),[h,w]=u.useState(l),[$,z]=u.useState(!1),[B,J]=u.useState(null);u.useEffect(()=>{if(k!=null)return;const S=Y.current;if(!S)return;const C=()=>{const K=S.firstElementChild;if(!K)return;const oe=getComputedStyle(K),I=parseFloat(oe.borderTopLeftRadius);!isNaN(I)&&I>0&&J(I)};C();const D=new MutationObserver(C);return D.observe(S,{childList:!0,subtree:!1}),()=>D.disconnect()},[k,e]),u.useEffect(()=>{l&&!h&&!$?w(!0):!l&&h&&!$&&z(!0)},[l,h,$]);const U=u.useCallback(S=>{const C=S.animationName;C.includes("fade-out")?(w(!1),z(!1),b==null||b()):C.includes("fade-in")&&(f==null||f()),m==null||m(S)},[f,b,m]),L=he(s,W),F=G[r][L],j=q[r],P=k??B??j.borderRadius,_=g??(r==="line"?2.4:1.96),E=x??F.saturation,N=r==="line"?Math.min(t,13):t,A=o==="mono"?!0:i,Z=u.useMemo(()=>xe({id:v,borderRadius:P,borderWidth:j.borderWidth,duration:_,strokeOpacity:F.strokeOpacity,innerOpacity:F.innerOpacity,bloomOpacity:F.bloomOpacity,innerShadow:F.innerShadow,size:r,colorVariant:o,staticColors:A,brightness:p,saturation:E,hueRange:N,theme:L}),[v,P,j.borderWidth,_,F.strokeOpacity,F.innerOpacity,F.bloomOpacity,F.innerShadow,r,o,A,p,E,N,L]),ee=u.useCallback(S=>{Y.current=S,typeof d=="function"?d(S):d&&(d.current=S)},[d]),re={...X??{},"--beam-strength":Math.max(0,Math.min(1,n))};return M.jsxs(M.Fragment,{children:[M.jsx("style",{children:Z}),M.jsxs("div",{...H,ref:ee,"data-beam":v,"data-active":h&&!$?"":void 0,"data-fading":$?"":void 0,className:c,style:re,onAnimationEnd:U,children:[e,M.jsx("div",{"data-beam-bloom":!0})]})]})});exports.BorderBeam=V;exports.default=V;exports.sizePresets=q;exports.sizeThemePresets=G;exports.themeColors=ae;
