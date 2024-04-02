let com_idc_params = {
  "project": {
    "name": "",
    "version": ""
  },
  "options": {
    "debugMode": {
      "active": true,
      "showInspector": true,
    },
    "browserMode": {
        "active": true,
        "simulate": {
            "active": false,
            "mode": "",
            "objects": {
            }
        }
    },
    "mandatoryPopUp": {
      "active": false,
      "element": {
        "id": ""
      }
    },
    "dynamicPresentation": {
      "source": {
        "contentTargeting": {
          "active": false,
          "type": "custom-field",
          "object": "TSF_vod__c",
          "field": "ContentTargeting__c",
          "menu": {
            "standard": {
              "id": "mainMenu"
            },
            "dynamic": {
              "mode": "auto",
              "functionName": ""
            }
          },
          "nonWorkingLinkPopUp": {
            "active": true
          },
          "standaloneModal": {
            "treatStandaloneModalsAsMainSlides": true
          }
        },
        "myPresentations": {
          "active": false,
          "menu": {
            "standard": {
              "id": "mainMenu"
            },
            "dynamic": {
              "mode": "auto",
              "functionName": ""
            }
          },
          "nonWorkingLinkPopUp": {
            "active": true
          },
          "standaloneModal": {
            "treatStandaloneModalsAsMainSlides": true
          }
        },
        "externalFunction": {
          "active": false,
          "functionName": "setProfile",
          "menu": {
            "standard": {
              "id": "mainMenu"
            },
            "dynamic": {
              "mode": "custom",
              "functionName": "setDynamicMenu"
            }
          },
          "nonWorkingLinkPopUp": {
            "active": true
          },
          "standaloneModal": {
            "treatStandaloneModalsAsMainSlides": true
          }
        },
        "hardcodedProfiles": {
          "active": false,
          "profiles": [
          ],
          "default": "",
          "menu": {
            "standard": {
              "id": "mainMenu"
            },
            "dynamic": {
              "mode": "auto",
              "functionName": ""
            }
          },
          "nonWorkingLinkPopUp": {
            "active": true
          },
          "standaloneModal": {
            "treatStandaloneModalsAsMainSlides": true
          }
        }
      },
      "precedence": ["myPresentations", "customField", "hardcodedProfiles", "externalFunction"],
    },
  },
  "commonHTML": {
    "active": true,
    "elements": [
    ]
  },
  "slides": [
  ],
  "standaloneModalGroups": {
    "active": false,
    "indexModal": {
      "id": null,
      "openButton": null,
    },
    "groups": [],
  },
  "utilitiesMenu": {
    "active": false,
    "sets": {
      "mainSlide": {
        "buttonViewState": null,
        "centerGroup": [],
        "rightGroup": [],
      },
      "standaloneModal": {
        "buttonViewState": null,
        "appendCloseButtonToRightGroup": null,
        "centerGroup": [],
        "rightGroup": [],
      },
      "regularModals": {
        "bringToFront": {
          "dualButtonForActiveModal": {
            "active": null
          },
          "referencesButton": {
            "active": null,
            "excludeModals": []
          }
        }
      }
    },
  },
  "emailCart": {
    "active": false,
    "components": {
      "openButton": {
        "id": "",
      },
      "modal": {
        "id": ""
      },
      "emailButton": {
        "id": "",
      },
    },
    "vaultInstance": {
        "development": {
          "url": ""
        },
        "release": {
          "url": null
        },
    },
    "templates": [],
    "fragments": []
  },
  "references": {
    "active": false,
    "components": {
      "openButton": {
        "id": "",
      },
      "modal": {
        "id": ""
      },
    },
    "content": {
      "landscape": null,
      "portrait": null
    }
  },
  "templates": {
    "slide": {
      "id": "",
      "description": "",
      "pdf": "pdf.pdf",
      "browser": {
        "folder": ""
      },
      "player": {
        "zipName": ""
      },
      "standaloneModal": {
        "id": ""
      },
    },
  }
}