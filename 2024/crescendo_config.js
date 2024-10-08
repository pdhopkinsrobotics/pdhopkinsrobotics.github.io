var currentdate = new Date(); 
var config_data = `
{
  "dataFormat": "tsv",
  "enable_google_sheets": "true",
  "title": "Scouting PASS 2024",
  "page_title": "Technocrats Scouting",
  "checkboxAs": "10",
  "prematch": [
   { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024cur",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1 ",
        "b1": "Blue-1<br>",
        "r2": "Red-2 ",
        "b2": "Blue-2<br>",
        "r3": "Red-3 ",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],
  "auton": [
    { "name": "Left Starting Zone?",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Amp Misses",
      "code": "aam",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "ass",
      "type": "counter"
    },
    { "name": "Speaker Misses",
      "code": "asm",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Amp Misses",
      "code": "tam",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Speaker Misses",
      "code": "tsm",
      "type": "counter"
    },
    { "name": "Amplified Scores",
      "code": "tssas",
      "type": "counter"
    },
    { "name": "Amplified Misses",
      "code": "tssam",
      "type": "counter"
    },
    { "name": "Trap Scores",
      "code": "tts",
      "type": "counter"
    },
    { "name": "Trap Misses",
      "code": "ttm",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Stage Timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "c": "Climbed<br>",
        "f": "Failed climb<br>",
        "x": "Nothing"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "e": "Above Average<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "e": "Above Average<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Died/Immobilized?",
      "code": "die",
      "type": "bool"
    },
    { "name": "Good fit for us?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }

  ]
}`;
