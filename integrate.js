for (const rows of [EXPANSION_A,EXPANSION_B,EXPANSION_C,EXPANSION_D,SOURCE_EXPANSION_1,SOURCE_EXPANSION_2,SOURCE_EXPANSION_3]) for(const a of rows) WORDS.push({id:WORDS.length,word:a[0],meaning:a[1],root:a[2],distractors:a[3].split(','),variants:[{text:a[4],clue:a[5]},{text:a[6],clue:a[7]}]});
if(typeof EXPANSION_A_EXTRA!=='undefined')Object.assign(EXTRA,EXPANSION_A_EXTRA);
if(typeof EXPANSION_B_EXTRA!=='undefined')Object.assign(EXTRA,EXPANSION_B_EXTRA);
if(typeof EXPANSION_C_EXTRA!=='undefined')Object.assign(EXTRA,EXPANSION_C_EXTRA);
if(typeof EXPANSION_D_EXTRA!=='undefined')Object.assign(EXTRA,EXPANSION_D_EXTRA);

Object.assign(EXTRA,SOURCE_EXPANSION_1_EXTRA,SOURCE_EXPANSION_2_EXTRA,SOURCE_EXPANSION_3_EXTRA);
