{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "nutzer": {
        "type": "object",
        "properties": {
          "alter": {
            "type": "object",
            "properties": {
              "frage": {
                "type": "string"
              },
              "antwort": {
                "type": "integer"
              }
            },
            "required": [
              "frage",
              "antwort"
            ]
          },
          "nutzung": {
            "type": "object",
            "properties": {
              "frage": {
                "type": "string"
              },
              "antwort": {
                "type": "integer"
              }
            },
            "required": [
              "frage",
              "antwort"
            ]
          },
          "interesse": {
            "type": "object",
            "properties": {
              "frage": {
                "type": "string"
              },
              "antwort": {
                "type": "integer"
              }
            },
            "required": [
              "frage",
              "antwort"
            ]
          }
        },
        "required": [
          "alter",
          "nutzung",
          "interesse"
        ]
      },
      "personenbezogene_aspekte": {
        "type": "object",
        "properties": {
          "selbstständigkeit": {
            "type": "object",
            "properties": {
              "frage": {
                "type": "string"
              },
              "antwort": {
                "type": "integer"
              }
            },
            "required": [
              "frage",
              "antwort"
            ]
          },
          "sicherheit": {
            "type": "object",
            "properties": {
              "frage": {
                "type": "string"
              },
              "antwort": {
                "type": "integer"
              }
            },
            "required": [
              "frage",
              "antwort"
            ]
          },
          "gesellschaftlicheTeilnahme": {
            "type": "object",
            "properties": {
              "frage": {
                "type": "string"
              },
              "antwort": {
                "type": "integer"
              }
            },
            "required": [
              "frage",
              "antwort"
            ]
          },
          "medikamentenkonsum": {
            "type": "object",
            "properties": {
              "frage": {
                "type": "string"
              },
              "antwort": {
                "type": "integer"
              }
            },
            "required": [
              "frage",
              "antwort"
            ]
          },
          "akzeptanz": {
            "type": "object",
            "properties": {
              "frage": {
                "type": "string"
              },
              "antwort": {
                "type": "integer"
              }
            },
            "required": [
              "frage",
              "antwort"
            ]
          },
          "körperlicheEntlastung": {
            "type": "object",
            "properties": {
              "frage": {
                "type": "string"
              },
              "antwort": {
                "type": "integer"
              }
            },
            "required": [
              "frage",
              "antwort"
            ]
          },
          "psychischeEntlastung": {
            "type": "object",
            "properties": {
              "frage": {
                "type": "string"
              },
              "antwort": {
                "type": "integer"
              }
            },
            "required": [
              "frage",
              "antwort"
            ]
          },
          "finanzielleEntlastung": {
            "type": "object",
            "properties": {
              "frage": {
                "type": "string"
              },
              "antwort": {
                "type": "integer"
              }
            },
            "required": [
              "frage",
              "antwort"
            ]
          },
          "fürsorgeEntlastung": {
            "type": "object",
            "properties": {
              "frage": {
                "type": "string"
              },
              "antwort": {
                "type": "integer"
              }
            },
            "required": [
              "frage",
              "antwort"
            ]
          }
        },
        "required": [
          "selbstständigkeit",
          "sicherheit",
          "gesellschaftlicheTeilnahme",
          "medikamentenkonsum",
          "akzeptanz",
          "körperlicheEntlastung",
          "psychischeEntlastung",
          "finanzielleEntlastung",
          "fürsorgeEntlastung"
        ]
      }
    },
    "required": [
      "nutzer",
      "personenbezogene_aspekte"
    ]
  }